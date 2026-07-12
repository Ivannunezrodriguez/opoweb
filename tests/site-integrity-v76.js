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
assert.ok(/const CACHE = 'opoweb-v83';/.test(serviceWorker), 'La caché no es opoweb-v83');
assert.ok(index.includes("navigator.serviceWorker.register('./sw.js')"), 'Falta registro del service worker');
assert.equal(manifest.start_url, './index.html');
assert.equal(manifest.display, 'standalone');
assert.ok(manifest.name && manifest.short_name);
assert.ok(Array.isArray(manifest.icons) && manifest.icons.length >= 1);
for (const icon of manifest.icons) assert.ok(exists(localPath(icon.src)), `Icono inexistente: ${icon.src}`);
assert.ok(index.includes('assets/js/uc3m-v76-academica-admision.js'), 'Falta cargar UC3M v0.76');
assert.ok(index.includes('assets/js/auditoria-calidad-v72.js'), 'Falta cargar auditoría de calidad');
assert.ok(index.includes('assets/js/ui-v76.js'), 'Falta cargar interfaz v0.76');

console.log(`Integridad web v0.76 OK · ${indexAssets.length} referencias · ${cachedAssets.length} recursos PWA`);
