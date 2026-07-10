(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope?.practicalCases?.length) return;

  const VERSION = '0.52.0';

  const variants = {
    1: ['La sociedad subsana electrónicamente, pero fuera del plazo concedido.', 'La solicitud la presenta presencialmente una persona física no obligada.'],
    2: ['El plazo se expresa en días naturales.', 'El último día es festivo solo en el municipio del órgano, no en el del interesado.'],
    3: ['La competencia estaba reservada por ley y no era delegable.', 'La causa de abstención aparece después de dictarse la resolución.'],
    4: ['La sede estuvo oficialmente caída durante parte del plazo.', 'La persona accede al contenido el noveno día natural.'],
    5: ['El acto sí pone fin a la vía administrativa.', 'La resolución fue presunta, no expresa.'],
    6: ['La víctima ignoró una señal visible de peligro.', 'El daño se manifestó de forma tardía y progresiva.'],
    7: ['El solicitante es periodista y acredita finalidad de investigación.', 'El expediente contiene además sanciones administrativas firmes.'],
    8: ['La prestación admite lotes funcionalmente independientes.', 'La necesidad surgió de forma imprevisible a mitad de ejercicio.'],
    9: ['El crédito prorrogado correspondía a personal fijo.', 'Se presentan reclamaciones durante la exposición pública.'],
    10: ['El obligado paga solo la deuda tras la providencia, no el recargo.', 'El pago se realiza después del plazo del artículo 62.5.'],
    11: ['Existe incremento según escritura pero no según comprobación administrativa.', 'La transmisión es gratuita por donación.'],
    12: ['El titular del inmueble era usufructuario el 1 de enero.', 'La actividad la inicia una sociedad mercantil con cifra de negocios reducida.'],
    13: ['La persona acredita tarde un requisito que sí poseía dentro de plazo.', 'La renuncia se presenta mientras existe expediente disciplinario.'],
    14: ['Los accesos estaban autorizados, pero se usaron para una finalidad distinta.', 'Los hechos podrían ser constitutivos de delito.'],
    15: ['La trabajadora está embarazada y requiere adaptación específica.', 'El reconocimiento es imprescindible para evaluar efectos sobre terceros.'],
    16: ['El certificado era válido, pero la aplicación de firma estaba desactualizada.', 'La persona está obligada electrónicamente y acude a una oficina de asistencia.'],
    17: ['Varios originales están deteriorados y no admiten alimentador.', 'El expediente contiene documentos que no deben digitalizarse íntegramente por protección de datos.'],
    18: ['Algunos destinatarios necesitan versiones en castellano e inglés.', 'La fuente contiene registros duplicados y domicilios incompletos.'],
    19: ['Las fórmulas deben usar referencias mixtas.', 'La hoja contiene celdas combinadas que impiden una ordenación segura.'],
    20: ['La presentación debe actualizarse cada mes automáticamente.', 'El proyector solo dispone de HDMI y el equipo únicamente de USB-C.']
  };

  function rubricFor(item) {
    const criteria = (item.tasks || []).slice(0, 4).map((task, index) => ({
      id: `task-${index + 1}`,
      label: `Resuelve correctamente la cuestión ${index + 1}: ${task}`,
      points: 1.5
    }));
    return [
      ...criteria,
      { id: 'norma', label: 'Identifica y aplica la base normativa o técnica pertinente.', points: 1.5 },
      { id: 'razonamiento', label: 'Ordena el razonamiento por hechos, órgano, trámite, plazo y efecto.', points: 1.5 },
      { id: 'conclusion', label: 'Cierra con una conclusión clara y sin contradicciones.', points: 1 }
    ];
  }

  ope.practicalCases.forEach((item, index) => {
    item.variants = (variants[index + 1] || []).map((text, variantIndex) => ({
      id: `v${variantIndex + 1}`,
      title: `Variante ${variantIndex + 1}`,
      text
    }));
    item.rubric = rubricFor(item);
    item.maxScore = 10;
  });

  const getCase = number => ope.practicalCases[number - 1];
  ope.practicalMocks = [
    {
      id: 'dip-v52-pm1',
      title: 'Simulacro práctico 1 · Procedimiento y responsabilidad',
      recommendedMinutes: 90,
      officialFormat: false,
      instructions: 'Entrenamiento interno: resuelve los dos casos obligatorios sin consultar la solución. Usa estructura jurídica completa y reserva los últimos 10 minutos para revisión.',
      caseIds: [getCase(1).id, getCase(6).id],
      extensionCaseId: getCase(5).id
    },
    {
      id: 'dip-v52-pm2',
      title: 'Simulacro práctico 2 · Contratación, presupuesto y recaudación',
      recommendedMinutes: 90,
      officialFormat: false,
      instructions: 'Entrenamiento interno: desarrolla los dos casos obligatorios con cálculos, fases y consecuencias. No presupongas datos que no consten.',
      caseIds: [getCase(8).id, getCase(10).id],
      extensionCaseId: getCase(9).id
    },
    {
      id: 'dip-v52-pm3',
      title: 'Simulacro práctico 3 · Datos, digitalización y ofimática',
      recommendedMinutes: 90,
      officialFormat: false,
      instructions: 'Entrenamiento interno: combina cumplimiento jurídico, seguridad de la información y ejecución técnica. Justifica cada decisión operativa.',
      caseIds: [getCase(7).id, getCase(20).id],
      extensionCaseId: getCase(17).id
    }
  ];

  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Añadidas dos variantes a cada uno de los 20 supuestos',
      'Añadida rúbrica de autoevaluación sobre 10 puntos',
      'Añadidos tres simulacros prácticos de entrenamiento',
      'El tiempo de los simulacros prácticos se identifica expresamente como recomendación interna, no formato oficial'
    ]
  });

  window.OPOWEB_DIPUTACION_V52 = {
    version: `v${VERSION}`,
    practicalCases: ope.practicalCases.length,
    variants: ope.practicalCases.reduce((sum, item) => sum + item.variants.length, 0),
    rubricMax: 10,
    practicalMocks: ope.practicalMocks.length,
    officialPracticalFormatKnown: false
  };
})();