const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = file => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const wordCount = value => normalize(value).split(/\s+/).filter(Boolean).length;
const plain = value => JSON.parse(JSON.stringify(value));

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
run('assets/js/carranque-teoria-v85-estructura.js');
run('assets/js/carranque-teoria-v85-bloque2.js');
run('assets/js/carranque-teoria-v85-bloque3.js');

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
const release = window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE3;
assert.ok(ope, 'No se encontró Carranque');
assert.ok(release, 'No se cargó el bloque 11-15');
assert.deepStrictEqual(plain(release.themes), [11,12,13,14,15]);
assert.deepStrictEqual(plain(release.completedThemes), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
assert.deepStrictEqual(plain(release.pendingThemes), [16,17,18,19,20]);

const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

const results = [];
for (const number of release.themes) {
  const theme = ope.themes.find(item => Number(item.number) === number);
  const headings = (theme.sections || []).map(section => section.heading);
  const sectionText = (theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ');
  const fullText = `${sectionText} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  const words = wordCount(fullText);
  const paragraphs = (theme.sections || []).reduce((sum, section) => sum + (section.paragraphs || []).length, 0);

  for (const heading of requiredHeadings) assert.ok(headings.includes(heading), `Tema ${number}: falta ${heading}`);
  assert.ok(!headings.some(heading => /argot tecnico|trampas habituales|mapa de estudio util/i.test(normalize(heading))), `Tema ${number}: sección excluida`);
  assert.ok(words >= 1200, `Tema ${number} insuficiente: ${words} palabras`);
  assert.ok(theme.sections.length >= 15, `Tema ${number}: pocas secciones`);
  assert.ok(paragraphs >= 40, `Tema ${number}: pocos párrafos (${paragraphs})`);
  assert.ok((theme.reviewTable || []).length >= 9, `Tema ${number}: cuadro insuficiente`);
  assert.ok(wordCount(theme.tree) >= 30, `Tema ${number}: esquema insuficiente`);
  assert.ok((theme.officialSources || []).length >= 3, `Tema ${number}: fuentes insuficientes`);
  assert.ok(theme.officialSources.every(source => /^BOE-A-/.test(source.reference)));
  assert.ok(theme.officialSources.every(source => source.reviewedAt === '2026-07-13'));
  assert.ok((theme.articleCoverage || []).length >= 4, `Tema ${number}: cobertura normativa insuficiente`);
  assert.equal((theme.retentionQuestions || []).length, 3);
  assert.equal(theme.theoryStatus.autonomous, true);
  assert.equal(theme.theoryStatus.fixedStudyStructure, true);
  assert.equal(theme.theoryStatus.articleByArticle, true);
  assert.equal(theme.theoryStatus.noOffSyllabusFiller, true);
  assert.equal((ope.themeTests?.[theme.id] || []).length, 30, `Tema ${number}: banco alterado`);

  results.push({ number, words, sections: theme.sections.length, paragraphs, sources: theme.officialSources.length, articleBlocks: theme.articleCoverage.length });
}

const total = results.reduce((sum, item) => sum + item.words, 0);
const minimum = Math.min(...results.map(item => item.words));
assert.ok(total >= 7000, `Bloque 11-15 demasiado corto: ${total}`);

fs.writeFileSync('carranque-teoria-v85-bloque3.json', JSON.stringify({
  version: release.version,
  reviewedAt: release.reviewedAt,
  status: 'APTO',
  themes: results,
  totalWords: total,
  minimumWords: minimum,
  completedThemes: release.completedThemes,
  pendingThemes: release.pendingThemes
}, null, 2));

console.log(`Carranque teoría v0.85 bloque 3 APTO · ${total} palabras · mínimo por tema ${minimum}`);
