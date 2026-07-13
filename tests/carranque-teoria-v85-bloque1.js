const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = file => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const wordCount = value => normalize(value).split(/\s+/).filter(Boolean).length;

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/uc3m-v66.js');
run('assets/js/uc3m-v67.js');
run('assets/js/puebla-v68.js');
run('assets/js/carranque-v69.js');
run('assets/js/carranque-v69-fix.js');
run('assets/js/carranque-v70.js');
run('assets/js/practicos-v71.js');
run('assets/js/uc3m-v72-clean.js');
run('assets/js/uc3m-v73-transparencia.js');
run('assets/js/uc3m-v73-fix.js');
run('assets/js/uc3m-v74-losu.js');
run('assets/js/uc3m-v75-estatutos.js');
run('assets/js/uc3m-v76-academica-admision.js');
run('assets/js/uc3m-v77-normativa-interna.js');
run('assets/js/uc3m-v78-presupuesto-2026.js');
run('assets/js/uc3m-v79-contratacion-interna.js');
run('assets/js/uc3m-v80-cierre-calidad.js');
run('assets/js/municipales-v84-cierre.js');
run('assets/js/municipales-v84-fix.js');
run('assets/js/carranque-teoria-v85-bloque1.js');

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
const release = window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE1;
assert.ok(ope, 'No se encontró Carranque');
assert.ok(release, 'No se cargó el bloque teórico v0.85');
assert.deepStrictEqual(JSON.parse(JSON.stringify(release.themes)), [1, 2, 3, 4, 5]);
assert.equal(release.autonomous, true);
assert.equal(ope.theoryProgramme.v85.pendingThemes.length, 15);

const results = [];
for (const number of release.themes) {
  const theme = ope.themes.find(item => Number(item.number) === number);
  assert.ok(theme, `No existe el tema ${number}`);
  const sectionText = (theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ');
  const fullText = `${sectionText} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  const words = wordCount(fullText);
  const paragraphs = (theme.sections || []).reduce((sum, section) => sum + (section.paragraphs || []).length, 0);

  assert.ok(words >= 1000, `Tema ${number} insuficiente: ${words} palabras`);
  assert.ok(theme.sections.length >= 8, `Tema ${number}: pocas secciones`);
  assert.ok(paragraphs >= 20, `Tema ${number}: pocos párrafos (${paragraphs})`);
  assert.ok((theme.reviewTable || []).length >= 8, `Tema ${number}: tabla insuficiente`);
  assert.ok(wordCount(theme.tree) >= 25, `Tema ${number}: esquema insuficiente`);
  assert.ok((theme.officialSources || []).length >= 2, `Tema ${number}: fuentes oficiales insuficientes`);
  assert.ok(theme.officialSources.every(source => /^BOE-A-/.test(source.reference)), `Tema ${number}: referencia no oficial`);
  assert.ok(theme.officialSources.every(source => source.reviewedAt === '2026-07-13'));
  assert.equal(theme.theoryStatus.autonomous, true);
  assert.equal(theme.theoryStatus.sourcePolicy, 'Fuentes oficiales consolidadas y explicación autosuficiente');
  assert.equal((ope.themeTests?.[theme.id] || []).length, 30, `Tema ${number}: se alteró el banco de preguntas`);

  results.push({ number, words, sections: theme.sections.length, paragraphs, sources: theme.officialSources.length });
}

const minimum = Math.min(...results.map(item => item.words));
const total = results.reduce((sum, item) => sum + item.words, 0);
assert.ok(total >= 6500, `Bloque 1-5 demasiado corto: ${total} palabras`);

fs.writeFileSync('carranque-teoria-v85-bloque1.json', JSON.stringify({
  version: release.version,
  reviewedAt: release.reviewedAt,
  status: 'APTO',
  themes: results,
  totalWords: total,
  minimumWords: minimum,
  pendingThemes: ope.theoryProgramme.v85.pendingThemes
}, null, 2));

console.log(`Carranque teoría v0.85 bloque 1 APTO · ${total} palabras · mínimo por tema ${minimum}`);
