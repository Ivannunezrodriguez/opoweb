const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));
const normalize = value => value.replace(/^\.\//, '');

const context = {};
vm.createContext(context);
vm.runInContext(read('assets/js/asset-manifest-v83.js'), context, { filename: 'asset-manifest-v83.js' });
const manifest = context.OPOWEB_ASSET_MANIFEST_V83;

assert.ok(manifest, 'No se ha creado OPOWEB_ASSET_MANIFEST_V83');
assert.equal(manifest.applicationVersion, 'v0.84.0');
assert.equal(manifest.cacheName, 'opoweb-v91');
assert.ok(Array.isArray(manifest.scripts));
assert.ok(Array.isArray(manifest.staticAssets));
assert.ok(Array.isArray(manifest.allAssets));
assert.ok(manifest.scripts.length > 100, 'El manifiesto no contiene todos los módulos históricos');
assert.equal(new Set(manifest.scripts).size, manifest.scripts.length, 'Hay scripts duplicados');
assert.equal(new Set(manifest.allAssets).size, manifest.allAssets.length, 'Hay recursos duplicados');
assert.deepStrictEqual(
  JSON.parse(JSON.stringify(manifest.allAssets)),
  [...manifest.staticAssets, ...manifest.scripts],
  'allAssets debe conservar el orden estático + scripts'
);

for (const asset of manifest.allAssets) {
  const file = normalize(asset);
  if (!file) continue;
  assert.ok(exists(file), `Recurso declarado inexistente: ${asset}`);
}

const position = asset => manifest.scripts.indexOf(asset);
assert.equal(manifest.scripts[0], './data/oposiciones.js');
assert.equal(manifest.scripts.at(-1), './assets/js/ui-v84.js');
assert.ok(position('./assets/js/storage-v82.js') < position('./assets/js/app.js'));
assert.ok(position('./assets/js/app.js') < position('./assets/js/ui-v29.js'));
assert.ok(position('./assets/js/practicos-v71.js') < position('./assets/js/municipales-v84-cierre.js'));
assert.ok(position('./assets/js/municipales-v84-cierre.js') < position('./assets/js/municipales-v84-fix.js'));
assert.ok(position('./assets/js/municipales-v84-fix.js') < position('./assets/js/auditoria-calidad-v72.js'));
assert.ok(position('./assets/js/ui-v83.js') < position('./assets/js/ui-v84.js'));

const index = read('index.html');
const scriptSources = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
assert.deepStrictEqual(scriptSources, [
  'assets/js/asset-manifest-v83.js',
  'assets/js/loader-v83.js'
], 'index.html solo debe cargar manifiesto y cargador');
assert.ok(!index.includes('assets/js/app.js'), 'index.html no debe repetir módulos históricos');

const loader = read('assets/js/loader-v83.js');
assert.ok(/for \(const source of manifest\.scripts\) await loadScript\(source\)/.test(loader));
assert.ok(/opoweb:ready/.test(loader));
assert.ok(/opoweb:failed/.test(loader));
assert.ok(/serviceWorker\.register\('\.\/sw\.js'\)/.test(loader));

const serviceWorker = read('sw.js');
assert.ok(serviceWorker.includes("importScripts('./assets/js/asset-manifest-v83.js')"));
assert.ok(serviceWorker.includes('const CACHE = MANIFEST.cacheName'));
assert.ok(serviceWorker.includes('const ASSETS = MANIFEST.allAssets'));
assert.ok(!/const ASSETS = \[/.test(serviceWorker), 'sw.js no debe mantener otra lista manual de recursos');

console.log(`Cargador v0.84 OK · ${manifest.scripts.length} módulos · ${manifest.allAssets.length} recursos · sin duplicados`);
