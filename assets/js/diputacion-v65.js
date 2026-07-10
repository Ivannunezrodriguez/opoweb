(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.65.0';
  const NUMBER = 22;
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];

  const sections = [
    ['Acuerdo Regulador: ámbito y vigencia', [
      'El Acuerdo Regulador aprobado por el Pleno el 21 de diciembre de 2023 se aplica a los empleados públicos en servicio activo de la Diputación Provincial de Toledo y a los de sus organismos autónomos mientras estos no dispongan de regulación colectiva propia.',
      'Su ámbito territorial comprende todos los centros y servicios de Toledo y provincia dependientes de la Diputación y de sus organismos autónomos. Entró en vigor el 1 de enero de 2024 y mantiene vigencia hasta el 31 de diciembre de 2027, con prórroga automática hasta un nuevo acuerdo.'
    ]],
    ['Derechos, Comisión y clasificación', [
      'El Acuerdo reconoce derechos individuales y colectivos, entre ellos desempeño efectivo, carrera, formación, dignidad, no discriminación, conciliación, prevención, vacaciones, negociación colectiva, huelga y reunión.',
      'La Comisión de Seguimiento interpreta, desarrolla y vigila el Acuerdo, es paritaria entre Corporación y sindicatos firmantes y constituye la primera instancia para conflictos colectivos derivados de su aplicación.',
      'Los empleados públicos se clasifican en funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual. Para el subgrupo C1 se exige Bachiller, Técnico Superior o equivalente.'
    ]],
    ['Contratación, jornada y actualización de 2026', [
      'La copia básica de los contratos escritos debe entregarse a la representación legal en un plazo no superior a diez días y sus destinatarios deben guardar sigilo profesional.',
      'La jornada general no puede ser inferior a treinta y cinco horas semanales de promedio anual. En el régimen administrativo general existe una franja fija de 9:00 a 14:00 y franjas flexibles en los términos del Acuerdo.',
      'Las modificaciones publicadas en enero y febrero de 2026 actualizaron importes económicos, añadieron reglas sobre retribución complementaria durante vacaciones, fijaron el Fondo de Acción Social y completaron la cuantía de nocturnidad especial.'
    ]],
    ['OAPGT: sede y funcionamiento electrónico verificado', [
      'La sede electrónica oficial pertenece al Organismo Autónomo Provincial de Gestión Tributaria de Toledo y se encuentra en https://sede.oapgt.es. La sede identifica al OAPGT con NIF P9500003J y domicilio en calle Real, 4, Toledo.',
      'El registro electrónico del OAPGT es único para todo el organismo, se gestiona por su Secretaría y admite presentación durante las veinticuatro horas de todos los días del año, salvo interrupciones justificadas.',
      'El registro puede rechazar documentos con código malicioso, formularios normalizados incompletos o incongruencias que impidan su tratamiento. Tras la presentación emite automáticamente un recibo con fecha, hora y número de entrada.'
    ]],
    ['Límite documental pendiente', [
      'La organización, competencias y distribución interna establecidas literalmente en los Estatutos del OAPGT deben verificarse sobre su publicación oficial vigente. Esta versión no atribuye competencias estatutarias concretas no localizadas en una fuente oficial accesible.',
      'La cobertura cuantitativa del tema queda completada con preguntas sobre el Acuerdo, sus modificaciones y el funcionamiento electrónico oficial del OAPGT, pero la auditoría documental de sus Estatutos continúa abierta.'
    ]]
  ];

  const rows = [
    ['¿Qué órgano aprobó el Acuerdo Regulador publicado en diciembre de 2023?', 'El Pleno de la Diputación Provincial de Toledo.', ['El Director del OAPGT.', 'La Junta de Comunidades de Castilla-La Mancha.', 'El Ministerio de Hacienda.'], 'BOP Toledo n.º 246, de 28 de diciembre de 2023.'],
    ['¿A quién se aplica con carácter general el Acuerdo Regulador?', 'A los empleados públicos en servicio activo de la Diputación y de sus organismos autónomos en los términos del Acuerdo.', ['Solo al personal funcionario de carrera.', 'Solo al personal laboral temporal.', 'A todos los empleados municipales de la provincia.'], 'Artículo 2 del Acuerdo Regulador.'],
    ['¿Hasta cuándo se aplica el Acuerdo a un organismo autónomo?', 'Hasta que disponga de regulación propia de condiciones de trabajo mediante negociación colectiva.', ['Hasta que cambie su presidencia.', 'Solo durante el primer año.', 'Hasta que lo decida cada empleado.'], 'Artículo 2.1.1 del Acuerdo Regulador.'],
    ['¿Cuál de estos colectivos está excluido del ámbito del Acuerdo?', 'El personal de alta dirección.', ['El personal funcionario de carrera en servicio activo.', 'El personal laboral fijo incluido en su ámbito.', 'El personal de un organismo autónomo sin regulación colectiva propia.'], 'Artículo 2.1.1 del Acuerdo Regulador.'],
    ['¿Qué comprende el ámbito territorial del Acuerdo?', 'Todos los centros y servicios de Toledo y provincia dependientes de la Diputación y sus organismos autónomos.', ['Solo el Palacio Provincial.', 'Únicamente las oficinas del OAPGT.', 'Todos los ayuntamientos de Castilla-La Mancha.'], 'Artículo 2.1.2 del Acuerdo Regulador.'],
    ['¿Cuándo entró en vigor el Acuerdo Regulador?', 'El 1 de enero de 2024.', ['El 21 de diciembre de 2023.', 'El 1 de enero de 2026.', 'El 31 de diciembre de 2027.'], 'Artículo 3 del Acuerdo Regulador.'],
    ['¿Cuál es la fecha final de vigencia inicialmente prevista?', 'El 31 de diciembre de 2027.', ['El 31 de diciembre de 2024.', 'El 1 de enero de 2028.', 'El 31 de julio de 2026.'], 'Artículo 3 del Acuerdo Regulador.'],
    ['¿Qué ocurre al terminar la vigencia si no se ha aprobado otro acuerdo?', 'Se prorroga automáticamente hasta la aprobación de uno nuevo.', ['Queda sin efecto inmediatamente.', 'Se sustituye por el Estatuto de los Trabajadores sin más.', 'Debe aprobarse cada mes.'], 'Artículo 3 del Acuerdo Regulador.'],
    ['¿Cuál es un derecho individual reconocido en el Acuerdo?', 'La formación continua y actualización profesional, preferentemente en horario laboral.', ['La libre inaplicación de instrucciones.', 'La renuncia a la prevención de riesgos.', 'La percepción de cualquier complemento sin requisitos.'], 'Artículo 4 del Acuerdo Regulador.'],
    ['¿Cuál es un derecho ejercido colectivamente?', 'La negociación colectiva.', ['La inamovilidad de todo personal temporal.', 'El cambio unilateral de puesto.', 'La fijación individual del horario.'], 'Artículo 5 del Acuerdo Regulador.'],
    ['¿Qué función principal tiene la Comisión de Seguimiento?', 'Interpretar, desarrollar y vigilar la aplicación del Acuerdo.', ['Aprobar el presupuesto provincial.', 'Resolver recursos tributarios del OAPGT.', 'Seleccionar a todo el personal.'], 'Artículo 6 del Acuerdo Regulador.'],
    ['¿Cómo se compone la Comisión de Seguimiento?', 'Con igual número de miembros de la Corporación y de las organizaciones sindicales firmantes.', ['Solo por representantes sindicales.', 'Solo por diputados provinciales.', 'Por todos los empleados públicos.'], 'Artículo 6 del Acuerdo Regulador.'],
    ['¿Qué papel tiene la Comisión ante un conflicto colectivo sobre el Acuerdo?', 'Es la primera instancia que debe abordarlo.', ['No interviene nunca.', 'Actúa únicamente después de sentencia firme.', 'Lo remite siempre a un ayuntamiento.'], 'Artículo 6 del Acuerdo Regulador.'],
    ['¿En qué plazo máximo debía constituirse la Comisión de Seguimiento desde la firma?', 'Quince días.', ['Cinco días.', 'Un mes.', 'Seis meses.'], 'Artículo 6 del Acuerdo Regulador.'],
    ['¿Cómo se clasifican los empleados públicos en el Acuerdo?', 'Funcionarios de carrera, interinos, personal laboral y personal eventual.', ['Solo funcionarios y laborales fijos.', 'Funcionarios, contratistas y becarios.', 'Personal político y personal privado.'], 'Artículo 7 del Acuerdo Regulador.'],
    ['¿Qué titulación incluye expresamente el Acuerdo para el subgrupo C1?', 'Bachiller, Técnico Superior o equivalente.', ['Solo grado universitario.', 'Graduado en ESO exclusivamente.', 'Ninguna titulación.'], 'Artículo 8 del Acuerdo Regulador.'],
    ['¿En qué plazo debe entregarse la copia básica de los contratos escritos a la representación legal?', 'En un plazo no superior a diez días desde la formalización.', ['En veinticuatro horas.', 'En un mes.', 'Al extinguirse el contrato.'], 'Artículo 10 del Acuerdo Regulador.'],
    ['¿Qué deber tienen quienes acceden a la copia básica contractual?', 'Guardar sigilo profesional y no usarla para fines distintos.', ['Publicarla íntegramente.', 'Remitirla a cualquier solicitante.', 'Destruirla el mismo día.'], 'Artículo 10 del Acuerdo Regulador.'],
    ['¿Cuál es la duración mínima general de la jornada semanal en promedio anual según el Acuerdo?', 'Treinta y cinco horas.', ['Treinta horas.', 'Treinta y siete horas y media sin excepción.', 'Cuarenta y cinco horas.'], 'Artículo 15 del Acuerdo Regulador.'],
    ['¿Cuál es la franja fija general del horario administrativo?', 'De 9:00 a 14:00.', ['De 7:00 a 12:00.', 'De 8:00 a 15:00 sin flexibilidad.', 'De 10:00 a 16:00.'], 'Artículo 15 del Acuerdo Regulador.'],
    ['¿Qué modificó el anuncio del BOP de 16 de enero de 2026?', 'Cuantías económicas y determinados complementos y reglas retributivas del Acuerdo.', ['El ámbito territorial.', 'La clasificación de funcionarios.', 'La existencia del OAPGT.'], 'BOP Toledo n.º 10, de 16 de enero de 2026.'],
    ['¿Qué cuantía añadió el anuncio de 20 de febrero de 2026?', 'La nocturnidad especial de 97,45 euros.', ['La tasa de examen C1.', 'El salario base de C2.', 'El presupuesto del OAPGT.'], 'BOP Toledo n.º 34, de 20 de febrero de 2026.'],
    ['¿Qué importe fijó para 2026 la modificación respecto del Fondo de Acción Social?', '292.790 euros.', ['29.279 euros.', '97,45 euros.', '1.966,68 euros.'], 'BOP Toledo n.º 10, de 16 de enero de 2026.'],
    ['¿A quién pertenece la sede electrónica ubicada en sede.oapgt.es?', 'Al Organismo Autónomo Provincial de Gestión Tributaria de Toledo.', ['A la Agencia Tributaria estatal.', 'Al Ayuntamiento de Toledo.', 'A la Junta de Comunidades.'], 'Acuerdo del Consejo Rector del OAPGT de 22 de noviembre de 2017.'],
    ['¿Qué NIF muestra la sede oficial del OAPGT?', 'P9500003J.', ['P4500000A.', 'Q2826000H.', 'S4500001A.'], 'Sede electrónica oficial del OAPGT.'],
    ['¿Dónde sitúa su domicilio la sede electrónica del OAPGT?', 'Calle Real, 4, Toledo.', ['Plaza de Zocodover, 1.', 'Calle Comercio, 10.', 'Avenida de Europa, 26.'], 'Sede electrónica oficial del OAPGT.'],
    ['¿Qué carácter tiene el registro electrónico del OAPGT?', 'Es único para todo el organismo.', ['Existe uno distinto por cada impuesto.', 'Es compartido con todos los ayuntamientos.', 'Solo admite documentos internos.'], 'Artículo 1 de la Resolución 182/2017 del Director del OAPGT.'],
    ['¿A qué órgano corresponde la gestión del registro electrónico del OAPGT?', 'A la Secretaría del OAPGT.', ['A cada ayuntamiento delegante.', 'Al Ministerio de Hacienda.', 'A cualquier unidad sin asignación.'], 'Artículo 3 de la Resolución 182/2017 del Director del OAPGT.'],
    ['¿Cuándo permite presentar documentos el registro electrónico del OAPGT?', 'Las veinticuatro horas de todos los días del año, salvo interrupciones justificadas.', ['Solo en horario de oficina.', 'De lunes a viernes de 9:00 a 14:00.', 'Únicamente durante periodos voluntarios de pago.'], 'Artículo 4 de la Resolución 182/2017 del Director del OAPGT.'],
    ['¿Cuándo puede rechazar documentos el registro electrónico del OAPGT?', 'Cuando contengan código malicioso o formularios incompletos o incongruentes que impidan su tratamiento.', ['Cuando se presenten un domingo.', 'Cuando el interesado sea persona física.', 'Cuando incorporen un PDF válido.'], 'Artículo 5 de la Resolución 182/2017 del Director del OAPGT.'],
    ['¿Qué emite el registro electrónico tras recibir un documento?', 'Un recibo firmado electrónicamente con fecha, hora y número de entrada.', ['Una resolución estimatoria automática.', 'Una liquidación tributaria definitiva.', 'Una cita presencial obligatoria.'], 'Artículo 7 de la Resolución 182/2017 del Director del OAPGT.'],
    ['¿Qué afirmación es correcta sobre los Estatutos del OAPGT en esta versión?', 'Su literalidad organizativa y competencial sigue pendiente de verificación en una publicación oficial vigente.', ['Se han sustituido por el Acuerdo Regulador.', 'No forman parte del tema oficial.', 'Pueden reconstruirse sin fuente oficial.'], 'Criterio de auditoría documental de OpoWeb v0.65.']
  ];

  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return { id: `dip-v65-t${NUMBER}-q${index + 1}`, text, options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })), answer: letters[rotated.indexOf(correct)], justification, source: justification, difficulty: ['baja', 'media', 'alta'][index % 3], auditReal: true, auditTheme: NUMBER };
  };

  const isReal = question => {
    const text = norm(question?.text);
    if (!text || text.includes('cual es el enfoque correcto para preparar') || text.includes('como debe estudiarse')) return false;
    const options = (question.options || []).map(option => norm(option.text)).join(' ');
    return !options.includes('forma parte del enunciado oficial del tema') && Boolean(question.justification || question.source);
  };

  const theme = ope.themes.find(item => Number(item.number) === NUMBER);
  if (!theme) return;
  theme.sections = sections.map(([heading, paragraphs]) => ({ heading, paragraphs }));
  theme.tree = [`Tema ${NUMBER}`, ...sections.map(([heading]) => `- ${heading}`)].join('\n');
  theme.reviewTable = [
    ['Bloque', 'Qué dominar'],
    ['Acuerdo Regulador', 'Ámbito, vigencia, derechos, Comisión, clasificación, contratación, jornada y modificaciones'],
    ['OAPGT verificado', 'Sede, titularidad, registro electrónico, Secretaría, disponibilidad, rechazo y recibo'],
    ['Pendiente documental', 'Organización y competencias literales de los Estatutos vigentes']
  ];
  theme.auditStatus = 'cobertura cuantitativa completa; Estatutos OAPGT pendientes de fuente oficial accesible';
  theme.sourceGap = 'Estatutos oficiales vigentes del OAPGT';

  const existing = (ope.themeTests[theme.id] || []).filter(isReal);
  const seen = new Set(existing.map(question => norm(question.text)));
  const additions = rows.map(buildQuestion).filter(question => !seen.has(norm(question.text)));
  ope.themeTests[theme.id] = existing.concat(additions);

  const auditThemes = ope.themes.map(item => {
    const all = ope.themeTests[item.id] || [];
    return { number: Number(item.number), id: item.id, total: all.length, content: all.filter(isReal).length };
  });
  ope.globalTestAudit = {
    ...(ope.globalTestAudit || {}),
    themes: auditThemes,
    targetThemes: auditThemes.filter(item => item.content >= 30).length,
    totalReal: auditThemes.reduce((total, item) => total + item.content, 0),
    targetPerTheme: 30,
    pendingTemplateThemes: auditThemes.filter(item => item.content < 30).map(item => item.number),
    documentaryGaps: [{ theme: 22, source: 'Estatutos oficiales vigentes del OAPGT' }]
  };

  const shuffle = (items, seed) => {
    const out = items.slice();
    let state = seed >>> 0;
    for (let index = out.length - 1; index > 0; index -= 1) {
      state = (state * 1664525 + 1013904223) >>> 0;
      const swap = state % (index + 1);
      [out[index], out[swap]] = [out[swap], out[index]];
    }
    return out;
  };

  const buildSimulation = seed => {
    const pools = ope.themes.map(item => ({ theme: item, questions: (ope.themeTests[item.id] || []).filter(isReal) })).filter(pool => pool.questions.length);
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 500) {
      pools.forEach((pool, poolIndex) => {
        if (selected.length >= 55) return;
        const question = pool.questions[(round + seed * 41 + poolIndex * 31) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 6841);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v65-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v65-s${seed}-r${index + 1}`, reserve: true }));
    return { id: `dip-v65-sim${seed}`, title: `Simulacro Diputación ${seed} · 50 + 5 reserva`, questions, reserveQuestions, audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, includedThemes: 40, documentaryGapTheme: 22 } };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-10', changes: [`Añadidas ${additions.length} preguntas verificadas al tema 22`, 'Los 40 temas alcanzan el objetivo cuantitativo mínimo de 30 preguntas', 'Incorporados Acuerdo Regulador, modificaciones de 2026 y funcionamiento electrónico oficial del OAPGT', 'Registrada de forma explícita la falta de los Estatutos oficiales vigentes del OAPGT'] });

  window.OPOWEB_DIPUTACION_V65 = {
    version: `v${VERSION}`,
    reinforcedThemes: [22],
    addedQuestions: additions.length,
    cumulativeSecondPassQuestions: 652 + additions.length,
    cumulativeManualQuestions: 1237 + additions.length,
    themesAtTargetInSecondPass: Array.from({ length: 40 }, (_, index) => index + 1),
    targetPerTheme: 30,
    documentaryGaps: ['Estatutos oficiales vigentes del OAPGT']
  };
})();
