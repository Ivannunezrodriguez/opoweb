(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-17';
  const commonHeadings = [
    'Resumen orientado al aprobado',
    'Rigor normativo',
    'Desarrollo completo del epígrafe oficial',
    'Síntesis de repaso rápido',
    'Opo-Test: puntos calientes',
    'Tres preguntas de retención activa',
    'Estrategia de examen'
  ];

  function install(number, sources, paragraphs, tree, table, sourcePolicy) {
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    const sections = commonHeadings.map((heading, index) => ({ heading, paragraphs: paragraphs[index] }));
    const words = [...sections.flatMap(section => [section.heading, ...section.paragraphs]), tree, ...table.flat()]
      .join(' ').trim().split(/\s+/).filter(Boolean).length;
    theme.sections = sections;
    theme.tree = tree;
    theme.reviewTable = table;
    theme.officialSources = sources;
    theme.theoryStatus = {
      autonomous: true,
      programmeLiteral: true,
      reviewedAt: REVIEW_DATE,
      words,
      sourcePolicy
    };
    theme.auditStatus = `banco real 30+ · teoría autosuficiente v0.88 · Presupuesto UC3M 2026 verificado · tema ${number}`;
  }

  install(18,
    [
      {
        label: 'UC3M · Presupuesto 2026, volumen I: objetivos, normas básicas de gestión, capítulos y clasificaciones',
        reference: 'UC3M-PRESUPUESTO-2026-VOL-I',
        url: 'https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view'
      },
      {
        label: 'UC3M · Área de Presupuestos de la Dirección Económico Financiera',
        reference: 'UC3M-DEF-PRESUPUESTOS',
        url: 'https://www.uc3m.es/economico/presupuestos'
      },
      {
        label: 'Ley Orgánica 2/2023, de 22 de marzo, del Sistema Universitario, texto consolidado',
        reference: 'BOE-A-2023-7500',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500'
      },
      {
        label: 'UC3M · Texto refundido oficial de los Estatutos',
        reference: 'UC3M-ESTATUTOS-CONSOLIDADO',
        url: 'https://www.uc3m.es/conocenos/normativa/estatutos-uc3m'
      },
      {
        label: 'UC3M · Información económica y ejecución presupuestaria',
        reference: 'UC3M-TRANSPARENCIA-ECONOMICA',
        url: 'https://www.uc3m.es/conocenos/informacion-economica'
      }
    ],
    [
      [
        'El tema 18 estudia el presupuesto propio de la Universidad Carlos III de Madrid desde su definición hasta la ejecución de los ingresos. Debe prepararse sobre el Presupuesto UC3M 2026 aprobado por el Consejo de Gobierno y el Consejo Social el 11 de diciembre de 2025. El documento anual concreta cifras, órganos y procedimientos; la Ley Orgánica 2/2023 y los Estatutos aportan el marco estable de autonomía, aprobación, equilibrio, control y rendición de cuentas.',
        'La secuencia de estudio más eficaz es: concepto y principios; magnitudes del ejercicio; estructura de gastos e ingresos; financiación; vinculación de créditos; modificaciones presupuestarias; disponibilidad y prórroga; gestión y reconocimiento de ingresos. Conviene separar las reglas estables de las cifras de 2026. Las cifras pueden ser preguntadas porque el epígrafe nombra el Presupuesto UC3M, pero no deben confundirse con normas permanentes para ejercicios posteriores.',
        'El Presupuesto 2026 presenta un total de gastos y de ingresos de 300.468.067,59 euros. El equilibrio formal se obtiene porque el capítulo VIII de ingresos incorpora 41.882.621,94 euros de activos financieros, fundamentalmente remanentes afectados. Por eso una tabla de estabilidad puede mostrar ingresos no financieros inferiores a los gastos no financieros sin que exista déficit final computable: la financiación finalista de ejercicios anteriores cubre la diferencia prevista.'
      ],
      [
        'El artículo 1 de las Normas Básicas de Gestión define el presupuesto como la expresión cifrada, conjunta y sistemática de las obligaciones que como máximo puede reconocer la Universidad y de los derechos que se prevén realizar durante 2026. En gastos, los créditos son límites máximos; en ingresos, las cantidades son previsiones de derechos. Esta diferencia explica por qué no se habla de un límite máximo de ingresos.',
        'La Universidad fue creada por la Ley 9/1989 y se rige por la Ley Orgánica 2/2023 y sus Estatutos aprobados por Decreto 1/2003, modificados por Decreto 95/2009. Tiene personalidad jurídica, patrimonio propio y autonomía para elaborar, aprobar y gestionar su presupuesto. La autonomía no excluye la normativa de la Comunidad de Madrid, la estabilidad presupuestaria, la sostenibilidad financiera, la normalización contable ni la legislación supletoria del sector público.',
        'El artículo 57 de la Ley Orgánica 2/2023 exige que los presupuestos universitarios cumplan estabilidad y transparencia y que elaboración, aprobación, ejecución y liquidación se sometan a las normas estatales y autonómicas aplicables. Si la liquidación arroja remanente de tesorería negativo, el Consejo Social debe reducir gastos del nuevo presupuesto por igual cuantía, salvo revocación en las condiciones legalmente previstas. Esta regla es estable y no debe mezclarse con una cifra anual concreta.',
        'La página oficial de Presupuestos identifica a la Dirección Económico Financiera-Presupuestos como unidad que elabora y gestiona el presupuesto, tramita modificaciones y sigue la ejecución de gastos e ingresos. Todas las solicitudes de modificación se canalizan a través de esa unidad mediante propuesta motivada del responsable del centro solicitante. La publicidad en el Portal de Transparencia permite consultar presupuestos, memorias y ejecución.'
      ],
      [
        'La magnitud central del ejercicio es 300.468.067,59 euros. En el estado de gastos, el capítulo I, gastos de personal, asciende a 161.190.785,21 euros y representa el 76,52 por ciento. El capítulo II, gastos corrientes en bienes y servicios, suma 40.697.181,71 euros; el capítulo III, gastos financieros, 270.000 euros; y el capítulo IV, transferencias corrientes, 8.481.942,98 euros. Los gastos corrientes totalizan 210.639.909,90 euros, el 70,10 por ciento.',
        'Los gastos de capital alcanzan 88.162.977,69 euros. Dentro del capítulo VI se distinguen inversiones reales generales por 6.638.345,04 euros e investigación específica por 55.170.132,65 euros. El capítulo VII, transferencias de capital, asciende a 26.354.500 euros. Los capítulos VIII y IX de gastos suman 1.665.180 euros, con 215.180 euros de activos financieros y 1.450.000 euros de pasivos financieros.',
        'En ingresos, el capítulo III, tasas y otros ingresos, prevé 54.945.567,32 euros; el capítulo IV, transferencias corrientes, 146.834.705,33 euros; y el capítulo V, ingresos patrimoniales, 4.189.173 euros. Los ingresos corrientes suman 205.969.445,65 euros. El capítulo VII, transferencias de capital, aporta 52.616.000 euros. El capítulo VIII, activos financieros, incorpora 41.882.621,94 euros. No existe capítulo IX de ingresos en la tabla del ejercicio.',
        'El artículo 2 fija un techo del presupuesto de gastos de 325 millones de euros. Además, recoge dos reservas estatutarias: al menos el ocho por ciento del capítulo II de Gerencia y Servicios para el fondo bibliográfico y documental de la Biblioteca, y fondos equivalentes a un mínimo del dos por ciento del importe de la plantilla de funcionarios docentes para años sabáticos. Son mínimos vinculados a bases distintas y no porcentajes sobre el presupuesto total.',
        'El artículo 3 enumera las fuentes de financiación: transferencias de la Comunidad de Madrid, incluidas nominativa, inversiones, programa María Goyri e investigación; precios públicos y demás derechos; compensación de exenciones y reducciones; subvenciones, legados y donaciones; rendimientos patrimoniales y de actividades económicas; ingresos de contratos del artículo 60 de la Ley Orgánica del Sistema Universitario; operaciones de crédito para inversiones con autorización autonómica; remanentes de tesorería y otros ingresos.',
        'La estructura presupuestaria del artículo 4 es triple para gastos y doble para ingresos. Los gastos se clasifican funcionalmente o por programas, orgánicamente por centros de gestión y económicamente por naturaleza. Los ingresos se clasifican orgánica y económicamente. La aplicación presupuestaria de gastos combina las tres clasificaciones. La clasificación económica se desarrolla en capítulos, artículos, conceptos y subconceptos.',
        'Los créditos tienen carácter limitativo y vinculante. La regla general es vinculación a nivel de concepto dentro de cada centro y programa. Los capítulos I, II y VI vinculan a nivel de capítulo. Las atenciones protocolarias y representativas y las subvenciones nominativas vinculan al nivel en que estén desagregadas. Superar la vinculación requiere autorización del órgano competente y propuesta razonada a través de la DEF-Servicio de Presupuestos.',
        'Las modificaciones presupuestarias alteran los créditos inicialmente aprobados. Las financiadas con remanentes del ejercicio anterior requieren autorización del Rector y respeto de la estabilidad. Las generaciones de crédito pueden proceder de remanentes específicos, ingresos recaudados, derechos reconocidos o compromisos derivados de aportaciones, servicios, inversiones autorizadas, enajenación de bienes y otras operaciones. Las generaciones y rectificaciones presupuestarias se aprueban por el Rector.',
        'Las transferencias trasladan crédito entre conceptos del estado de gastos. Entre capítulos de gastos corrientes o entre capítulos de capital, decide el Rector si el importe es inferior al límite máximo del contrato menor de obras y el Consejo de Gobierno si lo supera. Del gasto corriente al gasto de capital decide el Consejo Social. Del capital al corriente se exige Consejo Social y autorización previa del Gobierno de la Comunidad de Madrid.',
        'Los créditos no vinculados a obligaciones reconocidas se anulan al final del ejercicio, pero determinados remanentes superiores a 300 euros pueden incorporarse al ejercicio inmediato siguiente si existe superávit y se cumplen estabilidad y límites normativos. Se incluyen compromisos contraídos no ejecutados por causa justificada y expedientes de contratación no adjudicados a 31 de diciembre. Autoriza el Rector.',
        'Las redistribuciones son variaciones dentro de un mismo capítulo y centro, o entre centros por descentralización o centralización operativa. Las aprueba el Rector; la firma de redistribuciones del capítulo VI de investigación está delegada en el Vicerrector de Investigación y Transferencia. Toda solicitud de modificación se tramita por la DEF-Servicio de Presupuestos mediante propuesta que explique su necesidad.',
        'La disponibilidad corresponde a cada centro o unidad conforme a los créditos asignados. Los responsables del centro y el miembro competente del Consejo de Dirección proponen gastos dentro de las delegaciones vigentes. No pueden adquirirse compromisos superiores a los créditos autorizados según su vinculación: los actos y disposiciones infractores son nulos de pleno derecho. Los gastos deben ser necesarios, idóneos y beneficiar a la Universidad.',
        'Si el presupuesto del año siguiente no está aprobado antes del 1 de enero, se prorroga automáticamente el anterior hasta la aprobación del nuevo, con los ajustes técnicos oportunos. No significa que todas las dotaciones continúen sin adaptación ni que se pueda superar el techo: la prórroga mantiene la operatividad dentro de los límites y ajustes legalmente necesarios.',
        'La ejecución de ingresos se centraliza. Los centros no pueden percibir directamente recursos procedentes de contratos, cursos o convenios; deben ordenar el ingreso en una cuenta oficial de la Universidad e identificar expediente o código. Las facturas solo se emiten mediante Universitas XXI o sistema equivalente para garantizar un registro único. Las subvenciones, donaciones y ayudas no generan factura; la DEF-Presupuestos expide certificación de recepción.',
        'La devolución de ingresos se tramita por el centro gestor mediante documento PMP y se remite a DEF-Presupuestos para el pago. Todo acto que convierta a la Universidad en acreedora debe comunicarse de inmediato para su contabilización. El reconocimiento exige un incremento patrimonial medible con fiabilidad y se imputa conforme al principio de devengo, atendiendo a la corriente real y no al momento del cobro.',
        'Los ingresos no localizados durante un mes por falta de información se aplican provisionalmente a la orgánica creada para ingresos no localizados. Las facturas emitidas y no cobradas se provisionan al cierre y se someten a seguimiento: emisión, recordatorio a 60 días, inicio de incobrados a 90 días y actuación del Grupo de Seguimiento a 120 días. La anulación de facturas depende de antigüedad, causa y órgano competente; no es una decisión informal del centro.'
      ],
      [
        'Tema 18 en una cadena: definición anual y limitativa; marco LOSU-Estatutos-Comunidad de Madrid; total 300.468.067,59 euros; techo de gasto 325 millones; estructura triple de gastos y doble de ingresos; financiación por transferencias, precios, subvenciones, patrimonio, artículo 60, crédito autorizado y remanentes; vinculación general por concepto con capítulos I, II y VI a capítulo; modificaciones con órganos diferenciados; ingresos centralizados, registrados y reconocidos por devengo.',
        'Cifras 2026: personal 161.190.785,21; bienes y servicios 40.697.181,71; transferencias corrientes de ingresos 146.834.705,33; transferencias de capital 52.616.000; activos financieros de ingresos 41.882.621,94. Reservas: Biblioteca mínimo 8 por ciento del capítulo II de Gerencia y Servicios; sabáticos mínimo 2 por ciento de la plantilla de funcionarios docentes.'
      ],
      [
        'Diferencia entre obligación máxima y derecho previsto; total de presupuesto frente a techo de gasto; capítulo I y su porcentaje; capítulo VIII de ingresos y remanentes; estructura triple o doble; aplicación presupuestaria; nivel de vinculación; Rector, Consejo de Gobierno, Consejo Social y Comunidad de Madrid en transferencias; incorporación superior a 300 euros; nulidad por exceso de crédito; prórroga automática; centralización de ingresos; factura frente a subvención; devengo; fases de seguimiento de impagados.',
        'Trampas frecuentes: afirmar que el techo es el total aprobado; aplicar el ocho por ciento al presupuesto completo; confundir remanente específico con ingreso corriente; decir que todas las transferencias las aprueba el Rector; atribuir las incorporaciones al Consejo Social; considerar disponible cualquier remanente; permitir que un departamento cobre directamente; identificar reconocimiento del derecho con cobro efectivo.'
      ],
      [
        '¿Cómo se compone el total de ingresos de 300.468.067,59 euros y qué papel desempeña el capítulo VIII? ¿Qué órgano aprueba cada clase de transferencia de crédito y cuándo interviene la Comunidad de Madrid? ¿Qué diferencias existen entre reconocimiento del derecho, facturación, recaudación y devolución de ingresos?'
      ],
      [
        'Primero clasifica la pregunta como cifra anual, regla estable, clasificación, modificación o ingreso. Después identifica artículo y órgano. En cifras, memoriza bloques y relaciones, no una lista aislada: total, techo, capítulo I, transferencias corrientes, capital y remanentes. En órganos, usa una escala: Rector para operaciones ordinarias previstas; Consejo de Gobierno para determinadas transferencias de mayor importe; Consejo Social para cambios entre corriente y capital; autorización autonómica cuando el capital financia corriente.',
        'No respondas por analogía con un ayuntamiento. La UC3M dispone de reglas propias en sus Normas Básicas de Gestión. Las preguntas de ingresos suelen enfrentar ingreso directo del centro con cuenta oficial, factura con subvención, cobro con devengo y devolución con documento PMP. La opción correcta debe respetar centralización, trazabilidad y competencia.'
      ]
    ],
    'Tema 18 · Presupuesto UC3M I\n├─ Concepto y marco\n│  ├─ Expresión cifrada, conjunta y sistemática\n│  ├─ Obligaciones máximas y derechos previstos\n│  ├─ LOSU, Estatutos y Comunidad de Madrid\n│  └─ Estabilidad, transparencia y techo\n├─ Estructura 2026\n│  ├─ Total: 300.468.067,59 €\n│  ├─ Gastos: capítulos I a IX\n│  ├─ Ingresos: capítulos III, IV, V, VII y VIII\n│  └─ Remanentes afectados\n├─ Créditos\n│  ├─ Triple clasificación de gastos\n│  ├─ Doble clasificación de ingresos\n│  ├─ Vinculación\n│  └─ Disponibilidad y prórroga\n├─ Modificaciones\n│  ├─ Generaciones y rectificaciones\n│  ├─ Transferencias\n│  ├─ Incorporaciones\n│  └─ Redistribuciones\n└─ Ingresos\n   ├─ Cuenta oficial y registro único\n   ├─ Facturas, subvenciones y certificaciones\n   ├─ Reconocimiento por devengo\n   └─ Seguimiento, anulación y devolución',
    [
      ['Definición', 'Obligaciones máximas y derechos previstos', 'Art. 1'],
      ['Total 2026', '300.468.067,59 €', 'Tabla por capítulos'],
      ['Techo de gasto', '325.000.000 €', 'Art. 2'],
      ['Capítulo I gastos', '161.190.785,21 €; 76,52 %', 'Tabla por capítulos'],
      ['Capítulo IV ingresos', '146.834.705,33 €', 'Tabla por capítulos'],
      ['Capítulo VIII ingresos', '41.882.621,94 €', 'Activos financieros/remanentes'],
      ['Biblioteca', 'Mínimo 8 % del capítulo II de Gerencia y Servicios', 'Estatutos art. 161.4'],
      ['Sabáticos', 'Mínimo 2 % de la plantilla funcionarial docente', 'Estatutos art. 108.4'],
      ['Gastos', 'Clasificación funcional, orgánica y económica', 'Art. 4'],
      ['Ingresos', 'Clasificación orgánica y económica', 'Art. 4'],
      ['Vinculación general', 'Concepto dentro de centro y programa', 'Art. 5'],
      ['Vinculación especial', 'Capítulos I, II y VI a capítulo', 'Art. 5'],
      ['Transferencias', 'Rector/Consejo de Gobierno/Consejo Social/CAM', 'Art. 6'],
      ['Incorporación', 'Remanente superior a 300 € y requisitos', 'Art. 6'],
      ['Ingresos', 'Cuenta oficial, UXXI y principio de devengo', 'Arts. 13 y 14']
    ],
    'Presupuesto UC3M 2026 y páginas oficiales de la Universidad, contrastados con LOSU y Estatutos; las magnitudes anuales se identifican expresamente como datos de 2026.'
  );

  install(19,
    [
      {
        label: 'UC3M · Presupuesto 2026, volumen I: normas de gestión del gasto, tesorería y cierre',
        reference: 'UC3M-PRESUPUESTO-2026-VOL-I',
        url: 'https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view'
      },
      {
        label: 'UC3M · Dirección Económico Financiera: contabilidad y rendición de cuentas',
        reference: 'UC3M-DEF-CONTABILIDAD',
        url: 'https://www.uc3m.es/economico/contabilidad'
      },
      {
        label: 'UC3M · Compras y servicios: gestión económica, facturas y documentos contables',
        reference: 'UC3M-COMPRAS-SERVICIOS',
        url: 'https://www.uc3m.es/ss/Satellite/asuntoseconomicos/es/TextoDosColumnas/1371350970377/Compras%2C_Servicios'
      },
      {
        label: 'UC3M · Área de Presupuestos y seguimiento de ejecución',
        reference: 'UC3M-DEF-PRESUPUESTOS',
        url: 'https://www.uc3m.es/economico/presupuestos'
      },
      {
        label: 'UC3M · Sede electrónica: trámites económico-financieros',
        reference: 'UC3M-SEDE-DEF',
        url: 'https://sede.uc3m.es/formularios-def'
      },
      {
        label: 'Ley Orgánica 2/2023, de 22 de marzo, del Sistema Universitario, texto consolidado',
        reference: 'BOE-A-2023-7500',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500'
      }
    ],
    [
      [
        'El tema 19 continúa donde termina el tema 18. Ya no se centra en cómo se estructura el presupuesto, sino en cómo se convierte un crédito en una obligación reconocida y finalmente en un pago. El núcleo de examen son las fases del gasto, documentos contables, unidades tramitadoras, facturas, caja fija y anticipos, tesorería, cierre y liquidación. Deben distinguirse autorización del gasto, compromiso, reconocimiento de obligación, propuesta de pago y ejecución material del pago.',
        'La norma anual principal es el Presupuesto UC3M 2026, especialmente el artículo 10, el título V de gestión del gasto, el artículo 16 y el artículo 24 de tesorería. La página de la Dirección Económico Financiera confirma que la contabilidad coordina la rendición de cuentas, las auditorías y el seguimiento económico; el área de Presupuestos sigue ejecución y modificaciones; y las páginas de compras describen la operativa de UXXI-Económico, justificantes, Docuconta, FACe y conformidad de facturas.',
        'La preparación debe evitar dos reducciones: convertir el tema en una simple lista RC-A-D-O o estudiarlo como si fuera únicamente la Ley de Contratos. Los documentos contables reflejan fases presupuestarias, pero el expediente necesita competencia, crédito, contratación válida, factura o justificante, conformidad, imputación, firma, tercero correcto y tesorería. La contratación se desarrollará específicamente en el tema 20.'
      ],
      [
        'La ejecución del presupuesto universitario se somete a la LOSU, la normativa autonómica, las Normas Básicas de Gestión, la Ley de Contratos del Sector Público, normativa de facturación, estabilidad y delegaciones internas. El Rector y los órganos con facultades económico-financieras delegadas autorizan y disponen gastos. La competencia no se presume por ser responsable de un centro; debe derivar de la resolución de delegación vigente.',
        'No pueden adquirirse compromisos superiores al crédito autorizado y vinculado. Los actos que infrinjan esa prohibición son nulos de pleno derecho. Además del crédito, todo gasto debe ser necesario, idóneo y beneficioso para la Universidad. Los financiados por subvenciones, convenios o proyectos deben cumplir elegibilidad y condiciones específicas. Un gasto formalmente posible puede ser no financiable para un proyecto concreto.',
        'La contabilidad presupuestaria no sustituye al expediente administrativo. El documento contable registra una fase, pero no cura una contratación omitida, una factura inválida, una competencia inexistente o una falta de conformidad. Del mismo modo, el pago material no convierte en correcto un gasto tramitado sin crédito. En test, documento, fase, órgano y justificante deben coincidir.'
      ],
      [
        'Las fases básicas del gasto se representan mediante documentos contables. RC retiene crédito y asegura que una cantidad queda reservada para una finalidad. A autoriza el gasto. D formaliza la disposición o compromiso con un tercero. O recoge el reconocimiento de la obligación y propuesta de pago en la terminología interna del documento. La Universidad permite documentos acumulados AD y ADO cuando varias fases se tramitan conjuntamente. No debe afirmarse que ADO elimina los controles de contratación, factura o conformidad.',
        'La gestión se distribuye entre unidades. Las Oficinas Económicas tramitan con carácter general capítulos II, IV, VI y VII, salvo excepciones de investigación y personal. Los Servicios Centrales de la Dirección Económico Financiera gestionan capítulos I, VII, VIII y IX, anticipos de nómina, ayuda social, conceptos no presupuestarios y devoluciones de ingresos. El Servicio de Investigación y Recursos Humanos interviene en becas y contratos laborales de investigación. La Dirección Económico Financiera puede ajustar esta organización para simplificar procesos.',
        'Los gastos con factura sometidos a contratación requieren expediente y trazabilidad. Universitas XXI Económico utiliza el módulo de Justificantes de Gasto para registrar facturas y Docuconta para elaborar documentos contables. Las facturas electrónicas se presentan por FACe y deben identificar oficina contable, órgano gestor, unidad tramitadora, órgano proponente cuando proceda, expediente, aplicación o proyecto y objeto. Si falta información esencial para identificar el gasto, la factura puede devolverse al proveedor.',
        'La conformidad acredita que el bien, suministro o servicio se ha recibido correctamente y que la factura se corresponde con la prestación. No equivale a adjudicar ni a aprobar el gasto inicial. Debe quedar incorporada al expediente por el cauce electrónico o formulario habilitado. Para bienes inventariables se añade el acta de inventario cuando proceda. Antes de pagar, los datos del tercero y de su cuenta deben estar actualizados y respaldados por el formulario y, en cambios bancarios, certificado de titularidad.',
        'Las facturas deben cumplir el Real Decreto 1619/2012. La norma interna permite tratar como tickets, a efectos del módulo de Justificantes de Gasto, facturas inferiores a 100 euros, pero esta simplificación técnica no elimina la necesidad de que el gasto sea real, imputable, competente y justificable. Tampoco convierte todo gasto inferior a 100 euros en caja fija ni lo excluye de las reglas contractuales.',
        'Para conferencias y actividades similares se exige designación escrita por la autoridad competente. Se tramita justificante de gasto y documento ADO, con fechas, horas, viajes y alojamiento cuando correspondan, y se incorpora programa o contexto. Si el conferenciante actúa como profesional debe emitir factura; si es persona física, se aplica la retención fiscal correspondiente en el documento contable. La contratación verbal está prohibida salvo emergencia.',
        'Los pagos con tarjeta de crédito institucional requieren los cauces previstos y documento ADO. Los pagos en formalización, ADO con líquido cero, se utilizan cuando un centro realiza un cargo interno a otro centro. Los pagos de tasas oficiales exigen recepción previa del documento contable o conformidad en la Dirección Económico Financiera. Son operaciones distintas y no deben confundirse con una transferencia bancaria ordinaria a proveedor.',
        'El Sistema Asimilado a Caja Fija canaliza necesidades de escasa cuantía que no excedan de 5.000 euros sin IVA, con pagos de periodicidad inferior a una semana. No es una excepción general a la contratación ni una autorización para fraccionar. Los anticipos a justificar atienden situaciones extraordinarias imposibles de tramitar ordinariamente, tienen importe máximo de 12.000 euros y requieren motivación, factura proforma o presupuesto y documento RC.',
        'La justificación del anticipo se realiza mediante ADO endosado al habilitado para actividad general o por el procedimiento específico de investigación. El plazo máximo general es un mes. La falta de justificación provoca reclamación y puede llevar a propuesta de deducción en nómina. No se concede un nuevo anticipo a quien mantenga anticipos o tarjetas prepago pendientes fuera de plazo.',
        'La ordenación material del pago se integra en la tesorería. Por defecto, las órdenes se ejecutan tres días a la semana y normalmente mediante transferencia bancaria. Se incluyen documentos contables validados y firmados en el sistema el día anterior. La Dirección Económico Financiera puede modificar la frecuencia según liquidez y naturaleza del gasto. No se efectúan pagos en agosto durante la actividad reducida ni en los primeros veinticinco días de enero, según la norma anual.',
        'Los pagos fuera de la zona euro pueden realizarse en euros o divisas y requieren cumplimentar la información monetaria. Las diferencias de cambio inferiores a 50 euros se asumen por la Universidad en la orgánica general; si son superiores se imputan a la aplicación del documento. Los cheques son excepcionales y requieren autorización previa. Los pagos QR a personas físicas también son excepcionales, deben ser inferiores a 1.000 euros y precisan autorización previa de la DEF.',
        'La liquidación compara derechos y obligaciones del ejercicio, determina resultado presupuestario y remanente y sirve de base para cuentas anuales y decisiones del ejercicio siguiente. No equivale a que todo crédito disponible se gaste. Al final del ejercicio, los créditos no sujetos a obligaciones reconocidas se anulan, salvo incorporaciones legalmente posibles. Un remanente de tesorería negativo activa la reducción prevista por la LOSU y la intervención del Consejo Social.',
        'El cierre se prepara durante el último trimestre. La Gerencia y la Dirección Económico Financiera establecen normas de cierre de ingresos y gastos y de apertura del ejercicio siguiente. Estas instrucciones concretan fechas límite para facturas, documentos y operaciones. La prórroga presupuestaria y el cierre son instituciones distintas: la primera permite operar si no existe nuevo presupuesto; el segundo delimita imputación, contabilización y rendición del ejercicio que termina.',
        'La Dirección Económico Financiera-Contabilidad es responsable de la contabilidad, la rendición de cuentas anuales, la coordinación de la auditoría externa y el seguimiento periódico de ejecución, situación económico-patrimonial y equilibrio. Mensualmente remite a la Comunidad de Madrid la información requerida. La cuenta anual no se reduce a la liquidación presupuestaria: integra información presupuestaria, económica, patrimonial y financiera conforme al marco contable público.',
        'La documentación soporte debe conservarse y estar disponible para control interno y externo. Factura, contrato, autorización, documento contable, conformidad, alta de tercero, inventario y justificantes forman un expediente trazable. La custodia permite auditoría, rendición de cuentas, prevención del fraude y comprobación de subvenciones. Una copia dispersa o un correo sin incorporación al expediente no sustituyen la documentación oficial.'
      ],
      [
        'Tema 19 en una cadena: crédito disponible; RC; autorización A; compromiso D; obligación y propuesta O; documentos acumulados AD o ADO; factura o justificante; conformidad; tercero e inventario; orden de pago; tesorería; cierre; liquidación y cuenta anual. Cada fase exige competencia y soporte. El gasto no es correcto solo porque exista factura ni se puede pagar solo porque exista saldo bancario.',
        'Cifras y reglas anuales clave: caja fija hasta 5.000 euros sin IVA; anticipo a justificar hasta 12.000 euros y justificación general en un mes; pagos ordinarios tres días a la semana; pagos QR inferiores a 1.000 euros; diferencias de cambio inferiores a 50 euros asumidas por orgánica general; cierre regulado por Gerencia y DEF en el último trimestre.'
      ],
      [
        'RC, A, D, O, AD y ADO; crédito y vinculación; nulidad por exceso; competencia delegada; Oficinas Económicas, DEF, Investigación y RRHH; UXXI Justificantes y Docuconta; FACe; unidad tramitadora; conformidad; factura y ticket; alta de tercero y cuenta bancaria; inventario; conferencias; caja fija; anticipos; orden de pago; transferencia, divisas, cheque y QR; liquidación, remanente, cierre, cuenta anual y auditoría.',
        'Trampas frecuentes: decir que RC autoriza el gasto; confundir D con pago; afirmar que ADO exime de contrato; considerar la conformidad como adjudicación; usar caja fija por encima de 5.000 euros sin IVA; olvidar el plazo de un mes del anticipo; equiparar cierre con prórroga; afirmar que liquidación y cuenta anual son lo mismo; permitir pagos con datos bancarios no verificados.'
      ],
      [
        '¿Qué fase representa cada documento RC, A, D y O y qué controles siguen siendo necesarios cuando se utiliza ADO? ¿Qué diferencias existen entre factura, conformidad, reconocimiento de obligación, propuesta de pago y transferencia bancaria? ¿Cómo se relacionan cierre, liquidación, remanente de tesorería, cuenta anual y prórroga presupuestaria?'
      ],
      [
        'Resuelve las preguntas como un flujo. Localiza primero dónde está el expediente: centro gestor, oficina económica, DEF, investigación o recursos humanos. Después identifica la fase presupuestaria, el documento, el justificante y la firma. Si una opción salta directamente de factura a pago, probablemente omite autorización, compromiso, conformidad o reconocimiento de obligación.',
        'Memoriza los documentos en orden, pero no de forma mecánica: RC reserva; A decide gastar; D compromete frente a tercero; O reconoce y propone; tesorería paga. Para preguntas de cierre, separa fecha de imputación, anulación o incorporación de crédito, liquidación del resultado y elaboración de cuentas. En cifras internas, comprueba si el límite incluye o excluye IVA.'
      ]
    ],
    'Tema 19 · Presupuesto UC3M II\n├─ Ejecución del gasto\n│  ├─ Crédito, necesidad e idoneidad\n│  ├─ Competencia y delegación\n│  ├─ Contratación y elegibilidad\n│  └─ Nulidad por exceso\n├─ Fases y documentos\n│  ├─ RC: retención\n│  ├─ A: autorización\n│  ├─ D: compromiso\n│  ├─ O: obligación/propuesta\n│  └─ AD y ADO\n├─ Tramitación\n│  ├─ UXXI, Docuconta y FACe\n│  ├─ Factura y conformidad\n│  ├─ Terceros e inventario\n│  └─ Oficinas, DEF, Investigación y RRHH\n├─ Procedimientos especiales\n│  ├─ Caja fija\n│  ├─ Anticipos a justificar\n│  ├─ Conferencias y tarjetas\n│  └─ Formalización y tasas\n└─ Pago y cierre\n   ├─ Tesorería y órdenes de pago\n   ├─ Transferencias, divisas, cheques y QR\n   ├─ Cierre y liquidación\n   └─ Cuenta anual, auditoría y archivo',
    [
      ['RC', 'Retención de crédito', 'Reserva saldo para una finalidad'],
      ['A', 'Autorización del gasto', 'Decisión de realizarlo'],
      ['D', 'Disposición o compromiso', 'Vinculación con tercero'],
      ['O', 'Obligación/propuesta de pago', 'Fase previa a tesorería'],
      ['AD/ADO', 'Acumulación de fases', 'No elimina controles'],
      ['Conformidad', 'Prestación recibida correctamente', 'No equivale a adjudicación'],
      ['Caja fija', 'Hasta 5.000 € sin IVA', 'Necesidades de escasa cuantía'],
      ['Anticipo', 'Máximo 12.000 €', 'Justificación general en un mes'],
      ['Factura electrónica', 'FACe y unidad tramitadora', 'Identificación de expediente y objeto'],
      ['Tercero', 'Formulario y datos bancarios verificados', 'Certificado en cambios de cuenta'],
      ['Orden de pago', 'Tres días por semana, regla general', 'Documentos validados y firmados'],
      ['Pago QR', 'Inferior a 1.000 €', 'Excepcional y autorizado por DEF'],
      ['Cierre', 'Normas de Gerencia y DEF en último trimestre', 'Distinguir de prórroga'],
      ['Liquidación', 'Derechos, obligaciones, resultado y remanente', 'Base de rendición'],
      ['Cuenta anual', 'Información presupuestaria y patrimonial', 'Contabilidad y auditoría externa']
    ],
    'Presupuesto UC3M 2026 y procedimientos oficiales de la Dirección Económico Financiera; se separan fases presupuestarias, tramitación administrativa, pago material, cierre, liquidación y cuenta anual.'
  );

  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v88 = {
    status: 'EN_PROGRESO',
    scope: 'Temas específicos 13 a 20 de UC3M',
    completedThemes: [13, 14, 15, 16, 17, 18, 19],
    pendingThemes: [20],
    autonomousThemes: 7,
    totalThemes: 8,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'Fuentes oficiales BOE y UC3M; el Presupuesto 2026 se estudia como documento anual y se separa de las reglas normativas estables.'
  };

  window.OPOWEB_UC3M_THEORY_V88 = {
    status: 'EN_PROGRESO',
    block: 4,
    completedThemes: [13, 14, 15, 16, 17, 18, 19],
    pendingThemes: [20],
    reviewedAt: REVIEW_DATE
  };
})();