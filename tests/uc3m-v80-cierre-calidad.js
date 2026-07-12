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

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const audit = window.OPOWEB_UC3M_V80;
assert.ok(ope && audit, 'No se cargó UC3M v0.80');
fs.writeFileSync('uc3m-v80.json', JSON.stringify(audit, null, 2));

assert.equal(audit.version, 'v0.80.0');
assert.equal(audit.status, 'APTO', JSON.stringify(audit.failures));
assert.equal(audit.totalQuestions, 690);
assert.equal(audit.targetThemes, 20);
assert.equal(audit.minimumQuestions, 30);
assert.equal(audit.failures.length, 0, JSON.stringify(audit.failures));
assert.equal(audit.themes.length, 20);
assert.ok(audit.themes.every(item => item.count >= 30));
assert.ok(audit.themes.every(item => item.duplicateIds === 0));
assert.ok(audit.themes.every(item => item.duplicateTexts === 0));
assert.ok(audit.themes.every(item => item.invalidAnswers === 0));
assert.ok(audit.themes.every(item => item.invalidOptions === 0));
assert.ok(audit.themes.every(item => item.missingTraceability === 0));
assert.ok(audit.themes.every(item => item.genericQuestions === 0));
assert.ok(audit.themes.every(item => item.suspiciousSources.length === 0));
assert.ok(audit.themes.every(item => item.maxAnswerShare <= 0.55));

assert.equal(audit.simulations.length, 3);
for (const simulation of audit.simulations) {
  assert.equal(simulation.main, 70);
  assert.equal(simulation.reserve, 5);
  assert.equal(simulation.uniqueTexts, 75);
  assert.equal(simulation.representedThemes, 20);
}

const theme17 = ope.themes.find(item => Number(item.number) === 17);
assert.equal(theme17.legalTransition.norm, 'Real Decreto 534/2024');
assert.equal(theme17.legalTransition.article, '23.2');
assert.equal(theme17.legalTransition.effectiveDate, '2026-07-22');
assert.equal(audit.admissionPolicy.annualDataIncluded, false);
assert.ok(/publicación oficial/i.test(audit.admissionPolicy.reason));
assert.equal(ope.uc3mInternalAudit.estimatedProgress, 99);

console.log(`UC3M v0.80 APTO · ${audit.totalQuestions} preguntas · ${audit.targetThemes}/20 temas · ${audit.sourceQuestions} con fuente`);
