const { test, expect } = require('@playwright/test');

async function prepare(page) {
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#oposicionSelect option')).toHaveCount(4);
}

async function makeLegacyProgress(page) {
  return page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
    const themeId = ope.themes[0].id;
    const question = ope.themeTests[themeId][0];
    return {
      [`uc3m-aux-admin-2026:test:${themeId}`]: {
        answers: { [question.id]: question.options[0].letter },
        corrected: true,
        score: { ok: 1, bad: 0, blank: Math.max(0, ope.themeTests[themeId].length - 1), grade: 0.33 }
      }
    };
  });
}

async function openUc3mTests(page) {
  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  const open = page.locator('#openSidebar');
  if (await open.isVisible()) await open.click();
  await page.locator('.menu button[data-view="tests"]').click();
  const close = page.locator('#closeSidebar');
  if (await close.isVisible()) await close.click();
  await expect(page.locator('#viewTitle')).toHaveText('Test por temas');
}

test('mantiene el formato histórico y crea metadatos v2', async ({ page }) => {
  await prepare(page);
  const legacyProgress = await makeLegacyProgress(page);
  await page.evaluate(progress => {
    localStorage.clear();
    localStorage.setItem('opowebProgress', JSON.stringify(progress));
  }, legacyProgress);
  await page.reload({ waitUntil: 'domcontentloaded' });

  await openUc3mTests(page);
  await expect(page.locator('.question input[type="radio"]:checked').first()).toBeVisible();
  await expect(page.locator('.result-box').first()).toBeVisible();

  const result = await page.evaluate(() => ({
    progress: JSON.parse(localStorage.getItem('opowebProgress')),
    meta: JSON.parse(localStorage.getItem('opowebProgressMeta')),
    audit: window.OPOWEB_STORAGE_AUDIT_V82
  }));
  expect(result.progress).toEqual(legacyProgress);
  expect(result.meta.formatVersion).toBe(2);
  expect(result.meta.checksum).toMatch(/^fnv1a-[0-9a-f]{8}$/);
  expect(result.audit.version).toBe('v0.82.0');
});

test('recupera automáticamente una copia válida si el principal está corrupto', async ({ page }) => {
  await prepare(page);
  const legacyProgress = await makeLegacyProgress(page);
  await page.evaluate(progress => {
    localStorage.clear();
    localStorage.setItem('opowebProgress', '{json roto');
    localStorage.setItem('opowebProgressBackup', JSON.stringify(progress));
  }, legacyProgress);
  await page.reload({ waitUntil: 'domcontentloaded' });

  const recovered = await page.evaluate(() => ({
    primary: JSON.parse(localStorage.getItem('opowebProgress')),
    status: window.OPOWEB_STORAGE.status()
  }));
  expect(recovered.primary).toEqual(legacyProgress);
  expect(recovered.status.lastRecovery.recovered).toBe(true);

  const open = page.locator('#openSidebar');
  if (await open.isVisible()) await open.click();
  await page.locator('.menu button[data-view="progreso"]').click();
  const close = page.locator('#closeSidebar');
  if (await close.isVisible()) await close.click();
  await expect(page.locator('#storageAuditV82')).toContainText('Copia recuperada');
});

test('exporta formato v2 e importa conservando una copia anterior', async ({ page }) => {
  await prepare(page);
  const legacyProgress = await makeLegacyProgress(page);
  await page.evaluate(progress => {
    localStorage.clear();
    localStorage.setItem('opowebProgress', JSON.stringify(progress));
  }, legacyProgress);
  await page.reload({ waitUntil: 'domcontentloaded' });

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#exportProgress').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/^opoweb-progreso-v2-\d{4}-\d{2}-\d{2}\.json$/);
  const stream = await download.createReadStream();
  let exported = '';
  for await (const chunk of stream) exported += chunk.toString();
  const payload = JSON.parse(exported);
  expect(payload.formatVersion).toBe(2);
  expect(payload.progress).toEqual(legacyProgress);

  const replacement = {
    'carranque-aux-admin-2026:test:carranque-t1': {
      answers: { c1: 'C' },
      corrected: false,
      score: null
    }
  };
  const importPayload = await page.evaluate(progress => window.OPOWEB_STORAGE.exportPayload(progress), replacement);
  page.once('dialog', dialog => dialog.accept());
  await page.locator('#importProgress').setInputFiles({
    name: 'progreso-v2.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify(importPayload))
  });
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress')))).toEqual(replacement);
  const backup = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgressBackup')));
  expect(backup).toEqual(legacyProgress);
});
