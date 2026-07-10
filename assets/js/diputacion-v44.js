(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.44.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    12: {
      source: 'Constitución Española, arts. 137, 140 y 141; Ley 7/1985, arts. 1 a 10',
      blocks: [
        ['Principios constitucionales', [
          'El artículo 137 de la Constitución organiza territorialmente el Estado en municipios, provincias y comunidades autónomas, todas ellas con autonomía para la gestión de sus respectivos intereses.',
          'Los artículos 140 y 141 garantizan la autonomía municipal y provincial. La autonomía local no equivale a soberanía: se ejerce dentro de la Constitución, la ley y el sistema de distribución de competencias.'
        ]],
        ['Entidades que integran la Administración Local', [
          'Artículo 1 de la Ley 7/1985. Los municipios son entidades básicas de la organización territorial y cauces inmediatos de participación ciudadana. La provincia goza también de autonomía para gestionar sus intereses.',
          'Artículo 3. Son entidades locales territoriales el municipio, la provincia y la isla. También tienen condición de entidades locales las comarcas u otras agrupaciones, las áreas metropolitanas y las mancomunidades, en los términos legales.'
        ]],
        ['Personalidad, capacidad y potestades', [
          'Artículo 5. Las entidades locales tienen plena capacidad jurídica para adquirir, poseer, reivindicar, permutar, gravar o enajenar bienes, celebrar contratos, establecer y explotar obras o servicios, obligarse, interponer recursos y ejercitar acciones.',
          'Artículo 4. Dentro de su competencia corresponden a municipios, provincias e islas potestades reglamentaria y de autoorganización, tributaria y financiera, de programación o planificación, expropiatoria, de investigación, deslinde y recuperación de oficio de bienes, ejecución forzosa, sancionadora y revisión de oficio, además de las prerrogativas reconocidas a la Hacienda pública.'
        ]],
        ['Competencias locales', [
          'Artículo 7. Las competencias de las entidades locales son propias o atribuidas por delegación. Las propias solo pueden determinarse por ley y se ejercen en régimen de autonomía y bajo responsabilidad propia.',
          'Las competencias delegadas se ejercen en los términos de la disposición o acuerdo de delegación y pueden quedar sometidas a técnicas de dirección y control de oportunidad y eficiencia.',
          'El ejercicio de competencias distintas de las propias y de las delegadas exige que no ponga en riesgo la sostenibilidad financiera y que no exista ejecución simultánea del mismo servicio público con otra Administración, conforme a los informes previstos legalmente.'
        ]],
        ['Relaciones interadministrativas y control', [
          'Artículo 10. La Administración local y las demás Administraciones deben ajustar sus relaciones a información mutua, colaboración, coordinación y respeto de sus respectivos ámbitos competenciales.',
          'La coordinación procede cuando las actividades o servicios trascienden el interés propio, inciden en otras Administraciones o son concurrentes o complementarios, sin afectar a la autonomía local.',
          'El control sobre la legalidad de los actos locales corresponde a los órganos judiciales, sin perjuicio de los mecanismos de información, requerimiento e impugnación previstos en la legislación de régimen local.'
        ]]
      ],
      hot: ['Autonomía local no significa soberanía.', 'Municipio, provincia e isla son entidades territoriales.', 'Competencias propias: solo por ley.', 'Competencias delegadas: sometidas a términos y controles de la delegación.', 'Coordinación no puede vaciar la autonomía.', 'Las potestades del artículo 4 se ejercen dentro de la competencia.'],
      recall: ['¿Qué entidades locales tienen carácter territorial?', '¿Qué diferencia hay entre competencia propia y delegada?', '¿Qué límites tiene la coordinación interadministrativa?']
    },
    13: {
      source: 'Ley 7/1985, arts. 11 a 30; TRLRHL, arts. 162 a 171',
      blocks: [
        ['Concepto y elementos del municipio', [
          'Artículo 11 de la Ley 7/1985. El municipio es la entidad local básica, tiene personalidad jurídica y plena capacidad. Sus elementos son territorio, población y organización.',
          'Artículo 12. El término municipal es el territorio en que el ayuntamiento ejerce sus competencias y cada municipio pertenece a una sola provincia.'
        ]],
        ['Población y padrón', [
          'Toda persona que viva en España debe inscribirse en el padrón del municipio donde resida habitualmente; quien viva en varios, en el que habite más tiempo al año.',
          'El padrón es el registro administrativo donde constan los vecinos. Sus datos prueban residencia y domicilio habitual y las certificaciones tienen carácter de documento público y fehaciente para efectos administrativos.',
          'La condición de vecino se adquiere en el mismo momento de la inscripción en el padrón.'
        ]],
        ['Organización municipal', [
          'Artículo 20. Alcalde, Tenientes de Alcalde y Pleno existen en todos los ayuntamientos. La Junta de Gobierno Local existe en municipios de más de 5.000 habitantes y en los de menor población cuando lo disponga el reglamento orgánico o lo acuerde el Pleno.',
          'Artículo 21. El Alcalde dirige el gobierno y la administración municipal, representa al ayuntamiento, convoca y preside órganos y dirige servicios y obras municipales.',
          'Artículo 22. El Pleno está integrado por todos los concejales y presidido por el Alcalde. Ejerce control y fiscalización y adopta acuerdos básicos de organización, ordenanzas, presupuesto y patrimonio, entre otros.'
        ]],
        ['Competencias y servicios mínimos', [
          'Artículo 25. El municipio ejerce competencias propias en materias determinadas por la legislación sectorial: urbanismo, medio ambiente urbano, agua, vías, servicios sociales, policía local, tráfico, cultura, deporte, mercados, salubridad, cementerios y otras.',
          'Artículo 26. Todos los municipios deben prestar alumbrado, cementerio, recogida de residuos, limpieza viaria, agua potable, alcantarillado, acceso a núcleos y pavimentación.',
          'A partir de 5.000 habitantes se añaden parque público, biblioteca y tratamiento de residuos; a partir de 20.000, protección civil, atención social inmediata, incendios e instalaciones deportivas; a partir de 50.000, transporte colectivo urbano y medio ambiente urbano.'
        ]],
        ['Presupuesto local: concepto y contenido', [
          'Artículo 162 del TRLRHL. El presupuesto es la expresión cifrada, conjunta y sistemática de las obligaciones que como máximo pueden reconocerse y de los derechos que se prevean liquidar durante el ejercicio.',
          'El ejercicio coincide con el año natural. El presupuesto general integra el de la propia entidad, los de organismos autónomos y las previsiones de sociedades mercantiles íntegramente locales.',
          'Cada presupuesto contiene estados de gastos e ingresos y bases de ejecución. Debe aprobarse sin déficit inicial y respetar estabilidad presupuestaria.'
        ]],
        ['Elaboración, aprobación y entrada en vigor', [
          'El Presidente forma el presupuesto y lo remite al Pleno, informado por Intervención, antes del 15 de octubre para su aprobación, enmienda o devolución.',
          'Aprobado inicialmente, se expone al público durante quince días. Si no hay reclamaciones queda definitivamente aprobado; si las hay, el Pleno dispone de un mes para resolverlas.',
          'La aprobación definitiva debe realizarse antes del 31 de diciembre y el presupuesto entra en vigor tras su publicación resumida por capítulos.'
        ]]
      ],
      hot: ['Tres elementos: territorio, población y organización.', 'Junta de Gobierno: obligatoria por encima de 5.000 habitantes.', 'Padrón acredita residencia y domicilio.', 'No confundir competencias del artículo 25 con servicios mínimos del 26.', 'Presupuesto: máximo de obligaciones y previsión de derechos.', 'Exposición pública: quince días.', 'Aprobación definitiva antes del 31 de diciembre.'],
      recall: ['¿Cuáles son los órganos necesarios del municipio?', '¿Qué servicios se añaden en cada tramo poblacional?', '¿Cómo se aprueba y entra en vigor el presupuesto local?']
    },
    14: {
      source: 'Ley 7/1985, arts. 31 a 41; LOREG, arts. 202 a 209',
      blocks: [
        ['Provincia: concepto y fines', [
          'Artículo 31. La provincia es una entidad local determinada por la agrupación de municipios, con personalidad jurídica propia y plena capacidad.',
          'Sus fines son garantizar solidaridad y equilibrio intermunicipales, asegurar la prestación integral y adecuada de servicios municipales y participar en la coordinación entre Administración local, comunidad autónoma y Estado.'
        ]],
        ['Organización provincial', [
          'Artículo 32. En todas las Diputaciones existen Presidente, Vicepresidentes, Junta de Gobierno y Pleno. También existen órganos de estudio, informe o consulta y seguimiento de la gestión, con participación proporcional de los grupos políticos.',
          'El Pleno está constituido por Presidente y Diputados. Le corresponden la organización, ordenanzas, presupuestos, planes provinciales, control de órganos, plantilla y otras decisiones estructurales.',
          'El Presidente dirige el gobierno y la administración provincial, representa a la Diputación, convoca y preside órganos, dirige servicios y obras y ejerce las restantes competencias atribuidas.'
        ]],
        ['Junta de Gobierno y funcionamiento', [
          'La Junta de Gobierno se integra por el Presidente y un número de Diputados no superior al tercio del número legal, nombrados y separados libremente por aquel, dando cuenta al Pleno.',
          'Asiste al Presidente y ejerce las atribuciones que este u otro órgano le deleguen o le atribuyan las leyes. Las Comisiones informativas estudian, informan o consultan los asuntos que se someten al Pleno y siguen la gestión de los órganos ejecutivos.'
        ]],
        ['Competencias provinciales', [
          'Artículo 36. Son competencias propias, entre otras, coordinar servicios municipales, prestar asistencia y cooperación jurídica, económica y técnica, garantizar secretaría e intervención en municipios de menos de 1.000 habitantes y prestar servicios supramunicipales.',
          'También corresponde a la Diputación aprobar anualmente un plan provincial de cooperación a obras y servicios municipales y apoyar especialmente a municipios de menor capacidad económica y de gestión.'
        ]],
        ['Diputación Provincial de Toledo', [
          'La organización básica de la Diputación de Toledo responde al régimen general: Presidencia, Vicepresidencias, Pleno, Junta de Gobierno, Comisiones informativas y órganos complementarios establecidos por su normativa interna.',
          'El estudio debe centrarse en qué órgano dirige, controla, asiste o decide. La composición personal y delegaciones concretas pueden variar durante el mandato y deben comprobarse en la web y el reglamento orgánico vigentes.'
        ]],
        ['Régimen electoral provincial', [
          'La elección de Diputados provinciales es indirecta. La LOREG fija entre 25 y 51 Diputados según población; el tramo de 500.001 a 1.000.000 residentes corresponde a 27.',
          'Los puestos se distribuyen entre partidos judiciales proporcionalmente a población: todos tienen al menos uno y ninguno puede superar tres quintos del total.',
          'Constituidos los ayuntamientos, los concejales de cada formación en cada partido judicial eligen a quienes serán Diputados. El Presidente se elige entre los Diputados: mayoría absoluta en primera votación y simple en segunda.'
        ]]
      ],
      hot: ['Provincia = agrupación de municipios con personalidad propia.', 'Órganos necesarios: Presidente, Vicepresidentes, Junta de Gobierno y Pleno.', 'Asistencia municipal, especialmente a los de menor capacidad.', 'Pleno controla; Presidente dirige.', 'Diputados provinciales: elección indirecta.', 'Presidente: absoluta en primera, simple en segunda.', 'Cada partido judicial tiene al menos un Diputado.'],
      recall: ['¿Cuáles son los fines propios de la provincia?', '¿Qué competencias corresponden al Pleno y al Presidente?', '¿Cómo se eligen los Diputados y el Presidente provincial?']
    },
    15: {
      source: 'Ley 7/1985, arts. 24 bis y 42 a 44',
      blocks: [
        ['Comarcas', [
          'Artículo 42. Las comunidades autónomas pueden crear comarcas u otras entidades que agrupen varios municipios cuando existan intereses comunes que precisen gestión propia o servicios de ámbito supramunicipal.',
          'La iniciativa puede partir de los municipios. No podrá crearse si se oponen expresamente dos quintas partes de los municipios afectados, siempre que representen al menos la mitad del censo del territorio.',
          'La creación de una comarca no puede hacer perder a los municipios sus servicios mínimos ni privarlos de toda intervención en sus competencias propias.'
        ]],
        ['Áreas metropolitanas', [
          'Artículo 43. Son entidades integradas por municipios de grandes aglomeraciones urbanas entre cuyos núcleos existen vinculaciones económicas y sociales que hacen necesaria planificación conjunta y coordinación de servicios y obras.',
          'Se crean, modifican y suprimen mediante ley autonómica, previa audiencia de la Administración del Estado y de los ayuntamientos y diputaciones afectados.'
        ]],
        ['Mancomunidades', [
          'Artículo 44. Los municipios tienen derecho a asociarse en mancomunidades para ejecutar en común obras y servicios determinados de su competencia.',
          'Las mancomunidades tienen personalidad y capacidad jurídicas y se rigen por estatutos propios. Estos regulan ámbito territorial, objeto, competencias, órganos, recursos, duración y funcionamiento.',
          'Sus órganos de gobierno deben ser representativos de los ayuntamientos mancomunados.'
        ]],
        ['Entidades inferiores al municipio', [
          'Artículo 24 bis. Las leyes autonómicas regulan los entes de ámbito territorial inferior al municipio como forma de organización desconcentrada para administrar núcleos separados.',
          'Carecen de personalidad jurídica bajo el régimen básico vigente. Pueden conservar denominaciones tradicionales como pedanías, aldeas, barrios, concejos o lugares anejos.',
          'No deben confundirse con municipios independientes ni con mancomunidades: dependen organizativamente del municipio.'
        ]],
        ['Diferencias esenciales', [
          'La comarca y el área metropolitana nacen por ley autonómica; la mancomunidad nace de la asociación voluntaria de municipios y se rige por estatutos.',
          'La mancomunidad tiene personalidad jurídica; el ente inferior del artículo 24 bis carece de ella y actúa como organización desconcentrada.',
          'El criterio de examen es identificar quién crea la entidad, qué municipios integra, qué finalidad persigue y si tiene personalidad jurídica.'
        ]]
      ],
      hot: ['Comarca: creación autonómica y oposición cualificada.', 'Área metropolitana: gran aglomeración y ley autonómica.', 'Mancomunidad: asociación voluntaria para obras o servicios concretos.', 'Mancomunidad con personalidad jurídica.', 'Ente inferior: sin personalidad y dependiente del municipio.', 'El artículo 45 está sin contenido; la referencia actual básica es el 24 bis.'],
      recall: ['¿Qué oposición impide crear una comarca?', '¿Qué deben contener los estatutos de una mancomunidad?', '¿Qué diferencia jurídica existe entre mancomunidad y ente inferior al municipio?']
    },
    16: {
      source: 'Ley 9/2017 de Contratos del Sector Público; disposiciones adicionales 2.ª y 3.ª',
      blocks: [
        ['Contratos administrativos y tipología', [
          'La LCSP distingue contratos de obras, concesión de obras, concesión de servicios, suministro y servicios, además de contratos administrativos especiales. En concesiones existe transferencia de riesgo operacional al concesionario.',
          'El expediente debe justificar necesidad e idoneidad. El objeto debe ser determinado y, como regla, dividirse en lotes cuando la naturaleza lo permita, justificando la no división.'
        ]],
        ['Magnitudes económicas y expediente', [
          'Presupuesto base de licitación es el límite máximo de gasto, incluido IVA. Valor estimado se calcula sin IVA e incorpora opciones, prórrogas y modificaciones previstas. Precio es la contraprestación real del contrato.',
          'El expediente incluye motivación de necesidad, objeto, crédito, pliegos, procedimiento, criterios y aprobación del gasto. La resolución que aprueba el expediente dispone la apertura de la adjudicación y se publica en el perfil de contratante.'
        ]],
        ['Selección del contratista', [
          'La selección respeta libertad de acceso, publicidad, transparencia, igualdad, no discriminación, integridad y eficiente utilización de fondos.',
          'Los licitadores deben acreditar capacidad, ausencia de prohibiciones, solvencia y, cuando proceda, clasificación. La adjudicación se basa en la mejor relación calidad-precio mediante criterios vinculados al objeto.',
          'Los procedimientos principales incluyen abierto, restringido, licitación con negociación, negociado sin publicidad en causas tasadas, diálogo competitivo y asociación para la innovación.'
        ]],
        ['Contratos menores y garantías', [
          'Artículo 118. Son menores los contratos con valor estimado inferior a 40.000 euros en obras y a 15.000 en suministros o servicios. Exigen informe motivado de necesidad y ausencia de alteración del objeto, aprobación del gasto y factura.',
          'La garantía provisional no se exige como regla; excepcionalmente puede imponerse por interés público, motivada y hasta el 3 % del presupuesto base sin IVA.',
          'La garantía definitiva es, con carácter general, el 5 % del precio final ofertado sin IVA. En casos especiales puede añadirse una complementaria de hasta otro 5 %.'
        ]],
        ['Órgano de contratación local', [
          'La disposición adicional segunda atribuye al Alcalde o Presidente los contratos cuando el valor estimado no supere el 10 % de los recursos ordinarios ni seis millones de euros y, si son plurianuales, no excedan de cuatro años incluidas prórrogas y respeten esos límites.',
          'Cuando el contrato excede esos límites, la competencia corresponde al Pleno. En municipios de gran población las competencias se ejercen por la Junta de Gobierno Local, sin perjuicio de la aprobación plenaria de pliegos generales.'
        ]],
        ['Ejecución, modificación y suspensión', [
          'Los contratos se cumplen conforme a sus cláusulas y pliegos. La Administración puede interpretar, resolver dudas, inspeccionar, modificar por interés público en casos legales, imponer responsabilidad, suspender y resolver, dando audiencia al contratista.',
          'Las modificaciones solo caben si fueron previstas claramente en el pliego o, excepcionalmente, si concurren las condiciones legales de modificación no prevista. Fuera de esos casos debe resolverse y licitarse un nuevo contrato.',
          'La suspensión debe documentarse mediante acta con circunstancias y situación de la ejecución, generando los efectos indemnizatorios que procedan conforme a la ley.'
        ]],
        ['Invalidez y extinción', [
          'Los contratos pueden ser inválidos por causas de Derecho administrativo o civil. La invalidez de actos preparatorios o adjudicación puede afectar al contrato con los efectos previstos legalmente.',
          'Se extinguen por cumplimiento o resolución. Son causas de resolución, entre otras, muerte o incapacidad del contratista individual, extinción de la sociedad, concurso o insolvencia, mutuo acuerdo, demora, incumplimiento esencial y imposibilidad de ejecutar sin modificación legal.',
          'El acuerdo de resolución debe pronunciarse sobre pérdida, devolución o cancelación de la garantía y sobre daños, indemnizaciones y liquidación.'
        ]]
      ],
      hot: ['Valor estimado: sin IVA; presupuesto base: con IVA.', 'Lotes como regla si la naturaleza lo permite.', 'Menor: menos de 40.000 obras y 15.000 suministros/servicios.', 'Provisional excepcional; definitiva general del 5 %.', 'Presidente local: 10 % de recursos, máximo seis millones y hasta cuatro años.', 'Modificar solo en supuestos legales.', 'Extinción por cumplimiento o resolución.'],
      recall: ['¿Qué diferencia existe entre presupuesto base, valor estimado y precio?', '¿Cuándo es competente el Presidente y cuándo el Pleno?', '¿Qué requisitos y límites tiene la modificación contractual?']
    }
  };

  const rawQuestions = {
    12: [
      ['¿Qué entidades territoriales reconoce la Ley 7/1985?', 'Municipio, provincia e isla.', ['Comarca, consorcio y fundación.', 'Solo municipio y comunidad autónoma.', 'Mancomunidad, sindicato y área sanitaria.'], 'Artículo 3 de la Ley 7/1985.'],
      ['¿Qué es el municipio según el artículo 1?', 'Entidad básica y cauce inmediato de participación ciudadana.', ['Órgano periférico del Estado.', 'Entidad dependiente de la provincia sin autonomía.', 'Sociedad pública territorial.'], 'Artículo 1 de la Ley 7/1985.'],
      ['¿Qué carácter tiene la autonomía local?', 'Autonomía para gestionar intereses propios dentro de la ley.', ['Soberanía legislativa plena.', 'Independencia frente a los tribunales.', 'Poder constituyente propio.'], 'Constitución y Ley 7/1985.'],
      ['¿Cómo se determinan las competencias propias locales?', 'Por ley.', ['Por cualquier circular.', 'Por convenio privado.', 'Por costumbre administrativa.'], 'Artículo 7.2 de la Ley 7/1985.'],
      ['¿Cómo se ejercen las competencias propias?', 'En autonomía y bajo responsabilidad propia.', ['Siempre bajo instrucciones de oportunidad del Estado.', 'Sin control judicial.', 'Solo mediante delegación.'], 'Artículo 7.2 de la Ley 7/1985.'],
      ['¿A qué puede someterse una competencia delegada?', 'A dirección y control previstos en la delegación.', ['A ausencia total de control.', 'A aprobación judicial previa de cada acto.', 'A gestión exclusiva por el Estado.'], 'Artículo 7.3 de la Ley 7/1985.'],
      ['¿Qué potestad permite aprobar ordenanzas?', 'Potestad reglamentaria.', ['Potestad jurisdiccional.', 'Potestad legislativa estatal.', 'Potestad constituyente.'], 'Artículo 4 de la Ley 7/1985.'],
      ['¿Qué potestad permite recuperar de oficio determinados bienes?', 'Investigación, deslinde y recuperación de oficio.', ['Potestad indultadora.', 'Potestad legislativa.', 'Potestad electoral.'], 'Artículo 4 de la Ley 7/1985.'],
      ['¿Qué principios rigen las relaciones interadministrativas?', 'Información, colaboración, coordinación y respeto competencial.', ['Jerarquía absoluta y tutela general.', 'Reserva y secreto entre Administraciones.', 'Competencia y subordinación judicial.'], 'Artículo 10 de la Ley 7/1985.'],
      ['¿Puede la coordinación vaciar la autonomía local?', 'No.', ['Sí, siempre.', 'Sí, mediante una circular.', 'Solo en materia presupuestaria.'], 'Artículo 10 de la Ley 7/1985.'],
      ['¿Cuándo puede ser necesaria la coordinación?', 'Cuando servicios trascienden el interés propio o son concurrentes.', ['En todo asunto local sin excepción.', 'Solo cuando lo pide un particular.', 'Nunca.'], 'Artículo 10 de la Ley 7/1985.'],
      ['¿Qué capacidad jurídica tiene una entidad local?', 'Puede adquirir bienes, contratar, obligarse y ejercer acciones.', ['Solo puede emitir informes.', 'No puede celebrar contratos.', 'Carece de capacidad procesal.'], 'Artículo 5 de la Ley 7/1985.'],
      ['¿Qué requisito adicional tienen las competencias distintas de propias y delegadas?', 'No comprometer sostenibilidad y evitar duplicidad del servicio.', ['Ser aprobadas por referéndum.', 'Carecer de coste.', 'Ser siempre estatales.'], 'Artículo 7.4 de la Ley 7/1985.'],
      ['¿Qué Administración controla ordinariamente la legalidad final de actos locales?', 'Los órganos judiciales en los términos legales.', ['La Diputación por jerarquía.', 'El Senado.', 'La Junta Electoral Central.'], 'Principio de autonomía local y control de legalidad.'],
      ['¿Qué potestad permite imponer sanciones dentro de la competencia local?', 'Potestad sancionadora.', ['Potestad arbitral privada.', 'Potestad constituyente.', 'Potestad electoral.'], 'Artículo 4 de la Ley 7/1985.']
    ],
    13: [
      ['¿Cuáles son los elementos del municipio?', 'Territorio, población y organización.', ['Alcalde, presupuesto y patrimonio.', 'Provincia, comarca y padrón.', 'Pleno, concejales y vecinos.'], 'Artículo 11.2 de la Ley 7/1985.'],
      ['¿Qué es el término municipal?', 'El territorio donde el ayuntamiento ejerce sus competencias.', ['La lista de vecinos.', 'El mandato de la corporación.', 'El conjunto de bienes patrimoniales.'], 'Artículo 12 de la Ley 7/1985.'],
      ['¿Qué prueba el padrón?', 'Residencia y domicilio habitual.', ['Nacionalidad española.', 'Propiedad de la vivienda.', 'Capacidad tributaria.'], 'Artículo 16 de la Ley 7/1985.'],
      ['¿Cuándo se adquiere la condición de vecino?', 'En el momento de la inscripción padronal.', ['Tras un año de residencia.', 'Al pagar el IBI.', 'Al cumplir dieciocho años.'], 'Artículo 15 de la Ley 7/1985.'],
      ['¿Qué órganos existen en todos los ayuntamientos?', 'Alcalde, Tenientes de Alcalde y Pleno.', ['Junta de Gobierno y distrito.', 'Consejo Social y asesoría jurídica.', 'Diputación y comisión especial.'], 'Artículo 20.1.a de la Ley 7/1985.'],
      ['¿Cuándo es obligatoria la Junta de Gobierno Local?', 'En municipios de más de 5.000 habitantes.', ['En todos sin excepción.', 'Solo en capitales de provincia.', 'A partir de 50.000 habitantes.'], 'Artículo 20.1.b de la Ley 7/1985.'],
      ['¿Quién preside el Pleno municipal?', 'El Alcalde.', ['El Secretario.', 'El Interventor.', 'El concejal de mayor edad.'], 'Artículo 22.1 de la Ley 7/1985.'],
      ['¿Cuál es un servicio mínimo de todos los municipios?', 'Abastecimiento domiciliario de agua potable.', ['Transporte colectivo urbano.', 'Protección civil profesional.', 'Biblioteca pública.'], 'Artículo 26.1.a de la Ley 7/1985.'],
      ['¿Qué servicio se exige a partir de 5.000 habitantes?', 'Biblioteca pública.', ['Transporte colectivo urbano.', 'Prevención y extinción de incendios.', 'Medio ambiente urbano.'], 'Artículo 26.1.b de la Ley 7/1985.'],
      ['¿Qué servicio se exige a partir de 20.000 habitantes?', 'Prevención y extinción de incendios.', ['Biblioteca por primera vez.', 'Transporte urbano obligatorio.', 'Ningún servicio adicional.'], 'Artículo 26.1.c de la Ley 7/1985.'],
      ['¿Qué expresa el presupuesto local?', 'Máximo de obligaciones y previsión de derechos del ejercicio.', ['Solo los ingresos tributarios.', 'El patrimonio inmobiliario.', 'La plantilla electoral.'], 'Artículo 162 del TRLRHL.'],
      ['¿Con qué período coincide el ejercicio presupuestario?', 'Con el año natural.', ['Con el mandato corporativo.', 'Con dos años naturales.', 'Con el curso escolar.'], 'Artículo 163 del TRLRHL.'],
      ['¿Puede aprobarse un presupuesto local con déficit inicial?', 'No.', ['Sí, sin límite.', 'Solo si lo aprueba el Alcalde.', 'Sí, cuando no tiene bases de ejecución.'], 'Artículo 165.4 del TRLRHL.'],
      ['¿Cuánto dura la exposición pública tras la aprobación inicial?', 'Quince días.', ['Diez días.', 'Un mes.', 'Dos meses.'], 'Artículo 169.1 del TRLRHL.'],
      ['¿Cuándo entra en vigor el presupuesto?', 'Tras su publicación definitiva en la forma legal.', ['Con la aprobación inicial.', 'Al remitirse a Intervención.', 'Al firmarlo el Secretario.'], 'Artículo 169.5 del TRLRHL.']
    ],
    14: [
      ['¿Qué es la provincia?', 'Entidad local formada por agrupación de municipios.', ['Órgano de la comunidad autónoma.', 'Mancomunidad obligatoria.', 'Distrito estatal sin personalidad.'], 'Artículo 31 de la Ley 7/1985.'],
      ['¿Cuál es un fin propio de la provincia?', 'Garantizar solidaridad y equilibrio intermunicipales.', ['Aprobar leyes autonómicas.', 'Elegir alcaldes.', 'Ejercer jurisdicción.'], 'Artículo 31.2 de la Ley 7/1985.'],
      ['¿Qué órganos existen en todas las Diputaciones?', 'Presidente, Vicepresidentes, Junta de Gobierno y Pleno.', ['Alcaldes, concejales y barrios.', 'Consejo de Ministros y Senado.', 'Solo Presidente y Pleno.'], 'Artículo 32 de la Ley 7/1985.'],
      ['¿Quién integra el Pleno provincial?', 'El Presidente y los Diputados.', ['Todos los alcaldes de la provincia.', 'Solo los portavoces.', 'Los concejales de la capital.'], 'Artículo 33 de la Ley 7/1985.'],
      ['¿A quién corresponde aprobar el presupuesto provincial?', 'Al Pleno.', ['Al Presidente en exclusiva.', 'A la Junta Electoral.', 'Al Tribunal de Cuentas.'], 'Artículo 33 de la Ley 7/1985.'],
      ['¿Quién dirige el gobierno y administración provincial?', 'El Presidente.', ['El Pleno.', 'El Secretario.', 'La Junta Electoral Provincial.'], 'Artículo 34 de la Ley 7/1985.'],
      ['¿Qué función tiene la Junta de Gobierno?', 'Asistir al Presidente y ejercer atribuciones delegadas o legales.', ['Fiscalizar judicialmente los contratos.', 'Elegir a los alcaldes.', 'Aprobar leyes provinciales.'], 'Artículo 35 de la Ley 7/1985.'],
      ['¿A qué municipios debe dirigirse especialmente la asistencia provincial?', 'A los de menor capacidad económica y de gestión.', ['Solo a capitales.', 'Solo a los de más de 50.000 habitantes.', 'Exclusivamente a municipios turísticos.'], 'Artículo 36 de la Ley 7/1985.'],
      ['¿Qué servicio debe garantizar la Diputación en municipios de menos de 1.000 habitantes?', 'Secretaría e intervención.', ['Transporte metropolitano.', 'Universidad pública.', 'Policía autonómica.'], 'Artículo 36.1.b de la Ley 7/1985.'],
      ['¿Cómo se eligen los Diputados provinciales?', 'Indirectamente por los concejales de cada formación y partido judicial.', ['Por sufragio directo provincial.', 'Por designación del Gobierno.', 'Por sorteo entre alcaldes.'], 'LOREG, Título V.'],
      ['¿Cuántos Diputados corresponden al tramo de 500.001 a 1.000.000 residentes?', 'Veintisiete.', ['Veinticinco.', 'Treinta y uno.', 'Cincuenta y uno.'], 'Artículo 204 de la LOREG.'],
      ['¿Cuántos Diputados como mínimo recibe cada partido judicial?', 'Uno.', ['Dos.', 'Tres.', 'Ninguno necesariamente.'], 'Artículo 204.2.a de la LOREG.'],
      ['¿Qué límite máximo tiene un partido judicial?', 'Tres quintos del total de Diputados.', ['La mitad exacta.', 'Dos tercios.', 'No existe límite.'], 'Artículo 204.2.b de la LOREG.'],
      ['¿Qué mayoría elige al Presidente en primera votación?', 'Mayoría absoluta.', ['Mayoría simple.', 'Tres quintos.', 'Dos tercios.'], 'Artículo 207.2 de la LOREG.'],
      ['¿Qué mayoría basta en segunda votación para Presidente?', 'Mayoría simple.', ['Mayoría absoluta.', 'Unanimidad.', 'Tres quintos.'], 'Artículo 207.2 de la LOREG.']
    ],
    15: [
      ['¿Quién puede crear una comarca?', 'La comunidad autónoma conforme a su legislación.', ['La Diputación por decreto.', 'Un alcalde por bando.', 'El Gobierno mediante contrato.'], 'Artículo 42 de la Ley 7/1985.'],
      ['¿Qué oposición puede impedir crear una comarca?', 'Dos quintas partes de municipios que representen al menos la mitad del censo.', ['Un solo municipio siempre.', 'La mitad de los alcaldes sin requisito poblacional.', 'Cualquier asociación privada.'], 'Artículo 42.2 de la Ley 7/1985.'],
      ['¿Puede la comarca eliminar los servicios mínimos municipales?', 'No.', ['Sí, todos.', 'Solo por acuerdo de la Diputación.', 'Sí, si lo pide un particular.'], 'Artículo 42.4 de la Ley 7/1985.'],
      ['¿Cómo se crea un área metropolitana?', 'Por ley autonómica y previa audiencia de Administraciones afectadas.', ['Por convenio privado.', 'Por ordenanza de un municipio.', 'Por resolución judicial.'], 'Artículo 43 de la Ley 7/1985.'],
      ['¿Qué caracteriza un área metropolitana?', 'Vinculaciones económicas y sociales que exigen planificación conjunta.', ['Solo compartir nombre geográfico.', 'Tener menos de 1.000 habitantes.', 'Carecer de servicios comunes.'], 'Artículo 43 de la Ley 7/1985.'],
      ['¿Qué derecho reconoce el artículo 44 a los municipios?', 'Asociarse en mancomunidades para obras y servicios comunes.', ['Fusionarse sin procedimiento.', 'Crear provincias.', 'Aprobar leyes autonómicas.'], 'Artículo 44.1 de la Ley 7/1985.'],
      ['¿Tiene personalidad jurídica una mancomunidad?', 'Sí.', ['No.', 'Solo si supera 50.000 habitantes.', 'Solo con autorización estatal anual.'], 'Artículo 44.2 de la Ley 7/1985.'],
      ['¿Qué norma básica rige una mancomunidad?', 'Sus estatutos.', ['Un contrato laboral.', 'La ley de presupuestos estatal exclusivamente.', 'El padrón del municipio mayor.'], 'Artículo 44.2 de la Ley 7/1985.'],
      ['¿Qué deben representar los órganos de gobierno de la mancomunidad?', 'A los ayuntamientos mancomunados.', ['Solo a la Diputación.', 'Al Gobierno central.', 'A las empresas contratistas.'], 'Artículo 44.2 de la Ley 7/1985.'],
      ['¿Para qué se crean entes inferiores al municipio?', 'Para administrar núcleos de población separados como organización desconcentrada.', ['Para sustituir a la provincia.', 'Para aprobar leyes.', 'Para elegir Diputados provinciales.'], 'Artículo 24 bis de la Ley 7/1985.'],
      ['¿Tienen personalidad jurídica los entes del artículo 24 bis?', 'No.', ['Sí, siempre.', 'Solo si tienen padrón propio.', 'Solo si gestionan tributos.'], 'Artículo 24 bis de la Ley 7/1985.'],
      ['¿De quién dependen los entes inferiores al municipio?', 'Del municipio.', ['Del Senado.', 'De la Administración de Justicia.', 'De una mancomunidad necesariamente.'], 'Artículo 24 bis de la Ley 7/1985.'],
      ['¿Qué diferencia principal hay entre mancomunidad y ente inferior?', 'La mancomunidad tiene personalidad; el ente inferior no.', ['Ninguna.', 'El ente inferior agrupa provincias.', 'La mancomunidad carece de estatutos.'], 'Artículos 24 bis y 44.'],
      ['¿Qué artículo actual regula básicamente los entes inferiores?', 'El artículo 24 bis.', ['El artículo 45, que mantiene contenido completo.', 'El artículo 31.', 'El artículo 106.'], 'Artículo 24 bis; artículo 45 sin contenido.'],
      ['¿Qué finalidad tiene una mancomunidad?', 'Ejecutar en común obras o servicios determinados de competencia municipal.', ['Gestionar cualquier competencia estatal.', 'Ejercer jurisdicción.', 'Aprobar presupuestos autonómicos.'], 'Artículo 44.1 de la Ley 7/1985.']
    ],
    16: [
      ['¿Qué impuesto incluye el presupuesto base de licitación?', 'El IVA.', ['Ninguno.', 'Solo el IRPF.', 'El IBI.'], 'Artículo 100 de la LCSP.'],
      ['¿Cómo se calcula el valor estimado respecto del IVA?', 'Sin IVA.', ['Con IVA incluido.', 'Solo con IVA reducido.', 'No tiene relación con el importe.'], 'Artículo 101 de la LCSP.'],
      ['¿Qué debe justificarse si no se divide el contrato en lotes?', 'La decisión de no dividirlo.', ['El nombre del adjudicatario antes de licitar.', 'La ausencia de crédito.', 'La eliminación del perfil de contratante.'], 'Artículo 99 de la LCSP.'],
      ['¿Cuál es el umbral del contrato menor de obras?', 'Valor estimado inferior a 40.000 euros.', ['40.000 euros o más.', 'Inferior a 15.000 euros.', 'Inferior a 100.000 euros.'], 'Artículo 118.1 de la LCSP.'],
      ['¿Cuál es el umbral menor de suministro o servicios?', 'Valor estimado inferior a 15.000 euros.', ['Inferior a 40.000 euros.', '15.000 euros exactos o más.', 'Inferior a 60.000 euros.'], 'Artículo 118.1 de la LCSP.'],
      ['¿Qué debe justificar el informe del contrato menor?', 'Necesidad y ausencia de alteración del objeto para eludir umbrales.', ['Solo la identidad del proveedor.', 'La inexistencia de factura.', 'La falta de crédito.'], 'Artículo 118.2 de la LCSP.'],
      ['¿Se exige garantía provisional como regla?', 'No, solo excepcionalmente y motivada.', ['Sí, siempre.', 'Solo a entidades locales.', 'Nunca puede exigirse.'], 'Artículo 106 de la LCSP.'],
      ['¿Cuál es el máximo general de garantía provisional?', 'Tres por ciento del presupuesto base sin IVA.', ['Cinco por ciento del precio con IVA.', 'Diez por ciento del valor estimado.', 'Quince por ciento.'], 'Artículo 106.2 de la LCSP.'],
      ['¿Cuál es la garantía definitiva general?', 'Cinco por ciento del precio final ofertado sin IVA.', ['Tres por ciento del presupuesto con IVA.', 'Diez por ciento obligatorio siempre.', 'No existe garantía definitiva.'], 'Artículo 107 de la LCSP.'],
      ['¿Qué criterio general rige la adjudicación?', 'La mejor relación calidad-precio.', ['La oferta más antigua.', 'El sorteo.', 'La nacionalidad del licitador.'], 'Artículo 145 de la LCSP.'],
      ['¿Cuándo corresponde contratar al Presidente de una entidad local?', 'Hasta el 10 % de recursos ordinarios, máximo seis millones y duración hasta cuatro años.', ['En todos los contratos sin límite.', 'Solo en contratos menores.', 'Nunca.'], 'Disposición adicional segunda de la LCSP.'],
      ['¿Quién contrata cuando se superan los límites del Presidente?', 'El Pleno.', ['El Secretario.', 'La Mesa por sí sola.', 'El contratista anterior.'], 'Disposición adicional segunda de la LCSP.'],
      ['¿Qué prerrogativa tiene el órgano de contratación?', 'Interpretar, modificar legalmente, suspender y resolver.', ['Cambiar libremente cualquier cláusula.', 'Ignorar los pliegos.', 'Contratar verbalmente fuera de emergencia.'], 'Artículo 190 de la LCSP.'],
      ['¿Cuándo puede modificarse un contrato?', 'En supuestos previstos en pliego o excepcionalmente en los casos legales no previstos.', ['Siempre que lo pida el contratista.', 'Sin expediente ni publicación.', 'Solo después de extinguirse.'], 'Artículos 203 a 205 de la LCSP.'],
      ['¿Cómo se extingue un contrato administrativo?', 'Por cumplimiento o resolución.', ['Solo por caducidad presupuestaria.', 'Solo por mutuo acuerdo.', 'Por silencio del contratista.'], 'Artículos 209 a 213 de la LCSP.']
    ]
  };

  function makeQuestions(number, rows) {
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v44-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source: number === 16 ? 'BOE · Ley 9/2017' : 'BOE · Ley 7/1985 / TRLRHL / LOREG'
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
      sec('Resumen orientado al aprobado', [`Tema de alta rentabilidad para test y supuesto provincial. Fuente principal: ${value.source}. Distingue entidad, órgano, competencia, mayoría, plazo y efecto.`]),
      sec('Rigor normativo', ['Contenido revisado sobre textos consolidados del BOE vigentes en julio de 2026. En la capa específica de Diputación se evita memorizar nombres personales o delegaciones que puedan cambiar durante el mandato.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Entidad', 'Municipio, provincia, comarca, área metropolitana, mancomunidad o ente inferior.'],
      ['Órgano', 'Pleno, Alcalde/Presidente, Junta de Gobierno, comisión o mesa de contratación.'],
      ['Competencia', 'Propia, delegada, contractual, presupuestaria, organizativa o de asistencia.'],
      ['Regla', 'Artículo, mayoría, tramo poblacional, límite económico, duración o procedimiento.'],
      ['Efecto', 'Aprobación, prestación, adjudicación, modificación, publicación, control o resolución.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v44';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.44';

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

  const allThemes = ope.themes.map(item => {
    const questions = (ope.themeTests[item.id] || []).filter(valid);
    const generic = questions.filter(isGeneric).length;
    const content = questions.length - generic;
    item.globalAuditV42 = { total: questions.length, content, generic, state: content >= 30 ? 'objetivo 30+' : content >= 20 ? 'banco sólido' : content >= 10 ? 'base real' : content ? 'insuficiente' : 'solo plantilla', target: 30 };
    return { number: Number(item.number), title: item.title, total: questions.length, content, generic, state: item.globalAuditV42.state };
  });
  const totals = allThemes.reduce((acc, item) => ({ total: acc.total + item.total, content: acc.content + item.content, generic: acc.generic + item.generic }), { total: 0, content: 0, generic: 0 });
  ope.globalTestAudit = {
    version: 'v0.44.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4400 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 120) {
      for (const pool of realPools) {
        if (!pool.questions.length) continue;
        const question = pool.questions[(round + seed) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= 55) break;
      }
      round += 1;
    }
    const ordered = shuffle(selected, seed * 4409);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v44-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v44-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v44-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, expectedMain: 50, expectedReserve: 5, minutes: 60, coveredThemes: new Set(ordered.map(question => question.auditTheme)).size, realOnly: true }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Desarrollados en profundidad los temas 12 a 16 de Diputación',
      'Añadidas 75 preguntas manuales de régimen local, provincia, entidades y contratación',
      'Eliminadas preguntas de plantilla de estos cinco temas',
      'Regenerados simulacros con diez temas de Diputación ya revisados'
    ]
  });

  window.OPOWEB_DIPUTACION_V44 = {
    version: `v${VERSION}`,
    revisedThemes: [12, 13, 14, 15, 16],
    manualQuestions: 75,
    totalDeepThemes: 10,
    officialSources: ['Ley 7/1985', 'TRLRHL', 'LOREG', 'Ley 9/2017']
  };
})();