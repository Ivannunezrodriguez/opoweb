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
  'assets/js/uc3m-v66.js',
  'assets/js/uc3m-v67.js',
  'assets/js/puebla-v68.js',
  'assets/js/carranque-v69.js',
  'assets/js/carranque-v69-fix.js',
  'assets/js/carranque-v70.js',
  'assets/js/practicos-v71.js',
  'assets/js/uc3m-v72-clean.js',
  'assets/js/uc3m-v73-transparencia.js',
  'assets/js/uc3m-v73-fix.js',
  'assets/js/uc3m-v74-losu.js',
  'assets/js/uc3m-v75-estatutos.js',
  'assets/js/uc3m-v76-academica-admision.js',
  'assets/js/uc3m-v77-normativa-interna.js',
  'assets/js/uc3m-v78-presupuesto-2026.js',
  'assets/js/uc3m-v79-contratacion-interna.js',
  'assets/js/uc3m-v80-cierre-calidad.js',
  'assets/js/municipales-v84-cierre.js',
  'assets/js/municipales-v84-fix.js',
  'assets/js/diputacion-teoria-v87-bloque1.js',
  'assets/js/diputacion-teoria-v87-bloque2.js',
  'assets/js/diputacion-teoria-v87-bloque3.js',
  'assets/js/diputacion-teoria-v87-bloque3-preguntas.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');

const expectedCompleted = [25, 26, 27, 28, 29, 30];
const expectedPending = Array.from({ length: 10 }, (_, index) => index + 31);
const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];
const allowedReferences = new Set([
  'BOE-A-2004-4214', 'BOE-A-2004-4163', 'BOE-A-1990-23930',
  'BOE-A-1999-1826', 'BOE-A-2021-18276', 'BOE-A-2003-23186'
]);
const failures = [];
const metrics = [29, 30].map(number => {
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
  if (metric.words < 1200) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 3) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters < 350) failures.push(`Tema ${number}: esquema de ${metric.treeCharacters} caracteres`);
  if (metric.reviewRows < 9) failures.push(`Tema ${number}: tabla de ${metric.reviewRows} filas`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  if (metric.questions !== metric.uniqueQuestionIds) failures.push(`Tema ${number}: identificadores de pregunta duplicados`);
  for (const reference of references) if (!allowedReferences.has(reference)) failures.push(`Tema ${number}: fuente no admitida ${reference}`);
  return metric;
});

const theme22 = ope.themes.find(item => Number(item.number) === 22);
const theme29 = ope.themes.find(item => Number(item.number) === 29);
const theme30 = ope.themes.find(item => Number(item.number) === 30);
if (!/OAPGT|Organismo Autónomo Provincial de Gestión Tributaria/.test(theme22?.title || '')) failures.push('Numeración: OAPGT no está en el tema 22');
if (!/Impuesto sobre Bienes Inmuebles/.test(theme29?.title || '') || !/Impuesto sobre Actividades Económicas/.test(theme29?.title || '')) failures.push('Numeración: tema 29 no corresponde a IBI e IAE');
if (!/vehículos de tracción mecánica/i.test(theme30?.title || '') || !/Incremento del valor de los terrenos/i.test(theme30?.title || '') || !/Tasas/.test(theme30?.title || '')) failures.push('Numeración: tema 30 no corresponde a IVTM, IIVTNU y tasas');

const programme = ope.theoryProgramme?.v87;
if (!programme) failures.push('Falta programa v87');
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(expectedCompleted)) failures.push('Completados incorrectos');
if (JSON.stringify(plain(programme?.pendingThemes || [])) !== JSON.stringify(expectedPending)) failures.push('Pendientes incorrectos');
if (programme?.autonomousThemes !== 6) failures.push(`Autónomos: ${programme?.autonomousThemes}`);
if (programme?.totalThemes !== 16) failures.push(`Total: ${programme?.totalThemes}`);
const state = context.window.OPOWEB_DIPUTACION_THEORY_V87;
const questionState = context.window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B3;
if (state?.block !== 3) failures.push('Bloque global incorrecto');
if (state?.numberingCheck?.oapgtTheme !== 22 || state?.numberingCheck?.ibiIaeTheme !== 29 || state?.numberingCheck?.ivtmIivtnuTasasTheme !== 30) failures.push('Control de numeración incorrecto');
if (questionState?.addedTheme29 !== 7 || questionState?.addedTheme30 !== 4) failures.push('Refuerzo de preguntas incorrecto');

const report = {
  version: 'v0.87-editorial-b3',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  scope: 'Diputación temas 25 a 40',
  autonomousThemes: programme?.autonomousThemes || 0,
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  numbering: state?.numberingCheck,
  questionAdditions: questionState,
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque3.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `Diputación bloque 3 no supera la auditoría: ${failures.join(' | ')}`);
console.log(`Diputación teoría v87 bloque 3 OK · temas 29 y 30 · mínimo ${report.minimumWords} palabras`);
