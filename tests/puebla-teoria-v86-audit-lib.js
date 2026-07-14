const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const MODULES_BEFORE_THEORY = [
  'data/oposiciones.js',
  'data/proceso.js',
  'data/uc3m.js',
  'data/ope-audit-v41.js',
  ...Array.from({ length: 23 }, (_, index) => `assets/js/diputacion-v${index + 43}.js`),
  'assets/js/uc3m-v66.js',
  'assets/js/uc3m-v67.js',
  'assets/js/puebla-v68.js',
  'assets/js/carranque-v69.js',
  'assets/js/carranque-v69-fix.js',
  'assets/js/carranque-v70.js',
  'assets/js/practicos-v71.js',
  'assets/js/uc3m-v72-clean.js',
  'assets/js/uc3m-v73-transparencia.js',
  'assets/js/uc3m-v73-fix.js',
  'assets/js/uc3m-v74-losu.js',
  'assets/js/uc3m-v75-estatutos.js',
  'assets/js/uc3m-v76-academica-admision.js',
  'assets/js/uc3m-v77-normativa-interna.js',
  'assets/js/uc3m-v78-presupuesto-2026.js',
  'assets/js/uc3m-v79-contratacion-interna.js',
  'assets/js/uc3m-v80-cierre-calidad.js',
  'assets/js/municipales-v84-cierre.js',
  'assets/js/municipales-v84-fix.js',
  'assets/js/carranque-teoria-v85-bloque1.js',
  'assets/js/carranque-teoria-v85-estructura.js',
  'assets/js/carranque-teoria-v85-bloque2.js',
  'assets/js/carranque-teoria-v85-bloque3.js',
  'assets/js/carranque-teoria-v85-bloque4.js'
];

const PUEBLA_THEORY_MODULES = [
  'assets/js/puebla-teoria-v86-bloque1.js',
  'assets/js/puebla-teoria-v86-bloque2.js',
  'assets/js/puebla-teoria-v86-bloque3.js',
  'assets/js/puebla-teoria-v86-bloque4.js'
];
const PUEBLA_THEORY_FIX = 'assets/js/puebla-teoria-v86-fix.js';

const REQUIRED_HEADINGS = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];

const normalize = value => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();
const wordCount = value => normalize(value).split(/\s+/).filter(Boolean).length;
const plain = value => JSON.parse(JSON.stringify(value));
const officialReference = value => /^(BOE-A-|EUR-Lex-|MICROSOFT-|LIBREOFFICE-)/.test(String(value || ''));

function loadApplication(theoryBlocks = 4) {
  const window = {};
  window.window = window;
  const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
  const run = file => {
    assert.ok(fs.existsSync(file), `No existe el módulo ${file}`);
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  };
  MODULES_BEFORE_THEORY.forEach(run);
  PUEBLA_THEORY_MODULES.slice(0, theoryBlocks).forEach(run);
  run(PUEBLA_THEORY_FIX);
  return window;
}

