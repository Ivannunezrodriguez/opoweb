const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const priority = new Set([2, 3, 7, 8, 9, 10, 15, 18, 19]);
const themes = Array.from({ length: 20 }, (_, index) => ({
  id: `uc3m-t${index + 1}`,
  number: index + 1,
  title: `Tema ${index + 1}`,
  area: 'Prueba',
  sections: [], tree: '', reviewTable: []
}));
const oldQuestion = (theme, index) => ({
  id: `old-${theme}-${index}`,
  text: `Pregunta válida existente UC3M ${theme}-${index}`,
  options: ['A', 'B', 'C', 'D'].map((text, i) => ({ letter: 'ABCD'[i], text: `${text}-${theme}-${index}` })),
  answer: 'A',
  justification: `Fuente oficial ${theme}-${index}`,
  difficulty: 'media'
});
const themeTests = Object.fromEntries(themes.map(theme => {
  const count = priority.has(theme.number) ? 30 : 20;
  return [theme.id, Array.from({ length: count }, (_, index) => oldQuestion(theme.number, index + 1))];
}));
const window = { OPOSICIONES_DATA: { oposiciones: [{
  id: 'uc3m-aux-admin-2026', themes, themeTests, simulacros: [], changelog: [], testAudit: {}
}] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
vm.runInNewContext(fs.readFileSync('assets/js/uc3m-v66.js', 'utf8'), context);

const ope = window.OPOSICIONES_DATA.oposiciones[0];
assert.equal(window.OPOWEB_UC3M_V66.addedQuestions, 110);
assert.equal(window.OPOWEB_UC3M_V66.totalQuestions, 600);
assert.equal(window.OPOWEB_UC3M_V66.targetThemes, 20);
assert.equal(window.OPOWEB_UC3M_V66.minimumQuestions, 30);
assert.equal(ope.testAudit.targetThemes, 20);
assert.equal(ope.testAudit.minimumQuestions, 30);
for (const theme of themes) assert.ok(ope.themeTests[theme.id].length >= 30, `Tema ${theme.number}`);
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 75);
  assert.equal(new Set(all.map(item => item.auditTheme)).size, 20);
}
console.log('Smoke UC3M v0.66 OK');
