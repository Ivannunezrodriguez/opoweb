(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.46.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    23: {
      source: 'Ley 31/1995, arts. 14 a 39',
      blocks: [
        ['Derecho a la protección y principios preventivos', [
          'El artículo 14 reconoce el derecho a una protección eficaz y el correlativo deber de la Administración respecto de su personal. El coste de las medidas preventivas nunca puede recaer sobre las personas trabajadoras.',
          'El artículo 15 obliga a evitar riesgos, evaluar los inevitables, combatirlos en su origen, adaptar el trabajo a la persona, tener en cuenta la evolución técnica, sustituir lo peligroso, planificar la prevención, priorizar la protección colectiva y dar instrucciones adecuadas.',
          'La prevención debe integrarse en la gestión mediante plan, evaluación de riesgos y planificación de la actividad preventiva.'
        ]],
        ['Información, formación y emergencias', [
          'El personal debe recibir información sobre riesgos generales y específicos, medidas aplicables y actuaciones de emergencia. La formación preventiva ha de ser teórica y práctica, suficiente, adecuada, centrada en el puesto y actualizada.',
          'La formación se imparte, siempre que sea posible, dentro de la jornada o descontando el tiempo invertido, y su coste no recae sobre el trabajador.',
          'La organización debe analizar posibles emergencias y adoptar medidas de primeros auxilios, lucha contra incendios y evacuación, designando personal formado y comprobando periódicamente su funcionamiento.'
        ]],
        ['Riesgo grave e inminente y vigilancia de la salud', [
          'Ante riesgo grave e inminente, el trabajador puede interrumpir la actividad y abandonar el lugar si resulta necesario. No puede sufrir perjuicio salvo mala fe o negligencia grave.',
          'La vigilancia de la salud es, como regla, voluntaria y requiere consentimiento. Excepcionalmente puede imponerse cuando sea imprescindible para evaluar efectos, verificar si el estado de salud representa peligro o cuando una norma lo establezca para riesgos específicos.',
          'Los resultados médicos son confidenciales. El empleador solo recibe conclusiones sobre aptitud y necesidad de medidas preventivas.'
        ]],
        ['Organización preventiva', [
          'La prevención puede organizarse mediante asunción personal en supuestos legales, designación de trabajadores, servicio de prevención propio o servicio ajeno.',
          'El servicio de prevención es el conjunto de medios humanos y materiales necesarios para realizar actividades preventivas y asesorar a organización, trabajadores y representantes.',
          'La modalidad elegida debe ser suficiente para el tamaño, actividad y riesgos; la contratación de un servicio ajeno no elimina la responsabilidad del empleador.'
        ]],
        ['Consulta y participación', [
          'El empleador debe consultar con antelación decisiones sobre planificación, organización del trabajo, nuevas tecnologías, organización preventiva, designación de emergencias, información y formación.',
          'Los Delegados de Prevención son representantes con funciones específicas. El Comité de Seguridad y Salud es órgano paritario y colegiado de consulta regular y periódica.',
          'El Comité se constituye en centros con 50 o más trabajadores, se integra por Delegados de Prevención y representantes del empleador en igual número y se reúne trimestralmente y cuando lo solicite alguna representación.'
        ]]
      ],
      hot: ['Protección eficaz y coste nunca al trabajador.', 'Prioridad de protección colectiva.', 'Formación suficiente, práctica y actualizada.', 'Riesgo grave: interrupción y abandono.', 'Vigilancia de salud voluntaria salvo excepciones.', 'Servicio ajeno no elimina responsabilidad.', 'Comité desde 50 trabajadores.', 'Comité paritario y reunión trimestral.'],
      recall: ['¿Cuáles son los principios generales de acción preventiva?', '¿Cuándo puede imponerse vigilancia de la salud?', '¿Cómo se componen y cuándo se reúnen los Comités de Seguridad y Salud?']
    },
    24: {
      source: 'Ley Orgánica 3/2007; Ley 12/2010 de Castilla-La Mancha',
      blocks: [
        ['Igualdad y discriminación', [
          'El principio de igualdad de trato supone ausencia de discriminación directa o indirecta por razón de sexo. Existe discriminación directa cuando una persona recibe trato menos favorable en situación comparable; la indirecta surge cuando una disposición o práctica aparentemente neutra ocasiona desventaja particular, salvo justificación objetiva, legítima y proporcionada.',
          'El embarazo y la maternidad constituyen causas protegidas. Todo trato desfavorable relacionado con ellas es discriminación directa.',
          'Las medidas de acción positiva son legítimas cuando pretenden corregir desigualdades de hecho y resultan razonables y proporcionadas.'
        ]],
        ['Acoso y tutela', [
          'Acoso sexual es cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad, especialmente si crea un entorno intimidatorio, degradante u ofensivo.',
          'Acoso por razón de sexo es cualquier comportamiento basado en el sexo que persiga o produzca ese mismo efecto. Ambos se consideran discriminatorios.',
          'La persona que formula una queja o participa en un procedimiento no puede sufrir represalias. La tutela incluye cese, reparación e indemnización conforme al ordenamiento.'
        ]],
        ['Transversalidad y representación equilibrada', [
          'La igualdad debe integrarse de forma transversal en políticas, normas, presupuestos, estadísticas, lenguaje administrativo y decisiones públicas.',
          'La Ley 12/2010 define participación equilibrada como una presencia en la que cada sexo no supera el 60 % ni baja del 40 %.',
          'Las Administraciones castellano-manchegas deben incorporar perspectiva de género, lenguaje no sexista y especial atención a mujeres en situación de vulnerabilidad.'
        ]],
        ['Igualdad en el empleo público', [
          'Las Administraciones públicas de Castilla-La Mancha deben impulsar igualdad efectiva en acceso, promoción, retribución, formación, carrera y conciliación.',
          'La negociación colectiva debe promover medidas de igualdad retributiva, participación equilibrada y conciliación. Los planes de igualdad deben incluir acceso, promoción, formación, retribuciones, conciliación, prevención del acoso, seguimiento y evaluación.',
          'Las convocatorias y órganos de selección deben respetar igualdad y ausencia de sesgos, sin rebajar mérito y capacidad.'
        ]],
        ['Prevención del acoso y discriminación retributiva', [
          'Las Administraciones deben promover entornos laborales libres de acoso, medidas preventivas, información, formación especializada y protocolos.',
          'Deben garantizar asesoramiento especializado a víctimas en los términos legales y tratar el acoso como cuestión relacionada con la salud laboral.',
          'La igualdad retributiva exige igual retribución por trabajos de igual valor, evitando diferencias no justificadas por factores objetivos.'
        ]]
      ],
      hot: ['Directa: trato menos favorable.', 'Indirecta: regla neutra con desventaja particular.', 'Embarazo y maternidad: discriminación directa.', 'Acoso sexual y por razón de sexo son discriminatorios.', 'Participación equilibrada: 40/60.', 'Transversalidad en todas las políticas.', 'Igualdad en acceso, promoción y retribución.', 'Prohibición de represalias.'],
      recall: ['¿Cómo diferencias discriminación directa e indirecta?', '¿Qué significa participación equilibrada?', '¿Qué contenidos mínimos debe abordar un plan de igualdad público?']
    },
    25: {
      source: 'Ley 58/2003, arts. 17 a 73 y 117 a 159; TRLRHL, arts. 2 y 6 a 14',
      blocks: [
        ['Relación y obligación tributaria', [
          'La relación jurídico-tributaria comprende derechos, obligaciones, deberes y potestades derivados de la aplicación de los tributos. La obligación principal tiene por objeto pagar la cuota.',
          'El hecho imponible es el presupuesto fijado por ley cuya realización origina la obligación principal. El devengo determina cuándo se entiende realizado y nace la obligación, aunque la exigibilidad pueda fijarse en otro momento.',
          'Exención significa que, pese a realizarse el hecho imponible, la ley dispensa del pago. No debe confundirse con no sujeción, donde el hecho no queda incluido en el presupuesto gravado.'
        ]],
        ['Sujetos y elementos cuantitativos', [
          'Son obligados tributarios, entre otros, contribuyentes, sustitutos, retenedores, obligados a ingresar a cuenta, repercutidores, sucesores y responsables.',
          'La base imponible cuantifica el hecho imponible y puede determinarse por estimación directa, objetiva o indirecta. La base liquidable resulta de aplicar reducciones legales a la imponible.',
          'La cuota se obtiene aplicando tipo o cantidad fija. La deuda tributaria puede incorporar cuota, pagos a cuenta, intereses y recargos, pero las sanciones no forman parte de ella.'
        ]],
        ['Extinción y prescripción', [
          'Las deudas se extinguen por pago, prescripción, compensación, condonación y demás medios legales. La prescripción tributaria general es de cuatro años.',
          'La compensación puede producirse a instancia del obligado o de oficio en los supuestos legales. La condonación exige ley.',
          'El pago puede realizarse por los medios autorizados y por tercero, sin que el tercero adquiera por ello los derechos del obligado salvo previsión legal.'
        ]],
        ['Tributos locales, delegación y beneficios', [
          'Los recursos locales incluyen tributos propios —tasas, contribuciones especiales e impuestos—, participaciones, subvenciones, precios públicos, patrimonio, crédito, multas y otros ingresos previstos legalmente.',
          'Las entidades locales pueden delegar competencias de gestión, liquidación, inspección y recaudación en la comunidad autónoma u otras entidades locales conforme a la ley. También existe deber de colaboración interadministrativa.',
          'Los beneficios fiscales locales solo pueden reconocerse cuando una ley o tratado los establezca o cuando la ley autorice su concreción por ordenanza. Las leyes que los establezcan deben prever compensación cuando proceda.'
        ]],
        ['Gestión y revisión tributaria', [
          'La gestión comprende recepción y tramitación de declaraciones y autoliquidaciones, devoluciones, comprobación de datos y valores, comprobación limitada, liquidaciones y otras funciones del artículo 117 de la LGT.',
          'La revisión incluye procedimientos especiales, recurso de reposición y reclamaciones económico-administrativas en el ámbito general. En tributos locales resulta esencial el recurso de reposición regulado en el artículo 14 del TRLRHL.',
          'El recurso local de reposición se interpone, como regla, en un mes frente a actos de aplicación y efectividad de tributos e ingresos de derecho público, antes de acudir a la vía contencioso-administrativa cuando sea preceptivo.'
        ]]
      ],
      hot: ['Hecho imponible origina obligación; devengo fija momento.', 'Exención no equivale a no sujeción.', 'Base imponible, liquidable, tipo y cuota.', 'Sanciones fuera de la deuda tributaria.', 'Prescripción general: 4 años.', 'Beneficio fiscal local necesita cobertura legal.', 'Gestión no equivale a recaudación.', 'Reposición local: plazo general de un mes.'],
      recall: ['¿Qué diferencia existe entre hecho imponible, devengo y exigibilidad?', '¿Qué integra la deuda tributaria y qué queda fuera?', '¿Qué procedimientos forman parte de gestión y cuáles de revisión?']
    },
    26: {
      source: 'Ley 58/2003, arts. 60 a 65 y 160 a 177; Reglamento General de Recaudación',
      blocks: [
        ['Período voluntario y ejecutivo', [
          'La recaudación consiste en el ejercicio de funciones administrativas para cobrar deudas. Se realiza en período voluntario o ejecutivo.',
          'En liquidaciones notificadas entre los días 1 y 15, el pago voluntario llega hasta el día 20 del mes siguiente; si se notifican entre el 16 y último día, hasta el día 5 del segundo mes posterior, trasladándose al hábil siguiente cuando corresponda.',
          'En deudas periódicas colectivas, el plazo se fija en la normativa reguladora y no puede ser inferior a dos meses. En autoliquidaciones rige el plazo propio de cada tributo.'
        ]],
        ['Inicio del período ejecutivo y recargos', [
          'El período ejecutivo comienza al día siguiente de terminar el voluntario. En autoliquidaciones presentadas sin ingreso, comienza al día siguiente del vencimiento o, si se presentan después, al día siguiente de la presentación.',
          'El recargo ejecutivo es del 5 % si se paga antes de notificarse la providencia de apremio. El recargo de apremio reducido es del 10 % si se paga deuda y recargo dentro del plazo concedido tras la providencia.',
          'El recargo ordinario es del 20 % y es compatible con intereses de demora. Los recargos del 5 % y 10 % no lo son en los términos legales.'
        ]],
        ['Aplazamiento, fraccionamiento y compensación', [
          'Las deudas pueden aplazarse o fraccionarse cuando la situación económico-financiera impida transitoriamente el pago, salvo deudas legalmente inaplazables.',
          'La solicitud en período voluntario impide iniciar la vía ejecutiva mientras se tramita, sin excluir intereses ni garantías cuando procedan. La presentada en ejecutivo no paraliza automáticamente el procedimiento.',
          'Las deudas pueden extinguirse por compensación con créditos reconocidos por la Administración, a solicitud o de oficio según el momento y supuesto.'
        ]],
        ['Procedimiento de apremio', [
          'La providencia de apremio identifica deuda, liquida recargo y requiere el pago; tiene fuerza ejecutiva suficiente para proceder contra bienes y derechos.',
          'La oposición está limitada a motivos tasados: extinción o prescripción, solicitud presentada en voluntaria que suspenda, falta de notificación de la liquidación, anulación, o error u omisión que impida identificar deudor o deuda.',
          'Si no se paga, se embargan bienes respetando proporcionalidad, eficacia y el orden legal, evitando los inembargables.'
        ]],
        ['Devolución de ingresos y revisión', [
          'La devolución de ingresos indebidos procede, entre otros casos, por duplicidad, pago superior, ingreso de deuda prescrita o cuando lo establezca la normativa.',
          'La recaudación ejecutiva no impide revisar el acto por los cauces legales, pero los recursos no suspenden automáticamente salvo garantía o supuesto previsto.',
          'En el ámbito local deben coordinarse LGT, TRLRHL, Reglamento General de Recaudación y ordenanzas fiscales.'
        ]]
      ],
      hot: ['Notificación 1-15: hasta día 20 siguiente.', 'Notificación 16-fin: hasta día 5 del segundo mes.', 'Período ejecutivo: día siguiente al fin del voluntario.', 'Recargos: 5 %, 10 % y 20 %.', 'Solicitud en voluntaria impide iniciar apremio mientras se tramita.', 'Providencia de apremio: título ejecutivo.', 'Motivos de oposición tasados.', 'Recurso no suspende por regla general.'],
      recall: ['¿Cómo se calculan los plazos del artículo 62.2?', '¿Cuándo se aplica cada recargo ejecutivo?', '¿Qué motivos permiten oponerse a la providencia de apremio?']
    },
    27: {
      source: 'TRLRHL, arts. 162 a 171; Real Decreto 500/1990',
      blocks: [
        ['Concepto y ejercicio presupuestario', [
          'El presupuesto general es la expresión cifrada, conjunta y sistemática de obligaciones que como máximo pueden reconocerse y derechos que se prevé liquidar durante el ejercicio.',
          'El ejercicio presupuestario coincide con el año natural y a él se imputan derechos liquidados y obligaciones reconocidas correspondientes.',
          'El presupuesto debe aprobarse sin déficit inicial y respetar estabilidad presupuestaria, sostenibilidad financiera y reglas aplicables.'
        ]],
        ['Integración y contenido', [
          'El presupuesto general integra el de la entidad local, los de sus organismos autónomos y los estados de previsión de sociedades mercantiles íntegramente dependientes.',
          'Cada presupuesto contiene estado de gastos, estado de ingresos y bases de ejecución. Las bases adaptan las normas generales a la organización propia sin modificar leyes ni procedimientos administrativos.',
          'Se acompañan memoria, liquidación anterior y avance de la corriente, anexo de personal, inversiones, beneficios fiscales y convenios sociales, estado de deuda e informes exigibles.'
        ]],
        ['Elaboración y aprobación', [
          'El Presidente forma el presupuesto y lo remite al Pleno antes del 15 de octubre, informado por Intervención y con anexos y documentación.',
          'Aprobado inicialmente por el Pleno, se expone al público durante quince días. Si no se presentan reclamaciones queda definitivamente aprobado; si las hay, el Pleno dispone de un mes para resolverlas.',
          'La aprobación definitiva debe producirse antes del 31 de diciembre y el presupuesto entra en vigor tras publicarse resumido por capítulos.'
        ]],
        ['Reclamaciones y control', [
          'Pueden reclamar los habitantes, interesados directos y corporaciones, asociaciones y sindicatos en los supuestos legales.',
          'Las reclamaciones se limitan a motivos tasados: defectos de elaboración o aprobación, omisión de crédito necesario para obligaciones exigibles y manifiesta insuficiencia de ingresos respecto de gastos o necesidades.',
          'Contra la aprobación definitiva cabe recurso contencioso-administrativo. La interposición no suspende por sí sola la ejecución.'
        ]],
        ['Prórroga presupuestaria', [
          'Si al comenzar el ejercicio no ha entrado en vigor el nuevo presupuesto, se considera automáticamente prorrogado el anterior con sus créditos iniciales y ajustes legales.',
          'No se prorrogan créditos destinados a servicios o programas que debían terminar ni los financiados con operaciones de crédito u otros ingresos específicos exclusivamente afectados.',
          'La prórroga es provisional: cesa cuando entra en vigor el nuevo presupuesto y debe ajustarse para evitar duplicidades o créditos sin cobertura.'
        ]]
      ],
      hot: ['Presupuesto = máximo de obligaciones y previsión de derechos.', 'Ejercicio: año natural.', 'Integración: entidad, organismos y sociedades íntegramente locales.', 'Bases no pueden modificar leyes.', 'Remisión al Pleno antes del 15 de octubre.', 'Exposición pública: 15 días.', 'Resolución de reclamaciones: 1 mes.', 'Prórroga automática con exclusiones.'],
      recall: ['¿Qué entidades integran el presupuesto general?', '¿Qué pasos siguen elaboración, aprobación y publicación?', '¿Qué créditos quedan fuera de la prórroga?']
    }
  };

  const rawQuestions = {
    23: [
      ['¿Quién soporta el coste de las medidas preventivas?', 'El empleador o Administración, nunca el trabajador.', ['El trabajador en todo caso.', 'La mutua exclusivamente.', 'El delegado de prevención.'], 'Artículo 14.5 de la Ley 31/1995.'],
      ['¿Qué medida tiene prioridad?', 'La protección colectiva sobre la individual.', ['La individual siempre.', 'La sanción sobre la prevención.', 'La reparación sobre la evaluación.'], 'Artículo 15 de la Ley 31/1995.'],
      ['¿Qué integra la actividad preventiva?', 'Plan, evaluación de riesgos y planificación preventiva.', ['Solo reconocimientos médicos.', 'Solo formación inicial.', 'Solo compra de EPIs.'], 'Artículo 16 de la Ley 31/1995.'],
      ['¿Cómo debe ser la formación preventiva?', 'Teórica y práctica, suficiente, adecuada y actualizada.', ['Solo teórica.', 'Voluntaria y pagada por el trabajador.', 'Idéntica para cualquier puesto.'], 'Artículo 19 de la Ley 31/1995.'],
      ['¿Puede abandonar el puesto ante riesgo grave e inminente?', 'Sí, cuando sea necesario para protegerse.', ['No, nunca.', 'Solo con sentencia.', 'Solo tras sanción.'], 'Artículo 21 de la Ley 31/1995.'],
      ['¿Cuál es la regla sobre vigilancia de la salud?', 'Es voluntaria, salvo excepciones legales.', ['Siempre obligatoria.', 'Siempre prohibida.', 'Solo para interinos.'], 'Artículo 22 de la Ley 31/1995.'],
      ['¿Qué recibe el empleador del reconocimiento médico?', 'Conclusiones sobre aptitud y medidas, no datos clínicos completos.', ['Toda la historia clínica.', 'Solo el diagnóstico privado.', 'Nada en ningún caso.'], 'Artículo 22 de la Ley 31/1995.'],
      ['¿El servicio de prevención ajeno elimina la responsabilidad del empleador?', 'No.', ['Sí, totalmente.', 'Solo en Administraciones.', 'Solo si hay comité.'], 'Ley 31/1995.'],
      ['¿Cuándo se constituye Comité de Seguridad y Salud?', 'Con 50 o más trabajadores.', ['Con 10 o más.', 'Solo con 500.', 'En todo centro sin mínimo.'], 'Artículo 38.2 de la Ley 31/1995.'],
      ['¿Cómo es el Comité de Seguridad y Salud?', 'Paritario y colegiado.', ['Unipersonal.', 'Solo sindical.', 'Solo empresarial.'], 'Artículo 38.1 de la Ley 31/1995.'],
      ['¿Con qué frecuencia ordinaria se reúne?', 'Trimestralmente.', ['Mensualmente por ley.', 'Una vez al año.', 'Cada cuatro años.'], 'Artículo 38.3 de la Ley 31/1995.'],
      ['¿Quién designa a los Delegados de Prevención?', 'Se eligen por y entre representantes del personal.', ['El empresario libremente.', 'La Inspección.', 'Los usuarios del servicio.'], 'Artículo 35 de la Ley 31/1995.'],
      ['¿Debe consultarse la introducción de nuevas tecnologías?', 'Sí, por su incidencia preventiva.', ['No.', 'Solo después de implantarlas.', 'Solo si lo pide un proveedor.'], 'Artículo 33 de la Ley 31/1995.'],
      ['¿Qué debe prever el plan de emergencias?', 'Primeros auxilios, incendios y evacuación.', ['Solo sanciones.', 'Solo seguros.', 'Únicamente teletrabajo.'], 'Artículo 20 de la Ley 31/1995.'],
      ['¿Puede perjudicarse a quien interrumpe actividad por riesgo grave?', 'No, salvo mala fe o negligencia grave.', ['Sí, siempre.', 'Solo si es funcionario.', 'Sí, sin excepción.'], 'Artículo 21.4 de la Ley 31/1995.']
    ],
    24: [
      ['¿Qué es discriminación directa?', 'Trato menos favorable por razón de sexo en situación comparable.', ['Toda diferencia estadística.', 'Una norma neutra siempre.', 'Solo una infracción salarial.'], 'Artículo 6 de la Ley Orgánica 3/2007.'],
      ['¿Qué caracteriza la discriminación indirecta?', 'Una regla aparentemente neutra que causa desventaja particular injustificada.', ['Un insulto explícito únicamente.', 'Cualquier medida positiva.', 'Toda diferencia biológica.'], 'Artículo 6 de la Ley Orgánica 3/2007.'],
      ['¿Cómo se califica un trato desfavorable por embarazo?', 'Discriminación directa por razón de sexo.', ['Discriminación indirecta siempre.', 'Medida neutral.', 'Acción positiva.'], 'Artículo 8 de la Ley Orgánica 3/2007.'],
      ['¿Son discriminatorios el acoso sexual y el acoso por razón de sexo?', 'Sí.', ['No.', 'Solo si existe condena penal.', 'Solo en empresas privadas.'], 'Artículo 7 de la Ley Orgánica 3/2007 y artículo 53 de la Ley 12/2010.'],
      ['¿Qué porcentaje define participación equilibrada?', 'Cada sexo entre el 40 % y el 60 %.', ['Exactamente 50 % siempre.', 'Entre 20 % y 80 %.', 'Sin límite mínimo.'], 'Artículo 5.2 de la Ley 12/2010.'],
      ['¿Qué significa transversalidad de género?', 'Integrar igualdad en todas las políticas y actuaciones.', ['Crear un departamento aislado.', 'Aplicarla solo en selección.', 'Limitarla a subvenciones.'], 'Artículo 8 de la Ley 12/2010.'],
      ['¿Afecta la Ley 12/2010 a las entidades locales de Castilla-La Mancha?', 'Sí, en los términos de la ley.', ['No.', 'Solo a la Junta.', 'Solo a universidades.'], 'Artículo 3 de la Ley 12/2010.'],
      ['¿Qué debe promoverse en empleo público?', 'Igualdad en acceso, promoción, retribución y conciliación.', ['Preferencia automática sin mérito.', 'Exclusión de hombres.', 'Solo igualdad salarial.'], 'Artículo 40 de la Ley 12/2010.'],
      ['¿Puede una acción positiva ser legal?', 'Sí, si corrige desigualdad y es razonable y proporcionada.', ['No, nunca.', 'Solo por contrato privado.', 'Solo sin límite temporal.'], 'Artículo 11 de la Ley Orgánica 3/2007.'],
      ['¿Qué protege la indemnidad frente a represalias?', 'A quien reclama o participa en defensa de la igualdad.', ['Solo a altos cargos.', 'Solo a testigos judiciales externos.', 'A nadie.'], 'Artículo 9 de la Ley Orgánica 3/2007.'],
      ['¿Qué debe incluir un plan de igualdad público?', 'Acceso, promoción, formación, retribución, conciliación, acoso y seguimiento.', ['Solo vacaciones.', 'Solo salarios.', 'Solo campañas externas.'], 'Artículo 41 de la Ley 12/2010.'],
      ['¿Qué lenguaje debe fomentar la Administración?', 'Lenguaje no sexista.', ['Lenguaje exclusivamente técnico.', 'Lenguaje publicitario.', 'Ninguna pauta.'], 'Artículo 4.g de la Ley 12/2010.'],
      ['¿Cómo debe tratarse el acoso en la Administración?', 'Con prevención, protocolos, formación y atención especializada.', ['Solo después de sentencia.', 'Como asunto privado.', 'Sin relación con salud laboral.'], 'Artículo 54 de la Ley 12/2010.'],
      ['¿Qué exige la igualdad retributiva?', 'Igual retribución por trabajo de igual valor.', ['Mismo salario para cualquier puesto.', 'Salario mayor por antigüedad política.', 'Eliminar toda diferencia objetiva.'], 'Ley Orgánica 3/2007 y Ley 12/2010.'],
      ['¿Qué persigue el informe de impacto de género?', 'Analizar efectos diferenciados y proponer medidas.', ['Sustituir la memoria económica.', 'Aprobar el presupuesto.', 'Elegir al tribunal.'], 'Artículo 6 de la Ley 12/2010.']
    ],
    25: [
      ['¿Qué objeto tiene la obligación tributaria principal?', 'El pago de la cuota tributaria.', ['El pago de una sanción.', 'La presentación de recursos.', 'La inscripción censal exclusivamente.'], 'Artículo 19 de la LGT.'],
      ['¿Qué origina la obligación principal?', 'La realización del hecho imponible.', ['La notificación de apremio.', 'La sanción.', 'La prescripción.'], 'Artículo 20 de la LGT.'],
      ['¿Qué fija el devengo?', 'El momento en que se entiende realizado el hecho imponible.', ['La identidad del recaudador.', 'La forma del recurso.', 'El tipo de sanción.'], 'Artículo 21 de la LGT.'],
      ['¿Qué diferencia exención de no sujeción?', 'En la exención se realiza el hecho imponible pero no se paga.', ['No existe diferencia.', 'La no sujeción exige pagar cuota.', 'La exención elimina el tributo.'], 'Artículos 20 y 22 de la LGT.'],
      ['¿Qué métodos determinan la base imponible?', 'Estimación directa, objetiva e indirecta.', ['Solo directa.', 'Contable, judicial y arbitral.', 'Liquidación, apremio y embargo.'], 'Artículo 50 de la LGT.'],
      ['¿Qué es la base liquidable?', 'La imponible tras aplicar reducciones legales.', ['La cuota con intereses.', 'La deuda en apremio.', 'El valor catastral siempre.'], 'Artículo 54 de la LGT.'],
      ['¿Forman las sanciones parte de la deuda tributaria?', 'No.', ['Sí, siempre.', 'Solo las leves.', 'Solo en tributos locales.'], 'Artículo 58.3 de la LGT.'],
      ['¿Cuál es el plazo general de prescripción tributaria?', 'Cuatro años.', ['Un año.', 'Dos años.', 'Diez años.'], 'Artículo 66 de la LGT.'],
      ['¿Puede condonarse una deuda libremente?', 'No, solo en virtud de ley.', ['Sí, por acuerdo verbal.', 'Sí, por cualquier ordenanza.', 'Solo por el recaudador.'], 'Artículo 75 de la LGT.'],
      ['¿Qué recurso local se regula en el artículo 14 del TRLRHL?', 'Recurso de reposición.', ['Recurso de alzada.', 'Recurso de casación.', 'Queja.'], 'Artículo 14 del TRLRHL.'],
      ['¿Cuál es el plazo general del recurso local de reposición?', 'Un mes.', ['Diez días.', 'Tres meses.', 'Cuatro años.'], 'Artículo 14 del TRLRHL.'],
      ['¿Puede una ordenanza crear un beneficio fiscal sin habilitación legal?', 'No.', ['Sí, siempre.', 'Solo si es temporal.', 'Solo para tasas.'], 'Artículo 9 del TRLRHL.'],
      ['¿Qué puede delegar una entidad local?', 'Gestión, liquidación, inspección y recaudación en los términos legales.', ['La potestad legislativa estatal.', 'La función jurisdiccional.', 'La aprobación de la Constitución.'], 'Artículo 7 del TRLRHL.'],
      ['¿Cuál es un procedimiento de gestión?', 'Comprobación limitada.', ['Apremio.', 'Recurso contencioso.', 'Sanción disciplinaria.'], 'Artículo 123 de la LGT.'],
      ['¿Qué relación existe entre gestión y recaudación?', 'Son funciones tributarias distintas.', ['Son exactamente lo mismo.', 'La gestión comienza tras el embargo.', 'La recaudación sustituye toda liquidación.'], 'Ley General Tributaria.']
    ],
    26: [
      ['Liquidación notificada el día 10: ¿hasta cuándo se paga?', 'Hasta el día 20 del mes siguiente.', ['Hasta el día 5 del mes siguiente.', 'Diez días naturales.', 'Hasta fin del mismo mes.'], 'Artículo 62.2.a de la LGT.'],
      ['Liquidación notificada el día 20: ¿hasta cuándo se paga?', 'Hasta el día 5 del segundo mes posterior.', ['Hasta el día 20 siguiente.', 'Quince días hábiles.', 'Hasta fin del mismo mes.'], 'Artículo 62.2.b de la LGT.'],
      ['¿Cuándo empieza el período ejecutivo?', 'Al día siguiente de finalizar el voluntario.', ['El mismo día de la liquidación.', 'Al mes siguiente siempre.', 'Tras sentencia.'], 'Artículo 161 de la LGT.'],
      ['¿Qué recargo se aplica antes de notificar la providencia?', 'El recargo ejecutivo del 5 %.', ['El 10 % reducido.', 'El 20 % ordinario.', 'Ninguno.'], 'Artículo 28 de la LGT.'],
      ['¿Qué recargo puede aplicarse pagando en plazo tras providencia?', 'El 10 % de apremio reducido.', ['El 5 %.', 'El 30 %.', 'El 1 %.'], 'Artículo 28 de la LGT.'],
      ['¿Qué recargo es compatible con intereses?', 'El recargo de apremio ordinario del 20 %.', ['El 5 %.', 'El 10 % reducido.', 'Ninguno.'], 'Artículo 28 de la LGT.'],
      ['¿Qué efecto tiene pedir aplazamiento en voluntaria?', 'Impide iniciar apremio mientras se tramita.', ['Anula la deuda.', 'Elimina intereses.', 'Obliga a concederlo.'], 'Artículo 65 de la LGT.'],
      ['¿Paraliza automáticamente el apremio una solicitud presentada en ejecutivo?', 'No.', ['Sí, siempre.', 'Solo si no se firma.', 'Sí, sin garantía.'], 'Artículo 65 de la LGT.'],
      ['¿Qué naturaleza tiene la providencia de apremio?', 'Título ejecutivo suficiente.', ['Mera propuesta.', 'Sentencia judicial.', 'Ordenanza fiscal.'], 'Artículo 167 de la LGT.'],
      ['¿Es motivo de oposición la falta de notificación de la liquidación?', 'Sí.', ['No.', 'Solo en multas.', 'Solo si hay embargo de dinero.'], 'Artículo 167.3 de la LGT.'],
      ['¿Es motivo de oposición cualquier desacuerdo con la cuota?', 'No, los motivos están tasados.', ['Sí, siempre.', 'Solo verbalmente.', 'Solo tras el embargo.'], 'Artículo 167.3 de la LGT.'],
      ['¿Qué principio rige el embargo?', 'Proporcionalidad y suficiencia para cubrir la deuda.', ['Embargar siempre inmuebles primero.', 'Ausencia de límites.', 'Preferencia por bienes inembargables.'], 'Artículo 169 de la LGT.'],
      ['¿Qué plazo mínimo tienen las deudas periódicas colectivas?', 'Dos meses.', ['Diez días.', 'Quince días.', 'Un año.'], 'Artículo 62.3 de la LGT.'],
      ['¿Cuándo procede devolución de ingreso indebido?', 'En supuestos como duplicidad o pago superior.', ['Por cualquier pago correcto.', 'Solo por sentencia penal.', 'Nunca.'], 'Artículo 221 de la LGT.'],
      ['¿Suspende un recurso la recaudación por regla general?', 'No, salvo garantía o supuesto legal.', ['Sí, siempre.', 'Solo en tributos locales.', 'Sí, sin solicitud.'], 'Ley General Tributaria.']
    ],
    27: [
      ['¿Qué expresa el presupuesto general?', 'Máximo de obligaciones y previsión de derechos.', ['Solo ingresos.', 'Solo gastos de personal.', 'El patrimonio municipal.'], 'Artículo 162 del TRLRHL.'],
      ['¿Con qué coincide el ejercicio presupuestario?', 'Con el año natural.', ['Con el mandato.', 'Con dos años.', 'Con el curso escolar.'], 'Artículo 163 del TRLRHL.'],
      ['¿Qué integra el presupuesto general?', 'Entidad, organismos autónomos y sociedades íntegramente locales.', ['Solo la entidad matriz.', 'Solo consorcios externos.', 'Únicamente empresas privadas.'], 'Artículo 164 del TRLRHL.'],
      ['¿Qué contiene cada presupuesto?', 'Estados de gastos e ingresos y bases de ejecución.', ['Solo memoria.', 'Solo ordenanzas fiscales.', 'Solo liquidación anterior.'], 'Artículo 165 del TRLRHL.'],
      ['¿Puede aprobarse con déficit inicial?', 'No.', ['Sí, siempre.', 'Solo por decreto.', 'Sí, si es provincial.'], 'Artículo 165.4 del TRLRHL.'],
      ['¿Pueden las bases modificar una ley?', 'No.', ['Sí, si lo aprueba el Pleno.', 'Solo leyes estatales.', 'Sí, en materia tributaria.'], 'Artículo 165 del TRLRHL.'],
      ['¿Quién forma el presupuesto?', 'El Presidente de la entidad local.', ['El interventor en exclusiva.', 'El tribunal de cuentas.', 'La junta electoral.'], 'Artículo 168 del TRLRHL.'],
      ['¿Antes de qué fecha se remite al Pleno?', 'Antes del 15 de octubre.', ['Antes del 1 de enero.', 'Antes del 30 de junio.', 'Antes del 15 de diciembre.'], 'Artículo 168 del TRLRHL.'],
      ['¿Cuánto dura la exposición pública?', 'Quince días.', ['Un mes.', 'Diez días.', 'Dos meses.'], 'Artículo 169.1 del TRLRHL.'],
      ['¿Qué ocurre si no hay reclamaciones?', 'Queda definitivamente aprobado.', ['Caduca.', 'Debe repetirse el Pleno.', 'Se prorroga el anterior.'], 'Artículo 169.1 del TRLRHL.'],
      ['¿Cuánto tiene el Pleno para resolver reclamaciones?', 'Un mes.', ['Diez días.', 'Tres meses.', 'Un año.'], 'Artículo 169.1 del TRLRHL.'],
      ['¿Cuándo debe aprobarse definitivamente?', 'Antes del 31 de diciembre.', ['Antes del 15 de octubre.', 'En febrero.', 'Sin plazo.'], 'Artículo 169.2 del TRLRHL.'],
      ['¿Cuándo entra en vigor?', 'Tras su publicación definitiva resumida por capítulos.', ['Con la aprobación inicial.', 'Con el informe de Intervención.', 'Al enviarse al Estado.'], 'Artículo 169.5 del TRLRHL.'],
      ['¿Qué ocurre si no entra en vigor el nuevo al comenzar el año?', 'Se prorroga automáticamente el anterior con ajustes legales.', ['No puede gastarse nada.', 'Se aprueba por silencio.', 'Se disuelve la corporación.'], 'Artículo 169.6 del TRLRHL.'],
      ['¿Se prorrogan créditos de programas finalizados?', 'No.', ['Sí, siempre.', 'Solo si son de personal.', 'Solo por dos años.'], 'Artículo 169.6 del TRLRHL.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      23: 'BOE · Ley 31/1995',
      24: 'BOE · LO 3/2007 / Ley 12/2010 CLM',
      25: 'BOE · LGT / TRLRHL',
      26: 'BOE · LGT / Reglamento de Recaudación',
      27: 'BOE · TRLRHL / RD 500/1990'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v46-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source: sources[number]
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
      sec('Resumen orientado al aprobado', [`Tema de alta rentabilidad para test y supuesto práctico. Fuente principal: ${value.source}. Identifica siempre sujeto, obligación, procedimiento, plazo y consecuencia.`]),
      sec('Rigor normativo', ['Contenido revisado sobre textos consolidados oficiales vigentes en julio de 2026. Las cuantías y porcentajes variables no se fijan como contenido permanente salvo que formen parte estable de la ley.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Sujeto', 'Trabajador, Administración, obligado tributario, órgano gestor, recaudador, Presidente o Pleno.'],
      ['Regla', 'Derecho, obligación, principio, porcentaje, plazo, competencia o procedimiento.'],
      ['Documento', 'Evaluación, protocolo, liquidación, providencia, presupuesto, bases o publicación.'],
      ['Plazo', 'Consulta, pago voluntario, prescripción, exposición pública, reclamación o entrada en vigor.'],
      ['Efecto', 'Protección, discriminación, liquidación, recargo, apremio, aprobación o prórroga.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v46';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.46';

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
    version: 'v0.46.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4600 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 200) {
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
    const ordered = shuffle(selected, seed * 4621);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v46-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v46-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v46-sim${seed}`,
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
      'Desarrollados en profundidad los temas 23 a 27 de Diputación',
      'Añadidas 75 preguntas manuales de prevención, igualdad, tributación, recaudación y presupuesto',
      'Alcanzados 20 temas profundos y 300 preguntas manuales acumuladas',
      'Regenerados simulacros exclusivamente con preguntas reales'
    ]
  });

  window.OPOWEB_DIPUTACION_V46 = {
    version: `v${VERSION}`,
    revisedThemes: [23, 24, 25, 26, 27],
    manualQuestions: 75,
    cumulativeManualQuestions: 300,
    totalDeepThemes: 20,
    pendingInternalThemes: [22],
    officialSources: ['Ley 31/1995', 'Ley Orgánica 3/2007', 'Ley 12/2010 CLM', 'Ley 58/2003', 'TRLRHL', 'Reglamento General de Recaudación', 'RD 500/1990']
  };
})();