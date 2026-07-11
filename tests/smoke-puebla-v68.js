const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const makeTheme = (prefix, number) => ({ id: `${prefix}-t${number}`, number, title: `Tema ${number}`, area: 'Prueba', sections: [], tree: '', reviewTable: [] });
const makeQuestion = (theme, index) => ({
  id: `dip-${theme}-${index}`,
  text: `Pregunta fuente auditada ${theme}-${index}`,
  options: ['A', 'B', 'C', 'D'].map((letter, position) => ({ letter, text: `Opción ${position + 1} de ${theme}-${index}` })),
  answer: 'A',
  justification: `Fuente oficial del tema ${theme}, artículo ${index}`,
  source: `Fuente oficial ${theme}`,
  difficulty: ['baja', 'media', 'alta'][index % 3]
});

const dipThemes = Array.from({ length: 40 }, (_, index) => makeTheme('dip', index + 1));
const dipTests = Object.fromEntries(dipThemes.map(theme => [theme.id, Array.from({ length: 35 }, (_, index) => makeQuestion(theme.number, index + 1))]));
const pueblaThemes = Array.from({ length: 19 }, (_, index) => makeTheme('puebla', index + 1));
const generic = theme => Array.from({ length: 12 }, (_, index) => ({
  id: `generic-${theme}-${index}`,
  text: `Tema ${theme}. ¿Cuál es el enfoque correcto para preparar esta materia?`,
  options: ['A', 'B', 'C', 'D'].map((letter, position) => ({ letter, text: position === 0 ? 'Forma parte del enunciado oficial del tema' : `Plantilla ${position}` })),
  answer: 'A',
  justification: 'Plantilla genérica'
}));
const pueblaTests = Object.fromEntries(pueblaThemes.map(theme => [theme.id, generic(theme.number)]));

const window = { OPOSICIONES_DATA: { oposiciones: [
  { id: 'puebla-aux-admin-2026', themes: pueblaThemes, themeTests: pueblaTests, practicalCases: [], simulacros: [], changelog: [] },
  { id: 'diputacion-toledo-admin-2026', themes: dipThemes, themeTests: dipTests, practicalCases: [], simulacros: [], changelog: [] }
] } };
const context = { window, console, Set, Array, Object, String, Number, Boolean, Math };
vm.runInNewContext(fs.readFileSync('assets/js/puebla-v68.js', 'utf8'), context);

const puebla = window.OPOSICIONES_DATA.oposiciones[0];
assert.equal(window.OPOWEB_PUEBLA_V68.totalQuestions, 570);
assert.equal(window.OPOWEB_PUEBLA_V68.targetThemes, 19);
assert.equal(window.OPOWEB_PUEBLA_V68.minimumQuestions, 30);
assert.equal(window.OPOWEB_PUEBLA_V68.practicalCases, 20);
assert.equal(puebla.testAudit.totalQuestions, 570);
for (const theme of puebla.themes) {
  const bank = puebla.themeTests[theme.id];
  assert.equal(bank.length, 30, `Tema ${theme.number}`);
  assert.ok(bank.every(question => !question.text.includes('enfoque correcto')));
  assert.equal(new Set(bank.map(question => question.text)).size, 30);
  assert.ok(bank.every(question => question.options.length === 4));
  assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
}
assert.equal(puebla.practicalCases.length, 20);
assert.ok(puebla.practicalCases.every(item => item.rubric.length === 5));
assert.equal(puebla.simulacros.length, 3);
for (const sim of puebla.simulacros) {
  assert.equal(sim.questions.length, 50);
  assert.equal(sim.reserveQuestions.length, 5);
  const all = [...sim.questions, ...sim.reserveQuestions];
  assert.equal(new Set(all.map(item => item.text)).size, 55);
  assert.equal(new Set(all.map(item => item.auditTheme)).size, 19);
}
console.log('Smoke La Puebla v0.68 OK');
