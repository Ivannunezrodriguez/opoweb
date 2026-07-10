const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const themes = Array.from({ length: 40 }, (_, index) => ({
  id: `dip-t${index + 1}`,
  number: index + 1,
  title: `Tema ${index + 1}`,
  area: 'Prueba',
  sections: [], tree: '', reviewTable: []
}));
const question = (theme, index) => ({
  id: `old-${theme}-${index}`,
  text: `Pregunta real existente ${theme}-${index}`,
  options: ['A', 'B', 'C', 'D'].map((text, i) => ({ letter: 'ABCD'[i], text })),
  answer: 'A',
  justification: `Base oficial ${theme}-${index}`
});
const initialCount = number => {
  if (number === 22) return 0;
  if (number <= 16) return 30;
  return 15;
};
const themeTests = Object.fromEntries(themes.map(theme => [
  theme.id,
  Array.from({ length: initialCount(theme.number) }, (_, index) => question(theme.number, index + 1))
]));
const window = { OPOSICIONES_DATA: { oposiciones: [{
  id: 'diputacion-toledo-admin-2026', themes, themeTests, simulacros: [], changelog: []
}] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
vm.runInNewContext(fs.readFileSync('assets/js/diputacion-v56.js', 'utf8'), context);
vm.runInNewContext(fs.readFileSync('assets/js/diputacion-v57.js', 'utf8'), context);
vm.runInNewContext(fs.readFileSync('assets/js/diputacion-v58.js', 'utf8'), context);

const ope = window.OPOSICIONES_DATA.oposiciones[0];
const theme17 = ope.themes.find(item => item.number === 17);
const theme18 = ope.themes.find(item => item.number === 18);
const theme19 = ope.themes.find(item => item.number === 19);
assert.equal(ope.themeTests[theme17.id].length, 30);
assert.equal(ope.themeTests[theme18.id].length, 34);
assert.equal(ope.themeTests[theme19.id].length, 33);
assert.equal(ope.globalTestAudit.targetThemes, 19);
assert.equal(window.OPOWEB_DIPUTACION_V58.addedQuestions, 18);
assert.equal(window.OPOWEB_DIPUTACION_V58.cumulativeManualQuestions, 877);
assert.equal(window.OPOWEB_DIPUTACION_V58.cumulativeSecondPassQuestions, 292);
assert.ok(theme19.sections.some(section => section.heading === 'Procedimiento y medidas cautelares'));
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.ok(!all.some(item => item.auditTheme === 22));
}
console.log('Smoke v0.58 OK');
