(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 7);
  if (!ope || !theme) return;

  const VERSION = '0.73.0';
  const LAW = 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-10102';
  const PORTAL = 'https://www.uc3m.es/conocenos/transparencia';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const rows = [
    ['¿Cuál es el objeto de la Ley 10/2019 de la Comunidad de Madrid?','Regular la transparencia en publicidad activa y acceso, además de la participación y colaboración ciudadana','Regular exclusivamente la contratación pública','Regular solo la protección de datos','Establecer únicamente el régimen electoral','Artículo 1 de la Ley 10/2019.',LAW,'baja'],
    ['¿A qué universidades se aplica la Ley 10/2019?','A las universidades públicas y a sus organismos o entidades vinculadas o dependientes','Solo a las universidades privadas','Únicamente a la universidad pública más antigua','A ninguna universidad por razón de su autonomía','Artículo 2.2 de la Ley 10/2019.',LAW,'baja'],
    ['¿Qué es información pública según la Ley 10/2019?','Contenidos o documentos en poder de sujetos obligados, elaborados, adquiridos o conservados en sus funciones','Solo las normas publicadas en boletines','Únicamente documentos firmados por altos cargos','Toda información privada de cualquier persona','Artículo 5.b de la Ley 10/2019.',LAW,'media'],
    ['¿Cómo configura la Ley 10/2019 el acceso a la información pública?','Como un derecho subjetivo universal para solicitar y obtener información pública','Como autorización discrecional para residentes','Como derecho exclusivo de empleados públicos','Como facultad reservada a periodistas','Artículo 5.c de la Ley 10/2019.',LAW,'baja'],
    ['¿Qué caracteriza a los datos abiertos?','Pueden utilizarse, reutilizarse y redistribuirse libremente, con posible atribución de la fuente','Solo pueden consultarse sin copiarse','Requieren siempre licencia individual','No pueden reutilizarse con fines legítimos','Artículo 5.g de la Ley 10/2019.',LAW,'media'],
    ['¿Cómo puede restringirse el libre acceso a información pública?','Solo de forma motivada y en los supuestos previstos legalmente','Por decisión verbal no motivada','Siempre que tenga más de un año','Cuando el solicitante no resida en Madrid','Artículo 6.b de la Ley 10/2019.',LAW,'media'],
    ['¿Qué exige el principio de veracidad?','Que la información sea cierta, exacta y trazable','Que sea únicamente breve','Que se publique sin procedencia','Que se limite a estadísticas','Artículo 6.c de la Ley 10/2019.',LAW,'baja'],
    ['¿Qué implica el principio de accesibilidad?','Información disponible para todas las personas en medios o formatos adecuados, accesibles y comprensibles','Publicación solo en papel','Exclusión de adaptaciones por discapacidad','Consulta únicamente presencial','Artículo 6.d de la Ley 10/2019.',LAW,'media'],
    ['¿Cuál es la regla general sobre el coste del acceso?','Acceso y solicitudes gratuitos, sin perjuicio de tasas por copias o cambio de formato','Toda solicitud está sujeta a tasa','Solo es gratuito para empleados públicos','La consulta electrónica se paga siempre','Artículo 6.e de la Ley 10/2019.',LAW,'media'],
    ['¿Qué promueve la neutralidad tecnológica?','Software de código abierto y estándares abiertos y neutrales','Un proveedor privado único','La prohibición de estándares abiertos','El uso exclusivo de papel','Artículo 6.i de la Ley 10/2019.',LAW,'alta'],
    ['¿Cómo debe publicarse la información de publicidad activa?','De modo comprensible, estructurado y actualizado en un portal o página web','Solo mediante anuncios internos','Sin estructura y solo a petición','Exclusivamente en soporte papel','Artículo 7 de la Ley 10/2019.',LAW,'baja'],
    ['¿Qué debe indicar el directorio sobre la actualización de la información?','La fecha de la última actualización y, si es posible, la siguiente','Solo el año de creación del portal','La identidad de todos los visitantes','Ninguna referencia temporal','Artículo 8.1.a de la Ley 10/2019.',LAW,'media'],
    ['¿Qué funcionalidad debe incorporar el buscador de información?','Mecanismos de alerta sobre datos actualizados','Pago por cada consulta','Eliminación automática de documentos antiguos','Identificación obligatoria de visitantes','Artículo 8.1.c de la Ley 10/2019.',LAW,'media'],
    ['¿Qué criterio lingüístico debe respetar la información?','Lenguaje no sexista ni discriminatorio','Lenguaje exclusivamente técnico','Expresiones discriminatorias si son breves','Publicación únicamente en inglés','Artículo 8.1.e de la Ley 10/2019.',LAW,'baja'],
    ['¿Qué debe difundirse sobre el derecho de acceso?','Su contenido, procedimiento de ejercicio y órgano competente para resolver','Solo el nombre del portal','Únicamente el coste de copias','Exclusivamente los recursos judiciales','Artículo 8.1.f de la Ley 10/2019.',LAW,'media'],
    ['¿Cómo debe ofrecerse la información a personas con discapacidad?','En modalidad accesible, con medios o formatos adecuados y comprensibles','Solo mediante teléfono','Sin adaptación específica','Únicamente en documentos impresos','Artículo 8.2 de la Ley 10/2019.',LAW,'baja'],
    ['¿Qué exige publicar información con datos especialmente protegidos cuando proceda?','Anonimización previa mediante disociación o agregación estadística','Publicación íntegra sin cautelas','Consentimiento verbal de cualquier tercero','Eliminación de toda la información pública','Artículo 9 de la Ley 10/2019.',LAW,'alta'],
    ['¿Qué ocurre si se incumplen las obligaciones de publicidad activa?','Puede originar responsabilidad disciplinaria en los términos previstos por la ley','Nunca produce consecuencia','Anula automáticamente todos los actos del órgano','Genera responsabilidad penal automática','Artículo 10 de la Ley 10/2019.',LAW,'media'],
    ['¿Qué finalidad tiene el Portal de Transparencia de la Comunidad de Madrid?','Facilitar acceso libre y gratuito a la información pública desde un único punto','Sustituir todos los registros electrónicos','Publicar solo información tributaria','Limitar la consulta a personal funcionario','Artículo 29 de la Ley 10/2019.',LAW,'media'],
    ['¿Quién puede ejercer el derecho de acceso a información pública?','Todas las personas, sin necesidad de acreditar interés especial','Solo personas empadronadas en Madrid','Únicamente empleados públicos','Solo quienes sean parte de un expediente','Artículo 30 de la Ley 10/2019.',LAW,'baja'],
    ['¿Quién es competente para resolver una solicitud de acceso?','El órgano o entidad que posea la información solicitada','Siempre el Consejo de Gobierno autonómico','El solicitante','Cualquier órgano elegido al azar','Artículo 32 de la Ley 10/2019.',LAW,'media'],
    ['¿Puede formularse oralmente una solicitud de acceso?','Sí; debe recogerse electrónicamente y entregarse justificante al solicitante','No, nunca','Solo ante notario','Solo cuando la información sea secreta','Artículo 38 de la Ley 10/2019.',LAW,'alta'],
    ['¿Es obligatorio motivar una solicitud de acceso?','No; la ausencia de motivación no puede ser por sí sola causa de rechazo','Sí, siempre con informe jurídico','Solo si se presenta electrónicamente','Sí, acreditando interés legítimo','Artículo 38 de la Ley 10/2019.',LAW,'media'],
    ['¿Qué plazo hay para concretar una solicitud imprecisa?','Diez días, con suspensión del plazo para resolver','Tres días sin suspensión','Un mes y archivo automático','Veinte días sin posibilidad de aclaración','Artículo 39 de la Ley 10/2019.',LAW,'alta'],
    ['¿Cuál es el plazo ordinario para resolver una solicitud de acceso?','Veinte días desde la recepción por el órgano competente','Diez días naturales','Tres meses','Un año','Artículo 42 de la Ley 10/2019.',LAW,'alta'],
    ['¿Cuánto puede ampliarse el plazo para resolver por volumen o complejidad?','Otros veinte días, previa notificación al solicitante','Cinco meses sin notificación','Diez días solo por acuerdo verbal','No puede ampliarse nunca','Artículo 42 de la Ley 10/2019.',LAW,'alta'],
    ['¿Qué efecto tiene el silencio en el derecho de acceso?','La solicitud se entiende desestimada','La solicitud se estima automáticamente','Se concede acceso parcial obligatorio','El procedimiento se convierte en sancionador','Artículo 42 de la Ley 10/2019.',LAW,'alta'],
    ['¿Qué plazo existe para reclamar frente a una resolución expresa de acceso?','Un mes desde el día siguiente a la notificación','Diez días naturales','Dos años','No existe reclamación administrativa','Artículo 48 de la Ley 10/2019.',LAW,'alta'],
    ['¿Qué grandes categorías reúne el Portal de Transparencia UC3M?','Información institucional, económica, jurídica, de recursos humanos y otros bloques de publicidad activa','Solo calificaciones del alumnado','Únicamente contratos menores','Solo noticias del Rectorado','Portal de Transparencia UC3M.',PORTAL,'media'],
    ['¿Cómo indica la UC3M que se solicite información no localizada en su Portal de Transparencia?','Mediante el Registro Electrónico de la UC3M, con certificado electrónico','Por mensaje privado en redes sociales','Mediante llamada sin identificación','Por correo ordinario anónimo','Portal de Transparencia UC3M.',PORTAL,'media']
  ];

  const questions = rows.map((row, index) => {
    const [text, correct, w1, w2, w3, justification, source, difficulty] = row;
    const raw = [correct, w1, w2, w3];
    const shift = index % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `uc3m-v73-t7-q${index + 1}`,
      text,
      options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
      answer: 'ABCD'[ordered.indexOf(correct)],
      justification,
      source,
      difficulty,
      auditReal: true,
      auditTheme: 7
    };
  });
  ope.themeTests[theme.id] = questions;

  theme.sections = [
    { heading: 'Resumen orientado al aprobado', paragraphs: [
      'La Ley 10/2019 regula publicidad activa, derecho de acceso y participación en la Comunidad de Madrid. Incluye a las universidades públicas y sus entidades vinculadas o dependientes.',
      'Para el test memoriza principios, obligaciones del portal, legitimación universal, órgano competente y plazos: 10 días para concretar, 20 + 20 para resolver y un mes para reclamar.'
    ]},
    { heading: 'Publicidad activa', paragraphs: [
      'La información debe publicarse de modo comprensible, estructurado, actualizado, accesible y reutilizable. El directorio identifica actualización, el buscador incorpora alertas y el lenguaje no puede ser sexista ni discriminatorio.',
      'Cuando existan datos especialmente protegidos, procede anonimización mediante disociación o agregación estadística cuando corresponda.'
    ]},
    { heading: 'Derecho de acceso', paragraphs: [
      'Todas las personas pueden solicitar información sin acreditar interés especial ni motivar la petición. La solicitud oral debe documentarse electrónicamente.',
      'Resuelve el órgano o entidad que posee la información. El silencio es desestimatorio y la reclamación potestativa se presenta en un mes.'
    ]},
    { heading: 'Aplicación UC3M', paragraphs: [
      'El Portal de Transparencia UC3M organiza información institucional, económico-financiera, jurídica, de recursos humanos y otros bloques de publicidad activa.',
      'Cuando la información no aparece en el portal, la Universidad remite al Registro Electrónico y exige certificado electrónico.'
    ]},
    { heading: 'Opo-Test: puntos calientes', paragraphs: [
      '• Universidades públicas: incluidas en el ámbito de la ley.',
      '• Publicidad activa: comprensible, estructurada y actualizada.',
      '• Acceso: gratuito, salvo copias o cambio de formato.',
      '• Plazos: 10 días; 20 + 20 días; reclamación en un mes.',
      '• Datos especialmente protegidos: anonimización cuando proceda.'
    ]}
  ];
  theme.reviewTable = [
    ['Bloque','Regla clave','Artículo'],
    ['Ámbito','Incluye universidades públicas','2.2'],
    ['Publicidad activa','Portal comprensible, estructurado y actualizado','7–9'],
    ['Portal','Acceso libre desde un único punto','29'],
    ['Solicitud','No exige motivación; puede ser oral','38'],
    ['Plazos','10 días para concretar; 20 + 20 para resolver','39 y 42'],
    ['Impugnación','Reclamación potestativa en un mes','47–48']
  ];
  theme.auditStatus = 'banco real 30+ v0.73 · Ley 10/2019 consolidada y Portal UC3M';
  theme.motorCoverage = 'uc3m-transparencia-completa-v73';
  theme.officialSourceUrl = LAW;
  theme.uc3mPortalUrl = PORTAL;

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      value ^= text.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 75 && round < 240) {
      ope.themes.forEach((current, themeIndex) => {
        if (selected.length >= 75) return;
        const bank = shuffled(ope.themeTests?.[current.id] || [], seed * 347 + themeIndex + round);
        for (let offset = 0; offset < bank.length; offset += 1) {
          const question = bank[(round + themeIndex + offset) % bank.length];
          const key = norm(question?.text);
          if (!key || used.has(key)) continue;
          used.add(key);
          selected.push({ ...question, auditTheme: Number(current.number) });
          break;
        }
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2371);
    return {
      id: `uc3m-v73-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v73-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v73-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(current => ({ number: Number(current.number), count: (ope.themeTests?.[current.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));
  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.73.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}), version: 'v0.73.0', estimatedProgress: 68,
    completed: ['Tema 7 completado con 30 preguntas verificadas','Ley 10/2019 consolidada integrada con plazos literales','Portal de Transparencia UC3M incorporado','Simulacros 70 + 5 regenerados'],
    pending: ['Elevar los temas universitarios 13 a 17 a 30 preguntas','Presupuesto vigente y bases de ejecución UC3M','Normativa propia de matrícula, permanencia y evaluación','Reglas anuales de admisión y delegaciones internas completas']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Tema 7 completado con 30 preguntas reales','Plazos literales de la Ley 10/2019 integrados','Aplicación del Portal de Transparencia UC3M añadida','Simulacros 70 + 5 regenerados'] });
  window.OPOWEB_UC3M_V73 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, simulations: ope.simulacros.length, completedTheme: 7, themes: themeAudit };
})();
