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
const ui87 = read('assets/js/ui-v87.js');
const browserTest = read('tests/e2e/opoweb.spec.js');
const diputacionTest = read('tests/diputacion-teoria-v87-bloque2.js');

const v87Files = [
  'data/oapgt-fuentes-v87.js',
  'assets/js/diputacion-teoria-v87-bloque1.js',
  'assets/js/diputacion-teoria-v87-bloque2.js',
  'assets/js/diputacion-test-v87-bloque2.js',
  'assets/js/ui-v87.js'
];

assert.equal(packageJson.version, '0.87.0');
assert.equal(packageJson.scripts['test:loader'], 'node tests/loader-v87.js');
assert.equal(packageJson.scripts['test:quality'], 'node tests/auditoria-calidad-v87.js');
assert.equal(packageJson.scripts['test:diputacion'], 'node tests/diputacion-teoria-v87-bloque1.js && node tests/diputacion-teoria-v87-bloque2.js');
assert.equal(packageJson.scripts['test:integrity'], 'node tests/site-integrity-v87.js');
assert.equal(manifest.applicationVersion, 'v0.87.0');
assert.equal(manifest.cacheName, 'opoweb-v95');
assert.equal(new Set(manifest.scripts).size, manifest.scripts.length);
assert.equal(new Set(manifest.allAssets).size, manifest.allAssets.length);

for (const asset of manifest.allAssets) {
  const file = normalize(asset);
  if (!file) continue;
  assert.ok(exists(file), `Recurso inexistente: ${asset}`);
}
for (const file of v87Files) {
  assert.ok(exists(file), `Archivo v0.87 inexistente: ${file}`);
  assert.ok(manifest.scripts.includes(`./${file}`), `Archivo v0.87 no declarado en manifiesto: ${file}`);
}

const position = asset => manifest.scripts.indexOf(asset);
assert.ok(position('./data/oapgt-fuentes-v87.js') > position('./data/ope-audit-v41.js'));
assert.ok(position('./assets/js/auditoria-calidad-v72.js') < position('./assets/js/ui-v42.js'));
assert.ok(position('./assets/js/ui-v86.js') < position('./assets/js/diputacion-teoria-v87-bloque1.js'));
assert.ok(position('./assets/js/diputacion-teoria-v87-bloque1.js') < position('./assets/js/diputacion-teoria-v87-bloque2.js'));
assert.ok(position('./assets/js/diputacion-teoria-v87-bloque2.js') < position('./assets/js/diputacion-test-v87-bloque2.js'));
assert.ok(position('./assets/js/diputacion-test-v87-bloque2.js') < position('./assets/js/ui-v87.js'));

const directScripts = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
assert.deepStrictEqual(directScripts, ['assets/js/asset-manifest-v83.js', 'assets/js/loader-v83.js']);
assert.ok(serviceWorker.startsWith("importScripts('./assets/js/asset-manifest-v83.js');"));
assert.ok(serviceWorker.includes('const CACHE = MANIFEST.cacheName'));
assert.ok(serviceWorker.includes('const ASSETS = MANIFEST.allAssets'));
assert.ok(!serviceWorker.includes("const CACHE = 'opoweb-v"));
assert.ok(!/const ASSETS = \[/.test(serviceWorker));
assert.ok(loader.includes('window.OPOWEB_BOOT_V83 = boot'));
assert.ok(loader.includes("window.dispatchEvent(new CustomEvent('opoweb:ready'"));
assert.ok(loader.includes("navigator.serviceWorker.register('./sw.js')"));

assert.ok(ui87.includes("const VERSION = 'v0.87.0'"));
assert.ok(ui87.includes("const CACHE = 'opoweb-v95'"));
assert.ok(ui87.includes('Diputación 7/40'));
assert.ok(ui87.includes('El temario completo de Diputación todavía no debe utilizarse como fuente única'));
assert.ok(ui87.includes('OPOWEB_UI_V87'));
assert.ok(diputacionTest.includes("assert.equal(totalQuestions, 1254"));
assert.ok(diputacionTest.includes('OPOWEB_DIPUTACION_TEST_V87'));

assert.equal(webManifest.start_url, './index.html');
assert.equal(webManifest.display, 'standalone');
for (const icon of webManifest.icons) assert.ok(exists(normalize(icon.src)), `Icono inexistente: ${icon.src}`);

assert.ok(browserTest.includes('Versión OpoWeb v0.87.0'));
assert.ok(browserTest.includes("includes('opoweb-v95')"));
assert.ok(browserTest.includes('/assets/js/diputacion-teoria-v87-bloque1.js'));
assert.ok(browserTest.includes('/assets/js/diputacion-test-v87-bloque2.js'));
assert.ok(browserTest.includes('OPOWEB_UI_V87'));

console.log(`Integridad v0.87 OK · ${manifest.scripts.length} módulos · ${manifest.allAssets.length} recursos · Diputación 7/40`);
