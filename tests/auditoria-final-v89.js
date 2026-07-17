const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const assert = require('assert');

const root = process.cwd();
const exists = file => fs.existsSync(path.join(root, file));

const programmes = Object.freeze([
  Object.freeze({ id: 'carranque-aux-admin-2026', label: 'Carranque', officialThemes: 20 }),
  Object.freeze({ id: 'puebla-aux-admin-2026', label: 'La Puebla', officialThemes: 19 }),
  Object.freeze({ id: 'diputacion-toledo-admin-2026', label: 'Diputación de Toledo', officialThemes: 40 }),
  Object.freeze({ id: 'uc3m-aux-admin-2026', label: 'UC3M', officialThemes: 20 })
]);

const suites = Object.freeze([
  Object.freeze({
    scope: 'Carranque 20/20',
    tests: Object.freeze([
      'tests/carranque-teoria-v85-bloque1.js',
      'tests/carranque-teoria-v85-bloque2.js',
      'tests/carranque-teoria-v85-bloque3.js',
      'tests/carranque-teoria-v85-bloque4.js',
      'tests/temario-depth-v85-final.js'
    ])
  }),
  Object.freeze({
    scope: 'La Puebla 19/19',
    tests: Object.freeze([
      'tests/puebla-teoria-v86-bloque1.js',
      'tests/puebla-teoria-v86-bloque2.js',
      'tests/puebla-teoria-v86-bloque3.js',
      'tests/puebla-teoria-v86-bloque4.js',
      'tests/puebla-teoria-v86-final.js'
    ])
  }),
  Object.freeze({
    scope: 'Diputación temas 25-40',
    tests: Object.freeze(Array.from({ length: 8 }, (_, index) => `tests/diputacion-teoria-v87-bloque${index + 1}.js`))
  }),
  Object.freeze({
    scope: 'UC3M temas específicos 13-20',
    tests: Object.freeze(Array.from({ length: 5 }, (_, index) => `tests/uc3m-teoria-v88-bloque${index + 1}.js`))
  }),
  Object.freeze({
    scope: 'Reserva documental OAPGT',
    tests: Object.freeze(['tests/oapgt-estatutos-v89.js'])
  }),
  Object.freeze({
    scope: 'Calidad global e integridad web',
    tests: Object.freeze([
      'tests/auditoria-calidad-v84.js',
      'tests/site-integrity-v85.js'
    ])
  })
]);

const officialThemeCount = programmes.reduce((sum, programme) => sum + programme.officialThemes, 0);
assert.equal(officialThemeCount, 99, `El total oficial debe ser 99, no ${officialThemeCount}`);
assert.equal(new Set(programmes.map(programme => programme.id)).size, programmes.length, 'Programas duplicados');

const allTests = suites.flatMap(suite => suite.tests.map(file => ({ scope: suite.scope, file })));
assert.equal(new Set(allTests.map(item => item.file)).size, allTests.length, 'Prueba duplicada en la matriz final');
for (const item of allTests) assert.ok(exists(item.file), `Falta ${item.file} (${item.scope})`);

const executions = [];
for (const item of allTests) {
  const startedAt = Date.now();
  console.log(`\n=== ${item.scope} · ${item.file} ===`);
  execFileSync(process.execPath, [item.file], { cwd: root, stdio: 'inherit' });
  executions.push({ scope: item.scope, test: item.file, durationMs: Date.now() - startedAt, status: 'OK' });
}

const report = {
  version: 'v0.89.0',
  reviewedAt: '2026-07-17',
  status: 'APTO_EDITORIAL_CON_RESERVA_DOCUMENTAL',
  officialThemeCount,
  programmes,
  auditedScopes: [
    'Carranque: veinte temas autosuficientes.',
    'La Puebla: diecinueve temas autosuficientes.',
    'Diputación: bloque profundo de los temas 25 a 40 y controles históricos del resto del programa.',
    'UC3M: temas específicos 13 a 20 autosuficientes.',
    'Banco global, integridad web, manifiesto y PWA.',
    'Cadena normativa de los Estatutos del OAPGT con bloqueo preventivo de contenido no consolidado.'
  ],
  reservation: {
    opposition: 'Diputación de Toledo',
    theme: 22,
    subsection: 'Estatutos del OAPGT',
    effect: 'No se habilitan teoría literal ni preguntas estatutarias hasta obtener y consolidar la cadena oficial completa.',
    status: 'PENDIENTE_CONSOLIDACION_OFICIAL'
  },
  strictAssessment: {
    editorialCoverage: 'aproximadamente 99 %',
    singleSourceReadiness: 'aproximadamente 97-98 %',
    reason: 'La reserva del OAPGT afecta a una parte expresamente exigida del tema 22 y no puede compensarse con una estimación optimista.'
  },
  executedTests: executions.length,
  executions
};

assert.ok(report.executedTests >= 26, `Matriz insuficiente: ${report.executedTests} pruebas`);
assert.equal(report.reservation.theme, 22);
assert.equal(report.status, 'APTO_EDITORIAL_CON_RESERVA_DOCUMENTAL');
fs.writeFileSync('auditoria-final-v89.json', JSON.stringify(report, null, 2));
console.log(`\nAuditoría final v89 OK · ${officialThemeCount} temas oficiales · ${executions.length} pruebas · reserva OAPGT tema 22`);