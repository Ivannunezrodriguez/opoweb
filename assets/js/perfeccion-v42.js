(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const VERSION = '0.42.0';
  const normalize = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ').trim();

  const inactive = new Set(['ventas-aux-admin-2026', 'ventas-pena-aguilera-aux-admin-2026']);
  data.oposiciones = data.oposiciones.filter(ope => !inactive.has(ope.id));

  const specs = {
    'puebla-aux-admin-2026': {
      main: 50, reserve: 5, minutes: 60,
      practical: 'Segundo ejercicio obligatorio y eliminatorio: uno o varios supuestos prácticos; el Tribunal puede fijar desarrollo, test u otro formato.',
      source: 'BOP Toledo nº 82, 5 de mayo de 2026', verified: '2026-07-10'
    },
    'carranque-aux-admin-2026': {
      main: 80, reserve: 5, minutes: 90,
      practical: 'Segundo ejercicio obligatorio y eliminatorio: uno o varios supuestos prácticos sobre los temas 3 a 20.',
      source: 'Bases firmadas el 26 de diciembre de 2025 y publicadas en el tablón el 7 de enero de 2026', verified: '2026-07-10'
    },
    'diputacion-toledo-admin-2026': {
      main: 50, reserve: 5, minutes: 60,
      practical: 'Segundo ejercicio obligatorio y eliminatorio de carácter práctico conforme al anexo específico de Administrativo/a C1.',
      source: 'BOP Toledo nº 118, 25 de junio de 2026', verified: '2026-07-10'
    },
    'uc3m-aux-admin-2026': {
      main: 70, reserve: 5, minutes: 60,
      practical: 'No existe ejercicio práctico oficial. Los casos de estudio son material de comprensión y transferencia.',
      source: 'BOE nº 163, 6 de julio de 2026, y bases UC3M', verified: '2026-07-10'
    }
  };

  function isGeneric(question) {
    const text = normalize(`${question?.text || ''} ${question?.justification || ''}`);
    return [
      'como debe estudiarse el punto oficial',
      'cual es el enfoque correcto para preparar',
      'que respuesta esta mejor orientada a examen y supuesto practico',
      'parte del enunciado oficial localiza norma vigente',
      'el examen exige partir del programa oficial',
      'la respuesta debe ser autocontenida norma o concepto',
      'responder de forma general sin concretar norma paso ni consecuencia',
      'concepto alcance y aplicacion practica',
      'debes estudiarlo sin anadir paja'
    ].some(fragment => text.includes(fragment));
  }

  function isValid(question) {
    const options = Array.isArray(question?.options) ? question.options.slice(0, 4) : [];
    const texts = options.map(option => normalize(option?.text));
    return Boolean(question?.text && question?.justification && options.length === 4 &&
      texts.every(Boolean) && new Set(texts).size === 4 && options.some(option => option.letter === question.answer));
  }

  const uc3m = data.oposiciones.find(ope => ope.id === 'uc3m-aux-admin-2026');
  const sourceBank = number => {
    const theme = uc3m?.themes?.find(item => Number(item.number) === Number(number));
    return theme ? (uc3m.themeTests?.[theme.id] || []) : [];
  };

  function scopedQuestions(title) {
    const value = normalize(title);
    let numbers = [];
    let filter = null;

    if (value.includes('constitucion')) numbers = [1];
    else if (value.includes('ley 39 2015') && (value.includes('disposiciones generales') || value.includes('interesados') || value.includes('terminos y plazos') || value.includes('actividad de las administraciones'))) numbers = [2];
    else if (value.includes('ley 39 2015') && (value.includes('procedimiento administrativo comun') || value.includes('iniciacion') || value.includes('instruccion') || value.includes('finalizacion') || value.includes('ejecucion'))) numbers = [3];
    else if (value.includes('revision de los actos') || value.includes('recursos administrativos') || value.includes('revision de oficio')) {
      numbers = [3];
      filter = /(recurso|alzada|reposici|revision|nulidad|anulabilidad|lesividad|error de hecho|acto firme)/;
    }
    else if (value.includes('acto administrativo')) {
      numbers = [2, 3];
      filter = /(acto|notific|eficacia|nulidad|anulabilidad|silencio|resoluci|motivaci|publicaci)/;
    }
    else if (value.includes('ley 40 2015') && (value.includes('funcionamiento electronico') || value.includes('administracion electronica'))) numbers = [5];
    else if (value.includes('ley 40 2015') || value.includes('organos de las administraciones')) numbers = [4];
    else if (value.includes('administracion electronica') || value.includes('sede electronica')) numbers = [5];
    else if (value.includes('registro de entrada') || value.includes('registro presencial') || value.includes('comunicaciones y notificaciones')) {
      numbers = [2, 3, 5];
      filter = /(registro|notific|comunic|documento|copia|presenta|electron|sede)/;
    }
    else if (value.includes('proteccion de datos') || value.includes('ley organica 3 2018')) numbers = [6];
    else if (value.includes('igualdad') || value.includes('ley organica 3 2007')) numbers = [8];
    else if (value.includes('prevencion de riesgos') || value.includes('ley 31 1995')) numbers = [12];
    else if (value.includes('trebep')) numbers = [10];
    else if (value.includes('contratos') || value.includes('contratacion')) numbers = [20];

    let questions = numbers.flatMap(sourceBank).filter(isValid).filter(question => !filter || filter.test(normalize(`${question.text} ${question.justification}`)));
    const seen = new Set();
    questions = questions.filter(question => {
      const key = normalize(question.text);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    return questions;
  }

  function cloneQuestion(question, theme, index, source) {
    return {
      ...question,
      id: `${theme.id}-shared-v42-q${index + 1}`,
      sourceOpe: 'uc3m-aux-admin-2026',
      sourceTheme: source,
      sharedQuestion: true
    };
  }

  let replacedBanks = 0;
  let reusedQuestions = 0;
  data.oposiciones.filter(ope => ope.id !== 'uc3m-aux-admin-2026').forEach(ope => {
    (ope.themes || []).forEach(theme => {
      const current = ope.themeTests?.[theme.id] || [];
      const genericRatio = current.length ? current.filter(isGeneric).length / current.length : 1;
      const shared = scopedQuestions(theme.title);
      if (genericRatio >= 0.5 && shared.length >= 8) {
        const target = Math.min(30, shared.length);
        ope.themeTests[theme.id] = shared.slice(0, target).map((question, index) => cloneQuestion(question, theme, index, 'Banco común reutilizado por coincidencia normativa'));
        theme.sharedBankV42 = true;
        theme.sharedBankCount = target;
        replacedBanks += 1;
        reusedQuestions += target;
      }
    });
  });

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      value ^= text.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }

  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));

  function officialSimulation(ope, seed) {
    const spec = ope.examSpec;
    const themes = [...(ope.themes || [])].sort((a, b) => Number(a.number) - Number(b.number));
    const pools = themes.map(theme => ({ theme, questions: shuffled((ope.themeTests?.[theme.id] || []).filter(isValid), seed * 101 + Number(theme.number)) }));
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < spec.main + spec.reserve && round < 200) {
      for (const pool of pools) {
        const question = pool.questions[round % Math.max(pool.questions.length, 1)];
        if (!question) continue;
        const key = normalize(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= spec.main + spec.reserve) break;
      }
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2027);
    const main = ordered.slice(0, spec.main).map((question, index) => ({ ...question, id: `${ope.id}-v42-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(spec.main, spec.main + spec.reserve).map((question, index) => ({ ...question, id: `${ope.id}-v42-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `${ope.id}-v42-sim${seed}`,
      title: `Simulacro oficial ${seed} · ${spec.main} + ${spec.reserve} reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, minutes: spec.minutes, expectedMain: spec.main, expectedReserve: spec.reserve }
    };
  }

  function auditOpe(ope) {
    const themes = (ope.themes || []).map(theme => {
      const questions = (ope.themeTests?.[theme.id] || []).filter(isValid);
      const generic = questions.filter(isGeneric).length;
      const content = questions.length - generic;
      const state = content >= 30 ? 'objetivo 30+' : content >= 20 ? 'banco sólido' : content >= 10 ? 'base real' : content > 0 ? 'insuficiente' : 'solo plantilla';
      theme.globalAuditV42 = { total: questions.length, content, generic, state, target: 30 };
      return { number: Number(theme.number), title: theme.title, total: questions.length, content, generic, state };
    });
    const totals = themes.reduce((acc, item) => ({ total: acc.total + item.total, content: acc.content + item.content, generic: acc.generic + item.generic }), { total: 0, content: 0, generic: 0 });
    const readyThemes = themes.filter(item => item.content >= 20).length;
    const targetThemes = themes.filter(item => item.content >= 30).length;
    const genericThemes = themes.filter(item => item.generic > item.content).length;
    return { version: `v${VERSION}`, themes, ...totals, readyThemes, targetThemes, genericThemes, targetPerTheme: 30 };
  }

  data.oposiciones.forEach(ope => {
    ope.examSpec = specs[ope.id] || { main: ope.simulationSize || 50, reserve: 0, minutes: null, practical: '', source: 'Pendiente', verified: '2026-07-10' };
    ope.simulationSize = ope.examSpec.main;
    ope.simulacros = [1, 2, 3].map(seed => officialSimulation(ope, seed));
    ope.globalTestAudit = auditOpe(ope);
    ope.version = VERSION;
    ope.changelog ||= [];
    if (!ope.changelog.some(item => item.version === VERSION)) {
      ope.changelog.unshift({
        version: VERSION,
        date: '2026-07-10',
        changes: [
          'Formato oficial de simulacro con preguntas principales y cinco de reserva',
          'Auditoría de preguntas reales frente a preguntas de plantilla',
          'Reutilización segura de bancos comunes cuando coincide la norma y el alcance',
          'Eliminación definitiva de OPE inactivas'
        ]
      });
    }
  });

  window.OPOWEB_PERFECCION_V42 = {
    version: `v${VERSION}`,
    replacedBanks,
    reusedQuestions,
    activeOpes: data.oposiciones.map(ope => ope.id)
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();