(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.59.0';
  const NUMBER = 20;
  const norm = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const sections = [
    ['Concepto y fuentes de la relación laboral', [
      'Existe relación laboral cuando una persona presta voluntariamente servicios retribuidos por cuenta ajena y dentro del ámbito de organización y dirección de otra persona, denominada empleador o empresario.',
      'La relación laboral se regula por disposiciones legales y reglamentarias, convenios colectivos, voluntad contractual lícita y usos y costumbres locales y profesionales, respetando jerarquía normativa y mínimos de derecho necesario.'
    ]],
    ['Derechos, deberes y capacidad', [
      'Entre los derechos laborales figuran ocupación efectiva, promoción y formación, igualdad y no discriminación, integridad física, intimidad, dignidad y percepción puntual de la remuneración.',
      'Los deberes básicos incluyen buena fe y diligencia, prevención de riesgos, cumplimiento de órdenes regulares, no concurrencia, mejora de la productividad y obligaciones contractuales.',
      'No se admite al trabajo a menores de dieciséis años salvo autorización excepcional para espectáculos públicos. Los menores de dieciocho años no pueden realizar trabajo nocturno ni horas extraordinarias.'
    ]],
    ['Forma, información y validez', [
      'El contrato puede celebrarse por escrito o de palabra, salvo los supuestos en que la ley exige forma escrita. El incumplimiento de esa exigencia genera presunción de contrato indefinido y a jornada completa, salvo prueba en contrario.',
      'El empresario debe comunicar el contenido contractual a la oficina pública de empleo dentro de los diez días siguientes y entregar la copia básica a la representación legal dentro del mismo límite temporal.',
      'La nulidad parcial mantiene válido el resto del contrato. En la nulidad total, la persona trabajadora puede reclamar la remuneración correspondiente al trabajo ya prestado.'
    ]],
    ['Periodo de prueba', [
      'El periodo de prueba debe pactarse por escrito y respetar los límites del convenio colectivo. En defecto de pacto, no puede superar seis meses para técnicos titulados ni dos meses para los demás; en empresas de menos de veinticinco trabajadores, tres meses para quienes no sean técnicos titulados.',
      'En contratos temporales de duración no superior a seis meses, el máximo general es un mes salvo previsión distinta del convenio. Es nulo pactar prueba si ya se desempeñaron las mismas funciones en la empresa.',
      'Superado el periodo sin desistimiento, el contrato produce plenos efectos y el tiempo trabajado computa a efectos de antigüedad.'
    ]]
  ];

  const raw = [
    ['¿Qué elementos definen la relación laboral común?', 'Prestación voluntaria, retribuida, por cuenta ajena y dentro de la organización y dirección de otra persona.', ['Prestación gratuita y autónoma sin dirección ajena.', 'Actividad obligatoria prestada por cuenta propia.', 'Colaboración mercantil con asunción del riesgo empresarial.'], 'Artículo 1.1 del Estatuto de los Trabajadores.'],
    ['¿Quién tiene la condición de empresario a efectos del Estatuto de los Trabajadores?', 'Quien recibe la prestación de servicios laborales, sea persona física, jurídica o comunidad de bienes.', ['Únicamente una sociedad mercantil inscrita.', 'Solo la persona física que paga directamente el salario.', 'Cualquier cliente que adquiera un producto terminado.'], 'Artículo 1.2 del Estatuto de los Trabajadores.'],
    ['¿Qué relación está excluida del ámbito laboral por tener regulación administrativa o estatutaria?', 'La relación de servicio del personal funcionario público.', ['La del personal laboral de una empresa privada.', 'La del trabajador a tiempo parcial.', 'La del trabajador fijo-discontinuo.'], 'Artículo 1.3.a del Estatuto de los Trabajadores.'],
    ['¿Cuál de estas es fuente de la relación laboral?', 'El convenio colectivo.', ['Una instrucción empresarial contraria a la ley.', 'Una costumbre contraria a un mínimo legal.', 'Un acuerdo individual menos favorable que el convenio.'], 'Artículo 3.1 del Estatuto de los Trabajadores.'],
    ['¿Puede el contrato individual establecer condiciones menos favorables que la ley o el convenio colectivo?', 'No, aunque exista acuerdo de las partes.', ['Sí, siempre que conste por escrito.', 'Sí, si la relación dura menos de un año.', 'Solo cuando lo autorice verbalmente el trabajador.'], 'Artículo 3.1.c del Estatuto de los Trabajadores.'],
    ['¿Cómo se resuelve el conflicto entre normas laborales respetando los mínimos de derecho necesario?', 'Aplicando lo más favorable para la persona trabajadora, apreciado en su conjunto y en cómputo anual para conceptos cuantificables.', ['Aplicando siempre la norma más reciente.', 'Aplicando necesariamente el contrato individual.', 'Aplicando la costumbre aunque contradiga la ley.'], 'Artículo 3.3 del Estatuto de los Trabajadores.'],
    ['¿Cuándo se aplican los usos y costumbres laborales?', 'En defecto de disposiciones legales, convencionales o contractuales, salvo remisión expresa.', ['Siempre con preferencia sobre el convenio.', 'Solo cuando empeoren una condición legal.', 'Nunca, porque no son fuente laboral.'], 'Artículo 3.4 del Estatuto de los Trabajadores.'],
    ['¿Cuál de estos es un derecho en la relación de trabajo?', 'La ocupación efectiva.', ['Incumplir órdenes regulares.', 'Competir libremente con la empresa en todo caso.', 'Renunciar a derechos indisponibles.'], 'Artículo 4.2.a del Estatuto de los Trabajadores.'],
    ['¿Qué derecho protege el cobro del salario en tiempo?', 'El derecho a la percepción puntual de la remuneración pactada o legalmente establecida.', ['El derecho de reunión.', 'El derecho de huelga.', 'El derecho a la libre sindicación.'], 'Artículo 4.2.f del Estatuto de los Trabajadores.'],
    ['¿Qué deber exige cumplir las obligaciones del puesto conforme a buena fe y diligencia?', 'Un deber laboral básico de la persona trabajadora.', ['Una facultad voluntaria del empresario.', 'Una obligación exclusiva del convenio colectivo.', 'Una regla aplicable solo al periodo de prueba.'], 'Artículo 5.a del Estatuto de los Trabajadores.'],
    ['¿Cuál de estos es un deber laboral básico?', 'Observar las medidas de prevención de riesgos laborales.', ['Renunciar a la formación profesional.', 'Aceptar instrucciones empresariales irregulares.', 'Realizar horas extraordinarias sin límite.'], 'Artículo 5.b del Estatuto de los Trabajadores.'],
    ['¿Cuál es la edad mínima general de admisión al trabajo?', 'Dieciséis años.', ['Catorce años.', 'Quince años.', 'Dieciocho años.'], 'Artículo 6.1 del Estatuto de los Trabajadores.'],
    ['¿Qué tienen prohibido los trabajadores menores de dieciocho años?', 'El trabajo nocturno y la realización de horas extraordinarias.', ['Todo trabajo a tiempo parcial.', 'Todo contrato escrito.', 'La formación profesional.'], 'Artículo 6.2 y 6.3 del Estatuto de los Trabajadores.'],
    ['¿Cuándo puede intervenir una persona menor de dieciséis años en un espectáculo público?', 'Excepcionalmente, con autorización escrita de la autoridad laboral para actos determinados y sin peligro para su salud o formación.', ['Cuando exista autorización verbal del empresario.', 'Siempre que la actuación se realice de noche.', 'Nunca, sin excepción alguna.'], 'Artículo 6.4 del Estatuto de los Trabajadores.'],
    ['¿Quién puede contratar la prestación de su trabajo además de quien tenga plena capacidad de obrar?', 'La persona mayor de dieciséis y menor de dieciocho que viva de forma independiente con consentimiento o autorización.', ['Todo menor de dieciséis sin autorización.', 'Solo las personas mayores de veintiún años.', 'Únicamente quien tenga nacionalidad española.'], 'Artículo 7 del Estatuto de los Trabajadores.'],
    ['¿Qué forma puede tener con carácter general el contrato de trabajo?', 'Puede celebrarse por escrito o de palabra.', ['Debe formalizarse siempre mediante escritura pública.', 'Solo puede ser verbal.', 'Debe ser autorizado judicialmente.'], 'Artículo 8.1 del Estatuto de los Trabajadores.'],
    ['¿Qué presunción se aplica si se omite la forma escrita legalmente exigida?', 'Que el contrato es indefinido y a jornada completa, salvo prueba en contrario.', ['Que el contrato es nulo de pleno derecho.', 'Que el contrato es temporal y a tiempo parcial.', 'Que no existe relación laboral.'], 'Artículo 8.2 del Estatuto de los Trabajadores.'],
    ['¿Puede una de las partes exigir la formalización escrita durante la relación laboral?', 'Sí, cualquiera de las partes puede exigirla en cualquier momento.', ['No, solo antes de comenzar a trabajar.', 'Solo puede exigirla la empresa.', 'Solo puede exigirla la oficina de empleo.'], 'Artículo 8.2 del Estatuto de los Trabajadores.'],
    ['¿En qué plazo debe comunicar el empresario el contrato a la oficina pública de empleo?', 'En los diez días siguientes a su concertación.', ['En veinticuatro horas.', 'En un mes.', 'Al finalizar la relación laboral.'], 'Artículo 8.3 del Estatuto de los Trabajadores.'],
    ['¿En qué plazo debe entregarse la copia básica a la representación legal de los trabajadores?', 'En un plazo no superior a diez días desde la formalización.', ['En tres días naturales.', 'En treinta días hábiles.', 'Solo al extinguirse el contrato.'], 'Artículo 8.4 del Estatuto de los Trabajadores.'],
    ['¿Qué ocurre cuando solo una parte del contrato de trabajo es nula?', 'El contrato permanece válido en lo restante y se completa con los preceptos jurídicos adecuados.', ['Todo el contrato queda automáticamente extinguido.', 'La persona trabajadora pierde la remuneración ya devengada.', 'Se transforma siempre en contrato temporal.'], 'Artículo 9.1 del Estatuto de los Trabajadores.'],
    ['Si el contrato completo resulta nulo, ¿qué puede exigir la persona trabajadora por el trabajo ya prestado?', 'La remuneración correspondiente a un contrato válido.', ['Únicamente una indemnización simbólica.', 'Nada, porque la nulidad elimina todo derecho.', 'Solo la devolución de gastos de transporte.'], 'Artículo 9.2 del Estatuto de los Trabajadores.'],
    ['¿Cómo debe pactarse el periodo de prueba?', 'Por escrito.', ['Verbalmente ante dos testigos.', 'Mediante resolución administrativa.', 'Se presume siempre aunque no se pacte.'], 'Artículo 14.1 del Estatuto de los Trabajadores.'],
    ['En defecto de convenio, ¿cuál es la duración máxima general del periodo de prueba para técnicos titulados?', 'Seis meses.', ['Un mes.', 'Dos meses.', 'Un año.'], 'Artículo 14.1 del Estatuto de los Trabajadores.'],
    ['En defecto de convenio, ¿cuál es el máximo general para los demás trabajadores?', 'Dos meses.', ['Quince días.', 'Seis meses.', 'Un año.'], 'Artículo 14.1 del Estatuto de los Trabajadores.'],
    ['En una empresa de menos de veinticinco trabajadores, ¿qué máximo se aplica a quien no sea técnico titulado?', 'Tres meses.', ['Un mes.', 'Seis meses.', 'Doce meses.'], 'Artículo 14.1 del Estatuto de los Trabajadores.'],
    ['En un contrato temporal de hasta seis meses, ¿cuál es el máximo general del periodo de prueba?', 'Un mes, salvo previsión distinta en convenio colectivo.', ['Seis meses en todo caso.', 'Tres meses sin excepción.', 'No puede existir periodo de prueba.'], 'Artículo 14.1 del Estatuto de los Trabajadores.'],
    ['¿Cuándo es nulo un pacto de periodo de prueba por funciones ya realizadas?', 'Cuando la persona trabajadora ya desempeñó las mismas funciones anteriormente en la empresa.', ['Cuando el contrato es indefinido.', 'Cuando se pacta por escrito.', 'Cuando el trabajador es técnico titulado.'], 'Artículo 14.1 del Estatuto de los Trabajadores.'],
    ['¿Qué ocurre al superar el periodo de prueba sin desistimiento?', 'El contrato produce plenos efectos y el tiempo trabajado computa para la antigüedad.', ['El contrato debe renovarse desde cero.', 'El tiempo trabajado no computa.', 'La relación se convierte automáticamente en temporal.'], 'Artículo 14.3 del Estatuto de los Trabajadores.'],
    ['¿Cuándo interrumpen determinadas situaciones protegidas el cómputo del periodo de prueba?', 'Cuando existe acuerdo entre ambas partes.', ['Siempre de forma automática.', 'Nunca.', 'Solo por decisión unilateral de la empresa.'], 'Artículo 14.3 del Estatuto de los Trabajadores.']
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v59-t${NUMBER}-q${index + 1}`,
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
  theme.reviewTable = [['Bloque', 'Qué dominar'], ...sections.map(([heading]) => [heading, 'Concepto, requisito, plazo, efecto y excepción'])];

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
        const question = pool.questions[(round + seed * 17 + poolIndex * 11) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5923);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v59-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v59-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v59-sim${seed}`,
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
      `Añadidas ${additions.length} preguntas reales al tema 20`,
      'Tema 20 elevado al objetivo mínimo de 30 preguntas reales',
      'Desarrollados concepto, fuentes, capacidad, forma, validez y periodo de prueba del contrato de trabajo',
      'Regenerados los tres simulacros con exclusión del tema 22 pendiente'
    ]
  });

  window.OPOWEB_DIPUTACION_V59 = {
    version: `v${VERSION}`,
    reinforcedThemes: [20],
    addedQuestions: additions.length,
    cumulativeSecondPassQuestions: 292 + additions.length,
    cumulativeManualQuestions: 877 + additions.length,
    themesAtTargetInSecondPass: Array.from({ length: 20 }, (_, index) => index + 1),
    targetPerTheme: 30
  };
})();
