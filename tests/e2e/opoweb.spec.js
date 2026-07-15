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
  await expect.poll(() => page.evaluate(() => window.OPOWEB_BOOT_V83?.status || 'missing'), { timeout: 60_000 }).toBe('ready');
}
async function loadApplication(page) {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await expect(page.locator('#content')).toBeVisible();
  await expect(page.locator('#oposicionSelect option')).toHaveCount(4);
  return errors;
}

const headings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

test('carga las cuatro OPE, todos los módulos y las siete vistas', async ({ page }, testInfo) => {
  const errors = await loadApplication(page);
  const optionValues = await page.locator('#oposicionSelect option').evaluateAll(options => options.map(option => option.value));
  expect(optionValues).toEqual(EXPECTED_OPE_IDS);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.87.0');

  const boot = await page.evaluate(() => {
    const manifest = window.OPOWEB_ASSET_MANIFEST_V83;
    const state = window.OPOWEB_BOOT_V83;
    const loadedPaths = [...document.querySelectorAll('script[data-opoweb-managed="v83"]')].map(script => new URL(script.src).pathname);
    const expectedPaths = manifest.scripts.map(source => new URL(source, location.href).pathname);
    return {
      status: state.status,
      failed: state.failed,
      loaded: state.loaded.length,
      declared: manifest.scripts.length,
      version: manifest.applicationVersion,
      duplicateScripts: window.OPOWEB_LOADER_AUDIT_V83.duplicateScripts,
      orderMatches: JSON.stringify(loadedPaths) === JSON.stringify(expectedPaths),
      carranque: window.OPOWEB_THEORY_AUDIT_V85?.carranque?.autonomousThemes,
      puebla: window.OPOWEB_PUEBLA_THEORY_V86?.autonomousThemes,
      diputacion: window.OPOWEB_UI_V87?.diputacionAutonomousThemes,
      oapgtVerified: window.OPOWEB_UI_V87?.oapgtStatutesVerified
    };
  });
  expect(boot.status).toBe('ready');
  expect(boot.failed).toBeNull();
  expect(boot.loaded).toBe(boot.declared);
  expect(boot.version).toBe('v0.87.0');
  expect(boot.duplicateScripts).toBe(0);
  expect(boot.orderMatches).toBe(true);
  expect(boot.carranque).toBe(20);
  expect(boot.puebla).toBe(19);
  expect(boot.diputacion).toBe(7);
  expect(boot.oapgtVerified).toBe(false);

  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  for (const view of Object.keys(VIEW_TITLES)) await navigateTo(page, view);
  await expect(page.locator('#loaderAuditV83')).toContainText('LISTO');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(overflow, `Desbordamiento horizontal en ${testInfo.project.name}`).toBeFalsy();
  expect(errors).toEqual([]);
});

test('La Puebla conserva sus diecinueve temas autosuficientes', async ({ page }) => {
  const errors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('puebla-aux-admin-2026');
  await navigateTo(page, 'temario');
  await expect(page.locator('#pueblaTheoryStatusV86')).toContainText('La Puebla 19/19');
  await expect(page.locator('.theme-item')).toHaveCount(19);
  const result = await page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
    return {
      status: ope.theoryProgramme.v86.status,
      completed: ope.theoryProgramme.v86.completedThemes.length,
      pending: ope.theoryProgramme.v86.pendingThemes.length,
      questions: Object.values(ope.themeTests).reduce((sum, bank) => sum + bank.length, 0)
    };
  });
  expect(result).toEqual({ status: 'APTO', completed: 19, pending: 0, questions: 570 });
  expect(errors).toEqual([]);
});

test('Carranque conserva sus veinte temas autosuficientes', async ({ page }) => {
  const errors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('carranque-aux-admin-2026');
  await navigateTo(page, 'temario');
  await expect(page.locator('#theoryStatusV85')).toContainText('Carranque 20/20');
  await expect(page.locator('.theme-item')).toHaveCount(20);
  const result = await page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
    return { completed: ope.theoryProgramme.v85.completedThemes.length, pending: ope.theoryProgramme.v85.pendingThemes.length };
  });
  expect(result).toEqual({ completed: 20, pending: 0 });
  expect(errors).toEqual([]);
});

