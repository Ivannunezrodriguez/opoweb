const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const themes = Array.from({ length: 40 }, (_, index) => ({ id: `dip-t${index + 1}`, number: index + 1, title: `Tema ${index + 1}`, area: 'Prueba', sections: [], tree: '', reviewTable: [] }));
const question = (theme, index) => ({ id: `old-${theme}-${index}`, text: `Pregunta real existente ${theme}-${index}`, options: ['A', 'B', 'C', 'D'].map((text, i) => ({ letter: 'ABCD'[i], text })), answer: 'A', justification: `Base oficial ${theme}-${index}` });
const initialCount = number => number === 22 ? 0 : number <= 16 ? 30 : 15;
const themeTests = Object.fromEntries(themes.map(theme => [theme.id, Array.from({ length: initialCount(theme.number) }, (_, index) => question(theme.number, index + 1))]));
const window = { OPOSICIONES_DATA: { oposiciones: [{ id: 'diputacion-toledo-admin-2026', themes, themeTests, simulacros: [], changelog: [] }] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
for (const version of [56, 57, 58, 59, 60, 61, 62, 63, 64]) vm.runInNewContext(fs.readFileSync(`assets/js/diputacion-v${version}.js`, 'utf8'), context);

const ope = window.OPOSICIONES_DATA.oposiciones[0];
for (let number = 32; number <= 40; number += 1) {
  const theme = ope.themes.find(item => item.number === number);
  assert.equal(ope.themeTests[theme.id].length, 30, `Tema ${number}`);
  assert.ok(theme.sections.length >= 3, `Tema ${number} sin desarrollo`);
}
assert.equal(ope.globalTestAudit.targetThemes, 39);
assert.deepEqual(Array.from(ope.globalTestAudit.pendingTemplateThemes), [22]);
assert.equal(window.OPOWEB_DIPUTACION_V64.addedQuestions, 135);
assert.equal(window.OPOWEB_DIPUTACION_V64.cumulativeManualQuestions, 1237);
assert.equal(window.OPOWEB_DIPUTACION_V64.cumulativeSecondPassQuestions, 652);
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.ok(!all.some(item => item.auditTheme === 22));
}
console.log('Smoke v0.64 OK');
