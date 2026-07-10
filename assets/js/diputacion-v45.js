(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.45.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    17: {
      source: 'Ley 4/2011, arts. 4 a 15, 37 a 60; TREBEP, arts. 8 a 13 y 55 a 68',
      blocks: [
        ['Clases de personal empleado público', [
          'La Ley 4/2011 distingue personal funcionario de carrera, personal funcionario interino, personal laboral —fijo, por tiempo indefinido o temporal— y personal eventual. La relación jurídica y la finalidad del nombramiento o contrato determinan su régimen.',
          'El personal funcionario de carrera está vinculado por una relación estatutaria de Derecho administrativo para prestar servicios profesionales retribuidos de carácter permanente. El interino se nombra temporalmente por razones expresamente justificadas de necesidad y urgencia para desempeñar funciones propias de funcionarios de carrera.',
          'El personal eventual realiza funciones expresamente calificadas como de confianza o asesoramiento especial; su nombramiento y cese son libres y el desempeño no constituye mérito para el acceso al empleo público ni para la promoción interna.'
        ]],
        ['Funciones y clasificación', [
          'Quedan reservadas al personal funcionario las funciones que impliquen participación directa o indirecta en potestades públicas o salvaguardia de intereses generales. La Administración puede reservar además otros puestos cuando lo justifique la naturaleza de las funciones.',
          'El subgrupo C1 exige Bachiller o título de Técnico. En la convocatoria de Administrativo de Diputación se exige Bachillerato o equivalente, y el proceso es de oposición libre para dos plazas.',
          'La clasificación no depende del nombre informal del puesto, sino del cuerpo, escala, subgrupo, titulación exigida y funciones asignadas.'
        ]],
        ['Principios y requisitos de acceso', [
          'Artículo 37. La selección debe garantizar igualdad, mérito y capacidad, además de publicidad, transparencia, imparcialidad, profesionalidad, independencia técnica, adecuación de las pruebas a las funciones y agilidad compatible con la objetividad.',
          'Artículo 38. Entre los requisitos generales figuran nacionalidad en los términos legales, capacidad funcional, edad mínima exigida, no haber sido separado ni inhabilitado y poseer la titulación requerida. Deben cumplirse al finalizar el plazo de solicitudes y mantenerse hasta la toma de posesión cuando así lo establezca la convocatoria.',
          'Las personas con discapacidad concurren en condiciones de igualdad, con reserva y adaptaciones conforme a la normativa aplicable, sin rebajar los requisitos esenciales del puesto.'
        ]],
        ['Sistemas selectivos', [
          'Los sistemas son oposición, concurso-oposición y, excepcionalmente, concurso cuando una ley lo permita. Para personal funcionario de carrera y laboral fijo, los sistemas ordinarios son oposición y concurso-oposición.',
          'En el concurso-oposición, la fase de concurso valora méritos previamente definidos, pero no puede utilizarse para compensar la falta de superación de la fase de oposición. En esta convocatoria de Administrativo C1 no hay fase de méritos: es oposición libre.',
          'Los órganos de selección deben actuar con imparcialidad, profesionalidad y discrecionalidad técnica dentro de las bases, que vinculan a Administración, tribunal y aspirantes.'
        ]],
        ['Adquisición de la condición y pérdida de la relación', [
          'Artículo 55. La condición de funcionario de carrera se adquiere sucesivamente por superar el proceso, ser nombrado por órgano competente, acatar la Constitución, el Estatuto de Autonomía y el ordenamiento, y tomar posesión dentro del plazo.',
          'La pérdida puede producirse por renuncia, pérdida de nacionalidad cuando resulte determinante, jubilación total, sanción firme de separación del servicio o pena firme de inhabilitación. La renuncia debe formularse por escrito y ser aceptada expresamente, salvo que concurra una causa legal que impida aceptarla.',
          'La pérdida de la condición no borra por sí sola responsabilidades anteriores ni convierte automáticamente al interesado en personal laboral o interino.'
        ]]
      ],
      hot: ['Cuatro clases básicas de personal.', 'Interino: necesidad y urgencia, con temporalidad.', 'Eventual: confianza o asesoramiento; no genera mérito de acceso.', 'Acceso: igualdad, mérito, capacidad, publicidad y transparencia.', 'Oposición libre no tiene fase de concurso.', 'Adquisición de la condición: requisitos sucesivos.', 'Renuncia escrita y aceptación expresa.'],
      recall: ['¿Qué diferencia al funcionario interino del eventual?', '¿Qué principios adicionales acompañan a igualdad, mérito y capacidad?', '¿Qué requisitos sucesivos permiten adquirir la condición de funcionario de carrera?']
    },
    18: {
      source: 'Ley 4/2011, arts. 96 a 126; TREBEP, arts. 14, 15, 52 a 54 y 85 a 92',
      blocks: [
        ['Derechos individuales', [
          'El artículo 96 reconoce, entre otros, inamovilidad en la condición de funcionario de carrera, desempeño efectivo de funciones, carrera y promoción conforme a sistemas objetivos, retribuciones e indemnizaciones, formación continua, protección en seguridad y salud, respeto a la intimidad y dignidad, conciliación y defensa jurídica en los términos legales.',
          'La inamovilidad protege la condición de funcionario de carrera, no la permanencia incondicionada en un puesto concreto. Los puestos pueden proveerse, removerse o amortizarse conforme al ordenamiento.',
          'Los derechos se ejercen de acuerdo con la naturaleza funcionarial o laboral de la relación y con las necesidades del servicio legalmente justificadas.'
        ]],
        ['Derechos de ejercicio colectivo', [
          'El artículo 97 incluye libertad sindical, negociación colectiva y participación, huelga con garantía de servicios esenciales, planteamiento de conflictos colectivos y reunión.',
          'Estos derechos no son absolutos: se ejercen dentro de la Constitución, la legislación básica y las reglas específicas del empleo público.',
          'La negociación colectiva no permite disponer de materias reservadas a ley ni sustituye las competencias de los órganos de gobierno.'
        ]],
        ['Deberes y código de conducta', [
          'El personal debe desempeñar con diligencia las tareas asignadas y velar por los intereses generales con objetividad, integridad, neutralidad, responsabilidad, imparcialidad, confidencialidad, dedicación al servicio público, transparencia, ejemplaridad, austeridad, accesibilidad, eficacia y respeto a la igualdad.',
          'Debe obedecer instrucciones profesionales salvo que constituyan una infracción manifiesta del ordenamiento, supuesto en el que procede ponerlo en conocimiento de los órganos de inspección correspondientes.',
          'La información conocida por razón del puesto no puede usarse en beneficio propio o de terceros. También deben evitarse conflictos de intereses y aceptaciones de ventajas que comprometan la imparcialidad.'
        ]],
        ['Vacaciones, residencia y formación', [
          'Artículo 108. El personal funcionario tiene, como mínimo, veintidós días laborables de vacaciones retribuidas por año natural, o la parte proporcional. No se sustituyen por dinero salvo finalización de la relación antes de disfrutarlas.',
          'La obligación de residencia solo puede imponerse cuando sea necesaria por las características del puesto y en los términos establecidos por la Administración competente.',
          'La formación es derecho y deber: la Administración debe facilitar actualización y perfeccionamiento, y el personal debe mantener la capacitación necesaria para el puesto.'
        ]],
        ['Situaciones administrativas', [
          'La Ley 4/2011 regula servicio activo, servicios especiales, servicio en otras Administraciones, expectativa de destino, excedencia forzosa, excedencias por cuidado de familiares, violencia de género o sexual, prestación de servicios en el sector público, interés particular y agrupación familiar, además de suspensión de funciones.',
          'El servicio activo es la situación ordinaria de quien ocupa un puesto o se encuentra en supuestos legalmente equiparados. Algunas situaciones conservan derechos de carrera, reserva de puesto o cómputo de tiempo; otras no.',
          'El reingreso al servicio activo sin reserva puede producirse mediante concurso o libre designación y también por adscripción provisional, condicionado a necesidades y requisitos del puesto.'
        ]]
      ],
      hot: ['Inamovilidad de la condición no equivale a puesto vitalicio.', 'Derechos colectivos sujetos a ley y servicios esenciales.', 'Deber de objetividad, imparcialidad y confidencialidad.', 'Vacaciones mínimas: 22 días laborables.', 'La formación es derecho y deber.', 'Distinguir servicio activo, servicios especiales, excedencias y suspensión.', 'Reingreso sin reserva: provisión o adscripción provisional.'],
      recall: ['¿Qué protege exactamente la inamovilidad?', '¿Qué conducta debe seguirse ante una orden manifiestamente ilegal?', '¿Qué vías existen para reingresar cuando no hay reserva de puesto?']
    },
    19: {
      source: 'Ley 4/2011, arts. 127 a 145; TREBEP, arts. 93 a 98',
      blocks: [
        ['Principios de la potestad disciplinaria', [
          'Legalidad y tipicidad: solo pueden sancionarse acciones u omisiones definidas como falta por una ley. Las normas sancionadoras no admiten aplicación analógica.',
          'Rige la irretroactividad de las normas desfavorables y la retroactividad de las favorables, además de culpabilidad, proporcionalidad, presunción de inocencia y prohibición de doble sanción por los mismos hechos, sujeto y fundamento.',
          'La responsabilidad disciplinaria es compatible, cuando proceda, con responsabilidad patrimonial o penal, sin desconocer la vinculación a hechos declarados probados por resoluciones judiciales firmes.'
        ]],
        ['Clases de faltas', [
          'Las faltas se clasifican en muy graves, graves y leves. La calificación depende de la conducta tipificada, no de la opinión del superior ni del daño reputacional genérico.',
          'Entre las muy graves figuran conductas como discriminación o acoso prohibidos, abandono del servicio, adopción de acuerdos manifiestamente ilegales que causen perjuicio grave, publicación o uso indebido de información reservada y determinadas infracciones de incompatibilidades.',
          'Las faltas graves y leves deben localizarse en sus artículos específicos y relacionarse con el deber incumplido, la intencionalidad, el daño, la reiteración y el grado de participación.'
        ]],
        ['Personas responsables', [
          'Responden quienes sean autores. También puede responder quien induzca o coopere con un acto sin el cual la falta no se habría cometido.',
          'Puede existir responsabilidad por encubrir faltas graves o muy graves consumadas cuando derive daño grave para la Administración o la ciudadanía.',
          'La responsabilidad exige culpabilidad; no basta la mera producción objetiva de un resultado sin dolo o culpa cuando la ley exija imputación personal.'
        ]],
        ['Prescripción', [
          'Las faltas muy graves prescriben a los tres años, las graves a los dos años y las leves a los seis meses.',
          'Las sanciones impuestas por faltas muy graves prescriben a los tres años, las impuestas por faltas graves a los dos años y las impuestas por faltas leves al año.',
          'Debe distinguirse el inicio del cómputo de la falta, las reglas para infracciones continuadas y la interrupción por la iniciación del procedimiento con conocimiento del interesado.'
        ]],
        ['Procedimiento y garantías', [
          'No puede imponerse sanción por falta grave o muy grave sin procedimiento previo. Deben separarse, en los términos legales, las funciones de instrucción y resolución y garantizarse audiencia, prueba, contradicción y resolución motivada.',
          'Para faltas leves puede existir procedimiento simplificado, pero no se elimina la defensa ni la necesidad de acreditar hechos y responsabilidad.',
          'El plazo máximo del procedimiento por faltas graves o muy graves es de doce meses. La caducidad no equivale a declaración de inexistencia de los hechos y debe coordinarse con la prescripción.'
        ]]
      ],
      hot: ['No cabe analogía sancionadora.', 'Retroactividad solo si favorece.', 'Tres clases: muy graves, graves y leves.', 'Autor, inductor, cooperador y ciertos encubridores pueden responder.', 'Prescripción de faltas: 3 años, 2 años y 6 meses.', 'Prescripción de sanciones: 3 años, 2 años y 1 año.', 'Procedimiento grave/muy grave: máximo 12 meses.'],
      recall: ['¿Qué diferencia existe entre prescripción de la falta y de la sanción?', '¿Cuándo puede responder quien no ejecutó materialmente la conducta?', '¿Qué garantías mínimas exige el procedimiento disciplinario?']
    },
    20: {
      source: 'Estatuto de los Trabajadores, arts. 1 a 8 y 39 a 56',
      blocks: [
        ['Concepto, sujetos y fuentes', [
          'El contrato de trabajo articula una prestación voluntaria y retribuida por cuenta ajena, dentro del ámbito de organización y dirección del empleador. La dependencia y la ajenidad permiten distinguirlo de una relación civil o mercantil.',
          'Su régimen se integra por disposiciones legales y reglamentarias, convenio colectivo, voluntad de las partes dentro de límites legales y usos profesionales y locales.',
          'Son elementos esenciales el consentimiento, el objeto —prestación laboral— y la causa —intercambio de trabajo y salario—, junto con la identificación de sujetos, jornada, puesto, salario, duración y demás condiciones exigibles.'
        ]],
        ['Forma y documentación', [
          'Artículo 8. El contrato puede celebrarse por escrito o de palabra, pero debe constar por escrito cuando lo exija la ley. La falta de forma escrita cuando sea obligatoria activa presunciones legales, sin impedir prueba en contrario.',
          'Cualquiera de las partes puede exigir que se formalice por escrito incluso durante la relación. El empleador debe informar por escrito de los elementos esenciales cuando no figuren en contrato escrito.',
          'La copia básica y la comunicación al servicio público de empleo se realizan en los términos y plazos legales, protegiendo datos especialmente sensibles.'
        ]],
        ['Contenido y régimen jurídico', [
          'El trabajador tiene derecho a ocupación efectiva, promoción y formación, no discriminación, integridad física, intimidad, dignidad y percepción puntual de la remuneración. Debe cumplir obligaciones del puesto, medidas preventivas, órdenes regulares y buena fe contractual.',
          'El período de prueba debe pactarse por escrito y respetar límites legales o convencionales. Durante él se mantienen derechos y obligaciones propios del puesto, salvo las particularidades de resolución.',
          'Las cláusulas contractuales no pueden empeorar mínimos indisponibles de ley o convenio; una cláusula nula no invalida necesariamente todo el contrato.'
        ]],
        ['Modificación del contrato', [
          'La movilidad funcional debe respetar titulaciones necesarias y dignidad. Las funciones fuera del grupo profesional requieren razones técnicas u organizativas y el tiempo imprescindible, con los efectos retributivos y de promoción previstos legalmente.',
          'La movilidad geográfica comprende traslados y desplazamientos que exigen cambio de residencia en los supuestos y con las garantías del artículo 40.',
          'La modificación sustancial del artículo 41 puede afectar jornada, horario, turnos, remuneración, sistema de trabajo o funciones más allá de la movilidad funcional. Requiere causa económica, técnica, organizativa o productiva y procedimiento individual o colectivo.'
        ]],
        ['Suspensión y extinción', [
          'La suspensión interrumpe temporalmente las obligaciones recíprocas de trabajar y remunerar, sin extinguir el vínculo. Sus causas incluyen mutuo acuerdo, incapacidad temporal, nacimiento y cuidado, riesgo, cargo público, privación de libertad sin condena, sanción, fuerza mayor, causas empresariales, excedencia, huelga y cierre legal.',
          'La extinción termina la relación. El artículo 49 recoge, entre otras, mutuo acuerdo, causas válidas consignadas, expiración, dimisión, muerte o jubilación en supuestos legales, fuerza mayor y despidos colectivo, objetivo o disciplinario.',
          'No deben confundirse suspensión, excedencia y extinción: producen efectos distintos sobre salario, reserva o reingreso y continuidad del vínculo.'
        ]]
      ],
      hot: ['Dependencia + ajenidad + salario.', 'Contrato verbal posible, pero muchos supuestos exigen escritura.', 'Período de prueba: pacto escrito.', 'Movilidad funcional no es modificación sustancial.', 'La modificación sustancial requiere causa y procedimiento.', 'Suspensión conserva el vínculo.', 'Extinción pone fin a la relación.'],
      recall: ['¿Qué rasgos diferencian el contrato laboral del arrendamiento de servicios?', '¿Qué efectos tiene incumplir la forma escrita obligatoria?', '¿Cómo distingues movilidad funcional, modificación sustancial y suspensión?']
    },
    21: {
      source: 'Estatuto de los Trabajadores, arts. 11, 12, 15 y 16; LGSS, arts. 15 a 22 y 136 a 148',
      blocks: [
        ['Modalidades por duración y finalidad', [
          'Artículo 15. El contrato se presume concertado por tiempo indefinido. La duración determinada solo puede justificarse por circunstancias de la producción o por sustitución de una persona trabajadora, con causa concreta y conexión con la duración prevista.',
          'El contrato formativo comprende la formación en alternancia y la obtención de práctica profesional adecuada al nivel de estudios, con objeto, requisitos y duración diferenciados.',
          'El contrato fijo-discontinuo atiende trabajos estacionales, de temporada o de prestación intermitente en los términos del artículo 16; es indefinido, no un contrato temporal ordinario.'
        ]],
        ['Trabajo a tiempo parcial', [
          'Existe cuando se acuerda una prestación inferior a la jornada de un trabajador comparable a tiempo completo. Debe formalizarse por escrito con número y distribución de horas.',
          'Los trabajadores a tiempo parcial tienen los mismos derechos que los de tiempo completo, con proporcionalidad cuando corresponda por su naturaleza.',
          'Las horas complementarias se sujetan a pacto y límites legales; no deben confundirse con horas extraordinarias.'
        ]],
        ['Afiliación, altas y bajas', [
          'La afiliación a la Seguridad Social es obligatoria y única para toda la vida y para todo el sistema. Las altas y bajas reflejan sucesivos períodos de inclusión en cada régimen.',
          'En el Régimen General, el empresario debe solicitar afiliación y comunicar ingreso y cese para alta y baja. Ante incumplimiento, el trabajador puede instarlo y la Administración puede actuar de oficio.',
          'Alta no es sinónimo de afiliación: la afiliación identifica de forma única; el alta vincula una actividad y período concretos.'
        ]],
        ['Cotización', [
          'La obligación nace con el inicio de la prestación, incluido el período de prueba, y se mantiene mientras exista alta o prestación de servicios. Una baja comunicada no extingue la obligación si el trabajo continúa.',
          'La cuota resulta de aplicar el tipo de cotización a la base correspondiente, con aportaciones empresarial y del trabajador según contingencia. Los tipos, bases máximas y mínimas cambian por normas presupuestarias y no deben memorizarse sin actualización.',
          'La obligación continúa en situaciones expresamente previstas, como incapacidad temporal, nacimiento y cuidado, riesgo durante embarazo o lactancia y otras legalmente asimiladas.'
        ]],
        ['Liquidación y recaudación', [
          'La LGSS contempla autoliquidación por el sujeto responsable, liquidación directa por la Tesorería General de la Seguridad Social y liquidación simplificada en los supuestos legales.',
          'La recaudación en período voluntario permite ingresar dentro del plazo reglamentario. El impago genera recargos e intereses y puede dar paso a la vía ejecutiva de apremio.',
          'La Tesorería General de la Seguridad Social gestiona la recaudación de los recursos del sistema. Deben diferenciarse liquidación de cuotas, ingreso, reclamación de deuda y providencia de apremio.'
        ]]
      ],
      hot: ['Regla: contrato indefinido.', 'Temporal: producción o sustitución, con causa precisa.', 'Fijo-discontinuo es indefinido.', 'Afiliación: obligatoria, única y vitalicia.', 'Alta y baja corresponden a períodos concretos.', 'El empresario debe comunicar afiliación, alta y baja.', 'Cotizar nace con el trabajo y no cesa si se sigue trabajando.', 'Distinguir autoliquidación, liquidación directa y recaudación ejecutiva.'],
      recall: ['¿Por qué un fijo-discontinuo no es temporal?', '¿Qué diferencia hay entre afiliación y alta?', '¿Cuándo nace y cuándo se extingue realmente la obligación de cotizar?']
    }
  };

  const rawQuestions = {
    17: [
      ['¿Cuáles son las cuatro clases básicas de personal empleado público?', 'Funcionarios de carrera, interinos, laborales y eventuales.', ['Funcionarios, contratistas, becarios y electos.', 'Carrera, políticos, autónomos y asesores externos.', 'Laborales, concesionarios, voluntarios y colegiados.'], 'Artículo 4 de la Ley 4/2011.'],
      ['¿Qué justifica el nombramiento de personal funcionario interino?', 'Razones expresamente justificadas de necesidad y urgencia.', ['La libre confianza política.', 'La mera preferencia del órgano.', 'La ausencia de presupuesto.'], 'Ley 4/2011 y TREBEP.'],
      ['¿Qué funciones realiza el personal eventual?', 'Confianza o asesoramiento especial.', ['Potestades públicas reservadas con carácter permanente.', 'Tareas judiciales.', 'Cualquier plaza vacante por oposición.'], 'Ley 4/2011.'],
      ['¿Genera el trabajo eventual mérito automático para acceder al empleo público?', 'No.', ['Sí, siempre.', 'Solo tras seis meses.', 'Solo para C1.'], 'El desempeño eventual no constituye mérito de acceso o promoción.'],
      ['¿Qué funciones se reservan al personal funcionario?', 'Las vinculadas a potestades públicas o salvaguardia de intereses generales.', ['Todo trabajo manual.', 'Solo las informáticas.', 'Únicamente las de archivo.'], 'Ley 4/2011 y TREBEP.'],
      ['¿Qué principios constitucionales rigen el acceso?', 'Igualdad, mérito y capacidad.', ['Antigüedad, confianza y parentesco.', 'Jerarquía, oportunidad y discreción.', 'Sorteo, vecindad y renta.'], 'Artículo 37 de la Ley 4/2011.'],
      ['¿Cuál es un principio adicional del artículo 37?', 'Publicidad de las convocatorias y sus bases.', ['Reserva de las bases.', 'Elección secreta del aspirante.', 'Compensación automática de méritos.'], 'Artículo 37 de la Ley 4/2011.'],
      ['¿Qué relación debe existir entre pruebas y puesto?', 'Adecuación entre pruebas y funciones o tareas.', ['Ninguna.', 'Solo coincidencia de titulación.', 'Las pruebas deben ser idénticas para todo subgrupo.'], 'Artículo 37.e de la Ley 4/2011.'],
      ['¿Cuáles son los sistemas selectivos previstos?', 'Oposición, concurso-oposición y concurso en supuestos legales.', ['Entrevista, sorteo y designación.', 'Solo concurso.', 'Oposición y libre designación.'], 'Ley 4/2011.'],
      ['¿Puede el concurso compensar no aprobar la oposición?', 'No.', ['Sí, siempre.', 'Sí, con experiencia privada.', 'Solo en turno libre.'], 'La fase eliminatoria debe superarse conforme a las bases.'],
      ['¿Qué sistema tiene Administrativo C1 de Diputación 2026?', 'Oposición libre.', ['Concurso-oposición.', 'Concurso de méritos.', 'Libre designación.'], 'Anexo VII de la convocatoria.'],
      ['¿Qué primer requisito adquiere la condición de funcionario de carrera?', 'Superar el proceso selectivo.', ['Inscribirse en una bolsa.', 'Pagar la tasa.', 'Presentar el título sin examen.'], 'Artículo 55 de la Ley 4/2011.'],
      ['¿Qué acto sigue al nombramiento antes de la toma de posesión?', 'Acatamiento de la Constitución, Estatuto y ordenamiento.', ['Firma de convenio colectivo.', 'Elección por el Pleno.', 'Afiliación sindical.'], 'Artículo 55 de la Ley 4/2011.'],
      ['¿Cómo debe formularse la renuncia a la condición funcionarial?', 'Por escrito.', ['Verbalmente ante cualquier compañero.', 'Por silencio.', 'Mediante baja en Seguridad Social únicamente.'], 'Ley 4/2011.'],
      ['¿Qué efecto tiene no tomar posesión dentro del plazo sin causa válida?', 'Impide adquirir o consolidar la condición en los términos de la convocatoria.', ['Convierte al aspirante en interino.', 'Aplaza automáticamente un año.', 'Genera una plaza laboral fija.'], 'Artículo 55 de la Ley 4/2011.']
    ],
    18: [
      ['¿Qué protege la inamovilidad?', 'La condición de funcionario de carrera.', ['Un puesto concreto para siempre.', 'Cualquier comisión de servicio.', 'El horario elegido.'], 'Artículo 96 de la Ley 4/2011.'],
      ['¿Es un derecho individual percibir retribuciones e indemnizaciones por servicio?', 'Sí.', ['No.', 'Solo del personal eventual.', 'Solo tras diez años.'], 'Artículo 96 de la Ley 4/2011.'],
      ['¿Cuál es un derecho colectivo?', 'La negociación colectiva.', ['Elegir libremente cualquier puesto.', 'No obedecer instrucciones legales.', 'Cobrar dietas sin desplazamiento.'], 'Artículo 97 de la Ley 4/2011.'],
      ['¿Puede la huelga ignorar los servicios esenciales?', 'No.', ['Sí, siempre.', 'Solo en Administración local.', 'Solo si no hay negociación.'], 'Derecho de huelga con garantía de servicios esenciales.'],
      ['¿Qué principio exige actuar sin favorecer intereses particulares?', 'Imparcialidad.', ['Publicidad comercial.', 'Disponibilidad patrimonial.', 'Autonomía contractual.'], 'Código de conducta del empleo público.'],
      ['¿Qué debe hacer el empleado ante una orden manifiestamente ilegal?', 'Ponerla en conocimiento de los órganos de inspección competentes.', ['Cumplirla sin excepción.', 'Publicarla en redes.', 'Destruir el expediente.'], 'Código de conducta.'],
      ['¿Puede usarse información reservada para beneficio propio?', 'No.', ['Sí, fuera de horario.', 'Sí, si no hay lucro.', 'Solo después del cese.'], 'Deber de confidencialidad.'],
      ['¿Cuántos días laborables mínimos de vacaciones reconoce la Ley 4/2011?', 'Veintidós.', ['Quince.', 'Treinta naturales obligatorios.', 'Diez.'], 'Artículo 108 de la Ley 4/2011.'],
      ['¿Pueden sustituirse ordinariamente las vacaciones por dinero?', 'No.', ['Sí, a elección del empleado.', 'Sí, cada dos años.', 'Solo por acuerdo verbal.'], 'Artículo 108 de la Ley 4/2011.'],
      ['¿Qué doble carácter tiene la formación?', 'Derecho y deber.', ['Solo premio.', 'Solo sanción.', 'Actividad privada ajena al puesto.'], 'Artículos 111 y 112 de la Ley 4/2011.'],
      ['¿Cuál es la situación ordinaria de quien desempeña un puesto?', 'Servicio activo.', ['Suspensión firme.', 'Excedencia forzosa.', 'Expectativa de jubilación.'], 'Ley 4/2011.'],
      ['¿Es lo mismo servicios especiales que servicio en otras Administraciones?', 'No.', ['Sí.', 'Solo para C1.', 'Solo si hay reserva.'], 'Son situaciones administrativas distintas.'],
      ['¿Qué situación puede derivar de una sanción disciplinaria?', 'Suspensión de funciones.', ['Servicio activo reforzado.', 'Comisión automática.', 'Promoción interna.'], 'Ley 4/2011.'],
      ['¿Cómo puede reingresar quien no tiene reserva de puesto?', 'Mediante provisión o adscripción provisional.', ['Solo por nuevo examen.', 'Por decisión del interesado sin vacante.', 'Mediante contrato privado.'], 'Artículo 126 de la Ley 4/2011.'],
      ['¿Conserva toda excedencia los mismos derechos?', 'No.', ['Sí, siempre.', 'Solo las voluntarias.', 'Todas reservan puesto indefinidamente.'], 'Los efectos dependen de cada modalidad.']
    ],
    19: [
      ['¿Puede sancionarse una conducta no tipificada legalmente?', 'No.', ['Sí, por analogía.', 'Sí, por costumbre.', 'Sí, si molesta al superior.'], 'Artículo 127 de la Ley 4/2011.'],
      ['¿Admite analogía una norma disciplinaria?', 'No.', ['Sí, siempre.', 'Solo para faltas leves.', 'Solo para sanciones económicas.'], 'Artículo 127.3 de la Ley 4/2011.'],
      ['¿Cuándo puede aplicarse retroactivamente una norma disciplinaria?', 'Cuando favorece a la persona responsable.', ['Cuando agrava la sanción.', 'Siempre.', 'Nunca, ni aunque favorezca.'], 'Artículo 128 de la Ley 4/2011.'],
      ['¿Qué principio exige dolo o culpa?', 'Culpabilidad.', ['Publicidad.', 'Jerarquía.', 'Movilidad.'], 'Principios de la potestad disciplinaria.'],
      ['¿Cuántas clases de faltas existen?', 'Muy graves, graves y leves.', ['Penales, civiles y administrativas.', 'Solo graves y leves.', 'Ordinarias y extraordinarias.'], 'Artículo 133 de la Ley 4/2011.'],
      ['¿Es el abandono del servicio una conducta potencialmente muy grave?', 'Sí.', ['No, siempre leve.', 'Solo si dura un año.', 'Solo para laborales.'], 'Artículo 134 de la Ley 4/2011.'],
      ['¿Puede ser muy grave una conducta discriminatoria o de acoso tipificada?', 'Sí.', ['No.', 'Solo si hay sentencia penal.', 'Solo fuera del trabajo.'], 'Artículo 134 de la Ley 4/2011.'],
      ['¿Quién responde disciplinariamente en primer término?', 'La persona autora.', ['El ciudadano afectado.', 'El tribunal selectivo.', 'Todo el departamento automáticamente.'], 'Artículo 139 de la Ley 4/2011.'],
      ['¿Puede responder quien induce a cometer la falta?', 'Sí.', ['No, nunca.', 'Solo si es autoridad electa.', 'Solo en faltas leves.'], 'Artículo 139 de la Ley 4/2011.'],
      ['¿Cuándo puede responder un encubridor?', 'En ciertos encubrimientos de faltas graves o muy graves con daño grave.', ['Por cualquier rumor.', 'Nunca.', 'Solo si cobra.'], 'Artículo 139 de la Ley 4/2011.'],
      ['¿Cuándo prescribe una falta muy grave?', 'A los tres años.', ['A los seis meses.', 'Al año.', 'A los cinco años en todo caso.'], 'Artículo 141 de la Ley 4/2011.'],
      ['¿Cuándo prescribe una falta grave?', 'A los dos años.', ['A los tres meses.', 'A los cuatro años.', 'Al mes.'], 'Artículo 141 de la Ley 4/2011.'],
      ['¿Cuándo prescribe una falta leve?', 'A los seis meses.', ['Al año.', 'A los dos años.', 'A los quince días.'], 'Artículo 141 de la Ley 4/2011.'],
      ['¿Cuál es el plazo máximo del procedimiento por falta grave o muy grave?', 'Doce meses.', ['Tres meses.', 'Seis meses siempre.', 'Dos años.'], 'Ley 4/2011.'],
      ['¿Puede imponerse una sanción grave sin procedimiento previo?', 'No.', ['Sí, por orden verbal.', 'Sí, si hay urgencia.', 'Solo en Diputación.'], 'Garantías del procedimiento disciplinario.']
    ],
    20: [
      ['¿Qué rasgo indica trabajo por cuenta ajena?', 'El resultado y riesgo se integran en la organización del empleador.', ['El trabajador fija siempre precio y clientela.', 'No existe salario.', 'El prestador asume toda organización empresarial.'], 'Artículo 1 del Estatuto de los Trabajadores.'],
      ['¿Puede celebrarse verbalmente un contrato laboral?', 'Sí, salvo que la ley exija forma escrita.', ['No, nunca.', 'Solo en el sector público.', 'Solo si dura más de un año.'], 'Artículo 8 del Estatuto de los Trabajadores.'],
      ['¿Qué ocurre si se omite la escritura cuando es obligatoria?', 'Opera la presunción de indefinido y jornada completa salvo prueba en contrario.', ['El contrato siempre es inexistente.', 'Se convierte en mercantil.', 'El trabajador pierde salario.'], 'Artículo 8 del Estatuto de los Trabajadores.'],
      ['¿Puede cualquiera de las partes exigir forma escrita durante la relación?', 'Sí.', ['No.', 'Solo el empresario.', 'Solo la Inspección.'], 'Artículo 8 del Estatuto de los Trabajadores.'],
      ['¿Cómo debe pactarse el período de prueba?', 'Por escrito.', ['Siempre verbal.', 'Mediante nómina.', 'Por silencio.'], 'Estatuto de los Trabajadores.'],
      ['¿Puede una cláusula contractual empeorar un mínimo indisponible legal?', 'No.', ['Sí, con firma.', 'Sí, en contrato temporal.', 'Solo para salario.'], 'Jerarquía de fuentes laborales.'],
      ['¿Qué debe respetar la movilidad funcional?', 'Titulación necesaria y dignidad.', ['Solo conveniencia empresarial.', 'Antigüedad del gerente.', 'Residencia del trabajador.'], 'Artículo 39 del Estatuto de los Trabajadores.'],
      ['¿Qué exige asignar funciones fuera del grupo profesional?', 'Razones técnicas u organizativas y tiempo imprescindible.', ['Ninguna causa.', 'Autorización judicial previa siempre.', 'Cambio definitivo automático.'], 'Artículo 39 del Estatuto de los Trabajadores.'],
      ['¿Qué puede afectar una modificación sustancial?', 'Jornada, horario, turnos, remuneración o sistema de trabajo.', ['Nacionalidad.', 'Afiliación sindical obligatoria.', 'Estado civil.'], 'Artículo 41 del Estatuto de los Trabajadores.'],
      ['¿Qué causa requiere una modificación sustancial?', 'Económica, técnica, organizativa o productiva.', ['Capricho empresarial.', 'Petición de un cliente sin motivación.', 'Ausencia de contrato escrito.'], 'Artículo 41 del Estatuto de los Trabajadores.'],
      ['¿Qué efecto esencial tiene la suspensión?', 'Interrumpe temporalmente trabajo y salario sin extinguir el vínculo.', ['Extingue siempre el contrato.', 'Convierte el contrato en mercantil.', 'Implica despido disciplinario.'], 'Artículo 45 del Estatuto de los Trabajadores.'],
      ['¿Es la incapacidad temporal causa de suspensión?', 'Sí.', ['No.', 'Solo si dura más de un año.', 'Solo en empleo público.'], 'Artículo 45 del Estatuto de los Trabajadores.'],
      ['¿Es la huelga causa de suspensión?', 'Sí.', ['No.', 'Solo si es indefinida.', 'Solo para funcionarios.'], 'Artículo 45 del Estatuto de los Trabajadores.'],
      ['¿Qué efecto tiene la extinción?', 'Pone fin a la relación laboral.', ['Mantiene siempre reserva del puesto.', 'Solo suspende el salario.', 'No afecta al vínculo.'], 'Artículo 49 del Estatuto de los Trabajadores.'],
      ['¿Es el mutuo acuerdo causa de extinción?', 'Sí.', ['No.', 'Solo con sentencia.', 'Solo en contrato temporal.'], 'Artículo 49 del Estatuto de los Trabajadores.']
    ],
    21: [
      ['¿Cuál es la regla general sobre duración del contrato?', 'Se presume indefinido.', ['Se presume temporal.', 'Dura seis meses.', 'Depende solo del nombre dado por las partes.'], 'Artículo 15 del Estatuto de los Trabajadores.'],
      ['¿Qué causas permiten contrato temporal ordinario?', 'Circunstancias de la producción o sustitución.', ['Cualquier vacante permanente.', 'Preferencia empresarial sin causa.', 'Temporada, siempre mediante temporal.'], 'Artículo 15 del Estatuto de los Trabajadores.'],
      ['¿Debe concretarse la causa temporal?', 'Sí, y conectarse con la duración prevista.', ['No.', 'Solo verbalmente.', 'Solo ante el sindicato.'], 'Artículo 15 del Estatuto de los Trabajadores.'],
      ['¿Es temporal el contrato fijo-discontinuo?', 'No, es indefinido.', ['Sí, siempre.', 'Solo si hay llamamiento.', 'Solo en turismo.'], 'Artículo 16 del Estatuto de los Trabajadores.'],
      ['¿Qué caracteriza al contrato a tiempo parcial?', 'Jornada inferior a la de un comparable a tiempo completo.', ['Trabajo solo de tarde.', 'Contrato siempre temporal.', 'Ausencia de cotización.'], 'Artículo 12 del Estatuto de los Trabajadores.'],
      ['¿Debe formalizarse por escrito el contrato a tiempo parcial?', 'Sí.', ['No.', 'Solo si supera un año.', 'Solo en Administración.'], 'Artículo 12 del Estatuto de los Trabajadores.'],
      ['¿Cuáles son las dos modalidades formativas?', 'Alternancia y práctica profesional.', ['Obra y servicio.', 'Interinidad y relevo.', 'Temporal y eventual.'], 'Artículo 11 del Estatuto de los Trabajadores.'],
      ['¿Cómo es la afiliación a la Seguridad Social?', 'Obligatoria y única para toda la vida y el sistema.', ['Voluntaria y múltiple.', 'Anual y renovable.', 'Solo empresarial.'], 'Artículo 15 de la LGSS.'],
      ['¿Es lo mismo afiliación que alta?', 'No.', ['Sí.', 'Solo para autónomos.', 'Solo si cambia la empresa.'], 'La afiliación es única; las altas reflejan períodos concretos.'],
      ['¿Quién debe solicitar afiliación y alta del trabajador en Régimen General?', 'El empresario.', ['El ayuntamiento de residencia.', 'El sindicato.', 'El trabajador exclusivamente.'], 'Artículo 139 de la LGSS.'],
      ['¿Puede el trabajador instar el alta si incumple el empresario?', 'Sí.', ['No.', 'Solo tras despido.', 'Solo con autorización empresarial.'], 'Artículo 139 de la LGSS.'],
      ['¿Cuándo nace la obligación de cotizar?', 'Con el inicio del trabajo, incluido el período de prueba.', ['Al primer salario anual.', 'Tras un mes.', 'Con la baja.'], 'Artículo 144 de la LGSS.'],
      ['¿Cesa la cotización si se comunica baja pero continúa el trabajo?', 'No.', ['Sí.', 'Solo si el contrato es verbal.', 'Solo en jornada parcial.'], 'Artículo 144 de la LGSS.'],
      ['¿Qué sistema calcula cuotas por trabajador con datos de la TGSS?', 'Liquidación directa.', ['Concurso-oposición.', 'Liquidación tributaria local.', 'Compensación civil.'], 'Artículo 22 de la LGSS.'],
      ['¿Qué sucede tras impago en período voluntario?', 'Pueden generarse recargos e iniciarse recaudación ejecutiva.', ['La deuda desaparece.', 'Se convierte en salario.', 'Se anula el alta automáticamente.'], 'LGSS y Reglamento General de Recaudación.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      17: 'BOE · Ley 4/2011 / TREBEP',
      18: 'BOE · Ley 4/2011 / TREBEP',
      19: 'BOE · Ley 4/2011 / TREBEP',
      20: 'BOE · Estatuto de los Trabajadores',
      21: 'BOE · Estatuto de los Trabajadores / LGSS'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v45-t${number}-q${index + 1}`,
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
      sec('Resumen orientado al aprobado', [`Tema de alta rentabilidad para test y supuesto práctico. Fuente principal: ${value.source}. Distingue siempre clase de personal o contrato, requisito, procedimiento, plazo y efecto jurídico.`]),
      sec('Rigor normativo', ['Contenido revisado con textos consolidados oficiales consultados en julio de 2026. Las cuantías, bases y tipos de cotización variables se excluyen de la memorización estable y deberán actualizarse antes del examen.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Relación', 'Funcionarial de carrera, interina, laboral o eventual; indefinida, temporal, parcial o fija-discontinua.'],
      ['Requisito o causa', 'Acceso, nombramiento, modalidad contractual, modificación, suspensión, extinción o situación administrativa.'],
      ['Procedimiento', 'Órgano competente, forma escrita, audiencia, prueba, motivación y notificación.'],
      ['Plazo', 'Toma de posesión, prescripción, duración del procedimiento, alta, baja, cotización o recaudación.'],
      ['Efecto', 'Adquisición o pérdida de condición, reserva o reingreso, sanción, continuidad o extinción del vínculo.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v45';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.45';

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

  const internalTheme = theme(22);
  if (internalTheme) {
    internalTheme.auditStatus = 'pendiente de Acuerdo Regulador y Estatutos vigentes del OAPGT';
    internalTheme.motorCoverage = 'diputacion-fuente-interna-pendiente-v45';
  }

  const allThemes = ope.themes.map(item => {
    const questions = (ope.themeTests[item.id] || []).filter(valid);
    const generic = questions.filter(isGeneric).length;
    const content = questions.length - generic;
    item.globalAuditV42 = { total: questions.length, content, generic, state: content >= 30 ? 'objetivo 30+' : content >= 20 ? 'banco sólido' : content >= 10 ? 'base real' : content ? 'insuficiente' : 'solo plantilla', target: 30 };
    return { number: Number(item.number), title: item.title, total: questions.length, content, generic, state: item.globalAuditV42.state };
  });
  const totals = allThemes.reduce((acc, item) => ({ total: acc.total + item.total, content: acc.content + item.content, generic: acc.generic + item.generic }), { total: 0, content: 0, generic: 0 });
  ope.globalTestAudit = {
    version: 'v0.45.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4500 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 160) {
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
    const ordered = shuffle(selected, seed * 4513);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v45-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v45-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v45-sim${seed}`,
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
      'Desarrollados en profundidad los temas 17 a 21 de Diputación',
      'Añadidas 75 preguntas manuales de empleo público, disciplina, contratación laboral y Seguridad Social',
      'Marcado el tema 22 como pendiente de fuentes internas oficiales',
      'Regenerados simulacros únicamente con preguntas de contenido real'
    ]
  });

  window.OPOWEB_DIPUTACION_V45 = {
    version: `v${VERSION}`,
    revisedThemes: [17, 18, 19, 20, 21],
    manualQuestions: 75,
    cumulativeManualQuestions: 225,
    totalDeepThemes: 15,
    pendingInternalThemes: [22],
    officialSources: ['Ley 4/2011', 'TREBEP', 'Estatuto de los Trabajadores', 'Ley General de la Seguridad Social']
  };
})();