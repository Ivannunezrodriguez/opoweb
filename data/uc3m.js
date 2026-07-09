(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones) return;

  const VERSION = '0.16.0';
  const prefix = 'uc3m-aux-admin-2026';

  const rawThemes = [
    ['La Constitución Española de 1978: estructura y contenido. Derechos y deberes fundamentales. Elaboración de las leyes. Organización territorial del Estado. Reforma constitucional.', 'Constitucional'],
    ['Ley 39/2015 I: disposiciones generales, interesados, actividad de las Administraciones Públicas y actos administrativos.', 'Procedimiento administrativo'],
    ['Ley 39/2015 II: procedimiento administrativo común y revisión de los actos en vía administrativa.', 'Procedimiento administrativo'],
    ['Ley 40/2015 I: órganos de las Administraciones Públicas.', 'Régimen jurídico'],
    ['Ley 40/2015 II: funcionamiento electrónico del sector público.', 'Administración electrónica'],
    ['LO 3/2018 de Protección de Datos: disposiciones generales, principios, derechos, encargado y delegado de protección de datos.', 'Protección de datos'],
    ['Ley 10/2019 de Transparencia y Participación de la Comunidad de Madrid: publicidad activa, acceso a la información pública y portal de transparencia UC3M.', 'Transparencia'],
    ['LO 3/2007 de igualdad y normativa UC3M sobre igualdad, identidad, no discriminación, acoso e III Plan de Igualdad.', 'Igualdad'],
    ['Procesadores de texto, hojas de cálculo, Word 2019, Excel 2019, herramientas Google, correo electrónico y gestión de mensajes.', 'Ofimática'],
    ['TREBEP: personal al servicio de las Administraciones Públicas, derechos, deberes, código de conducta, adquisición y pérdida de la relación de servicio y situaciones administrativas.', 'Empleo público'],
    ['RD 364/1995: ingreso, provisión, carrera, promoción interna e incompatibilidades del personal al servicio de las Administraciones Públicas.', 'Empleo público'],
    ['Ley 31/1995 de Prevención de Riesgos Laborales: objeto, ámbito, definiciones, derechos, obligaciones, servicios de prevención, consulta y participación.', 'Prevención'],
    ['LO 2/2023 del Sistema Universitario I: funciones, autonomía, creación y reconocimiento, enseñanzas, investigación, cooperación, sociedad e internacionalización.', 'Gestión universitaria'],
    ['LO 2/2023 del Sistema Universitario II: estudiantado, régimen económico-financiero, PDI y personal técnico, de gestión y administración y servicios.', 'Gestión universitaria'],
    ['Estatutos de la Universidad Carlos III de Madrid: Defensor Universitario, servicios universitarios, régimen económico-financiero y reforma de Estatutos.', 'UC3M'],
    ['RD 822/2021 y normativas académicas UC3M: matrícula, permanencia, evaluación y enseñanzas universitarias oficiales.', 'Gestión académica'],
    ['RD 534/2024: acceso a enseñanzas oficiales de Grado, prueba de acceso, admisión y regulación UC3M.', 'Acceso universitario'],
    ['Presupuesto UC3M I: características, estructura, ingresos, gastos, créditos iniciales, financiación, modificaciones y ejecución de ingresos.', 'Gestión económico-financiera'],
    ['Presupuesto UC3M II: ejecución de gastos, gestión presupuestaria, ordenación del gasto y pago, documentos contables, liquidación y cierre.', 'Gestión económico-financiera'],
    ['Ley 9/2017 de Contratos del Sector Público: ámbito, tipos contractuales, órgano, objeto, presupuesto, valor estimado, preparación y adjudicación; especial referencia UC3M.', 'Contratación']
  ];

  function sections(theme) {
    return [
      {
        heading: 'Resumen orientado al aprobado',
        paragraphs: [
          `Tema de ${theme[1]}. Estudia el enunciado oficial de la convocatoria UC3M y separa regla general, órgano competente, plazo, efecto jurídico y excepción.`,
          'Prioridad realista: dominar primero los bloques comunes reutilizables con ayuntamientos y Diputación; después añadir la capa universitaria específica.'
        ]
      },
      {
        heading: 'Rigor normativo',
        paragraphs: [
          'Trabaja siempre con norma vigente a la fecha que fije la convocatoria/lista definitiva. No sustituyas el temario UC3M por apuntes locales cuando el enunciado sea universitario.',
          'En temas UC3M, identifica expresamente Universidad Carlos III de Madrid, Estatutos, normativa académica, presupuesto propio y procedimiento interno cuando el tema lo pida.'
        ]
      },
      {
        heading: 'Opo-Test: puntos calientes',
        paragraphs: [
          'Plazos, órganos, conceptos con nombre técnico, diferencias entre ley estatal/autonómica/universitaria y efectos de cada trámite.',
          'En el test penaliza 1/3 cada error: conviene contestar solo cuando puedas descartar con seguridad al menos dos opciones.'
        ]
      },
      {
        heading: 'Retención activa',
        paragraphs: [
          '¿Cuál es la norma principal de este tema y qué parte exacta del enunciado cubre?',
          '¿Qué órgano, plazo o efecto podrían convertir una respuesta aparentemente correcta en incorrecta?',
          '¿Qué parte del tema es común con Toledo y qué parte es específica de UC3M?'
        ]
      },
      {
        heading: 'Plan de estudio',
        paragraphs: [
          'Primera vuelta: lectura y subrayado del enunciado oficial. Segunda vuelta: test corto. Tercera vuelta: errores y tarjetas de plazos/órganos.',
          'Para los temas 13 a 19, crea esquemas separados de sistema universitario, Estatutos y presupuesto UC3M porque no son núcleo habitual de ayuntamientos.'
        ]
      }
    ];
  }

  const themes = rawThemes.map((r, i) => ({
    id: `${prefix}-t${i + 1}`,
    number: i + 1,
    title: r[0],
    area: r[1],
    commonPotential: i < 12 || i === 19,
    sections: sections(r),
    tree: [`Tema ${i + 1}`, `- ${r[1]}`, '- Norma/enunciado oficial', '- Conceptos clave', '- Plazos, órganos y efectos', '- Test con penalización 1/3'].join('\n'),
    reviewTable: [
      ['Punto', 'Qué comprobar'],
      ['Norma', 'Ley, real decreto, estatutos o normativa UC3M aplicable'],
      ['Órgano', 'Quién tramita, resuelve o publica'],
      ['Examen', 'Regla, excepción, plazo y efecto'],
      ['Reutilización', i < 12 || i === 19 ? 'Alto valor para otras oposiciones' : 'Específico UC3M']
    ]
  }));

  const good = 'Parte del enunciado oficial, localiza norma vigente, órgano, plazo, efecto y excepción antes de contestar.';
  const opts = [
    good,
    'Contesta por intuición si el enunciado contiene una palabra conocida.',
    'Sustituye la normativa universitaria por reglas de régimen local aunque el tema sea UC3M.',
    'Ignora la penalización porque las preguntas en blanco puntúan igual que las incorrectas.'
  ];

  function questions(t) {
    return Array.from({ length: 12 }, (_, i) => {
      const shift = (t.number + i) % 4;
      const ordered = opts.slice(shift).concat(opts.slice(0, shift));
      return {
        id: `${t.id}-q${i + 1}`,
        text: `Tema ${t.number}. ¿Cuál es el enfoque correcto para preparar ${t.area} en UC3M?`,
        options: ordered.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[ordered.indexOf(good)],
        justification: 'En esta convocatoria el examen es tipo test y penaliza; hay que contestar con base normativa y control de detalle.'
      };
    });
  }

  const themeTests = Object.fromEntries(themes.map(t => [t.id, questions(t)]));
  const allQuestions = Object.values(themeTests).flat();
  const simulacros = [0, 23, 71].map((start, s) => ({
    id: `${prefix}-sim${s + 1}`,
    title: `Simulacro UC3M ${s + 1}`,
    questions: Array.from({ length: 50 }, (_, i) => ({ ...allQuestions[(start + i * 5) % allQuestions.length], id: `${prefix}-sim${s + 1}-q${i + 1}` }))
  }));

  const caseTitles = [
    'Solicitud telemática y falta de pago de tasa',
    'Acreditación de exención por familia numerosa general',
    'Lista provisional de admitidos y subsanación',
    'Recurso frente a exclusión definitiva',
    'Cómputo de plazos hábiles en procedimiento administrativo',
    'Notificación electrónica y publicación en web UC3M',
    'Acceso a información pública universitaria',
    'Tratamiento de datos personales de aspirantes',
    'Igualdad y prevención del acoso en entorno universitario',
    'Ingreso y provisión según RD 364/1995',
    'Incompatibilidades de empleados públicos',
    'Prevención de riesgos en puesto administrativo',
    'Derechos del estudiantado y gestión académica',
    'Matrícula, permanencia y evaluación',
    'Admisión a estudios oficiales de Grado',
    'Defensor Universitario y servicios universitarios',
    'Modificación presupuestaria UC3M',
    'Ordenación del gasto y documentos contables',
    'Contrato menor o procedimiento abierto',
    'Uso de Word, Excel, Gmail, Drive, Docs, Sheets y Calendar'
  ];

  const practicalCases = caseTitles.map((title, i) => ({
    id: `${prefix}-sp${i + 1}`,
    title,
    statement: `Caso práctico UC3M sobre ${title.toLowerCase()}. Indica norma aplicable, órgano/trámite, plazo, documento y consecuencia.`,
    guidance: 'Solución orientativa: identifica si el caso pertenece a procedimiento común, régimen universitario, presupuesto, contratación, protección de datos u ofimática; después aplica regla, excepción y efecto.'
  }));

  const ope = {
    id: prefix,
    name: 'Auxiliar Administrativo - Universidad Carlos III de Madrid',
    shortName: 'UC3M - Aux. Administrativo C2',
    places: '34 plazas, 2 reservadas a discapacidad',
    exam: 'Concurso-oposición: test único de 70 preguntas + 5 reserva, 60 minutos. Acierto +1, error -1/3, blanco 0. Mínimo 35/70.',
    status: 'Pendiente de solicitud/seguimiento. Interesante por 34 plazas y bolsa, pero destino Madrid. Baremo personal prudente: inglés 0 si no hay B2/C1 oficial, experiencia pública 0 y formación probable 2-5/30 según aceptación del tribunal.',
    scoring: { correct: 1, wrong: -0.3333, blank: 0 },
    themes,
    themeTests,
    practicalCases,
    simulacros,
    officialLinks: [
      { label: 'BOE UC3M', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14624' },
      { label: 'UC3M empleo PAS', url: 'https://www.uc3m.es/empleo/pas' },
      { label: 'BOCM', url: 'https://www.bocm.es/' }
    ],
    processCalendar: [
      { date: '06/07/2026', title: 'Publicación BOE', note: 'Resolución de 30/06/2026: 34 plazas de Escala Auxiliar Administrativa C2.', status: 'publicado' },
      { date: 'Pendiente BOCM', title: 'Inicio real del plazo de solicitud', note: 'El plazo es de 20 días hábiles desde el día siguiente al anuncio en el BOCM, no desde el BOE.', status: 'pendiente' },
      { date: 'Pendiente', title: 'Solicitud telemática UC3M', note: 'Presentación exclusiva por la web UC3M empleo PAS. Tasa 13,83 €; familia numerosa general: 50% de exención si se acredita.', status: 'pendiente' },
      { date: 'No antes del 15/09/2026', title: 'Ejercicio de oposición', note: 'Test único de 70 preguntas. La fecha concreta se publicará con listas definitivas o anuncio del tribunal.', status: 'publicado' },
      { date: 'Tras oposición', title: 'Concurso y lista de espera', note: 'Solo valoran méritos a quienes superen la oposición. Se formará lista de espera para personal funcionario interino.', status: 'pendiente' }
    ],
    version: VERSION,
    changelog: [{ version: VERSION, date: '2026-07-09', changes: ['Añadida UC3M Auxiliar Administrativo C2', 'Incluido temario oficial de 20 temas', 'Añadidos tests, supuestos, simulacros, calendario y estimación prudente de baremo'] }]
  };

  const i = data.oposiciones.findIndex(o => o.id === ope.id);
  if (i >= 0) data.oposiciones[i] = ope; else data.oposiciones.push(ope);
})();
