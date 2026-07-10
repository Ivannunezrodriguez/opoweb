(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones) return;

  const PREFIX = 'uc3m-aux-admin-2026';

  // Retirada de la OPE de Las Ventas con Peña Aguilera por decisión de estudio.
  data.oposiciones = data.oposiciones.filter(o => o.id !== 'ventas-aux-admin-2026');

  const rawThemes = [
    ['La Constitución Española de 1978: estructura y contenido; derechos y deberes fundamentales; elaboración de las leyes; organización territorial del Estado; reforma constitucional.', 'Constitucional'],
    ['Ley 39/2015 (I): disposiciones generales; interesados; actividad de las Administraciones Públicas; actos administrativos.', 'Procedimiento administrativo'],
    ['Ley 39/2015 (II): procedimiento administrativo común y revisión de los actos en vía administrativa.', 'Procedimiento administrativo'],
    ['Ley 40/2015 (I): órganos de las Administraciones Públicas.', 'Régimen jurídico'],
    ['Ley 40/2015 (II): funcionamiento electrónico del sector público.', 'Administración electrónica'],
    ['Ley Orgánica 3/2018: disposiciones generales; principios; derechos; encargado del tratamiento y delegado de protección de datos.', 'Protección de datos'],
    ['Ley 10/2019 de Transparencia y Participación de la Comunidad de Madrid; publicidad activa; derecho de acceso; portal y procedimiento UC3M.', 'Transparencia'],
    ['Ley Orgánica 3/2007 e igualdad en la UC3M; identidad y expresión de género; no discriminación; prevención del acoso; III Plan de Igualdad UC3M.', 'Igualdad'],
    ['Word 2019, Excel 2019, Gmail, Drive, Docs, Sheets, Calendar y correo electrónico.', 'Ofimática'],
    ['TREBEP: personal; derechos y deberes; código de conducta; adquisición y pérdida de la relación de servicio; situaciones administrativas.', 'Empleo público'],
    ['Real Decreto 364/1995: ingreso, provisión, carrera y promoción interna; Ley 53/1984 de incompatibilidades.', 'Función pública'],
    ['Ley 31/1995 de Prevención de Riesgos Laborales: objeto, ámbito, definiciones, derechos, obligaciones, servicios de prevención, consulta y participación.', 'Prevención'],
    ['Ley Orgánica 2/2023 del Sistema Universitario (I): disposiciones generales, autonomía, universidades, enseñanzas, investigación, cooperación, sociedad e internacionalización.', 'Gestión universitaria'],
    ['Ley Orgánica 2/2023 del Sistema Universitario (II): estudiantado y régimen específico de universidades públicas.', 'Gestión universitaria'],
    ['Estatutos de la UC3M: Defensor Universitario, servicios, régimen económico-financiero y reforma.', 'Normativa UC3M'],
    ['Real Decreto 822/2021 y normativas académicas UC3M: matrícula, permanencia, evaluación y enseñanzas oficiales.', 'Gestión académica'],
    ['Real Decreto 534/2024: acceso y admisión a Grado; adjudicación de plazas; normativa UC3M.', 'Acceso universitario'],
    ['Presupuesto UC3M (I): características, estructura, ingresos, gastos, créditos iniciales, financiación, modificaciones y ejecución de ingresos.', 'Presupuesto universitario'],
    ['Presupuesto UC3M (II): ejecución de gastos, gestión económico-financiera, ordenación del gasto y pago, documentos contables, liquidación y cierre.', 'Presupuesto universitario'],
    ['Ley 9/2017 de Contratos del Sector Público y contratación UC3M: ámbito, tipos, perfección, órgano, objeto, presupuesto, valor estimado, precio, preparación y adjudicación.', 'Contratación pública']
  ];

  const baseSections = (title) => [
    {
      heading: 'Documento base',
      paragraphs: [
        `Tema oficial UC3M: ${title}`,
        'Estudia primero el documento normativo completo por títulos, capítulos y artículos; después limita el repaso al epígrafe exacto exigido por la convocatoria.'
      ]
    },
    {
      heading: 'Qué dominar para el test',
      paragraphs: [
        'Concepto literal, estructura de la norma, órgano competente, requisitos, plazos, efectos y excepciones.',
        'El examen es tipo test: prioriza diferencias entre conceptos próximos y datos que puedan convertirse en una opción distractora.'
      ]
    }
  ];

  const themes = rawThemes.map((row, index) => ({
    id: `${PREFIX}-t${index + 1}`,
    number: index + 1,
    title: row[0],
    area: row[1],
    commonPotential: index < 12 || index === 19,
    sections: baseSections(row[0]),
    tree: [`Tema ${index + 1}`, '- Documento base', '- Qué dominar para el test', '- Opo-Test', '- Retención activa'].join('\n'),
    reviewTable: [
      ['Punto', 'Qué comprobar'],
      ['Norma', 'Denominación, fecha y estructura'],
      ['Conceptos', 'Definición y diferencias'],
      ['Examen', 'Regla, excepción, órgano, plazo y efecto']
    ]
  }));

  const genericOptions = [
    'Partir del programa oficial y estudiar literalmente norma, estructura, órganos, plazos y excepciones.',
    'Preparar únicamente un resumen de otra oposición sin comprobar si coincide el epígrafe.',
    'Memorizar solo definiciones generales y omitir normativa específica de la UC3M.',
    'Contestar por intuición sin comprobar la literalidad del texto vigente.'
  ];

  function makeQuestions(theme) {
    return Array.from({ length: 12 }, (_, i) => {
      const shift = (theme.number + i) % 4;
      const opts = genericOptions.slice(shift).concat(genericOptions.slice(0, shift));
      return {
        id: `${theme.id}-q${i + 1}`,
        text: `Tema ${theme.number}. ¿Cuál es el método correcto para preparar este epígrafe de ${theme.area}?`,
        options: opts.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[opts.indexOf(genericOptions[0])],
        justification: 'La convocatoria exige el programa oficial y la legislación vigente en la fecha de publicación de las listas definitivas y del anuncio del ejercicio.'
      };
    });
  }

  const themeTests = Object.fromEntries(themes.map(t => [t.id, makeQuestions(t)]));
  const allQuestions = Object.values(themeTests).flat();
  const simulacros = [0, 31, 67].map((start, simIndex) => ({
    id: `${PREFIX}-sim${simIndex + 1}`,
    title: `Simulacro UC3M ${simIndex + 1} · 70 preguntas`,
    questions: Array.from({ length: 70 }, (_, i) => ({
      ...allQuestions[(start + i * 11) % allQuestions.length],
      id: `${PREFIX}-sim${simIndex + 1}-q${i + 1}`
    }))
  }));

  const studyCases = [
    'Solicitud telemática y justificante de tasa',
    'Subsanación de exclusión provisional',
    'Notificación electrónica a una persona jurídica',
    'Acceso a información pública universitaria',
    'Tratamiento de datos personales de estudiantes',
    'Incompatibilidad de empleado público',
    'Matrícula, permanencia y evaluación',
    'Modificación presupuestaria universitaria',
    'Documento contable de gasto',
    'Expediente de contratación UC3M'
  ].map((title, i) => ({
    id: `${PREFIX}-sp${i + 1}`,
    title,
    statement: `Caso de estudio sobre ${title.toLowerCase()}. No constituye un ejercicio oficial de esta convocatoria, cuyo examen es un único test. Identifica norma, órgano, trámite, plazo y consecuencia.`,
    guidance: 'Respuesta orientativa: cita la norma aplicable, identifica el órgano, ordena el trámite y concreta plazo y efecto. Estos casos sirven para comprender el temario y mejorar el test.'
  }));

  const uc3m = {
    id: PREFIX,
    name: 'Escala Auxiliar Administrativa C2 - Universidad Carlos III de Madrid',
    shortName: 'UC3M - Auxiliar Administrativa C2',
    places: '34 plazas (2 reservadas a discapacidad)',
    exam: 'Concurso-oposición. Un único test eliminatorio de 70 preguntas + 5 de reserva, 60 minutos. Acierto +1; error -1/3; blanco 0. Oposición 70% y concurso 30%.',
    status: 'Pendiente de solicitud. Plazo abierto del 09/07/2026 al 05/08/2026, ambos inclusive. Fecha previsible del ejercicio: sábado 21/11/2026 a las 10:00. Tasa general: 13,83 €.',
    scoring: { correct: 1, wrong: -(1 / 3), blank: 0 },
    themes,
    themeTests,
    practicalCases: studyCases,
    simulacros,
    simulationSize: 70,
    officialLinks: [
      { label: 'Proceso UC3M 2026', url: 'https://www.uc3m.es/empleo/concurso_oposicion_escala_auxiliar_administrativa_C2_2026' },
      { label: 'Solicitud telemática', url: 'https://aplicaciones.uc3m.es/convoca/' },
      { label: 'Empleo PTGAS UC3M', url: 'https://www.uc3m.es/empleo/pas' },
      { label: 'BOE-A-2026-14624', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624' }
    ],
    processCalendar: [
      { date: '30/06/2026', title: 'Resolución de convocatoria', note: '34 plazas de Escala Auxiliar Administrativa C2; 2 plazas reservadas a discapacidad.', status: 'publicado' },
      { date: '06/07/2026', title: 'Publicación en BOE', note: 'Convocatoria publicada como BOE-A-2026-14624.', status: 'publicado' },
      { date: '08/07/2026', title: 'Anuncio en BOCM nº 161', note: 'Esta publicación abre el cómputo del plazo de solicitudes.', status: 'publicado' },
      { date: '09/07/2026 - 05/08/2026', title: 'Presentación de solicitudes', note: 'Exclusivamente telemática. Tasa 13,83 €. El pago o la exención deben acreditarse dentro del plazo; la falta de pago no es subsanable.', status: 'abierto' },
      { date: 'Después del 05/08/2026', title: 'Lista provisional', note: 'La UC3M publicará admitidos y excluidos y la composición del tribunal.', status: 'pendiente' },
      { date: '10 días hábiles', title: 'Subsanación', note: 'Plazo único e improrrogable desde el día siguiente a la publicación de la lista provisional.', status: 'pendiente' },
      { date: 'Mínimo 10 días hábiles antes', title: 'Lista definitiva y convocatoria del examen', note: 'La resolución definitiva indicará fecha, lugar y hora del ejercicio.', status: 'pendiente' },
      { date: '21/11/2026 · 10:00', title: 'Fecha previsible del ejercicio', note: 'Fecha anunciada por la página oficial de la UC3M; debe confirmarse en la resolución definitiva.', status: 'previsto' },
      { date: 'Tras superar el test', title: 'Presentación de méritos', note: 'Solo quienes aprueben la oposición tendrán 10 días hábiles para acreditar inglés, experiencia y cursos.', status: 'pendiente' },
      { date: 'Final del proceso', title: 'Lista de espera de personal interino', note: 'La Gerencia fijará la puntuación mínima para formar la lista.', status: 'pendiente' }
    ],
    version: '0.16.0',
    changelog: [{
      version: '0.16.0',
      date: '2026-07-10',
      changes: [
        'Retirada Las Ventas con Peña Aguilera del selector',
        'Añadida UC3M Auxiliar Administrativa C2 con 34 plazas',
        'Añadidos plazo 09/07-05/08/2026, tasa, calendario, temario oficial de 20 temas y fecha previsible 21/11/2026'
      ]
    }]
  };

  const existing = data.oposiciones.findIndex(o => o.id === PREFIX);
  if (existing >= 0) data.oposiciones[existing] = uc3m;
  else data.oposiciones.push(uc3m);
})();
