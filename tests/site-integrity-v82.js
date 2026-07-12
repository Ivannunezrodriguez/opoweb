const fs = require('fs');
const path = require('path');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));
const localPath = value => value.replace(/^\.\//, '').split(/[?#]/)[0];

const index = read('index.html');
const manifest = JSON.parse(read('manifest.webmanifest'));
const serviceWorker = read('sw.js');
const packageJson = JSON.parse(read('package.json'));
const playwrightConfig = read('playwright.config.js');
const browserTest = read('tests/e2e/opoweb.spec.js');
const storageBrowserTest = read('tests/e2e/storage-v82.spec.js');
const storageModule = read('assets/js/storage-v82.js');
const storageUi = read('assets/js/ui-v82.js');

const indexAssets = [...index.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(match => match[1])
  .filter(value => !/^(?:https?:|data:|#)/.test(value))
  .map(localPath);
const cacheBlock = serviceWorker.match(/const ASSETS = \[([\s\S]*?)\];/);
assert.ok(cacheBlock, 'No se localiza ASSETS en sw.js');
const cachedAssets = [...cacheBlock[1].matchAll(/['"]([^'"]+)['"]/g)].map(match => localPath(match[1]));

for (const asset of indexAssets) assert.ok(exists(asset), `Recurso de index inexistente: ${asset}`);
for (const asset of cachedAssets) {
  if (!asset || asset === '.') continue;
  assert.ok(exists(asset), `Recurso de PWA inexistente: ${asset}`);
}
for (const asset of indexAssets.filter(item => /\.(?:js|css|webmanifest|svg)$/.test(item))) {
  assert.ok(cachedAssets.includes(asset), `Recurso de index no incluido en caché: ${asset}`);
}

assert.equal(new Set(cachedAssets).size, cachedAssets.length, 'Hay recursos duplicados en ASSETS');
assert.ok(/const CACHE = 'opoweb-v89';/.test(serviceWorker), 'La caché no es opoweb-v89');
assert.ok(index.includes("navigator.serviceWorker.register('./sw.js')"));
assert.ok(index.includes('assets/js/storage-v82.js'));
assert.ok(index.includes('assets/js/ui-v82.js'));
assert.ok(index.indexOf('assets/js/storage-v82.js') < index.indexOf('assets/js/app.js'), 'El almacenamiento debe cargarse antes que app.js');
assert.ok(index.indexOf('assets/js/ui-v81.js') < index.indexOf('assets/js/ui-v82.js'), 'La UI v0.82 debe ser la última capa');
assert.equal(manifest.start_url, './index.html');
assert.equal(manifest.display, 'standalone');
for (const icon of manifest.icons) assert.ok(exists(localPath(icon.src)), `Icono inexistente: ${icon.src}`);

assert.equal(packageJson.version, '0.82.0');
assert.equal(packageJson.devDependencies['@playwright/test'], '1.55.0');
assert.equal(packageJson.scripts['test:storage'], 'node tests/storage-v82.js');
assert.equal(packageJson.scripts['test:e2e'], 'playwright test');
assert.ok(/desktop-chromium/.test(playwrightConfig));
assert.ok(/mobile-chromium/.test(playwrightConfig));
assert.ok(/tablet-chromium/.test(playwrightConfig));
assert.ok(/setOffline\(true\)/.test(browserTest));
assert.ok(/opowebProgress/.test(browserTest));
assert.ok(/opoweb-v89/.test(browserTest), 'La prueba PWA debe validar la caché v89');
assert.ok(/opowebProgressBackup/.test(storageBrowserTest));
assert.ok(/formatVersion/.test(storageBrowserTest));
assert.ok(/FORMAT_VERSION = 2/.test(storageModule));
assert.ok(/opowebProgressBackup/.test(storageModule));
assert.ok(/checksum/.test(storageModule));
assert.ok(/OPOWEB_STORAGE_AUDIT_V82/.test(storageUi));

console.log(`Integridad web v0.82 OK · ${indexAssets.length} referencias · ${cachedAssets.length} recursos PWA · almacenamiento protegido`);
