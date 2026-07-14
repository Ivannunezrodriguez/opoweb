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

test('carga las cuatro OPE y permite recorrer todas las vistas', async ({ page }, testInfo) => {
  const pageErrors = await loadApplication(page);
  const optionValues = await page.locator('#oposicionSelect option').evaluateAll(options => options.map(option => option.value));
  expect(optionValues).toEqual(EXPECTED_OPE_IDS);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.86.0');

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
      municipalStatus: window.OPOWEB_MUNICIPALES_V84?.globalStatus,
      carranqueStatus: window.OPOWEB_THEORY_AUDIT_V85?.carranque?.status,
      carranqueThemes: window.OPOWEB_THEORY_AUDIT_V85?.carranque?.autonomousThemes,
      pueblaStatus: window.OPOWEB_PUEBLA_THEORY_V86?.status,
      pueblaThemes: window.OPOWEB_PUEBLA_THEORY_V86?.autonomousThemes,
      pueblaTotal: window.OPOWEB_PUEBLA_THEORY_V86?.totalThemes,
      duplicateScripts: window.OPOWEB_LOADER_AUDIT_V83.duplicateScripts,
      orderMatches: JSON.stringify(loadedPaths) === JSON.stringify(expectedPaths)
    };
  });
  expect(bootAudit.status).toBe('ready');
  expect(bootAudit.failed).toBeNull();
  expect(bootAudit.loaded).toBe(bootAudit.declared);
  expect(bootAudit.applicationVersion).toBe('v0.86.0');
  expect(bootAudit.municipalStatus).toBe('APTO');
  expect(bootAudit.carranqueStatus).toBe('APTO');
  expect(bootAudit.carranqueThemes).toBe(20);
  expect(bootAudit.pueblaStatus).toBe('APTO');
  expect(bootAudit.pueblaThemes).toBe(19);
  expect(bootAudit.pueblaTotal).toBe(19);
  expect(bootAudit.duplicateScripts).toBe(0);
  expect(bootAudit.orderMatches).toBe(true);

  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  await expect(page.locator('#oposicionCard')).toContainText('UC3M');
  for (const view of Object.keys(VIEW_TITLES)) await navigateTo(page, view);
  await expect(page.locator('#loaderAuditV83')).toContainText('LISTO');
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(horizontalOverflow, `Desbordamiento horizontal en ${testInfo.project.name}`).toBeFalsy();
  expect(pageErrors).toEqual([]);
});

test('La Puebla muestra diecinueve temas teóricos autosuficientes', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('puebla-aux-admin-2026');
  await navigateTo(page, 'temario');

  await expect(page.locator('#pueblaTheoryStatusV86')).toContainText('La Puebla 19/19');
  await expect(page.locator('#pueblaTheoryStatusV86')).toContainText('Fuente teórica autosuficiente');
  await expect(page.locator('.theme-item')).toHaveCount(19);

  await page.locator('.theme-item').first().click();
  await expect(page.locator('#pueblaThemeSourcesV86')).toContainText('Tema autosuficiente');
  await expect(page.locator('#pueblaThemeSourcesV86 li')).toHaveCount(2);
  for (const heading of [
    'Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial',
    'Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'
  ]) await expect(page.locator('#content')).toContainText(heading);

  const theory = await page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
    return {
      status: ope.theoryProgramme.v86.status,
      completed: ope.theoryProgramme.v86.completedThemes,
      pending: ope.theoryProgramme.v86.pendingThemes,
      questions: Object.values(ope.themeTests).reduce((sum, bank) => sum + bank.length, 0),
      practicals: ope.practicalCases.length,
      simulations: ope.simulacros.length,
      metrics: ope.themes.map(theme => ({
        number: Number(theme.number),
        words: theme.theoryStatus?.words,
        autonomous: theme.theoryStatus?.autonomous === true,
        sources: (theme.officialSources || []).length,
        questions: (ope.themeTests?.[theme.id] || []).length
      }))
    };
  });
  expect(theory.status).toBe('APTO');
  expect(theory.completed).toEqual(Array.from({ length: 19 }, (_, index) => index + 1));
  expect(theory.pending).toEqual([]);
  expect(theory.questions).toBe(570);
  expect(theory.practicals).toBe(20);
  expect(theory.simulations).toBe(3);
  expect(theory.metrics.every(item => item.autonomous)).toBe(true);
  expect(theory.metrics.every(item => item.words >= 900)).toBe(true);
  expect(theory.metrics.every(item => item.sources >= 2)).toBe(true);
  expect(theory.metrics.every(item => item.questions === 30)).toBe(true);
  expect(pageErrors).toEqual([]);
});

