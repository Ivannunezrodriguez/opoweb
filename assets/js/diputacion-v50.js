(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.50.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    1: {
      source: 'Constitución Española, títulos preliminar, IX y X',
      blocks: [
        ['Significado, estructura y valor normativo', [
          'La Constitución de 1978 es la norma suprema del ordenamiento. Vincula a ciudadanos y poderes públicos y sirve de parámetro de validez para las demás normas.',
          'Se compone de preámbulo, título preliminar, diez títulos, 169 artículos, cuatro disposiciones adicionales, nueve transitorias, una derogatoria y una final.',
          'Su valor normativo implica aplicación directa de numerosos preceptos, interpretación del ordenamiento conforme a ella y control de constitucionalidad de leyes y disposiciones con fuerza de ley.'
        ]],
        ['Principios generales', [
          'El artículo 1 define España como Estado social y democrático de Derecho y proclama libertad, justicia, igualdad y pluralismo político como valores superiores.',
          'La soberanía nacional reside en el pueblo español y la forma política es la Monarquía parlamentaria. El artículo 2 combina unidad de la Nación, autonomía de nacionalidades y regiones y solidaridad.',
          'El artículo 9.3 garantiza legalidad, jerarquía normativa, publicidad, irretroactividad sancionadora desfavorable o restrictiva de derechos, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.'
        ]],
        ['Tribunal Constitucional', [
          'El Tribunal Constitucional es el intérprete supremo de la Constitución y es independiente de los demás órganos constitucionales. Se regula en los artículos 159 a 165 y en su ley orgánica.',
          'Está compuesto por doce miembros nombrados por el Rey: cuatro a propuesta del Congreso por mayoría de tres quintos, cuatro del Senado por igual mayoría, dos del Gobierno y dos del Consejo General del Poder Judicial.',
          'El mandato es de nueve años y se renueva por terceras partes cada tres. Conoce, entre otros asuntos, del recurso y la cuestión de inconstitucionalidad, recurso de amparo y conflictos de competencia.'
        ]],
        ['Reforma ordinaria', [
          'El procedimiento del artículo 167 exige tres quintos de cada Cámara. Si no hay acuerdo, se intenta mediante comisión paritaria y un texto sometido de nuevo a Congreso y Senado.',
          'Si el Senado aprueba por mayoría absoluta y no se alcanzan tres quintos en ambas Cámaras, el Congreso puede aprobar la reforma por mayoría de dos tercios.',
          'La reforma se somete a referéndum si lo solicita, dentro de los quince días siguientes a su aprobación, una décima parte de los miembros de cualquiera de las Cámaras.'
        ]],
        ['Reforma agravada', [
          'El artículo 168 se aplica a revisión total o parcial que afecte al título preliminar, a la sección primera del capítulo segundo del título I o al título II.',
          'Exige aprobación del principio por dos tercios de cada Cámara y disolución inmediata de las Cortes. Las nuevas Cámaras deben ratificar la decisión y aprobar el nuevo texto por dos tercios de ambas.',
          'La reforma aprobada por este procedimiento debe someterse obligatoriamente a referéndum.'
        ]]
      ],
      hot: ['Norma suprema y directamente vinculante.', '169 artículos.', 'Valores: libertad, justicia, igualdad y pluralismo.', 'Estado social y democrático de Derecho.', 'TC: 12 miembros.', 'Mandato TC: 9 años; renovación por tercios cada 3.', 'Reforma ordinaria: 3/5.', 'Referéndum ordinario: petición de 1/10 en 15 días.', 'Reforma agravada: 2/3, disolución y referéndum obligatorio.'],
      recall: ['¿Qué contenidos estructurales tiene la Constitución?', '¿Cómo se designan y renuevan los miembros del Tribunal Constitucional?', '¿Qué diferencias esenciales existen entre los artículos 167 y 168?']
    },
    2: {
      source: 'Constitución Española, título I y artículos 81 a 86 y 97; Ley 39/2015, artículos 128 a 133',
      blocks: [
        ['Derechos y deberes fundamentales', [
          'El título I se estructura en cinco capítulos. El artículo 10 sitúa dignidad, derechos inviolables, libre desarrollo, respeto a la ley y a los derechos ajenos como fundamento del orden político y de la paz social.',
          'El artículo 14 reconoce igualdad ante la ley. Los artículos 15 a 29 contienen derechos fundamentales y libertades públicas; la sección segunda recoge otros derechos y deberes de los ciudadanos.',
          'Los principios rectores del capítulo tercero informan legislación, práctica judicial y actuación pública, pero solo pueden alegarse conforme a las leyes que los desarrollen.'
        ]],
        ['Garantías y suspensión', [
          'Los derechos del artículo 14 y de la sección primera vinculan a todos los poderes públicos y solo pueden regularse por ley respetando su contenido esencial.',
          'Su tutela puede recabarse ante tribunales ordinarios mediante procedimiento preferente y sumario y, en su caso, mediante recurso de amparo ante el Tribunal Constitucional.',
          'Determinados derechos pueden suspenderse durante los estados de excepción o sitio en los términos del artículo 55. La suspensión individual solo cabe en los supuestos constitucionales vinculados a investigaciones de terrorismo y con control legal y judicial.'
        ]],
        ['La ley y sus clases', [
          'La ley emana de las Cortes Generales o de los parlamentos autonómicos dentro de sus competencias. La ley orgánica se reserva al desarrollo de derechos fundamentales y libertades públicas, Estatutos de Autonomía, régimen electoral general y demás materias constitucionalmente previstas.',
          'La aprobación, modificación o derogación de una ley orgánica exige mayoría absoluta del Congreso en votación final sobre el conjunto.',
          'La ley ordinaria regula materias no reservadas a ley orgánica y se aprueba por el procedimiento y mayorías parlamentarias aplicables.'
        ]],
        ['Normas del Gobierno con rango de ley', [
          'El decreto-ley requiere extraordinaria y urgente necesidad. No puede afectar al ordenamiento de las instituciones básicas del Estado, derechos, deberes y libertades del título I, régimen autonómico ni Derecho electoral general.',
          'Debe someterse al Congreso para debate y votación de totalidad dentro de treinta días, que decide su convalidación o derogación.',
          'El decreto legislativo exige delegación expresa: mediante ley de bases para textos articulados o ley ordinaria para refundir textos. La delegación debe ser concreta y limitada temporalmente.'
        ]],
        ['El reglamento', [
          'El Gobierno ejerce la potestad reglamentaria conforme a la Constitución y las leyes. El reglamento es subordinado a la ley y no puede invadir materias reservadas a esta ni establecer retroactividad sancionadora desfavorable.',
          'Los reglamentos respetan jerarquía y competencia: ninguna disposición administrativa puede vulnerar otra de rango superior.',
          'Los artículos 128 a 133 de la Ley 39/2015 exigen necesidad, eficacia, proporcionalidad, seguridad jurídica, transparencia y eficiencia en el ejercicio de la iniciativa normativa.'
        ]]
      ],
      hot: ['Artículo 14: igualdad.', 'Derechos fundamentales: artículos 15–29.', 'Contenido esencial y reserva de ley.', 'Amparo para artículo 14 y sección primera.', 'Ley orgánica: mayoría absoluta del Congreso en votación final.', 'Decreto-ley: extraordinaria y urgente necesidad.', 'Convalidación del decreto-ley: 30 días.', 'Decreto legislativo: delegación expresa.', 'Reglamento subordinado a ley.', 'Principios de buena regulación.'],
      recall: ['¿Qué derechos tienen la máxima protección del artículo 53.2?', '¿Qué diferencia existe entre ley orgánica, decreto-ley y decreto legislativo?', '¿Qué límites materiales y jerárquicos tiene el reglamento?']
    },
    3: {
      source: 'Constitución Española, títulos II, III, IV, VI y VIII; artículos 54 y 136',
      blocks: [
        ['Organización institucional y territorial', [
          'La organización institucional distribuye funciones entre Corona, Cortes Generales, Gobierno y Administración, Poder Judicial y demás órganos constitucionales.',
          'La organización territorial se articula en municipios, provincias y Comunidades Autónomas, todas con autonomía para la gestión de sus respectivos intereses.',
          'El Estado garantiza solidaridad, equilibrio económico y respeto a la autonomía; las diferencias estatutarias no pueden implicar privilegios económicos o sociales.'
        ]],
        ['La Corona', [
          'El Rey es Jefe del Estado, símbolo de unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones y asume la más alta representación internacional de España.',
          'La persona del Rey es inviolable y no está sujeta a responsabilidad. Sus actos requieren refrendo en los términos constitucionales; quienes refrendan asumen la responsabilidad.',
          'Entre sus funciones figuran sancionar y promulgar leyes, convocar y disolver Cortes, convocar elecciones y referendos, proponer candidato a la Presidencia y nombrarlo, y expedir decretos acordados en Consejo de Ministros.'
        ]],
        ['Cortes Generales', [
          'Las Cortes representan al pueblo español y están formadas por Congreso y Senado. Ejercen potestad legislativa, aprueban presupuestos y controlan la acción del Gobierno.',
          'El Congreso se compone constitucionalmente de un mínimo de 300 y un máximo de 400 diputados. El Senado es la Cámara de representación territorial.',
          'Las Cámaras son inviolables, establecen sus reglamentos y funcionan en Pleno y comisiones.'
        ]],
        ['Defensor del Pueblo y Tribunal de Cuentas', [
          'El Defensor del Pueblo es alto comisionado de las Cortes Generales para la defensa de los derechos del título I. Puede supervisar la actividad de la Administración e informa a las Cortes.',
          'El Tribunal de Cuentas es el supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado y del sector público. Depende directamente de las Cortes y ejerce sus funciones por delegación de ellas en el examen de la Cuenta General del Estado.',
          'Fiscalización y jurisdicción contable son funciones distintas: la primera controla actividad económico-financiera; la segunda exige responsabilidad contable en los términos legales.'
        ]],
        ['Gobierno, Poder Judicial y territorio', [
          'El Gobierno dirige política interior y exterior, Administración civil y militar y defensa; ejerce función ejecutiva y potestad reglamentaria.',
          'La justicia emana del pueblo y se administra por jueces y magistrados independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley.',
          'La provincia es entidad local con personalidad propia y división territorial para actividades del Estado. Los municipios gozan de autonomía y las Comunidades Autónomas acceden al autogobierno conforme a Constitución y Estatutos.'
        ]]
      ],
      hot: ['Rey: Jefe del Estado.', 'Inviolabilidad y refrendo.', 'Cortes = Congreso + Senado.', 'Cortes legislan, presupuestan y controlan.', 'Senado: representación territorial.', 'Defensor: alto comisionado de las Cortes.', 'Tribunal de Cuentas: supremo fiscalizador.', 'Justicia emana del pueblo.', 'Municipios, provincias y CCAA.', 'Autonomía no equivale a soberanía.'],
      recall: ['¿Qué funciones constitucionales corresponden al Rey?', '¿Qué diferencia existe entre Defensor del Pueblo y Tribunal de Cuentas?', '¿Cómo se relacionan unidad, autonomía y solidaridad territorial?']
    },
    4: {
      source: 'Ley 40/2015, artículos 1 a 24 y 140 a 158',
      blocks: [
        ['Administración Pública y principios', [
          'La Ley 40/2015 regula bases del régimen jurídico, principios del sistema de responsabilidad y potestad sancionadora y organización y funcionamiento del sector público institucional.',
          'Las Administraciones sirven con objetividad los intereses generales y actúan conforme a eficacia, jerarquía, descentralización, desconcentración, coordinación y sometimiento pleno a Constitución, ley y Derecho.',
          'También deben respetar servicio efectivo, simplicidad, claridad, proximidad, participación, transparencia, racionalización, buena fe, confianza legítima, responsabilidad, planificación y cooperación.'
        ]],
        ['Órganos administrativos', [
          'Son órganos administrativos las unidades a las que se atribuyan funciones con efectos jurídicos frente a terceros o cuya actuación tenga carácter preceptivo.',
          'La creación de un órgano exige determinar integración y dependencia, funciones y competencias y dotación de créditos necesarios, evitando duplicidades.',
          'Las instrucciones y órdenes de servicio dirigen la actividad de órganos dependientes; su incumplimiento no afecta por sí solo a la validez de los actos, sin perjuicio de responsabilidad disciplinaria.'
        ]],
        ['Competencia y técnicas de alteración del ejercicio', [
          'La competencia es irrenunciable y se ejerce por el órgano que la tiene atribuida, salvo delegación o avocación válidas.',
          'La delegación transfiere el ejercicio, no la titularidad. La avocación permite al superior asumir un asunto concreto de un órgano dependiente cuando concurran circunstancias técnicas, económicas, sociales, jurídicas o territoriales.',
          'La encomienda de gestión encarga actividades materiales o técnicas y no cede titularidad ni elementos sustantivos de la competencia. La delegación de firma no altera la competencia y la suplencia sustituye temporalmente al titular.'
        ]],
        ['Abstención, recusación y órganos colegiados', [
          'Autoridades y personal deben abstenerse cuando concurra interés personal, parentesco, amistad íntima, enemistad manifiesta, intervención previa como perito o testigo o relación de servicio con interesado, entre otras causas legales.',
          'La recusación puede promoverse por los interesados en cualquier momento de la tramitación. La intervención de quien debió abstenerse no implica automáticamente invalidez, aunque puede generar responsabilidad.',
          'Los órganos colegiados actúan mediante convocatoria, orden del día, constitución, deliberación, votación y acta, con las especialidades de su normativa propia.'
        ]],
        ['Relaciones interadministrativas', [
          'Las Administraciones se relacionan conforme a lealtad institucional, colaboración, cooperación, coordinación y eficiencia en la gestión de recursos públicos.',
          'Deben respetar competencias ajenas, ponderar intereses afectados, facilitar información y asistencia y cumplir obligaciones derivadas de cooperación.',
          'Las relaciones pueden articularse mediante Conferencias Sectoriales, comisiones, convenios, intercambio electrónico de información y otros instrumentos legalmente previstos.'
        ]]
      ],
      hot: ['Objetividad y servicio al interés general.', 'Órgano: efectos jurídicos o actuación preceptiva.', 'Competencia irrenunciable.', 'Delegación: ejercicio, no titularidad.', 'Avocación: asunto concreto.', 'Encomienda: actividad material o técnica.', 'Delegación de firma no cambia competencia.', 'Suplencia sustituye titular.', 'Abstención y recusación no son iguales.', 'Lealtad, cooperación y coordinación.'],
      recall: ['¿Qué requisitos exige crear un órgano administrativo?', '¿Cómo diferencias delegación, avocación, encomienda, firma y suplencia?', '¿Qué deberes concretos derivan de la lealtad institucional?']
    },
    10: {
      source: 'Ley 40/2015, artículos 32 a 37; Ley 39/2015, artículos 65, 67, 81, 91 y 92',
      blocks: [
        ['Principios de responsabilidad patrimonial', [
          'Los particulares tienen derecho a indemnización por lesiones derivadas del funcionamiento normal o anormal de servicios públicos, salvo fuerza mayor o daños que tengan el deber jurídico de soportar.',
          'El daño debe ser efectivo, evaluable económicamente e individualizado respecto de una persona o grupo. Debe existir relación causal con la actividad administrativa.',
          'La anulación de un acto o disposición no presupone por sí sola derecho a indemnización.'
        ]],
        ['Antijuridicidad, concurrencia e indemnización', [
          'La lesión es indemnizable cuando el perjudicado no tiene deber jurídico de soportarla. Los riesgos del desarrollo científico o técnico no generan indemnización en los términos legales, sin perjuicio de prestaciones asistenciales.',
          'Cuando intervienen varias Administraciones, la responsabilidad puede ser solidaria en fórmulas conjuntas; en otros casos se distribuye según competencia, interés tutelado e intensidad de intervención, si es posible determinarla.',
          'La indemnización se calcula con criterios fiscales, expropiatorios y demás aplicables, atendiendo al mercado. Puede abonarse en dinero, mediante pagos periódicos o en especie si existe acuerdo y resulta adecuado.'
        ]],
        ['Inicio y plazo para reclamar', [
          'El procedimiento puede iniciarse de oficio mientras no haya prescrito el derecho. El acuerdo se notifica a los lesionados y concede diez días para alegaciones y prueba.',
          'La reclamación prescribe al año del hecho o manifestación del efecto lesivo. En daños físicos o psíquicos, desde curación o determinación de secuelas.',
          'La solicitud debe identificar lesiones, causalidad, evaluación económica si es posible, momento del daño, alegaciones, documentos y medios de prueba.'
        ]],
        ['Instrucción, resolución y silencio', [
          'Es preceptivo informe del servicio cuyo funcionamiento causó la lesión. Cuando la cuantía alcance el umbral legal, debe solicitarse dictamen del Consejo de Estado u órgano consultivo autonómico.',
          'La resolución debe pronunciarse sobre causalidad, valoración, cuantía y forma de indemnización. La competencia para resolver se determina por la normativa organizativa y puede delegarse cuando proceda.',
          'Transcurridos seis meses sin resolución expresa, la pretensión puede entenderse desestimada.'
        ]],
        ['Responsabilidad de autoridades y personal', [
          'El perjudicado reclama directamente a la Administración. Una vez indemnizado, esta exige de oficio responsabilidad a la autoridad o empleado cuando hubo dolo o culpa o negligencia graves.',
          'Para graduarla se ponderan resultado dañoso, culpabilidad, responsabilidad profesional y relación con el daño. También puede exigirse responsabilidad por daños causados a bienes o derechos de la propia Administración.',
          'La responsabilidad penal y civil derivada del delito se exige conforme a su legislación. El proceso penal no suspende normalmente el patrimonial, salvo que la determinación penal de los hechos sea necesaria.'
        ]]
      ],
      hot: ['Funcionamiento normal o anormal.', 'Fuerza mayor excluye.', 'Daño efectivo, evaluable e individualizado.', 'Anulación no implica indemnización automática.', 'Prescripción: 1 año.', 'Daños personales: curación o secuelas.', 'Informe del servicio causante.', 'Silencio a 6 meses: desestimatorio.', 'Reclamación directa contra Administración.', 'Repetición por dolo o culpa/negligencia grave.'],
      recall: ['¿Qué requisitos convierten un daño en lesión indemnizable?', '¿Cómo se computa el año en daños personales?', '¿Cuándo y cómo responde personalmente una autoridad o empleado público?']
    },
    11: {
      source: 'Ley 39/2015, artículos 14 a 18, 40 a 46 y 66 a 68; ROF, artículos 151 a 162 y 163 a 194',
      blocks: [
        ['Especialidades y expediente local', [
          'Las entidades locales aplican la Ley 39/2015, la legislación básica local, el ROF y sus reglamentos orgánicos. Deben resolver expresamente los expedientes; silencio y caducidad se rigen por la legislación común.',
          'El expediente reúne ordenadamente documentos, pruebas, informes, acuerdos y actuaciones. Los informes para resolver deben exponer hechos, disposiciones aplicables, razonamiento y pronunciamientos propuestos.',
          'Los interesados pueden conocer el estado de tramitación, comparecer mientras no exista resolución definitiva y formular alegaciones y recusación conforme a la ley.'
        ]],
        ['Registro de entrada y salida', [
          'Cada Administración dispone de Registro Electrónico General interoperable. El ROF exige Registro General local para dejar constancia clara de entrada de documentos y salida de los despachados definitivamente.',
          'Los asientos respetan orden temporal y contienen número, fechas, procedencia o destino, extracto, unidad responsable y observaciones. Tras el registro, los documentos se cursan sin dilación.',
          'En salida se anotan oficios, notificaciones, órdenes, comunicaciones, certificaciones, expedientes y resoluciones que emanen de la entidad local.'
        ]],
        ['Presentación de documentos', [
          'Las solicitudes deben contener identidad, hechos, razones y petición, lugar y fecha, firma o acreditación de voluntad, órgano destinatario y medio electrónico de aviso cuando proceda.',
          'Pueden presentarse en el registro electrónico de la Administración u organismo destinatario, en restantes registros interoperables, oficinas de Correos, representaciones diplomáticas u oficinas consulares, oficinas de asistencia y demás lugares legales.',
          'Quien presente puede obtener recibo o copia acreditativa con fecha y hora. Los documentos pueden acompañarse mediante originales o copias en los términos legales; el interesado responde de su veracidad.'
        ]],
        ['Subsanación y personas obligadas electrónicamente', [
          'Si la solicitud es incompleta, se requiere subsanación en diez días, con advertencia de desistimiento previa resolución. El plazo puede ampliarse hasta cinco días en supuestos legales no competitivos.',
          'Personas jurídicas, entidades sin personalidad, profesionales en actuaciones vinculadas a su profesión, representantes de obligados y empleados públicos en actuaciones de su condición deben relacionarse electrónicamente.',
          'Si un obligado presenta presencialmente, debe subsanar electrónicamente y la fecha válida de presentación será la de la subsanación.'
        ]],
        ['Comunicaciones y notificaciones', [
          'Las resoluciones dictadas por delegación deben indicar esta circunstancia. Las comunicaciones de acuerdos o resoluciones se firman por quien corresponda según la organización local y se incorporan al expediente.',
          'Toda notificación debe cursarse dentro de diez días desde que se dicta el acto y contener texto íntegro, indicación de si pone fin a la vía administrativa, recursos, órgano y plazo.',
          'El aviso por correo o dispositivo no es la notificación. El rechazo se hace constar y permite continuar. En notificación electrónica obligatoria o elegida, se entiende rechazada tras diez días naturales desde la puesta a disposición sin acceso.'
        ]]
      ],
      hot: ['Registro Electrónico General por Administración.', 'Asientos por orden temporal.', 'Documentos cursados sin dilación.', 'Recibo con fecha y hora.', 'Solicitud: identidad, hechos, petición, firma y órgano.', 'Subsanación: 10 días.', 'Obligado presencial: fecha de subsanación electrónica.', 'Notificación: dentro de 10 días desde el acto.', 'Aviso no equivale a notificación.', 'Rechazo electrónico: 10 días naturales sin acceso.', 'Silencio y caducidad se rigen por Ley 39/2015.'],
      recall: ['¿Qué información debe contener un asiento de entrada o salida?', '¿Dónde puede presentarse una solicitud y qué ocurre si un obligado la presenta en papel?', '¿Qué diferencia existe entre aviso, puesta a disposición, acceso y rechazo de una notificación?']
    }
  };

  const rawQuestions = {
    1: [
      ['¿Cuál es el valor jurídico de la Constitución?', 'Es la norma suprema del ordenamiento.', ['Es un reglamento.', 'Es una ley autonómica.', 'Es una recomendación política.'], 'Artículos 9.1 y 9.3 de la Constitución.'],
      ['¿Cuántos artículos contiene?', '169.', ['159.', '175.', '197.'], 'Estructura constitucional.'],
      ['¿Cuántos títulos numerados existen además del preliminar?', 'Diez.', ['Ocho.', 'Nueve.', 'Doce.'], 'Títulos I a X.'],
      ['¿Qué forma política tiene España?', 'Monarquía parlamentaria.', ['República federal.', 'Monarquía absoluta.', 'Directorio parlamentario.'], 'Artículo 1.3.'],
      ['¿Dónde reside la soberanía nacional?', 'En el pueblo español.', ['En el Rey.', 'En el Gobierno.', 'En el Senado.'], 'Artículo 1.2.'],
      ['¿Cuál es un valor superior?', 'El pluralismo político.', ['La jerarquía administrativa.', 'La centralización.', 'La oportunidad.'], 'Artículo 1.1.'],
      ['¿Cuántos miembros tiene el Tribunal Constitucional?', 'Doce.', ['Diez.', 'Quince.', 'Veinte.'], 'Artículo 159.1.'],
      ['¿Cuántos propone el Congreso?', 'Cuatro por mayoría de tres quintos.', ['Dos por mayoría simple.', 'Seis por mayoría absoluta.', 'Ocho por dos tercios.'], 'Artículo 159.1.'],
      ['¿Cuánto dura el mandato de los magistrados constitucionales?', 'Nueve años.', ['Cuatro años.', 'Cinco años.', 'Doce años.'], 'Artículo 159.3.'],
      ['¿Cómo se renueva el Tribunal Constitucional?', 'Por terceras partes cada tres años.', ['Íntegramente cada cuatro años.', 'Por mitades cada dos años.', 'Sin renovación periódica.'], 'Artículo 159.3.'],
      ['¿Qué mayoría exige inicialmente el artículo 167?', 'Tres quintos de cada Cámara.', ['Mayoría simple.', 'Mayoría absoluta solo del Congreso.', 'Dos tercios del Senado únicamente.'], 'Artículo 167.1.'],
      ['¿Quién puede solicitar referéndum en la reforma ordinaria?', 'Una décima parte de cualquiera de las Cámaras.', ['El Gobierno exclusivamente.', 'Cualquier ciudadano individualmente.', 'El Tribunal Constitucional.'], 'Artículo 167.3.'],
      ['¿En qué plazo se solicita ese referéndum?', 'Quince días.', ['Treinta días.', 'Diez días.', 'Tres meses.'], 'Artículo 167.3.'],
      ['¿Qué mayoría abre la reforma agravada?', 'Dos tercios de cada Cámara.', ['Tres quintos.', 'Mayoría simple.', 'Mayoría absoluta del Senado.'], 'Artículo 168.1.'],
      ['¿Es obligatorio el referéndum del artículo 168?', 'Sí.', ['No.', 'Solo si lo pide el Gobierno.', 'Solo para el título VIII.'], 'Artículo 168.3.']
    ],
    2: [
      ['¿Qué artículo proclama la igualdad ante la ley?', 'El artículo 14.', ['El artículo 9.', 'El artículo 30.', 'El artículo 55.'], 'Constitución.'],
      ['¿Qué artículos forman la sección de derechos fundamentales?', 'Los artículos 15 a 29.', ['Los artículos 1 a 9.', 'Los artículos 30 a 38.', 'Los artículos 53 a 55.'], 'Título I, capítulo II, sección primera.'],
      ['¿Qué recurso constitucional protege esos derechos?', 'El recurso de amparo.', ['El recurso de alzada.', 'El recurso de reposición.', 'La revisión de oficio.'], 'Artículo 53.2.'],
      ['¿Qué debe respetar la ley que regula un derecho?', 'Su contenido esencial.', ['Solo su denominación.', 'La voluntad del reglamento.', 'El presupuesto anual.'], 'Artículo 53.1.'],
      ['¿Qué mayoría requiere una ley orgánica?', 'Mayoría absoluta del Congreso en votación final sobre el conjunto.', ['Mayoría simple del Senado.', 'Tres quintos de ambas Cámaras.', 'Dos tercios del Congreso.'], 'Artículo 81.2.'],
      ['¿Cuál es materia de ley orgánica?', 'El desarrollo de derechos fundamentales y libertades públicas.', ['Cualquier tasa municipal.', 'Toda instrucción administrativa.', 'El nombramiento de un funcionario.'], 'Artículo 81.1.'],
      ['¿Qué presupuesto habilita un decreto-ley?', 'Extraordinaria y urgente necesidad.', ['Delegación legislativa previa.', 'Mayoría absoluta del Senado.', 'Referéndum obligatorio.'], 'Artículo 86.1.'],
      ['¿En qué plazo decide el Congreso sobre un decreto-ley?', 'Treinta días.', ['Quince días.', 'Seis meses.', 'Un año.'], 'Artículo 86.2.'],
      ['¿Puede un decreto-ley afectar al régimen electoral general?', 'No.', ['Sí, libremente.', 'Solo con informe del Senado.', 'Solo durante un año.'], 'Artículo 86.1.'],
      ['¿Qué norma delega para un texto articulado?', 'Una ley de bases.', ['Una orden ministerial.', 'Un decreto-ley.', 'Un reglamento local.'], 'Artículo 82.2.'],
      ['¿Qué norma delega para refundir textos?', 'Una ley ordinaria.', ['Una circular.', 'Una resolución.', 'Un bando.'], 'Artículo 82.2.'],
      ['¿Quién ejerce la potestad reglamentaria estatal?', 'El Gobierno.', ['El Tribunal Constitucional.', 'El Defensor del Pueblo.', 'El Tribunal de Cuentas.'], 'Artículo 97.'],
      ['¿Puede un reglamento vulnerar una ley?', 'No.', ['Sí, si es posterior.', 'Sí, si lo aprueba un ministro.', 'Solo en materia sancionadora.'], 'Principio de jerarquía normativa.'],
      ['¿Qué principio exige la menor carga necesaria?', 'Proporcionalidad.', ['Publicidad comercial.', 'Desconcentración.', 'Arbitrariedad.'], 'Artículo 129 de la Ley 39/2015.'],
      ['¿Puede un reglamento establecer sanciones retroactivas desfavorables?', 'No.', ['Sí.', 'Solo si se publica.', 'Solo en tributos.'], 'Artículo 9.3 de la Constitución.']
    ],
    3: [
      ['¿Quién es el Jefe del Estado?', 'El Rey.', ['El Presidente del Gobierno.', 'El Presidente del Congreso.', 'El Defensor del Pueblo.'], 'Artículo 56.1.'],
      ['¿Qué caracteriza a la persona del Rey?', 'Es inviolable y no está sujeta a responsabilidad.', ['Responde políticamente ante el Congreso.', 'Puede ser recusado.', 'Depende del Senado.'], 'Artículo 56.3.'],
      ['¿Quién asume responsabilidad por los actos refrendados?', 'Quien los refrenda.', ['El Rey.', 'El Tribunal Constitucional.', 'El Senado.'], 'Artículo 64.2.'],
      ['¿Qué órgano representa al pueblo español?', 'Las Cortes Generales.', ['El Gobierno.', 'El Tribunal de Cuentas.', 'El Consejo de Estado.'], 'Artículo 66.1.'],
      ['¿Qué Cámaras integran las Cortes?', 'Congreso y Senado.', ['Congreso y Gobierno.', 'Senado y Tribunal Supremo.', 'Congreso y Consejo de Estado.'], 'Artículo 66.1.'],
      ['¿Cuál es una función de las Cortes?', 'Aprobar los Presupuestos del Estado.', ['Dirigir la Administración civil.', 'Resolver recursos de amparo.', 'Nombrar alcaldes.'], 'Artículo 66.2.'],
      ['¿Qué carácter tiene el Senado?', 'Cámara de representación territorial.', ['Cámara judicial.', 'Órgano fiscalizador.', 'Autoridad administrativa independiente.'], 'Artículo 69.1.'],
      ['¿Qué es el Defensor del Pueblo?', 'Alto comisionado de las Cortes para defender derechos.', ['Órgano del Gobierno.', 'Tribunal penal.', 'Autoridad tributaria.'], 'Artículo 54.'],
      ['¿Qué puede supervisar el Defensor?', 'La actividad de la Administración.', ['La constitucionalidad de las leyes con sentencia.', 'Los procesos electorales en exclusiva.', 'La política monetaria.'], 'Artículo 54.'],
      ['¿Qué es el Tribunal de Cuentas?', 'Supremo órgano fiscalizador de cuentas y gestión económica pública.', ['Órgano de gobierno de jueces.', 'Cámara territorial.', 'Registro administrativo.'], 'Artículo 136.1.'],
      ['¿De quién depende directamente el Tribunal de Cuentas?', 'De las Cortes Generales.', ['Del Gobierno.', 'Del Rey.', 'De la AEPD.'], 'Artículo 136.1.'],
      ['¿De quién emana la justicia?', 'Del pueblo.', ['Del Gobierno.', 'Del Rey exclusivamente.', 'De las Comunidades Autónomas.'], 'Artículo 117.1.'],
      ['¿A qué están sometidos jueces y magistrados?', 'Únicamente al imperio de la ley.', ['A instrucciones del Gobierno.', 'A acuerdos de partidos.', 'A órdenes de alcaldes.'], 'Artículo 117.1.'],
      ['¿Qué entidades integran la organización territorial?', 'Municipios, provincias y Comunidades Autónomas.', ['Solo Estado y municipios.', 'Comarcas y ministerios.', 'Provincias y embajadas.'], 'Artículo 137.'],
      ['¿Autonomía territorial significa soberanía?', 'No.', ['Sí.', 'Solo para provincias.', 'Solo para capitales.'], 'La autonomía se ejerce dentro de la Constitución.']
    ],
    4: [
      ['¿A qué sirven las Administraciones Públicas?', 'Con objetividad a los intereses generales.', ['A intereses particulares.', 'Al partido gobernante.', 'A sus empleados exclusivamente.'], 'Artículo 3 de la Ley 40/2015.'],
      ['¿Qué unidad es órgano administrativo?', 'La que produce efectos jurídicos frente a terceros o tiene actuación preceptiva.', ['Cualquier mesa física.', 'Toda carpeta.', 'Solo los ministerios.'], 'Artículo 5.1.'],
      ['¿Qué exige crear un órgano?', 'Determinar integración, dependencia, funciones, competencias y créditos.', ['Solo ponerle nombre.', 'Un contrato privado.', 'Una consulta ciudadana obligatoria.'], 'Artículo 5.3.'],
      ['¿Cómo es la competencia?', 'Irrenunciable.', ['Renunciable por voluntad.', 'Transferible siempre.', 'Prescriptible.'], 'Artículo 8.1.'],
      ['¿Qué transfiere la delegación?', 'El ejercicio de la competencia.', ['La titularidad.', 'El presupuesto completo.', 'La personalidad jurídica.'], 'Artículo 9.'],
      ['¿Qué permite la avocación?', 'Asumir un asunto concreto por el órgano superior.', ['Transferir titularidad definitivamente.', 'Crear un organismo.', 'Eliminar un recurso.'], 'Artículo 10.'],
      ['¿Qué puede encomendarse?', 'Actividades materiales o técnicas.', ['La titularidad de la competencia.', 'La potestad legislativa.', 'La resolución judicial.'], 'Artículo 11.'],
      ['¿La delegación de firma altera la competencia?', 'No.', ['Sí, siempre.', 'Solo en sanciones.', 'Solo en contratos.'], 'Artículo 12.'],
      ['¿Qué es la suplencia?', 'Sustitución temporal del titular.', ['Delegación permanente.', 'Transferencia de crédito.', 'Avocación colectiva.'], 'Artículo 13.'],
      ['¿Qué debe hacer quien tiene interés personal en un asunto?', 'Abstenerse.', ['Resolverlo igualmente.', 'Delegar la firma y seguir.', 'Archivar sin más.'], 'Artículo 23.'],
      ['¿Quién puede plantear recusación?', 'Los interesados.', ['Solo el Gobierno.', 'Solo el órgano superior.', 'Cualquier empleado sin relación.'], 'Artículo 24.'],
      ['¿Implica siempre invalidez la falta de abstención?', 'No automáticamente.', ['Sí, en todo caso.', 'Nunca produce responsabilidad.', 'Convierte el acto en ley.'], 'Artículo 23.4.'],
      ['¿Cuál es un principio interadministrativo?', 'Lealtad institucional.', ['Competencia desleal.', 'Secreto absoluto.', 'Jerarquía entre todas las Administraciones.'], 'Artículo 140.'],
      ['¿Qué deben respetar las Administraciones entre sí?', 'El ejercicio legítimo de competencias ajenas.', ['Solo sus propios intereses.', 'La subordinación municipal al Estado en todo.', 'La reserva de información siempre.'], 'Artículo 141.'],
      ['¿Qué instrumento reúne a Estado y comunidades por sectores?', 'La Conferencia Sectorial.', ['El Tribunal de Cuentas.', 'La Junta Electoral.', 'El registro civil.'], 'Ley 40/2015.']
    ],
    10: [
      ['¿Qué funcionamiento puede generar responsabilidad?', 'Normal o anormal de los servicios públicos.', ['Solo anormal.', 'Solo ilícito penal.', 'Solo contractual.'], 'Artículo 32.1 de la Ley 40/2015.'],
      ['¿Qué circunstancia excluye responsabilidad?', 'La fuerza mayor.', ['El funcionamiento normal.', 'La existencia de daño.', 'La reclamación en plazo.'], 'Artículo 32.1.'],
      ['¿Cómo debe ser el daño?', 'Efectivo, evaluable e individualizado.', ['Hipotético y general.', 'Solo moral.', 'Siempre futuro.'], 'Artículo 32.2.'],
      ['¿La anulación de un acto implica indemnización automática?', 'No.', ['Sí.', 'Solo si lo anula la Administración.', 'Solo si era reglamento.'], 'Artículo 32.1.'],
      ['¿Qué requisito expresa la antijuridicidad?', 'No tener deber jurídico de soportar el daño.', ['Que exista una multa.', 'Que el servicio sea privado.', 'Que haya dolo del ciudadano.'], 'Artículo 32.1.'],
      ['¿Cuál es el plazo general para reclamar?', 'Un año.', ['Tres meses.', 'Cuatro años.', 'Cinco años.'], 'Artículo 67.1 de la Ley 39/2015.'],
      ['¿Desde cuándo se cuenta en daños físicos?', 'Desde la curación o determinación de secuelas.', ['Siempre desde el accidente.', 'Desde el alta laboral exclusivamente.', 'Desde la reclamación.'], 'Artículo 67.1.'],
      ['¿Qué debe indicar la solicitud?', 'Lesiones, causalidad, evaluación, momento y prueba.', ['Solo nombre.', 'Solo cuantía.', 'Solo órgano destinatario.'], 'Artículo 67.2.'],
      ['¿Qué informe es preceptivo?', 'El del servicio cuyo funcionamiento causó la lesión.', ['El del interesado.', 'El del Senado.', 'El del Tribunal Constitucional.'], 'Artículo 81.1.'],
      ['¿En cuánto tiempo debe emitirse ese informe?', 'Diez días.', ['Un mes.', 'Tres días.', 'Seis meses.'], 'Artículo 81.1.'],
      ['¿Qué debe resolver el acto final?', 'Causalidad, daño, cuantía y forma de indemnización.', ['Solo competencia.', 'Solo prescripción.', 'Solo identidad del reclamante.'], 'Artículo 91.2.'],
      ['¿Qué ocurre tras seis meses sin resolver?', 'Puede entenderse desestimada la reclamación.', ['Se estima automáticamente.', 'Caduca el daño.', 'Se paga de oficio.'], 'Artículo 91.3.'],
      ['¿Contra quién reclama directamente el perjudicado?', 'Contra la Administración.', ['Contra el empleado en vía administrativa.', 'Contra el proveedor siempre.', 'Contra el Rey.'], 'Artículo 36.1 de la Ley 40/2015.'],
      ['¿Cuándo repite la Administración contra su personal?', 'Cuando hubo dolo o culpa o negligencia graves.', ['Ante cualquier error leve.', 'Nunca.', 'Solo por delito.'], 'Artículo 36.2.'],
      ['¿Suspende siempre el proceso penal el procedimiento patrimonial?', 'No.', ['Sí.', 'Solo si lo pide el empleado.', 'Solo en entidades locales.'], 'Artículo 37.2.']
    ],
    11: [
      ['¿Qué debe hacer una entidad local con un expediente iniciado?', 'Resolverlo expresamente.', ['Archivarlo por silencio.', 'Remitirlo siempre al Estado.', 'Esperar al interesado.'], 'Artículo 176 del ROF.'],
      ['¿Qué ley rige el silencio administrativo local?', 'La legislación del procedimiento administrativo común.', ['Solo la ordenanza fiscal.', 'La LOREG.', 'El Código Penal.'], 'Artículo 176 del ROF.'],
      ['¿Qué registro debe tener cada Administración?', 'Un Registro Electrónico General.', ['Un registro privado.', 'Solo un libro en papel.', 'Un registro judicial.'], 'Artículo 16 de la Ley 39/2015.'],
      ['¿Qué deja constancia el Registro General local?', 'Entrada y salida de documentos.', ['Solo asistencia del personal.', 'Solo contratos.', 'Solo facturas.'], 'Artículo 151 del ROF.'],
      ['¿Cómo se practican los asientos?', 'Por orden temporal.', ['Por importancia política.', 'Por orden alfabético siempre.', 'Una vez al mes.'], 'Artículo 16.2 de la Ley 39/2015.'],
      ['¿Qué debe hacerse tras registrar un documento?', 'Cursarlo sin dilación a su destinatario.', ['Retenerlo diez días.', 'Destruir el original.', 'Publicarlo siempre.'], 'Artículo 16.2.'],
      ['¿Qué puede pedir quien presenta un escrito?', 'Recibo o copia acreditativa con fecha y hora.', ['Una sentencia.', 'Un certificado digital gratuito siempre.', 'Una subvención.'], 'Artículo 159 del ROF y artículo 16.3.'],
      ['¿Cuál es un lugar válido de presentación?', 'Una oficina de Correos en la forma reglamentaria.', ['Cualquier comercio.', 'Una red social.', 'Un domicilio particular.'], 'Artículo 16.4 de la Ley 39/2015.'],
      ['¿Qué plazo tiene la subsanación ordinaria?', 'Diez días.', ['Cinco días.', 'Un mes.', 'Tres meses.'], 'Artículo 68.1.'],
      ['¿Qué ocurre si un obligado presenta en papel?', 'Debe subsanar electrónicamente.', ['Se rechaza sin trámite siempre.', 'Se considera electrónica.', 'Se registra con fecha definitiva de papel.'], 'Artículo 68.4.'],
      ['¿Qué fecha cuenta tras esa subsanación?', 'La de presentación electrónica de la subsanación.', ['La fecha del papel.', 'La del requerimiento.', 'La de resolución.'], 'Artículo 68.4.'],
      ['¿En qué plazo debe cursarse una notificación desde el acto?', 'Diez días.', ['Un mes.', 'Tres días.', 'Seis meses.'], 'Artículo 40.2.'],
      ['¿Es el correo de aviso una notificación?', 'No.', ['Sí, siempre.', 'Solo si lleva asunto.', 'Solo para personas físicas.'], 'Artículo 41.6.'],
      ['¿Qué efecto tiene rechazar una notificación?', 'Se tiene por efectuado el trámite y continúa el procedimiento.', ['Se anula el acto.', 'Se estima la solicitud.', 'Se reinicia el plazo.'], 'Artículo 41.5.'],
      ['¿Cuándo se rechaza una notificación electrónica no abierta?', 'Tras diez días naturales desde su puesta a disposición.', ['Tras tres días hábiles.', 'Tras un mes.', 'Nunca.'], 'Artículo 43.2.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      1: 'BOE · Constitución Española: títulos preliminar, IX y X',
      2: 'BOE · Constitución Española / Ley 39/2015',
      3: 'BOE · Constitución Española',
      4: 'BOE · Ley 40/2015',
      10: 'BOE · Ley 40/2015 / Ley 39/2015',
      11: 'BOE · Ley 39/2015 / ROF'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v50-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source: sources[number]
      };
    });
  }

  function isGeneric(question) {
    const text = norm(`${question?.text || ''} ${question?.justification || ''}`);
    return ['como debe estudiarse', 'enfoque correcto para preparar', 'respuesta esta mejor orientada', 'debe ser autocontenida', 'sin anadir paja'].some(fragment => text.includes(fragment));
  }

  function valid(question) {
    const options = question?.options || [];
    return Boolean(question?.text && question?.justification && options.length === 4 && new Set(options.map(option => norm(option.text))).size === 4 && options.some(option => option.letter === question.answer));
  }

  Object.entries(detail).forEach(([key, value]) => {
    const number = Number(key);
    const currentTheme = theme(number);
    if (!currentTheme) return;
    currentTheme.sections = [
      sec('Resumen orientado al aprobado', [`Tema troncal de alta rentabilidad. Fuente principal: ${value.source}. Memoriza estructura, órgano, mayoría, plazo, competencia y efecto jurídico.`]),
      sec('Rigor normativo', ['Contenido revisado con textos consolidados oficiales vigentes en julio de 2026 y limitado al título literal del programa.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Norma', value.source],
      ['Órgano o sujeto', 'Cámara, Tribunal, Administración, órgano competente, interesado o empleado público.'],
      ['Regla', 'Mayoría, competencia, garantía, requisito, procedimiento o relación jurídica.'],
      ['Plazo', 'Reforma, convalidación, reclamación, subsanación, resolución o notificación.'],
      ['Efecto', 'Validez, indemnización, desestimación, abstención, registro, rechazo o continuación.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v50';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.50';

    const existing = (ope.themeTests[currentTheme.id] || []).filter(valid).filter(question => !isGeneric(question));
    const manual = makeQuestions(number, rawQuestions[number]);
    const seen = new Set();
    const merged = [...manual, ...existing].filter(question => {
      const keyText = norm(question.text);
      if (!keyText || seen.has(keyText)) return false;
      seen.add(keyText);
      return true;
    }).slice(0, 40);
    ope.themeTests[currentTheme.id] = merged;
    currentTheme.globalAuditV42 = {
      total: merged.length,
      content: merged.length,
      generic: 0,
      state: merged.length >= 30 ? 'objetivo 30+' : merged.length >= 20 ? 'banco sólido' : 'base real',
      target: 30
    };
  });

  const pendingTheme = theme(22);
  if (pendingTheme) {
    pendingTheme.auditStatus = 'pendiente de Acuerdo Regulador y Estatutos oficiales vigentes del OAPGT';
    pendingTheme.motorCoverage = 'diputacion-fuente-interna-pendiente-v50';
  }

  const allThemes = ope.themes.map(item => {
    const questions = (ope.themeTests[item.id] || []).filter(valid);
    const generic = questions.filter(isGeneric).length;
    const content = questions.length - generic;
    item.globalAuditV42 = { total: questions.length, content, generic, state: content >= 30 ? 'objetivo 30+' : content >= 20 ? 'banco sólido' : content >= 10 ? 'base real' : content ? 'insuficiente' : 'solo plantilla', target: 30 };
    return { number: Number(item.number), title: item.title, total: questions.length, content, generic, state: item.globalAuditV42.state };
  });
  const totals = allThemes.reduce((acc, item) => ({ total: acc.total + item.total, content: acc.content + item.content, generic: acc.generic + item.generic }), { total: 0, content: 0, generic: 0 });
  ope.globalTestAudit = {
    version: 'v0.50.0', themes: allThemes, ...totals,
    readyThemes: allThemes.filter(item => item.content >= 20).length,
    targetThemes: allThemes.filter(item => item.content >= 30).length,
    genericThemes: allThemes.filter(item => item.generic > item.content).length,
    targetPerTheme: 30
  };

  function hash(text, seed) {
    let result = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      result ^= text.charCodeAt(index);
      result = Math.imul(result, 16777619);
    }
    return result >>> 0;
  }
  const shuffle = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 5000 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 300) {
      for (const pool of realPools) {
        if (!pool.questions.length || Number(pool.theme.number) === 22) continue;
        const question = pool.questions[(round + seed) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= 55) break;
      }
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5011);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v50-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v50-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v50-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, expectedMain: 50, expectedReserve: 5, minutes: 60, coveredThemes: new Set(ordered.map(question => question.auditTheme)).size, realOnly: true, excludedPendingThemes: [22] }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Desarrollados en profundidad los temas 1 a 4 y 10 a 11 de Diputación',
      'Añadidas 90 preguntas manuales constitucionales, de régimen jurídico, responsabilidad y procedimiento local',
      'Alcanzados 39 temas profundos y 585 preguntas manuales acumuladas',
      'Único tema sin primera vuelta cerrada: tema 22, pendiente de fuentes internas oficiales'
    ]
  });

  window.OPOWEB_DIPUTACION_V50 = {
    version: `v${VERSION}`,
    revisedThemes: [1, 2, 3, 4, 10, 11],
    manualQuestions: 90,
    cumulativeManualQuestions: 585,
    totalDeepThemes: 39,
    pendingInternalThemes: [22],
    officialSources: ['Constitución Española', 'Ley 40/2015', 'Ley 39/2015', 'ROF']
  };
})();