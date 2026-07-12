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

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const release = window.OPOWEB_UC3M_V76;
assert.ok(ope && release, 'No se cargó UC3M v0.76');
fs.writeFileSync('uc3m-v76.json', JSON.stringify(release, null, 2));

assert.equal(ope.themes.length, 20);
assert.equal(release.totalQuestions, 600);
assert.equal(release.targetThemes, 20);
assert.equal(release.minimumQuestions, 30);
assert.equal(release.genericQuestions, 0);

for (const number of [16, 17]) {
  const theme = ope.themes.find(item => Number(item.number) === number);
  const bank = ope.themeTests[theme.id] || [];
  assert.equal(bank.length, 30, `Tema ${number}: ${bank.length}`);
  assert.equal(new Set(bank.map(question => question.text)).size, 30, `Duplicados en tema ${number}`);
  assert.equal(new Set(bank.map(question => question.id)).size, 30, `IDs duplicados en tema ${number}`);
  assert.ok(bank.every(question => question.options.length === 4));
  assert.ok(bank.every(question => new Set(question.options.map(option => option.text)).size === 4));
  assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
  assert.ok(bank.every(question => question.justification && /boe\.es/.test(question.source)));
  const counts = bank.reduce((acc, question) => ({ ...acc, [question.answer]: (acc[question.answer] || 0) + 1 }), {});
  assert.ok(Object.values(counts).every(count => count >= 7 && count <= 8), `Desequilibrio tema ${number}: ${JSON.stringify(counts)}`);
}

const t16 = ope.themeTests[ope.themes.find(item => Number(item.number) === 16).id];
assert.ok(t16.some(question => /40 y el 60 por ciento/i.test(question.options.map(option => option.text).join(' '))));
assert.ok(t16.some(question => /al menos el 80 por ciento/i.test(question.options.map(option => option.text).join(' '))));
assert.ok(t16.some(question => /TFG pendiente y hasta 9 ECTS/i.test(question.options.map(option => option.text).join(' '))));
assert.ok(t16.some(question => /6 y 24 créditos/i.test(question.options.map(option => option.text).join(' '))));

const t17 = ope.themeTests[ope.themes.find(item => Number(item.number) === 17).id];
assert.ok(t17.some(question => /Técnico Superior/i.test(question.text) && /sin prueba/i.test(question.options.map(option => option.text).join(' '))));
assert.ok(t17.some(question => /60 por ciento de Bachillerato y 40 por ciento de la prueba/i.test(question.options.map(option => option.text).join(' '))));
assert.ok(t17.some(question => /curso inmediato y los dos cursos académicos siguientes/i.test(question.options.map(option => option.text).join(' '))));
assert.ok(t17.some(question => /al menos un curso académico de antelación/i.test(question.options.map(option => option.text).join(' '))));

assert.ok(ope.themes.every(theme => (ope.themeTests[theme.id] || []).length >= 30));
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(question => question.text)).size, 75);
  assert.equal(new Set(all.map(question => question.auditTheme)).size, 20);
}

console.log(`UC3M v0.76 OK · ${release.totalQuestions} preguntas · ${release.targetThemes}/20 temas a 30 · mínimo ${release.minimumQuestions}`);
