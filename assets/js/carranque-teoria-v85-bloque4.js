(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-13';
  const SOURCES = {
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    rd500: { label: 'Real Decreto 500/1990, presupuestos de las entidades locales', reference: 'BOE-A-1990-9664', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1990-9664' },
    estructura: { label: 'Orden EHA/3565/2008, estructura presupuestaria local', reference: 'BOE-A-2008-19916', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2008-19916' },
    estabilidad: { label: 'Ley Orgánica 2/2012, de Estabilidad Presupuestaria y Sostenibilidad Financiera', reference: 'BOE-A-2012-5730', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-5730' },
    contabilidad: { label: 'Orden HAP/1781/2013, Instrucción del modelo normal de contabilidad local', reference: 'BOE-A-2013-10268', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-10268' },
    factura: { label: 'Ley 25/2013, factura electrónica y registro contable de facturas', reference: 'BOE-A-2013-13722', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-13722' },
    morosidad: { label: 'Ley 3/2004, medidas de lucha contra la morosidad', reference: 'BOE-A-2004-21830', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-21830' },
    seguimientoMorosidad: { label: 'Ley 15/2010, seguimiento de la morosidad pública', reference: 'BOE-A-2010-10708', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-10708' },
    pmp: { label: 'Real Decreto 635/2014, periodo medio de pago', reference: 'BOE-A-2014-8132', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2014-8132' },
    contratos: { label: 'Ley 9/2017, de Contratos del Sector Público', reference: 'BOE-A-2017-12902', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902' },
    procedimiento: { label: 'Ley 39/2015, procedimiento administrativo común', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    regimen: { label: 'Ley 40/2015, régimen jurídico del sector público', reference: 'BOE-A-2015-10566', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' }
  };

  const THEMES = {
    16: {
      sources: [SOURCES.trlrhl, SOURCES.rd500, SOURCES.procedimiento],
      articleCoverage: [
        ['Arts. 2-14 TRLRHL', 'Recursos, ingresos de Derecho privado, participación, subvenciones, precios y operaciones de crédito.'],
        ['Arts. 15-19 TRLRHL', 'Ordenanzas fiscales: imposición, ordenación, contenido, procedimiento y recurso.'],
        ['Arts. 20-27 TRLRHL', 'Tasas locales: hecho imponible, sujetos, cuantía, devengo y gestión.'],
        ['Arts. 28-37 TRLRHL', 'Contribuciones especiales: hecho imponible, sujetos, base, cuota y gestión.'],
        ['Arts. 38-47 TRLRHL', 'Normas generales tributarias y recargos provinciales.'],
        ['Arts. 59-110 TRLRHL', 'Impuestos municipales obligatorios y potestativos.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La Hacienda local reúne derechos, recursos y obligaciones de contenido económico. Sus ingresos se clasifican por naturaleza jurídica y presupuestaria: tributos propios, participaciones, subvenciones, precios públicos, ingresos patrimoniales, operaciones de crédito, multas y otros ingresos de Derecho público o privado.`,
          `Para examen debe distinguirse impuesto, tasa, contribución especial y precio público; saber qué impuestos municipales son obligatorios o potestativos; y dominar el procedimiento de aprobación de las ordenanzas fiscales. La clasificación económica del presupuesto se estudia con detalle en el tema 18.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Art. 2 TRLRHL: enumera recursos de las haciendas locales y diferencia ingresos tributarios, participaciones, subvenciones, precios, crédito, multas y demás prestaciones.`,
          `Arts. 5-7 TRLRHL: ingresos de Derecho privado, servicios de recaudación y delegación de facultades tributarias.`,
          `Arts. 15-19 TRLRHL: imposición y ordenación de tributos, contenido mínimo de ordenanzas, exposición pública y recurso contencioso.`,
          `Arts. 20-27 TRLRHL: tasas por utilización privativa, aprovechamiento especial o servicios y actividades.`,
          `Arts. 28-37 TRLRHL: contribuciones especiales por obras o servicios que produzcan beneficio especial o aumento de valor.`,
          `Arts. 59 y siguientes: IBI, IAE e IVTM obligatorios; ICIO e IIVTNU potestativos.`,
          `Ley General Tributaria y Ley 39/2015: aplicación complementaria en gestión, recaudación, revisión y procedimiento.`
        ]},
        { heading: '1. Hacienda local y autonomía financiera', paragraphs: [
          `La autonomía local incluye suficiencia financiera para ejercer competencias. No significa libertad ilimitada para crear ingresos: tributos y prestaciones patrimoniales necesitan ley, y el presupuesto debe respetar estabilidad, sostenibilidad y reglas de gasto.`,
          `La Hacienda local comprende recursos de la entidad y de sus organismos, tesorería, crédito, presupuesto, contabilidad y control. Los ingresos financian servicios y políticas, pero deben gestionarse conforme a legalidad, igualdad, eficiencia y capacidad económica.`,
          `La suficiencia se articula mediante tributos propios y participación en tributos del Estado y comunidades autónomas. El sistema combina autonomía para ordenar dentro de la ley y coordinación con el conjunto de la Hacienda pública.`
        ]},
        { heading: '2. Clasificación jurídica de los ingresos', paragraphs: [
          `Son ingresos de Derecho público los tributos, precios públicos cuando tengan esa naturaleza, multas, recargos, participaciones y otros derechos exigibles por prerrogativas administrativas. Se recaudan mediante procedimientos administrativos y pueden exigirse por apremio.`,
          `Los ingresos de Derecho privado proceden del patrimonio, herencias, legados, donaciones, rendimientos y negocios sujetos al Derecho privado. La entidad no dispone frente a ellos de todas las prerrogativas tributarias y su cobro puede corresponder a jurisdicción civil.`,
          `Las subvenciones son ingresos afectados a la finalidad concedida; las operaciones de crédito generan financiación y obligación futura; las participaciones distribuyen recursos de otros niveles. La naturaleza determina procedimiento, afectación, control y contabilización.`
        ]},
        { heading: '3. Tributos locales: concepto y clases', paragraphs: [
          `Los tributos son ingresos públicos exigidos coactivamente por realizar un hecho que manifiesta capacidad económica o se relaciona con un servicio o beneficio. Se clasifican en impuestos, tasas y contribuciones especiales.`,
          `El impuesto se exige sin contraprestación directa y grava hechos reveladores de capacidad económica. La tasa se vincula a uso privativo o aprovechamiento especial del dominio público, o a servicios o actividades en determinados supuestos.`,
          `La contribución especial financia obras públicas o establecimiento o ampliación de servicios que producen beneficio especial o aumento de valor para personas determinadas. No debe confundirse con una tasa por prestación individual ni con un impuesto general.`
        ]},
        { heading: '4. Impuestos municipales obligatorios y potestativos', paragraphs: [
          `Los ayuntamientos deben exigir el Impuesto sobre Bienes Inmuebles, el Impuesto sobre Actividades Económicas y el Impuesto sobre Vehículos de Tracción Mecánica. La ley configura sus elementos esenciales y la ordenanza concreta márgenes permitidos.`,
          `Pueden establecer el Impuesto sobre Construcciones, Instalaciones y Obras y el Impuesto sobre el Incremento de Valor de los Terrenos de Naturaleza Urbana. Su exigencia necesita acuerdo de imposición y ordenanza fiscal.`,
          `Obligatorio no significa que todos los sujetos paguen siempre: existen exenciones, no sujeción, bonificaciones y cuotas mínimas. Potestativo significa que el municipio decide establecerlo dentro del marco legal, no que pueda diseñarlo libremente.`
        ]},
        { heading: '5. Tasas', paragraphs: [
          `La tasa puede exigirse por utilización privativa o aprovechamiento especial del dominio público local, como ocupación de vía, y por servicios o actividades de competencia local que afecten particularmente al sujeto.`,
          `En servicios, la tasa procede cuando no sean de solicitud o recepción voluntaria o no se presten por sector privado. La voluntariedad se valora jurídicamente: puede faltar si el servicio es imprescindible o impuesto por norma.`,
          `La cuantía por dominio público toma como referencia valor de utilidad; por servicios no debe exceder en conjunto del coste real o previsible. Se consideran costes directos, indirectos, financieros y amortización. Puede haber criterios de capacidad económica.`
        ]},
        { heading: '6. Contribuciones especiales', paragraphs: [
          `El hecho imponible es obtener beneficio especial o aumento de valor de bienes por obras públicas locales o establecimiento o ampliación de servicios. La obra debe ser local en los términos de la ley.`,
          `Son sujetos especialmente beneficiados, como propietarios de inmuebles, titulares de explotaciones o compañías suministradoras según obra. La base puede alcanzar como máximo el noventa por ciento del coste soportado por la entidad.`,
          `La cuota se reparte mediante módulos objetivos: metros de fachada, superficie, volumen edificable, valor catastral u otros legalmente adecuados. El acuerdo de ordenación concreta coste, porcentaje y reparto y puede permitir asociación administrativa de contribuyentes.`
        ]},
        { heading: '7. Precios públicos', paragraphs: [
          `Los precios públicos se exigen por servicios o actividades cuando sean de solicitud voluntaria y también se presten por sector privado. Si concurre uso coactivo o monopolio de hecho, suele corresponder tasa.`,
          `La cuantía debe cubrir como mínimo el coste, aunque por razones sociales, benéficas, culturales o de interés público puede fijarse por debajo si se consignan dotaciones para cubrir diferencia.`,
          `El establecimiento corresponde al pleno, que puede delegar fijación en junta en términos legales. Su régimen de cobro y devolución se regula por TRLRHL y ordenanza.`
        ]},
        { heading: '8. Ingresos patrimoniales y aprovechamientos', paragraphs: [
          `Proceden de rentas, arrendamientos, intereses, dividendos y productos del patrimonio. Los bienes de dominio público no generan ingreso patrimonial por enajenación mientras conserven esa condición.`,
          `La utilización privativa del dominio público origina normalmente tasa, no renta privada. En cambio, arrendar un bien patrimonial genera ingreso de Derecho privado. La clasificación depende de la naturaleza del bien y del título.`,
          `La enajenación de inversiones reales produce ingreso de capital y suele quedar afectada a inversión o reducción de deuda según normas. No debe financiar ordinariamente gasto corriente sin habilitación.`
        ]},
        { heading: '9. Participaciones, subvenciones y transferencias', paragraphs: [
          `La participación en tributos del Estado es recurso no tributario propio vinculado al sistema de financiación. Puede existir participación autonómica y fondos específicos.`,
          `Las subvenciones corrientes o de capital se destinan a finalidad concreta y se justifican. Si se incumplen condiciones, procede reintegro. Su afectación debe seguirse contablemente.`,
          `Una transferencia no siempre es subvención: puede ser aportación sin contraprestación y no afectada. Deben revisarse convenio, resolución y norma para conocer condiciones y clasificación.`
        ]},
        { heading: '10. Operaciones de crédito', paragraphs: [
          `Las entidades pueden concertar crédito a corto plazo para tesorería y a largo plazo para inversiones o finalidades legales, dentro de límites, autorizaciones y prudencia financiera.`,
          `El crédito no es ingreso definitivo: financia y genera pasivo, intereses y amortización. Su producto se registra en capítulo 9, salvo operaciones financieras de otra naturaleza.`,
          `Antes de concertar se analiza ahorro neto, deuda viva, estabilidad, finalidad, competencia y autorización cuando proceda. Fraccionar operaciones para evitar controles es improcedente.`
        ]},
        { heading: '11. Multas, sanciones y otros ingresos', paragraphs: [
          `Las multas son ingresos de Derecho público derivados de potestad sancionadora. No son tributos y no pueden presupuestarse como incentivo para sancionar.`,
          `Los reintegros recuperan pagos indebidos o subvenciones; los intereses compensan demora; las indemnizaciones reparan daños; los recargos incrementan deuda en supuestos legales.`,
          `Cada ingreso requiere título, liquidación, notificación, plazo voluntario y recaudación. La clasificación económica no altera su naturaleza jurídica.`
        ]},
        { heading: '12. Ordenanzas fiscales: función y contenido', paragraphs: [
          `Para tributos potestativos se adopta acuerdo de imposición y ordenación. Para obligatorios se aprueba ordenanza cuando se usan facultades legales o se concreta gestión.`,
          `La ordenanza contiene determinación del hecho imponible, sujeto, responsables, exenciones, reducciones, base, tipo o cuota, periodo, devengo y regímenes de declaración e ingreso, dentro de la ley.`,
          `Debe identificar fecha de aprobación y comienzo de aplicación. No puede crear beneficios fiscales no previstos por ley ni alterar elementos esenciales fuera de habilitación.`
        ]},
        { heading: '13. Procedimiento de aprobación de ordenanzas fiscales', paragraphs: [
          `El pleno aprueba provisionalmente. El acuerdo y texto se exponen durante treinta días como mínimo mediante anuncio oficial para que interesados examinen y reclamen.`,
          `Si no hay reclamaciones, el acuerdo provisional se entiende definitivo. Si las hay, el pleno las resuelve y adopta acuerdo definitivo. El texto íntegro se publica antes de entrar en vigor.`,
          `Contra la ordenanza fiscal definitiva cabe recurso contencioso-administrativo, no recurso administrativo ordinario. El control puede ser directo o al impugnar una liquidación por ilegalidad de la disposición.`
        ]},
        { heading: '14. Gestión, liquidación y recaudación', paragraphs: [
          `La gestión incluye declaraciones, censos, padrones, comprobación, liquidación y notificación. Los tributos periódicos pueden notificarse colectivamente tras alta inicial según normativa.`,
          `La recaudación tiene periodo voluntario y ejecutivo. Vencido el voluntario, se inicia ejecutivo con recargos y posible providencia de apremio, intereses y costas.`,
          `La entidad puede delegar gestión y recaudación en diputación o comunidad. La delegación debe publicarse y no elimina titularidad del recurso.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Recursos: tributos, participaciones, subvenciones, precios, patrimonio, crédito, multas y otros.`,
          `Tributos: impuestos sin contraprestación; tasas por dominio o servicios; contribuciones por beneficio especial.`,
          `Obligatorios: IBI, IAE e IVTM. Potestativos: ICIO e IIVTNU.`,
          `Ordenanza fiscal: pleno provisional, treinta días, resolución o elevación automática, publicación íntegra y contencioso.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Una tasa no es precio público. El carácter voluntario y la existencia de oferta privada son decisivos.`,
          `Una multa no es tributo; una operación de crédito no es ingreso definitivo; una subvención puede estar afectada.`,
          `El acuerdo provisional se vuelve definitivo sin nuevo acuerdo si no hay reclamaciones, pero aún necesita publicación íntegra.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo se distinguen impuesto, tasa, contribución especial y precio público?`,
          `2. ¿Qué impuestos son obligatorios y cuáles potestativos?`,
          `3. ¿Cuáles son las fases de aprobación de una ordenanza fiscal y cómo se impugna?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un ingreso identifica naturaleza, hecho, sujeto, norma, órgano, ordenanza, devengo, liquidación, voluntaria y ejecutiva.`,
          `En test no respondas por el nombre coloquial. Una tarifa puede ser tasa o precio según condiciones jurídicas; una transferencia puede ser afectada o no según título.`
        ]}
      ],
      tree: `HACIENDAS LOCALES · INGRESOS
├─ Tributarios
│  ├─ Impuestos
│  ├─ Tasas
│  └─ Contribuciones especiales
├─ No tributarios
│  ├─ Participaciones y transferencias
│  ├─ Subvenciones
│  ├─ Precios públicos
│  ├─ Patrimonio y enajenaciones
│  ├─ Crédito
│  └─ Multas y otros
└─ Ordenanzas fiscales
   ├─ Imposición y ordenación
   ├─ Exposición pública ≥ 30 días
   ├─ Resolución de reclamaciones
   └─ Publicación íntegra y recurso contencioso`,
      reviewTable: [
        ['Ingreso', 'Rasgo', 'Referencia'],
        ['Impuesto', 'Sin contraprestación directa', 'TRLRHL'],
        ['Tasa', 'Dominio público o servicio no voluntario/sin alternativa privada', 'Arts. 20-27'],
        ['Contribución especial', 'Beneficio especial por obra o servicio', 'Arts. 28-37'],
        ['Precio público', 'Servicio voluntario con oferta privada', 'Arts. 41-47'],
        ['Impuestos obligatorios', 'IBI, IAE e IVTM', 'Art. 59'],
        ['Impuestos potestativos', 'ICIO e IIVTNU', 'Art. 59'],
        ['Ordenanza fiscal', 'Treinta días y publicación íntegra', 'Arts. 15-19'],
        ['Crédito', 'Financia pero genera pasivo', 'Título VII TRLRHL']
      ]
    },
    17: {
      sources: [SOURCES.trlrhl, SOURCES.rd500, SOURCES.contabilidad, SOURCES.estabilidad],
      articleCoverage: [
        ['Arts. 162-171 TRLRHL', 'Definición, contenido, anexos, formación, aprobación, reclamaciones y prórroga.'],
        ['Arts. 172-182 TRLRHL', 'Especialidad de créditos y modificaciones presupuestarias.'],
        ['Arts. 183-190 TRLRHL', 'Gestión del gasto, competencias, pagos a justificar y caja fija.'],
        ['Arts. 191-193 TRLRHL', 'Cierre, liquidación y medidas ante remanente negativo.'],
        ['Arts. 208-212 TRLRHL', 'Cuenta general: contenido, rendición, información pública y aprobación.'],
        ['RD 500/1990', 'Desarrollo reglamentario integral del presupuesto local.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El presupuesto general es expresión cifrada, conjunta y sistemática de obligaciones máximas y derechos previstos para el ejercicio. Integra entidad, organismos y previsiones de sociedades según ley y se aprueba por el pleno.`,
          `El tema abarca principios, elaboración, aprobación, prórroga, ejecución de ingresos y gastos, modificaciones y cuenta general. Debe dominarse la secuencia A-D-O-P y qué modificación corresponde cuando falta crédito.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Arts. 162-165 TRLRHL: definición, contenido y estructura del presupuesto general.`,
          `Arts. 166-169: anexos, formación, aprobación inicial, publicidad y definitiva.`,
          `Arts. 170-171: legitimación, causas de reclamación y recurso.`,
          `Arts. 172-182: vinculación, créditos extraordinarios, suplementos, transferencias, generación, incorporación y bajas.`,
          `Arts. 183-190: fases de gasto, competencias, pagos y anticipos.`,
          `Arts. 191-193: liquidación y remanente negativo.`,
          `Arts. 208-212: cuenta general y calendario de rendición.`,
          `RD 500/1990: desarrollo del ciclo y modificaciones.`
        ]},
        { heading: '1. Concepto y funciones', paragraphs: [
          `El presupuesto autoriza gastos y estima ingresos durante un año natural. El crédito de gasto es límite cualitativo, cuantitativo y temporal; el ingreso es previsión, no techo de recaudación.`,
          `Cumple funciones política, jurídica, económica, financiera, contable y de control. El pleno decide prioridades y habilita créditos; los órganos gestores ejecutan; Intervención controla y contabilidad informa.`,
          `No debe confundirse presupuesto con tesorería ni contabilidad. Puede haber crédito sin liquidez y liquidez sin crédito disponible.`
        ]},
        { heading: '2. Principios presupuestarios', paragraphs: [
          `Anualidad vincula el presupuesto al año natural. Unidad y universalidad integran todos los recursos y obligaciones; presupuesto bruto evita compensar ingresos y gastos salvo excepciones.`,
          `Especialidad limita destino, cuantía y tiempo. Equilibrio exige aprobación sin déficit inicial; estabilidad y sostenibilidad añaden capacidad o necesidad de financiación y deuda.`,
          `Publicidad y transparencia permiten información pública, control y rendición. La eficiencia exige asignar recursos a objetivos y resultados.`
        ]},
        { heading: '3. Ámbito y contenido del presupuesto general', paragraphs: [
          `Integra presupuesto de la entidad, organismos autónomos y estados de previsión de sociedades mercantiles de capital íntegramente local, con estados consolidados y anexos previstos.`,
          `El presupuesto de gastos contiene créditos necesarios y el de ingresos previsiones. No puede contener créditos insuficientes para obligaciones exigibles conocidas.`,
          `Las bases de ejecución adaptan disposiciones generales a organización, sin modificar normas ni regular materias ajenas. Forman parte del presupuesto general.`
        ]},
        { heading: '4. Documentación y anexos', paragraphs: [
          `El presidente forma el presupuesto con memoria explicativa, liquidación anterior y avance corriente, anexo de personal, inversiones, beneficios fiscales y convenios de gasto social, además de informe económico-financiero.`,
          `Se incorpora anexo de inversiones con proyectos y financiación; estado de consolidación; planes y programas cuando proceda; y documentación de organismos y sociedades.`,
          `El informe de Intervención verifica legalidad, nivelación, ingresos, crédito y estabilidad. La falta de documentación esencial puede fundamentar reclamación.`
        ]},
        { heading: '5. Elaboración y aprobación inicial', paragraphs: [
          `El presidente forma y remite al pleno antes del 15 de octubre para aprobación, enmienda o devolución. Los organismos remiten propuestas con antelación fijada.`,
          `El pleno aprueba inicialmente. El presupuesto debe estar equilibrado y acompañado de bases, plantilla y anexos. La aprobación corresponde al pleno y no puede sustituirse por decreto ordinario.`,
          `Las enmiendas deben respetar legalidad y equilibrio. Si aumentan gasto, identifican financiación; si reducen ingreso, compensan.`
        ]},
        { heading: '6. Información pública, reclamaciones y aprobación definitiva', paragraphs: [
          `El acuerdo inicial se expone quince días hábiles mediante anuncio en boletín para examen y reclamaciones. Están legitimados habitantes, interesados y determinadas entidades.`,
          `Las reclamaciones solo pueden basarse en defectos de procedimiento, omisión de crédito necesario o insuficiencia manifiesta de ingresos frente a gastos.`,
          `Sin reclamaciones se considera definitivamente aprobado. Con ellas, el pleno dispone de un mes para resolver. Se publica resumido por capítulos y entra en vigor en el ejercicio correspondiente.`
        ]},
        { heading: '7. Prórroga presupuestaria', paragraphs: [
          `Si al comenzar el ejercicio no está vigente el nuevo presupuesto, se prorroga automáticamente el anterior hasta entrada en vigor.`,
          `No se prorrogan créditos para servicios o programas que debían terminar ni financiados con ingresos específicos que no se repitan. Se ajustan créditos para compromisos y límites.`,
          `La prórroga no exime de aprobar presupuesto ni convierte bases anteriores en intocables. El nuevo presupuesto produce efectos desde su vigencia, con ajustes contables.`
        ]},
        { heading: '8. Créditos y vinculación jurídica', paragraphs: [
          `Los créditos se destinan exclusivamente a finalidad específica y no pueden adquirirse compromisos superiores. Los actos que exceden crédito son nulos, sin perjuicio de responsabilidad.`,
          `La vinculación jurídica determina nivel al que se controla disponibilidad según clasificación y bases. Puede ser más agregada que la aplicación contable, dentro de límites.`,
          `Los créditos no usados se anulan al cierre salvo incorporación. Los remanentes de crédito no son lo mismo que remanente de tesorería.`
        ]},
        { heading: '9. Gestión del presupuesto de gastos: A-D-O-P', paragraphs: [
          `Autorización A acuerda realizar gasto y reserva crédito. Disposición o compromiso D vincula con tercero por importe y condiciones.`,
          `Reconocimiento de obligación O declara crédito exigible tras acreditar prestación o derecho del acreedor. Ordenación P dispone pago contra tesorería.`,
          `Las fases pueden acumularse A-D o A-D-O según bases y naturaleza, pero deben respetarse competencia, fiscalización y documentación.`
        ]},
        { heading: '10. Competencias y control del gasto', paragraphs: [
          `Alcalde o pleno autorizan y disponen según normativa; el presidente reconoce obligaciones de compromisos legalmente adquiridos y ordena pagos, con posibles delegaciones reflejadas en bases.`,
          `Intervención ejerce función interventora previa y control financiero. Tesorería ejecuta pagos conforme a plan de disposición y disponibilidad.`,
          `La omisión de fiscalización, gasto sin crédito o contratación irregular puede originar reparo, reconocimiento extrajudicial, revisión y responsabilidad; este último no sanea automáticamente el procedimiento.`
        ]},
        { heading: '11. Gestión del presupuesto de ingresos', paragraphs: [
          `Las fases básicas son compromiso de ingreso cuando existe, reconocimiento y liquidación del derecho y recaudación o cobro.`,
          `El derecho se reconoce cuando nace y se cuantifica conforme al título. La previsión presupuestaria no crea el derecho.`,
          `La recaudación puede ser voluntaria o ejecutiva. Los ingresos afectados se siguen separadamente para asegurar destino y calcular desviaciones de financiación.`
        ]},
        { heading: '12. Créditos extraordinarios y suplementos', paragraphs: [
          `Crédito extraordinario se usa cuando no existe crédito para gasto específico inaplazable; suplemento cuando existe pero es insuficiente y no ampliable.`,
          `Se financian con remanente líquido de tesorería, nuevos o mayores ingresos efectivamente recaudados sobre previstos y anulaciones o bajas, además de operaciones de crédito en supuestos.`,
          `El expediente lo propone presidente, informa Intervención y aprueba pleno con trámites de presupuesto, salvo especialidades. Debe concretar gasto y financiación.`
        ]},
        { heading: '13. Transferencias de crédito', paragraphs: [
          `Transfieren importe entre aplicaciones sin alterar total. Se sujetan a limitaciones respecto de personal, créditos ampliables, extraordinarios, suplementos e importes previamente aumentados o disminuidos.`,
          `Las transferencias dentro de misma área pueden corresponder al presidente según bases; entre áreas, al pleno, salvo reglas.`,
          `No pueden perjudicar compromisos ni eludir finalidad. Deben mantener estabilidad y registrarse en aplicaciones de origen y destino.`
        ]},
        { heading: '14. Generación, incorporación, ampliación y bajas', paragraphs: [
          `Generación crea crédito por ingresos específicos no previstos o superiores, como aportaciones, ventas, prestación, reembolsos o reintegros. Requiere reconocimiento o compromiso según caso.`,
          `Incorporación traslada remanentes del ejercicio anterior cuando la ley lo permite, especialmente gastos financiados con ingresos afectados, y necesita financiación.`,
          `Créditos ampliables aumentan hasta derechos afectados si se declaran expresamente. Bajas reducen crédito disponible para financiar modificaciones o corregir remanente negativo sin afectar servicio.`
        ]},
        { heading: '15. Pagos a justificar y anticipos de caja fija', paragraphs: [
          `Los pagos a justificar se expiden cuando no puede aportarse documento antes de pago. Las bases fijan conceptos, límites y criterios; deben justificarse en máximo tres meses.`,
          `No se entregan nuevos fondos por mismos conceptos a perceptor con justificación pendiente. Existe responsabilidad y reintegro.`,
          `Los anticipos de caja fija atienden gastos periódicos o repetitivos con fondos extrapresupuestarios de carácter permanente que se reponen tras justificar dentro del ejercicio.`
        ]},
        { heading: '16. Cuenta general', paragraphs: [
          `La cuenta general refleja gestión económica, financiera, patrimonial y presupuestaria e integra cuentas de entidad, organismos y sociedades íntegramente participadas, además de estados consolidados exigibles.`,
          `El presidente rinde antes del 15 de mayo; Intervención la forma y la Comisión Especial de Cuentas informa antes del 1 de junio. Se expone quince días.`,
          `Tras reclamaciones e informe, se somete al pleno para pronunciarse antes del 1 de octubre y se rinde al Tribunal de Cuentas. Aprobar no exime responsabilidades.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Presupuesto: autorización máxima de gastos y previsión de ingresos durante año natural.`,
          `Aprobación: presidente forma, pleno inicial, quince días, reclamaciones, definitivo y publicación por capítulos.`,
          `Gasto: A autoriza, D compromete, O reconoce obligación, P ordena pago.`,
          `Modificaciones: extraordinario, suplemento, transferencia, generación, incorporación, ampliable y baja.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Crédito extraordinario no es suplemento. Remanente de crédito no es remanente de tesorería.`,
          `El ingreso es previsión; el gasto es límite. La prórroga excluye programas terminados y financiación no recurrente.`,
          `Cuenta general no es liquidación: la liquidación cierra presupuesto; la cuenta integra información anual más amplia.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué documentos acompañan al presupuesto y cuáles son sus fases de aprobación?`,
          `2. ¿Qué significa cada fase A-D-O-P y quién suele ser competente?`,
          `3. ¿Cuándo se usa cada modificación y cuál es el calendario de la cuenta general?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un supuesto presupuestario identifica aplicación, crédito, vinculación, competencia, fase, fiscalización, financiación y modificación necesaria.`,
          `Construye dos cronologías: presupuesto —formación, exposición, vigencia— y cuenta —rendición, comisión, exposición, pleno y Tribunal—.`
        ]}
      ],
      tree: `PRESUPUESTO LOCAL
├─ Elaboración
│  ├─ Presidente y documentación
│  ├─ Informe de Intervención
│  └─ Pleno inicial
├─ Aprobación
│  ├─ Exposición 15 días hábiles
│  ├─ Reclamaciones tasadas
│  └─ Definitivo y publicación
├─ Ejecución
│  ├─ Gastos A-D-O-P
│  ├─ Ingresos: derecho y cobro
│  └─ Control y tesorería
├─ Modificaciones
│  ├─ Extraordinario / suplemento
│  ├─ Transferencia / generación
│  └─ Incorporación / ampliable / baja
└─ Cuenta general y rendición`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Definición', 'Obligaciones máximas y derechos previstos', 'Art. 162 TRLRHL'],
        ['Formación', 'Presidente con anexos e informes', 'Art. 168'],
        ['Exposición', 'Quince días hábiles', 'Art. 169'],
        ['Prórroga', 'Automática con exclusiones', 'Art. 169.6'],
        ['Gasto', 'A-D-O-P', 'Art. 184'],
        ['Extraordinario', 'No existe crédito', 'Art. 177'],
        ['Suplemento', 'Crédito insuficiente', 'Art. 177'],
        ['Liquidación', 'Antes del 1 de marzo', 'Art. 191'],
        ['Cuenta general', '15 mayo, 1 junio, 15 días y 1 octubre', 'Art. 212']
      ]
    },
    18: {
      sources: [SOURCES.estructura, SOURCES.trlrhl, SOURCES.rd500],
      articleCoverage: [
        ['Arts. 162-167 TRLRHL', 'Contenido y estructura del presupuesto general.'],
        ['Orden EHA/3565/2008', 'Clasificación por programas y económica de gastos e ingresos.'],
        ['Anexos I-III de la Orden', 'Códigos de programas, económica de gastos y económica de ingresos.'],
        ['RD 500/1990', 'Aplicaciones presupuestarias, niveles de vinculación y desarrollo.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La estructura presupuestaria ordena créditos y previsiones mediante clasificaciones. En gastos son obligatorias la clasificación por programas —para qué— y económica —en qué—; la orgánica —quién— es opcional según organización.`,
          `En ingresos la clasificación económica identifica naturaleza. La aplicación presupuestaria combina códigos y es la unidad de registro, mientras la vinculación jurídica puede fijarse a nivel más agregado.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Art. 167 TRLRHL: el Ministerio establece estructura general teniendo en cuenta naturaleza económica y finalidades.`,
          `Orden EHA/3565/2008: estructura aplicable a entidades locales y organismos.`,
          `Clasificación por programas: áreas, políticas, grupos de programas, programas y subprogramas.`,
          `Clasificación económica de gastos: capítulos, artículos, conceptos y subconceptos.`,
          `Clasificación económica de ingresos: capítulos, artículos, conceptos y subconceptos.`,
          `Clasificación orgánica: facultativa y adaptada a estructura.`,
          `Bases de ejecución: pueden fijar desarrollo y vinculación respetando estructura.`
        ]},
        { heading: '1. Finalidad de la estructura', paragraphs: [
          `La estructura permite aprobar, ejecutar, controlar y comparar. Cada operación se imputa según finalidad y naturaleza económica.`,
          `Facilita consolidación y remisión al Estado, cálculo de gasto por políticas y análisis de personal, inversiones, transferencias y deuda.`,
          `Una clasificación incorrecta puede distorsionar estabilidad, límites, subvenciones y control, aunque no cambia por sí sola realidad jurídica del gasto.`
        ]},
        { heading: '2. Aplicación presupuestaria', paragraphs: [
          `La aplicación de gasto resulta al menos de programa y concepto económico, añadiendo orgánica si existe. Ejemplo: política de cultura más capítulo 2 para servicio corriente.`,
          `La aplicación de ingreso se identifica por código económico y opcionalmente orgánico. Los derechos se imputan por naturaleza.`,
          `El desarrollo puede llegar a subconceptos y programas detallados, pero debe mantener equivalencia con estructura oficial para información y consolidación.`
        ]},
        { heading: '3. Clasificación orgánica', paragraphs: [
          `Responde a quién gestiona: áreas, concejalías, centros o unidades. No es obligatoria con carácter general, pero la entidad puede establecerla.`,
          `Su diseño debe ser estable, claro y compatible con delegaciones. Cambiar organización puede exigir reasignación sin alterar finalidad o economía.`,
          `No debe confundirse órgano gestor con órgano competente para autorizar o aprobar; un área gestiona, pero la competencia deriva de ley y delegación.`
        ]},
        { heading: '4. Clasificación por programas: niveles', paragraphs: [
          `Ordena gastos por objetivos. Los niveles son área de gasto de un dígito, política de dos, grupo de programas de tres, programa de cuatro y subprograma de cinco.`,
          `La entidad debe llegar al menos a grupo de programas y puede desarrollar más. La denominación y códigos básicos son homogéneos.`,
          `Esta clasificación conecta presupuesto con competencia y servicio. Un gasto puede tener naturaleza económica igual pero programas diferentes.`
        ]},
        { heading: '5. Área 0: deuda pública', paragraphs: [
          `Incluye intereses y amortización de deuda y operaciones financieras relacionadas, no gastos de gestión ordinaria de tesorería cuando correspondan a otra aplicación.`,
          `Permite separar carga financiera de servicios. Los capítulos económicos suelen ser 3 para intereses y 9 para amortización.`,
          `No debe confundirse programa 0 con capítulo 0, que no existe en estructura económica ordinaria.`
        ]},
        { heading: '6. Área 1: servicios públicos básicos', paragraphs: [
          `Comprende seguridad y movilidad ciudadana, vivienda y urbanismo, bienestar comunitario y medio ambiente.`,
          `Incluye policía, tráfico, alumbrado, residuos, agua, saneamiento, vías, parques y protección ambiental según códigos.`,
          `La imputación se basa en finalidad predominante. Una inversión en parque se clasifica programa de medio ambiente y capítulo 6.`
        ]},
        { heading: '7. Área 2: protección y promoción social', paragraphs: [
          `Incluye pensiones, servicios sociales, promoción social y empleo. Refleja gasto dirigido a protección de personas y colectivos.`,
          `Ayudas, atención social, igualdad o empleo se imputan según programa y naturaleza: capítulo 2 si servicio contratado, 4 si transferencia, 1 si personal.`,
          `El mismo objetivo puede usar capítulos distintos. Programa responde al fin; capítulo al objeto económico.`
        ]},
        { heading: '8. Área 3: bienes públicos de carácter preferente', paragraphs: [
          `Comprende sanidad, educación, cultura y deporte. Se denomina preferente por su relevancia social.`,
          `Biblioteca, instalaciones deportivas, actividades culturales y escuelas municipales se ubican aquí según código.`,
          `Debe distinguirse competencia propia y gasto permitido; la clasificación no atribuye por sí sola competencia.`
        ]},
        { heading: '9. Área 4: actuaciones económicas', paragraphs: [
          `Incluye agricultura, industria, energía, comercio, turismo, transporte, infraestructuras y desarrollo empresarial.`,
          `Una subvención a comercio se programa en actuación económica y capítulo 4; una obra viaria puede estar en infraestructura y capítulo 6.`,
          `La política concreta depende de finalidad. No todo gasto de carretera es movilidad ciudadana; puede ser infraestructura productiva.`
        ]},
        { heading: '10. Área 9: actuaciones de carácter general', paragraphs: [
          `Incluye órganos de gobierno, servicios generales, administración financiera y tributaria y transferencias a otras Administraciones.`,
          `Secretaría, informática corporativa, recursos humanos, intervención y tesorería suelen imputarse a programas generales si no pueden asignarse a un servicio específico.`,
          `Debe evitarse usar área 9 como cajón de sastre. Cuando un gasto se vincula directamente a programa final, se imputa allí.`
        ]},
        { heading: '11. Clasificación económica del gasto: capítulos 1 a 4', paragraphs: [
          `Capítulo 1: gastos de personal, retribuciones, cuotas y prestaciones sociales. Capítulo 2: bienes corrientes y servicios, arrendamientos, reparaciones, suministros e indemnizaciones.`,
          `Capítulo 3: gastos financieros, intereses y comisiones. Capítulo 4: transferencias corrientes sin contraprestación para financiar operaciones corrientes.`,
          `Una factura de servicio es capítulo 2; una subvención es 4; nómina es 1; interés de préstamo es 3. El destinatario no basta: importa naturaleza.`
        ]},
        { heading: '12. Capítulos 5 a 9 del gasto', paragraphs: [
          `Capítulo 5 es fondo de contingencia y otros imprevistos en entidades obligadas o que lo establezcan. Capítulo 6 recoge inversiones reales y activos duraderos.`,
          `Capítulo 7 son transferencias de capital para financiar inversiones de terceros. Capítulo 8 son activos financieros, como préstamos concedidos o adquisición financiera.`,
          `Capítulo 9 son pasivos financieros, principalmente amortización de deuda. Adquirir un inmueble es capítulo 6; adquirir participaciones puede ser 8.`
        ]},
        { heading: '13. Clasificación económica del ingreso: capítulos 1 a 5', paragraphs: [
          `Capítulo 1: impuestos directos; 2: indirectos; 3: tasas, precios públicos y otros ingresos; 4: transferencias corrientes; 5: ingresos patrimoniales.`,
          `IBI, IAE e IVTM se clasifican como directos; ICIO como indirecto. Tasas, contribuciones, multas y reintegros se distribuyen en capítulo 3 por concepto.`,
          `Participación corriente o subvención corriente va a 4; intereses y alquileres de patrimonio a 5.`
        ]},
        { heading: '14. Capítulos 6 a 9 del ingreso', paragraphs: [
          `Capítulo 6: enajenación de inversiones reales; 7: transferencias de capital; 8: activos financieros; 9: pasivos financieros.`,
          `Venta de terreno patrimonial es 6; subvención para obra es 7; reintegro de préstamo concedido es 8; préstamo recibido es 9.`,
          `La clasificación no determina libre disponibilidad. Una transferencia de capital o ingreso afectado conserva destino aunque figure en capítulo.`
        ]},
        { heading: '15. Artículo, concepto y subconcepto', paragraphs: [
          `Cada capítulo se divide en artículos de dos dígitos, conceptos de tres y subconceptos de cinco. El desarrollo permite precisión y homogeneidad.`,
          `La entidad puede crear subconceptos dentro del marco, pero no alterar significado de códigos obligatorios.`,
          `La información al pleno y al Ministerio se agrega según niveles. El nivel de vinculación puede no coincidir con el de registro.`
        ]},
        { heading: '16. Vinculación jurídica y bolsas de crédito', paragraphs: [
          `La vinculación define hasta qué nivel puede gastarse sin modificación. Las bases establecen niveles dentro de límites y excepciones.`,
          `Si varias aplicaciones están vinculadas, disponibilidad se controla en bolsa común, aunque cada gasto se contabiliza en su aplicación correcta.`,
          `La vinculación no permite cambiar finalidad incompatible ni superar total. Los créditos nominativos, ampliables o afectados pueden tener vinculación específica.`
        ]},
        { heading: '17. Proyectos de gasto y financiación afectada', paragraphs: [
          `Los proyectos individualizan inversiones o actuaciones con duración y financiación. Permiten seguimiento por ejercicios y agentes.`,
          `La financiación afectada exige coeficientes y desviaciones para liquidación. Un mismo proyecto puede tener varias aplicaciones y fuentes.`,
          `La estructura presupuestaria y el código de proyecto son dimensiones distintas: una clasifica; el proyecto controla una unidad de gasto.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Gasto: programa = para qué; económica = en qué; orgánica = quién.`,
          `Áreas de programa: 0 deuda, 1 básicos, 2 social, 3 preferentes, 4 económicas, 9 generales.`,
          `Capítulos de gasto: 1 personal, 2 corriente, 3 financiero, 4 transferencias, 5 contingencia, 6 inversión, 7 capital, 8 activos, 9 pasivos.`,
          `Ingresos: 1 directos, 2 indirectos, 3 tasas y otros, 4 transferencias corrientes, 5 patrimonio, 6 enajenación, 7 capital, 8 activos, 9 pasivos.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Programa y capítulo responden a preguntas distintas. Una subvención para inversión es capítulo 7, no capítulo 6.`,
          `Amortizar préstamo es gasto capítulo 9; recibir préstamo es ingreso capítulo 9; intereses son gasto capítulo 3.`,
          `La clasificación orgánica es opcional; programa y económica son obligatorias en gasto.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué responde cada clasificación y cómo se forma una aplicación de gasto?`,
          `2. ¿Cuáles son las seis áreas y los nueve capítulos de gasto?`,
          `3. ¿Cómo clasificarías venta de inmueble, subvención de capital, préstamo recibido y amortización?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Para clasificar, identifica primero si es gasto o ingreso, después finalidad, naturaleza y órgano.`,
          `Practica con operaciones reales y justifica cada dimensión. Evita memorizar solo números sin comprender qué representa cada eje.`
        ]}
      ],
      tree: `ESTRUCTURA PRESUPUESTARIA
├─ Gastos
│  ├─ Orgánica: quién gestiona
│  ├─ Programas: para qué
│  │  └─ Área > política > grupo > programa > subprograma
│  └─ Económica: en qué
│     └─ Capítulo > artículo > concepto > subconcepto
├─ Ingresos
│  └─ Económica por naturaleza
├─ Aplicación presupuestaria
│  └─ Combinación de códigos
└─ Vinculación jurídica y proyectos`,
      reviewTable: [
        ['Código', 'Contenido', 'Ejemplo'],
        ['Programa 1', 'Servicios públicos básicos', 'Residuos o alumbrado'],
        ['Programa 2', 'Protección social', 'Servicios sociales'],
        ['Programa 3', 'Bienes preferentes', 'Cultura o deporte'],
        ['Gasto capítulo 1', 'Personal', 'Nómina'],
        ['Gasto capítulo 2', 'Bienes y servicios corrientes', 'Suministro'],
        ['Gasto capítulo 6', 'Inversión real', 'Obra municipal'],
        ['Ingreso capítulo 3', 'Tasas y otros', 'Tasa o multa'],
        ['Ingreso capítulo 9', 'Pasivo financiero', 'Préstamo recibido']
      ]
    },
    19: {
      sources: [SOURCES.trlrhl, SOURCES.rd500, SOURCES.contabilidad, SOURCES.estabilidad],
      articleCoverage: [
        ['Arts. 191-193 bis TRLRHL', 'Cierre, liquidación, remanente negativo y derechos de difícil cobro.'],
        ['Arts. 89-105 RD 500/1990', 'Operaciones de cierre, resultado y remanente.'],
        ['Instrucción contable local', 'Cálculo de resultado presupuestario, remanente y estados.'],
        ['Arts. 3-12 LO 2/2012', 'Estabilidad, sostenibilidad, deuda, regla de gasto y destino del superávit.'],
        ['Arts. 21-26 LO 2/2012', 'Planes y medidas preventivas, correctivas y coercitivas.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La liquidación cierra a 31 de diciembre y muestra ejecución. Sus magnitudes clave son resultado presupuestario y remanente de tesorería. No son equivalentes ni indican por sí solas estabilidad.`,
          `El resultado compara derechos y obligaciones del ejercicio con ajustes; el remanente mide recursos líquidos acumulados con pendientes y ajustes. Estabilidad se calcula en términos de contabilidad nacional y la regla de gasto limita evolución computable.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Art. 191 TRLRHL: cierre a 31 diciembre, confección antes del 1 de marzo y aprobación por presidente con informe.`,
          `Art. 193: medidas ante remanente negativo y remisión antes de fin de marzo.`,
          `Art. 193 bis: criterios mínimos de dudoso cobro.`,
          `RD 500/1990: derechos y obligaciones pendientes, resultado y remanente.`,
          `Instrucción contable: estados de liquidación y ajustes.`,
          `Arts. 3-4 LOEPSF: estabilidad y sostenibilidad.`,
          `Art. 12 LOEPSF: regla de gasto.`,
          `Arts. 21 y siguientes: plan económico-financiero y medidas.`
        ]},
        { heading: '1. Cierre del ejercicio', paragraphs: [
          `El ejercicio coincide con año natural y se cierra el 31 de diciembre respecto de recaudación y pago. Los derechos pendientes y obligaciones reconocidas pendientes pasan a tesorería.`,
          `Los créditos no utilizados se anulan salvo incorporación. Antes del cierre se depuran saldos, fases, proyectos, financiación afectada y operaciones no presupuestarias.`,
          `El cierre contable no elimina derechos ni obligaciones válidos; cambia su situación a ejercicios cerrados y permite elaborar estados.`
        ]},
        { heading: '2. Contenido y aprobación de la liquidación', paragraphs: [
          `La liquidación muestra créditos iniciales y definitivos, obligaciones, pagos, remanentes; previsiones, derechos, cobros y pendientes; resultado y remanente.`,
          `Debe confeccionarse antes del 1 de marzo y la aprueba el presidente previo informe de Intervención. Las de organismos se remiten para aprobación.`,
          `Se da cuenta al pleno en primera sesión y se remite al Estado y comunidad antes de finalizar marzo. Dar cuenta no equivale a aprobación plenaria.`
        ]},
        { heading: '3. Remanentes de crédito', paragraphs: [
          `Son saldos de créditos definitivos no afectados por obligaciones reconocidas: disponible, retenido o comprometido sin obligación.`,
          `Como regla se anulan. Pueden incorporarse compromisos anteriores, operaciones de capital, créditos extraordinarios y suplementos recientes y créditos con ingresos afectados.`,
          `La incorporación necesita financiación y no debe confundirse con remanente de tesorería, que es magnitud financiera global.`
        ]},
        { heading: '4. Resultado presupuestario', paragraphs: [
          `El resultado presupuestario del ejercicio compara derechos reconocidos netos y obligaciones reconocidas netas, separando operaciones no financieras, activos y pasivos financieros.`,
          `Un resultado positivo indica que los derechos del ejercicio superan obligaciones en términos presupuestarios; negativo, lo contrario. No equivale a caja ni beneficio empresarial.`,
          `Se calcula con operaciones del ejercicio, no con cobros y pagos exclusivamente. Un derecho no cobrado cuenta si está reconocido, sujeto a ajustes y calidad.`
        ]},
        { heading: '5. Ajustes del resultado', paragraphs: [
          `Se ajusta por desviaciones de financiación en gastos con financiación afectada y por créditos gastados financiados con remanente de tesorería para gastos generales.`,
          `Una desviación positiva significa financiación recibida no aplicada al gasto y reduce resultado ajustado; negativa significa gasto ejecutado sin financiación correspondiente y lo aumenta según reglas.`,
          `El uso de remanente financia gasto sin derecho del ejercicio, por lo que se añade para medir resultado ajustado. Los ajustes deben documentarse por proyecto.`
        ]},
        { heading: '6. Remanente de tesorería: concepto', paragraphs: [
          `Es magnitud acumulada a 31 de diciembre formada por fondos líquidos más derechos pendientes de cobro menos obligaciones pendientes de pago, con partidas pendientes de aplicación.`,
          `Mide capacidad financiera a corto plazo, pero requiere depuración. Un derecho antiguo difícilmente cobrable no puede tratarse como efectivo.`,
          `Se distingue remanente total, saldos de dudoso cobro, exceso de financiación afectada y remanente para gastos generales.`
        ]},
        { heading: '7. Fondos líquidos y pendientes', paragraphs: [
          `Fondos líquidos incluyen caja y cuentas bancarias disponibles. Los derechos pendientes incluyen presupuestos corrientes y cerrados y determinadas operaciones no presupuestarias.`,
          `Las obligaciones pendientes comprenden corrientes, cerrados y acreedores no presupuestarios. Deben conciliase tesorería y contabilidad.`,
          `Partidas pendientes de aplicación corrigen cobros o pagos aún no imputados. Mantenerlas sin depurar distorsiona la magnitud.`
        ]},
        { heading: '8. Dudoso cobro', paragraphs: [
          `Los derechos pendientes se minoran por estimación de difícil o imposible recaudación. Se atiende antigüedad, importe, naturaleza, porcentajes, recaudación y garantías.`,
          `El artículo 193 bis fija límites mínimos por antigüedad, sin impedir criterios más prudentes. Los derechos con garantía o de otras Administraciones pueden tratarse según naturaleza.`,
          `Dotar dudoso cobro no extingue el derecho ni impide recaudación. Es ajuste prudencial del remanente.`
        ]},
        { heading: '9. Exceso de financiación afectada', paragraphs: [
          `La financiación afectada solo puede usarse para gasto concreto. Si ingresos acumulados superan gasto ejecutado, existe exceso que no es libre.`,
          `Se calcula por agentes y proyectos mediante coeficiente y desviaciones. Se resta del remanente total para obtener disponible general.`,
          `El exceso financia incorporación del gasto afectado en ejercicios siguientes. Usarlo para otra finalidad vulnera afectación.`
        ]},
        { heading: '10. Remanente para gastos generales', paragraphs: [
          `Resulta de remanente total menos dudoso cobro y exceso afectado. Puede financiar modificaciones si es positivo y cumple reglas.`,
          `Positivo no equivale automáticamente a superávit de estabilidad ni dinero libre: pueden existir obligaciones pendientes, ajustes SEC o destinos legales.`,
          `Negativo activa medidas del artículo 193: reducción de gastos, crédito en condiciones o presupuesto siguiente con superávit inicial.`
        ]},
        { heading: '11. Estabilidad presupuestaria', paragraphs: [
          `La estabilidad exige equilibrio o superávit estructural en términos de capacidad o necesidad de financiación conforme al Sistema Europeo de Cuentas.`,
          `Se evalúa sobre perímetro de unidades clasificadas y transforma saldo presupuestario mediante ajustes: recaudación, intereses, inversiones, transferencias, operaciones pendientes y otros.`,
          `Un presupuesto equilibrado jurídicamente puede incumplir estabilidad; un resultado presupuestario positivo tampoco garantiza capacidad SEC.`
        ]},
        { heading: '12. Sostenibilidad financiera y deuda', paragraphs: [
          `Sostenibilidad es capacidad para financiar compromisos presentes y futuros dentro de límites de déficit, deuda y morosidad.`,
          `Incluye deuda comercial además de financiera. El periodo medio de pago debe respetar plazo legal y publicarse.`,
          `Las operaciones de crédito y gasto permanente deben analizarse a medio plazo, no solo en ejercicio actual.`
        ]},
        { heading: '13. Regla de gasto', paragraphs: [
          `La variación del gasto computable no puede superar tasa de referencia de crecimiento del PIB de medio plazo, salvo cambios normativos de ingresos y excepciones.`,
          `El gasto computable parte de empleos no financieros, excluye intereses de deuda, gasto no discrecional por desempleo, financiación finalista de UE u otras Administraciones y transferencias a sistemas de financiación, según ámbito.`,
          `Los objetivos y aplicación anual pueden cambiar o suspenderse legalmente; deben verificarse para el ejercicio de examen. No se memoriza una tasa fija permanente.`
        ]},
        { heading: '14. Destino del superávit', paragraphs: [
          `La LOEPSF establece destino del superávit a reducir endeudamiento neto con reglas y excepciones legales. La regulación anual puede habilitar inversiones financieramente sostenibles u otros destinos.`,
          `Superávit en términos SEC y remanente positivo son magnitudes distintas; para aplicar un destino pueden exigirse ambas, deuda y PMP dentro de límites.`,
          `Nunca debe afirmarse que todo remanente se gasta libremente. Se revisa normativa vigente, financiación afectada y estabilidad.`
        ]},
        { heading: '15. Incumplimiento y plan económico-financiero', paragraphs: [
          `El incumplimiento de estabilidad, deuda o regla de gasto puede exigir plan económico-financiero que permita cumplimiento en plazo legal.`,
          `El plan analiza causas, previsiones, medidas, evolución y sensibilidad; se aprueba y publica por órgano competente y se somete a seguimiento.`,
          `Existen medidas preventivas, correctivas y coercitivas. La entidad debe suministrar información y puede quedar sujeta a tutela financiera.`
        ]},
        { heading: '16. Remanente negativo', paragraphs: [
          `En primera sesión plenaria se reduce gasto del presupuesto vigente por importe del déficit. Solo puede revocarse con propuesta, informe y condiciones.`,
          `Si no es posible, puede concertarse crédito bajo condiciones legales. Si tampoco, el presupuesto siguiente se aprueba con superávit inicial no inferior.`,
          `Ocultar el déficit mediante derechos incobrables empeora situación y vulnera prudencia. El saneamiento debe ser real y documentado.`
        ]},
        { heading: '17. Relaciones entre magnitudes', paragraphs: [
          `Resultado ajustado responde al ejercicio; remanente, acumulado financiero; estabilidad, contabilidad nacional; regla de gasto, evolución del gasto; PMP, deuda comercial.`,
          `Pueden mostrar señales diferentes. Una entidad puede tener liquidez y necesidad SEC por inversión, o resultado positivo con remanente deteriorado por deudas antiguas.`,
          `La interpretación conjunta evita conclusiones falsas. El informe de Intervención explica conciliaciones y ajustes.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Liquidación: cierre 31 diciembre, confección antes 1 marzo, presidente aprueba, pleno conoce.`,
          `Resultado = derechos menos obligaciones, ajustado por financiación afectada y remanente usado.`,
          `Remanente = líquidos + cobros pendientes - pagos pendientes, ajustado por dudoso cobro y afectación.`,
          `Estabilidad, regla de gasto y PMP son controles distintos y deben verificarse con normativa anual vigente.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Liquidación no la aprueba el pleno. Remanente positivo no es igual a superávit.`,
          `Dudoso cobro no da de baja el derecho. Exceso afectado no puede financiar gasto general.`,
          `La regla de gasto no es un porcentaje fijo eterno y no se calcula sobre todo el presupuesto sin exclusiones.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cómo se calculan y ajustan resultado presupuestario y remanente de tesorería?`,
          `2. ¿Qué diferencia existe entre remanente positivo, superávit SEC y cumplimiento de regla de gasto?`,
          `3. ¿Qué medidas proceden ante remanente negativo y ante incumplimiento de estabilidad?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En ejercicios numéricos escribe fórmula y clasifica cada dato antes de operar. Separa corriente, cerrado, no presupuestario, afectado y dudoso.`,
          `En teoría, responde primero qué magnitud se pregunta. Muchas alternativas mezclan caja, presupuesto, contabilidad nacional y morosidad.`
        ]}
      ],
      tree: `LIQUIDACIÓN Y REGLAS FISCALES
├─ Cierre 31 de diciembre
├─ Resultado presupuestario
│  ├─ Derechos - obligaciones
│  └─ Ajustes por afectada y remanente usado
├─ Remanente de tesorería
│  ├─ Fondos + cobros - pagos
│  ├─ Dudoso cobro
│  └─ Exceso de financiación afectada
├─ Estabilidad y sostenibilidad
│  ├─ Capacidad/necesidad SEC
│  ├─ Deuda financiera y comercial
│  └─ Regla de gasto
└─ Medidas correctoras y planes`,
      reviewTable: [
        ['Magnitud', 'Qué mide', 'Clave'],
        ['Resultado presupuestario', 'Ejecución del ejercicio', 'Derechos - obligaciones + ajustes'],
        ['Remanente total', 'Situación acumulada de tesorería', 'Líquidos + cobros - pagos'],
        ['Dudoso cobro', 'Prudencia sobre derechos pendientes', 'Minora remanente'],
        ['Exceso afectado', 'Financiación reservada', 'No es libre'],
        ['Estabilidad', 'Capacidad/necesidad SEC', 'Ajustes de contabilidad nacional'],
        ['Regla de gasto', 'Variación del gasto computable', 'Art. 12 LOEPSF'],
        ['Liquidación', 'Antes de 1 de marzo', 'Art. 191 TRLRHL'],
        ['Remanente negativo', 'Reducción, crédito o superávit inicial', 'Art. 193']
      ]
    },
    20: {
      sources: [SOURCES.procedimiento, SOURCES.regimen, SOURCES.factura, SOURCES.contratos, SOURCES.morosidad, SOURCES.seguimientoMorosidad, SOURCES.pmp, SOURCES.trlrhl],
      articleCoverage: [
        ['Arts. 12-17 y 26-28 Ley 39/2015', 'Asistencia, relación electrónica, registros, archivo, documentos y copias.'],
        ['Arts. 38-46 Ley 40/2015', 'Sede, portal, identificación, firma, actuación automatizada, intercambio y archivo.'],
        ['Ley 25/2013', 'Factura electrónica, punto general, registro contable y tramitación.'],
        ['Art. 198 LCSP', 'Pago del precio, aprobación y consecuencias de demora.'],
        ['Ley 3/2004 y Ley 15/2010', 'Morosidad, intereses, costes e informes.'],
        ['RD 635/2014', 'Metodología y publicación del periodo medio de pago.'],
        ['Arts. 165, 183, 185, 186 y 190 TRLRHL', 'Función y contenido de bases de ejecución en gestión del presupuesto.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La modernización administrativa coloca a ciudadanía en centro y utiliza simplificación, calidad, interoperabilidad, datos y tramitación electrónica. No es solo sustituir papel por PDF: exige rediseñar procedimientos, accesibilidad y seguridad.`,
          `El tema combina documentos electrónicos, facturas, registro contable, bases de ejecución y morosidad. Debe seguirse el recorrido desde presentación de factura hasta conformidad, reconocimiento de obligación, ordenación, pago e informes.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Art. 13 LPAC: derechos de las personas en relación con Administraciones.`,
          `Arts. 14-17 LPAC: obligados electrónicos, lengua, registro y archivo.`,
          `Arts. 26-28 LPAC: documentos, copias y aportación.`,
          `Arts. 38-46 LRJSP: sede, portal, firma, sello, actuación automatizada, interoperabilidad y archivo.`,
          `Ley 25/2013: factura electrónica, punto general y registro contable.`,
          `Art. 198 LCSP: abono del precio en plazo y demora.`,
          `Ley 3/2004 y Ley 15/2010: intereses, costes y transparencia.`,
          `RD 635/2014: cálculo del PMP.`,
          `TRLRHL: bases de ejecución y fases de gasto.`
        ]},
        { heading: '1. Administración al servicio de la ciudadanía', paragraphs: [
          `El servicio público moderno combina legalidad, eficacia, simplicidad, claridad, proximidad, accesibilidad, transparencia, participación y protección de datos.`,
          `La ciudadanía tiene derecho a información, asistencia, identificación de responsables, no aportar documentos repetidos, elegir canal cuando no esté obligada y obtener resolución.`,
          `La digitalización no puede crear barreras. Debe existir asistencia y alternativas para no obligados, lenguaje claro y accesibilidad universal.`
        ]},
        { heading: '2. Simplificación y rediseño de procedimientos', paragraphs: [
          `Modernizar exige eliminar trámites sin valor, reutilizar datos, automatizar comprobaciones, normalizar modelos y medir tiempos.`,
          `Antes de digitalizar se analiza base legal, datos, documentos, órganos, plazos, decisiones y riesgos. Automatizar un procedimiento defectuoso consolida ineficiencia.`,
          `Las cartas de servicios, indicadores y evaluación permiten comprobar calidad. La simplificación nunca elimina audiencia, motivación o control exigidos.`
        ]},
        { heading: '3. Identidad, firma, sede y portal', paragraphs: [
          `La sede es dirección electrónica cuya titularidad corresponde a Administración y garantiza integridad, veracidad y actualización. El portal es punto de acceso a información y servicios y no siempre tiene efectos de sede.`,
          `Identificación acredita quién actúa; firma expresa voluntad, autenticidad e integridad. Se utilizan certificados, Cl@ve, sellos, códigos y sistemas admitidos.`,
          `Cada actuación debe usar nivel adecuado. No se exige firma para toda consulta; sí para solicitudes, recursos, declaraciones, desistimientos y renuncias.`
        ]},
        { heading: '4. Documento administrativo electrónico', paragraphs: [
          `Un documento electrónico válido contiene información en soporte, datos identificativos, referencia temporal, metadatos y firmas cuando proceda.`,
          `Los metadatos describen origen, expediente, versión, acceso y conservación. La integridad permite detectar alteración.`,
          `El formato debe ser interoperable y preservable. Un archivo escaneado no se convierte por sí solo en original o copia auténtica.`
        ]},
        { heading: '5. Expediente, índice y archivo', paragraphs: [
          `El expediente electrónico agrupa ordenadamente documentos y actuaciones con índice autenticado. Debe permitir remisión completa e integridad.`,
          `La actuación administrativa automatizada identifica órgano responsable de definición, programación, mantenimiento, supervisión e impugnación y órgano para firma o sello.`,
          `El archivo conserva autenticidad, integridad, accesibilidad y confidencialidad durante plazos, con políticas de conservación y eliminación autorizada.`
        ]},
        { heading: '6. Interoperabilidad y seguridad', paragraphs: [
          `La interoperabilidad permite compartir documentos y datos entre sistemas con formatos, metadatos y servicios comunes. Se apoya en esquemas nacionales y normas técnicas.`,
          `La seguridad protege disponibilidad, autenticidad, integridad, confidencialidad y trazabilidad. Se analizan riesgos, accesos, copias, incidentes y continuidad.`,
          `Interoperar no significa acceso indiscriminado. Cada consulta necesita competencia, finalidad, minimización y registro.`
        ]},
        { heading: '7. Registro y tramitación electrónica', paragraphs: [
          `El registro recibe 24/7, genera asiento y recibo, aplica fecha oficial y remite al órgano. Los obligados deben subsanar presentaciones en papel.`,
          `La tramitación incorpora expediente, reparto, informes, firma, notificación y archivo. Los gestores deben controlar estados y plazos.`,
          `Las plataformas no cambian competencia: un botón no valida un acto de órgano incompetente ni suple informe preceptivo.`
        ]},
        { heading: '8. Factura electrónica: concepto y obligados', paragraphs: [
          `La factura electrónica es documento con datos exigidos expedido y recibido en formato electrónico que garantiza autenticidad e integridad.`,
          `La Ley 25/2013 obliga a determinadas personas jurídicas y entidades a usar factura electrónica ante Administraciones, con excepciones regladas por cuantía o servicios en el extranjero que cada Administración puede establecer y publicar.`,
          `Las personas no obligadas pueden usarla. Una imagen PDF sin estructura o firma puede no cumplir formato exigido por punto general.`
        ]},
        { heading: '9. Punto general de entrada y códigos DIR3', paragraphs: [
          `Las facturas se presentan en punto general de entrada, conectado al registro contable. Deben identificar oficina contable, órgano gestor y unidad tramitadora mediante códigos.`,
          `El punto entrega justificante, valida formato y permite seguimiento. Rechazos técnicos deben distinguirse de rechazo material de la factura.`,
          `La entidad puede adherirse a punto estatal o autonómico o mantener uno conforme a requisitos. Debe publicar canal y condiciones.`
        ]},
        { heading: '10. Registro contable de facturas', paragraphs: [
          `Intervención gestiona registro contable, anota facturas recibidas y distribuye a órganos. La anotación da código e inicia trazabilidad, pero no reconoce obligación por sí sola.`,
          `El órgano gestor comprueba prestación, contrato, importe, impuestos, acreedor y conformidad. Puede aceptar, devolver o proponer rechazo motivado.`,
          `El registro emite requerimientos e informes sobre facturas pendientes y facilita control de morosidad y cierre.`
        ]},
        { heading: '11. Circuito presupuestario de una factura', paragraphs: [
          `Antes de contratar debe existir crédito y autorización. Tras prestación, la factura acredita importe, pero se necesita conformidad o certificación.`,
          `El reconocimiento de obligación se produce cuando se acredita prestación y derecho del acreedor. Después se ordena pago y Tesorería paga según plan y prioridad legal.`,
          `Una factura sin contrato o crédito genera incidencia y posible reconocimiento extrajudicial, revisión o enriquecimiento injusto, pero no debe normalizarse como procedimiento ordinario.`
        ]},
        { heading: '12. Bases de ejecución del presupuesto', paragraphs: [
          `Las bases contienen adaptación anual de normas presupuestarias a organización. Regulan vinculación, competencias delegadas, fases acumuladas, documentos, anticipos, pagos a justificar, caja fija, proyectos y modificaciones.`,
          `También pueden ordenar circuito de facturas, responsables de conformidad, plazos internos, registro, fiscalización y pagos, siempre respetando Ley 25/2013, LCSP, TRLRHL y normativa contable.`,
          `No pueden modificar leyes ni regular materias ajenas. Al ser anuales, debe consultarse la versión vigente del presupuesto de Carranque cuando se publique y evitar memorizar importes o delegaciones antiguos.`
        ]},
        { heading: '13. Plazo de pago en contratación pública', paragraphs: [
          `La Administración debe aprobar certificaciones o documentos de conformidad dentro del plazo legal y pagar dentro de treinta días desde aprobación, conforme al artículo 198 LCSP.`,
          `Si demora, debe abonar intereses e indemnización de costes de cobro. El contratista debe presentar factura en registro correspondiente en plazo para que comience cómputo adecuado.`,
          `Transcurrido plazo, puede reclamar por escrito y, tras inactividad legal, acudir a jurisdicción. Los plazos se computan con recepción, conformidad y factura según caso.`
        ]},
        { heading: '14. Morosidad e intereses', paragraphs: [
          `Morosidad es incumplimiento de plazo contractual o legal de pago. Genera interés automáticamente cuando acreedor cumplió y no recibió a tiempo, sin necesidad de requerimiento, en términos de Ley 3/2004.`,
          `El tipo es el legal de demora comercial publicado por semestres cuando no hay otro válido. Existe indemnización fija y costes acreditados conforme a normativa vigente.`,
          `Las cláusulas abusivas que alargan injustificadamente o excluyen intereses pueden ser nulas. En contratación pública rige plazo imperativo.`
        ]},
        { heading: '15. Informes de morosidad', paragraphs: [
          `Tesorería o Intervención elaboran informes periódicos sobre cumplimiento de plazos y obligaciones pendientes según Ley 15/2010 y normativa.`,
          `Los informes se remiten a pleno y órganos competentes y pueden publicarse o comunicarse al Ministerio. Deben conciliar facturas, obligaciones y pagos.`,
          `Una factura pendiente no siempre está fuera de plazo; se analiza fecha, conformidad, vencimiento y suspensión por incidencia imputable.`
        ]},
        { heading: '16. Periodo medio de pago', paragraphs: [
          `El PMP es indicador económico de deuda comercial calculado con metodología del RD 635/2014. No es exactamente el plazo jurídico individual de cada factura.`,
          `Combina ratio de operaciones pagadas y pendientes, importes y días respecto de fecha definida. Se calcula por entidad y grupo y se publica periódicamente.`,
          `Un PMP dentro de objetivo no elimina facturas concretas morosas; uno elevado activa medidas de tesorería, información y sostenibilidad.`
        ]},
        { heading: '17. Transparencia y atención al proveedor', paragraphs: [
          `El proveedor debe consultar estado de factura y conocer causa de rechazo. La Administración debe evitar devoluciones genéricas y mantener trazabilidad.`,
          `La transparencia incluye contratos, pagos, PMP y cuentas, respetando datos. Los canales de incidencias no sustituyen reclamación formal.`,
          `Una buena gestión reduce errores de códigos, duplicados, facturas sin expediente y retrasos de conformidad.`
        ]},
        { heading: '18. Protección de datos y accesibilidad', paragraphs: [
          `La tramitación electrónica maneja datos personales y económicos. Se aplica minimización, control de accesos, conservación y registro de actividad.`,
          `La sede, formularios y documentos deben ser accesibles para personas con discapacidad y usables en dispositivos comunes.`,
          `Publicar facturas o expedientes íntegros puede vulnerar datos. Transparencia exige disociación y límites.`
        ]},
        { heading: '19. Indicadores y mejora continua', paragraphs: [
          `Deben medirse tiempos de registro, asignación, conformidad, reconocimiento y pago; porcentaje de rechazo; incidencias y PMP.`,
          `Los datos permiten detectar cuellos de botella y asignar responsables. El objetivo no es tramitar más clics, sino resolver mejor y antes.`,
          `La automatización debe auditarse y tener mecanismos de corrección y recurso. Los cambios se documentan y forman al personal.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Documento electrónico requiere integridad, metadatos y firma cuando proceda; expediente añade orden e índice.`,
          `Factura: punto general > registro contable > órgano gestor > conformidad > obligación > ordenación > pago.`,
          `Bases de ejecución adaptan gestión anual, pero no pueden contradecir ley.`,
          `Morosidad jurídica, informes y PMP son controles relacionados pero no idénticos.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Registrar factura no equivale a reconocer obligación. Aviso no equivale a notificación. PDF no siempre equivale a factura estructurada válida.`,
          `El PMP no es el plazo legal de cada operación. Las bases no pueden ampliar el plazo de pago ni eliminar intereses.`,
          `La modernización no obliga a toda persona física a tramitar electrónicamente y debe ofrecer asistencia.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué diferencias existen entre documento, expediente, sede, portal, identificación y firma?`,
          `2. ¿Cuál es el circuito completo de una factura electrónica hasta el pago?`,
          `3. ¿Cómo se distinguen plazo legal de pago, informe de morosidad y periodo medio de pago?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `En un supuesto de factura dibuja fechas: prestación, factura, registro, conformidad, obligación, vencimiento, pago e intereses.`,
          `En administración electrónica identifica sujeto obligado, canal, documento, firma, órgano y evidencia. La herramienta nunca sustituye el requisito jurídico.`
        ]}
      ],
      tree: `MODERNIZACIÓN Y FACTURA ELECTRÓNICA
├─ Servicio a la ciudadanía
│  ├─ Simplificación y asistencia
│  ├─ Sede, portal, identidad y firma
│  ├─ Documento, expediente y archivo
│  └─ Interoperabilidad y seguridad
├─ Factura electrónica
│  ├─ Punto general y DIR3
│  ├─ Registro contable
│  ├─ Conformidad y reconocimiento
│  └─ Ordenación y pago
├─ Bases de ejecución
│  └─ Reglas internas anuales dentro de la ley
└─ Morosidad
   ├─ Plazo e intereses
   ├─ Informes
   └─ Periodo medio de pago`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Sede', 'Dirección con responsabilidad e integridad', 'Art. 38 LRJSP'],
        ['Documento', 'Información, identidad, tiempo, metadatos y firma', 'Art. 26 LPAC'],
        ['Factura', 'Presentación electrónica de obligados', 'Ley 25/2013'],
        ['Registro contable', 'Anota y distribuye; no reconoce obligación', 'Ley 25/2013'],
        ['Pago', 'Treinta días desde aprobación/conformidad legal', 'Art. 198 LCSP'],
        ['Interés', 'Automático por demora en términos legales', 'Ley 3/2004'],
        ['Bases', 'Adaptación anual de gestión presupuestaria', 'TRLRHL y RD 500/1990'],
        ['PMP', 'Indicador económico agregado', 'RD 635/2014'],
        ['Asistencia', 'Obligación respecto de no obligados y dificultades', 'Art. 12 LPAC']
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
      block: 'Carranque 16-20'
    };
    theme.studyWarnings = [
      'Verificar objetivos fiscales, regla de gasto y normativa anual vigentes en la fecha del examen.',
      'Comprobar las bases de ejecución del presupuesto de Carranque del ejercicio vigente cuando estén publicadas.'
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
    },
    dynamicChecks: [
      'Objetivos de estabilidad y regla de gasto del ejercicio del examen.',
      'Bases de ejecución del presupuesto vigente de Carranque.',
      'Tipo legal de interés de demora y periodo medio de pago publicados.'
    ]
  };

  window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE4 = {
    version: 'v0.85.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v85.pendingThemes,
    dynamicChecks: ope.theoryProgramme.v85.dynamicChecks
  };
})();
