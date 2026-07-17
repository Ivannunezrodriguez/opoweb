const { test, expect } = require('@playwright/test');

const EXPECTED_OPE_IDS = [
  'puebla-aux-admin-2026',
  'carranque-aux-admin-2026',
  'diputacion-toledo-admin-2026',
  'uc3m-aux-admin-2026'
];

const VIEW_TITLES = {
  proceso: 'Proceso y enlaces',
  temario: 'Temario',
  normas: 'Normas',
  tests: 'Test por temas',
  supuestos: 'Supuestos prácticos',
  simulacros: /Simulacros/,
  progreso: 'Progreso'
};

async function openNavigation(page) {
  const trigger = page.locator('#openSidebar');
  if (await trigger.isVisible()) {
    await trigger.click();
    await expect(page.locator('#sidebar')).toHaveClass(/open/);
  }
}

async function closeNavigation(page) {
  const close = page.locator('#closeSidebar');
  if (await close.isVisible() && await page.locator('#sidebar').evaluate(node => node.classList.contains('open'))) {
    await close.click();
    await expect(page.locator('#sidebar')).not.toHaveClass(/open/);
  }
}

async function navigateTo(page, view) {
  await openNavigation(page);
  await page.locator(`.menu button[data-view="${view}"]`).click();
  await closeNavigation(page);
  await expect(page.locator('#viewTitle')).toHaveText(VIEW_TITLES[view]);
  await expect(page.locator('#content')).toBeVisible();
}

async function waitForBoot(page) {
  await expect.poll(
    () => page.evaluate(() => window.OPOWEB_BOOT_V83?.status || 'missing'),
    { timeout: 60_000 }
  ).toBe('ready');
}

async function loadApplication(page) {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await expect(page.locator('#content')).toBeVisible();
  await expect(page.locator('#oposicionSelect option')).toHaveCount(4);
  return pageErrors;
}

test('carga la versión v0.89.3 y las cuatro OPE', async ({ page }, testInfo) => {
  const pageErrors = await loadApplication(page);
  const optionValues = await page.locator('#oposicionSelect option').evaluateAll(options => options.map(option => option.value));
  expect(optionValues).toEqual(EXPECTED_OPE_IDS);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.89.3');

  const bootAudit = await page.evaluate(() => {
    const manifest = window.OPOWEB_ASSET_MANIFEST_V83;
    const boot = window.OPOWEB_BOOT_V83;
    const loadedPaths = [...document.querySelectorAll('script[data-opoweb-managed="v83"]')].map(script => new URL(script.src).pathname);
    const expectedPaths = manifest.scripts.map(source => new URL(source, location.href).pathname);
    return {
      status: boot.status,
      failed: boot.failed,
      loaded: boot.loaded.length,
      declared: manifest.scripts.length,
      applicationVersion: manifest.applicationVersion,
      pedagogyVersion: window.OPOWEB_PEDAGOGY_V90?.version,
      pedagogyStatus: window.OPOWEB_PEDAGOGY_V90?.status,
      percentagesWithdrawn: window.OPOWEB_PEDAGOGY_V90?.completenessPercentagesWithdrawn,
      pueblaT01Status: window.OPOWEB_PUEBLA_T01_V90?.status,
      pueblaT01Questions: window.OPOWEB_PUEBLA_T01_V90?.traceableQuestions,
      pueblaT01Remaining: window.OPOWEB_PUEBLA_T01_V90?.remainingPueblaThemes,
      duplicateScripts: window.OPOWEB_LOADER_AUDIT_V83.duplicateScripts,
      orderMatches: JSON.stringify(loadedPaths) === JSON.stringify(expectedPaths)
    };
  });

  expect(bootAudit.status).toBe('ready');
  expect(bootAudit.failed).toBeNull();
  expect(bootAudit.loaded).toBe(bootAudit.declared);
  expect(bootAudit.applicationVersion).toBe('v0.89.3');
  expect(bootAudit.pedagogyVersion).toBe('v0.89.3');
  expect(bootAudit.pedagogyStatus).toBe('RESUMEN_Y_PRACTICA_NO_FUENTE_UNICA');
  expect(bootAudit.percentagesWithdrawn).toBe(true);
  expect(bootAudit.pueblaT01Status).toBe('APROBADO_POR_USUARIO_E_INTEGRADO');
  expect(bootAudit.pueblaT01Questions).toBe(30);
  expect(bootAudit.pueblaT01Remaining).toBe(18);
  expect(bootAudit.duplicateScripts).toBe(0);
  expect(bootAudit.orderMatches).toBe(true);

  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  for (const view of Object.keys(VIEW_TITLES)) await navigateTo(page, view);
  await expect(page.locator('#loaderAuditV83')).toContainText('LISTO');
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(horizontalOverflow, `Desbordamiento horizontal en ${testInfo.project.name}`).toBeFalsy();
  expect(pageErrors).toEqual([]);
});

