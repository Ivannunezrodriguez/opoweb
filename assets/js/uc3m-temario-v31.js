(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const t = n => ope.themes.find(x => Number(x.number) === n);

  // La numeración de un tema no vuelve a utilizarse como clave común entre convocatorias.
  data.oposiciones.forEach(o => (o.themes || []).forEach(theme => {
    delete theme.officialMap;
    theme.tree = '';
  }));

  const detailed = {
    13: {
      source: 'Ley Orgánica 2/2023, de 22 de marzo, del Sistema Universitario',
      status: 'desarrollo normativo común completado por títulos y artículos',
      blocks: [
        ['Objeto, funciones y autonomía', [
          'Artículo 1 LOSU. Regula el sistema universitario y los mecanismos de coordinación, cooperación y colaboración entre las Administraciones competentes.',
          'Artículo 2 LOSU. El sistema universitario presta el servicio público de educación superior mediante docencia, investigación y transferencia e intercambio del conocimiento. Entre las funciones universitarias figuran la formación, la preparación profesional, la investigación, la innovación, la generación de pensamiento crítico y la difusión cultural.',
          'Artículo 3 LOSU. Las universidades tienen personalidad jurídica y desarrollan sus funciones en régimen de autonomía, vinculada al artículo 27.10 de la Constitución. La autonomía comprende, entre otras materias, Estatutos, estructuras, oferta académica, selección de personal, presupuesto, patrimonio y relaciones institucionales.'
        ]],
        ['Creación, reconocimiento y calidad', [
          'Artículos 4 y 5 LOSU. La creación de universidades públicas y el reconocimiento de privadas se realiza por ley de la Asamblea Legislativa autonómica o por ley estatal en su ámbito, con los informes preceptivos. Deben cumplirse requisitos de calidad, suficiencia y sostenibilidad.',
          'Título II LOSU. La calidad alcanza docencia, investigación, transferencia, gestión y servicios. La evaluación corresponde a ANECA y a las agencias autonómicas competentes en su ámbito.'
        ]],
        ['Función docente y enseñanzas', [
          'Título III, artículos 6 a 10 LOSU. La docencia es función esencial y se desarrolla mediante enseñanzas oficiales, formación permanente y títulos propios, con calidad, inclusión, accesibilidad y conexión con el Espacio Europeo de Educación Superior.',
          'Las universidades pueden impartir docencia presencial, virtual o híbrida conforme a la normativa, a la memoria del título y a sus sistemas de garantía de calidad.'
        ]],
        ['Investigación y transferencia', [
          'Título IV, artículos 11 a 13 LOSU. La investigación y la transferencia e intercambio del conocimiento son funciones fundamentales. Se impulsan ciencia abierta, colaboración, innovación, difusión de resultados y conexión con la sociedad.'
        ]],
        ['Cooperación, sociedad e internacionalización', [
          'Títulos V, VI y VII LOSU. Se regulan cooperación entre universidades, participación social, cohesión territorial, cultura, diversidad lingüística, movilidad, alianzas y estrategia de internacionalización.'
        ]]
      ],
      hot: [
        '• Artículo 1: objeto y definición del sistema universitario.',
        '• Artículo 2: docencia, investigación y transferencia como núcleo del servicio público universitario.',
        '• Artículo 3: personalidad jurídica y autonomía universitaria del artículo 27.10 CE.',
        '• La creación o reconocimiento exige norma con rango de ley e informes preceptivos.',
        '• No confundas enseñanzas oficiales, formación permanente y títulos propios.',
        '• Investigación y transferencia son funciones diferenciadas pero conectadas.',
        '• La internacionalización ocupa un título propio en la LOSU.'
      ],
      recall: [
        '1. ¿Cuáles son las tres funciones nucleares del servicio público universitario según el artículo 2 LOSU?',
        '2. ¿Qué materias comprende la autonomía universitaria del artículo 3?',
        '3. ¿Cómo se ordenan en la LOSU docencia, investigación, cooperación e internacionalización?'
      ]
    },
    14: {
      source: 'Ley Orgánica 2/2023, Títulos VIII y IX',
      status: 'desarrollo normativo común completado por capítulos y artículos',
      blocks: [
        ['Estudiantado', [
          'Título VIII, artículos 31 a 37 LOSU. Regula acceso y continuidad, becas y ayudas, derechos relativos a la formación, participación y representación, y deberes del estudiantado.',
          'Artículo 33 LOSU. Reconoce, entre otros, el derecho a formación inclusiva de calidad, información previa sobre docencia y evaluación, tutorías, evaluación objetiva, revisión de calificaciones, publicidad de normas de permanencia y orientación académica y profesional.',
          'Artículo 36 LOSU. El estudiantado debe participar responsablemente, respetar la normativa universitaria, seguir las directrices académicas, respetar a la comunidad universitaria y utilizar adecuadamente instalaciones y servicios.'
        ]],
        ['Régimen económico-financiero', [
          'Título IX, capítulo III, artículos 53 a 63 LOSU. La actividad económica y presupuestaria se rige por la LOSU y la normativa del sector público aplicable.',
          'Artículo 54. Las universidades públicas tienen autonomía económica y financiera y elaboran, aprueban y gestionan sus presupuestos y patrimonio.',
          'Artículo 57. El presupuesto universitario será público, único y equilibrado y comprenderá la totalidad de ingresos y gastos.',
          'La programación y financiación deben respetar anualidad, sostenibilidad, rendición de cuentas, control y transparencia.'
        ]],
        ['Personal docente e investigador', [
          'Título IX, capítulo IV, artículos 64 a 88 LOSU. El PDI se integra por profesorado de cuerpos docentes universitarios y profesorado laboral.',
          'La regulación comprende equidad, movilidad, formación, dedicación, acreditación, concursos, categorías y modalidades laborales. El profesorado funcionario debe ser mayoritario computado en equivalencias a tiempo completo y la temporalidad laboral se somete al límite legal con sus excepciones.'
        ]],
        ['PTGAS', [
          'Título IX, capítulo V, artículos 89 a 94 LOSU. El PTGAS está formado por personal funcionario y laboral suficiente y especializado para desarrollar los servicios universitarios.',
          'Artículo 90. La carrera profesional puede desarrollarse mediante progresión de grado, categoría, escala o nivel y mediante ascenso en la estructura de puestos.',
          'Artículo 91. El acceso se rige por igualdad, mérito, capacidad, transparencia, publicidad y concurrencia; las convocatorias se publican en BOE y diario oficial autonómico.',
          'Artículo 92. La provisión se realiza mediante concurso como sistema ordinario; la libre designación queda reservada a puestos determinados por su naturaleza.',
          'Artículos 93 y 94. Retribuciones con cargo al presupuesto universitario; planes plurianuales de formación y movilidad.'
        ]]
      ],
      hot: [
        '• Derechos del estudiantado: artículos 31 a 35; deberes: artículo 36 LOSU.',
        '• El presupuesto universitario es público, único y equilibrado.',
        '• Régimen económico-financiero: artículos 53 a 63 LOSU.',
        '• PDI: artículos 64 a 88; PTGAS: artículos 89 a 94.',
        '• PTGAS puede ser funcionario o laboral.',
        '• Selección PTGAS: igualdad, mérito, capacidad, transparencia, publicidad y concurrencia.',
        '• Concurso es el sistema ordinario de provisión; libre designación solo para puestos determinados.'
      ],
      recall: [
        '1. ¿Qué derechos académicos concretos reconoce el artículo 33 LOSU?',
        '2. ¿Qué tres características literales tiene el presupuesto en el artículo 57?',
        '3. ¿Qué diferencia hay entre acceso, carrera y provisión del PTGAS?'
      ]
    },
    16: {
      source: 'Real Decreto 822/2021 y normativa académica UC3M',
      status: 'marco estatal completado; plazos internos UC3M pendientes de cargar desde sus normas vigentes',
      blocks: [
        ['Organización de las enseñanzas', [
          'Artículos 1 a 3 RD 822/2021. El real decreto regula la organización de las enseñanzas universitarias y el aseguramiento de su calidad. Las enseñanzas oficiales se estructuran en Grado, Máster Universitario y Doctorado.',
          'Artículos 4 y 5. Los planes de estudios deben responder a rigor académico, coherencia entre objetivos, competencias y evaluación, comprensibilidad social, valores democráticos, igualdad, accesibilidad, sostenibilidad y respeto a los derechos humanos.',
          'Artículo 8. Los títulos oficiales tienen validez en España y los expide el Rector o Rectora, en nombre del Rey, conforme a la normativa.'
        ]],
        ['Reconocimiento y transferencia de créditos', [
          'Artículo 10. Las universidades aprueban normas específicas de reconocimiento y transferencia de créditos para facilitar la movilidad. Los créditos reconocidos o transferidos constan en el expediente y en el Suplemento Europeo al Título.'
        ]],
        ['Grado y Máster', [
          'Artículo 14. Los grados tienen, con carácter general, 240 ECTS, distribuidos en 60 por curso, salvo titulaciones de 300 o 360 ECTS por normativa específica. Los grados de 240 ECTS incluyen al menos 60 ECTS de formación básica.',
          'Artículo 17. Los másteres tienen 60, 90 o 120 ECTS. El trabajo fin de máster es obligatorio y tendrá entre 6 y 30 ECTS.'
        ]],
        ['Calidad de los títulos', [
          'El aseguramiento de la calidad incluye verificación, seguimiento, modificación y renovación de la acreditación. Intervienen el Consejo de Universidades y las agencias de calidad competentes.',
          'Artículo 26. La verificación comprueba que el plan cumple las directrices; el procedimiento tiene plazo máximo legal y reglas específicas para centros acreditados institucionalmente.'
        ]],
        ['Capa UC3M pendiente de literalidad', [
          'Matrícula: deben incorporarse modalidades, modificación, anulación, precios y efectos exactamente como figuren en la normativa UC3M vigente.',
          'Permanencia: deben cargarse mínimos de rendimiento, convocatorias, límites temporales y dispensas de la UC3M.',
          'Evaluación: deben cargarse evaluación continua, convocatorias, revisión, reclamación, actas y compensación con sus plazos internos exactos.'
        ]]
      ],
      hot: [
        '• Grado: 240 ECTS como regla; 60 ECTS por curso.',
        '• Formación básica en grados de 240 ECTS: mínimo 60 ECTS.',
        '• Máster: 60, 90 o 120 ECTS.',
        '• TFM: entre 6 y 30 ECTS.',
        '• Reconocimiento y transferencia deben constar en expediente y Suplemento Europeo al Título.',
        '• Calidad: verificación, seguimiento, modificación y renovación de acreditación.',
        '• Los plazos internos de matrícula, permanencia y evaluación UC3M no deben inventarse: deben copiarse de sus normas vigentes.'
      ],
      recall: [
        '1. ¿Cuántos ECTS tienen como regla un Grado y un Máster?',
        '2. ¿Qué diferencia existe entre reconocimiento y transferencia de créditos?',
        '3. ¿Qué cuatro procedimientos forman el aseguramiento de la calidad de un título?'
      ]
    },
    17: {
      source: 'Real Decreto 534/2024 y normativa de admisión UC3M',
      status: 'marco estatal completado; cupos, ponderaciones y calendario UC3M pendientes de documento anual',
      blocks: [
        ['Conceptos y principios', [
          'Artículo 1 RD 534/2024. Regula requisitos de acceso, características básicas de la prueba para Bachiller y normativa básica de admisión.',
          'Artículo 2. Acceso es el cumplimiento previo de requisitos para cursar Grado; admisión es la adjudicación de plazas entre quienes cumplen acceso.',
          'Artículo 3. Acceso y admisión respetan igualdad, mérito y capacidad, igualdad de oportunidades, no discriminación y accesibilidad universal. Las universidades deben dar información transparente y orientación.'
        ]],
        ['Vías de acceso', [
          'Artículo 4. Bachiller o equivalente: acceso tras superar la prueba prevista legalmente.',
          'Artículo 5. Técnicos Superiores de FP, Artes Plásticas y Diseño o Deportivo Superior acceden sin prueba de acceso, sin perjuicio del procedimiento de admisión.',
          'El real decreto regula también acceso desde sistemas extranjeros, titulaciones universitarias, mayores de 25, 40 y 45 años y otros supuestos legalmente previstos.'
        ]],
        ['Prueba de acceso', [
          'La prueba valora madurez académica, conocimientos y competencias adquiridas en Bachillerato. La normativa regula materias, estructura, calificación, revisión y adaptaciones.',
          'Las medidas para personas con necesidades específicas pueden incluir adaptación de tiempos, modelos especiales y medios materiales o humanos, sin minorar la calificación.'
        ]],
        ['Admisión y capa UC3M', [
          'La admisión adjudica plazas mediante criterios objetivos y públicos. Deben distinguirse nota de acceso, nota de admisión, ponderaciones y cupos de reserva.',
          'La UC3M debe publicar cada curso oferta, ponderaciones, plazas, plazos, listas, reclamaciones y matrícula. Estos datos anuales deben incorporarse sin reutilizar los de otro curso.'
        ]]
      ],
      hot: [
        '• Acceso y admisión no son sinónimos.',
        '• Principios: igualdad, mérito y capacidad; igualdad de oportunidades y accesibilidad.',
        '• Bachiller requiere la prueba de acceso en los términos legales.',
        '• Técnico Superior puede acceder sin realizar la prueba de acceso.',
        '• Adaptaciones no pueden reducir la calificación obtenida.',
        '• Ponderaciones, plazas y fechas UC3M son anuales y deben comprobarse cada curso.',
        '• La admisión solo se aplica a personas que ya cumplen los requisitos de acceso.'
      ],
      recall: [
        '1. ¿Qué diferencia jurídica existe entre acceso y admisión?',
        '2. ¿Qué vía tiene una persona con Técnico Superior de FP?',
        '3. ¿Qué información anual debe publicar la UC3M para su procedimiento de admisión?'
      ]
    },
    20: {
      source: 'Ley 9/2017, de Contratos del Sector Público, y reglas internas UC3M',
      status: 'desarrollo legal común completado; falta incorporar delegaciones y procedimiento interno UC3M',
      blocks: [
        ['Ámbito, principios y tipos', [
          'Artículos 1 a 3 LCSP. La contratación persigue libertad de acceso, publicidad y transparencia, igualdad y no discriminación, integridad, estabilidad presupuestaria y uso eficiente de fondos.',
          'Artículos 12 a 18. Contratos de obras, concesión de obras, concesión de servicios, suministro, servicios y contratos mixtos.'
        ]],
        ['Órgano, objeto e importes', [
          'El órgano de contratación es quien tiene atribuida la competencia para contratar. En UC3M deben aplicarse las delegaciones y desconcentraciones vigentes.',
          'Artículo 99. El objeto debe estar determinado. La división en lotes es la regla cuando sea posible; se prohíbe fraccionar para eludir publicidad o procedimiento.',
          'Artículos 100 a 102. Presupuesto base de licitación, valor estimado y precio son conceptos diferentes y deben calcularse y justificarse correctamente.'
        ]],
        ['Preparación', [
          'Artículo 28. Deben justificarse necesidad e idoneidad del contrato.',
          'Artículos 116 y 117. El expediente incorpora motivación, crédito, fiscalización cuando proceda, pliegos y aprobación del expediente y del gasto.',
          'La aptitud del contratista exige capacidad, ausencia de prohibiciones y solvencia; la clasificación se exige en los supuestos legales.'
        ]],
        ['Adjudicación', [
          'La adjudicación utiliza procedimientos legalmente previstos y criterios vinculados al objeto que permitan seleccionar la mejor relación calidad-precio.',
          'Procedimientos principales: abierto, abierto simplificado, restringido, negociado en supuestos tasados, diálogo competitivo y asociación para la innovación cuando proceda.',
          'Artículo 118. El contrato menor tiene límites cuantitativos, expediente mínimo y prohibición de fraccionamiento indebido.'
        ]],
        ['Ejecución y extinción', [
          'La ejecución se ajusta a pliegos y oferta. Deben controlarse responsable del contrato, conformidad, factura, pago, penalidades y recepción.',
          'Modificación, suspensión, cesión, subcontratación y resolución solo proceden con requisitos, causas, procedimiento y efectos legales.'
        ]]
      ],
      hot: [
        '• Objeto, presupuesto base, valor estimado y precio son conceptos distintos.',
        '• Necesidad e idoneidad deben justificarse antes de contratar.',
        '• No puede fraccionarse el objeto para eludir procedimiento o publicidad.',
        '• Contrato menor: artículo 118 LCSP.',
        '• Pliegos administrativos y técnicos cumplen funciones diferentes.',
        '• La mejor relación calidad-precio no equivale siempre al precio más bajo.',
        '• En UC3M debe identificarse el órgano competente según delegaciones vigentes.'
      ],
      recall: [
        '1. ¿Qué diferencia hay entre presupuesto base, valor estimado y precio?',
        '2. ¿Qué documentos y justificaciones forman el núcleo del expediente?',
        '3. ¿Qué requisito interno UC3M queda pendiente para cerrar este tema?'
      ]
    }
  };

  function buildSections(theme, d) {
    return [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${theme.title}`,
        `Fuente principal: ${d.source}.`,
        'El contenido se limita a los puntos incluidos en el enunciado oficial y se organiza por títulos, capítulos y artículos para poder reutilizar la norma en otras oposiciones.'
      ]),
      sec('Rigor normativo', [
        'Conserva denominaciones legales, artículos, órganos, mayorías, plazos y efectos. Cuando exista una norma interna o un calendario anual UC3M, prevalece su versión vigente y no se sustituye por una regla genérica.',
        `Estado: ${d.status}.`
      ]),
      ...d.blocks.map(([h, ps]) => sec(h, ps)),
      sec('Opo-Test: puntos calientes', d.hot),
      sec('Retención activa', d.recall)
    ];
  }

  function manualQuestions(theme, d) {
    const facts = d.blocks.flatMap(([block, ps]) => ps.map(p => ({ block, text: p })));
    const refs = facts.map(f => {
      const m = f.text.match(/(Artículo(?:s)?\s+[0-9]+(?:\s+a\s+[0-9]+)?(?:\s+y\s+[0-9]+)?[^.]*|Título\s+[IVX]+[^.]*)/i);
      return m ? m[1] : f.block;
    });
    return Array.from({ length: 12 }, (_, i) => {
      const fact = facts[i % facts.length];
      const correct = fact.text;
      const wrong = facts.filter((_, j) => j !== i % facts.length).map(f => f.text).slice(0, 3);
      const opts = [correct, ...wrong];
      const shift = (theme.number + i) % 4;
      const ordered = opts.slice(shift).concat(opts.slice(0, shift));
      return {
        id: `${theme.id}-v31-q${i + 1}`,
        text: `Tema ${theme.number}. ¿Qué afirmación corresponde correctamente al bloque «${fact.block}»?`,
        options: ordered.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification: `${refs[i % refs.length]}. ${correct}`
      };
    });
  }

  Object.entries(detailed).forEach(([num, d]) => {
    const theme = t(Number(num));
    if (!theme) return;
    theme.sections = buildSections(theme, d);
    theme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Norma y artículo', d.source],
      ['Concepto', 'Definición literal y diferencia con figuras próximas.'],
      ['Órgano o sujeto', 'Quién actúa, decide, evalúa, selecciona o tramita.'],
      ['Plazo o cifra', 'Solo cuando aparezca expresamente en la norma o documento vigente.'],
      ['Consecuencia', 'Efecto jurídico o administrativo de la regla aplicada.']
    ];
    theme.auditStatus = d.status;
    theme.motorCoverage = d.status.includes('pendiente') ? 'base-completada-documento-especifico-pendiente' : 'completo-revisado-v31';
    ope.themeTests[theme.id] = manualQuestions(theme, d);
  });

  // El resto de temas conserva el desarrollo v30, pero sin mapas ni esquemas duplicados.
  (ope.themes || []).forEach(theme => {
    delete theme.officialMap;
    theme.tree = '';
  });

  // Vista limpia: sin «Mapa de estudio», «Esquema oficial» ni «Tabla de repaso».
  if (typeof themeDetail === 'function') {
    themeDetail = function(theme) {
      const esc = typeof escapeHtml === 'function' ? escapeHtml : (v => String(v ?? ''));
      const panel = typeof sourcePanel === 'function' ? sourcePanel(theme) : '';
      const badge = typeof themeSourceBadge === 'function' ? themeSourceBadge(theme) : '';
      const cuadro = typeof renderTable === 'function' ? renderTable(theme.reviewTable) : '';
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button>
        ${panel}
        <article class="card">
          <div class="pill-row"><span class="badge area">${esc(theme.area)}</span>${theme.commonPotential?'<span class="badge common">común/reutilizable</span>':''}${badge}</div>
          <h2>Tema ${theme.number}. ${esc(theme.title)}</h2>
          ${(theme.sections || []).map(s => `<section class="section"><h3>${esc(s.heading)}</h3>${(s.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join('')}</section>`).join('')}
          <h3>Cuadro para test y supuesto práctico</h3>${cuadro}
        </article>`;
    };
  }

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 37, 83].map((start, s) => ({
    id: `uc3m-v31-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({ ...all[(start + i * 13) % all.length], id: `uc3m-v31-sim${s + 1}-q${i + 1}` }))
  }));

  ope.version = '0.31.0';
  ope.coverage = {
    completeCommon: [1,2,3,4,5,6,9,10,11,12,13,14,16,17,20],
    pendingUc3mDocuments: [7,8,15,18,19]
  };
  ope.status = `${(ope.status || '').replace(/ Auditoría v0\.30:.*/, '')} Revisión v0.31: corregidos y ampliados LOSU, RD 822/2021, RD 534/2024 y contratación. Pendientes de documento interno completo: temas 7, 8, 15, 18 y 19.`;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: '0.31.0',
    date: '2026-07-10',
    changes: [
      'Eliminados mapas y esquemas asignados por número',
      'Completados temas 13, 14, 16, 17 y 20 con estructura normativa',
      'Sustituida Tabla de repaso por Cuadro para test y supuesto práctico',
      'Generados test de contenido para los temas revisados'
    ]
  });

  window.OPOWEB_UC3M_V31 = {
    version: 'v0.31.0',
    completed: [13,14,16,17,20],
    pendingOfficialUc3m: [7,8,15,18,19]
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();