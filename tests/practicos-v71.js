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
run('assets/js/puebla-v68.js');
run('assets/js/carranque-v69.js');
run('assets/js/carranque-v69-fix.js');
run('assets/js/carranque-v70.js');
run('assets/js/practicos-v71.js');

const puebla = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
const carranque = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
assert.ok(puebla && carranque);
assert.equal(puebla.practicalCases.length, 20);
assert.equal(carranque.practicalCases.length, 18);
const cases = [...puebla.practicalCases, ...carranque.practicalCases];
assert.equal(cases.length, 38);
assert.equal(window.OPOWEB_PRACTICOS_V71.enrichedCases, 38);
for (const item of cases) {
  assert.ok(item.solution, `Falta solución: ${item.title}`);
  assert.ok(Array.isArray(item.solution.legalBasis) && item.solution.legalBasis.length >= 1, `Falta base jurídica: ${item.title}`);
  assert.ok(Array.isArray(item.solution.steps) && item.solution.steps.length >= 4, `Pasos insuficientes: ${item.title}`);
  assert.ok(Array.isArray(item.solution.commonErrors) && item.solution.commonErrors.length >= 3, `Errores insuficientes: ${item.title}`);
  assert.ok(String(item.solution.conclusion || '').length >= 60, `Conclusión insuficiente: ${item.title}`);
  assert.equal(item.guidance, item.solution.conclusion);
  assert.ok(Array.isArray(item.rubric) && item.rubric.length === 5, `Rúbrica inválida: ${item.title}`);
}
console.log('Prácticos v0.71 OK · 38 soluciones desarrolladas');
