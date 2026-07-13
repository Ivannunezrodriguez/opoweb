const fs = require('fs');
const vm = require('vm');

const window = {};
window.window = window;
const context = {
  window,
  console,
  Set,
  Map,
  Array,
  Object,
  String,
  Number,
  Boolean,
  Math,
  Date,
  JSON,
  URL
};
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
run('assets/js/municipales-v84-fix.js');
run('assets/js/carranque-teoria-v85-bloque1.js');
run('assets/js/carranque-teoria-v85-estructura.js');
run('assets/js/carranque-teoria-v85-bloque2.js');

const STOPWORDS = new Set([
  'a','al','ante','bajo','con','contra','de','del','desde','durante','e','el','en','entre','hacia','hasta','la','las','los','o','para','por','que','se','segun','sin','sobre','su','sus','tras','un','una','uno','unos','unas','y',
  'ley','real','decreto','organica','texto','refundido','articulo','articulos','titulo','titulos','capitulo','capitulos','disposiciones','generales','general','administracion','administraciones','publica','publicas','local','locales'
]);

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function words(value) {
  return normalize(value).split(/\s+/).filter(Boolean);
}

function significantTokens(value) {
  return [...new Set(words(value).filter(token => token.length >= 4 && !STOPWORDS.has(token) && !/^\d+$/.test(token)))];
}

function sectionText(theme) {
  return (theme.sections || []).flatMap(section => [
    section.heading || '',
    ...(section.paragraphs || [])
  ]).join(' ');
}

function tableText(theme) {
  return (theme.reviewTable || []).flat().join(' ');
}

function themeMetrics(ope, theme, index) {
  const sectionBody = sectionText(theme);
  const tree = theme.tree || '';
  const table = tableText(theme);
  const combined = [sectionBody, tree, table].join(' ');
  const officialTitle = theme.officialTitle || theme.officialThemeTitle || null;
  const titleTokens = significantTokens(officialTitle || theme.title);
  const contentTokenSet = new Set(words(combined));
  const missingConcepts = titleTokens.filter(token => !contentTokenSet.has(token));
  const sections = theme.sections || [];
  const paragraphs = sections.reduce((sum, section) => sum + (section.paragraphs || []).length, 0);
  const studyWords = words(combined).length;
  const questionCount = (ope.themeTests?.[theme.id] || []).length;
  const literalTitleMatch = officialTitle ? normalize(theme.title) === normalize(officialTitle) : null;
  const autonomous = theme.theoryStatus?.autonomous === true;
  const officialSources = (theme.officialSources || []).length;

  let depth = 'adequate';
  if (studyWords < 150 || sections.length < 2 || paragraphs < 3) depth = 'critical';
  else if (studyWords < 350 || paragraphs < 6) depth = 'short';
  else if (studyWords < 650) depth = 'medium';

  let concordance = 'good';
  const missingRatio = titleTokens.length ? missingConcepts.length / titleTokens.length : 0;
  if (literalTitleMatch === false || missingRatio > 0.45) concordance = 'critical';
  else if (!officialTitle || missingRatio > 0.25) concordance = 'review';

  return {
    number: Number(theme.number || index + 1),
    id: theme.id,
    title: theme.title,
    officialTitle,
    literalTitleMatch,
    area: theme.area || '',
    modularSource: theme.modularSource || null,
    sections: sections.length,
    paragraphs,
    sectionWords: words(sectionBody).length,
    treeWords: words(tree).length,
    tableWords: words(table).length,
    studyWords,
    questionCount,
    titleConcepts: titleTokens,
    missingConcepts,
    missingConceptRatio: Number(missingRatio.toFixed(3)),
    depth,
    concordance,
    autonomous,
    officialSources,
    theoryVersion: theme.theoryStatus?.version || null,
    reviewedAt: theme.theoryStatus?.reviewedAt || null
  };
}

const report = {
  version: 'v0.85-audit',
  date: '2026-07-13',
  criteria: {
    criticalDepth: 'menos de 150 palabras, menos de 2 secciones o menos de 3 párrafos',
    shortDepth: 'menos de 350 palabras o menos de 6 párrafos',
    mediumDepth: 'entre 350 y 649 palabras',
    adequateDepth: '650 o más palabras',
    autonomousTheme: 'al menos 1.000 palabras, fuentes oficiales y marca de revisión jurídica específica',
    concordanceReview: 'sin título oficial trazable o más del 25 % de conceptos significativos ausentes',
    concordanceCritical: 'título literal distinto o más del 45 % de conceptos significativos ausentes'
  },
  oposiciones: []
};

