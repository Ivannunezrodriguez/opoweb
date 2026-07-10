(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.58.0';
  const NUMBER = 19;
  const norm = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const sections = [
    ['Principios de la potestad disciplinaria', [
      'La potestad disciplinaria se rige por legalidad y tipicidad, irretroactividad salvo norma favorable, proporcionalidad, culpabilidad, presunción de inocencia y prohibición de doble sanción cuando exista identidad de sujeto, hecho y fundamento.',
      'La proporcionalidad obliga a valorar intencionalidad, negligencia, daños, participación, beneficio, reiteración y reincidencia; los antecedentes cancelados o cancelables no pueden computarse.'
    ]],
    ['Faltas y sanciones', [
      'Las faltas se clasifican en muy graves, graves y leves. La ley tipifica conductas como discriminación, abandono del servicio, desobediencia abierta, incumplimiento de incompatibilidades, faltas de asistencia, incorrección o negligencia.',
      'Las sanciones comprenden separación del servicio, suspensión firme, traslado forzoso, demérito, suspensión de disponibilidad en bolsas y apercibimiento por escrito, con límites distintos según la gravedad.'
    ]],
    ['Responsabilidad, prescripción y cancelación', [
      'Responden las personas autoras y, en determinados casos, quienes induzcan, cooperen o encubran. La responsabilidad disciplinaria se extingue por cumplimiento, fallecimiento o prescripción.',
      'Las faltas muy graves, graves y leves prescriben a los tres años, dos años y seis meses; las sanciones correspondientes prescriben a los tres años, dos años y un año. La cancelación ordinaria de anotaciones se produce tras uno, dos o tres años según la gravedad.'
    ]],
    ['Procedimiento y medidas cautelares', [
      'No puede imponerse sanción sin procedimiento. Las faltas leves siguen procedimiento sumario con audiencia; las fases instructora y sancionadora deben encomendarse a órganos distintos.',
      'Los procedimientos por faltas muy graves o graves duran como máximo doce meses. La suspensión provisional disciplinaria no puede exceder de seis meses, salvo paralización imputable a la persona interesada.'
    ]]
  ];

  const raw = [
    ['¿Qué prohíbe el principio de tipicidad en materia disciplinaria?', 'Sancionar conductas no tipificadas legalmente como falta.', ['Aplicar una norma posterior más favorable.', 'Graduar una sanción según la intencionalidad.', 'Adoptar medidas cautelares motivadas.'], 'Artículo 127 de la Ley 4/2011.'],
    ['¿Puede aplicarse retroactivamente una norma disciplinaria?', 'Sí, cuando favorezca a la persona presuntamente responsable.', ['Sí, siempre que agrave la sanción.', 'No, en ningún caso.', 'Solo si lo autoriza el órgano instructor.'], 'Artículo 128 de la Ley 4/2011.'],
    ['¿Cuál de estos es un criterio legal de graduación de la sanción?', 'Los daños o perjuicios causados a la Administración o a la ciudadanía.', ['La antigüedad sin relación con los hechos.', 'La residencia habitual del infractor.', 'La categoría presupuestaria del puesto.'], 'Artículo 129 de la Ley 4/2011.'],
    ['¿Qué diferencia existe entre reiteración y reincidencia?', 'La reincidencia exige una sanción firme previa por falta de la misma naturaleza.', ['La reiteración exige siempre una falta de la misma naturaleza.', 'No existe diferencia jurídica entre ambas.', 'La reincidencia solo se aplica a faltas leves.'], 'Artículo 129.1.e de la Ley 4/2011.'],
    ['¿Qué exige el principio de culpabilidad?', 'Que solo sea sancionado quien resulte responsable, incluso por simple inobservancia.', ['Que toda infracción produzca responsabilidad objetiva.', 'Que solo puedan sancionarse conductas dolosas.', 'Que la culpa se presuma desde la incoación.'], 'Artículo 130 de la Ley 4/2011.'],
    ['¿Cuándo impide la concurrencia de sanciones una nueva sanción disciplinaria?', 'Cuando existe identidad de sujeto, hecho y fundamento con una sanción penal o administrativa.', ['Cuando existe únicamente identidad de sujeto.', 'Siempre que haya un procedimiento penal, aunque trate hechos distintos.', 'Solo cuando la sanción administrativa sea leve.'], 'Artículo 132 de la Ley 4/2011.'],
    ['¿Cómo clasifica la Ley 4/2011 las faltas disciplinarias?', 'En muy graves, graves y leves.', ['En graves y leves exclusivamente.', 'En principales, accesorias y residuales.', 'En dolosas y culposas únicamente.'], 'Artículo 133 de la Ley 4/2011.'],
    ['¿Cuál de estas sanciones puede imponerse por una falta muy grave?', 'La separación del servicio.', ['Solo apercibimiento verbal.', 'Suspensión máxima de treinta días.', 'Multa económica independiente de la nómina.'], 'Artículos 137 y 138 de la Ley 4/2011.'],
    ['¿Qué duración puede tener la suspensión firme por falta grave?', 'Más de treinta días y menos de dos años.', ['De dos a seis años.', 'De uno a treinta días.', 'Exactamente cinco años.'], 'Artículo 138.2.a de la Ley 4/2011.'],
    ['¿Qué sanción puede imponerse por una falta leve?', 'Apercibimiento por escrito.', ['Separación del servicio.', 'Traslado forzoso con cambio de residencia.', 'Suspensión de funciones de dos a seis años.'], 'Artículo 138.3 de la Ley 4/2011.'],
    ['¿Quién puede incurrir en la misma responsabilidad que la persona autora?', 'Quien induzca o coopere mediante un acto sin el cual la falta no se habría cometido.', ['Cualquier compañero del mismo servicio.', 'Solo el superior jerárquico.', 'Quien conozca los hechos después de prescritos.'], 'Artículo 139.2 de la Ley 4/2011.'],
    ['¿Cuándo prescriben las faltas leves?', 'A los seis meses.', ['Al año.', 'A los dos años.', 'A los tres años.'], 'Artículo 141.1 de la Ley 4/2011.'],
    ['¿Cuándo prescriben las sanciones impuestas por faltas leves?', 'Al año.', ['A los seis meses.', 'A los dos años.', 'A los tres años.'], 'Artículo 141.3 de la Ley 4/2011.'],
    ['¿Qué plazo ordinario debe transcurrir para cancelar una sanción por falta grave?', 'Dos años desde el cumplimiento, sin nueva sanción en ese periodo.', ['Seis meses desde la incoación.', 'Un año desde la firmeza.', 'Tres años desde la comisión de la falta.'], 'Artículo 142.2 de la Ley 4/2011.'],
    ['¿Cuál es la duración máxima del procedimiento disciplinario por faltas muy graves o graves?', 'Doce meses.', ['Seis meses.', 'Dieciocho meses.', 'Dos años.'], 'Artículo 143.6 de la Ley 4/2011.'],
    ['¿Qué separación debe respetar el procedimiento disciplinario?', 'La fase instructora y la sancionadora deben encomendarse a órganos distintos.', ['La denuncia y la prueba deben tramitarse por Administraciones distintas.', 'La resolución y la notificación deben producirse en años diferentes.', 'La audiencia y la propuesta deben recaer en la persona expedientada.'], 'Artículo 143.4 de la Ley 4/2011.'],
    ['¿Cuánto puede durar como regla la suspensión provisional en un expediente disciplinario?', 'Como máximo seis meses, salvo paralización imputable a la persona interesada.', ['Como máximo un mes sin excepción.', 'Hasta la jubilación de la persona expedientada.', 'Doce meses en todo caso.'], 'Artículo 144.2 de la Ley 4/2011.'],
    ['¿Qué debe hacerse si los hechos pueden constituir infracción penal?', 'Comunicarlos al órgano judicial competente o al Ministerio Fiscal y suspender el procedimiento en los supuestos legales.', ['Continuar siempre sin informar a la jurisdicción penal.', 'Archivar automáticamente sin resolución.', 'Imponer primero la sanción disciplinaria.'], 'Artículo 145 de la Ley 4/2011.']
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const buildQuestion = (row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (NUMBER + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v58-t${NUMBER}-q${index + 1}`,
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
  theme.reviewTable = [['Bloque', 'Qué dominar'], ...sections.map(([heading]) => [heading, 'Principio, conducta, sanción, plazo y procedimiento'])];

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
        const question = pool.questions[(round + seed * 13 + poolIndex * 7) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5813);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v58-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v58-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v58-sim${seed}`,
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
      `Añadidas ${additions.length} preguntas reales al tema 19`,
      'Tema 19 elevado al objetivo mínimo de 30 preguntas reales',
      'Desarrollado el régimen disciplinario de la Ley 4/2011',
      'Regenerados los tres simulacros con exclusión del tema 22 pendiente'
    ]
  });

  window.OPOWEB_DIPUTACION_V58 = {
    version: `v${VERSION}`,
    reinforcedThemes: [19],
    addedQuestions: additions.length,
    cumulativeSecondPassQuestions: 274 + additions.length,
    cumulativeManualQuestions: 859 + additions.length,
    themesAtTargetInSecondPass: Array.from({ length: 19 }, (_, index) => index + 1),
    targetPerTheme: 30
  };
})();
