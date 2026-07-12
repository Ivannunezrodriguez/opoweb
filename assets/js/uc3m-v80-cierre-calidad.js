(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const VERSION = '0.80.0';
  const DATE = '2026-07-12';
  const normalize = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const genericPatterns = [
    /pregunta de repaso/i,
    /contenido pendiente/i,
    /opcion correcta/i,
    /respuesta correcta/i,
    /placeholder/i,
    /lorem ipsum/i
  ];
  const suspiciousSourcePatterns = [
    /wikipedia\./i,
    /blogspot\./i,
    /wordpress\./i,
    /rincondelopositor/i,
    /testdeoposiciones/i,
    /academia\.edu/i
  ];

  const themeAudits = ope.themes.map(theme => {
    const bank = ope.themeTests?.[theme.id] || [];
    const ids = bank.map(question => question.id).filter(Boolean);
    const texts = bank.map(question => normalize(question.text)).filter(Boolean);
    const difficulty = bank.reduce((acc, question) => {
      const key = normalize(question.difficulty) || 'sin-clasificar';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const answerBalance = bank.reduce((acc, question) => {
      const key = String(question.answer || '').toUpperCase();
      if ('ABCD'.includes(key)) acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, { A: 0, B: 0, C: 0, D: 0 });
    const maxAnswerShare = bank.length
      ? Math.max(...Object.values(answerBalance)) / bank.length
      : 1;

    return {
      number: Number(theme.number),
      id: theme.id,
      title: theme.title,
      count: bank.length,
      duplicateIds: ids.length - new Set(ids).size,
      duplicateTexts: texts.length - new Set(texts).size,
      invalidAnswers: bank.filter(question => !question.options?.some(option => option.letter === question.answer)).length,
      invalidOptions: bank.filter(question => question.options?.length !== 4 || new Set((question.options || []).map(option => normalize(option.text))).size !== 4).length,
      missingTraceability: bank.filter(question => !question.justification && !question.source).length,
      genericQuestions: bank.filter(question => genericPatterns.some(pattern => pattern.test(question.text || ''))).length,
      suspiciousSources: bank
        .filter(question => suspiciousSourcePatterns.some(pattern => pattern.test(question.source || '')))
        .map(question => ({ id: question.id, source: question.source })),
      difficulty,
      answerBalance,
      maxAnswerShare: Number(maxAnswerShare.toFixed(4))
    };
  });

  const totalQuestions = themeAudits.reduce((sum, item) => sum + item.count, 0);
  const minimumQuestions = Math.min(...themeAudits.map(item => item.count));
  const targetThemes = themeAudits.filter(item => item.count >= 30).length;
  const sourceQuestions = ope.themes.flatMap(theme => ope.themeTests?.[theme.id] || []).filter(question => question.source).length;
  const institutionalQuestions = ope.themes
    .flatMap(theme => ope.themeTests?.[theme.id] || [])
    .filter(question => question.institutional).length;
  const failures = themeAudits.flatMap(item => {
    const issues = [];
    if (item.count < 30) issues.push('menos de 30 preguntas');
    if (item.duplicateIds) issues.push(`${item.duplicateIds} IDs duplicados`);
    if (item.duplicateTexts) issues.push(`${item.duplicateTexts} textos duplicados`);
    if (item.invalidAnswers) issues.push(`${item.invalidAnswers} respuestas inválidas`);
    if (item.invalidOptions) issues.push(`${item.invalidOptions} estructuras de opciones inválidas`);
    if (item.missingTraceability) issues.push(`${item.missingTraceability} preguntas sin trazabilidad`);
    if (item.genericQuestions) issues.push(`${item.genericQuestions} preguntas genéricas`);
    if (item.suspiciousSources.length) issues.push(`${item.suspiciousSources.length} fuentes no fiables`);
    if (item.maxAnswerShare > 0.55) issues.push(`respuesta dominante ${(item.maxAnswerShare * 100).toFixed(1)} %`);
    return issues.map(issue => ({ theme: item.number, issue }));
  });

  const theme17 = ope.themes.find(item => Number(item.number) === 17);
  if (theme17) {
    theme17.legalTransition = {
      norm: 'Real Decreto 534/2024',
      article: '23.2',
      effectiveDate: '2026-07-22',
      instruction: 'Revisar la redacción vigente del artículo 23.2 antes de memorizar parámetros anuales de admisión.'
    };
    theme17.annualAdmissionNote = 'Las ponderaciones, cupos, plazas, calendarios y notas de corte son datos anuales. No se incorporan como regla estable sin publicación oficial específica del curso.';
  }

  const simulations = (ope.simulacros || []).map(simulation => {
    const all = [...(simulation.questions || []), ...(simulation.reserveQuestions || [])];
    return {
      id: simulation.id,
      main: simulation.questions?.length || 0,
      reserve: simulation.reserveQuestions?.length || 0,
      uniqueTexts: new Set(all.map(question => normalize(question.text))).size,
      representedThemes: new Set(all.map(question => Number(question.auditTheme)).filter(Boolean)).size
    };
  });

  const audit = {
    version: `v${VERSION}`,
    date: DATE,
    status: failures.length ? 'REVISAR' : 'APTO',
    totalQuestions,
    targetThemes,
    minimumQuestions,
    sourceQuestions,
    institutionalQuestions,
    failures,
    themes: themeAudits,
    simulations,
    admissionPolicy: {
      annualDataIncluded: false,
      reason: 'Los parámetros anuales no deben confundirse con la normativa estable ni memorizarse sin fuente oficial vigente.',
      legalTransition: theme17?.legalTransition || null
    }
  };

  ope.finalQualityAudit = audit;
  ope.testAudit = {
    ...(ope.testAudit || {}),
    version: `v${VERSION}`,
    date: DATE,
    totalQuestions,
    targetThemes,
    minimumQuestions,
    themes: themeAudits.map(item => ({ number: item.number, count: item.count, target: 30 })),
    genericQuestions: themeAudits.reduce((sum, item) => sum + item.genericQuestions, 0)
  };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}),
    version: `v${VERSION}`,
    estimatedProgress: 99,
    completed: [
      'Auditoría final de estructura, trazabilidad, duplicados, equilibrio y fuentes ejecutada',
      'Transición normativa del artículo 23.2 del Real Decreto 534/2024 señalizada',
      'Datos anuales de admisión separados de la normativa estable',
      'Simulacros 70 + 5 verificados estructuralmente'
    ],
    pending: [
      'Validación real en navegador, móvil, tablet y PWA sin conexión',
      'Actualizar datos anuales de admisión solo cuando exista publicación oficial específica',
      'Revisar la redacción vigente del artículo 23.2 desde el 22 de julio de 2026'
    ]
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: DATE,
    changes: [
      'Auditoría final de calidad del banco UC3M',
      'Control de trazabilidad, duplicados, opciones, fuentes y equilibrio',
      'Alerta de transición normativa para admisión',
      'Separación expresa entre normativa estable y parámetros anuales'
    ]
  });

  window.OPOWEB_UC3M_V80 = audit;
})();
