const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = { console, window: {} };
context.globalThis = context.window;
vm.createContext(context);
const plain = value => JSON.parse(JSON.stringify(value));

const files = ['data/oposiciones.js','data/proceso.js','data/uc3m.js','data/ope-audit-v41.js'];
for (let version = 43; version <= 65; version += 1) files.push(`assets/js/diputacion-v${version}.js`);
files.push(
  'assets/js/uc3m-v66.js','assets/js/uc3m-v67.js','assets/js/puebla-v68.js',
  'assets/js/carranque-v69.js','assets/js/carranque-v69-fix.js','assets/js/carranque-v70.js',
  'assets/js/practicos-v71.js','assets/js/uc3m-v72-clean.js','assets/js/uc3m-v73-transparencia.js',
  'assets/js/uc3m-v73-fix.js','assets/js/uc3m-v74-losu.js','assets/js/uc3m-v75-estatutos.js',
  'assets/js/uc3m-v76-academica-admision.js','assets/js/uc3m-v77-normativa-interna.js',
  'assets/js/uc3m-v78-presupuesto-2026.js','assets/js/uc3m-v79-contratacion-interna.js',
  'assets/js/uc3m-v80-cierre-calidad.js','assets/js/municipales-v84-cierre.js','assets/js/municipales-v84-fix.js',
  'assets/js/puebla-teoria-v86-bloque1.js','assets/js/puebla-teoria-v86-bloque2.js',
  'assets/js/puebla-teoria-v86-bloque3.js','assets/js/puebla-teoria-v86-bloque4.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const puebla = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
const release = context.window.OPOWEB_PUEBLA_THEORY_V86_BLOQUE4;
assert.ok(puebla && release);
assert.deepStrictEqual(plain(release.themes), [15,16,17,18,19]);
assert.deepStrictEqual(plain(release.completedThemes), Array.from({ length: 19 }, (_, index) => index + 1));
assert.deepStrictEqual(plain(release.pendingThemes), []);
assert.equal(release.status, 'APTO');
assert.equal(puebla.theoryProgramme.v86.autonomousThemes, 19);
assert.equal(context.window.OPOWEB_PUEBLA_THEORY_V86.autonomousThemes, 19);

const headings = ['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const metrics = [];
for (const number of release.themes) {
  const theme = puebla.themes.find(item => Number(item.number) === number);
  assert.ok(theme);
  assert.equal(theme.theoryStatus.autonomous, true);
  assert.equal(theme.theoryStatus.programmeLiteral, true);
  assert.ok(theme.theoryStatus.words >= 900, `Tema ${number}: ${theme.theoryStatus.words} palabras`);
  assert.ok((theme.officialSources || []).length >= 2, `Tema ${number}: fuentes insuficientes`);
  assert.ok(theme.officialSources.every(item => /^(MICROSOFT-|LIBREOFFICE-|INTEL-|USB-IF-)/.test(item.reference)), `Tema ${number}: fuente no oficial`);
  assert.ok(theme.tree.length > 150);
  assert.ok(theme.reviewTable.length >= 8);
  assert.deepStrictEqual(plain(theme.sections.map(section => section.heading)), headings);
  assert.equal((puebla.themeTests[theme.id] || []).length, 30);
  metrics.push({ number, words: theme.theoryStatus.words, sources: theme.officialSources.length, questions: 30 });
}
assert.equal(Object.values(puebla.themeTests).reduce((sum, bank) => sum + bank.length, 0), 570);
assert.equal(puebla.practicalCases.length, 20);
assert.equal(puebla.simulacros.length, 3);
assert.equal(puebla.theoryProgramme.v86.dynamicChecks.length, 3);

const report = { version: 'v0.86.0', status: 'APTO', themes: metrics,
  minimumWords: Math.min(...metrics.map(item => item.words)), completedThemes: plain(release.completedThemes),
  pendingThemes: [], questions: 570, practicalCases: 20, simulations: 3,
  dynamicChecks: plain(puebla.theoryProgramme.v86.dynamicChecks) };
fs.writeFileSync(path.join(root, 'puebla-teoria-v86-bloque4.json'), JSON.stringify(report, null, 2));
console.log(`La Puebla v0.86 bloque 4 OK · 19/19 temas · mínimo ${report.minimumWords} palabras · 570 preguntas`);
