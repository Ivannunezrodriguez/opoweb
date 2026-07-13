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
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/uc3m-v66.js');
run('assets/js/uc3m-v67.js');
run('assets/js/puebla-v68.js');
run('assets/js/carranque-v69.js');
run('assets/js/carranque-v69-fix.js');
run('assets/js/carranque-v70.js');
run('assets/js/practicos-v71.js');
run('assets/js/uc3m-v72-clean.js');
run('assets/js/uc3m-v73-transparencia.js');
run('assets/js/uc3m-v73-fix.js');
run('assets/js/uc3m-v74-losu.js');
run('assets/js/uc3m-v75-estatutos.js');
run('assets/js/uc3m-v76-academica-admision.js');
run('assets/js/uc3m-v77-normativa-interna.js');
run('assets/js/uc3m-v78-presupuesto-2026.js');
run('assets/js/uc3m-v79-contratacion-interna.js');
run('assets/js/uc3m-v80-cierre-calidad.js');
run('assets/js/municipales-v84-cierre.js');

const release = window.OPOWEB_MUNICIPALES_V84;
assert.ok(release, 'No se cargó la auditoría municipal v0.84');
fs.writeFileSync('municipales-v84.json', JSON.stringify(release, null, 2));
assert.equal(release.version, 'v0.84.0');
assert.equal(release.globalStatus, 'APTO', JSON.stringify({ puebla: release.puebla.failures, carranque: release.carranque.failures }));

const data = window.OPOSICIONES_DATA;
const puebla = data.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
const carranque = data.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
assert.ok(puebla && carranque);

function validateCommon(ope, audit, expectedThemes, expectedQuestions, practicalMinimum) {
  assert.equal(audit.status, 'APTO', JSON.stringify(audit.failures));
  assert.equal(audit.estimatedProgress, 99);
  assert.equal(audit.totalQuestions, expectedQuestions);
  assert.equal(audit.minimumQuestions, 30);
  assert.equal(audit.targetThemes, expectedThemes);
  assert.equal(audit.literalThemes, expectedThemes);
  assert.equal(audit.themes.length, expectedThemes);
  assert.equal(audit.failures.length, 0, JSON.stringify(audit.failures));
  assert.ok(audit.practicalCases >= practicalMinimum);
  assert.equal(ope.themes.length, expectedThemes);
  assert.ok(audit.themes.every(item => item.count === 30));
  assert.ok(audit.themes.every(item => item.literalTitleMatch));
  assert.ok(audit.themes.every(item => item.duplicateIds === 0));
  assert.ok(audit.themes.every(item => item.duplicateTexts === 0));
  assert.ok(audit.themes.every(item => item.invalidAnswers === 0));
  assert.ok(audit.themes.every(item => item.invalidOptions === 0));
  assert.ok(audit.themes.every(item => item.missingTraceability === 0));
  assert.ok(audit.themes.every(item => item.genericQuestions === 0));
  assert.ok(audit.themes.every(item => item.suspiciousSources === 0));
  assert.ok(audit.themes.every(item => item.maxAnswerShare <= 0.40));
  assert.ok(audit.themes.every(item => item.difficulties.baja > 0 && item.difficulties.media > 0 && item.difficulties.alta > 0));
  assert.ok(ope.themes.every((theme, index) => theme.officialProgramOrder === index + 1));
  assert.ok(ope.themes.every(theme => theme.title === theme.officialTitle));
}

validateCommon(puebla, release.puebla, 19, 570, 20);
validateCommon(carranque, release.carranque, 20, 600, 18);

assert.deepStrictEqual(puebla.scoring, { correct: 0.20, wrong: -0.05, blank: 0 });
assert.equal(puebla.selectionProcess.firstExercise.main, 50);
assert.equal(puebla.selectionProcess.firstExercise.reserve, 5);
assert.equal(puebla.selectionProcess.firstExercise.minutes, 60);
assert.equal(puebla.selectionProcess.oppositionWeight, 80);
assert.equal(puebla.selectionProcess.meritWeight, 20);
assert.equal(puebla.personalMeritEstimate.consolidated, 0);
assert.deepStrictEqual(release.puebla.practicalThemeCoverage, Array.from({ length: 19 }, (_, index) => index + 1));

assert.deepStrictEqual(carranque.scoring, { correct: 0.25, wrong: -0.08, blank: 0 });
assert.equal(carranque.selectionProcess.firstExercise.main, 80);
assert.equal(carranque.selectionProcess.firstExercise.reserve, 5);
assert.equal(carranque.selectionProcess.firstExercise.minutes, 90);
assert.deepStrictEqual(carranque.selectionProcess.secondExercise.themes, [3, 20]);
assert.equal(carranque.personalMeritEstimate.conditional, 0.75);
assert.deepStrictEqual(release.carranque.practicalThemeCoverage, Array.from({ length: 18 }, (_, index) => index + 3));

for (const simulation of release.puebla.simulations) {
  assert.equal(simulation.main, 50);
  assert.equal(simulation.reserve, 5);
  assert.equal(simulation.minutes, 60);
  assert.equal(simulation.uniqueTexts, 55);
  assert.equal(simulation.representedThemes, 19);
}
for (const simulation of release.carranque.simulations) {
  assert.equal(simulation.main, 80);
  assert.equal(simulation.reserve, 5);
  assert.equal(simulation.minutes, 90);
  assert.equal(simulation.uniqueTexts, 85);
  assert.equal(simulation.representedThemes, 20);
}

console.log(`Municipales v0.84 APTO · La Puebla ${release.puebla.totalQuestions} · Carranque ${release.carranque.totalQuestions}`);
