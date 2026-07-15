(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-15';
  const source = {
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    rd500: { label: 'Real Decreto 500/1990, presupuestos de las entidades locales', reference: 'BOE-A-1990-9664', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1990-9664' },
    structure: { label: 'Orden EHA/3565/2008, estructura de presupuestos locales', reference: 'BOE-A-2008-19916', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2008-19916' },
    ce: { label: 'Constitución Española', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    rgpd: { label: 'Reglamento (UE) 2016/679, protección de datos', reference: 'CELEX:32016R0679', url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679' },
    lopdgdd: { label: 'Ley Orgánica 3/2018, protección de datos y derechos digitales', reference: 'BOE-A-2018-16673', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673' },
    transparency: { label: 'Ley 19/2013, transparencia, acceso y buen gobierno', reference: 'BOE-A-2013-12887', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887' }
  };

  const THEORY = {
    27: {
      sources: [source.trlrhl, source.rd500, source.structure],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El presupuesto general de una entidad local es la expresión cifrada, conjunta y sistemática de las obligaciones que, como máximo, pueden reconocer la entidad y sus organismos, y de los derechos que se prevén liquidar durante el ejercicio. No es solo una relación contable: es el instrumento jurídico, económico y político que autoriza el gasto, estima los ingresos, ordena la actividad financiera y permite controlar si la gestión se ajusta a legalidad, estabilidad y sostenibilidad. Para este tema deben dominarse cinco bloques: concepto y principios; contenido e integración; bases de ejecución; elaboración y aprobación; y prórroga.`,
          `La regulación principal se encuentra en los artículos 162 a 171 del texto refundido de la Ley Reguladora de las Haciendas Locales y en el Real Decreto 500/1990. La estructura funcional y económica se completa con la Orden EHA/3565/2008. El examen suele mezclar órgano competente, documentos que integran el expediente, plazos, exposición pública, reclamaciones y efectos de la prórroga. La respuesta correcta depende de distinguir aprobación inicial y definitiva, presupuesto general y presupuestos integrantes, créditos de gasto y previsiones de ingreso, y bases de ejecución frente a reglamentos administrativos ajenos al presupuesto.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El presupuesto general integra el presupuesto de la propia entidad, los de sus organismos autónomos y los estados de previsión de gastos e ingresos de las sociedades mercantiles cuyo capital pertenezca íntegramente a la entidad local. A él se unen, como anexos, los planes y programas de inversión y financiación para un horizonte temporal determinado, los programas anuales de actuación, inversiones y financiación de sociedades dependientes, el estado de consolidación y el estado de previsión de movimientos y situación de la deuda, además de la documentación exigida por la normativa. La consolidación evita sumar dos veces operaciones internas entre entes del mismo grupo local.`,
          `Cada presupuesto integrante contiene un estado de gastos, con créditos necesarios para atender obligaciones, y un estado de ingresos, con estimaciones de recursos. Los créditos para gastos tienen carácter limitativo y vinculante en los niveles establecidos legalmente o en las bases de ejecución. Los derechos previstos no autorizan por sí mismos a exigir ingresos que carezcan de cobertura legal, mientras que los créditos de gasto marcan el límite cuantitativo de las obligaciones que pueden reconocerse, salvo modificaciones presupuestarias aprobadas conforme a la ley.`
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          `El presupuesto responde a los principios de unidad, anualidad, equilibrio o nivelación inicial, especialidad cualitativa, cuantitativa y temporal, universalidad y no afectación, con las excepciones legales. La anualidad significa que el ejercicio presupuestario coincide con el año natural y que a él se imputan los derechos liquidados y las obligaciones reconocidas durante el ejercicio conforme a las reglas legales. La especialidad cualitativa impide destinar un crédito a finalidad distinta; la cuantitativa impide superar su importe; y la temporal impide reconocer con cargo al ejercicio obligaciones que no correspondan, salvo excepciones. La no afectación supone que el conjunto de los recursos financia el conjunto de las obligaciones, excepto ingresos legalmente afectados a fines determinados.`,
          `El artículo 165 del texto refundido exige que cada presupuesto incluya estados de gastos e ingresos y las bases de ejecución. También impone que los recursos se destinen al conjunto de obligaciones salvo afectación específica, que los derechos se estimen sin minoración por costes de recaudación y que los presupuestos se aprueben sin déficit inicial. La estabilidad presupuestaria y la sostenibilidad financiera operan como límites adicionales. En test, “sin déficit inicial” no significa que ingresos y gastos deban ejecutarse exactamente por igual, sino que el presupuesto debe nacer nivelado en los términos jurídicos aplicables.`,
          `Las bases de ejecución adaptan las disposiciones generales presupuestarias a la organización y circunstancias de la entidad y de sus organismos. Pueden establecer prevenciones convenientes para la gestión del gasto y la recaudación, pero no modificar normas legales de administración económica ni introducir preceptos administrativos que requieran procedimiento y solemnidades diferentes. Son una norma interna ligada al presupuesto de cada ejercicio y no una autorización para alterar competencias, omitir fiscalización o crear procedimientos contrarios a la ley.`,
          `Entre las materias que deben o pueden concretar las bases se encuentran los niveles de vinculación jurídica de los créditos; relación de créditos ampliables y recursos afectados; régimen y competencia de transferencias; tramitación de ampliaciones, generaciones e incorporaciones; procedimiento de ejecución del gasto; delegaciones o desconcentraciones de autorización, disposición y reconocimiento de obligaciones; documentos justificativos; acreditación y justificación de subvenciones; acumulación de fases; pagos a justificar; anticipos de caja fija; y compromisos plurianuales. Cuando exista reglamento general aprobado por el Pleno, las bases pueden remitirse expresamente a él sin repetir su contenido.`,
          `La vinculación jurídica determina el nivel al que opera el límite del crédito. Una aplicación puede carecer de saldo individual y, sin embargo, existir disponibilidad dentro de la bolsa vinculante; a la inversa, no puede utilizarse crédito de distinta vinculación sin la modificación procedente. Los créditos ampliables deben aparecer de forma expresa y taxativa y su aumento depende de recursos afectados reconocidos. Las transferencias desplazan crédito entre aplicaciones sin modificar el total del presupuesto, sujetas a límites y competencias. La incorporación de remanentes, generación, suplementos, créditos extraordinarios y bajas son modificaciones distintas y requieren causa, financiación y órgano competente.`,
          `La elaboración comienza con el presupuesto de la entidad formado por su presidente y con los proyectos remitidos por organismos autónomos y sociedades. Debe acompañarse memoria explicativa, liquidación del presupuesto anterior y avance del corriente, anexo de personal, anexo de inversiones, informe económico-financiero, estado de consolidación, previsión de deuda y demás documentación exigible. El informe económico-financiero expone bases de evaluación de ingresos, suficiencia de créditos para obligaciones y gastos de funcionamiento y nivelación efectiva del presupuesto. La Intervención informa el proyecto antes de su elevación al Pleno.`,
          `El presidente remite el presupuesto general al Pleno con sus anexos y documentación. El Pleno es competente para aprobarlo inicialmente. La aprobación inicial se expone al público, previo anuncio en el boletín oficial, durante quince días hábiles, dentro de los cuales los interesados pueden examinarlo y presentar reclamaciones por causas tasadas. Si no se presentan reclamaciones, se considera definitivamente aprobado. Si se presentan, el Pleno dispone de un mes para resolverlas. La aprobación definitiva debe producirse antes del 31 de diciembre del año anterior al ejercicio de aplicación.`,
          `Pueden reclamar los habitantes del territorio, quienes resulten directamente afectados y los colegios oficiales, cámaras y asociaciones en defensa de intereses profesionales o económicos relacionados. Las causas de reclamación son elaboración o aprobación sin ajustarse a trámites; omisión del crédito necesario para obligaciones exigibles; o manifiesta insuficiencia de ingresos respecto de gastos o de créditos respecto de necesidades. No cualquier desacuerdo político o preferencia sobre una partida constituye por sí solo causa jurídica de reclamación.`,
          `El presupuesto definitivamente aprobado se inserta resumido por capítulos en el boletín oficial de la provincia y, en su caso, de la comunidad autónoma uniprovincial. Entra en vigor una vez publicado. Se remite copia a la Administración del Estado y a la comunidad autónoma. Contra la aprobación definitiva cabe directamente recurso contencioso-administrativo, sin que su interposición suspenda por sí sola la aplicación del presupuesto. La copia del presupuesto y sus modificaciones debe estar a disposición del público durante todo el ejercicio.`,
          `Cuando al iniciarse el ejercicio no ha entrado en vigor el nuevo presupuesto, queda automáticamente prorrogado el anterior con sus créditos iniciales, sin perjuicio de modificaciones y ajustes. No se prorrogan créditos para servicios o programas que debían finalizar en el ejercicio anterior ni los financiados con crédito u otros ingresos específicos o afectados que solo fueran a percibirse en aquel ejercicio. La prórroga es automática y transitoria; no sustituye el deber de aprobar el nuevo presupuesto. Aprobado este, se realizan los ajustes necesarios para enlazar ejecución prorrogada y presupuesto definitivo.`,
          `La estructura presupuestaria clasifica los gastos por programas y por categorías económicas, con posibilidad de clasificación orgánica. La clasificación por programas muestra finalidad y objetivos; la económica identifica naturaleza del gasto, diferenciando operaciones corrientes, de capital, financieras y fondo de contingencia cuando proceda. Los ingresos se ordenan económicamente en capítulos: impuestos directos, indirectos, tasas y otros ingresos, transferencias corrientes, ingresos patrimoniales, enajenación de inversiones, transferencias de capital, activos y pasivos financieros. La aplicación presupuestaria resulta de la conjunción de clasificaciones utilizadas.`,
          `La ejecución del gasto se desarrolla mediante autorización, disposición o compromiso, reconocimiento y liquidación de la obligación, y ordenación del pago. La autorización reserva crédito sin relación externa necesaria; la disposición compromete gasto frente a tercero por cuantía determinada; el reconocimiento declara crédito exigible tras acreditar prestación o derecho; y la ordenación expide orden contra Tesorería. Las fases pueden acumularse en los casos previstos en las bases. La existencia de crédito no elimina los trámites de contratación, subvenciones, personal, fiscalización o control que correspondan.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Secuencia de examen: el presidente forma el proyecto; los entes dependientes remiten sus presupuestos o previsiones; Intervención informa; el Pleno aprueba inicialmente; se abre exposición pública de quince días hábiles; sin reclamaciones queda definitivo y, con reclamaciones, el Pleno resuelve en un mes; se publica resumido por capítulos y entra en vigor. Si el 1 de enero no está vigente, se prorroga automáticamente el anterior, excluyendo créditos de actuaciones terminadas y financiación específica agotada.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Integrantes y anexos del presupuesto general; contenido de estados de gastos e ingresos; carácter limitativo de créditos; materias de bases de ejecución; diferencia entre base presupuestaria y reglamento; competencia del presidente, Intervención y Pleno; plazo de exposición de quince días hábiles; causas tasadas de reclamación; aprobación definitiva automática sin reclamaciones; publicación resumida por capítulos; recurso contencioso; y créditos excluidos de prórroga.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `¿Qué documentos integran y acompañan al presupuesto general? ¿Qué materias pueden regular las bases de ejecución sin invadir la ley? ¿Qué ocurre desde la aprobación inicial hasta la entrada en vigor y qué créditos no se prorrogan?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Memoriza el procedimiento como una línea temporal y asigna un órgano a cada fase. Cuando una opción atribuya aprobación al presidente o elaboración al Pleno, descártala. En preguntas sobre bases, comprueba si adaptan gestión presupuestaria o pretenden modificar ley. Para la prórroga, evita respuestas absolutas: no se prorroga todo el presupuesto anterior sin excepción.`
        ]}
      ],
      tree: `Presupuesto general de las entidades locales\n├─ Concepto y principios\n│  ├─ Anualidad, unidad y universalidad\n│  ├─ Especialidad cualitativa, cuantitativa y temporal\n│  └─ Nivelación, estabilidad y no afectación\n├─ Integración y contenido\n│  ├─ Entidad local y organismos autónomos\n│  ├─ Sociedades íntegramente locales\n│  ├─ Estados de gastos e ingresos\n│  └─ Anexos, consolidación y deuda\n├─ Bases de ejecución\n│  ├─ Vinculación y créditos ampliables\n│  ├─ Modificaciones presupuestarias\n│  ├─ Fases y competencias de gasto\n│  └─ Pagos a justificar, caja fija y plurianuales\n├─ Elaboración y aprobación\n│  ├─ Presidente, Intervención y Pleno\n│  ├─ Exposición: 15 días hábiles\n│  ├─ Reclamaciones y aprobación definitiva\n│  └─ Publicación y recurso contencioso\n└─ Prórroga automática con exclusiones`,
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['Integración', 'Entidad, organismos autónomos y sociedades de capital íntegramente local', 'Art. 164 TRLRHL'],
        ['Contenido', 'Estados de gastos, estados de ingresos y bases de ejecución', 'Art. 165 TRLRHL'],
        ['Bases', 'Adaptan la normativa a la organización sin modificar la ley', 'Art. 9 RD 500/1990'],
        ['Formación', 'Corresponde al presidente con documentación e informe de Intervención', 'Art. 168 TRLRHL'],
        ['Aprobación inicial', 'Corresponde al Pleno', 'Art. 168 TRLRHL'],
        ['Exposición', 'Quince días hábiles', 'Art. 169 TRLRHL'],
        ['Reclamaciones', 'Solo legitimados y causas legalmente tasadas', 'Art. 170 TRLRHL'],
        ['Prórroga', 'Automática, excluye programas terminados e ingresos específicos agotados', 'Art. 169.6 TRLRHL'],
        ['Ejecución', 'Autorización, disposición, reconocimiento y ordenación del pago', 'Arts. 52–62 RD 500/1990']
      ]
    },
    28: {
      sources: [source.ce, source.rgpd, source.lopdgdd, source.transparency],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El tema 28 une dos materias que deben coordinarse: protección de datos personales y transparencia pública. La primera protege a las personas frente al tratamiento de información que las identifica; la segunda obliga a publicar y facilitar información sobre actividad pública. Ninguna elimina a la otra. La Administración debe tratar datos con base jurídica, finalidad definida, minimización y seguridad, y al mismo tiempo cumplir publicidad activa y derecho de acceso, aplicando límites, ponderación y disociación cuando la información contiene datos personales.`,
          `La protección se apoya en el artículo 18.4 de la Constitución, el Reglamento General de Protección de Datos y la Ley Orgánica 3/2018. La transparencia y buen gobierno se rigen principalmente por la Ley 19/2013, sin perjuicio de normas autonómicas y locales más amplias. En test son frecuentes las definiciones de dato y tratamiento, principios, legitimación, derechos, responsable y encargado, delegado, brechas, funciones de la AEPD, obligación de suministrar información, publicidad activa y principios de buen gobierno.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Dato personal es toda información sobre persona física identificada o identificable. Tratamiento comprende cualquier operación, automatizada o no, como recogida, registro, organización, conservación, consulta, comunicación, limitación o supresión. El concepto jurídico actual no se limita a “ficheros informáticos”: también cubre expedientes en papel estructurados y operaciones aisladas sometidas al Reglamento. El término fichero sigue siendo útil, pero el centro del sistema es la actividad de tratamiento, sus fines, base jurídica, riesgos y responsabilidades.`,
          `Responsable es quien determina fines y medios; encargado trata datos por cuenta del responsable conforme a contrato u otro acto jurídico. El delegado de protección de datos informa, asesora, supervisa cumplimiento, coopera con la autoridad y actúa como punto de contacto, sin sustituir la responsabilidad del órgano. Las Administraciones y organismos públicos deben designarlo en los términos del Reglamento y comunicar su designación. Su independencia funcional no impide que informe a la alta dirección ni que se le faciliten recursos.`
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          `Los principios del tratamiento son licitud, lealtad y transparencia; limitación de finalidad; minimización; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva. La Administración debe poder demostrar cumplimiento. No basta con obtener datos “por si acaso”. Deben ser adecuados, pertinentes y limitados; corregirse cuando sean inexactos; conservarse durante tiempo necesario, sin perjuicio de archivo en interés público; y protegerse contra acceso no autorizado, pérdida o destrucción mediante medidas técnicas y organizativas apropiadas.`,
          `La licitud requiere una base del artículo 6 del Reglamento. En la actividad administrativa son habituales cumplimiento de obligación legal y misión realizada en interés público o ejercicio de poderes públicos. El consentimiento no es la base universal de la Administración y debe ser libre, específico, informado e inequívoco cuando se utilice. El tratamiento de categorías especiales —origen racial o étnico, opiniones políticas, religión, afiliación sindical, genética, biometría identificativa, salud, vida u orientación sexual— está prohibido como regla, salvo excepciones del Reglamento y cobertura legal suficiente. Los datos de condenas e infracciones tienen régimen específico.`,
          `La información al afectado debe ser concisa, transparente, inteligible y accesible. Debe indicar responsable, fines, base, destinatarios, conservación, derechos, posibilidad de reclamar y demás extremos. La Ley Orgánica permite información por capas: una información básica inmediata y acceso sencillo al resto. Cuando los datos no se obtienen del interesado, rigen obligaciones y plazos específicos, con excepciones tasadas. La transparencia en protección de datos no equivale a publicar datos: significa explicar el tratamiento a la persona afectada.`,
          `Los derechos son acceso, rectificación, supresión, oposición, limitación, portabilidad y no ser objeto de decisiones exclusivamente automatizadas con efectos jurídicos o similares significativos, con matices y excepciones. El acceso permite conocer si se tratan datos y obtener información y copia. Rectificación corrige inexactitudes. Supresión procede cuando los datos ya no son necesarios, se retira consentimiento sin otra base, prospera oposición o el tratamiento es ilícito. Limitación marca datos para restringir usos. Portabilidad opera sobre tratamientos automatizados basados en consentimiento o contrato. Oposición depende de la base y motivos.`,
          `Las solicitudes de derechos se atienden, como regla, en un mes, ampliable dos meses por complejidad o número, informando dentro del primero. El ejercicio es gratuito salvo solicitudes manifiestamente infundadas o excesivas, especialmente repetitivas, donde puede cobrarse canon razonable o negarse motivadamente. Debe verificarse identidad sin exigir datos desproporcionados. Si el responsable no actúa, informa de motivos y posibilidad de reclamar ante autoridad y acudir a los tribunales.`,
          `El registro de actividades de tratamiento sustituye la antigua lógica de inscripción general de ficheros. Describe responsable, fines, categorías de interesados y datos, destinatarios, transferencias, plazos de supresión y medidas de seguridad. Los sujetos públicos del artículo 77 de la Ley Orgánica deben hacer público su inventario de actividades; la Ley 19/2013 añade esta exigencia como publicidad activa. Antes de tratamientos de alto riesgo debe realizarse evaluación de impacto y, si persiste alto riesgo no mitigado, consulta previa a la autoridad.`,
          `La seguridad se decide según riesgo, estado de la técnica, costes, naturaleza, contexto y fines. Puede incluir seudonimización, cifrado, confidencialidad, integridad, disponibilidad, resiliencia, restauración y pruebas periódicas. Una violación de seguridad es destrucción, pérdida, alteración, comunicación o acceso no autorizado. El responsable debe documentarla y notificarla a la autoridad sin dilación indebida y, de ser posible, dentro de setenta y dos horas cuando sea probable riesgo. Si existe alto riesgo, también se comunica a afectados salvo excepciones.`,
          `La Agencia Española de Protección de Datos es autoridad administrativa independiente estatal, con personalidad jurídica y plena capacidad, que actúa con independencia de los poderes públicos. Supervisa el Reglamento y la Ley Orgánica, atiende reclamaciones, investiga, controla aplicación, asesora, promueve sensibilización, coopera con otras autoridades y ejerce poderes de investigación, correctivos, autorización y consulta. Puede requerir información, realizar investigaciones, ordenar atención de derechos, limitar o prohibir tratamientos, imponer medidas y sanciones en los términos legales.`,
          `Las Administraciones y entidades públicas están sometidas al régimen específico del artículo 77 de la Ley Orgánica. Cuando cometen infracción, la autoridad dicta resolución declarando la infracción y establece medidas para cesar o corregir, pudiendo proponer actuaciones disciplinarias. Esto no convierte el incumplimiento público en irrelevante ni elimina responsabilidades. La resolución se comunica al responsable, órgano del que dependa y, cuando proceda, defensor u órgano equivalente, y se publica conforme a la ley.`,
          `La transparencia tiene tres ejes: publicidad activa, derecho de acceso y buen gobierno. La publicidad activa obliga a publicar periódicamente información institucional, organizativa, normativa, económica, presupuestaria y estadística de forma clara, estructurada, comprensible, accesible y preferiblemente reutilizable. Incluye contratos, convenios, subvenciones, presupuestos, cuentas, retribuciones de altos cargos, compatibilidades y otra información legal. La publicación debe respetar límites del acceso y especialmente protección de datos, utilizando disociación cuando proceda.`,
          `La obligación de suministrar información alcanza a personas físicas y jurídicas que presten servicios públicos o ejerzan potestades administrativas: previo requerimiento deben facilitar a la Administración vinculante toda información necesaria para que esta cumpla sus obligaciones de transparencia. También se extiende a adjudicatarios de contratos del sector público en los términos del contrato. El obligado externo suministra información a la Administración; no sustituye necesariamente a esta como responsable de publicación o resolución de solicitudes.`,
          `El derecho de acceso recae sobre contenidos o documentos, cualquiera que sea su formato, que obren en poder de sujetos obligados y hayan sido elaborados o adquiridos en ejercicio de funciones. Puede ejercerlo cualquier persona sin necesidad general de motivar. La solicitud identifica información y medio de contacto; la falta de motivación no es causa de rechazo. Existen causas de inadmisión, como información en elaboración, auxiliar o de apoyo, necesidad de reelaboración, solicitudes dirigidas a órgano que no posee información cuando se desconoce competente, o repetición abusiva no justificada por transparencia.`,
          `Los límites del acceso protegen, entre otros, seguridad nacional, defensa, relaciones exteriores, seguridad pública, prevención e investigación de ilícitos, igualdad procesal, funciones administrativas de vigilancia, intereses económicos, secreto profesional, propiedad intelectual, confidencialidad en decisiones y medio ambiente. Se aplican de modo justificado, proporcionado y atendiendo circunstancias, no automáticamente. El acceso parcial permite omitir parte afectada si el resto conserva sentido. La protección de datos exige distinguir categorías especialmente protegidas, datos meramente identificativos ligados a organización y otros datos, ponderando interés público y derechos.`,
          `La resolución de acceso debe notificarse dentro de un mes desde recepción por órgano competente, ampliable otro mes por volumen o complejidad con aviso previo. El silencio es desestimatorio. La formalización se realiza preferentemente por vía electrónica y es gratuita, sin perjuicio de copias o cambio de formato. Frente a resolución expresa o presunta cabe reclamación potestativa, previa al contencioso, ante el órgano de transparencia competente, con plazo general de un mes; su resolución se dicta en tres meses y el silencio de la reclamación es desestimatorio.`,
          `El buen gobierno se aplica a altos cargos y asimilados, incluidos miembros de juntas de gobierno locales según normativa aplicable. Exige respeto a Constitución y derechos, transparencia, eficacia, economía, eficiencia, dedicación al servicio, imparcialidad, igualdad, diligencia, conducta digna, corrección y responsabilidad. Los principios de actuación exigen dedicación e incompatibilidades, reserva, denuncia de irregularidades, uso finalista de poderes, abstención ante conflictos, rechazo de regalos indebidos, transparencia, protección de recursos y prohibición de obtener ventajas por el cargo.`,
          `La Ley 19/2013 tipifica infracciones en conflicto de intereses, gestión económico-presupuestaria y disciplina. Comprometer gastos o reconocer obligaciones sin crédito, omitir intervención, incumplir publicación o suministro financiero y administrar recursos al margen de normas pueden ser infracciones muy graves cuando concurren requisitos. Las sanciones y procedimiento dependen del ámbito y normativa aplicable. En examen, los principios no son simples recomendaciones éticas: informan interpretación y aplicación del régimen sancionador.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Protección de datos: identificar tratamiento, responsable, finalidad, base, datos mínimos, conservación, seguridad, información y derechos; documentar actividad, riesgos y brechas; y someterse a control de la AEPD. Transparencia: publicar activamente, tramitar acceso, requerir información a prestadores y contratistas, aplicar límites de forma proporcionada y respetar datos personales. Buen gobierno: principios generales y de actuación vinculados a responsabilidad y sanciones.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Dato personal y tratamiento; responsable frente a encargado; principios del artículo 5 RGPD; bases jurídicas; categorías especiales; plazo de un mes para derechos; brecha y setenta y dos horas; registro de actividades; naturaleza y funciones de la AEPD; obligación de suministrar información; publicidad activa; acceso sin motivación; límites y acceso parcial; plazo de resolución; silencio desestimatorio; y principios generales frente a principios de actuación del buen gobierno.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `¿Qué diferencia existe entre transparencia del tratamiento y publicidad de datos personales? ¿Qué debe hacer una Administración ante una brecha y ante una solicitud de acceso? ¿A quién obliga el suministro de información del artículo 4 de la Ley 19/2013 y qué principios rigen a los altos cargos?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Ante un supuesto, separa dos columnas: protección de datos y transparencia. En la primera identifica base, finalidad, minimización y derecho; en la segunda publicidad activa o solicitud, límite, ponderación y forma de acceso. No resuelvas diciendo simplemente “protección de datos impide informar”: comprueba disociación, acceso parcial y peso del interés público. Para AEPD, recuerda independencia, supervisión, investigación y corrección.`
        ]}
      ],
      tree: `Protección de datos, transparencia y buen gobierno\n├─ Protección de datos\n│  ├─ Dato, tratamiento, responsable y encargado\n│  ├─ Principios y bases jurídicas\n│  ├─ Información y derechos\n│  ├─ Registro, evaluación de impacto y seguridad\n│  ├─ Brechas: autoridad y afectados\n│  └─ AEPD: independencia, funciones y potestades\n├─ Transparencia\n│  ├─ Publicidad activa\n│  ├─ Obligación de suministrar información\n│  ├─ Derecho de acceso\n│  ├─ Inadmisión, límites y ponderación\n│  └─ Reclamación y control judicial\n└─ Buen gobierno\n   ├─ Ámbito subjetivo\n   ├─ Principios generales\n   ├─ Principios de actuación\n   └─ Infracciones y responsabilidad`,
      reviewTable: [
        ['Materia', 'Regla esencial', 'Referencia'],
        ['Principios', 'Licitud, finalidad, minimización, exactitud, conservación, seguridad y responsabilidad', 'Art. 5 RGPD'],
        ['Derechos', 'Acceso, rectificación, supresión, oposición, limitación y otros', 'Arts. 15–22 RGPD'],
        ['Plazo de derechos', 'Un mes, ampliable otros dos con información', 'Art. 12 RGPD'],
        ['Brecha', 'Notificación, si existe riesgo, preferentemente en 72 horas', 'Art. 33 RGPD'],
        ['AEPD', 'Autoridad administrativa independiente estatal', 'Arts. 44 y 47 LOPDGDD'],
        ['Suministro', 'Prestadores, potestades y adjudicatarios informan previo requerimiento', 'Art. 4 Ley 19/2013'],
        ['Publicidad activa', 'Información periódica, actualizada, clara, accesible y reutilizable', 'Arts. 5–8 Ley 19/2013'],
        ['Acceso', 'Cualquier persona; límites proporcionados y posible acceso parcial', 'Arts. 12–22 Ley 19/2013'],
        ['Buen gobierno', 'Principios generales y de actuación con régimen sancionador', 'Arts. 25–32 Ley 19/2013']
      ]
    }
  };

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  for (const [numberText, theory] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes?.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = theory.sections;
    theme.tree = theory.tree;
    theme.reviewTable = theory.reviewTable;
    theme.officialSources = theory.sources;
    theme.theoryStatus = {
      autonomous: true,
      programmeLiteral: true,
      reviewedAt: REVIEW_DATE,
      words: wordCount(theory),
      sourcePolicy: 'Normativa oficial consolidada del BOE y Derecho de la Unión Europea'
    };
  }

  const completed = [25, 26, 27, 28];
  const pending = Array.from({ length: 12 }, (_, index) => index + 29);
  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v87 = {
    status: 'EN_PROGRESO',
    scope: 'Temas 25 a 40 de Diputación de Toledo',
    completedThemes: completed,
    pendingThemes: pending,
    autonomousThemes: completed.length,
    totalThemes: 16,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'OpoWeb como fuente teórica principal; fuentes oficiales para vigencia y trazabilidad.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    status: 'EN_PROGRESO',
    block: 2,
    completedThemes: completed,
    pendingThemes: pending,
    minimumWords: Math.min(...[27, 28].map(number => ope.themes.find(theme => Number(theme.number) === number)?.theoryStatus?.words || 0)),
    reviewedAt: REVIEW_DATE
  };
})();
