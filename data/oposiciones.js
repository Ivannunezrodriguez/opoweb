(() => {
  const temasBase = [
    ['Constitución española de 1978','Derecho constitucional',['estructura constitucional','reforma constitucional','derechos fundamentales','garantías y suspensión']],
    ['Ley 39/2015 I: disposiciones generales, interesados, actuación, términos y plazos','Procedimiento administrativo',['interesados','derechos','registros','términos y plazos']],
    ['Ley 39/2015 II: procedimiento administrativo común','Procedimiento administrativo',['iniciación','ordenación','instrucción','finalización','ejecución','procedimientos sancionador y responsabilidad patrimonial']],
    ['Revisión de actos administrativos y recursos','Procedimiento administrativo',['revisión de oficio','alzada','reposición','extraordinario de revisión','nulidad y anulabilidad']],
    ['Municipio, provincia, organización, competencias y régimen electoral local','Régimen local',['municipio','provincia','pleno','alcaldía','junta de gobierno','competencias locales']],
    ['Ley 4/2011 de empleo público de Castilla-La Mancha','Empleo público',['personal al servicio de la Administración','provisión','carrera','promoción interna','selección','oferta de empleo público']],
    ['Ley 31/1995 de prevención de riesgos laborales','Prevención',['derechos y obligaciones','servicios de prevención','consulta','participación']],
    ['Igualdad entre mujeres y hombres','Igualdad',['Ley 12/2010 de Castilla-La Mancha','Ley Orgánica 3/2007','principio de igualdad','transversalidad']],
    ['Protección de datos personales y garantía de derechos digitales','Protección de datos',['LOPDGDD','RGPD','principios','derechos de las personas','responsable y encargado']],
    ['Principios de tributación local, obligaciones tributarias y gestión tributaria','Tributos locales',['delegación','colaboración','beneficios fiscales','obligados tributarios','gestión tributaria','extinción de la deuda']],
    ['Recaudación de los tributos locales','Tributos locales',['periodo voluntario','aplazamiento','fraccionamiento','compensación','devolución de ingresos','apremio']],
    ['Tributos locales: IBI, IAE, IVTM e IIVTNU','Tributos locales',['hecho imponible','sujeto pasivo','naturaleza','IBI','IAE','IVTM','plusvalía municipal']],
    ['Administración electrónica y certificado electrónico','Administración electrónica',['certificado electrónico','firma electrónica','autoridades certificadoras','soportes','servicios electrónicos']],
    ['Ley 40/2015: órganos de las Administraciones Públicas y AGE','Régimen jurídico público',['órganos administrativos','competencia','abstención y recusación','Administración General del Estado']],
    ['Microsoft Windows I: archivos, carpetas, discos, impresión y digitalización','Informática',['archivos','carpetas','unidades locales y de red','impresión','escáner']],
    ['Microsoft Windows II: navegación con Internet Explorer y Edge','Informática',['navegador','favoritos','historial','descargas','seguridad básica']],
    ['Procesadores de texto: Microsoft Word y LibreOffice Writer','Ofimática',['formato','estilos','tablas','encabezados','combinar correspondencia']],
    ['Hojas de cálculo: Microsoft Excel y LibreOffice Calc','Ofimática',['celdas','rangos','fórmulas','funciones','gráficos','filtros']],
    ['Ordenador personal, componentes y periféricos','Informática',['CPU','memoria','almacenamiento','impresoras','escáneres','USB','discos externos']]
  ];

  const commonAreas = new Set(['Derecho constitucional','Procedimiento administrativo','Régimen local','Empleo público','Prevención','Igualdad','Protección de datos','Administración electrónica','Régimen jurídico público','Informática','Ofimática']);

  function tema(id, title, area, keys){
    const n = id + 1;
    return {
      id: 't' + n,
      number: n,
      title,
      area,
      commonPotential: commonAreas.has(area),
      sections: [
        { heading:'Resumen ampliado', paragraphs:[
          `Este tema se centra en ${keys.join(', ')}. Para preparar una oposición de auxiliar administrativo no basta con memorizar definiciones: hay que entender qué órgano actúa, qué plazo se aplica, qué derecho tiene el interesado y qué consecuencia produce cada trámite.`,
          `La forma más rentable de estudiarlo es identificar primero los conceptos nucleares y después entrenarlos con preguntas tipo test. En el examen suelen aparecer enunciados literales, pequeñas variaciones de plazo y opciones con palabras muy parecidas.`,
          `Como regla de estudio, conviene hacer una primera lectura, subrayar palabras técnicas y después pasar directamente a test. Los errores deben anotarse en una lista corta para repasarla varias veces antes del examen.`
        ]},
        { heading:'Puntos clave', paragraphs: keys.map(k => `Dominar: ${k}.`) },
        { heading:'Trampas típicas', paragraphs:[
          'Confundir órgano competente con órgano que tramita.',
          'Cambiar días hábiles por naturales o mezclar plazo con término.',
          'Elegir una respuesta genérica cuando la ley exige una consecuencia concreta.',
          'No distinguir procedimiento, recurso, acto administrativo y trámite.'
        ]}
      ],
      tree: `Tema ${n}: ${title}\n├─ Bloque: ${area}\n├─ Conceptos: ${keys.slice(0,3).join(' / ')}\n├─ Preguntable en test\n│  ├─ Definiciones\n│  ├─ Plazos\n│  └─ Órganos o efectos\n└─ Repaso final: hacer test y anotar fallos`,
      reviewTable: [
        ['Elemento','Qué repasar','Riesgo de examen'],
        ['Concepto principal', keys[0] || title, 'Alto'],
        ['Normativa/contenido', area, 'Medio'],
        ['Aplicación práctica', keys.slice(1,3).join(' y ') || 'casos básicos', 'Alto']
      ]
    };
  }

  const themes = temasBase.map((t,i)=>tema(i,t[0],t[1],t[2]));

  const questionTemplates = [
    ['¿Cuál de las siguientes opciones se relaciona directamente con {key}?','El contenido del tema sobre {title}','Una materia ajena al tema','Un trámite mercantil privado','Una infracción penal común','A'],
    ['En una pregunta tipo test sobre {title}, ¿qué conviene revisar con especial atención?','La literalidad, los plazos y los efectos jurídicos','Solo la opinión personal del aspirante','Únicamente ejemplos no oficiales','Exclusivamente la parte informática','A'],
    ['¿Qué error es más habitual al estudiar {key}?','Confundir conceptos próximos o plazos parecidos','Memorizar demasiado la Constitución','Usar esquemas visuales','Hacer simulacros transversales','A'],
    ['Para preparar correctamente este tema, la técnica más útil es:','Combinar resumen, esquema y test con corrección','Leer una vez sin practicar','Estudiar solo el último día','Omitir las preguntas falladas','A'],
    ['Si una opción de examen cambia un término esencial de {key}, normalmente debe tratarse como:','Una posible trampa de test','Una respuesta siempre válida','Un dato irrelevante','Una pregunta anulada automáticamente','A'],
    ['¿Qué elemento debe aparecer en una respuesta práctica vinculada a {title}?','Identificación del trámite, fundamento y consecuencia','Solo una conclusión sin justificar','Una opinión personal extensa','Un resumen sin aplicar al caso','A'],
    ['¿Qué parte del tema debe repasarse hasta poder explicarla sin mirar?','Los conceptos nucleares y sus diferencias','El color del manual','La biografía del legislador','La fecha de impresión de los apuntes','A'],
    ['¿Qué utilidad tiene marcar este tema como común/reutilizable?','Permite aprovecharlo para otras oposiciones con temario parecido','Impide estudiarlo para esta convocatoria','Elimina la necesidad de hacer test','Hace que no pueda caer en examen','A'],
    ['Ante una duda entre dos respuestas sobre {key}, lo más seguro es buscar:','La regla legal exacta y la palabra clave del enunciado','La opción más larga siempre','La opción que parezca más moderna','La primera opción por defecto','A'],
    ['¿Qué significa preparar un tema con enfoque de oposición?','Estudiarlo para reconocer trampas, plazos y aplicaciones','Leerlo como cultura general','Aprenderlo solo de memoria sin test','No revisar errores','A'],
    ['¿Qué conviene hacer después de fallar una pregunta sobre {title}?','Anotar el motivo del fallo y repetirla días después','Borrar el resultado','Cambiar la respuesta sin revisar','Abandonar el tema','A'],
    ['¿Cuál es el objetivo final del estudio de {title}?','Responder bien preguntas teóricas y supuestos prácticos','Conocer solo el título del tema','Memorizar opciones aleatorias','Evitar los simulacros','A']
  ];

  function shuffledOptions(q, seed){
    const letters = ['A','B','C','D'];
    const options = q.slice(1,5).map((text,i)=>({letter:letters[i], text}));
    const correctText = options[letters.indexOf(q[5])].text;
    const offset = seed % 4;
    const rotated = options.slice(offset).concat(options.slice(0,offset));
    return {
      options: rotated.map((o,i)=>({letter:letters[i], text:o.text})),
      answer: letters[rotated.findIndex(o=>o.text===correctText)]
    };
  }

  function makeQuestions(theme){
    return questionTemplates.map((tpl,i)=>{
      const key = theme.sections[1].paragraphs[i % theme.sections[1].paragraphs.length].replace('Dominar: ','').replace('.','');
      const text = tpl[0].replaceAll('{title}', theme.title).replaceAll('{key}', key);
      const opts = tpl.slice(1).map(x=>x.replaceAll('{title}', theme.title).replaceAll('{key}', key));
      const mixed = shuffledOptions([text, ...opts], theme.number + i);
      return {
        id: `${theme.id}-q${i+1}`,
        text,
        options: mixed.options,
        answer: mixed.answer,
        justification: `La respuesta correcta es la que se ajusta al enfoque del tema ${theme.number}: ${theme.title}. La clave es ${key}.`
      };
    });
  }

  const themeTests = Object.fromEntries(themes.map(t => [t.id, makeQuestions(t)]));
  const allQuestions = Object.values(themeTests).flat();

  const practicalCases = [
    ['Registro de entrada y subsanación','Un aspirante presenta solicitud sin justificante de pago. Indica qué debe comprobarse y cómo debería actuarse si aparece en lista provisional de excluidos.'],
    ['Cómputo de plazos','Un anuncio se publica en sede electrónica y abre un plazo de alegaciones. Explica desde cuándo se cuenta y qué precauciones debe tener el interesado.'],
    ['Recurso administrativo','Un ciudadano no está conforme con una resolución municipal. Indica qué datos mínimos habría que identificar antes de elegir el recurso.'],
    ['Notificación electrónica','Un interesado obligado a relacionarse electrónicamente no accede a una notificación. Explica la importancia de la puesta a disposición y del plazo.'],
    ['Registro municipal','Llega documentación presencial al Ayuntamiento. Describe las operaciones básicas de recepción, asiento, digitalización y remisión interna.'],
    ['Protección de datos','Un vecino pide acceso a datos de otro expediente. Explica cómo responderías desde una perspectiva de protección de datos.'],
    ['Atención al público','Una persona solicita información sobre el estado de su expediente. Indica cómo atenderla sin vulnerar datos ni anticipar resoluciones.'],
    ['Archivo administrativo','Se debe localizar un expediente antiguo. Explica criterios básicos de archivo, identificación y recuperación.'],
    ['Tributo local en voluntaria','Un contribuyente pregunta por el pago en periodo voluntario. Explica qué información debe facilitarse.'],
    ['Procedimiento de apremio','Una deuda no se paga en voluntaria. Resume el paso a ejecutiva y la idea de recargos o providencia de apremio.'],
    ['IBI','Un vecino pregunta por qué debe pagar IBI. Identifica hecho imponible y sujeto pasivo de forma orientativa.'],
    ['IVTM','Un contribuyente vende un vehículo. Explica qué datos habría que comprobar para orientar sobre el impuesto.'],
    ['Certificado electrónico','Un ciudadano no puede firmar electrónicamente. Explica comprobaciones básicas: certificado, navegador, caducidad y soporte.'],
    ['Documento firmado','Recibes un documento con CSV. Explica cómo verificarlo y por qué es importante la integridad del documento.'],
    ['Word/Writer','Hay que redactar una carta oficial con encabezado, tabla y firma. Describe los pasos de maquetación básicos.'],
    ['Excel/Calc','Se pide un listado con totales y filtros. Explica qué funciones básicas utilizarías.'],
    ['Escaneado','Un documento en papel debe incorporarse a expediente electrónico. Explica escaneado, nombre de archivo y control de calidad.'],
    ['Prevención de riesgos','Un puesto de auxiliar usa pantalla de visualización. Indica medidas preventivas básicas.'],
    ['Igualdad','Un anuncio municipal debe revisarse con lenguaje inclusivo. Explica qué comprobarías.'],
    ['Bolsa de trabajo','Un integrante de bolsa no contesta a un llamamiento. Explica qué debe revisarse en las bases antes de actuar.']
  ].map((c,i)=>({
    id:'sp'+(i+1),
    title:c[0],
    statement:c[1],
    guidance:'Respuesta orientativa: identificar hechos, norma o base aplicable, órgano o unidad competente, trámite procedente, plazo si existe, documentación necesaria y consecuencia final. La respuesta debe ser ordenada, concreta y sin inventar datos.'
  }));

  function makeSim(id, title, start){
    const qs = Array.from({length:50}, (_,i)=> allQuestions[(start + i*7) % allQuestions.length]);
    return {id, title, questions: qs.map((q,i)=>({...q, id:`${id}-q${i+1}`}))};
  }

  const oposicion = {
    id:'puebla-aux-admin-2026',
    name:'Auxiliar Administrativo - La Puebla de Montalbán',
    shortName:'La Puebla - Aux. Administrativo',
    places:'4 plazas + bolsa',
    exam:'Concurso-oposición: test de 50 preguntas y ejercicio práctico.',
    status:'Seguimiento pendiente de sede electrónica y anuncios oficiales.',
    scoring:{correct:0.20, wrong:-0.05, blank:0},
    themes,
    themeTests,
    practicalCases,
    simulacros:[makeSim('sim1','Simulacro transversal 1',0), makeSim('sim2','Simulacro transversal 2',17), makeSim('sim3','Simulacro transversal 3',34)]
  };

  window.OPOSICIONES_DATA = { oposiciones:[oposicion] };
})();
