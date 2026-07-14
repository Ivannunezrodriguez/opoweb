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

const THEORY_HEADINGS = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

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

async function theoryMetrics(page, id, programmeVersion) {
  return page.evaluate(({ id, programmeVersion }) => {
    const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === id);
    const metrics = ope.themes.map(theme => {
      const text = [
        ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
        theme.tree || '',
        ...(theme.reviewTable || []).flat()
      ].join(' ');
      return {
        number: Number(theme.number),
        words: text.trim().split(/\s+/).filter(Boolean).length,
        autonomous: theme.theoryStatus?.autonomous === true,
        sources: (theme.officialSources || []).length,
        coverage: (theme.articleCoverage || []).length,
        questions: (ope.themeTests?.[theme.id] || []).length
      };
    });
    return {
      completed: ope.theoryProgramme[programmeVersion].completedThemes,
      pending: ope.theoryProgramme[programmeVersion].pendingThemes,
      metrics,
      practicals: ope.practicalCases.length,
      simulations: ope.simulacros.map(simulation => ({ main: simulation.questions.length, reserve: (simulation.reserveQuestions || []).length }))
    };
  }, { id, programmeVersion });
}

test('carga las cuatro OPE y permite recorrer todas las vistas', async ({ page }, testInfo) => {
  const pageErrors = await loadApplication(page);

  const optionValues = await page.locator('#oposicionSelect option').evaluateAll(options => options.map(option => option.value));
  expect(optionValues).toEqual(EXPECTED_OPE_IDS);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.86.0');

  const bootAudit = await page.evaluate(() => {
    const manifest = window.OPOWEB_ASSET_MANIFEST_V83;
    const boot = window.OPOWEB_BOOT_V83;
    const loadedPaths = [...document.querySelectorAll('script[data-opoweb-managed="v83"]')]
      .map(script => new URL(script.src).pathname);
    const expectedPaths = manifest.scripts.map(source => new URL(source, location.href).pathname);
    return {
      status: boot.status,
      failed: boot.failed,
      loaded: boot.loaded.length,
      declared: manifest.scripts.length,
      applicationVersion: manifest.applicationVersion,
      municipalStatus: window.OPOWEB_MUNICIPALES_V84?.globalStatus,
      pueblaTheoryStatus: window.OPOWEB_THEORY_AUDIT_V86?.puebla?.status,
      pueblaAutonomousThemes: window.OPOWEB_THEORY_AUDIT_V86?.puebla?.autonomousThemes,
      carranqueTheoryStatus: window.OPOWEB_THEORY_AUDIT_V86?.carranque?.status,
      carranqueAutonomousThemes: window.OPOWEB_THEORY_AUDIT_V86?.carranque?.autonomousThemes,
      duplicateScripts: window.OPOWEB_LOADER_AUDIT_V83.duplicateScripts,
      orderMatches: JSON.stringify(loadedPaths) === JSON.stringify(expectedPaths)
    };
  });
  expect(bootAudit.status).toBe('ready');
  expect(bootAudit.failed).toBeNull();
  expect(bootAudit.loaded).toBe(bootAudit.declared);
  expect(bootAudit.applicationVersion).toBe('v0.86.0');
  expect(bootAudit.municipalStatus).toBe('APTO');
  expect(bootAudit.pueblaTheoryStatus).toBe('APTO');
  expect(bootAudit.pueblaAutonomousThemes).toBe(19);
  expect(bootAudit.carranqueTheoryStatus).toBe('APTO');
  expect(bootAudit.carranqueAutonomousThemes).toBe(20);
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

  await expect(page.locator('#theoryStatusV86')).toContainText('La Puebla 19/19');
  await expect(page.locator('#theoryStatusV86')).toContainText('Fuente teórica autosuficiente');
  await expect(page.locator('.theme-item')).toHaveCount(19);

  await page.locator('.theme-item').first().click();
  await expect(page.locator('#themeSourcesV86')).toContainText('Tema autosuficiente');
  await expect(page.locator('#themeSourcesV86 ul').first().locator('li')).toHaveCount(2);
  for (const heading of THEORY_HEADINGS) await expect(page.locator('#content')).toContainText(heading);

  const theory = await theoryMetrics(page, 'puebla-aux-admin-2026', 'v86');
  expect(theory.completed).toHaveLength(19);
  expect(theory.pending).toEqual([]);
  expect(theory.metrics.every(item => item.autonomous)).toBe(true);
  expect(theory.metrics.every(item => item.words >= 1000)).toBe(true);
  expect(theory.metrics.every(item => item.sources >= 2)).toBe(true);
  expect(theory.metrics.every(item => item.coverage >= 4)).toBe(true);
  expect(theory.metrics.every(item => item.questions === 30)).toBe(true);
  expect(theory.practicals).toBe(20);
  expect(theory.simulations).toEqual([{ main: 50, reserve: 5 }, { main: 50, reserve: 5 }, { main: 50, reserve: 5 }]);
  expect(pageErrors).toEqual([]);
});

