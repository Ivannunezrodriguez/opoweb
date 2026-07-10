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
for (const version of [56, 57, 58, 59, 60, 61, 62]) {
  vm.runInNewContext(fs.readFileSync(`assets/js/diputacion-v${version}.js`, 'utf8'), context);
}

const ope = window.OPOSICIONES_DATA.oposiciones[0];
const counts = { 17: 30, 18: 34, 19: 33, 20: 45, 21: 51, 23: 37, 24: 37, 25: 35, 26: 35 };
for (const [number, expected] of Object.entries(counts)) {
  const theme = ope.themes.find(item => item.number === Number(number));
  assert.equal(ope.themeTests[theme.id].length, expected);
}
assert.equal(ope.globalTestAudit.targetThemes, 25);
assert.equal(window.OPOWEB_DIPUTACION_V62.addedQuestions, 62);
assert.equal(window.OPOWEB_DIPUTACION_V62.cumulativeManualQuestions, 1027);
assert.equal(window.OPOWEB_DIPUTACION_V62.cumulativeSecondPassQuestions, 442);
assert.ok(ope.themes.find(item => item.number === 24).sections.some(section => section.heading === 'Castilla-La Mancha'));
assert.ok(ope.themes.find(item => item.number === 25).sections.some(section => section.heading.includes('Extinción')));
assert.ok(ope.themes.find(item => item.number === 26).sections.some(section => section.heading.includes('apremio')));
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.ok(!all.some(item => item.auditTheme === 22));
}
console.log('Smoke v0.62 OK');
