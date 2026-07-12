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

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const release = window.OPOWEB_UC3M_V73;
assert.ok(ope && release, 'No se cargó UC3M v0.73');
fs.writeFileSync('uc3m-v73.json', JSON.stringify(release, null, 2));

assert.equal(ope.themes.length, 20);
assert.equal(release.totalQuestions, 500);
assert.equal(release.targetThemes, 15);
assert.equal(release.minimumQuestions, 10);
assert.equal(release.genericQuestions, 0);

const theme = ope.themes.find(item => Number(item.number) === 7);
const bank = ope.themeTests[theme.id] || [];
assert.equal(bank.length, 30, `Tema 7: ${bank.length}`);
assert.equal(new Set(bank.map(question => question.text)).size, 30, 'Preguntas duplicadas en tema 7');
assert.equal(new Set(bank.map(question => question.id)).size, 30, 'Identificadores duplicados en tema 7');
assert.ok(bank.every(question => question.options.length === 4));
assert.ok(bank.every(question => new Set(question.options.map(option => option.text)).size === 4));
assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
assert.ok(bank.every(question => question.justification && question.source));
assert.ok(bank.every(question => /boe\.es|uc3m\.es/.test(question.source)));
assert.ok(bank.some(question => /veinte días/i.test(`${question.text} ${question.options.map(option => option.text).join(' ')}`)));
assert.ok(bank.some(question => /diez días/i.test(`${question.text} ${question.options.map(option => option.text).join(' ')}`)));
assert.ok(bank.some(question => /un mes/i.test(`${question.text} ${question.options.map(option => option.text).join(' ')}`)));
assert.ok(bank.some(question => /quién responde de la información/i.test(question.text)));
assert.ok(!bank.some(question => /qué ocurre si se incumplen/i.test(question.text)));

assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(question => question.text)).size, 75);
  assert.equal(new Set(all.map(question => question.auditTheme)).size, 20);
  assert.ok(!all.some(question => /qué ocurre si se incumplen/i.test(question.text)));
}

console.log(`UC3M v0.73 OK · ${release.totalQuestions} preguntas · ${release.targetThemes}/20 temas a 30 · mínimo ${release.minimumQuestions}`);
