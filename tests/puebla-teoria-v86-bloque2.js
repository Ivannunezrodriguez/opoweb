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

const files = ['data/oposiciones.js', 'data/proceso.js', 'data/uc3m.js', 'data/ope-audit-v41.js'];
for (let version = 43; version <= 65; version += 1) files.push(`assets/js/diputacion-v${version}.js`);
files.push(
  'assets/js/uc3m-v66.js','assets/js/uc3m-v67.js','assets/js/puebla-v68.js',
  'assets/js/carranque-v69.js','assets/js/carranque-v69-fix.js','assets/js/carranque-v70.js',
  'assets/js/practicos-v71.js','assets/js/uc3m-v72-clean.js','assets/js/uc3m-v73-transparencia.js',
  'assets/js/uc3m-v73-fix.js','assets/js/uc3m-v74-losu.js','assets/js/uc3m-v75-estatutos.js',
  'assets/js/uc3m-v76-academica-admision.js','assets/js/uc3m-v77-normativa-interna.js',
  'assets/js/uc3m-v78-presupuesto-2026.js','assets/js/uc3m-v79-contratacion-interna.js',
  'assets/js/uc3m-v80-cierre-calidad.js','assets/js/municipales-v84-cierre.js','assets/js/municipales-v84-fix.js',
  'assets/js/puebla-teoria-v86-bloque1.js','assets/js/puebla-teoria-v86-bloque2.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const puebla = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
const release = context.window.OPOWEB_PUEBLA_THEORY_V86_BLOQUE2;
assert.ok(puebla, 'No existe La Puebla');
assert.ok(release, 'No se cargó el bloque 2');
assert.deepStrictEqual(plain(release.themes), [6,7,8,9,10]);
assert.deepStrictEqual(plain(release.completedThemes), [1,2,3,4,5,6,7,8,9,10]);
assert.deepStrictEqual(plain(release.pendingThemes), [11,12,13,14,15,16,17,18,19]);
assert.equal(puebla.theoryProgramme.v86.autonomousThemes, 10);
assert.equal(context.window.OPOWEB_PUEBLA_THEORY_V86.autonomousThemes, 10);

const requiredHeadings = [
  'Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'
];
const metrics = [];
for (const number of release.themes) {
  const theme = puebla.themes.find(item => Number(item.number) === number);
  assert.ok(theme, `Falta tema ${number}`);
  assert.equal(theme.theoryStatus.autonomous, true);
  assert.equal(theme.theoryStatus.programmeLiteral, true);
  assert.ok(theme.theoryStatus.words >= 900, `Tema ${number}: ${theme.theoryStatus.words} palabras`);
  assert.ok((theme.officialSources || []).length >= 2, `Tema ${number}: fuentes insuficientes`);
  assert.ok(theme.officialSources.every(item => /^(BOE-A-|DOUE-L-)/.test(item.reference)), `Tema ${number}: fuente no oficial`);
  assert.ok(theme.tree.length > 150, `Tema ${number}: esquema insuficiente`);
  assert.ok((theme.reviewTable || []).length >= 7, `Tema ${number}: tabla insuficiente`);
  assert.deepStrictEqual(plain(theme.sections.map(section => section.heading)), requiredHeadings);
  assert.equal((puebla.themeTests[theme.id] || []).length, 30, `Tema ${number}: banco alterado`);
  metrics.push({ number, words: theme.theoryStatus.words, sources: theme.officialSources.length, questions: puebla.themeTests[theme.id].length });
}
assert.equal(Object.values(puebla.themeTests).reduce((sum, bank) => sum + bank.length, 0), 570);
assert.equal(puebla.practicalCases.length, 20);
assert.equal(puebla.simulacros.length, 3);

const report = {
  version: 'v0.86.0', status: 'EN_PROGRESO', themes: metrics,
  minimumWords: Math.min(...metrics.map(item => item.words)),
  completedThemes: plain(release.completedThemes), pendingThemes: plain(release.pendingThemes),
  questions: 570, practicalCases: 20, simulations: 3
};
fs.writeFileSync(path.join(root, 'puebla-teoria-v86-bloque2.json'), JSON.stringify(report, null, 2));
console.log(`La Puebla v0.86 bloque 2 OK · 10/19 temas · mínimo ${report.minimumWords} palabras · 570 preguntas`);
