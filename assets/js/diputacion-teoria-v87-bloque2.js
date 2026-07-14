(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = 'v0.87.0';
  const REVIEW_DATE = '2026-07-14';
  const source = {
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    catastro: { label: 'Texto refundido de la Ley del Catastro Inmobiliario', reference: 'BOE-A-2004-4163', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4163' },
    tarifasIae: { label: 'Real Decreto Legislativo 1175/1990, tarifas e instrucción del IAE', reference: 'BOE-A-1990-23930', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1990-23930' },
    ley6: { label: 'Ley 6/2020, servicios electrónicos de confianza', reference: 'BOE-A-2020-14046', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046' },
    ley39: { label: 'Ley 39/2015, Procedimiento Administrativo Común', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    eidas: { label: 'Reglamento (UE) 910/2014, eIDAS', reference: 'CELEX-32014R0910', url: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj' },
    eidas2: { label: 'Reglamento (UE) 2024/1183, marco europeo de identidad digital', reference: 'CELEX-32024R1183', url: 'https://eur-lex.europa.eu/eli/reg/2024/1183/oj' }
  };

  const THEORY = {
    29: {
      sources: [source.trlrhl, source.catastro, source.tarifasIae],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema contiene dos impuestos municipales obligatorios y de carácter real. El Impuesto sobre Bienes Inmuebles grava el valor de los inmuebles a través de la titularidad de determinados derechos, siguiendo una prelación legal. El Impuesto sobre Actividades Económicas grava el mero ejercicio de actividades empresariales, profesionales o artísticas en territorio nacional, aunque no exista local y aunque la actividad no aparezca expresamente nominada en las tarifas. En ambos casos hay que separar sujeción, exención, sujeto pasivo, cuantificación y devengo.',
          'La dificultad del IBI está en la prelación concesión-superficie-usufructo-propiedad, la relación entre valor catastral, base imponible y base liquidable, y la diferencia entre exenciones obligatorias, exenciones rogadas y bonificaciones. En el IAE, las preguntas suelen mezclar actividad gravada, no sujeción, exención, sujeto pasivo, tarifas, coeficientes y periodo impositivo. Que una persona esté exenta no significa que su actividad no realice el hecho imponible.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El IBI se regula en los artículos 60 a 77 del texto refundido de Haciendas Locales. Los artículos 60 y 61 fijan naturaleza y hecho imponible; el 62, exenciones; el 63, sujeto pasivo; los artículos 65 a 70, bases imponible y liquidable; los artículos 71 a 74, cuota, tipos y bonificaciones; el 75, devengo y periodo; y los artículos 76 y 77, declaraciones y gestión. La definición de inmuebles y el valor catastral se completan con el texto refundido de la Ley del Catastro Inmobiliario.',
          'El IAE se regula en los artículos 78 a 91 del texto refundido. Los artículos 78 y 79 definen hecho imponible y actividad; los artículos 81 y 82 recogen no sujeción y exenciones; el 83 identifica sujetos pasivos; los artículos 84 a 87 regulan cuota, tarifas, coeficiente de ponderación y coeficiente de situación; el 89 fija devengo y periodo; y el 90 distribuye la gestión. Las tarifas e instrucción proceden del Real Decreto Legislativo 1175/1990 y normativa complementaria.',
          'Tipos de gravamen, coeficientes, bonificaciones potestativas y ordenanzas pueden cambiar. Esta ficha desarrolla las reglas estructurales y obliga a consultar la ordenanza municipal vigente cuando una pregunta solicite porcentajes o decisiones potestativas concretas.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El IBI es un tributo directo de carácter real que grava el valor de los bienes inmuebles. Su hecho imponible es la titularidad de una concesión administrativa sobre el inmueble o sobre el servicio al que esté afecto, de un derecho real de superficie, de un derecho real de usufructo o del derecho de propiedad. La enumeración funciona como una prelación: la realización del hecho correspondiente al derecho situado antes determina, con carácter general, la no sujeción por los derechos posteriores sobre el mismo inmueble. Por ello el propietario no es siempre el sujeto pasivo efectivo.',
          'Los inmuebles pueden ser urbanos, rústicos o de características especiales conforme a la normativa catastral. Determinados bienes no están sujetos, como vías terrestres y bienes de dominio público marítimo-terrestre e hidráulico de aprovechamiento público y gratuito, y determinados bienes municipales no cedidos mediante contraprestación. No sujeción significa que no se realiza el presupuesto gravado; exención significa que, aun realizado, la ley dispensa del pago.',
          'El artículo 62 contiene exenciones de aplicación directa, exenciones que requieren solicitud y exenciones que la ordenanza puede reconocer. Entre las primeras se encuentran bienes públicos afectados a determinados servicios, bienes comunales, supuestos confesionales conforme a acuerdos, Cruz Roja y otros casos tasados. Entre las rogadas figuran determinados centros concertados, bienes histórico-artísticos con requisitos y montes repoblados. La ordenanza puede regular otros supuestos expresamente habilitados. No puede crear exenciones fuera de la ley.',
          'Son sujetos pasivos, a título de contribuyentes, quienes ostenten el derecho que constituya el hecho imponible. Puede existir repercusión conforme al derecho común y reglas específicas en inmuebles de características especiales o concesiones. La alteración de la titularidad puede producir afección real del inmueble y responsabilidades en los términos legales. En un expediente debe comprobarse la fecha del cambio, el derecho transmitido y el titular catastral, sin confundir este último con una presunción inatacable.',
          'La base imponible del IBI está constituida por el valor catastral. El valor catastral se determina, notifica e impugna conforme a la normativa catastral y está integrado por los valores del suelo y de las construcciones. La base liquidable resulta de practicar en la imponible las reducciones legalmente previstas, especialmente en procesos de valoración colectiva. La gestión catastral y la gestión tributaria están coordinadas, pero pertenecen a planos distintos: Catastro determina elementos catastrales y el ayuntamiento liquida y recauda dentro de sus competencias o delegaciones.',
          'La cuota íntegra resulta de aplicar el tipo de gravamen a la base liquidable. La cuota líquida se obtiene restando las bonificaciones legalmente aplicables. Existen bonificaciones obligatorias y potestativas; estas últimas requieren ordenanza dentro de la habilitación legal. El impuesto se devenga el primer día del periodo impositivo y este coincide con el año natural. Las alteraciones físicas, económicas o jurídicas despliegan efectos según las reglas catastrales y tributarias, normalmente en el periodo siguiente cuando así lo establece la ley.',
          'El IAE es un tributo directo de carácter real. Grava el mero ejercicio, en territorio nacional, de actividades empresariales, profesionales o artísticas, se desarrollen o no en local y se hallen o no especificadas en las tarifas. Existe actividad económica cuando se ordenan por cuenta propia medios de producción o recursos humanos, o ambos, para intervenir en la producción o distribución de bienes o servicios. Las actividades agrícolas, ganaderas dependientes, forestales y pesqueras quedan fuera del hecho imponible en los términos legales; la ganadería independiente sí puede quedar gravada.',
          'La no sujeción del artículo 81 comprende operaciones aisladas o ajenas al ejercicio habitual, como determinadas ventas de activo fijo usado, productos recibidos en pago, exposición decorativa o una única venta al por menor. Las exenciones del artículo 82 incluyen entidades públicas, los dos primeros periodos de actividad cuando se cumplen los requisitos, personas físicas y determinadas entidades por cifra de negocios, además de otros supuestos. La exención no borra el alta censal o las obligaciones formales que puedan subsistir.',
          'Son sujetos pasivos las personas físicas, jurídicas y entidades del artículo 35.4 de la Ley General Tributaria que realicen la actividad que origina el hecho imponible. La cuota tributaria resulta de aplicar las tarifas, los coeficientes y las bonificaciones. Las tarifas clasifican actividades en epígrafes y pueden originar cuotas municipales, provinciales o nacionales. Sobre las cuotas municipales puede aplicarse coeficiente de ponderación según cifra de negocios y coeficiente de situación según categoría de la vía, si lo aprueba la ordenanza. No se debe calcular una cuota sin conocer el epígrafe y los elementos tributarios.',
          'El periodo impositivo coincide con el año natural, salvo declaraciones de alta que abarcan desde el inicio hasta fin de año. El impuesto se devenga el primer día del periodo y, en altas, el día de comienzo de la actividad. En bajas por cese puede proceder prorrateo por trimestres naturales en los términos legales. La gestión censal y de tarifas corresponde al Estado con posibilidades de delegación; la gestión de cuotas municipales corresponde a los ayuntamientos o entidades delegadas. Esta distribución explica que una misma deuda utilice información estatal y actuación local.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'IBI: directo y real; derechos por orden de prelación; contribuyente es el titular del derecho gravado; base imponible es valor catastral; base liquidable incorpora reducciones; cuota íntegra aplica tipo y cuota líquida resta bonificaciones; devengo el primer día y periodo anual. IAE: directo y real; mero ejercicio de actividad organizada por cuenta propia; sujeto quien ejerce; cuota según tarifas y coeficientes; devengo al inicio del periodo o de la actividad.',
          'No sujeción y exención son figuras diferentes. En IBI, gestión catastral y tributaria no son iguales. En IAE, actividad sujeta y contribuyente exento pueden coexistir. Para porcentajes, coeficientes y bonificaciones concretas hay que consultar ley y ordenanza vigentes.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'En IBI la propiedad ocupa el último lugar de la prelación. Base imponible no equivale a base liquidable. Cuota íntegra no equivale a cuota líquida. El devengo del IBI es el primer día del año. Las bonificaciones potestativas necesitan ordenanza. En IAE no es imprescindible tener local ni obtener beneficio. Persona física puede realizar el hecho imponible y estar exenta. Actividad agrícola no se confunde con ganadería independiente. Las tarifas clasifican actividades; el coeficiente de situación exige ordenanza.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica la prelación de derechos del IBI y cómo determina sujeto pasivo y no sujeción de los derechos posteriores.',
          '2. Recorre la cuantificación del IBI desde valor catastral hasta cuota líquida y distingue reducción de bonificación.',
          '3. Define el hecho imponible del IAE y diferencia actividad no sujeta, actividad sujeta exenta y actividad sujeta no exenta.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Estudia IBI en la cadena 60-61-62-63-65-66-71-75 y IAE en la cadena 78-79-81-82-83-84-89-90. Antes de responder identifica impuesto, elemento preguntado y si la regla es estatal o potestativa municipal. Si aparece un porcentaje concreto, no lo des por permanente sin comprobar la redacción consolidada y la ordenanza. En un caso OAPGT identifica si la entidad delegó gestión o recaudación, sin presuponer el alcance de Estatutos aún no incorporados.'
        ]}
      ],
      tree: 'Tema 29 · IBI e IAE\n├─ IBI\n│  ├─ Naturaleza directa y real\n│  ├─ Hecho imponible por prelación de derechos\n│  ├─ No sujeción y exenciones\n│  ├─ Sujeto pasivo\n│  ├─ Valor catastral y base imponible\n│  ├─ Base liquidable y reducciones\n│  ├─ Cuota y bonificaciones\n│  └─ Devengo anual\n└─ IAE\n   ├─ Mero ejercicio de actividad\n   ├─ Actividad económica gravada\n   ├─ No sujeción y exenciones\n   ├─ Sujeto pasivo\n   ├─ Tarifas y coeficientes\n   ├─ Devengo y periodo\n   └─ Gestión censal y tributaria',
      reviewTable: [
        ['Elemento', 'IBI', 'IAE'],
        ['Naturaleza', 'Directo y real sobre valor inmobiliario', 'Directo y real sobre ejercicio de actividad'],
        ['Hecho', 'Titularidad de derecho según prelación', 'Mero ejercicio de actividad económica'],
        ['Sujeto', 'Titular del derecho gravado', 'Quien realiza la actividad'],
        ['Exención', 'Art. 62 y ordenanza habilitada', 'Art. 82; puede subsistir hecho imponible'],
        ['Base', 'Valor catastral', 'Cuota según tarifas y elementos'],
        ['Liquidable', 'Imponible menos reducción', 'No usa la misma secuencia que IBI'],
        ['Cuota', 'Tipo sobre liquidable menos bonificaciones', 'Tarifa, ponderación, situación y bonificaciones'],
        ['Devengo', 'Primer día del periodo anual', 'Primer día o comienzo en alta'],
        ['Gestión', 'Coordinación Catastro-ayuntamiento', 'Gestión censal estatal y cuotas locales']
      ]
    },
    30: {
      sources: [source.trlrhl, source.catastro],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema reúne tres figuras locales distintas. El IVTM es un impuesto municipal obligatorio sobre la titularidad de vehículos aptos para circular. El IIVTNU es un impuesto potestativo que grava el incremento de valor de terrenos urbanos puesto de manifiesto por una transmisión o por determinados derechos reales, pero no existe sujeción cuando no se produce incremento conforme a la ley. Las tasas son tributos potestativos vinculados al dominio público o a servicios y actividades que afectan particularmente al sujeto pasivo.',
          'La principal precisión del enunciado es que el IVTM no regula una base imponible autónoma al modo del IBI: la cuota se determina mediante un cuadro de tarifas basado en potencia fiscal, plazas, carga útil o cilindrada, según la clase de vehículo. En tasas, la ley habla de cuantía y de límites ligados al valor de la utilidad o al coste del servicio, no de una base imponible uniforme aplicable a todas.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El IVTM se regula en los artículos 92 a 99 del texto refundido de Haciendas Locales: naturaleza y hecho imponible, exenciones, sujeto pasivo, cuotas, periodo y devengo, gestión y autoliquidación. El IIVTNU se regula en los artículos 104 a 110; el tema pide naturaleza y hecho imponible, pero es imprescindible conocer los supuestos actuales de no sujeción, especialmente la ausencia de incremento. Las tasas se regulan con carácter general en los artículos 20 a 27 y, para ayuntamientos, también en el artículo 57.',
          'La regulación del IIVTNU ha sido modificada tras la jurisprudencia constitucional y debe estudiarse en la última redacción consolidada. Coeficientes máximos, tarifas de IVTM y cuantías de tasas pueden modificarse o desarrollarse por ordenanza; no se memorizan aquí importes anuales o porcentajes locales como datos permanentes.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El IVTM es un tributo directo que grava la titularidad de vehículos de tracción mecánica aptos para circular por vías públicas, cualquiera que sea su clase y categoría. Se considera apto el vehículo matriculado mientras no cause baja, incluidos permisos temporales y matrícula turística. No están sujetos determinados vehículos antiguos autorizados solo para exhibiciones o carreras y remolques o semirremolques con carga útil no superior al límite legal. La aptitud administrativa, no el uso efectivo cotidiano, determina el hecho imponible.',
          'Son sujetos pasivos las personas físicas, jurídicas y entidades a cuyo nombre conste el vehículo en el permiso de circulación. Por tanto, una compraventa no comunicada puede mantener obligaciones a nombre del titular registral. Existen exenciones tasadas para vehículos oficiales afectos a defensa o seguridad, representaciones diplomáticas, ambulancias, vehículos de personas con discapacidad en condiciones legales, transporte público urbano y maquinaria con cartilla agrícola, entre otros. Algunas requieren solicitud y acreditación.',
          'El enunciado menciona base imponible, pero los artículos 92 a 99 no configuran una magnitud separada con ese nombre. La cuantificación utiliza un cuadro de tarifas: potencia fiscal para turismos y tractores, número de plazas para autobuses, carga útil para camiones y remolques y cilindrada para motocicletas. Los ayuntamientos pueden incrementar las cuotas mediante coeficiente dentro del máximo legal y reconocer bonificaciones autorizadas por ordenanza. La respuesta correcta debe explicar esta técnica y no inventar una base monetaria.',
          'El periodo impositivo coincide con el año natural, salvo primera adquisición, baja definitiva o baja temporal por sustracción, supuestos en los que puede existir prorrateo por trimestres. El devengo se produce el primer día del periodo; en primera adquisición, el día en que esta tiene lugar. La gestión, liquidación, inspección y recaudación corresponden al ayuntamiento del domicilio que conste en el permiso de circulación, sin perjuicio de delegación. Puede exigirse autoliquidación si lo establece la ordenanza.',
          'El IIVTNU es un tributo directo que grava el incremento de valor experimentado por terrenos de naturaleza urbana y puesto de manifiesto por transmisión de la propiedad o constitución o transmisión de un derecho real de goce limitativo del dominio. No grava las construcciones ni el precio total de la transmisión, sino el incremento atribuible al terreno urbano. Los terrenos rústicos no están sujetos a estos efectos, aunque la clasificación catastral y las reglas especiales deben comprobarse.',
          'No está sujeto el supuesto en que se constate inexistencia de incremento de valor mediante comparación de los valores de transmisión y adquisición conforme al artículo 104. La persona interesada debe declarar la operación y aportar los títulos correspondientes. Tampoco están sujetas determinadas aportaciones o adjudicaciones entre cónyuges y en cumplimiento de sentencias de nulidad, separación o divorcio, así como operaciones de reestructuración y otros casos previstos legalmente. No sujeción no equivale a exención.',
          'La transmisión gratuita y la onerosa utilizan reglas distintas para determinar sujeto pasivo, aunque el enunciado solo exige naturaleza y hecho. El impuesto es potestativo: el ayuntamiento debe establecerlo mediante ordenanza. El devengo se produce, en transmisiones, en la fecha de transmisión y, en constitución o transmisión de derechos, cuando se produce el acto correspondiente. La nulidad, rescisión o resolución del acto puede afectar al impuesto bajo requisitos legales.',
          'Las tasas son tributos que las entidades locales pueden establecer por utilización privativa o aprovechamiento especial del dominio público local o por prestación de servicios y realización de actividades administrativas de competencia local que se refieran, afecten o beneficien particularmente a los sujetos pasivos. En servicios o actividades, además, debe concurrir que no sean de solicitud o recepción voluntaria o que no se presten o realicen por el sector privado, según los términos del artículo 20.',
          'No pueden exigirse tasas por abastecimiento en fuentes públicas, alumbrado de vías, vigilancia pública general, protección civil, limpieza de vía pública ni enseñanza en niveles obligatorios, sin perjuicio de otros ingresos o figuras permitidos. La utilización del dominio público incluye ocupaciones, instalaciones, entradas de vehículos, terrazas, conducciones y otros aprovechamientos enumerados o análogos dentro de la habilitación legal.',
          'Son sujetos pasivos quienes disfruten, utilicen o aprovechen especialmente el dominio público o quienes soliciten o resulten beneficiados o afectados por servicios y actividades. Pueden existir sustitutos, como propietarios en determinados servicios que repercuten la cuota a beneficiarios. La ordenanza debe identificar sujetos y reglas. La condición de beneficiario no se presume de forma ilimitada: debe existir la conexión particular exigida por el hecho imponible.',
          'En aprovechamiento de dominio público, el importe se fija tomando como referencia el valor que tendría en el mercado la utilidad derivada si los bienes no fueran de dominio público. En servicios o actividades, la recaudación no puede exceder en conjunto del coste real o previsible del servicio o actividad o del valor de la prestación recibida. La cuota puede ser una tarifa, cantidad fija o combinación. Por eso no existe una base imponible única para todas las tasas.',
          'El devengo puede producirse al iniciarse el uso o aprovechamiento, al comenzar la prestación o actividad, al presentar la solicitud o, si la tasa es periódica, el primer día del periodo, según naturaleza y ordenanza. Puede exigirse depósito previo. Si el servicio o aprovechamiento no se presta por causa no imputable al sujeto, procede devolución del importe correspondiente. La memoria económico-financiera justifica el establecimiento y cuantía cuando la ley la exige.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'IVTM: titular registral de vehículo apto; cuota por parámetros técnicos y tarifa, sin base imponible monetaria autónoma; periodo anual y devengo inicial; gestión por ayuntamiento del domicilio del permiso. IIVTNU: incremento de terreno urbano manifestado en transmisión o derecho real; no sujeción si no hay incremento acreditado; impuesto potestativo. Tasa: dominio público o servicio/actividad particular; sujeto usuario o beneficiario; cuantía ligada a utilidad o coste; devengo según ordenanza y naturaleza.',
          'Antes de responder identifica si se trata de impuesto obligatorio, impuesto potestativo o tasa. Distingue no sujeción, exención y bonificación. No uses “precio público” como sinónimo de tasa: el presupuesto de exigencia y el régimen jurídico son diferentes.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'IVTM grava titularidad registral, no circulación efectiva. Permiso de circulación determina sujeto y municipio gestor. Su tarifa usa potencia, plazas, carga o cilindrada; no una base imponible general. IIVTNU no grava terreno rústico ni operación sin incremento acreditado. La construcción no es el objeto del IIVTNU. Tasa no equivale a impuesto ni a precio público. No toda actividad municipal permite tasa. En servicios, el rendimiento total no debe superar coste real o previsible. El devengo puede adelantarse a la prestación mediante depósito previo.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica por qué el IVTM no tiene una base imponible autónoma y qué parámetros utiliza para obtener la cuota.',
          '2. Define el hecho imponible del IIVTNU y enumera las dos comprobaciones iniciales para determinar sujeción.',
          '3. Compara tasa por dominio público, tasa por servicio y precio público en cuanto a presupuesto y cuantificación.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Memoriza IVTM 92-97, IIVTNU 104 y tasas 20-26. En IVTM busca términos registrales; en IIVTNU busca terreno urbano, incremento y transmisión; en tasas busca particularidad, dominio público o servicio no voluntario/sin alternativa privada. Si una opción da una cuantía concreta, comprueba si pertenece a la ley, a un máximo actualizable o a la ordenanza. No extrapoles una ordenanza de un municipio a toda la provincia.'
        ]}
      ],
      tree: 'Tema 30 · IVTM, IIVTNU y tasas\n├─ IVTM\n│  ├─ Titularidad de vehículo apto\n│  ├─ Sujeto del permiso de circulación\n│  ├─ Tarifa por parámetros técnicos\n│  ├─ Cuota y bonificaciones\n│  ├─ Devengo y periodo\n│  └─ Gestión por domicilio registral\n├─ IIVTNU\n│  ├─ Terreno urbano\n│  ├─ Incremento de valor\n│  ├─ Transmisión o derecho real\n│  ├─ Ausencia de incremento\n│  └─ No sujeciones legales\n└─ Tasas\n   ├─ Dominio público\n   ├─ Servicios y actividades\n   ├─ Sujetos y sustitutos\n   ├─ Cuantía por utilidad o coste\n   └─ Devengo y depósito previo',
      reviewTable: [
        ['Elemento', 'IVTM', 'IIVTNU / tasas'],
        ['Naturaleza', 'Impuesto directo obligatorio', 'IIVTNU directo potestativo; tasa es tributo potestativo'],
        ['Hecho', 'Titularidad de vehículo apto', 'Incremento urbano / uso o servicio particular'],
        ['Sujeto', 'Titular del permiso', 'Según transmisión / usuario o beneficiario'],
        ['Base', 'No hay base autónoma; parámetros técnicos', 'IIVTNU según ley; tasa según utilidad o coste'],
        ['Cuota', 'Tarifa y coeficiente municipal', 'Ordenanza dentro de límites legales'],
        ['Devengo', 'Primer día o primera adquisición', 'Transmisión / inicio, solicitud o periodo'],
        ['No sujeción', 'Vehículos y remolques tasados', 'Sin incremento, rústicos y otros casos'],
        ['Gestión', 'Municipio del domicilio del permiso', 'Ayuntamiento o entidad delegada'],
        ['Límite tasa', 'No aplicable', 'Rendimiento global no superior al coste en servicios']
      ]
    },
    31: {
      sources: [source.ley6, source.eidas, source.eidas2, source.ley39],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Ley 6/2020 no sustituye al Reglamento eIDAS ni contiene una regulación completa de la firma electrónica. Complementa el marco europeo en aspectos nacionales: efectos de documentos, vigencia, revocación y comprobación de certificados, obligaciones de prestadores, supervisión, lista de confianza y sanciones. La reforma europea de 2024 amplía el marco de identidad digital y servicios de confianza; por ello debe estudiarse la Ley 6/2020 junto con el Reglamento 910/2014 en su redacción vigente.',
          'Firma electrónica, certificado y servicio de confianza son conceptos diferentes. La firma son datos electrónicos utilizados para firmar; el certificado vincula datos de validación con una identidad; y el prestador emite o gestiona servicios sometidos a requisitos. En Administración, identificación acredita quién actúa y firma acredita además voluntad y consentimiento para actuaciones tasadas. Una persona jurídica utiliza sello para garantizar origen e integridad y actúa mediante firma de su representante cuando corresponde.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Ley 6/2020 fue publicada en el BOE de 12 de noviembre de 2020 y su texto consolidado incorpora la modificación de 2023. Sus artículos 1 a 3 fijan objeto, ámbito y efectos; los artículos 4 a 7 regulan certificados; los artículos 8 a 13, obligaciones y responsabilidad de prestadores; los artículos 14 a 17, supervisión, inspección, lista de confianza e información; y los artículos 18 a 20, infracciones y sanciones. La Ley 59/2003 quedó derogada.',
          'El Reglamento eIDAS define firma electrónica, firma avanzada, firma cualificada, certificado cualificado, sello, sello de tiempo, entrega electrónica certificada y autenticación de sitio web. El Reglamento (UE) 2024/1183 modificó el marco europeo para establecer la identidad digital europea y nuevos servicios. Las disposiciones tienen calendarios y desarrollo técnico; los datos operativos deben revisarse cuando se publique la fecha de examen.',
          'La Ley 39/2015, artículos 9 a 12, regula sistemas de identificación y firma admitidos y asistencia. El certificado puede servir a un sistema, pero no convierte identificación y firma en sinónimos. La Administración no puede exigir firma para toda actuación: se reserva, entre otras, a solicitudes, declaraciones responsables, comunicaciones, recursos, desistimientos y renuncias.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La Ley 6/2020 se aplica a prestadores públicos y privados establecidos en España y a determinados establecimientos permanentes. Complementa eIDAS solo en materias no armonizadas o dejadas a los Estados. Los documentos electrónicos públicos, administrativos y privados tienen el valor correspondiente a su naturaleza. El hecho de utilizar un servicio no cualificado no priva automáticamente de eficacia al documento; cambia el régimen probatorio y las presunciones aplicables.',
          'Una firma electrónica son datos en formato electrónico anejos a otros datos o asociados lógicamente con ellos que el firmante utiliza para firmar. La firma avanzada debe estar vinculada al firmante de manera única, permitir identificarlo, crearse con datos bajo su control con alto nivel de confianza y detectar modificaciones posteriores. La firma cualificada es una firma avanzada creada mediante dispositivo cualificado y basada en certificado cualificado. Tiene efecto jurídico equivalente a firma manuscrita; a las demás no se les puede negar eficacia solo por ser electrónicas o no cualificadas.',
          'El certificado de firma es una declaración electrónica que vincula datos de validación con una persona física y confirma al menos su nombre o pseudónimo. Un certificado cualificado añade los requisitos del Reglamento y es expedido por prestador cualificado. La firma la realiza una persona física. Las personas jurídicas utilizan sellos electrónicos para acreditar origen e integridad, sin perjuicio de actuar mediante la firma de la persona física representante. Un certificado de representante acredita el atributo de representación, que debe mantenerse actualizado.',
          'La Ley 6/2020 limita la vigencia de certificados cualificados a un máximo de cinco años y regula caducidad, revocación y suspensión. Se revoca por solicitud legitimada, compromiso de claves, resolución, fallecimiento o extinción, fin de representación, cese del prestador, datos falsos o mecanismos inseguros, entre otras causas. La suspensión solo procede cuando la declaración de prácticas la contempla y en los supuestos legales. La consulta del estado del certificado es esencial: un archivo instalado no prueba que siga vigente.',
          'La comprobación de identidad para expedir certificados cualificados se realiza por medios que garanticen seguridad equivalente a presencia física según Reglamento y normativa nacional. Los certificados incluyen identificadores y atributos conforme a la ley. El prestador debe verificar identidad y representación, conservar documentación y ofrecer información clara sobre condiciones, límites, prácticas y mecanismos de reclamación. El usuario debe proteger sus datos de creación y pedir revocación ante pérdida, sospecha de compromiso o cese de representación.',
          'Los servicios de confianza comprenden, según el marco europeo, creación, verificación y validación de firmas, sellos o sellos de tiempo; entrega electrónica certificada; certificados para autenticación de sitios web; conservación de firmas y sellos; y los servicios incorporados por la reforma europea. Un prestador cualificado y un servicio cualificado figuran en la lista de confianza tras evaluación y decisión de cualificación. Un prestador no cualificado puede operar sin verificación previa, pero está sujeto a comunicación, supervisión y obligaciones.',
          'Las llamadas autoridades de certificación son, en terminología jurídica actual, prestadores de servicios de confianza que emiten y gestionan certificados. Sus tareas pueden incluir generación, expedición, renovación, suspensión, revocación, consulta de estado, validación, sellado de tiempo, sello electrónico, conservación, entrega certificada y autenticación web. No todos los prestadores ofrecen todos los servicios ni todos son cualificados. La lista de confianza permite comprobar prestador, servicio y estado de cualificación.',
          'Los prestadores deben aplicar medidas técnicas y organizativas para gestionar riesgos y notificar violaciones de seguridad o pérdidas de integridad con impacto significativo. Los cualificados deben someterse a evaluaciones de conformidad periódicas y cumplir garantías y requisitos adicionales. El órgano estatal de supervisión controla prestadores, realiza inspecciones, mantiene la lista, puede dictar directrices y adoptar medidas correctoras. La cualificación no es una etiqueta comercial otorgada por el propio prestador.',
          'En la Administración electrónica, el certificado se utiliza para acceder a sedes, identificarse, firmar solicitudes, recursos, declaraciones y comunicaciones, recibir notificaciones, consultar expedientes, firmar documentos de empleado público o validar sellos y códigos. El sistema debe comprobar cadena de confianza, vigencia temporal, revocación, integridad del documento, identidad y, cuando proceda, representación. El resultado de una herramienta de firma debe leerse: una firma puede ser criptográficamente válida pero no acreditar una representación concreta.',
          'Los certificados pueden almacenarse en software, tarjeta criptográfica, DNI electrónico, token o dispositivo cualificado, y también utilizarse mediante firma remota en la nube bajo control exclusivo del firmante y requisitos de seguridad. Soporte no equivale a nivel jurídico: una firma cualificada requiere certificado cualificado y dispositivo cualificado, no solo una tarjeta. El formato del documento y la firma —por ejemplo PDF firmado, firma XML o contenedor— afecta a interoperabilidad y conservación, pero no sustituye la comprobación jurídica.',
          'Identificación y firma se separan en la Ley 39/2015. Como regla, la Administración verifica identidad; exige firma para las actuaciones enumeradas. Las personas físicas suelen poder elegir canal si no están obligadas, mientras que personas jurídicas y otros colectivos se relacionan electrónicamente. La asistencia en oficinas permite ayudar y, en casos legales, que un funcionario habilitado realice la identificación o firma con consentimiento expreso del interesado.',
          'La conservación a largo plazo exige mantener evidencia de integridad, fecha, estado del certificado y validación. Un certificado caducado después de la firma no invalida por sí solo una firma que era válida y puede demostrarse mediante sellos de tiempo y evidencias. Por eso la mera visualización de un icono no basta. Deben usarse validadores oficiales o confiables, conservar el documento original y evitar imprimir y escanear como sustituto del original electrónico.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Ley 6/2020 complementa eIDAS. Firma es dato usado por persona física; sello acredita origen e integridad de persona jurídica. Firma avanzada cumple cuatro requisitos; cualificada añade dispositivo y certificado cualificados y equivale a manuscrita. Certificado cualificado dura como máximo cinco años según la ley española y puede caducar, revocarse o suspenderse. Prestador cualificado y servicio cualificado deben aparecer en lista de confianza. Identificación no equivale a firma. Soporte físico, software o nube no determina por sí solo el nivel jurídico.',
          'En una validación administrativa comprobar documento original, integridad, firmante, vigencia o estado en fecha de firma, cadena de confianza, cualificación y representación. La caducidad actual no basta para declarar inválido un documento histórico con evidencias de validación.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Ley 6/2020 no reproduce todo eIDAS. Ley 59/2003 está derogada. Solo personas físicas firman; personas jurídicas sellan o actúan por representante. A una firma no cualificada no se le niega eficacia solo por su formato. Cualificada equivale a manuscrita. Certificado instalado no significa certificado vigente. Máximo nacional de certificado cualificado: cinco años. Prestador no cualificado también está supervisado. Lista de confianza no es un directorio voluntario. Identificación y firma tienen usos distintos en Ley 39/2015. Tarjeta o nube no garantizan por sí mismas firma cualificada.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Distingue firma simple, avanzada y cualificada y explica sus efectos jurídicos.',
          '2. Explica la diferencia entre certificado de firma, certificado de representante y sello de persona jurídica.',
          '3. Describe el proceso completo para validar una firma recibida en un expediente administrativo.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Memoriza Ley 6/2020 artículos 1-7 y 13-17, eIDAS artículos de definiciones y efectos, y Ley 39/2015 artículos 9-12. Separa en tarjetas: concepto, sujeto, soporte, nivel jurídico, vigencia y servicio. Si una respuesta habla de “autoridad certificadora”, tradúcela mentalmente a prestador de servicios de confianza y comprueba si afirma que es cualificado. Mantén una revisión dinámica por la aplicación del Reglamento 2024/1183 y sus actos técnicos.'
        ]}
      ],
      tree: 'Tema 31 · confianza y firma electrónica\n├─ Marco normativo\n│  ├─ Reglamento eIDAS\n│  ├─ Ley 6/2020 complementaria\n│  ├─ Reforma europea 2024/1183\n│  └─ Ley 39/2015 en Administración\n├─ Firma y sello\n│  ├─ Firma simple\n│  ├─ Firma avanzada\n│  ├─ Firma cualificada\n│  ├─ Sello de persona jurídica\n│  └─ Efectos jurídicos\n├─ Certificados\n│  ├─ Firma y representación\n│  ├─ Vigencia máxima\n│  ├─ Revocación y suspensión\n│  └─ Consulta de estado\n├─ Prestadores y servicios\n│  ├─ Cualificados y no cualificados\n│  ├─ Lista de confianza\n│  ├─ Validación y sellado de tiempo\n│  ├─ Entrega y conservación\n│  └─ Supervisión y seguridad\n└─ Uso administrativo\n   ├─ Identificación frente a firma\n   ├─ Soportes locales y remotos\n   ├─ Representación\n   └─ Validación y conservación',
      reviewTable: [
        ['Concepto', 'Regla esencial', 'Referencia'],
        ['Ley 6/2020', 'Complementa el Reglamento eIDAS', 'Art. 1 Ley 6/2020'],
        ['Documento', 'Valor según naturaleza y legislación aplicable', 'Art. 3 Ley 6/2020'],
        ['Firma avanzada', 'Identifica, vincula, controla y detecta cambios', 'Art. 26 eIDAS'],
        ['Firma cualificada', 'Avanzada, dispositivo y certificado cualificados', 'eIDAS'],
        ['Efecto', 'Cualificada equivale a manuscrita', 'Art. 25 eIDAS'],
        ['Persona jurídica', 'Sello o firma de representante físico', 'Ley 6/2020 / eIDAS'],
        ['Vigencia', 'Certificado cualificado máximo cinco años', 'Art. 4 Ley 6/2020'],
        ['Estado', 'Caducidad, revocación y posible suspensión', 'Arts. 4-5 Ley 6/2020'],
        ['Prestador', 'Puede ser cualificado o no cualificado', 'Ley 6/2020 / eIDAS'],
        ['Lista de confianza', 'Identifica prestadores y servicios cualificados', 'Art. 16 Ley 6/2020'],
        ['Administración', 'Identificación general y firma en actuaciones tasadas', 'Arts. 9-11 Ley 39/2015']
      ]
    }
  };

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  for (const [number, patch] of Object.entries(THEORY)) {
    const theme = ope.themes.find(item => Number(item.number) === Number(number));
    if (!theme) continue;
    theme.sections = patch.sections;
    theme.tree = patch.tree;
    theme.reviewTable = patch.reviewTable;
    theme.officialSources = patch.sources;
    theme.theoryStatus = {
      version: VERSION,
      reviewedAt: REVIEW_DATE,
      autonomous: true,
      programmeLiteral: true,
      sourcePolicy: 'Programa oficial Diputación 2026; TRLRHL y normas BOE/DOUE consolidadas; datos locales y técnicos sujetos a revisión dinámica',
      words: wordCount({ ...theme, ...patch })
    };
    theme.academiaVersion = 'v0.87 bloque 2';
  }

  const prior = ope.theoryProgramme?.v87?.completedThemes || [];
  const completed = [...new Set([...prior, ...Object.keys(THEORY).map(Number)])].sort((a, b) => a - b);
  const pending = ope.themes.map(theme => Number(theme.number)).filter(number => !completed.includes(number));
  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v87 = {
    ...(ope.theoryProgramme.v87 || {}),
    version: VERSION,
    reviewedAt: REVIEW_DATE,
    autonomousThemes: completed.length,
    totalThemes: ope.themes.length,
    completedThemes: completed,
    pendingThemes: pending,
    status: 'EN_PROGRESO',
    dynamicChecks: [
      ...new Set([
        ...(ope.theoryProgramme.v87?.dynamicChecks || []),
        'Revisar tipos, coeficientes, bonificaciones y ordenanzas locales vigentes para IBI, IAE, IVTM, IIVTNU y tasas en la fecha del examen.',
        'Revisar la aplicación y los actos de ejecución del Reglamento (UE) 2024/1183 sobre identidad digital y servicios de confianza.'
      ])
    ],
    note: 'Temas 25 a 31 reconstruidos como teoría autosuficiente. Pendientes temas 1 a 24 y 32 a 40, además de la literalidad estatutaria del OAPGT.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    version: VERSION,
    status: 'EN_PROGRESO',
    autonomousThemes: completed.length,
    totalThemes: ope.themes.length,
    completedThemes: completed,
    pendingThemes: pending,
    minimumWords: Math.min(...completed.map(number => ope.themes.find(item => Number(item.number) === number)?.theoryStatus?.words || Number.POSITIVE_INFINITY))
  };
})();
