(() => {
  const data = window.OPOSICIONES_DATA;
  const carranque = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  const diputacion = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!carranque || !diputacion) return;

  const VERSION = '0.69.0';
  const TARGET = 30;
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];
  const mapping = {
    1: [1, 2, 3],
    2: [2, 4],
    3: [5, 9],
    4: [6, 7],
    5: [8],
    6: [10],
    7: [4, 6],
    9: [13]
  };
  const blocked = ['oapgt', 'acuerdo regulador', 'diputacion provincial de toledo', 'groupwise', 'libreoffice base', 'libreoffice impress'];

  const curated = {
    8: {
      sections: [
        ['Formas de actividad administrativa local', ['La actividad local puede manifestarse mediante intervención o policía, fomento y prestación de servicios públicos. Cada técnica debe ejercerse por el órgano competente y con sometimiento a la ley.', 'La intervención limita o condiciona actividades privadas para proteger intereses generales; el fomento incentiva conductas de interés público; el servicio público satisface necesidades colectivas bajo responsabilidad local.']],
        ['Intervención y licencias', ['Las entidades locales pueden intervenir mediante ordenanzas, licencias o controles preventivos, declaraciones responsables, comunicaciones, control posterior y órdenes individuales.', 'La elección del medio debe respetar igualdad, necesidad y proporcionalidad. Las licencias se entienden otorgadas salvo el derecho de propiedad y sin perjuicio de terceros.']],
        ['Fomento y servicios públicos', ['El fomento puede articularse mediante subvenciones, premios, ayudas o convenios, respetando publicidad, concurrencia, objetividad y control.', 'Los servicios públicos locales pueden gestionarse directa o indirectamente. La forma elegida debe ser sostenible y eficiente, y la prestación debe respetar continuidad, igualdad y adaptación.']]
      ],
      rows: [
        ['¿Cuáles son las formas clásicas de actividad administrativa local?', 'Intervención o policía, fomento y servicio público.', ['Legislación, jurisdicción y diplomacia.', 'Expropiación, indulto y amnistía.', 'Auditoría, contabilidad y estadística exclusivamente.'], 'Ley 7/1985 y Reglamento de Servicios de las Corporaciones Locales.'],
        ['¿Qué finalidad tiene la actividad de policía o intervención?', 'Ordenar o limitar actividades privadas para proteger el interés general.', ['Conceder premios sin control.', 'Prestar siempre servicios en monopolio.', 'Sustituir la potestad legislativa estatal.'], 'Artículo 84 de la Ley 7/1985.'],
        ['¿Qué finalidad caracteriza al fomento administrativo?', 'Estimular actividades privadas de interés público sin asumir directamente su prestación.', ['Sancionar infracciones.', 'Resolver recursos judiciales.', 'Eliminar la iniciativa privada.'], 'Reglamento de Servicios de las Corporaciones Locales.'],
        ['¿Qué caracteriza al servicio público local?', 'La satisfacción regular de necesidades colectivas bajo responsabilidad de la entidad local.', ['La actividad privada sin control público.', 'Una sanción administrativa.', 'Un acto legislativo.'], 'Artículos 85 y 86 de la Ley 7/1985.'],
        ['¿Cuál de estos es un medio de intervención local?', 'La declaración responsable o comunicación previa.', ['La aprobación de una ley orgánica.', 'La sentencia judicial.', 'La emisión de moneda.'], 'Artículo 84.1 de la Ley 7/1985.'],
        ['¿Qué principios deben respetar los medios de intervención?', 'Igualdad, necesidad y proporcionalidad.', ['Secreto, arbitrariedad y preferencia.', 'Rentabilidad privada y exclusividad.', 'Retroactividad y confiscación.'], 'Artículo 84.2 de la Ley 7/1985.'],
        ['¿Puede exigirse licencia cuando exista un medio menos restrictivo suficiente?', 'No, debe utilizarse el medio necesario y proporcionado.', ['Sí, siempre.', 'Solo por decisión verbal.', 'Sí, aunque no exista interés general.'], 'Artículos 84 y 84 bis de la Ley 7/1985.'],
        ['¿Qué permite una declaración responsable?', 'Iniciar una actividad desde su presentación, sin perjuicio de comprobación y control.', ['Obtener una sentencia.', 'Evitar toda inspección posterior.', 'Sustituir cualquier autorización sectorial.'], 'Artículo 69 de la Ley 39/2015 y artículo 84 de la Ley 7/1985.'],
        ['¿Qué diferencia básica existe entre licencia y declaración responsable?', 'La licencia exige control previo; la declaración desplaza el control principalmente a un momento posterior.', ['No existe diferencia.', 'La declaración la emite el Ayuntamiento.', 'La licencia nunca se comprueba.'], 'Ley 39/2015 y Ley 7/1985.'],
        ['¿Qué debe hacer la Administración tras una declaración responsable inexacta en un aspecto esencial?', 'Impedir la continuación y adoptar las consecuencias previstas legalmente.', ['Convalidarla siempre.', 'Ignorar la inexactitud.', 'Convertirla en subvención.'], 'Artículo 69.4 de la Ley 39/2015.'],
        ['¿Con qué cláusula tradicional se otorgan las licencias locales?', 'Salvo el derecho de propiedad y sin perjuicio de tercero.', ['Con transmisión automática de la propiedad.', 'Sin posibilidad de control.', 'Con inmunidad frente a la ley.'], 'Reglamento de Servicios de las Corporaciones Locales.'],
        ['¿Autoriza una licencia municipal a incumplir normativa sectorial?', 'No.', ['Sí, siempre.', 'Solo si es una actividad económica.', 'Sí, cuando el interesado lo solicita.'], 'Principio de legalidad y coordinación de autorizaciones.'],
        ['¿Qué debe identificar una orden individual de policía?', 'El destinatario, la conducta exigida, su fundamento y el plazo cuando proceda.', ['Solo el nombre del empleado tramitador.', 'La opinión política del órgano.', 'Un premio económico.'], 'Ley 39/2015 y potestad de intervención local.'],
        ['¿Qué exige una medida de policía que limita derechos?', 'Motivación y proporcionalidad.', ['Ausencia de expediente.', 'Secreto permanente.', 'Aprobación por una empresa privada.'], 'Artículo 35 de la Ley 39/2015 y artículo 84.2 de la Ley 7/1985.'],
        ['¿Qué instrumento suele utilizarse para ordenar con carácter general una actividad local?', 'Una ordenanza o reglamento local.', ['Una llamada telefónica.', 'Una sentencia del alcalde.', 'Un contrato laboral.'], 'Artículos 4 y 84 de la Ley 7/1985.'],
        ['¿Qué principios rigen normalmente una subvención pública?', 'Publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación.', ['Secreto y libre elección personal.', 'Automaticidad sin crédito.', 'Ausencia de justificación.'], 'Ley 38/2003, General de Subvenciones.'],
        ['¿Qué requisito presupuestario necesita una ayuda municipal?', 'Crédito adecuado y suficiente.', ['Solo una promesa verbal.', 'Un ingreso del beneficiario.', 'Una licencia urbanística.'], 'Ley 38/2003 y normativa presupuestaria local.'],
        ['¿Debe justificarse el destino de una subvención?', 'Sí, en los términos de las bases y la resolución.', ['No, nunca.', 'Solo si supera un millón de euros.', 'Únicamente mediante declaración telefónica.'], 'Ley 38/2003, General de Subvenciones.'],
        ['¿Qué puede producir el incumplimiento de la finalidad de una subvención?', 'El reintegro y, en su caso, responsabilidad sancionadora.', ['La adquisición de un derecho perpetuo.', 'La conversión en salario.', 'La nulidad de todas las ordenanzas.'], 'Ley 38/2003, General de Subvenciones.'],
        ['¿Qué órgano debe aprobar las bases reguladoras cuando proceda?', 'El órgano competente según la normativa y la organización local.', ['Cualquier empleado.', 'El beneficiario.', 'La entidad bancaria.'], 'Ley 38/2003 y régimen local.'],
        ['¿Qué formas de gestión directa contempla la legislación local?', 'Gestión por la entidad, organismo autónomo, entidad pública empresarial o sociedad mercantil local íntegramente pública.', ['Solo concesión privada.', 'Solo gestión estatal.', 'Únicamente asociación vecinal.'], 'Artículo 85.2 de la Ley 7/1985.'],
        ['¿A qué normativa se remite la gestión indirecta de servicios?', 'A la normativa de contratos del sector público.', ['Al Código Penal exclusivamente.', 'A la legislación electoral.', 'A la normativa universitaria.'], 'Artículo 85.2 de la Ley 7/1985.'],
        ['¿Qué criterio debe justificar la forma de gestión de un servicio?', 'La sostenibilidad y eficiencia entre las alternativas permitidas.', ['La preferencia personal del contratista.', 'El secreto del expediente.', 'La ausencia de memoria.'], 'Artículo 85.2 de la Ley 7/1985.'],
        ['¿Qué principio exige que un servicio esencial se preste regularmente?', 'El principio de continuidad.', ['El principio de discontinuidad.', 'La libre suspensión sin causa.', 'La retroactividad.'], 'Principios de los servicios públicos locales.'],
        ['¿Qué principio exige tratar de igual modo a quienes estén en la misma situación?', 'El principio de igualdad.', ['El principio de arbitrariedad.', 'La preferencia personal.', 'La confidencialidad absoluta del servicio.'], 'Principios de los servicios públicos y artículo 14 de la Constitución.'],
        ['¿Puede una entidad local ejercer iniciativa pública para actividades económicas?', 'Sí, cuando se tramite y justifique conforme a la legislación local.', ['No, nunca.', 'Solo con autorización judicial.', 'Únicamente fuera de su territorio.'], 'Artículo 86 de la Ley 7/1985.'],
        ['¿Qué debe acreditar el expediente de iniciativa económica local?', 'Conveniencia, oportunidad y sostenibilidad de la medida.', ['Solo la identidad de una empresa.', 'La ausencia de competencia.', 'Un acuerdo verbal.'], 'Artículo 86 de la Ley 7/1985.'],
        ['¿Qué diferencia existe entre servicio público y actividad económica local?', 'El servicio atiende una competencia o necesidad colectiva; la iniciativa económica actúa en el mercado con justificación específica.', ['Son siempre idénticos.', 'La actividad económica no requiere expediente.', 'El servicio público solo puede ser privado.'], 'Artículos 85 y 86 de la Ley 7/1985.'],
        ['¿Puede cobrarse una contraprestación por un servicio local?', 'Sí, mediante la figura jurídica procedente y conforme a la ley.', ['No, nunca.', 'Solo mediante sanción.', 'Únicamente en efectivo sin recibo.'], 'Texto refundido de Haciendas Locales y normativa contractual.'],
        ['¿Qué debe comprobarse antes de iniciar una actividad sometida a control municipal?', 'El título habilitante exigible, la normativa sectorial y las condiciones aplicables.', ['Solo la opinión del solicitante.', 'La existencia de una subvención.', 'La antigüedad del inmueble exclusivamente.'], 'Ley 7/1985, Ley 39/2015 y normativa sectorial.']
      ]
    },
    10: {
      sections: [
        ['Potestad normativa local', ['Las entidades locales tienen potestad reglamentaria y de autoorganización dentro de sus competencias y con sometimiento a la Constitución y a la ley.', 'Las ordenanzas regulan materias de competencia local; los reglamentos suelen ordenar la organización o funcionamiento; los bandos son dictados por la Alcaldía en el ámbito de sus atribuciones.']],
        ['Procedimiento de aprobación', ['La aprobación de ordenanzas corresponde al Pleno. El procedimiento general comprende aprobación inicial, información pública y audiencia por un mínimo de treinta días, resolución de reclamaciones y aprobación definitiva.', 'Si no se presentan reclamaciones o sugerencias, el acuerdo inicial se entiende definitivamente adoptado.']],
        ['Publicación, vigencia y control', ['La ordenanza debe publicarse íntegramente en el boletín oficial de la provincia y no entra en vigor hasta que transcurre el plazo legal desde la comunicación del acuerdo.', 'Las disposiciones locales están sujetas a control jurisdiccional, jerarquía normativa, publicidad, seguridad jurídica y prohibición de retroactividad sancionadora desfavorable.']]
      ],
      rows: [
        ['¿Qué potestad reconoce la legislación básica a municipios, provincias e islas?', 'La potestad reglamentaria y de autoorganización.', ['La potestad legislativa estatal.', 'La potestad jurisdiccional.', 'La potestad de indulto.'], 'Artículo 4.1.a de la Ley 7/1985.'],
        ['¿Dentro de qué límites se ejerce la potestad reglamentaria local?', 'Dentro de las competencias locales y con sometimiento a la Constitución y a la ley.', ['Sin límite material.', 'Por encima de las leyes.', 'Solo según costumbre.'], 'Constitución y Ley 7/1985.'],
        ['¿Qué órgano aprueba las ordenanzas y reglamentos municipales?', 'El Pleno.', ['El alcalde en todo caso.', 'La Junta de Gobierno exclusivamente.', 'El secretario municipal.'], 'Artículo 22.2.d de la Ley 7/1985.'],
        ['¿Quién dicta los bandos municipales?', 'El alcalde.', ['El Pleno.', 'El interventor.', 'La Diputación.'], 'Artículo 21.1.e de la Ley 7/1985.'],
        ['¿Puede un bando contradecir una ordenanza?', 'No.', ['Sí, siempre.', 'Solo durante un mes.', 'Sí, si no se publica.'], 'Principio de jerarquía normativa.'],
        ['¿Cuál es el primer acuerdo del procedimiento general de una ordenanza?', 'La aprobación inicial por el Pleno.', ['La sanción del Rey.', 'La autorización judicial.', 'La aprobación definitiva automática.'], 'Artículo 49.a de la Ley 7/1985.'],
        ['¿Cuánto dura como mínimo la información pública de una ordenanza?', 'Treinta días.', ['Diez días.', 'Quince días.', 'Dos meses.'], 'Artículo 49.b de la Ley 7/1985.'],
        ['¿Qué pueden presentar los interesados durante la información pública?', 'Reclamaciones y sugerencias.', ['Recursos de casación.', 'Sentencias.', 'Contratos laborales.'], 'Artículo 49.b de la Ley 7/1985.'],
        ['¿Qué órgano resuelve las reclamaciones a una ordenanza?', 'El Pleno al aprobarla definitivamente.', ['El solicitante.', 'La empresa concesionaria.', 'El juzgado antes de la aprobación.'], 'Artículo 49.c de la Ley 7/1985.'],
        ['¿Qué ocurre si no se presentan reclamaciones ni sugerencias?', 'El acuerdo inicial se entiende definitivamente adoptado.', ['La ordenanza caduca.', 'Debe repetirse todo el procedimiento.', 'La aprueba el alcalde.'], 'Artículo 49 de la Ley 7/1985.'],
        ['¿Dónde debe publicarse íntegramente una ordenanza local?', 'En el boletín oficial de la provincia.', ['Solo en redes sociales.', 'En el BOE obligatoriamente en todos los casos.', 'Únicamente en el tablón físico.'], 'Artículo 70.2 de la Ley 7/1985.'],
        ['¿Basta publicar un resumen para que entre en vigor una ordenanza?', 'No, debe publicarse el texto íntegro.', ['Sí.', 'Solo en municipios pequeños.', 'Sí, si lo acuerda el alcalde.'], 'Artículo 70.2 de la Ley 7/1985.'],
        ['¿Entra en vigor una ordenanza el mismo día de su aprobación inicial?', 'No.', ['Sí, siempre.', 'Solo si contiene sanciones.', 'Sí, aunque no se publique.'], 'Artículos 65.2 y 70.2 de la Ley 7/1985.'],
        ['¿Qué plazo debe transcurrir, además de la publicación íntegra, para la entrada en vigor?', 'El plazo previsto en el artículo 65.2 de la Ley 7/1985.', ['Ninguno.', 'Un año.', 'Cinco días naturales en todo caso.'], 'Artículos 65.2 y 70.2 de la Ley 7/1985.'],
        ['¿Qué Administración puede requerir la anulación de un acto o acuerdo local que infrinja el ordenamiento?', 'La Administración del Estado o de la comunidad autónoma en los términos legales.', ['Cualquier empresa sin legitimación.', 'Solo el alcalde.', 'Nadie.'], 'Artículos 65 y 66 de la Ley 7/1985.'],
        ['¿Ante qué jurisdicción se impugna directamente una disposición general local?', 'Ante la jurisdicción contencioso-administrativa.', ['Ante la jurisdicción penal exclusivamente.', 'Ante la jurisdicción social.', 'Mediante recurso de alzada.'], 'Ley reguladora de la Jurisdicción Contencioso-Administrativa.'],
        ['¿Cabe recurso administrativo ordinario directo contra una ordenanza?', 'No; las disposiciones generales se impugnan ante la jurisdicción competente.', ['Sí, alzada.', 'Sí, reposición obligatoria.', 'Sí, extraordinario de revisión.'], 'Artículo 112.3 de la Ley 39/2015.'],
        ['¿Puede una ordenanza tipificar infracciones y sanciones?', 'Sí, dentro de la habilitación legal y los límites de la legislación básica.', ['Sin habilitación ni límite.', 'No, nunca.', 'Solo mediante bando.'], 'Título XI de la Ley 7/1985.'],
        ['¿Qué principio exige que las infracciones estén descritas previamente?', 'El principio de tipicidad.', ['El principio de oportunidad.', 'La libre analogía sancionadora.', 'La retroactividad desfavorable.'], 'Constitución y legislación sancionadora.'],
        ['¿Puede aplicarse retroactivamente una ordenanza sancionadora desfavorable?', 'No.', ['Sí, siempre.', 'Solo por acuerdo del alcalde.', 'Sí, si aumenta la multa.'], 'Artículo 9.3 de la Constitución.'],
        ['¿Qué principio exige publicar las normas para que puedan producir efectos?', 'El principio de publicidad normativa.', ['El principio de secreto.', 'La reserva de expediente.', 'La discrecionalidad técnica.'], 'Artículo 9.3 de la Constitución.'],
        ['¿Qué diferencia general existe entre ordenanza y reglamento orgánico?', 'La ordenanza regula materias locales; el reglamento orgánico estructura y ordena la organización municipal.', ['No existe diferencia conceptual.', 'La ordenanza la dicta un juez.', 'El reglamento orgánico es una ley estatal.'], 'Ley 7/1985.'],
        ['¿Qué norma local regula tributos dentro del marco legal?', 'La ordenanza fiscal.', ['El bando de tráfico.', 'El acta de una sesión.', 'Una nota interna.'], 'Texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Tiene la ordenanza fiscal un procedimiento especial?', 'Sí, el previsto en la legislación de haciendas locales.', ['No, se aprueba verbalmente.', 'Solo requiere publicación en redes.', 'La aprueba el contribuyente.'], 'Artículos 15 a 19 del texto refundido de Haciendas Locales.'],
        ['¿Qué debe contener una norma local para respetar la seguridad jurídica?', 'Reglas claras, coherentes, publicadas y dentro de la competencia.', ['Mandatos secretos.', 'Contradicciones deliberadas.', 'Delegaciones ilimitadas.'], 'Artículo 9.3 de la Constitución y principios de buena regulación.'],
        ['¿Puede una ordenanza regular una materia reservada íntegramente a la ley?', 'No, salvo el desarrollo permitido por la habilitación legal.', ['Sí, sin límite.', 'Solo si no se publica.', 'Sí, mediante mayoría simple siempre.'], 'Principio de reserva de ley.'],
        ['¿Qué mayoría se exige con carácter general para aprobar una ordenanza si la ley no prevé otra?', 'Mayoría simple de los miembros presentes.', ['Unanimidad.', 'Mayoría de tres quintos siempre.', 'Mayoría absoluta en todo caso.'], 'Artículos 47 y 49 de la Ley 7/1985.'],
        ['¿Debe una ordenanza identificar su fundamento competencial?', 'Sí, debe encuadrarse en una competencia y habilitación normativa local.', ['No.', 'Solo si crea tasas.', 'Únicamente si lo pide un particular.'], 'Principios de competencia y legalidad.'],
        ['¿Qué función cumple el tablón o portal municipal además del BOP?', 'Facilitar publicidad y acceso, sin sustituir la publicación oficial exigida.', ['Sustituir siempre al BOP.', 'Evitar la aprobación plenaria.', 'Convertir el texto en ley estatal.'], 'Principios de publicidad y transparencia.'],
        ['¿Puede modificarse una ordenanza sin seguir procedimiento?', 'No, la modificación debe tramitarse con las garantías aplicables a su aprobación.', ['Sí, por correo interno.', 'Solo si la modificación es extensa.', 'Sí, mediante acuerdo de un empleado.'], 'Artículo 49 de la Ley 7/1985.']
      ]
    }
  };

  const validQuestion = question => {
    const text = norm(question?.text);
    const options = question?.options || [];
    if (!text || options.length !== 4 || !options.some(option => option.letter === question.answer) || !(question.justification || question.source)) return false;
    if (text.includes('cual es el enfoque correcto para preparar') || text.includes('como debe estudiarse')) return false;
    const combined = `${text} ${norm(question.justification || question.source)} ${options.map(option => norm(option.text)).join(' ')}`;
    return !blocked.some(fragment => combined.includes(fragment)) && !combined.includes('forma parte del enunciado oficial del tema');
  };

  const buildCurated = (themeNumber, row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (themeNumber + index) % 4;
    const ordered = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `carranque-v69-t${themeNumber}-q${index + 1}`,
      text,
      options: ordered.map((option, position) => ({ letter: letters[position], text: option })),
      answer: letters[ordered.indexOf(correct)],
      justification,
      source: justification,
      difficulty: ['baja', 'media', 'alta'][index % 3],
      auditReal: true,
      auditTheme: themeNumber
    };
  };

  const clone = (question, themeNumber, index) => ({
    ...question,
    id: `carranque-v69-t${themeNumber}-q${index + 1}`,
    options: question.options.map(option => ({ letter: option.letter, text: String(option.text) })),
    justification: String(question.justification || question.source),
    source: String(question.source || question.justification),
    difficulty: question.difficulty || ['baja', 'media', 'alta'][index % 3],
    auditReal: true,
    auditTheme: themeNumber,
    reusedFrom: question.id || null
  });

  const coverage = [];
  carranque.themes.forEach(theme => {
    const number = Number(theme.number);
    if (number > 10) {
      coverage.push({ number, count: (carranque.themeTests[theme.id] || []).filter(validQuestion).length, target: TARGET });
      return;
    }

    if (curated[number]) {
      theme.sections = curated[number].sections.map(([heading, paragraphs]) => ({ heading, paragraphs }));
      theme.tree = [`Tema ${number}`, ...curated[number].sections.map(([heading]) => `- ${heading}`)].join('\n');
      theme.reviewTable = [['Bloque', 'Qué dominar'], ...curated[number].sections.map(([heading]) => [heading, 'Concepto, competencia, procedimiento, límite y efecto'])];
      carranque.themeTests[theme.id] = curated[number].rows.map((row, index) => buildCurated(number, row, index));
    } else {
      const selected = [];
      const seen = new Set();
      (mapping[number] || []).forEach(sourceNumber => {
        const sourceTheme = diputacion.themes.find(item => Number(item.number) === sourceNumber);
        if (!sourceTheme) return;
        (diputacion.themeTests[sourceTheme.id] || []).filter(validQuestion).forEach(question => {
          const key = norm(question.text);
          if (!key || seen.has(key) || selected.length >= TARGET) return;
          seen.add(key);
          selected.push(question);
        });
      });
      carranque.themeTests[theme.id] = selected.slice(0, TARGET).map((question, index) => clone(question, number, index));
    }
    theme.auditStatus = (carranque.themeTests[theme.id] || []).length >= TARGET ? 'segunda vuelta mínima completada v0.69' : 'refuerzo pendiente';
    coverage.push({ number, count: (carranque.themeTests[theme.id] || []).length, target: TARGET });
  });

  const practicalSpecs = [
    ['Interesado y representación', 'Una solicitud la presenta un representante sin acreditar poder. Determina si procede subsanación y qué actuaciones exigen representación acreditada.', 'Tema 3: artículos 4 a 6 y 68 de la Ley 39/2015.'],
    ['Acto y notificación', 'Se dicta un acto desfavorable sin motivación suficiente y la notificación omite los recursos. Analiza validez, eficacia y subsanación.', 'Tema 4: artículos 35, 39 y 40 de la Ley 39/2015.'],
    ['Recurso procedente', 'Un acto municipal no pone fin a la vía administrativa. Identifica recurso, plazo, órgano y efectos sobre la ejecución.', 'Tema 5: alzada y suspensión.'],
    ['Responsabilidad patrimonial', 'Una caída en una instalación municipal produce daños. Estructura requisitos, prueba, plazo y resolución.', 'Tema 6: daño efectivo, antijurídico y relación causal.'],
    ['Procedimiento sancionador', 'Una inspección aprecia una infracción. Ordena inicio, instrucción, audiencia, propuesta y resolución con separación de órganos.', 'Tema 7: principios sancionadores y especialidades procedimentales.'],
    ['Licencia o declaración responsable', 'Una actividad económica pretende iniciarse en un local. Determina el medio de intervención aplicable y los controles posteriores.', 'Tema 8: necesidad, proporcionalidad y normativa sectorial.'],
    ['Alta padronal', 'Una persona solicita empadronamiento sin aportar toda la documentación. Analiza comprobación de residencia, subsanación y resolución.', 'Tema 9: padrón y procedimiento.'],
    ['Aprobación de una ordenanza', 'El Ayuntamiento inicia una ordenanza sin completar información pública. Explica procedimiento, reclamaciones, publicación y entrada en vigor.', 'Tema 10: artículos 49 y 70.2 de la Ley 7/1985.']
  ];

  carranque.practicalCases = practicalSpecs.map((item, index) => ({
    id: `carranque-v69-sp${index + 1}`,
    title: item[0],
    statement: item[1],
    guidance: item[2],
    themes: [index + 3],
    rubric: ['Norma: 2 puntos', 'Órgano: 2 puntos', 'Trámite: 2 puntos', 'Plazo y efecto: 2 puntos', 'Claridad: 2 puntos']
  }));

  const targetThemes = coverage.filter(item => item.count >= TARGET).length;
  const totalReal = Object.values(carranque.themeTests).reduce((sum, bank) => sum + bank.filter(validQuestion).length, 0);
  carranque.testAudit = {
    version: 'v0.69.0',
    date: '2026-07-11',
    targetPerTheme: TARGET,
    targetThemes,
    totalReal,
    themes: coverage,
    phase: 'temas 1 a 10'
  };
  carranque.version = VERSION;
  carranque.changelog ||= [];
  carranque.changelog.unshift({
    version: VERSION,
    date: '2026-07-11',
    changes: [
      'Temas 1 a 10 elevados a 30 preguntas específicas',
      'Desarrollados actividad administrativa local, licencias, servicios, ordenanzas y reglamentos',
      'Creados ocho supuestos prácticos limitados a los temas 3 a 10',
      'Reutilizado contenido común auditado de Diputación'
    ]
  });

  window.OPOWEB_CARRANQUE_V69 = {
    version: `v${VERSION}`,
    targetThemes,
    totalReal,
    completedThemes: coverage.filter(item => item.count >= TARGET).map(item => item.number),
    practicalCases: carranque.practicalCases.length
  };
})();
