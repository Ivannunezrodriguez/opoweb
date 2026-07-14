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
      ['Una persona física que ejerce una actividad empresarial, ¿puede realizar el hecho imponible del IAE y estar exenta?', 'Sí; la actividad puede estar sujeta y la persona física quedar exenta por el artículo 82.', ['No; exención y no sujeción son siempre idénticas.', 'Solo si no ordena medios de producción.', 'No, porque las personas físicas nunca realizan actividades económicas.'], 'Artículos 78, 79 y 82 del texto refundido de Haciendas Locales.'],
      ['¿Cuándo se devenga con carácter general el IBI?', 'El primer día del periodo impositivo.', ['El último día del año.', 'El día de pago del recibo.', 'La fecha de aprobación del padrón.'], 'Artículo 75 del texto refundido de Haciendas Locales.'],
      ['¿Qué diferencia existe entre cuota íntegra y cuota líquida del IBI?', 'La líquida resulta de restar a la íntegra las bonificaciones legalmente aplicables.', ['La íntegra incluye bonificaciones y la líquida no.', 'La líquida es siempre el valor catastral.', 'No existe diferencia jurídica.'], 'Artículo 71 del texto refundido de Haciendas Locales.'],
      ['¿Qué caracteriza una actividad económica a efectos del IAE?', 'La ordenación por cuenta propia de medios de producción o recursos humanos para intervenir en bienes o servicios.', ['La mera condición de trabajador por cuenta ajena.', 'La posesión de un inmueble sin actividad.', 'La obtención obligatoria de beneficio anual.'], 'Artículo 79 del texto refundido de Haciendas Locales.'],
      ['En el IAE, ¿qué determina principalmente la clasificación de la actividad?', 'Las tarifas y su instrucción, mediante grupos o epígrafes y elementos tributarios.', ['El valor catastral del domicilio personal.', 'Los kilómetros recorridos por el titular.', 'La cuota del IBI del local.'], 'Artículos 84 y 85 del texto refundido de Haciendas Locales y Real Decreto Legislativo 1175/1990.']
    ],
    30: [
      ['¿Quién es sujeto pasivo del IVTM?', 'La persona o entidad a cuyo nombre conste el vehículo en el permiso de circulación.', ['Quien lo conduzca el día del devengo.', 'El propietario civil aunque no figure en el permiso.', 'La compañía aseguradora.'], 'Artículo 94 del texto refundido de Haciendas Locales.'],
      ['¿Cómo cuantifica la ley la cuota del IVTM?', 'Mediante tarifas basadas en parámetros técnicos como potencia fiscal, plazas, carga útil o cilindrada.', ['Mediante una base imponible igual al precio de compra.', 'Aplicando un porcentaje al valor catastral.', 'Por los kilómetros recorridos durante el año.'], 'Artículo 95 del texto refundido de Haciendas Locales.'],
      ['¿Qué ocurre en el IIVTNU si se acredita que no ha existido incremento de valor del terreno?', 'La operación no queda sujeta al impuesto en los términos del artículo 104.', ['Se aplica siempre la cuota mínima.', 'Se transforma en una tasa.', 'Solo se aplaza el devengo.'], 'Artículo 104.5 del texto refundido de Haciendas Locales.'],
      ['En una tasa por prestación de servicios, ¿qué límite general tiene el rendimiento previsto?', 'No puede exceder, en conjunto, del coste real o previsible del servicio o actividad o del valor de la prestación.', ['Debe coincidir siempre con el valor catastral.', 'No existe ningún límite legal.', 'Debe ser igual a la cuota del IBI.'], 'Artículo 24.2 del texto refundido de Haciendas Locales.'],
      ['¿Cuándo se considera apto para circular un vehículo a efectos del IVTM?', 'Mientras esté matriculado en el registro correspondiente y no haya causado baja.', ['Solo cuando circula efectivamente cada día.', 'Únicamente si tiene menos de diez años.', 'Cuando dispone de plaza de garaje.'], 'Artículo 92.2 del texto refundido de Haciendas Locales.'],
      ['¿Cuál es el objeto material del IIVTNU?', 'El incremento de valor de terrenos urbanos puesto de manifiesto por una transmisión o derecho real de goce.', ['El valor total de cualquier construcción.', 'La titularidad anual de vehículos.', 'La prestación de servicios municipales.'], 'Artículo 104.1 del texto refundido de Haciendas Locales.'],
      ['¿Puede una tasa local devengarse al presentar una solicitud?', 'Sí, cuando la naturaleza del hecho y la ordenanza lo establezcan.', ['No, únicamente al terminar el servicio.', 'Solo si la tasa es estatal.', 'Nunca puede exigirse depósito previo.'], 'Artículo 26 del texto refundido de Haciendas Locales.'],
      ['¿Qué hecho puede originar una tasa por dominio público?', 'La utilización privativa o el aprovechamiento especial del dominio público local.', ['La mera residencia en el municipio.', 'La obtención de cualquier renta privada.', 'La propiedad de un vehículo matriculado.'], 'Artículo 20 del texto refundido de Haciendas Locales.']
    ],
    31: [
      ['Según la Ley 6/2020, ¿cuál es el periodo máximo de vigencia de un certificado cualificado?', 'Cinco años.', ['Un año.', 'Diez años.', 'No existe límite máximo.'], 'Artículo 4.2 de la Ley 6/2020, de servicios electrónicos de confianza.'],
      ['¿Qué norma europea contiene el marco principal de firma y servicios de confianza que complementa la Ley 6/2020?', 'El Reglamento (UE) 910/2014, eIDAS, en su redacción vigente.', ['La Directiva 1999/93/CE como norma todavía vigente.', 'El Código Civil exclusivamente.', 'La Ley 59/2003 sin modificaciones.'], 'Artículo 1 de la Ley 6/2020 y Reglamento (UE) 910/2014.'],
      ['¿Qué instrumento utiliza normalmente una persona jurídica para garantizar origen e integridad de documentos automatizados?', 'Un sello electrónico, sin perjuicio de la firma de su representante físico.', ['Una firma manuscrita escaneada obligatoria.', 'Un certificado de firma expedido a la persona jurídica como firmante.', 'Una contraseña compartida sin certificado.'], 'Preámbulo y marco de la Ley 6/2020 y Reglamento eIDAS.'],
      ['¿Qué debe comprobarse además de la presencia de un certificado instalado?', 'Su vigencia, posible revocación, cadena de confianza e identidad o representación acreditada.', ['Solo el color del icono del programa.', 'La marca comercial del ordenador.', 'Que el documento se haya impreso.'], 'Artículos 4 a 7 de la Ley 6/2020 y reglas de validación eIDAS.']
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
    const additions = [];
    for (let index = 0; index < bank.length && existing.length + additions.length < 30; index += 1) {
      const question = buildQuestion(number, bank[index], index);
      const key = normalize(question.text);
      if (seen.has(key)) continue;
      seen.add(key);
      additions.push(question);
    }
    ope.themeTests[theme.id] = existing.concat(additions);
    addedByTheme[number] = additions.length;
  }

  const audits = ope.themes.map(theme => ({ number: Number(theme.number), total: (ope.themeTests?.[theme.id] || []).length }));
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
