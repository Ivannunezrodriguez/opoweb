(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = n => ope.themes.find(t => Number(t.number) === n);

  function setTheme(n, cfg) {
    const t = theme(n);
    if (!t) return;
    t.sections = [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${t.title}`,
        `Fuente principal: ${cfg.source}.`,
        cfg.summary
      ]),
      sec('Rigor normativo', [
        cfg.rigor,
        `Estado de auditoría: ${cfg.status}.`
      ]),
      ...cfg.blocks.map(([h, ps]) => sec(h, ps)),
      sec('Opo-Test: puntos calientes', cfg.hot),
      sec('Retención activa', cfg.recall)
    ];
    t.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Norma', cfg.source],
      ['Ámbito', 'Quién está obligado o protegido y en qué situaciones.'],
      ['Órgano/procedimiento', 'Quién publica, tramita, resuelve, supervisa o activa el protocolo.'],
      ['Dato literal', 'Plazo, cifra, eje, composición, efecto o excepción que aparezca expresamente.'],
      ['Aplicación UC3M', 'Diferenciar la regla general de la normativa o procedimiento propio de la Universidad.']
    ];
    t.auditStatus = cfg.status;
    t.motorCoverage = cfg.status.includes('pendiente') ? 'base-revisada-documento-parcial-pendiente' : 'completo-revisado-v32';
    ope.themeTests[t.id] = cfg.questions.map((q, i) => ({
      id: `${t.id}-v32-q${i + 1}`,
      text: q.text,
      options: q.options.map((text, j) => ({ letter: 'ABCD'[j], text })),
      answer: q.answer,
      justification: q.justification
    }));
  }

  setTheme(7, {
    source: 'Ley 10/2019, de Transparencia y de Participación de la Comunidad de Madrid, y procedimiento UC3M',
    status: 'estructura legal y aplicación UC3M revisadas; pendiente incorporar el texto consolidado artículo por artículo',
    summary: 'El tema debe estudiarse en tres capas: disposiciones generales, publicidad activa y derecho de acceso. Después se añade la aplicación institucional mediante el Portal de Transparencia y el cauce de solicitud de información pública de la UC3M.',
    rigor: 'No se han introducido plazos numéricos no verificados. El plazo exacto de resolución, las causas de inadmisión y el régimen de reclamación deben copiarse del texto consolidado vigente cuando se incorpore al repositorio.',
    blocks: [
      ['Disposiciones generales', [
        'La transparencia comprende publicidad activa, derecho de acceso a la información pública, rendición de cuentas y participación. No debe confundirse publicar de oficio con responder una solicitud individual.',
        'La Universidad Carlos III de Madrid, como universidad pública, está sujeta a las obligaciones de transparencia que resulten aplicables a las entidades del sector público de la Comunidad de Madrid.',
        'La información debe ofrecerse de forma clara, accesible, actualizada, comprensible y, cuando proceda, reutilizable.'
      ]],
      ['Publicidad activa', [
        'La publicidad activa obliga a publicar información sin esperar a que una persona la solicite.',
        'Bloques principales: información institucional y organizativa; normativa; planificación; personal; contratos; convenios; subvenciones; presupuestos; cuentas; información económica y estadística.',
        'En UC3M la publicidad activa se canaliza a través de su Portal de Transparencia y de las páginas institucionales que contienen organización, normativa, presupuestos, contratación y datos de gestión.'
      ]],
      ['Derecho de acceso a la información pública', [
        'El derecho de acceso permite solicitar contenidos o documentos que obren en poder del sujeto obligado y hayan sido elaborados o adquiridos en el ejercicio de sus funciones.',
        'No debe confundirse información pública con cualquier dato interno: pueden operar límites legales, protección de datos personales, derechos de terceros, confidencialidad y acceso parcial.',
        'Cuando solo una parte de la información esté afectada por un límite, debe valorarse el acceso parcial o la disociación de datos si resulta jurídicamente posible.'
      ]],
      ['Procedimiento', [
        'Secuencia de examen: presentación de la solicitud, identificación de la información, remisión al órgano competente, posible aclaración, audiencia a terceros afectados, ponderación de límites, resolución, notificación y acceso material.',
        'La resolución debe ser motivada cuando deniegue, inadmite, conceda acceso parcial o aplique límites.',
        'Frente a la resolución expresa o presunta puede proceder la reclamación ante el órgano de garantía competente y, en su caso, el recurso contencioso-administrativo.'
      ]],
      ['Aplicación UC3M', [
        'En un supuesto práctico hay que distinguir: consulta de información ya publicada, solicitud de acceso, petición de datos personales propios, acceso a expediente administrativo y solicitud académica ordinaria.',
        'La unidad que reciba la solicitud debe registrar, identificar la información pedida y remitirla al órgano que la posea o sea competente para resolver.',
        'La protección de datos no permite denegar automáticamente: exige ponderación, motivación y, cuando proceda, anonimización o acceso parcial.'
      ]]
    ],
    hot: [
      '• Publicidad activa: publicación de oficio; derecho de acceso: respuesta a una solicitud.',
      '• Información pública: contenidos o documentos en poder del sujeto obligado por el ejercicio de sus funciones.',
      '• Acceso parcial y anonimización pueden permitir entregar información sin vulnerar derechos.',
      '• Una denegación, inadmisión o concesión parcial debe motivarse.',
      '• Protección de datos y transparencia deben ponderarse; una no elimina automáticamente a la otra.',
      '• No confundas derecho de acceso a información pública con acceso al propio expediente.',
      '• En UC3M debe comprobarse si la información ya está disponible en el Portal de Transparencia.'
    ],
    recall: [
      '1. ¿Qué diferencia existe entre publicidad activa y derecho de acceso?',
      '2. ¿Qué pasos seguirías desde que entra una solicitud hasta que se entrega o deniega la información?',
      '3. ¿Cómo resolverías un conflicto entre transparencia y protección de datos?'
    ],
    questions: [
      { text:'¿Qué caracteriza a la publicidad activa?', options:['La información se publica de oficio sin necesidad de solicitud','Solo se entrega tras recurso administrativo','Se limita a datos personales del solicitante','Solo existe en procedimientos sancionadores'], answer:'A', justification:'La publicidad activa obliga a publicar de oficio información institucional, jurídica y económica.' },
      { text:'¿Qué caracteriza al derecho de acceso a la información pública?', options:['Permite solicitar información que obra en poder del sujeto obligado por sus funciones','Permite modificar cualquier documento público','Sustituye el acceso al expediente de la persona interesada','Elimina todos los límites de protección de datos'], answer:'A', justification:'El acceso se refiere a contenidos o documentos en poder de sujetos obligados y está sometido a límites legales.' },
      { text:'Si una parte del documento está afectada por un límite, ¿qué debe valorarse?', options:['El acceso parcial o la anonimización','La destrucción del documento','La publicación íntegra obligatoria','La inadmisión automática'], answer:'A', justification:'Debe examinarse si puede facilitarse acceso parcial o previa disociación de datos.' },
      { text:'¿Qué actuación exige motivación?', options:['La denegación o concesión parcial del acceso','La simple apertura del navegador','La consulta de información ya publicada','La descarga de un formulario vacío'], answer:'A', justification:'Las decisiones limitativas o parciales deben estar motivadas.' },
      { text:'¿Qué relación existe entre transparencia y protección de datos?', options:['Debe realizarse una ponderación conforme a la normativa aplicable','La protección de datos impide siempre el acceso','La transparencia elimina todos los límites','Son materias sin relación'], answer:'A', justification:'La existencia de datos personales exige ponderar intereses, límites y posible anonimización.' },
      { text:'¿Cuál es el primer paso útil ante una solicitud ambigua?', options:['Identificar o aclarar la información solicitada','Denegar sin más trámite','Publicar datos de terceros','Enviar la solicitud al archivo definitivo'], answer:'A', justification:'El órgano debe determinar qué información se solicita y tramitarla adecuadamente.' },
      { text:'¿Qué contenido es propio de publicidad activa?', options:['Organización, contratos, convenios, presupuestos y cuentas','Contraseñas del personal','Datos médicos individuales','Borradores privados sin relevancia pública'], answer:'A', justification:'La publicidad activa comprende información institucional, jurídica y económico-presupuestaria.' },
      { text:'En UC3M, antes de tramitar una solicitud, conviene comprobar:', options:['Si la información ya está publicada en el Portal de Transparencia','Si el solicitante trabaja en otra universidad','Si el documento puede destruirse','Si existe una tasa académica'], answer:'A', justification:'Cuando la información ya es pública puede indicarse el lugar exacto de acceso.' },
      { text:'¿Qué diferencia hay entre acceso a información pública y acceso al expediente?', options:['Tienen finalidades y regímenes jurídicos diferentes','Son siempre exactamente lo mismo','El expediente solo existe en papel','La información pública solo puede verla una persona interesada'], answer:'A', justification:'El acceso al expediente se vincula a la condición de interesado; la información pública tiene su propio régimen.' },
      { text:'¿Qué puede ocurrir si hay derechos de terceros afectados?', options:['Puede darse audiencia antes de resolver','La solicitud se aprueba automáticamente','Se ignoran los derechos de terceros','Se archiva sin resolución'], answer:'A', justification:'La audiencia permite que terceros formulen alegaciones cuando sus derechos puedan verse afectados.' },
      { text:'¿Qué opción es incorrecta?', options:['La protección de datos obliga siempre a denegar cualquier solicitud','Puede existir acceso parcial','La resolución denegatoria debe motivarse','La UC3M tiene obligaciones de publicidad activa'], answer:'A', justification:'La protección de datos exige ponderación, no una denegación automática.' },
      { text:'Una solicitud debe dirigirse finalmente:', options:['Al órgano que posea la información o sea competente para resolver','A cualquier persona externa','Al proveedor de correo personal','Al tribunal del proceso selectivo'], answer:'A', justification:'La tramitación debe llegar al órgano competente o poseedor de la información.' }
    ]
  });

  setTheme(8, {
    source: 'LO 3/2007, III Plan de Igualdad UC3M 2025-2029 y II Protocolo contra el acoso y ciberacoso',
    status: 'desarrollo específico UC3M revisado con fuentes institucionales oficiales',
    summary: 'El tema combina la igualdad legal general con la política propia de la UC3M. Hay que dominar conceptos de discriminación y acoso, los seis ejes del III Plan, su sistema de seguimiento y el ámbito del protocolo universitario.',
    rigor: 'El III Plan está vigente desde el 1 de febrero de 2025, se proyecta para 2025-2029 y contiene seis ejes estratégicos y 138 medidas. El protocolo tiene una doble vertiente de prevención y actuación.',
    blocks: [
      ['LO 3/2007: objeto, igualdad y tutela', [
        'La Ley Orgánica 3/2007 persigue hacer efectivo el derecho de igualdad de trato y oportunidades entre mujeres y hombres y eliminar la discriminación por razón de sexo.',
        'Discriminación directa: trato menos favorable por razón de sexo en una situación comparable. Discriminación indirecta: disposición, criterio o práctica aparentemente neutra que produce desventaja particular, salvo justificación objetiva, legítima, necesaria y adecuada.',
        'El acoso sexual y el acoso por razón de sexo son conductas discriminatorias. Las acciones positivas deben ser razonables y proporcionadas para corregir desigualdades de hecho.',
        'La tutela comprende prevención, protección frente a represalias, reparación y aplicación transversal del principio de igualdad.'
      ]],
      ['III Plan de Igualdad UC3M', [
        'El III Plan de Igualdad de la UC3M está dirigido al personal y se completa con medidas específicas para el estudiantado.',
        'Vigencia: 2025-2029. Entrada en vigor: 1 de febrero de 2025. El plan fue negociado con la representación legal de las personas trabajadoras e inscrito en REGCON.',
        'Estructura: seis ejes estratégicos y 138 medidas.'
      ]],
      ['Seis ejes estratégicos', [
        'Eje 1. Gobernanza, organización y gestión con perspectiva de género.',
        'Eje 2. Formación en y para la igualdad.',
        'Eje 3. Igualdad en el empleo y corresponsabilidad.',
        'Eje 4. Docencia, prácticas de formación, innovación y evaluación del profesorado con perspectiva de género.',
        'Eje 5. Investigación, transferencia y emprendimiento con perspectiva de género.',
        'Eje 6. Acciones frente a la violencia contra las mujeres.'
      ]],
      ['Seguimiento y evaluación', [
        'La Comisión de Seguimiento está formada por ocho personas en representación de la Universidad y ocho en representación de las personas trabajadoras, con composición equilibrada entre mujeres y hombres.',
        'Funciones: conocer la implementación, verificar objetivos y ejecución, detectar obstáculos, proponer correcciones y elaborar un informe intermedio y otro final.',
        'Existe un sistema de personas de enlace en órganos y unidades universitarias y un formulario digital para reportar indicadores.',
        'Tipos de indicadores: seguimiento, proceso, resultado e impacto. Los reportes ordinarios son semestrales, en octubre y febrero, hasta febrero de 2029.'
      ]],
      ['Protocolo contra el acoso', [
        'La UC3M dispone de un protocolo de prevención y actuación frente al acoso y ciberacoso sexual, por razón de sexo, orientación sexual e identidad o expresión de género.',
        'Ámbito personal: alumnado, PDI, PTGAS y personas de empresas o entidades externas que desarrollen su trabajo en la UC3M.',
        'Doble vertiente: prevención y actuación. En la gestión deben preservarse confidencialidad, protección, ausencia de represalias, respeto, diligencia y atención adecuada.'
      ]],
      ['Aplicación administrativa', [
        'En selección, promoción, formación, retribuciones, conciliación y organización del trabajo debe integrarse la igualdad de trato y oportunidades.',
        'En comunicaciones y documentación administrativa deben utilizarse lenguaje e imágenes no discriminatorias y datos desagregados por sexo cuando proceda.',
        'Ante una comunicación de acoso no debe improvisarse una investigación informal: se deriva a la Unidad de Igualdad y se activa el cauce previsto, protegiendo la confidencialidad.'
      ]]
    ],
    hot: [
      '• III Plan UC3M: 2025-2029, en vigor desde el 1 de febrero de 2025.',
      '• Seis ejes estratégicos y 138 medidas.',
      '• Comisión de Seguimiento: 8 representantes de la Universidad + 8 de las personas trabajadoras.',
      '• Indicadores: seguimiento, proceso, resultado e impacto.',
      '• Reportes semestrales: octubre y febrero, hasta febrero de 2029.',
      '• Protocolo aplicable a alumnado, PDI, PTGAS y personal externo que trabaja en la UC3M.',
      '• Acoso sexual, por razón de sexo, orientación sexual e identidad o expresión de género.',
      '• El protocolo combina prevención y actuación.'
    ],
    recall: [
      '1. ¿Cuáles son los seis ejes del III Plan de Igualdad UC3M?',
      '2. ¿Cómo se compone la Comisión de Seguimiento y qué informes debe elaborar?',
      '3. ¿A quién se aplica el protocolo contra el acoso y qué dos vertientes tiene?'
    ],
    questions: [
      { text:'¿Cuál es la vigencia del III Plan de Igualdad UC3M?', options:['2025-2029','2024-2026','2026-2030','2025-2027'], answer:'A', justification:'El III Plan establece una hoja de ruta para 2025-2029.' },
      { text:'¿Desde cuándo está en vigor el III Plan?', options:['1 de febrero de 2025','1 de enero de 2024','27 de enero de 2026','1 de septiembre de 2025'], answer:'A', justification:'La página institucional indica que entró en vigor el 1 de febrero de 2025.' },
      { text:'¿Cuántos ejes estratégicos tiene?', options:['Seis','Cuatro','Ocho','Diez'], answer:'A', justification:'El III Plan se organiza en seis ejes estratégicos.' },
      { text:'¿Cuántas medidas contiene el III Plan?', options:['138','60','100','200'], answer:'A', justification:'La UC3M informa de un total de 138 medidas.' },
      { text:'¿Qué composición tiene la Comisión de Seguimiento?', options:['8 representantes de la Universidad y 8 de las personas trabajadoras','6 representantes exclusivamente del Rectorado','10 estudiantes y 2 docentes','4 representantes sin equilibrio de género'], answer:'A', justification:'La comisión tiene composición 8+8 y equilibrada entre mujeres y hombres.' },
      { text:'¿Cuáles son tipos de indicadores del Plan?', options:['Seguimiento, proceso, resultado e impacto','Entrada, salida y archivo','Solo indicadores económicos','Solo encuestas anuales'], answer:'A', justification:'El sistema utiliza indicadores de seguimiento, proceso, resultado e impacto.' },
      { text:'¿Cuándo se realizan los reportes semestrales ordinarios?', options:['Octubre y febrero','Enero y diciembre','Marzo y septiembre','Junio exclusivamente'], answer:'A', justification:'Los reportes están calendarizados en octubre y febrero hasta febrero de 2029.' },
      { text:'¿A quién se aplica el protocolo UC3M?', options:['A toda la comunidad universitaria y a personal externo que trabaja en la UC3M','Solo al profesorado funcionario','Solo al alumnado de Grado','Solo a cargos académicos'], answer:'A', justification:'El protocolo alcanza alumnado, PDI, PTGAS y personas externas que trabajan en la UC3M.' },
      { text:'¿Qué dos vertientes tiene el protocolo?', options:['Prevención y actuación','Docencia y evaluación','Presupuesto y contratación','Selección y provisión'], answer:'A', justification:'La página institucional describe una doble vertiente preventiva y de actuación.' },
      { text:'¿Cuál es el eje 3 del III Plan?', options:['Igualdad en el empleo y corresponsabilidad','Contratación administrativa','Acceso a la información pública','Gestión presupuestaria'], answer:'A', justification:'El tercer eje aborda empleo, oportunidades, conciliación y corresponsabilidad.' },
      { text:'¿Cuál es el eje 6?', options:['Acciones frente a la violencia contra las mujeres','Internacionalización universitaria','Transferencia presupuestaria','Admisión a Grado'], answer:'A', justification:'El sexto eje busca campus seguros y respuesta frente a la violencia contra las mujeres.' },
      { text:'Ante una comunicación de acoso, la actuación correcta es:', options:['Derivar y activar el cauce previsto garantizando confidencialidad','Investigar informalmente difundiendo los hechos','Esperar sin registrar ninguna actuación','Publicar los datos de las personas afectadas'], answer:'A', justification:'Debe aplicarse el protocolo con confidencialidad, protección y diligencia.' }
    ]
  });

  const links = [
    { label: 'III Plan de Igualdad UC3M', url: 'https://www.uc3m.es/igualdad/plan-igualdad' },
    { label: 'Protocolo contra el acoso UC3M', url: 'https://www.uc3m.es/igualdad/protocolo-acoso' }
  ];
  ope.officialLinks ||= [];
  links.forEach(l => { if (!ope.officialLinks.some(x => x.url === l.url)) ope.officialLinks.push(l); });

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 41, 97].map((start, s) => ({
    id: `uc3m-v32-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({ ...all[(start + i * 17) % all.length], id: `uc3m-v32-sim${s + 1}-q${i + 1}` }))
  }));

  ope.version = '0.32.0';
  ope.coverage = {
    completeCommon: [1,2,3,4,5,6,8,9,10,11,12,13,14,16,17,20],
    partial: [7],
    pendingUc3mDocuments: [15,18,19]
  };
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.31:.*/, '')} Revisión v0.32: tema 8 completado con III Plan y protocolo oficial; tema 7 ampliado sin inventar plazos. Pendientes principales: Estatutos y presupuesto UC3M.`;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: '0.32.0',
    date: '2026-07-10',
    changes: [
      'Completado el tema 8 con el III Plan de Igualdad 2025-2029 y protocolo UC3M',
      'Ampliado el tema 7 de transparencia y procedimiento de acceso',
      'Añadidos 24 test específicos de transparencia e igualdad',
      'Añadidos enlaces oficiales de igualdad y acoso UC3M'
    ]
  });

  window.OPOWEB_UC3M_V32 = { version:'v0.32.0', completed:[8], partial:[7], pending:[15,18,19] };
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();