const fs = require('fs');
const assert = require('assert');
const {
  REQUIRED_HEADINGS,
  loadApplication,
  metric,
  normalize,
  officialReference,
  plain
} = require('./puebla-teoria-v86-audit-lib');

const OFFICIAL_TITLES = [
  'La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.',
  'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas: Disposiciones Generales. Los interesados en el procedimiento. Actividad de las Administraciones Públicas: Normas generales de actuación. Términos y plazos.',
  'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. El procedimiento administrativo común: Derechos del interesado; Iniciación; Ordenación; Instrucción Finalización y Ejecución. Especialidades en los procedimientos de naturaleza sancionadora y de responsabilidad patrimonial. Tramitación simplificada del procedimiento administrativo común.',
  'Revisión de los actos administrativos en vía administrativa. Los recursos administrativos. La revisión de oficio.',
  'El municipio. Organización y funcionamiento. La Provincia. Organización provincial. Competencias. El Régimen electoral de las Entidades Locales.',
  'Ley 4/2011, de 10 de marzo, de empleo público de Castilla-La Mancha: El Personal al servicio de las Administraciones Públicas. Provisión de puestos de trabajo. La carrera administrativa. Promoción interna. La selección del personal y la oferta pública de Empleo.',
  'La Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos laborales: Derechos y obligaciones. Servicios de Prevención. Consulta y participación de los trabajadores.',
  'La Ley 12/2010, de 18 de noviembre, de Igualdad entre Mujeres y Hombres de Castilla-La Mancha. La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.',
  'La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.',
  'Principios de tributación local. Delegación. Colaboración. Beneficios fiscales y compensación. Las obligaciones tributarias. Los obligados tributarios. Los procedimientos de gestión tributaria. La extinción de la deuda.',
  'La recaudación de los tributos locales. La recaudación en periodo voluntario. El aplazamiento, fraccionamiento y compensación de las deudas tributarias. La devolución de ingresos. La recaudación ejecutiva: el procedimiento de apremio.',
  'Los tributos locales. Normas generales. El Impuesto sobre Bienes Inmuebles, el Impuesto sobre Actividades Económicas, el Impuesto sobre vehículos de tracción mecánica, el Impuesto sobre el Incremento del valor de los terrenos de naturaleza urbana: naturaleza, hecho imponible y sujetos pasivo.',
  'Administración electrónica I. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.',
  'Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público: Los órganos de las Administraciones Públicas. Administración General del Estado.',
  'Microsoft Windows I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos.',
  'Microsoft Windows II. Navegación por Internet con Microsoft Internet Explorer y Microsoft Edge.',
  'LibreOffice y Microsoft Office I. Procesamiento de texto con procesadores de texto Microsoft Word y LibreOffice .',
  'LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.',
  'Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.'
];

const window = loadApplication(4);
const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
assert.ok(ope, 'No existe La Puebla');
assert.equal(ope.themes.length, 19);
assert.deepStrictEqual(ope.themes.map(theme => normalize(theme.title)), OFFICIAL_TITLES.map(normalize), 'Los títulos no coinciden con el Anexo I oficial');

const programme = ope.theoryProgramme?.v86;
assert.ok(programme, 'No existe theoryProgramme.v86');
assert.deepStrictEqual(plain(programme.completedThemes), Array.from({ length: 19 }, (_, index) => index + 1));
assert.deepStrictEqual(plain(programme.pendingThemes), []);
assert.equal(programme.status, 'APTO');
assert.equal(programme.reviewedAt, '2026-07-14');

const failures = [];
const themes = ope.themes.map(theme => {
  const result = metric(ope, theme);
  if (!result.literalTitleMatch) failures.push(`Tema ${result.number}: título no literal`);
  if (result.words < 1000) failures.push(`Tema ${result.number}: ${result.words} palabras`);
  if (result.sections < 13) failures.push(`Tema ${result.number}: ${result.sections} secciones`);
  if (result.paragraphs < 30) failures.push(`Tema ${result.number}: ${result.paragraphs} párrafos`);
  if (result.sources.length < 2) failures.push(`Tema ${result.number}: fuentes insuficientes`);
  if (!result.sources.every(source => officialReference(source.reference))) failures.push(`Tema ${result.number}: referencia no oficial`);
  if (result.articleBlocks < 4) failures.push(`Tema ${result.number}: cobertura insuficiente`);
  if (result.retention !== 3) failures.push(`Tema ${result.number}: retención incorrecta`);
  if (result.reviewRows < 8) failures.push(`Tema ${result.number}: tabla insuficiente`);
  if (result.treeWords < 20) failures.push(`Tema ${result.number}: esquema insuficiente`);
  if (result.questions !== 30) failures.push(`Tema ${result.number}: ${result.questions} preguntas`);
  if (!REQUIRED_HEADINGS.every(heading => result.headings.includes(heading))) failures.push(`Tema ${result.number}: estructura fija incompleta`);
  if (result.status.autonomous !== true || result.status.fixedStudyStructure !== true || result.status.noOffSyllabusFiller !== true) failures.push(`Tema ${result.number}: estado no autónomo`);
  if (result.status.reviewedAt !== '2026-07-14' || result.status.version !== 'v0.86.0') failures.push(`Tema ${result.number}: control de versión incorrecto`);
  return {
    number: result.number,
    title: theme.title,
    words: result.words,
    sections: result.sections,
    paragraphs: result.paragraphs,
    sources: result.sources.map(source => source.reference),
    articleBlocks: result.articleBlocks,
    questions: result.questions,
    autonomous: !failures.some(failure => failure.startsWith(`Tema ${result.number}:`))
  };
});

