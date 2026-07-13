(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-13';
  const SOURCES = {
    constitucion: { label: 'Constitución Española', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    ley39: { label: 'Ley 39/2015, de 1 de octubre', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    ley40: { label: 'Ley 40/2015, de 1 de octubre', reference: 'BOE-A-2015-10566', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' },
    lbrl: { label: 'Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local', reference: 'BOE-A-1985-5392', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392' },
    servicios: { label: 'Reglamento de Servicios de las Corporaciones Locales de 1955', reference: 'BOE-A-1955-10057', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1955-10057' },
    accesoServicios: { label: 'Ley 17/2009, de 23 de noviembre, sobre libre acceso a actividades de servicios', reference: 'BOE-A-2009-18731', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2009-18731' },
    unidadMercado: { label: 'Ley 20/2013, de 9 de diciembre, de garantía de la unidad de mercado', reference: 'BOE-A-2013-12888', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12888' },
    poblacion: { label: 'Real Decreto 1690/1986, Reglamento de Población y Demarcación Territorial', reference: 'BOE-A-1986-21944', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-21944' },
    haciendas: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' }
  };

  const THEMES = {
    6: {
      sources: [SOURCES.constitucion, SOURCES.ley40, SOURCES.ley39],
      articleCoverage: [
        ['Art. 106.2 CE', 'Derecho a indemnización por lesión derivada del funcionamiento de los servicios públicos, en los términos legales.'],
        ['Arts. 32-35 Ley 40/2015', 'Principios, concurrencia, indemnización y responsabilidad cuando la Administración actúa en relaciones de Derecho privado.'],
        ['Arts. 36-37 Ley 40/2015', 'Responsabilidad de autoridades y personal y relación con la responsabilidad penal.'],
        ['Arts. 54-56 y 65 Ley 39/2015', 'Iniciación, actuaciones previas, medidas provisionales e inicio de oficio de responsabilidad patrimonial.'],
        ['Art. 67 Ley 39/2015', 'Solicitud, contenido y plazo de prescripción del derecho a reclamar.'],
        ['Arts. 81, 86 y 91-92 Ley 39/2015', 'Informes, terminación convencional, resolución y competencia.'],
        ['Art. 96.4 Ley 39/2015', 'Tramitación simplificada en responsabilidad patrimonial.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La responsabilidad patrimonial obliga a la Administración a indemnizar lesiones antijurídicas causadas por el funcionamiento normal o anormal de los servicios públicos. No exige necesariamente una conducta culpable del empleado: es un sistema objetivo, pero el reclamante debe acreditar daño, imputación al servicio y relación causal.`,
          `Para resolver un caso deben comprobarse, por orden, competencia y plazo; existencia de daño efectivo, evaluable e individualizado; ausencia de deber jurídico de soportarlo; relación causal; inexistencia de fuerza mayor; valoración; y procedimiento. La mera anulación de un acto no genera automáticamente indemnización.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          ...[
            ['Art. 106.2 CE', 'Reconoce el derecho de los particulares a ser indemnizados por lesiones en bienes y derechos, salvo fuerza mayor, cuando sean consecuencia del funcionamiento de los servicios públicos.'],
            ['Art. 32 Ley 40/2015', 'Define principios, requisitos del daño y supuestos especiales de responsabilidad del Estado legislador.'],
            ['Art. 33 Ley 40/2015', 'Regula la concurrencia de varias Administraciones y la posible solidaridad.'],
            ['Art. 34 Ley 40/2015', 'Determina daños indemnizables, criterios de valoración, fecha de cálculo y formas de pago.'],
            ['Art. 35 Ley 40/2015', 'Mantiene el régimen administrativo incluso cuando se actúa mediante entidades de Derecho privado.'],
            ['Arts. 36-37 Ley 40/2015', 'Canalizan la reclamación frente a la Administración y la acción de regreso contra personal por dolo o culpa grave.'],
            ['Arts. 65 y 67 Ley 39/2015', 'Regulan inicio de oficio y solicitud del perjudicado.'],
            ['Arts. 81, 91 y 92 Ley 39/2015', 'Fijan informes, contenido de resolución y órgano competente.']
          ].map(([range, focus]) => `${range}: ${focus}`)
        ]},
        { heading: '1. Fundamento, naturaleza y caracteres', paragraphs: [
          `El artículo 106.2 de la Constitución contiene la garantía general. La regulación sustantiva está en los artículos 32 a 37 de la Ley 40/2015 y la tramitación en la Ley 39/2015. Debe separarse la cuestión sustantiva —si existe derecho a indemnización— de la procedimental —cómo se reclama y resuelve—.`,
          `El sistema es directo: el particular reclama a la Administración responsable, aunque el daño material proceda de una autoridad o empleado. No tiene que demandar previamente al agente. Después de indemnizar, la Administración debe exigir de oficio responsabilidad al personal cuando haya dolo o culpa o negligencia graves.`,
          `Es una responsabilidad objetiva en el sentido de que no exige probar culpa del servicio, pero no convierte a la Administración en aseguradora universal. Solo se indemnizan daños conectados causalmente con el funcionamiento público y que el perjudicado no tenga obligación jurídica de soportar.`
        ]},
        { heading: '2. Lesión indemnizable: daño efectivo, evaluable e individualizado', paragraphs: [
          `El daño debe ser efectivo: real y producido, no una posibilidad futura o una simple expectativa. Puede incluir daño emergente, lucro cesante probado y daños personales o morales cuando se acrediten. Una pérdida hipotética o basada solo en conjeturas no cumple el requisito.`,
          `Debe ser evaluable económicamente. Incluso el daño moral necesita una valoración razonada, aunque no exista factura. La cuantía se calcula con criterios de legislación fiscal, expropiatoria y otras normas, ponderando mercado; en muerte o lesiones pueden tomarse como referencia los baremos de seguros obligatorios y Seguridad Social.`,
          `Debe estar individualizado respecto de una persona o grupo identificable. Las cargas generales soportadas por toda la colectividad no suelen constituir lesión individualizable. En daños colectivos debe determinarse el grupo afectado y la singularidad del perjuicio.`
        ]},
        { heading: '3. Antijuridicidad y deber jurídico de soportar', paragraphs: [
          `La lesión es antijurídica cuando el perjudicado no tiene el deber jurídico de soportarla. El análisis no se centra únicamente en si la actuación administrativa fue legal o ilegal, sino en si el ordenamiento impone al ciudadano esa carga.`,
          `Puede haber responsabilidad por funcionamiento normal, por ejemplo cuando una actividad pública lícita causa un perjuicio singular no exigible. También puede no haberla pese a una irregularidad si no existe daño, no hay causalidad o la persona debía soportarlo.`,
          `La anulación administrativa o judicial de un acto no presupone por sí sola derecho a indemnización. Hay que acreditar los restantes requisitos y, especialmente, que el daño no era una consecuencia que legalmente debía soportarse.`
        ]},
        { heading: '4. Funcionamiento normal o anormal y relación de causalidad', paragraphs: [
          `El funcionamiento anormal comprende actuaciones tardías, defectuosas, omisiones indebidas o prestación por debajo del estándar exigible. El normal comprende daños derivados del funcionamiento correcto cuando la carga resulta singular y antijurídica.`,
          `La relación de causalidad exige conectar el servicio con el resultado. Debe analizarse si la actuación fue condición adecuada y jurídicamente relevante del daño. La intervención de la víctima o de un tercero puede romper la causalidad o dar lugar a concurrencia y reducción.`,
          `En omisiones se pregunta si existía deber concreto de actuar, si la Administración disponía de medios razonables y si la actuación omitida habría evitado previsiblemente el resultado. No basta afirmar de forma genérica que el Ayuntamiento debía impedir cualquier daño.`
        ]},
        { heading: '5. Fuerza mayor, caso fortuito y riesgos del desarrollo', paragraphs: [
          `La fuerza mayor excluye responsabilidad: es un acontecimiento externo, imprevisible o inevitable incluso con diligencia. El caso fortuito vinculado al funcionamiento interno del servicio no tiene necesariamente el mismo efecto excluyente. La calificación depende de circunstancias, no solo del nombre dado al hecho.`,
          `No son indemnizables daños derivados de hechos que no pudieron preverse o evitarse según el estado de conocimientos de ciencia o técnica existente al producirse, sin perjuicio de prestaciones asistenciales que establezcan las leyes. Es el límite denominado riesgo del desarrollo.`,
          `La actuación de la víctima puede excluir o moderar responsabilidad. Si su conducta es la causa exclusiva, rompe el nexo. Si concurre con el servicio, puede distribuirse el daño según la intensidad causal.`
        ]},
        { heading: '6. Concurrencia de Administraciones', paragraphs: [
          `Cuando el daño deriva de fórmulas conjuntas de actuación, las Administraciones responden frente al particular de forma solidaria, sin perjuicio de la distribución interna fijada en el instrumento regulador.`,
          `En otros supuestos de concurrencia se reparte conforme a competencia, interés público tutelado e intensidad de intervención. Si no puede determinarse, la responsabilidad es solidaria.`,
          `La Administración competente para tramitar será la prevista en estatutos o reglas de la organización conjunta y, en defecto, la que tenga mayor participación en la financiación. Debe consultar a las demás y conceder plazo para alegaciones.`
        ]},
        { heading: '7. Cuantía, actualización y forma de indemnización', paragraphs: [
          `La valoración se refiere al día en que se produjo la lesión. La cuantía se actualiza hasta la finalización del procedimiento mediante el índice legal aplicable y pueden generarse intereses por demora en el pago.`,
          `La indemnización puede sustituirse por compensación en especie o pagos periódicos cuando resulte más adecuada, exista acuerdo con el interesado y sea conforme al interés público. No puede imponerse arbitrariamente una forma distinta del dinero.`,
          `En responsabilidad del Estado legislador por norma inconstitucional o contraria al Derecho de la Unión existen requisitos adicionales: sentencia firme desestimatoria previa, alegación de la infracción y límites temporales y materiales del artículo 32.`
        ]},
        { heading: '8. Inicio a solicitud y prescripción', paragraphs: [
          `La solicitud debe especificar lesiones, relación causal, evaluación económica si es posible, momento de producción y pruebas. Se acompañan documentos y se propone prueba. Si falta contenido esencial, procede subsanación.`,
          `El derecho a reclamar prescribe al año desde el hecho o acto que motive indemnización o desde manifestarse el efecto lesivo. En daños físicos o psíquicos, el año empieza desde curación o determinación del alcance de secuelas.`,
          `Si el daño deriva de anulación administrativa o judicial, el plazo anual cuenta desde la notificación de la resolución o sentencia definitiva en los términos legales. Presentar reclamación ante órgano incompetente de la misma Administración debe canalizarse correctamente y no rechazarse sin más.`
        ]},
        { heading: '9. Inicio de oficio, instrucción e informes', paragraphs: [
          `La Administración puede iniciar de oficio mientras no haya prescrito el derecho del afectado. El acuerdo se notifica y concede diez días para alegaciones, documentos y prueba. Aunque el perjudicado no comparezca, el procedimiento continúa.`,
          `Durante la instrucción se practican pruebas y se solicita informe al servicio cuyo funcionamiento causó la lesión, con plazo ordinario de diez días. Cuando la indemnización reclamada alcance la cuantía legal o el caso lo exija, se recaba dictamen del Consejo de Estado u órgano consultivo autonómico.`,
          `El dictamen se pronuncia sobre causalidad, valoración y cuantía y se emite dentro del plazo legal. La audiencia se concede antes de resolver, salvo que no se consideren hechos o documentos distintos de los aportados.`
        ]},
        { heading: '10. Resolución, silencio y procedimiento simplificado', paragraphs: [
          `La resolución debe declarar si existe causalidad, valorar el daño y fijar cuantía y modo de indemnización. En el ámbito local resuelve el órgano determinado por la legislación de régimen local y la distribución interna de competencias.`,
          `El plazo máximo ordinario para resolver responsabilidad patrimonial es seis meses. Transcurrido sin resolución, la reclamación puede entenderse desestimada, quedando abierta la impugnación, pero la Administración sigue obligada a resolver.`,
          `Puede utilizarse tramitación simplificada cuando sean inequívocos causalidad, valoración y cuantía. Debe respetar los trámites específicos y el plazo abreviado; si la cuestión se complica, se continúa por vía ordinaria.`
        ]},
        { heading: '11. Autoridades, empleados, contratistas y Derecho privado', paragraphs: [
          `El perjudicado reclama directamente a la Administración por daños de autoridades y personal. Una vez pagada la indemnización, la Administración exige de oficio al empleado cuando exista dolo o culpa o negligencia graves, ponderando daño, culpabilidad, responsabilidad profesional y conexión.`,
          `La responsabilidad penal del empleado y la civil derivada del delito se exigen conforme a legislación penal. El proceso penal no suspende automáticamente la reclamación patrimonial salvo que fijar hechos penales sea necesario para decidir responsabilidad administrativa.`,
          `Cuando la Administración actúa mediante entidad de Derecho privado, el régimen de los artículos 32 y siguientes continúa aplicándose. En contratos, debe distinguirse daño causado por orden inmediata y directa o vicio del proyecto administrativo de daños imputables al contratista conforme a la legislación contractual.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Requisitos: daño efectivo, evaluable e individualizado; antijuridicidad; imputación al servicio; causalidad; ausencia de fuerza mayor; reclamación en plazo.`,
          `Prescripción general: un año. Daño corporal: desde curación o secuelas. Resolución: seis meses; silencio desestimatorio.`,
          `El ciudadano reclama a la Administración, no directamente al empleado. La acción de regreso exige dolo o culpa o negligencia graves.`,
          `Anulación de un acto no genera indemnización automática. Funcionamiento normal también puede originar responsabilidad.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No confundir fuerza mayor con cualquier accidente imprevisible ni responsabilidad objetiva con responsabilidad automática.`,
          `El daño hipotético no se indemniza; el moral sí puede indemnizarse si es real y se acredita razonablemente.`,
          `Silencio desestimatorio permite recurrir, pero no elimina el deber de resolver. La fecha de producción del daño y la de estabilización de secuelas no siempre coinciden.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué seis comprobaciones deben realizarse antes de reconocer responsabilidad patrimonial?`,
          `2. ¿Desde cuándo se cuenta el año en daños físicos y en daños derivados de anulación de un acto?`,
          `3. ¿Por qué el particular reclama a la Administración y en qué supuesto responde después el empleado?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En casos prácticos construye una tabla con hecho, daño, causalidad, posible causa de ruptura, fecha de inicio del plazo, pruebas e importe. Si falta uno de estos elementos, no des por reconocida la responsabilidad.`,
          `En test memoriza artículos 32 a 37 de la Ley 40/2015 y 65, 67, 81, 91, 92 y 96 de la Ley 39/2015. Las opciones erróneas suelen convertir una regla condicionada en automática.`
        ]}
      ],
      tree: `RESPONSABILIDAD PATRIMONIAL
├─ Fundamento: art. 106.2 CE
├─ Requisitos
│  ├─ Daño efectivo, evaluable e individualizado
│  ├─ Antijurídico: sin deber de soportarlo
│  ├─ Funcionamiento normal o anormal
│  ├─ Relación causal
│  └─ Sin fuerza mayor
├─ Procedimiento
│  ├─ Solicitud o inicio de oficio
│  ├─ Prueba e informe del servicio
│  ├─ Audiencia y dictamen cuando proceda
│  └─ Resolución en seis meses
└─ Responsables
   ├─ Reclamación directa a la Administración
   └─ Regreso contra personal por dolo o culpa grave`,
      reviewTable: [
        ['Elemento', 'Regla de examen', 'Referencia'],
        ['Daño', 'Efectivo, evaluable e individualizado', 'Art. 32.2 LRJSP'],
        ['Antijuridicidad', 'No existe deber jurídico de soportarlo', 'Art. 32.1 LRJSP'],
        ['Funcionamiento', 'Normal o anormal', 'Art. 32.1 LRJSP'],
        ['Exclusión', 'Fuerza mayor y riesgos científicos inevitables', 'Arts. 32 y 34'],
        ['Prescripción', 'Un año con reglas especiales', 'Art. 67 LPAC'],
        ['Resolución', 'Causalidad, valoración, cuantía y forma', 'Art. 91 LPAC'],
        ['Silencio', 'Desestimatorio a los seis meses', 'Arts. 24 y 91 LPAC'],
        ['Personal', 'Reclamación directa a Administración; regreso por dolo o culpa grave', 'Art. 36 LRJSP']
      ]
    },
    7: {
      sources: [SOURCES.constitucion, SOURCES.ley40, SOURCES.ley39, SOURCES.lbrl],
      articleCoverage: [
        ['Arts. 25-31 Ley 40/2015', 'Legalidad, irretroactividad, tipicidad, responsabilidad, proporcionalidad, prescripción y concurrencia.'],
        ['Arts. 55-56 Ley 39/2015', 'Actuaciones previas y medidas provisionales.'],
        ['Arts. 60 y 62-64 Ley 39/2015', 'Orden superior, denuncia, inicio de oficio y contenido del acuerdo.'],
        ['Art. 85 Ley 39/2015', 'Reconocimiento de responsabilidad, pago voluntario y reducciones.'],
        ['Arts. 89-90 Ley 39/2015', 'Propuesta y resolución sancionadora.'],
        ['Art. 96.5 Ley 39/2015', 'Tramitación simplificada de procedimientos sancionadores.'],
        ['Arts. 139-141 LBRL', 'Tipificación local en defecto de normativa sectorial y límites de sanciones.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La potestad sancionadora permite a la Administración imponer consecuencias punitivas por infracciones administrativas, pero está sometida a reserva de ley, tipicidad, culpabilidad, proporcionalidad y procedimiento con garantías. Nadie puede ser sancionado sin norma previa y sin expediente.`,
          `La Ley 40/2015 contiene principios sustantivos y la Ley 39/2015 el procedimiento. En entidades locales debe añadirse el Título XI de la Ley 7/1985 cuando no exista normativa sectorial específica.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          ...[
            ['Art. 25 LRJSP', 'Potestad reconocida por ley y ejercida mediante procedimiento; remisión especial al Título XI local.'],
            ['Art. 26 LRJSP', 'Irretroactividad desfavorable y retroactividad favorable.'],
            ['Art. 27 LRJSP', 'Tipicidad de infracciones y sanciones y límites del reglamento.'],
            ['Art. 28 LRJSP', 'Responsabilidad por dolo o culpa y responsabilidad de personas físicas, jurídicas y grupos con capacidad.'],
            ['Art. 29 LRJSP', 'Proporcionalidad y prohibición de que sancionar resulte más beneficioso que cumplir.'],
            ['Arts. 30-31 LRJSP', 'Prescripción y prohibición de sancionar doblemente con identidad de sujeto, hecho y fundamento.'],
            ['Arts. 63-64 LPAC', 'Inicio siempre de oficio, separación entre instrucción y resolución y contenido del acuerdo.'],
            ['Arts. 85, 89 y 90 LPAC', 'Reconocimiento, pago, propuesta y resolución.']
          ].map(([range, focus]) => `${range}: ${focus}`)
        ]},
        { heading: '1. Potestad sancionadora y principio de legalidad', paragraphs: [
          `La potestad sancionadora debe estar expresamente reconocida por una norma con rango de ley y ejercerse por órgano competente siguiendo procedimiento. Un reglamento puede concretar o graduar, pero no crear infracciones o sanciones sin cobertura legal.`,
          `El principio de legalidad comprende reserva de ley, predeterminación normativa, competencia y procedimiento. En el ámbito local, las ordenanzas pueden tipificar infracciones y sanciones dentro del Título XI de la Ley de Bases cuando no exista regulación sectorial específica y se respeten sus criterios.`,
          `Las sanciones administrativas no pueden implicar privación de libertad. Su finalidad es proteger el interés público, no recaudar ni sustituir medidas de restablecimiento de legalidad.`
        ]},
        { heading: '2. Irretroactividad y norma sancionadora favorable', paragraphs: [
          `Se aplican las disposiciones sancionadoras vigentes cuando se produjeron los hechos. No puede castigarse una conducta que entonces no era infracción ni imponerse sanción más grave creada después.`,
          `Las disposiciones posteriores favorables tienen efecto retroactivo respecto de tipificación, sanción y plazos de prescripción, incluso para sanciones pendientes de cumplimiento al entrar en vigor.`,
          `Para decidir cuál es más favorable debe compararse el régimen completo aplicable al caso, sin construir una combinación artificial tomando fragmentos de normas distintas.`
        ]},
        { heading: '3. Tipicidad', paragraphs: [
          `Solo constituyen infracciones las vulneraciones previstas por ley, clasificadas en leves, graves y muy graves. Las sanciones también deben estar delimitadas por ley. La descripción debe permitir prever qué conducta se prohíbe.`,
          `El reglamento puede introducir especificaciones o graduaciones sin crear nuevas infracciones o sanciones ni alterar naturaleza o límites. La analogía está prohibida para extender tipos sancionadores a casos no previstos.`,
          `En una ordenanza municipal, la conducta debe encajar en una competencia local y en habilitación legal. Una cláusula genérica como “cualquier incumplimiento será sancionado” no satisface por sí sola la exigencia de tipicidad.`
        ]},
        { heading: '4. Responsabilidad y culpabilidad', paragraphs: [
          `Solo pueden sancionarse personas físicas, jurídicas y, cuando una ley les reconozca capacidad, grupos, uniones, patrimonios o entidades sin personalidad que resulten responsables a título de dolo o culpa. No existe responsabilidad objetiva sancionadora.`,
          `La culpabilidad puede consistir en intención o negligencia. La Administración debe acreditar hechos y participación; el presunto infractor conserva presunción de inocencia y derecho a no declarar contra sí mismo.`,
          `Cuando el cumplimiento corresponde conjuntamente a varias personas, pueden responder solidariamente si la ley lo prevé. Si la sanción es pecuniaria y resulta posible, debe individualizarse según participación.`
        ]},
        { heading: '5. Proporcionalidad y graduación', paragraphs: [
          `Las sanciones administrativas, pecuniarias o no, no pueden implicar privación de libertad. Deben ser idóneas, necesarias y adecuadas a gravedad, evitando que infringir resulte más beneficioso que cumplir.`,
          `La graduación atiende especialmente a culpabilidad o intencionalidad, continuidad o persistencia, naturaleza de perjuicios y reincidencia por más de una infracción de la misma naturaleza declarada firme dentro de un año.`,
          `El órgano puede imponer sanción de grado inferior si la adecuación entre gravedad y sanción lo justifica. Cuando una infracción deriva necesariamente en otra, se impone solo la correspondiente a la más grave; varias acciones u omisiones pueden constituir infracción continuada.`
        ]},
        { heading: '6. Prescripción', paragraphs: [
          `Los plazos de prescripción de infracciones y sanciones son los fijados por leyes sectoriales. En defecto, las infracciones muy graves prescriben a los tres años, graves a los dos y leves a los seis meses; las sanciones muy graves a los tres años, graves a los dos y leves al año.`,
          `La infracción prescribe desde comisión; en continuadas o permanentes, desde que finaliza conducta. Interrumpe la iniciación conocida del procedimiento y se reanuda si permanece paralizado más de un mes por causa no imputable al presunto responsable.`,
          `La sanción prescribe desde que es ejecutable o vence el plazo para recurrirla. Interrumpe la iniciación conocida de ejecución; si el recurso de alzada fue desestimado por silencio, el plazo de prescripción comienza al día siguiente de finalizar el plazo legal de resolución.`
        ]},
        { heading: '7. Non bis in idem y concurrencia', paragraphs: [
          `No pueden sancionarse hechos ya sancionados penal o administrativamente cuando exista identidad de sujeto, hecho y fundamento. Deben concurrir las tres identidades.`,
          `La preferencia penal y vinculación a hechos probados judicialmente se aplican conforme a la legislación. Si existe proceso penal por los mismos hechos, la Administración debe coordinar la tramitación y evitar contradicciones.`,
          `No toda concurrencia de medidas vulnera el principio: una sanción puede coexistir con restitución de legalidad, indemnización o multa coercitiva porque estas últimas no tienen necesariamente naturaleza punitiva.`
        ]},
        { heading: '8. Actuaciones previas, denuncia e inicio', paragraphs: [
          `Antes de iniciar pueden practicarse actuaciones previas para determinar hechos, posibles responsables y circunstancias. En sancionadores las realizan órganos con funciones de investigación o inspección.`,
          `La denuncia comunica hechos; debe identificar denunciante cuando sea exigible y narrar conductas. No obliga siempre a iniciar ni convierte automáticamente en interesado, aunque la Administración debe comunicar la decisión cuando corresponda.`,
          `El procedimiento sancionador se inicia siempre de oficio por órgano competente: propia iniciativa, orden superior, petición razonada o denuncia. No puede abrirse uno nuevo por una conducta infractora continuada mientras no exista primera resolución ejecutiva.`
        ]},
        { heading: '9. Acuerdo de iniciación y garantías', paragraphs: [
          `El acuerdo identifica presuntos responsables, hechos, posible calificación y sanciones, instructor y secretario, órgano resolutor y norma de competencia, medidas provisionales, derecho de alegar y plazos. Se comunica al instructor y se notifica al inculpado.`,
          `Instructor y órgano sancionador deben ser distintos. El interesado puede promover recusación. Si faltan elementos para calificación inicial, excepcionalmente puede notificarse después pliego de cargos.`,
          `Si el acuerdo contiene pronunciamiento preciso sobre responsabilidad y el interesado no formula alegaciones, puede considerarse propuesta de resolución. Esta consecuencia debe indicarse expresamente.`
        ]},
        { heading: '10. Instrucción, prueba y propuesta', paragraphs: [
          `El instructor practica actuaciones necesarias, respeta presunción de inocencia y valora pruebas. Los hechos constatados por funcionarios con condición de autoridad en documentos formalizados tienen valor probatorio en los términos legales, sin impedir prueba en contrario.`,
          `Concluida instrucción, si no existen hechos o no se acreditan, no hay responsables, la infracción prescribió o falta responsabilidad, puede archivarse mediante resolución motivada.`,
          `Si procede sanción se formula propuesta con hechos probados, calificación, responsable, sanción, valoración de prueba y medidas. Se notifica y se concede audiencia antes de elevar al órgano resolutor.`
        ]},
        { heading: '11. Reconocimiento, pago y reducciones', paragraphs: [
          `Iniciado el procedimiento, el infractor puede reconocer responsabilidad, lo que permite resolver con sanción. Si la sanción es solo pecuniaria o existe otra no pecuniaria improcedente, el pago voluntario antes de resolución termina el procedimiento salvo reposición e indemnización.`,
          `Cuando sanción sea pecuniaria, el órgano aplica reducciones de al menos veinte por ciento por reconocimiento y al menos veinte por ciento por pago, acumulables, salvo norma con porcentajes superiores.`,
          `La efectividad de reducciones queda condicionada a desistir o renunciar a acciones o recursos administrativos contra la sanción. El acuerdo de inicio debe informar porcentajes y condiciones.`
        ]},
        { heading: '12. Resolución, ejecutividad, caducidad y simplificado', paragraphs: [
          `La resolución no puede aceptar hechos distintos de los determinados en el procedimiento, aunque puede variar valoración jurídica. Si considera infracción o sanción más grave que propuesta, debe dar audiencia.`,
          `La resolución es ejecutiva cuando no cabe recurso administrativo ordinario. Puede adoptar medidas cautelares para garantizar eficacia mientras no sea ejecutiva. Si el interesado anuncia recurso contencioso, la suspensión cautelar puede mantenerse en los términos legales.`,
          `El vencimiento del plazo máximo en procedimiento sancionador iniciado de oficio produce caducidad y archivo. La caducidad no interrumpe por sí misma prescripción. La tramitación simplificada puede utilizarse cuando el órgano inicial aprecia que la infracción es leve.`
        ]},
        { heading: '13. Potestad sancionadora local', paragraphs: [
          `Las entidades locales sancionan dentro de sus competencias y con cobertura legal. La legislación sectorial —urbanismo, tráfico, residuos, comercio, ruido— prevalece cuando regula infracciones y sanciones.`,
          `En defecto de normativa sectorial, los artículos 139 a 141 de la LBRL permiten que ordenanzas tipifiquen infracciones por vulneración de relaciones de convivencia, servicios, equipamientos, infraestructuras e instalaciones y uso de espacio público, dentro de criterios legales.`,
          `Las cuantías máximas del artículo 141 se aplican salvo previsión legal distinta. La ordenanza debe describir conducta, clasificación, sanción y criterios; no basta remisión genérica a cualquier incumplimiento.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Principios: legalidad, irretroactividad favorable, tipicidad, culpabilidad, proporcionalidad, prescripción y non bis in idem.`,
          `Inicio siempre de oficio; instrucción y resolución por órganos distintos; ninguna sanción sin procedimiento.`,
          `Reconocimiento y pago pueden reducir sanción pecuniaria al menos un veinte por ciento cada uno.`,
          `Caducidad archiva el procedimiento, pero no equivale a prescripción. La sanción no es ejecutiva mientras quepa recurso administrativo ordinario.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No confundir sanción, multa coercitiva, indemnización y reposición de legalidad. Solo la primera tiene finalidad punitiva.`,
          `El denunciante no es siempre interesado; el procedimiento no se inicia a solicitud del denunciante, sino de oficio.`,
          `La responsabilidad sancionadora exige dolo o culpa. La norma posterior favorable sí puede aplicarse retroactivamente.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué identidad triple exige el non bis in idem?`,
          `2. ¿Qué contenido mínimo debe tener el acuerdo de iniciación sancionador?`,
          `3. ¿Qué efectos tienen reconocimiento y pago voluntario y qué condición se vincula a las reducciones?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En cada caso verifica norma habilitante, tipo, autor, culpabilidad, prescripción, órgano, separación de fases, audiencia, proporcionalidad y ejecutividad.`,
          `En test descarta opciones que permitan sancionar por analogía, sin ley, sin expediente o con responsabilidad objetiva. En plazos, distingue prescripción de infracción, prescripción de sanción y caducidad del procedimiento.`
        ]}
      ],
      tree: `POTESTAD SANCIONADORA
├─ Principios sustantivos
│  ├─ Legalidad y tipicidad
│  ├─ Irretroactividad / favorabilidad
│  ├─ Culpabilidad
│  ├─ Proporcionalidad
│  ├─ Prescripción
│  └─ Non bis in idem
├─ Procedimiento
│  ├─ Inicio siempre de oficio
│  ├─ Instructor distinto del resolutor
│  ├─ Prueba, propuesta y audiencia
│  └─ Resolución y ejecutividad
└─ Especialidades
   ├─ Reconocimiento y pago
   ├─ Caducidad
   ├─ Simplificado para leves
   └─ Ordenanzas locales con habilitación legal`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Legalidad', 'Potestad reconocida por ley', 'Art. 25 LRJSP'],
        ['Favorabilidad', 'Retroactividad de norma sancionadora más favorable', 'Art. 26'],
        ['Tipicidad', 'Sin analogía ni creación reglamentaria autónoma', 'Art. 27'],
        ['Culpabilidad', 'Dolo o culpa', 'Art. 28'],
        ['Proporcionalidad', 'Idoneidad, necesidad y adecuación', 'Art. 29'],
        ['Prescripción supletoria', '3 años/2 años/6 meses para infracciones', 'Art. 30'],
        ['Inicio', 'Siempre de oficio y con separación de fases', 'Art. 63 LPAC'],
        ['Reducciones', 'Mínimo 20 % + 20 % en sanción pecuniaria', 'Art. 85 LPAC'],
        ['Régimen local', 'Título XI en defecto de norma sectorial', 'Arts. 139-141 LBRL']
      ]
    },
    8: {
      sources: [SOURCES.lbrl, SOURCES.servicios, SOURCES.ley39, SOURCES.accesoServicios, SOURCES.unidadMercado],
      articleCoverage: [
        ['Arts. 4 y 84-86 LBRL', 'Potestades locales, medios de intervención, licencias, comunicaciones y gestión de servicios.'],
        ['Arts. 84 bis y 84 ter LBRL', 'Excepcionalidad de licencia en actividades económicas y verificación posterior.'],
        ['Arts. 9-17 Reglamento de Servicios', 'Procedimiento supletorio tradicional de licencias y control de actos particulares.'],
        ['Arts. 69 y 21-24 Ley 39/2015', 'Declaración responsable, comunicación, resolución y silencio.'],
        ['Ley 17/2009', 'Libertad de establecimiento, necesidad, proporcionalidad y simplificación.'],
        ['Ley 20/2013', 'Unidad de mercado y límites a requisitos de acceso y ejercicio.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La actividad administrativa suele clasificarse en fomento, policía o intervención y servicio público. Fomento incentiva conductas privadas de interés general; policía limita o controla actividades para proteger intereses públicos; servicio público presta utilidades a la comunidad.`,
          `El procedimiento de licencia debe estudiarse con la regla actual: para actividades económicas la licencia previa es excepcional y necesita razón imperiosa de interés general, proporcionalidad y ausencia de medio menos restrictivo. En muchos casos operan declaración responsable, comunicación y control posterior.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          ...[
            ['Art. 84 LBRL', 'Enumera ordenanzas y bandos, licencias y controles, declaración responsable, comunicación, control posterior y órdenes individuales.'],
            ['Art. 84 bis LBRL', 'Establece como regla que actividades económicas no se someten a licencia previa y fija excepciones.'],
            ['Art. 84 ter LBRL', 'Exige procedimientos de comunicación y verificación posterior cuando no haya autorización previa.'],
            ['Arts. 85-86 LBRL', 'Concepto y gestión de servicios públicos locales e iniciativa económica y reservas.'],
            ['Art. 69 LPAC', 'Efectos y requisitos de declaración responsable y comunicación.'],
            ['Arts. 9-17 RSCL', 'Procedimiento supletorio de licencias cuando no exista regulación especial aplicable.'],
            ['Ley 17/2009', 'Necesidad, proporcionalidad y simplificación para actividades de servicios.'],
            ['Ley 20/2013', 'Garantías de acceso y ejercicio y cooperación entre autoridades.']
          ].map(([range, focus]) => `${range}: ${focus}`)
        ]},
        { heading: '1. Clasificación de la actividad administrativa', paragraphs: [
          `La clasificación clásica distingue actividad de fomento, intervención o policía y servicio público. Es una herramienta de estudio, porque una actuación puede combinar categorías. Una subvención fomenta; una licencia controla; una biblioteca municipal presta un servicio.`,
          `Toda actividad requiere competencia, procedimiento, finalidad pública y respeto a igualdad y proporcionalidad. El Ayuntamiento no puede intervenir por simple conveniencia sin habilitación.`,
          `La elección del instrumento importa: si basta control posterior, una licencia previa puede ser desproporcionada. Si existe riesgo grave para seguridad, salud o medio ambiente, el control preventivo puede estar justificado.`
        ]},
        { heading: '2. Actividad de fomento', paragraphs: [
          `El fomento estimula actividades privadas útiles sin convertirlas en servicio público ni imponerlas coactivamente. Sus técnicas incluyen subvenciones, premios, becas, ayudas, beneficios fiscales dentro de ley, cesión temporal de medios, campañas o reconocimiento.`,
          `Las subvenciones se someten a legalidad presupuestaria, publicidad, concurrencia, objetividad, igualdad, eficacia y control. La concesión directa es excepcional y necesita cobertura. Beneficiario debe justificar destino, someterse a control y reintegrar cuando incumple.`,
          `Fomento no permite discriminar ni favorecer arbitrariamente. Bases reguladoras deben definir objeto, beneficiarios, criterios, cuantía, obligaciones, justificación, compatibilidad, control y reintegro.`
        ]},
        { heading: '3. Actividad de policía o intervención', paragraphs: [
          `La intervención limita o condiciona derechos y actividades para proteger seguridad, salubridad, medio ambiente, urbanismo, convivencia, patrimonio o consumidores. Puede ejercerse mediante normas, licencias, declaraciones responsables, comunicaciones, inspección, órdenes y sanciones.`,
          `Debe respetar igualdad, necesidad y proporcionalidad, elegir medida menos restrictiva y justificar su adecuación. No pueden imponerse requisitos duplicados o desconectados del riesgo.`,
          `Control preventivo examina antes de iniciar; control posterior verifica después. La declaración responsable no elimina requisitos sustantivos ni potestad inspectora; desplaza el momento de control.`
        ]},
        { heading: '4. Servicio público local', paragraphs: [
          `Son servicios públicos locales los que prestan entidades locales dentro de sus competencias. Deben gestionarse de la forma más sostenible y eficiente entre las previstas por la ley.`,
          `La gestión directa puede realizarse por propia entidad, organismo autónomo, entidad pública empresarial o sociedad mercantil local, con requisitos. La indirecta utiliza modalidades contractuales admitidas por legislación de contratos.`,
          `En todo servicio deben definirse continuidad, igualdad, calidad, financiación, derechos de usuarios, tarifas o prestaciones y control. Gestión indirecta no libera al Ayuntamiento de asegurar cumplimiento.`
        ]},
        { heading: '5. Iniciativa económica y reserva de servicios', paragraphs: [
          `Las entidades locales pueden ejercer iniciativa pública económica dentro de estabilidad y sostenibilidad, acreditando conveniencia y oportunidad mediante expediente. El pleno decide.`,
          `Determinados servicios esenciales están reservados a entidades locales en los términos del artículo 86, sin que reserva signifique necesariamente gestión directa exclusiva en todos los casos.`,
          `La iniciativa económica se somete a competencia, no discriminación y normas de mercado. Debe distinguirse servicio obligatorio, servicio reservado, actividad económica municipal y mera colaboración con privados.`
        ]},
        { heading: '6. Medios de intervención del artículo 84 LBRL', paragraphs: [
          `Las entidades locales pueden intervenir mediante ordenanzas y bandos; licencia y otros controles preventivos; declaración responsable o comunicación; control posterior; y órdenes individuales constitutivas de mandato de hacer o prohibición.`,
          `Cada medio necesita base competencial y debe ser congruente con motivo. La acumulación de controles equivalentes por varias autoridades debe evitarse mediante coordinación.`,
          `Ordenanza establece marco general; licencia reconoce que un proyecto cumple; declaración manifiesta cumplimiento; comunicación informa; inspección comprueba; orden exige conducta concreta; sanción castiga infracción.`
        ]},
        { heading: '7. Licencia: naturaleza y efectos', paragraphs: [
          `La licencia es acto administrativo de control preventivo que verifica compatibilidad de una actividad, obra o uso con normativa. Normalmente es reglada: si se cumplen requisitos debe concederse; si no, denegarse motivadamente.`,
          `No crea el derecho material cuando este deriva de propiedad o libertad de empresa, sino que remueve el obstáculo administrativo al comprobar requisitos. Se entiende otorgada salvo derecho de propiedad y sin perjuicio de terceros.`,
          `Las licencias son transmisibles o no según naturaleza y norma sectorial. Pueden someterse a condiciones legales, no a condiciones arbitrarias ajenas al control. Caducidad y revocación requieren causa, procedimiento y audiencia.`
        ]},
        { heading: '8. Regla general de no sometimiento a licencia', paragraphs: [
          `El artículo 84 bis dispone que, con carácter general, las actividades no se someten a licencia u otro control preventivo. La excepción debe justificarse por protección de medio ambiente o entorno urbano, seguridad o salud, patrimonio histórico u otra razón imperiosa de interés general, y ser proporcionada.`,
          `También puede justificarse por escasez de recursos naturales, dominio público, impedimentos técnicos inequívocos o servicios sujetos a tarifas reguladas cuando el número de operadores deba limitarse.`,
          `No puede exigirse licencia por instalaciones físicas solo porque una actividad esté sujeta a autorización de otra Administración, salvo riesgo adicional concreto. Debe elegirse un único medio de intervención cuando varios persiguen la misma finalidad.`
        ]},
        { heading: '9. Declaración responsable y comunicación', paragraphs: [
          `La declaración responsable es documento en que interesado manifiesta bajo responsabilidad que cumple requisitos, dispone de documentación, la aportará cuando se requiera y mantendrá cumplimiento. Produce efectos desde presentación salvo norma.`,
          `La comunicación pone en conocimiento datos relevantes para iniciar actividad o ejercer derecho. Una norma puede permitir comunicación posterior dentro de plazo. Para una misma actividad no se exige simultáneamente declaración y comunicación salvo aspectos diferentes previstos.`,
          `Inexactitud, falsedad u omisión esencial o no presentación impide continuar desde conocimiento, sin perjuicio de responsabilidades, restitución y posible imposibilidad temporal de nuevo procedimiento. El Ayuntamiento debe planificar verificación posterior.`
        ]},
        { heading: '10. Procedimiento para concesión de licencia', paragraphs: [
          `Primero se identifica norma sectorial y órgano competente. La solicitud debe describir actividad y aportar proyecto o documentación técnica cuando proceda. Registro emite recibo y se revisa integridad; si falta documentación, se requiere subsanación.`,
          `Se solicitan informes técnicos y jurídicos necesarios, evitando duplicidades. Puede existir audiencia si aparecen hechos o condicionantes no aportados. La resolución debe ser congruente, motivar denegación o condiciones e indicar recursos.`,
          `El Reglamento de Servicios contiene un procedimiento supletorio tradicional, pero cede ante normativa posterior, sectorial y electrónica. No debe aplicarse mecánicamente un precepto antiguo si ha sido desplazado por ley estatal, autonómica o municipal vigente.`
        ]},
        { heading: '11. Plazo, silencio y eficacia', paragraphs: [
          `El plazo es el de la norma específica y, en defecto, el general de la Ley 39/2015. El Ayuntamiento debe resolver expresamente. El silencio se determina por legislación sectorial y artículo 24, teniendo en cuenta que no pueden adquirirse por silencio facultades contrarias al ordenamiento.`,
          `En licencias urbanísticas, ambientales, dominio público u otras materias existen reglas especiales y excepciones al silencio positivo. Nunca debe responderse solo con la fórmula general sin identificar materia.`,
          `La eficacia puede depender de notificación, cumplimiento de condiciones, pago de tasa cuando la ley lo prevé o presentación de garantías. La tasa no debe confundirse con requisito sustantivo de legalidad.`
        ]},
        { heading: '12. Inspección y restablecimiento de legalidad', paragraphs: [
          `Tras declaración o licencia, la Administración inspecciona. El interesado debe facilitar acceso en los términos legales y aportar documentación. Actas de inspección tienen valor probatorio según normativa, con posibilidad de contradicción.`,
          `Si hay incumplimiento, pueden ordenarse cese, suspensión, restauración, retirada o medidas cautelares. Estas medidas no son necesariamente sanciones y pueden coexistir con expediente sancionador.`,
          `La actuación debe ser proporcionada y motivada. El cierre inmediato sin audiencia solo es admisible cuando existe habilitación y urgencia, con posterior ratificación y garantías.`
        ]},
        { heading: '13. Coordinación, simplificación y unidad de mercado', paragraphs: [
          `La Ley 17/2009 exige que autorizaciones para servicios se justifiquen por no discriminación, necesidad y proporcionalidad. Los procedimientos deben ser claros, objetivos, públicos y accesibles electrónicamente.`,
          `La Ley 20/2013 refuerza libertad de acceso y ejercicio, cooperación y eliminación de requisitos innecesarios. Su aplicación debe ajustarse a jurisprudencia constitucional y distribución competencial.`,
          `La simplificación no rebaja protección material: sustituye cargas previas por responsabilidad del operador y control eficaz. La Administración debe disponer de medios de inspección y sistemas de intercambio de información.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Fomento incentiva; policía limita o controla; servicio público presta utilidades colectivas.`,
          `Licencia previa es excepción para actividades económicas y necesita necesidad y proporcionalidad.`,
          `Declaración responsable permite iniciar bajo responsabilidad; comunicación informa; ambas admiten control posterior.`,
          `La licencia es reglada y se concede sin perjuicio de terceros. No puede adquirirse por silencio lo contrario al ordenamiento.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No confundir declaración responsable con autorización tácita: el interesado afirma cumplimiento y asume responsabilidad.`,
          `El Reglamento de Servicios no desplaza leyes posteriores ni normativa sectorial.`,
          `Una orden de cierre, una sanción y una medida de restablecimiento tienen naturaleza y procedimiento diferentes.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuáles son los cinco medios de intervención local del artículo 84?`,
          `2. ¿Qué condiciones justifican excepcionalmente una licencia previa para actividad económica?`,
          `3. ¿Qué diferencia existe entre licencia, declaración responsable, comunicación y control posterior?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En casos de licencia identifica actividad, normativa sectorial, competencia, instrumento adecuado, documentos, informes, plazo, silencio y control posterior.`,
          `En test actualiza la visión clásica: no toda actividad necesita licencia. La respuesta correcta suele depender de necesidad, proporcionalidad y medio menos restrictivo.`
        ]}
      ],
      tree: `FORMAS DE ACTUACIÓN ADMINISTRATIVA
├─ Fomento
│  └─ Ayudas, subvenciones, premios e incentivos
├─ Policía o intervención
│  ├─ Ordenanzas y bandos
│  ├─ Licencia excepcional y proporcionada
│  ├─ Declaración responsable / comunicación
│  ├─ Inspección posterior
│  └─ Órdenes y restablecimiento
└─ Servicio público
   ├─ Gestión directa
   ├─ Gestión indirecta contractual
   └─ Continuidad, igualdad, calidad y control`,
      reviewTable: [
        ['Figura', 'Función', 'Clave'],
        ['Fomento', 'Incentiva actividad privada de interés general', 'No impone ni convierte en servicio público'],
        ['Policía', 'Limita y controla', 'Legalidad y proporcionalidad'],
        ['Servicio público', 'Presta utilidad colectiva', 'Continuidad e igualdad'],
        ['Licencia', 'Control previo reglado', 'Excepcional en actividad económica'],
        ['Declaración responsable', 'Manifestación de cumplimiento', 'Efectos desde presentación y control posterior'],
        ['Comunicación', 'Puesta en conocimiento', 'No equivale a resolución'],
        ['Silencio', 'Depende de norma sectorial', 'No legitima lo contrario a Derecho'],
        ['Inspección', 'Verificación posterior', 'Compatible con restauración y sanción']
      ]
    },
    9: {
      sources: [SOURCES.constitucion, SOURCES.lbrl, SOURCES.poblacion],
      articleCoverage: [
        ['Arts. 137, 140 y 141 CE', 'Autonomía local, gobierno municipal y provincia.'],
        ['Arts. 3-7 LBRL', 'Entidades locales, potestades y tipos de competencia.'],
        ['Arts. 11-18 LBRL', 'Municipio, término, población, padrón y derechos y deberes vecinales.'],
        ['Arts. 25-27 LBRL', 'Competencias propias, servicios mínimos y delegación.'],
        ['Arts. 42-45 LBRL', 'Comarcas, áreas metropolitanas, mancomunidades y entidades inferiores.'],
        ['Reglamento de Población y Demarcación', 'Alteraciones territoriales, padrón, gestión y revisión.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El municipio es la entidad local básica, con personalidad y capacidad. Sus elementos son territorio, población y organización. El tema exige dominar término municipal, padrón y condición de vecino, competencias y otras entidades locales.`,
          `En un supuesto de padrón o competencia debe diferenciarse dato fáctico —residencia— de situación jurídica distinta. Empadronarse no regulariza extranjería ni prueba propiedad; acredita residencia y domicilio habitual a efectos administrativos.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          ...[
            ['Art. 11 LBRL', 'Municipio como entidad básica y sus tres elementos.'],
            ['Arts. 12-14 LBRL', 'Término municipal, alteración y denominación/capitalidad.'],
            ['Arts. 15-18 LBRL', 'Población, padrón, condición de vecino y derechos y deberes.'],
            ['Art. 25 LBRL', 'Cláusula general y materias de competencias propias.'],
            ['Art. 26 LBRL', 'Servicios mínimos según población.'],
            ['Art. 27 LBRL', 'Delegación de competencias y garantías.'],
            ['Arts. 42-45 LBRL', 'Otras entidades locales de agrupación o ámbito inferior.'],
            ['RD 1690/1986', 'Desarrollo reglamentario de territorio, población y padrón.']
          ].map(([range, focus]) => `${range}: ${focus}`)
        ]},
        { heading: '1. Concepto y autonomía municipal', paragraphs: [
          `El municipio es entidad local básica de la organización territorial, con personalidad jurídica y plena capacidad para sus fines. La Constitución garantiza autonomía y gobierno por ayuntamientos integrados por alcalde y concejales.`,
          `Autonomía no es soberanía. El municipio actúa dentro de competencias atribuidas por ley y está sujeto a controles de legalidad, estabilidad y tutela judicial.`,
          `La capacidad incluye adquirir y poseer bienes, contratar, establecer tributos dentro de ley, ejercer acciones, prestar servicios y dictar normas en materias propias.`
        ]},
        { heading: '2. Elementos del municipio', paragraphs: [
          `Los elementos son territorio, población y organización. Si falta uno, no existe municipio como entidad completa. El término delimita ámbito espacial; la población está formada por inscritos; la organización adopta decisiones y presta servicios.`,
          `El Ayuntamiento es la organización de gobierno y administración, no sinónimo estricto de municipio. Municipio es entidad; Ayuntamiento es su órgano de gobierno básico.`,
          `En test, “alcalde, pleno y junta” son órganos, no elementos. “Provincia, comarca y municipio” son entidades o divisiones, no los tres elementos municipales.`
        ]},
        { heading: '3. Término municipal', paragraphs: [
          `El término municipal es territorio donde Ayuntamiento ejerce competencias. Cada municipio pertenece a una sola provincia. Puede contener núcleos, barrios, urbanizaciones y territorios discontinuos reconocidos.`,
          `La división en distritos o barrios es competencia municipal y no crea nuevos municipios. Los cambios de límites se rigen por legislación autonómica y reglamento estatal básico o supletorio.`,
          `La delimitación importa para padrón, servicios, potestad tributaria, urbanismo, policía y elecciones. Un servicio situado fuera del término requiere título de cooperación o competencia adecuada.`
        ]},
        { heading: '4. Alteración de términos y creación de municipios', paragraphs: [
          `Las alteraciones pueden producirse por incorporación, fusión, segregación para crear municipio o segregación para agregar a otro limítrofe. Se exige continuidad o condiciones legales, recursos suficientes y que no disminuya calidad de servicios.`,
          `La competencia corresponde a la comunidad autónoma conforme a legislación. El expediente incluye iniciativa, memoria, documentación, audiencia, información pública, acuerdos con mayorías y dictamen consultivo cuando proceda.`,
          `La alteración implica reparto de bienes, derechos, deudas, personal y servicios. No puede utilizarse para privar a municipios resultantes de viabilidad ni alterar límites provinciales sin requisitos constitucionales y legales.`
        ]},
        { heading: '5. Población municipal y condición de vecino', paragraphs: [
          `Toda persona que vive en España debe inscribirse en padrón del municipio donde reside habitualmente. Quien vive en varios se inscribe donde pasa más tiempo al año. El conjunto de inscritos constituye población y los inscritos son vecinos desde inscripción.`,
          `La condición de vecino se adquiere en el momento de inscripción. No depende de nacionalidad, mayoría de edad, propiedad o situación administrativa de extranjería.`,
          `El padrón debe reflejar realidad. La inscripción no crea por sí sola derechos de residencia legal ni propiedad, pero facilita acceso a servicios y ejercicio de derechos conforme a normativa.`
        ]},
        { heading: '6. Padrón municipal: naturaleza y contenido', paragraphs: [
          `El padrón es registro administrativo donde constan vecinos. Sus datos prueban residencia y domicilio habitual. Las certificaciones tienen carácter de documento público y fehaciente para efectos administrativos.`,
          `Contiene datos obligatorios legalmente previstos: nombre, sexo, domicilio, nacionalidad, lugar y fecha de nacimiento, identificación, estudios y otros necesarios para censo electoral, con límites.`,
          `Los datos se ceden a otras Administraciones sin consentimiento solo cuando sean necesarios para sus competencias y residencia o domicilio sean relevantes, además de usos estadísticos y electorales permitidos. Debe respetarse protección de datos.`
        ]},
        { heading: '7. Altas, bajas y modificaciones', paragraphs: [
          `El alta se solicita por residencia habitual y debe acreditarse identidad y domicilio con medios razonables. Ayuntamiento puede comprobar veracidad sin imponer requisitos que vacíen obligación de empadronarse.`,
          `Las bajas pueden producirse por cambio de residencia, defunción, inscripción indebida o caducidad en casos previstos para extranjeros no comunitarios sin residencia permanente. La baja de oficio exige expediente y garantías.`,
          `Los vecinos deben comunicar cambios. Ayuntamiento actualiza nomenclátor, numeración y datos y realiza revisiones y comprobaciones. El Instituto Nacional de Estadística coordina y resuelve discrepancias en los términos legales.`
        ]},
        { heading: '8. Extranjeros y renovación padronal', paragraphs: [
          `La inscripción de extranjeros no constituye prueba de residencia legal ni atribuye derechos distintos de los reconocidos por ley. Debe reflejar residencia de hecho.`,
          `Determinados extranjeros no comunitarios sin autorización de residencia de larga duración deben renovar periódicamente; la falta de renovación puede producir caducidad conforme al procedimiento.`,
          `Los ciudadanos de la Unión y asimilados están sujetos a comprobaciones y régimen específico, pero no deben confundirse padrón, registro de extranjeros y censo electoral.`
        ]},
        { heading: '9. Derechos y deberes de los vecinos', paragraphs: [
          `Los vecinos pueden ser electores y elegibles según legislación electoral, participar en gestión, utilizar servicios y aprovechamientos comunales, contribuir mediante prestaciones legales, exigir servicios obligatorios, solicitar consulta popular y ejercer iniciativa popular en los términos legales.`,
          `Deben contribuir con prestaciones económicas y personales legalmente previstas, respetar ordenanzas, colaborar y cumplir deberes derivados de convivencia y servicios.`,
          `Los derechos concretos dependen de requisitos sectoriales. Empadronamiento es punto de conexión, pero no garantiza automáticamente plaza, ayuda o prestación si faltan condiciones.`
        ]},
        { heading: '10. Competencias: clasificación', paragraphs: [
          `Las competencias locales son propias, delegadas o distintas de propias y delegadas. Las propias se ejercen en autonomía y responsabilidad, con coordinación legal. Las delegadas se ejercen en términos de disposición o acuerdo de delegación.`,
          `Las competencias distintas solo pueden ejercerse si no ponen en riesgo sostenibilidad financiera y no existe ejecución simultánea del mismo servicio por otra Administración, con informes previos exigidos.`,
          `Competencia no equivale a actividad libre. La ley debe determinarla, evaluar conveniencia local y dotación financiera y evitar duplicidades. El municipio puede promover actividades y servicios dentro de sus competencias para necesidades vecinales.`
        ]},
        { heading: '11. Materias propias y servicios mínimos', paragraphs: [
          `El artículo 25 enumera materias donde la legislación atribuye competencias: urbanismo, medio ambiente urbano, agua, infraestructura viaria, atención social inmediata, policía local, tráfico, turismo local, ferias, mercados, salubridad, cementerios, deporte, cultura, participación educativa y otras.`,
          `El artículo 26 fija servicios mínimos según población. Todos: alumbrado, cementerio, residuos, limpieza viaria, agua, alcantarillado, acceso a núcleos y pavimentación. A partir de 5.000 habitantes se añaden parque, biblioteca y tratamiento de residuos; a partir de 20.000, protección civil, evaluación social, incendios e instalaciones deportivas; a partir de 50.000, transporte colectivo y medio ambiente urbano.`,
          `La provincia coordina determinados servicios en municipios de menos de 20.000 habitantes conforme a ley, respetando propuesta municipal y costes efectivos.`
        ]},
        { heading: '12. Delegación de competencias', paragraphs: [
          `Estado y comunidades autónomas pueden delegar competencias para mejorar eficiencia, eliminar duplicidades y respetar estabilidad. La delegación debe determinar alcance, contenido, condiciones, duración —por regla general no inferior a cinco años—, control y medios personales, materiales y económicos.`,
          `Debe acompañarse financiación suficiente y no puede implicar mayor gasto municipal sin cobertura. La aceptación corresponde al municipio salvo imposición legal con dotación.`,
          `Administración delegante puede dictar instrucciones, recabar información, enviar comisionados, formular requerimientos y revocar o ejecutar sustitutoriamente en términos del acuerdo.`
        ]},
        { heading: '13. Otras entidades locales', paragraphs: [
          `Además del municipio son entidades locales territoriales la provincia y la isla. También pueden existir comarcas u otras agrupaciones, áreas metropolitanas y mancomunidades, según legislación autonómica y estatal.`,
          `La comarca agrupa municipios con intereses comunes; el área metropolitana integra grandes aglomeraciones para planificación y servicios; la mancomunidad es asociación voluntaria de municipios para obras o servicios de competencia. Sus estatutos regulan fines, órganos, recursos y plazo.`,
          `Las entidades de ámbito territorial inferior al municipio se rigen por legislación autonómica y, tras reformas, suelen carecer de personalidad jurídica propia salvo regímenes transitorios o especiales. Debe comprobarse normativa de Castilla-La Mancha antes de atribuirles personalidad o potestades.`
        ]},
        { heading: '14. Provincia y cooperación municipal', paragraphs: [
          `La provincia es entidad local formada por agrupación de municipios y división territorial para actividades del Estado. Tiene personalidad y autonomía para intereses propios.`,
          `Sus fines esenciales son solidaridad y equilibrio intermunicipal, asegurar prestación integral y adecuada y participar en coordinación local con otras Administraciones.`,
          `Diputación presta asistencia jurídica, económica y técnica, coopera en servicios, coordina, recauda o gestiona por delegación y apoya especialmente municipios pequeños.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Municipio: entidad básica con territorio, población y organización. Ayuntamiento: órgano de gobierno.`,
          `Padrón prueba residencia y domicilio habitual; no prueba residencia legal de extranjeros ni propiedad.`,
          `Competencias: propias, delegadas y distintas bajo condiciones. Servicios mínimos aumentan con población.`,
          `Otras entidades: provincia, isla, comarca, área metropolitana, mancomunidad y entidades inferiores según normativa.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Vecino se adquiere con inscripción, no con propiedad. Padrón no es censo electoral ni registro de extranjería.`,
          `Autonomía municipal no es soberanía ni competencia universal.`,
          `Mancomunidad es voluntaria; comarca y área metropolitana dependen de legislación autonómica. No atribuyas automáticamente personalidad a toda entidad inframunicipal.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuáles son los tres elementos del municipio y qué función cumple cada uno?`,
          `2. ¿Qué acredita el padrón y qué no acredita respecto de extranjeros?`,
          `3. ¿Cómo se distinguen competencias propias, delegadas y distintas y cuáles son los servicios mínimos de todo municipio?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Para padrón, separa identidad, residencia de hecho, inscripción, condición de vecino, efectos, protección de datos y posible baja.`,
          `Para competencias, identifica Administración, materia, tipo de competencia, financiación y servicio mínimo. En otras entidades, memoriza finalidad y forma de creación.`
        ]}
      ],
      tree: `MUNICIPIO
├─ Elementos
│  ├─ Territorio: término municipal
│  ├─ Población: vecinos inscritos
│  └─ Organización: Ayuntamiento
├─ Padrón
│  ├─ Registro administrativo
│  ├─ Prueba residencia y domicilio
│  ├─ Altas, bajas y modificaciones
│  └─ Coordinación con INE
├─ Competencias
│  ├─ Propias
│  ├─ Delegadas
│  └─ Distintas con informes y sostenibilidad
└─ Otras entidades
   ├─ Provincia e isla
   ├─ Comarca y área metropolitana
   ├─ Mancomunidad
   └─ Entidades inframunicipales según normativa`,
      reviewTable: [
        ['Concepto', 'Regla', 'Referencia'],
        ['Municipio', 'Entidad local básica con personalidad', 'Art. 11 LBRL'],
        ['Elementos', 'Territorio, población y organización', 'Art. 11.2'],
        ['Vecino', 'Se adquiere por inscripción padronal', 'Arts. 15-16'],
        ['Padrón', 'Prueba residencia y domicilio habitual', 'Art. 16'],
        ['Competencias', 'Propias, delegadas y distintas bajo condiciones', 'Art. 7'],
        ['Materias propias', 'Las atribuye la ley en materias del art. 25', 'Art. 25'],
        ['Servicios mínimos', 'Escalones por población', 'Art. 26'],
        ['Mancomunidad', 'Asociación voluntaria para obras y servicios', 'Art. 44'],
        ['Provincia', 'Agrupación de municipios y entidad local', 'Arts. 31 y 36']
      ]
    },
    10: {
      sources: [SOURCES.constitucion, SOURCES.lbrl, SOURCES.ley39, SOURCES.haciendas],
      articleCoverage: [
        ['Arts. 4, 22.2.d y 49-52 LBRL', 'Potestad normativa, competencia plenaria, procedimiento y recursos.'],
        ['Arts. 65 y 70 LBRL', 'Control de legalidad, publicación íntegra y entrada en vigor.'],
        ['Arts. 70 bis y 133 Ley 39/2015', 'Participación, iniciativa popular, consulta y audiencia normativa.'],
        ['Arts. 128-131 Ley 39/2015', 'Potestad reglamentaria, buena regulación, evaluación y publicidad.'],
        ['Arts. 15-19 TRLRHL', 'Ordenanzas fiscales, contenido, aprobación, publicación e impugnación.'],
        ['Arts. 84 y 139-141 LBRL', 'Ordenanzas de intervención y habilitación sancionadora local.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Las entidades locales ejercen potestad reglamentaria mediante reglamentos y ordenanzas dentro de sus competencias. El pleno aprueba y el procedimiento general exige aprobación inicial, información pública y audiencia mínima de treinta días, resolución de reclamaciones, aprobación definitiva y publicación íntegra.`,
          `Debe distinguirse reglamento orgánico, ordenanza material, ordenanza fiscal, presupuesto y bases de ejecución, instrumentos urbanísticos y bandos. Las ordenanzas fiscales siguen especialidades del texto refundido de Haciendas Locales.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          ...[
            ['Art. 4.1.a LBRL', 'Reconoce potestades reglamentaria y de autoorganización a entidades locales.'],
            ['Art. 22.2.d LBRL', 'Atribuye al pleno aprobación del reglamento orgánico y ordenanzas.'],
            ['Art. 49 LBRL', 'Fija aprobación inicial, información pública de treinta días y aprobación definitiva.'],
            ['Arts. 65 y 70.2 LBRL', 'Regulan comunicación, control de legalidad, publicación íntegra y entrada en vigor.'],
            ['Arts. 128-133 LPAC', 'Principios de buena regulación, planificación, evaluación, publicación y participación.'],
            ['Arts. 15-19 TRLRHL', 'Régimen especial de ordenanzas fiscales.'],
            ['Arts. 139-141 LBRL', 'Tipificación de infracciones y sanciones por ordenanza dentro de habilitación legal.']
          ].map(([range, focus]) => `${range}: ${focus}`)
        ]},
        { heading: '1. Potestad reglamentaria local', paragraphs: [
          `La potestad reglamentaria permite dictar normas generales subordinadas a Constitución, leyes y reglamentos superiores. Deriva de autonomía local y artículo 4 LBRL, pero solo se ejerce en el ámbito competencial.`,
          `La norma local no puede invadir reserva de ley, contradecir legislación estatal o autonómica aplicable, crear tributos sin ley ni tipificar sanciones fuera de habilitación.`,
          `La potestad de autoorganización permite regular órganos complementarios, estructura y funcionamiento dentro de bases estatales y normativa autonómica.`
        ]},
        { heading: '2. Reglamento y ordenanza: concepto y diferencias', paragraphs: [
          `Ambos son disposiciones administrativas generales de rango local. La denominación no determina por sí sola naturaleza: importa contenido, órgano y procedimiento.`,
          `Suele llamarse reglamento a normas de organización y funcionamiento y ordenanza a normas de convivencia, servicios, intervención o tributos. Jurídicamente comparten subordinación y control jurisdiccional.`,
          `No deben confundirse con actos administrativos, dirigidos a casos concretos; ni con bandos, que normalmente publican instrucciones o recordatorios y no pueden sustituir una ordenanza cuando se necesita regulación general.`
        ]},
        { heading: '3. Clases de normas locales', paragraphs: [
          `El reglamento orgánico regula organización municipal, órganos complementarios, grupos, participación y reglas internas, respetando LBRL y legislación autonómica. Tiene una posición singular en materia organizativa, pero no rango de ley.`,
          `Las ordenanzas generales regulan convivencia, vía pública, medio ambiente, servicios, obras, licencias, residuos, ruido, tráfico dentro de competencia. Las sancionadoras deben incorporar tipos y límites con habilitación.`,
          `Las ordenanzas fiscales regulan tributos y precios o prestaciones en los términos del TRLRHL. Presupuesto y bases de ejecución siguen procedimiento presupuestario. Planeamiento urbanístico y otras disposiciones sectoriales tienen procedimiento especial.`
        ]},
        { heading: '4. Competencia del pleno y preparación del expediente', paragraphs: [
          `La aprobación de reglamento orgánico y ordenanzas corresponde al pleno y no es delegable en los términos legales. La iniciativa puede proceder de alcalde, concejales, órganos, servicios o ciudadanía según reglas.`,
          `El expediente debe justificar competencia, necesidad, objetivos y adecuación; incluir proyecto, informes jurídicos y técnicos, impacto económico y presupuestario, participación y demás informes preceptivos.`,
          `La omisión de un trámite esencial puede provocar nulidad. Los servicios deben conservar antecedentes, versiones, propuestas y certificaciones para acreditar procedimiento.`
        ]},
        { heading: '5. Principios de buena regulación', paragraphs: [
          `Necesidad y eficacia exigen identificar problema y que la norma sea instrumento adecuado. Proporcionalidad limita contenido a lo imprescindible. Seguridad jurídica exige coherencia y claridad.`,
          `Transparencia exige acceso sencillo a documentos y participación. Eficiencia evita cargas innecesarias y racionaliza recursos. Estabilidad y sostenibilidad obligan a cuantificar efectos económicos.`,
          `La memoria debe explicar alternativas, incluidos no regular o usar medidas menos restrictivas. Una fórmula genérica que copie principios sin aplicarlos al caso no cumple plenamente la finalidad.`
        ]},
        { heading: '6. Consulta previa y participación', paragraphs: [
          `Antes de elaborar proyecto puede realizarse consulta pública en portal para recabar opinión sobre problemas, necesidad, objetivos y alternativas, con excepciones legales. Su aplicación a normas locales debe coordinarse con legislación básica y jurisprudencia.`,
          `Durante tramitación del texto, la audiencia e información pública del artículo 49 garantizan participación. Además, el artículo 70 bis reconoce iniciativa popular con porcentajes según población y sometimiento a debate.`,
          `Participar no otorga derecho a que se acepte la propuesta, pero las reclamaciones y sugerencias presentadas en plazo deben resolverse antes de aprobación definitiva.`
        ]},
        { heading: '7. Aprobación inicial', paragraphs: [
          `El pleno debate y aprueba inicialmente el proyecto. Deben cumplirse convocatoria, quórum, mayoría y abstención. Como regla, la mayoría es simple salvo materias para las que ley exige mayoría especial.`,
          `El acuerdo identifica texto y apertura de información pública. El texto sometido a exposición debe coincidir con aprobado y estar accesible.`,
          `La aprobación inicial no equivale todavía a norma vigente. Abre fase de participación y puede modificarse antes de definitiva.`
        ]},
        { heading: '8. Información pública y audiencia', paragraphs: [
          `El plazo mínimo es treinta días para reclamaciones y sugerencias. Se anuncia en boletín oficial y, según normativa, tablón, sede o portal. El cómputo comienza conforme a publicación oficial.`,
          `Información pública se dirige a colectividad; audiencia a interesados especialmente afectados. Pueden coincidir en trámite, pero el expediente debe garantizar acceso al texto.`,
          `Las alegaciones fuera de plazo pueden examinarse como información, pero no tienen idéntico régimen. El certificado de exposición y de reclamaciones es pieza esencial.`
        ]},
        { heading: '9. Resolución de reclamaciones y aprobación definitiva', paragraphs: [
          `El pleno debe resolver todas las reclamaciones y sugerencias presentadas en plazo y aprobar definitivamente. La respuesta puede agruparse por materias, pero debe ser razonada.`,
          `Si no se presentan reclamaciones o sugerencias, el acuerdo inicial se entiende definitivamente adoptado sin nuevo acuerdo, conforme al artículo 49.`,
          `Si las modificaciones finales son sustanciales y alteran el sentido sometido a información, puede ser necesario repetir participación para evitar indefensión y garantizar transparencia.`
        ]},
        { heading: '10. Publicación y entrada en vigor', paragraphs: [
          `La ordenanza no entra en vigor hasta publicación íntegra de su texto en boletín oficial y transcurso del plazo del artículo 65.2 desde comunicación a Estado y comunidad autónoma, salvo régimen especial.`,
          `Publicar solo el acuerdo o un resumen no basta. Debe incluir texto completo y, cuando corresponda, anexos esenciales. La fecha de aprobación no es necesariamente la de vigencia.`,
          `La publicación en sede o portal mejora acceso, pero no sustituye el boletín oficial cuando la ley lo exige. La norma debe mantenerse accesible y consolidada tras modificaciones.`
        ]},
        { heading: '11. Control e impugnación', paragraphs: [
          `Estado y comunidad autónoma reciben copia de actos y acuerdos y pueden requerir anulación o impugnar cuando entienden que infringen ordenamiento o competencias.`,
          `Contra disposiciones generales no cabe recurso administrativo ordinario. Se impugnan directamente ante jurisdicción contencioso-administrativa o indirectamente al recurrir actos de aplicación.`,
          `La nulidad puede derivar de incompetencia, procedimiento esencial, contradicción con norma superior, invasión de reserva legal o retroactividad sancionadora desfavorable. Los tribunales pueden anular total o parcialmente.`
        ]},
        { heading: '12. Ordenanzas fiscales', paragraphs: [
          `Para establecer y ordenar tributos locales se aprueban ordenanzas fiscales conforme a artículos 15 a 19 TRLRHL. Deben contener elementos necesarios: hecho imponible, sujetos, responsables, exenciones y bonificaciones, base, tipo o cuota, periodo y devengo y regímenes de declaración e ingreso cuando proceda.`,
          `El acuerdo provisional y la ordenanza se exponen al público al menos treinta días. Los interesados pueden examinar y reclamar. Sin reclamaciones se entiende definitivo; con ellas, el pleno resuelve y aprueba.`,
          `El texto íntegro se publica antes de entrada en vigor. Contra ordenanzas fiscales cabe recurso contencioso directo; no recurso administrativo. Su régimen especial desplaza aspectos del procedimiento general.`
        ]},
        { heading: '13. Ordenanzas sancionadoras y de intervención', paragraphs: [
          `Las ordenanzas pueden tipificar infracciones dentro de criterios de los artículos 139 a 141 LBRL cuando no haya normativa sectorial. Deben respetar legalidad, tipicidad, proporcionalidad y límites económicos.`,
          `En licencias, declaraciones y comunicaciones, la ordenanza debe respetar artículos 84 a 84 ter, libertad de servicios y unidad de mercado. No puede exigir autorización previa sin justificar necesidad.`,
          `Las normas de convivencia pueden proteger espacio público, servicios e instalaciones, pero no invadir Derecho penal ni restringir derechos fundamentales sin cobertura suficiente.`
        ]},
        { heading: '14. Modificación, derogación y evaluación', paragraphs: [
          `Modificar una ordenanza exige, como regla, el mismo procedimiento que aprobarla. No basta una instrucción del alcalde para alterar texto. La derogación debe ser expresa o resultar de incompatibilidad con norma posterior.`,
          `La Administración debe revisar normativa para comprobar objetivos, costes y cargas. Las ordenanzas obsoletas deben adaptarse a cambios legales y tecnológicos.`,
          `Un texto consolidado facilita estudio y aplicación, pero debe identificarse como informativo y conservar publicaciones oficiales que acreditan cada modificación.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Procedimiento general: pleno inicial, información pública y audiencia mínimo treinta días, resolución de reclamaciones, pleno definitivo y publicación íntegra.`,
          `Sin reclamaciones, la aprobación inicial se convierte en definitiva. La norma entra en vigor después de publicación y plazo legal.`,
          `Ordenanzas fiscales siguen TRLRHL. Contra disposiciones generales no cabe recurso administrativo ordinario.`,
          `Reglamento orgánico organiza; ordenanza regula materias locales; bando no sustituye regulación normativa necesaria.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No confundir aprobación definitiva con entrada en vigor. No basta publicar el acuerdo: se publica texto íntegro.`,
          `El plazo de información pública es mínimo treinta días. Sin reclamaciones no hace falta nuevo acuerdo plenario.`,
          `Una ordenanza no puede crear tributo, sanción o licencia sin habilitación legal y competencia.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuáles son las fases exactas del artículo 49 y qué sucede si no hay reclamaciones?`,
          `2. ¿Qué diferencia existe entre reglamento orgánico, ordenanza general, ordenanza fiscal y bando?`,
          `3. ¿Cuándo entra en vigor una ordenanza y cómo se impugna?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En supuestos de aprobación, crea cronología con órgano, mayoría, anuncio, plazo, reclamaciones, acuerdo final, publicación y vigencia.`,
          `En test identifica si la pregunta es procedimiento general, fiscal, presupuestario o urbanístico. Aplicar automáticamente el artículo 49 a toda norma especial produce errores.`
        ]}
      ],
      tree: `NORMAS LOCALES
├─ Potestad reglamentaria y autoorganización
├─ Clases
│  ├─ Reglamento orgánico
│  ├─ Ordenanzas generales
│  ├─ Ordenanzas fiscales
│  ├─ Normas presupuestarias y sectoriales
│  └─ Bandos
├─ Procedimiento general
│  ├─ Aprobación inicial del Pleno
│  ├─ Información pública y audiencia ≥ 30 días
│  ├─ Resolución de reclamaciones
│  ├─ Aprobación definitiva
│  └─ Publicación íntegra y entrada en vigor
└─ Control
   ├─ Estado y comunidad autónoma
   ├─ Recurso contencioso directo
   └─ Impugnación indirecta del acto de aplicación`,
      reviewTable: [
        ['Fase o tipo', 'Regla esencial', 'Referencia'],
        ['Competencia', 'Pleno aprueba reglamento orgánico y ordenanzas', 'Art. 22.2.d LBRL'],
        ['Aprobación inicial', 'Acuerdo del Pleno', 'Art. 49.a'],
        ['Información pública', 'Mínimo treinta días', 'Art. 49.b'],
        ['Aprobación definitiva', 'Resuelve reclamaciones; sin ellas, automática', 'Art. 49.c'],
        ['Publicación', 'Texto íntegro en BOP', 'Art. 70.2'],
        ['Entrada en vigor', 'Publicación y plazo del art. 65.2', 'Arts. 65 y 70'],
        ['Ordenanza fiscal', 'Procedimiento especial de exposición y reclamación', 'Arts. 15-19 TRLRHL'],
        ['Impugnación', 'Contencioso; no recurso administrativo ordinario', 'LJCA y LPAC'],
        ['Buena regulación', 'Necesidad, eficacia, proporcionalidad, seguridad, transparencia y eficiencia', 'Art. 129 LPAC']
      ]
    }
  };

  const updated = [];
  for (const [numberText, definition] of Object.entries(THEMES)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = definition.sections;
    theme.tree = definition.tree;
    theme.reviewTable = definition.reviewTable;
    theme.articleCoverage = definition.articleCoverage.map(([range, focus]) => ({ range, focus }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.officialSources = definition.sources.map(source => ({ ...source, reviewedAt: REVIEW_DATE }));
    theme.theoryStatus = {
      version: 'v0.85.0',
      reviewedAt: REVIEW_DATE,
      sourcePolicy: 'Fuentes oficiales consolidadas y explicación autosuficiente',
      autonomous: true,
      fixedStudyStructure: true,
      articleByArticle: true,
      noOffSyllabusFiller: true,
      block: 'Carranque 6-10'
    };
    theme.studyWarnings = [
      'Revisar cualquier modificación normativa publicada antes de la fecha de examen.',
      'Las reglas sectoriales especiales prevalecen sobre el régimen general cuando el propio tema lo exige.'
    ];
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v85 || { completedThemes: [], pendingThemes: [] };
  const completedThemes = [...new Set([...(previous.completedThemes || []), ...updated])].sort((a, b) => a - b);
  ope.theoryProgramme.v85 = {
    ...previous,
    version: 'v0.85.0',
    reviewedAt: REVIEW_DATE,
    objective: 'OpoWeb como única fuente teórica',
    completedThemes,
    pendingThemes: Array.from({ length: 20 }, (_, index) => index + 1).filter(number => !completedThemes.includes(number)),
    officialBasis: {
      label: 'Bases específicas del Ayuntamiento de Carranque',
      csv: '2EAA AEP4 Z2V2 3X7P EZU7',
      signedAt: '2025-12-26'
    }
  };

  window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE2 = {
    version: 'v0.85.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v85.pendingThemes
  };
})();
