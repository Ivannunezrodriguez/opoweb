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
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const wordCount = value => normalize(value).split(/\s+/).filter(Boolean).length;

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
assert.ok(puebla, 'No existe La Puebla');
const headings = ['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const forbidden = /argot tecnico|trampas habituales|mapa de estudio util|contenido pendiente|relleno/i;
const failures = [];
const metrics = puebla.themes.map((theme, index) => {
  const number = Number(theme.number || index + 1);
  const officialTitle = theme.officialTitle || theme.title;
  const titleMatch = normalize(theme.title) === normalize(officialTitle);
  const text = `${(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ')} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  const words = wordCount(text);
  const sources = theme.officialSources || [];
  const themeHeadings = plain((theme.sections || []).map(section => section.heading));
  const questions = (puebla.themeTests?.[theme.id] || []).length;
  const metric = {
    number, title: theme.title, officialTitle, titleMatch, words,
    sections: (theme.sections || []).length,
    paragraphs: (theme.sections || []).reduce((sum, section) => sum + (section.paragraphs || []).length, 0),
    sources: sources.length, sourceReferences: sources.map(item => item.reference),
    treeCharacters: (theme.tree || '').length, reviewRows: (theme.reviewTable || []).length,
    questions, autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true,
    reviewedAt: theme.theoryStatus?.reviewedAt || null
  };
  if (!titleMatch) failures.push(`Tema ${number}: título no literal`);
  if (!metric.autonomous || !metric.programmeLiteral) failures.push(`Tema ${number}: no marcado como autosuficiente y literal`);
  if (words < 900) failures.push(`Tema ${number}: ${words} palabras`);
  if (metric.sections !== 7 || JSON.stringify(themeHeadings) !== JSON.stringify(headings)) failures.push(`Tema ${number}: estructura fija incorrecta`);
  if (metric.sources < 2) failures.push(`Tema ${number}: ${metric.sources} fuentes`);
  if (metric.treeCharacters <= 150) failures.push(`Tema ${number}: esquema insuficiente`);
  if (metric.reviewRows < 7) failures.push(`Tema ${number}: tabla insuficiente`);
  if (questions !== 30) failures.push(`Tema ${number}: ${questions} preguntas`);
  if (forbidden.test(text)) failures.push(`Tema ${number}: contiene sección o texto excluido`);
  return metric;
});

const programme = puebla.theoryProgramme?.v86;
const totalQuestions = Object.values(puebla.themeTests).reduce((sum, bank) => sum + bank.length, 0);
if (!programme) failures.push('No existe theoryProgramme.v86');
if (programme?.status !== 'APTO') failures.push(`Estado del programa: ${programme?.status}`);
if (programme?.autonomousThemes !== 19) failures.push(`Temas autónomos: ${programme?.autonomousThemes}`);
if (JSON.stringify(plain(programme?.completedThemes || [])) !== JSON.stringify(Array.from({ length: 19 }, (_, index) => index + 1))) failures.push('Lista de temas completados incorrecta');
if ((programme?.pendingThemes || []).length) failures.push(`Pendientes: ${programme.pendingThemes.join(', ')}`);
if (totalQuestions !== 570) failures.push(`Preguntas: ${totalQuestions}`);
if (puebla.practicalCases.length !== 20) failures.push(`Supuestos: ${puebla.practicalCases.length}`);
if (puebla.simulacros.length !== 3) failures.push(`Simulacros: ${puebla.simulacros.length}`);

const report = {
  version: 'v0.86.0', reviewedAt: '2026-07-14', status: failures.length ? 'REVISAR' : 'APTO',
  officialProgrammeSource: 'BOP Toledo núm. 82, 5 de mayo de 2026, Anexo I',
  themes: metrics, totalThemes: metrics.length, autonomousThemes: metrics.filter(item => item.autonomous).length,
  totalWords: metrics.reduce((sum, item) => sum + item.words, 0),
  averageWords: Math.round(metrics.reduce((sum, item) => sum + item.words, 0) / metrics.length),
  minimumWords: Math.min(...metrics.map(item => item.words)),
  questions: totalQuestions, practicalCases: puebla.practicalCases.length, simulations: puebla.simulacros.length,
  completedThemes: plain(programme?.completedThemes || []), pendingThemes: plain(programme?.pendingThemes || []),
  dynamicChecks: plain(programme?.dynamicChecks || []), failures
};
fs.writeFileSync(path.join(root, 'puebla-teoria-v86-final.json'), JSON.stringify(report, null, 2));
const md = [
  '# La Puebla · auditoría final de teoría autosuficiente v0.86','',
  `Estado: **${report.status}**`,`Temas: ${report.autonomousThemes}/${report.totalThemes}`,
  `Palabras: ${report.totalWords} · media ${report.averageWords} · mínimo ${report.minimumWords}`,
  `Preguntas: ${report.questions} · supuestos: ${report.practicalCases} · simulacros: ${report.simulations}`,'',
  '| Tema | Palabras | Fuentes | Tabla | Preguntas | Estado |','|---:|---:|---:|---:|---:|---|',
  ...metrics.map(item => `| ${item.number} | ${item.words} | ${item.sources} | ${item.reviewRows} | ${item.questions} | ${item.autonomous && item.titleMatch ? 'APTO' : 'REVISAR'} |`),
  '','## Revisiones dinámicas',...(report.dynamicChecks.length ? report.dynamicChecks.map(item => `- ${item}`) : ['- Ninguna.']),
  '','## Fallos',...(failures.length ? failures.map(item => `- ${item}`) : ['- Ninguno.'])
].join('\n');
fs.writeFileSync(path.join(root, 'puebla-teoria-v86-final.md'), md);
assert.deepStrictEqual(failures, [], failures.join(' | '));
assert.equal(report.status, 'APTO');
assert.equal(report.autonomousThemes, 19);
assert.equal(report.questions, 570);
console.log(`La Puebla v0.86 APTO · 19/19 · ${report.totalWords} palabras · 570 preguntas`);