test('Carranque conserva veinte temas teóricos autosuficientes', async ({ page }) => {
  const pageErrors = await loadApplication(page);
  await page.locator('#oposicionSelect').selectOption('carranque-aux-admin-2026');
  await navigateTo(page, 'temario');

  await expect(page.locator('#theoryStatusV86')).toContainText('Carranque 20/20');
  await expect(page.locator('#theoryStatusV86')).toContainText('Fuente teórica autosuficiente');
  await expect(page.locator('.theme-item')).toHaveCount(20);

  await page.locator('.theme-item').first().click();
  await expect(page.locator('#themeSourcesV85')).toContainText('Tema autosuficiente');
  for (const heading of THEORY_HEADINGS) await expect(page.locator('#content')).toContainText(heading);

  const theory = await theoryMetrics(page, 'carranque-aux-admin-2026', 'v85');
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
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          clearTimeout(timer);
          resolve();
        }, { once: true });
      });
    }
  });

  if (!await page.evaluate(() => Boolean(navigator.serviceWorker.controller))) {
    await page.reload({ waitUntil: 'domcontentloaded' });
    await waitForBoot(page);
    await page.evaluate(() => navigator.serviceWorker.ready);
  }
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBeTruthy();
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('opoweb-v93')), { timeout: 30_000 }).toBeTruthy();

  const cachedPaths = await page.evaluate(async () => {
    const cache = await caches.open('opoweb-v93');
    return (await cache.keys()).map(request => new URL(request.url).pathname);
  });
  expect(cachedPaths).toContain('/index.html');
  expect(cachedPaths).toContain('/assets/js/asset-manifest-v83.js');
  expect(cachedPaths).toContain('/assets/js/loader-v83.js');
  expect(cachedPaths).toContain('/assets/js/storage-v82.js');
  expect(cachedPaths).toContain('/assets/js/municipales-v84-cierre.js');
  expect(cachedPaths).toContain('/assets/js/carranque-teoria-v85-bloque1.js');
  expect(cachedPaths).toContain('/assets/js/carranque-teoria-v85-bloque4.js');
  expect(cachedPaths).toContain('/assets/js/puebla-teoria-v86-bloque1.js');
  expect(cachedPaths).toContain('/assets/js/puebla-teoria-v86-bloque4.js');
  expect(cachedPaths).toContain('/assets/js/ui-v86.js');
  expect(cachedPaths).toContain('/manifest.webmanifest');

  const manifest = await page.evaluate(async () => {
    const response = await fetch('/manifest.webmanifest');
    return response.json();
  });
  expect(manifest.start_url).toBe('./index.html');
  expect(manifest.display).toBe('standalone');
  expect(manifest.icons.length).toBeGreaterThan(0);

  const offlineProgress = {
    'uc3m-aux-admin-2026:test:offline-check': {
      answers: { prueba: 'A' },
      corrected: false,
      score: null
    }
  };
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