test('Carranque muestra veinte temas teóricos autosuficientes', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('carranque-aux-admin-2026');
  await navigateTo(page, 'temario');
  await expect(page.locator('#theoryStatusV85')).toContainText('Carranque 20/20');
  await expect(page.locator('#theoryStatusV85')).toContainText('Fuente teórica autosuficiente');
  await expect(page.locator('.theme-item')).toHaveCount(20);
  await page.locator('.theme-item').first().click();
  await expect(page.locator('#themeSourcesV85')).toContainText('Tema autosuficiente');
  await expect(page.locator('#themeSourcesV85 li')).toHaveCount(3);
  for (const heading of ['Resumen orientado al aprobado','Rigor normativo','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen']) {
    await expect(page.locator('#content')).toContainText(heading);
  }
  const theory = await page.evaluate(() => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
    const metrics = ope.themes.map(theme => {
      const text = [...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]), theme.tree || '', ...(theme.reviewTable || []).flat()].join(' ');
      return { words: text.trim().split(/\s+/).filter(Boolean).length, autonomous: theme.theoryStatus?.autonomous === true, sources: (theme.officialSources || []).length, questions: (ope.themeTests?.[theme.id] || []).length };
    });
    return { completed: ope.theoryProgramme.v85.completedThemes, pending: ope.theoryProgramme.v85.pendingThemes, metrics };
  });
  expect(theory.completed).toHaveLength(20);
  expect(theory.pending).toEqual([]);
  expect(theory.metrics.every(item => item.autonomous)).toBe(true);
  expect(theory.metrics.every(item => item.words >= 1000)).toBe(true);
  expect(theory.metrics.every(item => item.sources >= 2)).toBe(true);
  expect(theory.metrics.every(item => item.questions === 30)).toBe(true);
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
  const uc3mTestKeys = Object.keys(savedBeforeReload).filter(key => key.startsWith('uc3m-aux-admin-2026:test:'));
  expect(uc3mTestKeys.length).toBeGreaterThan(0);
  expect(savedBeforeReload[uc3mTestKeys[0]].corrected).toBe(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  await navigateTo(page, 'tests');
  await expect(page.locator('.question input[type="radio"]:checked').first()).toBeVisible();
  await expect(page.locator('.result-box').first()).toBeVisible();
  const savedAfterReload = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'));
  expect(savedAfterReload).toEqual(savedBeforeReload);
  expect(pageErrors).toEqual([]);
});

test('instala la PWA y funciona sin conexión conservando datos', async ({ page, context }, testInfo) => {
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
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('opoweb-v94')), { timeout: 30_000 }).toBeTruthy();
  const cachedPaths = await page.evaluate(async () => {
    const cache = await caches.open('opoweb-v94');
    return (await cache.keys()).map(request => new URL(request.url).pathname);
  });
  for (const expected of [
    '/index.html','/assets/js/asset-manifest-v83.js','/assets/js/loader-v83.js','/assets/js/storage-v82.js',
    '/assets/js/municipales-v84-cierre.js','/assets/js/puebla-teoria-v86-bloque1.js',
    '/assets/js/puebla-teoria-v86-bloque2.js','/assets/js/puebla-teoria-v86-bloque3.js',
    '/assets/js/puebla-teoria-v86-bloque4.js','/assets/js/carranque-teoria-v85-bloque1.js',
    '/assets/js/carranque-teoria-v85-bloque4.js','/assets/js/ui-v86.js','/manifest.webmanifest'
  ]) expect(cachedPaths).toContain(expected);
  const manifest = await page.evaluate(async () => (await fetch('/manifest.webmanifest')).json());
  expect(manifest.start_url).toBe('./index.html');
  expect(manifest.display).toBe('standalone');
  expect(manifest.icons.length).toBeGreaterThan(0);
  const offlineProgress = { 'uc3m-aux-admin-2026:test:offline-check': { answers: { prueba: 'A' }, corrected: false, score: null } };
  await page.evaluate(value => localStorage.setItem('opowebProgress', JSON.stringify(value)), offlineProgress);
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitForBoot(page);
  await expect(page.locator('#viewTitle')).toHaveText('Temario');
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.86.0');
  const restored = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'));
  expect(restored).toEqual(offlineProgress);
  expect(pageErrors).toEqual([]);
  await context.setOffline(false);
});
