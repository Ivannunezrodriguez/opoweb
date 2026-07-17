const { test, expect } = require('@playwright/test');

async function waitForBoot(page) {
  await expect.poll(
    () => page.evaluate(() => window.OPOWEB_BOOT_V83?.status || 'missing'),
    { timeout: 45_000 }
  ).toBe('ready');
}

async function load(page) {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  return errors;
}

async function openMenu(page) {
  const button = page.locator('#openSidebar');
  if (await button.isVisible()) await button.click();
}

async function closeMenu(page) {
  const button = page.locator('#closeSidebar');
  if (await button.isVisible() && await page.locator('#sidebar').evaluate(node => node.classList.contains('open'))) await button.click();
}

async function navigate(page, view) {
  await openMenu(page);
  await page.locator(`.menu button[data-view="${view}"]`).click();
  await closeMenu(page);
}

for (const config of [
  {
    id: 'puebla-aux-admin-2026',
    name: 'La Puebla',
    themes: 19,
    questions: 570,
    practicals: 20,
    firstTitle: 'La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.',
    releaseBadge: 'La Puebla 19/19',
    main: 50,
    reserve: 5,
    minutes: 60,
    correct: 0.20,
    wrong: -0.05,
    practicalCoverage: [1, 19]
  },
  {
    id: 'carranque-aux-admin-2026',
    name: 'Carranque',
    themes: 20,
    questions: 600,
    practicals: 18,
    firstTitle: 'La Constitución española de 1978. Reforma de la Constitución. Tribunal Constitucional. Derechos y deberes. El defensor del pueblo. El poder legislativo. El gobierno y la Administración. El poder judicial.',
    releaseBadge: 'Carranque 20/20',
    main: 80,
    reserve: 5,
    minutes: 90,
    correct: 0.25,
    wrong: -0.08,
    practicalCoverage: [3, 20]
  }
]) {
  test(`${config.name} queda auditada al 99 % con programa y examen oficiales`, async ({ page }) => {
    const errors = await load(page);
    await page.locator('#oposicionSelect').selectOption(config.id);
    await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.89.1');

    await navigate(page, 'temario');
    await expect(page.locator('#programmeStatusV89')).toHaveCount(1);
    await expect(page.locator('#programmeStatusV89')).toContainText(config.releaseBadge);
    await expect(page.locator('#theoryStatusV85')).toHaveCount(0);
    await expect(page.locator('#pueblaTheoryStatusV86')).toHaveCount(0);
    await expect(page.locator('.theme-item')).toHaveCount(config.themes);
    await expect(page.locator('.theme-item').first()).toContainText(config.firstTitle);

    await navigate(page, 'tests');
    await expect(page.locator('#municipalAuditV84')).toContainText('99 % estimado');
    await expect(page.locator('#municipalAuditV84')).toContainText(`${config.questions}`);
    await expect(page.locator('#municipalAuditV84')).toContainText(`${config.themes}/${config.themes}`);
    await expect(page.locator('.question')).toHaveCount(30);

    await navigate(page, 'supuestos');
    await expect(page.locator('#municipalAuditV84')).toContainText(`${config.practicals}`);
    await expect(page.locator('.card').filter({ has: page.locator('.show-solution') })).toHaveCount(config.practicals);

    const audit = await page.evaluate(id => {
      const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === id);
      const release = window.OPOWEB_MUNICIPALES_V84;
      const key = id.startsWith('puebla') ? 'puebla' : 'carranque';
      return {
        audit: release[key],
        scoring: ope.scoring,
        firstExercise: ope.selectionProcess.firstExercise,
        secondExercise: ope.selectionProcess.secondExercise,
        merit: ope.personalMeritEstimate,
        currentRelease: window.OPOWEB_RELEASE_V89
      };
    }, config.id);

    expect(audit.audit.status).toBe('APTO');
    expect(audit.audit.estimatedProgress).toBe(99);
    expect(audit.audit.failures).toEqual([]);
    expect(audit.audit.totalQuestions).toBe(config.questions);
    expect(audit.audit.literalThemes).toBe(config.themes);
    expect(audit.audit.practicalThemeCoverage[0]).toBe(config.practicalCoverage[0]);
    expect(audit.audit.practicalThemeCoverage.at(-1)).toBe(config.practicalCoverage[1]);
    expect(audit.scoring).toEqual({ correct: config.correct, wrong: config.wrong, blank: 0 });
    expect(audit.firstExercise).toMatchObject({ main: config.main, reserve: config.reserve, minutes: config.minutes });
    expect(audit.currentRelease.version).toBe('v0.89.1');
    expect(audit.currentRelease.status).toBe('PUBLICADA');
    expect(errors).toEqual([]);
  });
}