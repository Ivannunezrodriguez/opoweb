const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = path => vm.runInNewContext(fs.readFileSync(path, 'utf8'), context, { filename: path });

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/carranque-v69.js');

const carranque = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
assert.ok(carranque, 'No se cargó Carranque');
assert.equal(carranque.themes.length, 20);

const requestedTheme = Number(process.env.CARRANQUE_THEME || 0);
const checkTheme = number => {
  const theme = carranque.themes.find(item => Number(item.number) === number);
  assert.ok(theme, `No existe el tema ${number}`);
  const bank = carranque.themeTests[theme.id] || [];
  assert.equal(bank.length, 30, `Tema ${number} tiene ${bank.length}`);
  assert.equal(new Set(bank.map(question => question.text)).size, 30, `Duplicados en tema ${number}`);
  assert.ok(bank.every(question => question.options.length === 4), `Opciones inválidas en tema ${number}`);
  assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)), `Respuesta inválida en tema ${number}`);
  assert.ok(bank.every(question => question.justification || question.source), `Falta justificación en tema ${number}`);
  assert.ok(bank.every(question => !/enfoque correcto|como debe estudiarse/i.test(question.text)), `Plantilla genérica en tema ${number}`);
};

if (requestedTheme) {
  checkTheme(requestedTheme);
  console.log(`Smoke Carranque real tema ${requestedTheme} OK`);
} else {
  assert.equal(carranque.testAudit.targetThemes, 10);
  assert.equal(carranque.practicalCases.length, 8);
  assert.ok(carranque.practicalCases.every(item => item.themes[0] >= 3 && item.themes[0] <= 10));
  console.log('Smoke Carranque resumen v0.69 OK');
}
