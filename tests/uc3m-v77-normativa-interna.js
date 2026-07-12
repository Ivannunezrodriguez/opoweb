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

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const release = window.OPOWEB_UC3M_V77;
assert.ok(ope && release, 'No se cargó UC3M v0.77');
fs.writeFileSync('uc3m-v77.json', JSON.stringify(release, null, 2));

assert.equal(release.totalQuestions, 630);
assert.equal(release.targetThemes, 20);
assert.equal(release.minimumQuestions, 30);
assert.equal(release.institutionalQuestions, 30);
assert.equal(release.genericQuestions, 0);

const theme = ope.themes.find(item => Number(item.number) === 16);
const bank = ope.themeTests[theme.id] || [];
const institutional = bank.filter(question => question.institutional);
assert.equal(bank.length, 60, `Tema 16: ${bank.length}`);
assert.equal(institutional.length, 30, `Preguntas internas: ${institutional.length}`);
assert.equal(new Set(bank.map(question => question.text)).size, 60, 'Duplicados en tema 16');
assert.equal(new Set(bank.map(question => question.id)).size, 60, 'IDs duplicados en tema 16');
assert.ok(institutional.every(question => question.options.length === 4));
assert.ok(institutional.every(question => new Set(question.options.map(option => option.text)).size === 4));
assert.ok(institutional.every(question => question.options.some(option => option.letter === question.answer)));
assert.ok(institutional.every(question => question.justification && /uc3m\.es|handle\.net/.test(question.source)));
const counts = institutional.reduce((acc, question) => ({ ...acc, [question.answer]: (acc[question.answer] || 0) + 1 }), {});
assert.ok(Object.values(counts).every(count => count >= 7 && count <= 8), JSON.stringify(counts));

const haystack = institutional.map(question => `${question.text} ${question.options.map(option => option.text).join(' ')}`).join(' ');
assert.ok(/12 créditos/i.test(haystack));
assert.ok(/Cuatro convocatorias/i.test(haystack));
assert.ok(/Seis convocatorias/i.test(haystack));
assert.ok(/30 ECTS/i.test(haystack));
assert.ok(/18 ECTS/i.test(haystack));
assert.ok(/40 %|40 por ciento/i.test(haystack));
assert.ok(/60 %|60 por ciento/i.test(haystack));
assert.ok(/diez días/i.test(haystack));
assert.ok(/dos y los siete días/i.test(haystack));
assert.ok(/días naturales/i.test(haystack));

assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(question => question.text)).size, 75);
  assert.equal(new Set(all.map(question => question.auditTheme)).size, 20);
}

console.log(`UC3M v0.77 OK · ${release.totalQuestions} preguntas · tema 16 con ${bank.length} · ${release.institutionalQuestions} internas`);
