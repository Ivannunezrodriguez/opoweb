const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = path => vm.runInNewContext(fs.readFileSync(path, 'utf8'), context, { filename: path });

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/uc3m-v66.js');
run('assets/js/uc3m-v67.js');
run('assets/js/puebla-v68.js');
run('assets/js/carranque-v69.js');
run('assets/js/carranque-v69-fix.js');
run('assets/js/carranque-v70.js');
run('assets/js/practicos-v71.js');
run('assets/js/auditoria-calidad-v72.js');

const report = window.OPOWEB_AUDITORIA_V72;
assert.ok(report, 'No se generó la auditoría');
assert.equal(report.oposiciones.length, 4);
assert.ok(report.totalQuestions >= 3000, `Total inesperado: ${report.totalQuestions}`);
assert.equal(report.invalidAnswers, 0, JSON.stringify(report.issues.filter(item => item.code === 'invalid-answer').slice(0, 20), null, 2));
assert.equal(report.invalidOptions, 0, JSON.stringify(report.issues.filter(item => item.code === 'invalid-options').slice(0, 20), null, 2));
assert.equal(report.duplicateIds, 0, JSON.stringify(report.issues.filter(item => item.code === 'duplicate-id').slice(0, 20), null, 2));
assert.equal(report.missingJustifications, 0, JSON.stringify(report.issues.filter(item => item.code === 'missing-justification').slice(0, 20), null, 2));
assert.equal(report.genericQuestions, 0, JSON.stringify(report.issues.filter(item => item.code === 'generic-question').slice(0, 20), null, 2));
assert.equal(report.themeDuplicates, 0, JSON.stringify(report.issues.filter(item => item.code === 'duplicate-in-theme').slice(0, 20), null, 2));
assert.equal(report.hardFailures, 0);
assert.ok(report.oposiciones.every(item => item.answerBalance.maxShare <= 0.55), JSON.stringify(report.oposiciones.map(item => ({ id: item.id, balance: item.answerBalance })), null, 2));
console.log(JSON.stringify(report.summary, null, 2));
console.log('Auditoría de calidad v0.72 OK');