const totalQuestions = Object.values(ope.themeTests || {}).reduce((sum, questions) => sum + questions.length, 0);
const totalWords = themes.reduce((sum, theme) => sum + theme.words, 0);
const minimumWords = Math.min(...themes.map(theme => theme.words));
const averageWords = Math.round(totalWords / themes.length);
assert.equal(totalQuestions, 570);
assert.equal(ope.practicalCases.length, 20);
assert.equal(ope.simulacros.length, 3);
for (const simulation of ope.simulacros) {
  assert.equal(simulation.questions.length, 50);
  assert.equal(simulation.reserveQuestions.length, 5);
  assert.equal(simulation.audit.minutes, 60);
}
assert.ok(totalWords >= 22000, `Temario total demasiado breve: ${totalWords}`);

const report = {
  version: 'v0.86.0',
  reviewedAt: '2026-07-14',
  objective: 'OpoWeb como única fuente teórica',
  officialProgramme: 'BOP Toledo 82, de 5 de mayo de 2026, anuncio 2026-1965',
  status: failures.length ? 'REVISAR' : 'APTO',
  estimatedProgress: failures.length ? 90 : 99,
  totalThemes: 19,
  autonomousThemes: themes.filter(theme => theme.autonomous).length,
  totalWords,
  averageWords,
  minimumWords,
  questions: totalQuestions,
  practicalCases: ope.practicalCases.length,
  simulations: ope.simulacros.length,
  completedThemes: programme.completedThemes,
  pendingThemes: programme.pendingThemes,
  themes,
  failures,
  dynamicChecks: [
    'Comprobar modificaciones normativas posteriores al 14 de julio de 2026.',
    'Comprobar publicaciones de admitidos, tribunal, fecha, lugar e instrucciones del examen.',
    'Comprobar ordenanzas fiscales y calendario tributario municipal vigentes si el tribunal exige datos locales.',
    'Comprobar versiones efectivamente instaladas de Windows, Edge, Microsoft Office y LibreOffice si se anuncia prueba práctica informática.'
  ]
};

fs.writeFileSync('puebla-teoria-v86-final.json', JSON.stringify(report, null, 2));
const markdown = [
  '# Auditoría final de La Puebla · OpoWeb v0.86',
  '',
  `Estado: **${report.status}**`,
  `Temas autosuficientes: ${report.autonomousThemes}/${report.totalThemes}`,
  `Palabras teóricas: ${report.totalWords}`,
  `Media por tema: ${report.averageWords}`,
  `Mínimo por tema: ${report.minimumWords}`,
  `Preguntas conservadas: ${report.questions}`,
  `Supuestos: ${report.practicalCases}`,
  `Simulacros: ${report.simulations} de 50 + 5`,
  '',
  '| Tema | Palabras | Secciones | Párrafos | Fuentes | Cobertura | Preguntas | Estado |',
  '|---:|---:|---:|---:|---:|---:|---:|---|',
  ...themes.map(theme => `| ${theme.number} | ${theme.words} | ${theme.sections} | ${theme.paragraphs} | ${theme.sources.length} | ${theme.articleBlocks} | ${theme.questions} | ${theme.autonomous ? 'APTO' : 'REVISAR'} |`),
  '',
  '## Comprobaciones dinámicas',
  '',
  ...report.dynamicChecks.map(item => `- ${item}`),
  '',
  '## Fallos',
  '',
  ...(failures.length ? failures.map(item => `- ${item}`) : ['- Ninguno.'])
].join('\n');
fs.writeFileSync('puebla-teoria-v86-final.md', markdown);

assert.equal(report.status, 'APTO', JSON.stringify(failures));
assert.equal(report.autonomousThemes, 19);
assert.equal(report.questions, 570);
console.log(`La Puebla v0.86 APTO · 19/19 · ${totalWords} palabras · 570 preguntas · 20 supuestos`);
