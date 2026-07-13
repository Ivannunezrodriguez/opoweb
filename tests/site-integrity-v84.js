const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));
const normalize = value => value.replace(/^\.\//, '').split(/[?#]/)[0];

const context = {};
vm.createContext(context);
vm.runInContext(read('assets/js/asset-manifest-v83.js'), context, { filename: 'asset-manifest-v83.js' });
const manifest = context.OPOWEB_ASSET_MANIFEST_V83;
const index = read('index.html');
const serviceWorker = read('sw.js');
const packageJson = JSON.parse(read('package.json'));
const webManifest = JSON.parse(read('manifest.webmanifest'));
const loader = read('assets/js/loader-v83.js');
const ui83 = read('assets/js/ui-v83.js');
const municipal = read('assets/js/municipales-v84-cierre.js');
const ui84 = read('assets/js/ui-v84.js');
const browserTest = read('tests/e2e/opoweb.spec.js');
const municipalBrowserTest = read('tests/e2e/municipales-v84.spec.js');

assert.equal(packageJson.version, '0.84.0');
assert.equal(packageJson.scripts['test:municipales'], 'node tests/municipales-v84-cierre.js');
assert.equal(packageJson.scripts['test:loader'], 'node tests/loader-v83.js');
assert.equal(manifest.applicationVersion, 'v0.84.0');
assert.equal(manifest.cacheName, 'opoweb-v91');
assert.equal(new Set(manifest.scripts).size, manifest.scripts.length);
assert.equal(new Set(manifest.allAssets).size, manifest.allAssets.length);

for (const asset of manifest.allAssets) {
  const file = normalize(asset);
  if (!file) continue;
  assert.ok(exists(file), `Recurso inexistente: ${asset}`);
}

assert.ok(manifest.scripts.includes('./assets/js/municipales-v84-cierre.js'));
assert.ok(manifest.scripts.includes('./assets/js/ui-v84.js'));
assert.ok(manifest.scripts.indexOf('./assets/js/municipales-v84-cierre.js') > manifest.scripts.indexOf('./assets/js/practicos-v71.js'));
assert.ok(manifest.scripts.indexOf('./assets/js/ui-v84.js') > manifest.scripts.indexOf('./assets/js/ui-v83.js'));

const directScripts = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
assert.deepStrictEqual(directScripts, ['assets/js/asset-manifest-v83.js', 'assets/js/loader-v83.js']);
assert.ok(index.includes('manifest.webmanifest'));
assert.ok(index.includes('assets/css/styles.css'));
assert.ok(index.includes('assets/icons/icon.svg'));

assert.ok(serviceWorker.startsWith("importScripts('./assets/js/asset-manifest-v83.js');"));
assert.ok(serviceWorker.includes('const CACHE = MANIFEST.cacheName'));
assert.ok(serviceWorker.includes('const ASSETS = MANIFEST.allAssets'));
assert.ok(serviceWorker.includes("caches.match('./index.html')"));
assert.ok(!serviceWorker.includes("const CACHE = 'opoweb-v"));
assert.ok(!/const ASSETS = \[/.test(serviceWorker));

assert.ok(loader.includes('window.OPOWEB_BOOT_V83 = boot'));
assert.ok(loader.includes("window.dispatchEvent(new CustomEvent('opoweb:ready'"));
assert.ok(loader.includes("navigator.serviceWorker.register('./sw.js')"));
assert.ok(ui83.includes('OPOWEB_LOADER_AUDIT_V83'));
assert.ok(municipal.includes("const VERSION = '0.84.0'"));
assert.ok(municipal.includes('OPOWEB_MUNICIPALES_V84'));
assert.ok(municipal.includes('pueblaTitles'));
assert.ok(municipal.includes('carranqueTitles'));
assert.ok(ui84.includes("const VERSION = 'v0.84.0'"));
assert.ok(ui84.includes('municipalAuditV84'));

assert.equal(webManifest.start_url, './index.html');
assert.equal(webManifest.display, 'standalone');
for (const icon of webManifest.icons) assert.ok(exists(normalize(icon.src)), `Icono inexistente: ${icon.src}`);

assert.ok(browserTest.includes('Versión OpoWeb v0.84.0'));
assert.ok(browserTest.includes("includes('opoweb-v91')"));
assert.ok(browserTest.includes('/assets/js/ui-v84.js'));
assert.ok(municipalBrowserTest.includes('OPOWEB_MUNICIPALES_V84'));
assert.ok(municipalBrowserTest.includes('99'));

console.log(`Integridad v0.84 OK · ${manifest.scripts.length} módulos · ${manifest.allAssets.length} recursos · caché ${manifest.cacheName}`);
