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
const dipTests = Object.fromEntries(dipThemes.map(theme => [theme.id, Array.from({ length: 35 }, (_, index) => makeQuestion(theme.number, index + 1))]));
const carranqueThemes = Array.from({ length: 20 }, (_, index) => makeTheme('carranque', index + 1));
const carranqueTests = Object.fromEntries(carranqueThemes.map(theme => [theme.id, generic(theme.number)]));
const window = { OPOSICIONES_DATA: { oposiciones: [
  { id: 'carranque-aux-admin-2026', themes: carranqueThemes, themeTests: carranqueTests, practicalCases: [], simulacros: [], changelog: [] },
  { id: 'diputacion-toledo-admin-2026', themes: dipThemes, themeTests: dipTests, practicalCases: [], simulacros: [], changelog: [] }
] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
vm.runInNewContext(fs.readFileSync('assets/js/carranque-v68.js', 'utf8'), context);

const carranque = window.OPOSICIONES_DATA.oposiciones[0];
assert.equal(window.OPOWEB_CARRANQUE_V68.targetThemes, 10);
assert.deepEqual(Array.from(window.OPOWEB_CARRANQUE_V68.completedThemes), [1,2,3,4,5,6,7,8,9,10]);
for (let number = 1; number <= 10; number += 1) {
  const theme = carranque.themes.find(item => item.number === number);
  const bank = carranque.themeTests[theme.id];
  assert.equal(bank.length, 30, `Tema ${number}`);
  assert.equal(new Set(bank.map(question => question.text)).size, 30);
  assert.ok(bank.every(question => question.options.length === 4));
}
assert.equal(carranque.practicalCases.length, 8);
assert.ok(carranque.practicalCases.every(item => item.themes[0] >= 3 && item.themes[0] <= 10));
assert.ok(carranque.themes.find(item => item.number === 8).sections.some(section => section.heading.includes('Intervención')));
assert.ok(carranque.themes.find(item => item.number === 10).sections.some(section => section.heading.includes('Procedimiento')));
console.log('Smoke Carranque v0.68 OK');
