(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.57.0';
  const NUMBER = 18;
  const norm = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const sections = [
    ['Derechos individuales y colectivos', [
      'La Ley 4/2011 reconoce derechos individuales como inamovilidad del personal funcionario de carrera, desempeño efectivo, carrera y promoción, retribuciones, formación, dignidad, no discriminación, conciliación, seguridad y salud, vacaciones y prestaciones sociales.',
      'Los derechos individuales ejercidos colectivamente incluyen libertad sindical, negociación colectiva, huelga con mantenimiento de los servicios esenciales, conflicto colectivo y reunión.'
    ]],
    ['Vacaciones, deberes y formación', [
      'El mínimo anual de vacaciones del personal funcionario es de veintidós días laborables, proporcional si el tiempo de servicio es menor. Como regla, no se sustituyen por compensación económica salvo finalización de la relación antes de disfrutarlas.',
      'La actuación debe ajustarse al código de conducta del TREBEP. La formación es simultáneamente derecho y deber cuando resulte necesaria para desempeñar adecuadamente el puesto o corregir carencias detectadas.'
    ]],
    ['Situaciones administrativas', [
      'El personal funcionario de carrera puede encontrarse en servicio activo, servicios especiales, servicio en otras Administraciones, expectativa de destino, excedencia forzosa, excedencias por cuidado, violencia de género, prestación de servicios en el sector público, interés particular, agrupación familiar y suspensión de funciones.',
      'La situación concreta determina reserva de plaza, retribuciones, cómputo de tiempo, obligaciones de participación y forma de reingreso.'
    ]],
    ['Excedencias, suspensión y reingreso', [
      'La expectativa de destino dura como máximo un año y conlleva obligaciones de aceptar puestos, concursar y asistir a formación; agotado el plazo se pasa a excedencia forzosa.',
      'La excedencia por violencia de género no exige servicios previos ni permanencia mínima. La excedencia por interés particular exige, con carácter general, tres años de servicios efectivos inmediatamente anteriores y está subordinada a necesidades del servicio.',
      'La suspensión puede ser firme o provisional. El reingreso sin reserva de plaza se articula mediante concurso, libre designación o, si procede, adscripción provisional.'
    ]]
  ];

  const raw = [
    ['¿Qué derecho individual corresponde específicamente al personal funcionario de carrera?', 'La inamovilidad en su condición.', ['La huelga sin garantía de servicios esenciales.', 'La libre designación para cualquier puesto.', 'La reserva automática de toda plaza ocupada.'], 'Artículo 96.a de la Ley 4/2011.'],
    ['¿Cómo debe facilitarse preferentemente la formación continua del personal empleado público?', 'En horario laboral.', ['Exclusivamente fuera de la jornada.', 'Solo durante vacaciones.', 'Únicamente mediante formación privada.'], 'Artículo 96.g de la Ley 4/2011.'],
    ['¿Cuál de estos derechos se ejerce de forma colectiva?', 'La negociación colectiva y participación en las condiciones de trabajo.', ['La percepción de trienios.', 'La jubilación.', 'La defensa jurídica individual.'], 'Artículo 97.b de la Ley 4/2011.'],
    ['¿Qué condición acompaña al ejercicio del derecho de huelga?', 'El mantenimiento de los servicios esenciales de la comunidad.', ['La autorización previa del superior jerárquico.', 'La renuncia temporal a la condición funcionarial.', 'La suspensión automática de retribuciones durante un mes.'], 'Artículo 97.c de la Ley 4/2011.'],
    ['¿Cuál es el mínimo anual ordinario de vacaciones del personal funcionario?', 'Veintidós días laborables.', ['Veinte días naturales.', 'Treinta días laborables.', 'Quince días hábiles.'], 'Artículo 108.1 de la Ley 4/2011.'],
    ['¿Cuándo pueden sustituirse las vacaciones por compensación económica?', 'Cuando finalice la relación antes de poder disfrutarlas.', ['Siempre que lo pida el empleado.', 'Cuando existan necesidades ordinarias del servicio.', 'Nunca, sin excepción.'], 'Artículo 108.4 de la Ley 4/2011.'],
    ['¿A qué normas remite la Ley 4/2011 para concretar el código de conducta?', 'A los artículos 52 a 54 del Estatuto Básico del Empleado Público.', ['A la Ley de Contratos del Sector Público.', 'Al Código Penal exclusivamente.', 'A la normativa presupuestaria local.'], 'Artículo 109.1 de la Ley 4/2011.'],
    ['¿Qué implica el deber de formación?', 'Asistir a actividades obligatorias necesarias para el puesto o para corregir carencias.', ['Realizar únicamente cursos voluntarios.', 'Obtener un título universitario cada cinco años.', 'Formarse siempre fuera de jornada y sin medios públicos.'], 'Artículo 112 de la Ley 4/2011.'],
    ['¿Cuál de estas es una situación administrativa del personal funcionario de carrera?', 'La expectativa de destino.', ['La excedencia mercantil.', 'La comisión sindical permanente.', 'La baja contractual indefinida.'], 'Artículo 113 de la Ley 4/2011.'],
    ['¿Quién permanece en servicio activo aunque no esté trabajando efectivamente por ese motivo?', 'Quien disfruta vacaciones o se encuentra en incapacidad temporal.', ['Quien está en excedencia por interés particular.', 'Quien cumple suspensión firme superior a seis meses.', 'Quien ocupa otro puesto como laboral fijo en el sector público.'], 'Artículo 114.3 de la Ley 4/2011.'],
    ['En servicios especiales, ¿qué retribución funcionarial puede seguir percibiéndose?', 'Los trienios reconocidos.', ['El complemento íntegro del puesto de origen.', 'Todos los incentivos del puesto anterior.', 'Ninguna retribución vinculada a antigüedad.'], 'Artículo 115.2 de la Ley 4/2011.'],
    ['¿Cuál es la duración máxima de la expectativa de destino?', 'Un año.', ['Seis meses.', 'Dos años.', 'Cinco años.'], 'Artículo 117.5 de la Ley 4/2011.'],
    ['¿Qué ocurre al agotar el plazo máximo en expectativa de destino?', 'Se pasa a excedencia forzosa.', ['Se pierde automáticamente la condición funcionarial.', 'Se produce jubilación forzosa.', 'Se obtiene destino definitivo de oficio.'], 'Artículos 117.5 y 118.1 de la Ley 4/2011.'],
    ['¿Qué requisito previo exige la excedencia por violencia de género?', 'Ningún tiempo mínimo de servicios previos.', ['Tres años de servicio activo.', 'Un año de permanencia mínima.', 'Autorización del órgano de representación sindical.'], 'Artículo 120.1 de la Ley 4/2011.'],
    ['¿Qué periodo mínimo de servicios efectivos exige, con carácter general, la excedencia por interés particular?', 'Tres años inmediatamente anteriores.', ['Seis meses.', 'Un año.', 'Cinco años.'], 'Artículo 122.1 de la Ley 4/2011.'],
    ['¿Qué efectos generales tienen las excedencias por interés particular y agrupación familiar?', 'No reservan plaza, no devengan retribuciones y el tiempo no computa con carácter general.', ['Reservan siempre el mismo puesto y todas las retribuciones.', 'Computan íntegramente para carrera y trienios.', 'Mantienen únicamente el complemento de destino.'], 'Artículo 124.1 de la Ley 4/2011.'],
    ['¿Cuándo determina la suspensión firme la pérdida del puesto de trabajo?', 'Cuando excede de seis meses.', ['Desde el primer día.', 'Solo cuando supera dos años.', 'Nunca, porque siempre existe reserva.'], 'Artículo 125.3 de la Ley 4/2011.'],
    ['¿Qué percibe el personal en suspensión provisional?', 'Retribuciones básicas y, en su caso, prestaciones familiares por hijo a cargo.', ['Todas las retribuciones complementarias.', 'Ninguna cantidad en ningún caso.', 'Solo indemnizaciones por razón del servicio.'], 'Artículo 125.5 de la Ley 4/2011.'],
    ['¿Cómo puede producirse el reingreso sin reserva de plaza?', 'Mediante concurso, libre designación o adscripción provisional cuando proceda.', ['Por reincorporación automática al último puesto.', 'Solo mediante un nuevo proceso selectivo de ingreso.', 'Exclusivamente por decisión judicial.'], 'Artículo 126.2 de la Ley 4/2011.']
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v57-t${NUMBER}-q${index + 1}`,
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
  theme.reviewTable = [['Bloque', 'Qué dominar'], ...sections.map(([heading]) => [heading, 'Concepto, requisitos, efectos, plazos y excepciones'])];

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
        const question = pool.questions[(round + seed * 11 + poolIndex * 5) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5717);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v57-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v57-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v57-sim${seed}`,
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
      'Añadidas 19 preguntas reales al tema 18',
      'Tema 18 elevado al objetivo mínimo de 30 preguntas reales',
      'Desarrollados derechos, deberes y situaciones administrativas de la Ley 4/2011',
      'Regenerados los tres simulacros con exclusión del tema 22 pendiente'
    ]
  });

  window.OPOWEB_DIPUTACION_V57 = {
    version: `v${VERSION}`,
    reinforcedThemes: [18],
    addedQuestions: additions.length,
    cumulativeSecondPassQuestions: 255 + additions.length,
    cumulativeManualQuestions: 840 + additions.length,
    themesAtTargetInSecondPass: Array.from({ length: 18 }, (_, index) => index + 1),
    targetPerTheme: 30
  };
})();
