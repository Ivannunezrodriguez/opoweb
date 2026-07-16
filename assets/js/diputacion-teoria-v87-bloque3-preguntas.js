(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope?.themes || !ope?.themeTests) return;

  const letters = ['A', 'B', 'C', 'D'];
  const additions = {
    29: [
      ['¿Cuál es el orden legal de los derechos que pueden realizar el hecho imponible del IBI?', 'Concesión administrativa, superficie, usufructo y propiedad.', ['Propiedad, usufructo, superficie y concesión.', 'Usufructo, propiedad, concesión y superficie.', 'Superficie, propiedad, usufructo y concesión.'], 'Artículo 61 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Qué magnitud constituye la base imponible del IBI?', 'El valor catastral del inmueble.', ['El precio de adquisición actualizado.', 'El valor de mercado fijado por el ayuntamiento.', 'La cuota íntegra del ejercicio anterior.'], 'Artículo 65 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Cuándo se devenga con carácter general el IBI?', 'El primer día del período impositivo.', ['El último día del año.', 'En la fecha de pago del recibo.', 'En la fecha de aprobación del padrón.'], 'Artículo 75 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Qué relación existe entre base imponible y base liquidable del IBI?', 'La base liquidable resulta de practicar, cuando proceda, la reducción legal sobre la base imponible.', ['Son siempre idénticas.', 'La base imponible se obtiene restando bonificaciones a la base liquidable.', 'La base liquidable equivale al valor de mercado.'], 'Artículos 66 a 70 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Está una persona física que ejerce una actividad económica dentro del hecho imponible del IAE?', 'Sí, aunque está exenta del impuesto en los términos legales.', ['No, las personas físicas nunca están sujetas.', 'Solo cuando tiene más de diez trabajadores.', 'Solo cuando ejerce en un local municipal.'], 'Artículos 78 y 82 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Qué umbral general de cifra de negocios determina una de las exenciones del IAE para determinados sujetos?', 'Un importe neto inferior a un millón de euros.', ['Un importe inferior a cien mil euros.', 'Un importe inferior a diez millones de euros.', 'No existe ningún umbral legal.'], 'Artículo 82.1.c del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Qué actuación pertenece a la gestión censal del IAE?', 'La clasificación de la actividad y su inclusión en la matrícula.', ['El cobro del recibo municipal.', 'La concesión de una bonificación municipal.', 'La devolución de un ingreso indebido acordada por el ayuntamiento.'], 'Artículos 90 y 91 del texto refundido de la Ley Reguladora de las Haciendas Locales.']
    ],
    30: [
      ['¿Quién es sujeto pasivo del IVTM?', 'La persona o entidad a cuyo nombre consta el vehículo en el permiso de circulación.', ['Quien conduce habitualmente el vehículo.', 'El propietario civil aunque no figure en el permiso.', 'La compañía aseguradora.'], 'Artículo 94 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Cuál es el coeficiente máximo que puede aplicar un ayuntamiento sobre las cuotas del IVTM?', 'Dos.', ['Uno con cinco.', 'Tres.', 'Cinco.'], 'Artículo 95.4 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Quién es contribuyente del IIVTNU en una transmisión onerosa?', 'La persona que transmite el terreno o constituye o transmite el derecho real.', ['La persona adquirente en todo caso.', 'El ayuntamiento.', 'El notario autorizante.'], 'Artículo 106 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['¿Qué límite rige, con carácter general, para el rendimiento previsible de una tasa por prestación de servicios?', 'No puede exceder en conjunto del coste real o previsible del servicio o actividad.', ['Debe coincidir con el valor catastral de los inmuebles beneficiados.', 'No puede superar el importe de la tasa del año anterior.', 'Debe cubrir siempre el doble del coste.'], 'Artículo 24 del texto refundido de la Ley Reguladora de las Haciendas Locales.']
    ]
  };

  function buildQuestion(number, row, index) {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (number + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v87-t${number}-extra-q${index + 1}`,
      text,
      options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })),
      answer: letters[rotated.indexOf(correct)],
      justification
    };
  }

  for (const [numberText, rows] of Object.entries(additions)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    const existing = Array.isArray(ope.themeTests[theme.id]) ? ope.themeTests[theme.id] : [];
    const ids = new Set(existing.map(question => question.id));
    for (const [index, row] of rows.entries()) {
      const question = buildQuestion(number, row, index);
      if (!ids.has(question.id)) existing.push(question);
    }
    ope.themeTests[theme.id] = existing;
  }

  window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B3 = {
    addedTheme29: additions[29].length,
    addedTheme30: additions[30].length,
    reviewedAt: '2026-07-16'
  };
})();
