(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const source = {
    lgt: { label: 'Ley 58/2003, de 17 de diciembre, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186', reviewedAt: REVIEW_DATE },
    haciendas: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214', reviewedAt: REVIEW_DATE },
    recaudacion: { label: 'Real Decreto 939/2005, Reglamento General de Recaudación', reference: 'BOE-A-2005-14803', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803', reviewedAt: REVIEW_DATE },
    catastro: { label: 'Texto refundido de la Ley del Catastro Inmobiliario', reference: 'BOE-A-2004-4163', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4163', reviewedAt: REVIEW_DATE },
    ley39: { label: 'Ley 39/2015, del Procedimiento Administrativo Común', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', reviewedAt: REVIEW_DATE },
    ley40: { label: 'Ley 40/2015, de Régimen Jurídico del Sector Público', reference: 'BOE-A-2015-10566', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566', reviewedAt: REVIEW_DATE },
    confianza: { label: 'Ley 6/2020, reguladora de determinados aspectos de los servicios electrónicos de confianza', reference: 'BOE-A-2020-14046', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046', reviewedAt: REVIEW_DATE },
    eidas: { label: 'Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza', reference: 'DOUE-L-2014-81822', url: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822', reviewedAt: REVIEW_DATE },
    gobierno: { label: 'Ley 50/1997, de 27 de noviembre, del Gobierno', reference: 'BOE-A-1997-25336', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-25336', reviewedAt: REVIEW_DATE }
  };

  const THEORY = {
    11: {
      sources: [source.lgt, source.haciendas, source.recaudacion],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La recaudación es la función administrativa dirigida al cobro de deudas tributarias y demás recursos de Derecho público. Se desarrolla en periodo voluntario y, si no se paga, en periodo ejecutivo mediante procedimiento de apremio. Este tema exige dominar plazos, aplazamiento y fraccionamiento, compensación, devolución de ingresos y fases esenciales de la ejecución.',
          'La idea clave es que voluntaria y ejecutiva no son procedimientos desconectados: el vencimiento sin pago inicia el periodo ejecutivo en los términos de la Ley General Tributaria. Desde ese momento aparecen recargos, pueden devengarse intereses y la Administración puede ejecutar bienes mediante providencia de apremio, embargo y enajenación, respetando notificación, proporcionalidad y bienes inembargables.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Ley General Tributaria regula recaudación en sus artículos sobre deuda, pago, prescripción, compensación, periodo ejecutivo y apremio. El Reglamento General de Recaudación desarrolla órganos, ingresos, garantías, aplazamientos, embargos, enajenación, tercerías y terminación. El texto refundido de Haciendas Locales atribuye a las entidades locales potestades y remite al régimen estatal con especialidades.',
          'El periodo voluntario depende del tipo de deuda. En liquidaciones notificadas entre los días 1 y 15, el plazo general llega hasta el día 20 del mes siguiente; notificadas entre el 16 y último día, hasta el día 5 del segundo mes posterior. Si el día es inhábil se traslada al inmediato hábil. Las deudas periódicas de notificación colectiva se pagan en el periodo fijado por la Administración, que no puede ser inferior al legal.',
          'El periodo ejecutivo se inicia al día siguiente del vencimiento voluntario sin ingreso, o, en autoliquidaciones presentadas sin ingreso, al día siguiente de finalizar su plazo o de la presentación si fue posterior. La presentación de una solicitud de aplazamiento, compensación o suspensión en periodo voluntario puede impedir el inicio ejecutivo mientras se tramita en los términos legales.',
          'Los recargos ejecutivos son incompatibles entre sí: ejecutivo del cinco por ciento si se paga antes de notificar providencia; reducido del diez por ciento si se paga deuda y recargo dentro del plazo de la providencia; ordinario del veinte por ciento en los demás casos. El ordinario es compatible con intereses; los dos primeros, como regla, no.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La recaudación voluntaria permite pagar sin coacción patrimonial dentro del plazo. Puede realizarse en entidades colaboradoras, sede, oficinas, domiciliación, transferencia, tarjeta u otros medios admitidos. La Administración debe expedir justificante con identificación, concepto, importe y fecha. Pagar a un órgano no autorizado o mediante medio no aceptado puede no liberar hasta que el ingreso llegue correctamente.',
          'El pago extingue la deuda por el importe satisfecho. Puede efectuarlo cualquier persona, aunque no adquiere por ello los derechos del obligado salvo previsión civil. Cuando existen varias deudas, el obligado puede indicar cuál paga; si no lo hace y son de igual naturaleza, se aplica la más antigua conforme a reglas. El pago no convalida una liquidación ilegal: puede recurrirse o solicitar devolución dentro de plazo.',
          'La domiciliación necesita orden válida y saldo. Si no se carga por causa no imputable al obligado, no se exigen recargos o intereses por esa circunstancia. El pago en especie solo procede cuando una ley lo autoriza. La consignación puede producir efectos liberatorios o suspensivos en los supuestos reglamentarios.',
          'El aplazamiento difiere el pago completo; el fraccionamiento divide la deuda en vencimientos. Pueden solicitarse en voluntaria o ejecutiva antes de la enajenación de bienes. Debe identificarse deuda, causas de dificultad económico-financiera transitoria, plazos y garantía, aportando documentos. No son un derecho automático: el órgano analiza capacidad y viabilidad y puede conceder, denegar o inadmitir.',
          'No todas las deudas son aplazables. La ley excluye, entre otras, determinadas obligaciones del retenedor u obligado a ingresar a cuenta y otras deudas expresamente calificadas, salvo excepciones legales. La solicitud en voluntaria impide iniciar ejecutivo, pero genera interés de demora; presentada en ejecutiva no suspende por sí misma actuaciones, aunque puede paralizar la enajenación hasta resolver conforme a las reglas.',
          'La garantía ordinaria puede ser aval solidario de entidad de crédito o sociedad de garantía, certificado de seguro de caución u otras admitidas cuando se justifique imposibilidad o perjuicio. Puede dispensarse por cuantía, falta de bienes y riesgo para capacidad productiva, o cuando una norma lo prevea. La garantía cubre principal, intereses y recargos en el alcance legal.',
          'Concedido el aplazamiento, cada vencimiento debe pagarse. El incumplimiento produce efectos diferentes según estuviera en voluntaria o ejecutiva: puede iniciarse apremio por la fracción, exigirse la totalidad pendiente y ejecutar garantía. La resolución debe indicar plazos, intereses y consecuencias. La denegación abre un nuevo plazo de ingreso si la solicitud se presentó en voluntaria.',
          'La compensación extingue deudas con créditos reconocidos por acto administrativo a favor del mismo obligado. Puede solicitarse en voluntaria o ejecutiva y también acordarse de oficio en los supuestos legales, especialmente cuando deudas y créditos son de naturaleza pública y están vencidos, líquidos y exigibles. Solo extingue hasta el importe concurrente; el resto permanece.',
          'La compensación a instancia debe identificar deuda y crédito. Si el crédito aún no está reconocido no existe compensación inmediata, aunque puede tramitarse. En periodo voluntario, la solicitud impide el ejecutivo por el importe concurrente mientras se resuelve; en ejecutivo, no paraliza necesariamente todas las actuaciones. La Administración notifica acuerdo y fecha de efecto.',
          'La devolución derivada de la normativa del tributo surge cuando una autoliquidación, comunicación o norma determina cantidad a devolver. La devolución de ingresos indebidos procede por duplicidad, pago superior, ingreso de deuda prescrita u otros supuestos. En ambos casos puede devengarse interés sin necesidad de solicitud desde la fecha legal correspondiente.',
          'El procedimiento de devolución de ingresos indebidos reconoce el derecho y ordena pago, previa comprobación. También puede reconocerse en revisión de oficio, recurso, rectificación o ejecución de resolución. La devolución comprende ingreso, recargos, intereses y costes de garantía cuando proceda. No se devuelve una cantidad que haya sido repercutida si produciría enriquecimiento injusto sin reintegrar al soportador.',
          'El periodo ejecutivo permite cobrar coactivamente. La providencia de apremio identifica deuda, importe pendiente, recargo, requerimiento y advertencia de embargo. Tiene fuerza ejecutiva equivalente a sentencia para proceder contra patrimonio. Solo admite motivos de oposición tasados, como extinción, prescripción, solicitud en voluntaria que impida ejecutivo, falta de notificación de liquidación, anulación o error que impida identificar deuda.',
          'Notificada la providencia, existe plazo de pago ejecutivo según fecha de notificación. Si no se paga, se embargan bienes y derechos por importe suficiente para principal, recargos, intereses y costas. Debe respetarse proporcionalidad y orden legal, atendiendo facilidad de realización y menor onerosidad; puede alterarse de acuerdo con el obligado si no perjudica a terceros.',
          'Son inembargables los bienes declarados por las leyes y se aplican límites salariales de la Ley de Enjuiciamiento Civil. Pueden embargarse dinero en cuentas, créditos, salarios dentro de límites, inmuebles, vehículos y otros derechos. Cada diligencia se notifica a interesados y terceros titulares; pueden existir tercerías de dominio o mejor derecho.',
          'Los bienes se valoran y se enajenan por subasta u otros procedimientos legales. La Administración no debe enajenar si la deuda se paga antes del momento límite reglamentario. El procedimiento termina por pago, acuerdo de incobrable tras declarar fallidos, compensación, condonación, prescripción, anulación u otra causa. La declaración de fallido no extingue inmediatamente: permite reanudar si aparece solvencia antes de prescribir.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Voluntaria termina con el vencimiento. Sin pago se inicia ejecutivo. Recargos: 5 % antes de providencia; 10 % pagando en su plazo; 20 % ordinario, compatible con intereses. Aplazar difiere y fraccionar divide. Compensar enfrenta deuda y crédito reconocido. Devolución normativa e ingreso indebido son procedimientos distintos. Apremio: providencia, pago, embargo, valoración, enajenación y terminación.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Los tres recargos ejecutivos no se acumulan. El 5 % exige pagar antes de notificar providencia. La solicitud de aplazamiento en voluntaria evita el inicio ejecutivo mientras se tramita, pero no elimina intereses. La providencia solo admite motivos tasados. La insolvencia produce baja provisional. Embargo debe respetar bienes inembargables y proporcionalidad.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cuándo comienza el periodo ejecutivo y qué recargo corresponde en cada momento? ¿Qué efectos tienen aplazamiento, fraccionamiento y compensación según se soliciten en voluntaria o ejecutiva? ¿Cuáles son las fases y motivos de oposición del procedimiento de apremio?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Construye una línea temporal con notificación, vencimiento, solicitud, providencia y pago. La mayoría de errores provienen de ubicar mal una actuación. En apremio distingue oposición a la providencia, oposición al embargo y tercería. En devoluciones pregunta primero si el ingreso fue indebido o si la devolución deriva de la mecánica normal del tributo.'
        ]}
      ],
      tree: 'RECAUDACIÓN LOCAL\n├─ Periodo voluntario\n│  ├─ Plazos y medios de pago\n│  ├─ Imputación y justificante\n│  └─ Domiciliación\n├─ Facilidades\n│  ├─ Aplazamiento\n│  ├─ Fraccionamiento\n│  └─ Garantías e intereses\n├─ Compensación y devoluciones\n├─ Periodo ejecutivo\n│  ├─ Recargo 5 %, 10 % o 20 %\n│  └─ Providencia de apremio\n├─ Ejecución\n│  ├─ Embargo y límites\n│  ├─ Valoración y enajenación\n│  └─ Tercerías\n└─ Terminación, fallido y prescripción',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Voluntaria','Pago dentro del plazo de la liquidación o padrón','LGT/RGR'],['Ejecutivo','Comienza tras vencimiento sin pago','Art. 161 LGT'],['Recargos','5 %, 10 % o 20 %, incompatibles','Art. 28 LGT'],['Aplazamiento','Dificultad transitoria; intereses y posible garantía','LGT/RGR'],['Compensación','Deuda frente a crédito reconocido','LGT'],['Apremio','Providencia con fuerza ejecutiva','LGT'],['Embargo','Proporcional y respetando inembargables','LGT/RGR'],['Fallido','Baja provisional; posible rehabilitación','RGR']]
    },
    12: {
      sources: [source.haciendas, source.lgt, source.catastro],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema estudia cuatro impuestos municipales: IBI, IAE, IVTM e IIVTNU. Los tres primeros son obligatorios; el impuesto sobre incremento de valor es potestativo y necesita ordenanza. El programa pide naturaleza, hecho imponible y sujetos pasivos, pero para comprenderlos deben conocerse también no sujeción, exenciones, devengo y gestión esencial.',
          'La forma segura de estudiar es comparar qué riqueza grava cada impuesto: el IBI grava titularidad de determinados derechos sobre inmuebles; el IAE, el mero ejercicio de actividades económicas; el IVTM, la titularidad de vehículos aptos para circular; y el IIVTNU, el incremento de valor del terreno urbano puesto de manifiesto por una transmisión o por constitución o transmisión de derechos reales de goce.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El texto refundido de Haciendas Locales establece los elementos esenciales. Las ordenanzas solo concretan tipos, coeficientes, bonificaciones y gestión dentro de márgenes. La Ley General Tributaria se aplica supletoriamente. En IBI, la información catastral y el valor catastral se rigen además por la Ley del Catastro.',
          'Son impuestos municipales obligatorios IBI, IAE e IVTM. El IIVTNU es potestativo, al igual que ICIO, aunque este último no figura en el epígrafe. La obligatoriedad del impuesto no significa que todas las personas paguen: pueden existir exenciones y no sujeciones.',
          'Sujeto pasivo puede ser contribuyente o sustituto. En estos impuestos, la ley identifica quien realiza el hecho imponible y, en algunos casos, un sustituto para facilitar gestión. Los beneficios fiscales y tipos deben analizarse con la norma vigente en la fecha del examen y la ordenanza municipal cuando el supuesto pida cuantías concretas.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El Impuesto sobre Bienes Inmuebles es directo, real, objetivo, periódico y obligatorio. Grava el valor de los inmuebles mediante titularidad, en el orden de prelación legal, de una concesión administrativa sobre el inmueble o servicios públicos afectos, un derecho real de superficie, un derecho de usufructo o el derecho de propiedad. La existencia de un derecho preferente excluye los siguientes a efectos del hecho imponible.',
          'Los inmuebles se clasifican en urbanos, rústicos y de características especiales según Catastro, no solo por su apariencia. La base imponible es el valor catastral y el padrón catastral sirve para gestión. La alteración física, económica o jurídica debe declararse o incorporarse mediante procedimientos catastrales. Ayuntamiento gestiona el impuesto y Catastro determina datos catastrales dentro de su competencia.',
          'No están sujetos determinados bienes públicos, carreteras y caminos de aprovechamiento público y otros supuestos legales. Existen exenciones obligatorias, como bienes del Estado, comunidades y entidades locales directamente afectos a seguridad o servicios educativos y penitenciarios, bienes comunales y montes vecinales, determinados bienes de Iglesia y entidades, Cruz Roja, tratados, bienes diplomáticos, patrimonio histórico y centros docentes concertados en términos legales. Hay exenciones potestativas por ordenanza.',
          'Son sujetos pasivos del IBI quienes ostenten el derecho que constituye el hecho imponible. Puede repercutirse la carga conforme a normas civiles, pero frente a Hacienda responde el sujeto legal. En transmisiones, los bienes quedan afectos al pago de cuotas pendientes en términos legales, y notarios deben advertir y solicitar información. El impuesto se devenga el primer día del periodo impositivo, coincidente con año natural; las alteraciones producen efecto en el siguiente periodo según Catastro.',
          'El Impuesto sobre Actividades Económicas es directo, real, objetivo, periódico y obligatorio. Su hecho imponible es el mero ejercicio en territorio nacional de actividades empresariales, profesionales o artísticas, se ejerzan o no en local y estén o no especificadas en tarifas. No grava una renta concreta sino la actividad conforme a tarifas, cuotas y elementos.',
          'No constituye hecho imponible la enajenación de bienes del activo fijo usados al menos dos años, venta de bienes de uso particular, exposición de artículos con finalidad decorativa, venta al por menor como un solo acto aislado y otras operaciones legales. Las actividades agrícolas, ganaderas dependientes, forestales y pesqueras pueden estar no sujetas en los términos de la ley, mientras la ganadería independiente sí puede estarlo.',
          'Son sujetos pasivos las personas físicas o jurídicas y entidades del artículo 35.4 LGT que realicen la actividad. Están exentos, entre otros, Estado y Administraciones, quienes inician actividad durante los dos primeros periodos, personas físicas, sujetos con cifra de negocios inferior al umbral legal y determinadas entidades. La exención no elimina todas las obligaciones censales.',
          'El periodo del IAE coincide con año natural, salvo alta, y se devenga el primer día. En alta, cuotas se calculan desde inicio conforme a trimestres; en baja puede solicitarse devolución proporcional. La gestión se comparte entre Estado y ayuntamientos: matrícula, censo, cuotas municipales y delegaciones. Las tarifas clasifican actividades y pueden existir cuota municipal, provincial o nacional.',
          'El Impuesto sobre Vehículos de Tracción Mecánica es directo, real, objetivo, periódico y obligatorio. Grava la titularidad de vehículos de esta naturaleza aptos para circular por vías públicas, cualquiera que sea clase y categoría. Se considera apto el matriculado en registros mientras no cause baja, incluidos permisos temporales y matrícula turística.',
          'No están sujetos los vehículos dados de baja por antigüedad autorizados excepcionalmente para exhibiciones y los remolques o semirremolques con carga útil no superior al límite legal. Hay exenciones para vehículos oficiales de defensa o seguridad, diplomáticos, ambulancias, movilidad reducida, transporte público urbano de viajeros, tractores y maquinaria agrícola con cartilla, entre otros.',
          'Es sujeto pasivo del IVTM la persona o entidad a cuyo nombre conste el vehículo en el permiso de circulación. El periodo es anual y el devengo el primer día, salvo primera adquisición. La cuota se prorratea por trimestres en primera adquisición, baja definitiva y baja temporal por robo o sustracción. La cuota se determina por potencia fiscal, plazas, carga o cilindrada según clase, con coeficiente y bonificaciones de ordenanza.',
          'La gestión del IVTM corresponde al ayuntamiento del domicilio que conste en permiso. Para matricular, rehabilitar o cambiar titularidad se acredita pago o exención de periodos exigibles según normativa. Una compraventa privada no cambia por sí sola al sujeto frente al impuesto hasta que se actualiza el registro conforme a las reglas.',
          'El Impuesto sobre el Incremento de Valor de los Terrenos de Naturaleza Urbana es directo, real, objetivo, instantáneo y potestativo. Grava incremento de valor que experimenten terrenos urbanos puesto de manifiesto por transmisión de propiedad por cualquier título o constitución o transmisión de derechos reales de goce limitativos del dominio. Solo el valor del terreno, no el de la construcción.',
          'No está sujeto el incremento de terrenos rústicos a efectos de IBI ni transmisiones en las que se constate inexistencia de incremento conforme a valores y prueba previstos. Tampoco determinados supuestos de aportaciones y adjudicaciones conyugales, operaciones de reestructuración u otros previstos. La no sujeción por inexistencia de incremento debe declararse y acreditarse conforme a ordenanza y ley.',
          'En transmisiones lucrativas, como donación o herencia, es contribuyente quien adquiere terreno o derecho. En transmisiones onerosas, como compraventa, es contribuyente quien transmite. Si el transmitente oneroso es persona física no residente, el adquirente actúa como sustituto. Esta distinción es una pregunta frecuente.',
          'La base del IIVTNU se calcula aplicando al valor del terreno en devengo un coeficiente según periodo de generación, dentro de máximos actualizados y ordenanza. Si el incremento real acreditado es inferior a la base objetiva, se toma el real a solicitud y comprobación. El tipo lo fija ordenanza dentro del máximo legal. Se devenga en transmisiones en la fecha de transmisión y en derechos en su constitución o transmisión.',
          'Las transmisiones inter vivos suelen declararse en treinta días hábiles; las mortis causa, en seis meses prorrogables hasta un año si se solicita. El ayuntamiento puede exigir autoliquidación si lo establece ordenanza y dispone de asistencia. Notarios comunican documentos, pero esa comunicación no sustituye necesariamente la declaración del obligado.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'IBI: derecho sobre inmueble; sujeto, titular del derecho; devengo 1 de enero. IAE: ejercicio de actividad; sujeto, quien la realiza; personas físicas exentas. IVTM: titularidad registral de vehículo apto; sujeto, titular del permiso. IIVTNU: incremento de terreno urbano por transmisión o derecho; en onerosa paga transmitente, en lucrativa adquirente; no hay sujeción si se acredita ausencia de incremento.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'IBI sigue prelación concesión-superficie-usufructo-propiedad. IAE grava ejercicio aunque no haya local, pero tiene amplias exenciones. IVTM se vincula al nombre del permiso. IIVTNU no grava construcción y es potestativo. En compraventa el contribuyente es transmitente; en herencia, adquirente. Inexistencia de incremento es no sujeción, no una bonificación.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué derecho determina el hecho imponible y sujeto pasivo del IBI? ¿Qué diferencias existen entre actividad sujeta, no sujeta y exenta en el IAE? ¿Quién es sujeto pasivo del IVTM y del IIVTNU en transmisiones onerosas y lucrativas?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Construye una ficha por impuesto: naturaleza, obligatoriedad, hecho, no sujeción, sujeto, devengo y gestión. En casos de IIVTNU identifica naturaleza urbana, transmisión, existencia de incremento y carácter oneroso o lucrativo. Evita usar lenguaje cotidiano: propietario, vendedor o comprador solo son correctos si coinciden con el derecho y supuesto definidos por la ley.'
        ]}
      ],
      tree: 'IMPUESTOS MUNICIPALES\n├─ IBI · obligatorio\n│  ├─ Derechos sobre inmueble\n│  ├─ Valor catastral\n│  └─ Titular del derecho prevalente\n├─ IAE · obligatorio\n│  ├─ Ejercicio de actividad\n│  ├─ Tarifas y matrícula\n│  └─ Amplias exenciones\n├─ IVTM · obligatorio\n│  ├─ Vehículo apto para circular\n│  └─ Titular en permiso\n└─ IIVTNU · potestativo\n   ├─ Incremento de terreno urbano\n   ├─ Transmisión o derecho de goce\n   ├─ Onerosa: transmitente\n   └─ Lucrativa: adquirente',
      reviewTable: [['Impuesto','Hecho imponible','Sujeto principal'],['IBI','Derecho sobre inmueble','Titular del derecho prevalente'],['IAE','Ejercicio de actividad económica','Quien realiza la actividad'],['IVTM','Titularidad de vehículo apto','Titular del permiso'],['IIVTNU oneroso','Incremento por transmisión','Transmitente'],['IIVTNU lucrativo','Incremento por adquisición','Adquirente'],['Obligatorios','IBI, IAE e IVTM','Art. 59 TRLRHL'],['Potestativo','IIVTNU','Art. 59 TRLRHL']]
    },
    13: {
      sources: [source.ley39, source.confianza, source.eidas],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El certificado electrónico vincula datos de validación de firma o sello con una persona física o jurídica y permite acreditar identidad o actuar electrónicamente con garantías. En la Administración se usa para identificarse, firmar solicitudes, acceder a expedientes, recibir notificaciones, emitir documentos, verificar sedes y realizar actuaciones automatizadas.',
          'Debe diferenciarse identificación de firma. Identificar permite saber quién accede; firmar acredita voluntad y consentimiento, integridad e identidad. La Ley 39/2015 no exige firma en todo trámite: se requiere especialmente para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimientos y renuncias. Consultar información puede requerir solo identificación.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El Reglamento eIDAS regula identificación electrónica y servicios de confianza en la Unión Europea. La Ley 6/2020 completa aspectos nacionales de prestadores y certificados. Las Leyes 39 y 40 determinan su utilización administrativa, sedes, sellos, firma de autoridades y actuación automatizada.',
          'Una firma electrónica son datos electrónicos asociados a otros datos que utiliza el firmante. La firma avanzada está vinculada de manera única, permite identificar, se crea bajo control y detecta cambios. La firma cualificada es avanzada creada mediante dispositivo cualificado y basada en certificado cualificado; tiene efecto jurídico equivalente a firma manuscrita en toda la Unión.',
          'El certificado cualificado lo expide un prestador cualificado incluido en lista de confianza y cumple requisitos. Un certificado no cualificado no carece automáticamente de efectos, pero no disfruta de todas las presunciones del cualificado. La validez se verifica mediante cadena, fechas, revocación, uso y políticas.',
          'La Administración admite sistemas de certificado, Cl@ve y otros conforme a política. No puede imponer indiscriminadamente firma cualificada si basta un nivel menor, pero debe exigir seguridad proporcionada al riesgo y a la norma del procedimiento.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Los certificados de persona física identifican a su titular para firmar. Los de representante permiten actuar en nombre de una persona jurídica o entidad, pero no sustituyen las reglas de representación: el poder debe existir y tener alcance. Los certificados de empleado público identifican al titular y Administración en el ejercicio de funciones. Los sellos electrónicos se atribuyen a personas jurídicas u órganos y garantizan origen e integridad sin expresar voluntad personal.',
          'Los certificados de sede autentican el sitio y permiten comprobar que se accede a una dirección oficial. Los de servidor o sitio web protegen comunicaciones. En actuación administrativa automatizada pueden utilizarse sello electrónico de Administración u órgano o código seguro de verificación vinculado a la entidad, manteniendo posibilidad de comprobar integridad.',
          'El soporte puede ser software, con claves almacenadas en sistema, o hardware seguro, como tarjeta criptográfica, DNI electrónico o dispositivo cualificado. También existen servicios centralizados o firma en la nube en los que las claves se gestionan con autenticación reforzada. El soporte no determina por sí solo la clase jurídica: debe comprobarse si certificado y dispositivo son cualificados.',
          'La clave privada debe permanecer bajo control de titular y no compartirse. La clave pública se incluye o vincula al certificado y permite verificar. El PIN protege uso del dispositivo, pero no debe anotarse junto a tarjeta. La pérdida, sospecha de uso o cambio de datos exige suspender o revocar. La caducidad termina validez futura, aunque una firma realizada durante vigencia puede verificarse con evidencias y sellado de tiempo.',
          'La expedición exige verificar identidad y datos. El prestador informa de condiciones, límites, revocación y responsabilidades. Los certificados tienen periodo de validez. La revocación produce efecto desde el momento registrado y debe poder consultarse mediante listas o servicios en línea. Suspensión es temporal cuando esté prevista; revocación, definitiva.',
          'Las autoridades o prestadores de certificación emiten y gestionan certificados. Un prestador cualificado supera supervisión y figura en lista de confianza. Sus servicios pueden incluir expedición de certificados de firma, sello o autenticación web, sellos de tiempo, entrega electrónica certificada, validación y conservación de firmas y sellos. No debe confundirse autoridad de registro, que verifica identidad, con prestador que emite.',
          'El sellado de tiempo acredita que unos datos existían en un momento y no se alteraron. La validación comprueba firma, certificado y estado. La conservación preserva evidencias a largo plazo pese a caducidad de algoritmos o certificados. La entrega electrónica certificada acredita envío y recepción. Estos servicios añaden prueba, pero cada uno tiene finalidad distinta.',
          'El DNI electrónico incorpora certificados para autenticación y firma y permite uso con lector, NFC o mecanismos admitidos. El certificado de la FNMT es frecuente, pero no es el único válido. La Administración debe aceptar sistemas admitidos por legislación y su política, incluida identificación transfronteriza reconocida cuando proceda.',
          'En Ley 39/2015, las personas pueden identificarse mediante sistemas basados en certificados cualificados de firma o sello y otros sistemas admitidos con registro previo. Para firma se admiten firma cualificada o avanzada basada en certificados, sello y otros sistemas que acrediten autenticidad de voluntad y consentimiento. Cuando se usa firma, se entiende acreditada identidad.',
          'La firma del empleado público debe identificar titular y Administración, pudiendo sustituirse por código si la publicación del nombre afecta seguridad, en los supuestos regulados. Los documentos electrónicos incluyen referencia temporal, metadatos y firmas cuando proceda. Una imagen pegada de una rúbrica no es firma electrónica y no garantiza integridad.',
          'La verificación práctica comienza comprobando dominio de sede, certificado del sitio, emisor, vigencia y ausencia de alertas. Para un documento se usa el servicio de validación o CSV oficial. No se confía en un icono visual. Si una firma aparece inválida, puede deberse a certificado revocado, documento modificado, falta de confianza, fecha incorrecta o software no actualizado.',
          'La representación electrónica puede constar en registro de apoderamientos y ejercerse usando certificado del representante o sistema de funcionario habilitado. El certificado demuestra quién firma; el registro o documento demuestra que puede actuar por otro. Confundir ambos puede permitir actuaciones sin poder suficiente.',
          'Los certificados deben utilizarse solo para finalidad y límites. Un certificado de sello no sirve para atribuir una decisión personal; un certificado de sitio no firma solicitudes; una firma de persona física no convierte automáticamente un documento en acto administrativo válido si falta competencia. La tecnología acredita aspectos, pero no subsana ilegalidad del contenido o del órgano.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Identificación prueba quién accede; firma añade voluntad e integridad. Firma cualificada equivale a manuscrita. Certificados: persona física, representante, empleado, sello y autenticación de sitio. Soportes: software, tarjeta, DNIe, dispositivo o servicio remoto. Prestador expide y revoca; autoridad de registro verifica; lista de confianza identifica cualificados. Servicios: certificado, sello de tiempo, validación, conservación y entrega certificada.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'No todo trámite requiere firma. El certificado de representante no crea por sí solo el poder. Una firma escaneada no es firma electrónica. Caducidad posterior no invalida automáticamente una firma hecha durante vigencia. Sello electrónico identifica origen de persona jurídica u órgano, no voluntad de una persona. FNMT no es la única autoridad admitida.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cómo se diferencian identificación, firma avanzada, firma cualificada y sello? ¿Qué tipos y soportes de certificados pueden utilizarse en la Administración? ¿Qué servicios prestan las autoridades de certificación y cómo se verifica la validez?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Ante una actuación digital separa identidad, representación, voluntad, integridad, competencia y tiempo. Pregunta qué evidencia aporta cada tecnología. En test, desconfía de equivalencias absolutas: certificado no es firma, firma no es poder, sello no es firma personal y documento firmado no es necesariamente acto válido.'
        ]}
      ],
      tree: 'CERTIFICADO ELECTRÓNICO\n├─ Funciones\n│  ├─ Identificación\n│  ├─ Firma e integridad\n│  ├─ Acceso y notificación\n│  └─ Sede y actuación automatizada\n├─ Tipos\n│  ├─ Persona física\n│  ├─ Representante\n│  ├─ Empleado público\n│  ├─ Sello de órgano/entidad\n│  └─ Autenticación de sitio\n├─ Soportes\n│  ├─ Software\n│  ├─ Tarjeta / DNIe\n│  └─ Firma remota\n├─ Ciclo de vida\n│  ├─ Expedición y vigencia\n│  ├─ Suspensión y revocación\n│  └─ Validación y conservación\n└─ Prestadores y servicios de confianza',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Identificación','Acredita identidad','Ley 39/2015'],['Firma','Acredita voluntad e integridad','Ley 39/2015/eIDAS'],['Cualificada','Avanzada + dispositivo y certificado cualificados','eIDAS'],['Representante','Identifica firmante; poder se acredita aparte','Ley 39/2015'],['Sello','Origen e integridad de entidad u órgano','Ley 40/2015'],['Revocación','Fin definitivo de validez','Ley 6/2020'],['Prestador cualificado','Incluido en lista de confianza y supervisado','eIDAS/Ley 6/2020']]
    },
    14: {
      sources: [source.ley40, source.gobierno, source.ley39],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Ley 40/2015 regula la organización interna y relaciones del sector público. Para este tema deben conocerse los órganos administrativos —creación, competencia, delegación, avocación, encomienda, delegación de firma, suplencia, colegiados, abstención y recusación— y la estructura de la Administración General del Estado, tanto central como territorial y exterior.',
          'La competencia es irrenunciable y se ejerce por el órgano que la tiene atribuida, salvo técnicas legales que alteran su ejercicio sin transferir siempre la titularidad. La AGE se organiza mediante Presidencia, ministerios y órganos superiores y directivos, con delegaciones territoriales y servicio exterior. Cada órgano actúa dentro de competencia y jerarquía.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Ley 40/2015 diferencia sector público, Administraciones públicas y sector institucional. Establece principios de servicio, simplicidad, claridad, proximidad, participación, objetividad, transparencia, racionalización, agilidad, buena fe, responsabilidad, planificación, eficacia, economía, suficiencia y cooperación.',
          'Un órgano administrativo es unidad a la que se atribuyen funciones con efectos jurídicos frente a terceros o actuación preceptiva. Su creación exige forma normativa o acto previsto, integración, dependencia, funciones, competencias y dotación; no puede duplicar otro sin suprimir o restringir el existente.',
          'La competencia puede determinarse por materia, territorio, jerarquía o tiempo. Delegación y avocación cambian ejercicio; desconcentración transfiere titularidad en los términos de la norma. Encomienda encarga actividades materiales o técnicas y no cede competencia ni elementos sustantivos.',
          'La AGE se organiza en Presidencia y ministerios. Son órganos superiores ministros y secretarios de Estado; directivos, subsecretarios, secretarios generales, secretarios generales técnicos, directores generales y subdirectores generales, con el rango y nombramiento establecidos. La organización territorial se articula mediante delegados y subdelegados del Gobierno y directores insulares cuando existan.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La competencia es irrenunciable. El órgano debe abstenerse de actuar fuera de su ámbito y los actos de órgano manifiestamente incompetente por materia o territorio pueden ser nulos. La incompetencia jerárquica puede permitir convalidación por superior. Antes de tramitar se comprueba qué órgano inicia, instruye, informa y resuelve.',
          'La delegación permite que un órgano ejerza competencias de otro, aunque este conserva titularidad. Puede realizarse en órganos de la misma Administración incluso no dependientes jerárquicamente y, en ciertos casos, entidades vinculadas. Debe publicarse cuando proceda; los actos indican que se dictan por delegación y se consideran del delegante. No pueden delegarse materias excluidas, como relaciones con órganos constitucionales, disposiciones generales, resolución de recursos contra actos propios y las que una ley prohíba.',
          'La delegación es revocable y puede limitarse. No puede subdelegarse salvo autorización legal. Que una competencia se ejerza por delegación no altera régimen de recursos ni responsabilidad por el acto. La firma suele incluir fórmula “por delegación” y referencia a publicación.',
          'La avocación permite al superior asumir para un caso concreto una competencia que normalmente ejerce órgano dependiente por delegación o no, cuando circunstancias técnicas, económicas, sociales, jurídicas o territoriales lo hagan conveniente. Debe motivarse y notificarse a interesados antes o simultáneamente a resolución. El acuerdo no es recurrible de forma autónoma, pero puede alegarse contra el acto final.',
          'La encomienda de gestión encarga actividades materiales o técnicas a otro órgano o entidad por eficacia o falta de medios. No cede titularidad ni elementos sustantivos; el órgano encomendante dicta actos jurídicos. Debe formalizarse y publicarse conforme a si es interna o entre Administraciones. No puede utilizarse para prestaciones propias de contratos, que se someten a contratación pública.',
          'La delegación de firma permite al titular autorizar firma de resoluciones y actos en órgano dependiente, dentro de competencias propias o delegadas. No altera competencia y no exige publicación general, aunque debe constar procedencia. No puede usarse en sanciones si norma lo prohíbe. El firmante material no se convierte en órgano competente.',
          'La suplencia cubre temporalmente vacante, ausencia, enfermedad, abstención o recusación. La designa órgano competente y no altera competencia ni requiere delegación. Los actos indican que se actúa por suplencia. Si no hay suplente designado, actúa quien determine órgano inmediato superior conforme a la norma.',
          'Los conflictos de atribuciones solo se plantean entre órganos de una misma Administración no relacionados jerárquicamente y sobre asuntos no finalizados. Pueden ser positivos o negativos. La persona interesada puede solicitar declinación o remisión, pero resuelve el órgano establecido por organización.',
          'Los órganos colegiados pueden constituirse y reunirse presencial o a distancia, salvo que su reglamento lo impida. Convocatoria incluye orden del día y documentación; debe garantizar identidad, contenido, momento, interactividad y disponibilidad. Para constitución válida se requiere presidencia, secretaría y miembros en número legal. Los acuerdos se adoptan por mayoría salvo norma específica.',
          'No se deliberan asuntos fuera del orden del día salvo presencia de todos y declaración de urgencia por mayoría. El acta recoge asistentes, orden, circunstancias, puntos principales y acuerdos, pudiendo incorporar grabación y documentos con garantías. Se aprueba en misma o siguiente sesión y la secretaría certifica acuerdos.',
          'La abstención procede por interés personal, parentesco, amistad íntima o enemistad manifiesta, intervención como perito o testigo, relación de servicio o litigio y demás causas legales. La autoridad comunica a superior y se aparta. La no abstención no implica automáticamente invalidez, pero puede generarla si fue determinante y acarrea responsabilidad.',
          'La recusación puede promoverse por interesados en cualquier momento de tramitación. Se formula por escrito con causa; el recusado manifiesta al día siguiente si concurre. Si la reconoce, se sustituye; si niega, superior resuelve en tres días con informes. Contra esa resolución no cabe recurso independiente, sin perjuicio de alegarla al recurrir acto final.',
          'La Administración General del Estado actúa bajo dirección del Gobierno. Su organización responde a división funcional en ministerios y gestión territorial integrada en delegaciones, salvo excepciones. La Presidencia coordina ministerios y puede contar con órganos de apoyo. El número, denominación y competencias ministeriales se determinan por real decreto del Presidente.',
          'Los ministros son jefes superiores del departamento, dirigen sectores, ejercen potestad reglamentaria en materias propias, fijan objetivos, aprueban planes, nombran órganos cuando proceda y resuelven. Los secretarios de Estado dirigen sectores específicos bajo ministro. Ambos son órganos superiores.',
          'Los subsecretarios ostentan representación ordinaria, dirigen servicios comunes, recursos humanos, presupuesto e inspección. Los secretarios generales tienen categoría de subsecretario y dirigen áreas determinadas. Los secretarios generales técnicos tienen categoría de director general y ejercen producción normativa, asistencia jurídica y publicaciones. Los directores generales gestionan áreas funcionales y los subdirectores ejecutan proyectos y gestión ordinaria.',
          'Los órganos superiores y directivos tienen condición de alto cargo salvo subdirectores y asimilados, con régimen legal. Los directivos se nombran atendiendo competencia y experiencia; muchos entre funcionarios del subgrupo A1 salvo excepción motivada legal. Las unidades administrativas se integran en órganos y se crean mediante relaciones de puestos dentro de estructura.',
          'La Administración territorial está encabezada por delegados del Gobierno en comunidades autónomas, que representan al Gobierno, dirigen y coordinan la AGE territorial, protegen libre ejercicio de derechos y coordinan con comunidad y entidades. Tienen rango de subsecretario y dependen orgánicamente de Presidencia y funcionalmente de ministerios.',
          'En provincias existen subdelegados bajo inmediata dependencia del delegado, con funciones de comunicación, coordinación, seguridad, protección civil y dirección de servicios integrados. En islas determinadas puede haber directores insulares. Los servicios territoriales pueden estar integrados en delegaciones o no integrados por singularidad, manteniendo coordinación.',
          'La Administración General del Estado en el exterior se integra por misiones diplomáticas, representaciones permanentes, delegaciones, oficinas consulares e instituciones y organismos. Se rige por legislación específica y coordinación del Ministerio de Asuntos Exteriores. Los embajadores representan al Estado y dirigen misión dentro de instrucciones.',
          'La AGE incluye sector público institucional estatal, pero no debe confundirse un ministerio con un organismo autónomo, entidad pública empresarial, autoridad independiente, sociedad, consorcio, fundación o fondo. Cada entidad tiene personalidad y régimen propio, adscripción y control. El tema se centra en órganos y estructura administrativa, pero esta distinción evita errores.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Competencia irrenunciable. Delegación cambia ejercicio; avocación recupera un caso; encomienda solo tareas materiales; delegación de firma solo firma; suplencia cubre ausencia. Colegiados necesitan convocatoria, orden, quórum, deliberación y acta. AGE: órganos superiores ministro y secretario de Estado; directivos desde subsecretario a subdirector. Territorial: delegado, subdelegado y director insular. Exterior: misiones y consulados.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'La encomienda no transfiere competencia. Los actos por delegación se consideran del delegante. Avocación debe motivarse y es para casos concretos. Suplencia no necesita delegación. Subdirector general es órgano directivo pero no alto cargo como regla. Delegado del Gobierno tiene rango de subsecretario. No se decide fuera del orden salvo presencia total y urgencia.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué efecto tienen delegación, avocación, encomienda, firma y suplencia sobre titularidad y ejercicio de competencia? ¿Cómo se constituyen y documentan los órganos colegiados? ¿Cuáles son los órganos superiores, directivos y territoriales de la AGE?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Dibuja una tabla con técnica, quién actúa, qué se transfiere, duración y publicidad. Para AGE memoriza la cadena ministro–secretario de Estado–subsecretario/secretario general–secretario general técnico/director–subdirector. En casos colegiados revisa convocatoria, orden, quórum, abstención, mayoría y acta antes de valorar el fondo.'
        ]}
      ],
      tree: 'LEY 40/2015 · ÓRGANOS Y AGE\n├─ Competencia\n│  ├─ Delegación\n│  ├─ Avocación\n│  ├─ Encomienda de gestión\n│  ├─ Delegación de firma\n│  └─ Suplencia\n├─ Órganos colegiados\n│  ├─ Convocatoria y quórum\n│  ├─ Sesión y acuerdos\n│  └─ Actas y certificados\n├─ Imparcialidad\n│  ├─ Abstención\n│  └─ Recusación\n└─ AGE\n   ├─ Central: ministerios\n   ├─ Superiores: ministro y secretario de Estado\n   ├─ Directivos: subsecretario a subdirector\n   ├─ Territorial: delegado y subdelegado\n   └─ Exterior: misiones y consulados',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Delegación','Se transfiere ejercicio; titularidad permanece','Art. 9 Ley 40/2015'],['Avocación','Superior asume un caso motivadamente','Art. 10'],['Encomienda','Solo actividad material o técnica','Art. 11'],['Firma','No altera competencia','Art. 12'],['Suplencia','Vacante, ausencia, enfermedad, abstención o recusación','Art. 13'],['Superiores AGE','Ministros y secretarios de Estado','Ley 40/2015'],['Directivos AGE','Subsecretarios a subdirectores','Ley 40/2015'],['Territorial','Delegado, subdelegado y director insular','Ley 40/2015']]
    }
  };

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  const updated = [];
  for (const [numberText, patch] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = patch.sections;
    theme.tree = patch.tree;
    theme.reviewTable = patch.reviewTable;
    theme.officialSources = patch.sources;
    theme.theoryStatus = {
      version: 'v0.86.0', reviewedAt: REVIEW_DATE, autonomous: true, programmeLiteral: true,
      sourcePolicy: 'Bases La Puebla BOP Toledo núm. 82, 05/05/2026; fuentes oficiales consolidadas',
      words: wordCount({ ...theme, ...patch }), block: 'La Puebla 11-14'
    };
    theme.academiaVersion = 'v0.86 bloque 3';
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v86 || { completedThemes: [] };
  const completedThemes = [...new Set([...(previous.completedThemes || []), ...updated])].sort((a, b) => a - b);
  const pendingThemes = ope.themes.map(theme => Number(theme.number)).filter(number => !completedThemes.includes(number));
  ope.theoryProgramme.v86 = {
    ...previous, version: 'v0.86.0', reviewedAt: REVIEW_DATE,
    officialProgrammeSource: 'BOP Toledo núm. 82, 5 de mayo de 2026, Anexo I',
    autonomousThemes: completedThemes.length, totalThemes: ope.themes.length,
    completedThemes, pendingThemes, status: pendingThemes.length ? 'EN_PROGRESO' : 'APTO',
    note: 'Temas 1 a 14 autosuficientes; pendientes los temas informáticos 15 a 19.'
  };

  window.OPOWEB_PUEBLA_THEORY_V86_BLOQUE3 = {
    version: 'v0.86.0', status: ope.theoryProgramme.v86.status, themes: updated,
    completedThemes, pendingThemes,
    minimumWords: Math.min(...updated.map(number => ope.themes.find(theme => Number(theme.number) === number)?.theoryStatus?.words || 0))
  };
  window.OPOWEB_PUEBLA_THEORY_V86 = {
    ...window.OPOWEB_PUEBLA_THEORY_V86, version: 'v0.86.0', status: ope.theoryProgramme.v86.status,
    autonomousThemes: completedThemes.length, totalThemes: ope.themes.length, pendingThemes
  };
})();
