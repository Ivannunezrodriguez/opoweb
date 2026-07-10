(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.61.0';
  const NUMBER = 23;
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const sections = [
    ['Derecho a la protección y principios preventivos', [
      'Las personas trabajadoras tienen derecho a una protección eficaz y el empresario, o la Administración respecto de su personal, tiene el correlativo deber de protección.',
      'La prevención debe integrarse en la organización mediante plan, evaluación de riesgos, planificación, información, formación, emergencias, vigilancia de la salud y una organización preventiva adecuada.',
      'Los principios generales incluyen evitar riesgos, evaluar los inevitables, combatirlos en origen, adaptar el trabajo a la persona, sustituir lo peligroso, planificar la prevención y anteponer la protección colectiva a la individual.'
    ]],
    ['Información, formación, emergencias y vigilancia', [
      'La información debe abarcar riesgos generales y específicos, medidas de protección y prevención y medidas de emergencia. La formación ha de ser teórica y práctica, suficiente, adecuada y sin coste para la persona trabajadora.',
      'Ante riesgo grave e inminente puede interrumpirse la actividad y abandonarse el lugar de trabajo. La vigilancia de la salud es, como regla, voluntaria y debe respetar intimidad, dignidad y confidencialidad.'
    ]],
    ['Obligaciones y organización preventiva', [
      'Cada trabajador debe velar por su seguridad y la de terceros, utilizar correctamente equipos y protecciones, no inutilizar dispositivos, informar de riesgos y cooperar con el empresario.',
      'La actividad preventiva puede organizarse mediante trabajadores designados, servicio de prevención propio o servicio ajeno. Los servicios de prevención asesoran y apoyan en evaluación, planificación, formación, emergencias y vigilancia de la salud.'
    ]],
    ['Consulta y participación', [
      'El empresario debe consultar con antelación decisiones preventivas relevantes. La participación se articula mediante representantes del personal y Delegados de Prevención.',
      'El Comité de Seguridad y Salud es paritario y colegiado, se constituye en centros con cincuenta o más trabajadores y se reúne trimestralmente o cuando lo solicite alguna representación.'
    ]]
  ];

  const raw = [
    ['¿Qué derecho reconoce el artículo 14 de la Ley de Prevención de Riesgos Laborales?', 'El derecho a una protección eficaz en materia de seguridad y salud en el trabajo.', ['El derecho a elegir libremente cualquier equipo de trabajo.', 'El derecho a renunciar a toda medida preventiva.', 'El derecho a sustituir al servicio de prevención.'], 'Artículo 14.1 de la Ley 31/1995.'],
    ['¿Quién tiene el deber de protección respecto del personal al servicio de una Administración pública?', 'La propia Administración pública.', ['Exclusivamente la mutua colaboradora.', 'Solo el trabajador afectado.', 'Únicamente la Inspección de Trabajo.'], 'Artículo 14.1 de la Ley 31/1995.'],
    ['¿Puede recaer sobre los trabajadores el coste de las medidas de seguridad y salud?', 'No, en ningún caso.', ['Sí, cuando usen equipos de protección individual.', 'Sí, si el riesgo es leve.', 'Solo durante el periodo de prueba.'], 'Artículo 14.5 de la Ley 31/1995.'],
    ['¿Cuál es un principio general de la acción preventiva?', 'Combatir los riesgos en su origen.', ['Trasladar siempre el riesgo al trabajador.', 'Priorizar la protección individual sobre la colectiva.', 'Esperar a que se produzca el daño.'], 'Artículo 15.1 de la Ley 31/1995.'],
    ['¿Qué protección debe anteponerse con carácter general?', 'La protección colectiva a la individual.', ['La individual a la colectiva.', 'La reparación del daño a la prevención.', 'La sanción a la formación.'], 'Artículo 15.1.h de la Ley 31/1995.'],
    ['¿Qué instrumentos esenciales integran la gestión preventiva?', 'El plan de prevención, la evaluación de riesgos y la planificación de la actividad preventiva.', ['Solo un registro de accidentes.', 'Únicamente la vigilancia médica.', 'Exclusivamente las instrucciones verbales.'], 'Artículo 16 de la Ley 31/1995.'],
    ['¿Cuándo deben utilizarse equipos de protección individual?', 'Cuando los riesgos no puedan evitarse o limitarse suficientemente por protección colectiva u organización del trabajo.', ['Siempre como primera y única medida.', 'Solo después de producirse un accidente.', 'Únicamente en trabajos administrativos.'], 'Artículo 17.2 de la Ley 31/1995.'],
    ['¿Sobre qué debe informar el empresario a los trabajadores?', 'Sobre riesgos, medidas de protección y prevención y medidas de emergencia.', ['Solo sobre el salario y la jornada.', 'Únicamente sobre riesgos ya materializados.', 'Solo sobre sanciones disciplinarias.'], 'Artículo 18.1 de la Ley 31/1995.'],
    ['Cuando existen representantes, ¿cómo se facilita la información preventiva general?', 'A través de los representantes, sin perjuicio de informar directamente sobre riesgos específicos del puesto.', ['Solo mediante publicación en prensa.', 'Exclusivamente al servicio de prevención.', 'Nunca de forma directa al trabajador.'], 'Artículo 18.1 de la Ley 31/1995.'],
    ['¿Cuándo debe garantizarse formación preventiva?', 'En la contratación y cuando cambien funciones, tecnologías o equipos.', ['Solo una vez cada diez años.', 'Únicamente tras un accidente grave.', 'Solo a representantes sindicales.'], 'Artículo 19.1 de la Ley 31/1995.'],
    ['¿Cómo debe ser la formación preventiva?', 'Teórica y práctica, suficiente y adecuada.', ['Solo teórica y voluntaria.', 'Exclusivamente práctica y fuera de jornada.', 'Genérica, aunque no guarde relación con el puesto.'], 'Artículo 19.1 de la Ley 31/1995.'],
    ['¿Quién asume el coste de la formación preventiva?', 'El empresario; nunca puede recaer sobre los trabajadores.', ['La persona trabajadora.', 'La representación sindical.', 'La autoridad laboral.'], 'Artículo 19.2 de la Ley 31/1995.'],
    ['¿Qué materias deben contemplar las medidas de emergencia?', 'Primeros auxilios, lucha contra incendios y evacuación.', ['Solo evacuación.', 'Únicamente protección de documentos.', 'Exclusivamente comunicación externa.'], 'Artículo 20 de la Ley 31/1995.'],
    ['Ante un riesgo grave e inminente, ¿qué puede hacer la persona trabajadora?', 'Interrumpir su actividad y abandonar el lugar de trabajo si resulta necesario.', ['Continuar obligatoriamente hasta recibir orden judicial.', 'Esperar siempre a que finalice la jornada.', 'Limitarse a presentar una queja posterior.'], 'Artículo 21.2 de la Ley 31/1995.'],
    ['¿Cuál es la regla general sobre vigilancia de la salud?', 'Requiere el consentimiento del trabajador.', ['Es siempre obligatoria sin excepciones.', 'Está prohibida durante la relación laboral.', 'Solo procede después de la jubilación.'], 'Artículo 22.1 de la Ley 31/1995.'],
    ['¿Qué principios deben respetarse en la vigilancia de la salud?', 'Intimidad, dignidad y confidencialidad.', ['Publicidad completa de resultados.', 'Libre acceso del empresario a diagnósticos.', 'Uso de datos con fines disciplinarios.'], 'Artículo 22.2 a 22.4 de la Ley 31/1995.'],
    ['¿Qué obligación tiene el trabajador respecto de los dispositivos de seguridad?', 'No ponerlos fuera de funcionamiento y utilizarlos correctamente.', ['Desactivarlos cuando dificulten el ritmo de trabajo.', 'Modificar su funcionamiento sin autorización.', 'Usarlos solo en presencia del empresario.'], 'Artículo 29.2 de la Ley 31/1995.'],
    ['¿Qué debe hacer el trabajador cuando advierta un riesgo para la seguridad o la salud?', 'Informar de inmediato a su superior y a los responsables preventivos.', ['Ocultarlo hasta finalizar la jornada.', 'Comunicarlo solo a compañeros.', 'Esperar a que se produzca un daño.'], 'Artículo 29.2.4.º de la Ley 31/1995.'],
    ['¿Qué opciones básicas tiene el empresario para organizar la prevención?', 'Designar trabajadores, constituir un servicio propio o concertar uno ajeno.', ['Delegarla siempre en la Inspección de Trabajo.', 'Encomendarla exclusivamente a los trabajadores.', 'Sustituirla por un seguro privado.'], 'Artículo 30.1 de la Ley 31/1995.'],
    ['¿Qué es un servicio de prevención?', 'El conjunto de medios humanos y materiales necesarios para realizar actividades preventivas y asesorar.', ['Un órgano exclusivamente sancionador.', 'Una comisión de selección de personal.', 'Un servicio médico sin funciones preventivas.'], 'Artículo 31.2 de la Ley 31/1995.'],
    ['¿Quiénes son los Delegados de Prevención?', 'Representantes de los trabajadores con funciones específicas en prevención.', ['Inspectores de Trabajo designados por la empresa.', 'Técnicos externos sin representación.', 'Miembros natos del órgano de contratación.'], 'Artículo 35.1 de la Ley 31/1995.'],
    ['¿Cuándo debe constituirse un Comité de Seguridad y Salud?', 'En empresas o centros de trabajo con cincuenta o más trabajadores.', ['A partir de diez trabajadores.', 'Solo con más de quinientos trabajadores.', 'Únicamente cuando lo ordene un juez.'], 'Artículo 38.2 de la Ley 31/1995.']
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return { id: `dip-v61-t${NUMBER}-q${index + 1}`, text, options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })), answer: letters[rotated.indexOf(correct)], justification, source: justification, difficulty: ['baja', 'media', 'alta'][index % 3], auditReal: true, auditTheme: NUMBER };
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
  theme.reviewTable = [['Bloque', 'Qué dominar'], ...sections.map(([heading]) => [heading, 'Derecho, obligación, sujeto, procedimiento y órgano de participación'])];

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
    const pools = ope.themes.filter(item => Number(item.number) !== 22).map(item => ({ theme: item, questions: (ope.themeTests[item.id] || []).filter(isReal) })).filter(pool => pool.questions.length);
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 500) {
      pools.forEach((pool, poolIndex) => {
        if (selected.length >= 55) return;
        const question = pool.questions[(round + seed * 23 + poolIndex * 17) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 6211);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v61-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v61-s${seed}-r${index + 1}`, reserve: true }));
    return { id: `dip-v61-sim${seed}`, title: `Simulacro Diputación ${seed} · 50 + 5 reserva`, questions, reserveQuestions, audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, excludedPendingThemes: [22] } };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-10', changes: [`Añadidas ${additions.length} preguntas reales al tema 23`, 'Tema 23 elevado al objetivo mínimo de 30 preguntas reales', 'Desarrollados derechos, obligaciones, servicios de prevención, consulta y participación', 'Regenerados los tres simulacros con exclusión del tema 22'] });

  window.OPOWEB_DIPUTACION_V61 = {
    version: `v${VERSION}`,
    reinforcedThemes: [23],
    addedQuestions: additions.length,
    cumulativeSecondPassQuestions: 358 + additions.length,
    cumulativeManualQuestions: 943 + additions.length,
    themesAtTargetInSecondPass: [...Array.from({ length: 21 }, (_, index) => index + 1), 23],
    targetPerTheme: 30
  };
})();
