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
  'assets/js/uc3m-teoria-v88-bloque4-preguntas.js','assets/js/uc3m-teoria-v88-bloque5.js'
]) run(file);

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'uc3m-aux-admin-2026');
const required = ['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const failures = [];
const theme = ope.themes.find(item => Number(item.number) === 20);
const bank = ope.themeTests[theme.id] || [];
const body = [
  ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
  theme.tree || '',
  ...(theme.reviewTable || []).flat()
].join(' ');
const metric = {
  number: 20,
  words: theme.theoryStatus?.words || 0,
  sources: theme.officialSources?.length || 0,
  questions: bank.length,
  rows: theme.reviewTable?.length || 0
};

if (!theme.theoryStatus?.autonomous) failures.push('Tema 20 no autosuficiente');
if (!theme.theoryStatus?.programmeLiteral) failures.push('Tema 20 sin literalidad');
if (metric.words < 2600) failures.push(`Tema 20: ${metric.words} palabras`);
if (metric.sources < 5) failures.push(`Tema 20: ${metric.sources} fuentes`);
if (metric.questions < 30) failures.push(`Tema 20: ${metric.questions} preguntas`);
if (metric.rows < 18) failures.push('Tema 20: tabla insuficiente');
if (JSON.stringify(theme.sections.map(section => section.heading)) !== JSON.stringify(required)) failures.push('Tema 20: estructura incorrecta');
if (new Set(bank.map(question => question.id)).size !== bank.length) failures.push('Tema 20: IDs duplicados');
if (new Set(bank.map(question => question.text.trim().toLowerCase())).size !== bank.length) failures.push('Tema 20: preguntas duplicadas');
if (!bank.every(question => Array.isArray(question.options) && question.options.length === 4 && question.options.some(option => option.letter === question.answer))) failures.push('Tema 20: pregunta inválida');
if (!(theme.officialSources || []).every(source => /^https:\/\//.test(source.url || ''))) failures.push('Tema 20: fuente sin URL HTTPS');
for (const marker of ['inferior a 40.000', 'inferior a 15.000', 'inferior a 50.000', 'un millón', 'tres presupuestos', 'valor estimado', 'presupuesto base', 'Perfil de contratante', 'Sistema dinámico']) {
  if (!body.includes(marker)) failures.push(`Tema 20: falta marcador ${marker}`);
}

const programme = ope.theoryProgramme.v88;
if (Array.from(programme.completedThemes).join(',') !== '13,14,15,16,17,18,19,20') failures.push('Temas completados incorrectos');
if (Array.from(programme.pendingThemes).length !== 0) failures.push('Persisten temas pendientes');
if (programme.autonomousThemes !== 8) failures.push(`Temas autónomos: ${programme.autonomousThemes}`);
if (programme.status !== 'CERRADO') failures.push(`Estado editorial inesperado: ${programme.status}`);

const report = { status: failures.length ? 'REVISAR' : 'OK', metric, programme, failures };
fs.writeFileSync('uc3m-teoria-v88-bloque5.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
assert.deepStrictEqual(failures, [], failures.join(' | '));
console.log(`UC3M bloque 5 OK · tema 20 · ${metric.words} palabras · ${metric.questions} preguntas · programa 13–20 cerrado`);