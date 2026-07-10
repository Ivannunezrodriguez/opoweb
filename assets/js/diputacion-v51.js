(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.51.0';
  const caseItem = (id, title, area, themes, difficulty, minutes, statement, tasks, legalBasis, solution, checklist) => ({
    id: `dip-v51-sp${id}`,
    title,
    area,
    themes,
    difficulty,
    minutes,
    statement,
    tasks,
    legalBasis,
    solution,
    checklist,
    guidance: solution.map(section => `${section.heading}: ${section.paragraphs.join(' ')}`).join(' ')
  });

  ope.practicalCases = [
    caseItem(
      1,
      'Solicitud presencial de una sociedad mercantil',
      'Procedimiento y administración electrónica',
      [5, 6, 9, 11],
      'media',
      18,
      'Una sociedad mercantil presenta presencialmente en una oficina de la Diputación una solicitud dirigida a un procedimiento provincial. Falta además uno de los documentos exigidos por la convocatoria. La oficina registra el papel el 3 de septiembre y el órgano instructor detecta ambos defectos el día 5.',
      [
        'Determina si la sociedad está obligada a relacionarse electrónicamente.',
        'Explica cómo debe corregirse la presentación presencial y qué fecha cuenta como presentación.',
        'Indica el trámite por la falta documental, el plazo ordinario y la consecuencia de no subsanar.',
        'Señala qué resolución debe dictarse si no se atiende el requerimiento.'
      ],
      ['Ley 39/2015, arts. 14.2, 16, 21 y 68'],
      [
        { heading: '1. Relación electrónica', paragraphs: ['La sociedad es una persona jurídica y está obligada a relacionarse electrónicamente con las Administraciones. La presentación en papel no consolida como fecha válida la del registro presencial.'] },
        { heading: '2. Corrección de la presentación', paragraphs: ['Debe requerirse la subsanación mediante presentación electrónica. A estos efectos, la fecha de presentación será la fecha en que se efectúe la subsanación electrónica, no el 3 de septiembre.'] },
        { heading: '3. Documento ausente', paragraphs: ['También debe requerirse la aportación del documento preceptivo. El plazo ordinario es de diez días. La ampliación de hasta cinco días solo cabe en los supuestos legales y no en procedimientos selectivos o de concurrencia competitiva.'] },
        { heading: '4. Falta de subsanación', paragraphs: ['Si no subsana, se tendrá a la sociedad por desistida de su petición, pero no de forma automática: debe dictarse y notificarse resolución expresa conforme al artículo 21.'] },
        { heading: 'Conclusión', paragraphs: ['El expediente debe dejar constancia de ambos defectos, del requerimiento, de su notificación y del cumplimiento o incumplimiento.'] }
      ],
      ['Identifica a la persona jurídica como obligada electrónica.', 'No conserva como fecha válida la presentación en papel.', 'Aplica diez días de subsanación.', 'Exige resolución expresa de desistimiento.']
    ),
    caseItem(
      2,
      'Cómputo de un plazo de diez días hábiles',
      'Términos y plazos',
      [5, 11],
      'baja',
      12,
      'Una notificación administrativa se practica correctamente un viernes. El acto concede diez días hábiles para formular alegaciones. En el período existe un sábado, dos domingos y un festivo oficial en el municipio del interesado.',
      [
        'Indica desde qué día comienza el cómputo.',
        'Explica qué días se excluyen.',
        'Determina qué ocurre si el último día resultante es inhábil.',
        'Aclara si el plazo podría expresarse en días naturales.'
      ],
      ['Ley 39/2015, arts. 30 y 31'],
      [
        { heading: 'Inicio', paragraphs: ['El plazo comienza el día siguiente al de la notificación. El día de la notificación no se cuenta.'] },
        { heading: 'Días excluidos', paragraphs: ['Al estar expresado en días hábiles se excluyen sábados, domingos y festivos. Deben comprobarse los calendarios oficiales aplicables.'] },
        { heading: 'Vencimiento inhábil', paragraphs: ['Si el último día es inhábil, el plazo se prorroga hasta el primer día hábil siguiente.'] },
        { heading: 'Días naturales', paragraphs: ['Solo se computan como naturales cuando una ley o el Derecho de la Unión Europea lo establezca; esa circunstancia debe constar en la notificación.'] }
      ],
      ['Empieza el día siguiente.', 'Excluye sábados, domingos y festivos.', 'Prorroga el vencimiento inhábil.', 'No inventa una fecha sin calendario completo.']
    ),
    caseItem(
      3,
      'Delegación, firma y abstención en un expediente',
      'Régimen jurídico',
      [4],
      'alta',
      20,
      'La persona titular de un órgano provincial ha delegado el ejercicio de una competencia en otro órgano. La resolución se firma por una empleada mediante delegación de firma. Durante la tramitación se descubre que la empleada tiene interés personal en la empresa beneficiaria.',
      [
        'Diferencia delegación de competencia y delegación de firma.',
        'Indica qué debe expresar la resolución dictada por delegación.',
        'Analiza la causa de abstención y sus efectos.',
        'Explica si la intervención determina automáticamente la nulidad.'
      ],
      ['Ley 40/2015, arts. 8, 9, 12, 23 y 24'],
      [
        { heading: 'Delegación de competencia', paragraphs: ['Transfiere el ejercicio, no la titularidad. El acto se considera dictado por el órgano delegante y debe indicar expresamente que se adopta por delegación.'] },
        { heading: 'Delegación de firma', paragraphs: ['No altera la competencia. Permite firmar resoluciones o actos del órgano competente y debe respetar los límites legales.'] },
        { heading: 'Abstención', paragraphs: ['El interés personal es causa de abstención. La empleada debe apartarse del asunto y comunicarlo a su superior. Los interesados pueden promover recusación.'] },
        { heading: 'Validez y responsabilidad', paragraphs: ['La intervención de quien debió abstenerse no implica por sí sola la invalidez automática del acto, aunque puede concurrir un vicio concreto y responsabilidad disciplinaria. Debe revisarse la influencia efectiva en la decisión.'] }
      ],
      ['Distingue ejercicio y titularidad.', 'Menciona la indicación “por delegación”.', 'Detecta interés personal.', 'No declara nulidad automática sin analizar el vicio.']
    ),
    caseItem(
      4,
      'Notificación electrónica no abierta',
      'Notificaciones',
      [9, 11, 31],
      'media',
      15,
      'Una asociación, obligada a relacionarse electrónicamente, recibe la puesta a disposición de una resolución en la sede electrónica. Se envía además un aviso al correo facilitado. La asociación no entra en la sede durante doce días naturales y alega que el aviso llegó a la carpeta de correo no deseado.',
      [
        'Diferencia aviso y notificación.',
        'Determina cuándo se entiende rechazada.',
        'Explica el efecto del rechazo sobre el procedimiento.',
        'Indica qué datos esenciales debe contener la notificación.'
      ],
      ['Ley 39/2015, arts. 40, 41 y 43'],
      [
        { heading: 'Aviso', paragraphs: ['El mensaje de correo es un aviso y su falta o recepción defectuosa no convierte por sí sola en inválida la notificación. La notificación es la puesta a disposición y el acceso a su contenido mediante el sistema legal.'] },
        { heading: 'Rechazo', paragraphs: ['Al ser electrónica obligatoria, se entiende rechazada al transcurrir diez días naturales desde la puesta a disposición sin acceso.'] },
        { heading: 'Efecto', paragraphs: ['Debe dejarse constancia del rechazo y continuar el procedimiento, salvo que de oficio o a instancia del interesado se aprecie imposibilidad técnica o incidencia acreditada que requiera otra actuación.'] },
        { heading: 'Contenido', paragraphs: ['La notificación debe contener el texto íntegro, indicar si pone fin a la vía administrativa y expresar recursos, órgano y plazo, sin perjuicio de que una notificación defectuosa pueda producir efectos cuando el interesado actúe revelando conocimiento suficiente.'] }
      ],
      ['No confunde aviso con notificación.', 'Aplica diez días naturales.', 'Continúa el procedimiento tras rechazo.', 'Revisa texto, vía y recursos.']
    ),
    caseItem(
      5,
      'Recurso contra una resolución provincial',
      'Recursos administrativos',
      [7, 8, 11],
      'alta',
      22,
      'Una resolución deniega una solicitud e indica que no pone fin a la vía administrativa. Fue notificada expresamente hace veinte días. El interesado presenta un escrito ante el mismo órgano que dictó el acto y lo denomina “reposición”.',
      [
        'Determina el recurso procedente y el plazo.',
        'Indica ante qué órgano puede presentarse y quién resuelve.',
        'Analiza el error en la denominación del recurso.',
        'Explica el efecto general de interponerlo sobre la ejecución.'
      ],
      ['Ley 39/2015, arts. 112, 115, 117, 121 y 122'],
      [
        { heading: 'Recurso procedente', paragraphs: ['Al no poner fin a la vía administrativa procede recurso de alzada. Frente a un acto expreso, el plazo es de un mes desde el día siguiente a la notificación. El escrito está dentro de plazo.'] },
        { heading: 'Presentación y resolución', paragraphs: ['Puede presentarse ante el órgano que dictó el acto o ante el superior competente para resolver. Si se presenta ante el autor, este debe remitirlo al competente con su informe y copia completa del expediente en el plazo legal.'] },
        { heading: 'Error de denominación', paragraphs: ['El error de llamarlo reposición no impide su tramitación cuando se deduce su verdadero carácter. Debe calificarse conforme a su contenido.'] },
        { heading: 'Suspensión', paragraphs: ['La interposición no suspende automáticamente la ejecución. La suspensión requiere acuerdo o concurrencia de los requisitos legales.'] }
      ],
      ['Alzada, no reposición.', 'Plazo de un mes.', 'Presentación ante autor o superior.', 'Error nominal no bloquea si se identifica el recurso.', 'No presume suspensión automática.']
    ),
    caseItem(
      6,
      'Caída por defecto en una instalación provincial',
      'Responsabilidad patrimonial',
      [10],
      'alta',
      25,
      'Una persona cae en la entrada de un edificio provincial por una baldosa levantada que llevaba semanas señalada internamente pero sin reparar. Sufre una fractura, permanece de baja y presenta reclamación nueve meses después del alta médica. La Administración alega que la caída pudo deberse a distracción.',
      [
        'Enumera los requisitos de la responsabilidad patrimonial.',
        'Analiza el plazo de reclamación.',
        'Indica las actuaciones de instrucción esenciales.',
        'Explica cómo valorar la concurrencia de culpa de la víctima.'
      ],
      ['Ley 40/2015, arts. 32 a 36; Ley 39/2015, arts. 67, 81, 91 y 92'],
      [
        { heading: 'Requisitos', paragraphs: ['Debe existir daño efectivo, evaluable e individualizado, antijurídico, imputable al funcionamiento normal o anormal del servicio y conectado causalmente, sin fuerza mayor. La existencia previa de avisos internos refuerza la previsibilidad y el deber de conservación.'] },
        { heading: 'Plazo', paragraphs: ['En daños físicos el año se cuenta desde la curación o determinación de secuelas. Presentada nueve meses después del alta, la reclamación está en principio dentro de plazo.'] },
        { heading: 'Instrucción', paragraphs: ['Debe incorporarse informe del servicio responsable, partes de mantenimiento, señalización, fotografías, testigos, informes médicos, evaluación económica y cualquier prueba sobre la mecánica de la caída.'] },
        { heading: 'Concurrencia', paragraphs: ['La distracción no elimina automáticamente la responsabilidad. Si se acredita una conducta de la víctima relevante, puede romper el nexo causal o reducir la indemnización según su intensidad. La resolución debe motivar causalidad, valoración, cuantía y forma de pago.'] }
      ],
      ['Comprueba daño, causalidad, antijuridicidad y fuerza mayor.', 'Cuenta el año desde curación o secuelas.', 'Pide informe del servicio.', 'No acepta una culpa genérica sin prueba.']
    ),
    caseItem(
      7,
      'Acceso a un expediente con datos de terceros',
      'Transparencia y protección de datos',
      [28],
      'alta',
      22,
      'Una persona solicita copia íntegra de un expediente de subvención provincial. El expediente contiene nombres, DNI, domicilios, firmas, cuentas bancarias y datos sobre discapacidad de varias personas beneficiarias. Parte de la información es relevante para controlar el uso de fondos públicos.',
      [
        'Diferencia información pública de datos personales.',
        'Explica cómo aplicar límites y acceso parcial.',
        'Indica qué datos requieren especial protección.',
        'Señala las actuaciones previas a resolver.'
      ],
      ['Ley 19/2013, arts. 12 a 22; Reglamento (UE) 2016/679; Ley Orgánica 3/2018'],
      [
        { heading: 'Objeto del acceso', paragraphs: ['La documentación en poder de la Diputación elaborada o adquirida en el ejercicio de sus funciones es información pública. Esto no supone entrega automática de todos los datos personales.'] },
        { heading: 'Ponderación', paragraphs: ['Debe ponderarse el interés público de control de subvenciones frente a los derechos de las personas. Cuando sea posible, se concederá acceso parcial suprimiendo o anonimizando datos no necesarios.'] },
        { heading: 'Datos especialmente sensibles', paragraphs: ['Los datos de discapacidad pertenecen a categorías especiales. DNI, domicilio, firma y cuenta bancaria suelen ser innecesarios para controlar el destino de fondos y deben ocultarse salvo base jurídica específica.'] },
        { heading: 'Tramitación', paragraphs: ['Si la información puede afectar a derechos de terceros identificados, se les concede trámite de alegaciones en los términos de la Ley de Transparencia. La resolución debe motivar límites, ponderación y acceso parcial y fijar la forma de entrega segura.'] }
      ],
      ['Identifica información pública.', 'Aplica minimización y anonimización.', 'Protege discapacidad y datos financieros.', 'Motiva la ponderación y el acceso parcial.']
    ),
    caseItem(
      8,
      'Contratación repetida de un servicio informático',
      'Contratación pública',
      [16],
      'alta',
      25,
      'Una unidad propone contratar durante todo el año soporte informático mediante cuatro facturas trimestrales de 9.000 euros, adjudicadas directamente al mismo proveedor. La necesidad es previsible, homogénea y se conoce al inicio del ejercicio.',
      [
        'Calcula el valor estimado de la necesidad anual.',
        'Analiza si cada factura puede tratarse aisladamente como contrato menor.',
        'Indica los principios y documentos esenciales que deben respetarse.',
        'Propón una forma de tramitación correcta sin afirmar un procedimiento concreto si faltan datos.'
      ],
      ['Ley 9/2017, arts. 1, 28, 99, 101, 116 y 118'],
      [
        { heading: 'Valor estimado', paragraphs: ['La necesidad anual asciende a 36.000 euros sin perjuicio de impuestos y demás elementos que deban integrar el valor estimado. Debe considerarse la unidad funcional y temporal de la prestación.'] },
        { heading: 'Fraccionamiento', paragraphs: ['No es correcto dividir artificialmente una necesidad previsible y homogénea para eludir publicidad o procedimiento. Aunque cada factura individual sea inferior al umbral de servicios menores, el objeto real debe valorarse globalmente.'] },
        { heading: 'Preparación', paragraphs: ['El expediente debe justificar necesidad, insuficiencia de medios cuando proceda, objeto, duración, valor estimado, crédito, criterios y ausencia de división fraudulenta. Deben respetarse libertad de acceso, publicidad, transparencia, igualdad e integridad.'] },
        { heading: 'Tramitación', paragraphs: ['Con los datos disponibles debe promoverse un procedimiento adecuado al valor estimado y características, posiblemente con lotes si son funcionalmente separables, sin elegir automáticamente un procedimiento hasta comprobar objeto, duración, prestaciones intelectuales, umbrales y normativa interna.'] }
      ],
      ['Suma la necesidad anual.', 'Detecta fraccionamiento artificial.', 'Justifica necesidad y valor estimado.', 'No adjudica directamente cuatro menores.']
    ),
    caseItem(
      9,
      'Presupuesto no aprobado al comenzar el ejercicio',
      'Presupuesto local',
      [13, 27],
      'media',
      18,
      'El 1 de enero no ha entrado en vigor el nuevo presupuesto provincial. El anterior incluía un crédito para un programa temporal que finalizó el 31 de diciembre y otro financiado con un ingreso específico que ya no se recibirá.',
      [
        'Indica qué ocurre con el presupuesto anterior.',
        'Explica qué créditos no deben prorrogarse.',
        'Señala cuándo cesa la prórroga.',
        'Resume los trámites de aprobación definitiva del nuevo presupuesto.'
      ],
      ['TRLRHL, arts. 162 a 171; Real Decreto 500/1990'],
      [
        { heading: 'Prórroga', paragraphs: ['El presupuesto anterior se prorroga automáticamente con sus créditos iniciales y los ajustes legalmente necesarios hasta que entre en vigor el nuevo.'] },
        { heading: 'Exclusiones', paragraphs: ['No se prorrogan créditos para servicios o programas que debían terminar en el ejercicio anterior ni los financiados con crédito u otros ingresos específicos afectados que no vayan a repetirse.'] },
        { heading: 'Cese', paragraphs: ['La prórroga es provisional y finaliza cuando se publica y entra en vigor el nuevo presupuesto. Deben ajustarse los créditos prorrogados para evitar duplicidad.'] },
        { heading: 'Aprobación', paragraphs: ['El Presidente forma el proyecto; Intervención informa; el Pleno aprueba inicialmente; se expone al público quince días; si no hay reclamaciones queda definitivamente aprobado y, si las hay, el Pleno las resuelve. Entra en vigor tras su publicación resumida por capítulos.'] }
      ],
      ['Aplica prórroga automática.', 'Excluye programa terminado e ingreso afectado desaparecido.', 'No considera definitiva la prórroga.', 'Incluye Pleno, exposición y publicación.']
    ),
    caseItem(
      10,
      'Deuda tributaria fuera de período voluntario',
      'Recaudación',
      [25, 26],
      'media',
      20,
      'Una liquidación tributaria se notifica el día 10 de marzo. El obligado no paga en período voluntario. Antes de recibir la providencia de apremio, abona íntegramente la deuda. En otro expediente idéntico, paga deuda y recargo dentro del plazo concedido tras la providencia.',
      [
        'Calcula el vencimiento ordinario del primer pago voluntario.',
        'Indica cuándo comienza el período ejecutivo.',
        'Determina el recargo del primer expediente.',
        'Determina el recargo del segundo expediente y su relación con intereses.'
      ],
      ['Ley 58/2003, arts. 28, 62, 161 y 167'],
      [
        { heading: 'Período voluntario', paragraphs: ['Al notificarse entre los días 1 y 15, el pago puede efectuarse hasta el día 20 del mes siguiente o inmediato hábil si fuera inhábil.'] },
        { heading: 'Período ejecutivo', paragraphs: ['Comienza al día siguiente de finalizar el período voluntario sin ingreso.'] },
        { heading: 'Pago anterior a la providencia', paragraphs: ['Si paga toda la deuda antes de notificarse la providencia, se aplica el recargo ejecutivo del 5 %. No se exigen los intereses de demora del período ejecutivo en los términos legales.'] },
        { heading: 'Pago tras la providencia', paragraphs: ['Si paga deuda y recargo dentro del plazo del artículo 62.5, se aplica el recargo de apremio reducido del 10 %. El recargo ordinario del 20 % se aplica cuando no concurren los requisitos anteriores y es compatible con intereses.'] }
      ],
      ['Aplica día 20 del mes siguiente.', 'Inicia ejecutiva al día siguiente.', 'Distingue 5 %, 10 % y 20 %.', 'No confunde plazos voluntarios y de apremio.']
    ),
    caseItem(
      11,
      'Transmisión urbana sin incremento de valor',
      'IIVTNU',
      [30],
      'alta',
      20,
      'Una persona vende un inmueble urbano por un valor inferior al acreditado en su adquisición. Presenta las escrituras de compra y venta y solicita que no se liquide el IIVTNU. El inmueble incluye terreno y construcción.',
      [
        'Determina si puede existir un supuesto de no sujeción.',
        'Indica qué debe declarar y aportar el interesado.',
        'Explica cómo se separa el valor del suelo.',
        'Aclara quién sería el sujeto pasivo si hubiera incremento.'
      ],
      ['TRLRHL, arts. 104 a 110'],
      [
        { heading: 'No sujeción', paragraphs: ['No hay sujeción cuando se acredita inexistencia de incremento de valor entre adquisición y transmisión conforme a la ley. No basta una mera afirmación: debe declararse la transmisión y aportarse documentación.'] },
        { heading: 'Valores', paragraphs: ['Se comparan los valores legalmente previstos, tomando en cada operación el mayor entre el consignado en el título y el comprobado por la Administración, sin añadir gastos o tributos.'] },
        { heading: 'Valor del terreno', paragraphs: ['Al existir suelo y construcción, se aplica a los valores totales la proporción que representa el valor catastral del terreno respecto del valor catastral total en la fecha de devengo.'] },
        { heading: 'Sujeto pasivo', paragraphs: ['En una transmisión onerosa, el contribuyente es quien transmite. Si fuera una persona física no residente, el adquirente actuaría como sustituto.'] }
      ],
      ['No liquida automáticamente.', 'Exige declaración y títulos.', 'Aplica proporción catastral del suelo.', 'Identifica al transmitente en operación onerosa.']
    ),
    caseItem(
      12,
      'Cambio de titularidad de un inmueble durante el año',
      'IBI e IAE',
      [29],
      'media',
      18,
      'Un inmueble se vende el 15 de abril. El recibo anual del IBI figura a nombre de quien era propietario el 1 de enero. El comprador sostiene que debe sustituirse inmediatamente el sujeto pasivo. En paralelo, una persona física inicia una actividad profesional y pregunta si debe pagar IAE.',
      [
        'Indica quién es sujeto pasivo del IBI del año de la venta.',
        'Explica el devengo y los efectos temporales del cambio.',
        'Aclara si puede repercutirse económicamente el impuesto entre las partes.',
        'Responde sobre la exención de IAE de la persona física.'
      ],
      ['TRLRHL, arts. 60 a 91'],
      [
        { heading: 'IBI', paragraphs: ['El impuesto se devenga el primer día del período impositivo, que coincide con el año natural. Es sujeto pasivo quien ostenta en ese momento el derecho que constituye el hecho imponible, respetando la prelación legal.'] },
        { heading: 'Cambio posterior', paragraphs: ['La transmisión de abril producirá los efectos catastrales y tributarios previstos para períodos posteriores; no sustituye retroactivamente al sujeto pasivo del 1 de enero.'] },
        { heading: 'Relaciones privadas', paragraphs: ['Las partes pueden pactar la distribución económica y el obligado puede repercutir conforme a Derecho común, pero esos pactos no cambian al obligado frente a la Administración.'] },
        { heading: 'IAE', paragraphs: ['Las personas físicas están exentas del IAE, aunque deben cumplir las obligaciones censales y demás deberes tributarios aplicables. La exención no significa que la actividad no exista o quede fuera de control fiscal.'] }
      ],
      ['Fija el devengo el 1 de enero.', 'No cambia retroactivamente el sujeto.', 'Distingue obligación pública y pacto privado.', 'Reconoce exención de IAE de persona física.']
    ),
    caseItem(
      13,
      'Acceso al empleo y pérdida de la condición funcionarial',
      'Empleo público',
      [17, 18],
      'media',
      20,
      'Una persona supera la oposición pero no presenta en plazo la documentación que acredita uno de los requisitos de acceso. Otra funcionaria de carrera presenta renuncia escrita, condicionada a conservar automáticamente su puesto durante dos años por si desea volver.',
      [
        'Enumera las fases para adquirir la condición de funcionario de carrera.',
        'Analiza el efecto de no acreditar los requisitos.',
        'Explica los requisitos y efectos de la renuncia.',
        'Aclara si la renuncia garantiza reserva automática del puesto.'
      ],
      ['TREBEP; Ley 4/2011 de Empleo Público de Castilla-La Mancha'],
      [
        { heading: 'Adquisición', paragraphs: ['La condición se adquiere sucesivamente mediante superación del proceso, nombramiento publicado, acatamiento de Constitución y ordenamiento cuando proceda y toma de posesión dentro del plazo.'] },
        { heading: 'Documentación', paragraphs: ['Quien no acredita los requisitos no puede ser nombrado o tomar posesión, sin perjuicio de la responsabilidad por falsedad y de las reglas de la convocatoria. Debe distinguirse un defecto subsanable de la inexistencia real del requisito.'] },
        { heading: 'Renuncia', paragraphs: ['La renuncia debe manifestarse por escrito y ser aceptada expresamente, salvo que exista expediente disciplinario o auto de procesamiento o apertura de juicio oral en los términos legales. No inhabilita para un nuevo ingreso.'] },
        { heading: 'Reserva', paragraphs: ['La renuncia extingue la relación de servicio y no crea una reserva automática del puesto. Para volver deberá participar en un nuevo proceso de acceso. La reserva corresponde, en su caso, a determinadas situaciones administrativas, no a la renuncia.'] }
      ],
      ['Enumera todas las fases de adquisición.', 'Distingue defecto documental de falta de requisito.', 'Exige aceptación de la renuncia.', 'Niega reserva automática.']
    ),
    caseItem(
      14,
      'Incumplimiento de deberes y expediente disciplinario',
      'Régimen disciplinario',
      [18, 19],
      'alta',
      22,
      'Un empleado público consulta reiteradamente expedientes sin relación con su trabajo y comunica información reservada a una persona externa. La jefatura propone sancionarlo inmediatamente, sin audiencia, alegando que los accesos constan en el sistema.',
      [
        'Identifica los deberes posiblemente vulnerados.',
        'Explica los principios del régimen disciplinario.',
        'Indica si puede imponerse sanción inmediata sin procedimiento.',
        'Señala las pruebas y garantías esenciales.'
      ],
      ['TREBEP; Ley 4/2011 de Empleo Público de Castilla-La Mancha; normativa de protección de datos'],
      [
        { heading: 'Deberes', paragraphs: ['Pueden estar afectados objetividad, integridad, confidencialidad, secreto, diligencia y uso de información exclusivamente para fines de servicio. La calificación de la falta exige encajar los hechos en el tipo legal vigente.'] },
        { heading: 'Principios', paragraphs: ['Rigen legalidad, tipicidad, irretroactividad desfavorable y retroactividad favorable, culpabilidad, proporcionalidad, presunción de inocencia y prohibición de doble sanción por los mismos hechos y fundamento.'] },
        { heading: 'Procedimiento', paragraphs: ['No puede imponerse una sanción grave o muy grave sin procedimiento, separación entre instrucción y resolución, formulación de cargos, acceso al expediente, audiencia, prueba y resolución motivada.'] },
        { heading: 'Prueba', paragraphs: ['Deben preservarse registros de acceso, trazabilidad, autorizaciones, contenido comunicado, testimonios y descargos. El mero dato técnico debe incorporarse con garantías de integridad y contradicción. Pueden adoptarse medidas provisionales motivadas si concurren requisitos.'] }
      ],
      ['Identifica confidencialidad y uso legítimo.', 'Aplica tipicidad y culpabilidad.', 'Exige audiencia y prueba.', 'No sanciona solo por sospecha.']
    ),
    caseItem(
      15,
      'Riesgo ergonómico y vigilancia de la salud',
      'Prevención e igualdad',
      [23, 24],
      'media',
      18,
      'Una auxiliar trabaja siete horas diarias con pantalla, silla sin regulación y reflejos intensos. Solicita evaluación del puesto y formación. La unidad responde que debe pagar ella misma un reposapiés y someterse obligatoriamente a un reconocimiento médico completo cuyos resultados se entregarán a la jefatura.',
      [
        'Indica las obligaciones preventivas de la Administración.',
        'Analiza quién soporta el coste de las medidas.',
        'Explica la regla sobre vigilancia de la salud y confidencialidad.',
        'Propón medidas correctoras del puesto.'
      ],
      ['Ley 31/1995, arts. 14 a 22; normativa sobre pantallas de visualización'],
      [
        { heading: 'Evaluación y planificación', paragraphs: ['La Administración debe evaluar los riesgos del puesto, planificar medidas, informar y formar. La prevención debe adaptarse a la persona y combatir los riesgos en su origen.'] },
        { heading: 'Coste', paragraphs: ['El coste preventivo no puede recaer sobre la trabajadora. Si el reposapiés u otro elemento resulta necesario tras la evaluación, debe proporcionarlo la organización.'] },
        { heading: 'Salud', paragraphs: ['La vigilancia es voluntaria como regla, salvo excepciones legales justificadas. Los datos clínicos son confidenciales; la jefatura solo debe recibir conclusiones sobre aptitud y medidas preventivas, no la historia médica completa.'] },
        { heading: 'Medidas', paragraphs: ['Deben revisarse silla, altura y distancia de pantalla, teclado y ratón, iluminación, reflejos, pausas o cambios de actividad, organización del trabajo, formación y, si procede, accesorios ergonómicos.'] }
      ],
      ['Exige evaluación y formación.', 'Coste cero para la empleada.', 'Respeta voluntariedad y confidencialidad.', 'Propone medidas técnicas y organizativas.']
    ),
    caseItem(
      16,
      'Certificado caducado en una sede electrónica',
      'Firma electrónica',
      [9, 31],
      'media',
      16,
      'Una persona intenta interponer electrónicamente un recurso el último día de plazo. La aplicación de firma indica que el certificado está caducado. El documento está preparado, pero no se genera asiento registral ni justificante. La persona envía una captura de pantalla por correo electrónico ordinario.',
      [
        'Explica si el correo ordinario equivale a presentación registral.',
        'Indica qué debe comprobarse sobre el certificado y el sistema.',
        'Propón alternativas de presentación dentro de plazo.',
        'Señala qué pruebas deben conservarse si existió una incidencia técnica de la sede.'
      ],
      ['Ley 39/2015, arts. 9 a 12, 16 y 32; Ley 6/2020; Reglamento eIDAS'],
      [
        { heading: 'Presentación', paragraphs: ['El correo ordinario no sustituye al Registro Electrónico General ni genera por sí solo un asiento válido. La ausencia de justificante exige comprobar si hubo realmente presentación.'] },
        { heading: 'Certificado', paragraphs: ['Debe verificarse vigencia, revocación o suspensión, identidad, cadena de confianza, fecha y hora del equipo, aplicación de firma, navegador y compatibilidad. Un certificado caducado no permite una firma válida basada en él.'] },
        { heading: 'Alternativas', paragraphs: ['Puede utilizar otro certificado válido, DNI electrónico, sistema de identificación y firma admitido, representación acreditada o cualquiera de los registros y oficinas previstos en el artículo 16.4, teniendo en cuenta si el interesado está obligado a relacionarse electrónicamente.'] },
        { heading: 'Incidencia', paragraphs: ['Deben conservarse captura completa, fecha y hora, mensaje, URL, identificador de incidencia y respuesta del soporte. Si la Administración reconoce una incidencia técnica, puede ampliar plazos no vencidos o publicar la medida procedente, pero la captura aislada no garantiza automáticamente la admisión.'] }
      ],
      ['No valida el correo como registro.', 'Comprueba caducidad y revocación.', 'Busca una vía legal alternativa.', 'Distingue fallo propio de incidencia de sede.']
    ),
    caseItem(
      17,
      'Digitalización y registro de veinte documentos',
      'Impresión, escaneado y archivo',
      [11, 34, 40],
      'media',
      20,
      'Una unidad recibe veinte documentos en papel, algunos a doble cara, con sellos, firmas y anexos. Deben incorporarse a un expediente electrónico y remitirse a otra unidad. El alimentador automático omite una cara y el OCR confunde varios números de expediente.',
      [
        'Diseña el flujo correcto de digitalización.',
        'Indica qué configuraciones deben revisarse.',
        'Explica el papel del OCR y sus límites.',
        'Enumera los controles antes de registrar y remitir.'
      ],
      ['Ley 39/2015, arts. 16, 26, 27 y 70; funciones de escaneado y OCR'],
      [
        { heading: 'Preparación', paragraphs: ['Ordenar originales, retirar grapas, identificar anversos y reversos, decidir cristal o alimentador y proteger documentos delicados. Debe comprobarse si se requiere copia auténtica y quién está habilitado para generarla.'] },
        { heading: 'Configuración', paragraphs: ['Seleccionar tamaño, color o escala de grises, resolución suficiente, doble cara, orientación, formato PDF y destino seguro. Realizar una prueba antes del lote.'] },
        { heading: 'OCR', paragraphs: ['El OCR facilita búsqueda y reutilización, pero no sustituye la imagen del documento ni garantiza exactitud. Los números de expediente, DNI, importes y fechas deben revisarse manualmente.'] },
        { heading: 'Control', paragraphs: ['Comprobar número y orden de páginas, caras, legibilidad, integridad, firmas, sellos, anexos, nombre, metadatos, tamaño, ausencia de páginas ajenas y asociación al expediente correcto. Después se registra o incorpora y se remite con trazabilidad.'] }
      ],
      ['Comprueba doble cara.', 'No confía ciegamente en OCR.', 'Verifica integridad y expediente.', 'Distingue digitalización de copia auténtica.']
    ),
    caseItem(
      18,
      'Oficio masivo con Writer y datos personales',
      'LibreOffice Writer',
      [28, 35],
      'media',
      22,
      'Debe enviarse un oficio personalizado a 250 personas. Los datos están en una hoja con nombre, domicilio, número de expediente y resultado. Se propone copiar y pegar manualmente cada registro y guardar todos los oficios en un único PDF visible para todos los destinatarios.',
      [
        'Propón un procedimiento mediante combinación de correspondencia.',
        'Indica cómo estructurar la plantilla.',
        'Explica los controles de protección de datos.',
        'Señala qué revisar antes de firmar, registrar y enviar.'
      ],
      ['LibreOffice Writer; RGPD; Ley Orgánica 3/2018'],
      [
        { heading: 'Fuente y plantilla', paragraphs: ['Depurar la fuente de datos, usar encabezados claros y crear en Writer una plantilla con estilos y campos de combinación para nombre, domicilio, expediente y resultado. Aplicar filtros si existen grupos distintos.'] },
        { heading: 'Generación', paragraphs: ['Previsualizar registros, comprobar formato de fechas y números y generar documentos individualizados o un lote controlado. La combinación reduce errores frente al copiado manual, pero no elimina la obligación de revisión.'] },
        { heading: 'Protección de datos', paragraphs: ['Cada destinatario debe recibir solo su documento. No debe enviarse un PDF conjunto que revele datos de terceros. Los archivos temporales y la fuente deben almacenarse en ubicación segura y eliminarse conforme a la política de conservación.'] },
        { heading: 'Control final', paragraphs: ['Revisar que cada oficio coincide con su destinatario, expediente y resultado; comprobar saltos, firmas, pie de recursos, metadatos, nombre de archivo, formato PDF y canal de notificación.'] }
      ],
      ['Usa combinación, no copiado manual.', 'Documento individual por destinatario.', 'Revisa campos y registros.', 'Evita divulgar datos cruzados.']
    ),
    caseItem(
      19,
      'Ordenación y cálculo de una relación de contribuyentes',
      'LibreOffice Calc',
      [25, 29, 30, 36],
      'media',
      22,
      'Una hoja Calc contiene 3.000 registros con identificador, municipio, base, tipo, cuota, estado y fecha. Un empleado ordena únicamente la columna “cuota” y los importes dejan de corresponder con cada persona. Además, varias fórmulas usan referencias relativas donde debía mantenerse fijo el tipo.',
      [
        'Explica cómo recuperar o detectar el daño.',
        'Describe una ordenación segura.',
        'Corrige la referencia del tipo fijo.',
        'Propón filtros, validaciones y controles antes de exportar.'
      ],
      ['LibreOffice Calc; principios de exactitud y seguridad de datos'],
      [
        { heading: 'Incidencia', paragraphs: ['Si la operación sigue abierta puede intentarse deshacer. Si el archivo se guardó, debe compararse con copia, versión anterior o fuente original; ordenar de nuevo no reconstruye por sí solo la correspondencia perdida.'] },
        { heading: 'Ordenación', paragraphs: ['Seleccionar todo el rango o convertirlo en un bloque claramente delimitado, indicar que existen encabezados y ordenar por uno o varios campos manteniendo unidas las filas.'] },
        { heading: 'Fórmula', paragraphs: ['Si el tipo está en una celda fija, debe usarse referencia absoluta, por ejemplo $H$1. Las referencias relativas cambian al copiar y pueden alterar las cuotas.'] },
        { heading: 'Controles', paragraphs: ['Aplicar filtros sin eliminar filas, validación para estados y municipios, formato numérico coherente, detección de duplicados y vacíos, totales de control, muestreo y comparación con la fuente antes de exportar. Debe protegerse el archivo y limitar accesos.'] }
      ],
      ['Selecciona todo el rango.', 'No promete reconstruir sin copia.', 'Usa referencia absoluta.', 'Incluye totales y muestreo.']
    ),
    caseItem(
      20,
      'Base de datos, informe y presentación del servicio',
      'Base, Impress y hardware',
      [37, 38, 39, 40],
      'alta',
      30,
      'Una unidad debe gestionar incidencias de municipios y presentar resultados trimestrales. Se propone una única tabla con datos del municipio repetidos en cada incidencia, un informe manual en Writer y una presentación con cifras copiadas a mano. El equipo de exposición no detecta el proyector mediante USB-C.',
      [
        'Diseña una estructura mínima de datos en Base.',
        'Indica consultas, formulario e informe necesarios.',
        'Explica cómo preparar la presentación en Impress.',
        'Analiza la conexión del proyector y las comprobaciones de hardware.'
      ],
      ['LibreOffice Base e Impress; fundamentos de hardware y periféricos'],
      [
        { heading: 'Modelo de datos', paragraphs: ['Crear una tabla Municipios con clave primaria y datos no repetidos, una tabla Incidencias con su clave y clave ajena de municipio y, si procede, tablas de estados, categorías o técnicos. La relación habitual será uno a muchos.'] },
        { heading: 'Operación', paragraphs: ['Usar un formulario principal de municipio con subformulario de incidencias o un formulario específico de incidencias. Crear consultas por período, municipio, categoría y estado; generar informes agrupados con totales y pendientes.'] },
        { heading: 'Presentación', paragraphs: ['Vincular el contenido a datos validados, utilizar diapositiva maestra, gráficos legibles, poco texto, notas y una diapositiva final de conclusiones. Revisar que las cifras coinciden con el informe y evitar copiar manualmente sin control.'] },
        { heading: 'Proyector', paragraphs: ['USB-C es un conector y no garantiza salida de vídeo. Debe comprobarse que el puerto admite DisplayPort Alt Mode o Thunderbolt, que el adaptador y cable son compatibles, que se ha seleccionado la entrada correcta y el modo de pantalla adecuado y que existen controladores y alimentación suficientes. Preparar HDMI u otra alternativa.'] }
      ],
      ['Normaliza municipio e incidencias.', 'Usa clave ajena y consultas.', 'Genera informe desde datos validados.', 'No supone que todo USB-C transmite vídeo.', 'Prepara alternativa de conexión.']
    )
  ];

  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Sustituidos los supuestos genéricos por 20 casos prácticos completos',
      'Cada supuesto incorpora tareas, base normativa, solución por fases y lista de autocorrección',
      'Cobertura transversal de procedimiento, régimen local, empleo, tributación, contratación, datos y ofimática',
      'Tema 22 excluido hasta disponer de fuentes internas oficiales'
    ]
  });

  window.OPOWEB_DIPUTACION_V51 = {
    version: `v${VERSION}`,
    practicalCases: ope.practicalCases.length,
    detailedSolutions: true,
    excludedPendingThemes: [22],
    coveredThemes: [...new Set(ope.practicalCases.flatMap(item => item.themes))].sort((a, b) => a - b)
  };
})();