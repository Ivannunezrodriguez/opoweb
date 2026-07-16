const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const context = { console, window: {} };
context.globalThis = context.window;
vm.createContext(context);
const run = file => vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
for (const file of [
  'assets/js/uc3m-v66.js','assets/js/uc3m-v67.js','assets/js/uc3m-v72-clean.js','assets/js/uc3m-v73-transparencia.js',
  'assets/js/uc3m-v73-fix.js','assets/js/uc3m-v74-losu.js','assets/js/uc3m-v75-estatutos.js','assets/js/uc3m-v76-academica-admision.js',
  'assets/js/uc3m-v77-normativa-interna.js','assets/js/uc3m-v78-presupuesto-2026.js','assets/js/uc3m-v79-contratacion-interna.js',
  'assets/js/uc3m-v80-cierre-calidad.js','assets/js/uc3m-teoria-v88-bloque1a.js','assets/js/uc3m-teoria-v88-bloque1b.js',
  'assets/js/uc3m-teoria-v88-bloque2.js','assets/js/uc3m-teoria-v88-bloque3.js'
]) run(file);

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const required = ['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const failures = [];
const metrics = [16,17].map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  const bank = ope.themeTests[theme.id] || [];
  const metric = { number, words: theme.theoryStatus?.words || 0, sources: theme.officialSources?.length || 0, questions: bank.length, rows: theme.reviewTable?.length || 0 };
  if (!theme.theoryStatus?.autonomous) failures.push(`Tema ${number} no autosuficiente`);
  if (!theme.theoryStatus?.programmeLiteral) failures.push(`Tema ${number} sin literalidad`);
  if (metric.words < 1500) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 4) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  if (metric.rows < 12) failures.push(`Tema ${number}: tabla insuficiente`);
  if (JSON.stringify(theme.sections.map(s => s.heading)) !== JSON.stringify(required)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (new Set(bank.map(q => q.id)).size !== bank.length) failures.push(`Tema ${number}: IDs duplicados`);
  return metric;
});
const programme = ope.theoryProgramme.v88;
assert.deepStrictEqual(Array.from(programme.completedThemes), [13,14,15,16,17]);
assert.deepStrictEqual(Array.from(programme.pendingThemes), [18,19,20]);
assert.equal(programme.autonomousThemes, 5);
assert.deepStrictEqual(failures, [], failures.join(' | '));
fs.writeFileSync('uc3m-teoria-v88-bloque3.json', JSON.stringify({ status:'OK', metrics, programme }, null, 2));
console.log(`UC3M bloque 3 OK · temas 16 y 17 · ${metrics.map(m => m.words).join('/')} palabras`);
