const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = file => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const wordCount = value => normalize(value).split(/\s+/).filter(Boolean).length;
const plain = value => JSON.parse(JSON.stringify(value));

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
run('assets/js/municipales-v84-fix.js');
run('assets/js/carranque-teoria-v85-bloque1.js');
run('assets/js/carranque-teoria-v85-estructura.js');
run('assets/js/carranque-teoria-v85-bloque2.js');
run('assets/js/carranque-teoria-v85-bloque3.js');
run('assets/js/carranque-teoria-v85-bloque4.js');

const requiredHeadings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

function metric(ope, theme, index) {
  const sections = theme.sections || [];
  const sectionText = sections.flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ');
  const fullText = `${sectionText} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  const words = wordCount(fullText);
  const paragraphs = sections.reduce((sum, section) => sum + (section.paragraphs || []).length, 0);
  const headings = sections.map(section => section.heading);
  const officialTitle = theme.officialTitle || theme.title;
  const literalTitleMatch = normalize(theme.title) === normalize(officialTitle);
  const sources = theme.officialSources || [];
  const questions = ope.themeTests?.[theme.id] || [];
  const autonomous = theme.theoryStatus?.autonomous === true
    && theme.theoryStatus?.fixedStudyStructure === true
    && theme.theoryStatus?.articleByArticle === true
    && theme.theoryStatus?.noOffSyllabusFiller === true
    && words >= 1000
    && sources.length >= 2
    && requiredHeadings.every(heading => headings.includes(heading));

  return {
    number: Number(theme.number || index + 1),
    id: theme.id,
    title: theme.title,
    officialTitle,
    literalTitleMatch,
    words,
    sections: sections.length,
    paragraphs,
    sources: sources.length,
    officialSourceReferences: sources.map(source => source.reference),
    articleBlocks: (theme.articleCoverage || []).length,
    reviewRows: (theme.reviewTable || []).length,
    questions: questions.length,
    autonomous,
    reviewedAt: theme.theoryStatus?.reviewedAt || null,
    theoryVersion: theme.theoryStatus?.version || null
  };
}

const report = {
  version: 'v0.85.0',
  date: '2026-07-13',
  objective: 'OpoWeb como única fuente teórica',
  oposiciones: []
};

for (const ope of window.OPOSICIONES_DATA.oposiciones) {
  const themes = ope.themes.map((theme, index) => metric(ope, theme, index));
  report.oposiciones.push({
    id: ope.id,
    name: ope.name,
    themes: themes.length,
    totalWords: themes.reduce((sum, item) => sum + item.words, 0),
    averageWords: Math.round(themes.reduce((sum, item) => sum + item.words, 0) / Math.max(themes.length, 1)),
    minimumWords: Math.min(...themes.map(item => item.words)),
    autonomousThemes: themes.filter(item => item.autonomous).length,
    literalTitles: themes.filter(item => item.literalTitleMatch).length,
    questions: themes.reduce((sum, item) => sum + item.questions, 0),
    themesData: themes
  });
}

const carranque = report.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
assert.ok(carranque, 'No existe Carranque en el informe');
const failures = [];
for (const theme of carranque.themesData) {
  if (!theme.literalTitleMatch) failures.push(`Tema ${theme.number}: título no literal`);
  if (!theme.autonomous) failures.push(`Tema ${theme.number}: no autosuficiente`);
  if (theme.words < 1000) failures.push(`Tema ${theme.number}: ${theme.words} palabras`);
  if (theme.sources < 2) failures.push(`Tema ${theme.number}: fuentes insuficientes`);
  if (theme.articleBlocks < 4) failures.push(`Tema ${theme.number}: cobertura normativa insuficiente`);
  if (theme.reviewRows < 8) failures.push(`Tema ${theme.number}: tabla insuficiente`);
  if (theme.questions !== 30) failures.push(`Tema ${theme.number}: banco de ${theme.questions} preguntas`);
  if (theme.reviewedAt !== '2026-07-13') failures.push(`Tema ${theme.number}: fecha de revisión incorrecta`);
  if (!theme.officialSourceReferences.every(reference => /^BOE-A-/.test(reference))) failures.push(`Tema ${theme.number}: fuente no oficial`);
}

const programme = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026').theoryProgramme?.v85;
assert.ok(programme, 'No existe estado del programa teórico');
assert.deepStrictEqual(plain(programme.completedThemes), Array.from({ length: 20 }, (_, index) => index + 1));
assert.deepStrictEqual(plain(programme.pendingThemes), []);

report.carranque = {
  status: failures.length ? 'REVISAR' : 'APTO',
  estimatedProgress: failures.length ? 90 : 99,
  autonomousThemes: carranque.autonomousThemes,
  totalThemes: carranque.themes,
  totalWords: carranque.totalWords,
  averageWords: carranque.averageWords,
  minimumWords: carranque.minimumWords,
  questions: carranque.questions,
  completedThemes: programme.completedThemes,
  pendingThemes: programme.pendingThemes,
  dynamicChecks: programme.dynamicChecks || [],
  failures
};

const allThemes = report.oposiciones.flatMap(ope => ope.themesData.map(theme => ({ ...theme, opeId: ope.id, opeName: ope.name })));
report.summary = {
  themes: allThemes.length,
  totalWords: allThemes.reduce((sum, item) => sum + item.words, 0),
  autonomousThemes: allThemes.filter(item => item.autonomous).length,
  carranqueAutonomous: carranque.autonomousThemes,
  carranqueStatus: report.carranque.status,
  remainingNonAutonomous: allThemes.filter(item => !item.autonomous).length
};

fs.writeFileSync('temario-depth-v85.json', JSON.stringify(report, null, 2));
const lines = [
  '# Auditoría final de teoría autosuficiente · OpoWeb v0.85',
  '',
  `Temas analizados: ${report.summary.themes}`,
  `Temas autosuficientes: ${report.summary.autonomousThemes}`,
  `Carranque: ${report.carranque.autonomousThemes}/${report.carranque.totalThemes} · ${report.carranque.status}`,
  `Palabras teóricas Carranque: ${report.carranque.totalWords}`,
  `Media Carranque: ${report.carranque.averageWords}`,
  `Mínimo Carranque: ${report.carranque.minimumWords}`,
  `Preguntas Carranque conservadas: ${report.carranque.questions}`,
  '',
  '## Estado por oposición',
  '',
  '| Oposición | Temas | Autosuficientes | Palabras | Media | Mínimo | Preguntas |',
  '|---|---:|---:|---:|---:|---:|---:|',
  ...report.oposiciones.map(item => `| ${item.name} | ${item.themes} | ${item.autonomousThemes} | ${item.totalWords} | ${item.averageWords} | ${item.minimumWords} | ${item.questions} |`),
  '',
  '## Carranque por tema',
  '',
  '| Tema | Palabras | Secciones | Párrafos | Fuentes | Artículos/bloques | Preguntas | Estado |',
  '|---:|---:|---:|---:|---:|---:|---:|---|',
  ...carranque.themesData.map(theme => `| ${theme.number} | ${theme.words} | ${theme.sections} | ${theme.paragraphs} | ${theme.sources} | ${theme.articleBlocks} | ${theme.questions} | ${theme.autonomous ? 'APTO' : 'REVISAR'} |`),
  '',
  '## Comprobaciones dinámicas pendientes',
  '',
  ...(report.carranque.dynamicChecks.length ? report.carranque.dynamicChecks.map(item => `- ${item}`) : ['- Ninguna.']),
  '',
  '## Fallos',
  '',
  ...(failures.length ? failures.map(item => `- ${item}`) : ['- Ninguno.'])
];
fs.writeFileSync('temario-depth-v85.md', lines.join('\n'));

assert.equal(report.carranque.status, 'APTO', JSON.stringify(failures));
assert.equal(report.carranque.autonomousThemes, 20);
assert.equal(report.carranque.questions, 600);
console.log(`Temario v0.85 APTO · Carranque 20/20 · ${report.carranque.totalWords} palabras · ${report.carranque.questions} preguntas`);
