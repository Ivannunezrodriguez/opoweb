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

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const release = window.OPOWEB_UC3M_V72;
assert.ok(ope && release);
assert.equal(ope.themes.length, 20);
assert.equal(release.genericQuestions, 0);
assert.ok(release.totalQuestions >= 450, `Total insuficiente: ${release.totalQuestions}`);
assert.ok(release.targetThemes >= 13, `Temas a 30 insuficientes: ${release.targetThemes}`);
assert.ok(release.minimumQuestions >= 10, `Mínimo insuficiente: ${release.minimumQuestions}`);

for (const theme of ope.themes) {
  const bank = ope.themeTests[theme.id] || [];
  assert.ok(bank.length >= 10, `Tema ${theme.number}: ${bank.length}`);
  assert.equal(new Set(bank.map(question => question.text)).size, bank.length, `Duplicados en tema ${theme.number}`);
  assert.ok(bank.every(question => !/enfoque correcto para preparar|como debe estudiarse|forma parte del enunciado/i.test(`${question.text} ${question.options.map(option => option.text).join(' ')}`)));
  assert.ok(bank.every(question => question.options.length === 4));
  assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
  assert.ok(bank.every(question => question.justification || question.source));
}

assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(question => question.text)).size, 75);
  assert.equal(new Set(all.map(question => question.auditTheme)).size, 20);
}
console.log(`UC3M v0.72 OK · ${release.totalQuestions} preguntas · ${release.targetThemes}/20 temas a 30 · mínimo ${release.minimumQuestions}`);
