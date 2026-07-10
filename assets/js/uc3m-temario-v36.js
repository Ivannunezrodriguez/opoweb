(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const getTheme = n => ope.themes.find(t => Number(t.number) === n);

  function buildQuestions(theme, defs) {
    return defs.map((q, i) => {
      const all = [q.correct, ...q.wrong];
      const shift = (Number(theme.number) + i) % 4;
      const ordered = all.slice(shift).concat(all.slice(0, shift));
      return {
        id: `${theme.id}-v36-q${i + 1}`,
        text: q.text,
        options: ordered.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[ordered.indexOf(q.correct)],
        justification: q.justification
      };
    });
  }

  function applyTheme(n, cfg) {
    const theme = getTheme(n);
    if (!theme) return;
    theme.sections = [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${theme.title}`,
        `Fuente principal: ${cfg.source}.`,
        cfg.summary
      ]),
      sec('Rigor normativo', [cfg.rigor, `Estado de auditoría: ${cfg.status}.`]),
      ...cfg.blocks.map(([heading, paragraphs]) => sec(heading, paragraphs)),
      sec('Opo-Test: puntos calientes', cfg.hot),
      sec('Retención activa', cfg.recall)
    ];
    theme.reviewTable = cfg.table;
    theme.auditStatus = cfg.status;
    theme.motorCoverage = cfg.complete ? 'completo-revisado-v36' : 'marco-estatal-completo-capa-uc3m-pendiente';
    ope.themeTests[theme.id] = buildQuestions(theme, cfg.questions);
  }

  applyTheme(13, {
    source: 'Ley Orgánica 2/2023, de 22 de marzo, del Sistema Universitario, artículos 1 a 30',
    status: 'desarrollo jurídico revisado por títulos y artículos',
    complete: true,
    summary: 'El tema debe entenderse como la parte institucional y funcional de la LOSU: definición del sistema, funciones, autonomía, creación y reconocimiento, calidad, docencia, investigación, transferencia, cooperación, sociedad e internacionalización.',
    rigor: 'No se ha reducido la LOSU a una lista de títulos. Se diferencian funciones, autonomía, calidad, docencia, investigación y transferencia, porque el examen puede intercambiar estos conceptos.',
    blocks: [
      ['Sistema universitario, funciones y autonomía', [
        'Artículo 1. La LOSU regula el sistema universitario y los mecanismos de coordinación, cooperación y colaboración entre las Administraciones competentes.',
        'Artículo 2. El sistema universitario presta y garantiza el servicio público de educación superior mediante docencia, investigación y transferencia del conocimiento.',
        'Artículo 3. Las universidades tienen personalidad jurídica y desarrollan sus funciones en régimen de autonomía, vinculada al artículo 27.10 de la Constitución.',
        'La autonomía comprende Estatutos, estructuras, oferta académica, selección de personal, presupuesto, patrimonio, organización y relaciones institucionales.'
      ]],
      ['Creación, reconocimiento y calidad', [
        'Artículos 4 y 5. La creación de universidades públicas y el reconocimiento de privadas se realiza por ley y exige requisitos de calidad, suficiencia, sostenibilidad y los informes legalmente previstos.',
        'Título II. La calidad alcanza docencia, investigación, transferencia, gestión y servicios.',
        'La evaluación externa corresponde a ANECA y a las agencias autonómicas competentes dentro de sus respectivos ámbitos.'
      ]],
      ['Función docente', [
        'Título III, artículos 6 a 10. La docencia comprende enseñanzas oficiales, formación permanente y títulos propios.',
        'La programación debe asegurar calidad, inclusión, accesibilidad, igualdad, flexibilidad y conexión con el Espacio Europeo de Educación Superior.',
        'No debe confundirse un título oficial inscrito en el RUCT con un título propio o una actividad de formación permanente.'
      ]],
      ['Investigación y transferencia', [
        'Título IV, artículos 11 a 13. La investigación es función esencial y se vincula a la generación de conocimiento y a la formación investigadora.',
        'La transferencia e intercambio del conocimiento conecta resultados científicos, tecnológicos, sociales, culturales y humanísticos con la sociedad.',
        'La LOSU impulsa ciencia abierta, difusión de resultados, colaboración y acceso al conocimiento en los términos legales.'
      ]],
      ['Cooperación, sociedad e internacionalización', [
        'Títulos V a VII, artículos 14 a 30. Se regulan cooperación y coordinación entre universidades, participación social, cohesión territorial, cultura, movilidad, alianzas e internacionalización.',
        'La internacionalización no se limita a movilidad estudiantil: incluye estrategias, alianzas, proyectos conjuntos, atracción de talento y reconocimiento académico.'
      ]]
    ],
    hot: [
      '• Artículo 2: docencia, investigación y transferencia.',
      '• Artículo 3: personalidad jurídica y autonomía universitaria.',
      '• La creación o reconocimiento exige norma con rango de ley.',
      '• Calidad: docencia, investigación, transferencia, gestión y servicios.',
      '• Enseñanza oficial, formación permanente y título propio no son lo mismo.',
      '• Investigación y transferencia son funciones diferenciadas.',
      '• La LOSU dedica un título específico a internacionalización.'
    ],
    recall: [
      '1. ¿Qué tres funciones nucleares recoge el artículo 2 LOSU?',
      '2. ¿Qué materias comprende la autonomía del artículo 3?',
      '3. ¿Qué diferencia hay entre docencia oficial, formación permanente e investigación/transferencia?'
    ],
    table: [
      ['Bloque', 'Artículos', 'Clave'],
      ['Funciones y autonomía', '1 a 3', 'Servicio público y autonomía'],
      ['Creación y calidad', '4 y 5 + título II', 'Ley e informes'],
      ['Docencia', '6 a 10', 'Oficial, permanente y propia'],
      ['Investigación', '11 a 13', 'Conocimiento y transferencia'],
      ['Cooperación e internacionalización', '14 a 30', 'Redes, sociedad y movilidad']
    ],
    questions: [
      { text:'¿Qué tres funciones garantizan el servicio público universitario?', correct:'Docencia, investigación y transferencia del conocimiento', wrong:['Solo docencia y exámenes','Contratación, sanción y recaudación','Publicidad, archivo y tesorería'], justification:'Artículo 2 LOSU.' },
      { text:'¿Qué precepto constitucional se vincula a la autonomía universitaria?', correct:'El artículo 27.10 de la Constitución', wrong:['El artículo 14 exclusivamente','El artículo 103.3','El artículo 149.1.18 sin más'], justification:'Artículo 3 LOSU.' },
      { text:'¿Qué rasgo tienen las universidades según la LOSU?', correct:'Personalidad jurídica y autonomía', wrong:['Carecen siempre de patrimonio','No pueden aprobar Estatutos','Dependen jerárquicamente de una empresa'], justification:'Artículo 3 LOSU.' },
      { text:'¿Cómo se crea una universidad pública?', correct:'Mediante ley y con los informes legalmente previstos', wrong:['Por circular interna','Por contrato menor','Por resolución de cualquier servicio'], justification:'Artículos 4 y 5 LOSU.' },
      { text:'¿Qué materia integra la calidad universitaria?', correct:'Docencia, investigación, transferencia, gestión y servicios', wrong:['Solo tasas académicas','Solo edificios','Únicamente selección de personal'], justification:'Título II LOSU.' },
      { text:'¿Cuál es una modalidad de función docente?', correct:'Formación permanente', wrong:['Revisión de oficio','Encomienda de gestión','Tesorería extrapresupuestaria'], justification:'Título III LOSU.' },
      { text:'¿Qué diferencia existe entre título oficial y título propio?', correct:'El oficial se integra en la ordenación oficial y el propio se rige por la oferta propia universitaria', wrong:['No existe diferencia','El propio siempre habilita profesión regulada','El oficial nunca se inscribe'], justification:'Título III LOSU y RD 822/2021.' },
      { text:'¿Qué impulsa la LOSU en investigación?', correct:'Ciencia abierta y difusión del conocimiento', wrong:['Secreto general de resultados','Prohibición de colaboración','Supresión de transferencia'], justification:'Título IV LOSU.' },
      { text:'¿Qué caracteriza a la transferencia?', correct:'Conecta conocimiento universitario y sociedad', wrong:['Sustituye toda investigación','Es solo una transferencia presupuestaria','Es una sanción disciplinaria'], justification:'Artículos 11 a 13 LOSU.' },
      { text:'¿La internacionalización se limita a Erasmus?', correct:'No, comprende estrategias, alianzas, proyectos y atracción de talento', wrong:['Sí, exclusivamente','Solo afecta a contratos','Solo afecta a PDI jubilado'], justification:'Título VII LOSU.' },
      { text:'¿Qué diferencia hay entre función docente e investigación?', correct:'Son funciones distintas aunque conectadas', wrong:['Son exactamente la misma figura jurídica','La investigación no es función universitaria','La docencia solo existe en títulos propios'], justification:'Artículos 2 y 11 LOSU.' },
      { text:'¿Qué órgano/agencia participa en evaluación externa de calidad?', correct:'ANECA y las agencias autonómicas competentes', wrong:['La mesa de contratación','El Defensor del Pueblo exclusivamente','La Tesorería General'], justification:'Título II LOSU.' }
    ]
  });

  applyTheme(14, {
    source: 'Ley Orgánica 2/2023, Título VIII y Título IX, capítulos III a V',
    status: 'desarrollo jurídico revisado del estudiantado, régimen económico, PDI y PTGAS',
    complete: true,
    summary: 'El tema 14 reúne cuatro bloques distintos: estudiantado, régimen económico-financiero, personal docente e investigador y PTGAS. Deben estudiarse por separado para evitar mezclar derechos académicos con selección de personal.',
    rigor: 'Se mantiene la denominación legal PTGAS. No se utiliza PAS como si fuera la denominación de la LOSU actual.',
    blocks: [
      ['Estudiantado', [
        'Título VIII, artículos 31 a 37. Regula acceso y continuidad, becas y ayudas, derechos, participación, representación y deberes.',
        'Artículo 33. Derechos: formación inclusiva de calidad, información académica, tutorías, evaluación objetiva, revisión de calificaciones, orientación y publicidad de normas de permanencia.',
        'Artículo 36. Deberes: participación responsable, respeto a la normativa, cumplimiento de directrices académicas, respeto a la comunidad y uso adecuado de instalaciones y servicios.'
      ]],
      ['Régimen económico-financiero', [
        'Título IX, capítulo III, artículos 53 a 63. Regula autonomía económica y financiera, programación, financiación, presupuesto, patrimonio, control y rendición de cuentas.',
        'Artículo 54. Las universidades públicas elaboran, aprueban y gestionan sus presupuestos y patrimonio dentro de la normativa aplicable.',
        'Artículo 57. El presupuesto será público, único y equilibrado y comprenderá la totalidad de ingresos y gastos.'
      ]],
      ['Personal docente e investigador', [
        'Título IX, capítulo IV, artículos 64 a 88. El PDI se integra por profesorado de cuerpos docentes universitarios y profesorado laboral.',
        'La LOSU regula dedicación, movilidad, formación, acreditación, concursos, categorías y modalidades contractuales.',
        'No debe confundirse acreditación con concurso: la acreditación habilita o evalúa requisitos; el concurso selecciona para una plaza concreta.'
      ]],
      ['PTGAS', [
        'Título IX, capítulo V, artículos 89 a 94. El PTGAS puede ser funcionario o laboral y presta servicios técnicos, de gestión y de administración y apoyo.',
        'Artículo 90. La carrera profesional puede producirse mediante progresión y ascenso en la estructura de puestos.',
        'Artículo 91. El acceso se rige por igualdad, mérito, capacidad, transparencia, publicidad y concurrencia.',
        'Artículo 92. El concurso es el sistema ordinario de provisión; la libre designación queda para puestos determinados por su naturaleza.',
        'Artículos 93 y 94. Retribuciones con cargo al presupuesto universitario y planes plurianuales de formación y movilidad.'
      ]]
    ],
    hot: [
      '• Estudiantado: artículos 31 a 37.',
      '• Evaluación objetiva y revisión son derechos académicos.',
      '• Presupuesto: público, único y equilibrado.',
      '• Régimen económico-financiero: artículos 53 a 63.',
      '• PDI: artículos 64 a 88.',
      '• PTGAS: artículos 89 a 94.',
      '• Concurso es sistema ordinario de provisión del PTGAS.',
      '• Acceso y provisión no son lo mismo.'
    ],
    recall: [
      '1. ¿Qué derechos académicos recoge el artículo 33?',
      '2. ¿Qué tres características literales tiene el presupuesto del artículo 57?',
      '3. ¿Qué diferencia existe entre acceso, carrera y provisión del PTGAS?'
    ],
    table: [
      ['Materia', 'Artículos', 'Clave'],
      ['Estudiantado', '31 a 37', 'Derechos, participación y deberes'],
      ['Régimen económico', '53 a 63', 'Presupuesto y control'],
      ['PDI', '64 a 88', 'Funcionario y laboral'],
      ['PTGAS', '89 a 94', 'Acceso, carrera y provisión']
    ],
    questions: [
      { text:'¿Qué derecho corresponde al estudiantado?', correct:'La evaluación objetiva y la revisión de calificaciones', wrong:['La adjudicación contractual','La avocación','La aprobación del presupuesto'], justification:'Artículo 33 LOSU.' },
      { text:'¿Qué artículo regula deberes del estudiantado?', correct:'El artículo 36 LOSU', wrong:['El artículo 3','El artículo 57','El artículo 91'], justification:'Artículo 36 LOSU.' },
      { text:'¿Cómo debe ser el presupuesto universitario?', correct:'Público, único y equilibrado', wrong:['Secreto, fragmentado e ilimitado','Solo plurianual','Exento de liquidación'], justification:'Artículo 57 LOSU.' },
      { text:'¿Qué comprende el régimen económico-financiero?', correct:'Presupuesto, patrimonio, financiación, control y cuentas', wrong:['Solo matrícula','Solo contratación laboral','Solo títulos propios'], justification:'Artículos 53 a 63 LOSU.' },
      { text:'¿Quién integra el PDI?', correct:'Profesorado funcionario y laboral', wrong:['Solo alumnado','Solo contratistas','Exclusivamente personal eventual'], justification:'Capítulo IV del título IX.' },
      { text:'¿Es lo mismo acreditación y concurso?', correct:'No, la acreditación evalúa requisitos y el concurso selecciona para una plaza', wrong:['Sí, siempre','La acreditación adjudica contratos','El concurso sustituye la titulación'], justification:'Régimen del PDI en la LOSU.' },
      { text:'¿Qué significa PTGAS?', correct:'Personal técnico, de gestión y de administración y servicios', wrong:['Personal temporal general de asistencia sanitaria','Profesorado técnico general asociado','Programa territorial de gestión académica'], justification:'Capítulo V del título IX.' },
      { text:'¿Qué principios rigen el acceso del PTGAS?', correct:'Igualdad, mérito, capacidad, transparencia, publicidad y concurrencia', wrong:['Designación secreta','Antigüedad exclusiva','Libre elección sin convocatoria'], justification:'Artículo 91 LOSU.' },
      { text:'¿Cuál es el sistema ordinario de provisión del PTGAS?', correct:'El concurso', wrong:['La contratación menor','La subasta','La avocación'], justification:'Artículo 92 LOSU.' },
      { text:'¿La libre designación puede aplicarse a cualquier puesto?', correct:'No, solo a puestos determinados por su naturaleza', wrong:['Sí, sin límites','Solo a estudiantes','Solo por sorteo'], justification:'Artículo 92 LOSU.' },
      { text:'¿Qué artículo se refiere a retribuciones del PTGAS?', correct:'El artículo 93 LOSU', wrong:['El artículo 2','El artículo 33','El artículo 57 exclusivamente'], justification:'Artículo 93 LOSU.' },
      { text:'¿Qué regula el artículo 94?', correct:'Formación y movilidad del PTGAS', wrong:['Reforma constitucional','Contrato menor','Admisión a Grado'], justification:'Artículo 94 LOSU.' }
    ]
  });

  applyTheme(16, {
    source: 'Real Decreto 822/2021, de 28 de septiembre, y normativa académica UC3M',
    status: 'marco estatal revisado en profundidad; plazos y procedimientos internos UC3M pendientes de documento oficial',
    complete: false,
    summary: 'El tema combina ordenación estatal de las enseñanzas con matrícula, permanencia y evaluación propias de la UC3M. El marco estatal queda cerrado; la capa interna debe copiarse literalmente de la normativa UC3M vigente.',
    rigor: 'No se inventan plazos internos de matrícula, permanencia, revisión o compensación. Se distinguen reglas estatales estables y reglas propias de la Universidad.',
    blocks: [
      ['Organización de las enseñanzas', [
        'Artículos 1 a 3. Las enseñanzas oficiales se estructuran en Grado, Máster Universitario y Doctorado.',
        'Los planes de estudios deben responder a coherencia académica, calidad, igualdad, accesibilidad, sostenibilidad y respeto a derechos fundamentales.',
        'Los títulos oficiales se inscriben en el RUCT y tienen validez oficial en todo el territorio nacional.'
      ]],
      ['Reconocimiento y transferencia', [
        'Artículo 10. El reconocimiento acepta créditos obtenidos en otras enseñanzas para que computen en el título de destino.',
        'La transferencia incorpora al expediente créditos cursados que no han conducido a un título ni han sido reconocidos.',
        'Reconocimiento y transferencia deben figurar en expediente y Suplemento Europeo al Título.'
      ]],
      ['Grado', [
        'Artículo 14. Los grados tienen 240 ECTS como regla, distribuidos en 60 por curso, salvo títulos de 300 o 360 ECTS por normativa específica.',
        'Los grados de 240 ECTS incluyen un mínimo de 60 ECTS de formación básica.',
        'Las prácticas externas curriculares no superan con carácter general el 25 % del total, salvo excepciones normativas.',
        'El TFG es obligatorio en los términos del plan de estudios.'
      ]],
      ['Máster Universitario', [
        'Artículo 17. Los másteres tienen 60, 90 o 120 ECTS.',
        'Las prácticas externas no pueden superar un tercio de la carga total.',
        'El TFM es obligatorio, tiene entre 6 y 30 ECTS y debe defenderse en acto público.',
        'Las modalidades docentes pueden ser presencial, híbrida o virtual.'
      ]],
      ['Calidad y procedimientos', [
        'El aseguramiento de la calidad comprende verificación, seguimiento, modificación y renovación de la acreditación.',
        'La verificación comprueba la adecuación del plan; el seguimiento controla su implantación; la modificación altera la memoria; la renovación acredita continuidad y calidad.',
        'Intervienen Consejo de Universidades y agencias de calidad competentes.'
      ]],
      ['Capa UC3M pendiente', [
        'Matrícula: modalidades, modificación, anulación, precios y efectos.',
        'Permanencia: rendimiento mínimo, convocatorias, límites y dispensas.',
        'Evaluación: evaluación continua, revisión, reclamación, actas y compensación.',
        'Estos datos deben incorporarse desde las normas UC3M vigentes, no desde apuntes genéricos.'
      ]]
    ],
    hot: [
      '• Grado: 240 ECTS como regla y 60 por curso.',
      '• Formación básica: mínimo 60 ECTS en grados de 240.',
      '• Máster: 60, 90 o 120 ECTS.',
      '• TFM: 6 a 30 ECTS y defensa pública.',
      '• Prácticas de máster: máximo un tercio.',
      '• Reconocimiento y transferencia no son sinónimos.',
      '• Calidad: verificación, seguimiento, modificación y renovación.',
      '• Los plazos internos UC3M siguen pendientes de documento oficial.'
    ],
    recall: [
      '1. ¿Qué diferencias hay entre reconocimiento y transferencia?',
      '2. ¿Qué cifras debes memorizar para Grado y Máster?',
      '3. ¿Qué procedimientos forman el aseguramiento de la calidad?'
    ],
    table: [
      ['Elemento', 'Regla estatal', 'Pendiente UC3M'],
      ['Grado', '240 ECTS; 60 por curso', 'Matrícula y permanencia'],
      ['Máster', '60/90/120 ECTS', 'Procedimientos internos'],
      ['TFM', '6 a 30 ECTS; defensa pública', 'Calendario y revisión'],
      ['Calidad', 'Verificación, seguimiento, modificación, renovación', 'Aplicación interna']
    ],
    questions: [
      { text:'¿Cómo se estructuran las enseñanzas oficiales?', correct:'Grado, Máster Universitario y Doctorado', wrong:['Solo Grado y FP','Licenciatura y diplomatura exclusivamente','Curso, oposición y contrato'], justification:'Artículos 1 a 3 RD 822/2021.' },
      { text:'¿Qué es reconocimiento de créditos?', correct:'Aceptación de créditos previos para que computen en el título de destino', wrong:['Eliminación del expediente','Transferencia presupuestaria','Matrícula automática'], justification:'Artículo 10 RD 822/2021.' },
      { text:'¿Qué es transferencia de créditos?', correct:'Incorporación al expediente de créditos cursados no reconocidos ni conducentes a título', wrong:['Convalidación automática de todo','Pago de tasas','Movilidad de personal'], justification:'Artículo 10 RD 822/2021.' },
      { text:'¿Cuántos ECTS tiene como regla un Grado?', correct:'240 ECTS', wrong:['60 ECTS','90 ECTS','120 ECTS'], justification:'Artículo 14 RD 822/2021.' },
      { text:'¿Cuántos ECTS por curso fija la estructura secuencial del Grado?', correct:'60 ECTS', wrong:['30 ECTS','45 ECTS','90 ECTS'], justification:'Artículo 14.1 RD 822/2021.' },
      { text:'¿Cuál es el mínimo de formación básica en un Grado de 240 ECTS?', correct:'60 ECTS', wrong:['6 ECTS','30 ECTS','120 ECTS'], justification:'Artículo 14.4 RD 822/2021.' },
      { text:'¿Qué cargas puede tener un Máster?', correct:'60, 90 o 120 ECTS', wrong:['30 o 45 ECTS','Solo 240 ECTS','300 o 360 ECTS'], justification:'Artículo 17.1 RD 822/2021.' },
      { text:'¿Cuál es el rango del TFM?', correct:'Entre 6 y 30 ECTS', wrong:['Entre 1 y 3 ECTS','Entre 30 y 60 ECTS','No tiene créditos'], justification:'Artículo 17.4 RD 822/2021.' },
      { text:'¿Cómo se defiende el TFM?', correct:'En acto público', wrong:['Siempre por correo privado','Sin evaluación','Solo ante Tesorería'], justification:'Artículo 17.4 RD 822/2021.' },
      { text:'¿Qué porcentaje máximo general tienen las prácticas externas de Grado?', correct:'El 25 % del total', wrong:['El 5 %','El 50 % siempre','No existe límite'], justification:'Artículo 14.5 RD 822/2021.' },
      { text:'¿Qué conjunto corresponde al aseguramiento de la calidad?', correct:'Verificación, seguimiento, modificación y renovación de acreditación', wrong:['Archivo, pago y sanción','Selección, nombramiento y cese','Registro, embargo y apremio'], justification:'RD 822/2021.' },
      { text:'¿Qué dato NO debe fijarse sin norma UC3M vigente?', correct:'El plazo interno de revisión de calificaciones', wrong:['Que el Grado tiene 240 ECTS como regla','Que el Máster puede tener 60 ECTS','Que el TFM es obligatorio'], justification:'La capa interna UC3M debe tomarse del documento oficial.' }
    ]
  });

  applyTheme(17, {
    source: 'Real Decreto 534/2024, de 11 de junio, y normativa anual de admisión UC3M',
    status: 'marco estatal revisado en profundidad; ponderaciones, cupos y calendario UC3M pendientes de publicación anual',
    complete: false,
    summary: 'El tema exige separar acceso de admisión. El acceso acredita requisitos; la admisión adjudica plazas. Después deben añadirse las reglas anuales de la UC3M.',
    rigor: 'No se incorporan ponderaciones o notas de corte de otro curso. Son datos anuales y variables.',
    blocks: [
      ['Conceptos y principios', [
        'Artículo 2. Los requisitos de acceso son previos a la admisión.',
        'La admisión es la adjudicación de plazas entre quienes ya cumplen acceso.',
        'Artículo 3. Rigen igualdad, mérito y capacidad, igualdad de oportunidades, no discriminación, accesibilidad universal, transparencia y orientación.'
      ]],
      ['Vías de acceso', [
        'Artículo 4. Bachiller o equivalente: acceso tras superar la prueba regulada legalmente.',
        'Artículo 5. Técnico Superior de FP, Artes Plásticas y Diseño o Deportivo Superior: acceso sin prueba de acceso, sin perjuicio del procedimiento de admisión.',
        'Existen además vías para sistemas educativos extranjeros, titulados universitarios y mayores de 25, 40 y 45 años en los términos reglamentarios.'
      ]],
      ['Prueba de acceso', [
        'La prueba valora madurez académica, conocimientos y competencias adquiridas en Bachillerato.',
        'La normativa regula materias, estructura, calificación, revisión y adaptaciones.',
        'Las adaptaciones para necesidades específicas pueden afectar tiempos, modelos y medios, sin minorar la calificación por razón de la adaptación.'
      ]],
      ['Procedimientos de admisión', [
        'La admisión debe utilizar criterios objetivos, públicos y transparentes.',
        'Debe distinguirse nota de acceso, nota de admisión, ponderaciones y cupos de reserva.',
        'Los procedimientos deben prever información, solicitud, adjudicación, listas, reclamaciones y matrícula.'
      ]],
      ['Traslado y estudios universitarios previos', [
        'Cuando se reconocen al menos 30 ECTS en estudios universitarios parciales, puede existir una vía específica resuelta por el Rector o Rectora según criterios del Consejo de Gobierno.',
        'Si no se reconocen al menos 30 ECTS, debe acudirse al procedimiento general de admisión.',
        'El reconocimiento de créditos sin calificación no computa igual que una calificación a efectos de ponderación cuando la norma así lo establece.'
      ]],
      ['Capa anual UC3M', [
        'Deben incorporarse cada curso: oferta de plazas, ponderaciones, cupos, calendario, listas, reclamaciones y matrícula.',
        'Las notas de corte no son requisitos previos fijos: son el resultado de la demanda y adjudicación del curso correspondiente.'
      ]]
    ],
    hot: [
      '• Acceso y admisión son conceptos diferentes.',
      '• Técnico Superior accede sin prueba de acceso.',
      '• La admisión puede exigir ponderaciones y competir por plazas.',
      '• Igualdad, mérito, capacidad y accesibilidad son principios básicos.',
      '• Adaptaciones no deben penalizar la calificación.',
      '• 30 ECTS reconocidos marcan una diferencia en determinadas vías por traslado.',
      '• Notas de corte y ponderaciones cambian cada curso.'
    ],
    recall: [
      '1. ¿Qué diferencia jurídica hay entre acceso y admisión?',
      '2. ¿Qué vía tiene una persona con Técnico Superior?',
      '3. ¿Qué datos UC3M deben actualizarse cada curso?'
    ],
    table: [
      ['Concepto', 'Qué significa', 'Clave'],
      ['Acceso', 'Cumplir requisitos previos', 'Anterior a admisión'],
      ['Admisión', 'Adjudicar plazas', 'Criterios públicos'],
      ['Técnico Superior', 'Acceso sin prueba', 'Puede competir en admisión'],
      ['Traslado', 'Vía específica con 30 ECTS reconocidos', 'Si no, admisión general'],
      ['Nota de corte', 'Resultado anual', 'No requisito fijo permanente']
    ],
    questions: [
      { text:'¿Qué es el acceso?', correct:'El cumplimiento de requisitos previos para cursar un Grado', wrong:['La adjudicación final de plaza exclusivamente','La matrícula automática','La revisión de una nota'], justification:'Artículo 2 RD 534/2024.' },
      { text:'¿Qué es la admisión?', correct:'La adjudicación de plazas entre quienes cumplen acceso', wrong:['La expedición del título','La prueba de contratación','La selección de personal'], justification:'Artículo 2 RD 534/2024.' },
      { text:'¿Qué principios rigen acceso y admisión?', correct:'Igualdad, mérito y capacidad, no discriminación y accesibilidad', wrong:['Secreto y arbitrariedad','Antigüedad exclusiva','Orden alfabético sin más'], justification:'Artículo 3 RD 534/2024.' },
      { text:'¿Qué necesita como regla una persona con Bachiller?', correct:'Superar la prueba de acceso regulada legalmente', wrong:['Acreditar un contrato laboral','Tener 30 ECTS previos','Ser funcionario'], justification:'Artículo 4 RD 534/2024.' },
      { text:'¿Qué ocurre con un Técnico Superior de FP?', correct:'Puede acceder sin realizar prueba de acceso', wrong:['No puede acceder a la universidad','Debe tener un Grado previo','Solo accede con oposición'], justification:'Artículo 5 RD 534/2024.' },
      { text:'¿Acceder sin prueba garantiza plaza?', correct:'No, puede existir procedimiento de admisión', wrong:['Sí, siempre','Solo en universidades privadas','Solo si hay nota cero'], justification:'Artículo 5 y procedimientos de admisión.' },
      { text:'¿Qué puede adaptarse en la prueba por necesidades específicas?', correct:'Tiempos, modelos y medios', wrong:['La calificación a la baja','La identidad del aspirante','La titulación exigida'], justification:'Medidas de adaptación del RD 534/2024.' },
      { text:'¿Qué diferencia hay entre nota de acceso y nota de admisión?', correct:'La segunda puede incorporar ponderaciones del procedimiento', wrong:['Son siempre idénticas','La nota de acceso es una tasa','La nota de admisión es un título'], justification:'Régimen de admisión.' },
      { text:'¿Qué umbral es relevante para una vía específica con estudios universitarios parciales?', correct:'El reconocimiento de al menos 30 ECTS', wrong:['3 ECTS','10 ECTS','120 ECTS siempre'], justification:'Régimen de admisión por estudios universitarios parciales.' },
      { text:'Si no se reconocen 30 ECTS, ¿qué procede como regla?', correct:'Participar en el procedimiento general de admisión', wrong:['Admisión automática','Expulsión definitiva','Concesión de título'], justification:'RD 534/2024.' },
      { text:'¿Qué dato cambia cada curso?', correct:'Ponderaciones, plazas y notas de corte', wrong:['La definición de acceso','La existencia del título de Técnico Superior','La diferencia entre acceso y admisión'], justification:'La capa anual de admisión debe actualizarse.' },
      { text:'¿Qué caracteriza a la nota de corte?', correct:'Es un resultado del proceso anual de adjudicación', wrong:['Es un requisito legal fijo para siempre','La decide un tribunal de oposición','Es una tasa universitaria'], justification:'No es una exigencia normativa permanente.' }
    ]
  });

  applyTheme(20, {
    source: 'Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, y reglas internas UC3M',
    status: 'marco legal revisado en profundidad; órgano, delegaciones y circuitos internos UC3M pendientes de resolución vigente',
    complete: false,
    summary: 'El tema debe dominar la secuencia completa: ámbito y principios, tipos, objeto y lotes, presupuesto/valor/precio, expediente, aptitud, procedimientos, adjudicación, formalización, ejecución y extinción.',
    rigor: 'Se han incluido los umbrales legales del contrato menor y del abierto simplificado abreviado verificados en la LCSP. Las delegaciones internas de la UC3M no se atribuyen sin resolución vigente.',
    blocks: [
      ['Ámbito, principios y tipos', [
        'Artículos 1 a 3. Principios: libertad de acceso, publicidad y transparencia, igualdad y no discriminación, integridad, estabilidad y eficiencia.',
        'Artículos 12 a 18. Obras, concesión de obras, concesión de servicios, suministro, servicios y contratos mixtos.',
        'Un contrato mixto combina prestaciones de distinta clase y aplica las reglas legales para determinar su régimen.'
      ]],
      ['Órgano, objeto, lotes e importes', [
        'El órgano de contratación es quien tiene atribuida la competencia para celebrar contratos.',
        'Artículo 99. El objeto debe ser determinado. La división en lotes se favorece cuando sea posible y se prohíbe fraccionar para eludir publicidad o procedimiento.',
        'Artículos 100 a 102. Presupuesto base, valor estimado y precio son conceptos diferentes.',
        'El valor estimado sirve, entre otras funciones, para determinar régimen y umbrales y se calcula sin IVA en los términos legales.'
      ]],
      ['Preparación del expediente', [
        'Artículo 28. Deben justificarse necesidad e idoneidad.',
        'Artículo 116. El expediente se inicia motivando la necesidad y debe referirse a la totalidad del objeto, sin perjuicio de lotes.',
        'Incluye crédito, fiscalización cuando proceda, pliegos, justificaciones, aprobación del expediente y del gasto.',
        'La aptitud exige capacidad, ausencia de prohibiciones y solvencia; la clasificación se exige solo en los supuestos legales.'
      ]],
      ['Contrato menor', [
        'Artículo 118. Menor de obras: valor estimado inferior a 40.000 euros. Menor de suministro o servicios: inferior a 15.000 euros.',
        'Exige informe motivado de necesidad y de no alteración del objeto para eludir umbrales, aprobación del gasto y factura.',
        'El contrato menor no permite fraccionar artificialmente una necesidad unitaria.'
      ]],
      ['Procedimientos y adjudicación', [
        'Procedimientos principales: abierto, restringido, negociado en supuestos tasados, diálogo competitivo y asociación para la innovación.',
        'La adjudicación debe seleccionar la mejor relación calidad-precio con criterios vinculados al objeto.',
        'Artículo 159.6. El abierto simplificado abreviado puede utilizarse en obras de valor estimado inferior a 80.000 euros y suministros o servicios inferiores a 60.000 euros, salvo prestaciones intelectuales.',
        'En el abierto simplificado abreviado no se exige garantía definitiva y la formalización puede hacerse mediante aceptación de la resolución de adjudicación.'
      ]],
      ['Ejecución y extinción', [
        'La ejecución se ajusta a pliegos y oferta. Deben controlarse responsable del contrato, conformidad, factura, pago, penalidades y recepción.',
        'Modificación, suspensión, cesión, subcontratación y resolución requieren causa, competencia, procedimiento y efectos legales.',
        'La formalización no equivale a adjudicación: son momentos distintos del procedimiento.'
      ]],
      ['Capa UC3M pendiente', [
        'Debe incorporarse la resolución vigente de delegación de competencias en materia de contratación.',
        'También el circuito interno de memoria de necesidad, reserva de crédito, pliegos, fiscalización, mesa, conformidad y factura.'
      ]]
    ],
    hot: [
      '• Objeto, presupuesto base, valor estimado y precio son distintos.',
      '• Necesidad e idoneidad deben justificarse.',
      '• Fraccionar para eludir procedimiento está prohibido.',
      '• Menor: obras < 40.000; suministros/servicios < 15.000.',
      '• Abierto simplificado abreviado: obras < 80.000; suministros/servicios < 60.000.',
      '• Mejor relación calidad-precio no equivale siempre al precio más bajo.',
      '• Adjudicación y formalización son momentos distintos.',
      '• El órgano competente UC3M depende de delegación vigente.'
    ],
    recall: [
      '1. ¿Qué diferencia hay entre presupuesto base, valor estimado y precio?',
      '2. ¿Qué integra el expediente de contratación?',
      '3. ¿Qué umbrales debes recordar para menor y simplificado abreviado?'
    ],
    table: [
      ['Concepto', 'Qué significa', 'Clave'],
      ['Presupuesto base', 'Límite de gasto de licitación', 'Incluye IVA cuando proceda'],
      ['Valor estimado', 'Valor total calculado legalmente', 'Sin IVA'],
      ['Precio', 'Contraprestación del contrato', 'Debe ser cierto'],
      ['Contrato menor', 'Procedimiento simplificado por cuantía', '40.000/15.000'],
      ['Simplificado abreviado', 'Artículo 159.6', '80.000/60.000'],
      ['Formalización', 'Perfecciona/documenta tras adjudicación', 'No es adjudicación']
    ],
    questions: [
      { text:'¿Qué principio rige la contratación pública?', correct:'Publicidad, transparencia, igualdad y no discriminación', wrong:['Secreto general','Libre elección sin expediente','Preferencia personal'], justification:'Artículo 1 LCSP.' },
      { text:'¿Qué es un contrato de suministro?', correct:'El que tiene por objeto adquirir, arrendar o suministrar bienes muebles en los términos legales', wrong:['El que ejecuta exclusivamente una obra pública','El que siempre concede un servicio','El que selecciona personal'], justification:'Artículos 12 a 18 LCSP.' },
      { text:'¿Qué exige el artículo 99 sobre el objeto?', correct:'Que sea determinado y no se fraccione para eludir reglas', wrong:['Que siempre sea secreto','Que nunca se divida en lotes','Que carezca de cuantía'], justification:'Artículo 99 LCSP.' },
      { text:'¿Cómo se calcula el valor estimado respecto del IVA?', correct:'Sin IVA', wrong:['Siempre con IVA duplicado','Solo con recargo de apremio','No tiene relación con cuantía'], justification:'Artículos 101 y concordantes LCSP.' },
      { text:'¿Qué debe justificarse antes de contratar?', correct:'La necesidad e idoneidad', wrong:['La afinidad personal','La ausencia de presupuesto','La eliminación de pliegos'], justification:'Artículo 28 LCSP.' },
      { text:'¿Qué inicia el expediente del artículo 116?', correct:'La motivación de la necesidad por el órgano de contratación', wrong:['La factura final','La recepción','El recurso especial'], justification:'Artículo 116 LCSP.' },
      { text:'¿Cuál es el umbral del contrato menor de obras?', correct:'Valor estimado inferior a 40.000 euros', wrong:['Inferior a 15.000 euros','Inferior a 60.000 euros','Inferior a 80.000 euros'], justification:'Artículo 118 LCSP.' },
      { text:'¿Cuál es el umbral del menor de suministro o servicios?', correct:'Valor estimado inferior a 15.000 euros', wrong:['Inferior a 40.000 euros','Inferior a 60.000 euros','Inferior a 100.000 euros'], justification:'Artículo 118 LCSP.' },
      { text:'¿Qué documento exige el contrato menor además de aprobación del gasto y factura?', correct:'Informe motivado de necesidad y no fraccionamiento', wrong:['Sentencia judicial','Acta electoral','Plan de estudios'], justification:'Artículo 118 LCSP.' },
      { text:'¿Qué criterio general debe orientar la adjudicación?', correct:'La mejor relación calidad-precio', wrong:['Solo el precio más bajo en todo caso','La antigüedad del licitador','El orden de llegada'], justification:'LCSP.' },
      { text:'¿Cuál es el umbral del simplificado abreviado para suministros y servicios?', correct:'Inferior a 60.000 euros', wrong:['Inferior a 15.000 euros','Inferior a 40.000 euros','Inferior a 200.000 euros'], justification:'Artículo 159.6 LCSP.' },
      { text:'¿Qué dato sigue pendiente para la capa UC3M?', correct:'La delegación vigente del órgano de contratación', wrong:['La existencia de la LCSP','El concepto de factura','La prohibición de fraccionar'], justification:'La competencia interna depende de resolución vigente.' }
    ]
  });

  const links = [
    { label: 'BOE · LOSU', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500' },
    { label: 'BOE · RD 822/2021', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781' },
    { label: 'BOE · RD 534/2024', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858' },
    { label: 'BOE · Ley 9/2017', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902' }
  ];
  ope.officialLinks ||= [];
  links.forEach(link => {
    if (!ope.officialLinks.some(existing => existing.url === link.url)) ope.officialLinks.push(link);
  });

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 73, 149].map((start, s) => ({
    id: `uc3m-v36-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({
      ...all[(start + i * 29) % all.length],
      id: `uc3m-v36-sim${s + 1}-q${i + 1}`
    }))
  }));

  ope.version = '0.36.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.35:.*/, '')} Revisión v0.36: temas 13, 14, 16, 17 y 20 revisados en profundidad con 60 preguntas nuevas. Siguen pendientes únicamente las reglas internas UC3M que exigen documento vigente.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(item => item.version === '0.36.0')) {
    ope.changelog.unshift({
      version: '0.36.0',
      date: '2026-07-10',
      changes: [
        'Profundizados LOSU I y II',
        'Profundizados RD 822/2021 y RD 534/2024',
        'Profundizado el tema 20 de contratación',
        'Añadidas 60 preguntas manuales nuevas',
        'Regenerados simulacros de 70 preguntas'
      ]
    });
  }

  window.OPOWEB_UC3M_V36 = {
    version: 'v0.36.0',
    deepReviewed: [13,14,16,17,20],
    pendingInternal: [7,15,16,17,18,19,20]
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();