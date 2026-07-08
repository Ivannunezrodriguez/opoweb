(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const s = (heading, paragraphs) => ({ heading, paragraphs });
  const n = (v) => String(v || '').toLowerCase();
  const table = (rows) => rows;

  function classify(t) {
    const text = n(`${t.title} ${t.area}`);
    if (text.includes('windows') || text.includes('libreoffice') || text.includes('ordenador') || text.includes('periféricos') || text.includes('groupwise')) return 'ofimatica';
    if (text.includes('tribut') || text.includes('ibi') || text.includes('iae') || text.includes('vehículos') || text.includes('tasas') || text.includes('recaudación') || text.includes('presupuesto') || text.includes('hacienda')) return 'hacienda';
    if (text.includes('contrat')) return 'contratacion';
    if (text.includes('régimen local') || text.includes('municipio') || text.includes('provincia') || text.includes('diputación') || text.includes('entidades locales') || text.includes('padrón') || text.includes('órganos municipales')) return 'regimenLocal';
    if (text.includes('ley 39/2015') || text.includes('procedimiento administrativo') || text.includes('acto administrativo') || text.includes('recursos administrativos') || text.includes('notificaciones') || text.includes('silencio')) return 'ley39';
    if (text.includes('ley 40/2015') || text.includes('régimen jurídico') || text.includes('órganos de las administraciones') || text.includes('competencia administrativa')) return 'ley40';
    if (text.includes('constitución') || text.includes('derechos y deberes') || text.includes('tribunal constitucional') || text.includes('corona') || text.includes('cortes generales') || text.includes('defensor del pueblo')) return 'constitucion';
    return null;
  }

  const modules = {
    constitucion: {
      name: 'Constitución Española de 1978',
      sections: [
        s('Resumen fino tipo academia', [
          'La Constitución Española de 1978 es la norma suprema del ordenamiento jurídico. Vincula a ciudadanos y poderes públicos y sirve de parámetro de validez para el resto de normas.',
          'Para oposiciones locales no interesa solo memorizar títulos: hay que distinguir estructura, principios generales, derechos, garantías, suspensión, órganos constitucionales y reforma.',
          'La lógica de examen suele ser: artículo concreto, ubicación sistemática, órgano competente, mayoría exigida, garantía aplicable o diferencia entre derechos fundamentales, derechos ordinarios y principios rectores.'
        ]),
        s('Estructura del documento constitucional', [
          'Preámbulo: no tiene articulado, pero expresa fines políticos y valores inspiradores.',
          'Título Preliminar: artículos 1 a 9 CE. Recoge la forma de Estado, soberanía nacional, Monarquía parlamentaria, unidad/autonomía/solidaridad, lengua, bandera, capital, partidos, sindicatos, Fuerzas Armadas y principios del artículo 9.3.',
          'Título I: artículos 10 a 55 CE. Derechos y deberes fundamentales. Incluye españoles y extranjeros, derechos fundamentales, derechos y deberes de los ciudadanos, principios rectores, garantías y suspensión.',
          'Parte orgánica: Corona, Cortes Generales, Gobierno y Administración, relaciones Gobierno-Cortes, Poder Judicial, organización territorial, Tribunal Constitucional y reforma constitucional.',
          'Parte final: disposiciones adicionales, transitorias, derogatoria y final.'
        ]),
        s('Derechos: cómo ordenarlos para no confundirlos', [
          'Artículo 10 CE: dignidad de la persona, derechos inviolables, libre desarrollo de la personalidad y respeto a la ley y derechos de los demás como fundamento del orden político y de la paz social.',
          'Artículo 14 CE: igualdad ante la ley y prohibición de discriminación. Aunque está antes de la Sección 1.ª, tiene protección reforzada y recurso de amparo.',
          'Sección 1.ª del Capítulo II del Título I: derechos fundamentales y libertades públicas, artículos 15 a 29 CE.',
          'Sección 2.ª del Capítulo II del Título I: derechos y deberes de los ciudadanos, artículos 30 a 38 CE.',
          'Capítulo III: principios rectores de la política social y económica, artículos 39 a 52 CE. Informan legislación, práctica judicial y actuación de poderes públicos; su alegación exige leyes de desarrollo.'
        ]),
        s('Garantías y suspensión', [
          'Artículo 53 CE: fija el sistema de garantías. Los derechos del Capítulo II vinculan a todos los poderes públicos. Los derechos del artículo 14 y de la Sección 1.ª tienen tutela reforzada mediante procedimiento preferente y sumario y recurso de amparo.',
          'Artículo 54 CE: Defensor del Pueblo, alto comisionado de las Cortes Generales para defender los derechos del Título I y supervisar la actividad de la Administración.',
          'Artículo 55 CE: regula la suspensión de derechos en estados de excepción y sitio y la suspensión individual en supuestos tasados relacionados con bandas armadas o elementos terroristas, con intervención judicial y control parlamentario.'
        ]),
        s('Reforma constitucional', [
          'Artículo 167 CE: procedimiento ordinario de reforma. Se usa para reformas que no entren en el procedimiento agravado.',
          'Artículo 168 CE: procedimiento agravado. Se aplica a la revisión total o parcial que afecte al Título Preliminar, a la Sección 1.ª del Capítulo II del Título I o al Título II.',
          'Trampa típica: confundir referéndum facultativo del procedimiento ordinario con referéndum obligatorio del procedimiento agravado.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• Artículo 1 CE: Estado social y democrático de Derecho; valores superiores; soberanía nacional; Monarquía parlamentaria.',
          '• Artículo 2 CE: unidad de la Nación, autonomía de nacionalidades y regiones y solidaridad.',
          '• Artículo 9.3 CE: legalidad, jerarquía normativa, publicidad, irretroactividad sancionadora no favorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.',
          '• Artículo 14 CE: igualdad y no discriminación, con protección reforzada.',
          '• Artículo 53 CE: garantías de derechos y diferencia con principios rectores.',
          '• Artículo 55 CE: suspensión de derechos.',
          '• Artículos 167 y 168 CE: reforma ordinaria y agravada.'
        ]),
        s('Retención activa', [
          '1. ¿Qué materias obligan a usar el procedimiento agravado del artículo 168 CE?',
          '2. ¿Qué diferencia hay entre derechos fundamentales, derechos y deberes, y principios rectores?',
          '3. ¿Qué derechos tienen protección reforzada por el artículo 53 CE?'
        ])
      ],
      reviewTable: table([
        ['Bloque', 'Artículos', 'Clave de examen'],
        ['Título Preliminar', '1 a 9 CE', 'Principios básicos y artículo 9.3'],
        ['Derechos fundamentales', '15 a 29 CE', 'Procedimiento preferente y sumario + amparo'],
        ['Derechos/deberes', '30 a 38 CE', 'No todos tienen la misma protección que la Sección 1.ª'],
        ['Principios rectores', '39 a 52 CE', 'Exigibilidad conforme a leyes de desarrollo'],
        ['Reforma', '167 y 168 CE', 'Ordinaria vs agravada']
      ])
    },

    ley39: {
      name: 'Ley 39/2015, Procedimiento Administrativo Común',
      sections: [
        s('Resumen fino tipo academia', [
          'La Ley 39/2015 regula el procedimiento administrativo común: cómo se relacionan las personas con las Administraciones, cómo se dictan los actos, cómo se tramitan los procedimientos y cómo se revisan los actos administrativos.',
          'En examen hay que dominar su estructura funcional: interesados, representación, actividad administrativa, términos y plazos, actos, notificaciones, procedimiento, ejecución, revisión y recursos.',
          'Para supuesto práctico, la respuesta debe seguir una secuencia fija: hecho administrativo, norma aplicable, órgano, trámite, plazo, efecto y recurso.'
        ]),
        s('Título Preliminar y ámbito de aplicación', [
          'Artículo 1: objeto de la ley. Regula requisitos de validez y eficacia de actos administrativos, procedimiento administrativo común, procedimiento sancionador y responsabilidad patrimonial en su vertiente procedimental, iniciativa legislativa y potestad reglamentaria.',
          'Artículo 2: ámbito subjetivo. Se aplica al sector público: Administración General del Estado, Administraciones de las Comunidades Autónomas, Entidades que integran la Administración Local y sector público institucional en los términos legales.'
        ]),
        s('Interesados, capacidad y representación', [
          'Artículo 3: capacidad de obrar ante las Administraciones Públicas.',
          'Artículo 4: interesados. Son quienes promueven el procedimiento como titulares de derechos o intereses legítimos, quienes puedan resultar afectados en sus derechos, y quienes tengan intereses legítimos afectados y se personen antes de resolución definitiva.',
          'Artículo 5: representación. Debe acreditarse para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimiento y renuncia. Para actos de mero trámite se presume. La falta de acreditación puede subsanarse en diez días o plazo superior si las circunstancias lo requieren.',
          'Artículo 6: registros electrónicos de apoderamientos. Tipos de poder: general ante cualquier Administración, ante una Administración concreta o para trámites específicos. Validez máxima ordinaria: cinco años.'
        ]),
        s('Actividad administrativa y plazos', [
          'Artículo 13: derechos de las personas ante las Administraciones Públicas.',
          'Artículo 14: derecho y obligación de relacionarse electrónicamente. Las personas físicas eligen canal salvo obligación legal. Personas jurídicas, entidades sin personalidad, profesionales colegiados en ejercicio, representantes de obligados y empleados públicos están obligados en los términos de la ley.',
          'Artículo 16: registros. Presentación en registro electrónico, oficinas de asistencia, Correos, representaciones diplomáticas u oficinas consulares y otros registros válidos.',
          'Artículo 21: obligación de resolver expresamente y notificar. Si la norma reguladora no fija plazo máximo, será de tres meses.',
          'Artículo 30: cómputo de plazos. Días hábiles salvo que una ley o el Derecho de la Unión declare días naturales. Sábados, domingos y festivos son inhábiles. Meses y años se computan de fecha a fecha.',
          'Artículo 33: tramitación de urgencia. Reduce plazos a la mitad, salvo los relativos a presentación de solicitudes y recursos.'
        ]),
        s('Acto administrativo, notificación y eficacia', [
          'Artículo 34: los actos administrativos se producen por órgano competente y ajustándose al procedimiento establecido.',
          'Artículo 35: motivación obligatoria en actos limitativos de derechos, recursos, separación de criterios, medidas provisionales, urgencia, ampliaciones, potestad discrecional y demás supuestos legales.',
          'Artículos 39 a 46: eficacia, notificación y publicación. La notificación debe contener texto íntegro, indicación de si pone fin a la vía administrativa, recursos procedentes, órgano y plazo.',
          'Artículos 47 a 52: nulidad y anulabilidad. Nulidad para causas tasadas especialmente graves; anulabilidad como regla general para infracciones del ordenamiento que no sean nulidad.'
        ]),
        s('Procedimiento, ejecución, revisión y recursos', [
          'Artículo 53: derechos del interesado dentro del procedimiento.',
          'Inicio: de oficio o a solicitud de interesado. De oficio puede iniciarse por propia iniciativa, orden superior, petición razonada o denuncia. La solicitud defectuosa da lugar a subsanación de diez días.',
          'Instrucción: alegaciones, prueba, informes, audiencia e información pública.',
          'Finalización: resolución, desistimiento, renuncia, caducidad, imposibilidad material sobrevenida o terminación convencional.',
          'Ejecución forzosa: apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.',
          'Revisión y recursos: revisión de oficio, lesividad, revocación, rectificación de errores, alzada, reposición y extraordinario de revisión.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• Subsanación de representación o solicitud: diez días cuando proceda.',
          '• Plazo máximo para resolver si la norma no fija otro: tres meses.',
          '• Días hábiles como regla general; sábados, domingos y festivos son inhábiles.',
          '• Urgencia: reduce plazos a la mitad, excepto solicitudes y recursos.',
          '• Personas obligadas a relacionarse electrónicamente del artículo 14.',
          '• Notificación: texto íntegro, recursos, órgano y plazo.',
          '• Nulidad y anulabilidad: causas tasadas frente a regla general.',
          '• Alzada vs reposición: depende de si el acto pone fin o no a la vía administrativa.'
        ]),
        s('Retención activa', [
          '1. ¿Quiénes son interesados según el artículo 4 de la Ley 39/2015?',
          '2. ¿Cómo se computan días, meses y años en procedimiento administrativo común?',
          '3. ¿Qué recurso procede contra un acto que no pone fin a la vía administrativa?'
        ])
      ],
      reviewTable: table([
        ['Bloque', 'Dato literal', 'Trampa típica'],
        ['Interesado', 'Artículo 4', 'Confundir derecho subjetivo e interés legítimo'],
        ['Representación', 'Artículo 5; subsanación de diez días', 'Creer que la falta de poder invalida siempre el acto'],
        ['Resolver', 'Artículo 21; tres meses si no hay plazo', 'No distinguir resolver y notificar'],
        ['Plazos', 'Artículo 30; hábiles como regla', 'Contar sábados como hábiles'],
        ['Urgencia', 'Artículo 33; mitad salvo solicitudes y recursos', 'Aplicarla a recursos']
      ])
    },

    ley40: {
      name: 'Ley 40/2015, Régimen Jurídico del Sector Público',
      sections: [
        s('Resumen fino tipo academia', [
          'La Ley 40/2015 regula el régimen jurídico del sector público: principios de actuación, órganos administrativos, competencia, abstención y recusación, funcionamiento electrónico, responsabilidad, potestad sancionadora y relaciones interadministrativas.',
          'La clave de examen es diferenciar conceptos próximos: delegación de competencias, delegación de firma, encomienda de gestión, avocación y suplencia.'
        ]),
        s('Órganos y competencia', [
          'Órgano administrativo: unidad administrativa a la que se atribuyen funciones con efectos jurídicos frente a terceros o cuya actuación tenga carácter preceptivo.',
          'Competencia: irrenunciable y se ejerce por los órganos que la tengan atribuida como propia, salvo delegación o avocación en los términos legalmente previstos.',
          'Delegación de competencias: traslada el ejercicio de la competencia, no la titularidad.',
          'Avocación: órgano superior atrae para sí el conocimiento de un asunto cuya resolución corresponda ordinariamente o por delegación a órganos dependientes.',
          'Delegación de firma: solo afecta a la firma de resoluciones y actos; no altera la competencia.',
          'Suplencia: sustitución temporal del titular de un órgano en casos de vacante, ausencia, enfermedad u otra causa legal.'
        ]),
        s('Abstención, recusación y relaciones administrativas', [
          'Abstención: deber de no intervenir cuando concurran causas legales que puedan afectar a la imparcialidad.',
          'Recusación: derecho de los interesados a promover la separación de la autoridad o empleado público cuando concurra causa legal.',
          'Relaciones interadministrativas: cooperación, colaboración y coordinación entre Administraciones Públicas.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• La competencia es irrenunciable.',
          '• Delegar no transfiere titularidad; transfiere ejercicio.',
          '• Delegación de firma no cambia competencia.',
          '• Avocación: órgano superior asume un asunto concreto.',
          '• Encomienda de gestión no supone cesión de titularidad de competencia.',
          '• Abstención es deber; recusación la puede promover el interesado.'
        ]),
        s('Retención activa', [
          '1. ¿Qué diferencia hay entre delegación de competencias y delegación de firma?',
          '2. ¿Qué significa que la competencia sea irrenunciable?',
          '3. ¿Cuándo procede abstención o recusación?'
        ])
      ],
      reviewTable: table([
        ['Figura', 'Qué cambia', 'Qué no cambia'],
        ['Delegación de competencia', 'Ejercicio de la competencia', 'Titularidad'],
        ['Delegación de firma', 'Firma material del acto', 'Competencia'],
        ['Avocación', 'Asunto concreto asumido por superior', 'Régimen general de competencias'],
        ['Encomienda', 'Actividad material/técnica/de servicios', 'Titularidad de competencia'],
        ['Suplencia', 'Persona que actúa temporalmente', 'Competencia del órgano']
      ])
    },

    regimenLocal: {
      name: 'Régimen Local',
      sections: [
        s('Resumen fino tipo academia', [
          'El régimen local estudia las entidades que integran la Administración Local: municipio, provincia, islas y otras entidades reconocidas legalmente.',
          'En oposiciones de ayuntamientos y Diputación es bloque nuclear: órganos, competencias, funcionamiento, padrón, régimen electoral, actas, certificados y asistencia provincial a municipios.'
        ]),
        s('Municipio', [
          'El municipio es entidad básica de la organización territorial del Estado y cauce inmediato de participación ciudadana en los asuntos públicos. Tiene personalidad jurídica y plena capacidad para el cumplimiento de sus fines.',
          'Elementos del municipio: territorio, población y organización.',
          'Término municipal: territorio en que el Ayuntamiento ejerce sus competencias.',
          'Población municipal: integrada por vecinos inscritos en el padrón municipal. El padrón acredita residencia y domicilio habitual.',
          'Organización municipal: Alcalde, Tenientes de Alcalde y Pleno son referencia básica. Junta de Gobierno Local existe en municipios donde sea preceptiva o cuando proceda según la normativa.'
        ]),
        s('Provincia y Diputación', [
          'La provincia es entidad local determinada por agrupación de municipios, con personalidad jurídica propia y plena capacidad para el cumplimiento de sus fines.',
          'La Diputación Provincial es el órgano de gobierno y administración autónoma de la provincia, salvo regímenes especiales.',
          'Competencia provincial típica: coordinación de servicios municipales, asistencia y cooperación jurídica, económica y técnica, especialmente a municipios de menor capacidad económica y de gestión.',
          'En Diputación de Toledo hay que estudiar también su organización, funcionamiento y competencias cuando el programa lo mencione expresamente.'
        ]),
        s('Otras entidades locales', [
          'Mancomunidades: asociación voluntaria de municipios para ejecución en común de obras o servicios determinados de su competencia.',
          'Comarcas: agrupaciones de municipios con intereses comunes, según normativa autonómica.',
          'Áreas metropolitanas: entidades integradas por municipios de grandes aglomeraciones urbanas con vinculaciones económicas y sociales.',
          'Entidades de ámbito territorial inferior al municipio: entidades territoriales internas cuando estén previstas conforme a la normativa aplicable.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• Elementos del municipio: territorio, población y organización.',
          '• Padrón: acredita residencia y domicilio habitual.',
          '• Provincia: agrupación de municipios.',
          '• Diputación: gobierno y administración autónoma de la provincia.',
          '• Competencias provinciales: asistencia, cooperación y coordinación municipal.',
          '• No confundir mancomunidad, comarca, área metropolitana y entidad inferior al municipio.'
        ]),
        s('Retención activa', [
          '1. ¿Cuáles son los tres elementos del municipio?',
          '2. ¿Qué diferencia hay entre municipio, provincia y Diputación?',
          '3. ¿Para qué sirve una mancomunidad?'
        ])
      ],
      reviewTable: table([
        ['Entidad', 'Idea clave', 'Dato preguntable'],
        ['Municipio', 'Entidad básica', 'Territorio, población y organización'],
        ['Provincia', 'Agrupación de municipios', 'Personalidad jurídica propia'],
        ['Diputación', 'Gobierno provincial', 'Asistencia y cooperación municipal'],
        ['Mancomunidad', 'Municipios asociados', 'Obras o servicios comunes'],
        ['Área metropolitana', 'Aglomeración urbana', 'Vínculos económicos y sociales']
      ])
    },

    contratacion: {
      name: 'Contratación pública local',
      sections: [
        s('Resumen fino tipo academia', [
          'La contratación pública regula cómo las Administraciones preparan, adjudican, ejecutan, modifican y extinguen contratos.',
          'En ámbito local hay que conectar la Ley de Contratos del Sector Público con órgano de contratación, expediente, pliegos, selección del contratista, garantías, ejecución y resolución.',
          'En test suelen mezclar fases: preparación, adjudicación, formalización, ejecución, modificación y extinción.'
        ]),
        s('Fases del contrato', [
          'Preparación: necesidad, expediente de contratación, informe, presupuesto, pliegos, fiscalización cuando proceda y aprobación del expediente.',
          'Adjudicación: selección del contratista mediante el procedimiento previsto y aplicación de criterios de adjudicación.',
          'Formalización: perfecciona documentalmente la relación en los términos exigidos por la normativa.',
          'Ejecución: cumplimiento de prestaciones conforme a pliegos, oferta y contrato.',
          'Modificación, suspensión y resolución: solo en supuestos y con procedimiento previstos en la ley y en los pliegos.'
        ]),
        s('Elementos que debes memorizar', [
          'Órgano de contratación: quién tiene competencia para contratar.',
          'Objeto del contrato: prestación que se contrata.',
          'Presupuesto base de licitación, valor estimado y precio: no son conceptos equivalentes.',
          'Garantías: aseguran cumplimiento y responsabilidades del contratista.',
          'Solvencia, capacidad y prohibiciones de contratar: condiciones subjetivas del licitador.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• Preparación y adjudicación no son lo mismo.',
          '• Presupuesto base, valor estimado y precio no son equivalentes.',
          '• Garantía provisional y definitiva pueden confundirse.',
          '• Modificación contractual exige causa y procedimiento.',
          '• Resolución es forma de extinción del contrato.',
          '• Selección del contratista se vincula a procedimiento y criterios de adjudicación.'
        ]),
        s('Retención activa', [
          '1. ¿Qué documentos forman el núcleo del expediente de contratación?',
          '2. ¿Qué diferencia hay entre adjudicación y formalización?',
          '3. ¿Por qué no debes confundir presupuesto base de licitación, valor estimado y precio?'
        ])
      ],
      reviewTable: table([
        ['Fase', 'Qué ocurre', 'Trampa'],
        ['Preparación', 'Se justifica y aprueba el expediente', 'Pensar que ya hay contratista'],
        ['Adjudicación', 'Se selecciona contratista', 'Confundir con formalización'],
        ['Formalización', 'Se documenta el contrato', 'Omitir plazos/requisitos'],
        ['Ejecución', 'Se cumplen prestaciones', 'Olvidar pliegos y oferta'],
        ['Extinción', 'Cumplimiento o resolución', 'Confundir suspensión con resolución']
      ])
    },

    hacienda: {
      name: 'Hacienda local, presupuestos y tributos',
      sections: [
        s('Resumen fino tipo academia', [
          'Hacienda local estudia los recursos de las Entidades Locales, especialmente tributos, presupuesto, gasto, recaudación, ordenanzas fiscales y control económico.',
          'En Administrativo C1 de Diputación pesa mucho: IBI, IAE, IVTM, IIVTNU, tasas, obligación tributaria, gestión, recaudación y presupuesto general.',
          'En test hay que identificar siempre naturaleza del ingreso, hecho imponible, sujeto pasivo, devengo, base, cuota, exenciones y bonificaciones.'
        ]),
        s('Presupuesto local', [
          'Presupuesto general: expresión cifrada, conjunta y sistemática de obligaciones que puede reconocer la entidad y derechos que se prevean liquidar durante el ejercicio.',
          'Contenido: estado de gastos, estado de ingresos, bases de ejecución y documentación anexa que proceda.',
          'Elaboración y aprobación: procedimiento formal con aprobación inicial, exposición pública, resolución de reclamaciones y aprobación definitiva cuando proceda.',
          'Prórroga presupuestaria: opera cuando al inicio del ejercicio no ha entrado en vigor el presupuesto correspondiente.',
          'Ejecución y liquidación: fases del gasto e ingreso, modificaciones presupuestarias, resultado presupuestario y remanente de tesorería cuando el programa lo incluya.'
        ]),
        s('Tributos locales y recaudación', [
          'Impuestos: tributos exigidos sin contraprestación directa. En local destacan IBI, IAE, IVTM, ICIO e IIVTNU cuando entren en programa.',
          'Tasas: se exigen por utilización privativa o aprovechamiento especial del dominio público local o por prestación de servicios/realización de actividades administrativas que afecten o beneficien de modo particular al sujeto pasivo.',
          'Contribuciones especiales: se vinculan a obtención por el sujeto pasivo de beneficio o aumento de valor de sus bienes por obras públicas o establecimiento/ampliación de servicios públicos.',
          'Recaudación voluntaria y ejecutiva: diferencia clave. En ejecutiva aparecen recargos, intereses y procedimiento de apremio en los términos legales.',
          'Aplazamiento, fraccionamiento, compensación y devolución de ingresos son figuras típicas de pregunta práctica.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• Diferencia impuesto, tasa, precio público y contribución especial.',
          '• IBI: hecho imponible ligado a bienes inmuebles.',
          '• IAE: actividad económica.',
          '• IVTM: titularidad de vehículos de tracción mecánica aptos para circular.',
          '• IIVTNU: incremento de valor de terrenos de naturaleza urbana.',
          '• Tasa: dominio público o servicio/actividad administrativa particularizable.',
          '• Presupuesto: aprobación, prórroga, ejecución y liquidación.',
          '• Recaudación voluntaria vs ejecutiva.'
        ]),
        s('Retención activa', [
          '1. ¿Qué diferencia hay entre impuesto, tasa y contribución especial?',
          '2. ¿Qué ocurre si al inicio del ejercicio no está aprobado el nuevo presupuesto?',
          '3. ¿Qué datos tienes que identificar siempre en un tributo local?'
        ])
      ],
      reviewTable: table([
        ['Ingreso/figura', 'Clave', 'No confundir con'],
        ['Impuesto', 'Sin contraprestación directa', 'Tasa'],
        ['Tasa', 'Dominio público o servicio/actividad administrativa', 'Precio público'],
        ['Contribución especial', 'Beneficio por obra o servicio público', 'Impuesto general'],
        ['Recaudación voluntaria', 'Pago dentro de periodo ordinario', 'Apremio'],
        ['Recaudación ejecutiva', 'Cobro forzoso', 'Gestión tributaria ordinaria']
      ])
    },

    ofimatica: {
      name: 'Ofimática e informática administrativa',
      sections: [
        s('Resumen fino tipo academia', [
          'La ofimática de oposición no se estudia como informática general, sino como tareas administrativas: crear, guardar, copiar, imprimir, escanear, enviar, ordenar datos, elaborar documentos y manejar hojas de cálculo.',
          'Respeta siempre la versión del programa del enunciado: Windows 11 Pro, Microsoft Edge, GroupWise, LibreOffice 24 Writer, Calc, Base e Impress cuando la convocatoria lo indique.',
          'La forma más eficaz de memorizar ofimática es practicar operaciones reales y luego convertirlas en pasos tipo test.'
        ]),
        s('Windows 11 Pro', [
          'Archivos y carpetas: crear, copiar, mover, borrar, cambiar nombre, buscar, ordenar y consultar propiedades.',
          'Unidades locales y de red: diferencia entre almacenamiento local, unidades externas, rutas y recursos compartidos.',
          'Impresión y escaneado: seleccionar impresora, configurar página, cola de impresión, resolución, formato de salida y ubicación del archivo escaneado.'
        ]),
        s('Internet, correo y LibreOffice', [
          'Microsoft Edge: navegación, pestañas, historial, descargas, favoritos, búsqueda y configuración básica de privacidad/seguridad.',
          'Correo electrónico: destinatario, CC, CCO, asunto, cuerpo, adjuntos, responder, responder a todos, reenviar y gestión básica de bandejas.',
          'LibreOffice Writer: formato de texto, estilos, tablas, encabezados, pies, numeración, márgenes, guardar/exportar e impresión.',
          'LibreOffice Calc: celdas, rangos, fórmulas, funciones básicas, filtros, ordenación, formatos y gráficos simples.',
          'LibreOffice Base: tablas, campos, registros, formularios, consultas e informes a nivel básico.',
          'LibreOffice Impress: diapositivas, diseños, inserción de objetos, transiciones y presentación.'
        ]),
        s('Opo-Test: puntos calientes', [
          '• Diferencia copiar, mover y crear acceso directo.',
          '• Diferencia CC y CCO en correo electrónico.',
          '• Writer: documento de texto; Calc: hoja de cálculo; Base: base de datos; Impress: presentaciones.',
          '• Ruta local, unidad de red y dispositivo externo no son lo mismo.',
          '• Impresora y escáner: configuración, cola, resolución y formato de salida.',
          '• En Calc, fórmula y función no son exactamente lo mismo.',
          '• Periféricos: entrada, salida y almacenamiento.'
        ]),
        s('Retención activa', [
          '1. ¿Qué pasos seguirías para escanear un documento y guardarlo en una carpeta concreta?',
          '2. ¿Qué diferencia hay entre Writer, Calc, Base e Impress?',
          '3. ¿Cuándo usarías CC y cuándo CCO en un correo administrativo?'
        ])
      ],
      reviewTable: table([
        ['Herramienta', 'Uso administrativo', 'Pregunta típica'],
        ['Windows 11', 'Gestión de archivos, carpetas, unidades e impresión', 'Operaciones sobre archivos'],
        ['Edge', 'Navegación y descargas', 'Favoritos, historial, pestañas'],
        ['Correo', 'Comunicación administrativa', 'CC, CCO, adjuntos'],
        ['Writer', 'Documentos de texto', 'Formato, tablas, impresión'],
        ['Calc', 'Hojas de cálculo', 'Fórmulas, filtros, ordenación'],
        ['Base/Impress', 'Bases de datos y presentaciones', 'Objeto principal de cada aplicación']
      ])
    }
  };

  function applyAcademia(t) {
    const kind = classify(t);
    if (!kind || !modules[kind]) return;
    const m = modules[kind];
    t.sections = [
      s('Documento reutilizable', [
        `Módulo base: ${m.name}. Este desarrollo está pensado para reutilizarlo entre convocatorias cuando el documento normativo sea común, aunque cambien títulos, capítulos o epígrafes exigidos.`,
        `Tema oficial de esta OPE: ${t.title}`,
        'Uso recomendado: estudia primero el módulo completo y después marca únicamente los apartados que entren en la convocatoria concreta.'
      ]),
      ...m.sections,
      s('Plan de estudio del tema', [
        'Vuelta 1: lectura comprensiva y localización de ley, artículo, órgano, plazo y excepción.',
        'Vuelta 2: tapa el resumen y responde las preguntas de retención activa.',
        'Vuelta 3: test del tema y revisión solo de fallos.',
        'Última vuelta: repaso de tabla comparativa y Opo-Test.'
      ])
    ];
    t.reviewTable = m.reviewTable;
    t.tree = [`Tema ${t.number}`, `- Documento reutilizable: ${m.name}`, '- Resumen fino tipo academia', '- Apartados normativos', '- Tabla comparativa', '- Opo-Test', '- Retención activa', '- Plan de estudio'].join('\n');
    t.academiaVersion = 'academia-v1';
  }

  data.oposiciones.forEach(ope => {
    (ope.themes || []).forEach(applyAcademia);
    ope.version = '0.14.0';
    ope.changelog ||= [];
    if (!ope.changelog.some(c => c.version === '0.14.0')) {
      ope.changelog.unshift({
        version: '0.14.0',
        date: '2026-07-07',
        changes: ['Añadidos módulos manuales tipo academia para Constitución, Ley 39/2015, Ley 40/2015, Régimen Local, Contratación, Hacienda/Tributos/Presupuesto y Ofimática']
      });
    }
  });

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();
