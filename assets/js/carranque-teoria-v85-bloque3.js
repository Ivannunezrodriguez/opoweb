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
    trrl: { label: 'Texto refundido de disposiciones vigentes en materia de Régimen Local', reference: 'BOE-A-1986-9865', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-9865' },
    trebep: { label: 'Texto refundido del Estatuto Básico del Empleado Público', reference: 'BOE-A-2015-11719', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719' },
    ingreso: { label: 'Real Decreto 364/1995, ingreso, provisión y promoción', reference: 'BOE-A-1995-8729', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-8729' },
    bienes: { label: 'Reglamento de Bienes de las Entidades Locales', reference: 'BOE-A-1986-17958', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-17958' },
    contratos: { label: 'Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público', reference: 'BOE-A-2017-12902', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902' },
    rof: { label: 'Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales', reference: 'BOE-A-1986-33252', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-33252' }
  };

  const THEMES = {
    11: {
      sources: [SOURCES.constitucion, SOURCES.trebep, SOURCES.lbrl, SOURCES.trrl, SOURCES.ingreso],
      articleCoverage: [
        ['Arts. 23.2 y 103.3 CE', 'Igualdad, mérito, capacidad, estatuto funcionarial e imparcialidad.'],
        ['Arts. 1-13 TREBEP', 'Ámbito, clases de empleados y personal directivo.'],
        ['Arts. 14-54 TREBEP', 'Derechos, carrera, retribuciones, jornada, deberes y código de conducta.'],
        ['Arts. 55-68 TREBEP', 'Acceso, requisitos, órganos de selección y pérdida de la relación.'],
        ['Arts. 69-84 TREBEP', 'Planificación, oferta, provisión, movilidad y situaciones.'],
        ['Arts. 85-92 LBRL', 'Marco del personal local y funciones reservadas.'],
        ['TRRL y RD 364/1995', 'Desarrollo local y reglas supletorias de ingreso, provisión y promoción.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La función pública local se integra por personal funcionario de carrera, interino, laboral y eventual. Su régimen combina Constitución, TREBEP, legislación de régimen local, normativa autonómica y acuerdos o convenios dentro de su ámbito.`,
          `El tema exige dominar clases de personal, acceso, selección, provisión, carrera, promoción y situaciones administrativas. La regla transversal es igualdad, mérito, capacidad, publicidad, objetividad e imparcialidad.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Arts. 23.2 y 103.3 CE: acceso en igualdad y regulación legal del estatuto, mérito, capacidad, incompatibilidades y garantías de imparcialidad.`,
          `Arts. 8-13 TREBEP: clases de empleados públicos y personal directivo.`,
          `Arts. 14-20 TREBEP: derechos individuales, colectivos, carrera y evaluación del desempeño.`,
          `Arts. 55-61 TREBEP: principios, requisitos y sistemas selectivos.`,
          `Arts. 69-77 TREBEP: planificación, oferta de empleo, registros y provisión.`,
          `Arts. 78-84 TREBEP: provisión, movilidad y cooperación.`,
          `Arts. 85-92 TREBEP: situaciones administrativas de funcionarios.`,
          `Arts. 89-104 LBRL y TRRL: especialidades del personal al servicio de entidades locales.`
        ]},
        { heading: '1. Fuentes y principios del empleo público local', paragraphs: [
          `El personal funcionario local se rige por legislación estatal básica, legislación autonómica de función pública, legislación de régimen local y normas de la propia entidad dentro de competencias. El personal laboral se rige además por legislación laboral y convenio colectivo, con aplicación de preceptos del TREBEP.`,
          `Los principios son servicio a ciudadanía, igualdad, mérito y capacidad, legalidad, objetividad, profesionalidad, imparcialidad, eficacia, transparencia, evaluación, negociación y cooperación.`,
          `Las decisiones de personal necesitan plantilla, relación de puestos, presupuesto, oferta cuando proceda y procedimiento. Un acuerdo municipal no puede vulnerar norma básica ni crear privilegios de acceso.`
        ]},
        { heading: '2. Clases de empleados públicos', paragraphs: [
          `Son empleados públicos quienes desempeñan funciones retribuidas al servicio de intereses generales: funcionarios de carrera, interinos, personal laboral fijo, por tiempo indefinido o temporal, y eventual.`,
          `Funcionario de carrera está vinculado por relación estatutaria permanente para servicios profesionales retribuidos. Interino es nombrado temporalmente por razones expresamente previstas y mediante procedimientos ágiles que respeten principios.`,
          `Personal laboral se vincula por contrato de trabajo. Eventual realiza funciones de confianza o asesoramiento especial, con nombramiento y cese libres, y no puede desempeñar funciones reservadas a funcionarios ni generar mérito automático de acceso.`
        ]},
        { heading: '3. Funciones reservadas y habilitación nacional', paragraphs: [
          `El ejercicio de funciones que impliquen participación directa o indirecta en potestades públicas o salvaguarda de intereses generales corresponde exclusivamente a funcionarios en los términos legales.`,
          `En entidades locales están reservadas a funcionarios de Administración Local con habilitación de carácter nacional funciones de secretaría, fe pública y asesoramiento legal preceptivo, y control y fiscalización interna, contabilidad, tesorería y recaudación según subescala y normativa.`,
          `La reserva protege independencia y legalidad. Delegar tareas materiales no permite trasladar la responsabilidad jurídica reservada a personal no habilitado.`
        ]},
        { heading: '4. Instrumentos de ordenación', paragraphs: [
          `La plantilla presupuestaria enumera plazas dotadas de funcionarios, laborales y eventuales. Se aprueba con presupuesto y debe responder a racionalidad, economía y eficiencia.`,
          `La relación de puestos de trabajo ordena puestos, denominación, características, requisitos, grupo, complemento y forma de provisión. Plaza y puesto no son idénticos: plaza pertenece a estructura de personal; puesto es destino funcional concreto.`,
          `El registro de personal y la gestión de nóminas, situaciones y expedientes permiten trazabilidad. Las modificaciones exigen competencia, negociación cuando afecten condiciones y dotación presupuestaria.`
        ]},
        { heading: '5. Planificación y oferta de empleo público', paragraphs: [
          `La planificación analiza necesidades, efectivos, perfiles, movilidad, promoción y formación. Puede incluir planes de ordenación de recursos humanos.`,
          `La oferta de empleo público incorpora necesidades con asignación presupuestaria que deban cubrirse con nuevo ingreso. Debe publicarse y ejecutarse dentro del plazo improrrogable previsto en TREBEP.`,
          `Oferta no sustituye convocatoria. Primero existe plaza y dotación, después oferta, convocatoria, proceso, nombramiento, toma de posesión y adjudicación.`
        ]},
        { heading: '6. Requisitos de acceso', paragraphs: [
          `Requisitos generales incluyen nacionalidad en términos legales, capacidad funcional, edad mínima y no exceder jubilación forzosa, no haber sido separado ni inhabilitado y poseer titulación.`,
          `Pueden exigirse requisitos específicos objetivos y proporcionados relacionados con funciones. Deben figurar en bases y cumplirse en fecha fijada, normalmente fin de solicitudes, manteniéndose hasta toma de posesión.`,
          `El acceso de nacionales de otros Estados, reserva para personas con discapacidad y adaptación de pruebas se rigen por TREBEP y normas de desarrollo.`
        ]},
        { heading: '7. Principios y órganos de selección', paragraphs: [
          `Los procesos respetan publicidad de convocatoria y bases, transparencia, imparcialidad y profesionalidad, independencia técnica, adecuación entre pruebas y funciones, agilidad y objetividad.`,
          `Los órganos son colegiados, con composición profesional y paritaria cuando proceda. No pueden formar parte personal de elección política, interinos ni eventuales en los términos del TREBEP. La pertenencia es individual.`,
          `Abstención y recusación protegen imparcialidad. El tribunal interpreta bases, corrige, propone aprobados y no puede aprobar más aspirantes que plazas salvo previsión legal de lista complementaria.`
        ]},
        { heading: '8. Sistemas selectivos', paragraphs: [
          `Para funcionarios de carrera se utilizan oposición y concurso-oposición. El concurso puro es excepcional y requiere ley. Las pruebas deben relacionarse con tareas y pueden incluir conocimientos, supuestos, idiomas, aptitudes y periodos formativos.`,
          `En concurso-oposición, méritos no pueden determinar por sí solos resultado ni compensar no superar pruebas eliminatorias. Deben valorarse conforme a baremo publicado y acreditación en plazo.`,
          `Para personal laboral pueden utilizarse oposición, concurso-oposición o concurso de méritos con garantías. Temporalidad no permite selección arbitraria.`
        ]},
        { heading: '9. Adquisición y pérdida de la condición de funcionario', paragraphs: [
          `La condición se adquiere por superación del proceso, nombramiento publicado, acatamiento de Constitución y ordenamiento y toma de posesión dentro de plazo. Faltar a un requisito impide adquisición.`,
          `Se pierde por renuncia, pérdida de nacionalidad cuando sea requisito, jubilación total, separación firme o inhabilitación firme. La renuncia debe aceptarse y no procede si existe procedimiento disciplinario o auto de procesamiento o apertura de juicio por delito.`,
          `La rehabilitación puede concederse en supuestos y condiciones legales. La pérdida de puesto no equivale siempre a pérdida de condición.`
        ]},
        { heading: '10. Carrera profesional', paragraphs: [
          `La carrera es conjunto ordenado de oportunidades de ascenso y expectativas de progreso conforme a igualdad, mérito y capacidad. Incluye carrera horizontal, vertical, promoción interna vertical y horizontal.`,
          `La carrera horizontal progresa de grado o categoría sin cambiar de puesto; la vertical consiste en ascenso en estructura de puestos mediante provisión; la promoción interna accede a cuerpo o escala superior o diferente.`,
          `La evaluación del desempeño mide conducta y rendimiento con criterios transparentes, objetivos e imparciales y puede producir efectos en carrera, formación, provisión y retribuciones complementarias.`
        ]},
        { heading: '11. Promoción interna', paragraphs: [
          `La promoción interna facilita acceso desde un cuerpo o escala a otro cumpliendo requisitos y superando pruebas. Debe respetar igualdad, mérito y capacidad y puede reservar plazas en oferta.`,
          `Como regla se exige antigüedad mínima en subgrupo inferior, titulación requerida y superación del proceso. Pueden eximirse materias ya acreditadas cuando lo permitan las bases y normativa.`,
          `Promoción interna no es automática por antigüedad. La experiencia puede valorarse, pero no sustituye titulación ni prueba.`
        ]},
        { heading: '12. Provisión de puestos', paragraphs: [
          `Los procedimientos ordinarios son concurso y libre designación con convocatoria pública. Concurso valora méritos y capacidades conforme a bases; libre designación aprecia idoneidad para puestos determinados y permite cese motivado en términos legales.`,
          `Existen formas temporales: comisión de servicios, adscripción provisional, atribución temporal, movilidad por salud o violencia y otras. Deben tener causa, duración y requisitos.`,
          `La provisión se refiere a puestos, no ingreso en cuerpo. Un funcionario ya seleccionado participa para obtener destino. Confundir selección y provisión es error frecuente.`
        ]},
        { heading: '13. Movilidad', paragraphs: [
          `La movilidad puede ser voluntaria o forzosa y entre Administraciones mediante convenios y sistemas. Debe respetar necesidades de servicio, derechos y requisitos del puesto.`,
          `La Administración puede trasladar motivadamente por necesidades cuando proceda, respetando retribuciones y condiciones establecidas. Movilidad por violencia de género o terrorismo tiene protección especial.`,
          `La permuta y otras figuras subsisten cuando la normativa aplicable las contempla. No todo cambio de tareas constituye provisión definitiva.`
        ]},
        { heading: '14. Situaciones administrativas', paragraphs: [
          `Las básicas son servicio activo, servicios especiales, servicio en otras Administraciones, excedencia y suspensión de funciones. La legislación autonómica puede regular otras dentro del marco.`,
          `Servicio activo es desempeño normal. Servicios especiales protege determinados cargos o funciones. Servicio en otras Administraciones deriva de transferencias o movilidad. Excedencias pueden ser voluntaria por interés particular, agrupación familiar, cuidado, violencia y otras.`,
          `Suspensión priva temporalmente del ejercicio y derechos asociados; puede ser provisional o firme. Cada situación tiene efectos distintos sobre reserva, cómputo, retribuciones y reingreso.`
        ]},
        { heading: '15. Derechos, deberes e incompatibilidades', paragraphs: [
          `Derechos incluyen carrera, retribución, formación, seguridad, conciliación, vacaciones, negociación y defensa. Deben ejercerse conforme a servicio.`,
          `El código de conducta exige objetividad, integridad, neutralidad, responsabilidad, imparcialidad, confidencialidad, dedicación, transparencia, ejemplaridad, austeridad y respeto.`,
          `Las incompatibilidades pretenden evitar conflictos y garantizar dedicación e imparcialidad. Una segunda actividad requiere compatibilidad cuando proceda; no basta comunicarla.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Clases: carrera, interino, laboral y eventual. Personal directivo no es una quinta clase en la enumeración del artículo 8.`,
          `Acceso: igualdad, mérito, capacidad, publicidad e imparcialidad. Oposición y concurso-oposición son sistemas ordinarios de funcionarios.`,
          `Provisión: concurso y libre designación. Carrera y promoción no son lo mismo que selección inicial.`,
          `Situaciones básicas: activo, especiales, otras Administraciones, excedencia y suspensión.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Interino no adquiere condición de carrera por tiempo. Eventual solo confianza o asesoramiento.`,
          `Oferta no es convocatoria ni crea derecho automático. Plaza, puesto y cuerpo o escala son conceptos distintos.`,
          `Libre designación es provisión, no selección libre sin requisitos.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué diferencia existe entre funcionario interino, laboral temporal y eventual?`,
          `2. ¿Cómo se distinguen selección, promoción interna, carrera y provisión?`,
          `3. ¿Cuáles son las situaciones administrativas básicas y qué efecto general tiene cada una?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Clasifica cada supuesto por fase: planificación, acceso, nombramiento, carrera, provisión o situación. La respuesta cambia aunque intervenga la misma persona.`,
          `Memoriza clases, sistemas y situaciones; después aplica principios. Las opciones falsas suelen convertir una excepción —concurso puro, libre designación, eventual— en regla general.`
        ]}
      ],
      tree: `FUNCIÓN PÚBLICA LOCAL
├─ Clases
│  ├─ Funcionario de carrera
│  ├─ Interino
│  ├─ Laboral
│  └─ Eventual
├─ Ordenación
│  ├─ Plantilla
│  ├─ Relación de puestos
│  └─ Oferta de empleo
├─ Acceso
│  ├─ Igualdad, mérito y capacidad
│  ├─ Oposición / concurso-oposición
│  └─ Nombramiento y toma de posesión
├─ Desarrollo
│  ├─ Carrera y promoción
│  ├─ Provisión y movilidad
│  └─ Evaluación
└─ Situaciones
   ├─ Activo y servicios especiales
   ├─ Otras Administraciones y excedencia
   └─ Suspensión`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Clases', 'Carrera, interino, laboral y eventual', 'Art. 8 TREBEP'],
        ['Acceso', 'Igualdad, mérito y capacidad', 'Arts. 23.2 y 103.3 CE'],
        ['Oferta', 'Necesidades dotadas para nuevo ingreso', 'Art. 70 TREBEP'],
        ['Selección funcionarial', 'Oposición o concurso-oposición', 'Art. 61'],
        ['Carrera', 'Horizontal, vertical y promoción interna', 'Art. 16'],
        ['Provisión', 'Concurso y libre designación', 'Arts. 78-80'],
        ['Promoción', 'Requisitos, antigüedad y proceso selectivo', 'Art. 18'],
        ['Situaciones', 'Cinco situaciones básicas', 'Arts. 85-92'],
        ['Reservadas', 'Secretaría, control, tesorería y recaudación', 'Art. 92 bis LBRL']
      ]
    },
    12: {
      sources: [SOURCES.lbrl, SOURCES.trrl, SOURCES.bienes, SOURCES.constitucion],
      articleCoverage: [
        ['Arts. 79-83 LBRL', 'Clasificación, alteración, prerrogativas y bienes comunales.'],
        ['Arts. 74-87 TRRL', 'Régimen legal de bienes locales.'],
        ['Reglamento de Bienes', 'Inventario, adquisición, uso, aprovechamiento, enajenación y defensa.'],
        ['Art. 132 CE', 'Dominio público, comunales y patrimonio del Estado.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Los bienes locales se clasifican en dominio público y patrimoniales. Dentro del dominio público están uso público, servicio público y comunales. La clasificación determina inalienabilidad, imprescriptibilidad, inembargabilidad, uso y defensa.`,
          `El tema exige distinguir afectación y desafectación, inventario, adquisición, utilización, aprovechamiento, enajenación y prerrogativas de investigación, deslinde, recuperación de oficio y desahucio.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Art. 132 CE: principios del dominio público y comunales.`,
          `Arts. 79-80 LBRL: clasificación y caracteres de dominio público y comunales.`,
          `Art. 81 LBRL: alteración de calificación mediante expediente y recepción de urbanización.`,
          `Art. 82 LBRL: investigación, deslinde, recuperación de oficio y desahucio.`,
          `Art. 83 LBRL: aprovechamiento de comunales.`,
          `TRRL: adquisición, enajenación, cesión y régimen complementario.`,
          `Reglamento de Bienes: inventario, inscripción, uso y procedimientos de defensa.`
        ]},
        { heading: '1. Concepto y clasificación', paragraphs: [
          `El patrimonio de una entidad local comprende bienes, derechos y acciones. La clasificación básica es bienes de dominio público y patrimoniales.`,
          `Son de dominio público los destinados a uso público o servicio público y los comunales. Los patrimoniales no están afectados a uso o servicio y pueden constituir fuente de ingresos.`,
          `La naturaleza real depende de afectación, no solo de la etiqueta del inventario. Un error registral no cambia por sí solo la realidad jurídica.`
        ]},
        { heading: '2. Bienes de uso público', paragraphs: [
          `Son caminos, plazas, calles, paseos, parques, aguas, fuentes, puentes y obras públicas de aprovechamiento general cuya conservación corresponda a entidad.`,
          `El uso común general corresponde a todos de forma igual y no requiere título especial; el uso común especial implica intensidad o circunstancias y puede requerir licencia; el uso privativo ocupa porción excluyendo a otros y suele necesitar concesión.`,
          `La utilización debe respetar destino, convivencia, accesibilidad y ordenanzas. Una terraza en vía pública es uso especial o privativo, no propiedad del ocupante.`
        ]},
        { heading: '3. Bienes de servicio público', paragraphs: [
          `Son inmuebles y muebles directamente destinados a servicios o responsabilidades locales: casas consistoriales, mercados, colegios, centros, instalaciones y elementos afectados.`,
          `La afectación protege continuidad. Aunque el servicio se gestione indirectamente, el bien puede mantener dominio público.`,
          `El contratista o concesionario usa conforme al título y debe devolver en condiciones, sin adquirir por prescripción.`
        ]},
        { heading: '4. Bienes comunales', paragraphs: [
          `Son de dominio público y su aprovechamiento corresponde al común de vecinos. Comparten inalienabilidad, imprescriptibilidad e inembargabilidad.`,
          `El aprovechamiento se realiza preferentemente de forma simultánea o colectiva; si no, según costumbre u ordenanza y adjudicación por lotes, respetando igualdad y arraigo en términos legales.`,
          `No deben confundirse con patrimoniales municipales ni montes vecinales en mano común, que tienen régimen específico.`
        ]},
        { heading: '5. Bienes patrimoniales', paragraphs: [
          `Son los que no están destinados directamente a uso o servicio ni son comunales. Pueden arrendarse, cederse o enajenarse siguiendo competencia y procedimiento.`,
          `Están sujetos a Derecho privado en relaciones patrimoniales, pero preparación y adjudicación de actos se someten a normas administrativas.`,
          `Pueden convertirse en demaniales por afectación y dejar de serlo por desafectación. Mientras patrimoniales pueden ser embargables con límites presupuestarios y de servicio.`
        ]},
        { heading: '6. Afectación, desafectación y mutación', paragraphs: [
          `La afectación destina un bien a uso o servicio público y lo incorpora al dominio público. Puede ser expresa, implícita o por hechos y plazos previstos.`,
          `La desafectación elimina destino público mediante expediente con información y acuerdo exigidos. No basta dejar de usar temporalmente.`,
          `La mutación demanial cambia destino público sin perder naturaleza. La alteración debe reflejarse en inventario y registro.`
        ]},
        { heading: '7. Adquisición', paragraphs: [
          `Las entidades adquieren por ley, título oneroso, herencia, legado, donación, prescripción, ocupación y otros modos. La adquisición onerosa exige expediente, valoración, crédito y contratación patrimonial.`,
          `Herencias se entienden a beneficio de inventario. Donaciones con condiciones solo se aceptan si no son contrarias a interés o excesivamente gravosas.`,
          `La expropiación y cesiones urbanísticas tienen régimen específico. La adquisición debe inscribirse e inventariarse.`
        ]},
        { heading: '8. Inventario e inscripción', paragraphs: [
          `Las corporaciones deben formar inventario valorado de bienes y derechos, rectificarlo anualmente y comprobarlo al renovarse corporación.`,
          `Debe identificar naturaleza, situación, superficie, linderos, título, inscripción, destino, derechos, cargas, coste y valor. Existen inventarios separados para organismos y entidades.`,
          `Inventario no sustituye Registro de la Propiedad, pero es instrumento obligatorio. Los inmuebles y derechos reales deben inscribirse cuando proceda.`
        ]},
        { heading: '9. Uso del dominio público', paragraphs: [
          `Uso común general es libre conforme a naturaleza, ordenanza y policía. Uso común especial necesita licencia por intensidad, peligro o escasez.`,
          `Uso privativo exige concesión cuando ocupa de forma estable o transforma dominio. Las concesiones tienen plazo, canon, condiciones, garantías, reversión y causas de extinción.`,
          `Licencia es precaria y revocable por interés público según régimen; concesión otorga posición más estable pero nunca propiedad.`
        ]},
        { heading: '10. Aprovechamiento de patrimoniales', paragraphs: [
          `El arrendamiento o cesión onerosa busca rendimiento y debe adjudicarse con publicidad y concurrencia salvo excepción motivada.`,
          `La renta o canon se fija con valoración. Debe acreditarse que el bien no es necesario para uso o servicio durante plazo.`,
          `La cesión gratuita solo procede a entidades y fines previstos, con expediente, interés público y cláusula de reversión por incumplimiento.`
        ]},
        { heading: '11. Enajenación y permuta', paragraphs: [
          `Solo pueden enajenarse bienes patrimoniales; los demaniales deben desafectarse antes. Se requiere valoración técnica, competencia, expediente, depuración física y jurídica y procedimiento de adjudicación.`,
          `La subasta o concurso es regla según norma; adjudicación directa es excepcional. La permuta exige equivalencia y límites de diferencia de valor.`,
          `Enajenaciones de valor relevante pueden requerir autorización o comunicación autonómica. No se puede fraccionar para eludir competencia.`
        ]},
        { heading: '12. Investigación y deslinde', paragraphs: [
          `La entidad tiene deber de investigar situación de bienes cuando existan indicios de titularidad. El expediente recaba pruebas, audiencia y resolución.`,
          `El deslinde fija límites de inmueble cuando son imprecisos o controvertidos. No declara cuestiones complejas de propiedad reservadas a jueces, pero presume posesión resultante.`,
          `Ambas prerrogativas son ejecutivas y deben respetar procedimiento y terceros.`
        ]},
        { heading: '13. Recuperación de oficio y desahucio', paragraphs: [
          `La entidad puede recuperar por sí la posesión de dominio público en cualquier tiempo. Para patrimoniales, solo dentro del plazo de un año desde usurpación; después debe acudir a jurisdicción civil.`,
          `La recuperación exige acreditar posesión administrativa previa y perturbación, con audiencia. No es vía para resolver una disputa dominical compleja sin base.`,
          `El desahucio administrativo recupera bienes demaniales cuando extingue título de ocupación. Requiere declaración de extinción, requerimiento y ejecución.`
        ]},
        { heading: '14. Protección y responsabilidades', paragraphs: [
          `Los bienes demaniales y comunales son inalienables, imprescriptibles e inembargables. Los patrimoniales están protegidos mediante acciones civiles y administrativas.`,
          `Autoridades y empleados deben custodiar y responder por daños causados con dolo o negligencia. La omisión de defensa puede generar responsabilidad.`,
          `Las ordenanzas pueden regular uso y sanciones dentro de habilitación, además de exigir reposición e indemnización.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Dominio público: uso público, servicio público y comunales. Patrimoniales: no afectados.`,
          `Demaniales: inalienables, imprescriptibles e inembargables.`,
          `Recuperación de oficio: demaniales en cualquier tiempo; patrimoniales dentro de un año.`,
          `Inventario es obligatorio, pero no sustituye Registro de la Propiedad.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Comunales son dominio público, no patrimoniales.`,
          `Desafectación necesita expediente; el desuso no basta.`,
          `Concesión de uso no transmite propiedad. No puede enajenarse dominio público sin desafectación.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo se clasifican los bienes y qué caracteres tiene el dominio público?`,
          `2. ¿Qué diferencia existe entre uso común general, especial y privativo?`,
          `3. ¿Cuándo puede la entidad recuperar de oficio un bien demanial y uno patrimonial?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un caso identifica clasificación, afectación, título de uso, órgano, procedimiento y defensa.`,
          `Las preguntas suelen girar sobre comunales, plazo de recuperación, inventario y necesidad de desafectar antes de enajenar.`
        ]}
      ],
      tree: `BIENES LOCALES
├─ Dominio público
│  ├─ Uso público
│  ├─ Servicio público
│  └─ Comunales
├─ Patrimoniales
├─ Operaciones
│  ├─ Adquisición e inventario
│  ├─ Afectación / desafectación
│  ├─ Uso, licencia y concesión
│  ├─ Arrendamiento y cesión
│  └─ Enajenación y permuta
└─ Defensa
   ├─ Investigación y deslinde
   ├─ Recuperación de oficio
   └─ Desahucio administrativo`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Dominio público', 'Uso, servicio y comunales', 'Arts. 79-80 LBRL'],
        ['Caracteres', 'Inalienable, imprescriptible e inembargable', 'Art. 80'],
        ['Patrimonial', 'No afectado a uso o servicio', 'RBEL'],
        ['Inventario', 'Obligatorio, valorado y actualizado', 'RBEL'],
        ['Uso privativo', 'Concesión', 'RBEL'],
        ['Desafectación', 'Expediente previo a enajenación', 'Art. 81 LBRL'],
        ['Recuperación demanial', 'En cualquier tiempo', 'Art. 82'],
        ['Recuperación patrimonial', 'Dentro de un año', 'Art. 82'],
        ['Comunales', 'Aprovechamiento vecinal', 'Art. 83']
      ]
    },
    13: {
      sources: [SOURCES.contratos, SOURCES.lbrl, SOURCES.ley39, SOURCES.ley40],
      articleCoverage: [
        ['Arts. 1-27 LCSP', 'Objeto, principios, ámbito, negocios excluidos y contratos.'],
        ['Arts. 28-43 LCSP', 'Necesidad, duración, libertad de pactos, perfección y órganos.'],
        ['Arts. 99-102 LCSP', 'Objeto, lotes, presupuesto, valor estimado y precio.'],
        ['Arts. 116-120 LCSP', 'Preparación, expediente, urgencia y emergencia.'],
        ['Arts. 131-159 LCSP', 'Procedimientos de adjudicación y abierto simplificado.'],
        ['Arts. 63 y 135 LCSP', 'Perfil de contratante y anuncios.'],
        ['Disposiciones adicionales 2.ª y 3.ª LCSP', 'Competencias y especialidades de entidades locales.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La contratación local se rige por la Ley 9/2017 y principios de libertad de acceso, publicidad, transparencia, igualdad, integridad, eficiencia y mejor relación calidad-precio.`,
          `El tema exige conocer clases de contratos y selección del contratista: preparación, capacidad y solvencia, prohibiciones, procedimientos, criterios, adjudicación, formalización y especialidades locales.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Arts. 1 y 28 LCSP: principios y necesidad e idoneidad.`,
          `Arts. 12-18 LCSP: obras, concesiones, suministro, servicios y mixtos.`,
          `Arts. 61-64 LCSP: órgano, responsable, perfil e integridad.`,
          `Arts. 65-97 LCSP: aptitud, solvencia, clasificación, prohibiciones y garantías.`,
          `Arts. 99-102 LCSP: objeto, lotes, presupuesto, valor y precio.`,
          `Arts. 116-120 LCSP: expediente ordinario, urgente y emergencia.`,
          `Arts. 131-159 LCSP: procedimientos y criterios.`,
          `DA 2.ª y 3.ª: competencias y especialidades locales.`
        ]},
        { heading: '1. Principios y ámbito', paragraphs: [
          `La LCSP garantiza contratación eficiente, competencia y uso de fondos con integridad. Se aplica a poderes adjudicadores y entidades del sector público según categoría.`,
          `Los contratos de Administraciones son administrativos cuando encajan en tipos o tienen naturaleza administrativa especial; otros pueden ser privados. Preparación y adjudicación suelen someterse a LCSP.`,
          `Negocios excluidos —convenios, encomiendas, relaciones laborales, ciertos patrimoniales— deben cumplir requisitos y no pueden usarse para eludir licitación.`
        ]},
        { heading: '2. Clases de contratos', paragraphs: [
          `Obras tiene por objeto ejecución de obra o trabajos que produzcan resultado inmueble. Concesión de obras añade derecho de explotación y transferencia de riesgo operacional.`,
          `Concesión de servicios encarga gestión de servicio con riesgo operacional. Servicios son prestaciones de hacer distintas de obra y suministro.`,
          `Suministro adquiere, arrienda o compra productos, incluidos energía y determinados programas. Contrato mixto combina prestaciones vinculadas y se rige por reglas de prestación principal y ley.`
        ]},
        { heading: '3. Necesidad, idoneidad y objeto', paragraphs: [
          `Solo se celebran contratos necesarios para fines institucionales. El expediente justifica necesidad, idoneidad, procedimiento, solvencia, criterios y decisión de no dividir en lotes.`,
          `El objeto debe ser determinado. No puede fraccionarse para disminuir cuantía y eludir publicidad o procedimiento. Se divide en lotes cuando naturaleza lo permita, pudiendo limitar adjudicaciones con justificación.`,
          `La duración debe relacionarse con prestaciones y financiación, evitando dependencia indefinida. Las prórrogas deben estar previstas y acordarse expresamente; no hay prórroga tácita.`
        ]},
        { heading: '4. Presupuesto, valor estimado y precio', paragraphs: [
          `Presupuesto base de licitación es límite máximo de gasto, IVA incluido, y debe desglosar costes. Valor estimado se calcula sin IVA e incluye prórrogas, opciones, modificaciones previstas y otros conceptos.`,
          `El valor determina regulación armonizada, publicidad y procedimiento. Precio debe ser cierto, adecuado al mercado y abonarse por prestación ejecutada.`,
          `No confundir presupuesto, valor y precio de adjudicación. Una misma contratación puede tener cifras diferentes por IVA y opciones.`
        ]},
        { heading: '5. Órgano de contratación local', paragraphs: [
          `La disposición adicional segunda distribuye competencias entre alcalde o presidente y pleno según cuantía, duración y porcentaje sobre recursos ordinarios; juntas pueden actuar por delegación.`,
          `La competencia se calcula conforme a valor estimado y duración, sin fraccionar. El órgano aprueba expediente, gasto, pliegos, adjudica, formaliza y ejerce prerrogativas.`,
          `Secretaría e Intervención emiten informes y fiscalizan conforme a especialidades locales. La mesa asiste; no sustituye al órgano salvo atribución.`
        ]},
        { heading: '6. Capacidad y prohibiciones', paragraphs: [
          `Pueden contratar personas naturales o jurídicas con capacidad, habilitación, no incursas en prohibición y solvencia. Las uniones temporales concurren sin escritura previa hasta adjudicación.`,
          `Objeto social debe abarcar prestación. Prohibiciones incluyen condenas, sanciones, insolvencia, incumplimientos tributarios o sociales, conflicto y falsas declaraciones en términos legales.`,
          `La declaración responsable inicial simplifica acreditación, pero adjudicatario propuesto debe demostrar requisitos. La inscripción en registros facilita prueba.`
        ]},
        { heading: '7. Solvencia y clasificación', paragraphs: [
          `Solvencia económica acredita capacidad financiera y técnica o profesional experiencia, medios y personal. Los requisitos deben ser proporcionales y figurar en anuncio y pliegos.`,
          `Clasificación es obligatoria en contratos de obras de determinada cuantía y sustituye acreditación de solvencia en su ámbito. En servicios no es obligatoria como regla.`,
          `Puede integrarse solvencia con medios externos si se demuestra disponibilidad efectiva. Determinadas tareas críticas pueden exigirse directamente.`
        ]},
        { heading: '8. Expediente y pliegos', paragraphs: [
          `El expediente se inicia motivando necesidad. Incluye pliego administrativo, prescripciones técnicas, certificado de crédito, fiscalización, aprobación del gasto y justificaciones.`,
          `El pliego administrativo define derechos, solvencia, criterios, ejecución, penalidades, modificación y resolución; el técnico describe prestación sin favorecer marcas injustificadamente.`,
          `Los pliegos son ley del contrato para partes, pero pueden impugnarse. Una cláusula ilegal no se valida por aceptación.`
        ]},
        { heading: '9. Tramitación ordinaria, urgente y de emergencia', paragraphs: [
          `La ordinaria respeta plazos normales. La urgente exige necesidad inaplazable o aceleración por interés público, declaración motivada y reducción de plazos conforme a ley.`,
          `La emergencia procede por catástrofe, grave peligro o defensa nacional. Permite ordenar ejecución sin expediente completo, con control posterior y límite a lo imprescindible.`,
          `Urgencia no es emergencia. La falta de planificación ordinaria no justifica automáticamente ninguna.`
        ]},
        { heading: '10. Procedimientos de adjudicación', paragraphs: [
          `El abierto permite que cualquier interesado presente oferta sin negociación. El restringido selecciona candidatos y después invita.`,
          `El negociado solo procede en supuestos tasados; diálogo competitivo y asociación para innovación responden a prestaciones complejas o innovadoras.`,
          `El contrato menor tiene límites, expediente mínimo y prohibición de fraccionamiento; no es procedimiento general para necesidades recurrentes.`
        ]},
        { heading: '11. Procedimiento abierto simplificado', paragraphs: [
          `El abierto simplificado reduce cargas cuando se cumplen umbrales y condiciones. Usa criterios evaluables principalmente por fórmulas y exige inscripción registral en términos legales.`,
          `Existe modalidad abreviada para cuantías inferiores, con trámites reducidos y sin garantía definitiva en determinados casos.`,
          `Simplificación no elimina publicidad, competencia, capacidad ni prohibición de fraccionar.`
        ]},
        { heading: '12. Criterios de adjudicación', paragraphs: [
          `La adjudicación busca mejor relación calidad-precio mediante criterios económicos y cualitativos vinculados al objeto. Puede usarse uno o varios.`,
          `Los criterios automáticos se valoran con fórmulas; los sujetos a juicio de valor exigen evaluación separada y motivada. Las mejoras deben estar definidas y no alterar objeto.`,
          `Las ofertas anormalmente bajas se tramitan con audiencia y justificación; no se excluyen automáticamente. Desempate sigue criterios legales y pliego.`
        ]},
        { heading: '13. Publicidad y perfil de contratante', paragraphs: [
          `El perfil de contratante difunde memoria, pliegos, anuncios, composición de mesa, actas, informes, adjudicación, formalización y ejecución exigida. Debe garantizar integridad y acceso.`,
          `Los anuncios se publican en perfil y, según contrato, en diarios oficiales y DOUE. Los plazos se cuentan desde publicación correspondiente.`,
          `La transparencia permite control y competencia; ocultar documentos esenciales puede invalidar procedimiento.`
        ]},
        { heading: '14. Proposición, mesa y adjudicación', paragraphs: [
          `Las proposiciones son secretas hasta apertura y cada licitador presenta una salvo excepciones. Se utilizan medios electrónicos como regla.`,
          `La mesa califica documentación, abre ofertas, valora, identifica mejor y propone adjudicación. El órgano puede apartarse motivadamente.`,
          `El mejor clasificado aporta documentación y garantía. Si no cumple por causa imputable, se aplican consecuencias y se pasa al siguiente.`
        ]},
        { heading: '15. Formalización y perfección', paragraphs: [
          `Los contratos administrativos se perfeccionan con formalización, salvo menores y basados en acuerdo marco o sistema dinámico en términos legales.`,
          `La formalización no puede realizarse antes del plazo de espera cuando cabe recurso especial. Se publica y no puede alterar adjudicación.`,
          `No formalizar por causa del adjudicatario genera penalidad y posible prohibición; por causa administrativa puede dar indemnización.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Tipos: obras, concesión de obras, concesión de servicios, suministro, servicios y mixto.`,
          `Selección: capacidad, no prohibición, solvencia, procedimiento, criterios y mejor calidad-precio.`,
          `No fraccionar; justificar lotes, valor, procedimiento y criterios.`,
          `Urgente reduce plazos; emergencia permite actuación inmediata por grave situación.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Valor estimado excluye IVA; presupuesto base lo incluye.`,
          `Mesa propone; órgano adjudica. Contrato menor no sirve para necesidad periódica fraccionada.`,
          `Concesión exige transferencia de riesgo operacional; sin riesgo puede ser servicio.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo se distinguen servicios y concesión de servicios?`,
          `2. ¿Qué diferencia existe entre presupuesto base, valor estimado y precio?`,
          `3. ¿Qué pasos sigue la selección desde expediente hasta formalización?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un expediente revisa necesidad, objeto, lotes, valor, competencia, crédito, pliegos, procedimiento, solvencia, criterios, publicidad y formalización.`,
          `En preguntas locales consulta primero DA 2.ª; en selección diferencia requisito de aptitud, criterio de adjudicación y condición de ejecución.`
        ]}
      ],
      tree: `CONTRATACIÓN LOCAL
├─ Preparación
│  ├─ Necesidad e idoneidad
│  ├─ Objeto y lotes
│  ├─ Presupuesto, valor y precio
│  ├─ Crédito y pliegos
│  └─ Órgano competente
├─ Licitadores
│  ├─ Capacidad
│  ├─ No prohibición
│  └─ Solvencia o clasificación
├─ Adjudicación
│  ├─ Procedimiento
│  ├─ Publicidad
│  ├─ Criterios
│  └─ Propuesta y adjudicación
└─ Formalización y ejecución`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Tipos', 'Obras, concesiones, suministro, servicios y mixto', 'Arts. 12-18 LCSP'],
        ['Objeto', 'Determinado y sin fraccionamiento', 'Art. 99'],
        ['Valor estimado', 'Sin IVA e incluye opciones', 'Art. 101'],
        ['Necesidad', 'Justificación en expediente', 'Art. 28'],
        ['Solvencia', 'Proporcional y vinculada', 'Arts. 74-92'],
        ['Procedimiento', 'Abierto como ordinario', 'Arts. 131 y ss.'],
        ['Criterios', 'Mejor relación calidad-precio', 'Art. 145'],
        ['Mesa', 'Asiste y propone', 'Art. 326'],
        ['Competencia local', 'DA 2.ª LCSP', 'Disposición adicional 2.ª']
      ]
    },
    14: {
      sources: [SOURCES.ley39, SOURCES.lbrl, SOURCES.rof, SOURCES.ley40],
      articleCoverage: [
        ['Arts. 13-17 Ley 39/2015', 'Derechos, relación electrónica, lengua, registro y archivo.'],
        ['Arts. 26-28 Ley 39/2015', 'Documentos, copias y aportación.'],
        ['Arts. 40-46 Ley 39/2015', 'Notificaciones y publicación.'],
        ['Arts. 70-74 Ley 39/2015', 'Expediente y ordenación.'],
        ['Arts. 146-162 ROF', 'Registro, expedientes, comunicaciones y notificaciones locales.'],
        ['Arts. 162-175 ROF', 'Actas, certificaciones y documentación municipal.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El procedimiento administrativo local aplica Ley 39/2015 con especialidades de régimen local y ROF. El auxiliar gestiona registro, digitalización, expedientes, remisiones, comunicaciones y notificaciones.`,
          `Debe distinguirse asiento de entrada o salida, documento y expediente, copia auténtica, notificación y aviso, comunicación interna, publicación y certificado.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Art. 16 LPAC: registro electrónico general, lugares de presentación y recibo.`,
          `Art. 17 LPAC: archivo electrónico único de procedimientos finalizados.`,
          `Arts. 26-28 LPAC: documentos administrativos, copias y no aportación.`,
          `Arts. 40-46 LPAC: contenido, práctica, rechazo, infructuosas y publicación.`,
          `Arts. 70-74 LPAC: expediente, impulso, concentración y trámites.`,
          `ROF: especialidades documentales, libros, registros, actas y certificaciones.`,
          `Art. 3 LRJSP: funcionamiento electrónico, eficacia y servicio.`
        ]},
        { heading: '1. Especialidades del procedimiento local', paragraphs: [
          `Las entidades locales se someten a Ley 39/2015 y Ley 40/2015, LBRL, TRRL, ROF y normativa sectorial. El procedimiento común garantiza derechos y las normas locales distribuyen órganos.`,
          `La competencia puede corresponder a alcalde, pleno, junta u órgano delegado. El expediente debe acreditar informes preceptivos de Secretaría e Intervención cuando procedan.`,
          `Las especialidades no permiten reducir garantías ni inventar trámites sin cobertura.`
        ]},
        { heading: '2. Registro electrónico general', paragraphs: [
          `Cada Administración dispone de registro general para documentos recibidos y salidas oficiales. Los organismos pueden tener registros interoperables.`,
          `El asiento incluye número, fecha y hora, identificación, órgano remitente o destinatario, referencia al contenido y huella o metadatos. Se entrega recibo con copia y fecha.`,
          `El registro funciona 24 horas todos los días; el cómputo en inhábil se desplaza según reglas. Fecha y hora oficial deben publicarse.`
        ]},
        { heading: '3. Presentación de documentos', paragraphs: [
          `Puede presentarse en registro del destinatario, otros registros interoperables, Correos conforme a norma, representaciones diplomáticas, oficinas consulares, oficinas de asistencia y lugares legales.`,
          `Las personas obligadas deben usar medios electrónicos. Si presentan presencialmente, se requiere subsanación electrónica y la fecha será la de subsanación en los términos legales.`,
          `No se exigen originales salvo excepción. Las oficinas digitalizan y devuelven originales, salvo custodia necesaria o objetos no digitalizables.`
        ]},
        { heading: '4. Registro de salida y comunicaciones oficiales', paragraphs: [
          `Las salidas deben asentarse cuando documenten comunicación oficial. El asiento acredita expedición, no necesariamente recepción.`,
          `Las comunicaciones entre órganos y Administraciones son electrónicas. Deben identificar expediente, órgano, firmante, destinatario y documentos.`,
          `La remisión por correo informal no sustituye canal oficial cuando se requiere constancia, seguridad o interoperabilidad.`
        ]},
        { heading: '5. Oficinas de asistencia', paragraphs: [
          `Las oficinas reciben, digitalizan, expiden copias auténticas cuando habilitadas, ayudan en identificación y firma y facilitan códigos y recibos.`,
          `Un funcionario habilitado puede identificar o firmar por persona no obligada que carece de medios, con consentimiento expreso y constancia.`,
          `La asistencia no implica asesorar jurídicamente ni decidir admisión material; debe informar de requisitos y canales.`
        ]},
        { heading: '6. Requisitos de solicitudes', paragraphs: [
          `La solicitud incluye identidad, representación, medio de notificación, hechos, razones, petición, lugar, fecha, firma y órgano. Puede usarse modelo obligatorio en procedimientos masivos.`,
          `Si falta requisito se requiere subsanación diez días, ampliable cinco salvo selectivos o concurrencia. Debe advertirse desistimiento.`,
          `El registro no puede rechazar por valoración de fondo; recibe y el órgano instructor decide, salvo formatos o objetos excluidos con canal alternativo.`
        ]},
        { heading: '7. Documentos administrativos y copias', paragraphs: [
          `Documento administrativo válido contiene información en soporte electrónico, identificación, referencia temporal, metadatos y firmas cuando proceda.`,
          `Copia auténtica garantiza identidad con original y tiene misma validez. Debe indicarse condición de copia y órgano.`,
          `Una simple digitalización puede ser copia electrónica aportada, pero no siempre copia auténtica. El cotejo y emisión requieren habilitación.`
        ]},
        { heading: '8. No aportar documentos ya disponibles', paragraphs: [
          `El interesado no aporta documentos elaborados por Administración o ya aportados, indicando cuándo y dónde. La Administración consulta electrónicamente salvo oposición cuando sea posible.`,
          `Si no puede recabarlos, puede pedir aportación. No debe solicitarse repetidamente por comodidad.`,
          `En datos tributarios o especialmente protegidos puede existir régimen de consentimiento o autorización específica.`
        ]},
        { heading: '9. Expediente electrónico', paragraphs: [
          `Es conjunto ordenado de documentos y actuaciones que fundamentan resolución y ejecución. Se forma por agregación ordenada e índice autenticado.`,
          `No incluye información auxiliar, borradores, notas o comunicaciones internas, salvo informes solicitados antes de resolver.`,
          `La foliación electrónica, índice y metadatos garantizan integridad. Al remitir se envía expediente completo, autentificado y reutilizable.`
        ]},
        { heading: '10. Impulso y ordenación', paragraphs: [
          `El procedimiento se impulsa de oficio y por orden de incoación, salvo motivación. Responsables adoptan medidas para evitar retrasos.`,
          `Se concentran trámites compatibles y se realizan simultáneamente. Cuestiones incidentales no suspenden salvo recusación.`,
          `El auxiliar controla plazos, incorpora documentos, practica comunicaciones y prepara trámites, sin sustituir decisión del órgano.`
        ]},
        { heading: '11. Notificación: contenido', paragraphs: [
          `Se notifica todo acto que afecte derechos o intereses. Debe cursarse dentro de diez días desde que se dictó.`,
          `Incluye texto íntegro, si pone fin a vía, recursos, órgano y plazo. Una indicación errónea no cambia recurso real, pero puede afectar plazos y confianza.`,
          `La notificación defectuosa produce efectos cuando interesado actúa revelando conocimiento o interpone recurso.`
        ]},
        { heading: '12. Notificación electrónica', paragraphs: [
          `Es preferente y obligatoria para sujetos del artículo 14 o quienes la elijan. Se practica por comparecencia en sede, dirección habilitada única o sistemas válidos.`,
          `Se entiende practicada al acceder. Si pasan diez días naturales desde puesta a disposición sin acceso, se rechaza salvo imposibilidad.`,
          `Se envía aviso a correo o dispositivo, pero su ausencia no invalida. Debe quedar evidencia de puesta a disposición, acceso o rechazo.`
        ]},
        { heading: '13. Notificación en papel e infructuosa', paragraphs: [
          `Cuando se practica en domicilio y no está interesado, puede recibir persona mayor de catorce años identificada. Si nadie, se intenta una segunda vez en hora distinta dentro de tres días.`,
          `Si primer intento fue antes de quince horas, segundo después y viceversa, con diferencia mínima legal.`,
          `Si resulta infructuosa, se publica anuncio en BOE mediante Tablón Edictal Único, sin perjuicio de anuncios complementarios.`
        ]},
        { heading: '14. Publicación', paragraphs: [
          `La publicación sustituye notificación cuando destinatarios indeterminados, procedimiento selectivo o concurrencia o notificación individual insuficiente.`,
          `Debe contener elementos de notificación, protegiendo datos. En selectivos se publica en medio indicado en convocatoria y otros no generan efectos si bases lo fijan.`,
          `Cuando publicación íntegra lesiona derechos, puede publicarse indicación somera y lugar de comparecencia.`
        ]},
        { heading: '15. Comunicaciones internas, actas y certificados', paragraphs: [
          `Las comunicaciones internas impulsan expediente y deben incorporarse si tienen relevancia decisoria. Informes se firman e identifican.`,
          `Las actas documentan sesiones colegiadas; los certificados acreditan acuerdos con fe pública de Secretaría y visto bueno cuando procede.`,
          `Certificar no modifica acuerdo ni sustituye acta. Puede emitirse antes de aprobar acta haciendo constar reserva, según ROF.`
        ]},
        { heading: '16. Archivo y conservación', paragraphs: [
          `Procedimientos finalizados se conservan en archivo electrónico único, garantizando autenticidad, integridad, accesibilidad, confidencialidad y conservación.`,
          `Las series documentales se someten a calendarios de conservación y eliminación autorizada. No se borra por falta de espacio.`,
          `Protección de datos limita acceso y exige medidas. Transparencia no convierte todo expediente en público ilimitado.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Registro recibe y deja constancia; órgano instructor admite y decide.`,
          `Notificación: texto íntegro y recursos; electrónica se rechaza tras diez días naturales sin acceso.`,
          `Aviso no es notificación y su ausencia no invalida.`,
          `Expediente es ordenado e indexado; copia auténtica no equivale a simple escaneo.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Presentar sábado por registro electrónico es posible, pero el cómputo se desplaza.`,
          `Persona obligada que presenta papel debe subsanar electrónicamente.`,
          `Registro de salida no acredita recepción; aviso de correo no es notificación.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Dónde puede presentarse un documento y qué recibo debe obtenerse?`,
          `2. ¿Qué diferencias existen entre digitalización, copia auténtica, documento y expediente?`,
          `3. ¿Cómo se practican una notificación electrónica, una en papel y una infructuosa?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En supuestos crea línea temporal de registro, subsanación, instrucción, resolución, puesta a disposición, acceso o rechazo y recurso.`,
          `Distingue soporte y efecto jurídico. Papel o electrónico no determina por sí solo validez; importan sujeto, canal, firma, integridad y constancia.`
        ]}
      ],
      tree: `PROCEDIMIENTO LOCAL Y DOCUMENTOS
├─ Registro
│  ├─ Entrada y salida
│  ├─ Presentación presencial/electrónica
│  └─ Oficinas de asistencia
├─ Documentos
│  ├─ Original y copia auténtica
│  ├─ No aportación repetida
│  └─ Expediente electrónico e índice
├─ Tramitación
│  ├─ Impulso, orden y plazos
│  └─ Informes y comunicaciones
└─ Notificación
   ├─ Electrónica
   ├─ Papel
   ├─ Infructuosa en BOE
   └─ Publicación sustitutiva`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Registro', 'Electrónico general y 24/7', 'Art. 16 LPAC'],
        ['Presentación', 'Registros, Correos, consulados y oficinas', 'Art. 16.4'],
        ['Subsanación', 'Diez días', 'Art. 68'],
        ['Copia auténtica', 'Misma validez que original', 'Art. 27'],
        ['Expediente', 'Ordenado, electrónico e indexado', 'Art. 70'],
        ['Notificación', 'Texto íntegro y recursos', 'Art. 40'],
        ['Electrónica', 'Rechazo tras diez días naturales sin acceso', 'Art. 43'],
        ['Papel', 'Dos intentos con franja distinta', 'Art. 42'],
        ['Infructuosa', 'Anuncio en BOE', 'Art. 44']
      ]
    },
    15: {
      sources: [SOURCES.constitucion, SOURCES.lbrl, SOURCES.rof, SOURCES.ley40],
      articleCoverage: [
        ['Arts. 19-24 LBRL', 'Ayuntamiento, alcalde, tenientes, pleno, junta y órganos complementarios.'],
        ['Arts. 25-27 y 21-22 LBRL', 'Competencias municipales y de alcalde y pleno.'],
        ['Arts. 46-54 LBRL', 'Funcionamiento, sesiones, acuerdos, actos y responsabilidad.'],
        ['Arts. 77-113 ROF', 'Convocatorias, orden del día, debates, votaciones y control.'],
        ['Arts. 134-138 ROF', 'Comisiones informativas.'],
        ['Arts. 109-113 y 198-207 ROF', 'Actas, libros, certificaciones y comunicaciones.'],
        ['Arts. 15-18 Ley 40/2015', 'Régimen básico de órganos colegiados, con especialidades locales.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El gobierno municipal corresponde al Ayuntamiento, integrado por alcalde y concejales. Los órganos necesarios son alcalde, tenientes y pleno; la junta de gobierno existe según población o acuerdo. Comisiones y otros son complementarios.`,
          `El tema exige conocer competencias, sesiones, convocatoria, orden del día, debates, votación, actas y certificados. En un supuesto debe comprobarse órgano, quórum, mayoría y documentación.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Arts. 19-20 LBRL: organización municipal y órganos necesarios.`,
          `Art. 21 LBRL: atribuciones del alcalde y delegaciones.`,
          `Art. 22 LBRL: atribuciones del pleno y materias no delegables.`,
          `Art. 23 LBRL: junta de gobierno y tenientes.`,
          `Art. 46 LBRL: sesiones, periodicidad, convocatoria, quórum y votación.`,
          `Art. 47 LBRL: mayorías.`,
          `Arts. 77-113 ROF: preparación y desarrollo de sesiones.`,
          `ROF: actas, libros y certificaciones.`
        ]},
        { heading: '1. Ayuntamiento y régimen organizativo', paragraphs: [
          `El gobierno y administración municipal, salvo concejo abierto, corresponde al Ayuntamiento formado por alcalde y concejales. Los concejales son elegidos y el alcalde según legislación electoral.`,
          `La organización combina órganos necesarios estatales, complementarios regulados por comunidad y municipio y régimen de gran población cuando procede. Carranque aplica régimen común.`,
          `El reglamento orgánico puede desarrollar sin contradecir LBRL y ROF básico o supletorio.`
        ]},
        { heading: '2. Alcalde', paragraphs: [
          `El alcalde dirige gobierno y administración, representa Ayuntamiento, convoca y preside pleno y junta, dirige servicios y personal, dicta bandos, ejecuta presupuesto y ejerce acciones y competencias no atribuidas.`,
          `Puede delegar muchas atribuciones en junta, tenientes o concejales, salvo las declaradas indelegables. La delegación debe formalizarse, publicarse y respetar alcance.`,
          `En urgencia puede adoptar medidas por catástrofe o grave riesgo dando cuenta inmediata al pleno.`
        ]},
        { heading: '3. Tenientes de alcalde', paragraphs: [
          `Son nombrados y cesados libremente por alcalde entre miembros de junta o, donde no existe, concejales. Sustituyen por orden en vacante, ausencia o enfermedad.`,
          `La sustitución opera conforme a resolución y ROF. No convierte al teniente en alcalde permanente ni altera titularidad.`,
          `Pueden recibir delegaciones específicas. Deben distinguirse sustitución automática y delegación de atribuciones.`
        ]},
        { heading: '4. Pleno', paragraphs: [
          `El pleno está integrado por todos los concejales y presidido por alcalde. Controla y fiscaliza órganos de gobierno y adopta decisiones normativas, organizativas, presupuestarias y patrimoniales.`,
          `Aprueba reglamento orgánico, ordenanzas, presupuesto, plantilla, formas de gestión, alteración del término, planes, operaciones y otras atribuciones.`,
          `Algunas materias son indelegables: control, moción de censura, cuestión de confianza, ordenanzas, presupuesto y las que exijan mayoría especial, entre otras.`
        ]},
        { heading: '5. Junta de Gobierno Local', paragraphs: [
          `Existe en municipios de más de 5.000 habitantes y en los de menos si reglamento o pleno lo acuerda. Se integra por alcalde y número de concejales no superior a un tercio del número legal.`,
          `Asiste permanentemente al alcalde y ejerce atribuciones delegadas por alcalde o pleno y las legales.`,
          `Sus sesiones no son públicas como regla. Debe levantar acta y respetar convocatoria, quórum y abstención.`
        ]},
        { heading: '6. Comisiones informativas y órganos complementarios', paragraphs: [
          `Las comisiones estudian, informan o consultan asuntos que irán al pleno y siguen gestión. En municipios donde existan, todos los grupos participan proporcionalmente.`,
          `La Comisión Especial de Cuentas examina cuentas antes del pleno y es necesaria. Puede actuar como informativa de hacienda si reglamento lo prevé.`,
          `Consejos sectoriales, juntas de distrito y órganos de participación se crean por reglamento dentro de competencias y sin menoscabar órganos decisorios.`
        ]},
        { heading: '7. Clases y periodicidad de sesiones', paragraphs: [
          `Las sesiones del pleno son ordinarias, extraordinarias y extraordinarias urgentes. Las ordinarias tienen periodicidad fijada por ley según población y acuerdo.`,
          `Las extraordinarias se convocan por alcalde o a solicitud de cuarta parte legal de miembros, con límites por concejal y reglas de convocatoria automática si alcalde no convoca.`,
          `Las urgentes requieren justificar y ratificar urgencia como primer punto. Si no se ratifica, se levanta sesión.`
        ]},
        { heading: '8. Convocatoria', paragraphs: [
          `La convocatoria corresponde al presidente y se notifica con orden del día y borradores de actas. Las ordinarias y extraordinarias deben convocarse con dos días hábiles de antelación salvo urgentes.`,
          `Desde convocatoria, expedientes completos están a disposición de miembros en Secretaría, con acceso y copias en condiciones.`,
          `Una convocatoria defectuosa puede invalidar acuerdos si causa indefensión o afecta formación de voluntad. La asistencia puede ser presencial o a distancia si normativa y medios permiten.`
        ]},
        { heading: '9. Orden del día', paragraphs: [
          `Lo fija alcalde asistido por Secretaría. Solo se incluyen asuntos previamente dictaminados por comisión, salvo urgencia ratificada, y aquellos que cumplan preparación.`,
          `No se adoptan acuerdos sobre asuntos no incluidos salvo especial y previa declaración de urgencia con mayoría exigida.`,
          `La parte resolutiva se distingue de control, ruegos y preguntas. Las mociones siguen reglamento y ROF.`
        ]},
        { heading: '10. Constitución y quórum', paragraphs: [
          `El pleno se constituye con un tercio del número legal, nunca menos de tres, y requiere presidente y secretario o sustitutos. El quórum se mantiene.`,
          `Si no se alcanza, se celebra segunda convocatoria según norma. Los miembros deben permanecer o su ausencia afecta votación, no acuerdos ya adoptados.`,
          `Para asuntos con mayoría especial se necesita presencia suficiente para alcanzarla y, cuando ley, informe previo.`
        ]},
        { heading: '11. Publicidad y participación', paragraphs: [
          `Las sesiones plenarias son públicas, salvo debate y votación secretos por afectar derecho fundamental y acordarse mayoría absoluta.`,
          `Las de junta no son públicas, sin perjuicio de publicidad de acuerdos y participación en órganos.`,
          `El público no interviene durante sesión salvo mecanismos previos o posteriores regulados. El presidente mantiene orden y puede expulsar tras advertencia.`
        ]},
        { heading: '12. Debates', paragraphs: [
          `El asunto se lee o da por leído; comisión o proponente explica; grupos intervienen y presidente ordena turnos. Se pueden plantear enmiendas, votos particulares y retirada o dejar sobre mesa.`,
          `El presidente dirige y cierra debate, llama al orden y garantiza respeto. Secretaría e Intervención intervienen para asesoramiento cuando requeridas.`,
          `Las deliberaciones deben ceñirse al asunto. Alterar sustancialmente propuesta sin informes puede exigir dejarla sobre mesa.`
        ]},
        { heading: '13. Abstención y recusación', paragraphs: [
          `Concejales deben abstenerse cuando concurra causa de legislación de régimen jurídico o incompatibilidad. Deben abandonar salón durante debate y votación cuando corresponda, salvo asuntos de condición corporativa.`,
          `No abstenerse puede afectar validez si su voto fue determinante y generar responsabilidad.`,
          `La recusación se plantea y resuelve conforme a Ley 40/2015. El interés político general no es por sí interés personal invalidante.`
        ]},
        { heading: '14. Votaciones y mayorías', paragraphs: [
          `La votación ordinaria es por signos; nominal mediante llamamiento; secreta por papeleta en casos. Cada miembro vota afirmativo o negativo o se abstiene.`,
          `La regla es mayoría simple de presentes: más afirmativos que negativos. Empate se repite y decide voto de calidad del presidente.`,
          `Mayoría absoluta del número legal se exige para materias del artículo 47. Mayorías de dos tercios u otras se aplican en supuestos específicos.`
        ]},
        { heading: '15. Control del gobierno', paragraphs: [
          `El pleno controla mediante preguntas, ruegos, comparecencias, mociones y conocimiento de resoluciones. La moción de censura y cuestión de confianza se rigen por régimen electoral.`,
          `Los grupos tienen derecho a información necesaria. El alcalde puede denegar motivadamente en supuestos legales, sin vaciar función de control.`,
          `Los acuerdos de junta y decretos se ponen en conocimiento del pleno según periodicidad.`
        ]},
        { heading: '16. Acta', paragraphs: [
          `El acta documenta lugar, fecha, asistentes, ausentes, carácter, asuntos, opiniones sintetizadas, votaciones, acuerdos y hora. La redacta Secretaría.`,
          `Se somete a aprobación en sesión siguiente; pueden rectificarse errores, no cambiar fondo de acuerdos. El acta aprobada se transcribe al libro y firma.`,
          `La grabación puede ayudar y, si se integra con garantías, complementar acta según Ley 40/2015, pero el régimen local exige contenidos y fe pública.`
        ]},
        { heading: '17. Certificados de acuerdos', paragraphs: [
          `Secretaría expide certificaciones de actos, acuerdos y antecedentes con visto bueno del presidente cuando proceda. Deben reproducir fielmente.`,
          `Pueden expedirse antes de aprobar acta haciendo constar expresamente la salvedad, a reserva de términos de aprobación.`,
          `Certificado acredita acuerdo, no lo crea. Si acuerdo requiere publicación, notificación o formalización, certificado no sustituye esos requisitos.`
        ]},
        { heading: '18. Ejecutividad e impugnación', paragraphs: [
          `Los actos y acuerdos son inmediatamente ejecutivos salvo suspensión o excepción. Se notifican o publican y pueden recurrirse.`,
          `Concejales que votaron contra pueden impugnar acuerdos; Estado y comunidad pueden hacerlo en supuestos LBRL.`,
          `Responsabilidad puede ser civil, penal, administrativa o contable. Los miembros responden por acuerdos que votaron favorablemente en términos legales.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Órganos necesarios: alcalde, tenientes y pleno; junta según población o acuerdo; Comisión Especial de Cuentas.`,
          `Convocatoria ordinaria: dos días hábiles; pleno: un tercio y mínimo tres, con presidente y secretario.`,
          `Mayoría simple es regla; absoluta para materias tasadas; voto de calidad resuelve empate tras repetición.`,
          `Acta documenta; certificado acredita; publicación o notificación produce efectos.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Pleno es público; junta no como regla. Comisión informa pero no sustituye al pleno.`,
          `Asunto fuera del orden requiere declaración previa de urgencia.`,
          `Aprobar acta no reabre ni cambia acuerdos; certificado previo debe expresar reserva.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué órganos son necesarios y cuándo existe junta de gobierno?`,
          `2. ¿Qué requisitos tienen convocatoria, orden del día y constitución del pleno?`,
          `3. ¿Cómo se distinguen acta, acuerdo, certificado, publicación y notificación?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un supuesto de sesión revisa órgano, convocatoria, plazo, expediente, orden, quórum, abstención, mayoría, acta y eficacia.`,
          `Para competencias, memoriza bloques de alcalde y pleno y materias indelegables. Si duda, pregunta quién dirige y ejecuta frente a quién norma, presupuesta y controla.`
        ]}
      ],
      tree: `ORGANIZACIÓN Y FUNCIONAMIENTO MUNICIPAL
├─ Órganos
│  ├─ Alcalde y tenientes
│  ├─ Pleno
│  ├─ Junta de Gobierno
│  ├─ Comisiones
│  └─ Especial de Cuentas
├─ Sesiones
│  ├─ Ordinarias / extraordinarias / urgentes
│  ├─ Convocatoria y orden del día
│  ├─ Quórum y debates
│  └─ Votaciones y mayorías
├─ Documentación
│  ├─ Acta
│  ├─ Libro de actas
│  └─ Certificados
└─ Control, ejecutividad e impugnación`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Alcalde', 'Dirección, representación y ejecución', 'Art. 21 LBRL'],
        ['Pleno', 'Norma, presupuesto y control', 'Art. 22'],
        ['Junta', 'Asistencia y competencias delegadas', 'Art. 23'],
        ['Convocatoria', 'Dos días hábiles salvo urgente', 'Art. 46'],
        ['Quórum', 'Un tercio, mínimo tres, presidente y secretario', 'Art. 46'],
        ['Mayoría', 'Simple como regla', 'Art. 47'],
        ['Sesión pública', 'Pleno sí; excepciones motivadas', 'Art. 70'],
        ['Acta', 'Documenta sesión y acuerdos', 'ROF'],
        ['Certificado', 'Lo expide Secretaría; puede ser previo con reserva', 'ROF']
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
      block: 'Carranque 11-15'
    };
    theme.studyWarnings = [
      'Revisar modificaciones normativas publicadas antes del examen.',
      'Aplicar normativa autonómica y reglamentos orgánicos cuando completen el marco básico.'
    ];
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v85 || { completedThemes: [] };
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

  window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE3 = {
    version: 'v0.85.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v85.pendingThemes
  };
})();
