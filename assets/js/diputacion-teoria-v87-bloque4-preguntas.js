(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 31);
  if (!ope?.themeTests || !theme) return;

  const existing = Array.isArray(ope.themeTests[theme.id]) ? ope.themeTests[theme.id] : [];
  const question = {
    id: 'dip-v87-t31-extra-q1',
    text: 'Según el Real Decreto 255/2025, ¿qué vigencia tienen los certificados electrónicos integrados en el Documento Nacional de Identidad?',
    options: [
      { letter: 'A', text: 'La misma vigencia que el soporte físico del DNI en todos los casos.' },
      { letter: 'B', text: 'Dos años.' },
      { letter: 'C', text: 'Cinco años sin posibilidad de renovación anterior.' },
      { letter: 'D', text: 'Un año desde cada utilización.' }
    ],
    answer: 'B',
    justification: 'El artículo 11 del Real Decreto 255/2025 establece una vigencia de dos años para los certificados electrónicos integrados en el DNI. No debe confundirse con la vigencia del documento físico ni con el máximo general de cinco años previsto por la Ley 6/2020 para certificados cualificados.'
  };

  if (!existing.some(item => item.id === question.id)) existing.push(question);
  ope.themeTests[theme.id] = existing;

  window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B4 = {
    theme: 31,
    added: 1,
    reviewedAt: '2026-07-16'
  };
})();
