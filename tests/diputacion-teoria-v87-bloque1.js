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

const files = ['data/oposiciones.js', 'data/proceso.js', 'data/uc3m.js', 'data/ope-audit-v41.js'];
for (let version = 43; version <= 65; version += 1) files.push(`assets/js/diputacion-v${version}.js`);
files.push('assets/js/diputacion-teoria-v87-bloque1.js');
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');
assert.equal(ope.themes.length, 40, 'Diputación debe conservar 40 temas');

const headings = [
  'Resumen orientado al aprobado',
  'Rigor normativo',
  'Desarrollo completo del epígrafe oficial',
  'Síntesis de repaso rápido',
  'Opo-Test: puntos calientes',
  'Tres preguntas de retención activa',
  'Estrategia de examen'
];
const expectedTitles = {
  25: 'La obligación tributaria: nacimiento, sujetos, elementos cuantitativos y extinción. Los tributos locales. Normas generales. Principios de tributación local. Delegación. Colaboración. Beneficios fiscales y compensación. Los procedimientos de gestión tributaria. La extinción de la deuda. Los procedimientos tributarios de revisión.',
  26: 'La recaudación de los tributos locales. La recaudación en periodo voluntario. El aplazamiento, fraccionamiento y compensación de las deudas tributarias. La devolución de ingresos. La recaudación ejecutiva. La revisión en vía administrativa de los actos y actuaciones de aplicación de los tributos.',
  27: 'El presupuesto general de las Entidades Locales: concepto y contenido. Especial referencia a las bases de ejecución del presupuesto. La elaboración y aprobación del presupuesto general. La prórroga presupuestaria.',
  28: 'La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales. Ficheros y datos. Funciones de la Agencia Española de Protección de Datos de carácter personal. La transparencia y buen gobierno. Obligación de suministrar información. Principios del buen gobierno.'
};

const failures = [];
const metrics = [];
for (const number of [25, 26, 27, 28]) {
  const theme = ope.themes.find(item => Number(item.number) === number);
  assert.ok(theme, `Falta tema ${number}`);
  const text = `${(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ')} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  const metric = {
    number,
    title: theme.title,
    titleMatch: normalize(theme.title) === normalize(expectedTitles[number]),
    words: wordCount(text),
    sections: (theme.sections || []).length,
    headings: plain((theme.sections || []).map(section => section.heading)),
    sources: (theme.officialSources || []).length,
    sourceReferences: plain((theme.officialSources || []).map(item => item.reference)),
    treeCharacters: (theme.tree || '').length,
    reviewRows: (theme.reviewTable || []).length,
    questions: (ope.themeTests?.[theme.id] || []).length,
    autonomous: theme.theoryStatus?.autonomous === true,
    programmeLiteral: theme.theoryStatus?.programmeLiteral === true,
    reviewedAt: theme.theoryStatus?.reviewedAt || null
  };
  if (!metric.titleMatch) failures.push(`Tema ${number}: título oficial alterado`);
  if (!metric.autonomous || !metric.programmeLiteral) failures.push(`Tema ${number}: estado teórico incompleto`);
  if (metric.words < 900) failures.push(`Tema ${number}: ${metric.words} palabras`);
  if (metric.sections !== 7 || JSON.stringify(metric.headings) !== JSON.stringify(headings)) failures.push(`Tema ${number}: estructura fija incorrecta`);
  if (metric.sources < 2) failures.push(`Tema ${number}: fuentes insuficientes`);
  if (metric.treeCharacters <= 150) failures.push(`Tema ${number}: esquema insuficiente`);
  if (metric.reviewRows < 8) failures.push(`Tema ${number}: tabla insuficiente`);
  if (metric.questions < 30) failures.push(`Tema ${number}: solo ${metric.questions} preguntas`);
  metrics.push(metric);
}

const programme = ope.theoryProgramme?.v87;
assert.ok(programme, 'No existe theoryProgramme.v87');
assert.equal(programme.status, 'EN_PROGRESO');
assert.deepStrictEqual(plain(programme.completedThemes), [25, 26, 27, 28]);
assert.equal(programme.autonomousThemes, 4);
assert.equal(programme.totalThemes, 40);
assert.equal(programme.pendingThemes.length, 36);
assert.ok(programme.dynamicChecks.some(item => /bases de ejecución/i.test(item)));
assert.ok(programme.dynamicChecks.some(item => /OAPGT/i.test(item)));

const totalQuestions = Object.values(ope.themeTests).reduce((sum, bank) => sum + bank.length, 0);
assert.equal(totalQuestions, 1242, 'Debe conservarse el banco de 1.242 preguntas');
const theme28Text = normalize(ope.themes.find(item => Number(item.number) === 28).sections.flatMap(section => section.paragraphs).join(' '));
assert.ok(theme28Text.includes('registro de actividades'), 'Tema 28 debe actualizar el concepto de ficheros al RGPD');
assert.ok(theme28Text.includes('no exige la antigua inscripcion general'), 'Tema 28 debe excluir el antiguo registro general de ficheros');
const blockText = normalize(metrics.map(item => {
  const theme = ope.themes.find(value => Number(value.number) === item.number);
  return theme.sections.flatMap(section => section.paragraphs).join(' ');
}).join(' '));
assert.ok(blockText.includes('no presume competencias estatutarias no documentadas'), 'El bloque no protege la literalidad pendiente del OAPGT');

const report = {
  version: 'v0.87.0',
  reviewedAt: '2026-07-14',
  status: failures.length ? 'REVISAR' : 'APTO',
  completedThemes: [25, 26, 27, 28],
  totalWords: metrics.reduce((sum, item) => sum + item.words, 0),
  minimumWords: Math.min(...metrics.map(item => item.words)),
  questions: totalQuestions,
  themes: metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque1.json'), JSON.stringify(report, null, 2));
assert.deepStrictEqual(failures, [], failures.join(' | '));
console.log(`Diputación v0.87 bloque 1 APTO · temas 25-28 · ${report.totalWords} palabras · mínimo ${report.minimumWords} · ${report.questions} preguntas conservadas`);
