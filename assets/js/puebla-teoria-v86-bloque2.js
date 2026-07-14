(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const source = {
    empleoCLM: { label: 'Ley 4/2011, de 10 de marzo, del Empleo Público de Castilla-La Mancha', reference: 'BOE-A-2011-7752', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752', reviewedAt: REVIEW_DATE },
    trebep: { label: 'Texto refundido del Estatuto Básico del Empleado Público', reference: 'BOE-A-2015-11719', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719', reviewedAt: REVIEW_DATE },
    prl: { label: 'Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales', reference: 'BOE-A-1995-24292', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292', reviewedAt: REVIEW_DATE },
    serviciosPrevencion: { label: 'Real Decreto 39/1997, Reglamento de los Servicios de Prevención', reference: 'BOE-A-1997-1853', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853', reviewedAt: REVIEW_DATE },
    igualdadCLM: { label: 'Ley 12/2010, de 18 de noviembre, de igualdad entre mujeres y hombres de Castilla-La Mancha', reference: 'BOE-A-2011-2708', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708', reviewedAt: REVIEW_DATE },
    igualdadEstado: { label: 'Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres', reference: 'BOE-A-2007-6115', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115', reviewedAt: REVIEW_DATE },
    lopdgdd: { label: 'Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales', reference: 'BOE-A-2018-16673', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673', reviewedAt: REVIEW_DATE },
    rgpd: { label: 'Reglamento (UE) 2016/679, Reglamento General de Protección de Datos', reference: 'DOUE-L-2016-80807', url: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807', reviewedAt: REVIEW_DATE },
    lgt: { label: 'Ley 58/2003, de 17 de diciembre, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186', reviewedAt: REVIEW_DATE },
    haciendas: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214', reviewedAt: REVIEW_DATE },
    recaudacion: { label: 'Real Decreto 939/2005, Reglamento General de Recaudación', reference: 'BOE-A-2005-14803', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803', reviewedAt: REVIEW_DATE }
  };

  const THEORY = {
    6: {
      sources: [source.empleoCLM, source.trebep],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Ley 4/2011 establece el marco general del empleo público de Castilla-La Mancha y se aplica, con las especialidades de la legislación básica y local, al personal de las administraciones públicas de la comunidad. Para este tema debe dominarse quién forma parte del personal público, cómo se ordenan y cubren los puestos, qué modalidades de carrera existen, cómo funciona la promoción interna y cuáles son las reglas de selección y oferta de empleo público.',
          'El hilo conductor es la diferencia entre plaza, cuerpo o escala y puesto de trabajo. La selección permite acceder a un cuerpo, escala o categoría; la provisión adjudica un puesto a quien ya tiene la condición requerida; la carrera permite progresar profesionalmente; la promoción interna supone acceder a otro cuerpo o escala; y la oferta de empleo público programa las necesidades de nuevo ingreso que cuentan con dotación presupuestaria.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Ley 4/2011 desarrolla en Castilla-La Mancha las bases del Estatuto Básico del Empleado Público. Su ámbito alcanza a la Administración de la Junta, entidades locales de Castilla-La Mancha y sus organismos en los términos de la propia ley, sin desplazar las especialidades que establezcan la legislación básica estatal, el régimen local y las normas sectoriales.',
          'La ley distingue personal funcionario de carrera, funcionario interino, personal laboral y personal eventual, y regula también el personal directivo profesional. Las funciones que impliquen participación directa o indirecta en potestades públicas o salvaguardia de intereses generales quedan reservadas al personal funcionario conforme a la ley.',
          'Los artículos dedicados a planificación y ordenación regulan planes de recursos humanos, plantillas, relaciones de puestos, registros y oferta de empleo. La oferta debe publicarse, identificar necesidades con asignación presupuestaria y ejecutarse dentro del plazo legal. No equivale a convocatoria ni concede por sí sola derecho a ser nombrado.',
          'La provisión ordinaria se realiza por concurso o libre designación en los puestos que legalmente puedan cubrirse así. La carrera puede ser horizontal o vertical y se apoya en evaluación objetiva. La promoción interna se articula mediante proceso selectivo y exige los requisitos de acceso, titulación y antigüedad que correspondan.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Personal funcionario de carrera es quien, en virtud de nombramiento legal, está vinculado a una Administración por relación estatutaria regulada por Derecho administrativo para prestar servicios profesionales retribuidos de carácter permanente. El interino es nombrado temporalmente por razones expresamente previstas: vacante que no pueda cubrirse de inmediato, sustitución transitoria, programa temporal o acumulación de tareas dentro de los límites legales. La temporalidad no transforma automáticamente al interino en funcionario de carrera.',
          'El personal laboral presta servicios mediante contrato de trabajo y puede ser fijo, por tiempo indefinido o temporal. Su régimen combina legislación laboral, convenio y preceptos del empleo público que resulten aplicables. El eventual desempeña exclusivamente funciones de confianza o asesoramiento especial; su nombramiento y cese son libres, cesa cuando lo hace la autoridad a la que presta confianza y sus servicios no constituyen mérito privilegiado para acceder a la función pública.',
          'La ordenación comienza por analizar necesidades. Los planes de ordenación de recursos humanos pueden prever redistribución de efectivos, formación, movilidad, promoción, modificaciones de estructuras y medidas de dimensionamiento. La plantilla recoge las plazas dotadas presupuestariamente; la relación de puestos de trabajo ordena los puestos concretos, con denominación, funciones, requisitos, grupo, sistema de provisión y complementos. Una plaza vacante no significa que exista libertad para elegir a cualquier persona: debe utilizarse el procedimiento legal.',
          'La oferta de empleo público incluye las plazas dotadas cuya cobertura requiere incorporación de nuevo personal. Se aprueba y publica anualmente cuando existan necesidades, debe respetar la tasa o límites presupuestarios aplicables y se ejecuta mediante convocatorias. Las bases vinculan a Administración, tribunal y aspirantes. La convocatoria debe respetar igualdad, mérito, capacidad, publicidad, transparencia, imparcialidad, profesionalidad, independencia técnica, adecuación de las pruebas y agilidad.',
          'Para acceder se exige, con carácter general, nacionalidad en los términos legales, capacidad funcional, edad, no haber sido separado ni inhabilitado y titulación. Los requisitos específicos deben guardar relación objetiva y proporcionada con las funciones. Las personas con discapacidad participan en igualdad y pueden solicitar adaptaciones razonables de tiempo y medios.',
          'Los órganos de selección son colegiados y profesionales. Sus miembros actúan a título individual y deben abstenerse si concurre causa legal; los aspirantes pueden recusarlos. No pueden integrarse de forma que se comprometa la imparcialidad. El órgano aplica las bases, valora las pruebas, resuelve incidencias dentro de su competencia y propone el nombramiento, sin aprobar más personas que plazas salvo la posibilidad legal de relación complementaria.',
          'Los sistemas selectivos ordinarios del personal funcionario son oposición y concurso-oposición. El concurso de méritos solo procede excepcionalmente cuando una ley lo autoriza. En el concurso-oposición, la fase de méritos no puede utilizarse para superar ejercicios eliminatorios ni alcanzar un peso que desvirtúe las pruebas. Para personal laboral pueden emplearse oposición, concurso-oposición o concurso conforme a la normativa y a los mismos principios de acceso.',
          'La provisión se refiere a puestos ya existentes. El concurso valora méritos, capacidades y, en su caso, resultados de evaluación conforme a convocatoria. La libre designación exige convocatoria pública y solo se usa en puestos determinados por especial responsabilidad o confianza profesional; no significa nombramiento arbitrario, pues la persona debe reunir requisitos y la decisión debe ajustarse al interés público. Existen formas provisionales como comisión de servicios, adscripción provisional o atribución temporal, sujetas a causa y duración.',
          'La carrera horizontal permite progresar de grado, categoría o tramo sin cambiar de puesto, valorando trayectoria, calidad, conocimientos y evaluación. La carrera vertical consiste en ascender en la estructura de puestos mediante procedimientos de provisión. La evaluación del desempeño debe aplicarse con criterios transparentes, objetivos, imparciales y no discriminatorios y puede producir efectos en carrera, formación, provisión y retribuciones complementarias.',
          'La promoción interna vertical permite acceder desde un cuerpo o escala de un subgrupo a otro superior; la horizontal permite acceder a otro cuerpo o escala del mismo subgrupo. La Ley de Castilla-La Mancha articula la promoción mediante concurso-oposición y convocatorias independientes, con respeto a igualdad, mérito y capacidad. La antigüedad o experiencia no bastan: deben cumplirse titulación, requisitos y superarse las pruebas. Pueden exceptuarse contenidos ya acreditados cuando lo permita la convocatoria.',
          'Oferta, convocatoria, selección, nombramiento y toma de posesión son fases distintas. La oferta anuncia necesidades; la convocatoria abre el proceso; el tribunal propone; el órgano competente nombra; y la adquisición de la condición exige toma de posesión y demás requisitos. En un supuesto práctico conviene identificar en qué fase se produce la incidencia antes de elegir la norma aplicable.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Clases de personal: funcionario de carrera, interino, laboral y eventual; el directivo profesional tiene regulación específica. Selección es ingreso; provisión es adjudicación de puestos; carrera es progreso; promoción interna es acceso a otro cuerpo o escala. Oferta de empleo no es convocatoria. Provisión ordinaria: concurso y libre designación. Selección funcionarial ordinaria: oposición y concurso-oposición. Todo el sistema se rige por igualdad, mérito, capacidad, publicidad, imparcialidad y profesionalidad.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'El personal eventual solo realiza confianza o asesoramiento especial. La libre designación es un sistema de provisión, no una forma libre de ingreso. La oferta de empleo público contiene necesidades dotadas, pero necesita convocatorias posteriores. La carrera horizontal no exige cambiar de puesto. La promoción interna no se obtiene solo por antigüedad. El concurso puro de acceso funcionarial es excepcional y requiere cobertura legal.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cómo se diferencian selección, provisión, carrera y promoción interna? ¿Qué clases de personal público reconoce la ley y qué caracteriza a cada una? ¿Qué función cumplen la oferta de empleo público y la relación de puestos de trabajo?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Clasifica primero la situación: incorporación inicial, destino, progreso, movilidad o temporalidad. Después identifica instrumento y órgano. En las opciones de respuesta desconfía de expresiones absolutas como “siempre”, “automáticamente” o “libremente”, porque suelen convertir una excepción en regla. Memoriza las parejas oposición/concurso-oposición, concurso/libre designación y carrera horizontal/vertical.'
        ]}
      ],
      tree: 'EMPLEO PÚBLICO DE CASTILLA-LA MANCHA\n├─ Personal\n│  ├─ Funcionario de carrera e interino\n│  ├─ Laboral\n│  ├─ Eventual\n│  └─ Directivo profesional\n├─ Ordenación\n│  ├─ Plantilla y RPT\n│  ├─ Planificación y registros\n│  └─ Oferta de empleo público\n├─ Selección\n│  ├─ Igualdad, mérito y capacidad\n│  └─ Oposición / concurso-oposición\n├─ Provisión\n│  ├─ Concurso\n│  └─ Libre designación y formas provisionales\n└─ Desarrollo\n   ├─ Carrera horizontal y vertical\n   ├─ Evaluación del desempeño\n   └─ Promoción interna',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Personal','Carrera, interino, laboral y eventual','Ley 4/2011 / TREBEP'],['RPT','Ordena puestos, requisitos y provisión','Ley 4/2011'],['Oferta','Necesidades dotadas para nuevo ingreso','Art. 19 Ley 4/2011'],['Selección','Igualdad, mérito, capacidad y publicidad','Ley 4/2011 / TREBEP'],['Provisión','Concurso y libre designación','Art. 67 Ley 4/2011'],['Carrera','Horizontal y vertical','Arts. 62-64 Ley 4/2011'],['Promoción interna','Proceso selectivo; no automática','Ley 4/2011']]
    },
    7: {
      sources: [source.prl, source.serviciosPrevencion],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Ley 31/1995 reconoce el derecho de las personas trabajadoras a una protección eficaz frente a los riesgos laborales y atribuye a la Administración, como empleadora, el correlativo deber de protección. El tema oficial se concentra en derechos y obligaciones, organización preventiva y participación: evaluación de riesgos, planificación, información, formación, emergencias, vigilancia de la salud, servicios de prevención, delegados de prevención y comité de seguridad y salud.',
          'La prevención debe integrarse en todas las decisiones y niveles jerárquicos. No se limita a entregar equipos o reaccionar después de un accidente. El orden correcto es evitar el riesgo; evaluar lo que no pueda evitarse; combatirlo en su origen; adaptar trabajo a la persona; sustituir lo peligroso; planificar; priorizar protección colectiva; informar y formar; y revisar cuando cambien las condiciones o se produzcan daños.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Ley 31/1995 se aplica a relaciones laborales y al personal de las Administraciones públicas con las adaptaciones necesarias. Determinadas actividades públicas con peculiaridades específicas quedan sujetas a reglas especiales, pero no existe una exclusión general del empleo público.',
          'El artículo 14 formula el derecho a protección eficaz y el deber empresarial. El coste de las medidas nunca puede recaer sobre la persona trabajadora. La organización debe integrar la prevención mediante plan, evaluación y planificación y consultar a la representación de los trabajadores.',
          'Los artículos 15 a 22 contienen los principios de acción preventiva, equipos, información, formación, emergencias, riesgo grave e inminente y vigilancia de la salud. El artículo 29 recoge obligaciones de las personas trabajadoras. Los artículos 30 a 32 bis regulan modalidades y presencia de recursos preventivos. Los artículos 33 a 40 regulan consulta y participación.',
          'El Real Decreto 39/1997 desarrolla evaluación, planificación, modalidades de organización, funciones y niveles formativos de los servicios de prevención. La modalidad concreta depende del tamaño, actividad, peligrosidad y recursos; la responsabilidad de proteger no se externaliza.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El derecho a protección comprende medidas necesarias en seguridad, higiene, ergonomía, psicosociología y medicina del trabajo. La Administración debe disponer de organización y medios, realizar seguimiento permanente y mejorar la prevención. El personal tiene derecho a información y participación y puede formular propuestas. El incumplimiento del trabajador no libera a la empleadora de su deber de protección.',
          'La evaluación de riesgos identifica peligros, personas expuestas, probabilidad y gravedad. Se realiza inicialmente y se actualiza cuando cambien equipos, sustancias, instalaciones, organización, condiciones personales o cuando se produzcan daños. Debe considerar especialmente a personas sensibles, embarazo, maternidad, menores y relaciones temporales. Si revela riesgos, se planifican medidas con responsables, plazos, recursos y prioridades.',
          'Los principios preventivos obligan a evitar riesgos y combatirlos en origen. La protección colectiva prevalece sobre la individual. Los equipos de trabajo deben ser adecuados y mantenerse; los equipos de protección individual se usan cuando el riesgo no puede evitarse o limitarse suficientemente por medios colectivos u organizativos. Deben proporcionarse gratuitamente, ser compatibles y acompañarse de instrucciones y formación.',
          'La información debe abarcar riesgos generales y específicos, medidas y actividades de protección y emergencias. La formación será teórica y práctica, suficiente, adecuada al puesto y repetida cuando sea necesario; se imparte preferentemente dentro de jornada o descontando el tiempo empleado, sin coste. Una firma genérica no demuestra formación efectiva si el contenido no guarda relación con el riesgo.',
          'La organización debe analizar emergencias y adoptar medidas de primeros auxilios, lucha contra incendios y evacuación, designando personal suficiente, formado y equipado y coordinándose con servicios externos. Ante riesgo grave e inminente, las personas deben ser informadas y pueden interrumpir actividad y abandonar el lugar cuando consideren que existe peligro serio. No pueden sufrir perjuicio salvo mala fe o negligencia grave.',
          'La vigilancia de la salud es periódica y, como regla, voluntaria. Puede ser obligatoria cuando sea imprescindible para evaluar efectos de condiciones de trabajo, verificar si el estado puede constituir peligro para la persona o terceros, o cuando una disposición lo establezca por riesgos específicos. Debe respetar intimidad, dignidad y confidencialidad. La organización recibe conclusiones sobre aptitud y medidas, no diagnósticos completos.',
          'Las personas especialmente sensibles no deben ocupar puestos que las pongan en peligro a ellas o a otras. La protección de maternidad exige evaluación específica, adaptación de condiciones o tiempo, cambio de puesto y, si no es posible, suspensión en los términos de la Seguridad Social. El personal temporal y de empresas de trabajo temporal tiene el mismo nivel de protección.',
          'Las obligaciones del trabajador consisten en usar adecuadamente máquinas, herramientas, sustancias y equipos; utilizar correctamente protecciones; no inutilizar dispositivos; informar inmediatamente de situaciones de riesgo; cooperar y contribuir al cumplimiento. Se exigen conforme a formación e instrucciones. Su incumplimiento puede ser disciplinario, pero la prevención no puede descansar exclusivamente en la conducta individual.',
          'La organización preventiva puede asumirla personalmente el empresario en supuestos privados muy limitados, designar trabajadores, constituir servicio propio, recurrir a servicio ajeno o compartir servicio mancomunado. En una Administración local se organiza conforme a normativa, tamaño y riesgos. El servicio de prevención es el conjunto de medios humanos y materiales que asesora y asiste en evaluación, planificación, formación, emergencias y vigilancia.',
          'Los recursos preventivos deben tener capacidad, medios y número suficientes. La presencia en el centro se exige en situaciones legalmente previstas, como riesgos agravados por concurrencia de operaciones o actividades peligrosas. Su presencia no sustituye al mando ni a la coordinación empresarial.',
          'La consulta debe realizarse con carácter previo sobre planificación y organización del trabajo, introducción de tecnologías, organización preventiva, designación de emergencias, información, formación y cualquier acción con efectos sustanciales sobre seguridad y salud. La falta de consulta no se corrige informando una vez tomada la decisión.',
          'Los delegados de prevención son representantes con funciones específicas. Colaboran en mejora, promueven cooperación, son consultados y vigilan cumplimiento. Pueden acompañar a técnicos e inspección, acceder a información con límites, conocer daños, visitar lugares y proponer paralización. Su número depende de plantilla y se designan por y entre representantes, con especialidades en Administraciones.',
          'El comité de seguridad y salud es órgano paritario y colegiado de participación, constituido en centros o ámbitos con cincuenta o más trabajadores. Está formado por delegados de prevención y representantes de la Administración en igual número. Se reúne trimestralmente y cuando lo solicite una representación; participa en planes y promueve iniciativas. No sustituye competencias del servicio de prevención ni de la Inspección.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Derecho central: protección eficaz sin coste para el trabajador. Instrumentos: plan, evaluación y planificación. Orden preventivo: evitar, evaluar, combatir en origen, adaptar y priorizar protección colectiva. Información y formación deben ser específicas. Vigilancia de salud es voluntaria salvo excepciones tasadas. Delegados representan; comité es paritario desde cincuenta trabajadores. Servicio de prevención asesora, pero la responsabilidad sigue siendo de la organización.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Formación e equipos de protección no pueden costearlos las personas trabajadoras. La vigilancia de salud no es obligatoria siempre. El comité se reúne al menos trimestralmente y es paritario. La protección individual es posterior a la colectiva. Riesgo grave e inminente permite interrumpir y abandonar. Informar no equivale a consultar. Externalizar el servicio no externaliza la responsabilidad.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cuáles son los principios de acción preventiva y en qué orden deben aplicarse? ¿Cuándo puede ser obligatoria la vigilancia de la salud? ¿Qué diferencias existen entre servicio de prevención, delegados de prevención y comité de seguridad y salud?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En supuestos localiza peligro, evaluación, medida preventiva, persona responsable, formación y control. Si una respuesta propone primero un EPI, comprueba si era posible eliminar o controlar colectivamente. En preguntas sobre participación diferencia información, consulta y decisión. Memoriza los umbrales y periodicidades esenciales, pero razona desde el deber de protección eficaz.'
        ]}
      ],
      tree: 'PREVENCIÓN DE RIESGOS LABORALES\n├─ Derecho a protección eficaz\n├─ Gestión preventiva\n│  ├─ Plan\n│  ├─ Evaluación\n│  └─ Planificación y seguimiento\n├─ Medidas\n│  ├─ Equipos y protección colectiva\n│  ├─ Información y formación\n│  ├─ Emergencias y riesgo grave\n│  └─ Vigilancia de la salud\n├─ Obligaciones del personal\n├─ Organización\n│  ├─ Servicio propio, ajeno o mancomunado\n│  └─ Recursos preventivos\n└─ Participación\n   ├─ Delegados de prevención\n   └─ Comité de seguridad y salud',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Protección','Derecho eficaz y coste a cargo de la organización','Art. 14 LPRL'],['Principios','Evitar, evaluar, combatir y priorizar lo colectivo','Art. 15'],['Formación','Suficiente, práctica y sin coste','Art. 19'],['Riesgo grave','Interrupción y abandono','Art. 21'],['Vigilancia','Voluntaria salvo excepciones','Art. 22'],['Trabajador','Uso correcto, información y cooperación','Art. 29'],['Comité','Paritario; 50 o más; reunión trimestral','Arts. 38-39']]
    },
    8: {
      sources: [source.igualdadCLM, source.igualdadEstado],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La igualdad efectiva exige eliminar discriminaciones y actuar sobre las desigualdades reales. La Ley Orgánica 3/2007 establece el marco estatal y la Ley 12/2010 desarrolla políticas de igualdad en Castilla-La Mancha. Para el examen deben dominarse igualdad de trato y oportunidades, discriminación directa e indirecta, acoso, acciones positivas, transversalidad, presencia equilibrada, empleo público y planes de igualdad.',
          'No basta con tratar formalmente igual situaciones que parten de desventajas. Las administraciones deben integrar la perspectiva de género en normas, presupuestos, estadísticas, contratación, subvenciones, empleo, formación y servicios. Las medidas positivas son compatibles con igualdad cuando corrigen una desventaja real, son razonables, proporcionadas y temporales mientras exista la desigualdad.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La Ley Orgánica 3/2007 tiene por objeto hacer efectivo el derecho de igualdad, eliminando discriminación en ámbitos político, civil, laboral, económico, social y cultural. Vincula a personas físicas y jurídicas en los términos legales y obliga especialmente a poderes públicos.',
          'La discriminación directa se produce cuando una persona es tratada menos favorablemente por razón de sexo que otra en situación comparable. La indirecta surge cuando una disposición, criterio o práctica aparentemente neutros sitúan a personas de un sexo en desventaja particular, salvo justificación objetiva con finalidad legítima y medios necesarios y adecuados.',
          'El acoso sexual es cualquier comportamiento verbal o físico de naturaleza sexual que atente contra dignidad y cree entorno intimidatorio, degradante u ofensivo. El acoso por razón de sexo se relaciona con el sexo de una persona y produce el mismo efecto. Ambos son discriminatorios. También lo es el trato desfavorable relacionado con embarazo o maternidad.',
          'La Ley 12/2010 incorpora la igualdad como principio transversal de la actuación pública de Castilla-La Mancha y regula planificación, representación equilibrada, evaluación de impacto, lenguaje e imagen, empleo público, educación, salud, medios, participación, violencia y organización institucional dentro de sus competencias.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El principio de igualdad de trato supone ausencia de discriminación directa o indirecta y de conductas vinculadas. La igualdad de oportunidades exige condiciones para que mujeres y hombres participen y progresen de forma efectiva. La prohibición alcanza órdenes de discriminar, represalias frente a quien reclama, acoso, embarazo, maternidad y discriminación múltiple cuando concurre con otras circunstancias.',
          'La tutela combina nulidad de actos discriminatorios, reparación real y efectiva, indemnización proporcionada y disuasoria y régimen sancionador. En procesos civiles, sociales y contencioso-administrativos, cuando se aportan indicios fundados, corresponde a la parte demandada justificar objetiva y razonablemente la medida y su proporcionalidad, salvo en procesos penales. No basta una alegación genérica: deben existir indicios.',
          'Las acciones positivas permiten medidas específicas a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho. Deben ser razonables y proporcionadas respecto del objetivo. No son privilegios permanentes ni autorizan excluir sin justificación; desaparece su fundamento cuando se corrige la desventaja.',
          'La transversalidad implica valorar el impacto de género antes de decidir y durante evaluación. Los poderes públicos deben incorporar igualdad en disposiciones, políticas, presupuestos, planificación y actividad administrativa. Los informes de impacto ayudan a detectar efectos distintos aunque una norma sea neutra en su redacción. Las estadísticas deben desagregarse por sexo cuando sea relevante y permitir conocer brechas.',
          'La presencia equilibrada se entiende, con carácter general, cuando las personas de cada sexo no superan el sesenta por ciento ni son menos del cuarenta por ciento. Se aplica en los ámbitos previstos y respetando mérito, capacidad y circunstancias objetivas. No debe confundirse con una cuota automática en cada órgano o proceso si la norma no la exige.',
          'En empleo público, las administraciones deben remover obstáculos, garantizar igualdad en acceso, formación, promoción, provisión, retribuciones y condiciones, facilitar conciliación corresponsable y prevenir acoso. Las convocatorias y tribunales deben evitar sesgos y tender o ajustarse a composición equilibrada conforme a la norma aplicable. Embarazo y maternidad no pueden perjudicar carrera o acceso.',
          'Los planes de igualdad fijan diagnóstico, objetivos, medidas, responsables, calendario e indicadores. En la Administración General del Estado y en administraciones autonómicas o locales se aplican las obligaciones establecidas por normativa básica y propia. Un plan no es una declaración genérica: debe basarse en datos, negociarse cuando corresponda y evaluarse.',
          'Los protocolos frente al acoso definen conductas, canales confidenciales, medidas cautelares, investigación imparcial, protección frente a represalias y consecuencias. La prevención requiere formación y responsabilidad de mandos. Confidencialidad no significa ocultar los hechos ni negar audiencia a las partes.',
          'La conciliación debe orientarse a corresponsabilidad: no atribuir cuidados solo a mujeres. Permisos y medidas se interpretan sin discriminación y evitando penalización profesional. La igualdad retributiva exige igual retribución por trabajos de igual valor y análisis de complementos, no solo igualdad de salario base.',
          'La contratación pública y las subvenciones pueden incorporar criterios y condiciones de igualdad cuando estén vinculados, sean proporcionales y se establezcan conforme a normativa. También pueden exigirse obligaciones legales de planes o protocolos a quienes contratan con la Administración. No puede improvisarse un criterio después de publicar la convocatoria.',
          'La Ley de Castilla-La Mancha refuerza la integración de igualdad en la Administración regional y su sector público, impulsa la coordinación y prevé instrumentos institucionales y de planificación. En entidades locales, las medidas deben ejercerse dentro de sus competencias y con respeto a la autonomía local, la legislación básica y los recursos disponibles.',
          'El lenguaje administrativo debe ser claro y no sexista y la imagen institucional evitar estereotipos. Esto no obliga a fórmulas artificiosas, sino a nombrar a las personas sin invisibilización ni trato degradante. Los formularios, datos y comunicaciones deben diseñarse para no reproducir discriminaciones.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Directa: trato menos favorable. Indirecta: criterio neutro con desventaja no justificada. Acoso sexual y por razón de sexo son discriminación. Embarazo y maternidad están protegidos. Acción positiva corrige desigualdad real y debe ser proporcional. Transversalidad integra género en toda política. Presencia equilibrada suele expresarse 40/60. Empleo público exige igualdad en acceso, carrera, retribución, conciliación y prevención del acoso.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'La discriminación indirecta puede existir sin intención. Igualdad no prohíbe acciones positivas proporcionadas. El acoso sexual no exige relación jerárquica. La presencia equilibrada no significa cincuenta por ciento exacto. El embarazo no puede generar trato desfavorable. La inversión de carga probatoria requiere indicios y no se aplica igual en el proceso penal.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cómo se distinguen discriminación directa, indirecta, acoso sexual y acoso por razón de sexo? ¿Qué requisitos debe cumplir una acción positiva? ¿Cómo se aplica la igualdad efectiva al acceso, carrera y condiciones del empleo público?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Ante un caso identifica conducta, grupo perjudicado, comparación, justificación y proporcionalidad. Si la regla parece neutra, analiza el efecto real. En empleo público separa acceso, provisión, promoción, retribución y conciliación. Las opciones incorrectas suelen reducir igualdad a una mera declaración formal o convertir una acción positiva en ventaja ilimitada.'
        ]}
      ],
      tree: 'IGUALDAD ENTRE MUJERES Y HOMBRES\n├─ Igualdad de trato y oportunidades\n├─ Discriminación\n│  ├─ Directa\n│  ├─ Indirecta\n│  ├─ Acoso sexual\n│  ├─ Acoso por razón de sexo\n│  └─ Embarazo, maternidad y represalias\n├─ Instrumentos\n│  ├─ Acción positiva\n│  ├─ Transversalidad e impacto\n│  ├─ Presencia equilibrada\n│  └─ Planes y protocolos\n├─ Tutela y prueba\n└─ Empleo público\n   ├─ Acceso y promoción\n   ├─ Igualdad retributiva\n   ├─ Conciliación corresponsable\n   └─ Prevención del acoso',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Directa','Trato menos favorable por sexo','LO 3/2007'],['Indirecta','Criterio neutro con desventaja no justificada','LO 3/2007'],['Acoso','Conducta que vulnera dignidad y crea entorno ofensivo','LO 3/2007'],['Acción positiva','Razonable, proporcional y ligada a desigualdad real','Art. 11 LO 3/2007'],['Presencia equilibrada','Cada sexo entre 40 % y 60 %','DA 1.ª LO 3/2007'],['Transversalidad','Igualdad integrada en toda actuación','LO 3/2007 / Ley 12/2010'],['Empleo público','Acceso, carrera y condiciones sin discriminación','Ambas leyes']]
    },
    9: {
      sources: [source.lopdgdd, source.rgpd],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La Ley Orgánica 3/2018 adapta el ordenamiento español al Reglamento General de Protección de Datos y garantiza derechos digitales. En un ayuntamiento, la protección de datos afecta al padrón, registro, expedientes, nóminas, tributos, subvenciones, policía, servicios sociales, selección y publicación. El objetivo no es impedir tratar datos, sino hacerlo con base jurídica, finalidad determinada, datos mínimos, seguridad, transparencia y respeto a derechos.',
          'La clave es distinguir tratamiento legítimo de tratamiento basado en consentimiento. Las Administraciones no dependen normalmente del consentimiento para ejercer competencias u obligaciones legales; suelen tratar por cumplimiento de obligación legal o misión en interés público. El consentimiento, cuando sea la base, debe ser libre, específico, informado e inequívoco y puede retirarse sin afectar al tratamiento anterior.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Dato personal es toda información sobre una persona física identificada o identificable. Tratamiento es cualquier operación: recoger, registrar, consultar, modificar, comunicar, publicar, conservar o destruir. Responsable decide fines y medios; encargado trata por cuenta del responsable mediante contrato o acto jurídico; delegado de protección de datos asesora, supervisa y actúa como contacto con la autoridad.',
          'Los principios son licitud, lealtad y transparencia; limitación de finalidad; minimización; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva. El responsable no solo debe cumplir, sino poder demostrar que cumple mediante registros, análisis de riesgos, medidas, información, contratos, evaluaciones y gestión de incidentes.',
          'Las bases de licitud incluyen consentimiento, contrato, obligación legal, intereses vitales, misión en interés público o ejercicio de poderes públicos e interés legítimo. Las autoridades públicas no pueden basarse en interés legítimo cuando actúan en ejercicio de sus funciones. Los datos especialmente protegidos, como salud, biometría identificativa, ideología o afiliación, están sometidos a prohibición general y excepciones tasadas.',
          'La Ley Orgánica regula principios, derechos, tratamientos concretos, responsables y encargados, delegado, transferencias, autoridades, procedimientos, infracciones y derechos digitales. Debe leerse junto al RGPD; no es una regulación independiente que permita ignorar el reglamento europeo.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La información al interesado debe ser concisa, transparente, inteligible y accesible. Puede ofrecerse por capas: una primera con identidad del responsable, finalidad, posibilidad de ejercer derechos y, si hay elaboración de perfiles, información básica; y acceso a la información completa sobre base jurídica, destinatarios, conservación, delegado, reclamación y demás extremos. Una cláusula genérica escondida no cumple transparencia.',
          'La finalidad debe definirse antes de recoger. Los datos no se reutilizan de forma incompatible. La minimización exige pedir solo lo adecuado, pertinente y necesario. En una solicitud municipal no procede exigir documentos ajenos al trámite. La exactitud obliga a rectificar y actualizar; el plazo de conservación depende de finalidad, obligaciones legales, archivo público y responsabilidades, no de conservar indefinidamente por comodidad.',
          'El consentimiento de menores se rige en España por la regla de catorce años para tratamientos basados en consentimiento, salvo que una ley exija asistencia de titulares de patria potestad. En servicios específicos puede operar otra edad conforme al Derecho de la Unión. El consentimiento no valida tratamientos innecesarios ni permite renunciar a derechos indisponibles.',
          'El derecho de acceso permite conocer si se tratan datos y obtener información y copia. Rectificación corrige datos inexactos. Supresión elimina cuando ya no son necesarios, se retira consentimiento sin otra base, existe oposición procedente o tratamiento ilícito, con excepciones por obligaciones, interés público, archivo o reclamaciones. Limitación inmoviliza temporalmente en supuestos. Portabilidad entrega datos en formato estructurado cuando el tratamiento se basa en consentimiento o contrato y es automatizado; normalmente no se aplica al ejercicio de poderes públicos.',
          'El derecho de oposición permite solicitar que cese un tratamiento basado en interés público o interés legítimo por motivos personales, salvo razones imperiosas o reclamaciones. Frente a mercadotecnia directa es más amplio. Las decisiones exclusivamente automatizadas con efectos jurídicos o similares están restringidas y exigen garantías, salvo habilitación legal, contrato o consentimiento explícito en los supuestos permitidos.',
          'Las solicitudes de derechos deben facilitarse, verificando identidad de modo proporcionado, y resolverse como regla en un mes, ampliable dos meses por complejidad o número, informando dentro del primer mes. Son gratuitas salvo solicitudes manifiestamente infundadas o excesivas. Si se deniega, debe motivarse e informar de reclamación ante la autoridad y tutela judicial.',
          'Las Administraciones deben publicar datos solo con habilitación y aplicando minimización. En procesos selectivos se evita difundir DNI completo, domicilio o información innecesaria; se usan reglas de identificación publicadas por normativa. Transparencia y protección de datos se ponderan: el derecho de acceso a información pública no supone publicar expedientes íntegros sin límites.',
          'La comunicación entre administraciones necesita base jurídica y finalidad compatible. No debe pedirse consentimiento cuando la ley obliga o permite consulta. El principio de no aportar documentos ya disponibles se combina con protección de datos: el órgano consulta dentro de competencia y deja trazabilidad. Acceder por curiosidad a un expediente es tratamiento ilícito aunque el empleado tenga acceso técnico.',
          'El encargado debe ofrecer garantías y tratar solo según instrucciones, mantener confidencialidad, seguridad, asistencia y devolución o supresión. La contratación de una plataforma no convierte al proveedor en propietario de los datos. Las subcontrataciones, localización, transferencias internacionales y finalización deben regularse.',
          'La seguridad se determina por riesgo. Incluye control de accesos, autenticación, perfiles, copias, cifrado cuando proceda, registros, actualización, formación, continuidad y pruebas. Una violación de seguridad es pérdida, alteración, acceso o divulgación no autorizada. Se documenta siempre; se notifica a la autoridad en un máximo de setenta y dos horas desde que se tiene constancia cuando sea probable riesgo, y a afectados cuando exista alto riesgo, salvo excepciones.',
          'La evaluación de impacto se realiza antes de tratamientos que probablemente entrañen alto riesgo, como observación sistemática a gran escala, decisiones automatizadas relevantes o categorías especiales a gran escala. Si subsiste alto riesgo sin medidas suficientes, se consulta previamente a la autoridad. La Administración debe designar delegado de protección de datos en los supuestos previstos y publicar sus datos de contacto.',
          'La Agencia Española de Protección de Datos y autoridades autonómicas ejercen supervisión en su ámbito. Cuando una Administración pública infringe, la autoridad puede declarar la infracción, ordenar medidas y proponer actuaciones disciplinarias; el régimen tiene especialidades respecto de multas administrativas, pero no existe impunidad ni desaparece la obligación de reparar daños.',
          'Los derechos digitales incluyen neutralidad y acceso universal a Internet, seguridad digital, educación digital, rectificación en Internet, actualización en medios, intimidad en dispositivos y frente a videovigilancia y geolocalización laboral, desconexión digital, negociación colectiva, protección de menores y testamento digital. En empleo público deben aprobarse criterios de uso de dispositivos y respetarse información, necesidad y proporcionalidad.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Principios: licitud, finalidad, minimización, exactitud, conservación, seguridad y responsabilidad. Responsable decide; encargado ejecuta por cuenta; delegado asesora y supervisa. Bases jurídicas no se reducen a consentimiento. Derechos: acceso, rectificación, supresión, oposición, limitación, portabilidad y garantías automatizadas. Plazo general de respuesta: un mes. Brechas: documentar y, si hay riesgo, notificar en 72 horas. Publicar datos exige habilitación y minimización.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'El consentimiento no es la base habitual de toda actuación administrativa. Portabilidad no se aplica con carácter general al ejercicio de poderes públicos. El encargado no decide libremente la finalidad. Una brecha se documenta aunque no se notifique. El plazo de 72 horas se refiere a notificación de brecha a la autoridad, no al ejercicio de derechos. El acceso técnico no autoriza consultar cualquier expediente.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cuáles son los principios y bases jurídicas del tratamiento? ¿Qué diferencias existen entre responsable, encargado y delegado de protección de datos? ¿Cómo se gestionan los derechos y una violación de seguridad en un ayuntamiento?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En cada supuesto identifica dato, operación, finalidad, base jurídica, destinatario, plazo, riesgo y derecho afectado. No elijas consentimiento automáticamente. Si aparece publicación, aplica minimización; si aparece proveedor, analiza encargo; si aparece incidente, calcula riesgo y plazo. Las respuestas falsas suelen confundir transparencia con publicidad ilimitada o seguridad con secreto absoluto.'
        ]}
      ],
      tree: 'PROTECCIÓN DE DATOS\n├─ Principios\n│  ├─ Licitud y transparencia\n│  ├─ Finalidad y minimización\n│  ├─ Exactitud y conservación\n│  └─ Seguridad y responsabilidad\n├─ Sujetos\n│  ├─ Responsable\n│  ├─ Encargado\n│  └─ Delegado de protección de datos\n├─ Bases jurídicas y categorías especiales\n├─ Derechos\n│  ├─ Acceso, rectificación y supresión\n│  ├─ Oposición y limitación\n│  ├─ Portabilidad\n│  └─ Decisiones automatizadas\n├─ Seguridad, brechas y evaluación de impacto\n└─ Derechos digitales',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Principios','Finalidad, minimización, exactitud, seguridad','Art. 5 RGPD'],['Licitud','Consentimiento u otra base del art. 6','RGPD'],['Menores','Consentimiento desde 14 años en España','Art. 7 LOPDGDD'],['Derechos','Respuesta general en un mes','RGPD'],['Brecha','Notificación si riesgo, máximo 72 horas','Art. 33 RGPD'],['Encargado','Trata por cuenta y bajo instrucciones','Art. 28 RGPD'],['Sector público','Legalidad, minimización y responsabilidad proactiva','RGPD/LOPDGDD']]
    },
    10: {
      sources: [source.lgt, source.haciendas, source.recaudacion],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'La tributación local se apoya en Constitución, Ley General Tributaria y texto refundido de Haciendas Locales. Los ayuntamientos tienen autonomía para establecer y exigir tributos dentro de la ley mediante ordenanzas fiscales; no pueden crear libremente impuestos ni beneficios. Este tema se centra en principios, delegación y colaboración, beneficios y compensación, obligaciones, obligados, gestión y extinción de la deuda.',
          'La secuencia útil es: una norma define el tributo; la ordenanza concreta dentro de márgenes; se produce el hecho imponible; nace la obligación; la Administración gestiona y liquida; el obligado paga o se aplica otra forma de extinción; si no cumple, se inicia recaudación ejecutiva. El tema 11 profundiza en recaudación y apremio y el 12 en cada impuesto municipal.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El artículo 31 de la Constitución exige contribuir según capacidad económica mediante sistema justo inspirado en igualdad y progresividad, sin alcance confiscatorio. La reserva de ley exige que los elementos esenciales del tributo tengan cobertura legal. Los principios de generalidad, justicia, seguridad jurídica y eficacia completan el marco.',
          'El texto refundido de Haciendas Locales enumera recursos y regula impuestos, tasas y contribuciones especiales. Los tributos propios se ordenan mediante ordenanzas fiscales. La Ley General Tributaria establece conceptos, obligaciones, obligados, procedimientos, recaudación, inspección, sanciones y revisión con aplicación a entidades locales conforme a sus especialidades.',
          'Las entidades locales pueden delegar en comunidad autónoma o en otras entidades locales facultades de gestión, liquidación, inspección y recaudación. La delegación requiere acuerdo, aceptación y publicación. No cambia la titularidad del tributo y debe precisar alcance, contenido, condiciones y duración.',
          'Los beneficios fiscales solo pueden reconocerse cuando una ley los establezca o lo permita. Las ordenanzas pueden aplicar beneficios potestativos dentro de límites. Cuando una ley estatal impone un beneficio en tributos locales, la compensación por el Estado solo procede en los términos expresamente previstos.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El tributo es ingreso público consistente en prestación pecuniaria exigida por una Administración como consecuencia de un hecho al que la ley vincula el deber de contribuir. Su finalidad primordial es obtener recursos, aunque puede servir a fines de política económica. Se clasifica en tasas, contribuciones especiales e impuestos. La naturaleza no depende del nombre que use una ordenanza.',
          'El principio de legalidad impide crear tributos o alterar sus elementos esenciales sin ley. La ordenanza fiscal no sustituye a la ley: regula dentro de habilitación el tipo, cuota, bonificaciones, gestión y otros aspectos. El acuerdo de imposición es necesario para tributos potestativos. Los impuestos obligatorios se exigen por mandato legal, aunque la ordenanza puede ser necesaria para ejercer facultades concretas.',
          'La aplicación de los tributos se rige por proporcionalidad, eficacia, limitación de costes indirectos y respeto a derechos. La Administración debe informar, asistir, identificar responsables, tramitar con objetividad y motivar. Los obligados deben presentar declaraciones, autoliquidaciones, comunicaciones, libros o documentos cuando la norma lo exija y facilitar comprobaciones.',
          'La delegación tributaria permite aprovechar medios de diputaciones u otras administraciones, especialmente para padrones y recaudación. El acuerdo de delegación debe publicarse en boletines correspondientes. La entidad delegada ejerce las facultades recibidas conforme a la legislación y puede aprobar actuaciones; el ayuntamiento conserva la titularidad del recurso y las competencias no delegadas.',
          'La colaboración puede producirse mediante intercambio de información, convenios, asistencia técnica, coordinación de actuaciones y colaboración social. Debe respetar protección de datos y secreto tributario. Los datos tributarios tienen carácter reservado y solo se comunican en los supuestos legales; no pueden usarse para curiosidad o fines ajenos.',
          'Los beneficios fiscales abarcan exenciones, bonificaciones, reducciones y deducciones. La exención evita el nacimiento o exigencia pese a realizarse el hecho imponible; la no sujeción significa que el supuesto queda fuera del hecho imponible. Una bonificación reduce cuota. Solo se aplican si se cumplen requisitos y, cuando proceda, se solicitan o reconocen en el momento previsto.',
          'La obligación tributaria principal consiste en pagar la cuota. Existen obligaciones de realizar pagos a cuenta, entre particulares resultantes del tributo y obligaciones accesorias, como intereses de demora, recargos por declaración extemporánea y recargos del periodo ejecutivo. Las obligaciones formales incluyen declarar domicilio, solicitar NIF, presentar declaraciones, llevar libros, conservar documentos y facilitar información.',
          'El interés de demora es una prestación accesoria por pago fuera de plazo, cobro indebido u otros supuestos; no requiere culpabilidad. Los recargos por declaración extemporánea se aplican cuando se presenta sin requerimiento previo fuera de plazo. Los recargos del periodo ejecutivo nacen al iniciarse este periodo y varían según momento de pago. No deben confundirse con sanciones, que exigen infracción y culpabilidad.',
          'Son obligados tributarios las personas físicas, jurídicas y entidades a las que la norma impone obligaciones. El contribuyente realiza el hecho imponible. El sustituto, por imposición legal y en lugar del contribuyente, cumple la obligación principal y formales, pudiendo repercutir cuando proceda. También existen retenedores, obligados a ingresar a cuenta, sucesores, beneficiarios de exenciones y responsables.',
          'La responsabilidad puede ser solidaria o subsidiaria y exige presupuesto legal. La derivación se declara mediante procedimiento con audiencia, identificando alcance. El responsable no se convierte por ello en contribuyente. La responsabilidad subsidiaria requiere, como regla, declaración de fallido del deudor principal y responsables solidarios; la solidaria puede exigirse en los términos y plazos legales sin ese requisito.',
          'El domicilio fiscal localiza al obligado para relaciones tributarias. Debe comunicarse el cambio; mientras no se haga, puede surtir efectos el anterior. La representación puede ser legal o voluntaria y debe acreditarse para actuaciones que lo exijan. La sucesión transmite obligaciones dentro de límites a herederos o sucesores de entidades, no sanciones personales salvo reglas específicas.',
          'Los procedimientos de gestión comprenden devolución iniciada por autoliquidación o solicitud, declaración, verificación de datos, comprobación de valores y comprobación limitada, además de otros reglamentarios. Pueden iniciarse por declaración, autoliquidación, comunicación, solicitud o de oficio. La Administración puede requerir, comprobar y liquidar, pero debe respetar competencia, alcance, audiencia y plazos.',
          'La autoliquidación la calcula el obligado y puede resultar a ingresar, devolver o compensar; la liquidación es el acto administrativo que cuantifica la deuda. Una declaración comunica hechos para que la Administración liquide. La comunicación aporta datos relevantes. Una liquidación provisional puede ser revisada mediante comprobación posterior dentro de límites; la firmeza depende de procedimiento y prescripción.',
          'La verificación de datos corrige defectos formales, errores aritméticos o aplicación indebida manifiesta y aclara discrepancias sencillas. La comprobación limitada permite examinar datos, registros, facturas e información dentro de alcance, pero no realizar todas las actuaciones propias de inspección. La comprobación de valores aplica medios legales y puede promover tasación pericial contradictoria.',
          'La deuda se extingue por pago, prescripción, compensación, condonación y baja provisional por insolvencia, además de otros medios legales. El pago puede realizarlo cualquier persona y debe aplicarse a la deuda indicada dentro de las reglas. La prescripción opera a los cuatro años para liquidar, exigir pago, solicitar devoluciones y obtenerlas, y puede interrumpirse por actuaciones con conocimiento formal, recursos o actos del obligado.',
          'La compensación extingue deudas con créditos reconocidos a favor del obligado, de oficio o a instancia según periodo y requisitos. La condonación solo procede por ley y en cuantía y condiciones que determine. La insolvencia no extingue definitivamente: provoca baja provisional y la deuda puede rehabilitarse si aparece solvencia antes de prescribir.',
          'Cuando existe un pago indebido nace derecho a devolución con interés de demora en los términos legales. No es lo mismo devolución derivada de la normativa del tributo, como una autoliquidación con resultado a devolver, que devolución de ingresos indebidos. Cada una sigue procedimiento y origen diferentes.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Principios: capacidad económica, igualdad, progresividad, no confiscatoriedad y reserva de ley. Delegar gestión no cambia titularidad. Beneficios solo por ley o habilitación. Obligación principal: cuota; accesorias: interés y recargos; formales: declarar y colaborar. Contribuyente realiza el hecho; sustituto cumple en su lugar por ley; responsable responde por presupuesto legal. Gestión: declaración, verificación, comprobación y liquidación. Extinción: pago, prescripción, compensación, condonación e insolvencia provisional.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'No sujeción y exención no son iguales. Recargo e interés no son necesariamente sanciones. La delegación requiere publicación y aceptación. El sustituto no es un representante voluntario. La autoliquidación la realiza el obligado; la liquidación la dicta la Administración. La prescripción puede interrumpirse. La insolvencia da baja provisional, no extinción definitiva inmediata.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué límites tienen la potestad tributaria local y las ordenanzas fiscales? ¿Cómo se diferencian contribuyente, sustituto, responsable y retenedor? ¿Cuáles son los procedimientos básicos de gestión y las formas de extinción de la deuda?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En un supuesto identifica tributo, hecho imponible, sujeto, obligación, acto de gestión, plazo y forma de extinción. Separa siempre naturaleza jurídica y fase procedimental. Cuando aparezca una bonificación, pregunta por habilitación legal; ante delegación, por acuerdo, aceptación y publicación; ante deuda antigua, calcula prescripción e interrupciones antes de concluir.'
        ]}
      ],
      tree: 'TRIBUTACIÓN LOCAL\n├─ Principios constitucionales y reserva de ley\n├─ Potestad local\n│  ├─ Ley y ordenanza fiscal\n│  ├─ Delegación\n│  └─ Colaboración e información tributaria\n├─ Beneficios\n│  ├─ No sujeción / exención\n│  ├─ Bonificaciones y reducciones\n│  └─ Compensación legal\n├─ Obligaciones\n│  ├─ Principal y pagos a cuenta\n│  ├─ Accesorias\n│  └─ Formales\n├─ Obligados\n│  ├─ Contribuyente y sustituto\n│  ├─ Retenedor y sucesor\n│  └─ Responsables\n├─ Gestión tributaria\n└─ Extinción de la deuda',
      reviewTable: [['Materia','Regla esencial','Referencia'],['Principios','Capacidad, igualdad, progresividad y no confiscatoriedad','Art. 31 CE'],['Delegación','Acuerdo, aceptación y publicación; no cambia titularidad','Art. 7 TRLRHL'],['Beneficios','Solo por ley o habilitación','Art. 9 TRLRHL'],['Obligación principal','Pago de cuota','LGT'],['Sujeto','Contribuyente realiza; sustituto cumple por ley','LGT'],['Gestión','Declaración, verificación y comprobaciones','LGT'],['Extinción','Pago, prescripción, compensación, condonación e insolvencia','LGT']]
    }
  };

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  const updated = [];
  for (const [numberText, patch] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
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
      sourcePolicy: 'Bases La Puebla BOP Toledo núm. 82, 05/05/2026; fuentes oficiales consolidadas',
      words: wordCount({ ...theme, ...patch }),
      block: 'La Puebla 6-10'
    };
    theme.academiaVersion = 'v0.86 bloque 2';
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v86 || { completedThemes: [] };
  const completedThemes = [...new Set([...(previous.completedThemes || []), ...updated])].sort((a, b) => a - b);
  const pendingThemes = ope.themes.map(theme => Number(theme.number)).filter(number => !completedThemes.includes(number));
  ope.theoryProgramme.v86 = {
    ...previous,
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    officialProgrammeSource: 'BOP Toledo núm. 82, 5 de mayo de 2026, Anexo I',
    autonomousThemes: completedThemes.length,
    totalThemes: ope.themes.length,
    completedThemes,
    pendingThemes,
    status: pendingThemes.length ? 'EN_PROGRESO' : 'APTO',
    note: 'Segundo bloque reconstruido. Temas 1 a 10 autosuficientes; pendientes 11 a 19.'
  };

  window.OPOWEB_PUEBLA_THEORY_V86_BLOQUE2 = {
    version: 'v0.86.0',
    status: ope.theoryProgramme.v86.status,
    themes: updated,
    completedThemes,
    pendingThemes,
    minimumWords: Math.min(...updated.map(number => ope.themes.find(theme => Number(theme.number) === number)?.theoryStatus?.words || 0))
  };
  window.OPOWEB_PUEBLA_THEORY_V86 = {
    ...window.OPOWEB_PUEBLA_THEORY_V86,
    version: 'v0.86.0',
    status: ope.theoryProgramme.v86.status,
    autonomousThemes: completedThemes.length,
    totalThemes: ope.themes.length,
    pendingThemes
  };
})();
