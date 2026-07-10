(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.53.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const rawQuestions = {
    1: [
      ['¿Qué deber establece la Constitución respecto del castellano?', 'Todos los españoles tienen el deber de conocerlo.', ['Solo los funcionarios deben conocerlo.', 'Nadie tiene deber de conocerlo.', 'Solo debe conocerse en Madrid.'], 'Artículo 3.1 de la Constitución.'],
      ['¿Qué derecho reconoce el artículo 3.1 respecto del castellano?', 'El derecho a usarlo.', ['El derecho a excluir otras lenguas.', 'El derecho a imponerlo en todo ámbito privado.', 'El derecho a desconocerlo.'], 'Artículo 3.1 de la Constitución.'],
      ['¿Cuándo son oficiales las demás lenguas españolas?', 'En sus respectivas Comunidades Autónomas de acuerdo con sus Estatutos.', ['En todo el Estado automáticamente.', 'Solo por ley estatal ordinaria.', 'Únicamente en las capitales autonómicas.'], 'Artículo 3.2.'],
      ['¿Cuál es la capital del Estado?', 'Madrid.', ['Toledo.', 'Sevilla.', 'Barcelona.'], 'Artículo 5.'],
      ['¿Qué deben tener los partidos políticos?', 'Estructura interna y funcionamiento democráticos.', ['Organización militar.', 'Autorización judicial previa.', 'Dependencia del Gobierno.'], 'Artículo 6.'],
      ['¿Qué expresan los partidos políticos?', 'El pluralismo político.', ['La potestad judicial.', 'La unidad presupuestaria.', 'La soberanía del Rey.'], 'Artículo 6.'],
      ['¿Qué deben tener sindicatos y asociaciones empresariales?', 'Estructura interna y funcionamiento democráticos.', ['Dependencia jerárquica estatal.', 'Carácter secreto.', 'Autorización del Senado.'], 'Artículo 7.'],
      ['¿Cuál es una misión constitucional de las Fuerzas Armadas?', 'Defender el ordenamiento constitucional.', ['Aprobar leyes.', 'Controlar los presupuestos.', 'Resolver recursos administrativos.'], 'Artículo 8.1.'],
      ['¿A qué están sujetos ciudadanos y poderes públicos?', 'A la Constitución y al resto del ordenamiento jurídico.', ['Solo a los reglamentos.', 'Únicamente a las leyes orgánicas.', 'A las instrucciones internas.'], 'Artículo 9.1.'],
      ['¿Qué deben promover los poderes públicos según el artículo 9.2?', 'Condiciones para que libertad e igualdad sean reales y efectivas.', ['La centralización absoluta.', 'La suspensión de derechos.', 'La supremacía reglamentaria.'], 'Artículo 9.2.'],
      ['¿Qué principio garantiza que las normas sean conocidas?', 'La publicidad de las normas.', ['La avocación.', 'La suplencia.', 'La desconcentración.'], 'Artículo 9.3.'],
      ['¿Qué experiencia mínima exige la Constitución a los miembros del Tribunal Constitucional?', 'Más de quince años de ejercicio profesional.', ['Cinco años.', 'Diez años exactos.', 'Veinte años como juez exclusivamente.'], 'Artículo 159.2.'],
      ['¿Quién propone al Rey el nombramiento del Presidente del Tribunal Constitucional?', 'El propio Tribunal en Pleno.', ['El Congreso exclusivamente.', 'El Gobierno.', 'El Consejo de Estado.'], 'Artículo 160.'],
      ['¿Cuánto dura el mandato del Presidente del Tribunal Constitucional?', 'Tres años.', ['Nueve años.', 'Cuatro años.', 'Cinco años.'], 'Artículo 160.'],
      ['¿Qué órgano puede plantear una cuestión de inconstitucionalidad?', 'Un órgano judicial.', ['Una empresa privada.', 'Cualquier registro administrativo.', 'El Defensor del Pueblo por vía de cuestión.'], 'Artículo 163.']
    ],
    2: [
      ['¿Qué fundamento menciona el artículo 10.1?', 'La dignidad de la persona.', ['La jerarquía administrativa.', 'La centralización política.', 'La potestad reglamentaria.'], 'Artículo 10.1.'],
      ['¿A qué edad se alcanza la mayoría de edad constitucional?', 'A los dieciocho años.', ['A los dieciséis.', 'A los veintiuno.', 'A los veinte.'], 'Artículo 12.'],
      ['¿Cuál es el plazo máximo ordinario de detención preventiva?', 'Setenta y dos horas.', ['Veinticuatro horas.', 'Cinco días.', 'Siete días.'], 'Artículo 17.2.'],
      ['¿Qué procedimiento garantiza la inmediata puesta a disposición judicial ante una detención ilegal?', 'El habeas corpus.', ['El recurso de alzada.', 'La reposición.', 'La revisión de oficio.'], 'Artículo 17.4.'],
      ['¿Cuándo puede entrarse en un domicilio sin consentimiento ni resolución judicial?', 'En caso de flagrante delito.', ['Siempre por orden administrativa.', 'Cuando lo solicite un vecino.', 'Cuando exista una deuda tributaria.'], 'Artículo 18.2.'],
      ['¿Qué garantiza el artículo 18.3?', 'El secreto de las comunicaciones.', ['El secreto presupuestario.', 'La inmunidad tributaria.', 'La censura previa.'], 'Artículo 18.3.'],
      ['¿Existe censura previa sobre el ejercicio de las libertades del artículo 20?', 'No.', ['Sí, con autorización ministerial.', 'Solo en prensa escrita.', 'Solo para funcionarios.'], 'Artículo 20.2.'],
      ['¿Requiere autorización previa el derecho de reunión pacífica y sin armas?', 'No.', ['Sí, siempre.', 'Solo en espacios cerrados.', 'Solo para asociaciones.'], 'Artículo 21.1.'],
      ['¿Qué asociaciones están prohibidas?', 'Las secretas y las de carácter paramilitar.', ['Todas las profesionales.', 'Todas las culturales.', 'Las inscritas en registro.'], 'Artículo 22.5.'],
      ['¿Qué derecho reconoce el artículo 23.1?', 'Participar en asuntos públicos directamente o por representantes.', ['Ser funcionario sin proceso selectivo.', 'No pagar tributos.', 'Elegir jueces directamente.'], 'Artículo 23.1.'],
      ['¿Qué prohíbe el artículo 24.1?', 'La indefensión.', ['La doble instancia en todo caso.', 'La asistencia letrada.', 'La prueba documental.'], 'Artículo 24.1.'],
      ['¿Qué principio penal recoge el artículo 25.1?', 'Nadie puede ser sancionado por hechos que no fueran infracción cuando se produjeron.', ['Toda sanción puede ser retroactiva.', 'La costumbre crea delitos.', 'Los reglamentos pueden crear penas de prisión.'], 'Artículo 25.1.'],
      ['¿Qué tribunales están prohibidos por el artículo 26?', 'Los Tribunales de Honor en la Administración civil y organizaciones profesionales.', ['Los tribunales ordinarios.', 'El Tribunal Supremo.', 'Los juzgados de paz.'], 'Artículo 26.'],
      ['¿Quiénes tienen derecho a la educación?', 'Todos.', ['Solo los menores.', 'Solo los españoles.', 'Solo quienes superen una prueba.'], 'Artículo 27.1.'],
      ['¿Qué derecho reconoce el artículo 28.2?', 'El derecho de huelga de los trabajadores.', ['El derecho a no cumplir sentencias.', 'El derecho a imponer tributos.', 'El derecho a crear reglamentos.'], 'Artículo 28.2.']
    ],
    3: [
      ['¿Qué principio rige la sucesión a la Corona?', 'La primogenitura y representación.', ['La elección directa.', 'La antigüedad parlamentaria.', 'El nombramiento gubernamental.'], 'Artículo 57.1.'],
      ['¿Puede la Reina consorte asumir funciones constitucionales?', 'No, salvo lo dispuesto para la Regencia.', ['Sí, todas las del Rey.', 'Solo las legislativas.', 'Solo las judiciales.'], 'Artículo 58.'],
      ['¿Cuándo procede la Regencia por minoría de edad del Rey?', 'Cuando el Rey sea menor de edad.', ['Cuando lo pida el Gobierno.', 'Después de cada elección.', 'Cuando se disuelva el Senado.'], 'Artículo 59.1.'],
      ['¿Ante quién presta juramento el Rey al ser proclamado?', 'Ante las Cortes Generales.', ['Ante el Gobierno.', 'Ante el Tribunal Supremo.', 'Ante el Consejo de Estado.'], 'Artículo 61.1.'],
      ['¿Quién sanciona y promulga las leyes?', 'El Rey.', ['El Presidente del Senado.', 'El Tribunal Constitucional.', 'El Defensor del Pueblo.'], 'Artículo 62.a.'],
      ['¿Quién convoca elecciones en los términos constitucionales?', 'El Rey.', ['El Tribunal de Cuentas.', 'El Consejo General del Poder Judicial.', 'El Defensor del Pueblo.'], 'Artículo 62.b.'],
      ['¿Quién propone candidato a la Presidencia del Gobierno?', 'El Rey, previa consulta y a través del Presidente del Congreso.', ['El Senado.', 'El Tribunal Supremo.', 'El Consejo de Estado.'], 'Artículo 99.1.'],
      ['¿Cuál es la duración del mandato del Congreso?', 'Cuatro años.', ['Tres años.', 'Cinco años.', 'Seis años.'], 'Artículo 68.4.'],
      ['¿Cuál es la circunscripción electoral para el Congreso?', 'La provincia.', ['La Comunidad Autónoma.', 'El municipio.', 'La comarca.'], 'Artículo 68.2.'],
      ['¿Qué protección tienen diputados y senadores por las opiniones manifestadas en sus funciones?', 'Inviolabilidad.', ['Irresponsabilidad absoluta por cualquier acto.', 'Exención tributaria.', 'Inamovilidad funcionarial.'], 'Artículo 71.1.'],
      ['¿Cuáles son los períodos ordinarios de sesiones de las Cámaras?', 'De septiembre a diciembre y de febrero a junio.', ['De enero a diciembre sin interrupción.', 'Solo de septiembre a junio.', 'De marzo a agosto.'], 'Artículo 73.1.'],
      ['¿Quién dirige la acción del Gobierno?', 'El Presidente del Gobierno.', ['El Rey.', 'El Presidente del Senado.', 'El Tribunal Constitucional.'], 'Artículo 98.2.'],
      ['¿Cuándo cesa el Gobierno?', 'Tras elecciones generales, pérdida de confianza o dimisión o fallecimiento del Presidente.', ['Al aprobar cualquier ley.', 'Cada dos años.', 'Cuando lo solicite el Senado por mayoría simple.'], 'Artículo 101.1.'],
      ['¿Cuál es el órgano jurisdiccional superior en todos los órdenes salvo garantías constitucionales?', 'El Tribunal Supremo.', ['El Tribunal Constitucional.', 'La Audiencia Nacional en todo caso.', 'El Consejo General del Poder Judicial.'], 'Artículo 123.1.'],
      ['¿Qué misión tiene el Ministerio Fiscal?', 'Promover la acción de la justicia en defensa de legalidad, derechos e interés público.', ['Aprobar presupuestos.', 'Dirigir la política exterior.', 'Resolver recursos de amparo.'], 'Artículo 124.1.']
    ],
    4: [
      ['¿Qué integra el sector público a efectos de la Ley 40/2015?', 'Administración estatal, autonómica, local y sector público institucional.', ['Solo la Administración General del Estado.', 'Únicamente ministerios y ayuntamientos.', 'Solo organismos autónomos.'], 'Artículo 2 de la Ley 40/2015.'],
      ['¿Qué Administraciones tienen consideración de Administraciones Públicas en la Ley 40/2015?', 'AGE, CCAA, entidades locales y organismos y entidades de derecho público vinculados.', ['Todas las sociedades privadas.', 'Solo el Estado.', 'Solo las entidades locales.'], 'Artículo 2.3.'],
      ['¿Qué exige el principio de proporcionalidad en una intervención administrativa?', 'Elegir la medida menos restrictiva y justificar su necesidad.', ['Aplicar siempre la medida más intensa.', 'Evitar toda motivación.', 'Delegar la competencia.'], 'Artículo 4.1.'],
      ['¿Afecta por sí solo a la validez del acto incumplir una instrucción u orden de servicio?', 'No.', ['Sí, siempre.', 'Solo si el acto es favorable.', 'Solo en órganos colegiados.'], 'Artículo 6.2.'],
      ['¿Qué autonomía deben tener los órganos consultivos específicos?', 'Orgánica y funcional respecto de la Administración activa.', ['Solo presupuestaria.', 'Únicamente territorial.', 'Ninguna.'], 'Artículo 7.'],
      ['¿Puede delegarse la adopción de disposiciones de carácter general?', 'No.', ['Sí, siempre.', 'Solo en entidades locales.', 'Solo si se publica.'], 'Artículo 9.2.b.'],
      ['¿Puede delegarse la resolución de un recurso en el mismo órgano que dictó el acto recurrido?', 'No.', ['Sí, sin límites.', 'Solo si el recurso es de alzada.', 'Solo mediante encomienda.'], 'Artículo 9.2.c.'],
      ['¿Dónde debe publicarse una delegación provincial de competencias?', 'En el boletín oficial correspondiente, incluido el de la provincia según el caso.', ['Solo en la intranet.', 'En un periódico privado.', 'No necesita publicación.'], 'Artículo 9.3.'],
      ['¿Cómo se consideran los actos dictados por delegación?', 'Dictados por el órgano delegante.', ['Dictados por el delegado a título propio.', 'Actos privados.', 'Actos sin competencia.'], 'Artículo 9.4.'],
      ['¿Debe motivarse la avocación?', 'Sí.', ['No.', 'Solo si lo pide el interesado.', 'Solo en materia tributaria.'], 'Artículo 10.2.'],
      ['¿Cabe recurso autónomo contra el acuerdo de avocación?', 'No, sin perjuicio de alegarlo al recurrir la resolución final.', ['Sí, siempre en alzada.', 'Sí, en reposición obligatoria.', 'Solo ante el Tribunal Constitucional.'], 'Artículo 10.2.'],
      ['¿Puede una encomienda de gestión tener por objeto prestaciones propias de un contrato público?', 'No.', ['Sí, libremente.', 'Solo si no se publica.', 'Solo entre órganos de la misma Administración.'], 'Artículo 11.1.'],
      ['¿Necesita publicación la delegación de firma para ser válida?', 'No.', ['Sí, siempre.', 'Solo en el BOE.', 'Solo si afecta a terceros.'], 'Artículo 12.2.'],
      ['¿Necesita publicación la suplencia para su validez?', 'No.', ['Sí, siempre.', 'Solo en órganos colegiados.', 'Solo durante una vacante.'], 'Artículo 13.2.'],
      ['¿En qué plazo resuelve el superior si el recusado niega la causa?', 'En tres días.', ['En diez días.', 'En un mes.', 'En veinticuatro horas.'], 'Artículo 24.4.']
    ]
  };

  function makeQuestions(number, rows) {
    const source = number === 4 ? 'BOE · Ley 40/2015' : 'BOE · Constitución Española';
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index + 1) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v53-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source
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

  [1, 2, 3, 4].forEach(number => {
    const currentTheme = theme(number);
    if (!currentTheme) return;
    const existing = (ope.themeTests[currentTheme.id] || []).filter(valid).filter(question => !isGeneric(question));
    const extra = makeQuestions(number, rawQuestions[number]);
    const seen = new Set();
    const merged = [...extra, ...existing].filter(question => {
      const key = norm(question.text);
      if (!key || seen.has(key)) return false;
      seen.add(key);
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
    version: 'v0.53.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 5300 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 320) {
      for (const pool of realPools) {
        if (!pool.questions.length || Number(pool.theme.number) === 22) continue;
        const question = pool.questions[(round + seed) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= 55) break;
      }
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5309);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v53-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v53-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v53-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, expectedMain: 50, expectedReserve: 5, minutes: 60, coveredThemes: new Set(ordered.map(question => question.auditTheme)).size, realOnly: true, excludedPendingThemes: [22] }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Añadidas 60 preguntas nuevas a los temas 1 a 4',
      'Temas 1 a 4 elevados al objetivo de 30 preguntas reales',
      'Regenerados los tres simulacros tipo test',
      'Iniciada la segunda vuelta de perfeccionamiento de bancos'
    ]
  });

  window.OPOWEB_DIPUTACION_V53 = {
    version: `v${VERSION}`,
    reinforcedThemes: [1, 2, 3, 4],
    addedQuestions: 60,
    targetPerTheme: 30,
    secondPassStarted: true
  };
})();