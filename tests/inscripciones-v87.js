const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = file => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('assets/js/estado-v56.js');
run('assets/js/estado-inscripciones-v87.js');

const data = window.OPOSICIONES_DATA;
const state = window.OPOWEB_APPLICATION_STATUS_V87;
assert.ok(data && state);
assert.equal(data.oposiciones.length, 4);
const expectedRegistered = [
  'carranque-aux-admin-2026',
  'diputacion-toledo-admin-2026',
  'puebla-aux-admin-2026',
  'uc3m-aux-admin-2026'
].sort().join('|');
assert.equal(Array.from(state.registeredOpeIds).sort().join('|'), expectedRegistered);

const diputacion = data.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
const uc3m = data.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
assert.ok(diputacion.applicationStatus.registered);
assert.equal(diputacion.applicationStatus.feePaid, true);
assert.equal(diputacion.applicationStatus.feeAmount, 26);
assert.ok(diputacion.status.includes('Inscrito el 15/07/2026'));
assert.ok(diputacion.processCalendar.some(item => item.title === 'Inscripción registrada' && item.date === '15/07/2026'));

assert.ok(uc3m.applicationStatus.registered);
assert.equal(uc3m.applicationStatus.feePaid, true);
assert.equal(uc3m.applicationStatus.access, 'Turno libre · cupo general');
assert.ok(uc3m.status.includes('Inscrito el 15/07/2026'));
assert.ok(uc3m.processCalendar.some(item => item.title === 'Inscripción registrada' && item.date === '15/07/2026'));

const publicState = fs.readFileSync('assets/js/estado-inscripciones-v87.js', 'utf8');
assert.ok(!publicState.includes('47049754'));
assert.ok(!publicState.includes('ivannr20'));
assert.ok(!publicState.includes('REGAGE26'));
assert.ok(!publicState.includes('202699900014936'));
assert.equal(state.publicRepositoryContainsPersonalEvidence, false);

console.log('Inscripciones v0.87 OK · cuatro convocatorias activas registradas · sin identificadores personales en el repositorio');
