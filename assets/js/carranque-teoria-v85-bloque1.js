(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-13';
  const COMMON_SOURCES = {
    constitucion: {
      label: 'Constitución Española',
      reference: 'BOE-A-1978-31229',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'
    },
    ley39: {
      label: 'Ley 39/2015, de 1 de octubre',
      reference: 'BOE-A-2015-10565',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565'
    },
    ley40: {
      label: 'Ley 40/2015, de 1 de octubre',
      reference: 'BOE-A-2015-10566',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566'
    },
    codigoCivil: {
      label: 'Código Civil, Título preliminar',
      reference: 'BOE-A-1889-4763',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763'
    },
    lotc: {
      label: 'Ley Orgánica 2/1979, de 3 de octubre, del Tribunal Constitucional',
      reference: 'BOE-A-1979-23709',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709'
    },
    defensor: {
      label: 'Ley Orgánica 3/1981, de 6 de abril, del Defensor del Pueblo',
      reference: 'BOE-A-1981-10325',
      url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1981-10325'
    }
  };

  const THEORY = {
    1: {
      sources: [COMMON_SOURCES.constitucion, COMMON_SOURCES.lotc, COMMON_SOURCES.defensor],
      sections: [
        {
          heading: '1. La Constitución de 1978: significado, valor normativo y estructura',
          paragraphs: [
            `La Constitución Española es la norma suprema del ordenamiento. Vincula a la ciudadanía y a todos los poderes públicos, de modo que ninguna ley, reglamento, acto administrativo o actuación material puede contradecirla. No es una declaración política sin efectos jurídicos: sus preceptos son directamente aplicables cuando su contenido lo permite y sirven de parámetro para controlar la validez del resto de normas. El artículo 9.1 expresa esta sujeción y el artículo 9.3 garantiza, entre otros, legalidad, jerarquía normativa, publicidad, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.`,
            `Su estructura formal comprende un Preámbulo, un Título Preliminar, diez títulos numerados del I al X, 169 artículos, cuatro disposiciones adicionales, nueve transitorias, una derogatoria y una final. El Título Preliminar recoge las decisiones básicas: España como Estado social y democrático de Derecho; libertad, justicia, igualdad y pluralismo político como valores superiores; soberanía nacional en el pueblo español; Monarquía parlamentaria; unidad de la Nación, autonomía y solidaridad; lengua, bandera, capital, partidos, sindicatos, Fuerzas Armadas y principios generales del ordenamiento.`,
            `Los diez títulos regulan: derechos y deberes; Corona; Cortes Generales; Gobierno y Administración; relaciones Gobierno-Cortes; Poder Judicial; economía y Hacienda; organización territorial; Tribunal Constitucional; y reforma constitucional. Para el examen no basta memorizar esta enumeración: debe relacionarse cada institución con su título, los artículos de inicio y sus funciones esenciales.`
          ]
        },
        {
          heading: '2. Derechos, libertades, deberes y niveles de protección',
          paragraphs: [
            `El Título I parte de la dignidad de la persona, los derechos inviolables, el libre desarrollo de la personalidad y el respeto a la ley y a los derechos ajenos. Los derechos constitucionales no tienen todos el mismo sistema de garantía. El artículo 14 y los derechos de la Sección 1.ª del Capítulo II, artículos 15 a 29, reciben la protección más intensa; la objeción de conciencia del artículo 30.2 se beneficia también del recurso de amparo.`,
            `Todos los derechos y libertades del Capítulo II vinculan a los poderes públicos y su ejercicio solo puede regularse por ley respetando su contenido esencial. Para el artículo 14 y la Sección 1.ª, cualquier ciudadano puede acudir a los tribunales mediante un procedimiento basado en preferencia y sumariedad y, agotada la vía judicial, plantear recurso de amparo ante el Tribunal Constitucional. Su desarrollo directo requiere ley orgánica cuando afecte a derechos fundamentales y libertades públicas.`,
            `Los principios rectores del Capítulo III orientan la legislación, la práctica judicial y la actuación de los poderes públicos, pero solo pueden alegarse ante la jurisdicción de acuerdo con las leyes que los desarrollen. Entre los deberes constitucionales destacan defensa de España, contribución al sostenimiento de los gastos públicos conforme a capacidad económica y sistema tributario justo, deber de trabajar y obligaciones en situaciones de grave riesgo, catástrofe o calamidad.`,
            `La suspensión general del artículo 55.1 solo puede producirse en los estados de excepción o de sitio y respecto de los derechos expresamente enumerados. El artículo 17.3 conserva su vigencia durante el estado de excepción. La suspensión individual vinculada a investigaciones sobre bandas armadas o terrorismo puede afectar, con intervención judicial y control parlamentario, a los derechos de los artículos 17.2 y 18.2 y 18.3. Una suspensión abusiva genera responsabilidad penal.`
          ]
        },
        {
          heading: '3. Garantías institucionales y Defensor del Pueblo',
          paragraphs: [
            `Además de la tutela judicial y del amparo, la Constitución establece controles institucionales. Las leyes pueden ser sometidas al Tribunal Constitucional mediante recurso o cuestión de inconstitucionalidad. Jueces y tribunales no anulan por sí mismos una ley posconstitucional: cuando una norma con rango de ley aplicable al caso pueda ser contraria a la Constitución y el fallo dependa de su validez, plantean cuestión ante el Tribunal Constitucional.`,
            `El Defensor del Pueblo es el alto comisionado de las Cortes Generales para la defensa de los derechos comprendidos en el Título I. Es elegido por las Cortes, actúa con autonomía y puede supervisar la actividad de la Administración, formular recomendaciones y recordatorios de deberes legales, investigar quejas y presentar informes. No anula actos administrativos ni sustituye a los tribunales, pero puede interponer recurso de inconstitucionalidad y recurso de amparo.`,
            `En una oficina municipal, una queja al Defensor del Pueblo no suspende plazos administrativos ni judiciales. El empleado debe distinguir petición, reclamación administrativa, recurso y queja al Defensor: son cauces distintos y cada uno tiene efectos diferentes.`
          ]
        },
        {
          heading: '4. Tribunal Constitucional',
          paragraphs: [
            `El Tribunal Constitucional es independiente de los demás órganos constitucionales y está sometido únicamente a la Constitución y a su ley orgánica. No forma parte del Poder Judicial. Se compone de doce miembros nombrados por el Rey: cuatro a propuesta del Congreso por mayoría de tres quintos, cuatro a propuesta del Senado por la misma mayoría, dos a propuesta del Gobierno y dos a propuesta del Consejo General del Poder Judicial. Se nombran por nueve años y se renuevan por terceras partes cada tres.`,
            `Sus miembros deben ser juristas de reconocida competencia con más de quince años de ejercicio profesional. El presidente es nombrado por el Rey, a propuesta del Pleno, por tres años. La condición de magistrado constitucional es incompatible con mandatos representativos, cargos políticos o administrativos, funciones directivas en partidos y sindicatos, carrera judicial o fiscal y actividad profesional o mercantil, con las demás incompatibilidades legales.`,
            `Entre sus competencias se encuentran los recursos y cuestiones de inconstitucionalidad contra normas con rango de ley; recursos de amparo por vulneración de determinados derechos fundamentales; conflictos de competencia entre Estado y comunidades autónomas o entre estas; conflictos entre órganos constitucionales; control previo de tratados en los términos constitucionales; e impugnaciones previstas en el artículo 161.2. Las sentencias se publican en el BOE, vinculan a todos los poderes públicos y tienen valor de cosa juzgada.`
          ]
        },
        {
          heading: '5. Las Cortes Generales y el poder legislativo',
          paragraphs: [
            `Las Cortes Generales representan al pueblo español y están formadas por Congreso de los Diputados y Senado. Ejercen la potestad legislativa del Estado, aprueban sus presupuestos, controlan la acción del Gobierno y desempeñan las restantes funciones constitucionales. Son inviolables. Nadie puede ser simultáneamente miembro de ambas cámaras ni acumular acta de una asamblea autonómica y de diputado al Congreso.`,
            `El Congreso se elige por cuatro años mediante sufragio universal, libre, igual, directo y secreto. La Constitución fija entre 300 y 400 diputados; la legislación electoral concreta la cifra. El Senado es la cámara de representación territorial: combina senadores elegidos provincialmente con los designados por las comunidades autónomas. Ambas cámaras aprueban sus reglamentos, presupuestos y estatuto del personal, eligen sus presidencias y mesas y funcionan en Pleno y comisiones.`,
            `La iniciativa legislativa corresponde al Gobierno, Congreso y Senado; también a las asambleas autonómicas y, con requisitos, a la iniciativa popular. Los proyectos proceden del Gobierno y las proposiciones de otros sujetos. El Congreso tiene una posición decisiva: puede levantar el veto del Senado y aceptar o rechazar sus enmiendas. Las leyes orgánicas exigen mayoría absoluta del Congreso en votación final sobre el conjunto. El Rey sanciona, promulga y ordena publicar las leyes aprobadas.`
          ]
        },
        {
          heading: '6. Gobierno y Administración',
          paragraphs: [
            `El Gobierno dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado; ejerce la función ejecutiva y la potestad reglamentaria conforme a la Constitución y las leyes. Se compone del presidente, vicepresidentes en su caso, ministros y demás miembros que establezca la ley. El presidente dirige la acción del Gobierno y coordina las funciones de sus miembros.`,
            `Tras cada renovación del Congreso, el Rey propone candidato a la Presidencia después de consultar a los grupos con representación. El candidato expone su programa y solicita confianza: necesita mayoría absoluta en primera votación o mayoría simple cuarenta y ocho horas después. Si en dos meses desde la primera votación ningún candidato obtiene confianza, se disuelven ambas cámaras y se convocan elecciones. Los demás miembros son nombrados y separados por el Rey a propuesta del presidente.`,
            `El Gobierno responde solidariamente de su gestión política ante el Congreso. La confianza puede retirarse mediante moción de censura constructiva, que debe incluir candidato alternativo, o al rechazarse una cuestión de confianza. El Gobierno cesa después de elecciones, pérdida de confianza, dimisión o fallecimiento del presidente y continúa en funciones hasta la toma de posesión del nuevo.`,
            `La Administración Pública sirve con objetividad los intereses generales y actúa conforme a eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho. Los órganos administrativos se crean, rigen y coordinan conforme a la ley; el acceso a la función pública se somete a mérito y capacidad; y la actuación administrativa está controlada por los tribunales.`
          ]
        },
        {
          heading: '7. Poder Judicial',
          paragraphs: [
            `La justicia emana del pueblo y se administra en nombre del Rey por jueces y magistrados integrantes del Poder Judicial, independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley. La unidad jurisdiccional es la base de su organización. Se prohíben los tribunales de excepción y la jurisdicción militar queda limitada al ámbito estrictamente castrense y a los estados previstos constitucionalmente.`,
            `Juzgar y hacer ejecutar lo juzgado corresponde exclusivamente a los juzgados y tribunales determinados por las leyes. Las resoluciones judiciales firmes deben cumplirse y todos deben colaborar con jueces y tribunales. Las actuaciones son públicas salvo excepciones procesales; el procedimiento será predominantemente oral, especialmente en materia criminal; y las sentencias deben ser motivadas y pronunciarse en audiencia pública.`,
            `El Consejo General del Poder Judicial es el órgano de gobierno del Poder Judicial, no un tribunal. La ley orgánica regula su estatuto, incompatibilidades y funciones, especialmente nombramientos, ascensos, inspección y régimen disciplinario. El Tribunal Supremo es el órgano jurisdiccional superior en todos los órdenes salvo garantías constitucionales. El Ministerio Fiscal promueve la acción de la justicia en defensa de legalidad, derechos ciudadanos e interés público, actúa con unidad y dependencia jerárquica y está sujeto a legalidad e imparcialidad.`
          ]
        },
        {
          heading: '8. Reforma constitucional',
          paragraphs: [
            `La iniciativa de reforma se ejerce conforme a las reglas de iniciativa legislativa, con exclusión de la iniciativa popular. El procedimiento ordinario del artículo 167 exige aprobación por tres quintos de cada cámara. Si no hay acuerdo, una comisión paritaria intenta un texto común. Si el Senado aprueba por mayoría absoluta, el Congreso puede aprobar por dos tercios. La reforma se somete a referéndum cuando lo pida una décima parte de cualquiera de las cámaras dentro de los quince días siguientes.`,
            `El procedimiento agravado del artículo 168 se aplica a revisión total o parcial que afecte al Título Preliminar, a la Sección 1.ª del Capítulo II del Título I o al Título II. El principio de reforma requiere dos tercios de cada cámara y disolución inmediata. Las nuevas cámaras deben ratificar la decisión, estudiar el texto y aprobarlo por dos tercios; después hay referéndum obligatorio.`,
            `No puede iniciarse una reforma constitucional en tiempo de guerra ni durante la vigencia de los estados de alarma, excepción o sitio. La diferencia típica de examen es clara: en el procedimiento ordinario el referéndum es eventual y puede solicitarlo una décima parte de una cámara; en el agravado siempre es obligatorio y hay disolución y nuevas elecciones.`
          ]
        },
        {
          heading: '9. Trampas frecuentes y aplicación administrativa',
          paragraphs: [
            `El Tribunal Constitucional no pertenece al Poder Judicial; el Consejo General del Poder Judicial no dicta sentencias; el Defensor del Pueblo no revoca resoluciones; el Senado no es una segunda cámara idéntica al Congreso; y el Rey no decide libremente el contenido de las leyes que sanciona.`,
            `La reserva de ley orgánica no alcanza a todo el Título I, sino al desarrollo de derechos fundamentales y libertades públicas y a otras materias expresamente reservadas. Los principios rectores no tienen el mismo cauce de amparo que los artículos 14 a 29. La suspensión de derechos no es automática por declarar cualquier estado del artículo 116.`,
            `Para resolver casos prácticos debe identificarse primero el derecho o institución, después el artículo constitucional y finalmente la garantía o procedimiento aplicable. Una reclamación por notificación defectuosa es administrativa; una vulneración de derecho fundamental debe agotar normalmente la vía judicial antes del amparo; una duda sobre validez de una ley puede dar lugar a cuestión de inconstitucionalidad planteada por el órgano judicial, no directamente por el particular.`
          ]
        }
      ],
      tree: `CONSTITUCIÓN DE 1978
├─ Norma suprema y directamente vinculante
├─ Preámbulo + Título Preliminar + Títulos I a X
├─ Derechos
│  ├─ Art. 14 + arts. 15-29: tutela reforzada y amparo
│  ├─ Capítulo II: reserva de ley y contenido esencial
│  └─ Capítulo III: principios rectores
├─ Instituciones
│  ├─ Cortes: legislación, presupuesto y control
│  ├─ Gobierno: dirección política y función ejecutiva
│  ├─ Poder Judicial: independencia y unidad jurisdiccional
│  ├─ Tribunal Constitucional: control constitucional
│  └─ Defensor del Pueblo: supervisión de la Administración
└─ Reforma
   ├─ Art. 167: 3/5 y referéndum eventual
   └─ Art. 168: 2/3, disolución y referéndum obligatorio`,
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['Valores superiores', 'Libertad, justicia, igualdad y pluralismo político', 'Art. 1.1 CE'],
        ['Amparo', 'Art. 14, arts. 15-29 y objeción del art. 30.2', 'Art. 53.2 CE'],
        ['Tribunal Constitucional', '12 miembros, 9 años, renovación por tercios', 'Arts. 159-165 CE'],
        ['Defensor del Pueblo', 'Alto comisionado de las Cortes; supervisa Administración', 'Art. 54 CE'],
        ['Cortes Generales', 'Potestad legislativa, presupuestos y control', 'Art. 66 CE'],
        ['Gobierno', 'Dirección política, ejecutiva y potestad reglamentaria', 'Art. 97 CE'],
        ['Poder Judicial', 'Independencia, inamovilidad y sometimiento a la ley', 'Art. 117 CE'],
        ['Reforma ordinaria', '3/5; referéndum si lo pide 1/10', 'Art. 167 CE'],
        ['Reforma agravada', '2/3, disolución, nuevas cámaras y referéndum', 'Art. 168 CE']
      ]
    },
    2: {
      sources: [COMMON_SOURCES.constitucion, COMMON_SOURCES.ley40, COMMON_SOURCES.ley39, COMMON_SOURCES.codigoCivil],
      sections: [
        {
          heading: '1. Sometimiento de la Administración a la Constitución, la ley y el Derecho',
          paragraphs: [
            `La Administración no dispone de una libertad general semejante a la de los particulares. Solo puede actuar cuando el ordenamiento le atribuye una potestad, mediante el órgano competente, para la finalidad prevista y siguiendo el procedimiento establecido. El artículo 103.1 de la Constitución y el artículo 3.1 de la Ley 40/2015 exigen sometimiento pleno a la Constitución, a la ley y al Derecho. La expresión “al Derecho” incluye todo el ordenamiento: normas escritas, principios generales, Derecho de la Unión, tratados válidamente incorporados y criterios jurisprudenciales aplicables.`,
            `El principio de legalidad tiene dimensión positiva: la actuación administrativa necesita habilitación y debe perseguir el interés público definido por la norma. También tiene dimensión negativa: la Administración no puede contradecir una prohibición, invadir una reserva de ley, desviarse de la finalidad o utilizar una potestad para un objetivo distinto. La desviación de poder es precisamente el ejercicio de una potestad para fines diferentes de los fijados por el ordenamiento.`,
            `El control judicial garantiza este sometimiento. Los tribunales controlan la potestad reglamentaria, la legalidad de la actuación administrativa y su adecuación a los fines que la justifican. Incluso cuando existe discrecionalidad se controlan competencia, procedimiento, hechos determinantes, finalidad, principios generales y ausencia de arbitrariedad.`
          ]
        },
        {
          heading: '2. Principios constitucionales de actuación',
          paragraphs: [
            `La eficacia exige orientar organización y medios al cumplimiento real de objetivos públicos. No significa ignorar garantías para actuar deprisa: una actuación eficaz debe ser también legal, proporcionada y correctamente motivada. La eficiencia relaciona resultados con recursos empleados; la economía evita costes innecesarios; y la planificación permite fijar objetivos, indicadores y responsables.`,
            `La jerarquía administrativa ordena órganos de una misma Administración. El superior puede dirigir, coordinar, inspeccionar y, dentro de los límites legales, revisar actuaciones del inferior. No debe confundirse con jerarquía normativa: esta última ordena normas por rango. Tampoco existe jerarquía general entre Administraciones territoriales autónomas; sus relaciones se basan en competencia, cooperación, colaboración y coordinación.`,
            `La descentralización transfiere titularidad de competencias a otra persona jurídica pública, que las ejerce bajo su propia responsabilidad. Puede ser territorial, como atribución a comunidades autónomas o entidades locales, o funcional, mediante entidades públicas especializadas. La desconcentración distribuye titularidad y ejercicio entre órganos de la misma persona jurídica y, por regla general, mantiene la relación jerárquica.`,
            `La coordinación integra actuaciones para evitar contradicciones y asegurar coherencia. No equivale a jerarquía y necesita una habilitación que respete las competencias propias. La cooperación implica actuación conjunta voluntaria; la colaboración incluye deberes de información, asistencia y auxilio. La Ley 40/2015 añade servicio efectivo, simplicidad, claridad, proximidad, participación, objetividad, transparencia, responsabilidad por la gestión, buena fe, confianza legítima, lealtad institucional y protección de datos.`
          ]
        },
        {
          heading: '3. Delegación, avocación y otras técnicas: diferencias con la desconcentración',
          paragraphs: [
            `La delegación de competencias no altera la titularidad: un órgano permite que otro ejerza determinadas competencias en los términos legales. Los actos dictados por delegación se consideran dictados por el órgano delegante y deben indicar esta circunstancia. No pueden delegarse las materias legalmente excluidas y la delegación debe publicarse cuando así procede.`,
            `La avocación es la asunción por un órgano superior del conocimiento de un asunto cuya resolución corresponde ordinariamente o por delegación a un órgano dependiente, cuando concurren circunstancias técnicas, económicas, sociales, jurídicas o territoriales que lo hagan conveniente. Debe motivarse y notificarse a los interesados antes o simultáneamente a la resolución.`,
            `La encomienda de gestión afecta a actividades materiales o técnicas, no transfiere competencia ni elementos sustantivos de su ejercicio. La delegación de firma permite que otro órgano o unidad firme por el titular, sin modificar competencia. La suplencia opera temporalmente por vacante, ausencia o enfermedad. Estas figuras no deben confundirse en los test: descentralización y desconcentración sí redistribuyen titularidad; delegación redistribuye ejercicio; encomienda solo encarga actuaciones materiales.`
          ]
        },
        {
          heading: '4. Fuentes del ordenamiento y sistema de prelación',
          paragraphs: [
            `El Código Civil enumera ley, costumbre y principios generales del Derecho. La costumbre solo rige en defecto de ley aplicable, siempre que no sea contraria a moral u orden público y resulte probada. Los principios generales se aplican en defecto de ley o costumbre e informan todo el ordenamiento. La jurisprudencia del Tribunal Supremo complementa el ordenamiento al interpretar y aplicar ley, costumbre y principios; no tiene el mismo rango formal que una ley, pero es esencial para conocer su aplicación.`,
            `En Derecho público encabeza el sistema la Constitución. Le siguen las normas del Derecho de la Unión Europea conforme a sus reglas de primacía y aplicación, los tratados internacionales válidamente celebrados y publicados y las normas internas. Entre estas se encuentran leyes orgánicas y ordinarias, leyes autonómicas dentro de su competencia, decretos legislativos y decretos-leyes, y reglamentos. La relación entre ley estatal y autonómica se rige principalmente por competencia, no por una jerarquía simple.`,
            `Las leyes orgánicas se reservan al desarrollo de derechos fundamentales y libertades públicas, estatutos de autonomía, régimen electoral general y demás materias constitucionalmente previstas. Requieren mayoría absoluta del Congreso en votación final sobre el conjunto. La ley ordinaria regula las restantes materias sometidas a ley. El decreto-ley es una norma provisional del Gobierno para extraordinaria y urgente necesidad, con límites materiales y convalidación del Congreso en treinta días. El decreto legislativo nace de una delegación parlamentaria para textos articulados o refundidos.`
          ]
        },
        {
          heading: '5. Reglamentos y disposiciones administrativas',
          paragraphs: [
            `El reglamento es una norma general dictada por una Administración en ejercicio de potestad reglamentaria. Está subordinado a Constitución y ley, no puede regular materias reservadas a ley ni tipificar delitos, establecer penas, infracciones o sanciones sin cobertura legal, crear tributos ni imponer prestaciones patrimoniales públicas fuera de habilitación. Los reglamentos ejecutivos desarrollan una ley; los independientes operan en ámbitos organizativos no reservados; y los de necesidad responden a situaciones excepcionales con la cobertura prevista por la ley.`,
            `En el Estado, la potestad reglamentaria corresponde al Gobierno conforme a la Constitución y la Ley del Gobierno. En comunidades autónomas se distribuye según estatuto y legislación propia. En el ámbito local, el pleno aprueba ordenanzas y reglamentos dentro de las competencias municipales y mediante el procedimiento legal; el alcalde puede dictar bandos. La denominación del instrumento no permite vulnerar rango o competencia.`,
            `Las disposiciones administrativas que vulneran Constitución, leyes o normas superiores, regulan materias reservadas a ley o establecen retroactividad sancionadora desfavorable o restrictiva de derechos son nulas de pleno derecho. La impugnación directa de un reglamento corresponde a la jurisdicción contencioso-administrativa; en vía administrativa no cabe recurso ordinario directo contra disposiciones generales, aunque puede alegarse su ilegalidad al recurrir un acto de aplicación.`
          ]
        },
        {
          heading: '6. Jerarquía normativa, competencia, reserva de ley y publicidad',
          paragraphs: [
            `Jerarquía normativa significa que una norma inferior no puede contradecir a otra superior. Constitución prevalece sobre ley y ley sobre reglamento. Dentro de los reglamentos existe orden según el órgano de procedencia. Si la contradicción afecta a una disposición administrativa, esta puede ser nula. Cuando el conflicto se produce entre Estado y comunidad autónoma, debe examinarse además quién tiene atribuida la materia por Constitución y estatuto.`,
            `La reserva de ley exige que determinadas materias sean reguladas por norma con rango legal. Puede ser absoluta, dejando escaso espacio al reglamento, o relativa, permitiendo desarrollo reglamentario de elementos complementarios. En materia sancionadora, tributaria, derechos fundamentales o prestaciones públicas, el examen debe identificar cobertura legal y límites del desarrollo reglamentario.`,
            `La publicidad es condición para la entrada en vigor y seguridad jurídica. Las normas deben publicarse en el diario oficial correspondiente. Salvo previsión distinta, las leyes entran en vigor a los veinte días de su completa publicación. La ignorancia de la ley no excusa su cumplimiento, pero una disposición no publicada no puede desplegar normalmente efectos normativos frente a terceros.`
          ]
        },
        {
          heading: '7. Derecho de la Unión Europea y tratados internacionales',
          paragraphs: [
            `Los tratados válidamente celebrados forman parte del ordenamiento interno una vez publicados oficialmente. Sus disposiciones solo pueden derogarse, modificarse o suspenderse según el propio tratado o el Derecho internacional. Si un tratado contiene estipulaciones contrarias a la Constitución, exige revisión constitucional previa a prestar consentimiento.`,
            `En la Unión Europea, los reglamentos son obligatorios en todos sus elementos y directamente aplicables; las directivas obligan en cuanto al resultado y requieren transposición, aunque en determinadas condiciones pueden producir efecto directo vertical; las decisiones obligan a sus destinatarios. Recomendaciones y dictámenes no son vinculantes. El juez nacional debe garantizar primacía y efectividad del Derecho de la Unión dentro del marco europeo.`,
            `Para un auxiliar municipal, esta materia aparece en contratación, protección de datos, fondos europeos, servicios y administración electrónica. La regla operativa es comprobar si existe una norma europea directamente aplicable, una ley estatal de transposición o normativa autonómica y local de desarrollo.`
          ]
        },
        {
          heading: '8. Instrucciones, circulares, precedentes y principios generales',
          paragraphs: [
            `Las instrucciones y órdenes de servicio dirigen la actividad de órganos dependientes. Como regla no son reglamentos ni pueden innovar el ordenamiento o crear obligaciones para ciudadanos sin cobertura. Su incumplimiento no invalida por sí solo un acto, aunque puede generar responsabilidad disciplinaria. Si por su contenido una circular establece auténticas reglas generales con efectos externos, los tribunales atienden a su naturaleza material y no solo a su nombre.`,
            `El precedente administrativo no crea una norma inmutable, pero apartarse de criterios seguidos anteriormente puede exigir motivación para respetar igualdad, buena fe y confianza legítima. La costumbre tiene un papel limitado en Derecho administrativo por el principio de legalidad. Los principios generales, en cambio, son decisivos: proporcionalidad, igualdad, buena fe, confianza legítima, seguridad jurídica, responsabilidad y prohibición de arbitrariedad orientan e integran la actuación.`,
            `La práctica correcta consiste en localizar primero la norma de mayor rango, comprobar competencia y vigencia, identificar el desarrollo reglamentario y, finalmente, consultar instrucciones internas sin tratarlas como si fueran una ley. Un manual o una página informativa nunca sustituye a la norma oficial.`
          ]
        },
        {
          heading: '9. Trampas de examen',
          paragraphs: [
            `Descentralización no es lo mismo que desconcentración: la primera actúa entre personas jurídicas; la segunda dentro de la misma. Delegar no transmite titularidad. Encomendar gestión no permite que el encomendado dicte la resolución sustantiva. Jerarquía administrativa no implica que un ayuntamiento esté jerárquicamente subordinado a una comunidad autónoma en todas sus competencias.`,
            `Una ley orgánica no es siempre superior a una ley ordinaria; cada una opera en su ámbito reservado. Una ley autonómica no es inferior por definición a una estatal: se examina la competencia. Un reglamento no puede contradecir ley ni ocupar reserva legal. La jurisprudencia complementa el ordenamiento, pero no figura como fuente directa en el artículo 1.1 del Código Civil.`,
            `La eficacia nunca autoriza a prescindir de procedimiento, motivación o audiencia. La coordinación no vacía la competencia del órgano coordinado. La confianza legítima no convierte en legal una actuación contraria a una norma imperativa.`
          ]
        }
      ],
      tree: `ACTUACIÓN ADMINISTRATIVA Y FUENTES
├─ Sometimiento pleno a Constitución, ley y Derecho
├─ Principios organizativos
│  ├─ Eficacia y eficiencia
│  ├─ Jerarquía
│  ├─ Descentralización
│  ├─ Desconcentración
│  └─ Coordinación, cooperación y colaboración
├─ Técnicas de competencia
│  ├─ Delegación: cambia el ejercicio
│  ├─ Avocación: superior asume un asunto
│  ├─ Encomienda: actividad material o técnica
│  ├─ Delegación de firma
│  └─ Suplencia
└─ Fuentes
   ├─ Constitución, UE y tratados
   ├─ Leyes y normas con rango de ley
   ├─ Reglamentos
   ├─ Costumbre y principios generales
   └─ Jurisprudencia: complementa el ordenamiento`,
      reviewTable: [
        ['Concepto', 'Clave', 'Error frecuente'],
        ['Descentralización', 'Transfiere titularidad a otra persona jurídica', 'Confundir con delegación'],
        ['Desconcentración', 'Distribuye titularidad dentro de la misma persona jurídica', 'Tratarla como cooperación'],
        ['Delegación', 'Transfiere ejercicio, no titularidad', 'Afirmar que cambia el órgano titular'],
        ['Encomienda', 'Solo actividades materiales o técnicas', 'Permitir resolución sustantiva'],
        ['Jerarquía normativa', 'Norma inferior respeta a superior', 'Aplicarla sin examinar competencia'],
        ['Reserva de ley', 'Materia exige regulación legal', 'Creer que un reglamento puede sustituir la ley'],
        ['Reglamento', 'Norma administrativa subordinada', 'Confundirlo con instrucción interna'],
        ['Jurisprudencia', 'Complementa el ordenamiento', 'Equipararla formalmente a ley']
      ]
    },
    3: {
      sources: [COMMON_SOURCES.ley39, COMMON_SOURCES.ley40, COMMON_SOURCES.constitucion],
      sections: [
        {
          heading: '1. Objeto, ámbito y principios de la Ley 39/2015',
          paragraphs: [
            `La Ley 39/2015 regula los requisitos de validez y eficacia de los actos administrativos, el procedimiento administrativo común —incluidos sancionador y responsabilidad patrimonial— y los principios de iniciativa legislativa y potestad reglamentaria. Se aplica al sector público definido por la ley: Administración General del Estado, administraciones autonómicas, entidades de la Administración Local y sector público institucional en los términos de sus preceptos.`,
            `Las especialidades procedimentales por razón de materia deben respetar las garantías comunes. Solo mediante ley pueden incluirse trámites adicionales o distintos cuando sean eficaces, proporcionados y necesarios; reglamentariamente pueden establecerse especialidades de órganos, plazos propios, formas de iniciación y terminación, publicación e informes.`,
            `La Ley 39/2015 debe estudiarse junto con la Ley 40/2015: la primera se centra en relación externa y procedimiento; la segunda en organización, funcionamiento interno y relaciones entre Administraciones. En una oficina municipal ambas operan simultáneamente.`
          ]
        },
        {
          heading: '2. Capacidad de obrar y concepto de interesado',
          paragraphs: [
            `Tienen capacidad de obrar ante las Administraciones las personas físicas o jurídicas con arreglo a normas civiles y, además, menores para el ejercicio y defensa de derechos e intereses cuya actuación permita el ordenamiento sin asistencia, salvo menores incapacitados cuando la incapacidad afecte a esos derechos. Cuando una ley lo declare, también grupos de afectados, uniones o entidades sin personalidad y patrimonios independientes.`,
            `Son interesados quienes promueven el procedimiento como titulares de derechos o intereses legítimos individuales o colectivos; quienes, sin iniciarlo, tienen derechos que puedan resultar afectados; y quienes tienen intereses legítimos que puedan resultar afectados y se personan antes de resolución definitiva. Las asociaciones y organizaciones representativas pueden ser titulares de intereses legítimos colectivos en los términos legales. Si la condición deriva de una relación transmisible, el derechohabiente sucede cualquiera que sea el estado del procedimiento.`,
            `Derecho subjetivo e interés legítimo no son equivalentes. El derecho atribuye una posición jurídica concreta; el interés legítimo exige una ventaja o perjuicio real y diferenciado derivado de la decisión. El mero interés por la legalidad, sin conexión específica, no convierte automáticamente en interesado salvo acción pública prevista por ley.`
          ]
        },
        {
          heading: '3. Representación e identificación',
          paragraphs: [
            `Los interesados con capacidad pueden actuar mediante representante. Para actos de mero trámite se presume representación; para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir, renunciar o asumir obligaciones debe acreditarse por cualquier medio válido que deje constancia, incluido apoderamiento apud acta presencial o electrónico e inscripción en registro electrónico de apoderamientos.`,
            `La falta o insuficiencia de acreditación no impide tener por realizado el acto si se subsana dentro de diez días o plazo superior concedido. La Administración incorpora al expediente la acreditación y debe diferenciar identidad, representación y firma.`,
            `Los sistemas de identificación permiten acreditar identidad; la firma acredita además voluntad y consentimiento y puede garantizar integridad. La Administración solo exige firma para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir y renunciar. En otras actuaciones basta normalmente identificación.`
          ]
        },
        {
          heading: '4. Derechos de las personas y relación electrónica',
          paragraphs: [
            `Toda persona con capacidad de obrar tiene derecho a comunicarse mediante punto de acceso general electrónico, recibir asistencia en medios electrónicos, usar lenguas oficiales, acceder a información pública, archivos y registros, ser tratada con respeto, exigir responsabilidades, obtener y usar medios de identificación y firma y proteger sus datos. Estos derechos generales se suman a los derechos específicos del interesado del artículo 53.`,
            `Las personas físicas pueden elegir canal electrónico salvo obligación. Están obligadas, al menos, personas jurídicas, entidades sin personalidad, profesionales colegiados para actuaciones profesionales, representantes de obligados y empleados públicos para trámites derivados de su condición. Reglamentariamente pueden incluirse determinados procedimientos y colectivos de personas físicas si se acredita acceso y disponibilidad de medios.`,
            `La asistencia electrónica incluye ayuda para identificar y firmar. Si una persona no obligada carece de medios, un funcionario habilitado puede realizar identificación o firma con consentimiento expreso y constancia. La oficina de asistencia en materia de registros no es un simple buzón: digitaliza, expide recibos, facilita copias auténticas cuando procede y ayuda a tramitar.`
          ]
        },
        {
          heading: '5. Registros, archivos, documentos y copias',
          paragraphs: [
            `Cada Administración dispone de registro electrónico general donde se asienta todo documento presentado o recibido y las salidas oficiales. Los organismos dependientes pueden tener registros interoperables con el general. Los documentos pueden presentarse en registro electrónico del destinatario o de otras Administraciones conectadas, oficinas de Correos conforme a reglamento, representaciones diplomáticas u oficinas consulares, oficinas de asistencia y demás lugares previstos.`,
            `El registro electrónico funciona todos los días del año durante veinticuatro horas. Para el cómputo del interesado, presentar en día inhábil se entiende realizado en la primera hora del primer día hábil siguiente, salvo norma que permita recepción en inhábil; los documentos se ordenan por hora efectiva de presentación. Para plazos administrativos, inicio y fin se rigen por fecha y hora oficial de la sede.`,
            `El interesado no está obligado a aportar documentos que ya obren en poder de la Administración actuante o hayan sido elaborados por otra Administración, salvo oposición cuando proceda o imposibilidad de consulta. La Administración debe obtenerlos electrónicamente. Las copias auténticas tienen la validez de los originales; la digitalización debe garantizar identidad, integridad y conservación. Cada Administración mantiene archivo electrónico único de procedimientos finalizados, con medidas de seguridad, conservación y acceso.`
          ]
        },
        {
          heading: '6. Obligación de resolver y silencio administrativo',
          paragraphs: [
            `La Administración está obligada a dictar resolución expresa y notificarla en todos los procedimientos, cualquiera que sea su iniciación, salvo terminación por pacto o convenio y procedimientos relativos a derechos sometidos solo a declaración responsable o comunicación. El plazo máximo es el fijado por la norma reguladora y no excede de seis meses salvo ley o Derecho de la Unión; si no existe plazo, es de tres meses.`,
            `En procedimientos iniciados a solicitud, el plazo cuenta desde entrada en registro electrónico del órgano competente para tramitar. En iniciados de oficio, desde el acuerdo de iniciación. La Administración debe informar del plazo y efectos del silencio. Los supuestos de suspensión y ampliación son tasados y deben documentarse.`,
            `En procedimientos a solicitud, el silencio es estimatorio como regla, pero es desestimatorio en ejercicio del derecho de petición, transferencias sobre dominio o servicio público, actividades que puedan dañar medio ambiente, responsabilidad patrimonial, impugnación de actos y disposiciones y revisión de oficio, además de excepciones legales justificadas. El silencio positivo produce un acto finalizador; el negativo permite recurrir y no exime de resolver.`,
            `En procedimientos de oficio, el vencimiento no elimina obligación de resolver. Si podían derivarse derechos favorables, los comparecidos pueden entender desestimadas pretensiones; en procedimientos sancionadores o de intervención desfavorable se produce caducidad con archivo, sin que la caducidad extinga por sí sola prescripción de acciones.`
          ]
        },
        {
          heading: '7. Términos y plazos',
          paragraphs: [
            `Los términos y plazos obligan a autoridades, personal e interesados. Los plazos por horas se cuentan de hora en hora y minuto en minuto, son hábiles y no pueden superar veinticuatro horas, en cuyo caso se expresan en días. Cuando se señalan días y no se indica otra cosa, son hábiles: se excluyen sábados, domingos y festivos. Los días naturales deben indicarse expresamente.`,
            `Los plazos por días comienzan el día siguiente a notificación, publicación o silencio. Los fijados por meses o años también empiezan al día siguiente, pero vencen el mismo ordinal del mes o año de vencimiento; si no existe día equivalente, el último día del mes. Si el último día es inhábil, pasa al primer hábil siguiente. Si un día es hábil en domicilio del interesado e inhábil en sede del órgano, o viceversa, se considera inhábil.`,
            `La Administración puede conceder ampliación que no exceda de la mitad si circunstancias lo aconsejan, no perjudica a terceros y se acuerda antes de vencer; la decisión no es recurrible separadamente. La tramitación de urgencia reduce a la mitad los plazos, salvo los de presentación de solicitudes y recursos.`,
            `En un supuesto práctico debe construirse una línea temporal: hecho inicial, día de notificación, día de comienzo, días inhábiles, vencimiento y posible prórroga. Confundir fecha de entrada en registro común con entrada en el órgano competente puede afectar al plazo máximo para resolver.`
          ]
        },
        {
          heading: '8. Iniciativa legislativa y potestad reglamentaria',
          paragraphs: [
            `El Título VI regula la iniciativa normativa. El Gobierno ejerce iniciativa legislativa mediante proyectos de ley; los órganos de gobierno autonómicos lo hacen conforme a Constitución y estatutos; entidades locales ejercen potestad reglamentaria conforme a Constitución, estatuto y legislación local. Los reglamentos y disposiciones no pueden vulnerar Constitución o leyes, regular materias reservadas ni crear ilícitos o sanciones sin cobertura.`,
            `Los principios de buena regulación son necesidad, eficacia, proporcionalidad, seguridad jurídica, transparencia y eficiencia. La iniciativa debe identificar claramente el problema, justificar el instrumento, contener regulación imprescindible, integrarse coherentemente en el ordenamiento, permitir participación y evitar cargas innecesarias. Si afecta gastos o ingresos presentes o futuros, debe cuantificarse y respetar estabilidad y sostenibilidad.`,
            `Las Administraciones publican anualmente un plan normativo con iniciativas previstas para el año siguiente y evalúan periódicamente normativa vigente para verificar objetivos, costes y cargas. La omisión de planificación no convierte automáticamente en nula una norma, pero evidencia un control de calidad exigible.`,
            `Antes de elaborar proyecto o anteproyecto se realiza consulta pública en portal web sobre problemas, necesidad, objetivos y alternativas, salvo excepciones legales. Cuando el texto afecte derechos e intereses legítimos se da audiencia y se recaban aportaciones; participación no sustituye los informes preceptivos ni el procedimiento de aprobación. Las normas deben publicarse en diario oficial y la publicidad web es complementaria.`
          ]
        },
        {
          heading: '9. Trampas y casos municipales',
          paragraphs: [
            `Persona e interesado no son sinónimos: el artículo 13 reconoce derechos generales; el artículo 53 añade derechos de quien ocupa posición de interesado. Un denunciante no se convierte siempre en interesado en un procedimiento sancionador. Representación para un recurso debe acreditarse. La subsanación de representación evita rechazar automáticamente el escrito.`,
            `Una persona física no está obligada con carácter universal a usar medios electrónicos. Una sociedad sí. Presentar un sábado por registro electrónico es posible, pero su cómputo se desplaza conforme al calendario. Los sábados son inhábiles para plazos administrativos aunque una oficina concreta abra.`,
            `Silencio positivo no significa que puedan adquirirse facultades contrarias al ordenamiento. Silencio negativo no libera de resolver. El plazo de tres meses es supletorio, no universal. Una instrucción interna no puede crear una obligación electrónica adicional fuera de la ley o reglamento habilitado.`
          ]
        }
      ],
      tree: `LEY 39/2015 · INTERESADOS Y ACTIVIDAD
├─ Ámbito: Estado, CCAA, entidades locales y sector institucional
├─ Interesados
│  ├─ Promotor con derecho o interés legítimo
│  ├─ Titular de derecho afectable
│  └─ Titular de interés que se persona antes de resolución
├─ Representación
│  ├─ Se acredita en actos relevantes
│  └─ Subsanación mínima habitual: 10 días
├─ Actividad administrativa
│  ├─ Derechos y asistencia electrónica
│  ├─ Registro y archivo
│  ├─ Obligación de resolver
│  ├─ Silencio
│  └─ Términos y plazos
└─ Potestad normativa
   ├─ Buena regulación
   ├─ Plan normativo
   ├─ Evaluación
   └─ Consulta, audiencia y publicación`,
      reviewTable: [
        ['Materia', 'Regla', 'Artículo LPAC'],
        ['Interesado', 'Derecho o interés legítimo afectado', '4'],
        ['Representación', 'Acreditación para solicitud, recurso, desistimiento y obligaciones', '5'],
        ['Derechos generales', 'Relación con la Administración', '13'],
        ['Obligados electrónicos', 'Personas jurídicas y demás categorías legales', '14'],
        ['Registro', 'Electrónico, interoperable y 24/7', '16'],
        ['Resolver', 'Siempre, salvo excepciones tasadas', '21'],
        ['Silencio', 'Estimatorio como regla en solicitudes, con excepciones', '24'],
        ['Días hábiles', 'Excluyen sábados, domingos y festivos', '30'],
        ['Buena regulación', 'Necesidad, eficacia, proporcionalidad, seguridad, transparencia y eficiencia', '129']
      ]
    },
    4: {
      sources: [COMMON_SOURCES.ley39, COMMON_SOURCES.constitucion],
      sections: [
        {
          heading: '1. Concepto, elementos y clases del acto administrativo',
          paragraphs: [
            `El acto administrativo es una declaración de voluntad, juicio, conocimiento o deseo realizada por una Administración en ejercicio de potestad administrativa y destinada a producir efectos jurídicos concretos. Se diferencia del reglamento porque este contiene una norma general con vocación de permanencia; de la actuación material porque el acto es una decisión jurídica; y de los contratos porque nacen del acuerdo de voluntades.`,
            `Sus elementos son sujeto, competencia, objeto, causa o presupuesto, finalidad y forma. El órgano debe tener competencia material, territorial y temporal; el contenido ha de ser posible, lícito y determinado; los hechos deben existir y encajar en la norma; la finalidad debe ser el interés público específico; y la forma y procedimiento deben respetarse. La desviación de poder aparece cuando se usa una competencia para finalidad distinta.`,
            `Los actos pueden ser favorables o de gravamen; expresos o presuntos; definitivos o de trámite; reglados o discrecionales; firmes o recurribles; y actos que ponen o no fin a la vía administrativa. Los actos de trámite solo son recurribles separadamente cuando deciden directa o indirectamente el fondo, impiden continuar, producen indefensión o perjuicio irreparable.`
          ]
        },
        {
          heading: '2. Requisitos, motivación y forma',
          paragraphs: [
            `Los actos se producen por órgano competente y conforme al procedimiento. Su contenido se ajusta al ordenamiento, es determinado y adecuado a sus fines. Como regla se dictan por escrito mediante medios electrónicos, salvo que naturaleza exija otra forma. Cuando varios actos homogéneos pueden refundirse, debe individualizarse cada destinatario y efecto.`,
            `Deben motivarse, con referencia sucinta de hechos y fundamentos jurídicos, los actos que limitan derechos o intereses; resuelven revisión, recursos, arbitraje o inadmisión; se apartan de precedente o dictamen consultivo; suspenden actos o adoptan medidas provisionales; acuerdan urgencia, ampliación o actividades complementarias; rechazan pruebas; terminan sancionadores o de responsabilidad patrimonial; ejercen potestades discrecionales; y los demás previstos.`,
            `Motivar no consiste en copiar artículos sin explicar su aplicación. Debe permitir conocer hechos probados, norma aplicada, razonamiento y decisión. Una motivación insuficiente puede provocar anulabilidad si causa indefensión o impide controlar la decisión. En procesos selectivos o concurrencia competitiva puede motivarse conforme a bases y criterios, dejando constancia individual de la valoración.`
          ]
        },
        {
          heading: '3. Eficacia, retroactividad, notificación y publicación',
          paragraphs: [
            `Los actos se presumen válidos y producen efectos desde la fecha en que se dictan, salvo que dispongan otra cosa. La eficacia puede demorarse si exige notificación, publicación o aprobación superior. Excepcionalmente puede otorgarse eficacia retroactiva cuando sustituye actos anulados o produce efectos favorables, siempre que los supuestos de hecho existieran y no se lesionen derechos de terceros.`,
            `Toda resolución o acto que afecte derechos o intereses debe notificarse a los interesados. La notificación debe cursarse dentro de diez días desde que se dicta y contener texto íntegro, indicación de si pone fin a vía administrativa, recursos procedentes, órgano y plazo. Una notificación defectuosa surte efecto cuando el interesado realiza actuaciones que revelan conocimiento o interpone recurso.`,
            `Las notificaciones se practican preferentemente por medios electrónicos y obligatoriamente para sujetos del artículo 14. Se entienden practicadas al acceder a contenido; si es obligatoria o elegida y pasan diez días naturales desde puesta a disposición sin acceso, se entiende rechazada salvo imposibilidad técnica o material. Debe enviarse aviso, pero su ausencia no invalida la notificación.`,
            `La publicación sustituye notificación cuando destinatarios son indeterminados, el acto integra procedimiento selectivo o concurrencia, o la notificación a uno es insuficiente para interés público, además de intentos fallidos según el régimen legal. Publicación y notificación deben proteger datos personales y evitar información innecesaria.`
          ]
        },
        {
          heading: '4. Nulidad, anulabilidad e irregularidades',
          paragraphs: [
            `La nulidad de pleno derecho es excepcional. Incluye actos que lesionan derechos susceptibles de amparo; órgano manifiestamente incompetente por materia o territorio; contenido imposible; infracción penal; actos dictados prescindiendo total y absolutamente del procedimiento o reglas esenciales de órganos colegiados; adquisición de derechos sin requisitos esenciales; y demás casos legales. Las disposiciones generales son nulas si vulneran normas superiores, reserva de ley o retroactividad sancionadora desfavorable.`,
            `La anulabilidad es la regla para infracciones del ordenamiento, incluida desviación de poder. El defecto de forma solo determina anulabilidad cuando faltan requisitos indispensables para el fin o causa indefensión. Actuar fuera de plazo solo invalida cuando naturaleza del término lo impone. Nulidad y anulabilidad tienen distinto régimen de revisión, convalidación y efectos.`,
            `La invalidez de un acto no implica la de los sucesivos independientes ni de partes separables. La Administración conserva actos y trámites cuyo contenido habría sido igual. El acto nulo o anulable puede convertirse si contiene elementos de otro válido. Los anulables pueden convalidarse corrigiendo el vicio; la convalidación produce efectos desde su fecha salvo retroactividad legal.`
          ]
        },
        {
          heading: '5. Garantías y expediente administrativo',
          paragraphs: [
            `El interesado tiene derecho a conocer estado de tramitación, sentido del silencio, órgano competente y actos de trámite; acceder y obtener copia; identificar autoridades y personal responsable; no aportar originales salvo excepción; no presentar datos ya aportados; formular alegaciones y aportar documentos; obtener información sobre requisitos; actuar asistido; cumplir pagos electrónicamente; y los demás derechos legales.`,
            `El expediente administrativo es conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a resolución y diligencias de ejecución. Tiene formato electrónico, índice numerado y copia certificada cuando se remite. No forman parte información auxiliar o de apoyo, notas, borradores, opiniones internas ni juicios de valor, salvo informes solicitados antes de resolución.`,
            `La tramitación se impulsa de oficio, electrónicamente y respetando transparencia y publicidad. Los asuntos se despachan por orden de incoación salvo motivación. Debe garantizarse concentración de trámites compatibles y cumplimiento de plazos por unidades responsables.`
          ]
        },
        {
          heading: '6. Iniciación del procedimiento',
          paragraphs: [
            `Los procedimientos se inician de oficio o a solicitud. Antes puede abrirse información o actuaciones previas para conocer circunstancias y conveniencia. Una vez iniciado, el órgano puede adoptar medidas provisionales proporcionadas para asegurar eficacia de resolución; antes de iniciar, en urgencia y con condiciones, pueden adoptarse y deben confirmarse en quince días.`,
            `La iniciación de oficio puede derivar de propia iniciativa, orden superior, petición razonada o denuncia. La denuncia comunica hechos y no convierte por sí sola al denunciante en interesado. En sancionadores, el acuerdo identifica presunto responsable, hechos, posible calificación, sanciones, instructor, órgano competente, medidas y derecho de alegar. En responsabilidad patrimonial debe especificar lesión, causalidad, valoración y momento.`,
            `La solicitud contiene identidad, medio de notificación, hechos, razones y petición, lugar y fecha, firma e identificación del órgano. Puede existir modelo obligatorio para procedimientos masivos. Si falta requisito, se requiere subsanación en diez días, ampliable cinco salvo selectivos o concurrencia; si no subsana, se le tiene por desistido mediante resolución.`,
            `Declaración responsable manifiesta bajo responsabilidad cumplimiento de requisitos y disponibilidad documental; comunicación informa datos relevantes. Permiten iniciar actividad desde presentación, sin perjuicio de comprobación. Falsedad esencial o incumplimiento impide continuar y puede obligar a restituir situación y bloquear nuevo procedimiento durante periodo legal.`
          ]
        },
        {
          heading: '7. Ordenación e instrucción',
          paragraphs: [
            `La ordenación aplica impulso de oficio, celeridad, orden de incoación, concentración y cumplimiento de trámites. Los interesados disponen normalmente de diez días para cumplimentar trámites, salvo norma distinta. Si una actuación no reúne requisitos, puede concederse subsanación; el incumplimiento puede declarar decaído el derecho al trámite, aunque se admite actuación antes o dentro del día de notificación de la resolución que declare transcurrido plazo.`,
            `La instrucción determina, conoce y comprueba hechos. Los interesados pueden alegar y aportar documentos antes de audiencia. La prueba se abre cuando Administración no tenga por ciertos hechos o naturaleza lo exija, por plazo entre diez y treinta días; puede existir periodo extraordinario máximo de diez. Se admiten medios legales y solo se rechazan pruebas manifiestamente improcedentes o innecesarias mediante motivación.`,
            `Los informes son facultativos y no vinculantes salvo disposición contraria. Los preceptivos se solicitan citando norma y concretando extremos. Se emiten electrónicamente en diez días como regla. No emitir informe no siempre paraliza, salvo preceptivo determinante u otros casos.`,
            `La audiencia se concede después de instrucción y antes de propuesta o dictamen, por plazo de diez a quince días. Puede omitirse si no figuran ni se consideran otros hechos, alegaciones o pruebas que los aportados por interesado. La información pública permite examinar expediente por plazo no inferior a veinte días y formular alegaciones; comparecer no convierte siempre en interesado, pero da derecho a respuesta razonada.`
          ]
        },
        {
          heading: '8. Terminación, resolución, caducidad y tramitación simplificada',
          paragraphs: [
            `Terminan el procedimiento resolución, desistimiento, renuncia cuando sea posible, caducidad, imposibilidad material sobrevenida y terminación convencional. La resolución decide todas las cuestiones planteadas y derivadas, es congruente con peticiones y no puede agravar situación inicial en procedimientos a solicitud, sin perjuicio de iniciar otro de oficio. Debe indicar recursos, órgano y plazo. La Administración no puede abstenerse por silencio, oscuridad o insuficiencia normativa.`,
            `La terminación convencional mediante acuerdo, pacto, convenio o contrato es posible si no contraria al ordenamiento, versa sobre materias transigibles y satisface interés público. Puede finalizar o insertarse como trámite vinculante o no. En sancionadores, reconocimiento de responsabilidad o pago voluntario pueden terminar con reducciones cuando la ley lo permite.`,
            `El interesado puede desistir de solicitud o renunciar a derecho si no está prohibido; si hay varios, solo afecta a quien lo formula. La Administración puede continuar por interés general o terceros personados. La caducidad en procedimientos a solicitud requiere paralización imputable, advertencia y tres meses sin reanudar; no basta inactividad en trámites no indispensables.`,
            `La tramitación simplificada puede acordarse por interés público o falta de complejidad, de oficio o a solicitud, y debe resolverse en treinta días salvo que reste menos en procedimiento ordinario. Incluye inicio, subsanación, alegaciones, audiencia cuando resolución desfavorable, informes preceptivos concretos y resolución. Si aparece trámite no previsto, continúa por vía ordinaria.`
          ]
        },
        {
          heading: '9. Ejecución y medios de ejecución forzosa',
          paragraphs: [
            `Los actos sujetos al Derecho administrativo son ejecutivos salvo suspensión, resolución sancionadora no firme en vía administrativa, disposición contraria o necesidad de aprobación superior. No puede iniciarse actuación material que limite derechos sin resolución previa que la fundamente y notificación al interesado.`,
            `Antes de ejecutar forzosamente se apercibe y se respeta proporcionalidad. Los medios son apremio sobre patrimonio para cantidades líquidas; ejecución subsidiaria para actos no personalísimos que puede realizar otro a costa del obligado; multa coercitiva cuando ley autoriza, reiterable y compatible con sanción; y compulsión sobre personas para obligaciones personalísimas de no hacer o soportar, con respeto a dignidad y derechos.`,
            `Si existen varios medios se elige el menos restrictivo. La entrada en domicilio requiere consentimiento o autorización judicial. Las obligaciones personalísimas de hacer no se ejecutan físicamente contra voluntad cuando ley no lo permite; el incumplidor responde de daños y perjuicios. Los costes se liquidan provisional o definitivamente y pueden exigirse por apremio.`
          ]
        },
        {
          heading: '10. Esquema práctico y errores frecuentes',
          paragraphs: [
            `En un supuesto debe seguirse secuencia: competencia e iniciación; posibles medidas; subsanación; alegaciones y prueba; informes; audiencia; resolución motivada; notificación; recurso; firmeza y ejecución. Saltar audiencia cuando era necesaria puede causar anulabilidad por indefensión. Notificar sin texto íntegro o recursos puede retrasar efectos, pero el conocimiento efectivo puede sanar la notificación.`,
            `No todo defecto produce nulidad. La incompetencia jerárquica suele ser anulabilidad y puede convalidarse; la incompetencia manifiesta por materia o territorio es nulidad. Un acto presunto puede existir por silencio, pero la Administración conserva deber de resolver. Una multa coercitiva no es sanción, aunque pueda coexistir.`,
            `No debe confundirse desistimiento del procedimiento con renuncia al derecho; ni caducidad con prescripción; ni publicación con notificación; ni acto firme con acto que pone fin a vía administrativa. Un acto puede poner fin a vía y ser recurrible en reposición o directamente ante jurisdicción, por lo que aún no es firme.`
          ]
        }
      ],
      tree: `PROCEDIMIENTO ADMINISTRATIVO
├─ Acto administrativo
│  ├─ Competencia, contenido, finalidad y forma
│  ├─ Motivación
│  ├─ Eficacia, notificación y publicación
│  └─ Nulidad / anulabilidad / convalidación
├─ Inicio
│  ├─ De oficio
│  ├─ A solicitud
│  ├─ Medidas provisionales
│  └─ Subsanación
├─ Instrucción
│  ├─ Alegaciones y prueba
│  ├─ Informes
│  ├─ Audiencia
│  └─ Información pública
├─ Terminación
│  ├─ Resolución
│  ├─ Convenio
│  ├─ Desistimiento o renuncia
│  ├─ Caducidad
│  └─ Simplificado
└─ Ejecución
   ├─ Apremio
   ├─ Ejecución subsidiaria
   ├─ Multa coercitiva
   └─ Compulsión sobre personas`,
      reviewTable: [
        ['Fase o concepto', 'Regla esencial', 'Artículos LPAC'],
        ['Motivación', 'Obligatoria en supuestos tasados y potestad discrecional', '35'],
        ['Notificación', 'Texto íntegro, recursos, órgano y plazo; cursada en 10 días', '40'],
        ['Nulidad', 'Causas excepcionales y tasadas', '47'],
        ['Anulabilidad', 'Infracción del ordenamiento como regla', '48'],
        ['Subsanación', '10 días; posible ampliación de 5', '68'],
        ['Prueba', 'Periodo ordinario entre 10 y 30 días', '77'],
        ['Audiencia', 'Entre 10 y 15 días', '82'],
        ['Información pública', 'Plazo no inferior a 20 días', '83'],
        ['Simplificado', 'Resolución ordinaria en 30 días', '96'],
        ['Ejecución forzosa', 'Cuatro medios y proporcionalidad', '99-104']
      ]
    },
    5: {
      sources: [COMMON_SOURCES.ley39, COMMON_SOURCES.constitucion],
      sections: [
        {
          heading: '1. Revisión administrativa: concepto y mapa general',
          paragraphs: [
            `La revisión en vía administrativa permite que la propia Administración controle sus actos antes o al margen del proceso judicial. Comprende revisión de oficio de actos nulos, declaración de lesividad de actos favorables anulables, revocación de actos desfavorables, rectificación de errores y recursos administrativos. Cada cauce tiene objeto, órgano, plazo y garantías propios.`,
            `Debe distinguirse revisión de oficio —potestad excepcional de la Administración— de recurso —impugnación promovida normalmente por interesado—. Tampoco se confunde con corrección material: rectificar una errata no permite cambiar valoración jurídica ni sustituir una decisión.`,
            `La firmeza limita recursos ordinarios, pero un acto firme nulo puede revisarse por artículo 106 y uno firme puede ser objeto de recurso extraordinario de revisión en causas tasadas. Los límites de buena fe, equidad, derechos de particulares y leyes operan incluso cuando existe causa revisora.`
          ]
        },
        {
          heading: '2. Revisión de oficio de actos y disposiciones nulas',
          paragraphs: [
            `Las Administraciones, en cualquier momento, por iniciativa propia o solicitud de interesado y previo dictamen favorable del Consejo de Estado u órgano consultivo autonómico equivalente, declaran nulidad de actos que pusieron fin a vía administrativa o no fueron recurridos en plazo cuando concurre una causa del artículo 47.1. El dictamen favorable es requisito esencial.`,
            `También pueden declarar de oficio nulidad de disposiciones administrativas en causas del artículo 47.2. El interesado puede instar revisión de un acto nulo, pero no existe idéntico derecho a exigir revisión de un reglamento. El órgano puede inadmitir sin dictamen solicitudes que no se basen en causa de nulidad, carezcan manifiestamente de fundamento o reproduzcan otras ya desestimadas.`,
            `Al declarar nulidad pueden reconocerse indemnizaciones si concurren requisitos de responsabilidad patrimonial, sin perjuicio de subsistencia de actos firmes dictados al aplicar una disposición nula. Si se inicia de oficio y pasan seis meses sin resolución, caduca; si lo solicita interesado, el silencio es desestimatorio. La nulidad puede declararse “en cualquier momento”, pero artículo 110 impide ejercicio contrario a equidad, buena fe, derechos de particulares o leyes por tiempo transcurrido u otras circunstancias.`
          ]
        },
        {
          heading: '3. Declaración de lesividad de actos favorables anulables',
          paragraphs: [
            `La Administración no puede anular por sí misma un acto favorable meramente anulable. Debe declarar que es lesivo para interés público y después impugnarlo ante jurisdicción contencioso-administrativa. La lesividad no convierte el acto en nulo ni produce por sí sola su desaparición.`,
            `Debe declararse dentro de cuatro años desde que se dictó el acto, previa audiencia de interesados. Si pasan seis meses desde inicio sin declaración, el procedimiento caduca. La declaración no es susceptible de recurso, sin perjuicio de alegarla al defenderse en proceso judicial.`,
            `En Administración local, la declaración corresponde al pleno o al órgano colegiado superior de entidad según ley. Mientras el juez no anule, el acto continúa eficaz, aunque puede suspenderse cuando su ejecución cause perjuicios de imposible o difícil reparación.`
          ]
        },
        {
          heading: '4. Revocación y rectificación de errores',
          paragraphs: [
            `Las Administraciones pueden revocar actos de gravamen o desfavorables mientras no haya prescrito, siempre que la revocación no constituya dispensa o exención no permitida ni sea contraria a igualdad, interés público u ordenamiento. No es un recurso a disposición del interesado ni permite revisar libremente actos favorables.`,
            `Pueden rectificar en cualquier momento, de oficio o a instancia, errores materiales, de hecho o aritméticos. El error debe ser patente a partir del expediente y su corrección no puede exigir una nueva valoración jurídica. Cambiar destinatario por reinterpretar norma, alterar puntuación por nuevo juicio técnico o sustituir una resolución no es simple rectificación.`,
            `La revocación elimina o modifica un acto desfavorable por razones de legalidad u oportunidad dentro de límites; la rectificación solo corrige expresión defectuosa de una decisión que permanece sustancialmente igual.`
          ]
        },
        {
          heading: '5. Recursos administrativos: objeto, legitimación e interposición',
          paragraphs: [
            `Contra resoluciones y actos de trámite cualificados pueden interponerse alzada y reposición fundadas en nulidad o anulabilidad. Los demás actos de trámite se impugnan al recurrir resolución final. Contra disposiciones administrativas no cabe recurso administrativo ordinario directo.`,
            `El escrito debe identificar recurrente, acto recurrido y razón de impugnación, lugar, fecha, firma, medio y órgano. El error en calificación no impide tramitar si se deduce carácter verdadero. Quien causó el vicio no puede invocarlo para obtener anulación.`,
            `Son causas de inadmisión: incompetencia cuando competente pertenece a otra Administración —debe remitirse—, falta de legitimación, acto no recurrible, plazo vencido y carencia manifiesta de fundamento. La resolución decide forma y fondo y, si hay vicio formal que impide pronunciarse, ordena retroacción.`
          ]
        },
        {
          heading: '6. Suspensión, audiencia y resolución del recurso',
          paragraphs: [
            `Interponer recurso no suspende ejecución salvo norma. El órgano puede suspender, de oficio o a solicitud, ponderando perjuicios, cuando ejecución pueda causar daño imposible o difícil de reparar o impugnación se funde en nulidad de pleno derecho. Puede exigir caución y adoptar medidas para proteger interés público o terceros.`,
            `Si transcurre un mes desde entrada de solicitud de suspensión en registro electrónico del órgano competente sin notificación de decisión, la ejecución se entiende suspendida. Si recurso afecta pluralidad indeterminada, la suspensión se publica. Puede prolongarse tras vía administrativa si se pidió medida cautelar judicial y se cumplen condiciones legales.`,
            `Cuando deban considerarse hechos o documentos nuevos no recogidos en expediente, se da audiencia entre diez y quince días. No se consideran nuevos los documentos que el recurrente pudo aportar durante procedimiento y no aportó.`,
            `La resolución estima, desestima o inadmite. Debe ser congruente y no puede agravar situación inicial del recurrente. Si existen otros interesados, se respetan contradicción y audiencia. El órgano no puede dejar sin resolver por silencio u oscuridad.`
          ]
        },
        {
          heading: '7. Recurso de alzada',
          paragraphs: [
            `La alzada procede contra actos que no ponen fin a vía administrativa y la resuelve el órgano superior jerárquico. Puede interponerse ante órgano que dictó acto o competente; el primero lo remite con informe y expediente en diez días.`,
            `Si acto es expreso, plazo de interposición es un mes. Si no es expreso, puede interponerse en cualquier momento desde el día siguiente a aquel en que se produzcan efectos del silencio. El plazo máximo para resolver y notificar es tres meses.`,
            `Transcurridos tres meses, se entiende desestimada, excepto alzada contra desestimación por silencio de una solicitud, que puede entenderse estimada conforme al artículo 24.1 salvo materias exceptuadas. Contra resolución de alzada no cabe otro recurso administrativo ordinario, solo extraordinario de revisión en su caso y vía judicial.`
          ]
        },
        {
          heading: '8. Recurso potestativo de reposición',
          paragraphs: [
            `La reposición procede potestativamente contra actos que ponen fin a vía administrativa y se presenta ante el mismo órgano que los dictó. El interesado puede elegir reposición o acudir directamente a jurisdicción contencioso-administrativa; si interpone reposición, no puede acudir al contencioso hasta resolución expresa o presunta.`,
            `El plazo es un mes para acto expreso y, para acto presunto, cualquier momento desde el día siguiente a efectos del silencio. El plazo máximo para resolver y notificar es un mes. Contra su resolución no puede interponerse otra reposición.`,
            `Poner fin a vía administrativa no significa firmeza. Un acto que pone fin puede ser recurrido en reposición o judicialmente. La reposición es potestativa; la alzada, cuando procede, es necesaria para agotar vía antes de acudir al juez.`
          ]
        },
        {
          heading: '9. Recurso extraordinario de revisión',
          paragraphs: [
            `Procede contra actos firmes cuando: al dictarlos hubo error de hecho que resulta de documentos del expediente; aparecen documentos esenciales que evidencian error; influyeron documentos o testimonios declarados falsos por sentencia firme; o resolución se dictó por prevaricación, cohecho, violencia, maquinación fraudulenta u otra conducta punible declarada judicialmente.`,
            `Por error de hecho, plazo es cuatro años desde notificación. En las demás causas, tres meses desde conocimiento de documentos o firmeza de sentencia. Se presenta ante órgano que dictó, que también resuelve.`,
            `Puede inadmitirse motivadamente sin dictamen cuando no se funda en causa legal o se desestimaron asuntos sustancialmente iguales. Debe solicitarse dictamen consultivo en los términos legales para resolución de fondo. Si pasan tres meses, se entiende desestimado y queda abierta vía contenciosa.`
          ]
        },
        {
          heading: '10. Fin de vía administrativa y acceso a jurisdicción',
          paragraphs: [
            `Ponen fin a vía, entre otros, resoluciones de alzada, procedimientos sustitutivos, órganos sin superior jerárquico salvo ley, acuerdos finalizadores, responsabilidad patrimonial y demás previstos. En ámbito local ponen fin los actos del pleno, alcalde o junta cuando actúa por delegación del alcalde y órganos inferiores cuando resuelven por delegación de órgano cuyos actos finalizan vía, además de supuestos legales.`,
            `Agotada vía, el interesado puede acudir a jurisdicción contencioso-administrativa dentro de los plazos procesales. La Administración debe indicar recursos correctamente, pero una indicación errónea no transforma la naturaleza del acto.`,
            `Los recursos especiales previstos en contratación, materia tributaria u otros ámbitos se rigen por su normativa. En tributos locales, revisión y reposición tienen especialidades; no debe aplicarse automáticamente régimen general sin comprobar legislación de haciendas locales.`
          ]
        },
        {
          heading: '11. Cuadro de decisión y trampas',
          paragraphs: [
            `Primera pregunta: ¿es disposición, acto definitivo o trámite cualificado? Segunda: ¿pone fin a vía? Si no pone fin, alzada; si pone fin, reposición potestativa o contencioso; si es firme, solo extraordinario en causas tasadas o revisión de oficio si nulo.`,
            `Nulidad no equivale a anulabilidad. Un acto favorable anulable exige lesividad y juez; uno nulo puede revisarse de oficio con dictamen. Revocación no sirve para quitar derechos favorables. Rectificación no permite cambiar criterio.`,
            `Los plazos de recurso se computan desde día siguiente a notificación. Alzada: un mes para interponer y tres para resolver. Reposición: un mes y un mes. Extraordinario: cuatro años por error de hecho; tres meses en otras causas; resolución en tres meses. Interponer no suspende automáticamente.`
          ]
        }
      ],
      tree: `REVISIÓN Y RECURSOS
├─ Revisión de oficio
│  ├─ Actos nulos: art. 106 + dictamen favorable
│  ├─ Reglamentos nulos
│  └─ Límites: art. 110
├─ Actos favorables anulables
│  └─ Lesividad + recurso judicial
├─ Actos desfavorables
│  ├─ Revocación
│  └─ Rectificación de errores
└─ Recursos
   ├─ Alzada: no termina vía · 1 mes / 3 meses
   ├─ Reposición: termina vía · potestativa · 1 mes / 1 mes
   └─ Extraordinario: acto firme y causas tasadas`,
      reviewTable: [
        ['Cauce', 'Objeto', 'Plazo clave'],
        ['Revisión de oficio', 'Actos nulos finales o no recurridos', 'Cualquier momento; 6 meses si de oficio'],
        ['Lesividad', 'Acto favorable anulable', 'Declaración dentro de 4 años; caduca en 6 meses'],
        ['Revocación', 'Acto desfavorable o de gravamen', 'Mientras no prescriba y con límites'],
        ['Rectificación', 'Error material, de hecho o aritmético', 'Cualquier momento'],
        ['Alzada', 'Acto que no pone fin a vía', '1 mes; resolver en 3'],
        ['Reposición', 'Acto que pone fin a vía', '1 mes; resolver en 1'],
        ['Extraordinario', 'Acto firme y causa tasada', '4 años o 3 meses'],
        ['Suspensión', 'No automática; daños difíciles o nulidad', 'Silencio de 1 mes sobre solicitud']
      ]
    }
  };

  const updated = [];
  for (const [numberText, definition] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = definition.sections;
    theme.tree = definition.tree;
    theme.reviewTable = definition.reviewTable;
    theme.officialSources = definition.sources.map(source => ({ ...source, reviewedAt: REVIEW_DATE }));
    theme.theoryStatus = {
      version: 'v0.85.0',
      reviewedAt: REVIEW_DATE,
      sourcePolicy: 'Fuentes oficiales consolidadas y explicación autosuficiente',
      autonomous: true,
      block: 'Carranque 1-5'
    };
    theme.studyWarnings = [
      'Comprobar la redacción consolidada vigente cuando se publique la fecha del examen.',
      'Las preguntas y los supuestos deben poder resolverse con el contenido desarrollado en este tema.'
    ];
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v85 = {
    version: 'v0.85.0',
    reviewedAt: REVIEW_DATE,
    objective: 'OpoWeb como única fuente teórica',
    completedThemes: updated,
    pendingThemes: Array.from({ length: 20 }, (_, index) => index + 1).filter(number => !updated.includes(number)),
    officialBasis: {
      label: 'Bases específicas del Ayuntamiento de Carranque',
      csv: '2EAA AEP4 Z2V2 3X7P EZU7',
      signedAt: '2025-12-26'
    }
  };

  window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE1 = {
    version: 'v0.85.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    sources: Object.values(COMMON_SOURCES)
  };
})();
