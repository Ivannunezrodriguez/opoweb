const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

const context = {};
vm.createContext(context);
vm.runInContext(read('assets/js/asset-manifest-v83.js'), context, { filename: 'asset-manifest-v83.js' });
const manifest = context.OPOWEB_ASSET_MANIFEST_V83;
const ui = read('assets/js/ui-v90-pedagogia.js');
const readme = read('README.md');
const review = read('docs/REVISION_PEDAGOGICA_V0892.md');
const packageJson = JSON.parse(read('package.json'));

assert.equal(packageJson.version, '0.89.2');
assert.equal(manifest.applicationVersion, 'v0.89.2');
assert.equal(manifest.cacheName, 'opoweb-v96');
assert.equal(manifest.scripts.at(-1), './assets/js/ui-v90-pedagogia.js');
assert.ok(ui.includes("status: 'RESUMEN_Y_PRACTICA_NO_FUENTE_UNICA'"));
assert.ok(ui.includes('completenessPercentagesWithdrawn: true'));
assert.ok(ui.includes('Tema en revisión pedagógica'));
assert.ok(ui.includes('Resumen del epígrafe · revisión pendiente'));
assert.ok(!ui.includes("secondary: 'Fuente teórica principal'"));
assert.ok(readme.includes('ninguna de las cuatro convocatorias se declara actualmente fuente teórica única'));
assert.ok(readme.includes('se retiran los porcentajes globales de completitud'));
assert.ok(review.includes('matriz epígrafe–norma–artículos'));
assert.ok(review.includes('revisión humana de suficiencia'));

console.log('Revisión pedagógica v0.89.2 OK · porcentajes retirados · no fuente única');
