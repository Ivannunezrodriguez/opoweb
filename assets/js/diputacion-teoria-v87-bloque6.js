(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = 'v0.87.0';
  const REVIEW_DATE = '2026-07-15';
  const source = (label, reference, url) => ({ label, reference, url, reviewedAt: REVIEW_DATE });
  const BOP = source('BOP Toledo núm. 118, de 25 de junio de 2026, programa Administrativo/a C1', 'BOP-TO-118-2026-2934', 'https://www.diputoledo.es/global/ver-pdf/37428');
  const CE = source('Constitución Española, texto consolidado', 'BOE-A-1978-31229', 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229');
  const LOTC = source('Ley Orgánica 2/1979, del Tribunal Constitucional', 'BOE-A-1979-23709', 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709');
  const DEFENSOR = source('Ley Orgánica 3/1981, del Defensor del Pueblo', 'BOE-A-1981-10325', 'https://www.boe.es/buscar/act.php?id=BOE-A-1981-10325');
  const CUENTAS = source('Ley Orgánica 2/1982, del Tribunal de Cuentas', 'BOE-A-1982-11584', 'https://www.boe.es/buscar/act.php?id=BOE-A-1982-11584');
  const CC = source('Código Civil, Título preliminar', 'BOE-A-1889-4763', 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763');
  const L39 = source('Ley 39/2015, del Procedimiento Administrativo Común', 'BOE-A-2015-10565', 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565');
  const L40 = source('Ley 40/2015, de Régimen Jurídico del Sector Público', 'BOE-A-2015-10566', 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566');

  const THEORY = {
    1: {
      title: 'La Constitución española de 1978: significado y estructura, principios generales y valor normativo. El Tribunal Constitucional. La reforma constitucional.',
      sources: [BOP, CE, LOTC],
      coverage: ['significado constitucional', 'estructura formal', 'Preámbulo', 'Título Preliminar', 'parte dogmática', 'parte orgánica', 'principios artículos 1 a 9', 'supremacía constitucional', 'aplicación directa', 'interpretación conforme', 'Tribunal Constitucional', 'composición', 'competencias', 'recurso de inconstitucionalidad', 'cuestión de inconstitucionalidad', 'recurso de amparo', 'conflictos constitucionales', 'sentencias', 'reforma ordinaria', 'reforma agravada', 'límites temporales'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Constitución de 1978 es la norma suprema del ordenamiento, fuente de validez de las demás normas y marco de organización del Estado. Su significado no se limita a describir instituciones: establece valores, principios, derechos, distribución territorial del poder, procedimientos de producción normativa y mecanismos de control. Ciudadanos y poderes públicos están sujetos a ella y al resto del ordenamiento.',
          'El tema exige dominar tres bloques. Primero, estructura y principios de los artículos 1 a 9. Segundo, valor normativo y control por el Tribunal Constitucional. Tercero, reforma constitucional de los artículos 166 a 169, distinguiendo el procedimiento ordinario del agravado y el referéndum facultativo del obligatorio.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La fuente principal es el texto consolidado oficial del BOE. A 15 de julio de 2026, el BOE muestra como última actualización publicada la de 20 de mayo de 2026. La estructura y los artículos deben estudiarse en su redacción vigente en la fecha del examen, no desde esquemas antiguos.',
          'La Ley Orgánica 2/1979 desarrolla el Tribunal Constitucional. La Constitución determina su posición, composición básica y competencias; la ley orgánica desarrolla organización, procedimientos y efectos. El Tribunal Constitucional no forma parte del Poder Judicial, aunque ejerce jurisdicción constitucional y sus resoluciones vinculan en los términos previstos por la Constitución y la ley.',
          'OpoWeb conserva el título literal del BOP. No añade instituciones ajenas al epígrafe y separa reglas constitucionales de desarrollos legales. Cuando una afirmación depende de ley orgánica se identifica como desarrollo y no como texto literal de la Constitución.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La Constitución fue aprobada por las Cortes, ratificada en referéndum, sancionada y promulgada, y publicada el 29 de diciembre de 1978. Su legitimidad democrática procede del poder constituyente y su función es ordenar jurídicamente la convivencia política. La Constitución es rígida porque su reforma requiere procedimientos más exigentes que una ley ordinaria.',
          'La estructura formal comprende Preámbulo, Título Preliminar, diez títulos numerados, cuatro disposiciones adicionales, nueve transitorias, una derogatoria y una final. El Preámbulo expresa finalidades políticas y sirve como criterio interpretativo, pero no contiene por sí solo preceptos con la misma formulación normativa que el articulado.',
          'El Título Preliminar, artículos 1 a 9, concentra decisiones fundamentales. El artículo 1 define España como Estado social y democrático de Derecho, proclama libertad, justicia, igualdad y pluralismo político, sitúa la soberanía nacional en el pueblo español y establece la Monarquía parlamentaria.',
          'El artículo 2 combina unidad de la Nación española, autonomía de nacionalidades y regiones y solidaridad. El artículo 3 regula castellano y demás lenguas oficiales; el 4 la bandera; el 5 la capital; el 6 los partidos; el 7 sindicatos y asociaciones empresariales; el 8 Fuerzas Armadas; y el 9 la sujeción al ordenamiento, promoción de libertad e igualdad reales y garantías del Estado de Derecho.',
          'Los principios del artículo 9.3 son legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de disposiciones sancionadoras no favorables o restrictivas de derechos individuales, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad. No deben confundirse: publicidad exige conocimiento oficial posible; jerarquía impide que una norma inferior contradiga a otra superior; legalidad vincula actuación y potestades al ordenamiento.',
          'La parte dogmática comprende principalmente principios y derechos, mientras la parte orgánica organiza poderes e instituciones. Esta división es pedagógica, no un encabezado formal completo de la Constitución. Los títulos regulan derechos y deberes, Corona, Cortes, Gobierno, relaciones Gobierno-Cortes, Poder Judicial, economía y Hacienda, organización territorial, Tribunal Constitucional y reforma.',
          'El valor normativo significa que la Constitución es Derecho aplicable. El artículo 9.1 sujeta a ciudadanos y poderes públicos. Los jueces interpretan las normas de acuerdo con la Constitución y no pueden aplicar válidamente una ley contraria sin activar el mecanismo constitucional correspondiente. Las normas anteriores incompatibles quedan afectadas por la disposición derogatoria y las posteriores deben respetar la Constitución.',
          'La supremacía constitucional se protege mediante reforma rígida, control de constitucionalidad, tutela de derechos y vinculación de poderes. No toda norma constitucional tiene idéntica técnica de aplicación: algunas reconocen derechos directamente, otras distribuyen competencias, otras contienen mandatos de desarrollo y los principios rectores se alegan conforme a las leyes que los desarrollen.',
          'El Tribunal Constitucional es independiente de los demás órganos constitucionales y está sometido a la Constitución y a su ley orgánica. Se compone de doce miembros nombrados por el Rey: cuatro a propuesta del Congreso por mayoría de tres quintos, cuatro a propuesta del Senado por la misma mayoría, dos a propuesta del Gobierno y dos a propuesta del Consejo General del Poder Judicial.',
          'Los miembros deben ser juristas de reconocida competencia con más de quince años de ejercicio profesional en las categorías constitucionalmente previstas. Son designados por nueve años y se renuevan por terceras partes cada tres. El Presidente es nombrado por el Rey a propuesta del propio Tribunal por un periodo de tres años.',
          'El Tribunal conoce del recurso de inconstitucionalidad contra leyes y normas con fuerza de ley, del recurso de amparo en los casos y formas legales, de conflictos de competencia entre Estado y comunidades autónomas o entre estas, y de las demás materias atribuidas por Constitución y leyes orgánicas.',
          'El recurso de inconstitucionalidad es un control directo y abstracto de normas con rango de ley. La legitimación constitucional corresponde al Presidente del Gobierno, Defensor del Pueblo, cincuenta diputados, cincuenta senadores y órganos autonómicos en los términos previstos. No debe confundirse con el recurso contencioso contra un reglamento.',
          'La cuestión de inconstitucionalidad la plantea un órgano judicial cuando una norma con rango de ley aplicable al caso, de cuya validez dependa el fallo, pueda ser contraria a la Constitución. El órgano judicial no anula la ley: formula la cuestión tras cumplir los requisitos y el Tribunal Constitucional decide.',
          'El recurso de amparo protege determinados derechos y libertades constitucionales una vez agotada la vía judicial procedente y cumplidos los requisitos legales. No es una tercera instancia general ni permite revisar cualquier infracción. Su objeto y especial trascendencia constitucional se examinan conforme a la Constitución y a la LOTC.',
          'Las sentencias que declaran inconstitucionalidad producen los efectos constitucionales y se publican en el BOE. Tienen valor de cosa juzgada desde el día siguiente a su publicación y no cabe recurso contra ellas, sin perjuicio de aclaraciones u otras actuaciones previstas. La declaración puede afectar a la norma y a preceptos conectados en los términos legales.',
          'La reforma constitucional se inicia conforme al artículo 166, que remite a la iniciativa legislativa prevista en los apartados 1 y 2 del artículo 87. No existe iniciativa popular para reformar la Constitución. Tampoco puede iniciarse reforma en tiempo de guerra ni durante la vigencia de los estados del artículo 116.',
          'El procedimiento ordinario del artículo 167 exige aprobación del proyecto por mayoría de tres quintos de cada Cámara. Si no hay acuerdo, una comisión paritaria intenta un texto. Si el Senado logra mayoría absoluta y el Congreso dos tercios, puede aprobarse. El referéndum es facultativo si lo solicita una décima parte de miembros de cualquiera de las Cámaras dentro de quince días.',
          'El procedimiento agravado del artículo 168 se aplica a revisión total o parcial que afecte al Título Preliminar, Sección primera del Capítulo segundo del Título I o Título II. Se aprueba el principio por dos tercios de cada Cámara, se disuelven inmediatamente las Cortes, las nuevas ratifican la decisión y estudian el texto, que debe aprobarse por dos tercios de ambas Cámaras. El referéndum es obligatorio.',
          'Las diferencias de examen son esenciales: tres quintos frente a dos tercios; continuidad de las Cámaras frente a disolución; referéndum solicitado frente a referéndum necesario; materias generales frente a revisión total o núcleos constitucionales especialmente protegidos.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'La Constitución es norma suprema, rígida y vinculante. Estructura: Preámbulo, Título Preliminar, diez títulos y disposiciones. Artículo 1: Estado social y democrático de Derecho, valores, soberanía popular y Monarquía parlamentaria. Artículo 9.3: garantías del Estado de Derecho.',
          'Tribunal Constitucional: doce miembros, nueve años, renovación por tercios; no pertenece al Poder Judicial. Controla leyes, resuelve conflictos y amparos. Reforma ordinaria: tres quintos y referéndum facultativo. Reforma agravada: dos tercios, disolución, nuevas Cortes y referéndum obligatorio.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Preámbulo no es un título. El Título Preliminar comprende artículos 1 a 9. Monarquía parlamentaria es forma política. Tribunal Constitucional no integra el Poder Judicial. Doce magistrados, nueve años y renovación por terceras partes. Cuestión de inconstitucionalidad la plantea un juez; recurso directo tiene legitimados tasados. Artículo 167 no exige siempre referéndum; artículo 168 sí. La reforma no se inicia durante guerra o estados del artículo 116.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Enumera la estructura formal y explica qué materias regula cada gran bloque constitucional.',
          '2. Diferencia recurso y cuestión de inconstitucionalidad y recurso de amparo.',
          '3. Compara paso a paso los artículos 167 y 168, incluidas mayorías, disolución y referéndum.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Ante una pregunta, identifica artículo o institución. En Tribunal Constitucional separa composición, legitimación, procedimiento y efecto. En reforma busca cuatro datos: materia afectada, mayoría, disolución y referéndum. Desconfía de respuestas que trasladan reglas del Poder Judicial al Tribunal Constitucional o presentan el referéndum ordinario como automático.'
        ]}
      ],
      tree: 'Tema 1 · Constitución y control constitucional\n├─ Significado y valor normativo\n│  ├─ Norma suprema y poder constituyente\n│  ├─ Sujeción de ciudadanos y poderes\n│  └─ Aplicación e interpretación constitucional\n├─ Estructura\n│  ├─ Preámbulo\n│  ├─ Título Preliminar: arts. 1-9\n│  ├─ Diez títulos\n│  └─ Disposiciones\n├─ Tribunal Constitucional\n│  ├─ 12 miembros, 9 años, renovación por tercios\n│  ├─ Recurso y cuestión de inconstitucionalidad\n│  ├─ Amparo\n│  ├─ Conflictos\n│  └─ Sentencias y efectos\n└─ Reforma\n   ├─ Iniciativa y límites temporales\n   ├─ Art. 167: ordinaria\n   └─ Art. 168: agravada',
      reviewTable: [['Bloque','Regla clave'],['Constitución','Norma suprema y directamente vinculante'],['Estructura','Preámbulo, Título Preliminar, diez títulos y disposiciones'],['Artículo 1','Estado social y democrático, valores, soberanía y Monarquía'],['Artículo 9.3','Legalidad, jerarquía, publicidad, irretroactividad, seguridad, responsabilidad y no arbitrariedad'],['Tribunal Constitucional','Órgano constitucional independiente, no Poder Judicial'],['Composición','12 miembros, 9 años, renovación por tercios'],['Recurso de inconstitucionalidad','Control directo de leyes por legitimados tasados'],['Cuestión','Planteada por órgano judicial respecto de ley aplicable'],['Amparo','Protección extraordinaria de derechos determinados'],['Artículo 167','Tres quintos y referéndum facultativo'],['Artículo 168','Dos tercios, disolución, nuevas Cortes y referéndum obligatorio'],['Límite temporal','No iniciar en guerra ni estados del artículo 116']]
    },
    2: {
      title: 'Derechos y deberes fundamentales de los españoles. Garantía y suspensión. Las fuentes del derecho administrativo: La Ley, el Reglamento.',
      sources: [BOP, CE, CC, L39],
      coverage: ['dignidad', 'igualdad', 'derechos fundamentales', 'libertades públicas', 'derechos y deberes ciudadanos', 'principios rectores', 'garantías artículo 53', 'reserva de ley', 'ley orgánica', 'tutela judicial', 'amparo', 'Defensor del Pueblo', 'suspensión general', 'suspensión individual', 'fuentes del Derecho', 'Constitución', 'ley orgánica', 'ley ordinaria', 'decreto-ley', 'decreto legislativo', 'reglamento', 'potestad reglamentaria', 'jerarquía', 'competencia', 'procedimiento reglamentario', 'límites'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El Título I de la Constitución ordena derechos, deberes y principios con niveles distintos de protección. No todo precepto del Título I es un derecho fundamental en sentido estricto. El artículo 14 y la Sección primera del Capítulo segundo disfrutan de tutela reforzada; la Sección segunda tiene reserva de ley y tutela ordinaria; los principios rectores informan actuación y legislación y se alegan conforme a las leyes que los desarrollan.',
          'El segundo bloque estudia ley y reglamento como fuentes del Derecho administrativo. La ley procede de potestad legislativa o de normas gubernamentales con fuerza de ley en los supuestos constitucionales. El reglamento es norma subordinada dictada por la Administración o el Gobierno con potestad normativa, sometida a Constitución, ley, competencia, jerarquía y procedimiento.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Constitución vigente es la fuente primaria. Para fuentes generales se utiliza el Título preliminar del Código Civil y para potestad reglamentaria y elaboración normativa los artículos 128 a 133 de la Ley 39/2015, sin convertir esos preceptos en una teoría completa de todas las fuentes.',
          'La expresión del título “derechos y deberes fundamentales de los españoles” se desarrolla conforme a la sistemática constitucional, que también reconoce derechos a todas las personas o regula extranjeros con matices. No debe afirmarse que todos los derechos correspondan exclusivamente a españoles.',
          'Los reglamentos no pueden tipificar delitos, crear tributos ni imponer cargas o prestaciones personales o patrimoniales públicas fuera de cobertura legal, y no pueden vulnerar Constitución o leyes ni regular materias reservadas a la ley. Su control corresponde a los tribunales ordinarios en los términos del ordenamiento.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El artículo 10 sitúa dignidad, derechos inviolables, libre desarrollo, respeto a ley y derechos ajenos como fundamento del orden político. Además ordena interpretar las normas relativas a derechos conforme a la Declaración Universal y tratados ratificados. Es una cláusula interpretativa esencial.',
          'El Capítulo primero regula españoles y extranjeros. Nacionalidad se adquiere, conserva y pierde conforme a ley; ningún español de origen puede ser privado de ella. La mayoría de edad son dieciocho años. Los extranjeros gozan de libertades en términos de tratados y ley, con las especialidades constitucionales.',
          'El artículo 14 proclama igualdad ante la ley y prohibición de discriminación. No exige trato idéntico en cualquier situación: las diferencias deben tener justificación objetiva, razonable y proporcionada. Es objeto de tutela reforzada aunque se ubica antes de la Sección primera.',
          'La Sección primera, artículos 15 a 29, recoge derechos fundamentales y libertades públicas: vida e integridad; libertad ideológica y religiosa; libertad y seguridad; honor, intimidad, propia imagen, domicilio y comunicaciones; residencia y circulación; expresión e información; reunión; asociación; participación; tutela judicial; legalidad sancionadora; educación; libertad sindical y huelga; petición.',
          'Cada derecho tiene contenido, titulares, límites y desarrollo. Los límites deben estar previstos y respetar contenido esencial. Por ejemplo, domicilio requiere consentimiento o resolución judicial salvo flagrante delito; detención tiene plazo máximo; libertad de expresión convive con honor, intimidad, imagen y protección de juventud e infancia.',
          'La Sección segunda, artículos 30 a 38, regula derechos y deberes de los ciudadanos: defensa de España, sistema tributario, matrimonio, propiedad y herencia, fundación, trabajo, colegios profesionales, negociación y conflicto colectivo, libertad de empresa. Su tutela es legal y judicial, pero no dispone del mismo acceso directo al amparo que Sección primera y artículo 14.',
          'El Capítulo tercero contiene principios rectores: familia, Seguridad Social, salud, cultura, medio ambiente, vivienda, juventud, discapacidad, tercera edad, consumidores y organizaciones profesionales. Informan legislación, práctica judicial y actuación pública. Solo pueden alegarse ante jurisdicción conforme a las leyes que los desarrollen.',
          'El artículo 53 organiza garantías. Los derechos y libertades del Capítulo segundo vinculan a todos los poderes y solo por ley, respetando contenido esencial, puede regularse su ejercicio. Artículo 14 y Sección primera se tutelan por procedimiento preferente y sumario y, en su caso, amparo.',
          'La reserva de ley orgánica del artículo 81 afecta al desarrollo de derechos fundamentales y libertades públicas, estatutos de autonomía, régimen electoral general y materias previstas. No toda ley relacionada con un derecho debe ser orgánica, sino el desarrollo directo en el ámbito constitucionalmente reservado.',
          'El Defensor del Pueblo es alto comisionado de las Cortes para defender derechos del Título I y supervisa actividad administrativa. Puede interponer recurso de inconstitucionalidad y amparo. Sus resoluciones no anulan actos ni sustituyen jueces, pero formula recomendaciones, advertencias y supervisión.',
          'El artículo 54 permite suspensiones. En estados de excepción o sitio pueden suspenderse determinados derechos enumerados, con alcance y garantías legales. El derecho del artículo 17.3 tiene tratamiento específico en excepción y el derecho de huelga y conflicto también aparece entre los suspendibles.',
          'La suspensión individual se conecta con investigaciones sobre bandas armadas o elementos terroristas y requiere ley orgánica, intervención judicial y control parlamentario. Puede afectar, con garantías, a duración de detención y determinados derechos de domicilio y comunicaciones. Uso injustificado genera responsabilidad.',
          'Limitación, delimitación y suspensión no son sinónimos. Un derecho puede estar sometido a límites ordinarios sin quedar suspendido. La suspensión priva temporalmente de eficacia a facultades concretas bajo presupuestos excepcionales. En test, una lista que incluya todos los derechos como suspendibles es incorrecta.',
          'Las fuentes del ordenamiento incluyen ley, costumbre y principios generales conforme al Código Civil, con tratados tras publicación y jurisprudencia como complemento. En Derecho administrativo predominan Constitución, leyes, normas con fuerza de ley, reglamentos y normativa europea, además de principios y tratados.',
          'La ley en sentido formal es aprobada por Cortes o parlamentos autonómicos. Ley orgánica exige mayoría absoluta del Congreso en votación final sobre el conjunto y se reserva a materias constitucionales. Ley ordinaria regula las restantes materias dentro de competencia.',
          'El decreto-ley es disposición legislativa provisional del Gobierno en caso de extraordinaria y urgente necesidad. Tiene límites materiales y debe someterse al Congreso para convalidación o derogación en treinta días. No es reglamento, porque tiene fuerza de ley.',
          'El decreto legislativo resulta de delegación de las Cortes al Gobierno: ley de bases para texto articulado o ley ordinaria para refundir textos. La delegación debe ser expresa, concreta y temporal y se agota con su uso. Tampoco es reglamento.',
          'El reglamento es norma general subordinada a la ley. Puede adoptar formas según órgano: reales decretos, decretos, órdenes y disposiciones locales. La denominación no basta para conocer jerarquía; importan órgano, competencia, contenido y procedimiento.',
          'La potestad reglamentaria corresponde a Gobierno de la Nación, órganos autonómicos y gobiernos locales según Constitución, estatutos y leyes. Ningún reglamento puede contradecir una norma superior ni otro de superior jerarquía. Los reglamentos ejecutivos desarrollan ley; los organizativos ordenan estructuras dentro de competencia.',
          'La Ley 39/2015 exige principios de buena regulación: necesidad, eficacia, proporcionalidad, seguridad jurídica, transparencia y eficiencia. La iniciativa debe justificar necesidad, elegir instrumento adecuado, evitar cargas innecesarias y ser coherente. Participación y publicidad se aplican según casos y excepciones legales.',
          'Una disposición administrativa contraria a Constitución, leyes o reglamentos superiores es nula de pleno derecho. También lo es la que regula materias reservadas a ley. Los jueces y tribunales controlan potestad reglamentaria y legalidad de actuación administrativa conforme al artículo 106 constitucional.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Artículo 14 y Sección primera tienen protección reforzada. Sección segunda: reserva legal y tutela ordinaria. Principios rectores: orientan y se alegan según leyes de desarrollo. Suspensión general solo para derechos enumerados y en excepción o sitio; suspensión individual es tasada y con control judicial.',
          'Ley y reglamento no son equivalentes. Decreto-ley y decreto legislativo tienen fuerza de ley. Reglamento es subordinado, exige competencia y procedimiento y respeta reserva de ley. Principios de buena regulación: necesidad, eficacia, proporcionalidad, seguridad jurídica, transparencia y eficiencia.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Artículo 14 está fuera de la Sección primera pero tiene tutela reforzada. Principios rectores no tienen amparo directo. Defensor no anula actos. No todos los derechos son suspendibles. Decreto-ley no es reglamento. Ley orgánica requiere mayoría absoluta del Congreso en votación final del conjunto. Reglamento no puede regular materia reservada a ley. Disposición administrativa contraria a ley es nula.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Clasifica derechos del Título I por nivel de garantía y vía de protección.',
          '2. Enumera los derechos suspendibles y diferencia suspensión general e individual.',
          '3. Compara ley orgánica, ley ordinaria, decreto-ley, decreto legislativo y reglamento.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Primero identifica sección constitucional y garantía. Después determina si la cuestión es titularidad, límite o suspensión. En fuentes, pregunta si la norma tiene fuerza de ley, qué órgano la dicta, qué materia regula y qué procedimiento sigue. Las trampas mezclan forma “decreto” con naturaleza reglamentaria o legislativa.'
        ]}
      ],
      tree: 'Tema 2 · Derechos y fuentes\n├─ Título I\n│  ├─ Dignidad e interpretación\n│  ├─ Igualdad: art. 14\n│  ├─ Sección 1.ª: arts. 15-29\n│  ├─ Sección 2.ª: arts. 30-38\n│  └─ Principios rectores: arts. 39-52\n├─ Garantías\n│  ├─ Vinculación y reserva de ley\n│  ├─ Contenido esencial\n│  ├─ Tutela preferente y amparo\n│  └─ Defensor del Pueblo\n├─ Suspensión\n│  ├─ Excepción y sitio\n│  └─ Suspensión individual tasada\n└─ Fuentes\n   ├─ Constitución y ley\n   ├─ Ley orgánica y ordinaria\n   ├─ Decreto-ley y legislativo\n   ├─ Reglamento\n   ├─ Jerarquía y reserva\n   └─ Buena regulación y control',
      reviewTable: [['Materia','Regla clave'],['Artículo 14','Igualdad y tutela reforzada'],['Sección primera','Derechos fundamentales y libertades'],['Sección segunda','Derechos y deberes con tutela ordinaria'],['Principios rectores','Informan actuación y se alegan según ley'],['Artículo 53','Vinculación, reserva, tutela y amparo'],['Suspensión general','Derechos tasados en excepción o sitio'],['Suspensión individual','Supuestos terroristas, ley orgánica y control judicial'],['Ley orgánica','Materias reservadas y mayoría absoluta final'],['Decreto-ley','Urgencia, límites y convalidación en 30 días'],['Decreto legislativo','Delegación expresa, concreta y temporal'],['Reglamento','Norma subordinada dictada por órgano competente'],['Buena regulación','Necesidad, eficacia, proporcionalidad, seguridad, transparencia y eficiencia']]
    },
    3: {
      title: 'La organización del Estado en la Constitución: Organización institucional y organización territorial. La Jefatura del Estado: La Corona. Las Cortes Generales: Referencia al Defensor del Pueblo y al Tribunal de Cuentas.',
      sources: [BOP, CE, DEFENSOR, CUENTAS],
      coverage: ['organización institucional', 'organización territorial', 'Corona', 'Rey', 'sucesión', 'regencia', 'tutela', 'funciones del Rey', 'refrendo', 'inviolabilidad', 'Casa del Rey', 'Cortes Generales', 'Congreso', 'Senado', 'mandato', 'incompatibilidades', 'prerrogativas', 'sesiones', 'mayorías', 'procedimiento legislativo', 'control del Gobierno', 'Defensor del Pueblo', 'Tribunal de Cuentas', 'municipios', 'provincias', 'comunidades autónomas', 'autonomía', 'solidaridad'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Constitución organiza el Estado institucionalmente —Corona, Cortes, Gobierno, Poder Judicial y órganos constitucionales— y territorialmente —municipios, provincias y comunidades autónomas—. El tema se concentra en Corona y Cortes y exige referencias precisas al Defensor del Pueblo y Tribunal de Cuentas.',
          'Las preguntas más frecuentes diferencian función del Rey y acto refrendado; Congreso y Senado; elección directa de senadores y designación autonómica; mayoría simple, absoluta y cualificada; inviolabilidad parlamentaria e inmunidad; Defensor como alto comisionado y Tribunal de Cuentas como supremo órgano fiscalizador.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Las reglas principales proceden de los Títulos II, III y VIII de la Constitución y de las leyes orgánicas del Defensor del Pueblo y Tribunal de Cuentas. Reglamentos parlamentarios desarrollan funcionamiento interno, pero no se incorporan detalles ajenos al título.',
          'La Corona no gobierna: ejerce funciones constitucionales, arbitrales, moderadoras, representativas y formales. La responsabilidad política de los actos se desplaza mediante refrendo. Las Cortes representan al pueblo, ejercen potestad legislativa, aprueban presupuestos y controlan al Gobierno.',
          'La organización territorial no establece subordinación jerárquica general entre Estado, comunidades, provincias y municipios. Cada nivel ejerce autonomía y competencias conforme a Constitución y leyes, con unidad, solidaridad y coordinación.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La organización institucional distribuye funciones para evitar concentración del poder. Las Cortes legislan y controlan; el Gobierno dirige política y Administración; jueces ejercen jurisdicción; el Tribunal Constitucional garantiza supremacía constitucional; Corona representa la Jefatura del Estado dentro de la Monarquía parlamentaria.',
          'La organización territorial del artículo 137 se estructura en municipios, provincias y comunidades autónomas, todos con autonomía para gestionar sus intereses. Autonomía no es soberanía. La Constitución garantiza solidaridad, igualdad de derechos y libertad de circulación y establecimiento.',
          'El Rey es Jefe del Estado, símbolo de unidad y permanencia, arbitra y modera el funcionamiento regular de instituciones, asume máxima representación internacional y ejerce funciones atribuidas por Constitución y leyes. Su título es Rey de España y puede utilizar otros de la Corona.',
          'La Corona es hereditaria en sucesores de Juan Carlos I según primogenitura y representación, con preferencia de línea anterior, grado más próximo, varón sobre mujer en mismo grado y mayor edad. Las abdicaciones, renuncias y dudas se resuelven por ley orgánica.',
          'El consorte no puede asumir funciones constitucionales salvo lo dispuesto para Regencia. La Regencia actúa en minoría o inhabilitación del Rey y se ejerce en nombre del Rey. Debe distinguirse del tutor, que atiende a la persona del Rey menor conforme a las reglas constitucionales.',
          'Corresponde al Rey sancionar y promulgar leyes, convocar y disolver Cortes y elecciones, convocar referéndum en casos previstos, proponer candidato a Presidente y nombrarlo, nombrar y separar ministros a propuesta, expedir decretos acordados en Consejo, conferir empleos, ejercer mando supremo, acreditar representantes y manifestar consentimiento del Estado en tratados conforme a ley.',
          'Los actos del Rey son refrendados por Presidente del Gobierno y, en su caso, ministros competentes. La propuesta y nombramiento del Presidente y la disolución del artículo 99 se refrendan por Presidente del Congreso. Sin refrendo carecen de validez salvo actos relativos a administración de Casa del Rey en el ámbito constitucional.',
          'La persona del Rey es inviolable y no está sujeta a responsabilidad. Esto se relaciona con refrendo: quien refrenda asume responsabilidad. No debe confundirse inviolabilidad del Rey con inviolabilidad de diputados por opiniones en ejercicio de funciones.',
          'Las Cortes Generales representan al pueblo y están formadas por Congreso y Senado. Ejercen potestad legislativa, aprueban Presupuestos, controlan acción del Gobierno y tienen demás competencias. Nadie puede ser simultáneamente miembro de ambas Cámaras ni acumular acta autonómica y de Congreso.',
          'El Congreso se compone de un mínimo de 300 y máximo de 400 diputados, elegidos por sufragio universal, libre, igual, directo y secreto. La circunscripción es provincia, con representación mínima y distribución restante por población; Ceuta y Melilla tienen representación propia. El mandato es cuatro años salvo disolución.',
          'El Senado es Cámara de representación territorial. En cada provincia se eligen cuatro senadores con especialidades insulares y de Ceuta y Melilla. Las comunidades designan además un senador y otro por cada millón de habitantes, mediante asamblea legislativa o órgano colegiado superior según estatuto y representación proporcional.',
          'Diputados y senadores gozan de inviolabilidad por opiniones manifestadas en funciones y de inmunidad durante mandato: solo pueden ser detenidos en flagrante delito y su inculpación o procesamiento requiere autorización de Cámara. Las causas corresponden a Sala Penal del Tribunal Supremo. No están ligados por mandato imperativo.',
          'Las Cámaras establecen reglamentos, aprueban presupuestos y eligen presidentes y mesas. Se reúnen en dos periodos ordinarios y pueden celebrar sesiones extraordinarias a petición de Gobierno, Diputación Permanente o mayoría absoluta de miembros. Las sesiones plenarias son públicas salvo acuerdo reglamentario.',
          'Para adoptar acuerdos deben estar reunidas reglamentariamente y con mayoría de miembros. Los acuerdos se aprueban por mayoría de presentes salvo mayoría especial. El voto es personal e indelegable. Comisiones legislativas permanentes pueden aprobar proyectos delegados, excepto materias excluidas constitucionalmente.',
          'La iniciativa legislativa corresponde a Gobierno, Congreso, Senado, asambleas autonómicas y ciudadanía mediante iniciativa popular con requisitos y materias excluidas. Los proyectos proceden del Gobierno; las proposiciones de otros sujetos. El Senado puede vetar o enmendar, y el Congreso puede levantar veto conforme a mayorías y plazos.',
          'El control parlamentario incluye preguntas, interpelaciones, comisiones de investigación, cuestión de confianza y moción de censura. Las Cámaras pueden recabar información y presencia. La moción de censura es constructiva y exige candidato, mientras la cuestión de confianza la plantea el Presidente del Gobierno.',
          'El Defensor del Pueblo es alto comisionado de las Cortes designado para defensa de derechos del Título I y puede supervisar actividad de Administración, dando cuenta a Cortes. Actúa de oficio o por queja, es independiente y no recibe instrucciones. Sus actuaciones son gratuitas y no requieren abogado ni procurador.',
          'El Defensor investiga, solicita información, formula recomendaciones, advertencias, recordatorios y sugerencias. No anula actos, no modifica sentencias y no sustituye recursos. Puede interponer recurso de inconstitucionalidad y amparo y presenta informes a Cortes.',
          'El Tribunal de Cuentas es supremo órgano fiscalizador de cuentas y gestión económica del Estado y sector público. Depende directamente de Cortes y ejerce funciones por delegación en examen y comprobación de Cuenta General. Además tiene jurisdicción contable en los términos legales.',
          'Fiscalización comprueba sometimiento de actividad económico-financiera a legalidad, eficiencia y otros principios legales; la jurisdicción contable exige responsabilidad por alcance o menoscabo de fondos públicos en los supuestos legales. No debe confundirse con control interno de Intervención ni con jurisdicción penal.',
          'Las instituciones territoriales se integran en este marco. Municipio tiene autonomía y gobierno por ayuntamientos; provincia es entidad local y división territorial, gobernada por diputaciones u otras corporaciones; comunidades autónomas se constituyen y organizan mediante estatutos. La Constitución distribuye competencias entre Estado y comunidades y garantiza autonomía local.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Rey: Jefe del Estado, inviolable, actos refrendados. Corona hereditaria. Regencia ejerce funciones en nombre del Rey; tutela atiende a su persona. Cortes bicamerales: Congreso representa ciudadanía y Senado territorio. Mandato ordinario de cuatro años.',
          'Defensor: alto comisionado, supervisa, recomienda y puede recurrir, pero no anula. Tribunal de Cuentas: fiscalización externa y jurisdicción contable. Organización territorial: municipios, provincias y comunidades autónomas con autonomía, no soberanía.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Rey no gobierna. Actos necesitan refrendo. Regencia y tutela no son iguales. Congreso 300-400; Senado representación territorial. Senadores autonómicos: uno más otro por cada millón. Voto parlamentario personal e indelegable. Defensor no anula actos. Tribunal de Cuentas no es Intervención. Provincia es entidad local y división territorial.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica función, refrendo e irresponsabilidad del Rey con tres ejemplos de actos.',
          '2. Compara composición, elección y funciones de Congreso y Senado.',
          '3. Diferencia Defensor del Pueblo, Tribunal de Cuentas e Intervención administrativa.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En Corona identifica acto, sujeto que propone, sujeto que refrenda y responsable. En Cortes separa composición, estatuto de miembros, funcionamiento y función. En órganos de control pregunta si fiscalizan, supervisan, juzgan o anulan. Evita trasladar funciones judiciales al Defensor o funciones internas al Tribunal de Cuentas.'
        ]}
      ],
      tree: 'Tema 3 · Organización del Estado\n├─ Organización institucional\n│  ├─ Corona\n│  ├─ Cortes\n│  ├─ Gobierno y Poder Judicial\n│  └─ Órganos constitucionales\n├─ Organización territorial\n│  ├─ Municipios\n│  ├─ Provincias\n│  └─ Comunidades autónomas\n├─ Corona\n│  ├─ Sucesión, Regencia y tutela\n│  ├─ Funciones\n│  ├─ Refrendo\n│  └─ Inviolabilidad\n├─ Cortes Generales\n│  ├─ Congreso\n│  ├─ Senado\n│  ├─ Estatuto parlamentario\n│  ├─ Funcionamiento\n│  ├─ Legislación\n│  └─ Control del Gobierno\n└─ Referencias\n   ├─ Defensor del Pueblo\n   └─ Tribunal de Cuentas',
      reviewTable: [['Institución','Regla clave'],['Rey','Jefe del Estado y símbolo de unidad'],['Refrendo','Traslada responsabilidad al refrendante'],['Regencia','Ejerce funciones en nombre del Rey'],['Congreso','300-400 diputados, representación ciudadana'],['Senado','Cámara de representación territorial'],['Inviolabilidad parlamentaria','Opiniones en ejercicio de funciones'],['Inmunidad','Detención solo flagrante y autorización para procesamiento'],['Defensor','Supervisa Administración y protege derechos'],['Tribunal de Cuentas','Fiscalización externa y jurisdicción contable'],['Municipio','Entidad local con autonomía'],['Provincia','Entidad local y división territorial'],['Comunidad autónoma','Autonomía política conforme a Constitución y Estatuto']]
    },
    4: {
      title: 'Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público. La Administración Pública. Los órganos de las Administraciones Públicas. La competencia administrativa. Las relaciones administrativas.',
      sources: [BOP, CE, L40],
      coverage: ['sector público', 'Administraciones públicas', 'principios generales', 'servicio efectivo', 'órgano administrativo', 'creación de órganos', 'instrucciones y órdenes', 'órganos colegiados', 'competencia', 'irrenunciabilidad', 'delegación', 'avocación', 'encomienda de gestión', 'delegación de firma', 'suplencia', 'decisiones de competencia', 'abstención', 'recusación', 'relaciones interadministrativas', 'lealtad institucional', 'colaboración', 'cooperación', 'coordinación', 'convenios', 'consorcios', 'conferencias sectoriales'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Ley 40/2015 regula bases del régimen jurídico, principios de actuación, organización y funcionamiento del sector público, responsabilidad, potestad sancionadora, convenios y relaciones interadministrativas. El tema se centra en Administración Pública, órganos, competencia y relaciones administrativas.',
          'El bloque más preguntado distingue delegación de competencias, avocación, encomienda de gestión, delegación de firma y suplencia. También exige saber que competencia es irrenunciable, cómo se crean órganos, qué son instrucciones y órdenes, cuándo procede abstención y recusación y cómo se articulan colaboración, cooperación y coordinación entre Administraciones.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La fuente es la Ley 40/2015 consolidada. Su ámbito incluye Administración General del Estado, comunidades autónomas, entidades locales y sector público institucional en los términos legales. No todos los entes del sector público tienen condición de Administración Pública a todos los efectos.',
          'El artículo 103 constitucional ordena que Administración sirve objetivamente intereses generales y actúa con eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a ley y Derecho. La Ley 40 desarrolla estos principios y añade transparencia, responsabilidad, planificación, economía y servicio al ciudadano.',
          'Las técnicas de competencia no cambian todas la titularidad. Delegación transfiere ejercicio, no titularidad; encomienda afecta actividades materiales o técnicas; delegación de firma solo firma; suplencia sustituye temporalmente al titular; avocación permite al superior asumir un asunto concreto.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El sector público comprende AGE, administraciones autonómicas, entidades locales y sector público institucional. Tienen consideración de Administraciones Públicas AGE, administraciones autonómicas, entidades locales y organismos públicos y entidades de Derecho público vinculados o dependientes en los términos de la ley.',
          'Las Administraciones sirven con objetividad intereses generales y actúan según eficacia, jerarquía, descentralización, desconcentración y coordinación, sometidas a Constitución, ley y Derecho. Deben respetar servicio efectivo, simplicidad, claridad, proximidad, participación, objetividad, transparencia, racionalización, buena fe, confianza legítima, responsabilidad, planificación y eficiencia.',
          'En relaciones con ciudadanos deben respetar derechos y facilitar ejercicio, mejorar procedimientos, usar recursos eficientemente y proteger datos. La personalidad jurídica es única para cada Administración en el desarrollo de actividad, aunque se organice en numerosos órganos y entidades.',
          'Órgano administrativo es unidad a la que se atribuyen funciones con efectos jurídicos frente a terceros o actuación preceptiva. Las unidades sin esas características pueden ser unidades administrativas, pero no órganos en sentido legal. El concepto depende de funciones atribuidas, no del nombre.',
          'Crear un órgano exige determinar integración y dependencia, delimitar funciones y competencias y dotar créditos necesarios. No pueden crearse nuevos órganos que dupliquen otros sin suprimir o restringir los existentes y comprobar ausencia de duplicidad. La norma de creación debe encajar en la potestad organizatoria competente.',
          'Los órganos pueden dirigir actividades mediante instrucciones y órdenes de servicio. Su incumplimiento no afecta por sí solo a validez de actos dictados, sin perjuicio de responsabilidad disciplinaria. Cuando disposición o conveniencia lo aconseje, se publican. No son reglamentos por el mero hecho de ser generales internamente.',
          'Los órganos colegiados se rigen por normas básicas y específicas. Tienen presidente, miembros y secretario, convocatoria, orden del día, constitución, deliberación, acuerdos y acta. La Ley permite sesiones presenciales o a distancia si se garantiza identidad, contenido, momento, interactividad y medios.',
          'Para válida constitución, con carácter general, deben estar presidente y secretario o suplentes y al menos mitad de miembros, sin perjuicio de reglas específicas. No se delibera sobre asuntos no incluidos salvo presencia de todos y declaración de urgencia por mayoría. Los acuerdos se adoptan por mayoría de votos.',
          'El acta especifica asistentes, orden, circunstancias, puntos principales y acuerdos. Puede aprobarse en misma o siguiente sesión y remitirse electrónicamente. Quien discrepa puede formular voto particular. Una certificación acredita acuerdo sin sustituir necesariamente el acta íntegra.',
          'La competencia es irrenunciable y se ejerce por órgano que la tiene atribuida, salvo delegación o avocación. Desconcentración atribuye titularidad y ejercicio a órgano jerárquicamente dependiente mediante norma; delegación conserva titularidad y desplaza ejercicio.',
          'La delegación de competencias puede hacerse en órganos de misma Administración aunque no sean jerárquicamente dependientes o en organismos y entidades vinculados, dentro de límites. Debe publicarse cuando proceda y los actos indican que se dictan por delegación y se consideran dictados por órgano delegante.',
          'No pueden delegarse asuntos relativos a relaciones con Jefatura del Estado, Presidencia, Cortes, gobiernos y parlamentos autonómicos; adopción de disposiciones generales; resolución de recursos por órgano que dictó acto recurrido; ni materias declaradas indelegables por ley. La delegación es revocable.',
          'La avocación permite al órgano superior asumir para sí conocimiento de uno o varios asuntos cuya resolución corresponde ordinariamente o por delegación a dependientes, cuando circunstancias técnicas, económicas, sociales, jurídicas o territoriales lo hagan conveniente. Requiere acuerdo motivado y notificación a interesados antes o simultáneamente a resolución.',
          'La encomienda de gestión encarga actividades materiales o técnicas a órganos o entidades de la misma o distinta Administración por eficacia o falta de medios. No cede titularidad ni elementos sustantivos de competencia; el órgano encomendante dicta actos jurídicos de soporte. No puede usarse para prestaciones propias de contratos eludiendo contratación pública.',
          'La delegación de firma autoriza a titulares de órganos dependientes a firmar resoluciones y actos dentro de competencia, propia o delegada. No altera competencia ni requiere publicación general en los mismos términos que delegación, aunque debe constar la autoridad de procedencia. No cabe en materias en que no es posible delegar competencia cuando la ley lo impide.',
          'La suplencia sustituye temporalmente al titular por vacante, ausencia, enfermedad, abstención o recusación. No altera competencia y no se considera delegación. Debe identificarse que se actúa por suplencia y el titular sustituido. La designación sigue reglas del órgano y puede preverse en norma.',
          'Si un órgano se estima incompetente, remite actuaciones al que considere competente y notifica. Los interesados pueden dirigirse al órgano que tramita para que decline o al que estiman competente para que requiera inhibición. Los conflictos de atribuciones solo pueden plantearse entre órganos de una misma Administración no relacionados jerárquicamente y sobre asuntos no finalizados.',
          'Abstención procede por interés personal, vínculo matrimonial o parentesco en grados legales, amistad íntima o enemistad manifiesta, intervención como perito o testigo o relación de servicio con interesado, entre causas del artículo 23. La autoridad superior puede ordenar abstención. No abstenerse no implica automáticamente invalidez, pero genera responsabilidad cuando proceda.',
          'Recusación es promovida por interesados en cualquier momento de tramitación cuando concurre causa. Se plantea por escrito; el recusado manifiesta si se da la causa y superior resuelve. Contra esa resolución no cabe recurso separado, sin perjuicio de alegarla al impugnar acto final.',
          'Las relaciones interadministrativas se basan en lealtad institucional, adecuación al orden competencial, colaboración, cooperación, coordinación y eficiencia. Deben respetar ejercicio legítimo de competencias ajenas, ponderar intereses afectados, facilitar información y prestar asistencia.',
          'Colaboración es deber general de actuar conjuntamente o auxiliar. Cooperación es voluntaria y se formaliza mediante acuerdos, órganos o convenios para fines comunes. Coordinación supone que una Administración, en los casos previstos, asegura coherencia de actuaciones respetando competencias. No son términos intercambiables.',
          'Los deberes de colaboración incluyen suministrar información, crear sistemas integrados, asistencia y participación. Pueden negarse de forma motivada por falta de facultad, medios, perjuicio grave a intereses o funciones o cuando información sea confidencial o reservada conforme a ley.',
          'Las conferencias sectoriales son órganos de cooperación multilateral entre Estado y comunidades por materia. Pueden adoptar acuerdos vinculantes para quienes votan favorablemente y recomendaciones con compromiso de orientar actuación, según reglas. Existen comisiones sectoriales y grupos de trabajo.',
          'Los convenios son acuerdos con efectos jurídicos para fin común entre Administraciones, entidades públicas, universidades o sujetos privados en casos legales. No pueden tener por objeto prestaciones propias de contratos. Deben definir sujetos, competencia, objeto, obligaciones, consecuencias, seguimiento, modificación, vigencia y extinción.',
          'La Ley regula órganos de cooperación, relaciones electrónicas, transmisiones de datos y plataformas. La interoperabilidad y reutilización de sistemas buscan evitar duplicidades. Compartir información exige competencia, finalidad, seguridad y protección de datos; colaboración no autoriza acceso indiscriminado.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Órgano: unidad con efectos jurídicos o actuación preceptiva. Competencia es irrenunciable. Delegación desplaza ejercicio; avocación asume asunto concreto; encomienda encarga actividad material o técnica; delegación de firma solo firma; suplencia sustituye temporalmente.',
          'Relaciones: lealtad, colaboración, cooperación y coordinación. Colaboración es deber; cooperación voluntaria; coordinación busca coherencia en casos legales. Convenio no puede sustituir contrato. Abstención la adopta el propio afectado; recusación la promueve interesado.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Desconcentración cambia titularidad; delegación no. Acto delegado se considera dictado por delegante. Encomienda no cede decisión jurídica. Suplencia no es delegación. Avocación requiere motivación. Delegación de firma no altera competencia. Instrucción interna no es automáticamente reglamento. Recusación no tiene recurso autónomo. Cooperación es voluntaria; coordinación no equivale a jerarquía general.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Compara delegación, avocación, encomienda, firma, suplencia y desconcentración.',
          '2. Explica constitución, adopción de acuerdos y acta de un órgano colegiado.',
          '3. Diferencia colaboración, cooperación y coordinación con un ejemplo provincial.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En cada técnica pregunta: quién conserva titularidad, quién ejerce, sobre qué actividad y qué formalidad se exige. En órganos colegiados separa convocatoria, constitución, deliberación, votación y acta. En relaciones interadministrativas identifica si existe deber, voluntariedad o poder de coordinación legal.'
        ]}
      ],
      tree: 'Tema 4 · Régimen jurídico del sector público\n├─ Administración Pública\n│  ├─ Ámbito subjetivo\n│  ├─ Principios constitucionales\n│  └─ Servicio, transparencia y eficiencia\n├─ Órganos\n│  ├─ Concepto y creación\n│  ├─ Instrucciones\n│  ├─ Colegiados\n│  └─ Abstención y recusación\n├─ Competencia\n│  ├─ Irrenunciabilidad\n│  ├─ Desconcentración\n│  ├─ Delegación\n│  ├─ Avocación\n│  ├─ Encomienda\n│  ├─ Firma\n│  └─ Suplencia\n└─ Relaciones administrativas\n   ├─ Lealtad institucional\n   ├─ Colaboración\n   ├─ Cooperación\n   ├─ Coordinación\n   ├─ Conferencias sectoriales\n   └─ Convenios',
      reviewTable: [['Figura','Efecto'],['Órgano','Unidad con funciones de efectos jurídicos o actuación preceptiva'],['Competencia','Irrenunciable, salvo técnicas legales de ejercicio'],['Desconcentración','Atribuye titularidad y ejercicio a órgano dependiente'],['Delegación','Desplaza ejercicio y conserva titularidad'],['Avocación','Superior asume asunto concreto motivadamente'],['Encomienda','Actividad material o técnica sin ceder decisión'],['Delegación de firma','Solo firma, sin alterar competencia'],['Suplencia','Sustitución temporal del titular'],['Abstención','Deber del afectado por causa legal'],['Recusación','Solicitud del interesado por causa legal'],['Colaboración','Deber de auxilio e información'],['Cooperación','Actuación voluntaria para fin común'],['Coordinación','Coherencia impuesta en casos legales'],['Convenio','Acuerdo jurídico para fin común, no contrato encubierto']]
    }
  };

  for (const [numberText, definition] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.title = definition.title;
    theme.officialTitle = definition.title;
    theme.sections = definition.sections;
    theme.tree = definition.tree;
    theme.reviewTable = definition.reviewTable;
    theme.officialSources = definition.sources;
    theme.articleCoverage = definition.coverage.map(item => ({ block: item, status: 'desarrollado con texto oficial BOE y programa BOP' }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.studyWarnings = [
      'Revisar la redacción consolidada del BOE inmediatamente antes del examen.',
      'No confundir texto constitucional, desarrollo por ley orgánica y reglas reglamentarias o parlamentarias.'
    ];
    theme.theoryStatus = { version: VERSION, reviewedAt: REVIEW_DATE, autonomous: true, programmeLiteral: true, fixedStudyStructure: true, articleByArticle: true, noOffSyllabusFiller: true, sourcePolicy: 'BOP oficial y legislación consolidada del BOE' };
  }

  const previous = ope.theoryProgramme?.v87 || {};
  const completedThemes = Array.from(new Set([...(previous.completedThemes || []), 1, 2, 3, 4])).sort((a, b) => a - b);
  const allNumbers = ope.themes.map(theme => Number(theme.number)).filter(Number.isFinite).sort((a, b) => a - b);
  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v87 = {
    ...previous,
    version: VERSION,
    reviewedAt: REVIEW_DATE,
    status: 'EN_PROGRESO',
    totalThemes: allNumbers.length,
    autonomousThemes: completedThemes.length,
    completedThemes,
    pendingThemes: allNumbers.filter(number => !completedThemes.includes(number)),
    sourcePolicy: 'BOP/BOE y documentación primaria oficial; sin completar por inferencia',
    note: 'Temas 1 a 4 y 25 a 40 reconstruidos como teoría autosuficiente. Pendientes los temas 5 a 24; el contenido estatutario del OAPGT permanece bloqueado hasta localizar texto oficial vigente y modificaciones.',
    dynamicChecks: Array.from(new Set([...(previous.dynamicChecks || []), 'Revisar las redacciones consolidadas de Constitución, LOTC, Ley 39/2015 y Ley 40/2015 antes del examen.']))
  };

  window.OPOWEB_DIPUTACION_TEORIA_V87_BLOQUE6 = {
    version: VERSION,
    reviewedAt: REVIEW_DATE,
    themes: [1, 2, 3, 4],
    completedThemes,
    pendingThemes: ope.theoryProgramme.v87.pendingThemes,
    autonomous: true,
    officialProgramme: 'BOP Toledo núm. 118, 25 de junio de 2026, código 2026.00002934',
    primarySources: ['Constitución Española', 'LOTC', 'Defensor del Pueblo', 'Tribunal de Cuentas', 'Ley 39/2015', 'Ley 40/2015']
  };
})();
