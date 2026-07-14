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

for (const file of [
  'data/oposiciones.js',
  'assets/js/puebla-v68.js',
  'assets/js/puebla-teoria-v86-bloque1.js'
]) vm.runInContext(read(file), context, { filename: file });

const data = context.window.OPOSICIONES_DATA;
const puebla = data.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
assert.ok(puebla, 'No existe La Puebla');

const expectedCompleted = [1, 2, 3, 4, 5];
const expectedPending = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

const failures = [];
const metrics = expectedCompleted.map(number => {
  const theme = puebla.themes.find(item => Number(item.number) === number);
  if (!theme) {
    failures.push(`Falta tema ${number}`);
    return { number, missing: true };
  }
  const headings = plain(theme.sections.map(section => section.heading));
  const metric = {
    number,
    words: theme.theoryStatus?.words || 0,
    sources: (theme.officialSources || []).length,
    treeCharacters: (theme.tree || '').length,
    reviewRows: (theme.reviewTable || []).length,
    headings,
    questions: (puebla.themeTests[theme.id] || []).length,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true
  };
  if (!metric.autonomous) failures.push(`Tema ${number}: no autosuficiente`);
  if (!metric.programmeLiteral) failures.push(`Tema ${number}: literalidad no validada`);
  if (metric.words < 900) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 2) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters <= 150) failures.push(`Tema ${number}: esquema de ${metric.treeCharacters} caracteres`);
  if (metric.reviewRows < 6) failures.push(`Tema ${number}: tabla de ${metric.reviewRows} filas`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura fija incorrecta`);
  if (metric.questions !== 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  return metric;
});

const completed = plain(puebla.theoryProgramme?.v86?.completedThemes || []);
const pending = plain(puebla.theoryProgramme?.v86?.pendingThemes || []);
const totalQuestions = Object.values(puebla.themeTests).reduce((sum, bank) => sum + bank.length, 0);
const practicalCases = puebla.practicalCases?.length || 0;
const simulations = puebla.simulacros?.length || 0;

if (puebla.themes.length !== 19) failures.push(`Programa: ${puebla.themes.length} temas, esperados 19`);
if (puebla.theoryProgramme?.v86?.autonomousThemes !== 5) failures.push(`Programa: ${puebla.theoryProgramme?.v86?.autonomousThemes} autónomos, esperados 5`);
if (JSON.stringify(completed) !== JSON.stringify(expectedCompleted)) failures.push(`Completados incorrectos: ${JSON.stringify(completed)}`);
if (JSON.stringify(pending) !== JSON.stringify(expectedPending)) failures.push(`Pendientes incorrectos: ${JSON.stringify(pending)}`);
if (context.window.OPOWEB_PUEBLA_THEORY_V86?.status !== 'EN_PROGRESO') failures.push('Estado global distinto de EN_PROGRESO');
if (totalQuestions !== 570) failures.push(`Banco: ${totalQuestions} preguntas, esperadas 570`);
if (practicalCases !== 20) failures.push(`Supuestos: ${practicalCases}, esperados 20`);
if (simulations !== 3) failures.push(`Simulacros: ${simulations}, esperados 3`);
for (const number of expectedPending) {
  const theme = puebla.themes.find(item => Number(item.number) === number);
  if (theme?.theoryStatus?.autonomous === true) failures.push(`Tema ${number}: cerrado antes de su reconstrucción`);
}

const report = {
  version: 'v0.86.0',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  autonomousThemes: 5,
  totalThemes: 19,
  completedThemes: completed,
  pendingThemes: pending,
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  questions: totalQuestions,
  practicalCases,
  simulations,
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'puebla-teoria-v86-bloque1.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `La Puebla bloque 1 no supera la auditoría: ${failures.join(' | ')}`);
console.log(`La Puebla v0.86 bloque 1 OK · ${report.autonomousThemes}/${report.totalThemes} temas · mínimo ${report.minimumWords} palabras · ${report.questions} preguntas`);
