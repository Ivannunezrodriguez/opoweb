(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-16';
  const source = {
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    catastro: { label: 'Texto refundido de la Ley del Catastro Inmobiliario', reference: 'BOE-A-2004-4163', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4163' },
    iae: { label: 'Tarifas e Instrucción del Impuesto sobre Actividades Económicas', reference: 'BOE-A-1990-23930', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1990-23930' },
    vehiculos: { label: 'Reglamento General de Vehículos', reference: 'BOE-A-1999-1826', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-1826' },
    iivtnu: { label: 'Real Decreto-ley 26/2021, adaptación del IIVTNU', reference: 'BOE-A-2021-18276', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-18276' },
    lgt: { label: 'Ley 58/2003, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186' }
  };

  const THEORY = {
    29: {
      sources: [source.trlrhl, source.catastro, source.iae],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 29 reúne dos impuestos municipales obligatorios: el Impuesto sobre Bienes Inmuebles y el Impuesto sobre Actividades Económicas. Ambos son tributos directos y de carácter real, pero gravan manifestaciones diferentes de capacidad económica. El IBI recae sobre el valor de los inmuebles a través de la titularidad de determinados derechos; el IAE grava el mero ejercicio en territorio nacional de actividades empresariales, profesionales o artísticas. Para cada impuesto debe seguirse la misma secuencia: naturaleza, hecho imponible, no sujeción, exenciones, sujeto pasivo, cuantificación, bonificaciones, devengo, período impositivo y gestión. El error típico consiste en trasladar reglas de un impuesto al otro o en confundir sujeción con obligación efectiva de pago.',
          'La norma central es el texto refundido de la Ley Reguladora de las Haciendas Locales. En el IBI debe conectarse con la legislación catastral, porque la clase del inmueble, la titularidad, la descripción y el valor catastral condicionan la liquidación municipal. En el IAE deben manejarse las tarifas y su Instrucción, que ordenan las actividades por secciones, divisiones, agrupaciones, grupos y epígrafes. La preparación práctica exige separar la gestión catastral del IBI de su gestión tributaria y, en el IAE, la gestión censal de la liquidación y recaudación de las cuotas municipales.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Los ayuntamientos deben exigir IBI, IAE e IVTM, mientras que ICIO e IIVTNU son potestativos dentro del marco legal. La obligatoriedad del impuesto no elimina las no sujeciones, exenciones ni bonificaciones. Tampoco permite a la ordenanza alterar los elementos esenciales reservados a la ley: la entidad local desarrolla tipos, coeficientes y beneficios dentro de los márgenes legalmente previstos, pero no puede crear un hecho imponible distinto ni convertir una exención legal en un supuesto sujeto.',
          'En el IBI el hecho imponible sigue una prelación: concesión administrativa, derecho real de superficie, derecho real de usufructo y propiedad. La realización del primero que exista excluye las modalidades posteriores sobre el mismo inmueble, con las especialidades previstas para inmuebles de características especiales. El contribuyente es quien ostenta el derecho que realiza el hecho imponible. La base imponible es el valor catastral; la base liquidable resulta de aplicar, cuando proceda, la reducción legal; la cuota íntegra se obtiene aplicando el tipo y la cuota líquida restando las bonificaciones.',
          'En el IAE el hecho imponible es el mero ejercicio de actividad económica, incluso sin local y aunque no figure expresamente en las tarifas. Actividad económica supone ordenar por cuenta propia medios de producción o recursos humanos para intervenir en la producción o distribución de bienes o servicios. La sujeción no equivale necesariamente a pago: las personas físicas y determinadas entidades con importe neto de cifra de negocios inferior a un millón de euros están exentas, aunque la actividad se encuentre conceptualmente dentro del hecho imponible.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El IBI es un impuesto directo, real y municipal que grava el valor de los bienes inmuebles rústicos, urbanos y de características especiales. Su hecho imponible es la titularidad de una concesión administrativa sobre el inmueble o sobre el servicio público al que esté afecto, de un derecho real de superficie, de un derecho real de usufructo o del derecho de propiedad. La prelación impide gravar simultáneamente al concesionario y al propietario por la misma superficie bajo derechos posteriores. Cuando un inmueble se extiende por varios términos municipales, pertenece a cada municipio por la superficie situada en él.',
          'La ley contempla supuestos no sujetos, como determinadas carreteras, caminos, vías terrestres y bienes de dominio público marítimo-terrestre o hidráulico de aprovechamiento público y gratuito, así como ciertos bienes municipales de dominio público o patrimoniales en las condiciones legales. La no sujeción significa que el hecho imponible no llega a realizarse. La exención, en cambio, presupone realización del hecho imponible pero dispensa legal de pago. Entre las exenciones aparecen bienes de Administraciones afectados a defensa, seguridad, servicios educativos o penitenciarios, bienes comunales, determinados bienes confesionales, Cruz Roja, convenios internacionales, montes y patrimonio histórico bajo requisitos tasados. Algunas exenciones son automáticas y otras exigen solicitud.',
          'Son contribuyentes del IBI las personas físicas, jurídicas y entidades sin personalidad que ostenten el derecho gravado. La transmisión no elimina automáticamente deudas anteriores: el inmueble puede quedar afecto al pago conforme al régimen legal. Los notarios deben solicitar información y advertir sobre deudas y afección. En cotitularidades existen reglas específicas de identificación y responsabilidad. Frente a la Administración, el sujeto correspondiente al devengo soporta la cuota anual; los pactos privados sobre reparto entre vendedor y comprador no cambian por sí solos el obligado tributario.',
          'La base imponible es el valor catastral determinado, notificado e impugnable conforme a la legislación catastral. El Catastro es un registro administrativo estatal y sus actos de descripción, titularidad y valoración no se sustituyen por una liquidación municipal. La base liquidable es el resultado de minorar la base imponible mediante la reducción legal cuando proceda. Esa reducción se aplica normalmente tras procedimientos de valoración colectiva, opera de oficio durante el período establecido y utiliza un coeficiente reductor decreciente. Debe diferenciarse el recurso contra el valor catastral del recurso contra la liquidación municipal.',
          'La cuota íntegra del IBI se calcula aplicando el tipo de gravamen a la base liquidable. La ley establece límites mínimos, supletorios y máximos distintos para inmuebles urbanos, rústicos y de características especiales. La ordenanza puede fijar el tipo dentro de esos márgenes, establecer tipos diferenciados para determinados usos no residenciales y regular recargos sobre inmuebles residenciales desocupados permanentemente cuando concurran los requisitos legales. La cuota líquida resulta de restar las bonificaciones. Hay bonificaciones obligatorias y potestativas, y cada una exige comprobar porcentaje, duración, solicitud y regulación en ordenanza.',
          'El IBI se devenga el primer día del período impositivo y este coincide con el año natural. Las alteraciones catastrales producen efecto tributario conforme a sus reglas de eficacia, normalmente en el devengo siguiente. La compraventa realizada durante el año no provoca un prorrateo tributario automático. El padrón catastral anual sirve de base para la gestión colectiva. El ayuntamiento liquida, recauda, reconoce o deniega beneficios fiscales, resuelve devoluciones y recursos de gestión tributaria; la Dirección General del Catastro mantiene descripción, titularidad y valoración, sin perjuicio de fórmulas de colaboración.',
          'El IAE es un impuesto directo y real cuyo hecho imponible es el mero ejercicio en territorio nacional de actividades empresariales, profesionales o artísticas, con o sin establecimiento. Son empresariales, entre otras, las actividades industriales, comerciales, mineras, de servicios y la ganadería independiente. No forman parte del hecho imponible las actividades agrícolas, la ganadería dependiente, las forestales y las pesqueras. El trabajo por cuenta ajena tampoco convierte al trabajador en sujeto pasivo porque falta la ordenación por cuenta propia.',
          'La ley incluye no sujeciones específicas, como ciertas ventas aisladas de elementos del activo fijo usados durante el período legal, la venta de productos recibidos en pago de trabajos personales o profesionales, la exposición de artículos con finalidad decorativa o la realización de un único acto u operación aislada cuando se cumplan las condiciones legales. Estas situaciones deben separarse de las exenciones. Entre los exentos figuran el Estado, comunidades autónomas, entidades locales y determinados organismos; quienes inician actividad durante los dos primeros períodos; las personas físicas; y sujetos cuyo importe neto de cifra de negocios sea inferior a un millón de euros, además de otros casos tasados.',
          'Son sujetos pasivos del IAE las personas físicas, jurídicas y entidades del artículo 35.4 de la Ley General Tributaria que realicen la actividad. La cuota puede ser municipal, provincial o nacional según la tarifa elegida y el alcance territorial autorizado. Las tarifas fijan cuotas mínimas o elementos para calcularlas; sobre las cuotas municipales puede aplicarse coeficiente de ponderación según cifra de negocios y coeficiente de situación según la categoría fiscal de la vía, dentro de límites legales. Las diputaciones pueden establecer recargo provincial sobre cuotas municipales si concurren los requisitos legales.',
          'Las ordenanzas pueden regular bonificaciones potestativas dentro de la ley, entre ellas por inicio de actividad tras finalizar la exención inicial, creación de empleo, utilización de energías renovables, adopción de planes de transporte o resultados negativos. Debe distinguirse la reducción o bonificación de la cuota de la exención subjetiva. No toda política municipal permite una bonificación: se necesita habilitación legal, acuerdo fiscal y cumplimiento de requisitos objetivos.',
          'El período impositivo del IAE coincide con el año natural salvo declaración de alta, en cuyo caso comprende desde el inicio hasta fin de año. El devengo se produce el primer día del período; en espectáculos puede producirse por cada actuación en los términos de las tarifas. Las cuotas se prorratean por trimestres naturales en los supuestos de alta y baja previstos. La declaración de baja por cese debe distinguirse de la exención sobrevenida por cifra de negocios.',
          'La gestión del IAE se divide. La gestión censal comprende formación de matrícula, calificación de actividades, señalamiento de cuotas de tarifa y actos censales; corresponde a la Administración tributaria estatal, salvo delegación. La gestión tributaria de cuotas municipales comprende liquidación, recaudación, concesión o denegación de beneficios y revisión de actos propios y corresponde al ayuntamiento. La matrícula anual se expone al público. Una discrepancia sobre el epígrafe debe dirigirse por la vía censal; una discrepancia sobre el recibo municipal, por la vía de gestión tributaria.',
          'Método práctico: en IBI identificar inmueble, clase catastral, derecho prioritario, sujeto al devengo, valor catastral, reducción, tipo, bonificación y órgano competente. En IAE identificar actividad por cuenta propia, sujeción, exención, epígrafe, clase de cuota, elementos tributarios, coeficientes, bonificaciones, fecha de alta o baja y órgano responsable de la gestión censal o tributaria. La respuesta debe citar el precepto y distinguir regla general, excepción y efecto.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'IBI: derecho prioritario sobre inmueble, contribuyente titular, base imponible igual a valor catastral, base liquidable tras reducción, cuota íntegra por tipo, cuota líquida tras bonificaciones, devengo el 1 de enero y gestión compartida entre Catastro y ayuntamiento. IAE: ejercicio por cuenta propia, sujeto aunque no exista local, numerosas exenciones, cuota conforme a tarifas y coeficientes, devengo al inicio del período y separación entre gestión censal estatal y gestión tributaria municipal.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Prelación de derechos del IBI; no sujeción frente a exención; sujeto al devengo; valor catastral y base liquidable; reducción de oficio; cuota íntegra y líquida; tipos diferenciados; recargo por desocupación; 1 de enero; gestión catastral frente a tributaria. En IAE: mero ejercicio, cuenta propia, actividades excluidas, persona física exenta, umbral de un millón, alta inicial, cuotas municipal/provincial/nacional, coeficientes, recargo provincial, prorrateo y gestión censal frente a gestión tributaria.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué derecho prevalece en el hecho imponible del IBI y quién es contribuyente? ¿Cómo se pasa del valor catastral a la cuota líquida? ¿Por qué una persona física puede estar sujeta al IAE pero exenta y qué órgano resuelve un error de epígrafe frente a un error del recibo?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Construye dos cadenas. IBI: inmueble, derecho, sujeto, valor, reducción, tipo, bonificación, devengo y gestión. IAE: actividad, sujeción, exención, tarifa, ámbito, coeficiente, bonificación, devengo y gestión. Cuando una opción mezcle Catastro con recaudación o matrícula censal con cobro municipal, revisa la competencia. Rechaza respuestas que equiparen no sujeción y exención o que afirmen prorrateo general del IBI.'
        ]}
      ],
      tree: 'IBI e IAE\n├─ IBI\n│  ├─ Naturaleza: directo y real\n│  ├─ Hecho: concesión > superficie > usufructo > propiedad\n│  ├─ No sujeción y exenciones\n│  ├─ Sujeto: titular del derecho gravado\n│  ├─ Base imponible: valor catastral\n│  ├─ Base liquidable: reducción legal\n│  ├─ Cuota íntegra, bonificaciones y cuota líquida\n│  ├─ Devengo: primer día del año\n│  └─ Catastro frente a gestión municipal\n└─ IAE\n   ├─ Mero ejercicio por cuenta propia\n   ├─ No sujeción y exenciones\n   ├─ Sujeto que realiza la actividad\n   ├─ Tarifas y clase de cuota\n   ├─ Ponderación, situación y recargo provincial\n   ├─ Bonificaciones\n   ├─ Devengo y prorrateo\n   └─ Gestión censal frente a tributaria',
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['IBI naturaleza', 'Impuesto directo, real y obligatorio', 'Arts. 59 y 60 TRLRHL'],
        ['IBI hecho', 'Prelación concesión, superficie, usufructo y propiedad', 'Art. 61 TRLRHL'],
        ['IBI sujeto', 'Titular del derecho que realiza el hecho', 'Art. 63 TRLRHL'],
        ['IBI base imponible', 'Valor catastral', 'Art. 65 TRLRHL'],
        ['IBI base liquidable', 'Base imponible menos reducción aplicable', 'Arts. 66–70 TRLRHL'],
        ['IBI cuota', 'Tipo sobre base liquidable y bonificaciones', 'Arts. 71–74 TRLRHL'],
        ['IBI devengo', 'Primer día del período anual', 'Art. 75 TRLRHL'],
        ['IBI gestión', 'Catastro y gestión tributaria municipal diferenciados', 'Arts. 76–77 TRLRHL'],
        ['IAE hecho', 'Mero ejercicio por cuenta propia', 'Arts. 78–79 TRLRHL'],
        ['IAE exención', 'Personas físicas y cifra de negocios inferior a un millón, entre otros', 'Art. 82 TRLRHL'],
        ['IAE sujeto', 'Quien realiza la actividad', 'Art. 83 TRLRHL'],
        ['IAE cuota', 'Tarifas, coeficientes y recargo provincial', 'Arts. 85–87 y 134 TRLRHL'],
        ['IAE devengo', 'Primer día; reglas de alta, baja y espectáculos', 'Art. 89 TRLRHL'],
        ['IAE gestión', 'Censal estatal y tributaria municipal', 'Arts. 90–91 TRLRHL']
      ]
    },
    30: {
      sources: [source.trlrhl, source.vehiculos, source.iivtnu, source.lgt],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 30 agrupa tres figuras: IVTM, IIVTNU y tasas. El IVTM es impuesto obligatorio sobre vehículos aptos para circular. El IIVTNU es impuesto potestativo sobre el incremento de valor del suelo urbano manifestado por transmisión o constitución o transmisión de derechos reales de goce. Las tasas son tributos potestativos vinculados al uso especial del dominio público o a servicios y actividades administrativas que afectan particularmente al sujeto. La clave es no buscar una estructura idéntica: el IVTM se cuantifica mediante tarifas, el IIVTNU mediante base y tipo, y la tasa mediante valor de utilidad o coste del servicio.',
          'La preparación debe ser operativa. En IVTM se comprueba registro, titular del permiso, clase del vehículo, tarifa, coeficiente, bonificación, devengo y municipio competente. En IIVTNU se comprueba naturaleza urbana, transmisión, existencia real de incremento, sujeto según operación gratuita u onerosa, valor del suelo, período, coeficiente, incremento real inferior, tipo y fecha de devengo. En tasas se identifica dominio público o servicio, voluntariedad, beneficiario, coste o valor de mercado, sujeto, sustituto, ordenanza, informe técnico-económico y momento del devengo.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El IVTM no parte de una base imponible autónoma: la ley establece un cuadro de tarifas según potencia fiscal, plazas, carga útil o cilindrada. Por ello, una pregunta que pretenda identificar como base imponible el valor de mercado del vehículo es incorrecta. La ordenanza puede aplicar coeficiente de hasta dos y bonificaciones autorizadas. El sujeto pasivo es quien consta como titular en el permiso de circulación, no necesariamente quien conduce o usa habitualmente el vehículo.',
          'El IIVTNU solo grava incremento de valor del terreno urbano. Desde la reforma de 2021, no está sujeta la transmisión cuando se acredita inexistencia de incremento comparando valores legales. La base objetiva se calcula con valor catastral del suelo y coeficiente por período, pero si el incremento real acreditado es inferior, se toma este. La ley fija coeficientes máximos actualizables y permite al ayuntamiento aprobar coeficientes menores. El período máximo es veinte años y, en transmisiones inferiores a un año, se computan meses completos.',
          'La tasa no es precio público. La tasa exige utilización privativa o aprovechamiento especial del dominio público, o servicio o actividad administrativa en las condiciones legales. El precio público se conecta con servicios voluntarios prestados también por el sector privado. En tasas por servicios el rendimiento previsible no puede exceder, en conjunto, del coste real o previsible; en dominio público se toma como referencia el valor que tendría la utilidad en el mercado si el bien no fuera público.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El IVTM es un impuesto directo que grava la titularidad de vehículos de tracción mecánica aptos para circular por vías públicas. Se considera apto el vehículo matriculado en los registros correspondientes mientras no cause baja. También quedan comprendidos vehículos con permisos temporales y matrícula turística. No están sujetos los vehículos que, dados de baja por antigüedad, sean autorizados excepcionalmente para exhibiciones, certámenes o carreras, ni los remolques y semirremolques arrastrados por vehículos cuya carga útil no exceda de 750 kilogramos.',
          'La ley establece exenciones, entre ellas vehículos oficiales destinados a defensa o seguridad, representaciones diplomáticas bajo reciprocidad, ambulancias y vehículos sanitarios, vehículos para personas con movilidad reducida y determinados vehículos matriculados a nombre de personas con discapacidad para su uso exclusivo, autobuses de transporte público urbano con capacidad mínima legal y tractores, remolques y maquinaria con cartilla de inspección agrícola. Varias exenciones son rogadas: el interesado debe acreditar requisitos y la Administración concede el beneficio. No basta una finalidad genérica sin documentación.',
          'El sujeto pasivo del IVTM es la persona o entidad a cuyo nombre consta el vehículo en el permiso de circulación. La cuota se determina mediante tarifa legal: caballos fiscales en turismos y tractores, número de plazas en autobuses, carga útil en camiones y remolques, cilindrada en motocicletas y otros criterios por clase. La ordenanza puede incrementar las cuotas mediante coeficiente único o distinto por clases, sin exceder de dos. Puede establecer bonificaciones de hasta los porcentajes legales por combustible, características del motor, impacto ambiental y antigüedad o condición histórica, según regulación local.',
          'El período impositivo del IVTM coincide con el año natural, salvo primera adquisición, y el impuesto se devenga el primer día. La cuota se prorratea por trimestres naturales en primera adquisición, baja definitiva y baja temporal por sustracción o robo desde su anotación. La gestión corresponde al ayuntamiento del domicilio que conste en el permiso de circulación. La Administración de tráfico exige acreditación tributaria para determinados trámites. La ordenanza y los convenios de colaboración deben respetar el dato registral que determina la competencia.',
          'El IIVTNU es un impuesto directo que grava el incremento de valor de terrenos de naturaleza urbana puesto de manifiesto por transmisión de su propiedad o por constitución o transmisión de derechos reales de goce limitativos del dominio. No grava el valor de la construcción. No están sujetas las transmisiones de terrenos rústicos a efectos del impuesto ni los supuestos legalmente excluidos. La clasificación urbanística y el valor catastral del suelo son decisivos, pero la ley contempla reglas para inmuebles de características especiales y terrenos sin valor catastral determinado.',
          'No se produce sujeción cuando el interesado acredita que no existe incremento de valor. Para comparar se toman los valores de transmisión y adquisición conforme a las reglas legales, sin computar gastos ni tributos y separando, si existe construcción, la proporción del valor catastral del suelo. La Administración puede comprobar esos valores. La no sujeción por inexistencia de incremento no es una bonificación ni una exención: falta la manifestación de capacidad económica que constituye el presupuesto del impuesto.',
          'En transmisiones lucrativas, como donación o herencia, es contribuyente quien adquiere el terreno o derecho. En transmisiones onerosas, como compraventa, es contribuyente quien transmite. Si el transmitente oneroso es persona física no residente en España, el adquirente actúa como sustituto en los términos legales. Esta distinción debe resolverse antes de calcular. Las transmisiones entre cónyuges o a hijos derivadas de nulidad, separación o divorcio y otras operaciones tasadas pueden quedar no sujetas o exentas según el precepto aplicable.',
          'La base imponible objetiva del IIVTNU se obtiene multiplicando el valor del terreno en el momento del devengo por el coeficiente correspondiente al período de generación. Como regla, el valor es la parte catastral del suelo. Los ayuntamientos pueden establecer reducciones temporales tras procedimientos de valoración colectiva dentro de límites legales. El período se cuenta por años completos, con máximo veinte años; si es inferior a un año, se computan meses completos. Los coeficientes máximos se actualizan legalmente y la ordenanza puede aprobar otros inferiores.',
          'Cuando el incremento real acreditado es inferior a la base objetiva, se toma como base el incremento real. Esta comparación no significa elegir libremente cualquier método: deben utilizarse valores y proporciones legales, con facultad de comprobación. El tipo lo fija la ordenanza sin superar el treinta por ciento. La cuota íntegra resulta de aplicar el tipo a la base y la cuota líquida de practicar bonificaciones, como la potestativa por transmisiones lucrativas por causa de muerte a favor de descendientes, adoptados, cónyuges, ascendientes y adoptantes.',
          'El IIVTNU se devenga en la fecha de transmisión de la propiedad o en la fecha de constitución o transmisión del derecho real. La ley fija plazos de declaración distintos según actos inter vivos o por causa de muerte, con posible prórroga en estos últimos. Notarios y otras autoridades colaboran mediante comunicación. Si el acto queda resuelto o anulado por resolución firme pueden surgir efectos de devolución en los términos legales, pero no toda rescisión privada posterior borra automáticamente el devengo.',
          'Las tasas locales pueden establecerse por utilización privativa o aprovechamiento especial del dominio público local y por prestación de servicios públicos o realización de actividades administrativas de competencia local que afecten o beneficien particularmente al sujeto. En servicios, la ley atiende a que no sean de solicitud voluntaria o resulten imprescindibles, o a que no se presten por el sector privado. No pueden exigirse tasas por todos los servicios: están excluidos, entre otros, abastecimiento en fuentes públicas, alumbrado viario, vigilancia pública general, protección civil, limpieza de la vía pública y enseñanza obligatoria.',
          'Son sujetos pasivos quienes disfrutan, utilizan o aprovechan especialmente el dominio público o solicitan o resultan beneficiados o afectados por servicios o actividades. La ley contempla sustitutos en determinados supuestos: por ejemplo, propietarios en ciertas tasas relacionadas con ocupantes de viviendas o locales y aseguradoras en servicios de prevención y extinción de incendios bajo las condiciones legales. La ordenanza debe identificar contribuyente, sustituto, responsables y reglas de repercusión sin inventar figuras no habilitadas.',
          'En tasas por dominio público el importe se fija tomando como referencia el valor de mercado de la utilidad si el bien no fuera público, pudiendo existir tarifas, licitación o convenios dentro de la ley. En tasas por servicios, el rendimiento previsible no puede exceder en conjunto del coste real o previsible del servicio o actividad o del valor de la prestación. Pueden computarse costes directos e indirectos, financieros, amortización y mantenimiento. La cuantía puede modularse por capacidad económica cuando la ley lo permita. La imposición exige acuerdo y ordenanza, normalmente acompañados de informe técnico-económico.',
          'Las tasas se devengan según el hecho imponible y la ordenanza: al comenzar el uso o aprovechamiento; al iniciarse el servicio o actividad, pudiendo exigirse depósito previo; o al presentar la solicitud que inicia la actuación. En aprovechamientos continuados puede fijarse devengo el 1 de enero y período anual. Si el servicio no se presta o la actividad no se realiza por causa no imputable al sujeto, procede devolución del importe correspondiente. No procede devolución cuando el sujeto desiste después de haberse realizado la actuación gravada, salvo previsión aplicable.',
          'Método práctico: en IVTM comprobar registro, titular, clase, tarifa, coeficiente, bonificación, fecha y ayuntamiento del permiso; en IIVTNU comprobar suelo urbano, transmisión, incremento, carácter oneroso o lucrativo, sujeto, valor del suelo, período, base objetiva, incremento real inferior, tipo y devengo; en tasa comprobar dominio público o servicio, competencia, voluntariedad, beneficiario, coste o valor de utilidad, ordenanza y comienzo. Cada respuesta debe indicar norma, hecho, sujeto, cuantificación y efecto.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'IVTM: titular del permiso, vehículo matriculado y no dado de baja, cuota por tarifa y coeficiente, devengo anual y prorrateo trimestral en supuestos tasados. IIVTNU: suelo urbano, transmisión o derecho real, no sujeción sin incremento, adquirente en lucrativas y transmitente en onerosas, base objetiva con límite del incremento real inferior, tipo máximo del treinta por ciento y devengo en la transmisión. Tasas: dominio público o servicio particular, usuario o beneficiario, cuantía por valor de utilidad o coste y devengo al inicio o solicitud según ordenanza.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Vehículo apto y baja registral; remolques hasta 750 kilogramos; exenciones rogadas; titular del permiso; inexistencia de base imponible autónoma; coeficiente máximo dos; prorrateo trimestral y municipio del permiso. En IIVTNU: terreno urbano, inexistencia de incremento, valores comparables, lucrativa frente a onerosa, no residente, máximo veinte años, meses completos, incremento real inferior, tipo máximo treinta por ciento y devengo. En tasas: diferencia con precio público, servicios no gravables, sustitutos, valor de utilidad, límite de coste, depósito previo y devolución por falta de prestación.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué dato registral determina el sujeto y el ayuntamiento del IVTM? ¿Quién paga IIVTNU en una donación y en una compraventa y qué sucede si no existe incremento? ¿Cómo se limita la cuantía de una tasa de dominio público frente a una tasa por servicio?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Clasifica primero la figura. En IVTM piensa en registro y tarifa; en IIVTNU, en transmisión, suelo e incremento; en tasa, en contraprestación pública y ordenanza. Cuando el enunciado hable de base imponible del IVTM, recuerda que la ley cuantifica directamente mediante tarifas. En plusvalía compara base objetiva e incremento real solo con prueba válida. En tasas no confundas coste individual exacto con límite del rendimiento conjunto.'
        ]}
      ],
      tree: 'IVTM, IIVTNU y tasas\n├─ IVTM\n│  ├─ Vehículo matriculado y apto\n│  ├─ Titular del permiso\n│  ├─ Tarifa por clase y magnitud\n│  ├─ Coeficiente municipal ≤ 2\n│  ├─ Exenciones y bonificaciones\n│  ├─ Devengo anual\n│  └─ Gestión: domicilio del permiso\n├─ IIVTNU\n│  ├─ Suelo urbano + transmisión/derecho real\n│  ├─ No sujeción sin incremento\n│  ├─ Lucrativa: adquirente\n│  ├─ Onerosa: transmitente\n│  ├─ Base objetiva o incremento real inferior\n│  ├─ Período máximo veinte años\n│  ├─ Tipo ≤ 30 %\n│  └─ Devengo en transmisión o constitución\n└─ Tasas\n   ├─ Dominio público local\n   ├─ Servicios y actividades\n   ├─ Usuario, beneficiario o sustituto\n   ├─ Valor de utilidad o coste\n   ├─ Ordenanza e informe\n   └─ Devengo al inicio o solicitud',
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['IVTM hecho', 'Vehículo matriculado y apto', 'Art. 92 TRLRHL'],
        ['IVTM sujeto', 'Titular del permiso de circulación', 'Art. 94 TRLRHL'],
        ['IVTM cuota', 'Tarifa legal; no base imponible autónoma', 'Art. 95 TRLRHL'],
        ['IVTM coeficiente', 'Municipal, máximo dos', 'Art. 95.4 TRLRHL'],
        ['IVTM devengo', 'Primer día y prorrateo trimestral tasado', 'Art. 96 TRLRHL'],
        ['IVTM gestión', 'Ayuntamiento del domicilio del permiso', 'Art. 97 TRLRHL'],
        ['IIVTNU hecho', 'Incremento de suelo urbano por transmisión o derecho real', 'Art. 104 TRLRHL'],
        ['IIVTNU no incremento', 'No sujeción si se acredita inexistencia', 'Art. 104.5 TRLRHL'],
        ['IIVTNU sujeto', 'Adquirente en lucrativa; transmitente en onerosa', 'Art. 106 TRLRHL'],
        ['IIVTNU base', 'Valor del suelo por coeficiente o incremento real inferior', 'Art. 107 TRLRHL'],
        ['IIVTNU tipo', 'Máximo treinta por ciento', 'Art. 108 TRLRHL'],
        ['IIVTNU devengo', 'Fecha de transmisión o constitución del derecho', 'Art. 109 TRLRHL'],
        ['Tasa hecho', 'Dominio público o servicio particular', 'Art. 20 TRLRHL'],
        ['Tasa sujetos', 'Usuario, beneficiario y sustitutos legales', 'Art. 23 TRLRHL'],
        ['Tasa cuantía', 'Valor de utilidad o coste real/previsible', 'Arts. 24–25 TRLRHL'],
        ['Tasa devengo', 'Inicio del uso, servicio o solicitud', 'Art. 26 TRLRHL']
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

  for (const [numberText, theory] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes?.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = theory.sections;
    theme.tree = theory.tree;
    theme.reviewTable = theory.reviewTable;
    theme.officialSources = theory.sources;
    theme.theoryStatus = {
      autonomous: true,
      programmeLiteral: true,
      reviewedAt: REVIEW_DATE,
      words: wordCount(theory),
      sourcePolicy: 'Normativa oficial consolidada del BOE; tarifas, Catastro y reglamentos oficiales.'
    };
  }

  const completed = [25, 26, 27, 28, 29, 30];
  const pending = Array.from({ length: 10 }, (_, index) => index + 31);
  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v87 = {
    status: 'EN_PROGRESO',
    scope: 'Temas 25 a 40 de Diputación de Toledo',
    completedThemes: completed,
    pendingThemes: pending,
    autonomousThemes: completed.length,
    totalThemes: 16,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'OpoWeb como fuente teórica principal; fuentes oficiales para vigencia y trazabilidad.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    status: 'EN_PROGRESO',
    block: 3,
    completedThemes: completed,
    pendingThemes: pending,
    minimumWords: Math.min(...[29, 30].map(number => ope.themes.find(theme => Number(theme.number) === number)?.theoryStatus?.words || 0)),
    reviewedAt: REVIEW_DATE,
    numberingCheck: { oapgtTheme: 22, ibiIaeTheme: 29, ivtmIivtnuTasasTheme: 30 }
  };
})();
