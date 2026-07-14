(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const SOURCES = {
    trlrhl: { label: 'Texto refundido de la Ley Reguladora de las Haciendas Locales', reference: 'BOE-A-2004-4214', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214' },
    lgt: { label: 'Ley 58/2003, General Tributaria', reference: 'BOE-A-2003-23186', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186' },
    rgr: { label: 'Real Decreto 939/2005, Reglamento General de Recaudación', reference: 'BOE-A-2005-14803', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14803' },
    catastro: { label: 'Texto refundido de la Ley del Catastro Inmobiliario', reference: 'BOE-A-2004-4163', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4163' },
    lpac: { label: 'Ley 39/2015, del Procedimiento Administrativo Común', reference: 'BOE-A-2015-10565', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    lrjsp: { label: 'Ley 40/2015, de Régimen Jurídico del Sector Público', reference: 'BOE-A-2015-10566', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' },
    confianza: { label: 'Ley 6/2020, reguladora de determinados aspectos de los servicios electrónicos de confianza', reference: 'BOE-A-2020-14046', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046' },
    eidas: { label: 'Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza', reference: 'EUR-Lex-32014R0910', url: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj' },
    gobierno: { label: 'Ley 50/1997, del Gobierno', reference: 'BOE-A-1997-25336', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-25336' },
    windows: { label: 'Ayuda y aprendizaje de Windows', reference: 'MICROSOFT-WINDOWS-SUPPORT', url: 'https://support.microsoft.com/windows' },
    printscan: { label: 'Soporte oficial de Microsoft para impresoras y escáneres en Windows', reference: 'MICROSOFT-WINDOWS-PRINT-SCAN', url: 'https://support.microsoft.com/windows/fix-printer-connection-and-printing-problems-in-windows-fb830bff-7702-6349-33cd-9443fe987f73' }
  };

  const THEMES = {
    11: {
      sources: [SOURCES.trlrhl, SOURCES.lgt, SOURCES.rgr],
      articleCoverage: [
        ['Arts. 60-65 LGT', 'Formas de pago, plazos, consignación y aplazamiento.'],
        ['Arts. 68-73 LGT', 'Prescripción, compensación y efectos extintivos.'],
        ['Arts. 160-177 LGT', 'Recaudación, periodo ejecutivo y procedimiento de apremio.'],
        ['Arts. 25-31 LGT', 'Intereses y recargos del periodo ejecutivo.'],
        ['RD 939/2005', 'Desarrollo del pago, garantías, aplazamientos, embargos, enajenación y terminación.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La recaudación tributaria comprende las actuaciones destinadas al cobro de deudas. Puede desarrollarse en periodo voluntario o ejecutivo. En voluntaria el obligado paga dentro del plazo correspondiente; si no paga, se inicia el periodo ejecutivo y pueden exigirse recargos, intereses y costas mediante procedimiento de apremio.`,
          `El tema exige dominar plazos de pago, efectos de solicitudes de aplazamiento o fraccionamiento, compensación, devolución de ingresos indebidos, providencia de apremio, motivos tasados de oposición, orden de embargo y formas de terminación.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La Ley General Tributaria contiene reglas sustantivas y procedimentales; el Reglamento General de Recaudación desarrolla actuaciones. El TRLRHL determina especialidades locales y permite gestión directa o delegada.`,
          `Los calendarios fiscales, ordenanzas y acuerdos de delegación de La Puebla son datos dinámicos. Deben consultarse cuando el supuesto pregunte por fechas o órgano gestor concreto.`,
          `La deuda tributaria y la sanción siguen regímenes distintos. La sanción puede recaudarse, pero no forma parte de la deuda tributaria del artículo 58 LGT.`
        ]},
        { heading: '1. Concepto y órganos de recaudación', paragraphs: [
          `La recaudación es ejercicio de funciones administrativas dirigidas al cobro. Se realiza en voluntaria mediante pago o cumplimiento y en ejecutiva mediante pago espontáneo o apremio.`,
          `Las entidades locales pueden ejercerla con medios propios o delegarla en Diputación u otra entidad pública conforme al TRLRHL. La delegación debe publicarse y define alcance.`,
          `El auxiliar debe identificar órgano competente, tipo de ingreso, estado de deuda y expediente. No toda deuda municipal es tributaria, aunque muchos ingresos de derecho público se recaudan por apremio.`
        ]},
        { heading: '2. Formas y medios de pago', paragraphs: [
          `El pago puede realizarse en efectivo mediante dinero, cheque, tarjeta, transferencia, domiciliación u otros autorizados, y en especie cuando ley lo permita.`,
          `Se efectúa ante órgano competente o entidad colaboradora. El justificante debe identificar obligado, deuda, importe, fecha y medio. Pagar a persona no autorizada no libera salvo ingreso efectivo.`,
          `Puede pagar un tercero, pero no adquiere por ello los derechos del obligado frente a Administración. El pago parcial no extingue la parte restante.`
        ]},
        { heading: '3. Plazos en periodo voluntario', paragraphs: [
          `Las deudas resultantes de liquidaciones notificadas entre días 1 y 15 se pagan, con carácter general, hasta día 20 del mes siguiente; las notificadas entre 16 y último, hasta día 5 del segundo mes posterior, o inmediato hábil.`,
          `Las deudas de notificación colectiva y periódica se pagan en el plazo fijado por normativa, que no puede ser inferior al legal. El calendario fiscal concreta fechas.`,
          `Las autoliquidaciones se pagan en plazos de cada tributo. Una providencia de apremio tiene plazos distintos: notificada 1-15, hasta 20 del mismo mes; 16-fin, hasta 5 del siguiente.`
        ]},
        { heading: '4. Inicio del periodo ejecutivo', paragraphs: [
          `En deudas liquidadas, comienza al día siguiente del vencimiento voluntario sin pago. En autoliquidaciones presentadas sin ingreso, comienza al día siguiente del plazo reglamentario o al día siguiente de presentación si esta es posterior.`,
          `No se inicia mientras exista solicitud de aplazamiento, fraccionamiento o compensación presentada en voluntaria pendiente de resolución, en términos legales. Tampoco durante suspensión acordada.`,
          `El inicio permite recargos ejecutivos y apremio, pero la providencia es el acto que inicia formalmente el procedimiento de apremio.`
        ]},
        { heading: '5. Recargos del periodo ejecutivo', paragraphs: [
          `El recargo ejecutivo es cinco por ciento si se paga toda deuda antes de notificación de providencia.`,
          `El recargo de apremio reducido es diez por ciento si se paga deuda y recargo dentro del plazo de la providencia.`,
          `El recargo ordinario es veinte por ciento cuando no concurren anteriores y es compatible con intereses desde inicio ejecutivo y costas. Los recargos son incompatibles entre sí.`
        ]},
        { heading: '6. Aplazamiento y fraccionamiento', paragraphs: [
          `Pueden solicitarse cuando situación económico-financiera impide temporalmente pagar. El aplazamiento difiere un vencimiento; el fraccionamiento divide en varios.`,
          `La solicitud identifica deuda, causas, plazos propuestos, garantía y cuenta. Algunas deudas son inaplazables. La Administración puede exigir garantía, dispensarla en límites o adoptar cautelares.`,
          `Devengan interés de demora, salvo especialidades con garantía y tipos. El incumplimiento produce efectos distintos según estuviera en voluntaria o ejecutiva y puede iniciar o continuar apremio.`
        ]},
        { heading: '7. Garantías', paragraphs: [
          `La garantía ordinaria puede ser aval solidario o certificado de seguro de caución. Si no es posible, pueden admitirse hipoteca, prenda u otras suficientes.`,
          `Debe cubrir principal, intereses y recargos en cuantía reglamentaria. Puede dispensarse total o parcialmente por cuantía, perjuicio grave o carencia de bienes con perspectivas.`,
          `La Administración valora suficiencia y formalización. La mera solicitud no equivale a concesión ni elimina deber de atender requerimientos.`
        ]},
        { heading: '8. Compensación', paragraphs: [
          `Extingue deuda cuando obligado es acreedor de crédito reconocido frente a Administración. Puede acordarse de oficio o a instancia.`,
          `En voluntaria, la solicitud impide inicio ejecutivo sobre importe concurrente mientras se tramita, sin perjuicio de intereses. En ejecutiva puede compensarse de oficio.`,
          `La extinción se produce hasta importe coincidente. Si crédito es inferior, subsiste resto; si superior, se abona diferencia.`
        ]},
        { heading: '9. Devolución de ingresos', paragraphs: [
          `Procede devolver ingresos indebidos por duplicidad, exceso, pago de deuda prescrita, anulación u otros supuestos. También hay devoluciones derivadas de normativa de cada tributo.`,
          `El derecho incluye importe, recargos y costas indebidamente ingresados e interés de demora sin necesidad de solicitud desde fecha de ingreso.`,
          `El procedimiento puede iniciarse de oficio o a instancia. Debe distinguirse devolución de ingreso indebido de rectificación de autoliquidación y devolución propia del tributo.`
        ]},
        { heading: '10. Providencia de apremio', paragraphs: [
          `Es título suficiente para iniciar apremio y tiene fuerza ejecutiva equivalente a sentencia para proceder contra bienes. Identifica deuda, importe, recargo, plazo y advertencia de embargo.`,
          `La dicta órgano competente una vez iniciado ejecutivo. Su notificación abre plazo de pago reducido.`,
          `Solo cabe oposición por motivos tasados: extinción o prescripción, solicitud de aplazamiento/fraccionamiento/compensación en voluntaria u otras suspensiones, falta de notificación de liquidación, anulación y error u omisión que impida identificar deudor o deuda.`
        ]},
        { heading: '11. Suspensión del apremio', paragraphs: [
          `Se suspende automáticamente en supuestos y con garantías previstos en revisión tributaria, y sin garantía si se demuestra error material, pago, condonación, compensación, aplazamiento o suspensión.`,
          `La tercería de dominio suspende respecto de bienes controvertidos; la de mejor derecho no paraliza enajenación pero afecta destino.`,
          `La solicitud de recurso por sí sola no suspende. Debe existir acuerdo, garantía o supuesto legal.`
        ]},
        { heading: '12. Embargo de bienes y derechos', paragraphs: [
          `Si no se paga, se embargan bienes suficientes para principal, intereses, recargos y costas, respetando proporcionalidad.`,
          `La ley establece orden orientativo: dinero y cuentas, créditos y valores realizables a corto plazo, sueldos, inmuebles, intereses y rentas, establecimientos, metales, bienes muebles y créditos a largo plazo, pudiendo alterarse por acuerdo o facilidad.`,
          `No se embargan bienes declarados inembargables. Los salarios respetan límites de la Ley de Enjuiciamiento Civil. Cada diligencia se notifica a obligados y terceros afectados.`
        ]},
        { heading: '13. Diligencia de embargo', paragraphs: [
          `Documenta traba de bienes concretos. Puede impugnarse solo por extinción o prescripción, falta de notificación de providencia, incumplimiento de normas de embargo o suspensión.`,
          `No permite reabrir cuestiones de liquidación ya firmes. Los terceros pueden formular tercerías.`,
          `Las entidades colaboradoras deben cumplir órdenes sobre cuentas, informando saldos y reteniendo hasta límite.`
        ]},
        { heading: '14. Enajenación', paragraphs: [
          `Los bienes se valoran y enajenan normalmente por subasta, con anuncio, depósitos y reglas reglamentarias. Puede utilizarse concurso o adjudicación directa en supuestos.`,
          `Antes de adjudicación puede liberarse pagando deuda y costas. El sobrante se entrega al obligado o se retiene por otras deudas.`,
          `La Administración puede adjudicarse bienes en condiciones legales. La enajenación debe asegurar publicidad, concurrencia y mejor resultado razonable.`
        ]},
        { heading: '15. Terminación del apremio', paragraphs: [
          `Termina por pago, acuerdo de incobrable total o parcial o extinción por otra causa. También por crédito incobrable tras investigar patrimonio.`,
          `La declaración de fallido no extingue definitivamente si no prescribió; puede reanudarse si aparece solvencia.`,
          `Las costas causadas son a cargo del apremiado. Deben justificarse e incluir solo conceptos reglamentarios.`
        ]},
        { heading: '16. Prescripción y concurrencia', paragraphs: [
          `El derecho a exigir pago prescribe a cuatro años desde fin del plazo voluntario, con interrupciones por actuaciones recaudatorias conocidas, recursos y actos del obligado.`,
          `La prescripción se aplica de oficio y extingue deuda. Cada obligado y obligación pueden tener cómputo propio.`,
          `En concurso de acreedores rigen reglas concursales y coordinación. La Administración conserva privilegios en términos legales, pero debe comunicar créditos.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Voluntaria: pago sin recargo ejecutivo. Ejecutiva: comienza tras vencimiento. Apremio: providencia notificada.`,
          `Recargos: 5 %, 10 % y 20 %, incompatibles.`,
          `Aplazamiento difiere; fraccionamiento divide; compensación cruza deuda y crédito.`,
          `Embargo proporcional y oposición tasada.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Periodo ejecutivo no comienza siempre con providencia: puede comenzar antes.`,
          `Solicitud en voluntaria puede impedir inicio; presentada en ejecutiva no borra recargos.`,
          `La oposición a providencia y diligencia tiene motivos diferentes y cerrados.`,
          `Fallido no es condonación ni prescripción automática.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Cuándo comienza ejecutiva y qué recargo corresponde según momento de pago?`,
          `2. ¿Qué diferencias y efectos tienen aplazamiento, fraccionamiento y compensación?`,
          `3. ¿Qué motivos permiten oponerse a providencia y diligencia de embargo?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Dibuja línea temporal: liquidación o autoliquidación, voluntaria, ejecutivo, providencia, plazo, embargo, enajenación y terminación.`,
          `En supuesto calcula fechas primero y después recargo. Comprueba si existía solicitud o suspensión antes del vencimiento.`
        ]}
      ],
      tree: `RECAUDACIÓN
├─ Periodo voluntario
│  ├─ Plazos y medios de pago
│  ├─ Aplazamiento / fraccionamiento
│  └─ Compensación y devolución
├─ Periodo ejecutivo
│  ├─ Inicio
│  └─ Recargos 5 / 10 / 20
└─ Apremio
   ├─ Providencia
   ├─ Embargo
   ├─ Enajenación
   └─ Pago, fallido o extinción`,
      reviewTable: [
        ['Materia', 'Regla', 'Referencia'],
        ['Ejecutiva', 'Día siguiente al vencimiento', 'Art. 161 LGT'],
        ['Recargo ejecutivo', '5 % antes de providencia', 'Art. 28'],
        ['Recargo reducido', '10 % dentro de plazo', 'Art. 28'],
        ['Recargo ordinario', '20 % + intereses', 'Art. 28'],
        ['Providencia', 'Título ejecutivo', 'Art. 167'],
        ['Embargo', 'Proporcional y suficiente', 'Arts. 169-171'],
        ['Prescripción', 'Cuatro años', 'Art. 66'],
        ['Devolución indebida', 'Importe e interés', 'Art. 32']
      ]
    },
    12: {
      sources: [SOURCES.trlrhl, SOURCES.lgt, SOURCES.catastro],
      articleCoverage: [
        ['Arts. 2, 15-27 TRLRHL', 'Recursos tributarios, ordenanzas, tasas y contribuciones especiales.'],
        ['Arts. 59-77 TRLRHL', 'IBI: naturaleza, hecho, sujetos, base, cuota y gestión.'],
        ['Arts. 78-91 TRLRHL', 'IAE: hecho, sujetos, exenciones, cuota y gestión.'],
        ['Arts. 92-99 TRLRHL', 'IVTM: hecho, sujetos, exenciones, cuota y gestión.'],
        ['Arts. 104-110 TRLRHL', 'IIVTNU: hecho, no sujeción, sujetos, base, cuota y gestión.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Los tributos locales son impuestos, tasas y contribuciones especiales. El programa se centra en normas generales y cuatro impuestos: IBI, IAE, IVTM e IIVTNU, especialmente naturaleza, hecho imponible y sujeto pasivo.`,
          `Para responder bien hay que identificar qué se grava, cuándo nace, quién paga y qué derecho o actividad determina el impuesto. Los cuatro impuestos no gravan lo mismo ni utilizan el mismo padrón.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El TRLRHL regula elementos esenciales y ordenanzas concretan dentro de límites. IBI, IAE e IVTM son obligatorios; IIVTNU es potestativo.`,
          `Los tipos, coeficientes, bonificaciones y calendarios locales son variables. No deben memorizarse como permanentes salvo publicación oficial vigente de La Puebla.`,
          `El IBI se conecta con Catastro; IAE con matrícula; IVTM con registro de vehículos; IIVTNU con transmisiones y valor catastral del suelo.`
        ]},
        { heading: '1. Clases de tributos locales', paragraphs: [
          `Los impuestos se exigen sin contraprestación por hechos que manifiestan capacidad económica. Las tasas se vinculan a uso privativo del dominio público o servicios y actividades en condiciones legales.`,
          `Las contribuciones especiales se exigen por beneficio o aumento de valor derivado de obras públicas o establecimiento/ampliación de servicios.`,
          `Los precios públicos no son tributos y se aplican a servicios voluntarios prestados también por sector privado en condiciones.`
        ]},
        { heading: '2. Impuestos obligatorios y potestativos', paragraphs: [
          `Los municipios exigen obligatoriamente IBI, IAE e IVTM. Pueden establecer ICIO e IIVTNU mediante ordenanza.`,
          `La obligatoriedad no elimina ordenanza para elementos y gestión. La potestatividad exige acuerdo de imposición y ordenación.`,
          `Las Diputaciones no sustituyen al municipio como sujeto activo salvo delegación de gestión o recaudación.`
        ]},
        { heading: '3. IBI: naturaleza', paragraphs: [
          `El IBI es tributo directo, real, objetivo y periódico que grava valor de inmuebles en términos legales. Se devenga el primer día del periodo impositivo, que coincide con año natural.`,
          `La gestión catastral corresponde al Estado a través de Catastro; la gestión tributaria corresponde al Ayuntamiento o entidad delegada.`,
          `El valor catastral constituye base imponible, con base liquidable tras reducciones. No debe confundirse con precio de mercado o valor de referencia.`
        ]},
        { heading: '4. IBI: hecho imponible y orden de derechos', paragraphs: [
          `El hecho imponible es titularidad de concesión administrativa sobre inmuebles o servicios afectos, derecho real de superficie, usufructo o propiedad.`,
          `La realización de uno de los derechos por orden excluye los posteriores. Si existe concesión, no se grava simultáneamente propiedad por el mismo inmueble en la forma excluida.`,
          `Comprende inmuebles urbanos, rústicos y de características especiales según Catastro.`
        ]},
        { heading: '5. IBI: no sujeción y exenciones', paragraphs: [
          `No están sujetos ciertos bienes de dominio público de uso público o servicio municipal y carreteras, caminos y demás vías terrestres de aprovechamiento público gratuito, en términos.`,
          `Exenciones obligatorias incluyen bienes del Estado, comunidades y entidades locales directamente afectos a seguridad o servicios esenciales, Iglesia y confesiones según acuerdos, Cruz Roja, diplomáticos, montes y centros docentes concertados en límites.`,
          `Puede haber exenciones rogadas o potestativas y bonificaciones. Debe comprobarse requisito, solicitud y ordenanza.`
        ]},
        { heading: '6. IBI: sujeto pasivo', paragraphs: [
          `Son sujetos, como contribuyentes, personas físicas, jurídicas y entidades del artículo 35.4 LGT que ostenten derecho constitutivo del hecho imponible.`,
          `En concesiones puede repercutirse cuota en términos. El cambio de titularidad afecta al siguiente devengo, aunque el inmueble queda afecto al pago de cuotas pendientes con procedimiento.`,
          `El padrón se forma con información catastral. Un error de titularidad puede exigir recurso tributario y alteración catastral coordinada.`
        ]},
        { heading: '7. IAE: naturaleza y hecho imponible', paragraphs: [
          `El IAE es tributo directo y real cuyo hecho es mero ejercicio en territorio nacional de actividades empresariales, profesionales o artísticas, se ejerzan o no en local y estén o no especificadas.`,
          `No exige beneficio. La actividad se considera económica cuando ordena por cuenta propia medios o recursos para producir o distribuir bienes o servicios.`,
          `Actividades agrícolas, ganaderas dependientes, forestales y pesqueras pueden estar fuera según ley, sin perjuicio de explotaciones independientes.`
        ]},
        { heading: '8. IAE: sujetos y exenciones', paragraphs: [
          `Sujeto pasivo es quien realiza actividad. Existen exenciones muy relevantes: Estado y entidades públicas; personas físicas; entidades durante dos primeros periodos de actividad; y sujetos con cifra de negocios inferior a umbral legal, entre otras.`,
          `La exención de personas físicas implica que muchos autónomos no pagan cuota, pero pueden tener obligaciones censales.`,
          `El importe puede ser municipal, provincial o nacional según cuota elegida. La matrícula recoge sujetos no exentos y elementos.`
        ]},
        { heading: '9. IAE: devengo y gestión', paragraphs: [
          `Periodo coincide año natural y devengo es primer día. En alta, cuota se prorratea por trimestres naturales según inicio; en baja por cese puede prorratearse.`,
          `La gestión censal se atribuye a Administración tributaria estatal, con delegaciones posibles; la gestión tributaria y recaudación corresponden al Ayuntamiento.`,
          `La clasificación se realiza por tarifas e instrucciones. El epígrafe debe corresponder a actividad real.`
        ]},
        { heading: '10. IVTM: naturaleza y hecho imponible', paragraphs: [
          `El IVTM es impuesto directo que grava titularidad de vehículos de tracción mecánica aptos para circular por vías públicas, cualquiera que sea clase y categoría.`,
          `Se considera apto si matriculado en registros y no de baja. Los permisos temporales y matrícula turística se incluyen.`,
          `No están sujetos vehículos dados de baja por antigüedad autorizados excepcionalmente para exhibiciones, ni remolques con carga útil no superior a límite legal.`
        ]},
        { heading: '11. IVTM: sujeto, exenciones y cuota', paragraphs: [
          `Sujeto pasivo es persona o entidad a cuyo nombre conste vehículo en permiso de circulación. No necesariamente conductor o propietario económico distinto.`,
          `Exenciones incluyen vehículos oficiales de defensa o seguridad, diplomáticos, ambulancias, movilidad reducida y determinados agrícolas, con requisitos y solicitud en algunos casos.`,
          `La cuota se fija por tarifas según potencia fiscal, plazas, carga o cilindrada y puede incrementarse por coeficiente municipal dentro de límite.`
        ]},
        { heading: '12. IVTM: periodo y gestión', paragraphs: [
          `Periodo es año natural y devengo primer día. En primera adquisición comienza entonces y se prorratea por trimestres; también por baja definitiva o temporal por robo.`,
          `Gestión corresponde al Ayuntamiento del domicilio del permiso de circulación. Para matricular o transferir debe acreditarse pago o exención de periodos exigibles.`,
          `El padrón anual permite notificación colectiva. Cambios deben comunicarse a tráfico para coordinar sujeto y municipio.`
        ]},
        { heading: '13. IIVTNU: naturaleza y hecho imponible', paragraphs: [
          `El IIVTNU es impuesto directo y potestativo que grava incremento de valor de terrenos urbanos manifestado por transmisión de propiedad o constitución/transmisión de derechos reales de goce limitativos.`,
          `Solo grava terreno, no construcción, y debe ser urbano a efectos del impuesto. El incremento debe existir: si se acredita inexistencia, no hay sujeción.`,
          `Puede originarse por compraventa, donación, herencia, usufructo u otras transmisiones, con reglas para cada derecho.`
        ]},
        { heading: '14. IIVTNU: no sujeción y exenciones', paragraphs: [
          `No están sujetos terrenos rústicos ni aportaciones y adjudicaciones entre cónyuges en supuestos, transmisiones por nulidad, separación o divorcio y operaciones societarias previstas.`,
          `La inexistencia de incremento se acredita comparando valores de adquisición y transmisión según títulos o comprobados, sin gastos, y proporción de suelo cuando hay inmueble construido.`,
          `Exenciones incluyen constitución y transmisión de servidumbres, bienes histórico-artísticos con obras y transmisiones por dación de vivienda habitual en requisitos, además de entidades públicas y otras.`
        ]},
        { heading: '15. IIVTNU: sujeto pasivo', paragraphs: [
          `En transmisiones lucrativas o constitución gratuita de derechos, contribuyente es adquirente o beneficiario.`,
          `En transmisiones onerosas, contribuyente es transmitente o quien constituye/transmite derecho. Si transmitente persona física no residente, adquirente actúa como sustituto.`,
          `Debe identificarse carácter oneroso o lucrativo antes de responder. En herencia paga heredero; en venta, vendedor, con especialidad de no residente.`
        ]},
        { heading: '16. IIVTNU: base y opción real', paragraphs: [
          `Método objetivo multiplica valor catastral del suelo por coeficiente según años, actualizado legalmente, con posibles coeficientes municipales y reducción de valor en ordenanza.`,
          `Si incremento real acreditado es inferior a base objetiva, se toma incremento real. Esto evita tributación superior al aumento.`,
          `El periodo máximo computable es veinte años y se computan periodos inferiores a un año por meses en términos actuales. Los datos deben revisarse por cambios legislativos.`
        ]},
        { heading: '17. Devengo, declaración y gestión del IIVTNU', paragraphs: [
          `En transmisión inter vivos devenga en fecha de transmisión; por causa de muerte, fecha del fallecimiento; al constituir derechos, fecha del acto.`,
          `El obligado presenta declaración en treinta días hábiles para inter vivos y seis meses prorrogables hasta un año para mortis causa, salvo autoliquidación establecida.`,
          `Notarios remiten información. La anulación o rescisión puede dar devolución si no hubo efectos lucrativos y se solicita en plazo.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `IBI: derecho sobre inmueble; sujeto quien ostenta derecho prioritario.`,
          `IAE: ejercicio de actividad; sujeto quien la ejerce; personas físicas normalmente exentas.`,
          `IVTM: titularidad registral de vehículo apto; sujeto quien consta en permiso.`,
          `IIVTNU: incremento urbano por transmisión; adquirente en gratuito, transmitente en oneroso.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `IBI no grava simplemente propiedad si existe derecho prioritario.`,
          `IAE grava actividad aunque no haya beneficio. IVTM mira permiso, no conductor.`,
          `IIVTNU no se exige si no hay incremento acreditado y no grava terreno rústico.`,
          `No confundir sujeto de venta onerosa con donación o herencia.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué hecho y sujeto corresponden a IBI, IAE, IVTM e IIVTNU?`,
          `2. ¿Qué impuestos son obligatorios y cuáles potestativos?`,
          `3. ¿Cómo se demuestra inexistencia de incremento y quién paga según transmisión?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Crea tabla de cuatro columnas: objeto, hecho, sujeto y devengo. Añade exenciones más preguntadas.`,
          `En supuesto IIVTNU determina primero urbano, transmisión, incremento, naturaleza onerosa/lucrativa y residencia del transmitente.`
        ]}
      ],
      tree: `TRIBUTOS LOCALES
├─ Generales
│  ├─ Impuestos
│  ├─ Tasas
│  └─ Contribuciones especiales
├─ IBI
│  └─ Derecho sobre inmueble
├─ IAE
│  └─ Ejercicio de actividad
├─ IVTM
│  └─ Titularidad registral de vehículo
└─ IIVTNU
   └─ Incremento de terreno urbano`,
      reviewTable: [
        ['Impuesto', 'Hecho imponible', 'Sujeto básico'],
        ['IBI', 'Derecho sobre inmueble', 'Titular del derecho prioritario'],
        ['IAE', 'Ejercicio de actividad', 'Quien la ejerce'],
        ['IVTM', 'Titularidad de vehículo apto', 'Titular del permiso'],
        ['IIVTNU gratuito', 'Incremento por transmisión', 'Adquirente'],
        ['IIVTNU oneroso', 'Incremento por transmisión', 'Transmitente'],
        ['Obligatorios', 'IBI, IAE, IVTM', 'Art. 59 TRLRHL'],
        ['Potestativo', 'IIVTNU', 'Ordenanza necesaria']
      ]
    },
    13: {
      sources: [SOURCES.lpac, SOURCES.lrjsp, SOURCES.confianza, SOURCES.eidas],
      articleCoverage: [
        ['Arts. 9-12 LPAC', 'Sistemas de identificación, firma y asistencia.'],
        ['Arts. 38-46 LRJSP', 'Sede, portal, actuación automatizada, firma, intercambio y archivo.'],
        ['Reglamento eIDAS', 'Identificación electrónica, firma, sello, certificados y prestadores cualificados.'],
        ['Ley 6/2020', 'Prestadores, certificados, identidad, suspensión, revocación y supervisión.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `El certificado electrónico vincula datos de validación de firma o sello con una persona o entidad y permite identificación, firma, autenticación y comprobación en servicios electrónicos. El tema exige usos, tipos, soportes, autoridades o prestadores y servicios.`,
          `Debe distinguirse certificado, firma, sello, clave privada, clave pública, sede, CSV y sello de tiempo. Un certificado válido no significa que cualquier uso sea correcto: debe corresponder a titular, estar vigente y utilizarse con sistema admitido.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `El marco principal es Reglamento eIDAS, Ley 6/2020, Leyes 39 y 40/2015 y normativa técnica. La expresión tradicional autoridad certificadora se corresponde hoy con prestador de servicios de confianza que expide certificados.`,
          `Los certificados cualificados producen efectos reforzados, pero la Administración puede admitir otros sistemas de identificación y firma.`,
          `Los prestadores no son órganos que resuelven trámites: emiten y gestionan credenciales y evidencias. La sede u órgano administrativo decide sistemas admitidos.`
        ]},
        { heading: '1. Identificación y firma electrónicas', paragraphs: [
          `La identificación permite comprobar identidad; la firma acredita voluntad y consentimiento y protege integridad. La Ley 39 solo exige firma para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimiento y renuncia.`,
          `Puede identificarse sin firmar en consulta o acceso. Un sistema de firma admitido sirve también para identificar cuando permite acreditarlo.`,
          `La firma manuscrita digitalizada como imagen no equivale por sí sola a firma electrónica con garantías.`
        ]},
        { heading: '2. Certificado electrónico', paragraphs: [
          `Es declaración electrónica que vincula datos de validación con persona física o jurídica y confirma al menos nombre o seudónimo. El certificado cualificado cumple requisitos eIDAS y lo expide prestador cualificado.`,
          `Incluye emisor, titular, clave pública, periodo de validez, número de serie, usos y firma del prestador. La clave privada permanece bajo control del titular.`,
          `La confianza depende de cadena de certificación, vigencia, ausencia de revocación y adecuación del uso.`
        ]},
        { heading: '3. Firma electrónica simple, avanzada y cualificada', paragraphs: [
          `La firma simple son datos electrónicos usados para firmar. La avanzada está vinculada de manera única, permite identificar, se crea bajo control y detecta cambios.`,
          `La cualificada es avanzada creada con dispositivo cualificado y basada en certificado cualificado. Tiene efecto jurídico equivalente a manuscrita en la UE.`,
          `No puede rechazarse una firma solo por ser electrónica o no cualificada, pero su valor probatorio y admisión dependen del contexto y requisitos.`
        ]},
        { heading: '4. Tipos de certificados', paragraphs: [
          `Los certificados de persona física identifican a ciudadano. Los de representante acreditan actuación en nombre de persona jurídica o entidad.`,
          `Los de empleado público identifican al personal y pueden incluir órgano o puesto. Los de sello permiten actuación de persona jurídica o Administración sin intervención personal.`,
          `Existen certificados de autenticación de sitio web y componentes. La antigua categoría de certificado de sede se integra en reglas actuales de autenticación.`
        ]},
        { heading: '5. Soportes', paragraphs: [
          `Un certificado puede instalarse en software, almacenarse en tarjeta criptográfica, DNI electrónico, token USB, dispositivo cualificado o sistema remoto en nube con control.`,
          `El soporte software es cómodo pero exige copia segura y contraseña. La tarjeta requiere lector y controladores. El DNIe necesita certificados vigentes y PIN.`,
          `La firma centralizada puede usar claves custodias con autenticación reforzada. No debe confundirse con guardar contraseña en navegador.`
        ]},
        { heading: '6. Autoridades y prestadores', paragraphs: [
          `El prestador expide, renueva, suspende y revoca certificados y publica políticas. Los cualificados figuran en listas de confianza.`,
          `Debe verificar identidad y atributos mediante procedimientos fiables, conservar evidencias, proteger claves, informar de condiciones y garantizar disponibilidad de estado.`,
          `La supervisión corresponde a autoridad nacional competente. La inclusión en lista de confianza permite validar condición cualificada.`
        ]},
        { heading: '7. Emisión y acreditación de identidad', paragraphs: [
          `La expedición exige identificar solicitante presencialmente o por métodos equivalentes admitidos, y comprobar representación cuando proceda.`,
          `Los datos del certificado deben ser exactos. El titular revisa y comunica cambios, pérdida, sospecha de uso o extinción de representación.`,
          `La emisión no autoriza a actuar fuera del poder. Un certificado de representante acredita identidad y atributo, pero el alcance puede requerir apoderamiento.`
        ]},
        { heading: '8. Vigencia, renovación, suspensión y revocación', paragraphs: [
          `El certificado solo es válido dentro del periodo y mientras no esté suspendido o revocado. La caducidad se produce al terminar.`,
          `La suspensión paraliza temporalmente; la revocación extingue antes de caducidad por solicitud, pérdida, compromiso de clave, fallecimiento, extinción o cambios.`,
          `La validación debe consultar estado en momento de firma, mediante CRL u OCSP y, para largo plazo, sellos de tiempo y evidencias.`
        ]},
        { heading: '9. Usos administrativos', paragraphs: [
          `Permite presentar solicitudes y recursos, firmar declaraciones, acceder a carpetas, consultar expedientes, aceptar notificaciones, pagar, licitar y facturar.`,
          `El sistema puede requerir Autofirma u otra aplicación y formatos XAdES, PAdES o CAdES. La sede informa requisitos.`,
          `Un auxiliar debe ayudar sin conocer PIN ni usar certificado ajeno. La firma pertenece al interesado; la asistencia por funcionario habilitado sigue procedimiento específico.`
        ]},
        { heading: '10. Firma del personal y sello de órgano', paragraphs: [
          `La actuación administrativa puede firmarse por empleado mediante certificado que identifica titular y Administración, pudiendo incluir puesto.`,
          `Para actuación automatizada se determina órgano responsable de especificaciones, programación, mantenimiento, supervisión e impugnación y puede usarse sello o CSV.`,
          `El sello acredita origen e integridad de actuación de órgano, no expresa voluntad personal de un funcionario concreto.`
        ]},
        { heading: '11. Sede electrónica y autenticación', paragraphs: [
          `La sede es dirección electrónica cuya titularidad corresponde a Administración. Debe garantizar integridad, veracidad y actualización de información y servicios.`,
          `Se identifica mediante certificado de autenticación de sitio u otro sistema seguro. El usuario comprueba dominio, conexión HTTPS y datos de titularidad.`,
          `HTTPS cifra conexión, pero no garantiza que una página sea oficial si el dominio es falso o similar.`
        ]},
        { heading: '12. Código Seguro de Verificación', paragraphs: [
          `El CSV es código vinculado a documento que permite comprobar integridad y autenticidad mediante sede. No es certificado personal ni firma manuscrita.`,
          `La regulación determina órgano, generación, acceso y plazo. La copia en papel puede considerarse auténtica al verificar.`,
          `No debe publicarse documento con datos excesivos solo porque tenga CSV; el acceso debe respetar protección de datos.`
        ]},
        { heading: '13. Sellado de tiempo y validación', paragraphs: [
          `El sello de tiempo acredita que unos datos existían en momento y no se alteraron. El cualificado presume exactitud de fecha y hora e integridad.`,
          `La validación comprueba firma, certificado, cadena, estado y políticas. Puede ser cualificada y proporcionar informe.`,
          `Para conservación a largo plazo se añaden evidencias y renovaciones antes de que algoritmos o certificados pierdan validez.`
        ]},
        { heading: '14. Copias y documentos electrónicos', paragraphs: [
          `La firma protege integridad del documento firmado; cualquier modificación posterior puede invalidarla.`,
          `Una impresión no contiene propiedades criptográficas, pero puede verificarse por CSV o condición de copia auténtica.`,
          `No debe abrirse y guardar de nuevo un PDF firmado si altera contenido. Para incorporar al expediente se conserva original electrónico.`
        ]},
        { heading: '15. Incidencias frecuentes', paragraphs: [
          `Errores habituales: certificado caducado o revocado, hora del equipo incorrecta, controlador ausente, navegador incompatible, Autofirma bloqueada, PIN bloqueado o certificado no correspondiente.`,
          `Se comprueba fecha, titular, emisor, uso, cadena, estado, soporte, aplicación y permisos. No se fuerza la firma ni se comparte clave.`,
          `Si la sede falla, debe documentarse incidencia y utilizar canales o ampliaciones publicados, no enviar documentos sensibles por correo informal.`
        ]},
        { heading: '16. Seguridad y responsabilidad del titular', paragraphs: [
          `El titular custodia clave privada y PIN, evita copias inseguras y solicita revocación ante pérdida o compromiso.`,
          `No debe dejar sesión abierta, certificado instalado en equipos compartidos sin protección ni permitir firma por terceros.`,
          `La Administración debe diseñar sistemas accesibles, registrar evidencias y asistir, pero no sustituir voluntad ni custodiar credenciales personales.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Identificación dice quién; firma expresa voluntad; sello identifica origen de entidad; CSV verifica documento.`,
          `Certificados: persona, representante, empleado, sello y sitio.`,
          `Estados: vigente, suspendido, revocado o caducado.`,
          `Prestador emite y valida; Administración admite sistemas y resuelve trámite.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Certificado no es firma: es credencial usada para firmar.`,
          `Representante no significa poder ilimitado. CSV no identifica personalmente al firmante.`,
          `Revocación ocurre antes de caducidad; suspensión es temporal. HTTPS no garantiza legitimidad del contenido.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué diferencia hay entre identificación, firma, sello, certificado y CSV?`,
          `2. ¿Qué tipos y soportes existen y qué comprueba la validación?`,
          `3. ¿Qué servicios presta el prestador y cómo actuar ante pérdida o caducidad?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Resuelve casos en orden: titular, representación, tipo de certificado, vigencia, sistema admitido, aplicación y evidencia.`,
          `En práctica no memorices marcas; explica función jurídica y seguridad. Nunca recomiendes compartir PIN o certificado.`
        ]}
      ],
      tree: `CERTIFICADO ELECTRÓNICO
├─ Conceptos
│  ├─ Identificación
│  ├─ Firma simple / avanzada / cualificada
│  ├─ Sello
│  └─ CSV
├─ Certificados
│  ├─ Persona física
│  ├─ Representante
│  ├─ Empleado y sello
│  └─ Sitio web
├─ Ciclo de vida
│  ├─ Emisión
│  ├─ Vigencia
│  ├─ Suspensión
│  └─ Revocación / caducidad
└─ Servicios
   ├─ Validación
   ├─ Sellado de tiempo
   └─ Conservación`,
      reviewTable: [
        ['Concepto', 'Función', 'Clave'],
        ['Identificación', 'Acreditar identidad', 'No siempre firma'],
        ['Firma cualificada', 'Voluntad con efecto reforzado', 'Certificado + dispositivo'],
        ['Sello', 'Origen e integridad de entidad', 'No firma personal'],
        ['CSV', 'Verificar documento en sede', 'Código de comprobación'],
        ['Suspensión', 'Pausa temporal', 'Puede reactivarse'],
        ['Revocación', 'Fin anticipado', 'Estado consultable'],
        ['Prestador', 'Emite y gestiona confianza', 'Lista de confianza'],
        ['Sello de tiempo', 'Fecha e integridad', 'Evidencia temporal']
      ]
    },
    14: {
      sources: [SOURCES.lrjsp, SOURCES.gobierno, SOURCES.lpac],
      articleCoverage: [
        ['Arts. 3-14 LRJSP', 'Principios, órganos y competencia.'],
        ['Arts. 15-24 LRJSP', 'Órganos colegiados, abstención y recusación.'],
        ['Arts. 38-46 LRJSP', 'Funcionamiento electrónico interno.'],
        ['Arts. 54-80 LRJSP', 'Organización central y territorial de la AGE.'],
        ['Ley 50/1997', 'Gobierno, Presidente, Consejo de Ministros y órganos de colaboración.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `La Ley 40/2015 regula principios del sector público, órganos, competencia, órganos colegiados, abstención y recusación, funcionamiento electrónico y organización de la Administración General del Estado.`,
          `El examen exige distinguir órgano y unidad, titularidad y ejercicio, delegación, avocación, encomienda, firma y suplencia; así como ministerios, secretarías de Estado, órganos directivos, delegaciones y subdelegaciones.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La Ley 40 regula organización y relaciones; la Ley 39 regula procedimiento con ciudadanos. La Ley 50/1997 regula Gobierno, que dirige Administración pero no se confunde con ella.`,
          `La organización estatal cambia por reales decretos. Deben estudiarse categorías legales, no memorizar ministerios concretos salvo programa o publicación.`,
          `La competencia es irrenunciable. Las técnicas modifican ejercicio o forma, pero no siempre titularidad.`
        ]},
        { heading: '1. Principios generales', paragraphs: [
          `Las Administraciones sirven objetivamente intereses generales y actúan con eficacia, jerarquía, descentralización, desconcentración, coordinación y sometimiento a Constitución, ley y Derecho.`,
          `Además respetan servicio efectivo, simplicidad, claridad, proximidad, participación, objetividad, transparencia, racionalización, buena fe, confianza legítima, responsabilidad, planificación, evaluación, cooperación y eficiencia.`,
          `Las relaciones electrónicas internas deben garantizar interoperabilidad, seguridad y protección de datos.`
        ]},
        { heading: '2. Órgano administrativo', paragraphs: [
          `Son unidades a las que se atribuyen funciones con efectos jurídicos frente a terceros o actuación preceptiva. Crear órgano exige forma de integración, dependencia, funciones, competencias y créditos.`,
          `No pueden crearse órganos que dupliquen otros sin suprimir o restringir competencias y comprobar medios.`,
          `La unidad administrativa puede realizar tareas internas sin condición de órgano. El titular es persona que ejerce competencias del órgano.`
        ]},
        { heading: '3. Competencia', paragraphs: [
          `Es irrenunciable y se ejerce por órgano que la tiene atribuida, salvo delegación o avocación. Desconcentración atribuye titularidad a órgano dependiente mediante norma.`,
          `Si norma atribuye a Administración sin especificar, instrucción y resolución corresponden a órganos inferiores competentes por materia y territorio; si varios, superior común.`,
          `La incompetencia puede ser subsanable o causar nulidad si manifiesta por materia o territorio.`
        ]},
        { heading: '4. Delegación de competencias', paragraphs: [
          `Permite a órgano delegar ejercicio en otro de la misma Administración, aunque no dependiente jerárquico, o en organismos vinculados. No transfiere titularidad.`,
          `No pueden delegarse relaciones con Corona y órganos constitucionales, adopción de disposiciones generales, resolución de recursos por órgano que dictó acto y materias prohibidas por ley.`,
          `Debe publicarse. Las resoluciones indican delegación y se consideran dictadas por delegante. Puede revocarse. No se subdelega salvo autorización legal.`
        ]},
        { heading: '5. Avocación', paragraphs: [
          `Órgano superior asume para sí uno o varios asuntos cuya resolución corresponde ordinariamente o por delegación a dependiente, por razones técnicas, económicas, sociales, jurídicas o territoriales.`,
          `Si delegación fue a órgano no dependiente, solo delegante puede avocar.`,
          `El acuerdo es motivado y se notifica a interesados antes o simultáneamente a resolución. No es recurrible separadamente, pero se impugna con resolución.`
        ]},
        { heading: '6. Encomienda de gestión', paragraphs: [
          `Encarga actividades materiales o técnicas a otro órgano o entidad por eficacia o falta de medios. No cede titularidad ni elementos sustantivos.`,
          `El órgano encomendante dicta actos jurídicos que den soporte. El encomendado responde de ejecución y puede tratar datos según régimen.`,
          `Entre órganos de misma Administración se formaliza según norma; entre Administraciones, convenio, salvo gestión ordinaria prevista. No puede tener por objeto prestaciones propias de contrato.`
        ]},
        { heading: '7. Delegación de firma y suplencia', paragraphs: [
          `La delegación de firma permite al titular delegar firma de resoluciones y actos dentro de competencia. No altera competencia y no requiere publicación general, pero se hace constar.`,
          `No puede utilizarse en materias no delegables cuando su naturaleza lo impida ni ocultar autoría.`,
          `La suplencia sustituye temporalmente por vacante, ausencia, enfermedad, abstención o recusación. No altera competencia y se identifica suplente y titular.`
        ]},
        { heading: '8. Decisiones sobre competencia', paragraphs: [
          `El órgano que se considere incompetente remite directamente al que estime competente y notifica. Los interesados pueden dirigirse para declinatoria o requerir inhibición.`,
          `Los conflictos de atribuciones solo entre órganos no relacionados jerárquicamente y sobre asuntos no finalizados.`,
          `La jerarquía resuelve dudas entre órganos dependientes; las relaciones interadministrativas siguen mecanismos propios.`
        ]},
        { heading: '9. Órganos colegiados', paragraphs: [
          `Se integran por presidente, miembros y secretario. Pueden reunirse presencialmente o a distancia si se garantiza identidad, contenido, momento, comunicación y medios.`,
          `La convocatoria incluye orden del día y documentación. Para constitución se requiere presidente y secretario o suplentes y mitad de miembros, salvo reglas específicas.`,
          `No se deliberan asuntos fuera del orden salvo presencia de todos y urgencia por mayoría. Los acuerdos se adoptan por mayoría y se levanta acta.`
        ]},
        { heading: '10. Actas y certificaciones colegiadas', paragraphs: [
          `El acta recoge asistentes, orden, circunstancias, puntos, intervenciones, acuerdos y votos. Puede grabarse y conservarse con integridad.`,
          `Los miembros pueden pedir constancia de voto contrario, abstención y motivos, y formular voto particular.`,
          `El secretario certifica acuerdos. El acta se aprueba en misma o siguiente sesión y puede utilizarse correo u otros medios para conformidad.`
        ]},
        { heading: '11. Abstención', paragraphs: [
          `Autoridades y personal se abstienen cuando tienen interés personal, vínculo matrimonial o parentesco, amistad íntima o enemistad manifiesta, intervención como perito o testigo o relación de servicio con interesado.`,
          `Comunican al superior, que resuelve. La actuación sin abstenerse no implica necesariamente invalidez, pero genera responsabilidad.`,
          `El superior puede ordenar abstención. La finalidad es imparcialidad objetiva y apariencia de neutralidad.`
        ]},
        { heading: '12. Recusación', paragraphs: [
          `Los interesados pueden promoverla en cualquier momento de tramitación por causas de abstención. Se plantea por escrito expresando causa.`,
          `El recusado manifiesta al día siguiente si concurre. Si acepta, se sustituye; si niega, superior resuelve en tres días tras informes y comprobaciones.`,
          `Contra resolución no cabe recurso separado, sin perjuicio de alegarla al recurrir acto final.`
        ]},
        { heading: '13. Funcionamiento electrónico de los órganos', paragraphs: [
          `La sede, portal, identificación, firma, actuación automatizada, intercambio y archivo se regulan para garantizar autenticidad e interoperabilidad.`,
          `Los órganos pueden usar sello electrónico o firma del titular. La actuación automatizada exige definir órganos responsables de diseño, mantenimiento, supervisión e impugnación.`,
          `La transmisión entre Administraciones debe respetar Esquema Nacional de Interoperabilidad y Seguridad y protección de datos.`
        ]},
        { heading: '14. La Administración General del Estado', paragraphs: [
          `Actúa y se organiza conforme a descentralización funcional y desconcentración territorial y funcional. Comprende organización central, territorial y exterior.`,
          `Son órganos superiores ministros y secretarios de Estado; órganos directivos subsecretarios y secretarios generales, secretarios generales técnicos y directores y subdirectores generales.`,
          `Los superiores establecen planes; directivos desarrollan y ejecutan. Todos tienen condición de alto cargo salvo subdirectores en términos.`
        ]},
        { heading: '15. Ministerios y estructura central', paragraphs: [
          `La AGE se organiza en Presidencia y ministerios, cada uno en sectores funcionales. La creación y modificación de ministerios y secretarías se decide por real decreto del Presidente.`,
          `Los ministerios cuentan con subsecretaría y secretaría general técnica; pueden existir secretarías de Estado, secretarías generales, direcciones y subdirecciones.`,
          `Los ministros dirigen departamento, ejercen potestad reglamentaria, fijan objetivos, aprueban planes y resuelven materias. Secretarios de Estado dirigen sector específico.`
        ]},
        { heading: '16. Organización territorial', paragraphs: [
          `En cada comunidad existe Delegación del Gobierno que representa Gobierno y dirige y coordina AGE territorial. Depende orgánicamente de Presidencia y funcionalmente de ministerios.`,
          `En provincias existen Subdelegaciones bajo Delegado, salvo singularidades. En islas puede haber directores insulares.`,
          `Coordinan servicios integrados, protegen libre ejercicio de derechos, seguridad ciudadana y cooperación con comunidades y entidades locales.`
        ]},
        { heading: '17. Gobierno y Administración', paragraphs: [
          `El Gobierno es órgano constitucional que dirige política y Administración; la AGE es organización permanente que ejecuta con objetividad.`,
          `Consejo de Ministros, comisiones delegadas, Presidente, vicepresidentes y ministros integran Gobierno según Ley 50/1997.`,
          `Un cambio de Gobierno no extingue Administración. El Gobierno en funciones tiene límites y facilita traspaso.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Delegación: ejercicio; desconcentración: titularidad; avocación: superior asume asunto; encomienda: actividad material.`,
          `Firma no altera competencia; suplencia sustituye titular temporalmente.`,
          `AGE: ministros y secretarios de Estado superiores; restantes directivos.`,
          `Territorio: delegados, subdelegados y directores insulares.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Encomienda no es contrato ni delegación. Avocación debe motivarse.`,
          `Abstención no anula automáticamente; recusación la promueve interesado.`,
          `Gobierno no es lo mismo que Administración. Subdirector no es órgano superior.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué cambia y qué no en delegación, avocación, encomienda, firma y suplencia?`,
          `2. ¿Cómo se constituye y documenta un órgano colegiado?`,
          `3. ¿Cuál es la estructura central y territorial de la AGE?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Haz tabla con titularidad, ejercicio, acto requerido, publicación y recurso para cada técnica.`,
          `En preguntas AGE identifica nivel: Gobierno, órgano superior, órgano directivo o territorial. No memorices nombres coyunturales de ministerios.`
        ]}
      ],
      tree: `LEY 40/2015
├─ Órganos y competencia
│  ├─ Delegación
│  ├─ Avocación
│  ├─ Encomienda
│  ├─ Firma
│  └─ Suplencia
├─ Imparcialidad
│  ├─ Abstención
│  └─ Recusación
├─ Órganos colegiados
└─ AGE
   ├─ Central
   ├─ Territorial
   └─ Exterior`,
      reviewTable: [
        ['Técnica/órgano', 'Efecto', 'Artículo'],
        ['Delegación', 'Transfiere ejercicio', '9'],
        ['Avocación', 'Superior asume asunto', '10'],
        ['Encomienda', 'Actividad material/técnica', '11'],
        ['Firma', 'No altera competencia', '12'],
        ['Suplencia', 'Sustitución temporal', '13'],
        ['Recusación', 'La promueve interesado', '24'],
        ['Órganos superiores', 'Ministros y secretarios de Estado', '55'],
        ['Territoriales', 'Delegados y subdelegados', '69-75']
      ]
    },
    15: {
      sources: [SOURCES.windows, SOURCES.printscan],
      articleCoverage: [
        ['Explorador de archivos', 'Creación, selección, copia, movimiento, renombrado, borrado, búsqueda y propiedades.'],
        ['Unidades y rutas', 'Discos locales, extraíbles, red, letras, rutas y permisos.'],
        ['Impresión', 'Cola, impresora predeterminada, preferencias, páginas, orientación, doble cara y solución de incidencias.'],
        ['Digitalización', 'Escáner, origen, resolución, color, formato, OCR, PDF multipágina y control de calidad.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Microsoft Windows permite gestionar archivos, carpetas, unidades, impresoras y escáneres. El tema es práctico: crear, copiar, mover, borrar, recuperar, localizar, compartir, imprimir y digitalizar de forma segura.`,
          `En un Ayuntamiento importa conservar integridad, nomenclatura, versión, permisos, protección de datos y vinculación al expediente. Saber pulsar botones sin comprender efectos puede causar pérdida o divulgación.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Las denominaciones pueden variar entre versiones de Windows. Deben estudiarse funciones estables y documentación oficial actual, sin depender de una captura concreta.`,
          `El temario cita Microsoft Windows, no obliga a una versión determinada. OpoWeb explica conceptos comunes y señala cambios de interfaz como dato dinámico.`,
          `La gestión de documentos administrativos debe seguir instrucciones internas, seguridad y protección de datos además del funcionamiento técnico.`
        ]},
        { heading: '1. Archivo, carpeta y ruta', paragraphs: [
          `Un archivo contiene datos y se identifica por nombre y extensión. Una carpeta organiza archivos y subcarpetas. La ruta indica ubicación desde unidad o recurso.`,
          `Las extensiones habituales son PDF, DOCX, XLSX, ODT, ODS, JPG, PNG, ZIP y TXT. Ocultar extensiones puede facilitar confusión; conviene mostrarlas en trabajo administrativo.`,
          `No deben usarse caracteres incompatibles ni nombres ambiguos. Una convención con expediente, tipo, fecha y versión mejora búsqueda.`
        ]},
        { heading: '2. Explorador de archivos', paragraphs: [
          `Permite navegar mediante panel, barra de direcciones, accesos, búsqueda y vistas. La ruta puede copiarse y las propiedades muestran tamaño, tipo, fechas y permisos.`,
          `Las vistas de detalles facilitan ordenar por nombre, fecha, tipo o tamaño. La búsqueda puede filtrar por términos, extensión y fecha.`,
          `Acceso rápido es enlace a ubicaciones frecuentes, no una copia. Eliminar acceso no borra carpeta original.`
        ]},
        { heading: '3. Crear y renombrar', paragraphs: [
          `Se crea carpeta desde menú contextual o comando y archivo desde aplicación correspondiente. Debe comprobarse ubicación antes de guardar.`,
          `Renombrar cambia nombre, no contenido. Cambiar extensión manualmente no convierte formato y puede impedir apertura.`,
          `Los nombres deben evitar datos sensibles innecesarios y mantener versión clara: borrador, revisado o firmado.`
        ]},
        { heading: '4. Selección y operaciones múltiples', paragraphs: [
          `Un clic selecciona, Ctrl añade elementos individuales y Mayús selecciona rango. Ctrl+A selecciona todo en carpeta.`,
          `Las operaciones sobre selección afectan a todos los elementos. Antes de borrar o mover se revisa cantidad y destino.`,
          `La selección múltiple facilita anexos, pero un error puede mover expedientes ajenos. Conviene deshacer inmediatamente si procede.`
        ]},
        { heading: '5. Copiar, cortar y pegar', paragraphs: [
          `Copiar crea duplicado en destino y conserva original. Cortar y pegar mueve; en misma unidad suele cambiar ubicación, entre unidades puede copiar y borrar al terminar.`,
          `Atajos: Ctrl+C, Ctrl+X y Ctrl+V. Arrastrar puede copiar o mover según origen, destino y teclas; es menos seguro si no se reconoce indicador.`,
          `Una copia no sincroniza cambios. Debe controlarse cuál es versión válida y evitar copias locales de datos sin necesidad.`
        ]},
        { heading: '6. Borrado y Papelera', paragraphs: [
          `Suprimir normalmente envía a Papelera en discos locales, permitiendo restaurar. Mayús+Supr puede eliminar sin pasar.`,
          `Archivos en unidades de red, extraíbles, muy grandes o configuraciones pueden no ir a Papelera. Vaciarla elimina referencias y dificulta recuperación.`,
          `Antes de borrar documentación oficial deben aplicarse calendario de conservación y autorización; la Papelera no es archivo ni sistema de expurgo seguro.`
        ]},
        { heading: '7. Restaurar y deshacer', paragraphs: [
          `En Papelera se restaura a ubicación original. Si ya existe archivo con mismo nombre, Windows solicita decisión.`,
          `Ctrl+Z puede deshacer ciertas operaciones recientes como mover o renombrar, pero no garantiza recuperación tras cerrar o realizar otras acciones.`,
          `Las versiones anteriores o copias corporativas dependen de configuración. Debe avisarse a soporte ante pérdida, evitando sobrescribir.`
        ]},
        { heading: '8. Unidades locales', paragraphs: [
          `Los discos y particiones se identifican por letras, normalmente C: para sistema. Pueden existir D: u otras.`,
          `La capacidad se mide en bytes y múltiplos. Espacio libre insuficiente impide guardar o actualizar. SSD y HDD son tecnologías distintas pero se muestran como unidades.`,
          `Carpetas de usuario separan documentos, descargas y escritorio. Guardar en escritorio no equivale a copia segura corporativa.`
        ]},
        { heading: '9. Unidades extraíbles', paragraphs: [
          `USB y discos externos reciben letra. Deben expulsarse de forma segura para evitar escritura pendiente y corrupción.`,
          `Pueden contener malware o perderse. Solo se usan dispositivos autorizados, cifrados y analizados.`,
          `La copia de datos personales requiere finalidad y autorización. El formato del dispositivo condiciona tamaño de archivos y compatibilidad.`
        ]},
        { heading: '10. Unidades y recursos de red', paragraphs: [
          `Una carpeta compartida puede asignarse a letra o accederse por ruta UNC, por ejemplo servidor y recurso. Los datos se almacenan en servidor.`,
          `Los permisos pueden ser lectura, modificación o control y combinarse con permisos del recurso. No todos deben acceder a todo.`,
          `La red puede disponer de copias y versionado, pero no sustituye clasificación correcta. Si no hay conexión, la unidad puede aparecer inaccesible.`
        ]},
        { heading: '11. Permisos y compartición', paragraphs: [
          `Los permisos se asignan por necesidad de conocer. Compartir no significa publicar. La herencia puede transmitir permisos a subcarpetas.`,
          `No deben modificarse permisos sin autorización. Un enlace o acceso directo no concede permisos por sí mismo.`,
          `Al enviar archivos se comprueba destinatario, contenido, metadatos y versión. La compresión ZIP no cifra salvo protección específica.`
        ]},
        { heading: '12. Compresión y descompresión', paragraphs: [
          `Comprimir agrupa y puede reducir tamaño. Windows permite crear y extraer ZIP.`,
          `Para usar archivos se extraen cuando aplicación o flujo lo requiere. Abrir desde ZIP puede guardar cambios temporalmente y perderlos.`,
          `Un ZIP puede contener ejecutables maliciosos. Se analiza y no se cambia extensión para aparentar otro formato.`
        ]},
        { heading: '13. Impresoras y cola de impresión', paragraphs: [
          `Una impresora puede ser local, USB, red o virtual PDF. La predeterminada se usa si aplicación no elige otra.`,
          `La cola contiene trabajos pendientes, permite pausar, reanudar o cancelar según permisos. Un trabajo bloqueado puede detener siguientes.`,
          `Antes de imprimir se verifica impresora física, confidencialidad y recogida inmediata. No se dejan documentos personales en bandeja.`
        ]},
        { heading: '14. Configuración de impresión', paragraphs: [
          `Se eligen páginas, rango, copias, intercalado, orientación, tamaño, márgenes, escala, color y doble cara.`,
          `La vista previa detecta cortes, páginas en blanco o tablas fuera. Imprimir a PDF genera archivo, no papel.`,
          `Las preferencias del controlador pueden prevalecer. Si resultado no coincide, se revisan aplicación, controlador y dispositivo.`
        ]},
        { heading: '15. Incidencias de impresión', paragraphs: [
          `Comprobar encendido, conexión, papel, tóner, errores, impresora seleccionada, estado sin conexión y cola.`,
          `Cancelar trabajo, reiniciar cola o dispositivo puede resolver, pero no deben borrarse trabajos de otros sin coordinación.`,
          `Los controladores se instalan por canales autorizados. Un equipo compartido puede requerir credenciales o servidor.`
        ]},
        { heading: '16. Digitalización', paragraphs: [
          `El escáner convierte papel en imagen o PDF. Se selecciona origen plano o alimentador, tamaño, color, resolución, una/doble cara y formato.`,
          `Para expediente suele ser útil PDF multipágina con resolución suficiente para legibilidad y tamaño razonable. OCR añade texto reconocible, pero debe revisarse.`,
          `La digitalización no convierte automáticamente en copia auténtica: deben cumplirse procedimiento, metadatos y firma cuando corresponda.`
        ]},
        { heading: '17. Control de calidad de digitalización', paragraphs: [
          `Se verifica número y orden de páginas, orientación, márgenes completos, contraste, legibilidad, ausencia de dobles alimentaciones y correspondencia con original.`,
          `Se nombra archivo, se asocia al expediente y se evita mezclar documentación de personas.`,
          `Los originales se devuelven, conservan o eliminan según norma. No se abandonan en escáner.`
        ]},
        { heading: '18. Buenas prácticas administrativas', paragraphs: [
          `Trabajar en ubicación corporativa, aplicar nombres normalizados, minimizar duplicados y no editar documentos firmados.`,
          `Bloquear equipo, cerrar sesión, no usar USB no autorizado y evitar carpetas personales para expedientes.`,
          `Registrar incidencias y pedir soporte antes de improvisar. La trazabilidad es tan importante como rapidez.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Copiar duplica; cortar mueve; borrar puede ir o no a Papelera.`,
          `Local está en equipo; red en recurso compartido con permisos; USB es extraíble y de riesgo.`,
          `Cola gestiona trabajos; imprimir a PDF crea archivo.`,
          `Digitalizar exige resolución, formato, orden, legibilidad y asociación al expediente.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Cambiar extensión no convierte formato. Acceso directo no es copia.`,
          `Papelera no garantiza recuperación en red o USB.`,
          `ZIP no implica cifrado. Escanear no crea por sí solo copia auténtica.`,
          `Impresora predeterminada puede no ser la deseada: comprobar antes.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué diferencias prácticas hay entre copiar, mover, acceso directo y sincronizar?`,
          `2. ¿Cómo se gestionan unidades locales, de red y extraíbles con seguridad?`,
          `3. ¿Qué controles deben hacerse antes y después de imprimir o digitalizar?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Practica operaciones en un entorno de prueba y verbaliza efecto antes de ejecutar.`,
          `En supuesto administrativo añade siempre ubicación, nombre, permisos, datos personales, control de calidad y expediente.`
        ]}
      ],
      tree: `WINDOWS I
├─ Archivos y carpetas
│  ├─ Crear / renombrar
│  ├─ Copiar / mover
│  ├─ Borrar / restaurar
│  └─ Buscar / comprimir
├─ Unidades
│  ├─ Locales
│  ├─ Extraíbles
│  └─ Red y permisos
├─ Impresión
│  ├─ Configuración
│  └─ Cola e incidencias
└─ Digitalización
   ├─ Parámetros
   └─ Control de calidad`,
      reviewTable: [
        ['Operación', 'Efecto', 'Control'],
        ['Copiar', 'Crea duplicado', 'Destino y versión'],
        ['Cortar/pegar', 'Mueve', 'Unidad y permisos'],
        ['Borrar', 'Papelera o eliminación', 'Conservación'],
        ['Red', 'Recurso compartido', 'Permisos'],
        ['ZIP', 'Agrupa/comprime', 'No cifra por defecto'],
        ['Cola', 'Trabajos pendientes', 'Impresora correcta'],
        ['Escaneo', 'Papel a archivo', 'Legibilidad y orden'],
        ['OCR', 'Reconocimiento de texto', 'Revisar errores']
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
      sourcePolicy: 'Fuentes oficiales consolidadas o documentación oficial del fabricante',
      autonomous: true,
      fixedStudyStructure: true,
      articleByArticle: number !== 15,
      noOffSyllabusFiller: true,
      block: 'La Puebla 11-15'
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

  window.OPOWEB_PUEBLA_TEORIA_V86_BLOQUE3 = {
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v86.pendingThemes
  };
})();
