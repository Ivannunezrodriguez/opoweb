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
  'assets/js/uc3m-teoria-v88-bloque2.js','assets/js/uc3m-teoria-v88-bloque3.js','assets/js/uc3m-teoria-v88-bloque4.js',
  'assets/js/uc3m-teoria-v88-bloque4-preguntas.js'
]) run(file);

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const required = ['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const failures = [];
const requiredMarkers = {
  18: ['300.468.067,59', '325 millones', '161.190.785,21', '146.834.705,33', '41.882.621,94', 'devengo'],
  19: ['RC', 'ADO', '5.000 euros', '12.000 euros', 'un mes', 'liquidación']
};

const metrics = [18,19].map(number => {
  const theme = ope.themes.find(item => Number(item.number) === number);
  const bank = ope.themeTests[theme.id] || [];
  const body = [
    ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
    theme.tree || '',
    ...(theme.reviewTable || []).flat()
  ].join(' ');
  const metric = {
    number,
    words: theme.theoryStatus?.words || 0,
    sources: theme.officialSources?.length || 0,
    questions: bank.length,
    rows: theme.reviewTable?.length || 0
  };
  if (!theme.theoryStatus?.autonomous) failures.push(`Tema ${number} no autosuficiente`);
  if (!theme.theoryStatus?.programmeLiteral) failures.push(`Tema ${number} sin literalidad`);
  if (metric.words < 1800) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sources < 4) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.questions < 30) failures.push(`Tema ${number}: ${metric.questions} preguntas`);
  if (metric.rows < 12) failures.push(`Tema ${number}: tabla insuficiente`);
  if (JSON.stringify(theme.sections.map(section => section.heading)) !== JSON.stringify(required)) failures.push(`Tema ${number}: estructura incorrecta`);
  if (new Set(bank.map(question => question.id)).size !== bank.length) failures.push(`Tema ${number}: IDs duplicados`);
  if (new Set(bank.map(question => question.text.trim().toLowerCase())).size !== bank.length) failures.push(`Tema ${number}: preguntas duplicadas`);
  if (!bank.every(question => Array.isArray(question.options) && question.options.length === 4 && question.options.some(option => option.letter === question.answer))) failures.push(`Tema ${number}: pregunta inválida`);
  if (!bank.every(question => question.justification || question.source)) failures.push(`Tema ${number}: pregunta sin justificación`);
  for (const marker of requiredMarkers[number]) {
    if (!body.includes(marker)) failures.push(`Tema ${number}: falta marcador ${marker}`);
  }
  if (!(theme.officialSources || []).every(source => /^https:\/\//.test(source.url || ''))) failures.push(`Tema ${number}: fuente sin URL HTTPS`);
  return metric;
});

const programme = ope.theoryProgramme.v88;
if (Array.from(programme.completedThemes).join(',') !== '13,14,15,16,17,18,19') failures.push('Temas completados incorrectos');
if (Array.from(programme.pendingThemes).join(',') !== '20') failures.push('Temas pendientes incorrectos');
if (programme.autonomousThemes !== 7) failures.push(`Temas autónomos: ${programme.autonomousThemes}`);
if (programme.status !== 'EN_PROGRESO') failures.push(`Estado editorial inesperado: ${programme.status}`);

const report = { status: failures.length ? 'REVISAR' : 'OK', metrics, programme, failures };
fs.writeFileSync('uc3m-teoria-v88-bloque4.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], failures.join(' | '));
console.log(`UC3M bloque 4 OK · temas 18 y 19 · ${metrics.map(metric => metric.words).join('/')} palabras · ${metrics.map(metric => metric.questions).join('/')} preguntas`);