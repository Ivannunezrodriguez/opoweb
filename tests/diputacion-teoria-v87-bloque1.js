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

const files = [
  'data/oposiciones.js',
  'data/proceso.js',
  'data/uc3m.js',
  'data/ope-audit-v41.js'
];
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
  'assets/js/diputacion-teoria-v87-bloque1.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const data = context.window.OPOSICIONES_DATA;
const ope = data.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');

const expectedCompleted = [25, 26];
const expectedPending = Array.from({ length: 14 }, (_, index) => index + 27);
const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];
const requiredReferences = new Set([
  'BOE-A-1978-31229',
  'BOE-A-2003-23186',
  'BOE-A-2004-4214',
  'BOE-A-2005-14803'
]);
const failures = [];
const metrics = expectedCompleted.map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  if (!theme) {
    failures.push(`Falta tema ${number}`);
    return { number, missing: true };
  }
  const headings = plain(theme.sections.map(section => section.heading));
  const references = (theme.officialSources || []).map(source => source.reference);
  const metric = {
    number,
    title: theme.title,
    words: theme.theoryStatus?.words || 0,
    sources: references.length,
    references,
    treeCharacters: (theme.tree || '').length,
    reviewRows: (theme.reviewTable || []).length,
    headings,
    questions: (ope.themeTests?.[theme.id] || []).length,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true
  };
  if (!metric.autonomous) failures.push(`Tema ${number}: no autosuficiente`);
  if (!metric.programmeLiteral) failures.push(`Tema ${number}: literalidad no validada`);
  if (metric.words < 1200) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 3) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters < 350) failures.push(`Tema ${number}: esquema de ${metric.treeCharacters} caracteres`);
  if (metric.reviewRows < 8) failures.push(`Tema ${number}: tabla de ${metric.reviewRows} filas`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura fija incorrecta`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  for (const reference of references) if (!requiredReferences.has(reference)) failures.push(`Tema ${number}: fuente no prevista ${reference}`);
  return metric;
});

const programme = ope.theoryProgramme?.v87;
if (!programme) failures.push('Falta programa teórico v87');
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(expectedCompleted)) failures.push('Temas completados incorrectos');
if (JSON.stringify(plain(programme?.pendingThemes || [])) !== JSON.stringify(expectedPending)) failures.push('Temas pendientes incorrectos');
if (programme?.autonomousThemes !== 2) failures.push(`Autónomos: ${programme?.autonomousThemes}`);
if (programme?.totalThemes !== 16) failures.push(`Total de bloque: ${programme?.totalThemes}`);
if (context.window.OPOWEB_DIPUTACION_THEORY_V87?.status !== 'EN_PROGRESO') failures.push('Estado global incorrecto');

const report = {
  version: 'v0.87-editorial',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  scope: 'Diputación temas 25 a 40',
  autonomousThemes: programme?.autonomousThemes || 0,
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque1.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `Diputación bloque tributario no supera la auditoría: ${failures.join(' | ')}`);
console.log(`Diputación teoría v87 bloque 1 OK · temas 25 y 26 · mínimo ${report.minimumWords} palabras`);
