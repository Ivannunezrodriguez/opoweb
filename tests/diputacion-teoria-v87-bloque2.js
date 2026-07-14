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
files.push(
  'assets/js/diputacion-teoria-v87-bloque1.js',
  'assets/js/diputacion-teoria-v87-bloque2.js',
  'assets/js/diputacion-test-v87-bloque2.js'
);
for (const file of files) vm.runInContext(read(file), context, { filename: file });

const ope = context.window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'diputacion-toledo-admin-2026');
assert.ok(ope, 'No existe Diputación');
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
  29: 'El Impuesto sobre Bienes Inmuebles. Naturaleza. Hecho imponible. Sujeto pasivo. Exenciones y bonificaciones. Base Imponible. Base liquidable. Cuota, devengo y periodo impositivo. El Impuesto sobre Actividades Económicas. Naturaleza. Hecho imponible. Sujeto pasivo. Cuota: las tarifas. Devengo y periodo impositivo.',
  30: 'Impuesto sobre vehículos de tracción mecánica. Naturaleza. Hecho imponible. Sujeto pasivo. Base imponible, cuota y devengo. Gestión. El Impuesto sobre el Incremento del valor de los terrenos de naturaleza urbana. Naturaleza y hecho imponible. Las Tasas. Concepto. Hecho imponible. Sujetos pasivos. Devengo. Base imponible.',
  31: 'Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza. Firma electrónica y certificados electrónicos. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.'
};

const failures = [];
const metrics = [];
for (const number of [29, 30, 31]) {
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
assert.deepStrictEqual(plain(programme.completedThemes), [25, 26, 27, 28, 29, 30, 31]);
assert.equal(programme.autonomousThemes, 7);
assert.equal(programme.totalThemes, 40);
assert.equal(programme.pendingThemes.length, 33);
assert.ok(programme.dynamicChecks.some(item => /ordenanzas locales/i.test(item)));
assert.ok(programme.dynamicChecks.some(item => /2024\/1183/i.test(item)));

const reinforcement = context.window.OPOWEB_DIPUTACION_TEST_V87;
assert.ok(reinforcement, 'No existe auditoría del refuerzo de preguntas');
assert.deepStrictEqual(plain(reinforcement.addedByTheme), { 29: 7, 30: 4, 31: 1 });
assert.equal(reinforcement.totalAdded, 12);
assert.deepStrictEqual(plain(reinforcement.totals), { 29: 30, 30: 30, 31: 30 });

const totalQuestions = Object.values(ope.themeTests).reduce((sum, bank) => sum + bank.length, 0);
assert.equal(totalQuestions, 1254, 'El refuerzo debe elevar el banco de Diputación de 1.242 a 1.254 preguntas');
const theme30Text = normalize(ope.themes.find(item => Number(item.number) === 30).sections.flatMap(section => section.paragraphs).join(' '));
assert.ok(theme30Text.includes('no configuran una magnitud separada con ese nombre') || theme30Text.includes('no tiene una base imponible autonoma'), 'Tema 30 debe aclarar la cuantificación real del IVTM');
const theme31Text = normalize(ope.themes.find(item => Number(item.number) === 31).sections.flatMap(section => section.paragraphs).join(' '));
assert.ok(theme31Text.includes('ley 59 2003 quedo derogada'), 'Tema 31 debe excluir el marco derogado');
assert.ok(theme31Text.includes('solo personas fisicas firman'), 'Tema 31 debe diferenciar firma y sello');
assert.ok(theme31Text.includes('reglamento ue 2024 1183'), 'Tema 31 debe incluir la revisión dinámica eIDAS 2');

const report = {
  version: 'v0.87.0',
  reviewedAt: '2026-07-14',
  status: failures.length ? 'REVISAR' : 'APTO',
  completedThemes: plain(programme.completedThemes),
  totalWords: metrics.reduce((sum, item) => sum + item.words, 0),
  minimumWords: Math.min(...metrics.map(item => item.words)),
  questions: totalQuestions,
  addedQuestions: reinforcement.totalAdded,
  themes: metrics,
  failures
};
fs.writeFileSync(path.join(root, 'diputacion-teoria-v87-bloque2.json'), JSON.stringify(report, null, 2));
assert.deepStrictEqual(failures, [], failures.join(' | '));
console.log(`Diputación v0.87 bloque 2 APTO · temas 29-31 · ${report.totalWords} palabras · mínimo ${report.minimumWords} · ${report.questions} preguntas`);
