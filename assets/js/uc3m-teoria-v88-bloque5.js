(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 20);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-17';
  const sources = [
    {
      label: 'Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, texto consolidado actualizado en 2026',
      reference: 'BOE-A-2017-12902',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902&p=20260409&tn=6'
    },
    {
      label: 'UC3M · Presupuesto 2026, volumen I, artículo 21 y Normas Básicas de Gestión',
      reference: 'UC3M-PRESUPUESTO-2026-VOL-I',
      url: 'https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view'
    },
    {
      label: 'UC3M · Dirección Económico Financiera, área de Contratación',
      reference: 'UC3M-DEF-CONTRATACION',
      url: 'https://www.uc3m.es/economico/contratacion'
    },
    {
      label: 'Resolución rectoral de 31 de mayo de 2022 sobre delegación de facultades de contratación y gasto',
      reference: 'UC3M-DELEGACION-CONTRATACION-2022',
      url: 'https://e-archivo.uc3m.es/entities/publication/8cc030af-0a68-4911-8be0-3f5cc6156b55'
    },
    {
      label: 'UC3M · Texto refundido oficial de los Estatutos, contratación y Mesa',
      reference: 'UC3M-ESTATUTOS-CONSOLIDADO',
      url: 'https://www.uc3m.es/conocenos/normativa/estatutos-uc3m'
    },
    {
      label: 'Plataforma de Contratación del Sector Público · Perfil del contratante',
      reference: 'PLACSP-PERFIL-CONTRATANTE',
      url: 'https://contrataciondelestado.es/wps/portal/plataforma'
    }
  ];

  const sections = [
    {
      heading: 'Resumen orientado al aprobado',
      paragraphs: [
        'El tema 20 une dos capas inseparables. La primera es la Ley 9/2017, de Contratos del Sector Público: ámbito, clases de contratos, órgano de contratación, objeto, presupuesto base de licitación, valor estimado, expediente, pliegos, procedimientos y adjudicación. La segunda es la aplicación interna de la Universidad Carlos III de Madrid: Rector y delegaciones, Mesa, Dirección Económico Financiera, contratos menores, tres ofertas, sede electrónica, negociado por exclusividad, procedimiento abierto, Central de Contratación del Estado, acuerdos marco y sistemas dinámicos.',
        'La preparación no debe reducirse a memorizar límites. En cada pregunta hay que identificar cinco piezas: qué prestación se necesita, cuál es su valor estimado sin IVA, quién tiene competencia, qué procedimiento permite la ley y qué documentos y publicidad exige. Un mismo importe puede producir respuestas distintas según sea obra, suministro, servicio, prestación intelectual, proyecto de investigación, contrato centralizado o contrato derivado de un acuerdo marco.',
        'La LCSP vigente debe estudiarse en su texto consolidado actualizado en 2026. El Presupuesto UC3M 2026 desarrolla el procedimiento interno, pero no sustituye a la ley. Cuando exista tensión entre una instrucción interna y una norma legal posterior o de rango superior, prevalece la LCSP. Las cifras y delegaciones internas se aprenden como reglas UC3M verificadas para 2026 y deben revisarse si cambia el presupuesto o se publica una nueva resolución rectoral.',
        'La estrategia de aprobado es dominar primero los conceptos que cambian la respuesta: objeto frente a lotes y fraccionamiento; presupuesto base frente a valor estimado y precio; necesidad frente a conveniencia; solvencia frente a criterio de adjudicación; contrato menor frente a procedimiento abierto; exclusividad frente a simple preferencia por una marca; adjudicación frente a formalización; órgano de contratación frente a Mesa. Después se incorporan los órganos y límites internos de la UC3M.'
      ]
    },
    {
      heading: 'Rigor normativo',
      paragraphs: [
        'La Universidad Carlos III de Madrid integra el sector público y aplica la LCSP en su contratación. La ley persigue libertad de acceso a las licitaciones, publicidad y transparencia, no discriminación e igualdad de trato, integridad, estabilidad presupuestaria, control del gasto y selección de la oferta con mejor relación calidad-precio. Estos principios no desaparecen en contratos de importe reducido ni en proyectos de investigación.',
        'El artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026 remite expresamente a la Ley 9/2017, al Real Decreto 817/2009 en lo que continúe aplicable, a la instrucción de Gerencia sobre contratos menores y a las demás disposiciones vigentes. Identifica como vías habituales el contrato menor, el negociado, el abierto y la contratación a través de la Central de Contratación del Estado. Esta lista describe la práctica interna, no agota todos los procedimientos previstos por la ley.',
        'No puede iniciarse un expediente sin crédito adecuado y suficiente. La existencia de una necesidad real no permite contratar ignorando el presupuesto. Tampoco basta con que exista saldo: deben verificarse competencia, imputación, duración, valor estimado, procedimiento, pliegos, publicidad, ausencia de conflicto de intereses y documentación. El gasto presupuestario y la contratación son controles acumulativos.',
        'El Rector es el órgano de contratación de la UC3M. Los Estatutos atribuyen esa condición al Rector y prevén la Mesa de contratación. La Resolución de 31 de mayo de 2022 delega facultades en determinados órganos y miembros. Según las Normas de 2026, la Gerente tiene competencia delegada para contratos administrativos que no superen un millón de euros; los investigadores responsables pueden adquirir material necesario para proyectos por importe inferior a 15.000 euros; y otros órganos actúan en los casos y límites de la resolución, también por importe inferior a 15.000 euros. Delegación no significa titularidad: la competencia se ejerce por delegación del Rector y debe citarse como tal.',
        'La Mesa es un órgano de asistencia, no el órgano de contratación. La composición interna incluye Presidencia; un vocal del Servicio Jurídico; un vocal de la Dirección Económico Financiera-Presupuestos; dos vocales nombrados con carácter general entre personal universitario; y Secretaría de la Dirección Económico Financiera con voz y sin voto. Puede haber suplentes y vocales adicionales. La Mesa analiza documentación, valora o propone según el procedimiento, pero la adjudicación corresponde al órgano competente.',
        'Los umbrales de regulación armonizada pueden modificarse periódicamente y en 2026 han sido actualizados por la normativa correspondiente. Por eso no deben copiarse cifras antiguas desde un manual. Para el examen se utilizará la redacción vigente en la fecha exigible. Los límites estables que sí aparecen en el bloque UC3M son los del contrato menor y determinadas delegaciones; aun así, siempre se contrastan con la LCSP y con la norma anual.'
      ]
    },
    {
      heading: 'Desarrollo completo del epígrafe oficial',
      paragraphs: [
        'Ámbito y clases de contratos. La LCSP distingue contratos de obras, concesión de obras, concesión de servicios, suministro y servicios, además de contratos mixtos. El contrato de obras tiene por objeto ejecutar una obra, sola o junto con proyecto, o realizar trabajos que respondan a una función económica o técnica. La concesión traslada al concesionario el derecho de explotación y un riesgo operacional real. El suministro cubre adquisición, arrendamiento o arrendamiento financiero de bienes muebles y ciertas prestaciones seriadas. El servicio comprende prestaciones de hacer dirigidas a obtener un resultado distinto de una obra o suministro. El contrato mixto reúne prestaciones de distintas clases y su régimen se determina conforme a las reglas legales sobre prestación principal y separación funcional.',
        'Objeto del contrato. Debe ser determinado y responder a una necesidad pública. No puede fraccionarse para disminuir la cuantía y eludir publicidad o procedimiento. La regla no prohíbe dividir el objeto en lotes; al contrario, la LCSP favorece la división cuando la naturaleza lo permite y exige justificar la decisión de no dividir. Lote significa una parte susceptible de contratación separada dentro de una necesidad global. Fraccionamiento indebido es partir artificialmente una unidad funcional para evitar reglas más exigentes.',
        'Necesidad e idoneidad. Antes de licitar debe justificarse qué necesidad institucional se pretende satisfacer y por qué el objeto y su extensión son idóneos. No basta una fórmula genérica. En UC3M la unidad promotora debe concretar finalidad docente, investigadora, administrativa o de servicio, duración, usuarios, prestaciones, financiación y resultado esperado. Si existe un acuerdo marco, sistema dinámico, contrato vigente o bien centralizado que cubre la necesidad, no procede crear un contrato paralelo sin analizar esa vía.',
        'Presupuesto base de licitación. Es el límite máximo de gasto que puede comprometer el órgano de contratación en virtud del contrato, incluido el IVA salvo disposición en contrario, y debe ser adecuado a precios de mercado. Su desglose ha de reflejar costes directos, indirectos y otros eventuales gastos, incluidos costes salariales cuando resulten relevantes. No es sinónimo de valor estimado.',
        'Valor estimado. Se calcula sin IVA e incluye el importe total pagadero, prórrogas, opciones, modificaciones previstas, primas o pagos y demás elementos exigidos por el artículo 101. Determina umbrales, procedimiento y publicidad. Se refiere al momento de envío del anuncio o, si no lo hay, al inicio del procedimiento. El error clásico consiste en comparar el presupuesto con IVA con un umbral legal formulado en valor estimado sin IVA.',
        'Precio del contrato. Es la contraprestación que recibe el contratista por la prestación ejecutada y debe ser cierto. Puede formularse por precios unitarios, a tanto alzado u otros sistemas legales. Presupuesto base es el máximo de licitación; valor estimado sirve para dimensionar jurídicamente el contrato; precio es el resultado económico de la adjudicación y ejecución. Una baja ofertada puede reducir el precio, pero no altera retroactivamente el valor estimado usado para elegir procedimiento.',
        'Duración y prórroga. Deben guardar relación con la naturaleza de las prestaciones, financiación y necesidad de concurrencia. Las prórrogas han de estar previstas, acordarse expresamente antes de finalizar y respetar límites. No existe prórroga tácita. En el contrato menor la duración máxima es un año y no cabe prórroga. La reiteración anual de menores para una necesidad recurrente puede evidenciar planificación deficiente o fraccionamiento.',
        'Expediente de contratación. Lo inicia el órgano de contratación motivando necesidad y publicando el anuncio previo cuando proceda. Debe incorporar pliego de cláusulas administrativas particulares y pliego de prescripciones técnicas, certificado de crédito o documento equivalente, fiscalización cuando corresponda, justificación del procedimiento, clasificación o solvencia, criterios de adjudicación, valor estimado, necesidad de lotes, duración y decisión de aprobación. La aprobación del expediente implica normalmente aprobar el gasto y abrir la adjudicación.',
        'Pliego administrativo y pliego técnico. El PCAP fija derechos, obligaciones, solvencia, criterios, garantías, penalidades, condiciones especiales de ejecución, causas de resolución y régimen jurídico. El PPT describe características técnicas y resultados funcionales. El técnico no debe incluir reglas administrativas contradictorias ni diseñarse para favorecer una marca, origen o empresa. Las referencias concretas solo se admiten en los supuestos legales y normalmente con la expresión equivalente.',
        'Aptitud y solvencia. El licitador necesita capacidad de obrar, no estar incurso en prohibición de contratar y acreditar solvencia económica-financiera y técnica-profesional o clasificación cuando corresponda. La solvencia comprueba aptitud previa; los criterios de adjudicación comparan ofertas admitidas. No se puede puntuar como ventaja una solvencia que ya actúa como requisito salvo que se configure legalmente como experiencia o calidad del personal vinculada a la ejecución.',
        'Criterios de adjudicación. La regla es seleccionar la mejor relación calidad-precio mediante criterios económicos y cualitativos vinculados al objeto. Pueden utilizarse fórmulas y juicios de valor. Los criterios deben estar definidos en pliegos, ponderados y permitir comparación efectiva. El precio no es siempre el único criterio. Una oferta anormalmente baja no se excluye automáticamente: debe tramitarse el procedimiento de justificación y decidirse motivadamente.',
        'Procedimiento abierto. Todo empresario interesado puede presentar proposición y queda excluida la negociación de términos. Es la vía general cuando no procede un régimen especial. La UC3M exige remitir a DEF-Contratación la propuesta de contratación, borrador del pliego técnico e informes justificativos. La unidad consulta con el promotor las circunstancias, prepara la documentación y publica licitación, adjudicación y formalización en el Perfil de contratante. En contratos sujetos a regulación armonizada se añade la publicidad europea exigible.',
        'Procedimiento abierto simplificado. La LCSP permite modalidades simplificadas cuando se cumplen tipo, cuantía y condiciones legales. Reduce trámites, pero mantiene publicidad, competencia, criterios y expediente. La modalidad abreviada del artículo 159.6 opera solo dentro de sus límites y exclusiones. No debe confundirse con contrato menor: sigue siendo procedimiento competitivo publicado.',
        'Negociado sin publicidad. Solo procede en supuestos tasados del artículo 168. La exclusividad puede justificarlo cuando por razones técnicas o de derechos exclusivos la prestación solo pueda encomendarse a una empresa y no exista alternativa razonable ni configuración artificial. Preferir una marca o proveedor no basta. En UC3M se remite a DEF-Contratación propuesta, informes y borrador técnico; en exclusividad se añade certificado. Adjudicación y formalización se publican en el Perfil y, cuando proceda por regulación armonizada, la formalización también en el DOUE.',
        'Contrato menor. La LCSP considera menores los contratos de valor estimado inferior a 40.000 euros en obras y a 15.000 en suministros o servicios. Exige informe motivado de necesidad y de no alteración del objeto para eludir umbrales, aprobación del gasto y factura; en obras se añade presupuesto y, cuando proceda, proyecto e informe de supervisión. Se publican conforme al artículo 63.4. No basta que una factura sea inferior al límite: debe existir expediente y no fraccionamiento.',
        'Especialidad de investigación. La disposición adicional quincuagésima cuarta de la LCSP establece un umbral específico inferior a 50.000 euros para determinados suministros y servicios destinados a agentes públicos del Sistema Español de Ciencia, Tecnología e Innovación cuando no se destinen a servicios generales e infraestructuras. El Presupuesto UC3M recoge ese límite para suministros y servicios específicos de proyectos de investigación. Debe comprobarse que el objeto y financiación encajan realmente; no es una ampliación general para cualquier compra universitaria.',
        'Procedimiento menor UC3M. Las Normas de 2026 exigen aprobación del gasto, solicitud de tres presupuestos como regla interna, factura, presupuesto de obra, documentación de inventario para suministros y obras del capítulo VI, informe de necesidad y justificación anti-fraccionamiento. Todos los menores se inician en el procedimiento electrónico de la Sede y deben incorporar el número de expediente. La contratación verbal está prohibida salvo emergencia legal.',
        'Excepción interna de tres ofertas. Puede justificarse no solicitar tres presupuestos para gastos que no excedan de 5.000 euros sin IVA y se tramiten por el sistema asimilado a caja fija, siempre sin vulnerar los principios de contratación. La excepción no se aplica cuando la convocatoria o normativa de proyectos financiados por Comunidad de Madrid o entidades nacionales impone requisitos distintos. Tres ofertas es una regla interna de concurrencia adicional; la LCSP estatal no convierte por sí sola esa cifra en requisito universal de todo menor.',
        'Central de Contratación del Estado. Para utilizar un acuerdo marco estatal la Universidad debe estar adherida al acuerdo concreto. Los requisitos serán los establecidos por la Central y por sus pliegos. No basta una adhesión genérica. El contrato basado debe respetar catálogo, adjudicatarios, procedimiento de segunda licitación cuando proceda, términos, límites y trazabilidad del acuerdo.',
        'Acuerdos marco UC3M y sistemas dinámicos. Los contratos basados en acuerdos marco celebrados por la Universidad se someten a su PCAP y se tramitan por DEF-Contratación previa solicitud del servicio gestor. En un sistema dinámico de adquisición, totalmente electrónico y abierto durante su vigencia a empresas que cumplan criterios, cada contratación específica sigue las reglas del sistema y las instrucciones internas. Ninguno permite comprar fuera de su objeto o ignorar las condiciones adjudicadas.',
        'Publicidad y Perfil de contratante. El Perfil centraliza información y documentos para garantizar transparencia y acceso. Deben publicarse memorias, pliegos, anuncios, composición de mesas cuando proceda, adjudicación, formalización, modificaciones y demás actos exigidos. La publicidad europea no sustituye la nacional ni viceversa; cada nivel responde a su normativa. Los contratos menores se publican al menos trimestralmente con la información legal, salvo excepciones.',
        'Adjudicación y formalización. La adjudicación debe ser motivada, notificarse a licitadores y publicarse. Identifica características de la oferta seleccionada y razones de rechazo. La formalización documenta el contrato una vez transcurridos los plazos legales cuando sean aplicables. En contratos menores, la factura puede actuar como documento contractual conforme al expediente. Adjudicar no equivale a ejecutar ni pagar; después operan responsable del contrato, recepción, conformidad, penalidades, modificación, resolución y pago.',
        'Integridad y conflicto de intereses. Quienes intervienen deben abstenerse cuando concurra interés personal y comunicar riesgos. La división de funciones entre promotor, contratación, asesoría jurídica, presupuesto, Mesa y órgano de contratación reduce riesgos. La financiación europea o de investigación puede añadir plan antifraude, declaración de ausencia de conflicto, trazabilidad y conservación documental. La urgencia organizativa no justifica elegir a un proveedor sin procedimiento.',
        'Planificación. Las necesidades previsibles deben incorporarse al plan anual de contratación. Agrupar demanda, preparar pliegos, calcular valor estimado y revisar contratos vigentes evita menores repetitivos y compras tardías. La página oficial de la DEF explica que Contratación y Patrimonio gestiona procedimientos abiertos, las Oficinas Económicas otros procedimientos y contratos centralizados, y los servicios habilitados la contratación menor, coordinados por un grupo interno. La distribución operativa no modifica quién es órgano de contratación.'
      ]
    },
    {
      heading: 'Síntesis de repaso rápido',
      paragraphs: [
        'Cadena general: necesidad e idoneidad; objeto y lotes; valor estimado sin IVA; presupuesto base normalmente con IVA; crédito; órgano competente; expediente y pliegos; solvencia; procedimiento; publicidad; valoración; adjudicación; formalización; ejecución, recepción y pago. Si una opción omite una pieza esencial, suele ser incorrecta.',
        'Cadena UC3M: Rector como órgano; Gerente delegada hasta un millón; investigadores y órganos previstos por debajo de 15.000 en su ámbito; Mesa con jurídico, DEF, dos vocales y secretaría sin voto; DEF-Contratación para abiertos, negociados, acuerdos y sistemas; Sede electrónica y número de expediente para menores.',
        'Límites menores sin IVA: obras inferior a 40.000; suministros y servicios inferior a 15.000; determinados suministros y servicios específicos de investigación inferior a 50.000. Duración máxima un año y sin prórroga. Tres presupuestos como regla UC3M; posible excepción hasta 5.000 sin IVA mediante caja fija, salvo requisitos específicos de financiación.',
        'Diferencias esenciales: presupuesto base incluye IVA y fija máximo de gasto; valor estimado excluye IVA e integra opciones y prórrogas; precio es la contraprestación adjudicada. Solvencia habilita al licitador; criterio compara ofertas. Mesa asiste; órgano decide. Exclusividad es supuesto tasado; preferencia comercial no lo es. Lote favorece concurrencia; fraccionamiento elude reglas.'
      ]
    },
    {
      heading: 'Opo-Test: puntos calientes',
      paragraphs: [
        'Órgano de contratación Rector y ejercicio delegado; límite de un millón para Gerencia; importe inferior a 15.000 para investigadores y otros órganos en sus ámbitos; composición de Mesa y secretario con voz sin voto; necesidad de crédito adecuado y suficiente.',
        'Objeto determinado, lotes y justificación de no división; prohibición de fraccionamiento; presupuesto base con IVA frente a valor estimado sin IVA; inclusión de prórrogas y modificaciones previstas; diferencia entre solvencia y criterios; vinculación al objeto; mejor relación calidad-precio y ofertas anormalmente bajas.',
        'Menores: inferior a 40.000 obras; inferior a 15.000 suministros y servicios; especialidad de investigación inferior a 50.000; informe de necesidad y anti-fraccionamiento; aprobación del gasto; factura; presupuesto de obras; duración máxima un año; sin prórroga; publicidad; tres ofertas UC3M; sede electrónica y expediente.',
        'Procedimientos: abierto sin negociación; abierto simplificado no equivale a menor; negociado sin publicidad solo en supuestos legales; exclusividad real y sin alternativa; publicación en Perfil y, cuando proceda, DOUE; adhesión concreta a Central; contrato basado sometido al acuerdo; sistema dinámico electrónico y competitivo.',
        'Trampas: sumar IVA al valorar umbral; usar precio adjudicado en lugar de valor estimado; creer que tres ofertas sustituyen informe; elegir negociado porque existe urgencia ordinaria; atribuir adjudicación a la Mesa; confundir pliego técnico y administrativo; permitir prórroga del menor; afirmar que todo proyecto de investigación disfruta del límite de 50.000.'
      ]
    },
    {
      heading: 'Tres preguntas de retención activa',
      paragraphs: [
        '¿Cómo distinguirías, con un ejemplo numérico, presupuesto base de licitación, valor estimado y precio final, indicando en cuál se incluye IVA y cuál determina el procedimiento?',
        '¿Qué expediente y qué órgano corresponden a una compra UC3M de suministro general por 14.500 euros sin IVA, a una obra de 39.500 y a equipamiento específico de investigación por 48.000, y qué controles anti-fraccionamiento deben mantenerse?',
        '¿Qué diferencias jurídicas existen entre procedimiento abierto, negociado sin publicidad por exclusividad, contrato basado en acuerdo marco y contrato menor, especialmente en concurrencia, publicidad, negociación y documentación?'
      ]
    },
    {
      heading: 'Estrategia de examen',
      paragraphs: [
        'Primero subraya el concepto cuantitativo: valor estimado, presupuesto base o precio. Si aparece un umbral, comprueba IVA. Segundo identifica el tipo contractual. Tercero busca competencia y procedimiento. Cuarto verifica documentos y publicidad. Esta secuencia impide caer en opciones parcialmente ciertas.',
        'En preguntas UC3M, separa regla estatal y especialidad interna. La LCSP fija límites y requisitos mínimos del contrato menor; la Universidad añade tres ofertas y tramitación en Sede. La resolución rectoral distribuye delegaciones; el Presupuesto describe la operativa anual. Una opción que atribuya a una instrucción interna poder para excepcionar la LCSP debe descartarse.',
        'Memoriza órganos mediante verbos: el servicio promotor define; DEF tramita y coordina; el Servicio Jurídico informa; la Mesa asiste y propone; el Rector o delegado aprueba y adjudica; el responsable controla la ejecución; la unidad económica conforma y contabiliza; Tesorería paga. El verbo suele revelar la respuesta.',
        'Cuando dos opciones parezcan correctas, busca la excepción omitida. “El menor de servicios es de 15.000 euros” es incorrecto si no dice inferior y valor estimado sin IVA. “El negociado se usa por exclusividad” es incompleto si no exige supuesto legal, ausencia de alternativa y expediente motivado. “La Mesa adjudica” es falso aunque valore ofertas.',
        'No memorices umbrales SARA desde apuntes estáticos. La LCSP consolidada indica la actualización vigente. En cambio, para el documento anual UC3M aprende literalmente delegaciones, tres ofertas y circuitos internos, marcándolos como datos revisados en 2026. Antes del examen se ejecutará una comprobación final de vigencia.'
      ]
    }
  ];

  const tree = [
    'Tema 20 · Contratación del sector público y UC3M',
    '├─ Marco y principios',
    '│  ├─ LCSP, transparencia, igualdad e integridad',
    '│  ├─ Crédito, necesidad e idoneidad',
    '│  └─ Planificación y conflicto de intereses',
    '├─ Elementos',
    '│  ├─ Tipos contractuales',
    '│  ├─ Objeto, lotes y no fraccionamiento',
    '│  ├─ PBL, valor estimado y precio',
    '│  └─ Duración, solvencia y criterios',
    '├─ Preparación y adjudicación',
    '│  ├─ Expediente, PCAP y PPT',
    '│  ├─ Abierto y abierto simplificado',
    '│  ├─ Negociado sin publicidad',
    '│  └─ Adjudicación y formalización',
    '├─ UC3M',
    '│  ├─ Rector, delegaciones y Mesa',
    '│  ├─ DEF-Contratación y Sede',
    '│  ├─ Menores y tres ofertas',
    '│  └─ Perfil del contratante',
    '└─ Técnicas de racionalización',
    '   ├─ Central de Contratación',
    '   ├─ Acuerdos marco',
    '   └─ Sistemas dinámicos'
  ].join('\n');

  const reviewTable = [
    ['Concepto', 'Regla', 'Referencia'],
    ['Órgano UC3M', 'Rector', 'Estatutos y art. 21'],
    ['Gerencia', 'Contratos que no superen 1.000.000 €', 'Delegación 2022 / Presupuesto 2026'],
    ['Investigación', 'Material de proyectos por importe inferior a 15.000 €', 'Art. 21'],
    ['Mesa', 'Jurídico, DEF, dos vocales; secretario con voz sin voto', 'Art. 21'],
    ['Objeto', 'Determinado; no fraccionamiento; lotes cuando proceda', 'LCSP art. 99'],
    ['PBL', 'Máximo de gasto, normalmente con IVA y desglosado', 'LCSP art. 100'],
    ['Valor estimado', 'Sin IVA; incluye opciones, prórrogas y modificaciones previstas', 'LCSP art. 101'],
    ['Precio', 'Contraprestación cierta', 'LCSP art. 102'],
    ['Expediente', 'Necesidad, crédito, pliegos, procedimiento y criterios', 'LCSP arts. 116–117'],
    ['Menor obras', 'Valor estimado inferior a 40.000 €', 'LCSP art. 118'],
    ['Menor suministro/servicio', 'Valor estimado inferior a 15.000 €', 'LCSP art. 118'],
    ['Investigación específica', 'Inferior a 50.000 € si encaja en DA 54', 'LCSP DA 54'],
    ['Menor duración', 'Máximo un año y sin prórroga', 'LCSP art. 29'],
    ['Menor expediente', 'Necesidad, no fraccionamiento, gasto y factura', 'LCSP art. 118'],
    ['Tres ofertas UC3M', 'Regla interna; excepción motivada ≤5.000 € sin IVA y caja fija', 'Presupuesto 2026 art. 21'],
    ['Abierto', 'Todo interesado puede ofertar; no negociación', 'LCSP art. 156'],
    ['Negociado', 'Solo supuestos tasados; exclusividad real', 'LCSP art. 168'],
    ['Perfil', 'Publicidad y acceso a documentos', 'LCSP art. 63'],
    ['Central', 'Adhesión al acuerdo concreto', 'Presupuesto 2026 art. 21.4'],
    ['Acuerdo marco', 'Contrato basado según pliego', 'Presupuesto 2026 art. 21.5'],
    ['Sistema dinámico', 'Electrónico y sujeto a pliego e instrucciones', 'Presupuesto 2026 art. 21.6']
  ];

  const words = [...sections.flatMap(section => [section.heading, ...(section.paragraphs || [])]), tree, ...reviewTable.flat()]
    .join(' ').trim().split(/\s+/).filter(Boolean).length;

  theme.sections = sections;
  theme.tree = tree;
  theme.reviewTable = reviewTable;
  theme.officialSources = sources;
  theme.theoryStatus = {
    autonomous: true,
    programmeLiteral: true,
    reviewedAt: REVIEW_DATE,
    words,
    sourcePolicy: 'LCSP consolidada actualizada en 2026, Estatutos UC3M, resolución rectoral de delegación y procedimiento oficial del Presupuesto UC3M 2026.'
  };
  theme.auditStatus = 'banco real 30+ · teoría autosuficiente v0.88 · contratación estatal e interna UC3M verificada en 2026';

  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v88 = {
    status: 'CERRADO',
    scope: 'Temas específicos 13 a 20 de UC3M',
    completedThemes: [13, 14, 15, 16, 17, 18, 19, 20],
    pendingThemes: [],
    autonomousThemes: 8,
    totalThemes: 8,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'Fuentes oficiales BOE y UC3M; datos anuales y umbrales variables identificados para control de vigencia.'
  };

  window.OPOWEB_UC3M_THEORY_V88 = {
    status: 'CERRADO',
    block: 5,
    completedThemes: [13, 14, 15, 16, 17, 18, 19, 20],
    pendingThemes: [],
    reviewedAt: REVIEW_DATE
  };
})();