test('Diputación publica siete temas autosuficientes sin ocultar los pendientes', async ({ page }) => {
  const errors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('diputacion-toledo-admin-2026');
  await navigateTo(page, 'temario');
  await expect(page.locator('#diputacionTheoryStatusV87')).toContainText('Diputación 7/40');
  await expect(page.locator('#diputacionTheoryStatusV87')).toContainText('todavía no debe utilizarse como fuente única');
  await expect(page.locator('#diputacionTheoryStatusV87')).toContainText('contenido estatutario bloqueado');
  await expect(page.locator('.theme-item')).toHaveCount(40);

  await page.locator('.theme-item').nth(24).click();
  await expect(page.locator('#diputacionThemeSourcesV87')).toContainText('Tema autosuficiente');
  for (const heading of headings) await expect(page.locator('#content')).toContainText(heading);

  const result = await page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
    const programme = ope.theoryProgramme.v87;
    const metrics = [25, 26, 27, 28, 29, 30, 31].map(number => {
      const theme = ope.themes.find(item => Number(item.number) === number);
      return {
        number,
        autonomous: theme.theoryStatus?.autonomous === true,
        words: theme.theoryStatus?.words,
        sources: (theme.officialSources || []).length,
        questions: (ope.themeTests[theme.id] || []).length
      };
    });
    return {
      status: programme.status,
      completed: programme.completedThemes,
      pending: programme.pendingThemes.length,
      questions: Object.values(ope.themeTests).reduce((sum, bank) => sum + bank.length, 0),
      oapgtAllowed: window.OPOWEB_OAPGT_FUENTES_V87.statutes.allowedForTheory,
      metrics
    };
  });
  expect(result.status).toBe('EN_PROGRESO');
  expect(result.completed).toEqual([25, 26, 27, 28, 29, 30, 31]);
  expect(result.pending).toBe(33);
  expect(result.questions).toBe(1254);
  expect(result.oapgtAllowed).toBe(false);
  expect(result.metrics.every(item => item.autonomous)).toBe(true);
  expect(result.metrics.every(item => item.words >= 900)).toBe(true);
  expect(result.metrics.every(item => item.sources >= 2)).toBe(true);
  expect(result.metrics.every(item => item.questions >= 30)).toBe(true);
  expect(errors).toEqual([]);
});

test('guarda y recupera el progreso tras recargar', async ({ page }) => {
  const errors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  await navigateTo(page, 'tests');
  const firstAnswer = page.locator('.question input[type="radio"]').first();
  await firstAnswer.check();
  await page.locator('#correctSet').click();
  await expect(page.locator('.result-box').first()).toBeVisible();
  const saved = await page.evaluate(() => localStorage.getItem('opowebProgress'));
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  expect(await page.evaluate(() => localStorage.getItem('opowebProgress'))).toBe(saved);
  expect(errors).toEqual([]);
});

test('la PWA v95 funciona sin conexión y conserva datos', async ({ page, context }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'La prueba PWA completa se ejecuta una vez.');
  const errors = await loadApplication(page);
  await page.evaluate(() => navigator.serviceWorker.ready);
  if (!await page.evaluate(() => Boolean(navigator.serviceWorker.controller))) {
    await page.reload({ waitUntil: 'domcontentloaded' });
    await waitForBoot(page);
  }
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBeTruthy();
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('opoweb-v95')), { timeout: 30_000 }).toBeTruthy();
  const cachedPaths = await page.evaluate(async () => {
    const cache = await caches.open('opoweb-v95');
    return (await cache.keys()).map(request => new URL(request.url).pathname);
  });
  for (const expected of [
    '/index.html',
    '/assets/js/asset-manifest-v83.js',
    '/assets/js/loader-v83.js',
    '/data/oapgt-fuentes-v87.js',
    '/assets/js/diputacion-teoria-v87-bloque1.js',
    '/assets/js/diputacion-teoria-v87-bloque2.js',
    '/assets/js/diputacion-test-v87-bloque2.js',
    '/assets/js/ui-v87.js',
    '/manifest.webmanifest'
  ]) expect(cachedPaths).toContain(expected);

  const offlineProgress = { 'diputacion-toledo-admin-2026:test:offline-check': { answers: { prueba: 'A' }, corrected: false, score: null } };
  await page.evaluate(value => localStorage.setItem('opowebProgress', JSON.stringify(value)), offlineProgress);
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.87.0');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'))).toEqual(offlineProgress);
  expect(errors).toEqual([]);
  await context.setOffline(false);
});
