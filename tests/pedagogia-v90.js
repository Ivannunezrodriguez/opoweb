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
const pueblaT01 = read('assets/js/puebla-rebuild-t01-v90.js');
const readme = read('README.md');
const review = read('docs/REVISION_PEDAGOGICA_V0892.md');
const approval = read('docs/rebuild/puebla/TEMA_01_APROBACION_USUARIO.md');
const packageJson = JSON.parse(read('package.json'));

assert.equal(packageJson.version, '0.89.3');
assert.equal(manifest.applicationVersion, 'v0.89.3');
assert.equal(manifest.cacheName, 'opoweb-v97');
assert.equal(manifest.scripts.at(-1), './assets/js/ui-v90-pedagogia.js');
assert.ok(manifest.scripts.includes('./assets/js/puebla-rebuild-t01-v90.js'));
assert.ok(ui.includes("status: 'RESUMEN_Y_PRACTICA_NO_FUENTE_UNICA'"));
assert.ok(ui.includes('completenessPercentagesWithdrawn: true'));
assert.ok(ui.includes('La Puebla · 1 tema aprobado'));
assert.ok(ui.includes('18 temas en revisión'));
assert.ok(!ui.includes("secondary: 'Fuente teórica principal'"));
assert.ok(pueblaT01.includes("status: 'APROBADO_POR_USUARIO_E_INTEGRADO'"));
assert.ok(pueblaT01.includes('Los otros dieciocho temas de La Puebla continúan en revisión pedagógica.'));
assert.ok(readme.includes('ninguna convocatoria completa se declara actualmente fuente teórica única'));
assert.ok(readme.includes('cada tema se reconstruye y se somete individualmente a aprobación humana'));
assert.ok(readme.includes('La Puebla: **1 aprobado y 18 en revisión**'));
assert.ok(review.includes('matriz epígrafe–norma–artículos'));
assert.ok(review.includes('revisión humana de suficiencia'));
assert.ok(approval.includes('«Tema 1 aprobado»'));

console.log('Revisión pedagógica v0.89.3 OK · tema 1 aprobado · 18 temas de La Puebla en revisión');