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
  'assets/js/diputacion-teoria-v87-bloque3-preguntas.js',
  'assets/js/diputacion-teoria-v87-bloque4a.js',
  'assets/js/diputacion-teoria-v87-bloque4b.js',
  'assets/js/diputacion-teoria-v87-bloque4-preguntas.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');

const expectedCompleted = [25, 26, 27, 28, 29, 30, 31, 32];
const expectedPending = Array.from({ length: 8 }, (_, index) => index + 33);
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
  'BOE-A-2020-14046', 'CELEX:02014R0910-20241018', 'BOE-A-2025-6601', 'BOE-A-2015-10565',
  'MS-LEARN-W11-COPY', 'MS-LEARN-W11-MOVE', 'MS-LEARN-W11-DEL', 'MS-LEARN-W11-MKDIR',
  'MS-LEARN-W11-DIR', 'MS-LEARN-W11-ROBOCOPY'
]);
const failures = [];
const metrics = [31, 32].map(number => {
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
  if (metric.sources < 4) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters < 450) failures.push(`Tema ${number}: esquema de ${metric.treeCharacters} caracteres`);
  if (metric.reviewRows < 10) failures.push(`Tema ${number}: tabla de ${metric.reviewRows} filas`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  for (const reference of references) if (!allowedReferences.has(reference)) failures.push(`Tema ${number}: fuente no admitida ${reference}`);
  return metric;
});

const theme31 = ope.themes.find(item => Number(item.number) === 31);
const theme32 = ope.themes.find(item => Number(item.number) === 32);
if (!/Ley 6\/2020/.test(theme31?.title || '') || !/certificados electrónicos/i.test(theme31?.title || '')) failures.push('Numeración: tema 31 incorrecto');
if (!/Microsoft Windows 11 Pro I/i.test(theme32?.title || '') || !/archivos y carpetas/i.test(theme32?.title || '')) failures.push('Numeración: tema 32 incorrecto');
if ((theme31?.officialSources || []).some(source => source.reference === 'BOE-A-2005-21163')) failures.push('Tema 31 utiliza el antiguo RD 1553/2005 derogado');
if (!(theme31?.officialSources || []).some(source => source.reference === 'BOE-A-2025-6601')) failures.push('Tema 31 no incorpora el RD 255/2025 vigente');
if (!(theme32?.officialSources || []).every(source => source.url.startsWith('https://learn.microsoft.com/'))) failures.push('Tema 32 contiene fuentes no oficiales de Microsoft');
if (!context.window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B4 || (ope.themeTests?.[theme31.id] || []).length < 30) failures.push('Refuerzo del banco del tema 31 no aplicado');

const programme = ope.theoryProgramme?.v87;
if (!programme) failures.push('Falta programa v87');
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(expectedCompleted)) failures.push('Completados incorrectos');
if (JSON.stringify(plain(programme?.pendingThemes || [])) !== JSON.stringify(expectedPending)) failures.push('Pendientes incorrectos');
if (programme?.autonomousThemes !== 8) failures.push(`Autónomos: ${programme?.autonomousThemes}`);
if (programme?.totalThemes !== 16) failures.push(`Total: ${programme?.totalThemes}`);
const state = context.window.OPOWEB_DIPUTACION_THEORY_V87;
if (state?.block !== 4) failures.push('Bloque global incorrecto');
if (state?.numberingCheck?.electronicTrustTheme !== 31 || state?.numberingCheck?.windowsFilesTheme !== 32) failures.push('Control de numeración incorrecto');

const report = {
  version: 'v0.87-editorial-b4',
  status: failures.length ? 'REVISAR' : 'EN_PROGRESO',
  scope: 'Diputación temas 25 a 40',
  autonomousThemes: programme?.autonomousThemes || 0,
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque4.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `Diputación bloque 4 no supera la auditoría: ${failures.join(' | ')}`);
console.log(`Diputación teoría v87 bloque 4 OK · temas 31 y 32 · mínimo ${report.minimumWords} palabras`);
