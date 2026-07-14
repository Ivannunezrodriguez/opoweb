(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-13';
  const fuente = {
    ce: { label: 'Constitución Española', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    lotc: { label: 'Ley Orgánica 2/1979, del Tribunal Constitucional', reference: 'BOE-A-1979-23709', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709' },
    ley39: { label: 'Ley 39/2015, del Procedimiento Administrativo Común', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    ley40: { label: 'Ley 40/2015, de Régimen Jurídico del Sector Público', reference: 'BOE-A-2015-10566', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' },
    lbrl: { label: 'Ley 7/1985, reguladora de las Bases del Régimen Local', reference: 'BOE-A-1985-5392', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392' },
    loreg: { label: 'Ley Orgánica 5/1985, del Régimen Electoral General', reference: 'BOE-A-1985-11672', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672' }
  };

  const THEORY = {
    1: {
      sources: [fuente.ce, fuente.lotc],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Este tema exige dominar la Constitución de 1978 como norma suprema, su estructura formal, el sistema de derechos y deberes, el régimen de garantías, los supuestos de suspensión y la reforma constitucional. Para La Puebla el enunciado oficial no pide una visión completa de todos los órganos constitucionales, sino un bloque concentrado en estructura, reforma, derechos y modelo económico. Por eso el estudio debe priorizar Título Preliminar, Título I, Título VII, Título IX y Título X, sin olvidar la función del Tribunal Constitucional como garante de la supremacía constitucional.',
          'La idea central es que la Constitución no es un programa político sino una norma jurídica vinculante. Obliga a ciudadanía y poderes públicos, condiciona la validez de leyes y reglamentos y sirve de parámetro para interpretar todo el ordenamiento. El artículo 9.1 recoge la sujeción a la Constitución y al resto del ordenamiento; el 9.3 añade legalidad, jerarquía normativa, publicidad normativa, irretroactividad sancionadora desfavorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Constitución se compone de Preámbulo, Título Preliminar, diez títulos numerados, cuatro disposiciones adicionales, nueve transitorias, una derogatoria y una final. Sus 169 artículos se ordenan en una parte dogmática, centrada en valores, principios, derechos y deberes, y una parte orgánica, dedicada a instituciones del Estado, organización territorial, Tribunal Constitucional y reforma. El Título Preliminar fija las decisiones básicas: Estado social y democrático de Derecho, soberanía nacional en el pueblo español, Monarquía parlamentaria, unidad de la Nación española, autonomía de nacionalidades y regiones, lengua oficial, bandera, capital, partidos, sindicatos, organizaciones empresariales, Fuerzas Armadas y principios generales.',
          'Los derechos se estudian por niveles de protección. El artículo 14 reconoce igualdad y no discriminación. La Sección 1.ª del Capítulo II del Título I contiene derechos fundamentales y libertades públicas, artículos 15 a 29. La Sección 2.ª recoge derechos y deberes de los ciudadanos. El Capítulo III contiene principios rectores de política social y económica. El artículo 53 es básico: los derechos del Capítulo II vinculan a todos los poderes públicos; los del artículo 14 y Sección 1.ª gozan de procedimiento preferente y sumario y recurso de amparo; los principios rectores solo pueden alegarse ante la jurisdicción según las leyes que los desarrollen.',
          'La garantía y suspensión no son sinónimos. Garantía es el conjunto de mecanismos que protegen los derechos: reserva de ley, respeto del contenido esencial, tutela judicial, recurso de amparo, Defensor del Pueblo y control constitucional. Suspensión es una limitación extraordinaria prevista constitucionalmente. La suspensión general del artículo 55.1 se vincula a estados de excepción y sitio; la suspensión individual del 55.2 se refiere a investigaciones sobre bandas armadas o terrorismo, con intervención judicial y control parlamentario. No todos los derechos son suspendibles.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La reforma constitucional se regula en los artículos 166 a 169. La iniciativa se ejerce en los términos de la iniciativa legislativa, pero queda excluida la iniciativa popular. La reforma ordinaria del artículo 167 exige aprobación por tres quintos de cada Cámara. Si no hay acuerdo, se intenta por comisión paritaria; si el Senado aprueba por mayoría absoluta, el Congreso puede aprobar por dos tercios. Hay referéndum si lo solicita una décima parte de cualquiera de las Cámaras dentro de quince días. La reforma agravada del artículo 168 se aplica a revisión total o a reformas que afecten al Título Preliminar, Sección 1.ª del Capítulo II del Título I o Título II: aprobación por dos tercios, disolución de Cortes, ratificación por las nuevas Cámaras, nueva aprobación por dos tercios y referéndum obligatorio.',
          'El modelo económico constitucional se concentra en el Título VII. El artículo 31 exige contribuir al sostenimiento de los gastos públicos según capacidad económica mediante sistema tributario justo inspirado en igualdad y progresividad, sin alcance confiscatorio. El artículo 33 reconoce propiedad privada y herencia, con función social y posibilidad de expropiación por causa justificada de utilidad pública o interés social mediante indemnización. El artículo 38 reconoce libertad de empresa en el marco de la economía de mercado. Los poderes públicos garantizan y protegen su ejercicio y la defensa de la productividad, de acuerdo con las exigencias de la economía general y, en su caso, de la planificación.',
          'El Tribunal Constitucional, Título IX, es independiente de los demás órganos constitucionales. Se compone de doce miembros nombrados por el Rey: cuatro a propuesta del Congreso por tres quintos, cuatro del Senado por tres quintos, dos del Gobierno y dos del Consejo General del Poder Judicial. Se nombran por nueve años y se renuevan por terceras partes cada tres. Sus competencias esenciales son recurso y cuestión de inconstitucionalidad, recurso de amparo, conflictos de competencia entre Estado y comunidades autónomas, conflictos entre órganos constitucionales y demás materias previstas en Constitución y ley orgánica.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Estructura: Preámbulo, Título Preliminar, diez títulos, disposiciones y 169 artículos. Derechos: artículo 14, Sección 1.ª, Sección 2.ª y principios rectores. Garantía: artículo 53. Suspensión: artículo 55. Modelo económico: propiedad, libertad de empresa, sistema tributario justo y planificación. Reforma: ordinaria del 167 y agravada del 168. Tribunal Constitucional: doce miembros, nueve años, renovación por tercios y control de constitucionalidad.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Preguntable: número de títulos y artículos; materias de reforma agravada; referéndum obligatorio o facultativo; derechos amparables; diferencia entre derechos fundamentales, derechos de ciudadanos y principios rectores; Tribunal Constitucional fuera del Poder Judicial; valores superiores; capacidad económica y prohibición de confiscatoriedad; función social de la propiedad.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué partes de la Constitución activan la reforma agravada del artículo 168? ¿Qué derechos permiten recurso de amparo? ¿Qué diferencia hay entre garantía del artículo 53 y suspensión del artículo 55?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En test conviene contestar por niveles: primero rango constitucional y estructura; después derechos y garantía; finalmente reforma y Tribunal Constitucional. Cuando aparezcan porcentajes o mayorías, revisa si se habla de tres quintos, dos tercios, mayoría absoluta o una décima parte. El error típico es confundir el referéndum facultativo de la reforma ordinaria con el obligatorio de la reforma agravada.'
        ]}
      ],
      tree: 'Constitución 1978\n├─ Estructura: Preámbulo, Título Preliminar, I-X, disposiciones\n├─ Derechos y deberes\n│  ├─ Art. 14 + arts. 15-29: tutela reforzada\n│  ├─ Sección 2.ª: derechos y deberes\n│  └─ Capítulo III: principios rectores\n├─ Garantías: art. 53\n├─ Suspensión: art. 55\n├─ Modelo económico: arts. 31, 33, 38 y Título VII\n├─ Tribunal Constitucional: Título IX\n└─ Reforma: arts. 167 y 168',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Estructura','169 artículos y diez títulos','CE'],['Amparo','Art. 14, arts. 15-29 y 30.2','Art. 53.2 CE'],['Suspensión','Estados de excepción/sitio y supuestos individuales','Art. 55 CE'],['Modelo económico','Capacidad económica, propiedad y libertad de empresa','Arts. 31, 33 y 38 CE'],['Reforma ordinaria','3/5; referéndum si lo pide 1/10','Art. 167 CE'],['Reforma agravada','2/3, disolución y referéndum obligatorio','Art. 168 CE']]
    },
    2: {
      sources: [fuente.ley39, fuente.ley40],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El segundo tema abre la Ley 39/2015. Debe estudiarse como la base de cualquier expediente municipal: quién puede intervenir, cómo actúa la Administración, qué derechos tiene la ciudadanía y cómo se computan los plazos. En una plaza de auxiliar administrativo este bloque es operativo: registro, subsanación, representación, identificación, acceso al expediente, notificación, obligación de resolver y cómputo de términos aparecen constantemente en test y supuesto práctico.',
          'La Ley 39/2015 regula procedimiento administrativo común, requisitos de validez y eficacia de actos, reglas de tramitación, revisión y recursos. Se aplica al sector público definido en la Ley 40/2015: Administración General del Estado, comunidades autónomas, entidades locales y sector público institucional en los términos previstos. Su finalidad es que las Administraciones tramiten con garantías comunes, sin que cada órgano invente sus propios procedimientos salvo especialidades legales.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Las disposiciones generales fijan objeto, ámbito subjetivo y principios básicos. La Ley 39/2015 distingue personas físicas, jurídicas, interesados, representantes y sujetos obligados a relacionarse electrónicamente. Las personas físicas pueden elegir medio salvo obligación legal o reglamentaria; las jurídicas, entidades sin personalidad, profesionales colegiados para trámites de su actividad, representantes de obligados y empleados públicos en trámites por razón de su condición están obligados a medios electrónicos.',
          'El interesado no es cualquier ciudadano curioso. Son interesados quienes promueven el procedimiento como titulares de derechos o intereses legítimos individuales o colectivos; quienes, sin iniciarlo, puedan resultar afectados por la decisión; y quienes tengan intereses legítimos que puedan resultar afectados y comparezcan antes de resolución definitiva. Esta condición permite acceder al expediente, formular alegaciones, aportar documentos, conocer estado de tramitación y recurrir en los términos legales.',
          'La representación se presume para actos de mero trámite, pero debe acreditarse para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos. Puede acreditarse por cualquier medio válido en Derecho que deje constancia fidedigna, mediante apoderamiento apud acta presencial o electrónico o mediante inscripción en registro electrónico de apoderamientos. La falta o insuficiencia de representación es subsanable.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La actividad administrativa incluye normas generales de actuación, derechos de las personas y deber de resolver. Las personas tienen derecho a comunicarse por punto de acceso general electrónico, ser asistidas en medios electrónicos, usar lenguas oficiales conforme al ordenamiento, acceder a información pública, archivos y registros, ser tratadas con respeto, exigir responsabilidades y obtener información y orientación sobre requisitos jurídicos o técnicos. Los interesados añaden derechos específicos: conocer estado del procedimiento, sentido del silencio, órgano competente, actos de trámite dictados, acceder y copiar documentos, identificar autoridades y personal, no presentar documentos originales salvo excepción, no aportar documentos ya en poder de la Administración o elaborados por ella, formular alegaciones, utilizar medios de defensa y actuar asistidos de asesor.',
          'La obligación de resolver es una pieza clave. La Administración debe dictar resolución expresa y notificarla en todos los procedimientos, cualquiera que sea su forma de iniciación, salvo terminación convencional o deberes de comunicación previa en supuestos legalmente previstos. El plazo máximo lo fija la norma reguladora y, si no dice nada, es de tres meses. En procedimientos iniciados de oficio se cuenta desde el acuerdo de iniciación; en iniciados a solicitud, desde la entrada de la solicitud en el registro electrónico de la Administración u organismo competente para tramitar.',
          'Los términos y plazos se computan con reglas estrictas. Los plazos por horas se entienden hábiles salvo norma contraria, y son hábiles todas las horas del día hábil. Los plazos por días se entienden hábiles salvo que una ley o el Derecho de la Unión establezca días naturales; sábados, domingos y festivos son inhábiles. Los plazos por meses o años se computan de fecha a fecha; si en el mes de vencimiento no hay día equivalente, vence el último día del mes; si el último día es inhábil, se prorroga al primer día hábil siguiente. La declaración de urgencia reduce plazos a la mitad salvo solicitudes y recursos; la ampliación requiere no perjudicar derechos de terceros y acordarse antes del vencimiento.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Interesado: promueve, puede resultar afectado o comparece con interés legítimo antes de resolución. Representación: se acredita para actos relevantes y se presume en trámite. Derechos: personas en general e interesados en expediente. Obligación de resolver: regla general. Plazo supletorio: tres meses. Días: hábiles salvo norma en contrario. Meses y años: de fecha a fecha.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Muy preguntable: sujetos obligados a relación electrónica; cuándo se acredita representación; diferencia entre persona e interesado; plazo supletorio de tres meses; inicio del cómputo según procedimiento de oficio o a solicitud; sábados inhábiles; ampliación frente a urgencia; documentos que no deben aportarse de nuevo.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Desde cuándo se cuenta el plazo máximo en un procedimiento iniciado a solicitud? ¿Qué actos exigen acreditar representación? ¿Los plazos por días son naturales o hábiles si la norma no dice nada?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Para cualquier supuesto, identifica primero si actúa una persona obligada electrónicamente, si quien firma es interesado o representante y desde qué fecha empieza el plazo. En test, desconfía de opciones con “siempre naturales”, “nunca subsanable” o “la Administración puede no resolver”.'
        ]}
      ],
      tree: 'Ley 39/2015 inicial\n├─ Ámbito y objeto\n├─ Interesados\n│  ├─ Titulares que promueven\n│  ├─ Posibles afectados\n│  └─ Interés legítimo comparecido\n├─ Representación\n├─ Derechos de personas e interesados\n├─ Obligación de resolver\n└─ Términos y plazos',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Interesado','Promueve, afectado o interés legítimo comparecido','Art. 4 Ley 39/2015'],['Representación','Necesaria para solicitudes, recursos, desistimiento y renuncia','Art. 5'],['Relación electrónica','Obligatoria para sujetos del art. 14.2','Art. 14'],['Derechos','Personas e interesados tienen catálogos diferenciados','Arts. 13 y 53'],['Plazo supletorio','Tres meses si la norma no fija otro','Art. 21'],['Días hábiles','Sábados, domingos y festivos son inhábiles','Art. 30']]
    },
    3: {
      sources: [fuente.ley39, fuente.ley40],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 3 desarrolla el recorrido completo del procedimiento administrativo común: derechos del interesado, iniciación, ordenación, instrucción, finalización y ejecución. Además incorpora las especialidades sancionadoras, la responsabilidad patrimonial y la tramitación simplificada. Para estudiar con utilidad hay que verlo como una línea de expediente: entrada o acuerdo de inicio, comprobación, impulso, prueba, informes, audiencia, propuesta, resolución, notificación y ejecución.',
          'La clave para aprobar es no memorizar trámites sueltos, sino comprender su función. La iniciación abre el procedimiento; la ordenación lo impulsa; la instrucción permite conocer hechos y fundamentos; la finalización produce una decisión o cierre; la ejecución hace efectivo el acto. En un Ayuntamiento, cualquier solicitud de licencia, subvención, padrón, reclamación de daños o expediente sancionador se analiza con esta estructura.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El procedimiento puede iniciarse de oficio o a solicitud de interesado. De oficio puede nacer por propia iniciativa, orden superior, petición razonada de otros órganos o denuncia. La denuncia no convierte automáticamente al denunciante en interesado; solo lo será si tiene derecho o interés legítimo afectado. La solicitud debe contener identificación, hechos, razones y petición, lugar y fecha, firma o acreditación de voluntad, órgano destinatario y, si procede, código de identificación del órgano.',
          'La subsanación es esencial. Si la solicitud no reúne requisitos, se requiere al interesado para subsanar en diez días, con indicación de que, si no lo hace, se le tendrá por desistido previa resolución. El plazo puede ampliarse prudencialmente hasta cinco días cuando la aportación presente dificultades especiales, salvo procedimientos selectivos o de concurrencia competitiva. No debe confundirse desistimiento por no subsanar con desestimación de fondo.',
          'La ordenación responde al principio de impulso de oficio. Los expedientes deben tramitarse por orden riguroso de incoación en asuntos de homogénea naturaleza salvo orden motivada. Se acuerdan en un solo acto los trámites que admitan impulso simultáneo y no sea obligado cumplir sucesivamente. Esto conecta con eficacia y economía procedimental, pero no elimina garantías de audiencia, prueba o informes cuando sean preceptivos.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La instrucción integra alegaciones, prueba, informes, participación de interesados, audiencia e información pública. Los interesados pueden aducir alegaciones y aportar documentos en cualquier momento anterior al trámite de audiencia. La prueba se abre cuando la Administración no tenga por ciertos los hechos alegados o lo exija la naturaleza del procedimiento; pueden rechazarse pruebas manifiestamente improcedentes o innecesarias mediante resolución motivada. Los informes pueden ser preceptivos o facultativos, vinculantes o no vinculantes; salvo previsión expresa, son facultativos y no vinculantes. La audiencia se practica instruido el procedimiento y antes de redactar propuesta de resolución, salvo que no figuren ni se tengan en cuenta otros hechos o alegaciones que los aportados por el interesado.',
          'La finalización puede producirse por resolución, desistimiento, renuncia, caducidad, imposibilidad material sobrevenida o terminación convencional. La resolución debe decidir todas las cuestiones planteadas y aquellas derivadas del procedimiento, ser congruente y motivarse cuando proceda. La Administración no puede abstenerse de resolver por silencio, oscuridad o insuficiencia de preceptos. La terminación convencional requiere pactos, acuerdos o convenios que no sean contrarios al ordenamiento ni versen sobre materias no susceptibles de transacción.',
          'La ejecución parte de la ejecutividad de los actos administrativos. La Administración puede ejecutar forzosamente previo apercibimiento, salvo ejecución inmediata permitida. Los medios son apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas. Debe elegirse el medio menos restrictivo y respetar proporcionalidad. Si fuera necesaria entrada en domicilio, se requiere consentimiento del titular o autorización judicial. No hay ejecución material válida sin acto previo que la fundamente y sin respeto a garantías.',
          'En sancionador deben respetarse legalidad, tipicidad, irretroactividad desfavorable, responsabilidad, proporcionalidad, prescripción y presunción de inocencia. La Ley 39/2015 regula especialidades procedimentales: iniciación siempre de oficio, separación entre órgano instructor y sancionador cuando sea posible, hechos, infracción, sanción posible, instructor, órgano competente y medidas provisionales. En responsabilidad patrimonial se exige daño efectivo, evaluable económicamente e individualizado, antijurídico, relación causal con funcionamiento del servicio y ausencia de fuerza mayor. La tramitación simplificada puede acordarse por razones de interés público o falta de complejidad y conserva trámites esenciales.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Inicio: oficio o solicitud. Subsanación: diez días y desistimiento previa resolución. Ordenación: impulso de oficio. Instrucción: alegaciones, prueba, informes, audiencia e información pública. Finalización: resolución, desistimiento, renuncia, caducidad, imposibilidad o convenio. Ejecución: apremio, subsidiaria, multa coercitiva o compulsión. Sancionador: garantías y presunción de inocencia. Responsabilidad: daño antijurídico y causalidad.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Preguntable: denuncia no siempre da condición de interesado; subsanación no es resolución de fondo; informes por defecto facultativos y no vinculantes; audiencia antes de propuesta; medios de ejecución forzosa; entrada en domicilio; iniciación sancionadora de oficio; requisitos de responsabilidad patrimonial; simplificado por interés público o falta de complejidad.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué ocurre si no se subsana una solicitud? ¿Cuándo puede omitirse el trámite de audiencia? ¿Qué requisitos debe reunir el daño para generar responsabilidad patrimonial?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En supuestos, escribe siempre el itinerario: inicio, subsanación si procede, instrucción, audiencia, resolución, notificación y ejecución. En sancionador, separa garantías materiales de trámites procedimentales. En responsabilidad patrimonial, nunca olvides daño efectivo, antijuridicidad y nexo causal.'
        ]}
      ],
      tree: 'Procedimiento común\n├─ Inicio\n│  ├─ Oficio\n│  └─ Solicitud\n├─ Subsanación\n├─ Ordenación\n├─ Instrucción\n│  ├─ Alegaciones\n│  ├─ Prueba\n│  ├─ Informes\n│  └─ Audiencia\n├─ Finalización\n├─ Ejecución\n├─ Sancionador\n├─ Responsabilidad patrimonial\n└─ Simplificado',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Solicitud','Identificación, hechos, petición, firma y órgano','Art. 66 Ley 39/2015'],['Subsanación','10 días; desistimiento previa resolución','Art. 68'],['Impulso','De oficio en todos sus trámites','Art. 71'],['Audiencia','Antes de propuesta de resolución','Art. 82'],['Ejecución forzosa','Apremio, subsidiaria, multa coercitiva, compulsión','Art. 100'],['Simplificado','Interés público o falta de complejidad','Art. 96']]
    },
    4: {
      sources: [fuente.ley39, fuente.ley40],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 4 se concentra en cómo corrige la Administración sus propios actos y cómo los interesados los impugnan antes de acudir a la vía judicial. Hay que distinguir revisión de oficio, recursos administrativos, declaración de lesividad, revocación y rectificación de errores. En el examen suelen mezclar nulidad, anulabilidad, alzada, reposición y recurso extraordinario de revisión; la respuesta correcta depende de si el acto es firme, si pone fin a la vía administrativa y del tipo de vicio.',
          'La revisión en vía administrativa no es una segunda oportunidad ilimitada. La Administración está sometida a legalidad, seguridad jurídica y límites temporales o materiales. Los interesados tienen derecho a recurrir, pero deben usar el recurso procedente y dentro de plazo. Un auxiliar debe saber informar sin confundir al ciudadano: no es lo mismo un recurso de alzada que una reposición, ni una queja que un recurso, ni una rectificación de error que cambiar el sentido de una resolución.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La nulidad de pleno derecho afecta a vicios especialmente graves: lesión de derechos fundamentales, órgano manifiestamente incompetente por materia o territorio, contenido imposible, actos constitutivos de infracción penal o dictados como consecuencia de esta, omisión total y absoluta del procedimiento, actos expresos o presuntos contrarios al ordenamiento por los que se adquieren facultades sin requisitos esenciales y otros supuestos legales. Los actos nulos no quedan convalidados por el paso del tiempo, aunque la revisión tiene límites.',
          'La anulabilidad es la regla general para infracciones del ordenamiento que no sean nulidad. Incluye desviación de poder. Los defectos de forma solo determinan anulabilidad cuando el acto carece de requisitos indispensables para alcanzar su fin o produce indefensión. La actuación fuera de plazo solo anula si lo impone la naturaleza del término. Los actos anulables pueden convalidarse si se subsana el vicio y la convalidación produce efectos desde su fecha, salvo retroactividad permitida.',
          'La rectificación de errores materiales, de hecho o aritméticos puede hacerse en cualquier momento, de oficio o a instancia de interesado. Es una corrección evidente que no exige interpretación jurídica compleja ni permite alterar el fondo. La revocación de actos desfavorables o de gravamen es posible mientras no constituya dispensa no permitida, sea contraria a igualdad o interés público o al ordenamiento. La lesividad permite impugnar ante la jurisdicción contencioso-administrativa actos favorables anulables, previa declaración dentro de plazo.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La revisión de oficio permite declarar la nulidad de actos administrativos firmes y disposiciones administrativas nulas. En actos favorables firmes requiere dictamen favorable del Consejo de Estado u órgano consultivo equivalente. Puede iniciarse de oficio o a solicitud de interesado en el caso de actos. El órgano competente puede inadmitir solicitudes sin dictamen cuando no se basen en causa de nulidad, carezcan manifiestamente de fundamento o se hubieran desestimado otras iguales en cuanto al fondo. Si transcurre el plazo de seis meses sin resolver en procedimientos iniciados de oficio, se produce caducidad; si fue a solicitud, puede entenderse desestimada por silencio.',
          'El recurso de alzada procede contra resoluciones y actos de trámite cualificados que no ponen fin a la vía administrativa. Se presenta ante el órgano que dictó el acto o ante el competente para resolver. El plazo es de un mes si el acto es expreso; si no lo es, en cualquier momento a partir del día siguiente a aquel en que se produzcan los efectos del silencio. El plazo máximo para resolver y notificar es de tres meses. Como regla, el silencio en alzada es desestimatorio, con la excepción del recurso contra desestimación presunta de solicitud, en que puede ser estimatorio salvo materias excluidas.',
          'El recurso potestativo de reposición procede contra actos que ponen fin a la vía administrativa. Es potestativo: puede interponerse antes del contencioso-administrativo o acudir directamente a la jurisdicción. El plazo es de un mes si el acto es expreso; si no lo es, en cualquier momento desde el día siguiente al silencio. El plazo para resolver es de un mes. Contra su resolución no cabe nuevo recurso de reposición.',
          'El recurso extraordinario de revisión procede contra actos firmes por causas tasadas: error de hecho resultante de documentos incorporados al expediente; aparición de documentos esenciales posteriores; influencia de documentos o testimonios declarados falsos por sentencia firme; o resolución dictada como consecuencia de prevaricación, cohecho, violencia, maquinación fraudulenta u otra conducta punible declarada por sentencia firme. El plazo es de cuatro años en caso de error de hecho y de tres meses en los demás supuestos desde conocimiento de documentos o firmeza de sentencia.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Nulidad: vicio gravísimo y revisión de oficio con dictamen. Anulabilidad: infracción ordinaria y posible convalidación. Lesividad: acto favorable anulable que la Administración quiere llevar a contencioso. Rectificación: error material evidente. Alzada: acto que no pone fin a vía administrativa, tres meses para resolver. Reposición: acto que pone fin, un mes para resolver. Extraordinario: acto firme y causas tasadas.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Preguntable: diferencia nulidad/anulabilidad; omisión total del procedimiento; dictamen consultivo en revisión de oficio; plazos de alzada y reposición; silencio en alzada; reposición potestativa; extraordinario de revisión con cuatro años o tres meses; imposibilidad de recurso administrativo directo contra disposiciones generales.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué recurso procede contra un acto que no pone fin a la vía administrativa? ¿Cuánto plazo tiene la Administración para resolver una reposición? ¿Cuándo se usa la declaración de lesividad?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Ante una pregunta de recursos, localiza tres datos: si el acto es firme, si pone fin a la vía administrativa y si el vicio es nulidad o anulabilidad. Con esos tres datos casi siempre se elige entre alzada, reposición, extraordinario, revisión de oficio o lesividad.'
        ]}
      ],
      tree: 'Revisión y recursos\n├─ Invalidez\n│  ├─ Nulidad\n│  └─ Anulabilidad\n├─ Revisión de oficio\n├─ Lesividad\n├─ Revocación\n├─ Rectificación de errores\n└─ Recursos\n   ├─ Alzada\n   ├─ Reposición\n   └─ Extraordinario de revisión',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Nulidad','Causas tasadas y vicios graves','Art. 47 Ley 39/2015'],['Anulabilidad','Regla general de infracción ordinaria','Art. 48'],['Revisión de oficio','Actos nulos firmes; dictamen favorable','Art. 106'],['Alzada','No pone fin a vía administrativa','Arts. 121-122'],['Reposición','Potestativo contra actos que ponen fin','Arts. 123-124'],['Extraordinario','Actos firmes y causas tasadas','Arts. 125-126']]
    },
    5: {
      sources: [fuente.lbrl, fuente.loreg, fuente.ce],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 5 combina régimen local y régimen electoral: municipio, organización y funcionamiento, provincia, organización provincial, competencias y elecciones locales. Es un bloque muy práctico para una plaza municipal porque explica quién decide, qué órgano es competente, qué servicios debe prestar un municipio y cómo se forman los órganos representativos. Hay que estudiar Ley 7/1985, Constitución y legislación electoral, con atención al papel del Alcalde, Pleno, Junta de Gobierno Local y Diputación Provincial.',
          'La idea básica es que el municipio es la entidad local básica de la organización territorial del Estado y cauce inmediato de participación ciudadana. Tiene personalidad jurídica y plena capacidad para el cumplimiento de sus fines. Sus elementos son territorio, población y organización. La provincia es entidad local determinada por agrupación de municipios, con personalidad jurídica propia, cuya función esencial es garantizar solidaridad y prestación integral y adecuada de servicios municipales, especialmente en municipios pequeños.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El término municipal es el territorio en que el Ayuntamiento ejerce sus competencias. Cada municipio pertenece a una sola provincia. La población municipal se integra por vecinos inscritos en el padrón municipal. Toda persona que viva en España está obligada a inscribirse en el padrón del municipio en que resida habitualmente; quien viva en varios se inscribe donde habite más tiempo al año. La inscripción acredita residencia y domicilio habitual, aunque no prejuzga por sí sola situaciones jurídicas privadas.',
          'La organización municipal común incluye Alcalde, Tenientes de Alcalde y Pleno. La Junta de Gobierno Local existe en municipios de gran población y en los de más de 5.000 habitantes; en los de menos puede existir cuando lo disponga el reglamento orgánico o lo acuerde el Pleno. También pueden existir órganos complementarios. El Alcalde dirige gobierno y administración municipal, representa al Ayuntamiento, convoca y preside sesiones salvo supuestos legales, dicta bandos, jefatura de personal, policía municipal y competencias ejecutivas. El Pleno es órgano de máxima representación política: ordenanzas, presupuestos, control, acuerdos institucionales y competencias legalmente reservadas.',
          'El funcionamiento de los órganos locales se basa en convocatoria, orden del día, quórum, deliberación, votación y acta. La competencia no es intercambiable por comodidad: cada órgano debe actuar dentro de lo atribuido por la ley o por delegación válida. La delegación de competencias municipales tiene límites y debe respetar materias indelegables. En supuestos de examen, si el acto lo dicta órgano incompetente, debe analizarse si la incompetencia es manifiesta y por materia o territorio o si se trata de incompetencia jerárquica subsanable.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Las competencias municipales pueden ser propias, delegadas o distintas de propias y delegadas. Las propias se ejercen en régimen de autonomía y bajo responsabilidad municipal, conforme a la ley. Entre materias típicas aparecen urbanismo, medio ambiente urbano, abastecimiento de agua, alumbrado, limpieza viaria, residuos, cementerios, protección civil, tráfico, movilidad, transporte colectivo urbano, información y promoción turística de interés local, ferias, mercados, protección de salubridad pública, servicios sociales en los términos legales, policía local y promoción del deporte y cultura. Además existen servicios mínimos según población: todos los municipios deben prestar alumbrado, cementerio, recogida de residuos, limpieza viaria, abastecimiento domiciliario de agua, alcantarillado, acceso a núcleos y pavimentación; a partir de tramos se añaden parque público, biblioteca, tratamiento de residuos, protección civil, servicios sociales, instalaciones deportivas, transporte urbano y medio ambiente urbano.',
          'La provincia se organiza mediante Diputación Provincial u otras corporaciones representativas. Sus órganos básicos son Presidente, Vicepresidentes, Junta de Gobierno y Pleno, con el régimen legal aplicable. Sus competencias se centran en coordinación de servicios municipales, asistencia y cooperación jurídica, económica y técnica a municipios, prestación de servicios públicos supramunicipales y cooperación en fomento del desarrollo económico y social y planificación provincial. Para un Ayuntamiento pequeño, la Diputación es clave en asistencia técnica, informática, jurídica, recaudatoria o de obras y servicios.',
          'El régimen electoral local se rige por sufragio universal, libre, igual, directo y secreto para concejales. El número de concejales depende de la población. La elección se realiza mediante listas y sistema proporcional en municipios sujetos al régimen común, con barrera legal, y existen especialidades para concejo abierto y municipios pequeños. El Alcalde se elige por los concejales: pueden ser candidatos quienes encabecen listas; si alguno obtiene mayoría absoluta de concejales, resulta proclamado; si ninguno la obtiene, se proclama Alcalde el concejal que encabece la lista más votada, con reglas especiales en caso de empate. Los diputados provinciales se eligen indirectamente a partir de resultados municipales por partidos judiciales.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Municipio: territorio, población y organización. Padrón: residencia habitual. Órganos necesarios: Alcalde, Tenientes y Pleno; Junta de Gobierno según población o acuerdo. Competencias: propias, delegadas y distintas. Servicios mínimos: dependen de población. Provincia: agrupación de municipios con Diputación. Competencias provinciales: asistencia, cooperación y coordinación. Elecciones: concejales por sufragio y Alcalde elegido por concejales.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Muy preguntable: elementos del municipio; inscripción padronal; existencia de Junta de Gobierno Local; competencias de Alcalde y Pleno; servicios mínimos; diferencia entre competencia propia y delegada; función de la Diputación; elección de Alcalde; elección indirecta de diputados provinciales; orden alfabético y régimen electoral en entidades locales.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cuáles son los elementos del municipio? ¿Qué órgano aprueba ordenanzas y presupuesto? ¿Cómo se elige al Alcalde si ningún candidato obtiene mayoría absoluta?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En test de régimen local identifica primero si se pregunta por municipio o provincia, después por órgano o competencia, y por último por elección o funcionamiento. En supuestos municipales, nunca respondas “el Ayuntamiento” en abstracto si puedes concretar Alcalde, Pleno, Junta de Gobierno o Diputación.'
        ]}
      ],
      tree: 'Régimen local y electoral\n├─ Municipio\n│  ├─ Territorio\n│  ├─ Población / padrón\n│  └─ Organización\n├─ Órganos municipales\n│  ├─ Alcalde\n│  ├─ Pleno\n│  └─ Junta de Gobierno Local\n├─ Competencias y servicios mínimos\n├─ Provincia y Diputación\n└─ Régimen electoral local',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Municipio','Entidad básica con personalidad jurídica','Art. 1 LBRL'],['Elementos','Territorio, población y organización','LBRL'],['Padrón','Registro administrativo de vecinos','LBRL'],['Pleno','Ordenanzas, presupuestos y control','LBRL'],['Provincia','Agrupación de municipios','CE/LBRL'],['Alcalde','Elegido por concejales según LOREG','LOREG']]
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
      version: 'v0.86.0',
      reviewedAt: REVIEW_DATE,
      autonomous: true,
      programmeLiteral: true,
      sourcePolicy: 'Bases La Puebla BOP Toledo núm. 82, 05/05/2026; fuentes BOE consolidadas',
      words: wordCount({ ...theme, ...patch })
    };
    theme.academiaVersion = 'v0.86 bloque 1';
  }

  const completed = Object.keys(THEORY).map(Number);
  const pending = ope.themes.map(theme => Number(theme.number)).filter(number => !completed.includes(number));
  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v86 = {
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    officialProgrammeSource: 'BOP Toledo núm. 82, 5 de mayo de 2026, Anexo I',
    autonomousThemes: completed.length,
    totalThemes: ope.themes.length,
    completedThemes: completed,
    pendingThemes: pending,
    status: 'EN_PROGRESO',
    note: 'Primer bloque reconstruido como fuente teórica autosuficiente. Pendientes temas 6 a 19.'
  };

  window.OPOWEB_PUEBLA_THEORY_V86 = {
    version: 'v0.86.0',
    status: 'EN_PROGRESO',
    autonomousThemes: completed.length,
    totalThemes: ope.themes.length,
    pendingThemes: pending,
    minimumWords: Math.min(...completed.map(number => {
      const theme = ope.themes.find(item => Number(item.number) === number);
      return theme?.theoryStatus?.words || 0;
    }))
  };
})();
