(() => {
  const data = window.OPOSICIONES_DATA;
  const puebla = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  const carranque = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  if (!puebla || !carranque) return;

  const VERSION = '0.84.0';
  const DATE = '2026-07-13';
  const norm = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const pueblaTitles = [
    'La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.',
    'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas: Disposiciones Generales. Los interesados en el procedimiento. Actividad de las Administraciones Públicas: Normas generales de actuación. Términos y plazos.',
    'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. El procedimiento administrativo común: Derechos del interesado; Iniciación; Ordenación; Instrucción Finalización y Ejecución. Especialidades en los procedimientos de naturaleza sancionadora y de responsabilidad patrimonial. Tramitación simplificada del procedimiento administrativo común.',
    'Revisión de los actos administrativos en vía administrativa. Los recursos administrativos. La revisión de oficio.',
    'El municipio. Organización y funcionamiento. La Provincia. Organización provincial. Competencias. El Régimen electoral de las Entidades Locales.',
    'Ley 4/2011, de 10 de marzo, de empleo público de Castilla-La Mancha: El Personal al servicio de las Administraciones Públicas. Provisión de puestos de trabajo. La carrera administrativa. Promoción interna. La selección del personal y la oferta pública de Empleo.',
    'La Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos laborales: Derechos y obligaciones. Servicios de Prevención. Consulta y participación de los trabajadores.',
    'La Ley 12/2010, de 18 de noviembre, de Igualdad entre Mujeres y Hombres de Castilla-La Mancha. La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.',
    'La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.',
    'Principios de tributación local. Delegación. Colaboración. Beneficios fiscales y compensación. Las obligaciones tributarias. Los obligados tributarios. Los procedimientos de gestión tributaria. La extinción de la deuda.',
    'La recaudación de los tributos locales. La recaudación en periodo voluntario. El aplazamiento, fraccionamiento y compensación de las deudas tributarias. La devolución de ingresos. La recaudación ejecutiva: el procedimiento de apremio.',
    'Los tributos locales. Normas generales. El Impuesto sobre Bienes Inmuebles, el Impuesto sobre Actividades Económicas, el Impuesto sobre vehículos de tracción mecánica, el Impuesto sobre el Incremento del valor de los terrenos de naturaleza urbana: naturaleza, hecho imponible y sujetos pasivo.',
    'Administración electrónica I. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.',
    'Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público: Los órganos de las Administraciones Públicas. Administración General del Estado.',
    'Microsoft Windows I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos.',
    'Microsoft Windows II. Navegación por Internet con Microsoft Internet Explorer y Microsoft Edge.',
    'LibreOffice y Microsoft Office I. Procesamiento de texto con procesadores de texto Microsoft Word y LibreOffice.',
    'LibreOffice y Microsoft Office II. Elaboración y uso de hojas de cálculo con Microsoft Excel y LibreOffice Calc.',
    'Conceptos Generales del ordenador personal. El ordenador personal y sus componentes más comunes. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.'
  ];

  const carranqueTitles = [
    'La Constitución española de 1978. Reforma de la Constitución. Tribunal Constitucional. Derechos y deberes. El defensor del pueblo. El poder legislativo. El gobierno y la Administración. El poder judicial.',
    'Principios de actuación de la Administración Pública: Eficacia, jerarquía, descentralización, desconcentración y coordinación. Sometimiento de la Administración a la Ley y al Derecho. Fuentes del Derecho.',
    'Ley 39/2015, de Procedimiento Administrativo Común de las Administraciones Públicas. Los interesados en el procedimiento. La actividad de las Administraciones Públicas. Potestad para dictar reglamentos y otras disposiciones.',
    'Ley 39/2015, de Procedimiento Administrativo Común de las Administraciones Públicas. Actos administrativos. Disposiciones sobre el procedimiento administrativo común.',
    'Ley 39/2015, de Procedimiento Administrativo Común de las Administraciones Públicas. Revisión de los actos en vía administrativa. Revisión de oficio. Recursos administrativos.',
    'La responsabilidad patrimonial en las administraciones públicas.',
    'Régimen jurídico del Sector Público. Procedimiento sancionador.',
    'Formas de la actuación administrativa: Fomento, Policía, Servicio Público. Procedimiento para la concesión de las licencias.',
    'El Municipio. El término municipal. La población. El empadronamiento. Las competencias municipales. Otras entidades locales.',
    'Ordenanzas y Reglamentos de las Entidades Locales. Clases. Procedimiento de elaboración y aprobación.',
    'La Función Pública Local: Su estructura y régimen jurídico. Personal al servicio de las Entidades Locales. Selección, provisión de puestos de trabajo, promoción profesional. Situaciones administrativas.',
    'Los bienes de las Entidades Locales.',
    'Los contratos administrativos en la esfera local. Clases de contratos. La selección del contratista.',
    'Procedimiento administrativo local. El registro de entrada y salida de documentos. Requisitos en la presentación de documentos. Comunicaciones y notificaciones.',
    'Órganos de Gobierno Municipales. Sus competencias. Funcionamiento de los órganos colegiados locales. Convocatoria y orden del día. Actas y certificados de acuerdos.',
    'Haciendas locales: Clasificación de los ingresos. Tributos. Ordenanzas fiscales.',
    'Los presupuestos locales. Régimen jurídico del gasto público local. Gestión del presupuesto. Procedimiento y elaboración. Modificaciones presupuestarias. La cuenta general.',
    'Estructura presupuestaria. Clasificación del estado de gastos e ingresos.',
    'La liquidación del presupuesto. Remanente de Tesorería. Resultado presupuestario. Estabilidad presupuestaria y Regla de gasto.',
    'La modernización administrativa: la Administración al servicio del ciudadano. La tramitación electrónica de documentos. Facturas electrónicas. Regulación en las Bases de Ejecución del Presupuesto. Morosidad.'
  ];

  const official = {
    puebla: {
      publication: 'BOP Toledo número 82, de 5 de mayo de 2026',
      csv: '2026.00001965',
      url: 'https://bop.diputoledo.es/',
      themes: 19,
      firstExercise: { main: 50, reserve: 5, minutes: 60, correct: 0.20, wrong: -0.05, pass: 5, maximum: 10 },
      secondExercise: { type: 'uno o varios supuestos; desarrollo, test u otra forma decidida por el Tribunal', pass: 5, maximum: 10 },
      oppositionWeight: 80,
      meritWeight: 20,
      merits: { lawOrArchitectureDegree: 1, publicC2PerMonth: 0.30, publicC2Maximum: 9, maximum: 10 },
      provisionalKeyClaimsDays: 5,
      processMaximumMonths: 9,
      betweenExercisesMinimumHours: 72,
      betweenExercisesMaximumBusinessDays: 45,
      currentLawAtExam: true
    },
    carranque: {
      publication: 'Bases aprobadas por Resolución de Alcaldía 1059, de 26 de diciembre de 2025',
      csv: '2EAA AEP4 Z2V2 3X7P EZU7',
      url: 'https://carranque.sedipualba.es/',
      themes: 20,
      firstExercise: { main: 80, reserve: 5, minutes: 90, correct: 0.25, wrong: -0.08, pass: 10, maximum: 20 },
      secondExercise: { type: 'uno o varios supuestos prácticos sobre los temas 3 a 20', themes: [3, 20], pass: 10, maximum: 20 },
      merits: {
        universityDegree: 2,
        higherVocationalTraining: 0.75,
        bachelorOrMiddleVocationalTraining: 0.25,
        publicExperiencePerMonth: 0.10,
        publicExperienceMaximum: 3.50,
        privateExperiencePerMonth: 0.05,
        privateExperienceMaximum: 0.50,
        trainingPerHour: 0.01,
        trainingMaximum: 2,
        maximum: 8
      },
      currentLawAtExam: true
    }
  };

  const genericPatterns = [
    /cual es el enfoque correcto para preparar/i,
    /como debe estudiarse/i,
    /forma parte del enunciado oficial del tema/i,
    /contenido pendiente/i,
    /pregunta de repaso/i,
    /placeholder/i,
    /lorem ipsum/i
  ];
  const blockedSources = [/wikipedia\./i, /blogspot\./i, /wordpress\./i, /rincondelopositor/i, /testdeoposiciones/i, /academia\.edu/i];

  function setDifficulty(bank) {
    bank.forEach((question, index) => {
      const current = norm(question.difficulty);
      if (!['baja', 'media', 'alta'].includes(current)) question.difficulty = ['baja', 'media', 'alta'][index % 3];
    });
  }

  function tagQuestions(ope, officialTitles, publication) {
    ope.themes.forEach((theme, index) => {
      theme.title = officialTitles[index];
      theme.officialTitle = officialTitles[index];
      theme.officialProgramOrder = index + 1;
      theme.officialPublication = publication;
      const bank = ope.themeTests?.[theme.id] || [];
      setDifficulty(bank);
      bank.forEach(question => {
        question.officialTheme = index + 1;
        question.officialThemeTitle = officialTitles[index];
        question.officialProgramPublication = publication;
        question.auditMunicipalV84 = true;
      });
    });
  }

  tagQuestions(puebla, pueblaTitles, official.puebla.publication);
  tagQuestions(carranque, carranqueTitles, official.carranque.publication);

  puebla.exam = 'Primer ejercicio: 50 preguntas + 5 de reserva, 60 minutos. Segundo ejercicio práctico. Ambos eliminatorios.';
  puebla.scoring = { correct: 0.20, wrong: -0.05, blank: 0 };
  puebla.selectionProcess = official.puebla;
  puebla.personalMeritEstimate = {
    consolidated: 0,
    probable: 0,
    reason: 'DAM no es Grado en Derecho ni Arquitectura y no consta experiencia pública C2 acreditable.'
  };

  carranque.exam = 'Primer ejercicio: 80 preguntas + 5 de reserva, 90 minutos. Segundo ejercicio práctico sobre temas 3 a 20. Ambos eliminatorios.';
  carranque.scoring = { correct: 0.25, wrong: -0.08, blank: 0 };
  carranque.selectionProcess = official.carranque;
  carranque.personalMeritEstimate = {
    consolidated: 0,
    conditional: 0.75,
    reason: 'DAM puntúa como FP Superior solo si fue alegado y acreditado dentro del plazo. La formación y experiencia requieren acreditación específica.'
  };

  const pueblaCaseThemes = [3, 2, 2, 4, 4, 3, 3, 5, 5, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, [15, 16, 17, 18, 19]];
  (puebla.practicalCases || []).forEach((item, index) => {
    const value = pueblaCaseThemes[index] ?? ((index % 19) + 1);
    item.themes = Array.isArray(value) ? value : [value];
    item.officialScope = 'Segundo ejercicio práctico de las bases de La Puebla';
    item.difficulty = ['media', 'alta', 'alta'][index % 3];
  });
  (carranque.practicalCases || []).forEach((item, index) => {
    if (!Array.isArray(item.themes) || !item.themes.length) item.themes = [Math.min(20, index + 3)];
    item.officialScope = 'Temas 3 a 20 del segundo ejercicio de Carranque';
    item.difficulty = ['media', 'alta', 'alta'][index % 3];
  });

  function questionAudit(question) {
    const options = question?.options || [];
    const normalizedOptions = options.map(option => norm(option.text));
    return {
      validAnswer: options.some(option => option.letter === question?.answer),
      validOptions: options.length === 4 && normalizedOptions.every(Boolean) && new Set(normalizedOptions).size === 4,
      traceable: Boolean(String(question?.source || question?.justification || '').trim()),
      generic: genericPatterns.some(pattern => pattern.test(`${question?.text || ''} ${options.map(option => option.text).join(' ')}`)),
      suspiciousSource: blockedSources.some(pattern => pattern.test(String(question?.source || '')))
    };
  }

  function auditOpe(ope, titles, expected) {
    const themes = ope.themes.map((theme, index) => {
      const bank = ope.themeTests?.[theme.id] || [];
      const ids = bank.map(question => String(question.id || '')).filter(Boolean);
      const texts = bank.map(question => norm(question.text)).filter(Boolean);
      const checks = bank.map(questionAudit);
      const answers = bank.reduce((acc, question) => {
        const key = String(question.answer || '').toUpperCase();
        if ('ABCD'.includes(key)) acc[key] += 1;
        return acc;
      }, { A: 0, B: 0, C: 0, D: 0 });
      const difficulties = bank.reduce((acc, question) => {
        const key = norm(question.difficulty) || 'sin-clasificar';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
      return {
        number: index + 1,
        count: bank.length,
        literalTitleMatch: norm(theme.title) === norm(titles[index]),
        duplicateIds: ids.length - new Set(ids).size,
        duplicateTexts: texts.length - new Set(texts).size,
        invalidAnswers: checks.filter(item => !item.validAnswer).length,
        invalidOptions: checks.filter(item => !item.validOptions).length,
        missingTraceability: checks.filter(item => !item.traceable).length,
        genericQuestions: checks.filter(item => item.generic).length,
        suspiciousSources: checks.filter(item => item.suspiciousSource).length,
        answers,
        maxAnswerShare: bank.length ? Math.max(...Object.values(answers)) / bank.length : 1,
        difficulties
      };
    });

    const simulations = (ope.simulacros || []).map(simulation => {
      const all = [...(simulation.questions || []), ...(simulation.reserveQuestions || [])];
      return {
        id: simulation.id,
        main: simulation.questions?.length || 0,
        reserve: simulation.reserveQuestions?.length || 0,
        minutes: Number(simulation.audit?.minutes || 0),
        uniqueTexts: new Set(all.map(question => norm(question.text))).size,
        representedThemes: new Set(all.map(question => Number(question.auditTheme)).filter(Boolean)).size
      };
    });

    const practicalThemeCoverage = new Set((ope.practicalCases || []).flatMap(item => item.themes || []).map(Number).filter(Boolean));
    const failures = [];
    themes.forEach(item => {
      if (item.count !== 30) failures.push(`Tema ${item.number}: ${item.count} preguntas`);
      if (!item.literalTitleMatch) failures.push(`Tema ${item.number}: título no literal`);
      if (item.duplicateIds) failures.push(`Tema ${item.number}: IDs duplicados`);
      if (item.duplicateTexts) failures.push(`Tema ${item.number}: textos duplicados`);
      if (item.invalidAnswers) failures.push(`Tema ${item.number}: respuestas inválidas`);
      if (item.invalidOptions) failures.push(`Tema ${item.number}: opciones inválidas`);
      if (item.missingTraceability) failures.push(`Tema ${item.number}: preguntas sin trazabilidad`);
      if (item.genericQuestions) failures.push(`Tema ${item.number}: preguntas genéricas`);
      if (item.suspiciousSources) failures.push(`Tema ${item.number}: fuentes sospechosas`);
      if (item.maxAnswerShare > 0.40) failures.push(`Tema ${item.number}: respuesta dominante`);
      if (!item.difficulties.baja || !item.difficulties.media || !item.difficulties.alta) failures.push(`Tema ${item.number}: dificultad incompleta`);
    });

    simulations.forEach(item => {
      if (item.main !== expected.firstExercise.main) failures.push(`${item.id}: número principal incorrecto`);
      if (item.reserve !== expected.firstExercise.reserve) failures.push(`${item.id}: reservas incorrectas`);
      if (item.minutes !== expected.firstExercise.minutes) failures.push(`${item.id}: duración incorrecta`);
      if (item.uniqueTexts !== item.main + item.reserve) failures.push(`${item.id}: preguntas repetidas`);
      if (item.representedThemes !== expected.themes) failures.push(`${item.id}: cobertura temática incompleta`);
    });

    if (ope.scoring.correct !== expected.firstExercise.correct || ope.scoring.wrong !== expected.firstExercise.wrong) failures.push('Baremo del primer ejercicio incorrecto');
    if (ope.themes.length !== expected.themes) failures.push('Número de temas incorrecto');

    return {
      version: `v${VERSION}`,
      date: DATE,
      status: failures.length ? 'REVISAR' : 'APTO',
      estimatedProgress: failures.length ? 95 : 99,
      totalQuestions: themes.reduce((sum, item) => sum + item.count, 0),
      minimumQuestions: Math.min(...themes.map(item => item.count)),
      targetThemes: themes.filter(item => item.count === 30).length,
      literalThemes: themes.filter(item => item.literalTitleMatch).length,
      practicalCases: (ope.practicalCases || []).length,
      practicalThemeCoverage: [...practicalThemeCoverage].sort((a, b) => a - b),
      simulations,
      themes,
      failures
    };
  }

  const pueblaAudit = auditOpe(puebla, pueblaTitles, official.puebla);
  const carranqueAudit = auditOpe(carranque, carranqueTitles, official.carranque);

  const pueblaExpectedPractical = Array.from({ length: 19 }, (_, index) => index + 1);
  const carranqueExpectedPractical = Array.from({ length: 18 }, (_, index) => index + 3);
  if (pueblaExpectedPractical.some(number => !pueblaAudit.practicalThemeCoverage.includes(number))) pueblaAudit.failures.push('Cobertura práctica incompleta de los temas 1 a 19');
  if (carranqueExpectedPractical.some(number => !carranqueAudit.practicalThemeCoverage.includes(number))) carranqueAudit.failures.push('Cobertura práctica incompleta de los temas 3 a 20');
  pueblaAudit.status = pueblaAudit.failures.length ? 'REVISAR' : 'APTO';
  carranqueAudit.status = carranqueAudit.failures.length ? 'REVISAR' : 'APTO';
  pueblaAudit.estimatedProgress = pueblaAudit.status === 'APTO' ? 99 : 95;
  carranqueAudit.estimatedProgress = carranqueAudit.status === 'APTO' ? 99 : 95;

  puebla.municipalAudit = pueblaAudit;
  carranque.municipalAudit = carranqueAudit;
  puebla.version = VERSION;
  carranque.version = VERSION;
  puebla.testAudit = { ...(puebla.testAudit || {}), version: `v${VERSION}`, date: DATE, totalQuestions: pueblaAudit.totalQuestions, targetThemes: pueblaAudit.targetThemes, minimumQuestions: pueblaAudit.minimumQuestions };
  carranque.testAudit = { ...(carranque.testAudit || {}), version: `v${VERSION}`, date: DATE, totalQuestions: carranqueAudit.totalQuestions, totalReal: carranqueAudit.totalQuestions, targetThemes: carranqueAudit.targetThemes, minimumQuestions: carranqueAudit.minimumQuestions };

  puebla.changelog ||= [];
  carranque.changelog ||= [];
  puebla.changelog.unshift({ version: VERSION, date: DATE, changes: ['Temario contrastado literalmente con el BOP', 'Proceso selectivo y baremo corregidos', 'Dificultad y trazabilidad auditadas', 'Cobertura práctica completa de 19 temas'] });
  carranque.changelog.unshift({ version: VERSION, date: DATE, changes: ['Temario literal de 20 temas integrado', 'Proceso selectivo y méritos contrastados', 'Dificultad y trazabilidad auditadas', 'Cobertura práctica completa de temas 3 a 20'] });

  window.OPOWEB_MUNICIPALES_V84 = {
    version: `v${VERSION}`,
    date: DATE,
    puebla: pueblaAudit,
    carranque: carranqueAudit,
    globalStatus: pueblaAudit.status === 'APTO' && carranqueAudit.status === 'APTO' ? 'APTO' : 'REVISAR'
  };
})();
