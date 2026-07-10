const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const themes = Array.from({ length: 40 }, (_, index) => ({ id: `dip-t${index + 1}`, number: index + 1, title: `Tema ${index + 1}`, area: 'Prueba', sections: [], tree: '', reviewTable: [] }));
const question = (theme, index) => ({ id: `old-${theme}-${index}`, text: `Pregunta real existente ${theme}-${index}`, options: ['A', 'B', 'C', 'D'].map((text, i) => ({ letter: 'ABCD'[i], text })), answer: 'A', justification: `Base oficial ${theme}-${index}` });
const initialCount = number => number === 22 ? 0 : number <= 16 ? 30 : 15;
const themeTests = Object.fromEntries(themes.map(theme => [theme.id, Array.from({ length: initialCount(theme.number) }, (_, index) => question(theme.number, index + 1))]));
const window = { OPOSICIONES_DATA: { oposiciones: [{ id: 'diputacion-toledo-admin-2026', themes, themeTests, simulacros: [], changelog: [] }] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
for (const version of [56, 57, 58, 59, 60, 61, 62, 63, 64, 65]) vm.runInNewContext(fs.readFileSync(`assets/js/diputacion-v${version}.js`, 'utf8'), context);

const ope = window.OPOSICIONES_DATA.oposiciones[0];
const theme22 = ope.themes.find(item => item.number === 22);
assert.equal(ope.themeTests[theme22.id].length, 32);
assert.equal(ope.globalTestAudit.targetThemes, 40);
assert.deepEqual(Array.from(ope.globalTestAudit.pendingTemplateThemes), []);
assert.equal(ope.globalTestAudit.documentaryGaps.length, 1);
assert.equal(ope.globalTestAudit.documentaryGaps[0].theme, 22);
assert.equal(window.OPOWEB_DIPUTACION_V65.addedQuestions, 32);
assert.equal(window.OPOWEB_DIPUTACION_V65.cumulativeManualQuestions, 1269);
assert.equal(window.OPOWEB_DIPUTACION_V65.cumulativeSecondPassQuestions, 684);
assert.ok(theme22.sections.some(section => section.heading.includes('Límite documental')));
assert.equal(theme22.sourceGap, 'Estatutos oficiales vigentes del OAPGT');
assert.equal(ope.simulacros.length, 3);
for (const sim of ope.simulacros) {
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.ok(all.some(item => item.auditTheme === 22));
}
console.log('Smoke v0.65 OK');