test('La Puebla muestra un tema aprobado y dieciocho en revisión', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('puebla-aux-admin-2026');
  await navigateTo(page, 'temario');

  await expect(page.locator('#programmeStatusV90')).toHaveCount(1);
  await expect(page.locator('#programmeStatusV90')).toContainText('La Puebla · 1 tema aprobado');
  await expect(page.locator('#programmeStatusV90')).toContainText('18 temas en revisión');
  await expect(page.locator('#programmeStatusV90')).toContainText('Reconstrucción manual tema a tema');
  await expect(page.locator('.theme-item')).toHaveCount(19);
  await expect(page.locator('body')).not.toContainText('Fuente teórica principal');
  expect(pageErrors).toEqual([]);
});

for (const config of [
  { id: 'carranque-aux-admin-2026', label: 'Carranque · revisión abierta', themes: 20 },
  { id: 'diputacion-toledo-admin-2026', label: 'Diputación · revisión abierta', themes: 40 },
  { id: 'uc3m-aux-admin-2026', label: 'UC3M · revisión abierta', themes: 20 }
]) {
  test(`${config.label} conserva el estado de revisión pedagógica`, async ({ page }) => {
    const pageErrors = await loadApplication(page);
    await page.locator('#oposicionSelect').selectOption(config.id);
    await navigateTo(page, 'temario');
    await expect(page.locator('#programmeStatusV90')).toHaveCount(1);
    await expect(page.locator('#programmeStatusV90')).toContainText(config.label);
    await expect(page.locator('#programmeStatusV90')).toContainText('Resumen y práctica');
    await expect(page.locator('.theme-item')).toHaveCount(config.themes);
    await expect(page.locator('body')).not.toContainText('Fuente teórica principal');
    expect(pageErrors).toEqual([]);
  });
}

test('el tema 1 de La Puebla muestra el manual aprobado artículo por artículo', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('puebla-aux-admin-2026');
  await navigateTo(page, 'temario');
  await page.locator('.theme-item').first().click();

  await expect(page.locator('#pueblaT01ApprovalV90')).toContainText('Tema 1 aprobado por el usuario');
  await expect(page.locator('#pueblaT01ApprovalV90')).toContainText('Cobertura arts. 10–55 y 166–169');
  await expect(page.locator('#pueblaT01ManualV90')).toBeVisible();
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('APROBADO POR EL USUARIO', { timeout: 30_000 });
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('Matriz epígrafe–norma–artículos');
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('Artículo 10 · dignidad e interpretación');
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('Artículo 55.2 · suspensión individual');
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('Artículo 169 · límite temporal');
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('Tema cerrado: SÍ, aprobado por el usuario');

  const audit = await page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
    const theme = ope.themes.find(item => Number(item.number) === 1);
    const questions = ope.themeTests[theme.id];
    return {
      status: theme.manualReview?.status,
      approvedAt: theme.manualReview?.approvedAt,
      questionCount: questions.length,
      traceable: questions.filter(item => item.traceable && item.sourceArticle).length
    };
  });
  expect(audit.status).toBe('APROBADO_POR_USUARIO');
  expect(audit.approvedAt).toBe('2026-07-17');
  expect(audit.questionCount).toBe(30);
  expect(audit.traceable).toBe(30);
  expect(pageErrors).toEqual([]);
});

