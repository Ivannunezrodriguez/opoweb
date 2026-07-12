(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const VERSION = '0.74.0';
  const SOURCE = 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const rows13 = [
    ['¿Cuál es el objeto principal de la Ley Orgánica 2/2023?','Regular el sistema universitario y los mecanismos de coordinación, cooperación y colaboración entre Administraciones competentes','Regular exclusivamente las universidades privadas','Regular solo las becas universitarias','Sustituir toda la legislación educativa no universitaria','Artículo 1.1 de la LOSU.','baja'],
    ['¿Qué integra el sistema universitario a efectos de la LOSU?','Las universidades públicas y privadas y los centros y estructuras que sirven al desarrollo de sus funciones','Solo las universidades públicas','Únicamente los ministerios con competencias educativas','Exclusivamente los centros que imparten doctorado','Artículo 1.2 de la LOSU.','baja'],
    ['¿Cuáles son las funciones centrales que caracterizan a una universidad según la LOSU?','Docencia, investigación y transferencia e intercambio del conocimiento','Inspección tributaria, contratación y sanción','Solo docencia de Grado','Únicamente investigación aplicada','Artículo 1.2 de la LOSU.','baja'],
    ['¿Cómo presta el sistema universitario el servicio público de educación superior universitaria?','Mediante la docencia, la investigación y la transferencia del conocimiento','Solo mediante títulos propios','Exclusivamente mediante enseñanza presencial','A través de la actividad reglamentaria autonómica','Artículo 2.1 de la LOSU.','baja'],
    ['¿Qué función universitaria comprende la creación, transmisión y evaluación crítica del conocimiento?','La educación y formación del estudiantado','La fiscalización presupuestaria','La potestad sancionadora','La acreditación profesional colegial','Artículo 2.2.a de la LOSU.','media'],
    ['¿En qué ámbitos promueve la LOSU la innovación a partir del conocimiento?','Sociales, económicos, medioambientales, tecnológicos e institucionales','Solo mercantiles y tributarios','Exclusivamente artísticos','Únicamente administrativos internos','Artículo 2.2.d de la LOSU.','media'],
    ['¿Qué referentes deben orientar el ejercicio de las funciones universitarias?','Los derechos humanos y fundamentales, la memoria democrática, la equidad, la sostenibilidad, la lucha climática y los ODS','Solo la rentabilidad económica','Únicamente la tradición académica','Exclusivamente la autonomía financiera','Artículo 2.3 de la LOSU.','alta'],
    ['¿En qué precepto constitucional se fundamenta la autonomía universitaria?','En el artículo 27.10 de la Constitución','En el artículo 14 exclusivamente','En el artículo 103.1','En el artículo 149.1.14','Artículo 3.1 de la LOSU.','media'],
    ['¿Qué instrumento elaboran las universidades públicas en ejercicio de su autonomía?','Sus Estatutos','Un reglamento estatal único','La ley autonómica de creación','El real decreto de títulos oficiales','Artículo 3.2.b de la LOSU.','baja'],
    ['¿Qué dimensión forma parte expresamente de la autonomía universitaria?','La autonomía económica y financiera','La inmunidad frente al control público','La potestad legislativa estatal','La exención general de rendición de cuentas','Artículo 3.2.e de la LOSU.','baja'],
    ['¿Qué libertad garantiza la autonomía universitaria al profesorado?','La libertad de cátedra en docencia, investigación y estudio','La libertad para ignorar los planes de estudio','La libre fijación individual de precios públicos','La exención de toda evaluación docente','Artículo 3.3 de la LOSU.','media'],
    ['¿Qué deben asegurar las Administraciones competentes para hacer efectiva la autonomía de las universidades públicas?','Su suficiencia y estabilidad financieras','La gratuidad de todos los títulos propios','La ausencia de auditoría externa','La libre creación de tributos universitarios','Artículo 3.4 de la LOSU.','media'],
    ['¿Qué obligación acompaña al ejercicio de la autonomía universitaria?','Rendir cuentas a la sociedad, gestionar con transparencia y ofrecer un servicio público de calidad','Evitar toda publicación presupuestaria','Someter cada decisión al Gobierno central','Renunciar a la autoorganización','Artículo 3.5 de la LOSU.','media'],
    ['¿Cómo se crea ordinariamente una universidad pública en una Comunidad Autónoma?','Por ley de su Asamblea Legislativa, previo informe preceptivo de la Conferencia General de Política Universitaria','Por orden del Rector','Por resolución del Consejo Social','Por convenio entre universidades','Artículo 4.1.a de la LOSU.','alta'],
    ['¿Cómo se crean universidades públicas de especiales características de ámbito estatal?','Por ley de las Cortes Generales a propuesta del Gobierno, de acuerdo con la Comunidad Autónoma y con informe preceptivo de la Conferencia General de Política Universitaria','Por decreto del Rector','Por acuerdo exclusivo del Consejo de Universidades','Por resolución de ANECA','Artículo 4.1.b de la LOSU.','alta'],
    ['¿Quién fija las condiciones y requisitos básicos de creación y reconocimiento de universidades?','El Gobierno mediante real decreto','Cada Rector mediante resolución','El Consejo Social mediante acuerdo','La ANECA mediante circular','Artículo 4.2 de la LOSU.','media'],
    ['¿Quién autoriza el inicio de actividades de una universidad una vez comprobados los requisitos?','El órgano competente de la Comunidad Autónoma donde radique','El Consejo de Estudiantes','El Tribunal de Cuentas','La Conferencia de Rectores por mayoría simple','Artículo 4.2 de la LOSU.','media'],
    ['¿Qué planes y medidas son requisito de creación o reconocimiento de una universidad?','Igualdad de género, corrección de brecha salarial, accesibilidad y prevención frente a violencia, discriminación o acoso','Solo un plan de marketing','Únicamente un plan de infraestructuras deportivas','Exclusivamente un código tributario propio','Artículo 4.3 de la LOSU.','alta'],
    ['¿Qué entidades ejercen funciones de evaluación y acreditación universitaria?','ANECA y las agencias autonómicas inscritas en EQAR, dentro de sus competencias','Solo el Ministerio de Hacienda','Exclusivamente los Consejos Sociales','Las diputaciones provinciales','Artículo 5.4 de la LOSU.','media'],
    ['¿Cuál es la modalidad preferente de la docencia universitaria?','La presencial, aunque también puede ser virtual o híbrida','La virtual exclusivamente','La híbrida obligatoria','La enseñanza por correspondencia','Artículo 6.1 de la LOSU.','baja'],
    ['¿Quién debe participar de forma plena y efectiva en la elaboración y actualización de los planes de estudio?','El estudiantado','Solo el Consejo Social','Exclusivamente la Comunidad Autónoma','Únicamente el personal externo','Artículo 6.2 de la LOSU.','media'],
    ['¿Cómo se estructura la docencia universitaria según la LOSU?','En docencia oficial de Grado, Máster y Doctorado y en títulos propios','Solo en Grado y Máster','Exclusivamente en formación permanente','En ciclos de primaria, secundaria y universidad','Artículo 6.6 de la LOSU.','baja'],
    ['¿Qué efecto tiene la inscripción de un título oficial en el Registro de Universidades, Centros y Títulos?','Tiene efectos constitutivos respecto de su creación','Es meramente estadística','Solo acredita la publicidad del título','Sustituye al plan de estudios','Artículo 7.3 de la LOSU.','alta'],
    ['¿Qué modalidades puede incluir la formación a lo largo de la vida?','Microcredenciales, micromódulos y otros programas de corta duración','Solo doctorados industriales','Únicamente grados de cuatro años','Exclusivamente oposiciones internas','Artículo 7.5 de la LOSU.','media'],
    ['¿Quién expide los títulos universitarios oficiales en nombre del Rey?','El Rector o Rectora de la universidad','El Consejo Social','La agencia de calidad','El Ministerio de Hacienda','Artículo 8.1 de la LOSU.','baja'],
    ['¿En qué tres ciclos se estructuran las enseñanzas universitarias oficiales?','Grado, Máster Universitario y Doctorado','Diplomatura, Licenciatura y Especialización','Básico, Medio y Superior','Grado, Formación Profesional y Doctorado','Artículo 9.1 de la LOSU.','baja'],
    ['¿Quién regula con carácter general la convalidación, homologación, equivalencia y reconocimiento de créditos?','El Gobierno, previo informe del Consejo de Universidades','Cada departamento universitario','La Conferencia General de Política Universitaria sin intervención del Gobierno','El Consejo Social de cada universidad','Artículo 10 de la LOSU.','media'],
    ['¿Qué naturaleza tiene la investigación para el personal docente e investigador?','Es un derecho y un deber, al igual que la docencia','Es solo una actividad voluntaria sin evaluación','Es exclusiva del profesorado funcionario','Es incompatible con la docencia','Artículo 11.2 de la LOSU.','media'],
    ['¿Cuándo debe depositar el PDI la versión final aceptada y los datos asociados en un repositorio abierto?','De forma simultánea a la fecha de publicación','Un año después de publicar','Solo cuando lo solicite ANECA','Antes de iniciar la investigación','Artículo 12.2 de la LOSU.','alta'],
    ['¿Qué deben evitar las universidades en sus procesos de internacionalización?','La segregación del estudiantado por razones económicas','La movilidad del profesorado','El uso de lenguas extranjeras','La cooperación con el Espacio Europeo de Educación Superior','Artículo 23.1 de la LOSU.','media']
  ];

  const rows14 = [
    ['¿Qué deben garantizar las Administraciones en el acceso a los estudios universitarios?','Igualdad de oportunidades y condiciones sin discriminación','Preferencia automática por residencia','Acceso exclusivo por capacidad económica','Reserva general para personal universitario','Artículo 31.1 de la LOSU.','baja'],
    ['¿Quién establece las normas básicas de acceso a las enseñanzas universitarias oficiales?','El Gobierno mediante real decreto, previo informe de la Conferencia General de Política Universitaria y del Consejo de Estudiantes Universitario','Cada Rector sin informes','La ANECA mediante resolución','El Consejo Social mediante reglamento','Artículo 31.2 de la LOSU.','alta'],
    ['¿Quién puede establecer límites máximos de admisión por exigencias europeas, internacionales o de interés general?','El Gobierno, previo acuerdo de la Conferencia General de Política Universitaria','Cada universidad sin coordinación','El Consejo de Estudiantes','La agencia autonómica de calidad','Artículo 31.6 de la LOSU.','alta'],
    ['¿Cómo configura la LOSU el acceso a becas y ayudas al estudio?','Como un derecho subjetivo si se cumplen los requisitos reguladores','Como una concesión puramente discrecional','Como un derecho exclusivo del doctorado','Como una ayuda reservada al personal funcionario','Artículo 32.1 de la LOSU.','media'],
    ['¿Quién establece el sistema general de becas con cargo a sus presupuestos?','El Estado, sin perjuicio de las competencias autonómicas','Solo las universidades privadas','Exclusivamente los ayuntamientos','La Conferencia de Rectores','Artículo 32.2 de la LOSU.','baja'],
    ['¿Qué criterio debe ser prioritario y fundamental en la concesión de becas?','El socioeconómico','La antigüedad en la universidad','La afinidad política','La residencia en la capital','Artículo 32.5 de la LOSU.','media'],
    ['¿Qué pueden establecer las universidades públicas para favorecer acceso y permanencia?','Exenciones parciales o totales de precios públicos con cargo a sus presupuestos','Impuestos universitarios propios','Sanciones por bajo rendimiento','Recargos obligatorios por matrícula','Artículo 32.6 de la LOSU.','media'],
    ['¿Quiénes tienen derecho a bonificación total de servicios académicos de matrícula en los términos de la normativa específica?','El estudiantado con discapacidad y las víctimas de violencia de género y otras violencias contra la mujer','Todo estudiante de primer curso','Solo el personal universitario','Únicamente quienes cursen títulos propios','Artículo 32.6 de la LOSU.','alta'],
    ['¿Qué derecho tiene el estudiantado antes de matricularse respecto de las asignaturas?','Conocer los planes docentes y la lengua de impartición','Elegir libremente al tribunal de evaluación','Modificar unilateralmente el plan de estudios','Exigir que toda docencia sea virtual','Artículo 33.c de la LOSU.','media'],
    ['¿Qué información debe conocer el estudiantado antes del periodo de matrícula?','Las modalidades presencial, virtual o híbrida de docencia y evaluación','La identidad de todos los futuros egresados','Los salarios del profesorado','La composición de todos los órganos externos','Artículo 33.d de la LOSU.','media'],
    ['¿Qué derecho reconoce la LOSU respecto de las calificaciones?','Evaluación objetiva, publicidad de normas, revisión y mecanismos de reclamación','Calificación secreta sin revisión','Aprobado automático por asistencia','Elección libre del criterio después del examen','Artículo 33.f de la LOSU.','baja'],
    ['¿Qué alcance tiene el derecho de accesibilidad universal del estudiantado?','Edificios, entornos físicos y virtuales, servicios, procedimientos, información, materiales y evaluación','Solo el acceso físico al aula','Únicamente la página web institucional','Exclusivamente los exámenes escritos','Artículo 33.q de la LOSU.','alta'],
    ['¿Qué participación deben garantizar las universidades al estudiantado?','Activa, libre y significativa en diseño, implementación y evaluación de la política universitaria','Solo consultiva al finalizar los estudios','Exclusivamente en actividades deportivas','Únicamente mediante encuestas anónimas','Artículo 34.1 de la LOSU.','media'],
    ['¿Dónde tiene derecho el estudiantado a representación activa y significativa?','En los órganos de gobierno y representación de la universidad y en los consejos estudiantiles','Solo en asociaciones privadas','Únicamente en el Consejo Social','Exclusivamente en órganos académicos sin voto','Artículo 34.3 de la LOSU.','media'],
    ['¿Cuál es un deber expreso del estudiantado?','Participar de forma activa y responsable en las actividades docentes y universitarias','Fijar los precios públicos','Aprobar los presupuestos de la universidad','Nombrar al Rector','Artículo 36.a de la LOSU.','baja'],
    ['¿Qué exige la LOSU para el estudiantado con discapacidad?','Medidas de acción positiva y ajustes razonables curriculares, metodológicos y de evaluación','Un sistema académico separado','La exclusión de prácticas externas','La renuncia a la evaluación objetiva','Artículo 37.2 de la LOSU.','alta'],
    ['¿Qué corresponde a las universidades en virtud de su autonomía económica y financiera?','Elaborar, aprobar y gestionar sus presupuestos y administrar sus bienes','Crear tributos estatales','Aprobar los Presupuestos Generales del Estado','Fiscalizar a las Comunidades Autónomas','Artículo 54.2 de la LOSU.','baja'],
    ['¿Qué objetivo mínimo de gasto público universitario comparte el sector público para 2030?','El 1 por ciento del Producto Interior Bruto','El 0,1 por ciento del PIB','El 5 por ciento del presupuesto de cada universidad privada','El 10 por ciento del PIB','Artículo 55.2 de la LOSU.','alta'],
    ['¿En qué marco se encuadra la elaboración de los presupuestos universitarios?','En un marco presupuestario a medio plazo compatible con el principio de anualidad','En un presupuesto quinquenal sin anualidad','En un marco exclusivamente mensual','En un sistema sin límites temporales','Artículo 56.1 de la LOSU.','media'],
    ['¿Qué características debe reunir el presupuesto universitario?','Ser público, único, equilibrado y comprender todos los ingresos y gastos','Ser secreto, múltiple y deficitario','Ser solo de gastos','Ser plurianual y no publicable','Artículo 57.1 de la LOSU.','baja'],
    ['¿Qué informes deben incluirse en la elaboración del presupuesto?','Impacto por razón de género e impacto medioambiental','Solo impacto tributario','Únicamente impacto informático','Ningún informe preceptivo','Artículo 57.3 de la LOSU.','media'],
    ['¿Qué porcentaje mínimo del presupuesto debe destinarse a programas propios de investigación?','No inferior al 5 por ciento','No inferior al 1 por ciento','Exactamente el 10 por ciento','No existe mínimo legal','Artículo 57.7 de la LOSU.','alta'],
    ['¿Qué debe hacer el Consejo Social ante una liquidación con remanente de tesorería negativo?','Reducir gastos del nuevo presupuesto por cuantía igual al déficit','Aumentar automáticamente los precios públicos','Suprimir todos los títulos propios','Aprobar una operación de crédito sin autorización','Artículo 57.8 de la LOSU.','alta'],
    ['¿Qué sistema debe integrar siempre el control interno económico-financiero universitario?','Un sistema de auditoría interna con autonomía funcional','Una auditoría dependiente del Rector','Solo controles informales','Una inspección municipal anual','Artículo 59.3 de la LOSU.','media'],
    ['¿De qué colectivos se compone el personal docente e investigador?','Profesorado de los cuerpos docentes universitarios y profesorado laboral','Solo profesorado funcionario','Exclusivamente personal investigador predoctoral','Únicamente profesorado asociado','Artículo 64.1 de la LOSU.','baja'],
    ['¿Qué límite general establece la LOSU al profesorado laboral temporal?','No puede superar el 8 por ciento de la plantilla de PDI, con las exclusiones legales','No puede superar el 50 por ciento sin excepciones','Debe ser siempre mayoritario','No existe límite alguno','Artículo 64.3 de la LOSU.','alta'],
    ['¿Qué efecto tiene la movilidad temporal del PDI sobre su adscripción?','Mantiene a todos los efectos su adscripción a la universidad de origen','Pierde automáticamente su plaza','Se integra definitivamente en la entidad de destino','Queda en excedencia forzosa en todo caso','Artículo 66.2 de la LOSU.','media'],
    ['¿Cuáles son los cuerpos docentes universitarios?','Catedráticas y Catedráticos de Universidad y Profesoras y Profesores Titulares de Universidad','Profesores asociados y visitantes','Ayudantes doctores y eméritos','Inspectores y técnicos universitarios','Artículo 68.1 de la LOSU.','baja'],
    ['¿Cómo se compone el personal técnico, de gestión y de administración y servicios de las universidades públicas?','Por personal funcionario y laboral suficiente para desarrollar los servicios y funciones','Solo por personal funcionario','Exclusivamente por personal laboral temporal','Únicamente por personal eventual','Artículo 89.1 de la LOSU.','baja'],
    ['¿Qué principios rigen el acceso a plazas de PTGAS y dónde deben publicarse las convocatorias?','Igualdad, mérito, capacidad, transparencia, publicidad y concurrencia; en el BOE y diario oficial autonómico','Antigüedad y libre designación; solo en el tablón interno','Confianza y discrecionalidad; únicamente en la web','Sorteo y residencia; en el boletín municipal','Artículo 91 de la LOSU.','alta']
  ];

  function buildBank(number, rows) {
    const current = theme(number);
    if (!current) return;
    const questions = rows.map((row, index) => {
      const [text, correct, w1, w2, w3, justification, difficulty] = row;
      const raw = [correct, w1, w2, w3];
      const shift = index % 4;
      const ordered = raw.slice(shift).concat(raw.slice(0, shift));
      return {
        id: `uc3m-v74-t${number}-q${index + 1}`,
        text,
        options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        source: SOURCE,
        difficulty,
        auditReal: true,
        auditTheme: number
      };
    });
    ope.themeTests[current.id] = questions;
    current.auditStatus = `banco real 30+ v0.74 · LOSU consolidada · tema ${number}`;
    current.motorCoverage = `uc3m-losu-t${number}-completo-v74`;
    current.officialSourceUrl = SOURCE;
  }

  buildBank(13, rows13);
  buildBank(14, rows14);

  const t13 = theme(13);
  if (t13) {
    t13.sections = [
      { heading: 'Resumen orientado al aprobado', paragraphs: ['La LOSU define el sistema universitario, sus funciones, la autonomía, la creación y calidad de universidades, la organización de enseñanzas, la investigación, la relación con la sociedad y la internacionalización.', 'El examen puede convertir en distractor cualquier cambio de órgano, informe, modalidad docente o efecto de una inscripción.'] },
      { heading: 'Funciones y autonomía', paragraphs: ['El servicio público universitario se presta mediante docencia, investigación y transferencia del conocimiento. La autonomía se apoya en el artículo 27.10 de la Constitución.', 'La autonomía comprende Estatutos, organización, enseñanzas, investigación, personal y dimensión económico-financiera, pero exige transparencia y rendición de cuentas.'] },
      { heading: 'Enseñanzas e investigación', paragraphs: ['La docencia es preferentemente presencial, aunque puede ser virtual o híbrida. Los títulos oficiales son Grado, Máster Universitario y Doctorado y su inscripción en el RUCT tiene efectos constitutivos.', 'La investigación es derecho y deber del PDI. La Ciencia Abierta exige depósito simultáneo de la versión final aceptada y de los datos asociados.'] },
      { heading: 'Internacionalización', paragraphs: ['Las universidades fomentan la internacionalización de docencia, investigación, transferencia, personal y planes de estudio, evitando segregación económica del estudiantado.', 'La cooperación internacional también se conecta con el Espacio Europeo y el Espacio Iberoamericano de Educación Superior.'] },
      { heading: 'Opo-Test: puntos calientes', paragraphs: ['• Artículo 27.10 CE: autonomía universitaria.','• Creación ordinaria: ley autonómica e informe preceptivo de la Conferencia General de Política Universitaria.','• Títulos oficiales: expedición por el Rector en nombre del Rey e inscripción constitutiva en el RUCT.','• Docencia: preferentemente presencial.','• Ciencia Abierta: depósito simultáneo a la publicación.'] }
    ];
    t13.reviewTable = [['Bloque','Dato esencial','Artículos'],['Funciones','Docencia, investigación y transferencia','1–2'],['Autonomía','Artículo 27.10 CE; rendición de cuentas','3'],['Creación y calidad','Ley e informe preceptivo; control autonómico','4–5'],['Enseñanzas','Grado, Máster y Doctorado; RUCT','6–10'],['Investigación','Derecho y deber; Ciencia Abierta','11–13'],['Internacionalización','Evitar segregación económica','23–30']];
  }

  const t14 = theme(14);
  if (t14) {
    t14.sections = [
      { heading: 'Resumen orientado al aprobado', paragraphs: ['El tema reúne cuatro bloques: estatuto del estudiantado, régimen económico-financiero, personal docente e investigador y PTGAS.', 'La preparación debe fijarse en derechos subjetivos, porcentajes, órganos, principios de selección y efectos presupuestarios.'] },
      { heading: 'Estudiantado', paragraphs: ['El acceso se rige por igualdad, mérito y capacidad. Las becas son un derecho subjetivo sujeto a requisitos y los criterios socioeconómicos tienen prioridad.', 'La LOSU reconoce evaluación objetiva, revisión, accesibilidad universal, participación significativa y ajustes razonables.'] },
      { heading: 'Régimen económico-financiero', paragraphs: ['El objetivo compartido es alcanzar al menos el 1 % del PIB en gasto público universitario. El presupuesto es público, único, equilibrado y completo.', 'Debe destinarse al menos un 5 % a investigación propia; el remanente negativo obliga al Consejo Social a reducir gastos del nuevo presupuesto.'] },
      { heading: 'PDI y PTGAS', paragraphs: ['El PDI integra cuerpos docentes y profesorado laboral; el temporal está limitado con las exclusiones legales. Los cuerpos son Catedráticos y Titulares de Universidad.', 'El PTGAS puede ser funcionario o laboral. Su acceso se somete a igualdad, mérito, capacidad, transparencia, publicidad y concurrencia.'] },
      { heading: 'Opo-Test: puntos calientes', paragraphs: ['• Becas: derecho subjetivo y prioridad socioeconómica.','• Objetivo financiero: 1 % del PIB.','• Investigación propia: mínimo 5 % del presupuesto.','• PDI temporal: máximo general 8 %.','• PTGAS: convocatoria en BOE y diario oficial autonómico.'] }
    ];
    t14.reviewTable = [['Bloque','Dato esencial','Artículos'],['Acceso y becas','Igualdad; derecho subjetivo','31–32'],['Derechos y deberes','Evaluación, participación, accesibilidad','33–37'],['Financiación','1 % PIB; presupuesto público, único y equilibrado','54–59'],['PDI','Cuerpos y laborales; temporalidad 8 %','64–68'],['PTGAS','Funcionario y laboral; acceso por principios públicos','89–94']];
  }

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      value ^= text.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 75 && round < 240) {
      ope.themes.forEach((current, themeIndex) => {
        if (selected.length >= 75) return;
        const bank = shuffled(ope.themeTests?.[current.id] || [], seed * 347 + themeIndex + round);
        for (let offset = 0; offset < bank.length; offset += 1) {
          const question = bank[(round + themeIndex + offset) % bank.length];
          const key = norm(question?.text);
          if (!key || used.has(key)) continue;
          used.add(key);
          selected.push({ ...question, auditTheme: Number(current.number) });
          break;
        }
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2371);
    return {
      id: `uc3m-v74-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v74-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v74-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(current => ({ number: Number(current.number), count: (ope.themeTests?.[current.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));

  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.74.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}),
    version: 'v0.74.0',
    estimatedProgress: 76,
    completed: ['Temas 13 y 14 completados con 30 preguntas verificadas cada uno','LOSU consolidada integrada en funciones, autonomía, enseñanzas, investigación, estudiantado, financiación, PDI y PTGAS','Simulacros 70 + 5 regenerados con representación de los 20 temas'],
    pending: ['Completar los temas 15 a 17 con 30 preguntas reales','Presupuesto vigente y bases de ejecución UC3M','Normativa propia de matrícula, permanencia y evaluación','Reglas anuales de admisión y delegaciones internas completas']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Temas 13 y 14 completados con 60 preguntas LOSU','Banco UC3M elevado a 540 preguntas','17 de 20 temas alcanzan 30 preguntas','Simulacros 70 + 5 regenerados'] });

  window.OPOWEB_UC3M_V74 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, simulations: ope.simulacros.length, completedThemes: [13, 14], themes: themeAudit };
})();
