(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const letters = ['A', 'B', 'C', 'D'];
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const rows = {
    33: [
      [
        '¿Qué afirmación describe correctamente la navegación InPrivate de Microsoft Edge?',
        'Reduce determinados datos locales al cerrar todas sus ventanas, pero no oculta la actividad a sitios, organización o proveedor de Internet.',
        [
          'Hace anónima toda la actividad frente a cualquier tercero.',
          'Elimina automáticamente los archivos descargados y los favoritos creados.',
          'Impide que la red corporativa aplique controles de seguridad.'
        ],
        'Microsoft Support, “Browse InPrivate in Microsoft Edge”: InPrivate limita determinados rastros locales, pero no impide que sitios, empleador, centro educativo o proveedor de Internet observen la actividad; las descargas y favoritos pueden permanecer.'
      ],
      [
        'En un mensaje de GroupWise, ¿para qué se utiliza el campo CCO?',
        'Para enviar copia a destinatarios cuya dirección no se muestra al resto de destinatarios.',
        [
          'Para adjuntar automáticamente todos los documentos de una carpeta.',
          'Para convertir el mensaje en una cita del calendario.',
          'Para conceder acceso proxy completo al buzón.'
        ],
        'OpenText GroupWise 24 Client User Guide: Blind Copy permite remitir una copia sin mostrar esos destinatarios a los demás; no equivale a adjuntar archivos, crear citas ni delegar el buzón.'
      ]
    ],
    34: [
      [
        '¿Qué función cumple la cola de impresión de Windows?',
        'Muestra y gestiona trabajos pendientes o en curso, permitiendo pausarlos, reanudarlos o cancelarlos cuando existen permisos.',
        [
          'Convierte cualquier escaneo en copia auténtica administrativa.',
          'Modifica automáticamente el contenido del documento original.',
          'Garantiza que todo trabajo enviado ya se ha impreso físicamente.'
        ],
        'Microsoft Support, documentación de impresión en Windows: la cola permite consultar y administrar trabajos; que un trabajo figure enviado no garantiza por sí solo su salida física correcta.'
      ]
    ]
  };

  function buildQuestion(themeNumber, row, index) {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (themeNumber + index + 2) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v87-b3-t${themeNumber}-q${index + 1}`,
      text,
      options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })),
      answer: letters[rotated.indexOf(correct)],
      justification,
      source: justification,
      difficulty: index % 2 ? 'media' : 'baja',
      auditReal: true,
      auditTheme: themeNumber,
      theoryVersion: 'v0.87.0'
    };
  }

  const addedByTheme = {};
  for (const [numberText, bank] of Object.entries(rows)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    const existing = ope.themeTests?.[theme.id] || [];
    const seen = new Set(existing.map(question => normalize(question.text)));
    const additions = bank
      .map((row, index) => buildQuestion(number, row, index))
      .filter(question => !seen.has(normalize(question.text)));
    ope.themeTests[theme.id] = existing.concat(additions);
    addedByTheme[number] = additions.length;
  }

  window.OPOWEB_DIPUTACION_TEST_V87_BLOQUE3 = {
    version: 'v0.87.0',
    reviewedAt: '2026-07-15',
    addedByTheme,
    totalAdded: Object.values(addedByTheme).reduce((sum, value) => sum + value, 0),
    totals: Object.fromEntries([32, 33, 34].map(number => {
      const theme = ope.themes.find(item => Number(item.number) === number);
      return [number, (ope.themeTests?.[theme.id] || []).length];
    })),
    sources: ['Microsoft Support', 'OpenText GroupWise 24 Client User Guide']
  };
})();
