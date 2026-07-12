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

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const release = window.OPOWEB_UC3M_V78;
assert.ok(ope && release, 'No se cargó UC3M v0.78');
fs.writeFileSync('uc3m-v78.json', JSON.stringify(release, null, 2));

assert.equal(release.totalQuestions, 660);
assert.equal(release.targetThemes, 20);
assert.equal(release.minimumQuestions, 30);
assert.equal(release.budgetQuestions, 30);
assert.equal(release.genericQuestions, 0);

for (const number of [18, 19]) {
  const theme = ope.themes.find(item => Number(item.number) === number);
  const bank = ope.themeTests[theme.id] || [];
  const budget = bank.filter(question => question.budgetYear === 2026);
  assert.equal(bank.length, 45, `Tema ${number}: ${bank.length}`);
  assert.equal(budget.length, 15, `Preguntas presupuesto tema ${number}: ${budget.length}`);
  assert.equal(new Set(bank.map(question => question.text)).size, 45, `Duplicados tema ${number}`);
  assert.equal(new Set(bank.map(question => question.id)).size, 45, `IDs duplicados tema ${number}`);
  assert.ok(budget.every(question => question.options.length === 4));
  assert.ok(budget.every(question => new Set(question.options.map(option => option.text)).size === 4));
  assert.ok(budget.every(question => question.options.some(option => option.letter === question.answer)));
  assert.ok(budget.every(question => question.justification && /drive\.google\.com/.test(question.source)));
  const counts = budget.reduce((acc, question) => ({ ...acc, [question.answer]: (acc[question.answer] || 0) + 1 }), {});
  assert.ok(Object.values(counts).every(count => count >= 3 && count <= 4), `Desequilibrio tema ${number}: ${JSON.stringify(counts)}`);
}

const t18 = ope.themeTests[ope.themes.find(item => Number(item.number) === 18).id];
const text18 = t18.map(question => `${question.text} ${question.options.map(option => option.text).join(' ')}`).join(' ');
assert.ok(/300\.468\.067,59 euros/.test(text18));
assert.ok(/325 millones de euros/.test(text18));
assert.ok(/76,52 %/.test(text18));
assert.ok(/El 8 %/.test(text18));
assert.ok(/El 2 %/.test(text18));

const t19 = ope.themeTests[ope.themes.find(item => Number(item.number) === 19).id];
const text19 = t19.map(question => `${question.text} ${question.options.map(option => option.text).join(' ')}`).join(' ');
assert.ok(/300 euros/.test(text19));
assert.ok(/nulos de pleno derecho/i.test(text19));
assert.ok(/DEF-Servicio de Presupuestos/.test(text19));
assert.ok(/1 de enero/.test(text19));
assert.ok(/Consejo Social y autorización previa/i.test(text19));

assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(question => question.text)).size, 75);
  assert.equal(new Set(all.map(question => question.auditTheme)).size, 20);
}

console.log(`UC3M v0.78 OK · ${release.totalQuestions} preguntas · ${release.budgetQuestions} de presupuesto 2026`);
