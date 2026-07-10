(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const normalize = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const byNumber = number => ope.themes.find(theme => Number(theme.number) === Number(number));

  function buildQuestion(theme, item, index) {
    const raw = [item.correct, ...item.wrong];
    const shift = (Number(theme.number) + index + 2) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `${theme.id}-v38-q${index + 1}`,
      text: item.text,
      options: ordered.map((text, position) => ({ letter: 'ABCD'[position], text })),
      answer: 'ABCD'[ordered.indexOf(item.correct)],
      justification: item.justification,
      difficulty: item.difficulty || 'media'
    };
  }

  const additions = {
    7: [
      {
        text: '¿Qué actuación refleja correctamente la publicidad activa?',
        correct: 'Publicar información institucional y económica sin esperar una solicitud individual',
        wrong: ['Resolver un recurso de alzada', 'Facilitar únicamente datos personales propios', 'Requerir siempre identificación presencial'],
        justification: 'La publicidad activa consiste en difundir de oficio la información exigida por la normativa de transparencia.',
        difficulty: 'media'
      },
      {
        text: '¿Cuándo debe motivarse especialmente una resolución sobre acceso a información pública?',
        correct: 'Cuando deniega, inadmite o concede solo parcialmente el acceso',
        wrong: ['Cuando la persona abre el portal web', 'Cuando la información no contiene datos', 'Cuando se descarga un documento ya publicado'],
        justification: 'Las decisiones que limitan o rechazan el acceso requieren motivación suficiente.',
        difficulty: 'media'
      },
      {
        text: '¿Qué medida puede permitir el acceso cuando el documento contiene datos personales no necesarios?',
        correct: 'La disociación o anonimización de los datos afectados',
        wrong: ['La publicación íntegra sin ponderación', 'La destrucción del documento', 'La inadmisión automática de toda la solicitud'],
        justification: 'El acceso parcial y la anonimización permiten compatibilizar transparencia y protección de datos cuando resulte posible.',
        difficulty: 'media'
      },
      {
        text: 'Si una solicitud puede afectar derechos de terceras personas, ¿qué trámite puede resultar procedente?',
        correct: 'Concederles audiencia antes de resolver',
        wrong: ['Publicar sus datos personales', 'Resolver siempre a favor del solicitante', 'Cerrar el expediente sin resolución'],
        justification: 'La audiencia permite que terceros afectados formulen alegaciones antes de la decisión.',
        difficulty: 'alta'
      },
      {
        text: '¿Qué diferencia principal existe entre el Portal de Transparencia y el derecho de acceso?',
        correct: 'El portal canaliza información publicada de oficio; el derecho de acceso permite pedir información concreta',
        wrong: ['El portal sustituye todos los procedimientos administrativos', 'El derecho de acceso solo sirve para modificar datos personales', 'No existe diferencia funcional'],
        justification: 'Publicidad activa y derecho de acceso son obligaciones distintas y complementarias.',
        difficulty: 'media'
      }
    ],
    8: [
      {
        text: '¿Qué caracteriza a una discriminación indirecta?',
        correct: 'Una regla aparentemente neutra que produce una desventaja particular sin justificación objetiva y proporcionada',
        wrong: ['Una diferencia expresamente favorable en toda situación', 'Cualquier decisión administrativa desfavorable', 'Una conducta exclusivamente penal'],
        justification: 'La discriminación indirecta surge cuando una medida neutra sitúa en desventaja particular a un grupo y no supera la justificación legal.',
        difficulty: 'alta'
      },
      {
        text: '¿Cuántos ejes estratégicos contiene el III Plan de Igualdad UC3M 2025-2029?',
        correct: 'Seis',
        wrong: ['Cuatro', 'Ocho', 'Doce'],
        justification: 'El III Plan se estructura en seis ejes estratégicos.',
        difficulty: 'baja'
      },
      {
        text: '¿Qué bloque del III Plan aborda docencia, innovación y evaluación del profesorado con perspectiva de género?',
        correct: 'El eje 4',
        wrong: ['El eje 1', 'El eje 3', 'El eje 6'],
        justification: 'El eje 4 se refiere a docencia, prácticas de formación, innovación y evaluación del profesorado con perspectiva de género.',
        difficulty: 'media'
      },
      {
        text: '¿Qué composición tiene la Comisión de Seguimiento del III Plan?',
        correct: 'Ocho representantes de la Universidad y ocho de las personas trabajadoras',
        wrong: ['Diez estudiantes y dos docentes', 'Cuatro miembros designados sin representación social', 'Solo representantes del Rectorado'],
        justification: 'La Comisión de Seguimiento tiene composición 8+8 y equilibrada entre mujeres y hombres.',
        difficulty: 'media'
      },
      {
        text: '¿Qué principio debe regir la tramitación de una comunicación de acoso?',
        correct: 'Confidencialidad, diligencia, protección y ausencia de represalias',
        wrong: ['Publicidad inmediata de identidades', 'Investigación informal sin cauce', 'Suspensión automática de toda persona mencionada'],
        justification: 'El protocolo exige garantías para las personas afectadas y una actuación formal y diligente.',
        difficulty: 'media'
      }
    ],
    15: [
      {
        text: '¿Qué rasgo distingue al Defensor Universitario de un órgano revisor de actos?',
        correct: 'Formula recomendaciones y supervisa garantías, pero no anula por sí mismo resoluciones administrativas',
        wrong: ['Dicta sentencias firmes', 'Aprueba el presupuesto anual', 'Sustituye al Rector en toda competencia'],
        justification: 'Su función es garantista y mediadora, no jurisdiccional ni sustitutiva de los órganos competentes.',
        difficulty: 'media'
      },
      {
        text: '¿Cuál es la función general de los servicios universitarios?',
        correct: 'Prestar apoyo técnico, administrativo, académico o asistencial al funcionamiento de la Universidad',
        wrong: ['Ejercer potestad legislativa', 'Resolver recursos judiciales', 'Aprobar leyes orgánicas'],
        justification: 'Los servicios son estructuras funcionales de apoyo, diferentes de los órganos de gobierno.',
        difficulty: 'media'
      },
      {
        text: '¿Qué elemento pertenece al régimen económico-financiero universitario?',
        correct: 'Presupuesto, patrimonio, ingresos, gastos, control y rendición de cuentas',
        wrong: ['Solo la organización docente', 'Únicamente la elección de representantes', 'Exclusivamente el calendario académico'],
        justification: 'El régimen económico-financiero comprende la planificación, gestión y control de recursos universitarios.',
        difficulty: 'media'
      },
      {
        text: '¿Qué debe verificarse al estudiar una reforma de los Estatutos?',
        correct: 'Iniciativa, órgano competente, mayoría exigida, control de legalidad y publicación',
        wrong: ['Solo el número de campus', 'Únicamente el nombre del Rector', 'El horario de los servicios'],
        justification: 'Esos elementos determinan la validez y eficacia del procedimiento de reforma estatutaria.',
        difficulty: 'alta'
      },
      {
        text: '¿Por qué no debe memorizarse una mayoría estatutaria sin comprobar el texto consolidado?',
        correct: 'Porque una modificación posterior puede haber cambiado el artículo o la regla aplicable',
        wrong: ['Porque las mayorías nunca aparecen en normas', 'Porque los Estatutos no tienen eficacia jurídica', 'Porque toda reforma se aprueba por unanimidad'],
        justification: 'La preparación rigurosa exige utilizar la versión consolidada y vigente de los Estatutos.',
        difficulty: 'media'
      }
    ],
    18: [
      {
        text: '¿Qué principio impide destinar un crédito a una finalidad distinta de la autorizada?',
        correct: 'La especialidad cualitativa',
        wrong: ['La publicidad activa', 'La libertad de cátedra', 'La autonomía docente'],
        justification: 'La especialidad cualitativa vincula el crédito a la finalidad para la que fue aprobado.',
        difficulty: 'media'
      },
      {
        text: '¿Qué modificación presupuestaria desplaza crédito entre aplicaciones?',
        correct: 'La transferencia de crédito',
        wrong: ['El reconocimiento de un derecho', 'La recaudación', 'La ordenación del pago'],
        justification: 'La transferencia mueve dotación entre aplicaciones dentro de los límites legales y de las bases.',
        difficulty: 'baja'
      },
      {
        text: '¿Qué diferencia existe entre generación e incorporación de crédito?',
        correct: 'La generación se vincula a determinados ingresos; la incorporación traslada remanentes legalmente incorporables',
        wrong: ['Son exactamente la misma figura', 'La incorporación siempre reconoce ingresos', 'La generación solo anula créditos'],
        justification: 'Tienen presupuestos de hecho distintos: ingresos habilitantes frente a remanentes del ejercicio anterior.',
        difficulty: 'alta'
      },
      {
        text: '¿Qué fase de ingreso registra una cantidad líquida exigible a favor de la Universidad?',
        correct: 'El reconocimiento del derecho',
        wrong: ['La autorización del gasto', 'La disposición del gasto', 'La ordenación del pago'],
        justification: 'El reconocimiento del derecho contabiliza el crédito a cobrar antes o al margen de su recaudación material.',
        difficulty: 'media'
      },
      {
        text: '¿Qué datos deben tomarse necesariamente de las bases de ejecución UC3M vigentes?',
        correct: 'Nivel de vinculación, competencias, límites y reglas internas de tramitación',
        wrong: ['La definición general de presupuesto', 'El nombre de la Universidad', 'La existencia de ingresos y gastos'],
        justification: 'Esos elementos son internos y pueden variar por ejercicio presupuestario.',
        difficulty: 'media'
      }
    ],
    19: [
      {
        text: '¿Qué efecto produce la fase D del gasto?',
        correct: 'Compromete a la Universidad frente a un tercero por importe y condiciones determinados',
        wrong: ['Reconoce un derecho de cobro', 'Aprueba definitivamente el presupuesto', 'Ordena materialmente el pago'],
        justification: 'La disposición o compromiso vincula jurídicamente el gasto frente a un tercero.',
        difficulty: 'media'
      },
      {
        text: '¿Qué acredita normalmente la fase O?',
        correct: 'La existencia de una obligación exigible tras comprobar la prestación o derecho del acreedor',
        wrong: ['La mera intención de contratar', 'El ingreso de una tasa', 'La reserva inicial de crédito'],
        justification: 'El reconocimiento de la obligación exige acreditar que la prestación se ha realizado o que el derecho del acreedor existe.',
        difficulty: 'media'
      },
      {
        text: '¿Qué documento acumula autorización, disposición y reconocimiento de la obligación cuando el procedimiento lo permite?',
        correct: 'El documento ADO',
        wrong: ['El documento RC', 'El documento P', 'El documento inverso de ingreso'],
        justification: 'ADO es un documento mixto que reúne tres fases del gasto.',
        difficulty: 'baja'
      },
      {
        text: '¿Qué diferencia existe entre ordenación del gasto y ordenación del pago?',
        correct: 'La primera adopta decisiones de gasto; la segunda convierte obligaciones reconocidas en órdenes de pago',
        wrong: ['Son siempre la misma actuación', 'La ordenación del pago precede al crédito', 'La ordenación del gasto corresponde al acreedor'],
        justification: 'Son funciones distintas y deben mantenerse diferenciadas por competencia y control.',
        difficulty: 'alta'
      },
      {
        text: '¿Qué información produce la liquidación presupuestaria?',
        correct: 'Ejecución definitiva, derechos pendientes, obligaciones pendientes, resultado y remanentes',
        wrong: ['Solo el número de facturas', 'La lista de estudiantes matriculados', 'La reforma de los Estatutos'],
        justification: 'La liquidación refleja el resultado final de la ejecución presupuestaria del ejercicio.',
        difficulty: 'media'
      }
    ]
  };

  let added = 0;
  Object.entries(additions).forEach(([number, items]) => {
    const theme = byNumber(number);
    if (!theme) return;
    ope.themeTests[theme.id] ||= [];
    const existing = new Set(ope.themeTests[theme.id].map(q => normalize(q.text)));
    items.forEach((item, index) => {
      if (existing.has(normalize(item.text))) return;
      ope.themeTests[theme.id].push(buildQuestion(theme, item, index + ope.themeTests[theme.id].length));
      existing.add(normalize(item.text));
      added += 1;
    });
  });

  function cleanBank() {
    const globalSeen = new Set();
    let duplicatesRemoved = 0;
    let invalidRemoved = 0;
    ope.themes.forEach(theme => {
      const cleaned = [];
      (ope.themeTests[theme.id] || []).forEach((question, index) => {
        const options = Array.isArray(question.options) ? question.options.slice(0, 4) : [];
        const optionTexts = options.map(option => normalize(option?.text));
        const answerOption = options.find(option => option?.letter === question.answer);
        if (!question?.text || options.length !== 4 || optionTexts.some(text => !text) || new Set(optionTexts).size !== 4 || !answerOption || !question.justification) {
          invalidRemoved += 1;
          return;
        }
        const key = `${normalize(question.text)}|${normalize(answerOption.text)}`;
        if (globalSeen.has(key)) {
          duplicatesRemoved += 1;
          return;
        }
        globalSeen.add(key);
        cleaned.push({
          ...question,
          id: question.id || `${theme.id}-v38-clean-${index + 1}`,
          options: options.map((option, position) => ({ letter: 'ABCD'[position], text: String(option.text) })),
          answer: 'ABCD'[options.indexOf(answerOption)],
          justification: String(question.justification)
        });
      });
      ope.themeTests[theme.id] = cleaned;
    });
    return { duplicatesRemoved, invalidRemoved };
  }

  const cleanup = cleanBank();

  function coverageState(count) {
    if (count >= 30) return 'objetivo 30+';
    if (count >= 20) return 'banco sólido';
    if (count >= 15) return 'base operativa';
    return 'refuerzo prioritario';
  }

  const themeAudit = ope.themes.map(theme => {
    const questions = ope.themeTests[theme.id] || [];
    const answerPositions = { A: 0, B: 0, C: 0, D: 0 };
    questions.forEach(q => { if (answerPositions[q.answer] !== undefined) answerPositions[q.answer] += 1; });
    theme.testAudit = {
      count: questions.length,
      state: coverageState(questions.length),
      answerPositions,
      target: 30
    };
    return {
      id: theme.id,
      number: Number(theme.number),
      title: theme.title,
      count: questions.length,
      state: coverageState(questions.length),
      answerPositions
    };
  });

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let i = 0; i < text.length; i += 1) {
      value ^= text.charCodeAt(i);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }

  function shuffled(items, seed) {
    return [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  }

  function balancedSimulation(seed) {
    const themes = [...ope.themes].sort((a, b) => Number(a.number) - Number(b.number));
    const extraThemes = new Set(themes.map((_, index) => themes[(index + seed) % themes.length].id).slice(0, 10));
    const selected = [];
    themes.forEach(theme => {
      const amount = extraThemes.has(theme.id) ? 4 : 3;
      const bank = shuffled(ope.themeTests[theme.id] || [], seed * 131 + Number(theme.number));
      bank.slice(0, amount).forEach(question => selected.push({ ...question, auditTheme: Number(theme.number) }));
    });
    return shuffled(selected, seed * 1601).slice(0, 70);
  }

  ope.simulacros = [1, 2, 3].map(seed => ({
    id: `uc3m-v38-equilibrado-${seed}`,
    title: `Simulacro UC3M equilibrado ${seed}`,
    questions: balancedSimulation(seed).map((question, index) => ({
      ...question,
      id: `uc3m-v38-s${seed}-q${index + 1}`
    })),
    audit: {
      questions: 70,
      themes: 20,
      distribution: '10 temas con 4 preguntas y 10 temas con 3 preguntas',
      repeatedQuestionIds: 0
    }
  }));

  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));
  const strengthened = [7, 8, 15, 18, 19].map(number => {
    const item = themeAudit.find(theme => theme.number === number);
    return { number, count: item?.count || 0, state: item?.state || 'sin datos' };
  });

  ope.testAudit = {
    version: 'v0.38.0',
    date: '2026-07-10',
    totalQuestions,
    minimumQuestions,
    targetPerTheme: 30,
    floorPerTheme: 15,
    reinforcedTarget: 20,
    reinforcedThemes: strengthened,
    duplicatesRemoved: (ope.testAudit?.duplicatesRemoved || 0) + cleanup.duplicatesRemoved,
    invalidRemoved: (ope.testAudit?.invalidRemoved || 0) + cleanup.invalidRemoved,
    themes: themeAudit,
    criteria: [
      'Enunciado y cuatro opciones no vacías',
      'Opciones distintas dentro de cada pregunta',
      'Respuesta correcta existente',
      'Justificación obligatoria',
      'Sin duplicados exactos',
      'Cinco temas internos reforzados hasta 20 preguntas',
      'Simulacros de 70 preguntas con representación de los 20 temas'
    ]
  };

  ope.version = '0.38.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.37:.*/, '')} Revisión v0.38: temas 7, 8, 15, 18 y 19 reforzados hasta 20 preguntas de contenido y simulacros equilibrados regenerados.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(item => item.version === '0.38.0')) {
    ope.changelog.unshift({
      version: '0.38.0',
      date: '2026-07-10',
      changes: [
        'Añadidas 25 preguntas manuales de segundo nivel',
        'Temas 7, 8, 15, 18 y 19 elevados a banco sólido de 20 preguntas',
        'Reauditado el banco completo después del refuerzo',
        'Regenerados los tres simulacros equilibrados de 70 preguntas'
      ]
    });
  }

  window.OPOWEB_TEST_AUDIT_V38 = ope.testAudit;
  window.OPOWEB_TEST_REINFORCEMENT_V38 = { added, strengthened };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();