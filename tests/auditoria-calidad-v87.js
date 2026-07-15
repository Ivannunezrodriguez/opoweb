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
run('data/oapgt-fuentes-v87.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/diputacion-snapshot-v87.js');
run('assets/js/diputacion-teoria-v87-bloque1.js');
run('assets/js/diputacion-teoria-v87-bloque2.js');
run('assets/js/diputacion-test-v87-bloque2.js');
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
run('assets/js/puebla-teoria-v86-bloque1.js');
run('assets/js/puebla-teoria-v86-bloque2.js');
run('assets/js/puebla-teoria-v86-bloque3.js');
run('assets/js/puebla-teoria-v86-bloque4.js');
run('assets/js/carranque-teoria-v85-bloque1.js');
run('assets/js/carranque-teoria-v85-estructura.js');
run('assets/js/carranque-teoria-v85-bloque2.js');
run('assets/js/carranque-teoria-v85-bloque3.js');
run('assets/js/carranque-teoria-v85-bloque4.js');
run('assets/js/auditoria-calidad-v72.js');

const report = window.OPOWEB_AUDITORIA_V72;
const municipal = window.OPOWEB_MUNICIPALES_V84;
assert.ok(report, 'No se generó la auditoría transversal');
assert.ok(municipal, 'No se generó la auditoría municipal');
assert.equal(window.OPOWEB_DIPUTACION_SNAPSHOT_V87.totalQuestions, 1242);
assert.equal(window.OPOWEB_DIPUTACION_TEST_V87.canonicalSnapshot, true);

report.version = 'v0.87.0';
report.date = '2026-07-14';
if (report.summary) report.summary.version = 'v0.87.0';
report.municipal = municipal;
report.diputacionTheory = {
  completedThemes: window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026').theoryProgramme.v87.completedThemes,
  autonomousThemes: 7,
  totalThemes: 40,
  status: 'EN_PROGRESO',
  oapgtStatutesVerified: window.OPOWEB_OAPGT_FUENTES_V87.statutes.allowedForTheory
};
fs.writeFileSync('audit-v87.json', JSON.stringify(report, null, 2));

assert.equal(report.oposiciones.length, 4);
assert.equal(report.totalQuestions, 3114, `Total inesperado: ${report.totalQuestions}`);
assert.equal(report.invalidAnswers, 0);
assert.equal(report.invalidOptions, 0);
assert.equal(report.duplicateIds, 0);
assert.equal(report.missingJustifications, 0);
assert.equal(report.genericQuestions, 0);
assert.equal(report.themeDuplicates, 0);
assert.equal(report.hardFailures, 0);
assert.ok(report.oposiciones.every(item => item.answerBalance.maxShare <= 0.55));

const totals = Object.fromEntries(report.oposiciones.map(item => [item.id, item.questions]));
assert.equal(totals['puebla-aux-admin-2026'], 570);
assert.equal(totals['carranque-aux-admin-2026'], 600);
assert.equal(totals['diputacion-toledo-admin-2026'], 1254);
assert.equal(totals['uc3m-aux-admin-2026'], 690);
assert.equal(window.OPOWEB_UC3M_V80.status, 'APTO');
assert.equal(municipal.globalStatus, 'APTO', JSON.stringify({ puebla: municipal.puebla.failures, carranque: municipal.carranque.failures }));
assert.equal(municipal.puebla.estimatedProgress, 99);
assert.equal(municipal.carranque.estimatedProgress, 99);
assert.equal(report.diputacionTheory.autonomousThemes, 7);
assert.deepStrictEqual(JSON.parse(JSON.stringify(report.diputacionTheory.completedThemes)), [25, 26, 27, 28, 29, 30, 31]);
assert.equal(report.diputacionTheory.oapgtStatutesVerified, false);

console.log('Auditoría de calidad v0.87 APTO', JSON.stringify({ total: report.totalQuestions, diputacion: totals['diputacion-toledo-admin-2026'], autonomousThemes: 7 }));
