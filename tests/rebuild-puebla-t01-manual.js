const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const manualFile = 'docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md';
const approvalFile = 'docs/rebuild/puebla/TEMA_01_APROBACION_USUARIO.md';
const moduleFile = 'assets/js/puebla-rebuild-t01-v90.js';
const manual = fs.readFileSync(manualFile, 'utf8');
const approval = fs.readFileSync(approvalFile, 'utf8');
const moduleText = fs.readFileSync(moduleFile, 'utf8');

assert.ok(manual.includes('Tema 1. La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.'));
assert.ok(manual.includes('Matriz epígrafe–norma–artículos'));
assert.ok(manual.includes('Materia deliberadamente excluida del núcleo'));
assert.ok(manual.includes('Qué corrige este borrador respecto de la versión anterior'));

for (let article = 10; article <= 55; article += 1) {
  assert.ok(manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`) || manual.includes(`Artículo ${article}.`), `Falta desarrollo del artículo ${article}`);
}
for (let article = 166; article <= 169; article += 1) {
  assert.ok(manual.includes(`Artículo ${article} `) || manual.includes(`Artículo ${article} ·`), `Falta desarrollo del artículo ${article}`);
}

for (const marker of [
  'tres quintos de cada Cámara',
  'mayoría de dos tercios',
  'quince días',
  'setenta y dos horas',
  'artículo 30.2',
  'estado de alarma',
  'estado de excepción',
  'estado de sitio',
  'artículo 17.3',
  'artículo 49',
  'reforma constitucional de 2026'
]) assert.ok(manual.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico: ${marker}`);

assert.ok(approval.includes('«Tema 1 aprobado»'));
assert.ok(approval.includes('17 de julio de 2026'));
assert.ok(approval.includes('APROBADO_POR_USUARIO_PENDIENTE_INTEGRACION_TECNICA'));
assert.ok(moduleText.includes("status: 'APROBADO_POR_USUARIO_E_INTEGRADO'"));
assert.ok(moduleText.includes("manualStatus") === false, 'No debe depender de una etiqueta antigua de autosuficiencia');
assert.ok(moduleText.includes("pedagogicalStatus: 'APROBADO_POR_USUARIO'"));
assert.ok(moduleText.includes("const MANUAL_URL = './docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md'"));
assert.ok(moduleText.includes('sourceArticle'));
assert.ok(moduleText.includes('traceable: true'));
assert.ok(moduleText.includes('Tema 1 aprobado por el usuario'));
assert.ok(moduleText.includes('Los otros dieciocho temas de La Puebla continúan en revisión pedagógica.'));

const questionIds = [...moduleText.matchAll(/puebla-t01-manual-q/g)].length;
assert.ok(questionIds >= 1, 'No se define el prefijo del banco trazable');
const questionRows = [...moduleText.matchAll(/\n\s*q\(\d+,/g)].length;
assert.equal(questionRows, 30, `Deben existir 30 preguntas trazables, no ${questionRows}`);

const context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync('assets/js/asset-manifest-v83.js', 'utf8'), context);
const manifest = context.OPOWEB_ASSET_MANIFEST_V83;
assert.equal(manifest.applicationVersion, 'v0.89.3');
assert.equal(manifest.cacheName, 'opoweb-v97');
assert.ok(manifest.scripts.includes('./assets/js/puebla-rebuild-t01-v90.js'));
assert.ok(manifest.staticAssets.includes('./docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md'));
assert.ok(manifest.scripts.indexOf('./assets/js/puebla-rebuild-t01-v90.js') < manifest.scripts.indexOf('./assets/js/ui-v90-pedagogia.js'));

const coverage = {
  status: 'APROBADO_POR_USUARIO_E_INTEGRADO',
  approvedAt: '2026-07-17',
  constitutionRightsArticles: '10-55',
  reformArticles: '166-169',
  articleHeadingsChecked: 50,
  traceableQuestions: 30,
  publicationAllowed: true,
  remainingPueblaThemes: 18
};

fs.writeFileSync('rebuild-puebla-t01-manual.json', JSON.stringify(coverage, null, 2));
console.log(JSON.stringify(coverage));
console.log('Tema 1 manual · aprobado por el usuario · integrado · 30 preguntas trazables');