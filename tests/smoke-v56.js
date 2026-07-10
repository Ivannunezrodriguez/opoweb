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
const themeTests = Object.fromEntries(themes.map(theme => [
  theme.id,
  Array.from({ length: theme.number === 22 ? 0 : (theme.number <= 16 ? 30 : 15) }, (_, index) => question(theme.number, index + 1))
]));
const window = { OPOSICIONES_DATA: { oposiciones: [{
  id: 'diputacion-toledo-admin-2026', themes, themeTests, simulacros: [], changelog: []
}] } };

vm.runInNewContext(fs.readFileSync('assets/js/diputacion-v56.js', 'utf8'), {
  window, console, Set, Array, Object, String, Number, Boolean, Math
});
const ope = window.OPOSICIONES_DATA.oposiciones[0];
const theme17 = ope.themes.find(item => item.number === 17);
assert.equal(ope.themeTests[theme17.id].length, 30);
assert.equal(ope.globalTestAudit.targetThemes, 17);
assert.equal(window.OPOWEB_DIPUTACION_V56.addedQuestions, 15);
assert.equal(window.OPOWEB_DIPUTACION_V56.cumulativeManualQuestions, 840);
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.ok(!all.some(item => item.auditTheme === 22));
}

const stateWindow = { OPOSICIONES_DATA: { oposiciones: [
  { id: 'ventas-aux-admin-2026' },
  { id: 'ventas-pena-aguilera-aux-admin-2026' },
  { id: 'puebla-aux-admin-2026' },
  { id: 'diputacion-toledo-admin-2026', processCalendar: [] }
] } };
vm.runInNewContext(fs.readFileSync('assets/js/estado-v56.js', 'utf8'), { window: stateWindow, Set, Array });
assert.deepEqual(stateWindow.OPOSICIONES_DATA.oposiciones.map(item => item.id), [
  'puebla-aux-admin-2026', 'diputacion-toledo-admin-2026'
]);
assert.ok(stateWindow.OPOSICIONES_DATA.oposiciones[1].status.includes('6 al 31 de julio de 2026'));
console.log('Smoke v0.56 OK');
