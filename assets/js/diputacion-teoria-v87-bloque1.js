(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-15';
  const fuente = {
    ce: { label: 'Constitución Española', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    lgt: { label: 'Ley 58/2003, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186' },
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    rgr: { label: 'Reglamento General de Recaudación', reference: 'BOE-A-2005-14803', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803' }
  };

  const THEORY = {
    25: {
      sources: [fuente.ce, fuente.lgt, fuente.trlrhl],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El tema 25 reúne la parte general del Derecho tributario y su proyección sobre las entidades locales. La secuencia que debe dominarse es: reserva de ley y potestad tributaria; nacimiento de la obligación; identificación de obligados; cuantificación; formas de extinción; recursos de las haciendas locales; delegación y colaboración; gestión tributaria; y revisión. La norma básica es la Ley 58/2003, General Tributaria, complementada por el texto refundido de la Ley Reguladora de las Haciendas Locales. En test es esencial separar conceptos próximos: hecho imponible no equivale a devengo; contribuyente no equivale siempre a sujeto pasivo; base imponible no es base liquidable; cuota íntegra, líquida y diferencial son magnitudes distintas; y una exención no es una bonificación.`,
          `La Constitución somete el sistema tributario a legalidad, capacidad económica, igualdad, progresividad y no confiscatoriedad. El Estado establece tributos mediante ley y las comunidades autónomas y entidades locales pueden establecerlos y exigirlos conforme a la Constitución y las leyes. La entidad local no crea libremente figuras tributarias: aplica los tributos previstos por la ley y, cuando la norma lo exige, aprueba la correspondiente ordenanza fiscal. La Ley General Tributaria contiene principios y reglas comunes; el texto refundido de Haciendas Locales concreta recursos, tributos locales, delegación, beneficios y especialidades de gestión y revisión.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La obligación tributaria principal tiene por objeto el pago de la cuota tributaria. Nace cuando se realiza el hecho imponible, que es el presupuesto fijado por la ley para configurar cada tributo. El devengo es el momento en que se entiende realizado el hecho imponible y nace la obligación; la exigibilidad puede quedar situada en otro momento si la ley del tributo así lo dispone. La no sujeción significa que el supuesto queda fuera del hecho imponible. La exención presupone, en cambio, que se realiza el hecho imponible pero la ley dispensa del pago. Estas diferencias son muy preguntables.`,
          `Junto a la obligación principal pueden existir obligaciones de realizar pagos a cuenta, obligaciones entre particulares resultantes del tributo, obligaciones accesorias y obligaciones formales. Son accesorias, entre otras, las de satisfacer intereses de demora, recargos por declaración extemporánea y recargos del período ejecutivo. Las sanciones tributarias no tienen la consideración de obligaciones accesorias. Las obligaciones formales incluyen, según el caso, presentar declaraciones y autoliquidaciones, llevar libros y registros, expedir y conservar facturas, facilitar información, usar el número de identificación fiscal y atender requerimientos.`
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          `La Ley General Tributaria utiliza la categoría amplia de obligados tributarios. Incluye contribuyentes, sustitutos, retenedores, obligados a ingresar a cuenta, repercutidos, sucesores, beneficiarios de exenciones o devoluciones y responsables, además de otras figuras previstas legalmente. Sujeto pasivo es el obligado que, según la ley, debe cumplir la obligación principal y las obligaciones formales inherentes, sea como contribuyente o como sustituto. Contribuyente es quien realiza el hecho imponible. Sustituto es quien, por imposición legal y en lugar del contribuyente, debe cumplir la obligación principal. La responsabilidad solidaria o subsidiaria exige presupuesto legal y, normalmente, acto administrativo de derivación con alcance y procedimiento establecidos.`,
          `La cuantificación parte de la base imponible, magnitud dineraria o de otra naturaleza resultante de medir o valorar el hecho imponible. Puede determinarse mediante estimación directa, estimación objetiva cuando la ley lo prevea, o estimación indirecta en los supuestos legalmente tasados. La base liquidable resulta de practicar en la base imponible las reducciones previstas en la ley. El tipo de gravamen se aplica sobre la base liquidable para obtener la cuota íntegra, salvo cuantificación mediante cantidad fija. De la cuota íntegra se deducen bonificaciones y deducciones para obtener la cuota líquida; la cuota diferencial resulta después de minorar pagos a cuenta, retenciones, ingresos a cuenta y cuotas, conforme a la normativa de cada tributo.`,
          `La deuda tributaria se integra por la cuota o cantidad a ingresar y, cuando proceda, por intereses de demora, recargos por declaración extemporánea, recargos del período ejecutivo y recargos exigibles legalmente sobre bases o cuotas. Se extingue por pago, prescripción, compensación o condonación y por los demás medios previstos en las leyes. La prescripción opera, con carácter general, a los cuatro años para determinar la deuda mediante liquidación, exigir el pago, solicitar devoluciones y obtenerlas. Deben estudiarse el inicio del cómputo, sus causas de interrupción y la aplicación de oficio. La insolvencia provisional no equivale a condonación: el crédito puede declararse incobrable y rehabilitarse dentro del plazo de prescripción si aparece solvencia.`,
          `Los recursos de las haciendas locales comprenden ingresos patrimoniales y demás de Derecho privado, tributos propios, participaciones en tributos del Estado y comunidades autónomas, subvenciones, precios públicos, operaciones de crédito, multas y sanciones y otras prestaciones de Derecho público. Los tributos locales son tasas, contribuciones especiales e impuestos, además de los recargos legalmente autorizados. Las tasas se conectan con utilización privativa o aprovechamiento especial del dominio público y con determinados servicios o actividades administrativas. Las contribuciones especiales se fundamentan en un beneficio o aumento de valor por obras públicas o establecimiento o ampliación de servicios. Los impuestos se exigen sin contraprestación y su hecho imponible revela capacidad económica.`,
          `La tributación local debe respetar territorialidad y libre circulación, sin gravar bienes, actividades, rendimientos o gastos realizados fuera del territorio de la entidad ni obstaculizar la circulación de personas, bienes, servicios o capitales. Las entidades locales pueden delegar en otras entidades locales o en la comunidad autónoma facultades de gestión, liquidación, inspección y recaudación de sus tributos y restantes ingresos de Derecho público. La delegación requiere acuerdo, determinación de alcance y contenido y publicación oficial. También existe colaboración entre Administraciones mediante intercambio de información y asistencia, dentro de las garantías de reserva de datos tributarios.`,
          `Los beneficios fiscales en tributos locales solo pueden reconocerse cuando estén previstos en norma con rango de ley o deriven de tratados internacionales, sin perjuicio de los supuestos en que la propia ley permite a la ordenanza fiscal concretar o establecer bonificaciones dentro de límites. Cuando el Estado concede beneficios fiscales en tributos locales mediante ley puede proceder compensación a las entidades locales en los términos legalmente establecidos. No debe confundirse la potestad de aprobar una ordenanza con la capacidad de crear una exención sin habilitación legal.`,
          `La gestión tributaria comprende recepción y tramitación de declaraciones, autoliquidaciones, comunicaciones y solicitudes; comprobación y realización de devoluciones; reconocimiento de beneficios fiscales; control del cumplimiento de obligaciones formales; comprobación de valores; actuaciones de verificación de datos y comprobación limitada; práctica de liquidaciones; emisión de certificados; elaboración y mantenimiento de censos; e información y asistencia. Los procedimientos pueden iniciarse por declaración, autoliquidación, solicitud o de oficio. La verificación de datos corrige defectos formales, discrepancias o aplicaciones patentes; la comprobación limitada permite actuaciones más amplias, pero con límites respecto del examen de contabilidad mercantil y entrada en domicilios o locales fuera de los casos legalmente habilitados.`,
          `La revisión tributaria se articula mediante procedimientos especiales de revisión, recurso de reposición y reclamaciones económico-administrativas, además del control judicial. Entre los procedimientos especiales figuran revisión de actos nulos de pleno derecho, declaración de lesividad de actos anulables, revocación, rectificación de errores y devolución de ingresos indebidos. En el ámbito local, el texto refundido de Haciendas Locales regula con carácter general el recurso de reposición frente a actos de aplicación y efectividad de tributos y otros ingresos de Derecho público, sin olvidar las especialidades de municipios de gran población y los supuestos atribuidos a órganos económico-administrativos. El examen suele preguntar plazo de un mes, órgano que dictó el acto y efectos de la suspensión.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Mapa final: hecho imponible produce nacimiento; devengo fija el momento; contribuyente realiza el hecho imponible; sustituto cumple en su lugar por ley; base imponible mide; base liquidable aplica reducciones; tipo y cantidades fijas determinan cuota; bonificaciones y pagos a cuenta conducen a cuota líquida o diferencial; deuda se extingue por pago, prescripción, compensación o condonación; y los actos tributarios pueden revisarse por vías especiales, reposición, reclamación económico-administrativa cuando proceda y jurisdicción contenciosa.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Diferencia entre no sujeción y exención; contribuyente y sustituto; responsabilidad solidaria y subsidiaria; base imponible y liquidable; cuota íntegra, líquida y diferencial; plazo general de prescripción de cuatro años; clases de tributos locales; delegación de facultades; reserva de ley para beneficios fiscales; verificación de datos frente a comprobación limitada; y recurso de reposición local.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `¿Qué diferencia jurídica existe entre hecho imponible, devengo y exigibilidad? ¿Qué operaciones llevan desde la base imponible hasta la cuota diferencial? ¿Qué vías permiten revisar un acto tributario local y qué plazo general tiene la reposición?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Resuelve el tema mediante cadenas conceptuales. Si preguntan por nacimiento, busca hecho imponible; si preguntan por momento, devengo; si preguntan por medición, base; si preguntan por extinción, pago, prescripción, compensación o condonación. Ante una bonificación local, exige siempre habilitación legal. En revisión, identifica primero si se trata de error material, ingreso indebido, nulidad, reposición o reclamación económico-administrativa.`
        ]}
      ],
      tree: `Obligación tributaria y tributos locales\n├─ Constitución: legalidad, capacidad, igualdad, progresividad y no confiscatoriedad\n├─ Nacimiento\n│  ├─ Hecho imponible\n│  ├─ Devengo y exigibilidad\n│  └─ No sujeción y exención\n├─ Sujetos\n│  ├─ Obligados tributarios\n│  ├─ Contribuyente y sustituto\n│  └─ Responsables y sucesores\n├─ Cuantificación\n│  ├─ Base imponible y liquidable\n│  ├─ Tipo de gravamen\n│  └─ Cuotas íntegra, líquida y diferencial\n├─ Extinción: pago, prescripción, compensación y condonación\n├─ Hacienda local\n│  ├─ Impuestos, tasas y contribuciones especiales\n│  ├─ Delegación y colaboración\n│  └─ Beneficios fiscales y compensación\n└─ Gestión y revisión tributaria`,
      reviewTable: [
        ['Concepto', 'Regla esencial', 'Referencia'],
        ['Hecho imponible', 'Presupuesto legal cuya realización origina la obligación principal', 'Arts. 19 y 20 LGT'],
        ['Devengo', 'Momento en que se entiende realizado el hecho imponible', 'Art. 21 LGT'],
        ['Sujeto pasivo', 'Contribuyente o sustituto obligado por ley', 'Art. 36 LGT'],
        ['Base liquidable', 'Base imponible menos reducciones legales', 'Art. 54 LGT'],
        ['Extinción', 'Pago, prescripción, compensación, condonación y demás medios legales', 'Art. 59 LGT'],
        ['Tributos locales', 'Tasas, contribuciones especiales e impuestos', 'TRLRHL'],
        ['Delegación', 'Gestión, liquidación, inspección y recaudación con acuerdo publicado', 'Art. 7 TRLRHL'],
        ['Revisión local', 'Reposición y demás vías tributarias según el acto y la entidad', 'Art. 14 TRLRHL']
      ]
    },
    26: {
      sources: [fuente.lgt, fuente.rgr, fuente.trlrhl],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El tema 26 se centra en la fase de cobro. Debe estudiarse como un itinerario: período voluntario, posible aplazamiento o fraccionamiento, compensación o devolución, entrada en período ejecutivo, recargos, providencia de apremio, embargo, realización de bienes y terminación. La Ley General Tributaria fija las reglas esenciales; el Reglamento General de Recaudación desarrolla órganos, actuaciones y procedimientos; y el texto refundido de Haciendas Locales adapta la recaudación y la revisión a las entidades locales. En una Diputación y en el OAPGT el conocimiento operativo de plazos, notificaciones y efectos del pago resulta especialmente relevante.`,
          `La recaudación tributaria es el ejercicio de funciones administrativas conducentes al cobro de las deudas. Se realiza en período voluntario mediante pago o cumplimiento dentro de los plazos legales y en período ejecutivo mediante pago espontáneo posterior o procedimiento administrativo de apremio. La existencia del período ejecutivo no significa que toda deuda se embargue inmediatamente: primero puede producirse pago con recargo ejecutivo; cuando se notifica la providencia de apremio se abre el plazo específico de ingreso y, si no se paga, continúan las actuaciones ejecutivas.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Para liquidaciones practicadas por la Administración, si la notificación se recibe entre los días 1 y 15, el plazo voluntario termina el día 20 del mes siguiente o inmediato hábil posterior; si se recibe entre los días 16 y último, termina el día 5 del segundo mes posterior o inmediato hábil. Las deudas de notificación colectiva y periódica se pagan en el plazo establecido por su normativa, que con carácter general no puede ser inferior a dos meses. Las deudas resultantes de autoliquidación se ingresan en los plazos de la normativa de cada tributo. Las deudas aduaneras siguen su regulación específica.`,
          `El período ejecutivo comienza, para deudas liquidadas por la Administración, al día siguiente del vencimiento del plazo voluntario sin ingreso. Para una deuda a ingresar mediante autoliquidación presentada sin pago, comienza al día siguiente del fin del plazo de ingreso o, si la presentación fue posterior, al día siguiente de presentarla. La presentación de ciertas solicitudes de aplazamiento, fraccionamiento, compensación o recursos en período voluntario puede impedir el inicio del período ejecutivo mientras se tramitan, en los términos legales. Una suspensión concedida también impide o paraliza actuaciones según su alcance.`
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          `Los recargos del período ejecutivo son incompatibles entre sí. El recargo ejecutivo es del cinco por ciento cuando se paga toda la deuda antes de notificarse la providencia de apremio. El recargo de apremio reducido es del diez por ciento cuando se satisface la deuda y el propio recargo dentro del plazo otorgado por la providencia. El recargo de apremio ordinario es del veinte por ciento cuando no concurren los requisitos anteriores; es compatible con intereses de demora. Con los recargos del cinco y del diez por ciento no se exigen los intereses de demora devengados desde el inicio del período ejecutivo.`,
          `El pago puede realizarlo cualquier persona, tenga o no interés en el cumplimiento, pero quien paga por tercero no queda legitimado por ese solo hecho para ejercer derechos del obligado. Debe efectuarse por medios admitidos y en lugar, tiempo y forma establecidos. La imputación de pagos permite al obligado, cuando existan varias deudas autónomas, indicar a cuál se aplica; en ejecución forzosa existen reglas específicas. La consignación puede producir efectos liberatorios o suspensivos en los supuestos legales. El justificante acredita ingreso, fecha, importe, concepto y demás datos necesarios.`,
          `Las deudas tributarias aplazables pueden aplazarse o fraccionarse a solicitud del obligado cuando su situación económico-financiera le impida transitoriamente pagar en plazo. No todas lo son: la ley declara inaplazables, entre otras, determinadas deudas de retenedores u obligados a ingresar a cuenta, ciertos pagos fraccionados del Impuesto sobre Sociedades, deudas derivadas de ejecución de resoluciones firmes suspendidas y otras expresamente enumeradas. La solicitud debe identificar deuda, causas, plazos propuestos y garantía cuando proceda. Su presentación en voluntaria evita el ejecutivo durante la tramitación; presentada en ejecutivo no detiene por sí sola el procedimiento, aunque pueden suspenderse actuaciones de enajenación hasta la resolución.`,
          `La Administración exige normalmente garantía para aplazar o fraccionar, aunque existen dispensas totales o parciales por cuantía, imposibilidad o grave perjuicio y supuestos en que la norma no la exige. La garantía preferente es aval solidario de entidad de crédito o sociedad de garantía recíproca o certificado de seguro de caución; si no es posible o compromete gravemente la viabilidad, pueden admitirse hipoteca, prenda, fianza u otras. El incumplimiento de un plazo produce las consecuencias previstas según se trate de deuda en voluntaria o ejecutiva y puede determinar inicio o continuación del apremio por cantidades pendientes.`,
          `La compensación extingue deudas hasta el importe concurrente con créditos reconocidos a favor del obligado frente a la Hacienda pública. Puede acordarse de oficio o a instancia. Durante el período voluntario, la solicitud de compensación impide el inicio del ejecutivo por la deuda concurrente mientras se tramita, aunque puede devengar intereses si finalmente se deniega. En ejecutivo la Administración puede compensar de oficio. En el ámbito local se aplica este régimen con las especialidades organizativas y competenciales de la entidad u organismo recaudador.`,
          `La devolución de ingresos indebidos procede, entre otros supuestos, cuando se ha producido duplicidad, se ha pagado una cantidad superior, se ingresó una deuda prescrita o concurre otro caso legal. Incluye el ingreso indebidamente efectuado y el interés de demora correspondiente, sin necesidad de solicitud específica de intereses. No toda devolución tributaria es ingreso indebido: también existen devoluciones derivadas de la normativa de cada tributo, originadas por pagos a cuenta superiores a la cuota. La distinción determina procedimiento y fundamento.`,
          `El procedimiento de apremio es exclusivamente administrativo y se inicia mediante providencia de apremio, título suficiente para proceder contra el patrimonio del deudor y con la misma fuerza ejecutiva que una sentencia para actuar sobre bienes y derechos. La providencia identifica deuda, recargo y plazo de ingreso. Sus motivos de oposición son tasados: extinción total o prescripción, solicitud de aplazamiento, fraccionamiento o compensación en voluntaria y otras causas suspensivas; falta de notificación de liquidación; anulación; o error u omisión que impida identificar deuda o deudor. No cabe reabrir por esta vía cualquier discusión sobre el fondo de la liquidación.`,
          `Transcurrido el plazo de la providencia sin ingreso, se embargan bienes y derechos respetando proporcionalidad y las reglas legales. Deben evitarse actuaciones de coste superior al valor previsible y atenderse, con carácter general, a facilidad de realización y menor onerosidad. Dinero efectivo o en cuentas, créditos y valores realizables a corto plazo, sueldos y pensiones dentro de límites, inmuebles, intereses y rentas, establecimientos, metales preciosos, bienes muebles y créditos a largo plazo forman parte del orden legal, que puede alterarse por acuerdo cuando no perjudique a terceros. Son inembargables los bienes declarados como tales por las leyes.`,
          `La realización de bienes embargados puede efectuarse mediante subasta, concurso o adjudicación directa en los supuestos reglamentarios. Antes de enajenar deben cumplirse valoración, formación de lotes, anuncios y garantías procedimentales. La adjudicación a la Hacienda pública puede operar en los casos permitidos. El procedimiento termina por pago, acuerdo de incobrable total o parcial, extinción por otra causa o acuerdo de haber quedado extinguida la deuda; la declaración de fallido es provisional y permite reanudar si aparece solvencia dentro del plazo de prescripción.`,
          `Los actos de recaudación pueden revisarse mediante los procedimientos tributarios de revisión. Frente a actos locales de aplicación de tributos e ingresos públicos rige con carácter general el recurso de reposición del artículo 14 del texto refundido de Haciendas Locales, con plazo de un mes desde la notificación o desde la finalización de la exposición pública de padrones, según el caso, y sin suspensión automática salvo que se solicite y se aporte garantía o concurra causa legal. Las especialidades de municipios de gran población y de órganos económico-administrativos deben respetarse. Agotada la vía administrativa procede, en su caso, recurso contencioso-administrativo.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Mapa final: en voluntaria se paga dentro de plazo; después comienza el ejecutivo; antes de providencia puede aplicarse recargo del cinco por ciento; con providencia y pago tempestivo, diez por ciento; fuera de ese plazo, veinte por ciento más intereses. Aplazamiento y fraccionamiento responden a falta transitoria de liquidez; compensación enfrenta deuda y crédito; devolución restituye ingresos indebidos o cantidades resultantes de la normativa; apremio habilita ejecución sobre patrimonio; y la revisión controla legalidad sin convertir cada trámite ejecutivo en una nueva impugnación completa de la liquidación.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Plazos del artículo 62; momento de inicio del período ejecutivo; recargos del cinco, diez y veinte por ciento; efectos de solicitar aplazamiento o compensación en voluntaria; deudas inaplazables; garantías; diferencia entre devolución normativa e ingreso indebido; motivos tasados contra la providencia; orden y límites del embargo; terminación del apremio; y suspensión del recurso de reposición.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `¿Cuándo termina el período voluntario según la fecha de notificación de una liquidación? ¿Qué requisitos diferencian los recargos ejecutivo, reducido y ordinario? ¿Cuáles son los motivos tasados de oposición a la providencia de apremio?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Dibuja una línea temporal. Sitúa notificación, vencimiento voluntario, inicio ejecutivo, pago antes de providencia, notificación de providencia y embargo. Casi todas las preguntas se resuelven ubicando el hecho en esa secuencia. Cuando aparezca un recurso, recuerda que su interposición no suspende automáticamente la recaudación salvo previsión y garantía o causa legal.`
        ]}
      ],
      tree: `Recaudación tributaria local\n├─ Período voluntario\n│  ├─ Liquidaciones notificadas\n│  ├─ Deudas periódicas\n│  └─ Autoliquidaciones\n├─ Período ejecutivo\n│  ├─ Inicio\n│  ├─ Recargo ejecutivo 5 %\n│  ├─ Apremio reducido 10 %\n│  └─ Apremio ordinario 20 % + intereses\n├─ Facilidades y extinción\n│  ├─ Aplazamiento y fraccionamiento\n│  ├─ Compensación\n│  └─ Devolución de ingresos\n├─ Procedimiento de apremio\n│  ├─ Providencia y oposición tasada\n│  ├─ Embargo\n│  ├─ Enajenación\n│  └─ Terminación y fallido\n└─ Revisión administrativa y judicial`,
      reviewTable: [
        ['Fase', 'Regla esencial', 'Referencia'],
        ['Notificación 1-15', 'Pago hasta día 20 del mes siguiente', 'Art. 62.2 LGT'],
        ['Notificación 16-fin', 'Pago hasta día 5 del segundo mes siguiente', 'Art. 62.2 LGT'],
        ['Recargo ejecutivo', '5 % antes de la providencia', 'Art. 28 LGT'],
        ['Apremio reducido', '10 % con pago en plazo de la providencia', 'Art. 28 LGT'],
        ['Apremio ordinario', '20 % más intereses', 'Art. 28 LGT'],
        ['Aplazamiento', 'Falta transitoria de liquidez y garantía cuando proceda', 'Art. 65 LGT'],
        ['Providencia', 'Título ejecutivo con oposición tasada', 'Arts. 167 y 170 LGT'],
        ['Revisión local', 'Reposición general de un mes, con especialidades', 'Art. 14 TRLRHL']
      ]
    }
  };

  function words(theme) {
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
      words: words(theory),
      sourcePolicy: 'Normativa oficial consolidada y publicación oficial de referencia'
    };
  }

  const scope = Array.from({ length: 16 }, (_, index) => index + 25);
  const completed = [25, 26];
  const pending = scope.filter(number => !completed.includes(number));
  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v87 = {
    status: 'EN_PROGRESO',
    scope: 'Temas 25 a 40 de Diputación de Toledo',
    completedThemes: completed,
    pendingThemes: pending,
    autonomousThemes: completed.length,
    totalThemes: scope.length,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'OpoWeb como fuente teórica principal; fuentes oficiales para vigencia y trazabilidad.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    status: 'EN_PROGRESO',
    block: 1,
    completedThemes: completed,
    pendingThemes: pending,
    minimumWords: Math.min(...completed.map(number => ope.themes.find(theme => Number(theme.number) === number)?.theoryStatus?.words || 0)),
    reviewedAt: REVIEW_DATE
  };
})();
