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
  'assets/js/diputacion-teoria-v87-bloque5.js', 'assets/js/diputacion-teoria-v87-bloque5-preguntas.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');

const expectedCompleted = Array.from({ length: 10 }, (_, index) => index + 25);
const expectedPending = Array.from({ length: 6 }, (_, index) => index + 35);
const requiredHeadings = [
  'Resumen orientado al aprobado', 'Rigor técnico y terminológico',
  'Desarrollo completo del epígrafe oficial', 'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes', 'Tres preguntas de retención activa', 'Estrategia de examen'
];
const allowedReferences = new Set([
  'MS-EDGE-SUPPORT', 'MS-EDGE-PRIVACY', 'OPENTEXT-GROUPWISE', 'OPENTEXT-GW24-DOCS',
  'MS-W11-PRINTER', 'MS-W11-SCANNER', 'MS-W11-PRINTQUEUE'
]);
const failures = [];
const metrics = [33, 34].map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  if (!theme) {
    failures.push(`Falta tema ${number}`);
    return { number, missing: true };
  }
  const headings = plain(theme.sections.map(section => section.heading));
  const references = (theme.officialSources || []).map(source => source.reference);
  const questions = ope.themeTests?.[theme.id] || [];
  const ids = questions.map(question => question.id);
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
    uniqueQuestionIds: new Set(ids).size,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true
  };
  if (!metric.autonomous) failures.push(`Tema ${number}: no autosuficiente`);
  if (!metric.programmeLiteral) failures.push(`Tema ${number}: literalidad no validada`);
  if (metric.words < 1000) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 3) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters < 300) failures.push(`Tema ${number}: esquema insuficiente`);
  if (metric.reviewRows < 10) failures.push(`Tema ${number}: tabla de ${metric.reviewRows} filas`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  if (metric.uniqueQuestionIds !== metric.questions) failures.push(`Tema ${number}: identificadores duplicados`);
  for (const reference of references) if (!allowedReferences.has(reference)) failures.push(`Tema ${number}: fuente no admitida ${reference}`);
  return metric;
});

const theme33 = ope.themes.find(item => Number(item.number) === 33);
const theme34 = ope.themes.find(item => Number(item.number) === 34);
if (!/Edge/.test(theme33?.title || '') || !/GroupWise/.test(theme33?.title || '')) failures.push('Numeración: tema 33 incorrecto');
if (!/Impresión/i.test(theme34?.title || '') || !/escaneado/i.test(theme34?.title || '')) failures.push('Numeración: tema 34 incorrecto');

const programme = ope.theoryProgramme?.v87;
if (!programme) failures.push('Falta programa v87');
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(expectedCompleted)) failures.push('Completados incorrectos');
if (JSON.stringify(plain(programme?.pendingThemes || [])) !== JSON.stringify(expectedPending)) failures.push('Pendientes incorrectos');
if (programme?.autonomousThemes !== 10) failures.push(`Autónomos: ${programme?.autonomousThemes}`);
if (programme?.totalThemes !== 16) failures.push(`Total: ${programme?.totalThemes}`);
const state = context.window.OPOWEB_DIPUTACION_THEORY_V87;
if (state?.block !== 5) failures.push('Bloque global incorrecto');
if (state?.numberingCheck?.edgeGroupWiseTheme !== 33 || state?.numberingCheck?.printScanTheme !== 34) failures.push('Control de numeración incorrecto');
if (context.window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B5?.addedTheme33 !== 2) failures.push('Refuerzo tema 33 incorrecto');
if (context.window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B5?.addedTheme34 !== 1) failures.push('Refuerzo tema 34 incorrecto');

const report = {
  version: 'v0.87-editorial-b5',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  scope: 'Diputación temas 25 a 40',
  autonomousThemes: programme?.autonomousThemes || 0,
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque5.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `Diputación bloque 5 no supera la auditoría: ${failures.join(' | ')}`);
console.log(`Diputación teoría v87 bloque 5 OK · temas 33 y 34 · mínimo ${report.minimumWords} palabras`);