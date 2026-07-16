const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = { console, window: {} };
context.globalThis = context.window;
vm.createContext(context);
const plain = value => JSON.parse(JSON.stringify(value));

const files = ['data/oposiciones.js', 'data/proceso.js', 'data/uc3m.js', 'data/ope-audit-v41.js'];
for (let version = 43; version <= 65; version += 1) files.push(`assets/js/diputacion-v${version}.js`);
files.push(
  'assets/js/uc3m-v66.js', 'assets/js/uc3m-v67.js', 'assets/js/puebla-v68.js',
  'assets/js/carranque-v69.js', 'assets/js/carranque-v69-fix.js', 'assets/js/carranque-v70.js',
  'assets/js/practicos-v71.js', 'assets/js/uc3m-v72-clean.js', 'assets/js/uc3m-v73-transparencia.js',
  'assets/js/uc3m-v73-fix.js', 'assets/js/uc3m-v74-losu.js', 'assets/js/uc3m-v75-estatutos.js',
  'assets/js/uc3m-v76-academica-admision.js', 'assets/js/uc3m-v77-normativa-interna.js',
  'assets/js/uc3m-v78-presupuesto-2026.js', 'assets/js/uc3m-v79-contratacion-interna.js',
  'assets/js/uc3m-v80-cierre-calidad.js', 'assets/js/municipales-v84-cierre.js',
  'assets/js/municipales-v84-fix.js', 'assets/js/diputacion-teoria-v87-bloque1.js',
  'assets/js/diputacion-teoria-v87-bloque2.js', 'assets/js/diputacion-teoria-v87-bloque3.js',
  'assets/js/diputacion-teoria-v87-bloque3-preguntas.js', 'assets/js/diputacion-teoria-v87-bloque4a.js',
  'assets/js/diputacion-teoria-v87-bloque4b.js', 'assets/js/diputacion-teoria-v87-bloque4-preguntas.js',
  'assets/js/diputacion-teoria-v87-bloque5.js', 'assets/js/diputacion-teoria-v87-bloque5-preguntas.js',
  'assets/js/diputacion-teoria-v87-bloque6a.js', 'assets/js/diputacion-teoria-v87-bloque6b.js',
  'assets/js/diputacion-teoria-v87-bloque6-preguntas.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');

const expectedCompleted = Array.from({ length: 12 }, (_, index) => index + 25);
const expectedPending = Array.from({ length: 4 }, (_, index) => index + 37);
const requiredHeadings = [
  'Resumen orientado al aprobado', 'Rigor técnico y terminológico',
  'Desarrollo completo del epígrafe oficial', 'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes', 'Tres preguntas de retención activa', 'Estrategia de examen'
];
const allowedReferences = new Set([
  'LO-WG24-MAIN', 'LO-WG24-TEXT', 'LO-WG24-FORMAT', 'LO-WG24-TABLES',
  'LO-CG24-MAIN', 'LO-CG24-DATA', 'LO-CG24-FORMULAS', 'LO-CG24-ANALYSIS'
]);
const failures = [];
const metrics = [35, 36].map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  if (!theme) {
    failures.push(`Falta tema ${number}`);
    return { number, missing: true };
  }
  const headings = plain(theme.sections.map(section => section.heading));
  const references = (theme.officialSources || []).map(source => source.reference);
  const questions = ope.themeTests?.[theme.id] || [];
  const metric = {
    number,
    title: theme.title,
    words: theme.theoryStatus?.words || 0,
    sources: references.length,
    references,
    treeCharacters: (theme.tree || '').length,
    reviewRows: (theme.reviewTable || []).length,
    headings,
    questions: questions.length,
    uniqueQuestionIds: new Set(questions.map(question => question.id)).size,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true
  };
  if (!metric.autonomous) failures.push(`Tema ${number}: no autosuficiente`);
  if (!metric.programmeLiteral) failures.push(`Tema ${number}: literalidad no validada`);
  if (metric.words < 1800) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 4) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters < 500) failures.push(`Tema ${number}: esquema insuficiente`);
  if (metric.reviewRows < 12) failures.push(`Tema ${number}: tabla de ${metric.reviewRows} filas`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  if (metric.uniqueQuestionIds !== metric.questions) failures.push(`Tema ${number}: identificadores duplicados`);
  for (const question of questions) {
    if (!Array.isArray(question.options) || question.options.length !== 4) failures.push(`Tema ${number}: pregunta ${question.id} sin cuatro opciones`);
    if (!['A', 'B', 'C', 'D'].includes(question.answer)) failures.push(`Tema ${number}: respuesta inválida en ${question.id}`);
    if (!question.justification || question.justification.length < 20) failures.push(`Tema ${number}: justificación insuficiente en ${question.id}`);
  }
  for (const reference of references) if (!allowedReferences.has(reference)) failures.push(`Tema ${number}: fuente no admitida ${reference}`);
  return metric;
});

const theme35 = ope.themes.find(item => Number(item.number) === 35);
const theme36 = ope.themes.find(item => Number(item.number) === 36);
if (!/LibreOffice 24 I/.test(theme35?.title || '') || !/Writer/.test(theme35?.title || '')) failures.push('Numeración: tema 35 incorrecto');
if (!/LibreOffice 24 II/.test(theme36?.title || '') || !/Calc/.test(theme36?.title || '')) failures.push('Numeración: tema 36 incorrecto');

const programme = ope.theoryProgramme?.v87;
if (!programme) failures.push('Falta programa v87');
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(expectedCompleted)) failures.push('Completados incorrectos');
if (JSON.stringify(plain(programme?.pendingThemes || [])) !== JSON.stringify(expectedPending)) failures.push('Pendientes incorrectos');
if (programme?.autonomousThemes !== 12) failures.push(`Autónomos: ${programme?.autonomousThemes}`);
if (programme?.totalThemes !== 16) failures.push(`Total: ${programme?.totalThemes}`);
const state = context.window.OPOWEB_DIPUTACION_THEORY_V87;
if (state?.block !== 6) failures.push('Bloque global incorrecto');
if (state?.numberingCheck?.writerTheme !== 35 || state?.numberingCheck?.calcTheme !== 36) failures.push('Control de numeración incorrecto');

const report = {
  version: 'v0.87-editorial-b6',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  scope: 'Diputación temas 25 a 40',
  autonomousThemes: programme?.autonomousThemes || 0,
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque6.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `Diputación bloque 6 no supera la auditoría: ${failures.join(' | ')}`);
console.log(`Diputación teoría v87 bloque 6 OK · temas 35 y 36 · mínimo ${report.minimumWords} palabras`);
