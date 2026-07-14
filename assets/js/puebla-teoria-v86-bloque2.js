(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const SOURCES = {
    empleoCLM: { label: 'Ley 4/2011, del Empleo Público de Castilla-La Mancha', reference: 'BOE-A-2011-7752', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-7752' },
    trebep: { label: 'Texto refundido del Estatuto Básico del Empleado Público', reference: 'BOE-A-2015-11719', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719' },
    prl: { label: 'Ley 31/1995, de Prevención de Riesgos Laborales', reference: 'BOE-A-1995-24292', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292' },
    rsp: { label: 'Real Decreto 39/1997, Reglamento de los Servicios de Prevención', reference: 'BOE-A-1997-1853', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853' },
    igualdadCLM: { label: 'Ley 12/2010, de igualdad entre mujeres y hombres de Castilla-La Mancha', reference: 'BOE-A-2011-2708', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-2708' },
    igualdadLO: { label: 'Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres', reference: 'BOE-A-2007-6115', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115' },
    lopdgdd: { label: 'Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales', reference: 'BOE-A-2018-16673', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673' },
    rgpd: { label: 'Reglamento (UE) 2016/679, Reglamento General de Protección de Datos', reference: 'EUR-Lex-32016R0679', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    lgt: { label: 'Ley 58/2003, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186' },
    rgr: { label: 'Real Decreto 939/2005, Reglamento General de Recaudación', reference: 'BOE-A-2005-14803', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803' }
  };

  const THEMES = {
    6: {
      sources: [SOURCES.empleoCLM, SOURCES.trebep],
      articleCoverage: [
        ['Arts. 4-15 Ley 4/2011', 'Clases de personal, dirección pública y órganos de planificación.'],
        ['Arts. 37-61 Ley 4/2011', 'Ordenación de puestos, provisión y movilidad.'],
        ['Arts. 62-82 Ley 4/2011', 'Carrera profesional, evaluación y promoción interna.'],
        ['Arts. 96-112 Ley 4/2011', 'Acceso, selección, órganos y pérdida de la relación.'],
        ['Arts. 113-120 Ley 4/2011', 'Oferta de empleo público, convocatorias y principios selectivos.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La Ley 4/2011 ordena el empleo público de Castilla-La Mancha y se aplica, con particularidades, a Administraciones autonómica y local. El tema exige distinguir clases de personal, provisión, carrera, promoción interna, selección y oferta de empleo público.`,
          `La confusión típica es mezclar acceso, provisión y promoción. El acceso incorpora nuevo personal; la provisión cubre puestos con personal ya vinculado; la promoción permite acceder a otro cuerpo, escala o categoría cumpliendo requisitos.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La Ley 4/2011 se interpreta junto con el TREBEP, que contiene bases estatales. En entidades locales se añaden normas de régimen local y presupuestarias.`,
          `El texto consolidado de la Ley 4/2011 muestra una última actualización publicada y advierte que puede estar en proceso de actualización; por ello debe verificarse la redacción vigente antes del examen.`,
          `Las convocatorias concretas prevalecen en requisitos y pruebas dentro del marco legal. La oferta pública no equivale a convocatoria ni crea por sí sola derecho al nombramiento.`
        ]},
        { heading: '1. Ámbito y principios del empleo público', paragraphs: [
          `El empleo público persigue servicio objetivo al interés general, profesionalidad, imparcialidad, eficacia y transparencia. La planificación debe relacionar necesidades, puestos, presupuesto y recursos humanos.`,
          `La selección y carrera se someten a igualdad, mérito y capacidad, con publicidad, transparencia, imparcialidad, profesionalidad, independencia técnica y adecuación entre pruebas y funciones.`,
          `La negociación colectiva y participación sindical se ejercen dentro de límites legales, especialmente reserva de ley, potestad organizativa y disponibilidad presupuestaria.`
        ]},
        { heading: '2. Clases de personal', paragraphs: [
          `Son empleados públicos funcionarios de carrera, funcionarios interinos, personal laboral y eventual. El personal directivo profesional tiene régimen específico.`,
          `El funcionario de carrera se vincula estatutariamente para servicios profesionales retribuidos de carácter permanente. Las funciones que impliquen ejercicio de potestades o salvaguardia de intereses generales se reservan a funcionarios.`,
          `El personal laboral se vincula por contrato y puede ser fijo, indefinido o temporal. Su selección también respeta igualdad, mérito y capacidad.`
        ]},
        { heading: '3. Funcionarios interinos y personal eventual', paragraphs: [
          `El interino se nombra por razones expresamente justificadas de necesidad y urgencia para funciones de carrera: vacante, sustitución, programas temporales o exceso de tareas en límites legales.`,
          `Su relación cesa al finalizar causa, cobertura reglamentaria, amortización, plazo o causa general. No adquiere condición de carrera por permanencia.`,
          `El eventual realiza funciones expresamente calificadas de confianza o asesoramiento especial. Nombramiento y cese son libres y cesa en todo caso al cesar autoridad a la que presta función. Su experiencia no constituye mérito para acceso o promoción salvo previsión legal compatible.`
        ]},
        { heading: '4. Puestos de trabajo y relaciones de puestos', paragraphs: [
          `La organización se articula mediante puestos, plantillas y relaciones de puestos. La RPT identifica denominación, adscripción, requisitos, forma de provisión, complementos y demás características.`,
          `El puesto no es la plaza. La plaza refleja dotación en plantilla; el puesto concreta funciones y condiciones. Un funcionario pertenece a cuerpo o escala y ocupa un puesto.`,
          `La modificación de RPT exige competencia, negociación cuando proceda, motivación y presupuesto. No puede utilizarse para seleccionar directamente a una persona.`
        ]},
        { heading: '5. Provisión de puestos', paragraphs: [
          `La provisión asigna puestos a personal que reúne requisitos. Los sistemas ordinarios son concurso y libre designación con convocatoria pública.`,
          `En el concurso se valoran méritos y capacidades conforme a bases. En libre designación se aprecia idoneidad discrecionalmente, pero con convocatoria, requisitos y motivación en términos legales.`,
          `Existen formas temporales: comisión de servicios, adscripción provisional, atribución temporal, permuta o movilidad. No deben convertirse en provisión definitiva irregular.`
        ]},
        { heading: '6. Concurso', paragraphs: [
          `Es sistema normal. La convocatoria identifica puestos, requisitos, méritos, baremo, comisión de valoración, plazos y resolución.`,
          `Los méritos deben estar relacionados con puesto y valorarse objetivamente. La antigüedad no puede ser único mérito si vacía mérito y capacidad.`,
          `El destino obtenido puede tener permanencia mínima antes de concursar de nuevo, salvo excepciones. La toma de posesión produce efectos administrativos y económicos.`
        ]},
        { heading: '7. Libre designación', paragraphs: [
          `Se reserva a puestos de especial responsabilidad o confianza profesional previstos en RPT. No es nombramiento eventual.`,
          `La convocatoria es pública y los candidatos deben cumplir requisitos. El órgano competente aprecia idoneidad y puede recabar informe.`,
          `El cese es discrecional dentro de límites, pero debe producir adscripción conforme a la ley. No supone pérdida de condición funcionarial.`
        ]},
        { heading: '8. Carrera profesional', paragraphs: [
          `La carrera es conjunto ordenado de oportunidades de ascenso y progreso conforme a igualdad, mérito y capacidad. Puede ser horizontal, vertical, promoción interna vertical y promoción interna horizontal.`,
          `La carrera horizontal permite progresar sin cambiar de puesto mediante grados o categorías, vinculada a trayectoria, calidad, conocimientos y evaluación.`,
          `La vertical se produce por obtención de puestos superiores mediante provisión. Carrera y retribución deben basarse en criterios objetivos y evaluación.`
        ]},
        { heading: '9. Evaluación del desempeño', paragraphs: [
          `Mide conducta profesional y rendimiento o resultados conforme a transparencia, objetividad, imparcialidad y no discriminación.`,
          `Puede influir en carrera horizontal, formación, provisión y retribuciones complementarias, pero requiere sistemas previamente aprobados y conocidos.`,
          `No puede basarse en impresiones arbitrarias ni utilizarse como sanción encubierta. Debe existir participación y posibilidad de revisión.`
        ]},
        { heading: '10. Promoción interna', paragraphs: [
          `Permite acceder a cuerpos o escalas de subgrupo superior o del mismo, normalmente mediante proceso selectivo. Se exige titulación, antigüedad mínima, requisitos y superación.`,
          `La vertical asciende a subgrupo superior; la horizontal cambia a otro cuerpo o escala del mismo subgrupo. La promoción del personal laboral se rige por normativa laboral y convenios.`,
          `Las pruebas pueden eximir materias ya acreditadas, pero no eliminar principios ni requisitos esenciales. Deben reservarse plazas cuando se decida en oferta.`
        ]},
        { heading: '11. Acceso y requisitos generales', paragraphs: [
          `Se exigen nacionalidad en términos legales, capacidad funcional, edad mínima de dieciséis años y no superar jubilación forzosa, no separación o inhabilitación, y titulación.`,
          `El acceso de nacionales UE y familiares depende de funciones reservadas. Las personas con discapacidad participan en igualdad con adaptaciones y reservas.`,
          `Los requisitos deben reunirse al finalizar plazo y mantenerse hasta toma de posesión. La falta determina exclusión o imposibilidad de nombramiento.`
        ]},
        { heading: '12. Sistemas selectivos', paragraphs: [
          `Para funcionarios son oposición y concurso-oposición; concurso excepcionalmente por ley. Para laboral fijo pueden utilizarse oposición, concurso-oposición o concurso según normativa.`,
          `Las pruebas guardan relación con tareas y pueden incluir conocimientos, práctica, idiomas, aptitudes, físicas, entrevistas estructuradas y cursos.`,
          `Los órganos son colegiados, técnicos, imparciales, profesionales y con tendencia a paridad. No pueden integrarlos personal político, interino o eventual en los términos básicos.`
        ]},
        { heading: '13. Oferta de empleo público', paragraphs: [
          `La OEP incluye necesidades con asignación presupuestaria que deben proveerse mediante nuevo ingreso y puede incorporar medidas de planificación.`,
          `Se aprueba y publica anualmente por órgano competente, respetando tasa de reposición y normativa presupuestaria. Puede incluir promoción interna por separado.`,
          `La ejecución debe desarrollarse dentro del plazo legal básico. Publicar OEP no abre solicitudes: hace falta convocatoria específica.`
        ]},
        { heading: '14. Convocatoria y desarrollo del proceso', paragraphs: [
          `La convocatoria contiene plazas, requisitos, solicitudes, derechos de examen, tribunal, sistema, pruebas, programa, baremo y calendario orientativo. Vincula a Administración, tribunal y aspirantes.`,
          `Las bases solo pueden modificarse con procedimiento y respeto a seguridad jurídica. Las listas, fechas, plantillas y resultados se publican en medios indicados.`,
          `El tribunal resuelve incidencias dentro de bases, no puede alterar sistema o baremo. La propuesta no puede superar plazas salvo previsión legal para vacantes sobrevenidas.`
        ]},
        { heading: '15. Diferencias esenciales', paragraphs: [
          `OEP planifica plazas; convocatoria abre proceso; selección determina aspirantes; nombramiento crea vínculo; toma de posesión inicia ejercicio.`,
          `Provisión cubre puestos con personal existente; promoción cambia cuerpo o escala; carrera horizontal progresa sin cambiar necesariamente de puesto.`,
          `Interino no es laboral temporal; eventual no es directivo profesional; libre designación no es nombramiento eventual.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Personal: carrera, interino, laboral y eventual.`,
          `Provisión: concurso normal y libre designación excepcional por puesto.`,
          `Carrera: horizontal, vertical y promoción interna.`,
          `OEP planifica; convocatoria selecciona; nombramiento y toma de posesión incorporan.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `La OEP no es convocatoria. La provisión no es acceso. La libre designación no elimina publicidad.`,
          `El eventual solo confianza o asesoramiento; el interino realiza funciones de carrera por causas tasadas.`,
          `La promoción exige titulación y proceso; la carrera horizontal no implica necesariamente cambio de puesto.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué diferencia a carrera, interino, laboral y eventual?`,
          `2. ¿Cómo se distinguen concurso, libre designación, carrera y promoción interna?`,
          `3. ¿Qué secuencia existe entre planificación, OEP, convocatoria, selección y toma de posesión?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Clasifica cada caso por vínculo, plaza, cuerpo y puesto. La mayoría de errores se produce por mezclar estos cuatro conceptos.`,
          `En un supuesto de selección comprueba órgano, publicación, requisitos, sistema, tribunal, fases, baremo y propuesta final.`
        ]}
      ],
      tree: `EMPLEO PÚBLICO CLM
├─ Personal
│  ├─ Carrera
│  ├─ Interino
│  ├─ Laboral
│  └─ Eventual
├─ Puestos y provisión
│  ├─ Concurso
│  ├─ Libre designación
│  └─ Formas temporales
├─ Carrera
│  ├─ Horizontal y vertical
│  └─ Promoción interna
└─ Selección
   ├─ OEP
   ├─ Convocatoria
   └─ Proceso y nombramiento`,
      reviewTable: [
        ['Figura', 'Finalidad', 'Clave'],
        ['Funcionario de carrera', 'Servicio permanente', 'Vínculo estatutario'],
        ['Interino', 'Necesidad y urgencia tasada', 'Cesa al terminar causa'],
        ['Eventual', 'Confianza o asesoramiento', 'Nombramiento y cese libre'],
        ['Concurso', 'Provisión ordinaria', 'Méritos objetivos'],
        ['Libre designación', 'Puestos previstos', 'Idoneidad y publicidad'],
        ['Promoción interna', 'Acceso a otro cuerpo/escala', 'Titulación y proceso'],
        ['OEP', 'Planificar nuevo ingreso', 'No abre solicitudes'],
        ['Convocatoria', 'Abrir proceso', 'Vincula a todos']
      ]
    },
    7: {
      sources: [SOURCES.prl, SOURCES.rsp],
      articleCoverage: [
        ['Arts. 14-29 LPRL', 'Derechos, principios, evaluación, planificación, información, formación, emergencias, vigilancia y obligaciones.'],
        ['Arts. 30-32 bis LPRL', 'Modalidades preventivas, servicios y presencia de recursos.'],
        ['Arts. 33-40 LPRL', 'Consulta, delegados, comité y colaboración.'],
        ['RD 39/1997', 'Organización, evaluación, planificación, niveles y acreditación de servicios.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La prevención protege seguridad y salud mediante integración en organización. El trabajador tiene derecho a protección eficaz y el empleador deber correlativo. El tema incluye derechos y obligaciones, modalidades y funciones de servicios de prevención y consulta y participación.`,
          `En un Ayuntamiento la normativa se aplica al personal con adaptaciones del sector público. Deben dominarse evaluación, planificación, formación, información, emergencias, riesgo grave e inminente, vigilancia de salud, delegados y comité.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La Ley 31/1995 fija marco; el Real Decreto 39/1997 desarrolla evaluación, planificación y servicios. Existen reglamentos específicos de lugares, pantallas, equipos y cargas.`,
          `La prevención es responsabilidad de organización y no se transfiere por contratar servicio ajeno. El coste de medidas no recae sobre trabajadores.`,
          `Las obligaciones del trabajador no reducen deber empresarial ni justifican ausencia de medios, formación o evaluación.`
        ]},
        { heading: '1. Conceptos básicos', paragraphs: [
          `Prevención es conjunto de actividades adoptadas en todas fases para evitar o disminuir riesgos. Riesgo es posibilidad de sufrir daño; daño incluye enfermedad, patología o lesión.`,
          `Riesgo grave e inminente es probable racionalmente que se materialice en futuro inmediato y pueda suponer daño grave. Equipo, condición, agente o procedimiento peligroso puede originar riesgo.`,
          `Protección colectiva actúa sobre origen o medio y prevalece sobre individual. El EPI se usa cuando riesgo no puede evitarse suficientemente por otros medios.`
        ]},
        { heading: '2. Derecho a protección eficaz', paragraphs: [
          `El personal tiene derecho y la Administración debe garantizar seguridad en todos aspectos relacionados. Incluye información, consulta, participación, formación, paralización y vigilancia.`,
          `Debe integrar prevención en sistema general mediante plan, evaluación y planificación. Se adapta a cambios y mejora permanente.`,
          `Las medidas alcanzan empleados propios y coordinación con contratas, autónomos y otras empresas concurrentes.`
        ]},
        { heading: '3. Principios de acción preventiva', paragraphs: [
          `Evitar riesgos; evaluar los inevitables; combatir en origen; adaptar trabajo a persona; tener en cuenta evolución técnica; sustituir peligro; planificar; anteponer colectiva; e instrucciones adecuadas.`,
          `La adaptación incluye concepción de puestos, elección de equipos y métodos, especialmente para reducir trabajo monótono y repetitivo.`,
          `La planificación integra técnica, organización, condiciones, relaciones sociales y factores ambientales.`
        ]},
        { heading: '4. Evaluación y planificación', paragraphs: [
          `La evaluación inicial considera actividad, puestos y personas especialmente sensibles. Se actualiza cuando cambian condiciones, hay daños o controles lo aconsejan.`,
          `Si revela riesgos, planificación fija medidas, responsables, recursos y calendario. Debe seguirse y modificarse si ineficaz.`,
          `En oficina se evalúan pantallas, postura, iluminación, electricidad, incendios, caídas, carga mental, atención al público y riesgos psicosociales.`
        ]},
        { heading: '5. Equipos de trabajo y protección', paragraphs: [
          `Los equipos deben ser adecuados y adaptados. Si presentan riesgo específico, uso y mantenimiento se reservan a personal capacitado.`,
          `Los EPI se proporcionan gratuitamente, se eligen según riesgo, ergonomía y persona, y se mantiene y repone.`,
          `El trabajador recibe instrucciones y usa correctamente, pero el EPI no sustituye eliminación del riesgo o protección colectiva.`
        ]},
        { heading: '6. Información y formación', paragraphs: [
          `Se informa sobre riesgos generales y específicos, medidas y emergencias. Si hay representantes, información general puede canalizarse, pero cada trabajador recibe la de su puesto.`,
          `La formación es teórica y práctica, suficiente, adecuada, al contratar y cuando cambian funciones, tecnologías o equipos.`,
          `Se imparte dentro de jornada o descontando tiempo, sin coste, y se repite si necesario. Un manual genérico no basta ante riesgo específico.`
        ]},
        { heading: '7. Emergencias y riesgo grave e inminente', paragraphs: [
          `La Administración analiza emergencias y adopta primeros auxilios, lucha contra incendios y evacuación, designa personal y coordina servicios externos.`,
          `Ante riesgo grave e inminente informa cuanto antes y adopta medidas para interrumpir actividad y abandonar lugar. El trabajador puede interrumpir si riesgo serio e inmediato.`,
          `Representantes pueden acordar paralización si empleador no actúa, comunicándolo. No hay perjuicio salvo mala fe o negligencia grave.`
        ]},
        { heading: '8. Vigilancia de la salud', paragraphs: [
          `Se garantiza vigilancia periódica según riesgos, normalmente con consentimiento. Es obligatoria en excepciones: evaluar efectos, comprobar peligro para sí o terceros o previsión legal.`,
          `Debe ser proporcional, respetar intimidad, dignidad y confidencialidad. Los datos médicos no se comunican sin consentimiento.`,
          `La organización recibe conclusiones de aptitud o necesidad preventiva, no diagnóstico. Puede prolongarse tras fin de relación si riesgo lo exige.`
        ]},
        { heading: '9. Personas especialmente sensibles, maternidad y menores', paragraphs: [
          `Se protegen quienes por características o estado sean sensibles. No se asignan puestos incompatibles o que pongan en peligro.`,
          `En embarazo o lactancia se evalúa exposición; se adapta condición o tiempo, se cambia puesto y, si imposible, se suspende relación por riesgo conforme normativa.`,
          `Los menores requieren evaluación previa específica e información a ellos y responsables, considerando falta de experiencia y madurez.`
        ]},
        { heading: '10. Obligaciones del personal', paragraphs: [
          `Debe velar según posibilidades por seguridad propia y ajena, usar adecuadamente máquinas, herramientas, sustancias y transporte.`,
          `Usar correctamente protección, no inutilizar dispositivos, informar de inmediato, contribuir al cumplimiento y cooperar.`,
          `El incumplimiento puede ser laboral o disciplinario. No elimina responsabilidad preventiva de Administración.`
        ]},
        { heading: '11. Organización preventiva', paragraphs: [
          `Modalidades: asunción personal del empresario en casos privados limitados, trabajadores designados, servicio propio, ajeno o mancomunado. En Administraciones se adapta organización.`,
          `Debe contar con medios y número suficientes. Las actividades especializadas se realizan por personal con formación preventiva de nivel básico, intermedio o superior.`,
          `La auditoría o evaluación externa procede en supuestos cuando no se concierta todo con entidad especializada.`
        ]},
        { heading: '12. Servicio de prevención', paragraphs: [
          `Es conjunto de medios humanos y materiales necesarios para asesorar y asistir a Administración, trabajadores y representantes.`,
          `Asesora en plan, evaluación, planificación, información, formación, emergencias, vigilancia y seguimiento. Debe ser interdisciplinar.`,
          `Puede ser propio o ajeno. La concertación debe definir actividades, centros, especialidades, medios y seguimiento.`
        ]},
        { heading: '13. Consulta previa', paragraphs: [
          `La Administración consulta con antelación decisiones sobre planificación y organización, nuevas tecnologías, organización preventiva, designación de emergencias, información, formación y medidas con efecto sustancial.`,
          `La consulta se realiza con representantes o directamente en ausencia. Debe permitir propuesta y respuesta motivada.`,
          `Informar después de decidir no satisface consulta previa real.`
        ]},
        { heading: '14. Delegados de Prevención', paragraphs: [
          `Son representantes con funciones específicas, designados por y entre representantes según escala. En Administraciones puede adaptarse por negociación.`,
          `Colaboran, promueven cooperación, son consultados y vigilan cumplimiento. Acompañan técnicos e inspectores, acceden a información, visitan lugares y proponen medidas.`,
          `Tienen garantías de representantes y deber de sigilo. No sustituyen responsabilidad de mandos o servicio.`
        ]},
        { heading: '15. Comité de Seguridad y Salud', paragraphs: [
          `Órgano paritario y colegiado de participación regular en centros con cincuenta o más trabajadores. Lo forman delegados y representantes de Administración en igual número.`,
          `Se reúne trimestralmente y cuando lo solicite representación. Participa en elaboración, puesta en práctica y evaluación y promueve mejoras.`,
          `Conoce situación, documentos, daños, memoria y programación. Puede realizar visitas y analizar incidentes.`
        ]},
        { heading: '16. Coordinación y documentación', paragraphs: [
          `Cuando concurren empresas o Administración y contratas, cooperan, intercambian información y coordinan medios. El titular informa de riesgos del centro.`,
          `Debe conservar plan, evaluación, planificación, controles de salud y relación de accidentes y enfermedades con baja superior a un día, además de documentación reglamentaria.`,
          `La Inspección vigila cumplimiento y puede requerir, paralizar y sancionar según régimen aplicable.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Prevención integrada: plan, evaluación, planificación y seguimiento.`,
          `Derechos: información, formación, consulta, paralización y vigilancia.`,
          `Organización: designados o servicios propio, ajeno o mancomunado.`,
          `Participación: delegados y comité desde 50 trabajadores.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `La vigilancia no es siempre obligatoria. El coste nunca recae sobre trabajador.`,
          `Protección colectiva prevalece sobre EPI. Consulta debe ser previa.`,
          `Comité es paritario; servicio asesora, pero no asume responsabilidad empresarial.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuáles son los nueve principios preventivos y cómo se aplican a oficina?`,
          `2. ¿Qué derechos existen ante riesgo grave e inminente y vigilancia de salud?`,
          `3. ¿Qué diferencia hay entre servicio, delegados y comité?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En supuestos ordena: identificar peligro, evaluar riesgo, eliminar, proteger colectivamente, EPI, información, formación y control.`,
          `Memoriza umbrales y excepciones, pero relaciona cada derecho con deber correlativo de la Administración.`
        ]}
      ],
      tree: `PREVENCIÓN
├─ Gestión
│  ├─ Plan
│  ├─ Evaluación
│  ├─ Planificación
│  └─ Seguimiento
├─ Derechos y medidas
│  ├─ Información y formación
│  ├─ Emergencias
│  ├─ Vigilancia de salud
│  └─ Protección especial
├─ Organización
│  ├─ Designados
│  └─ Servicios de prevención
└─ Participación
   ├─ Delegados
   └─ Comité`,
      reviewTable: [
        ['Materia', 'Regla', 'Artículo'],
        ['Protección eficaz', 'Derecho y deber correlativo', '14'],
        ['Principios', 'Nueve reglas preventivas', '15'],
        ['Evaluación', 'Inicial y actualizada', '16'],
        ['Formación', 'Suficiente y sin coste', '19'],
        ['Riesgo grave', 'Interrupción y abandono', '21'],
        ['Vigilancia', 'Voluntaria con excepciones', '22'],
        ['Delegados', 'Representación especializada', '35-37'],
        ['Comité', 'Paritario desde 50', '38-39']
      ]
    },
    8: {
      sources: [SOURCES.igualdadCLM, SOURCES.igualdadLO],
      articleCoverage: [
        ['Arts. 3-13 LO 3/2007', 'Igualdad, discriminación, acoso, acciones positivas y tutela.'],
        ['Arts. 14-22 LO 3/2007', 'Criterios generales y políticas públicas.'],
        ['Arts. 44-64 LO 3/2007', 'Trabajo, conciliación, planes y empleo público.'],
        ['Arts. 1-16 Ley 12/2010', 'Objeto, principios, transversalidad, lenguaje e informes.'],
        ['Arts. 17-65 Ley 12/2010', 'Medidas sectoriales, empleo, Administración y garantías.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La igualdad efectiva exige ausencia de discriminación y acción pública para eliminar desigualdades reales. La LO 3/2007 fija marco estatal; la Ley 12/2010 desarrolla Castilla-La Mancha.`,
          `Deben distinguirse igualdad formal y real, discriminación directa e indirecta, acoso sexual y por razón de sexo, acciones positivas, presencia equilibrada, transversalidad y planes de igualdad.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El artículo 14 CE y el artículo 9.2 fundamentan igualdad y obligación de remover obstáculos. La LO 3/2007 contiene definiciones básicas y reglas transversales.`,
          `La Ley 12/2010 amplía políticas en Castilla-La Mancha y vincula a poderes autonómicos y locales en su ámbito.`,
          `Las medidas deben interpretarse conforme a normativa europea. No toda diferencia de trato es discriminación si tiene justificación objetiva, finalidad legítima y proporcionalidad.`
        ]},
        { heading: '1. Igualdad de trato y oportunidades', paragraphs: [
          `Igualdad de trato supone ausencia de discriminación directa o indirecta por sexo, especialmente derivada de maternidad, obligaciones familiares o estado civil.`,
          `Igualdad de oportunidades exige condiciones para acceso, participación, empleo, formación, promoción, retribución y servicios.`,
          `La igualdad real puede requerir medidas específicas, no solo neutralidad formal.`
        ]},
        { heading: '2. Discriminación directa', paragraphs: [
          `Existe cuando una persona es, fue o pudiera ser tratada de manera menos favorable que otra comparable por sexo.`,
          `El embarazo y maternidad constituyen discriminación directa cuando motivan trato desfavorable.`,
          `No es necesario declarar intención discriminatoria: importan causa y resultado. Una orden aparentemente explícita de preferir hombres es ejemplo.`
        ]},
        { heading: '3. Discriminación indirecta', paragraphs: [
          `Una disposición, criterio o práctica aparentemente neutros sitúan a personas de un sexo en desventaja particular respecto del otro.`,
          `Puede justificarse si responde a objetivo legítimo y medios necesarios y adecuados. La carga de justificación corresponde en términos procesales aplicables.`,
          `Ejemplo: requisito horario o físico no relacionado con puesto que perjudica especialmente y carece de necesidad.`
        ]},
        { heading: '4. Acoso sexual y por razón de sexo', paragraphs: [
          `Acoso sexual es comportamiento verbal o físico de naturaleza sexual que produce propósito o efecto de atentar contra dignidad, especialmente creando entorno intimidatorio, degradante u ofensivo.`,
          `Acoso por razón de sexo es comportamiento realizado en función del sexo con mismo propósito o efecto. Ambos son discriminatorios.`,
          `Condicionar derecho o expectativa a aceptar acoso también discrimina. La Administración debe prevenir, investigar y proteger.`
        ]},
        { heading: '5. Orden de discriminar y represalias', paragraphs: [
          `Toda orden de discriminar por sexo se considera discriminación. No es excusa cumplir instrucción ilegal.`,
          `Es discriminatorio el trato adverso por presentar queja, reclamación, denuncia, demanda o recurso destinado a impedir discriminación.`,
          `La protección frente a represalia favorece denuncia y tutela efectiva, sin excluir responsabilidad por actuaciones fraudulentas.`
        ]},
        { heading: '6. Acciones positivas', paragraphs: [
          `Los poderes públicos adoptan medidas específicas a favor de mujeres para corregir desigualdades de hecho. Deben ser razonables y proporcionadas y subsistir mientras exista situación.`,
          `Las personas privadas también pueden adoptar medidas en términos legales. No son privilegios arbitrarios, sino instrumentos de igualdad material.`,
          `Se diferencian de discriminación inversa porque se basan en diagnóstico y límites.`
        ]},
        { heading: '7. Transversalidad y evaluación de impacto', paragraphs: [
          `La igualdad se integra activamente en adopción y ejecución de normas, políticas, presupuestos y actividades. No queda limitada a órgano de igualdad.`,
          `Los informes de impacto analizan efectos diferenciados y proponen correcciones. Las estadísticas deben incorporar variable sexo y evitar sesgos.`,
          `En un Ayuntamiento afecta a personal, contratación, subvenciones, urbanismo, deporte, cultura, atención y comunicación.`
        ]},
        { heading: '8. Presencia equilibrada', paragraphs: [
          `Se entiende composición donde personas de cada sexo no superan sesenta por ciento ni son menos de cuarenta, salvo razones fundadas y objetivas.`,
          `Se aplica como criterio en órganos, nombramientos y representación según normativa. No sustituye mérito y capacidad en selección.`,
          `Debe verificarse sobre conjunto correspondiente y documentar excepciones.`
        ]},
        { heading: '9. Lenguaje e imagen no sexistas', paragraphs: [
          `Las Administraciones deben usar lenguaje inclusivo y evitar imágenes estereotipadas o discriminatorias.`,
          `No implica sacrificar claridad jurídica. Se pueden emplear términos colectivos, dobles formas cuando aportan y redacción neutral.`,
          `Formularios y comunicaciones deben contemplar diversidad de situaciones sin reproducir roles.`
        ]},
        { heading: '10. Igualdad en empleo público', paragraphs: [
          `Las Administraciones remueven obstáculos en acceso, promoción, formación, retribución y condiciones. Convocatorias y tribunales respetan igualdad y presencia equilibrada.`,
          `Se adoptan protocolos frente a acoso, medidas de conciliación y corresponsabilidad, formación y evaluación de desigualdades.`,
          `Las medidas de conciliación no deben consolidar cargas exclusivas sobre mujeres ni penalizar carrera.`
        ]},
        { heading: '11. Planes de igualdad', paragraphs: [
          `Son conjunto ordenado de medidas tras diagnóstico para alcanzar igualdad y eliminar discriminación. Fijan objetivos, estrategias, acciones, calendario y seguimiento.`,
          `En Administraciones se negocian conforme normativa y abarcan selección, carrera, formación, retribución, conciliación, infrarrepresentación y acoso.`,
          `Un documento sin diagnóstico, responsables o evaluación no cumple función real.`
        ]},
        { heading: '12. Conciliación y corresponsabilidad', paragraphs: [
          `La normativa protege derechos relacionados con maternidad, paternidad, cuidados y adaptación, promoviendo reparto equilibrado.`,
          `La corresponsabilidad pretende que cuidados no recaigan sistemáticamente en mujeres.`,
          `Los derechos se ejercen conforme a regulación de empleo público y deben resolverse sin discriminación, motivando necesidades organizativas.`
        ]},
        { heading: '13. Contratación y subvenciones', paragraphs: [
          `Los poderes públicos pueden incorporar condiciones y criterios de igualdad compatibles con contratación y subvenciones.`,
          `Las bases pueden exigir compromisos, valorar planes o excluir sancionados cuando ley lo permita. Debe respetarse vinculación con objeto, proporcionalidad y transparencia.`,
          `En justificación se comprueba cumplimiento, no solo declaración.`
        ]},
        { heading: '14. Tutela y carga de la prueba', paragraphs: [
          `Los actos discriminatorios son nulos y generan reparación o indemnización efectiva y proporcionada, además de sanciones.`,
          `Cuando se aportan indicios fundados, corresponde a demandado justificar objetivamente medidas, salvo procesos penales.`,
          `La persona puede acudir a vías administrativa, laboral o judicial según relación y acto. Los plazos siguen corriendo y deben protegerse datos.`
        ]},
        { heading: '15. Ley 12/2010 en la actuación local', paragraphs: [
          `La ley castellano-manchega incorpora transversalidad, planificación, coordinación, participación y medidas en educación, empleo, salud, medio rural y violencia.`,
          `Las entidades locales colaboran y aplican igualdad en competencias, personal, servicios, subvenciones y comunicación.`,
          `Debe coordinarse con LO 3/2007 y normativa de violencia, empleo y contratación. La ley autonómica puede ampliar, no reducir, garantías básicas.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Directa: trato menos favorable por sexo. Indirecta: criterio neutro con desventaja particular.`,
          `Acoso sexual se basa en naturaleza sexual; por razón de sexo, en el sexo.`,
          `Acción positiva corrige desigualdad real; transversalidad integra igualdad en todas políticas.`,
          `Presencia equilibrada: 40/60 como regla legal.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `No exigir intención para apreciar discriminación. Embarazo es directa.`,
          `Una medida neutra puede discriminar indirectamente. Acción positiva no es privilegio sin límites.`,
          `Plan de igualdad requiere diagnóstico y seguimiento, no solo declaración.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo distinguir directa, indirecta, acoso sexual y por razón de sexo?`,
          `2. ¿Qué son acción positiva, transversalidad y presencia equilibrada?`,
          `3. ¿Cómo se aplica igualdad en empleo, contratación, subvenciones y atención municipal?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un caso identifica criterio, grupo perjudicado, comparación, justificación y proporcionalidad.`,
          `Relaciona cada concepto con un ejemplo municipal. Las preguntas suelen cambiar una palabra: sexo, sexual, neutro, particular o proporcional.`
        ]}
      ],
      tree: `IGUALDAD
├─ Conceptos
│  ├─ Igualdad de trato y oportunidades
│  ├─ Discriminación directa
│  ├─ Discriminación indirecta
│  └─ Acoso y represalias
├─ Instrumentos
│  ├─ Acciones positivas
│  ├─ Transversalidad
│  ├─ Impacto y estadísticas
│  └─ Planes de igualdad
└─ Aplicación pública
   ├─ Empleo
   ├─ Contratación y subvenciones
   └─ Tutela`,
      reviewTable: [
        ['Concepto', 'Definición', 'Referencia'],
        ['Directa', 'Trato menos favorable por sexo', 'Art. 6.1 LO'],
        ['Indirecta', 'Criterio neutro con desventaja', 'Art. 6.2 LO'],
        ['Acoso sexual', 'Conducta de naturaleza sexual', 'Art. 7.1 LO'],
        ['Acoso por sexo', 'Conducta en función del sexo', 'Art. 7.2 LO'],
        ['Acción positiva', 'Corregir desigualdad de hecho', 'Art. 11 LO'],
        ['Transversalidad', 'Integrar igualdad en toda acción', 'Art. 15 LO'],
        ['Presencia equilibrada', '40/60', 'DA 1.ª LO'],
        ['Tutela', 'Nulidad, reparación y carga probatoria', 'Arts. 10, 12-13']
      ]
    },
    9: {
      sources: [SOURCES.lopdgdd, SOURCES.rgpd],
      articleCoverage: [
        ['Arts. 4-11 RGPD', 'Definiciones, principios, licitud, consentimiento y menores.'],
        ['Arts. 12-23 RGPD', 'Información y derechos de las personas.'],
        ['Arts. 24-43 RGPD', 'Responsable, encargado, seguridad, delegado y evaluación.'],
        ['Arts. 5-32 LOPDGDD', 'Principios, bases, derechos y tratamientos concretos.'],
        ['Arts. 79-97 LOPDGDD', 'Garantía de los derechos digitales.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La protección de datos regula cualquier operación con información de personas físicas identificadas o identificables. El RGPD contiene marco europeo y la LO 3/2018 lo adapta y añade derechos digitales.`,
          `El auxiliar municipal trata padrones, expedientes, tributos, personal y registro. Debe dominar principios, bases jurídicas, derechos, responsable y encargado, seguridad, brechas, delegado, categorías especiales y derechos digitales.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El RGPD es directamente aplicable y prevalece en su ámbito. La LO 3/2018 completa aspectos nacionales. Debe citarse ambos y no estudiar solo la ley orgánica.`,
          `Las Administraciones basan gran parte del tratamiento en obligación legal, misión de interés público o ejercicio de poderes, no en consentimiento.`,
          `La transparencia no elimina protección. El acceso a documentos requiere ponderación, disociación y normativa específica.`
        ]},
        { heading: '1. Dato personal y tratamiento', paragraphs: [
          `Dato personal es información sobre persona identificada o identificable: nombre, DNI, dirección, matrícula, IP, voz, imagen o combinación. Los datos de personas jurídicas no están protegidos como tales, aunque contengan datos de personas físicas.`,
          `Tratamiento es recoger, registrar, organizar, conservar, modificar, consultar, usar, comunicar, difundir, limitar, suprimir o destruir, automatizado o no en fichero.`,
          `Seudonimizar reduce vinculación mediante información separada; anonimizar irreversiblemente saca del ámbito. La mera ocultación visual no siempre anonimiza.`
        ]},
        { heading: '2. Principios', paragraphs: [
          `Licitud, lealtad y transparencia; limitación de finalidad; minimización; exactitud; limitación de conservación; integridad y confidencialidad; y responsabilidad proactiva.`,
          `La entidad debe poder demostrar cumplimiento. No basta actuar correctamente: documenta registros, análisis, contratos, protocolos y medidas.`,
          `Los datos inexactos se rectifican o suprimen sin dilación. No se conservan indefinidamente por si acaso.`
        ]},
        { heading: '3. Bases de licitud', paragraphs: [
          `Tratamiento es lícito por consentimiento, contrato, obligación legal, intereses vitales, misión de interés público o poder público, e interés legítimo cuando aplicable.`,
          `Las autoridades no usan interés legítimo para tareas públicas en la misma forma. La base debe identificarse antes de tratar y comunicarse.`,
          `El consentimiento debe ser libre, específico, informado e inequívoco y revocable. No es válido silencio o casilla premarcada.`
        ]},
        { heading: '4. Categorías especiales y datos penales', paragraphs: [
          `Son especiales origen racial o étnico, opiniones políticas, religión, afiliación sindical, genética, biometría identificativa, salud, vida u orientación sexual. Su tratamiento está prohibido salvo excepción.`,
          `Las excepciones incluyen consentimiento explícito, obligaciones laborales, intereses vitales, asociaciones, datos públicos, reclamaciones, interés público esencial, salud, interés público sanitario e investigación con garantías.`,
          `Datos de condenas e infracciones se tratan bajo control público o habilitación legal con garantías.`
        ]},
        { heading: '5. Información y transparencia', paragraphs: [
          `Cuando se recogen datos se informa de responsable, delegado, fines, base, destinatarios, transferencias, conservación, derechos, reclamación y si obligación o decisiones automatizadas.`,
          `Si no se obtienen del interesado, se informa además de categorías y fuente, con excepciones.`,
          `La información debe ser concisa, transparente, inteligible y accesible. Puede organizarse por capas, pero lo esencial debe estar disponible.`
        ]},
        { heading: '6. Derecho de acceso', paragraphs: [
          `Permite confirmar si se tratan datos y obtener acceso, fines, categorías, destinatarios, plazo, derechos, fuente y decisiones.`,
          `Se facilita copia sin afectar derechos de terceros. En expedientes, derecho RGPD se distingue del acceso administrativo del interesado.`,
          `Se responde en un mes, ampliable dos meses por complejidad o número, informando dentro del primero.`
        ]},
        { heading: '7. Rectificación, supresión y limitación', paragraphs: [
          `Rectificación corrige datos inexactos y completa incompletos. Supresión procede cuando no necesarios, se retira consentimiento sin otra base, oposición prevalece, tratamiento ilícito o obligación legal.`,
          `No procede supresión cuando necesario para libertad de expresión, obligación o tarea pública, salud, archivo público, investigación o reclamaciones.`,
          `Limitación conserva sin usar ampliamente cuando se discute exactitud, tratamiento ilícito preferido, reclamaciones u oposición en verificación.`
        ]},
        { heading: '8. Oposición, portabilidad y decisiones automatizadas', paragraphs: [
          `Oposición permite oponerse por situación particular a tratamientos de interés público o legítimo; responsable deja de tratar salvo motivos imperiosos o reclamaciones. En mercadotecnia es absoluta.`,
          `Portabilidad se aplica a datos facilitados, tratamiento automatizado basado en consentimiento o contrato; no normalmente a potestad pública.`,
          `Existe derecho a no ser objeto de decisión solo automatizada con efectos jurídicos o significativos, salvo contrato, ley o consentimiento explícito con garantías.`
        ]},
        { heading: '9. Responsable y encargado', paragraphs: [
          `Responsable determina fines y medios. Encargado trata por cuenta del responsable. Un proveedor informático municipal puede ser encargado si no decide fines propios.`,
          `La relación se documenta por contrato o acto jurídico con objeto, duración, naturaleza, datos, instrucciones, confidencialidad, seguridad, subencargos, asistencia y destino final.`,
          `Si encargado usa datos para fines propios, puede convertirse en responsable respecto de ese tratamiento.`
        ]},
        { heading: '10. Registro de actividades y análisis de riesgos', paragraphs: [
          `Las Administraciones mantienen registro de actividades con fines, categorías, destinatarios, transferencias, plazos y medidas. La LOPDGDD exige publicación de inventario en términos.`,
          `Se evalúan riesgos para derechos y libertades considerando naturaleza, alcance, contexto y fines. Las medidas se adaptan a riesgo.`,
          `Cuando tratamiento probablemente entraña alto riesgo, se realiza evaluación de impacto previa. Si riesgo residual alto, consulta a autoridad.`
        ]},
        { heading: '11. Seguridad y brechas', paragraphs: [
          `Se aplican medidas técnicas y organizativas: control de acceso, cifrado o seudonimización, copias, continuidad, actualización, registro y formación.`,
          `Una brecha es destrucción, pérdida, alteración, divulgación o acceso no autorizados. Se documenta siempre y se notifica a autoridad en 72 horas cuando haya riesgo.`,
          `Si alto riesgo, se comunica al afectado salvo medidas que lo eviten, datos ininteligibles o esfuerzo desproporcionado con comunicación pública.`
        ]},
        { heading: '12. Delegado de Protección de Datos', paragraphs: [
          `Las autoridades y organismos públicos designan DPD, salvo tribunales en función judicial. Debe tener conocimientos especializados y actuar con independencia.`,
          `Informa, asesora, supervisa, coopera con autoridad y actúa como contacto. Participa tempranamente y dispone de recursos.`,
          `No decide por responsable ni asume cumplimiento. Sus datos de contacto se publican y comunican a autoridad.`
        ]},
        { heading: '13. Deber de confidencialidad', paragraphs: [
          `Responsables, encargados y cualquier persona interviniente están sujetos a confidencialidad, complementaria al secreto profesional.`,
          `Persiste tras finalizar relación. El acceso debe limitarse a necesidad funcional.`,
          `No se facilitan datos por teléfono sin verificar identidad ni se dejan expedientes o pantallas accesibles. El correo debe usar destinatarios correctos y canales seguros.`
        ]},
        { heading: '14. Datos en Administraciones y transparencia', paragraphs: [
          `El tratamiento público requiere competencia y base legal. La cesión entre órganos se limita a fines compatibles o habilitación.`,
          `La publicidad activa y acceso se ponderan: datos especialmente protegidos tienen límites intensos; datos identificativos de organización pueden publicarse; otros requieren interés y minimización.`,
          `Se utiliza acceso parcial, disociación o anonimización. El CSV no implica que cualquier documento deba exponerse sin control.`
        ]},
        { heading: '15. Derechos digitales', paragraphs: [
          `La LO reconoce neutralidad y acceso universal a internet, seguridad, educación digital, protección de menores, rectificación y actualización en medios y olvido en buscadores y redes.`,
          `En trabajo regula intimidad en dispositivos, desconexión digital, videovigilancia, grabación de sonidos y geolocalización, con información y proporcionalidad.`,
          `Las políticas internas deben establecer usos y garantías con participación. El dispositivo corporativo no elimina toda expectativa de intimidad.`
        ]},
        { heading: '16. Autoridad de control y responsabilidad', paragraphs: [
          `La Agencia Española de Protección de Datos supervisa y puede investigar, requerir, limitar, ordenar y sancionar. Existen autoridades autonómicas en ámbitos.`,
          `Las Administraciones pueden recibir apercibimientos y medidas correctoras, con traslado a órganos responsables, además de responsabilidad disciplinaria.`,
          `Toda persona con daños materiales o inmateriales puede reclamar indemnización conforme RGPD.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Principios: licitud, finalidad, minimización, exactitud, conservación, seguridad y responsabilidad.`,
          `Bases: consentimiento, contrato, ley, vitales, interés público/poder e interés legítimo.`,
          `Derechos: acceso, rectificación, supresión, oposición, limitación, portabilidad y automatizadas.`,
          `Brecha: documentar; notificar en 72 horas si riesgo; comunicar si alto riesgo.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Las Administraciones no piden consentimiento para todo. Dato seudonimizado sigue siendo personal.`,
          `Supresión no es absoluta. Portabilidad no suele aplicarse a tarea pública.`,
          `DPD asesora, no sustituye al responsable. Una brecha no es solo ataque informático.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuáles son principios y bases de licitud y cuál usa normalmente un Ayuntamiento?`,
          `2. ¿Qué derechos existen y en qué plazo se responden?`,
          `3. ¿Qué deben hacer responsable, encargado y DPD ante un tratamiento y una brecha?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Para cada caso responde: dato, finalidad, base, acceso, plazo, medida y derecho.`,
          `En preguntas de protección de datos desconfía de absolutos: siempre consentimiento, siempre borrar, acceso total o prohibición total.`
        ]}
      ],
      tree: `PROTECCIÓN DE DATOS
├─ Principios y bases
│  ├─ Licitud y transparencia
│  ├─ Finalidad y minimización
│  └─ Seguridad y responsabilidad
├─ Derechos
│  ├─ Información y acceso
│  ├─ Rectificación y supresión
│  ├─ Oposición y limitación
│  └─ Portabilidad y automatización
├─ Organización
│  ├─ Responsable y encargado
│  ├─ Registro y riesgos
│  └─ DPD
└─ Seguridad y derechos digitales`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Dato personal', 'Persona identificada o identificable', 'Art. 4 RGPD'],
        ['Principios', 'Siete ejes y responsabilidad', 'Art. 5'],
        ['Licitud', 'Seis bases', 'Art. 6'],
        ['Acceso', 'Confirmación y copia', 'Art. 15'],
        ['Respuesta', 'Un mes, ampliable dos', 'Art. 12'],
        ['Encargado', 'Contrato y tratamiento por cuenta', 'Art. 28'],
        ['Brecha', '72 horas si riesgo', 'Art. 33'],
        ['DPD', 'Obligatorio en autoridades', 'Art. 37']
      ]
    },
    10: {
      sources: [SOURCES.trlrhl, SOURCES.lgt, SOURCES.rgr],
      articleCoverage: [
        ['Arts. 2, 7, 12-14 TRLRHL', 'Recursos, delegación, aplicación, gestión y revisión.'],
        ['Arts. 15-19 TRLRHL', 'Ordenanzas fiscales y potestad tributaria.'],
        ['Arts. 17-18, 20-45 LGT', 'Principios, relación jurídico-tributaria, obligaciones y obligados.'],
        ['Arts. 46-48, 59-75 LGT', 'Representación, domicilio, extinción, pago, prescripción y compensación.'],
        ['Arts. 117-140 LGT', 'Gestión tributaria y procedimientos.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La tributación local se basa en Constitución, Ley General Tributaria y TRLRHL. La entidad solo establece tributos previstos por ley mediante ordenanzas. El tema incluye principios, delegación, colaboración, beneficios, obligaciones, obligados, gestión y extinción.`,
          `Debe diferenciarse potestad normativa, gestión y recaudación; contribuyente, sustituto y responsable; exención y bonificación; liquidación y autoliquidación; pago, prescripción y compensación.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La reserva de ley determina elementos esenciales. La ordenanza concreta dentro de márgenes. No puede crear tributo o beneficio sin habilitación.`,
          `La LGT se aplica a tributos locales con especialidades del TRLRHL. La gestión puede delegarse en Diputación u otra entidad, sin perder titularidad.`,
          `Las ordenanzas vigentes de La Puebla deben consultarse para tipos, cuotas, bonificaciones y calendarios; el temario general no debe inventar importes locales.`
        ]},
        { heading: '1. Principios constitucionales y tributarios', paragraphs: [
          `Todos contribuyen según capacidad económica mediante sistema justo inspirado en igualdad y progresividad sin alcance confiscatorio.`,
          `La ordenación respeta generalidad, justicia, capacidad, igualdad, progresividad, proporcionalidad, eficacia y limitación de costes indirectos.`,
          `La aplicación se basa en proporcionalidad, eficacia y respeto a derechos. No se admiten analogía para extender hecho imponible, exenciones o beneficios.`
        ]},
        { heading: '2. Potestad tributaria local', paragraphs: [
          `Las entidades establecen y exigen tributos conforme Constitución, leyes y ordenanzas. Los municipios exigen impuestos obligatorios y pueden establecer potestativos.`,
          `La imposición y ordenación se acuerdan por pleno. La ordenanza regula elementos permitidos y gestión.`,
          `La autonomía financiera no permite crear figuras fuera de ley ni contradecir LGT o TRLRHL.`
        ]},
        { heading: '3. Ordenanzas fiscales', paragraphs: [
          `Contienen determinación de hecho, sujeto, responsables, exenciones, reducciones, base, tipo, cuota, periodo, devengo y gestión dentro de ley.`,
          `Aprobación provisional, exposición mínima treinta días, reclamaciones, aprobación definitiva o elevación automática y publicación íntegra.`,
          `Contra disposición definitiva cabe contencioso, no recurso administrativo ordinario. Las liquidaciones sí se recurren por cauces tributarios.`
        ]},
        { heading: '4. Delegación', paragraphs: [
          `La entidad puede delegar gestión, liquidación, inspección y recaudación en otras entidades locales o comunidad. El acuerdo determina alcance y contenido y se publica.`,
          `La Diputación puede prestar servicios tributarios a municipios. Los actos los dicta órgano delegado en marco del acuerdo.`,
          `Delegar ejercicio no transfiere titularidad del recurso ni permite actuar fuera de alcance.`
        ]},
        { heading: '5. Colaboración e intercambio de información', paragraphs: [
          `Administraciones colaboran en aplicación mediante información, asistencia y actuaciones coordinadas. Los datos tributarios tienen carácter reservado y usos tasados.`,
          `La cesión requiere finalidad legal, competencia y seguridad. Protección de datos y secreto tributario se aplican conjuntamente.`,
          `El obligado debe proporcionar información con trascendencia tributaria en términos legales. La Administración no solicita datos irrelevantes.`
        ]},
        { heading: '6. Beneficios fiscales', paragraphs: [
          `Son exenciones, bonificaciones, reducciones, deducciones u otros previstos. Requieren norma con rango adecuado.`,
          `Pueden ser obligatorios o potestativos. Los potestativos necesitan ordenanza y respetar límites.`,
          `El reconocimiento puede ser automático o rogado. El interesado acredita requisitos y mantenimiento; la Administración comprueba y regulariza.`
        ]},
        { heading: '7. Relación jurídico-tributaria', paragraphs: [
          `Conjunto de obligaciones, deberes, derechos y potestades originados por aplicación de tributos. Incluye obligación principal, pagos a cuenta, accesorias y formales.`,
          `La obligación principal es pagar cuota. Accesorias incluyen intereses y recargos; las sanciones no son accesorias.`,
          `Las obligaciones formales comprenden declaraciones, libros, facturas, domicilio, NIF e información.`
        ]},
        { heading: '8. Hecho imponible, no sujeción y exención', paragraphs: [
          `El hecho imponible es presupuesto fijado por ley cuya realización origina obligación principal. El devengo marca nacimiento y momento de circunstancias.`,
          `La no sujeción indica que hecho queda fuera de definición. La exención realiza hecho pero ley dispensa pago.`,
          `No deben confundirse con bonificación, que reduce cuota, ni prescripción, que extingue derecho por tiempo.`
        ]},
        { heading: '9. Obligados tributarios', paragraphs: [
          `Incluyen contribuyentes, sustitutos, retenedores, obligados a ingresos a cuenta, repercutidos, sucesores, beneficiarios de exención y otros.`,
          `Contribuyente realiza hecho imponible. Sustituto, por ley, ocupa lugar y puede repercutir salvo disposición.`,
          `Pueden existir responsables solidarios o subsidiarios, declarados mediante procedimiento con alcance y audiencia.`
        ]},
        { heading: '10. Capacidad, representación y domicilio', paragraphs: [
          `Tienen capacidad personas con capacidad jurídica y entidades sin personalidad que constituyan unidad económica o patrimonio susceptible de imposición.`,
          `La representación voluntaria se presume para trámites y se acredita para recursos, desistimiento, renuncia, reconocimiento y obligaciones.`,
          `El domicilio fiscal localiza al obligado; debe comunicarse cambio. Para personas físicas suele residencia habitual; para jurídicas, domicilio social con gestión efectiva.`
        ]},
        { heading: '11. Cuantificación de la deuda', paragraphs: [
          `Base imponible mide o valora hecho. Base liquidable resulta tras reducciones. Tipo se aplica para cuota íntegra; deducciones o bonificaciones producen líquida.`,
          `La deuda incluye cuota o cantidad y, en su caso, interés, recargos por extemporánea y ejecutivo y otros. Sanciones no forman parte.`,
          `Los métodos de determinación son directa, objetiva y estimación indirecta en supuestos legales.`
        ]},
        { heading: '12. Procedimientos de gestión', paragraphs: [
          `La gestión recibe y tramita declaraciones, autoliquidaciones, comunicaciones, devoluciones, beneficios, comprobaciones, censos y liquidaciones.`,
          `Puede iniciarse por declaración, autoliquidación, comunicación o de oficio. Cada procedimiento tiene objeto, alcance y plazo.`,
          `En tributos periódicos la gestión puede articularse por padrón o matrícula, con notificación colectiva tras alta individual.`
        ]},
        { heading: '13. Declaración, autoliquidación y liquidación', paragraphs: [
          `Declaración comunica hechos para que Administración liquide. Autoliquidación calcula y paga por obligado. Comunicación solicita o informa para devolución.`,
          `La liquidación es acto administrativo que determina deuda o cantidad a devolver. Puede ser provisional o definitiva.`,
          `La Administración debe motivar hechos, elementos y fundamentos cuando no coincide con declarado o aumenta base.`
        ]},
        { heading: '14. Comprobación y verificación', paragraphs: [
          `Verificación corrige defectos, errores, discrepancias patentes o aplicación indebida visible. No examina actividades económicas profundamente.`,
          `Comprobación de valores aplica medios legales y puede promover tasación pericial contradictoria. Comprobación limitada examina datos dentro de alcance.`,
          `El obligado tiene audiencia y derecho a conocer alcance. Una comprobación limitada cerrada limita nueva regularización sobre objeto salvo nuevos hechos.`
        ]},
        { heading: '15. Extinción por pago', paragraphs: [
          `El pago se realiza en efectivo o efectos admitidos, por obligado o tercero, dentro de voluntaria o ejecutiva. El tercero no se subroga en derechos salvo pacto civil.`,
          `Puede imputarse a deudas; si no, se aplican reglas. El pago libera por importe y se acredita con justificante.`,
          `El pago extemporáneo puede generar recargos e intereses. Una solicitud de aplazamiento en periodo voluntario impide inicio ejecutivo mientras se tramita en términos.`
        ]},
        { heading: '16. Prescripción', paragraphs: [
          `Prescriben a cuatro años derechos de Administración a liquidar y exigir pago, y derechos a solicitar y obtener devoluciones.`,
          `El plazo comienza según cada derecho y se interrumpe por actuaciones fehacientes de Administración o obligado, recursos y actuaciones concursales.`,
          `Se aplica de oficio y extingue deuda. La prescripción ganada aprovecha a demás obligados en términos legales.`
        ]},
        { heading: '17. Compensación, condonación e insolvencia', paragraphs: [
          `La compensación extingue deudas con créditos reconocidos frente a Administración, de oficio o a instancia según periodo y requisitos.`,
          `La condonación solo por ley y cuantía o condiciones establecidas. No puede decidirla libremente el Ayuntamiento.`,
          `Deudas incobrables se dan de baja provisional por insolvencia; pueden rehabilitarse si mejora solvencia dentro de prescripción.`
        ]},
        { heading: '18. Derechos y garantías del obligado', paragraphs: [
          `Tiene derecho a información, asistencia, devolución, reembolso de garantías, conocer estado, identidad, certificados, no aportar documentos, alegar, audiencia y trato respetuoso.`,
          `Puede obtener copia y acceso a expediente en condiciones. La Administración debe motivar y respetar proporcionalidad.`,
          `El cumplimiento formal no elimina derecho a rectificar autoliquidación o recurrir liquidación.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Reserva de ley + ordenanza dentro de margen. Delegación transfiere ejercicio, no titularidad.`,
          `Contribuyente realiza hecho; sustituto ocupa lugar por ley; responsable responde tras procedimiento.`,
          `Declaración informa; autoliquidación calcula; liquidación decide Administración.`,
          `Extinción: pago, prescripción, compensación, condonación y otros.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Exención no es no sujeción. Sanción no forma parte de deuda.`,
          `Beneficio fiscal no puede crearse por mera voluntad local.`,
          `Prescripción es cuatro años y se aplica de oficio; delegación no cambia titular del tributo.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo se relacionan ley, ordenanza, delegación y colaboración?`,
          `2. ¿Qué diferencias hay entre contribuyente, sustituto, responsable y sucesor?`,
          `3. ¿Cómo se inicia la gestión y por qué medios se extingue la deuda?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En cada caso identifica tributo, hecho, devengo, sujeto, base, cuota, acto, plazo y vía de extinción.`,
          `Separa conceptos jurídicos de documentos informáticos: padrón no es siempre padrón municipal; autoliquidación no es liquidación.`
        ]}
      ],
      tree: `TRIBUTACIÓN LOCAL
├─ Fuentes y principios
│  ├─ Constitución y reserva de ley
│  ├─ LGT y TRLRHL
│  └─ Ordenanzas
├─ Organización
│  ├─ Delegación
│  └─ Colaboración
├─ Relación tributaria
│  ├─ Hecho y devengo
│  ├─ Obligaciones
│  └─ Obligados
├─ Gestión
│  ├─ Declaración / autoliquidación
│  ├─ Liquidación
│  └─ Comprobación
└─ Extinción`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Potestad local', 'Dentro de ley y ordenanza', 'Arts. 12-15 TRLRHL'],
        ['Delegación', 'Ejercicio, no titularidad', 'Art. 7 TRLRHL'],
        ['Hecho imponible', 'Origina obligación principal', 'Art. 20 LGT'],
        ['Exención', 'Hecho realizado sin pago', 'Art. 22'],
        ['Contribuyente', 'Realiza hecho', 'Art. 36'],
        ['Deuda', 'Cuota, interés y recargos', 'Art. 58'],
        ['Prescripción', 'Cuatro años', 'Art. 66'],
        ['Gestión', 'Declaraciones, liquidaciones y comprobación', 'Art. 117']
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
      block: 'La Puebla 6-10'
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
    pendingThemes: Array.from({ length: 19 }, (_, index) => index + 1).filter(number => !completedThemes.includes(number))
  };

  window.OPOWEB_PUEBLA_TEORIA_V86_BLOQUE2 = {
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v86.pendingThemes
  };
})();
