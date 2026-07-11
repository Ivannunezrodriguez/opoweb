const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const makeTheme = (prefix, number) => ({ id: `${prefix}-t${number}`, number, title: `Tema ${number}`, area: 'Prueba', sections: [], tree: '', reviewTable: [] });
const makeQuestion = (theme, index) => ({
  id: `dip-${theme}-${index}`,
  text: `Pregunta auditada de origen ${theme}-${index}`,
  options: ['A', 'B', 'C', 'D'].map((letter, position) => ({ letter, text: `Opción ${position + 1} ${theme}-${index}` })),
  answer: 'A',
  justification: `Fuente oficial tema ${theme}, artículo ${index}`,
  source: `Fuente oficial ${theme}`,
  difficulty: ['baja', 'media', 'alta'][index % 3]
});
const generic = theme => Array.from({ length: 12 }, (_, index) => ({
  id: `generic-${theme}-${index}`,
  text: `Tema ${theme}. ¿Cuál es el enfoque correcto para preparar esta materia?`,
  options: ['A', 'B', 'C', 'D'].map((letter, position) => ({ letter, text: position === 0 ? 'Forma parte del enunciado oficial del tema' : `Plantilla ${position}` })),
  answer: 'A',
  justification: 'Plantilla genérica'
}));

const dipThemes = Array.from({ length: 40 }, (_, index) => makeTheme('dip', index + 1));
const dipTests = Object.fromEntries(dipThemes.map(theme => [theme.id, Array.from({ length: 40 }, (_, index) => makeQuestion(theme.number, index + 1))]));
const carranqueThemes = Array.from({ length: 20 }, (_, index) => makeTheme('carranque', index + 1));
const carranqueTests = Object.fromEntries(carranqueThemes.map(theme => [theme.id, generic(theme.number)]));
const window = { OPOSICIONES_DATA: { oposiciones: [
  { id: 'carranque-aux-admin-2026', themes: carranqueThemes, themeTests: carranqueTests, practicalCases: [], simulacros: [], changelog: [] },
  { id: 'diputacion-toledo-admin-2026', themes: dipThemes, themeTests: dipTests, practicalCases: [], simulacros: [], changelog: [] }
] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
for (const file of ['assets/js/carranque-v69.js', 'assets/js/carranque-v69-fix.js', 'assets/js/carranque-v70.js']) {
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
}

const carranque = window.OPOSICIONES_DATA.oposiciones[0];
assert.equal(window.OPOWEB_CARRANQUE_V70.targetThemes, 20);
assert.equal(window.OPOWEB_CARRANQUE_V70.minimumQuestions, 30);
assert.equal(window.OPOWEB_CARRANQUE_V70.totalReal, 600);
assert.equal(window.OPOWEB_CARRANQUE_V70.practicalCases, 18);
assert.equal(window.OPOWEB_CARRANQUE_V70.simulations, 3);
for (let number = 1; number <= 20; number += 1) {
  const theme = carranque.themes.find(item => item.number === number);
  const bank = carranque.themeTests[theme.id] || [];
  assert.equal(bank.length, 30, `Tema ${number}`);
  assert.equal(new Set(bank.map(question => question.text)).size, 30, `Duplicados tema ${number}`);
  assert.ok(bank.every(question => question.options.length === 4));
  assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
  assert.ok(bank.every(question => question.justification || question.source));
}
assert.equal(carranque.practicalCases.length, 18);
assert.deepEqual(Array.from(carranque.practicalCases.map(item => item.themes[0])), Array.from({ length: 18 }, (_, index) => index + 3));
for (const number of [12, 18, 19, 20]) {
  const theme = carranque.themes.find(item => item.number === number);
  assert.ok(theme.sections.length >= 3, `Tema ${number} sin desarrollo`);
}
assert.equal(carranque.simulacros.length, 3);
for (const sim of carranque.simulacros) {
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(sim.questions.length, 80);
  assert.equal(sim.reserveQuestions.length, 5);
  assert.equal(new Set(all.map(item => item.text)).size, 85);
  assert.equal(new Set(all.map(item => item.auditTheme)).size, 20);
}
console.log('Smoke Carranque v0.70 OK');
