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
  'assets/js/diputacion-teoria-v87-bloque6-preguntas.js', 'assets/js/diputacion-teoria-v87-bloque7a.js',
  'assets/js/diputacion-teoria-v87-bloque7b.js', 'assets/js/diputacion-teoria-v87-bloque7-preguntas.js',
  'assets/js/diputacion-teoria-v87-bloque8a.js', 'assets/js/diputacion-teoria-v87-bloque8b.js',
  'assets/js/diputacion-teoria-v87-bloque8-preguntas.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');

const requiredHeadings = [
  'Resumen orientado al aprobado', 'Rigor técnico y terminológico',
  'Desarrollo completo del epígrafe oficial', 'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes', 'Tres preguntas de retención activa', 'Estrategia de examen'
];
const sourceSets = {
  39: new Set(['MS-W11-HARDWARE', 'UEFI-SPECS', 'NVME-SPECS', 'PCISIG-SPECS']),
  40: new Set(['MS-PRINTER-W11', 'MS-SCANNER-W11', 'USBIF-DOCS', 'ECMA-130', 'ECMA-267'])
};
const failures = [];
const metrics = [39, 40].map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  if (!theme) {
    failures.push(`Falta tema ${number}`);
    return { number, missing: true };
  }
  const questions = ope.themeTests?.[theme.id] || [];
  const blockQuestions = questions.filter(question => question.id.startsWith(`dip-v87-t${number}-b8-`));
  const references = (theme.officialSources || []).map(source => source.reference);
  const headings = plain((theme.sections || []).map(section => section.heading));
  const metric = {
    number,
    title: theme.title,
    words: theme.theoryStatus?.words || 0,
    sources: references.length,
    references,
    treeCharacters: (theme.tree || '').length,
    reviewRows: (theme.reviewTable || []).length,
    questions: questions.length,
    blockQuestions: blockQuestions.length,
    uniqueQuestionIds: new Set(questions.map(question => question.id)).size,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true
  };
  if (!metric.autonomous) failures.push(`Tema ${number}: no autosuficiente`);
  if (!metric.programmeLiteral) failures.push(`Tema ${number}: literalidad no validada`);
  if (metric.words < 1800) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.treeCharacters < 500) failures.push(`Tema ${number}: esquema insuficiente`);
  if (metric.reviewRows < 12) failures.push(`Tema ${number}: tabla insuficiente`);
  if (JSON.stringify(headings) !== JSON.stringify(requiredHeadings)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  if (metric.blockQuestions !== 12) failures.push(`Tema ${number}: ${metric.blockQuestions} preguntas nuevas, esperadas 12`);
  if (metric.uniqueQuestionIds !== metric.questions) failures.push(`Tema ${number}: identificadores duplicados`);
  for (const reference of references) if (!sourceSets[number].has(reference)) failures.push(`Tema ${number}: fuente no admitida ${reference}`);
  if (references.length !== sourceSets[number].size) failures.push(`Tema ${number}: recuento de fuentes incorrecto`);
  for (const question of blockQuestions) {
    if (!Array.isArray(question.options) || question.options.length !== 4) failures.push(`Tema ${number}: ${question.id} sin cuatro opciones`);
    if (!['A', 'B', 'C', 'D'].includes(question.answer)) failures.push(`Tema ${number}: respuesta inválida ${question.id}`);
    if (!question.justification || question.justification.length < 30) failures.push(`Tema ${number}: justificación insuficiente ${question.id}`);
    if (!question.source || question.source.length < 20) failures.push(`Tema ${number}: fuente insuficiente ${question.id}`);
  }
  return metric;
});

const theme39 = ope.themes.find(item => Number(item.number) === 39);
const theme40 = ope.themes.find(item => Number(item.number) === 40);
if (!/ordenador personal I/i.test(theme39?.title || '') || !/componentes/i.test(theme39?.title || '')) failures.push('Numeración o literalidad del tema 39 incorrecta');
if (!/ordenador personal II/i.test(theme40?.title || '') || !/Periféricos/i.test(theme40?.title || '')) failures.push('Numeración o literalidad del tema 40 incorrecta');

const programme = ope.theoryProgramme?.v87;
const expectedCompleted = Array.from({ length: 16 }, (_, index) => index + 25);
if (!programme) failures.push('Falta programa v87');
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(expectedCompleted)) failures.push('Temas completados incorrectos');
if ((programme?.pendingThemes || []).length !== 0) failures.push('Deben quedar cero temas pendientes del bloque 25-40');
if (programme?.autonomousThemes !== 16 || programme?.totalThemes !== 16) failures.push('Cobertura editorial 25-40 incorrecta');
if (!programme?.documentaryGap?.includes('OAPGT')) failures.push('No se conserva el bloqueo documental OAPGT');
const state = context.window.OPOWEB_DIPUTACION_THEORY_V87;
if (state?.block !== 8) failures.push('Bloque global incorrecto');
if (state?.numberingCheck?.computerTheme !== 39 || state?.numberingCheck?.peripheralsTheme !== 40) failures.push('Control de numeración incorrecto');
if (state?.documentaryGap !== 'OAPGT_STATUTES') failures.push('Código de bloqueo documental incorrecto');

const report = {
  version: 'v0.87-editorial-b8',
  status: failures.length ? 'REVISAR' : 'CIERRE_EDITORIAL_CON_BLOQUE_DOCUMENTAL_PENDIENTE',
  scope: 'Diputación temas 25 a 40',
  autonomousThemes: programme?.autonomousThemes || 0,
  completedThemes: programme?.completedThemes || [],
  pendingThemes: programme?.pendingThemes || [],
  documentaryGap: programme?.documentaryGap || null,
  minimumWords: Math.min(...metrics.filter(item => !item.missing).map(item => item.words)),
  metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque8.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], `Diputación bloque 8 no supera auditoría: ${failures.join(' | ')}`);
console.log(`Diputación teoría v87 bloque 8 OK · temas 39 y 40 · mínimo ${report.minimumWords} palabras`);
