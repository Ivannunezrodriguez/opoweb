(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope?.themeTests) return;

  Object.values(ope.themeTests).flat().forEach(question => {
    if (question.text === 'Una persona presenta electrónicamente un escrito en día inhábil. A efectos del cómputo del plazo de la Administración, se considera presentado:') {
      question.text = 'Una persona presenta electrónicamente un escrito en día inhábil. A efectos del cumplimiento de su plazo como persona interesada, se considera presentado:';
      question.justification = 'Artículo 31.2.b de la Ley 39/2015: para el cumplimiento de plazos por los interesados, la presentación en día inhábil se entiende realizada en la primera hora del primer día hábil siguiente, salvo norma que permita expresamente la recepción en día inhábil.';
    }
  });
})();