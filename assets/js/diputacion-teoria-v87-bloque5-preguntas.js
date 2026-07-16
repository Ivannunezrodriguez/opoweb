(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope?.themes || !ope?.themeTests) return;

  const additions = {
    33: [
      {
        id: 'dip-v87-t33-extra-q1',
        text: '¿Qué afirmación describe correctamente la navegación InPrivate de Microsoft Edge?',
        options: [
          { letter: 'A', text: 'Impide que la organización o el proveedor de red conozcan los sitios visitados.' },
          { letter: 'B', text: 'Reduce la conservación local de historial, cookies y datos de formularios al cerrar la sesión.' },
          { letter: 'C', text: 'Garantiza que todos los sitios visitados sean legítimos.' },
          { letter: 'D', text: 'Desactiva automáticamente cualquier descarga.' }
        ],
        answer: 'B',
        justification: 'InPrivate limita determinados datos locales al cerrar la sesión, pero no proporciona anonimato frente a la red, la organización o los sitios visitados.'
      },
      {
        id: 'dip-v87-t33-extra-q2',
        text: 'En GroupWise, ¿qué campo permite remitir un mensaje sin mostrar esa dirección al resto de destinatarios?',
        options: [
          { letter: 'A', text: 'Para' },
          { letter: 'B', text: 'CC' },
          { letter: 'C', text: 'CCO' },
          { letter: 'D', text: 'Asunto' }
        ],
        answer: 'C',
        justification: 'CCO es la copia oculta; las direcciones incluidas en ese campo no se muestran al resto de destinatarios.'
      }
    ],
    34: [
      {
        id: 'dip-v87-t34-extra-q1',
        text: '¿Qué efecto tiene normalmente aumentar la resolución de un escaneo?',
        options: [
          { letter: 'A', text: 'Reduce siempre el tamaño del archivo.' },
          { letter: 'B', text: 'Aumenta el detalle y, habitualmente, también el tamaño y el tiempo de proceso.' },
          { letter: 'C', text: 'Convierte automáticamente la imagen en texto revisado.' },
          { letter: 'D', text: 'Elimina la necesidad de comprobar la legibilidad.' }
        ],
        answer: 'B',
        justification: 'Una mayor resolución captura más detalle, pero suele generar archivos mayores y requiere más tiempo; debe ajustarse a la finalidad del documento.'
      }
    ]
  };

  for (const [numberText, questions] of Object.entries(additions)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    const existing = Array.isArray(ope.themeTests[theme.id]) ? ope.themeTests[theme.id] : [];
    const ids = new Set(existing.map(question => question.id));
    for (const question of questions) if (!ids.has(question.id)) existing.push(question);
    ope.themeTests[theme.id] = existing;
  }

  window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B5 = {
    addedTheme33: additions[33].length,
    addedTheme34: additions[34].length,
    reviewedAt: '2026-07-16'
  };
})();