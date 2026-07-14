const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = { console, window: {} };
context.globalThis = context.window;
vm.createContext(context);

for (const file of [
  'data/oposiciones.js',
  'assets/js/puebla-v68.js',
  'assets/js/puebla-teoria-v86-bloque1.js'
]) {
  vm.runInContext(read(file), context, { filename: file });
}

const data = context.window.OPOSICIONES_DATA;
const puebla = data.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
assert.ok(puebla, 'No existe La Puebla');
assert.equal(puebla.themes.length, 19, 'La Puebla debe conservar 19 temas oficiales');
assert.equal(puebla.theoryProgramme.v86.autonomousThemes, 5, 'El bloque 1 debe cerrar cinco temas');
assert.deepStrictEqual(puebla.theoryProgramme.v86.completedThemes, [1, 2, 3, 4, 5]);
assert.deepStrictEqual(puebla.theoryProgramme.v86.pendingThemes, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
assert.equal(context.window.OPOWEB_PUEBLA_THEORY_V86.status, 'EN_PROGRESO');
assert.equal(context.window.OPOWEB_PUEBLA_THEORY_V86.autonomousThemes, 5);
assert.equal(context.window.OPOWEB_PUEBLA_THEORY_V86.totalThemes, 19);

const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

for (const number of [1, 2, 3, 4, 5]) {
  const theme = puebla.themes.find(item => Number(item.number) === number);
  assert.ok(theme, `Falta tema ${number}`);
  assert.equal(theme.theoryStatus.autonomous, true, `Tema ${number} no marcado como autosuficiente`);
  assert.equal(theme.theoryStatus.programmeLiteral, true, `Tema ${number} sin literalidad validada`);
  assert.ok(theme.theoryStatus.words >= 900, `Tema ${number} demasiado breve: ${theme.theoryStatus.words}`);
  assert.ok((theme.officialSources || []).length >= 2, `Tema ${number} sin dos fuentes oficiales`);
  assert.ok(theme.tree && theme.tree.length > 150, `Tema ${number} sin esquema suficiente`);
  assert.ok((theme.reviewTable || []).length >= 6, `Tema ${number} sin tabla suficiente`);
  assert.deepStrictEqual(theme.sections.map(section => section.heading), requiredHeadings, `Tema ${number} no respeta la estructura fija`);
  assert.equal((puebla.themeTests[theme.id] || []).length, 30, `Tema ${number} no conserva 30 preguntas`);
}

for (const number of [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]) {
  const theme = puebla.themes.find(item => Number(item.number) === number);
  assert.notEqual(theme?.theoryStatus?.autonomous, true, `Tema ${number} no debe declararse cerrado aún`);
}

const totalQuestions = Object.values(puebla.themeTests).reduce((sum, bank) => sum + bank.length, 0);
assert.equal(totalQuestions, 570, 'La Puebla debe conservar 570 preguntas');
assert.equal(puebla.practicalCases.length, 20, 'La Puebla debe conservar 20 supuestos');
assert.equal(puebla.simulacros.length, 3, 'La Puebla debe conservar tres simulacros');

const report = {
  version: 'v0.86.0',
  status: 'EN_PROGRESO',
  autonomousThemes: 5,
  totalThemes: 19,
  pendingThemes: puebla.theoryProgramme.v86.pendingThemes,
  minimumWords: context.window.OPOWEB_PUEBLA_THEORY_V86.minimumWords,
  questions: totalQuestions,
  practicalCases: puebla.practicalCases.length,
  simulations: puebla.simulacros.length
};
fs.writeFileSync(path.join(root, 'puebla-teoria-v86-bloque1.json'), JSON.stringify(report, null, 2));
console.log(`La Puebla v0.86 bloque 1 OK · ${report.autonomousThemes}/${report.totalThemes} temas · mínimo ${report.minimumWords} palabras · ${report.questions} preguntas`);
