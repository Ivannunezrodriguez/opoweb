(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = 'v0.87.0';
  const REVIEW_DATE = '2026-07-14';
  const source = {
    lgt: { label: 'Ley 58/2003, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186' },
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    rgr: { label: 'Real Decreto 939/2005, Reglamento General de Recaudación', reference: 'BOE-A-2005-14803', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803' },
    rgrva: { label: 'Real Decreto 520/2005, revisión en vía administrativa', reference: 'BOE-A-2005-8662', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-8662' },
    rd500: { label: 'Real Decreto 500/1990, presupuestos locales', reference: 'BOE-A-1990-9664', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1990-9664' },
    lopdgdd: { label: 'Ley Orgánica 3/2018, protección de datos y derechos digitales', reference: 'BOE-A-2018-16673', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673' },
    transparencia: { label: 'Ley 19/2013, transparencia, acceso y buen gobierno', reference: 'BOE-A-2013-12887', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887' },
    rgpd: { label: 'Reglamento (UE) 2016/679, Reglamento General de Protección de Datos', reference: 'DOUE-L-2016-80807', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' }
  };

  const THEORY = {
    25: {
      sources: [source.lgt, source.trlrhl, source.rgrva],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema reúne tres planos que deben estudiarse de forma coordinada. El primero es la estructura general de la obligación tributaria: cómo nace, quién queda obligado, cómo se cuantifica y por qué causas se extingue. El segundo es la aplicación de ese sistema a los tributos locales, con especial atención a los principios, la delegación de facultades y la colaboración entre Administraciones. El tercero es la gestión y revisión de los actos tributarios. La clave del examen consiste en no mezclar conceptos próximos: hecho imponible y devengo, sujeto pasivo y responsable, deuda tributaria y sanción, delegación y colaboración, gestión y recaudación, recurso de reposición y procedimientos especiales de revisión.',
          'La Ley General Tributaria proporciona la arquitectura común. El texto refundido de la Ley Reguladora de las Haciendas Locales adapta esa arquitectura a las entidades locales y permite que municipios y provincias ejerzan o deleguen facultades de gestión, liquidación, inspección y recaudación. El Reglamento de revisión en vía administrativa desarrolla los procedimientos del título V de la Ley General Tributaria. Para aprobar no basta con memorizar una lista: hay que identificar qué figura actúa en cada fase y qué efecto produce.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Los artículos 17 a 35 de la Ley General Tributaria ordenan la relación jurídico-tributaria, las obligaciones materiales y formales y las clases de obligados. Los artículos 49 a 58 regulan los elementos de cuantificación y la deuda tributaria. Los artículos 59 a 76 establecen sus formas de extinción. Los artículos 83 y siguientes contienen las reglas comunes de aplicación de los tributos y el título V, desde el artículo 213, enumera los medios de revisión.',
          'En el ámbito local son centrales los artículos 6 a 9 y 12 a 14 del texto refundido de Haciendas Locales. El artículo 7 permite delegar facultades tributarias en la comunidad autónoma o en otras entidades locales en cuyo territorio esté integrada la entidad delegante. El artículo 8 impone colaboración entre Administraciones tributarias. Los beneficios fiscales necesitan cobertura legal y solo pueden desarrollarse por ordenanza dentro del margen reconocido por la norma. El artículo 14 contiene la especialidad local de revisión administrativa.',
          'Debe utilizarse siempre el texto consolidado vigente y distinguirlo de la publicación oficial que produjo cada modificación. En materias tributarias los importes, tipos, límites o redacciones pueden cambiar. Esta ficha desarrolla la estructura normativa estable y no incorpora datos anuales ni reglas de una ordenanza fiscal concreta.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La relación jurídico-tributaria es el conjunto de obligaciones y deberes, derechos y potestades originados por la aplicación de los tributos. De ella nacen obligaciones materiales y formales tanto para el obligado como para la Administración. La obligación tributaria principal tiene por objeto el pago de la cuota. Junto a ella pueden existir pagos a cuenta, obligaciones entre particulares derivadas del tributo, intereses, recargos y obligaciones formales. La sanción tributaria no forma parte de la deuda tributaria, aunque su cobro se someta a reglas recaudatorias.',
          'El hecho imponible es el presupuesto fijado por la ley cuya realización origina el nacimiento de la obligación principal. El devengo señala el momento en que se entiende realizado ese hecho imponible y nace la obligación; la exigibilidad puede situarse en un momento distinto cuando la ley lo disponga. Las exenciones no eliminan el hecho imponible: impiden que nazca o se exija la obligación principal en los términos legales. Esta diferencia es habitual en preguntas de respuesta múltiple.',
          'Los obligados tributarios son las personas físicas, jurídicas y entidades a las que la normativa impone obligaciones. Entre ellos se encuentran contribuyentes, sustitutos, retenedores, obligados a ingresar a cuenta, sucesores, responsables y quienes soportan repercusiones o retenciones. El sujeto pasivo es el contribuyente o el sustituto. El responsable no desplaza por definición al deudor principal: responde en los términos de la ley y necesita, con carácter general, un acto de derivación que determine alcance y extensión. Las entidades sin personalidad pueden ser obligadas cuando una ley las configure como unidad económica o patrimonio separado susceptible de imposición.',
          'La cuantificación parte normalmente de la base imponible, magnitud dineraria o de otra naturaleza que mide el hecho imponible. Se determina por estimación directa, objetiva o indirecta según la ley. Las reducciones legalmente previstas conducen a la base liquidable. Sobre ella se aplica el tipo de gravamen o la tarifa para obtener la cuota íntegra; deducciones, bonificaciones, pagos a cuenta y otros ajustes permiten llegar a la cuota líquida o diferencial cuando la regulación del tributo utilice esas categorías. No debe afirmarse que todos los tributos contienen necesariamente cada una de estas fases.',
          'La deuda tributaria está formada por la cuota o cantidad a ingresar y, cuando proceda, por intereses de demora, recargos por declaración extemporánea, recargos del período ejecutivo y otros recargos legalmente exigibles. Las sanciones quedan fuera. La deuda se extingue por pago, prescripción, compensación o condonación y por los demás medios previstos en las leyes. El pago libera solo por el importe satisfecho. La prescripción opera en los derechos y plazos tasados por la ley y puede interrumpirse por actuaciones administrativas o del obligado. La compensación exige la concurrencia de deudas y créditos en los términos legales. La condonación solo cabe por ley y con el alcance que esta establezca.',
          'Los tributos locales se integran en el sistema general, pero su establecimiento y exigencia están sometidos a reserva de ley y ordenanza fiscal. Las entidades locales no pueden crear libremente cualquier tributo ni alterar elementos esenciales fuera de la habilitación legal. Deben respetar capacidad económica, igualdad, generalidad, progresividad cuando proceda y prohibición de confiscatoriedad. Las ordenanzas concretan tipos, cuotas, bonificaciones potestativas, gestión y calendario dentro del marco del texto refundido.',
          'La delegación supone trasladar el ejercicio de facultades tributarias a otra Administración territorialmente habilitada. El acuerdo debe determinar alcance y contenido y publicarse en los términos legales. La entidad delegada ejerce las facultades recibidas sin convertirse en titular del tributo. La colaboración, en cambio, no traslada la competencia: articula intercambio de información, asistencia y coordinación entre Administraciones tributarias. Un organismo provincial como el OAPGT puede actuar por delegación de entidades locales, pero sus competencias concretas deben acreditarse mediante los acuerdos y Estatutos vigentes; esta ficha no presume competencias estatutarias no documentadas.',
          'Los beneficios fiscales son exenciones, bonificaciones, reducciones u otros tratamientos favorables previstos por norma con rango suficiente. La entidad local solo puede reconocer los beneficios obligatorios y aquellos potestativos autorizados por la ley y desarrollados por ordenanza. La compensación puede operar como forma de extinción cuando el obligado sea a la vez acreedor de la Administración y se cumplan los requisitos de reconocimiento, exigibilidad y procedimiento.',
          'La gestión tributaria comprende actuaciones de recepción y tramitación de declaraciones, autoliquidaciones, comunicaciones, comprobación, liquidación, censos y padrones y otras funciones legalmente previstas. No se confunde con inspección ni con recaudación. La revisión administrativa permite corregir actos contrarios al ordenamiento o resolver la impugnación del interesado. La Ley General Tributaria distingue procedimientos especiales de revisión, recurso de reposición y reclamaciones económico-administrativas. En el ámbito local debe comprobarse la especialidad del artículo 14 del texto refundido, el tipo de entidad y si existe órgano económico-administrativo competente. No puede trasladarse automáticamente el esquema estatal a cualquier ayuntamiento o diputación.',
          'Los procedimientos especiales incluyen, entre otros, nulidad de pleno derecho, declaración de lesividad, revocación, rectificación de errores y devolución de ingresos indebidos. Cada uno tiene presupuesto y efectos propios. La rectificación corrige errores materiales, de hecho o aritméticos; no permite reabrir una valoración jurídica. La nulidad se reserva a vicios especialmente graves. La devolución de ingresos indebidos exige que el ingreso carezca de fundamento o concurra alguno de los supuestos legalmente previstos.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Secuencia mental: hecho imponible, devengo, obligado, base, tipo, cuota, deuda, extinción. La obligación principal es pagar la cuota. La deuda puede incluir intereses y recargos; la sanción queda fuera. Sujeto pasivo comprende contribuyente y sustituto; responsable es una categoría distinta. Delegación transfiere el ejercicio de facultades; colaboración coordina sin transferirlas. Beneficio fiscal requiere cobertura legal. Gestión, inspección y recaudación son funciones diferentes. Revisión especial, reposición y reclamación económico-administrativa no son intercambiables.',
          'En una pregunta local, comprobar siempre la norma especial: texto refundido de Haciendas Locales, ordenanza fiscal y, cuando proceda, acuerdo de delegación. En una pregunta sobre revisión, identificar primero si el acto es tributario local, si pone fin a la vía administrativa y qué órgano puede resolver.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Hecho imponible no equivale a devengo. Exención no significa inexistencia del hecho imponible. La sanción no integra la deuda tributaria. La responsabilidad requiere el régimen y procedimiento legal. La prescripción puede interrumpirse. La compensación no es una bonificación. Delegación y colaboración producen efectos distintos. La ordenanza no puede crear beneficios no autorizados por ley. El artículo 14 del texto refundido contiene especialidades de revisión local. Rectificación de errores no permite cambiar el fondo jurídico del acto.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica la diferencia entre hecho imponible, devengo y exigibilidad y pon un ejemplo abstracto sin utilizar importes.',
          '2. Enumera los principales obligados tributarios y distingue sujeto pasivo, responsable y sucesor.',
          '3. Compara delegación, colaboración, recurso de reposición y procedimiento especial de revisión en el ámbito tributario local.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Divide el tema en cuatro mapas: nacimiento y sujetos; cuantificación y deuda; sistema local; gestión y revisión. Memoriza artículos ancla: 17, 20, 21, 35, 58, 59 y 213 de la Ley General Tributaria y 7, 8, 9 y 14 del texto refundido local. Ante una opción absoluta como “siempre”, “cualquier” o “sin procedimiento”, busca la excepción. En preguntas del OAPGT no atribuyas una competencia concreta si la opción no se apoya en delegación, Estatutos o norma publicada.'
        ]}
      ],
      tree: 'Tema 25 · obligación y sistema tributario local\n├─ Relación jurídico-tributaria\n│  ├─ Hecho imponible y devengo\n│  ├─ Obligaciones materiales y formales\n│  └─ Obligados, sujetos pasivos y responsables\n├─ Cuantificación\n│  ├─ Base imponible y liquidable\n│  ├─ Tipo y cuotas\n│  └─ Deuda tributaria\n├─ Extinción\n│  ├─ Pago y prescripción\n│  ├─ Compensación\n│  └─ Condonación y otros medios legales\n├─ Tributos locales\n│  ├─ Principios y ordenanzas\n│  ├─ Delegación\n│  ├─ Colaboración\n│  └─ Beneficios fiscales\n└─ Gestión y revisión\n   ├─ Procedimientos de gestión\n   ├─ Revisión especial\n   ├─ Reposición\n   └─ Especialidad local del artículo 14 TRLRHL',
      reviewTable: [
        ['Concepto', 'Regla esencial', 'Referencia'],
        ['Relación tributaria', 'Conjunto de obligaciones, derechos, deberes y potestades', 'Art. 17 LGT'],
        ['Hecho imponible', 'Presupuesto legal que origina la obligación principal', 'Art. 20 LGT'],
        ['Devengo', 'Momento de realización del hecho imponible', 'Art. 21 LGT'],
        ['Obligados', 'Categorías impuestas por la normativa tributaria', 'Art. 35 LGT'],
        ['Deuda', 'Cuota más intereses y recargos cuando proceda; no sanción', 'Art. 58 LGT'],
        ['Extinción', 'Pago, prescripción, compensación, condonación y otros medios legales', 'Art. 59 LGT'],
        ['Delegación', 'Traslado del ejercicio de facultades tributarias', 'Art. 7 TRLRHL'],
        ['Colaboración', 'Cooperación sin traslado de la titularidad', 'Art. 8 TRLRHL'],
        ['Revisión', 'Procedimientos especiales, reposición y reclamación económico-administrativa', 'Art. 213 LGT / art. 14 TRLRHL']
      ]
    },
    26: {
      sources: [source.lgt, source.trlrhl, source.rgr, source.rgrva],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Este tema sigue el itinerario de una deuda local desde su cobro ordinario hasta la ejecución forzosa y su posible impugnación. Deben distinguirse periodo voluntario y periodo ejecutivo, aplazamiento y fraccionamiento, compensación, devolución de ingresos y procedimiento de apremio. La revisión administrativa atraviesa todo el tema porque cualquier liquidación, providencia, embargo o devolución puede estar sometida a medios específicos de impugnación.',
          'La Ley General Tributaria fija los conceptos y efectos principales; el Reglamento General de Recaudación desarrolla órganos, actuaciones y trámites; el texto refundido de Haciendas Locales introduce especialidades locales y permite gestión propia o delegada. El examen suele medir plazos, recargos, inicio del periodo ejecutivo, contenido y oposición a la providencia de apremio y diferencias entre suspensión, aplazamiento y recurso.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La recaudación se regula principalmente en los artículos 160 a 177 de la Ley General Tributaria y en el Real Decreto 939/2005. Los plazos generales de pago están en el artículo 62; el aplazamiento y fraccionamiento en el 65; la compensación en los artículos 71 a 73; los recargos ejecutivos en el 28; la devolución de ingresos indebidos en el 221; y los medios de revisión desde el 213. La normativa local se completa con los artículos 7, 8, 12 y 14 del texto refundido de Haciendas Locales.',
          'No deben memorizarse calendarios fiscales concretos como si fueran permanentes. Cada entidad puede aprobar periodos de cobranza para tributos periódicos. Tampoco debe afirmarse que toda deuda es aplazable: la ley contiene deudas inaplazables y permite exigir garantías. Los tipos de interés, cuantías exentas de garantía y criterios internos son datos dinámicos que deben revisarse en la fecha del examen.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La recaudación tributaria consiste en el ejercicio de funciones administrativas conducentes al cobro de las deudas. Puede desarrollarse en periodo voluntario o ejecutivo. En el ámbito local la entidad titular puede recaudar directamente o delegar facultades en otra entidad local o comunidad autónoma. La delegación debe constar y publicarse; el órgano recaudador actúa dentro de su alcance. El OAPGT puede recaudar deudas delegadas, pero cada actuación debe corresponder a una delegación válida y a la organización estatutaria vigente.',
          'El periodo voluntario permite pagar dentro del plazo fijado sin recargos del periodo ejecutivo. Las deudas resultantes de liquidaciones notificadas se pagan en los plazos del artículo 62 de la Ley General Tributaria. Las deudas de cobro periódico y notificación colectiva se satisfacen dentro del periodo determinado por su normativa y calendario. La falta de pago al finalizar el plazo produce, con las salvedades legales, la apertura del periodo ejecutivo.',
          'El periodo ejecutivo se inicia en los momentos definidos por el artículo 161. En liquidaciones administrativas, normalmente al día siguiente de vencer el plazo voluntario sin ingreso; en autoliquidaciones presentadas sin pago, depende de si se presentan dentro o fuera de plazo. La presentación de una solicitud de aplazamiento, fraccionamiento o compensación en periodo voluntario puede impedir el inicio ejecutivo mientras se tramita, en los términos legales. Un recurso sin solicitud y concesión de suspensión no paraliza por sí mismo la ejecución.',
          'Los recargos del periodo ejecutivo son incompatibles entre sí. El recargo ejecutivo reducido se aplica cuando se satisface la deuda antes de la notificación de la providencia de apremio; el recargo de apremio reducido, cuando se pagan deuda y recargo dentro del plazo abierto por la providencia; el recargo ordinario se aplica fuera de ese plazo y es compatible con intereses de demora y costas. Para responder bien, debe identificarse el momento del pago y no solo si existe o no providencia.',
          'El aplazamiento pospone el pago completo; el fraccionamiento divide la deuda en vencimientos. La solicitud debe identificar deuda, causa y propuesta, y puede exigir garantía e intereses. No todas las deudas son aplazables. La Administración debe resolver y puede conceder condiciones distintas dentro de la ley. El incumplimiento provoca las consecuencias recaudatorias previstas según la situación de la deuda y las garantías. Aplazar no equivale a suspender un acto impugnado: son instituciones con finalidad y requisitos distintos.',
          'La compensación extingue deudas con créditos reconocidos a favor del obligado frente a la Administración. Puede iniciarse a instancia del interesado o de oficio en los supuestos legales. La extinción se produce por el importe concurrente cuando se cumplen los requisitos. Si el crédito es inferior, subsiste el resto de la deuda; si es superior, procede el tratamiento del exceso. No debe confundirse con devolución, descuento o bonificación.',
          'La devolución puede ser derivada de la normativa de cada tributo o de ingresos indebidos. Existe ingreso indebido, entre otros supuestos, cuando se ha pagado una deuda inexistente, duplicada, superior a la debida o prescrita en los términos legales. El derecho comprende la cantidad reconocida y, cuando proceda, el interés de demora. La devolución no siempre exige un recurso contra la liquidación: puede tramitarse por procedimiento específico, rectificación de autoliquidación o ejecución de una resolución.',
          'El procedimiento de apremio es exclusivamente administrativo y se inicia mediante providencia de apremio. Esta identifica la deuda, liquida el recargo e incluye requerimiento de pago y advertencia de embargo. Tiene fuerza ejecutiva suficiente. Los motivos de oposición están tasados: extinción o prescripción, solicitud de aplazamiento, fraccionamiento o compensación en periodo voluntario y otras causas de suspensión, falta de notificación de la liquidación, anulación de esta y error u omisión que impida identificar deudor o deuda. No puede reabrirse cualquier cuestión de fondo mediante oposición al apremio.',
          'Si no se paga, se procede al embargo de bienes y derechos respetando proporcionalidad, facilidad de realización y menor onerosidad cuando sea compatible con eficacia. La ley establece un orden, pero permite alterarlo por acuerdo o por circunstancias. Son inembargables los bienes declarados como tales por las leyes. El embargo se documenta mediante diligencia, que también tiene motivos tasados de oposición. Después pueden realizarse bienes por subasta, concurso o adjudicación directa en los casos permitidos y aplicarse el producto a deuda, recargos, intereses y costas.',
          'La revisión de actos recaudatorios se rige por la Ley General Tributaria y las especialidades locales. Debe distinguirse el recurso frente a la liquidación del recurso frente a la providencia o diligencia. La suspensión exige cumplir los requisitos de garantía o los supuestos de suspensión sin garantía. Los procedimientos especiales de revisión, reposición y reclamaciones económico-administrativas tienen ámbitos propios. En tributos locales resulta imprescindible comprobar el artículo 14 del texto refundido y la existencia o no de órgano económico-administrativo local.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Voluntaria: pago sin recargos ejecutivos. Ejecutiva: nace por impago conforme al artículo 161. Recargos: ejecutivo, apremio reducido y apremio ordinario, incompatibles entre sí. Aplazar pospone; fraccionar divide; compensar extingue por concurrencia de crédito; suspender paraliza temporalmente la ejecución por causa legal. El apremio comienza con providencia y puede seguir con embargo y realización. La oposición a providencia y diligencia está tasada.',
          'Para resolver un supuesto, fija cinco datos: origen de la deuda, fecha de notificación o autoliquidación, vencimiento voluntario, existencia de solicitud de aplazamiento o recurso con suspensión y momento del pago. Con esos datos se determina periodo, recargo y actuación procedente.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'El recurso no suspende automáticamente. Solicitud en voluntaria y solicitud en ejecutiva no producen el mismo efecto. Los tres recargos ejecutivos no se acumulan. El recargo ordinario puede llevar intereses y costas. La providencia no permite discutir cualquier aspecto de la liquidación. Aplazamiento y fraccionamiento no son derechos absolutos. Compensación exige crédito reconocido. Ingreso indebido y devolución derivada de la normativa del tributo son vías distintas. Embargo y apremio no son sinónimos: el embargo es una fase del procedimiento.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica cuándo se inicia el periodo ejecutivo y qué solicitudes presentadas en voluntaria pueden impedirlo temporalmente.',
          '2. Distingue los tres recargos del periodo ejecutivo y el momento que determina cada uno.',
          '3. Enumera los motivos tasados de oposición a la providencia de apremio y explica por qué no permiten reabrir toda la liquidación.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Dibuja una línea temporal: liquidación o autoliquidación, plazo voluntario, inicio ejecutivo, providencia, plazo de apremio, embargo y realización. Memoriza artículos ancla 28, 62, 65, 71, 160, 161, 167, 169, 170 y 221 de la Ley General Tributaria. En cada respuesta pregunta si la opción describe una deuda, una actuación o un medio de revisión. En supuestos OAPGT verifica siempre la delegación y evita atribuir funciones estatutarias no publicadas.'
        ]}
      ],
      tree: 'Tema 26 · recaudación local\n├─ Periodo voluntario\n│  ├─ Liquidaciones notificadas\n│  ├─ Deudas periódicas\n│  └─ Pago sin recargo ejecutivo\n├─ Periodo ejecutivo\n│  ├─ Inicio del artículo 161 LGT\n│  ├─ Recargo ejecutivo\n│  ├─ Apremio reducido\n│  └─ Apremio ordinario\n├─ Facilidades y extinción\n│  ├─ Aplazamiento\n│  ├─ Fraccionamiento\n│  ├─ Compensación\n│  └─ Devolución de ingresos\n├─ Apremio\n│  ├─ Providencia\n│  ├─ Embargo\n│  ├─ Realización\n│  └─ Costas\n└─ Revisión\n   ├─ Motivos tasados\n   ├─ Suspensión\n   └─ Especialidad tributaria local',
      reviewTable: [
        ['Fase', 'Regla esencial', 'Referencia'],
        ['Voluntaria', 'Pago dentro del plazo sin recargos ejecutivos', 'Art. 62 LGT'],
        ['Ejecutiva', 'Comienza por impago en los momentos legales', 'Art. 161 LGT'],
        ['Recargos', 'Ejecutivo, apremio reducido u ordinario; incompatibles', 'Art. 28 LGT'],
        ['Aplazamiento', 'Pospone la deuda si es aplazable y se concede', 'Art. 65 LGT'],
        ['Fraccionamiento', 'Divide el pago en vencimientos', 'Art. 65 LGT / RGR'],
        ['Compensación', 'Extingue hasta el importe concurrente', 'Arts. 71-73 LGT'],
        ['Ingreso indebido', 'Procedimiento de devolución con interés cuando proceda', 'Art. 221 LGT'],
        ['Providencia', 'Inicia apremio y contiene requerimiento y recargo', 'Art. 167 LGT'],
        ['Embargo', 'Actuación posterior al impago en apremio', 'Arts. 169-171 LGT'],
        ['Revisión local', 'Aplicar LGT y especialidad del art. 14 TRLRHL', 'TRLRHL / RD 520/2005']
      ]
    },
    27: {
      sources: [source.trlrhl, source.rd500],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El presupuesto general local es el instrumento anual que integra previsiones de ingresos y límites de gasto de la entidad local, sus organismos autónomos y determinadas entidades dependientes. Debe estudiarse en cuatro pasos: concepto y contenido, función de las bases de ejecución, elaboración y aprobación, y prórroga. El Pleno aprueba; la Presidencia forma y remite el proyecto; la Intervención informa; la publicación y exposición permiten reclamaciones; y, si el nuevo presupuesto no entra en vigor el 1 de enero, opera la prórroga automática con límites.',
          'Las bases de ejecución no son una ley paralela ni un reglamento general para cualquier materia. Adaptan las reglas presupuestarias a la organización de la entidad para ese ejercicio y regulan procedimientos de ejecución, delegaciones, documentos, pagos a justificar, anticipos, modificaciones y compromisos plurianuales. No pueden modificar la legislación económico-presupuestaria ni introducir procedimientos que requieran una tramitación distinta.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Los artículos 162 a 171 del texto refundido de Haciendas Locales contienen el núcleo del presupuesto general. Los artículos 162 a 166 regulan definición, integración, contenido y anexos; el 168, elaboración y aprobación inicial; el 169, exposición, aprobación definitiva, publicación, entrada en vigor y prórroga; los artículos 170 y 171, reclamaciones y recurso. El Real Decreto 500/1990 desarrolla estas reglas, especialmente sus artículos 2 a 23 y el artículo 9 sobre bases de ejecución.',
          'Los documentos anuales de la Diputación —presupuesto, bases, plantilla, inversiones o anexos— son información dinámica. Esta ficha explica el régimen común y no presenta como vigentes cuantías, delegaciones o límites de un ejercicio que no hayan sido verificados en el documento oficial correspondiente.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El presupuesto general constituye la expresión cifrada, conjunta y sistemática de las obligaciones que, como máximo, puede reconocer la entidad y sus organismos y de los derechos que se prevea liquidar durante el ejercicio. Es una previsión para ingresos y una autorización limitativa para gastos. Su vigencia coincide con el año natural y debe respetar estabilidad presupuestaria y sostenibilidad financiera conforme a la normativa aplicable.',
          'El presupuesto general integra el presupuesto de la propia entidad, los de sus organismos autónomos y los estados de previsión de gastos e ingresos de las sociedades mercantiles cuyo capital pertenezca íntegramente a la entidad local. La consolidación permite ofrecer una visión conjunta eliminando operaciones internas cuando proceda. No debe confundirse integración con personalidad jurídica: cada organismo conserva la suya, pero su presupuesto forma parte del general.',
          'Cada presupuesto integrado contiene estado de gastos con créditos y estado de ingresos con estimaciones. Debe aprobarse sin déficit inicial. El presupuesto general incorpora bases de ejecución y anexos legalmente exigidos, como planes y programas de inversión, estado de consolidación, situación y movimiento de deuda y demás documentación. La clasificación orgánica, por programas y económica ordena los créditos y permite conocer quién gasta, para qué finalidad y en qué naturaleza económica.',
          'Las bases de ejecución adaptan las disposiciones generales a la organización y circunstancias de la entidad y de sus organismos. Pueden regular niveles de vinculación jurídica, créditos ampliables, transferencias y otras modificaciones, fases del gasto, delegaciones o desconcentraciones, documentos justificativos, subvenciones, acumulación de fases, pagos a justificar, anticipos de caja fija y gastos plurianuales. Pueden remitirse a reglamentos o normas generales aprobados por el Pleno. No pueden alterar la ley, crear competencias incompatibles ni sustituir procedimientos que exigen ordenanza o reglamento con tramitación propia.',
          'La vinculación jurídica determina el nivel al que los créditos limitan la autorización de gastos. Un gasto no puede imputarse a una aplicación sin crédito adecuado y suficiente. Las bases concretan niveles de vinculación y procedimientos internos, pero la modificación presupuestaria debe ajustarse a los tipos y órganos previstos por la ley. La autorización, disposición, reconocimiento de la obligación y ordenación del pago son fases distintas; pueden acumularse cuando lo permitan las bases y la naturaleza del gasto.',
          'La formación corresponde a la Presidencia de la entidad. El proyecto debe acompañarse de memoria explicativa, liquidación del ejercicio anterior y avance del corriente, anexo de personal, anexo de inversiones, informe económico-financiero y documentación de organismos y sociedades. Los organismos remiten sus propuestas y estados dentro de los plazos necesarios. La Intervención informa el presupuesto general antes de su remisión al Pleno.',
          'La Presidencia debe remitir el presupuesto informado al Pleno antes del 15 de octubre para aprobación, enmienda o devolución. La aprobación inicial corresponde al Pleno. Aprobado inicialmente, se expone al público durante quince días para examen y reclamaciones. Si no se presentan, se considera definitivamente aprobado. Si existen, el Pleno debe resolverlas dentro del plazo legal. Solo pueden formular reclamaciones los interesados y por las causas tasadas, como no haberse ajustado la elaboración y aprobación a trámites legales, omisión de crédito necesario o insuficiencia manifiesta de ingresos respecto de gastos.',
          'La aprobación definitiva debe producirse antes del 31 de diciembre del año anterior. El presupuesto definitivamente aprobado se publica resumido por capítulos en el boletín oficial y entra en vigor una vez realizada la publicación exigida. Se remite copia a las Administraciones estatal y autonómica. Contra la aprobación definitiva cabe recurso contencioso-administrativo en los términos legales; la impugnación no suspende por sí sola la aplicación del presupuesto.',
          'Si al comenzar el ejercicio no ha entrado en vigor el presupuesto nuevo, se prorroga automáticamente el anterior con sus créditos iniciales hasta la entrada en vigor del nuevo. La prórroga no convierte el presupuesto anterior en indefinido ni reproduce todo sin límites. No se prorrogan créditos destinados a servicios o programas que debían concluir en el ejercicio anterior ni los financiados con ingresos específicos que no vayan a obtenerse. La Presidencia puede ajustar a la baja los créditos prorrogados para evitar superar límites y mantener equilibrio.',
          'Una vez aprobado el nuevo presupuesto, sus créditos producen efectos conforme a la normativa y se practican los ajustes necesarios respecto de las operaciones realizadas durante la prórroga. Las modificaciones efectuadas sobre el presupuesto prorrogado pueden quedar absorbidas o ajustadas según su naturaleza. En examen hay que distinguir prórroga automática, modificación de crédito y reconocimiento de obligaciones: son operaciones diferentes.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Presidencia forma; Intervención informa; Pleno aprueba. Integración: entidad, organismos autónomos y sociedades íntegramente participadas. Contenido: gastos, ingresos, bases y anexos. Bases: adaptación y gestión, nunca modificación de la ley. Exposición: quince días. Definitiva: antes del 31 de diciembre y publicación resumida por capítulos. Prórroga: automática si no entra en vigor el nuevo presupuesto, pero excluye créditos de actuaciones terminadas y financiación específica no disponible.',
          'En un supuesto práctico comprueba ejercicio, órgano que actúa, existencia de crédito, fase de gasto, nivel de vinculación, documento justificativo y regla concreta de las bases. No cites una base anual si no está aportada.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Ingresos son previsiones; gastos son límites. El presupuesto general integra varios presupuestos sin borrar la personalidad de los entes. Las bases no pueden modificar la legislación. La Presidencia no aprueba definitivamente: lo hace el Pleno. La Intervención informa. La ausencia de reclamaciones convierte la aprobación inicial en definitiva. La prórroga es automática, pero no total. No se prorrogan actuaciones finalizadas ni créditos con financiación específica que no se obtenga. El recurso contencioso no suspende automáticamente.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Enumera los presupuestos y estados que integran el presupuesto general local y explica su diferencia con la consolidación.',
          '2. Indica qué materias pueden regular las bases de ejecución y qué límites jurídicos tienen.',
          '3. Describe cronológicamente formación, aprobación inicial, exposición, aprobación definitiva, publicación y prórroga.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Memoriza la secuencia 162-171 TRLRHL y los artículos 9, 52 a 60 y 68 a 75 del RD 500/1990. Separa órganos y fechas: Presidencia, Intervención, Pleno; 15 de octubre, quince días de exposición y 31 de diciembre. Cuando la pregunta mencione “bases de ejecución”, busca si la opción adapta procedimientos presupuestarios o pretende modificar una ley o regular una materia ajena.'
        ]}
      ],
      tree: 'Tema 27 · presupuesto general local\n├─ Concepto\n│  ├─ Expresión cifrada y sistemática\n│  ├─ Ingresos previstos\n│  └─ Gastos limitativos\n├─ Integración y contenido\n│  ├─ Entidad local\n│  ├─ Organismos autónomos\n│  ├─ Sociedades íntegramente participadas\n│  ├─ Estados de gastos e ingresos\n│  └─ Anexos\n├─ Bases de ejecución\n│  ├─ Adaptación organizativa\n│  ├─ Modificaciones y fases de gasto\n│  ├─ Delegaciones y documentos\n│  └─ Límites legales\n├─ Elaboración y aprobación\n│  ├─ Presidencia\n│  ├─ Intervención\n│  ├─ Pleno\n│  ├─ Exposición y reclamaciones\n│  └─ Publicación\n└─ Prórroga\n   ├─ Automática\n   ├─ Exclusiones\n   └─ Ajustes al nuevo presupuesto',
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['Definición', 'Ingresos previstos y obligaciones máximas', 'Art. 162 TRLRHL'],
        ['Integración', 'Entidad, organismos y sociedades íntegramente participadas', 'Art. 164 TRLRHL'],
        ['Contenido', 'Estados, bases de ejecución y aprobación sin déficit inicial', 'Art. 165 TRLRHL'],
        ['Bases', 'Adaptan la normativa sin modificarla', 'Art. 165 TRLRHL / art. 9 RD 500/1990'],
        ['Formación', 'Corresponde a la Presidencia con documentación e informe', 'Art. 168 TRLRHL'],
        ['Aprobación', 'Inicial y definitiva por el Pleno', 'Arts. 168-169 TRLRHL'],
        ['Exposición', 'Quince días para examen y reclamaciones', 'Art. 169 TRLRHL'],
        ['Publicación', 'Resumen por capítulos en boletín oficial', 'Art. 169 TRLRHL'],
        ['Prórroga', 'Automática con exclusiones y ajustes', 'Art. 169.6 TRLRHL'],
        ['Fases de gasto', 'Autorización, disposición, obligación y pago', 'Art. 52 RD 500/1990']
      ]
    },
    28: {
      sources: [source.lopdgdd, source.rgpd, source.transparencia],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema combina protección de datos y transparencia, dos obligaciones que pueden entrar en tensión pero no se excluyen. La Administración debe tratar datos con base jurídica, finalidad determinada, minimización, seguridad y responsabilidad proactiva; al mismo tiempo debe publicar información y resolver solicitudes de acceso. La respuesta correcta suele exigir ponderar, disociar o limitar el acceso, no negar automáticamente toda información que contenga datos personales.',
          'La expresión “ficheros y datos” debe interpretarse con el marco actual del RGPD y la Ley Orgánica 3/2018. El sistema ya no gira alrededor de inscribir ficheros en un registro general, sino alrededor de tratamientos, responsables, encargados, registro de actividades, análisis de riesgos, medidas de seguridad y derechos. La Agencia Española de Protección de Datos es la autoridad estatal independiente de control. La Ley 19/2013 regula publicidad activa, derecho de acceso, obligación de suministrar información y principios de buen gobierno.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El Reglamento (UE) 2016/679 es directamente aplicable y contiene principios, bases de licitud, derechos, obligaciones y funciones de las autoridades de control. La Ley Orgánica 3/2018 adapta y completa el sistema español y regula la AEPD y los derechos digitales. La Ley 19/2013 se aplica a las entidades locales en sus títulos de transparencia y acceso y contiene en su artículo 4 la obligación de suministrar información y en el artículo 26 los principios de buen gobierno.',
          'Las categorías especiales de datos, los datos penales, los menores, las comunicaciones y el acceso a expedientes tienen reglas específicas. Esta ficha explica el núcleo general. En un caso concreto deben consultarse además la normativa sectorial, el régimen de acceso del procedimiento, la legislación de archivos y la regulación autonómica aplicable.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Dato personal es toda información sobre una persona física identificada o identificable. Tratamiento es cualquier operación realizada sobre datos: recogida, registro, organización, consulta, comunicación, conservación, modificación, limitación, supresión o destrucción. El responsable determina fines y medios; el encargado trata datos por cuenta del responsable mediante relación jurídica que delimita instrucciones, confidencialidad, seguridad, subencargos y destino de los datos.',
          'Los principios son licitud, lealtad y transparencia; limitación de finalidad; minimización; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva. En una oficina administrativa esto se traduce en pedir solo datos necesarios, utilizarlos para la finalidad informada, mantenerlos correctos, limitar accesos, bloquear pantalla, controlar impresiones y correos, conservar conforme a plazos y documentar medidas.',
          'Todo tratamiento necesita una base de licitud. En el sector público son frecuentes la obligación legal y el cumplimiento de una misión en interés público o ejercicio de poderes públicos. El consentimiento no debe utilizarse como fórmula automática cuando la Administración actúa en ejercicio de competencia legal. Las categorías especiales exigen además una excepción del artículo 9 RGPD y garantías adecuadas. La publicidad de datos no se legitima por mera conveniencia: necesita base normativa y ponderación.',
          'Los derechos principales son acceso, rectificación, supresión, oposición, limitación, portabilidad cuando proceda y derecho a no ser objeto de determinadas decisiones exclusivamente automatizadas. El responsable debe facilitar su ejercicio, verificar identidad de forma proporcionada y responder dentro del plazo. Algunos derechos pueden limitarse por la base legal, la conservación obligatoria, el interés público o derechos de terceros. Supresión no significa borrado inmediato de todo documento administrativo cuando existe obligación de conservación o archivo.',
          'El responsable aplica privacidad desde el diseño y por defecto, mantiene un registro de actividades, analiza riesgos, adopta medidas de seguridad y comunica violaciones cuando concurren los requisitos. El delegado de protección de datos asesora, supervisa, coopera con la autoridad y actúa como punto de contacto, sin sustituir al responsable. La evaluación de impacto es necesaria cuando un tratamiento puede entrañar alto riesgo, según criterios del RGPD y autoridades de control.',
          'El término “fichero” conserva utilidad descriptiva y aparece en el programa, pero el régimen actual no exige la antigua inscripción general de ficheros ante la AEPD. La unidad de cumplimiento es el tratamiento. Pueden existir bases de datos, expedientes y sistemas de información, pero deben inventariarse mediante registros de actividades y controles internos. Esta actualización conceptual es un punto frecuente de examen cuando se mezclan normas derogadas con el RGPD.',
          'La AEPD es una autoridad administrativa independiente. Supervisa la aplicación del RGPD y la Ley Orgánica, atiende reclamaciones, investiga, ejerce potestades correctivas y sancionadoras, promueve concienciación, emite directrices e informes, autoriza o aprueba instrumentos cuando procede y coopera con otras autoridades europeas. No actúa como encargado de los tratamientos de las Administraciones ni autoriza previamente todos los tratamientos. Sus potestades deben ejercerse con independencia y sometimiento al ordenamiento.',
          'La transparencia se articula mediante publicidad activa y derecho de acceso a información pública. Publicidad activa obliga a publicar de forma periódica y actualizada información institucional, organizativa, jurídica y económica. El derecho de acceso permite solicitar contenidos o documentos que obren en poder del sujeto obligado y hayan sido elaborados o adquiridos en ejercicio de sus funciones. No exige motivar la solicitud, aunque la motivación puede facilitar la ponderación.',
          'Los límites al acceso se aplican de forma justificada y proporcional, atendiendo al daño y al interés público. La protección de datos personales requiere el análisis del artículo 15 de la Ley 19/2013. Los datos especialmente protegidos exigen condiciones reforzadas; para otros datos se pondera interés público, finalidad, antigüedad, condición del afectado y derechos concurrentes. La disociación o acceso parcial permite entregar información eliminando datos identificativos cuando sea suficiente.',
          'La obligación de suministrar información del artículo 4 alcanza a personas físicas o jurídicas distintas de los sujetos directamente obligados que presten servicios públicos o ejerzan potestades administrativas, cuando sean requeridas por la Administración, organismo o entidad vinculada. También puede alcanzar a adjudicatarios de contratos en los términos previstos en el contrato. La información se facilita al sujeto público responsable, que es quien cumple la obligación de transparencia.',
          'El buen gobierno se dirige a altos cargos y responsables comprendidos en su ámbito. Sus principios incluyen respeto a la Constitución y derechos fundamentales, transparencia, eficacia, economía y eficiencia, dedicación al servicio público, imparcialidad, igualdad, diligencia, conducta digna, responsabilidad, reserva y correcta gestión de recursos públicos. La ley tipifica infracciones y sanciones; no toda irregularidad administrativa se convierte automáticamente en infracción de buen gobierno.',
          'Protección de datos y transparencia deben resolverse conjuntamente. Antes de publicar o entregar información se identifica finalidad, base jurídica, naturaleza de los datos, condición de las personas afectadas, posibilidad de disociación y existencia de un interés público prevalente. En expedientes de personal, subvenciones, contratación o tributos pueden coexistir deberes de publicidad y límites de confidencialidad. La decisión debe motivarse y permitir acceso parcial cuando sea posible.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Dato personal identifica o hace identificable a una persona física. Tratamiento es cualquier operación. Responsable decide fines y medios; encargado actúa por cuenta. Principios: licitud, finalidad, minimización, exactitud, conservación, seguridad y responsabilidad. El sistema actual se centra en tratamientos, no en inscripción general de ficheros. AEPD supervisa, investiga, corrige, sanciona, orienta y coopera. Transparencia incluye publicidad activa y acceso. El artículo 4 obliga a suministrar información a determinados prestadores y adjudicatarios. Buen gobierno exige transparencia, imparcialidad, dedicación, diligencia y correcta gestión.',
          'Ante conflicto, no responder “protección de datos impide el acceso” sin más. Aplicar artículo 15, ponderar, motivar y valorar disociación o acceso parcial.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'El consentimiento no es la única base jurídica. La Administración suele tratar por obligación legal o misión pública. Responsable y encargado no son sinónimos. El delegado asesora y supervisa, pero no decide los fines. El antiguo registro de ficheros no es el centro del RGPD. La AEPD no autoriza previamente todos los tratamientos. El derecho de acceso a información pública no exige motivación general. Protección de datos no produce una prohibición automática. La obligación del artículo 4 consiste en suministrar información al sujeto público. Buen gobierno no se aplica indistintamente a cualquier empleado en los mismos términos.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica la diferencia entre responsable, encargado y delegado de protección de datos en una Diputación.',
          '2. Describe cómo se resuelve una solicitud de transparencia que contiene datos personales de terceros.',
          '3. Explica por qué la inscripción de ficheros ha dejado de ser el eje del cumplimiento y qué instrumentos la sustituyen.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Construye dos columnas: protección de datos y transparencia. Une ambas con ponderación, disociación y motivación. Memoriza RGPD artículos 5, 6, 9, 12 a 22, 30, 32 a 35 y 57-58; Ley 19/2013 artículos 4, 12-15 y 26. Cuando una opción use conceptos de la antigua LOPD —inscripción obligatoria de todo fichero, autorización previa general— sospecha que está desactualizada.'
        ]}
      ],
      tree: 'Tema 28 · datos, transparencia y buen gobierno\n├─ Protección de datos\n│  ├─ Dato y tratamiento\n│  ├─ Principios y licitud\n│  ├─ Derechos\n│  ├─ Responsable, encargado y DPD\n│  ├─ Seguridad y riesgos\n│  └─ Registro de actividades, no registro general de ficheros\n├─ AEPD\n│  ├─ Independencia\n│  ├─ Supervisión e investigación\n│  ├─ Potestades correctivas y sancionadoras\n│  └─ Orientación y cooperación\n├─ Transparencia\n│  ├─ Publicidad activa\n│  ├─ Derecho de acceso\n│  ├─ Límites y ponderación\n│  └─ Disociación y acceso parcial\n├─ Suministro de información\n│  ├─ Prestadores de servicios públicos\n│  ├─ Ejercicio de potestades\n│  └─ Adjudicatarios\n└─ Buen gobierno\n   ├─ Transparencia y servicio público\n   ├─ Imparcialidad y diligencia\n   └─ Responsabilidad y sanciones',
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['Dato personal', 'Información sobre persona identificada o identificable', 'Art. 4 RGPD'],
        ['Principios', 'Licitud, finalidad, minimización, exactitud, conservación y seguridad', 'Art. 5 RGPD'],
        ['Base jurídica', 'Todo tratamiento necesita una causa del artículo 6', 'Art. 6 RGPD'],
        ['Derechos', 'Acceso, rectificación, supresión, oposición, limitación y otros', 'Arts. 12-22 RGPD'],
        ['Registro', 'Se documentan actividades de tratamiento; no inscripción general de ficheros', 'Art. 30 RGPD'],
        ['AEPD', 'Autoridad independiente de supervisión y control', 'LO 3/2018 / arts. 57-58 RGPD'],
        ['Acceso público', 'Derecho sobre información en poder del sujeto obligado', 'Arts. 12-15 Ley 19/2013'],
        ['Suministro', 'Prestadores y adjudicatarios facilitan información al sujeto público', 'Art. 4 Ley 19/2013'],
        ['Buen gobierno', 'Transparencia, imparcialidad, servicio y diligencia', 'Art. 26 Ley 19/2013'],
        ['Conflicto', 'Ponderar, motivar, disociar o conceder acceso parcial', 'Art. 15 Ley 19/2013']
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
      sourcePolicy: 'Programa oficial Diputación 2026; fuentes BOE/DOUE consolidadas; sin atribuir competencias estatutarias OAPGT no verificadas',
      words: wordCount({ ...theme, ...patch })
    };
    theme.academiaVersion = 'v0.87 bloque 1';
  }

  const completed = Object.keys(THEORY).map(Number).sort((a, b) => a - b);
  const pending = ope.themes.map(theme => Number(theme.number)).filter(number => !completed.includes(number));
  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v87 = {
    version: VERSION,
    reviewedAt: REVIEW_DATE,
    autonomousThemes: completed.length,
    totalThemes: ope.themes.length,
    completedThemes: completed,
    pendingThemes: pending,
    status: 'EN_PROGRESO',
    dynamicChecks: [
      'Verificar las bases de ejecución del presupuesto provincial vigentes en la fecha del examen antes de añadir cuantías, delegaciones o límites anuales.',
      'Mantener bloqueadas las competencias y la organización estatutaria del OAPGT hasta localizar texto oficial vigente y modificaciones.'
    ],
    note: 'Primer bloque autosuficiente de Diputación: temas 25 a 28. El resto continúa en reconstrucción.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    version: VERSION,
    status: 'EN_PROGRESO',
    autonomousThemes: completed.length,
    totalThemes: ope.themes.length,
    completedThemes: completed,
    pendingThemes: pending,
    minimumWords: Math.min(...completed.map(number => ope.themes.find(item => Number(item.number) === number)?.theoryStatus?.words || 0))
  };
})();
