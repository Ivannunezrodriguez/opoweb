(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.60.0';
  const NUMBER = 21;
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const sections = [
    ['Contratos formativos', [
      'El contrato formativo comprende la formación en alternancia con trabajo retribuido y el contrato para obtener práctica profesional adecuada al nivel de estudios.',
      'La alternancia exige relación entre actividad y formación, plan individual y tutoría del centro y de la empresa. Su duración ordinaria se sitúa entre tres meses y dos años.',
      'La práctica profesional debe celebrarse dentro de los tres años siguientes a la terminación de los estudios, cinco en caso de discapacidad, y dura entre seis meses y un año.'
    ]],
    ['Duración determinada y fijo-discontinuo', [
      'El contrato se presume indefinido. La duración determinada solo procede por circunstancias de la producción o por sustitución, identificando con precisión la causa y su conexión con la duración.',
      'El fijo-discontinuo es indefinido y atiende trabajos estacionales, de temporada o intermitentes. Debe constar por escrito y el llamamiento debe dejar constancia de su notificación.'
    ]],
    ['Sistema, afiliación y cotización', [
      'La Seguridad Social se fundamenta en universalidad, unidad, solidaridad e igualdad y se estructura en Régimen General y regímenes especiales.',
      'La afiliación es obligatoria, única para toda la vida y para todo el sistema. La cotización es obligatoria en todos los regímenes y nace con el inicio de la actividad.',
      'En el Régimen General se incluyen obligatoriamente los trabajadores por cuenta ajena y asimilados, salvo inclusión en un régimen especial.'
    ]],
    ['Acción protectora y contingencias', [
      'La acción protectora comprende asistencia sanitaria, recuperación profesional, prestaciones económicas, prestaciones familiares y servicios sociales.',
      'La obligación de cotizar en el Régimen General nace al iniciarse el trabajo, incluido el periodo de prueba, y se mantiene mientras exista alta o prestación de servicios.',
      'Es accidente de trabajo toda lesión corporal sufrida con ocasión o por consecuencia del trabajo por cuenta ajena, incluido el accidente al ir o volver del trabajo.'
    ]]
  ];

  const raw = [
    ['¿Qué modalidades integra el contrato formativo?', 'Formación en alternancia y contrato para obtener práctica profesional.', ['Contrato eventual y contrato de relevo.', 'Contrato fijo-discontinuo y contrato a tiempo parcial.', 'Contrato de sustitución y contrato de obra.'], 'Artículo 11.1 del Estatuto de los Trabajadores.'],
    ['¿Qué finalidad tiene el contrato de formación en alternancia?', 'Compatibilizar actividad laboral retribuida con un proceso formativo.', ['Sustituir a una persona con reserva de puesto.', 'Atender únicamente incrementos imprevisibles de producción.', 'Cubrir definitivamente una vacante estructural.'], 'Artículo 11.2 del Estatuto de los Trabajadores.'],
    ['¿Qué límite de edad se aplica en determinados certificados de nivel 1 y 2 y programas de empleo-formación?', 'Hasta treinta años.', ['Hasta veinticinco años en todo caso.', 'Hasta treinta y cinco años.', 'No existe límite en esos supuestos.'], 'Artículo 11.2.b del Estatuto de los Trabajadores.'],
    ['¿Qué tutoría exige la formación en alternancia?', 'Una persona tutora del centro formativo y otra de la empresa.', ['Una única persona tutora designada por el trabajador.', 'Dos tutores exclusivamente de la empresa.', 'Ninguna tutoría si el contrato supera un año.'], 'Artículo 11.2.d del Estatuto de los Trabajadores.'],
    ['¿Cuál es la duración ordinaria del contrato de formación en alternancia?', 'Mínimo tres meses y máximo dos años.', ['Mínimo seis meses y máximo un año.', 'Máximo tres meses.', 'Entre uno y cuatro años.'], 'Artículo 11.2.g del Estatuto de los Trabajadores.'],
    ['¿En qué plazo debe concertarse con carácter general el contrato para obtener práctica profesional?', 'Dentro de los tres años siguientes a la terminación de los estudios.', ['Dentro del año siguiente.', 'Dentro de los diez años siguientes.', 'En cualquier momento sin límite.'], 'Artículo 11.3.b del Estatuto de los Trabajadores.'],
    ['¿Qué plazo se aplica para concertar práctica profesional con una persona con discapacidad?', 'Cinco años desde la terminación de los estudios.', ['Dos años.', 'Tres meses.', 'Diez años.'], 'Artículo 11.3.b del Estatuto de los Trabajadores.'],
    ['¿Cuál es la duración del contrato para obtener práctica profesional?', 'Entre seis meses y un año.', ['Entre tres meses y dos años.', 'Máximo tres meses.', 'Mínimo dos años.'], 'Artículo 11.3.c del Estatuto de los Trabajadores.'],
    ['¿Cuál es el periodo de prueba máximo del contrato para práctica profesional, salvo convenio?', 'Un mes.', ['Dos meses.', 'Seis meses.', 'No admite periodo de prueba.'], 'Artículo 11.3.e del Estatuto de los Trabajadores.'],
    ['¿Qué efecto tiene celebrar un contrato formativo en fraude de ley?', 'Se entiende concertado como contrato indefinido ordinario.', ['Se convierte en fijo-discontinuo.', 'Queda suspendido seis meses.', 'Se transforma en contrato de sustitución.'], 'Artículo 11.4.h del Estatuto de los Trabajadores.'],
    ['¿Cómo se presume concertado el contrato de trabajo respecto de su duración?', 'Por tiempo indefinido.', ['Por seis meses.', 'Como fijo-discontinuo.', 'Por el tiempo del periodo de prueba.'], 'Artículo 15.1 del Estatuto de los Trabajadores.'],
    ['¿Qué causas permiten un contrato de duración determinada?', 'Circunstancias de la producción o sustitución de una persona trabajadora.', ['Obra o servicio y lanzamiento de actividad.', 'Cualquier decisión unilateral de la empresa.', 'La mera preferencia de las partes.'], 'Artículo 15.1 del Estatuto de los Trabajadores.'],
    ['¿Qué debe precisar un contrato temporal para justificar su causa?', 'La causa habilitante, las circunstancias concretas y su conexión con la duración.', ['Solo la categoría profesional.', 'Únicamente el salario anual.', 'La antigüedad del representante legal.'], 'Artículo 15.1 del Estatuto de los Trabajadores.'],
    ['¿Cuál es la duración máxima ordinaria por circunstancias imprevisibles de la producción?', 'Seis meses, ampliables hasta un año por convenio sectorial.', ['Tres meses sin ampliación.', 'Dos años.', 'Noventa días continuados.'], 'Artículo 15.2 del Estatuto de los Trabajadores.'],
    ['¿Cuántos días al año puede usarse con carácter general el contrato por situaciones ocasionales previsibles?', 'Noventa días no continuados.', ['Treinta días consecutivos.', 'Ciento ochenta días.', 'Todo el año natural.'], 'Artículo 15.2 del Estatuto de los Trabajadores.'],
    ['¿Cuánto puede anticiparse una sustitución para coincidir con la persona sustituida?', 'El tiempo imprescindible, con un máximo de quince días.', ['Un mes exacto.', 'Tres meses.', 'No puede existir coincidencia.'], 'Artículo 15.3 del Estatuto de los Trabajadores.'],
    ['¿Cuál es el máximo para cubrir temporalmente un puesto durante un proceso de selección?', 'Tres meses, o el plazo inferior fijado en convenio.', ['Seis meses prorrogables automáticamente.', 'Un año.', 'Quince días.'], 'Artículo 15.3 del Estatuto de los Trabajadores.'],
    ['¿Cuándo adquiere fijeza una persona encadenando contratos por circunstancias de la producción?', 'Cuando supera dieciocho meses contratada en un periodo de veinticuatro meses.', ['Cuando supera seis meses en doce.', 'Después del primer contrato temporal.', 'Solo tras sentencia penal.'], 'Artículo 15.5 del Estatuto de los Trabajadores.'],
    ['¿Qué derechos tienen las personas con contrato temporal respecto de las indefinidas?', 'Los mismos, salvo particularidades legales de cada modalidad.', ['Menos derechos salariales en todo caso.', 'Solo derecho a vacaciones.', 'Ningún derecho a información sobre vacantes.'], 'Artículo 15.6 del Estatuto de los Trabajadores.'],
    ['¿Qué naturaleza tiene el contrato fijo-discontinuo?', 'Indefinida.', ['Temporal de sustitución.', 'Formativa.', 'Mercantil.'], 'Artículo 16.1 del Estatuto de los Trabajadores.'],
    ['¿Cómo debe formalizarse el contrato fijo-discontinuo?', 'Necesariamente por escrito.', ['Siempre de palabra.', 'Mediante escritura pública.', 'Solo mediante comunicación sindical.'], 'Artículo 16.2 del Estatuto de los Trabajadores.'],
    ['¿Cómo debe realizarse el llamamiento fijo-discontinuo?', 'Por escrito o por medio que deje constancia de la notificación.', ['Solo verbalmente.', 'Únicamente por publicación en prensa.', 'Sin indicar condiciones de incorporación.'], 'Artículo 16.3 del Estatuto de los Trabajadores.'],
    ['¿En qué principios se fundamenta el sistema de Seguridad Social?', 'Universalidad, unidad, solidaridad e igualdad.', ['Jerarquía, descentralización y competencia.', 'Autonomía privada y lucro mercantil.', 'Temporalidad y subsidiariedad.'], 'Artículo 2.1 de la Ley General de la Seguridad Social.'],
    ['¿Puede una persona trabajadora renunciar válidamente a derechos de Seguridad Social?', 'No; el pacto de renuncia es nulo.', ['Sí, mediante contrato individual.', 'Sí, por convenio colectivo.', 'Solo si recibe una compensación.'], 'Artículo 3 de la Ley General de la Seguridad Social.'],
    ['¿Cómo se estructura el sistema de Seguridad Social?', 'En Régimen General y regímenes especiales.', ['En un único régimen sin especialidades.', 'En regímenes provinciales independientes.', 'En mutualidades privadas obligatorias.'], 'Artículo 9 de la Ley General de la Seguridad Social.'],
    ['¿Qué carácter tiene la afiliación a la Seguridad Social?', 'Es obligatoria y única para toda la vida y para todo el sistema.', ['Es voluntaria y renovable cada año.', 'Es distinta para cada empresa.', 'Solo es obligatoria para contratos indefinidos.'], 'Artículo 15 de la Ley General de la Seguridad Social.'],
    ['¿Cómo puede practicarse la afiliación?', 'A petición del obligado, a instancia del interesado o de oficio.', ['Solo a petición del empresario.', 'Únicamente mediante resolución judicial.', 'Solo al finalizar el periodo de prueba.'], 'Artículo 16 de la Ley General de la Seguridad Social.'],
    ['¿En qué regímenes es obligatoria la cotización?', 'En todos los regímenes del sistema.', ['Solo en el Régimen General.', 'Solo en los regímenes especiales.', 'Únicamente cuando exista accidente laboral.'], 'Artículo 18.1 de la Ley General de la Seguridad Social.'],
    ['¿Cuándo nace con carácter general la obligación de cotizar?', 'Desde el inicio de la actividad correspondiente.', ['Al terminar el primer mes.', 'Cuando se paga la primera nómina.', 'Tras superar el periodo de prueba.'], 'Artículo 18.2 de la Ley General de la Seguridad Social.'],
    ['¿Quiénes están incluidos obligatoriamente en el Régimen General?', 'Los trabajadores por cuenta ajena y asimilados, salvo inclusión en un régimen especial.', ['Solo funcionarios de carrera.', 'Exclusivamente trabajadores autónomos.', 'Únicamente socios mercantiles.'], 'Artículo 136.1 de la Ley General de la Seguridad Social.'],
    ['¿Quién asume íntegramente la cotización por accidentes de trabajo y enfermedades profesionales?', 'El empresario.', ['La persona trabajadora.', 'El Estado en todo caso.', 'Empresario y trabajador por mitades.'], 'Artículo 141.3 de la Ley General de la Seguridad Social.'],
    ['¿Quién es responsable de ingresar las aportaciones empresariales y de los trabajadores?', 'El empresario.', ['La persona trabajadora directamente.', 'El servicio público de empleo.', 'La representación sindical.'], 'Artículo 142.1 de la Ley General de la Seguridad Social.'],
    ['¿Cuándo nace la obligación de cotizar en el Régimen General?', 'Con el inicio del trabajo, incluido el periodo de prueba.', ['Después del periodo de prueba.', 'Al recibir la segunda nómina.', 'Al cumplir seis meses de antigüedad.'], 'Artículo 144.1 de la Ley General de la Seguridad Social.'],
    ['¿Qué comprende la acción protectora de la Seguridad Social?', 'Asistencia sanitaria, recuperación profesional, prestaciones económicas, familiares y servicios sociales.', ['Solo asistencia sanitaria.', 'Únicamente pensiones contributivas.', 'Solo desempleo y jubilación.'], 'Artículo 42 de la Ley General de la Seguridad Social.'],
    ['¿Qué se entiende por accidente de trabajo?', 'Toda lesión corporal sufrida con ocasión o por consecuencia del trabajo por cuenta ajena.', ['Toda enfermedad común padecida fuera del trabajo.', 'Cualquier daño material de la empresa.', 'Solo las lesiones con hospitalización.'], 'Artículo 156.1 de la Ley General de la Seguridad Social.'],
    ['¿Tiene consideración de accidente de trabajo el sufrido al ir o volver del trabajo?', 'Sí.', ['No, nunca.', 'Solo si ocurre dentro del centro.', 'Solo si existe culpa empresarial.'], 'Artículo 156.2.a de la Ley General de la Seguridad Social.']
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return { id: `dip-v60-t${NUMBER}-q${index + 1}`, text, options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })), answer: letters[rotated.indexOf(correct)], justification, source: justification, difficulty: ['baja', 'media', 'alta'][index % 3], auditReal: true, auditTheme: NUMBER };
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
  theme.reviewTable = [['Bloque', 'Qué dominar'], ...sections.map(([heading]) => [heading, 'Modalidad, requisito, duración, afiliación, cotización y contingencia'])];

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
        const question = pool.questions[(round + seed * 19 + poolIndex * 13) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 6043);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v60-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v60-s${seed}-r${index + 1}`, reserve: true }));
    return { id: `dip-v60-sim${seed}`, title: `Simulacro Diputación ${seed} · 50 + 5 reserva`, questions, reserveQuestions, audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, excludedPendingThemes: [22] } };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-10', changes: [`Añadidas ${additions.length} preguntas reales al tema 21`, 'Temas 1–21 elevados al objetivo mínimo de 30 preguntas reales', 'Desarrolladas modalidades contractuales y Seguridad Social', 'Regenerados los tres simulacros con exclusión del tema 22'] });

  window.OPOWEB_DIPUTACION_V60 = {
    version: `v${VERSION}`,
    reinforcedThemes: [21],
    addedQuestions: additions.length,
    cumulativeSecondPassQuestions: 322 + additions.length,
    cumulativeManualQuestions: 907 + additions.length,
    themesAtTargetInSecondPass: Array.from({ length: 21 }, (_, index) => index + 1),
    targetPerTheme: 30
  };
})();
