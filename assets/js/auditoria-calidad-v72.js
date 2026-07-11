(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones) return;

  const norm = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const genericPatterns = [
    'cual es el enfoque correcto para preparar',
    'como debe estudiarse',
    'forma parte del enunciado oficial del tema',
    'plantilla generica',
    'pregunta de ejemplo'
  ];

  const issues = [];
  const totals = {
    invalidAnswers: 0,
    invalidOptions: 0,
    duplicateIds: 0,
    missingJustifications: 0,
    genericQuestions: 0,
    themeDuplicates: 0,
    crossThemeDuplicates: 0,
    shortJustifications: 0
  };

  function addIssue(level, code, ope, theme, question, detail) {
    issues.push({
      level,
      code,
      ope: ope.id,
      theme: Number(theme?.number || question?.auditTheme || 0),
      questionId: question?.id || null,
      detail
    });
  }

  const oposiciones = data.oposiciones.map(ope => {
    const seenIds = new Set();
    const allText = new Map();
    const answerCounts = { A: 0, B: 0, C: 0, D: 0 };
    let questions = 0;
    let invalidAnswers = 0;
    let invalidOptions = 0;
    let duplicateIds = 0;
    let missingJustifications = 0;
    let genericQuestions = 0;
    let themeDuplicates = 0;
    let crossThemeDuplicates = 0;
    let shortJustifications = 0;

    (ope.themes || []).forEach(theme => {
      const themeSeen = new Set();
      const bank = ope.themeTests?.[theme.id] || [];
      bank.forEach(question => {
        questions += 1;
        const textKey = norm(question.text);
        const options = Array.isArray(question.options) ? question.options : [];
        const letters = options.map(option => option.letter);
        const optionTexts = options.map(option => norm(option.text));
        const justification = String(question.justification || question.source || '').trim();

        if (!question.id || seenIds.has(question.id)) {
          duplicateIds += 1;
          totals.duplicateIds += 1;
          addIssue('error', 'duplicate-id', ope, theme, question, question.id || 'ID vacío');
        } else seenIds.add(question.id);

        if (!question.text || question.text.trim().length < 12) {
          invalidOptions += 1;
          totals.invalidOptions += 1;
          addIssue('error', 'invalid-text', ope, theme, question, 'Enunciado vacío o demasiado corto');
        }

        const optionStructureValid = options.length === 4
          && new Set(letters).size === 4
          && letters.every(letter => ['A', 'B', 'C', 'D'].includes(letter))
          && optionTexts.every(Boolean)
          && new Set(optionTexts).size === 4;
        if (!optionStructureValid) {
          invalidOptions += 1;
          totals.invalidOptions += 1;
          addIssue('error', 'invalid-options', ope, theme, question, `Opciones: ${options.length}; letras: ${letters.join(',')}`);
        }

        if (!options.some(option => option.letter === question.answer)) {
          invalidAnswers += 1;
          totals.invalidAnswers += 1;
          addIssue('error', 'invalid-answer', ope, theme, question, `Respuesta marcada: ${question.answer}`);
        } else if (answerCounts[question.answer] !== undefined) answerCounts[question.answer] += 1;

        if (!justification) {
          missingJustifications += 1;
          totals.missingJustifications += 1;
          addIssue('error', 'missing-justification', ope, theme, question, 'Sin justificación ni fuente');
        } else if (justification.length < 12) {
          shortJustifications += 1;
          totals.shortJustifications += 1;
          addIssue('warning', 'short-justification', ope, theme, question, justification);
        }

        const combined = `${textKey} ${norm(justification)} ${optionTexts.join(' ')}`;
        if (genericPatterns.some(pattern => combined.includes(pattern))) {
          genericQuestions += 1;
          totals.genericQuestions += 1;
          addIssue('error', 'generic-question', ope, theme, question, question.text);
        }

        if (textKey) {
          if (themeSeen.has(textKey)) {
            themeDuplicates += 1;
            totals.themeDuplicates += 1;
            addIssue('error', 'duplicate-in-theme', ope, theme, question, question.text);
          } else themeSeen.add(textKey);

          const previous = allText.get(textKey);
          if (previous && previous.theme !== Number(theme.number)) {
            crossThemeDuplicates += 1;
            totals.crossThemeDuplicates += 1;
          } else if (!previous) {
            allText.set(textKey, { theme: Number(theme.number), id: question.id });
          }
        }
      });
    });

    const maxAnswer = Math.max(...Object.values(answerCounts));
    const answerBalance = {
      counts: answerCounts,
      maxShare: questions ? Number((maxAnswer / questions).toFixed(3)) : 0
    };

    const result = {
      id: ope.id,
      name: ope.shortName || ope.name,
      questions,
      themes: (ope.themes || []).length,
      invalidAnswers,
      invalidOptions,
      duplicateIds,
      missingJustifications,
      genericQuestions,
      themeDuplicates,
      crossThemeDuplicates,
      shortJustifications,
      answerBalance
    };
    ope.qualityAudit = result;
    return result;
  });

  const hardFailures = totals.invalidAnswers
    + totals.invalidOptions
    + totals.duplicateIds
    + totals.missingJustifications
    + totals.genericQuestions
    + totals.themeDuplicates;

  const totalQuestions = oposiciones.reduce((sum, item) => sum + item.questions, 0);
  const summary = {
    version: 'v0.72.0',
    totalQuestions,
    hardFailures,
    warnings: totals.shortJustifications,
    crossThemeDuplicates: totals.crossThemeDuplicates,
    auditedOposiciones: oposiciones.length
  };

  window.OPOWEB_AUDITORIA_V72 = {
    version: 'v0.72.0',
    date: '2026-07-11',
    ...summary,
    ...totals,
    oposiciones,
    issues,
    summary
  };
})();
