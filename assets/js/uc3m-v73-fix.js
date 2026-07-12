(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 7);
  if (!ope || !theme) return;

  const replacement = {
    text: '¿Quién responde de la información incorporada a la web o portal de transparencia?',
    options: [
      { letter: 'A', text: 'Cada sujeto obligado respecto de la información que publica o incorpora' },
      { letter: 'B', text: 'Exclusivamente el proveedor tecnológico del portal' },
      { letter: 'C', text: 'La persona que consulta la información' },
      { letter: 'D', text: 'Únicamente el Consejo de Transparencia' }
    ],
    answer: 'A',
    justification: 'Artículo 8.3 de la Ley 10/2019: cada sujeto obligado es responsable de la información que incluye en su web, portal y Portal de Transparencia de la Comunidad.',
    source: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-10102',
    difficulty: 'media',
    auditReal: true,
    auditTheme: 7
  };

  const oldText = '¿Qué ocurre si se incumplen las obligaciones de publicidad activa?';
  const patch = question => {
    if (question?.text !== oldText) return question;
    return { ...question, ...replacement };
  };
  ope.themeTests[theme.id] = (ope.themeTests[theme.id] || []).map(patch);
  (ope.simulacros || []).forEach(sim => {
    sim.questions = (sim.questions || []).map(patch);
    sim.reserveQuestions = (sim.reserveQuestions || []).map(patch);
  });
})();
