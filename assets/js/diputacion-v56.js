(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.56.0';
  const NUMBER = 17;
  const norm = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const sections = [
    ['Personal empleado público', [
      'La Ley 4/2011 clasifica al personal empleado público de Castilla-La Mancha en personal funcionario de carrera, funcionario interino, personal laboral —fijo, por tiempo indefinido o temporal— y personal eventual.',
      'Las funciones que impliquen participación directa o indirecta en el ejercicio de potestades públicas o en la salvaguardia de los intereses generales corresponden, con carácter exclusivo, al personal funcionario.'
    ]],
    ['Acceso al empleo público', [
      'El acceso se rige por igualdad, mérito y capacidad, junto con publicidad, transparencia, imparcialidad, profesionalidad, independencia técnica, adecuación de las pruebas y agilidad.',
      'Los requisitos deben poseerse al finalizar el plazo de solicitudes y mantenerse hasta la toma de posesión o formalización del contrato.'
    ]],
    ['Sistemas selectivos', [
      'Los procesos son abiertos y garantizan la libre concurrencia. Los sistemas son oposición, concurso y concurso-oposición.',
      'Para personal funcionario de carrera y laboral fijo los sistemas generales son oposición y concurso-oposición. En el concurso-oposición, los méritos no pueden dispensar de superar la oposición.'
    ]],
    ['Adquisición y pérdida', [
      'La condición se adquiere sucesivamente mediante superación del proceso, nombramiento o contrato, acatamiento del ordenamiento, toma de posesión o incorporación y, para laboral fijo, superación del periodo de prueba.',
      'La condición funcionarial puede perderse por renuncia, pérdida de nacionalidad, jubilación total, separación firme, inhabilitación firme o fallecimiento.'
    ]]
  ];

  const raw = [
    ['¿Qué clases de personal empleado público enumera la Ley 4/2011?', 'Funcionario de carrera, funcionario interino, personal laboral y personal eventual.', ['Solo funcionarios de carrera y laborales fijos.', 'Funcionario de carrera, alto cargo y contratista.', 'Personal funcionario, concesionario y voluntario.'], 'Artículo 4 de la Ley 4/2011.'],
    ['¿Qué caracteriza al personal funcionario de carrera?', 'Una relación estatutaria permanente regulada por el Derecho administrativo.', ['Un contrato mercantil de duración indefinida.', 'Un nombramiento temporal por necesidad urgente.', 'Una relación exclusivamente política y de confianza.'], 'Artículo 5 de la Ley 4/2011.'],
    ['¿A quién corresponden en exclusiva las funciones que implican potestades públicas o salvaguardia de intereses generales?', 'Al personal funcionario.', ['A cualquier empleado público o contratista.', 'Exclusivamente al personal eventual.', 'Solo al personal laboral temporal.'], 'Artículo 6.1 de la Ley 4/2011.'],
    ['¿Qué justifica el nombramiento de personal funcionario interino?', 'Razones expresamente justificadas de necesidad y urgencia para funciones no permanentes.', ['La mera conveniencia política sin motivación.', 'La cobertura definitiva de cualquier puesto sin proceso.', 'La realización exclusiva de asesoramiento de confianza.'], 'Artículos 7 y 8 de la Ley 4/2011.'],
    ['¿Qué principios constitucionales presiden la selección de personal?', 'Igualdad, mérito y capacidad.', ['Jerarquía, antigüedad y libre designación.', 'Oportunidad, confianza y discrecionalidad política.', 'Territorialidad, vecindad y residencia.'], 'Artículo 37 de la Ley 4/2011.'],
    ['¿Cuál es la edad mínima general para participar en procesos selectivos?', 'Dieciséis años.', ['Catorce años.', 'Dieciocho años en todo caso.', 'Veintiún años.'], 'Artículo 38.1.c de la Ley 4/2011.'],
    ['¿Cuándo debe poseerse la titulación exigida?', 'Al finalizar el plazo de presentación de solicitudes.', ['En la fecha del examen práctico exclusivamente.', 'Después del nombramiento.', 'Cuando lo solicite cualquier miembro del tribunal.'], 'Artículo 38.1.e de la Ley 4/2011.'],
    ['¿Hasta cuándo deben mantenerse los requisitos de acceso?', 'Hasta la toma de posesión o formalización del contrato.', ['Solo hasta registrar la solicitud.', 'Hasta publicarse la lista provisional.', 'Únicamente hasta terminar el primer ejercicio.'], 'Artículo 38.4 de la Ley 4/2011.'],
    ['¿Qué carácter deben tener, como regla, los procesos selectivos?', 'Abierto y con garantía de libre concurrencia.', ['Restringido a residentes de Castilla-La Mancha.', 'Reservado a personal interino.', 'Confidencial hasta el nombramiento.'], 'Artículo 46.1 de la Ley 4/2011.'],
    ['¿Qué sistemas selectivos prevé la Ley 4/2011?', 'Oposición, concurso y concurso-oposición.', ['Entrevista, sorteo y oposición.', 'Concurso de traslados y libre designación.', 'Prueba práctica y nombramiento directo.'], 'Artículo 46.2 de la Ley 4/2011.'],
    ['En un concurso-oposición, ¿pueden los méritos dispensar de superar la oposición?', 'No, nunca.', ['Sí, cuando alcanzan el máximo del baremo.', 'Sí, si hay experiencia pública superior a diez años.', 'Solo en el subgrupo C2.'], 'Artículo 46.5 de la Ley 4/2011.'],
    ['¿Cuáles son los sistemas generales para seleccionar personal funcionario de carrera y laboral fijo?', 'Oposición y concurso-oposición.', ['Únicamente concurso.', 'Libre designación y entrevista.', 'Bolsa de trabajo y comisión de servicios.'], 'Artículo 47.1 de la Ley 4/2011.'],
    ['¿Qué requisito forma parte de la adquisición de la condición de funcionario de carrera?', 'La toma de posesión dentro del plazo establecido.', ['La residencia obligatoria en la capital de provincia.', 'La afiliación a un sindicato.', 'La superación de un concurso de traslados posterior.'], 'Artículo 55.1 de la Ley 4/2011.'],
    ['¿Cuál de estas es causa de pérdida de la condición de funcionario de carrera?', 'La sanción firme de separación del servicio.', ['El cambio voluntario de domicilio.', 'La baja médica temporal.', 'El disfrute de vacaciones.'], 'Artículo 56 de la Ley 4/2011.'],
    ['¿Cómo debe formularse la renuncia a la condición funcionarial?', 'Por escrito y con aceptación expresa de la Administración.', ['Verbalmente ante dos testigos.', 'Mediante abandono del puesto.', 'Por correo sin necesidad de aceptación.'], 'Artículo 57 de la Ley 4/2011.']
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v56-t${NUMBER}-q${index + 1}`,
      text,
      options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })),
      answer: letters[rotated.indexOf(correct)],
      justification,
      source: justification,
      difficulty: ['baja', 'media', 'alta'][index % 3],
      auditReal: true,
      auditTheme: NUMBER
    };
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
  theme.reviewTable = [['Bloque', 'Qué dominar'], ...sections.map(([heading]) => [heading, 'Concepto, regla, excepciones y consecuencias'])];

  const existing = ope.themeTests[theme.id] || [];
  const seen = new Set(existing.map(question => norm(question.text)));
  const additions = raw.map(buildQuestion).filter(question => !seen.has(norm(question.text)));
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
    pendingTemplateThemes: auditThemes.filter(item => item.content < 30).map(item => item.number)
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
    const pools = ope.themes
      .filter(item => Number(item.number) !== 22)
      .map(item => ({ theme: item, questions: (ope.themeTests[item.id] || []).filter(isReal) }))
      .filter(pool => pool.questions.length);
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 500) {
      pools.forEach((pool, poolIndex) => {
        if (selected.length >= 55) return;
        const question = pool.questions[(round + seed * 7 + poolIndex * 3) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5609);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v56-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v56-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v56-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions,
      reserveQuestions,
      audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, excludedPendingThemes: [22] }
    };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Añadidas 15 preguntas reales al tema 17',
      'Tema 17 elevado al objetivo mínimo de 30 preguntas reales',
      'Desarrollado el bloque de personal y acceso al empleo público de Castilla-La Mancha',
      'Regenerados los tres simulacros con exclusión del tema 22 pendiente'
    ]
  });

  window.OPOWEB_DIPUTACION_V56 = {
    version: `v${VERSION}`,
    reinforcedThemes: [17],
    addedQuestions: 15,
    cumulativeSecondPassQuestions: 255,
    cumulativeManualQuestions: 840,
    themesAtTargetInSecondPass: Array.from({ length: 17 }, (_, index) => index + 1),
    targetPerTheme: 30
  };
})();