test('el tema 2 de La Puebla continúa en revisión', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('puebla-aux-admin-2026');
  await navigateTo(page, 'temario');
  await page.locator('.theme-item').nth(1).click();
  await expect(page.locator('#content')).toContainText('Tema en revisión pedagógica');
  await expect(page.locator('#content')).toContainText('Resumen del epígrafe · revisión pendiente');
  await expect(page.locator('#pueblaT01ManualV90')).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});

test('guarda y recupera el progreso tras recargar', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  await navigateTo(page, 'tests');
  const firstAnswer = page.locator('.question input[type="radio"]').first();
  await expect(firstAnswer).toBeVisible();
  await firstAnswer.check();
  await page.locator('#correctSet').click();
  await expect(page.locator('.result-box').first()).toBeVisible();
  const savedBeforeReload = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'));
  const keys = Object.keys(savedBeforeReload).filter(key => key.startsWith('uc3m-aux-admin-2026:test:'));
  expect(keys.length).toBeGreaterThan(0);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  await navigateTo(page, 'tests');
  await expect(page.locator('.question input[type="radio"]:checked').first()).toBeVisible();
  const savedAfterReload = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'));
  expect(savedAfterReload).toEqual(savedBeforeReload);
  expect(pageErrors).toEqual([]);
});

test('instala la PWA v0.89.3 y mantiene el manual sin conexión', async ({ page, context }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'La prueba PWA completa se ejecuta una vez en Chromium de escritorio.');
  const pageErrors = await loadApplication(page);
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) {
      await new Promise(resolve => {
        const timer = setTimeout(resolve, 10_000);
        navigator.serviceWorker.addEventListener('controllerchange', () => { clearTimeout(timer); resolve(); }, { once: true });
      });
    }
  });
  if (!await page.evaluate(() => Boolean(navigator.serviceWorker.controller))) {
    await page.reload({ waitUntil: 'domcontentloaded' });
    await waitForBoot(page);
    await page.evaluate(() => navigator.serviceWorker.ready);
  }
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBeTruthy();
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('opoweb-v97')), { timeout: 30_000 }).toBeTruthy();
  const cachedPaths = await page.evaluate(async () => {
    const cache = await caches.open('opoweb-v97');
    return (await cache.keys()).map(request => new URL(request.url).pathname);
  });
  for (const expected of [
    '/index.html','/assets/js/asset-manifest-v83.js','/assets/js/loader-v83.js',
    '/assets/js/puebla-teoria-v86-bloque1.js','/assets/js/ui-v89-release.js',
    '/assets/js/puebla-rebuild-t01-v90.js','/assets/js/ui-v90-pedagogia.js',
    '/docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md','/manifest.webmanifest'
  ]) expect(cachedPaths).toContain(expected);

  const offlineProgress = { 'puebla-aux-admin-2026:test:offline-check': { answers: { prueba: 'A' }, corrected: false, score: null } };
  await page.evaluate(value => localStorage.setItem('opowebProgress', JSON.stringify(value)), offlineProgress);
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.89.3');
  await page.locator('#oposicionSelect').selectOption('puebla-aux-admin-2026');
  await navigateTo(page, 'temario');
  await page.locator('.theme-item').first().click();
  await expect(page.locator('#pueblaT01ManualBody')).toContainText('APROBADO POR EL USUARIO', { timeout: 30_000 });
  const restored = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'));
  expect(restored).toEqual(offlineProgress);
  expect(pageErrors).toEqual([]);
  await context.setOffline(false);
});