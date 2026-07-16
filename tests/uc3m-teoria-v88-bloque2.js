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
run('assets/js/uc3m-teoria-v88-bloque2.js');

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const theme = ope?.themes?.find(item => Number(item.number) === 15);
const state = window.OPOWEB_UC3M_THEORY_V88;
assert.ok(ope && theme && state, 'No se cargó UC3M tema 15 v0.88');

const failures = [];
const questions = ope.themeTests?.[theme.id] || [];
const headings = (theme.sections || []).map(section => section.heading);
const references = (theme.officialSources || []).map(source => source.reference);
const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Vigencia, estructura y terminología',
  'Defensor Universitario: elección y cese',
  'Servicios universitarios: finalidad y formas de gestión',
  'Autonomía económica, patrimonio e inventario',
  'Presupuesto, memoria económica y control',
  'Contratación universitaria',
  'Reforma de los Estatutos',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];
const allowedReferences = new Set([
  'UC3M-ESTATUTOS-CONSOLIDADO',
  'BOE-A-2003-17782',
  'UC3M-DECRETO-95-2009',
  'BOE-A-2026-10800'
]);

const metric = {
  number: 15,
  title: theme.title,
  words: theme.theoryStatus?.words || 0,
  sections: theme.sections?.length || 0,
  sources: references.length,
  references,
  treeCharacters: (theme.tree || '').length,
  reviewRows: theme.reviewTable?.length || 0,
  questions: questions.length,
  uniqueQuestionIds: new Set(questions.map(question => question.id)).size,
  autonomous: theme.theoryStatus?.autonomous === true,
  programmeLiteral: theme.theoryStatus?.programmeLiteral === true
};

if (!metric.autonomous) failures.push('Tema 15 no autosuficiente');
if (!metric.programmeLiteral) failures.push('Tema 15 sin literalidad validada');
if (metric.words < 2400) failures.push(`Solo ${metric.words} palabras`);
if (metric.sections < 14) failures.push(`Solo ${metric.sections} secciones`);
if (metric.sources !== 4) failures.push(`${metric.sources} fuentes`);
if (metric.treeCharacters < 900) failures.push('Esquema insuficiente');
if (metric.reviewRows < 25) failures.push(`Tabla de ${metric.reviewRows} filas`);
if (metric.questions < 30) failures.push(`Solo ${metric.questions} preguntas`);
if (metric.uniqueQuestionIds !== metric.questions) failures.push('Identificadores duplicados');
for (const heading of requiredHeadings) if (!headings.includes(heading)) failures.push(`Falta sección: ${heading}`);
for (const reference of references) if (!allowedReferences.has(reference)) failures.push(`Fuente no admitida: ${reference}`);
for (const source of theme.officialSources || []) {
  if (!/^https:\/\/(www\.)?(boe\.es|uc3m\.es|e-archivo\.uc3m\.es)\//.test(source.url)) failures.push(`URL no oficial: ${source.url}`);
}
for (const question of questions) {
  if (!Array.isArray(question.options) || question.options.length !== 4) failures.push(`Opciones inválidas: ${question.id}`);
  if (!question.options?.some(option => option.letter === question.answer)) failures.push(`Respuesta inválida: ${question.id}`);
  if (!question.justification && !question.source) failures.push(`Sin trazabilidad: ${question.id}`);
}

const programme = ope.uc3mTheoryProgramme?.v88;
if (JSON.stringify(programme?.completedThemes) !== JSON.stringify([13, 14, 15])) failures.push('Completados incorrectos');
if (JSON.stringify(programme?.pendingThemes) !== JSON.stringify([16, 17, 18, 19, 20])) failures.push('Pendientes incorrectos');
if (programme?.autonomousThemes !== 3) failures.push(`Autónomos incorrectos: ${programme?.autonomousThemes}`);
if (state.block !== 2) failures.push(`Bloque incorrecto: ${state.block}`);
if (!state.statutes?.currentReferenceConfirmed) failures.push('No consta comprobación de vigencia');

const report = {
  version: 'v0.88-editorial-b2',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  metric,
  failures
};
fs.writeFileSync('uc3m-teoria-v88-bloque2.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], failures.join(' | '));
console.log(`UC3M teoría v0.88 bloque 2 OK · tema 15 · ${metric.words} palabras · ${metric.questions} preguntas`);
