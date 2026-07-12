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
  simulacros: 'Simulacros transversales',
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

async function loadApplication(page) {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#content')).toBeVisible();
  await expect(page.locator('#oposicionSelect option')).toHaveCount(4);
  return pageErrors;
}

test('carga las cuatro OPE y permite recorrer todas las vistas', async ({ page }, testInfo) => {
  const pageErrors = await loadApplication(page);

  const optionValues = await page.locator('#oposicionSelect option').evaluateAll(options => options.map(option => option.value));
  expect(optionValues).toEqual(EXPECTED_OPE_IDS);
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.81.0');

  await page.locator('#oposicionSelect').selectOption('uc3m-aux-admin-2026');
  await expect(page.locator('#oposicionCard')).toContainText('UC3M');

  for (const view of Object.keys(VIEW_TITLES)) {
    await navigateTo(page, view);
  }

  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(horizontalOverflow, `Desbordamiento horizontal en ${testInfo.project.name}`).toBeFalsy();
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
    await page.evaluate(() => navigator.serviceWorker.ready);
  }
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBeTruthy();
  await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes('opoweb-v88')), { timeout: 30_000 }).toBeTruthy();

  const cachedPaths = await page.evaluate(async () => {
    const cache = await caches.open('opoweb-v88');
    return (await cache.keys()).map(request => new URL(request.url).pathname);
  });
  expect(cachedPaths).toContain('/index.html');
  expect(cachedPaths).toContain('/assets/js/app.js');
  expect(cachedPaths).toContain('/assets/js/ui-v81.js');
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
  await expect(page.locator('#viewTitle')).toHaveText('Temario');
  await expect(page.locator('#oposicionCard')).toContainText('Versión OpoWeb v0.81.0');
  const restored = await page.evaluate(() => JSON.parse(localStorage.getItem('opowebProgress') || '{}'));
  expect(restored).toEqual(offlineProgress);
  expect(pageErrors).toEqual([]);
  await context.setOffline(false);
});
