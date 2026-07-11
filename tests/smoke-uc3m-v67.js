const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const themes = Array.from({ length: 20 }, (_, index) => ({ id: `uc3m-t${index + 1}`, number: index + 1, title: `Tema ${index + 1}`, sections: [], reviewTable: [] }));
const makeQuestion = (theme, index) => ({
  id: `old-${theme}-${index}`,
  text: `Pregunta existente UC3M ${theme}-${index}`,
  options: ['A', 'B', 'C', 'D'].map((letter, position) => ({ letter, text: `Opción ${position + 1}` })),
  answer: 'A',
  justification: `Fuente oficial ${theme}-${index}`
});
const themeTests = Object.fromEntries(themes.map(theme => [theme.id, Array.from({ length: 30 }, (_, index) => makeQuestion(theme.number, index + 1))]));
const window = { OPOSICIONES_DATA: { oposiciones: [{ id: 'uc3m-aux-admin-2026', themes, themeTests, simulacros: [], changelog: [], officialLinks: [], testAudit: {} }] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
vm.runInNewContext(fs.readFileSync('assets/js/uc3m-v67.js', 'utf8'), context);

const ope = window.OPOSICIONES_DATA.oposiciones[0];
assert.equal(window.OPOWEB_UC3M_V67.addedQuestions, 15);
assert.equal(window.OPOWEB_UC3M_V67.totalQuestions, 615);
assert.equal(window.OPOWEB_UC3M_V67.estimatedProgress, 84);
assert.equal(ope.testAudit.targetThemes, 20);
assert.equal(ope.themeTests['uc3m-t15'].length, 40);
assert.equal(ope.themeTests['uc3m-t20'].length, 35);
assert.ok(ope.themes[14].sections.some(section => section.heading.includes('Defensor Universitario')));
assert.ok(ope.themes[19].sections.some(section => section.heading.includes('Especial referencia UC3M')));
assert.equal(ope.officialLinks.length, 5);
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 70);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(item => item.text)).size, 75);
  assert.equal(new Set(all.map(item => item.auditTheme)).size, 20);
}
console.log('Smoke UC3M v0.67 OK');
