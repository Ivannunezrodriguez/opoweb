(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const letters = ['A', 'B', 'C', 'D'];
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const rows = {
    29: [
      ['¿Qué naturaleza tiene el Impuesto sobre Bienes Inmuebles?', 'Es un tributo directo de carácter real que grava el valor de los bienes inmuebles.', ['Es una tasa por servicios catastrales.', 'Es un impuesto indirecto sobre transmisiones.', 'Es una contribución especial potestativa.'], 'Artículo 60 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
      ['En el IBI, ¿qué derecho ocupa el primer lugar de la prelación del hecho imponible?', 'La concesión administrativa sobre el inmueble o sobre el servicio público al que esté afecto.', ['El derecho de propiedad.', 'El derecho real de usufructo.', 'El derecho real de superficie.'], 'Artículo 61.1 del texto refundido de Haciendas Locales.'],
      ['¿Cuál es la base imponible del IBI?', 'El valor catastral de los bienes inmuebles.', ['El precio de adquisición actualizado.', 'La cuota íntegra del ejercicio anterior.', 'El valor declarado en cualquier contrato privado.'], 'Artículo 65 del texto refundido de Haciendas Locales.'],
      ['¿Cómo se obtiene la base liquidable del IBI?', 'Practicando en la base imponible las reducciones legalmente previstas.', ['Restando las bonificaciones a la cuota íntegra.', 'Aplicando directamente el tipo al valor de mercado.', 'Sumando el valor del suelo a la cuota líquida.'], 'Artículo 66 del texto refundido de Haciendas Locales.'],
      ['¿Cómo se obtiene la cuota líquida del IBI?', 'Minorando la cuota íntegra en las bonificaciones legalmente aplicables.', ['Restando las reducciones a la base imponible.', 'Aplicando el tipo de gravamen al valor de mercado.', 'Dividiendo la cuota íntegra entre los años de posesión.'], 'Artículo 71 del texto refundido de Haciendas Locales.'],
      ['¿Exige el hecho imponible del IAE que la actividad se desarrolle en un local determinado?', 'No; el mero ejercicio puede quedar gravado se realice o no en local determinado.', ['Sí, siempre debe existir local abierto al público.', 'Solo si se obtienen beneficios.', 'Solo cuando la actividad figure literalmente en las tarifas.'], 'Artículo 78 del texto refundido de Haciendas Locales.'],
      ['Una persona física que ejerce una actividad empresarial, ¿puede realizar el hecho imponible del IAE y estar exenta?', 'Sí; la actividad puede estar sujeta y la persona física quedar exenta por el artículo 82.', ['No; exención y no sujeción son siempre idénticas.', 'Solo si no ordena medios de producción.', 'No, porque las personas físicas nunca realizan actividades económicas.'], 'Artículos 78, 79 y 82 del texto refundido de Haciendas Locales.']
    ],
    30: [
      ['¿Quién es sujeto pasivo del IVTM?', 'La persona o entidad a cuyo nombre conste el vehículo en el permiso de circulación.', ['Quien lo conduzca el día del devengo.', 'El propietario civil aunque no figure en el permiso.', 'La compañía aseguradora.'], 'Artículo 94 del texto refundido de Haciendas Locales.'],
      ['¿Cómo cuantifica la ley la cuota del IVTM?', 'Mediante tarifas basadas en parámetros técnicos como potencia fiscal, plazas, carga útil o cilindrada.', ['Mediante una base imponible igual al precio de compra.', 'Aplicando un porcentaje al valor catastral.', 'Por los kilómetros recorridos durante el año.'], 'Artículo 95 del texto refundido de Haciendas Locales.'],
      ['¿Qué ocurre en el IIVTNU si se acredita que no ha existido incremento de valor del terreno?', 'La operación no queda sujeta al impuesto en los términos del artículo 104.', ['Se aplica siempre la cuota mínima.', 'Se transforma en una tasa.', 'Solo se aplaza el devengo.'], 'Artículo 104.5 del texto refundido de Haciendas Locales.'],
      ['En una tasa por prestación de servicios, ¿qué límite general tiene el rendimiento previsto?', 'No puede exceder, en conjunto, del coste real o previsible del servicio o actividad o del valor de la prestación.', ['Debe coincidir siempre con el valor catastral.', 'No existe ningún límite legal.', 'Debe ser igual a la cuota del IBI.'], 'Artículo 24.2 del texto refundido de Haciendas Locales.']
    ],
    31: [
      ['Según la Ley 6/2020, ¿cuál es el periodo máximo de vigencia de un certificado cualificado?', 'Cinco años.', ['Un año.', 'Diez años.', 'No existe límite máximo.'], 'Artículo 4.2 de la Ley 6/2020, de servicios electrónicos de confianza.']
    ]
  };

  function buildQuestion(themeNumber, row, index) {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (themeNumber + index + 1) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `dip-v87-t${themeNumber}-q${index + 1}`,
      text,
      options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })),
      answer: letters[rotated.indexOf(correct)],
      justification,
      source: justification,
      difficulty: ['baja', 'media', 'alta'][index % 3],
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
    const additions = bank.map((row, index) => buildQuestion(number, row, index)).filter(question => !seen.has(normalize(question.text)));
    ope.themeTests[theme.id] = existing.concat(additions);
    addedByTheme[number] = additions.length;
  }

  const audits = ope.themes.map(theme => ({
    number: Number(theme.number),
    total: (ope.themeTests?.[theme.id] || []).length
  }));
  ope.globalTestAudit = {
    ...(ope.globalTestAudit || {}),
    themes: audits,
    targetPerTheme: 30,
    targetThemes: audits.filter(item => item.total >= 30).length,
    pendingTemplateThemes: audits.filter(item => item.total < 30).map(item => item.number),
    documentaryGaps: [{ theme: 22, source: 'Estatutos oficiales vigentes del OAPGT' }]
  };

  window.OPOWEB_DIPUTACION_TEST_V87 = {
    version: 'v0.87.0',
    addedByTheme,
    totalAdded: Object.values(addedByTheme).reduce((sum, value) => sum + value, 0),
    totals: Object.fromEntries([29, 30, 31].map(number => {
      const theme = ope.themes.find(item => Number(item.number) === number);
      return [number, (ope.themeTests?.[theme.id] || []).length];
    }))
  };
})();
