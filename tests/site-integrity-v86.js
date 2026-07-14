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
const ui86 = read('assets/js/ui-v86.js');
const browserTest = read('tests/e2e/opoweb.spec.js');
const pueblaTheoryTest = read('tests/puebla-teoria-v86-final.js');
const carranqueTheoryTest = read('tests/temario-depth-v85-final.js');
const pueblaFiles = [
  'assets/js/puebla-teoria-v86-bloque1.js',
  'assets/js/puebla-teoria-v86-bloque2.js',
  'assets/js/puebla-teoria-v86-bloque3.js',
  'assets/js/puebla-teoria-v86-bloque4.js'
];
const pueblaFix = 'assets/js/puebla-teoria-v86-fix.js';

assert.equal(packageJson.version, '0.86.0');
assert.equal(packageJson.scripts['test:loader'], 'node tests/loader-v86.js');
assert.equal(packageJson.scripts['test:theory:puebla'], 'node tests/puebla-teoria-v86-final.js');
assert.equal(packageJson.scripts['test:theory:carranque'], 'node tests/temario-depth-v85-final.js');
assert.equal(packageJson.scripts['test:integrity'], 'node tests/site-integrity-v86.js');
assert.equal(manifest.applicationVersion, 'v0.86.0');
assert.equal(manifest.cacheName, 'opoweb-v93');
assert.equal(new Set(manifest.scripts).size, manifest.scripts.length);
assert.equal(new Set(manifest.allAssets).size, manifest.allAssets.length);

for (const asset of manifest.allAssets) {
  const file = normalize(asset);
  if (!file) continue;
  assert.ok(exists(file), `Recurso inexistente: ${asset}`);
}

for (const file of pueblaFiles) {
  const declared = `./${file}`;
  assert.ok(manifest.scripts.includes(declared), `Módulo teórico no declarado: ${declared}`);
  assert.ok(exists(file), `Módulo teórico inexistente: ${file}`);
  const source = read(file);
  assert.ok(source.includes("version: 'v0.86.0'"), `Versión ausente: ${file}`);
  assert.ok(source.includes('Fuentes oficiales consolidadas') || source.includes('Documentación oficial') || source.includes('documentación oficial'), `Política de fuente ausente: ${file}`);
}
assert.ok(exists(pueblaFix));
assert.ok(manifest.scripts.includes(`./${pueblaFix}`));
const fixSource = read(pueblaFix);
assert.ok(fixSource.includes('BOE-A-1998-16718'));
assert.ok(fixSource.includes("theme: 4"));
assert.ok(manifest.scripts.includes('./assets/js/ui-v86.js'));
assert.ok(manifest.scripts.indexOf('./assets/js/carranque-teoria-v85-bloque4.js') < manifest.scripts.indexOf('./assets/js/puebla-teoria-v86-bloque1.js'));
assert.ok(manifest.scripts.indexOf('./assets/js/puebla-teoria-v86-bloque4.js') < manifest.scripts.indexOf('./assets/js/puebla-teoria-v86-fix.js'));
assert.ok(manifest.scripts.indexOf('./assets/js/puebla-teoria-v86-fix.js') < manifest.scripts.indexOf('./assets/js/auditoria-calidad-v72.js'));
assert.ok(manifest.scripts.indexOf('./assets/js/ui-v85.js') < manifest.scripts.indexOf('./assets/js/ui-v86.js'));

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
assert.ok(ui86.includes("const VERSION = 'v0.86.0'"));
assert.ok(ui86.includes("const CACHE = 'opoweb-v93'"));
assert.ok(ui86.includes('OPOWEB_THEORY_AUDIT_V86'));
assert.ok(ui86.includes('La Puebla 19/19'));
assert.ok(ui86.includes('Carranque 20/20'));
assert.ok(ui86.includes('Fuente teórica autosuficiente'));
assert.ok(pueblaTheoryTest.includes("status: failures.length ? 'REVISAR' : 'APTO'"));
assert.ok(pueblaTheoryTest.includes("assert.equal(report.autonomousThemes, 19)"));
assert.ok(pueblaTheoryTest.includes("assert.equal(report.questions, 570)"));
assert.ok(carranqueTheoryTest.includes("assert.equal(report.carranque.autonomousThemes, 20)"));

assert.equal(webManifest.start_url, './index.html');
assert.equal(webManifest.display, 'standalone');
for (const icon of webManifest.icons) assert.ok(exists(normalize(icon.src)), `Icono inexistente: ${icon.src}`);

assert.ok(browserTest.includes('Versión OpoWeb v0.86.0'));
assert.ok(browserTest.includes("includes('opoweb-v93')"));
assert.ok(browserTest.includes('/assets/js/puebla-teoria-v86-fix.js'));
assert.ok(browserTest.includes('/assets/js/ui-v86.js'));
assert.ok(browserTest.includes('OPOWEB_THEORY_AUDIT_V86'));
assert.ok(browserTest.includes('La Puebla muestra diecinueve temas teóricos autosuficientes'));

console.log(`Integridad v0.86 OK · ${manifest.scripts.length} módulos · ${manifest.allAssets.length} recursos · La Puebla 19/19 · Carranque 20/20`);
