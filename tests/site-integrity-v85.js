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
const ui85 = read('assets/js/ui-v85.js');
const ui86 = read('assets/js/ui-v86.js');
const ui89 = read('assets/js/ui-v89-release.js');
const ui90 = read('assets/js/ui-v90-pedagogia.js');
const browserTest = read('tests/e2e/opoweb.spec.js');
const pedagogyDoc = read('docs/REVISION_PEDAGOGICA_V0892.md');
const theoryFiles = [
  'assets/js/puebla-teoria-v86-bloque1.js',
  'assets/js/puebla-teoria-v86-bloque2.js',
  'assets/js/puebla-teoria-v86-bloque3.js',
  'assets/js/puebla-teoria-v86-bloque4.js',
  'assets/js/carranque-teoria-v85-bloque1.js',
  'assets/js/carranque-teoria-v85-estructura.js',
  'assets/js/carranque-teoria-v85-bloque2.js',
  'assets/js/carranque-teoria-v85-bloque3.js',
  'assets/js/carranque-teoria-v85-bloque4.js'
];

assert.equal(packageJson.version, '0.89.2');
assert.equal(packageJson.scripts['test:loader'], 'node tests/loader-v85.js');
assert.equal(packageJson.scripts['test:integrity'], 'node tests/site-integrity-v85.js');
assert.equal(manifest.applicationVersion, 'v0.89.2');
assert.equal(manifest.cacheName, 'opoweb-v96');
assert.equal(new Set(manifest.scripts).size, manifest.scripts.length);
assert.equal(new Set(manifest.allAssets).size, manifest.allAssets.length);

for (const asset of manifest.allAssets) {
  const file = normalize(asset);
  if (!file) continue;
  assert.ok(exists(file), `Recurso inexistente: ${asset}`);
}
for (const file of theoryFiles) {
  assert.ok(manifest.scripts.includes(`./${file}`), `Módulo teórico no declarado: ${file}`);
  assert.ok(exists(file), `Módulo teórico inexistente: ${file}`);
}

const position = asset => manifest.scripts.indexOf(asset);
assert.ok(position('./assets/js/municipales-v84-fix.js') < position('./assets/js/puebla-teoria-v86-bloque1.js'));
assert.ok(position('./assets/js/puebla-teoria-v86-bloque4.js') < position('./assets/js/carranque-teoria-v85-bloque1.js'));
assert.ok(position('./assets/js/carranque-teoria-v85-bloque4.js') < position('./assets/js/auditoria-calidad-v72.js'));
assert.ok(position('./assets/js/ui-v85.js') < position('./assets/js/ui-v86.js'));
assert.ok(position('./assets/js/ui-v86.js') < position('./assets/js/ui-v89-release.js'));
assert.ok(position('./assets/js/ui-v89-release.js') < position('./assets/js/ui-v90-pedagogia.js'));
assert.equal(manifest.scripts.at(-1), './assets/js/ui-v90-pedagogia.js');

const directScripts = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
assert.deepStrictEqual(directScripts, ['assets/js/asset-manifest-v83.js','assets/js/loader-v83.js']);
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
assert.ok(ui85.includes("const VERSION = 'v0.85.0'"));
assert.ok(ui86.includes("const VERSION = 'v0.86.0'"));
assert.ok(ui89.includes("const VERSION = 'v0.89.1'"));
assert.ok(ui90.includes("const VERSION = 'v0.89.2'"));
assert.ok(ui90.includes("const CACHE = 'opoweb-v96'"));
assert.ok(ui90.includes('RESUMEN_Y_PRACTICA_NO_FUENTE_UNICA'));
assert.ok(ui90.includes('completenessPercentagesWithdrawn: true'));
assert.ok(ui90.includes('Tema en revisión pedagógica'));
assert.ok(ui90.includes('Resumen del epígrafe · revisión pendiente'));
assert.ok(pedagogyDoc.includes('no verificaba de forma suficiente la cobertura artículo por artículo'));
assert.ok(browserTest.includes('Versión OpoWeb v0.89.2'));
assert.ok(browserTest.includes("includes('opoweb-v96')"));
assert.ok(browserTest.includes('/assets/js/ui-v90-pedagogia.js'));
assert.ok(browserTest.includes('OPOWEB_PEDAGOGY_V90'));
assert.equal(webManifest.start_url, './index.html');
assert.equal(webManifest.display, 'standalone');
for (const icon of webManifest.icons) assert.ok(exists(normalize(icon.src)), `Icono inexistente: ${icon.src}`);

console.log(`Integridad v0.89.2 OK · ${manifest.scripts.length} módulos · ${manifest.allAssets.length} recursos · revisión pedagógica abierta`);
