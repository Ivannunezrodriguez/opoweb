const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = {
  window,
  console,
  Set,
  Map,
  Array,
  Object,
  String,
  Number,
  Boolean,
  Math,
  Date,
  JSON,
  URL
};

const run = path => vm.runInNewContext(fs.readFileSync(path, 'utf8'), context, { filename: path });
run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/puebla-v67.js');

const puebla = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
assert.ok(puebla, 'No se cargó La Puebla');
console.log('Cobertura La Puebla:', JSON.stringify(puebla.testAudit?.themes || []));
assert.equal(puebla.themes.length, 19);
assert.equal(puebla.testAudit.targetThemes, 19);
assert.equal(puebla.testAudit.minimumQuestions, 30);
assert.equal(puebla.testAudit.totalQuestions, 570);
for (const theme of puebla.themes) {
  const bank = puebla.themeTests[theme.id] || [];
  assert.equal(bank.length, 30, `Tema ${theme.number} tiene ${bank.length}`);
  assert.equal(new Set(bank.map(question => question.text)).size, 30, `Duplicados en tema ${theme.number}`);
  assert.ok(bank.every(question => question.options.length === 4));
  assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
  assert.ok(bank.every(question => question.justification || question.source));
}
assert.equal(puebla.practicalCases.length, 20);
assert.equal(puebla.simulacros.length, 3);
for (const sim of puebla.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.equal(new Set(all.map(item => item.auditTheme)).size, 19);
}
console.log('Smoke La Puebla real v0.67 OK');
