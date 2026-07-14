(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const SOURCES = {
    ce: { label: 'Constitución Española', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    lotc: { label: 'Ley Orgánica 2/1979, del Tribunal Constitucional', reference: 'BOE-A-1979-23709', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709' },
    lpac: { label: 'Ley 39/2015, del Procedimiento Administrativo Común', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    lrjsp: { label: 'Ley 40/2015, de Régimen Jurídico del Sector Público', reference: 'BOE-A-2015-10566', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' },
    lrbrl: { label: 'Ley 7/1985, Reguladora de las Bases del Régimen Local', reference: 'BOE-A-1985-5392', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392' },
    rof: { label: 'Real Decreto 2568/1986, Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales', reference: 'BOE-A-1986-33252', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-33252' },
    loreg: { label: 'Ley Orgánica 5/1985, del Régimen Electoral General', reference: 'BOE-A-1985-11672', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672' },
    trrl: { label: 'Real Decreto Legislativo 781/1986, texto refundido de Régimen Local', reference: 'BOE-A-1986-9865', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-9865' }
  };

  const THEMES = {
    1: {
      sources: [SOURCES.ce, SOURCES.lotc],
      articleCoverage: [
        ['Arts. 1-9 CE', 'Principios estructurales, valores, soberanía, forma política y garantías generales del ordenamiento.'],
        ['Arts. 10-55 CE', 'Derechos, libertades, deberes, garantías y suspensión.'],
        ['Arts. 53-54 CE', 'Tutela judicial, amparo, reserva de ley y Defensor del Pueblo.'],
        ['Arts. 55, 116 CE', 'Suspensión general e individual de derechos y estados excepcionales.'],
        ['Arts. 166-169 CE', 'Iniciativa y procedimientos ordinario y agravado de reforma.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La Constitución Española de 1978 es la norma suprema del ordenamiento. Vincula a la ciudadanía y a todos los poderes públicos, determina la organización del Estado y reconoce los derechos y deberes. Para este tema deben dominarse su estructura formal, los principios del Título Preliminar, la clasificación de los derechos del Título I, sus garantías y suspensión, y las dos vías de reforma constitucional.`,
          `En test aparecen con frecuencia cifras, títulos, mayorías y diferencias: 169 artículos; diez títulos numerados; derechos de la Sección 1.ª frente a los de la Sección 2.ª; protección del artículo 14; referéndum facultativo del artículo 167 frente al obligatorio del artículo 168; y derechos que sí pueden suspenderse.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La referencia principal es el texto consolidado de la Constitución, cuya última actualización publicada en el BOE debe revisarse antes del examen. El carácter consolidado facilita el estudio, pero la publicación oficial de cada reforma es la fuente jurídica.`,
          `El artículo 9.1 establece la sujeción de ciudadanos y poderes públicos a la Constitución y al resto del ordenamiento. El artículo 9.3 garantiza legalidad, jerarquía normativa, publicidad, irretroactividad sancionadora desfavorable, seguridad jurídica, responsabilidad e interdicción de arbitrariedad.`,
          `Los artículos 53 a 55 concentran el sistema de garantías y suspensión. Los artículos 166 a 169 regulan la reforma. La Ley Orgánica del Tribunal Constitucional completa el recurso de amparo y el control de constitucionalidad.`
        ]},
        { heading: '1. Elaboración, aprobación y entrada en vigor', paragraphs: [
          `La Constitución fue elaborada durante la transición democrática, aprobada por las Cortes, ratificada en referéndum el 6 de diciembre de 1978, sancionada el 27 de diciembre y publicada y entrada en vigor el 29 de diciembre. Estas fechas son recurrentes en pruebas tipo test.`,
          `Su legitimidad combina aprobación parlamentaria y ratificación popular. No es una ley ordinaria: ocupa la cúspide normativa y condiciona la validez de leyes, reglamentos y actos. Cualquier poder público debe interpretar y aplicar el ordenamiento de modo compatible con ella.`
        ]},
        { heading: '2. Estructura formal y material', paragraphs: [
          `La estructura formal comprende Preámbulo, Título Preliminar, diez títulos numerados, 169 artículos, cuatro disposiciones adicionales, nueve transitorias, una derogatoria y una final. El Preámbulo orienta la interpretación, aunque no contiene por sí solo mandatos equiparables a artículos.`,
          `La parte dogmática incluye principios y derechos; la parte orgánica regula Corona, Cortes, Gobierno, Poder Judicial, economía, organización territorial, Tribunal Constitucional y reforma. Esta división es doctrinal y ayuda a ordenar el estudio.`,
          `El Título I regula derechos y deberes; el II la Corona; el III las Cortes; el IV Gobierno y Administración; el V relaciones Gobierno-Cortes; el VI Poder Judicial; el VII economía y Hacienda; el VIII organización territorial; el IX Tribunal Constitucional; y el X reforma.`
        ]},
        { heading: '3. Título Preliminar', paragraphs: [
          `España se constituye en Estado social y democrático de Derecho. Sus valores superiores son libertad, justicia, igualdad y pluralismo político. La soberanía nacional reside en el pueblo español y la forma política es la Monarquía parlamentaria.`,
          `La Constitución se fundamenta en la unidad de la Nación española y reconoce autonomía y solidaridad. El castellano es lengua oficial del Estado, con deber de conocerlo y derecho a usarlo; las demás lenguas pueden ser oficiales en sus comunidades.`,
          `También regula bandera, capital, partidos, sindicatos, asociaciones empresariales, Fuerzas Armadas y misión de los poderes públicos de promover libertad e igualdad reales y facilitar participación.`
        ]},
        { heading: '4. Dignidad, nacionalidad y mayoría de edad', paragraphs: [
          `El artículo 10 sitúa dignidad, derechos inviolables, libre desarrollo, respeto a la ley y derechos ajenos como fundamento del orden político y paz social. Las normas sobre derechos se interpretan conforme a la Declaración Universal y tratados ratificados por España.`,
          `Los artículos 11 a 13 regulan nacionalidad y posición de extranjeros. Ningún español de origen puede ser privado de nacionalidad. La mayoría de edad se alcanza a los dieciocho años.`,
          `Los extranjeros gozan de libertades públicas en los términos de tratados y ley. Los derechos del artículo 23 se reservan a españoles, salvo sufragio municipal activo o pasivo por reciprocidad y tratado o ley.`
        ]},
        { heading: '5. Igualdad y derechos fundamentales', paragraphs: [
          `El artículo 14 proclama igualdad ante la ley y prohíbe discriminación por nacimiento, raza, sexo, religión, opinión o cualquier condición o circunstancia personal o social. Tiene protección reforzada aunque se ubica antes de la Sección 1.ª.`,
          `Los artículos 15 a 29 recogen derechos fundamentales y libertades públicas: vida e integridad; libertad ideológica y religiosa; libertad y seguridad; honor, intimidad e imagen; domicilio y comunicaciones; circulación; expresión e información; reunión; asociación; participación; tutela judicial; legalidad penal; educación; sindicación, huelga y petición.`,
          `El contenido esencial limita al legislador. Su desarrollo directo se realiza mediante ley orgánica cuando corresponda y su tutela judicial es preferente y sumaria, con posible recurso de amparo.`
        ]},
        { heading: '6. Derechos y deberes de los ciudadanos', paragraphs: [
          `La Sección 2.ª, artículos 30 a 38, incluye defensa de España, sistema tributario, matrimonio, propiedad y herencia, fundación, trabajo, negociación colectiva y libertad de empresa. Vinculan a poderes públicos, pero no todos disponen de amparo constitucional.`,
          `El deber tributario exige contribuir según capacidad económica mediante sistema justo inspirado en igualdad y progresividad, sin alcance confiscatorio. La propiedad y herencia se reconocen, delimitadas por función social.`,
          `El derecho y deber de trabajar incluye libre elección de profesión, promoción y remuneración suficiente sin discriminación por sexo. La libertad de empresa se reconoce dentro de economía de mercado y exigencias de economía general.`
        ]},
        { heading: '7. Principios rectores', paragraphs: [
          `Los artículos 39 a 52 orientan la política social y económica: familia, protección social, salud, cultura, medio ambiente, vivienda, juventud, discapacidad, mayores, consumidores y organizaciones profesionales.`,
          `Informan legislación, práctica judicial y actuación pública. Solo pueden alegarse ante jurisdicción de acuerdo con leyes que los desarrollan. No deben confundirse con derechos fundamentales directamente amparables.`,
          `En un supuesto municipal, estos principios justifican políticas públicas, pero la competencia concreta, procedimiento y derecho subjetivo dependen de legislación de desarrollo.`
        ]},
        { heading: '8. Garantías de los derechos', paragraphs: [
          `Los derechos del Capítulo II vinculan a todos los poderes públicos. Solo por ley, respetando contenido esencial, puede regularse su ejercicio. Las leyes contrarias pueden ser controladas por el Tribunal Constitucional.`,
          `El artículo 14 y los derechos de la Sección 1.ª se tutelan mediante procedimiento preferente y sumario y recurso de amparo, una vez cumplidos requisitos. La objeción de conciencia del artículo 30.2 también puede ser objeto de amparo.`,
          `El Defensor del Pueblo supervisa la Administración y defiende derechos del Título I. No anula actos ni sustituye recursos; sus actuaciones no suspenden plazos administrativos o judiciales.`
        ]},
        { heading: '9. Suspensión de derechos', paragraphs: [
          `La suspensión general puede acordarse en estados de excepción o sitio respecto de derechos expresamente enumerados. No se aplica indiscriminadamente a todo el Título I. En estado de alarma existen limitaciones legales, pero no la suspensión general prevista en el artículo 55.1.`,
          `Pueden suspenderse, con matices, derechos de libertad y seguridad, inviolabilidad domiciliaria, secreto de comunicaciones, circulación, expresión e información, reunión, huelga y conflicto colectivo. El artículo 17.3 queda exceptuado en el estado de excepción.`,
          `La suspensión individual puede afectar a plazos de detención y garantías del domicilio y comunicaciones en investigaciones sobre bandas armadas o terrorismo, con intervención judicial y control parlamentario. El uso injustificado produce responsabilidad.`
        ]},
        { heading: '10. Reforma ordinaria', paragraphs: [
          `La iniciativa se ejerce por Gobierno, Congreso, Senado y asambleas autonómicas en los términos constitucionales; se excluye iniciativa popular. No puede iniciarse en tiempo de guerra ni durante estados del artículo 116.`,
          `El artículo 167 exige tres quintos de cada cámara. Si no hay acuerdo, una comisión paritaria propone texto. Si Senado alcanza mayoría absoluta, Congreso puede aprobar por dos tercios.`,
          `El referéndum es facultativo: se celebra si lo solicita una décima parte de miembros de cualquiera de las cámaras dentro de quince días desde aprobación.`
        ]},
        { heading: '11. Reforma agravada', paragraphs: [
          `El artículo 168 se aplica a revisión total o parcial que afecte al Título Preliminar, Sección 1.ª del Capítulo II del Título I o Título II. Debe memorizarse literalmente este ámbito.`,
          `Se aprueba el principio por dos tercios de cada cámara, se disuelven inmediatamente las Cortes, las nuevas cámaras ratifican decisión y aprueban texto por dos tercios.`,
          `Después se somete obligatoriamente a referéndum. La doble intervención parlamentaria, disolución y referéndum distinguen esta vía de la ordinaria.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `CE: Preámbulo, Título Preliminar, diez títulos, 169 artículos y disposiciones.`,
          `Protección máxima: artículo 14 y Sección 1.ª; amparo también para artículo 30.2.`,
          `Suspensión general: excepción o sitio y solo derechos enumerados.`,
          `Reforma: artículo 167 ordinaria con referéndum posible; artículo 168 agravada con disolución y referéndum obligatorio.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No confundir valores superiores con principios del artículo 9.3. No afirmar que todos los derechos tienen amparo.`,
          `El Tribunal Constitucional no pertenece al Poder Judicial y el Defensor no resuelve recursos.`,
          `La reforma del Título II es agravada; la del Título VIII, por sí sola, no necesariamente.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuál es la estructura completa de la Constitución y qué regula cada título?`,
          `2. ¿Qué derechos tienen protección reforzada y cuáles pueden suspenderse?`,
          `3. ¿Qué diferencias exactas existen entre los artículos 167 y 168?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Memoriza listas cerradas: valores, principios del 9.3, títulos, derechos protegidos y materias del 168. Después practica preguntas comparativas.`,
          `En supuestos, identifica derecho, nivel de garantía, posible límite, órgano competente y vía de tutela. Evita convertir cualquier restricción en suspensión.`
        ]}
      ],
      tree: `CONSTITUCIÓN ESPAÑOLA
├─ Estructura
│  ├─ Preámbulo y Título Preliminar
│  ├─ Títulos I a X
│  └─ Disposiciones
├─ Derechos
│  ├─ Art. 14 y Sección 1.ª: protección reforzada
│  ├─ Sección 2.ª: derechos y deberes
│  └─ Capítulo III: principios rectores
├─ Garantías y suspensión
│  ├─ Ley, contenido esencial y tutela
│  ├─ Amparo y Defensor del Pueblo
│  └─ Excepción, sitio y suspensión individual
└─ Reforma
   ├─ Art. 167 ordinaria
   └─ Art. 168 agravada`,
      reviewTable: [
        ['Materia', 'Regla', 'Artículo'],
        ['Valores superiores', 'Libertad, justicia, igualdad y pluralismo', '1.1'],
        ['Soberanía', 'Reside en el pueblo español', '1.2'],
        ['Igualdad', 'Protección reforzada', '14 y 53.2'],
        ['Amparo', 'Art. 14, Sección 1.ª y 30.2', '53.2'],
        ['Suspensión general', 'Excepción o sitio', '55.1'],
        ['Reforma ordinaria', 'Tres quintos y referéndum facultativo', '167'],
        ['Reforma agravada', 'Dos tercios, disolución y referéndum', '168'],
        ['Límite temporal', 'No iniciar en guerra o estados excepcionales', '169']
      ]
    },
    2: {
      sources: [SOURCES.lpac, SOURCES.lrjsp],
      articleCoverage: [
        ['Arts. 1-4 LPAC', 'Objeto, ámbito, capacidad e interesados.'],
        ['Arts. 5-12 LPAC', 'Representación, registros de apoderamientos, identificación, firma y asistencia.'],
        ['Arts. 13-18 LPAC', 'Derechos, relación electrónica, lengua, registros, archivo y colaboración.'],
        ['Arts. 19-28 LPAC', 'Comparecencia, responsabilidad, resolución, silencio, documentos y copias.'],
        ['Arts. 29-33 LPAC', 'Obligatoriedad, cómputo, ampliación y urgencia de términos y plazos.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El tema cubre la arquitectura inicial de la Ley 39/2015: objeto y ámbito, capacidad e interesados, representación, identificación y firma, derechos de las personas, relación electrónica, registros y archivo, obligación de resolver, silencio, documentos y reglas de cómputo.`,
          `Para el test son decisivos los artículos 4, 5, 14, 16, 21, 24 y 30. Para el práctico, debe saberse quién está obligado a relacionarse electrónicamente, cómo acreditar representación, dónde presentar documentos, cómo computar un plazo y qué efecto produce el silencio.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La Ley 39/2015 regula requisitos de validez y eficacia de actos, procedimiento común y principios de iniciativa legislativa y potestad reglamentaria. Se aplica a Administraciones territoriales y sector público institucional en los términos de su artículo 2.`,
          `La Ley 40/2015 complementa organización y relaciones internas. En examen debe evitarse trasladar a la Ley 39 materias orgánicas propias de la Ley 40.`,
          `Los artículos se estudian con texto consolidado vigente. Cualquier modificación publicada antes de la fecha jurídica fijada por la convocatoria debe incorporarse.`
        ]},
        { heading: '1. Objeto y ámbito subjetivo', paragraphs: [
          `La Ley establece procedimiento común, incluidos sancionador y responsabilidad patrimonial como especialidades, y bases de iniciativa legislativa y reglamentaria. Procedimientos especiales pueden tener trámites adicionales o distintos por ley.`,
          `El sector público comprende Administración General del Estado, comunidades autónomas, entidades locales y sector institucional. Universidades públicas se rigen por normativa específica y supletoriamente por la Ley.`,
          `Corporaciones de Derecho Público se rigen por normativa específica en funciones públicas y supletoriamente por la Ley.`
        ]},
        { heading: '2. Capacidad de obrar', paragraphs: [
          `Tienen capacidad las personas físicas o jurídicas conforme a normas civiles y, cuando ley lo declare, grupos de afectados, uniones sin personalidad y patrimonios independientes.`,
          `Los menores pueden actuar para ejercer y defender derechos cuya actuación permita ordenamiento sin asistencia, salvo limitaciones.`,
          `La capacidad administrativa no coincide siempre con capacidad civil plena. Debe atenderse a norma material del procedimiento.`
        ]},
        { heading: '3. Concepto de interesado', paragraphs: [
          `Es interesado quien promueve procedimiento como titular de derecho o interés legítimo individual o colectivo; quien, sin iniciarlo, tenga derechos que puedan resultar afectados; y quien tenga intereses legítimos afectados y comparezca antes de resolución definitiva.`,
          `Las asociaciones representativas pueden ser titulares de intereses legítimos colectivos. Si la condición deriva de relación transmisible, el sucesor ocupa posición cualquiera que sea estado.`,
          `Un denunciante no es interesado automáticamente. Necesita derecho o interés legítimo o previsión legal.`
        ]},
        { heading: '4. Representación', paragraphs: [
          `Los interesados con capacidad pueden actuar por representante. Para formular solicitudes, declaraciones responsables, recursos, desistir o renunciar debe acreditarse. Para actos de mero trámite se presume.`,
          `Puede acreditarse por cualquier medio válido que deje constancia, incluido apoderamiento apud acta presencial o electrónico e inscripción en registro.`,
          `La falta o insuficiencia es subsanable normalmente en diez días o plazo superior según circunstancias. La Administración incorpora acreditación al expediente.`
        ]},
        { heading: '5. Registros electrónicos de apoderamientos', paragraphs: [
          `Cada Administración dispone de registro general de apoderamientos interoperable. Debe permitir comprobar representación ante otras Administraciones.`,
          `Se inscriben poderes generales o específicos según tipologías legales y con datos de poderdante, apoderado, fecha, periodo y alcance.`,
          `La inscripción tiene validez máxima fijada por la ley y puede prorrogarse, revocarse o renunciarse. Debe comprobarse vigencia en momento de actuación.`
        ]},
        { heading: '6. Identificación y firma', paragraphs: [
          `Identificación acredita identidad; firma acredita voluntad y consentimiento y garantiza autenticidad e integridad. No todo trámite exige firma.`,
          `La Administración verifica identidad por documento identificativo o sistemas electrónicos. Solo exige firma para solicitudes, declaraciones responsables o comunicaciones, recursos, desistimiento y renuncia.`,
          `Los sistemas admitidos incluyen certificados, sellos y claves concertadas en condiciones legales. Cada Administración publica sistemas y puede admitir otros interoperables.`
        ]},
        { heading: '7. Asistencia en medios electrónicos', paragraphs: [
          `Las Administraciones asisten a personas no obligadas que lo soliciten, especialmente en identificación, firma, solicitud, obtención de copias y registro.`,
          `Un funcionario habilitado puede identificar o firmar con consentimiento expreso del interesado, dejando constancia. Debe existir registro de funcionarios habilitados.`,
          `La asistencia no autoriza a decidir contenido ni sustituye voluntad. Debe proteger datos y evitar uso indebido de credenciales.`
        ]},
        { heading: '8. Derechos de las personas y de los interesados', paragraphs: [
          `Toda persona tiene derechos de comunicación, asistencia, lengua, acceso a información, trato respetuoso, exigencia de responsabilidades, protección de datos y uso de medios de identificación.`,
          `El interesado añade derecho a conocer estado, sentido del silencio, órgano competente y actos de trámite; acceder y obtener copias; identificar autoridades; no aportar originales salvo excepción; formular alegaciones; obtener información y actuar asistido.`,
          `En sancionador existen derechos específicos: conocer hechos, infracción y sanción, identidad del instructor y autoridad competente y presunción de no responsabilidad mientras no se demuestre.`
        ]},
        { heading: '9. Relación electrónica obligatoria y voluntaria', paragraphs: [
          `Personas físicas eligen medio salvo obligación. Están obligadas personas jurídicas, entidades sin personalidad, profesionales colegiados en actuaciones profesionales, representantes de obligados y empleados públicos en trámites por su condición.`,
          `Reglamentariamente puede obligarse a ciertos colectivos de personas físicas por capacidad económica, técnica, dedicación u otros motivos acreditados.`,
          `Una persona física no obligada puede cambiar medio. Si obligado presenta en papel, se requiere subsanación electrónica y fecha válida será la de subsanación.`
        ]},
        { heading: '10. Lengua', paragraphs: [
          `En Administración General del Estado se usa castellano, aunque interesados pueden usar lengua cooficial en órganos de comunidad correspondiente. El procedimiento se tramita en lengua elegida según reglas.`,
          `Si concurren varios interesados y discrepan, se tramita en castellano, sin perjuicio de documentos en lengua elegida.`,
          `La Administración traduce documentos que deban surtir efectos fuera de comunidad o para interesados que lo soliciten, salvo cooficialidad también en destino.`
        ]},
        { heading: '11. Registros', paragraphs: [
          `Cada Administración dispone de Registro Electrónico General y organismos pueden tener registros conectados. Se publica órgano responsable, fecha y hora oficial y días inhábiles.`,
          `Los documentos pueden presentarse en registro electrónico del destinatario o demás sujetos interoperables, oficinas de Correos conforme regulación, representaciones diplomáticas o consulares, oficinas de asistencia y otros lugares previstos.`,
          `El asiento incluye número, naturaleza, fecha y hora, identificación, órgano remitente y destinatario y referencia. Se entrega recibo con copia y anexos.`
        ]},
        { heading: '12. Archivo y documentos', paragraphs: [
          `Cada Administración mantiene archivo electrónico único de documentos finalizados, conservando autenticidad, integridad y consulta.`,
          `Los documentos administrativos electrónicos incorporan información, identificación, referencia temporal, metadatos y firmas cuando proceda.`,
          `Las copias auténticas tienen validez y eficacia de originales. La digitalización debe garantizar identidad y contenido. Los originales en papel se devuelven cuando proceda.`
        ]},
        { heading: '13. Obligación de resolver', paragraphs: [
          `La Administración debe dictar resolución expresa y notificarla en todos los procedimientos, cualquiera que sea forma de iniciación, salvo terminación por pacto y procedimientos relativos a derechos sometidos solo a declaración responsable o comunicación en supuestos.`,
          `El plazo máximo es el fijado por norma; no puede exceder seis meses salvo ley o Derecho UE. Si norma no fija, tres meses. Se publica información de plazos y silencio.`,
          `El transcurso no exime de resolver. Deben controlarse suspensiones y ampliación excepcional del plazo máximo.`
        ]},
        { heading: '14. Silencio administrativo', paragraphs: [
          `En procedimientos a solicitud, regla general estimatoria salvo ley o norma UE/internacional, y excepciones: petición del artículo 29 CE, dominio o servicio público, actividades dañinas al medio ambiente, responsabilidad patrimonial, impugnación y revisión.`,
          `El silencio desestimatorio permite recurrir, pero no libera de resolver. Si silencio es estimatorio, resolución posterior solo puede confirmar. Si desestimatorio, resolución posterior no queda vinculada.`,
          `En procedimientos de oficio, vencimiento puede producir desestimación de pretensiones o caducidad en sancionadores o gravamen, sin extinguir obligación de resolver.`
        ]},
        { heading: '15. Términos y plazos', paragraphs: [
          `Los términos obligan a autoridades, personal e interesados. Los plazos por horas se entienden hábiles y no pueden superar veinticuatro horas salvo días.`,
          `Los días son hábiles salvo ley o Derecho UE que indique naturales; sábados, domingos y festivos son inhábiles. Comienzan al día siguiente de notificación, publicación o silencio.`,
          `Meses o años se computan de fecha a fecha; si no hay día equivalente, último día; si vence inhábil, siguiente hábil. Si lugar del interesado y sede difieren, basta inhábil en uno.`
        ]},
        { heading: '16. Ampliación y urgencia', paragraphs: [
          `La Administración puede ampliar hasta mitad si circunstancias lo aconsejan, no perjudica terceros y se decide antes de vencimiento. El acuerdo no es recurrible separadamente.`,
          `Puede ampliarse máximo en tramitación internacional y por incidencias técnicas. Si fallo de sede, puede ampliar plazos no vencidos y publicar incidencia.`,
          `La urgencia reduce a mitad plazos del procedimiento ordinario, salvo presentación de solicitudes y recursos. Se acuerda por interés público, de oficio o a petición.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Interesado: promotor, titular de derecho afectado o titular de interés legítimo comparecido.`,
          `Obligados electrónicos: jurídicas, entidades sin personalidad, profesionales, representantes y empleados en trámites propios.`,
          `Registro: artículo 16.4. Resolución: artículo 21. Silencio: artículo 24. Plazos: artículos 29-33.`,
          `Días: hábiles por defecto; meses: fecha a fecha; urgencia no reduce solicitudes ni recursos.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Denunciante no es interesado automáticamente. Identificación no es firma. Registro electrónico no cierra.`,
          `El silencio positivo no autoriza adquirir dominio público. El negativo no exime de resolución.`,
          `Sábado es inhábil en cómputo administrativo común, salvo régimen especial.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Quién es interesado y cuándo debe acreditarse representación?`,
          `2. ¿Quién está obligado electrónicamente y dónde puede presentar documentos?`,
          `3. ¿Cómo se calculan plazos por días y meses y qué efectos tiene el silencio?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Resuelve casos con cinco preguntas: sujeto, canal, órgano, plazo y efecto. Cita artículo cuando lo recuerdes, pero prioriza regla correcta.`,
          `Construye tarjetas de excepciones: silencio, originales, firma, días naturales y ampliación. Las opciones falsas suelen convertir excepción en regla.`
        ]}
      ],
      tree: `LEY 39/2015 · BASES
├─ Ámbito y sujetos
│  ├─ Capacidad e interesados
│  └─ Representación
├─ Relación con la Administración
│  ├─ Identificación y firma
│  ├─ Asistencia
│  ├─ Obligación electrónica
│  └─ Registro y archivo
├─ Actividad
│  ├─ Derechos
│  ├─ Resolución y silencio
│  └─ Documentos y copias
└─ Plazos
   ├─ Horas, días, meses y años
   ├─ Ampliación
   └─ Urgencia`,
      reviewTable: [
        ['Materia', 'Regla', 'Artículo'],
        ['Interesado', 'Derecho o interés legítimo', '4'],
        ['Representación', 'Acreditar actos relevantes', '5'],
        ['Obligación electrónica', 'Sujetos tasados', '14'],
        ['Registro', 'Lugares y recibo', '16'],
        ['Resolver', 'Regla general expresa', '21'],
        ['Silencio', 'Estimatorio con excepciones', '24'],
        ['Días', 'Hábiles salvo norma', '30'],
        ['Urgencia', 'Mitad salvo solicitudes y recursos', '33']
      ]
    },
    3: {
      sources: [SOURCES.lpac, SOURCES.lrjsp],
      articleCoverage: [
        ['Arts. 53-57 LPAC', 'Derechos, iniciación y acumulación.'],
        ['Arts. 58-69 LPAC', 'Iniciación de oficio y a solicitud, medidas, solicitudes, declaración y comunicación.'],
        ['Arts. 70-74 LPAC', 'Expediente, impulso y ordenación.'],
        ['Arts. 75-83 LPAC', 'Alegaciones, prueba, informes, audiencia e información pública.'],
        ['Arts. 84-105 LPAC', 'Finalización, resolución, caducidad y ejecución.'],
        ['Arts. 63-65, 81, 85, 89-91 LPAC', 'Especialidades sancionadoras y de responsabilidad patrimonial.'],
        ['Art. 96 LPAC', 'Tramitación simplificada.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El procedimiento administrativo común ordena cómo una Administración forma su voluntad y dicta una decisión con garantías. Se divide en iniciación, ordenación, instrucción, finalización y ejecución. El tema añade especialidades sancionadoras y de responsabilidad patrimonial y tramitación simplificada.`,
          `El auxiliar debe manejar expedientes, solicitudes, subsanaciones, informes, audiencia, notificaciones y plazos. En el práctico importa más ordenar correctamente trámites y efectos que recitar definiciones aisladas.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El Título IV de la Ley 39/2015 regula el procedimiento común. El Título III regula actos, pero en este tema interesa su conexión con resolución y ejecución.`,
          `Las especialidades sancionadoras y patrimoniales se integran en artículos dispersos y se completan con principios de la Ley 40/2015.`,
          `La tramitación simplificada no es un procedimiento sin garantías: conserva trámites tasados y plazo ordinario de treinta días salvo menos.`
        ]},
        { heading: '1. Derechos del interesado durante la tramitación', paragraphs: [
          `El interesado puede conocer estado, silencio, órgano y actos de trámite; acceder y obtener copias; identificar responsables; no presentar originales salvo excepción; no aportar documentos ya disponibles; formular alegaciones; aportar documentos; actuar asistido; y cumplir pagos electrónicamente.`,
          `En sancionador conoce hechos, posible infracción y sanción, instructor y órgano competente, y tiene presunción de no responsabilidad.`,
          `El acceso puede limitarse por datos de terceros, secretos o normas específicas, pero debe facilitarse acceso parcial cuando sea posible.`
        ]},
        { heading: '2. Formas de iniciación', paragraphs: [
          `El procedimiento se inicia de oficio o a solicitud. De oficio: propia iniciativa, orden superior, petición razonada de otros órganos o denuncia.`,
          `Antes de iniciar puede existir información o actuaciones previas para conocer circunstancias y conveniencia. En sancionador se orientan a hechos, responsables y circunstancias.`,
          `El acuerdo de iniciación determina objeto y órgano. La denuncia comunica hechos, pero no obliga siempre a iniciar ni confiere por sí sola condición de interesado.`
        ]},
        { heading: '3. Medidas provisionales', paragraphs: [
          `Pueden adoptarse para asegurar eficacia de resolución si existen proporcionalidad, efectividad y menor onerosidad. Antes de iniciar, solo por urgencia inaplazable y protección provisional.`,
          `Las previas deben confirmarse, modificarse o levantarse en acuerdo de iniciación dentro de quince días y este debe producir efectos.`,
          `No pueden causar perjuicio difícil o imposible reparación ni vulnerar derechos. Se alzan al finalizar salvo mantenimiento legal.`
        ]},
        { heading: '4. Solicitud y subsanación', paragraphs: [
          `La solicitud contiene identidad, medio o lugar de notificación, hechos, razones, petición clara, lugar y fecha, firma o voluntad y órgano. Puede presentarse pluralmente con contenido idéntico.`,
          `La Administración establece modelos y sistemas de presentación masiva cuando proceda, pero el interesado puede añadir elementos. Debe emitir recibo.`,
          `Si faltan requisitos, se requiere subsanación en diez días, ampliables hasta cinco salvo selectivos o concurrencia competitiva. Si no subsana, se le tiene por desistido mediante resolución.`
        ]},
        { heading: '5. Declaración responsable y comunicación', paragraphs: [
          `Declaración responsable manifiesta bajo responsabilidad cumplimiento de requisitos, disposición de documentación y compromiso de mantener. Comunicación pone en conocimiento datos relevantes para inicio de actividad o derecho.`,
          `Permiten reconocimiento o ejercicio desde presentación, sin perjuicio de comprobación. La norma puede exigir comunicación posterior u otros controles.`,
          `Inexactitud esencial, falsedad u omisión, o falta de documentación, impide continuar y puede generar restitución, sanción y prohibición temporal según ley.`
        ]},
        { heading: '6. Expediente administrativo', paragraphs: [
          `Es conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a resolución y diligencias para ejecutarla. Tiene formato electrónico.`,
          `Se forma por agregación ordenada, índice numerado y copia electrónica certificada cuando se remite. No integra información auxiliar o de apoyo salvo informes solicitados antes de resolución.`,
          `Debe garantizar integridad, trazabilidad y acceso. Cada documento ha de vincularse al expediente correcto y conservar metadatos.`
        ]},
        { heading: '7. Ordenación e impulso', paragraphs: [
          `El procedimiento se impulsa de oficio en todos sus trámites y por medios electrónicos, respetando transparencia y publicidad. Se sigue orden riguroso de incoación en asuntos homogéneos salvo orden motivada.`,
          `Se concentran trámites compatibles y se señalan simultáneamente. Los trámites de interesados se cumplen en diez días salvo norma distinta.`,
          `Si no cumplen, puede declararse decaído el derecho al trámite; se admite actuación antes o dentro del día de notificación de resolución que tenga por transcurrido plazo.`
        ]},
        { heading: '8. Alegaciones y prueba', paragraphs: [
          `Los interesados pueden alegar y aportar documentos antes de audiencia. Defectos de tramitación pueden alegarse en cualquier momento antes de resolución.`,
          `Los hechos relevantes pueden acreditarse por cualquier prueba admisible. El instructor abre periodo entre diez y treinta días cuando hechos no se tengan por ciertos o naturaleza lo exija; puede abrir extraordinario hasta diez.`,
          `Solo se rechaza prueba manifiestamente improcedente o innecesaria mediante resolución motivada. La Administración comunica práctica y asume gastos no a cargo suyo, pudiendo exigir anticipo.`
        ]},
        { heading: '9. Informes', paragraphs: [
          `Se solicitan informes preceptivos y los considerados necesarios, citando fundamento o conveniencia. Salvo disposición, son facultativos y no vinculantes.`,
          `Se emiten electrónicamente en diez días salvo plazo distinto. Si no se emite, puede continuarse salvo informe preceptivo, en cuyo caso puede suspenderse plazo.`,
          `El informe fuera de plazo puede no ser tenido en cuenta. En responsabilidad patrimonial es preceptivo informe del servicio cuyo funcionamiento causó daño.`
        ]},
        { heading: '10. Audiencia e información pública', paragraphs: [
          `Instruido y antes de propuesta, se pone expediente a interesados para alegar entre diez y quince días. Puede omitirse si no figuran ni se tienen en cuenta otros hechos, alegaciones o pruebas que los aportados.`,
          `En sancionador la propuesta precede a audiencia, salvo supuestos. Renunciar a audiencia no equivale a renunciar al procedimiento.`,
          `Información pública se anuncia oficialmente por plazo mínimo veinte días cuando naturaleza lo requiera. Comparecer no otorga por sí solo condición de interesado, pero la Administración debe responder alegaciones.`
        ]},
        { heading: '11. Finalización', paragraphs: [
          `Finaliza por resolución, desistimiento, renuncia, caducidad, imposibilidad material por causas sobrevenidas o terminación convencional.`,
          `La resolución decide todas cuestiones planteadas y derivadas, es congruente y motivada cuando procede. En solicitud no puede agravar situación inicial sin trámite adecuado.`,
          `La Administración no puede abstenerse por silencio, oscuridad o insuficiencia normativa. Debe indicar recursos, órgano y plazo.`
        ]},
        { heading: '12. Desistimiento y renuncia', paragraphs: [
          `El interesado puede desistir de solicitud o renunciar a derecho si ordenamiento no lo prohíbe. Si varios solicitantes, afecta solo a quien formula.`,
          `Puede hacerse por medio que deje constancia. La Administración acepta y declara terminado, salvo terceros que pidan continuación en diez días o interés general aconseje seguir.`,
          `Desistimiento abandona solicitud; renuncia abandona derecho. La Administración también puede desistir de procedimientos de oficio motivadamente cuando ley lo permita.`
        ]},
        { heading: '13. Caducidad', paragraphs: [
          `En procedimientos a solicitud paralizados por causa imputable al interesado, se le advierte y, tras tres meses, se declara caducidad y archivo. No basta inactividad en trámite no indispensable.`,
          `La caducidad no produce por sí sola prescripción, pero procedimiento caducado no interrumpe. Puede iniciarse nuevo si no prescribió, conservando actos independientes.`,
          `En procedimientos de oficio sancionadores o de gravamen, vencimiento del plazo máximo produce caducidad con archivo.`
        ]},
        { heading: '14. Ejecución', paragraphs: [
          `Los actos son ejecutivos salvo suspensión, sanción recurrible en vía administrativa, previsión contraria o necesidad de aprobación superior.`,
          `Antes de ejecución material se notifica resolución. Si obligado no cumple, medios son apremio sobre patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre personas.`,
          `Se elige medio proporcional y menos restrictivo. Si varios, debe motivarse. No se entra en domicilio sin consentimiento o autorización judicial.`
        ]},
        { heading: '15. Procedimiento sancionador', paragraphs: [
          `Siempre se inicia de oficio y separa fase instructora y sancionadora, encomendadas a órganos distintos cuando sea posible. No se sanciona sin procedimiento.`,
          `Acuerdo identifica responsable, hechos, calificación y sanciones posibles, instructor, órgano competente, medidas y derecho a alegar. Si no formula alegaciones, puede ser propuesta si contiene pronunciamiento preciso.`,
          `La resolución valora prueba, fija hechos, responsables, infracción y sanción o inexistencia. No acepta hechos distintos de instruidos sin actuaciones complementarias. Es ejecutiva cuando no cabe recurso ordinario administrativo.`
        ]},
        { heading: '16. Responsabilidad patrimonial', paragraphs: [
          `Requiere lesión efectiva, evaluable e individualizada, antijurídica, causada por funcionamiento normal o anormal, sin fuerza mayor y con causalidad. El derecho prescribe al año.`,
          `La solicitud concreta lesiones, relación causal, valoración, momento y pruebas. Se solicita informe al servicio y dictamen consultivo cuando cuantía alcance umbral legal.`,
          `La resolución decide causalidad, daño, cuantía y modo de indemnización. El plazo máximo es seis meses; el silencio es desestimatorio.`
        ]},
        { heading: '17. Tramitación simplificada', paragraphs: [
          `Puede acordarse de oficio o a petición por interés público o falta de complejidad. Si se acuerda de oficio, interesados pueden oponerse y entonces se sigue ordinaria en términos legales.`,
          `Debe resolverse en treinta días desde notificación del acuerdo, salvo que reste menos en ordinario. Incluye inicio, subsanación, alegaciones iniciales, audiencia solo si resolución desfavorable, informes y resolución.`,
          `Si se necesita trámite no previsto, se continúa por ordinario. En responsabilidad patrimonial y sancionador hay requisitos específicos para simplificación.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Fases: iniciación, ordenación, instrucción, finalización y ejecución.`,
          `Subsanación: diez días; prueba: diez a treinta; audiencia: diez a quince; información pública: mínimo veinte.`,
          `Finalización: resolución, desistimiento, renuncia, caducidad, imposibilidad o convenio.`,
          `Simplificada: treinta días y trámites tasados.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Denuncia no inicia necesariamente ni da condición de interesado. Declaración responsable no es autorización previa.`,
          `Desistimiento no es renuncia. Caducidad no equivale a prescripción.`,
          `Apremio se usa para deuda líquida; ejecución subsidiaria para actos no personalísimos; multa coercitiva exige habilitación.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo se inicia de oficio y qué debe contener una solicitud?`,
          `2. ¿Qué plazos tienen subsanación, prueba, audiencia e información pública?`,
          `3. ¿Cómo terminan y se ejecutan los procedimientos y qué especialidades tienen sancionador y patrimonial?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Dibuja cronología del expediente y sitúa cada documento. En supuestos, identifica trámite omitido y consecuencia: subsanar, retrotraer, continuar o archivar.`,
          `No memorices procedimiento como lista sin efectos. Para cada fase pregunta quién actúa, qué documento produce, qué plazo hay y qué pasa si se incumple.`
        ]}
      ],
      tree: `PROCEDIMIENTO COMÚN
├─ Iniciación
│  ├─ De oficio / solicitud
│  ├─ Medidas provisionales
│  ├─ Subsanación
│  └─ Declaración responsable
├─ Ordenación
│  ├─ Expediente electrónico
│  ├─ Impulso de oficio
│  └─ Cumplimiento de trámites
├─ Instrucción
│  ├─ Alegaciones y prueba
│  ├─ Informes
│  └─ Audiencia e información pública
├─ Finalización
│  ├─ Resolución
│  ├─ Desistimiento / renuncia
│  └─ Caducidad
└─ Ejecución y especialidades`,
      reviewTable: [
        ['Trámite', 'Plazo/regla', 'Artículo'],
        ['Subsanación', 'Diez días', '68'],
        ['Prueba', 'Diez a treinta días', '77'],
        ['Informe', 'Diez días por defecto', '80'],
        ['Audiencia', 'Diez a quince días', '82'],
        ['Información pública', 'Mínimo veinte días', '83'],
        ['Caducidad por paralización', 'Advertencia y tres meses', '95'],
        ['Simplificada', 'Treinta días', '96'],
        ['Ejecución forzosa', 'Cuatro medios', '100']
      ]
    },
    4: {
      sources: [SOURCES.lpac],
      articleCoverage: [
        ['Arts. 106-111 LPAC', 'Revisión de oficio, lesividad, revocación, rectificación y límites.'],
        ['Arts. 112-120 LPAC', 'Principios, objeto, interposición, audiencia, resolución y suspensión de recursos.'],
        ['Arts. 121-122 LPAC', 'Recurso de alzada.'],
        ['Arts. 123-124 LPAC', 'Recurso potestativo de reposición.'],
        ['Arts. 125-126 LPAC', 'Recurso extraordinario de revisión.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La revisión administrativa permite corregir o impugnar actos sin acudir inicialmente a un juez. Incluye revisión de oficio de nulidad, lesividad de actos favorables anulables, revocación de actos desfavorables, rectificación de errores y recursos de alzada, reposición y extraordinario de revisión.`,
          `La clave es clasificar el acto: nulo o anulable, favorable o desfavorable, firme o recurrible, y si pone fin a la vía. De esa clasificación dependen cauce, órgano y plazo.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El Título V de la Ley 39/2015 separa revisión de oficio y recursos. No todo cambio de acto es recurso ni toda ilegalidad permite revisión de oficio.`,
          `Los plazos y causas son tasados. Debe estudiarse texto consolidado, especialmente artículos 106, 107, 109, 112, 117 y 121 a 126.`,
          `La jurisdicción contencioso-administrativa es distinta y comienza tras agotar vía cuando proceda o impugnar actos que ponen fin.`
        ]},
        { heading: '1. Nulidad y anulabilidad', paragraphs: [
          `La nulidad se reserva a vicios graves: lesión de derechos amparables, incompetencia manifiesta por materia o territorio, contenido imposible, infracción penal, prescindir total y absolutamente del procedimiento, adquirir derechos sin requisitos esenciales y otros legales.`,
          `La anulabilidad comprende cualquier infracción, incluida desviación de poder. Defectos de forma solo anulan si faltan requisitos indispensables o producen indefensión; actuación fuera de plazo solo si naturaleza lo impone.`,
          `La nulidad no se convalida; la anulabilidad sí puede convalidarse. La conservación de actos y trámites evita repetir lo válido.`
        ]},
        { heading: '2. Revisión de oficio de actos nulos', paragraphs: [
          `Las Administraciones pueden declarar nulidad de actos que pusieron fin a vía o no fueron recurridos en plazo, de oficio o a solicitud, cuando concurra artículo 47.1.`,
          `Se requiere dictamen favorable del Consejo de Estado u órgano consultivo autonómico. Sin dictamen favorable no puede declararse nulidad.`,
          `Puede inadmitirse solicitud sin dictamen si no se basa en causa de nulidad, carece manifiestamente de fundamento o se desestimaron otras sustancialmente iguales.`
        ]},
        { heading: '3. Revisión de disposiciones nulas', paragraphs: [
          `La Administración puede declarar nulidad de disposiciones administrativas en supuestos del artículo 47.2: vulneración constitucional o legal, materias reservadas a ley o retroactividad sancionadora desfavorable o restrictiva.`,
          `Las disposiciones no se recurren en vía administrativa ordinaria; pueden impugnarse directamente ante jurisdicción o indirectamente mediante acto de aplicación.`,
          `La declaración de nulidad no afecta automáticamente a actos firmes dictados al amparo, salvo materia sancionadora favorable según reglas.`
        ]},
        { heading: '4. Declaración de lesividad', paragraphs: [
          `Para impugnar ante contencioso un acto favorable anulable, la Administración debe declararlo lesivo para interés público. No puede anularlo directamente por revisión de oficio.`,
          `Debe declararse dentro de cuatro años desde acto, con audiencia, y el procedimiento caduca a seis meses.`,
          `En entidades locales la declara pleno u órgano colegiado superior según procedencia. Después se interpone recurso contencioso.`
        ]},
        { heading: '5. Revocación y rectificación', paragraphs: [
          `La Administración puede revocar actos desfavorables o de gravamen mientras no transcurra prescripción, si no constituye dispensa no permitida ni vulnera igualdad, interés público u ordenamiento.`,
          `Puede rectificar en cualquier momento errores materiales, de hecho o aritméticos, de oficio o a instancia.`,
          `Rectificar no permite reinterpretar norma, alterar elementos esenciales o sustituir decisión. Si cambia fondo, debe usarse cauce correspondiente.`
        ]},
        { heading: '6. Límites de revisión', paragraphs: [
          `Las facultades no pueden ejercerse cuando, por prescripción, tiempo transcurrido u otras circunstancias, sean contrarias a equidad, buena fe, derechos particulares o leyes.`,
          `La revisión puede fijar indemnización si concurren requisitos de responsabilidad patrimonial, sin perjuicio de subsistencia de actos firmes.`,
          `Puede suspenderse ejecución del acto cuando cause perjuicios de imposible o difícil reparación.`
        ]},
        { heading: '7. Principios generales de recursos', paragraphs: [
          `Son recurribles resoluciones y actos de trámite cualificados: deciden fondo, impiden continuar, producen indefensión o perjuicio irreparable. Los demás se alegan al impugnar resolución.`,
          `Contra disposiciones no cabe recurso administrativo. Los recursos son alzada y reposición; extraordinario de revisión solo contra firmes por causas.`,
          `El error en calificación no impide tramitación si se deduce carácter. No se puede recurrir por quien causó vicio imputable.`
        ]},
        { heading: '8. Interposición y contenido', paragraphs: [
          `El escrito incluye nombre, acto y razón de impugnación, lugar, fecha, firma, medio y órgano. La ausencia de nombre del recurso no invalida si se identifica voluntad.`,
          `Son causas de inadmisión incompetencia cuando competente pertenece a otra Administración, falta legitimación, acto no recurrible, plazo vencido o falta manifiesta de fundamento.`,
          `El órgano puede suspender ejecución de oficio o a solicitud si ponderación favorece y hay perjuicio difícil o nulidad. Si no resuelve suspensión en un mes, se entiende suspendida.`
        ]},
        { heading: '9. Audiencia y resolución de recursos', paragraphs: [
          `Si se tienen en cuenta hechos o documentos nuevos no recogidos, se da audiencia entre diez y quince días. No son nuevos los aportados en expediente antes de resolución.`,
          `La resolución estima total o parcialmente, desestima o inadmite. Debe decidir cuestiones de forma y fondo, ser congruente y no agravar situación del recurrente.`,
          `Si existe vicio formal sin decidir fondo, se ordena retroacción al momento del vicio, salvo convalidación por órgano competente.`
        ]},
        { heading: '10. Recurso de alzada', paragraphs: [
          `Procede contra actos que no ponen fin a vía. Resuelve superior jerárquico. Puede presentarse ante órgano autor o competente; el primero remite en diez días con informe y expediente.`,
          `Plazo: un mes si acto expreso. Si no expreso, puede interponerse desde día siguiente a efectos de silencio sin plazo cerrado según ley.`,
          `Resolución: tres meses; transcurrido, desestimado salvo alzada contra silencio desestimatorio que puede estimarse por doble silencio con excepciones. Contra resolución no cabe otro ordinario.`
        ]},
        { heading: '11. Recurso potestativo de reposición', paragraphs: [
          `Procede contra actos que ponen fin a vía y se interpone ante mismo órgano. Es potestativo: puede acudirse directamente al contencioso.`,
          `Si se interpone, no cabe contencioso hasta resolución expresa o desestimación presunta.`,
          `Plazo: un mes contra expreso; sin plazo cerrado contra presunto. Resolución: un mes. Contra resolución no cabe nueva reposición.`
        ]},
        { heading: '12. Recurso extraordinario de revisión', paragraphs: [
          `Procede contra actos firmes por error de hecho que resulte de documentos del expediente; aparición de documentos esenciales; documentos o testimonios falsos declarados por sentencia; o resolución por prevaricación, cohecho, violencia, maquinación fraudulenta u otra conducta punible declarada.`,
          `Plazo: cuatro años para error de hecho; tres meses desde conocimiento de documentos o firmeza de sentencia para demás.`,
          `Resuelve órgano que dictó acto. Debe pronunciarse sobre procedencia y fondo. Si no resuelve en tres meses, desestimado.`
        ]},
        { heading: '13. Actos que ponen fin a la vía', paragraphs: [
          `Ponen fin resoluciones de alzada, procedimientos sin superior jerárquico, acuerdos finalizadores, responsabilidad patrimonial y otras legales.`,
          `En ámbito local ponen fin, con carácter general, actos de pleno, alcalde y junta cuando actúa por delegación o competencias, salvo ley sectorial.`,
          `Identificar si pone fin es esencial para elegir reposición o alzada. No depende de que el interesado esté conforme ni de firmeza.`
        ]},
        { heading: '14. Vía administrativa y contenciosa', paragraphs: [
          `Agotada vía, puede acudirse a jurisdicción en plazos de Ley 29/1998. Reposición es opcional, alzada normalmente necesaria cuando acto no pone fin.`,
          `La interposición no suspende automáticamente, salvo sanciones no firmes en vía y supuestos legales o acuerdo.`,
          `Las notificaciones deben indicar recurso, órgano y plazo, pero una indicación errónea no elimina derecho y puede afectar cómputo.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Nulo: revisión de oficio y dictamen favorable. Anulable favorable: lesividad y juez. Desfavorable: posible revocación. Error material: rectificación.`,
          `Alzada: no fin, superior, un mes, tres meses. Reposición: fin, mismo órgano, un mes, un mes.`,
          `Extraordinario: firme, cuatro causas, cuatro años o tres meses.`,
          `Recurrir no suspende por regla general.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No todo acto ilegal es nulo. Lesividad no anula: habilita impugnación judicial.`,
          `La reposición no es obligatoria. Contra alzada no cabe reposición ordinaria.`,
          `Error material no permite cambiar criterio jurídico. El recurso extraordinario no es segunda alzada.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué cauce corresponde a acto nulo, anulable favorable, desfavorable y con error material?`,
          `2. ¿Qué diferencias hay entre alzada y reposición en acto, órgano y plazo?`,
          `3. ¿Cuáles son las cuatro causas y plazos del extraordinario de revisión?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Clasifica siempre con una matriz: naturaleza del vicio, efecto favorable/desfavorable, firmeza y fin de vía. La respuesta aparece de esa matriz.`,
          `En supuestos, añade suspensión, audiencia, órgano y plazo. Una respuesta con recurso correcto pero plazo erróneo pierde gran parte de valor.`
        ]}
      ],
      tree: `REVISIÓN Y RECURSOS
├─ Revisión de oficio
│  ├─ Actos nulos + dictamen favorable
│  └─ Disposiciones nulas
├─ Otros cauces
│  ├─ Lesividad: favorable anulable
│  ├─ Revocación: desfavorable
│  └─ Rectificación: error material
├─ Recursos ordinarios
│  ├─ Alzada: no fin de vía
│  └─ Reposición: fin de vía
└─ Extraordinario
   └─ Acto firme + causa tasada`,
      reviewTable: [
        ['Cauce', 'Supuesto', 'Plazo'],
        ['Revisión de oficio', 'Nulidad de pleno derecho', 'Sin plazo cerrado, con límites'],
        ['Lesividad', 'Favorable anulable', 'Cuatro años; seis meses de procedimiento'],
        ['Rectificación', 'Error material/hecho/aritmético', 'Cualquier momento'],
        ['Alzada', 'No pone fin a vía', '1 mes; resuelve 3'],
        ['Reposición', 'Pone fin a vía', '1 mes; resuelve 1'],
        ['Extraordinario error de hecho', 'Acto firme', '4 años'],
        ['Extraordinario demás causas', 'Acto firme', '3 meses'],
        ['Suspensión solicitada', 'Sin respuesta', '1 mes: suspendido']
      ]
    },
    5: {
      sources: [SOURCES.lrbrl, SOURCES.rof, SOURCES.loreg, SOURCES.trrl],
      articleCoverage: [
        ['Arts. 1-10 LRBRL', 'Entidades locales, autonomía, competencias y relaciones.'],
        ['Arts. 11-30 LRBRL', 'Municipio, territorio, población, organización y competencias.'],
        ['Arts. 31-40 LRBRL', 'Provincia, organización y competencias provinciales.'],
        ['Arts. 46-54 LRBRL', 'Funcionamiento, sesiones, acuerdos y responsabilidad.'],
        ['Arts. 176-209 LOREG', 'Elecciones municipales, alcalde, cabildos y diputaciones.'],
        ['ROF', 'Convocatorias, sesiones, debates, votaciones, actas y órganos complementarios.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El municipio es entidad básica local con territorio, población y organización. Su gobierno corresponde al Ayuntamiento formado por alcalde y concejales. La provincia agrupa municipios y se gobierna normalmente por Diputación. El tema exige organización, funcionamiento, competencias y régimen electoral local.`,
          `En examen deben distinguirse atribuciones de alcalde, pleno y junta; órganos necesarios y complementarios; sesiones y mayorías; competencia propia, delegada y distinta; y elección de concejales, alcalde y diputados provinciales.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La Ley 7/1985 es base principal. El Real Decreto Legislativo 781/1986 y ROF completan organización y funcionamiento. La LOREG regula elección.`,
          `La normativa autonómica puede desarrollar régimen local, pero no desplaza bases estatales. Los municipios de gran población tienen régimen específico que no debe aplicarse automáticamente a La Puebla.`,
          `Las competencias y órganos pueden haber sido modificados, por lo que debe revisarse texto consolidado y reglamento orgánico municipal si existe.`
        ]},
        { heading: '1. Concepto y elementos del municipio', paragraphs: [
          `El municipio es entidad básica de organización territorial y cauce inmediato de participación. Tiene personalidad jurídica y plena capacidad.`,
          `Sus elementos son territorio, población y organización. El término es territorio donde Ayuntamiento ejerce competencias; cada municipio pertenece a una provincia.`,
          `La creación, supresión y alteración se regula por legislación autonómica, sin alterar límites provinciales y con audiencia, dictámenes y comunicación.`
        ]},
        { heading: '2. Población y padrón', paragraphs: [
          `Toda persona que viva en España debe inscribirse en padrón del municipio de residencia habitual; si vive en varios, en el que más tiempo. Los inscritos son vecinos.`,
          `El padrón es registro administrativo cuyos datos prueban residencia y domicilio habitual. Certificaciones tienen carácter de documento público y fehaciente a efectos administrativos.`,
          `La inscripción de extranjeros no prueba residencia legal ni atribuye derechos fuera de legislación. Debe renovarse o confirmarse en supuestos y proteger datos.`
        ]},
        { heading: '3. Derechos y deberes de los vecinos', paragraphs: [
          `Los vecinos participan en gestión, usan servicios, contribuyen mediante prestaciones, piden consulta, exigen prestación obligatoria y ejercen iniciativa popular en términos legales.`,
          `Tienen derecho de sufragio local cuando cumplen condiciones. También deben respetar ordenanzas y colaborar conforme ley.`,
          `El acceso a información y expedientes se rige por procedimiento, transparencia y protección de datos; ser vecino no da acceso ilimitado.`
        ]},
        { heading: '4. Ayuntamiento y órganos necesarios', paragraphs: [
          `El gobierno y administración corresponden al Ayuntamiento, integrado por alcalde y concejales, salvo concejo abierto.`,
          `Existen en todos alcalde, tenientes de alcalde y pleno. La comisión especial de cuentas es necesaria. La junta existe en municipios de más de 5.000 habitantes y en menores si reglamento o pleno lo acuerda.`,
          `Órganos de estudio, informe y consulta existen según población y acuerdo, respetando proporcionalidad política. Pueden existir órganos desconcentrados y participación.`
        ]},
        { heading: '5. Alcalde', paragraphs: [
          `Preside corporación, dirige gobierno y administración, representa, convoca y preside sesiones, decide empates con voto de calidad, dirige servicios, jefatura de personal y ejerce competencias no atribuidas a otros.`,
          `Tiene atribuciones en gestión económica, contratación y patrimonio dentro de límites, licencias cuando ordenanzas no asignen y acciones judiciales en su competencia.`,
          `Puede delegar salvo materias indelegables. Nombra tenientes entre miembros de junta o concejales y estos sustituyen por orden.`
        ]},
        { heading: '6. Pleno', paragraphs: [
          `Integrado por todos concejales y presidido por alcalde. Controla y fiscaliza órganos de gobierno y adopta acuerdos estructurales.`,
          `Aprueba reglamento orgánico, ordenanzas, presupuesto, plantilla, planeamiento, formas de gestión, alteración término y otras materias; acepta delegaciones y plantea conflictos.`,
          `Algunas atribuciones son delegables en alcalde o junta, pero otras no, especialmente control, ordenanzas, presupuesto, planeamiento general y mayorías especiales.`
        ]},
        { heading: '7. Junta de Gobierno Local', paragraphs: [
          `Se integra por alcalde y concejales nombrados, con límite de un tercio del número legal. Asiste al alcalde y ejerce atribuciones delegadas o legales.`,
          `Sus sesiones no son públicas por regla general, sin perjuicio de publicidad de acuerdos y acceso.`,
          `No debe confundirse con comisión informativa, que prepara asuntos del pleno y refleja proporcionalidad de grupos.`
        ]},
        { heading: '8. Funcionamiento de órganos colegiados', paragraphs: [
          `El pleno celebra sesiones ordinarias con periodicidad legal según población, extraordinarias y extraordinarias urgentes. La convocatoria incluye orden del día y documentación.`,
          `Para constituirse se requiere tercio del número legal, nunca menos de tres, y presencia de presidente y secretario. El quórum debe mantenerse.`,
          `Las sesiones plenarias son públicas salvo debate y votación de asuntos que afecten honor, intimidad o imagen si se acuerda por mayoría absoluta.`
        ]},
        { heading: '9. Debates, votaciones y mayorías', paragraphs: [
          `Los asuntos se debaten y votan según orden. La votación ordinaria es regla; puede ser nominal o secreta en casos. Cada miembro tiene un voto y alcalde decide empate tras segunda votación.`,
          `Regla general es mayoría simple de presentes: más votos afirmativos que negativos. Mayoría absoluta exige más de mitad del número legal.`,
          `Materias como alteración de término, creación de entidades, símbolos, mancomunidades o ciertas concesiones pueden exigir mayoría absoluta u otra especial.`
        ]},
        { heading: '10. Actas y certificaciones', paragraphs: [
          `De cada sesión secretario levanta acta con lugar, fecha, asistentes, asuntos, opiniones sintetizadas, votaciones, acuerdos y hora. Se aprueba en sesión posterior con rectificaciones.`,
          `Las certificaciones de acuerdos se expiden por secretario con visto bueno del presidente, incluso antes de aprobar acta si se hace salvedad.`,
          `El acta no es transcripción literal general, sino documento fehaciente del desarrollo y acuerdos. Los medios audiovisuales pueden complementar.`
        ]},
        { heading: '11. Competencias municipales', paragraphs: [
          `El municipio puede ejercer competencias propias y delegadas. Las propias se determinan por ley y se ejercen con autonomía, responsabilidad, coordinación y sostenibilidad.`,
          `Entre materias del artículo 25 se incluyen urbanismo, medio ambiente urbano, agua, vías, evaluación social inmediata, policía local, tráfico, turismo local, ferias, salubridad, cementerios, deporte, cultura, educación y tecnologías en términos legales.`,
          `Los servicios mínimos dependen de población. Toda entidad presta alumbrado, cementerio, residuos, limpieza viaria, agua, alcantarillado, acceso, pavimentación y control de alimentos, con ampliaciones por tramos.`
        ]},
        { heading: '12. Competencias delegadas y distintas', paragraphs: [
          `Estado y comunidad pueden delegar competencias con alcance, condiciones, duración mínima, control y financiación suficiente. No debe generar mayor gasto sin financiación.`,
          `Para ejercer competencias distintas de propias y delegadas se exige no poner en riesgo sostenibilidad y no duplicar servicio, con informes vinculantes previstos.`,
          `La competencia no se presume por utilidad política. Debe identificarse título legal y órgano municipal competente.`
        ]},
        { heading: '13. La provincia', paragraphs: [
          `La provincia es entidad local determinada por agrupación de municipios, con personalidad propia y división territorial para actividades estatales. Alterar límites exige ley orgánica.`,
          `Su gobierno corresponde a diputaciones u otras corporaciones representativas, salvo regímenes insulares o autonómicos.`,
          `Fines propios son solidaridad y equilibrio intermunicipal, asegurando prestación integral y participación en coordinación local.`
        ]},
        { heading: '14. Organización provincial', paragraphs: [
          `Son órganos necesarios presidente, vicepresidentes, junta de gobierno y pleno; comisión especial de cuentas y comisiones según reglas.`,
          `El presidente dirige gobierno, representa, convoca, dirige servicios y ejerce atribuciones. El pleno controla y adopta decisiones estructurales.`,
          `La junta asiste y ejerce delegaciones. La organización se completa por reglamento y legislación autonómica.`
        ]},
        { heading: '15. Competencias provinciales', paragraphs: [
          `La Diputación coordina servicios municipales para garantía integral, presta asistencia jurídica, económica y técnica, especialmente a municipios pequeños, y garantiza funciones de secretaría e intervención.`,
          `Presta servicios supramunicipales, coopera en desarrollo económico y social, apoya gestión recaudatoria y administración electrónica, y puede asumir tratamiento de residuos o prevención de incendios según población y ley.`,
          `El plan provincial de cooperación distribuye recursos con participación municipal, criterios objetivos y financiación.`
        ]},
        { heading: '16. Elección de concejales', paragraphs: [
          `Los concejales se eligen por sufragio universal, libre, igual, directo y secreto. El municipio es circunscripción y el número depende de población.`,
          `En municipios de 250 o más habitantes rige listas y sistema D'Hondt con barrera legal; en menores hay listas abiertas con particularidades.`,
          `El mandato es cuatro años. La Administración electoral garantiza transparencia y objetividad mediante juntas y mesas.`
        ]},
        { heading: '17. Elección y cese del alcalde', paragraphs: [
          `En sesión constitutiva pueden ser candidatos cabezas de lista. Si alguno obtiene mayoría absoluta de concejales, es elegido; si no, el de lista más votada; empate se resuelve por sorteo.`,
          `En concejo abierto, alcalde es elegido directamente por electores.`,
          `Puede cesar por moción de censura constructiva o cuestión de confianza vinculada a materias, con procedimientos y límites de LOREG.`
        ]},
        { heading: '18. Elección de diputados provinciales', paragraphs: [
          `La elección es indirecta. Tras elecciones municipales, junta electoral distribuye puestos por partidos judiciales y candidaturas según votos.`,
          `Concejales de cada formación eligen entre ellos a quienes ocuparán puestos. El pleno provincial elige presidente por mayoría absoluta en primera votación o simple en segunda.`,
          `Los diputados no son elegidos directamente por toda ciudadanía mediante papeleta provincial separada.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Municipio: territorio, población y organización. Ayuntamiento: alcalde y concejales.`,
          `Órganos necesarios: alcalde, tenientes, pleno y comisión especial de cuentas; junta según población o acuerdo.`,
          `Provincia: agrupación de municipios; Diputación asiste, coopera y coordina.`,
          `Concejales: elección directa; alcalde: por concejales; diputados provinciales: indirecta.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `La Junta no es obligatoria en todos los municipios. Comisión de cuentas sí.`,
          `Mayoría simple se calcula entre presentes; absoluta sobre número legal.`,
          `Padrón no acredita residencia legal de extranjeros. Diputados provinciales no se eligen directamente.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué órganos son necesarios y qué atribuciones principales tienen alcalde y pleno?`,
          `2. ¿Cómo funcionan sesiones, quórum, votaciones, actas y certificaciones?`,
          `3. ¿Cómo se eligen concejales, alcalde y diputados provinciales?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Construye dos cuadros: órganos-competencias y elecciones-forma de elección. Son las confusiones más frecuentes.`,
          `En supuesto local identifica entidad, órgano, atribución, delegabilidad, mayoría y publicidad. No respondas solo que corresponde al Ayuntamiento.`
        ]}
      ],
      tree: `RÉGIMEN LOCAL
├─ Municipio
│  ├─ Territorio, población y padrón
│  ├─ Ayuntamiento
│  ├─ Alcalde, pleno y junta
│  ├─ Sesiones, votaciones y actas
│  └─ Competencias y servicios
├─ Provincia
│  ├─ Diputación
│  ├─ Presidente, pleno y junta
│  └─ Asistencia, cooperación y coordinación
└─ Régimen electoral
   ├─ Concejales: elección directa
   ├─ Alcalde: elección por concejales
   └─ Diputados: elección indirecta`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Municipio', 'Territorio, población y organización', 'Art. 11 LRBRL'],
        ['Junta de Gobierno', 'Obligatoria >5.000; posible en menores', 'Art. 20'],
        ['Pleno', 'Todos los concejales, presidido por alcalde', 'Art. 22'],
        ['Quórum', 'Tercio, mínimo tres, presidente y secretario', 'Art. 46'],
        ['Mayoría simple', 'Más afirmativos que negativos', 'Art. 47'],
        ['Provincia', 'Agrupación de municipios', 'Art. 31'],
        ['Competencia provincial', 'Asistencia y cooperación', 'Art. 36'],
        ['Alcalde', 'Mayoría absoluta o lista más votada', 'Art. 196 LOREG']
      ]
    }
  };

  const updated = [];
  for (const [numberText, definition] of Object.entries(THEMES)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.officialTitle ||= theme.title;
    theme.sections = definition.sections;
    theme.tree = definition.tree;
    theme.reviewTable = definition.reviewTable;
    theme.articleCoverage = definition.articleCoverage.map(([range, focus]) => ({ range, focus }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.officialSources = definition.sources.map(source => ({ ...source, reviewedAt: REVIEW_DATE }));
    theme.theoryStatus = {
      version: 'v0.86.0',
      reviewedAt: REVIEW_DATE,
      sourcePolicy: 'Fuentes oficiales consolidadas y explicación autosuficiente',
      autonomous: true,
      fixedStudyStructure: true,
      articleByArticle: true,
      noOffSyllabusFiller: true,
      block: 'La Puebla 1-5'
    };
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v86 || { completedThemes: [] };
  const completedThemes = [...new Set([...(previous.completedThemes || []), ...updated])].sort((a, b) => a - b);
  ope.theoryProgramme.v86 = {
    ...previous,
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    objective: 'OpoWeb como única fuente teórica',
    completedThemes,
    pendingThemes: Array.from({ length: 19 }, (_, index) => index + 1).filter(number => !completedThemes.includes(number)),
    officialBasis: {
      label: 'Bases específicas del Ayuntamiento de La Puebla de Montalbán',
      reference: 'BOP Toledo 82, anuncio 2026-1965',
      publishedAt: '2026-05-05'
    }
  };

  window.OPOWEB_PUEBLA_TEORIA_V86_BLOQUE1 = {
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v86.pendingThemes
  };
})();
