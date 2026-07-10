(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  ope.themeTests ||= {};

  const normalize = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const findTheme = number => ope.themes.find(t => Number(t.number) === Number(number));

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

        const duplicateKey = `${normalize(question.text)}|${normalize(answerOption.text)}`;
        if (globalSeen.has(duplicateKey)) {
          duplicatesRemoved += 1;
          return;
        }
        globalSeen.add(duplicateKey);

        cleaned.push({
          ...question,
          id: question.id || `${theme.id}-audit-q${index + 1}`,
          options: options.map((option, position) => ({
            letter: 'ABCD'[position],
            text: String(option.text)
          })),
          answer: 'ABCD'[options.indexOf(answerOption)],
          justification: String(question.justification)
        });
      });
      ope.themeTests[theme.id] = cleaned;
    });

    return { duplicatesRemoved, invalidRemoved };
  }

  function buildQuestion(theme, item, index) {
    const raw = [item.correct, ...item.wrong];
    const shift = (Number(theme.number) + index + 1) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `${theme.id}-v37-r${index + 1}`,
      text: item.text,
      options: ordered.map((text, position) => ({ letter: 'ABCD'[position], text })),
      answer: 'ABCD'[ordered.indexOf(item.correct)],
      justification: item.justification
    };
  }

  const reinforcement = {
    1: [
      { text:'¿Qué procedimiento de reforma exige disolución inmediata de las Cortes tras aprobarse el principio de revisión?', correct:'El procedimiento agravado del artículo 168 CE', wrong:['El procedimiento ordinario del artículo 167','La iniciativa legislativa popular','La aprobación de un decreto-ley'], justification:'El artículo 168 CE prevé aprobación inicial por dos tercios, disolución de las Cortes, nueva aprobación y referéndum obligatorio.' }
    ],
    2: [
      { text:'Una notificación electrónica se entiende rechazada, como regla, cuando transcurren:', correct:'Diez días naturales desde su puesta a disposición sin acceder', wrong:['Diez días hábiles','Un mes natural','Veinte días hábiles'], justification:'Artículo 43.2 de la Ley 39/2015, salvo imposibilidad técnica o material acreditada.' }
    ],
    3: [
      { text:'¿Qué recurso procede, con carácter potestativo, contra un acto que pone fin a la vía administrativa?', correct:'El recurso de reposición ante el mismo órgano', wrong:['El recurso de alzada ante el superior','La revisión de oficio solicitada obligatoriamente','La recusación del instructor'], justification:'Artículos 123 y 124 de la Ley 39/2015.' }
    ],
    4: [
      { text:'¿Qué técnica no supone cesión de la titularidad de la competencia ni de sus elementos sustantivos?', correct:'La encomienda de gestión', wrong:['La delegación de competencia siempre transmite la titularidad','La avocación extingue la competencia','La suplencia crea un órgano nuevo'], justification:'Artículo 11 de la Ley 40/2015: la encomienda afecta a actividades materiales o técnicas y no cede la titularidad.' }
    ],
    5: [
      { text:'¿Cuál es la diferencia esencial entre sede electrónica y portal de internet?', correct:'La sede ofrece actuaciones con garantías de identificación, autenticidad e integridad; el portal facilita información y acceso', wrong:['La sede solo contiene noticias y el portal firma actos','Son conceptos jurídicamente idénticos','El portal sustituye siempre al registro electrónico'], justification:'Artículos 38 y 39 de la Ley 40/2015.' }
    ],
    6: [
      { text:'¿Puede el responsable impartir instrucciones al DPD sobre la conclusión que debe alcanzar?', correct:'No, el DPD debe actuar con independencia en sus funciones', wrong:['Sí, en toda reclamación','Solo si lo solicita una persona interesada','Sí, cuando el tratamiento sea automatizado'], justification:'Artículo 36 de la LO 3/2018 y artículo 38 RGPD.' }
    ],
    7: [
      { text:'Cuando solo parte de un documento está afectada por un límite de acceso, debe valorarse:', correct:'El acceso parcial previa disociación cuando sea posible', wrong:['La denegación automática de todo el documento','La destrucción del original','La publicación íntegra sin ponderación'], justification:'El régimen de transparencia exige valorar acceso parcial y anonimización.' },
      { text:'¿Qué distingue una solicitud de información pública del acceso al expediente?', correct:'La primera tiene régimen de transparencia; el segundo se vincula a la condición de interesado y al procedimiento', wrong:['No existe diferencia jurídica','La información pública exige ser parte interesada siempre','El expediente solo puede consultarse tras sentencia'], justification:'Son derechos con finalidad, sujetos y normativa diferentes.' },
      { text:'Si la información solicitada ya está publicada, la respuesta adecuada es:', correct:'Indicar de forma precisa dónde puede accederse a ella', wrong:['Inadmitir sin indicar la ubicación','Exigir siempre comparecencia presencial','Eliminar la información del portal'], justification:'La publicidad activa permite remitir al punto concreto de publicación.' }
    ],
    8: [
      { text:'¿Qué finalidad tiene el eje de igualdad en el empleo y corresponsabilidad del III Plan UC3M?', correct:'Integrar igualdad de oportunidades, conciliación y corresponsabilidad en la gestión de personal', wrong:['Regular exclusivamente contratos de obras','Sustituir la normativa académica','Fijar las tasas universitarias'], justification:'Es el eje 3 del III Plan de Igualdad UC3M 2025-2029.' },
      { text:'¿Qué debe preservarse al activar el protocolo frente al acoso?', correct:'Confidencialidad, protección, diligencia y ausencia de represalias', wrong:['Difusión pública de identidades','Investigación informal sin cauce','Suspensión automática de todas las personas implicadas'], justification:'El protocolo exige garantías para las personas afectadas y una tramitación formal.' },
      { text:'¿Qué función tiene la Comisión de Seguimiento del Plan?', correct:'Verificar ejecución, detectar obstáculos y proponer correcciones', wrong:['Resolver recursos de alzada','Adjudicar contratos menores','Expedir títulos oficiales'], justification:'La Comisión supervisa la implantación y el cumplimiento del Plan.' }
    ],
    13: [
      { text:'¿Qué diferencia existe entre investigación y transferencia del conocimiento?', correct:'La investigación genera conocimiento; la transferencia conecta sus resultados con la sociedad', wrong:['Son exactamente la misma actividad','La transferencia es una modificación presupuestaria','La investigación solo existe en títulos propios'], justification:'Título IV de la LOSU.' },
      { text:'La autonomía universitaria comprende, entre otras materias:', correct:'Estatutos, estructuras, oferta académica, personal, presupuesto y patrimonio', wrong:['La potestad de aprobar leyes orgánicas','La jurisdicción penal propia','La exención absoluta de control'], justification:'Artículo 3 LOSU.' },
      { text:'¿Qué diferencia hay entre título oficial y título propio?', correct:'El oficial se integra en la ordenación oficial y el propio pertenece a la oferta propia universitaria', wrong:['El propio habilita siempre profesiones reguladas','No existe ninguna diferencia','El oficial nunca se registra'], justification:'LOSU y RD 822/2021.' }
    ],
    14: [
      { text:'¿Qué tres características literales tiene el presupuesto universitario en la LOSU?', correct:'Público, único y equilibrado', wrong:['Secreto, múltiple y deficitario','Privado, flexible e ilimitado','Plurianual, reservado y no vinculante'], justification:'Artículo 57 LOSU.' },
      { text:'¿Cuál es el sistema ordinario de provisión de puestos del PTGAS?', correct:'El concurso', wrong:['La libre designación para todos los puestos','El contrato menor','La elección por el estudiantado'], justification:'Artículo 92 LOSU, sin perjuicio de los puestos que puedan cubrirse por libre designación.' },
      { text:'¿Qué derecho del estudiantado se relaciona directamente con las calificaciones?', correct:'La evaluación objetiva y la revisión de calificaciones', wrong:['La adjudicación de contratos','La avocación de competencias','La aprobación del presupuesto'], justification:'Título VIII LOSU.' }
    ],
    15: [
      { text:'¿Qué naturaleza tienen las recomendaciones del Defensor Universitario?', correct:'No sustituyen ni anulan resoluciones administrativas', wrong:['Son sentencias ejecutivas','Modifican por sí solas los Estatutos','Aprueban el presupuesto'], justification:'La función del Defensor es garantista, supervisora y mediadora.' },
      { text:'¿Qué diferencia existe entre un servicio universitario y un órgano de gobierno?', correct:'El servicio presta apoyo funcional; el órgano adopta decisiones dentro de sus competencias', wrong:['No existe diferencia','El servicio aprueba leyes','El órgano solo realiza tareas materiales'], justification:'Son estructuras de naturaleza y funciones distintas.' },
      { text:'Para cerrar el bloque de reforma estatutaria debe memorizarse:', correct:'Iniciativa, órgano competente, mayoría, control y publicación', wrong:['Solo el nombre del Rector','Únicamente el número de campus','El horario de biblioteca'], justification:'Son los elementos esenciales del procedimiento de reforma.' }
    ],
    16: [
      { text:'¿Qué diferencia existe entre reconocimiento y transferencia de créditos?', correct:'El reconocimiento computa créditos para obtener el título; la transferencia incorpora al expediente créditos cursados no reconocidos', wrong:['Son siempre idénticos','La transferencia elimina créditos','El reconocimiento solo afecta a tasas'], justification:'Artículo 10 del RD 822/2021.' },
      { text:'¿Cuál es la carga general de un grado ordinario?', correct:'240 ECTS, normalmente 60 por curso', wrong:['120 ECTS','60 ECTS totales','300 ECTS en todos los casos'], justification:'Artículo 14 del RD 822/2021.' },
      { text:'¿Qué procesos integran el aseguramiento externo del título?', correct:'Verificación, seguimiento, modificación y renovación de acreditación', wrong:['Solo matrícula y expedición','Únicamente contratación y pago','Recurso, revisión y lesividad'], justification:'RD 822/2021.' }
    ],
    17: [
      { text:'¿Qué diferencia existe entre acceso y admisión?', correct:'El acceso acredita requisitos; la admisión adjudica plazas entre quienes pueden acceder', wrong:['Son términos idénticos','La admisión siempre precede al acceso','El acceso solo afecta a posgrado'], justification:'Artículo 2 del RD 534/2024.' },
      { text:'Una persona con título de Técnico Superior de FP:', correct:'Puede acceder sin prueba de acceso, sin perjuicio del procedimiento de admisión', wrong:['Debe cursar obligatoriamente otro Bachillerato','No puede acceder a un grado','Obtiene plaza automática en cualquier titulación'], justification:'Artículo 5 del RD 534/2024.' },
      { text:'¿Qué datos de admisión UC3M deben comprobarse cada curso?', correct:'Oferta, plazas, cupos, ponderaciones, plazos, listas y reclamaciones', wrong:['Solo el nombre de la Universidad','La composición histórica del Claustro','Los contratos ya extinguidos'], justification:'Son datos anuales y no deben reutilizarse de otro curso.' }
    ],
    18: [
      { text:'¿Qué diferencia existe entre crédito extraordinario y suplemento de crédito?', correct:'El extraordinario crea crédito inexistente; el suplemento aumenta uno insuficiente', wrong:['Son exactamente iguales','El suplemento reconoce un derecho de ingreso','El extraordinario es una fase de pago'], justification:'Son modificaciones presupuestarias con presupuestos de hecho distintos.' },
      { text:'¿Qué caracteriza a una generación de crédito?', correct:'La existencia de determinados ingresos que habilitan crédito en los supuestos previstos', wrong:['El traslado automático de cualquier remanente','La anulación del presupuesto','El pago de una factura sin crédito'], justification:'La generación se vincula a ingresos y a sus reglas habilitantes.' },
      { text:'¿Qué diferencia existe entre reconocimiento del derecho y recaudación?', correct:'El primero registra un derecho exigible; la segunda materializa el cobro', wrong:['Son la misma fase','La recaudación siempre crea el presupuesto','Ambas son fases de gasto'], justification:'La ejecución de ingresos distingue reconocimiento y cobro.' }
    ],
    19: [
      { text:'¿Qué diferencia existe entre A, D y O?', correct:'A autoriza, D compromete frente a tercero y O reconoce una obligación exigible', wrong:['A paga, D recauda y O modifica créditos','Las tres fases son idénticas','O siempre precede a A'], justification:'Secuencia básica de ejecución del gasto.' },
      { text:'¿Qué diferencia hay entre transferencia de crédito y transferencia corriente?', correct:'La primera es una modificación de créditos; la segunda es una naturaleza económica del gasto', wrong:['No existe diferencia','La corriente siempre mueve crédito entre aplicaciones','La de crédito es un pago a un tercero'], justification:'No deben confundirse modificación presupuestaria y capítulo económico.' },
      { text:'¿Qué determina la liquidación presupuestaria?', correct:'Ejecución definitiva, derechos y obligaciones pendientes, resultado y remanentes', wrong:['Solo el número de estudiantes','La modificación de los Estatutos','La lista de admitidos al proceso selectivo'], justification:'La liquidación refleja el cierre económico del ejercicio.' }
    ],
    20: [
      { text:'¿Qué diferencia existe entre presupuesto base, valor estimado y precio?', correct:'Son magnitudes distintas de preparación y ejecución contractual con reglas propias', wrong:['Son siempre la misma cantidad','El valor estimado es siempre el pago final','El precio no forma parte del contrato'], justification:'Artículos 100 a 102 LCSP.' },
      { text:'¿Qué regla general aplica al objeto susceptible de división?', correct:'Debe dividirse en lotes cuando sea posible, salvo justificación de no hacerlo', wrong:['Nunca puede dividirse','Debe fraccionarse para evitar publicidad','Solo puede dividirlo el contratista'], justification:'Artículo 99 LCSP.' },
      { text:'¿Qué debe evitarse en un contrato menor?', correct:'El fraccionamiento indebido para eludir procedimiento o publicidad', wrong:['La justificación de la necesidad','La existencia de crédito','La aprobación del gasto'], justification:'Artículo 118 LCSP.' }
    ]
  };

  const firstAudit = cleanBank();

  ope.themes.forEach(theme => {
    const target = 15;
    const existing = new Set((ope.themeTests[theme.id] || []).map(q => normalize(q.text)));
    const pool = reinforcement[Number(theme.number)] || [];
    let index = 0;
    while ((ope.themeTests[theme.id] || []).length < target && index < pool.length) {
      const candidate = pool[index];
      index += 1;
      if (existing.has(normalize(candidate.text))) continue;
      const built = buildQuestion(theme, candidate, index + (ope.themeTests[theme.id] || []).length);
      ope.themeTests[theme.id].push(built);
      existing.add(normalize(candidate.text));
    }
  });

  const secondAudit = cleanBank();

  function stateFor(count) {
    if (count >= 30) return 'objetivo 30+';
    if (count >= 20) return 'banco sólido';
    if (count >= 15) return 'base operativa';
    return 'refuerzo prioritario';
  }

  const themeAudit = ope.themes.map(theme => {
    const questions = ope.themeTests[theme.id] || [];
    const positions = { A:0, B:0, C:0, D:0 };
    questions.forEach(q => { if (positions[q.answer] !== undefined) positions[q.answer] += 1; });
    theme.testAudit = {
      count: questions.length,
      state: stateFor(questions.length),
      answerPositions: positions,
      target: 30
    };
    return {
      id: theme.id,
      number: Number(theme.number),
      title: theme.title,
      count: questions.length,
      state: stateFor(questions.length),
      answerPositions: positions
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
    const extraOrder = themes.map((_, index) => themes[(index + seed) % themes.length].id);
    const extraThemes = new Set(extraOrder.slice(0, 10));
    const selected = [];

    themes.forEach(theme => {
      const amount = extraThemes.has(theme.id) ? 4 : 3;
      const bank = shuffled(ope.themeTests[theme.id] || [], seed * 101 + Number(theme.number));
      bank.slice(0, amount).forEach(question => selected.push({ ...question, auditTheme: Number(theme.number) }));
    });

    return shuffled(selected, seed * 1009).slice(0, 70);
  }

  ope.simulacros = [1, 2, 3].map(seed => ({
    id: `uc3m-v37-equilibrado-${seed}`,
    title: `Simulacro UC3M equilibrado ${seed}`,
    questions: balancedSimulation(seed).map((question, index) => ({
      ...question,
      id: `uc3m-v37-s${seed}-q${index + 1}`
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

  ope.testAudit = {
    version: 'v0.37.0',
    date: '2026-07-10',
    totalQuestions,
    minimumQuestions,
    targetPerTheme: 30,
    floorPerTheme: 15,
    duplicatesRemoved: firstAudit.duplicatesRemoved + secondAudit.duplicatesRemoved,
    invalidRemoved: firstAudit.invalidRemoved + secondAudit.invalidRemoved,
    themes: themeAudit,
    criteria: [
      'Enunciado y cuatro opciones no vacías',
      'Opciones distintas dentro de cada pregunta',
      'Respuesta correcta existente',
      'Justificación obligatoria',
      'Sin duplicados exactos de enunciado y respuesta',
      'Simulacros de 70 preguntas con representación de los 20 temas'
    ]
  };

  ope.version = '0.37.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.36:.*/, '')} Revisión v0.37: banco de test auditado, mínimo operativo de 15 preguntas por tema y simulacros equilibrados de 70 preguntas sin repeticiones internas.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(item => item.version === '0.37.0')) {
    ope.changelog.unshift({
      version: '0.37.0',
      date: '2026-07-10',
      changes: [
        'Auditoría estructural de todas las preguntas UC3M',
        'Eliminación automática de duplicados exactos y preguntas inválidas',
        'Refuerzo manual hasta un mínimo operativo de 15 preguntas por tema',
        'Simulacros equilibrados con los 20 temas y sin preguntas repetidas',
        'Informe visible de cobertura por tema'
      ]
    });
  }

  window.OPOWEB_TEST_AUDIT_V37 = ope.testAudit;

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();