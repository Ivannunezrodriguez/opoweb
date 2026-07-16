const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = file => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/uc3m-v66.js');
run('assets/js/uc3m-v67.js');
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
run('assets/js/uc3m-teoria-v88-bloque1a.js');
run('assets/js/uc3m-teoria-v88-bloque1b.js');

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const state = window.OPOWEB_UC3M_THEORY_V88;
assert.ok(ope && state, 'No se cargó el bloque editorial UC3M v0.88');

const allowedSources = new Set([
  'BOE-A-2023-7500', 'BOE-A-1978-31229', 'BOE-A-2021-12613', 'BOE-A-2021-15781',
  'BOE-A-2010-20147', 'BOE-A-2015-11719', 'BOE-A-2011-9617'
]);
const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];
const failures = [];
const metrics = [13, 14].map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  const questions = ope.themeTests?.[theme?.id] || [];
  if (!theme) {
    failures.push(`Falta tema ${number}`);
    return { number, missing: true };
  }
  const headings = (theme.sections || []).map(section => section.heading);
  const references = (theme.officialSources || []).map(source => source.reference);
  const metric = {
    number,
    title: theme.title,
    words: theme.theoryStatus?.words || 0,
    sections: theme.sections?.length || 0,
    sources: references.length,
    references,
    treeCharacters: (theme.tree || '').length,
    reviewRows: theme.reviewTable?.length || 0,
    questions: questions.length,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true
  };
  if (!metric.autonomous) failures.push(`Tema ${number}: no autosuficiente`);
  if (!metric.programmeLiteral) failures.push(`Tema ${number}: epígrafe no validado`);
  if (metric.words < 2200) failures.push(`Tema ${number}: solo ${metric.words} palabras`);
  if (metric.sections < 11) failures.push(`Tema ${number}: solo ${metric.sections} secciones`);
  if (metric.sources < 4) failures.push(`Tema ${number}: solo ${metric.sources} fuentes`);
  if (metric.treeCharacters < 700) failures.push(`Tema ${number}: esquema insuficiente`);
  if (metric.reviewRows < 16) failures.push(`Tema ${number}: tabla insuficiente`);
  if (metric.questions < 30) failures.push(`Tema ${number}: solo ${metric.questions} preguntas`);
  for (const heading of requiredHeadings) if (!headings.includes(heading)) failures.push(`Tema ${number}: falta ${heading}`);
  for (const reference of references) if (!allowedSources.has(reference)) failures.push(`Tema ${number}: fuente no admitida ${reference}`);
  for (const source of theme.officialSources || []) {
    if (!/^https:\/\/(www\.)?boe\.es\//.test(source.url)) failures.push(`Tema ${number}: URL no oficial ${source.url}`);
  }
  return metric;
});

const programme = ope.uc3mTheoryProgramme?.v88;
assert.ok(programme, 'Falta programa editorial v0.88');
if (JSON.stringify(programme.completedThemes) !== JSON.stringify([13, 14])) failures.push('Completados incorrectos');
if (JSON.stringify(programme.pendingThemes) !== JSON.stringify([15, 16, 17, 18, 19, 20])) failures.push('Pendientes incorrectos');
if (programme.autonomousThemes !== 2) failures.push(`Temas autónomos incorrectos: ${programme.autonomousThemes}`);
if (state.block !== 1) failures.push(`Bloque incorrecto: ${state.block}`);

const report = {
  version: 'v0.88-editorial-b1',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  scope: 'UC3M temas específicos 13 a 20',
  completedThemes: programme.completedThemes,
  pendingThemes: programme.pendingThemes,
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  metrics,
  failures
};
fs.writeFileSync('uc3m-teoria-v88-bloque1.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], failures.join(' | '));
console.log(`UC3M teoría v0.88 bloque 1 OK · temas 13 y 14 · mínimo ${report.minimumWords} palabras`);