function metric(ope, theme) {
  const sections = theme.sections || [];
  const headings = sections.map(section => section.heading);
  const sectionText = sections.flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ');
  const fullText = `${sectionText} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  const sources = theme.officialSources || [];
  return {
    number: Number(theme.number),
    words: wordCount(fullText),
    sections: sections.length,
    paragraphs: sections.reduce((sum, section) => sum + (section.paragraphs || []).length, 0),
    headings,
    sources,
    articleBlocks: (theme.articleCoverage || []).length,
    retention: (theme.retentionQuestions || []).length,
    reviewRows: (theme.reviewTable || []).length,
    treeWords: wordCount(theme.tree || ''),
    questions: (ope.themeTests?.[theme.id] || []).length,
    literalTitleMatch: normalize(theme.title) === normalize(theme.officialTitle || theme.title),
    status: theme.theoryStatus || {}
  };
}

function auditBlock({ blockNumber, themeNumbers, expectedCompleted, outputFile }) {
  const window = loadApplication(blockNumber);
  const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
  const release = window[`OPOWEB_PUEBLA_TEORIA_V86_BLOQUE${blockNumber}`];
  assert.ok(ope, 'No se encontró La Puebla');
  assert.ok(release, `No se cargó el bloque ${blockNumber}`);
  assert.deepStrictEqual(plain(release.themes), themeNumbers);
  assert.equal(release.autonomous, true);
  assert.deepStrictEqual(plain(ope.theoryProgramme.v86.completedThemes), expectedCompleted);
  assert.deepStrictEqual(
    plain(ope.theoryProgramme.v86.pendingThemes),
    Array.from({ length: 19 }, (_, index) => index + 1).filter(number => !expectedCompleted.includes(number))
  );

  const results = [];
  for (const number of themeNumbers) {
    const theme = ope.themes.find(item => Number(item.number) === number);
    assert.ok(theme, `No existe el tema ${number}`);
    const result = metric(ope, theme);
    for (const heading of REQUIRED_HEADINGS) assert.ok(result.headings.includes(heading), `Tema ${number}: falta ${heading}`);
    assert.ok(!result.headings.some(heading => /argot tecnico|trampas habituales|mapa de estudio util/i.test(normalize(heading))), `Tema ${number}: sección excluida`);
    assert.ok(result.words >= 1000, `Tema ${number}: solo ${result.words} palabras`);
    assert.ok(result.sections >= 13, `Tema ${number}: solo ${result.sections} secciones`);
    assert.ok(result.paragraphs >= 30, `Tema ${number}: solo ${result.paragraphs} párrafos`);
    assert.ok(result.sources.length >= 2, `Tema ${number}: fuentes insuficientes`);
    assert.ok(result.sources.every(source => officialReference(source.reference)), `Tema ${number}: fuente no oficial`);
    assert.ok(result.sources.every(source => source.reviewedAt === '2026-07-14'), `Tema ${number}: fecha de fuente incorrecta`);
    assert.ok(result.articleBlocks >= 4, `Tema ${number}: cobertura normativa/funcional insuficiente`);
    assert.equal(result.retention, 3, `Tema ${number}: retención incorrecta`);
    assert.ok(result.reviewRows >= 8, `Tema ${number}: tabla insuficiente`);
    assert.ok(result.treeWords >= 20, `Tema ${number}: esquema insuficiente`);
    assert.equal(result.questions, 30, `Tema ${number}: se alteró el banco de preguntas`);
    assert.equal(result.literalTitleMatch, true, `Tema ${number}: título no literal`);
    assert.equal(result.status.version, 'v0.86.0');
    assert.equal(result.status.reviewedAt, '2026-07-14');
    assert.equal(result.status.autonomous, true);
    assert.equal(result.status.fixedStudyStructure, true);
    assert.equal(result.status.noOffSyllabusFiller, true);
    if (number <= 14) assert.equal(result.status.articleByArticle, true, `Tema ${number}: falta cobertura por artículos`);
    results.push({ ...result, sources: result.sources.map(source => source.reference), status: undefined, headings: undefined });
  }

  const totalWords = results.reduce((sum, item) => sum + item.words, 0);
  const minimumWords = Math.min(...results.map(item => item.words));
  assert.ok(totalWords >= themeNumbers.length * 1100, `Bloque ${blockNumber}: total insuficiente ${totalWords}`);
  const report = {
    version: 'v0.86.0',
    reviewedAt: '2026-07-14',
    status: 'APTO',
    block: blockNumber,
    themes: results,
    totalWords,
    minimumWords,
    completedThemes: ope.theoryProgramme.v86.completedThemes,
    pendingThemes: ope.theoryProgramme.v86.pendingThemes
  };
  fs.writeFileSync(outputFile, JSON.stringify(report, null, 2));
  return report;
}

module.exports = {
  MODULES_BEFORE_THEORY,
  PUEBLA_THEORY_MODULES,
  PUEBLA_THEORY_FIX,
  REQUIRED_HEADINGS,
  normalize,
  wordCount,
  plain,
  officialReference,
  loadApplication,
  metric,
  auditBlock
};
