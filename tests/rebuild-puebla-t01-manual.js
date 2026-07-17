const fs = require('fs');
const assert = require('assert');

const file = 'docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md';
const text = fs.readFileSync(file, 'utf8');

assert.ok(text.includes('BORRADOR PARA REVISIÓN DEL USUARIO'));
assert.ok(text.includes('No publicado en OpoWeb. No fusionar sin aprobación expresa.'));
assert.ok(text.includes('Tema 1. La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.'));
assert.ok(text.includes('Matriz epígrafe–norma–artículos'));
assert.ok(text.includes('Materia deliberadamente excluida del núcleo'));

for (let article = 10; article <= 55; article += 1) {
  assert.ok(text.includes(`Artículo ${article} `) || text.includes(`Artículo ${article} ·`) || text.includes(`Artículo ${article}.`), `Falta desarrollo del artículo ${article}`);
}
for (let article = 166; article <= 169; article += 1) {
  assert.ok(text.includes(`Artículo ${article} `) || text.includes(`Artículo ${article} ·`), `Falta desarrollo del artículo ${article}`);
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
]) assert.ok(text.toLowerCase().includes(marker.toLowerCase()), `Falta contenido crítico: ${marker}`);

assert.ok(!text.includes('Tema autosuficiente'));
assert.ok(!text.includes('Fuente teórica principal'));
assert.ok(text.includes('Tema cerrado: **NO**'));

const coverage = {
  status: 'BORRADOR_PENDIENTE_APROBACION_USUARIO',
  constitutionRightsArticles: '10-55',
  reformArticles: '166-169',
  articleHeadingsChecked: 50,
  publicationAllowed: false
};

fs.writeFileSync('rebuild-puebla-t01-manual.json', JSON.stringify(coverage, null, 2));
console.log(JSON.stringify(coverage));
console.log('Tema 1 manual · cobertura estructural comprobada · aprobación humana pendiente');