for (const ope of window.OPOSICIONES_DATA.oposiciones) {
  const themes = ope.themes.map((theme, index) => themeMetrics(ope, theme, index));
  const sorted = [...themes].sort((a, b) => a.studyWords - b.studyWords);
  report.oposiciones.push({
    id: ope.id,
    name: ope.name,
    themes: themes.length,
    totalStudyWords: themes.reduce((sum, item) => sum + item.studyWords, 0),
    averageStudyWords: Math.round(themes.reduce((sum, item) => sum + item.studyWords, 0) / Math.max(themes.length, 1)),
    medianStudyWords: sorted.length ? sorted[Math.floor(sorted.length / 2)].studyWords : 0,
    criticalDepth: themes.filter(item => item.depth === 'critical').length,
    shortDepth: themes.filter(item => item.depth === 'short').length,
    mediumDepth: themes.filter(item => item.depth === 'medium').length,
    adequateDepth: themes.filter(item => item.depth === 'adequate').length,
    autonomousThemes: themes.filter(item => item.autonomous && item.studyWords >= 1000 && item.officialSources >= 2).length,
    criticalConcordance: themes.filter(item => item.concordance === 'critical').length,
    reviewConcordance: themes.filter(item => item.concordance === 'review').length,
    missingOfficialTitle: themes.filter(item => !item.officialTitle).length,
    shortestThemes: sorted.slice(0, 12),
    themes
  });
}

const allThemes = report.oposiciones.flatMap(ope => ope.themes.map(theme => ({ ...theme, opeId: ope.id, opeName: ope.name })));
report.summary = {
  themes: allThemes.length,
  totalStudyWords: allThemes.reduce((sum, item) => sum + item.studyWords, 0),
  criticalDepth: allThemes.filter(item => item.depth === 'critical').length,
  shortDepth: allThemes.filter(item => item.depth === 'short').length,
  mediumDepth: allThemes.filter(item => item.depth === 'medium').length,
  adequateDepth: allThemes.filter(item => item.depth === 'adequate').length,
  autonomousThemes: allThemes.filter(item => item.autonomous && item.studyWords >= 1000 && item.officialSources >= 2).length,
  criticalConcordance: allThemes.filter(item => item.concordance === 'critical').length,
  reviewConcordance: allThemes.filter(item => item.concordance === 'review').length,
  missingOfficialTitle: allThemes.filter(item => !item.officialTitle).length,
  shortestThemes: [...allThemes].sort((a, b) => a.studyWords - b.studyWords).slice(0, 30),
  highestMissingConceptRatio: [...allThemes].sort((a, b) => b.missingConceptRatio - a.missingConceptRatio).slice(0, 30)
};

fs.writeFileSync('temario-depth-v85.json', JSON.stringify(report, null, 2));

const lines = [
  '# Auditoría de concordancia y profundidad · OpoWeb v0.85',
  '',
  `Temas analizados: ${report.summary.themes}`,
  `Palabras de estudio: ${report.summary.totalStudyWords}`,
  `Temas autosuficientes: ${report.summary.autonomousThemes}`,
  `Profundidad crítica: ${report.summary.criticalDepth}`,
  `Profundidad breve: ${report.summary.shortDepth}`,
  `Concordancia crítica: ${report.summary.criticalConcordance}`,
  `Concordancia a revisar: ${report.summary.reviewConcordance}`,
  '',
  '## Resumen por oposición',
  '',
  '| Oposición | Temas | Media palabras | Autosuficientes | Críticos | Breves | Concordancia crítica | Revisar |',
  '|---|---:|---:|---:|---:|---:|---:|---:|',
  ...report.oposiciones.map(ope => `| ${ope.name} | ${ope.themes.length} | ${ope.averageStudyWords} | ${ope.autonomousThemes} | ${ope.criticalDepth} | ${ope.shortDepth} | ${ope.criticalConcordance} | ${ope.reviewConcordance} |`),
  '',
  '## 30 temas más breves',
  '',
  '| Oposición | Tema | Palabras | Secciones | Párrafos | Estado | Título |',
  '|---|---:|---:|---:|---:|---|---|',
  ...report.summary.shortestThemes.map(item => `| ${item.opeName} | ${item.number} | ${item.studyWords} | ${item.sections} | ${item.paragraphs} | ${item.depth} | ${String(item.title).replace(/\|/g, '/')} |`),
  '',
  '## Mayor riesgo de discordancia',
  '',
  '| Oposición | Tema | Ausencia | Estado | Conceptos no localizados |',
  '|---|---:|---:|---|---|',
  ...report.summary.highestMissingConceptRatio.map(item => `| ${item.opeName} | ${item.number} | ${Math.round(item.missingConceptRatio * 100)} % | ${item.concordance} | ${item.missingConcepts.join(', ')} |`)
];
fs.writeFileSync('temario-depth-v85.md', lines.join('\n'));

console.log(JSON.stringify(report.summary));
