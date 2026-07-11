(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const VERSION = '0.67.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const urls = {
    portal: 'https://www.uc3m.es/conocenos/normativa',
    estatutos: 'https://www.uc3m.es/conocenos/normativa/estatutos-uc3m',
    organos: 'https://www.uc3m.es/conocenos/normativa/organos-universidad',
    electronica: 'https://www.uc3m.es/ss/Satellite/UC3MInstitucional/es/ListadoNormativas/1371206725878/Administracion_electronica_y_Proteccion_de_datos',
    financiera: 'https://www.uc3m.es/ss/Satellite/UC3MInstitucional/es/ListadoNormativas/1371335784277/Gestion_economico-financiera'
  };

  const theme15 = theme(15);
  if (theme15) {
    theme15.sections = [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${theme15.title}`,
        'Fuente principal: texto refundido de los Estatutos publicado en el portal oficial de normativa de la UC3M, junto con el Decreto 1/2003 y su modificación por el Decreto 95/2009.',
        'El tema queda organizado exactamente por sus cuatro bloques de examen: Defensor Universitario, servicios universitarios, régimen económico-financiero y reforma de Estatutos.'
      ]),
      sec('Rigor normativo', [
        'La página oficial de normativa de la UC3M mantiene accesibles el Decreto 1/2003, el Decreto 95/2009, el texto refundido y la Ley 9/1989 de creación de la Universidad.',
        'Se utiliza el texto refundido institucional para localizar artículos, mayorías, mandatos, órganos y secuencias. Debe tenerse presente que la normativa universitaria estatal posterior puede exigir interpretación conforme a la LOSU.'
      ]),
      sec('Defensor Universitario: artículos 127 a 132', [
        'El Rector propone un candidato después de oír a los representantes de estudiantes, personal de administración y servicios y profesorado. La elección corresponde al Claustro y exige la mitad más uno de sus miembros.',
        'El mandato dura tres años y permite una sola reelección. El Adjunto es propuesto por el candidato y designado por el Claustro por mayoría simple.',
        'Al comienzo de cada curso académico presenta al Claustro una memoria de las actividades del curso anterior. El Rector proporciona apoyo administrativo y medios económicos, y autoridades y servicios deben colaborar con el Defensor.',
        'La persona titular se elige entre profesorado y personal de administración y servicios de la propia Universidad. El reglamento de organización y funcionamiento es aprobado por el Consejo de Gobierno a propuesta del Rector, oído el Defensor.'
      ]),
      sec('Servicios universitarios: artículos 157 a 160', [
        'La Universidad organiza los servicios necesarios para apoyar docencia, estudio, investigación y colaboración con la sociedad, de acuerdo con sus disponibilidades presupuestarias.',
        'Los servicios pueden prestarse directamente o por otras personas o entidades mediante convenios o contratos aprobados por el Rector.',
        'La creación y supresión de servicios y la aprobación de sus reglamentos corresponden al Consejo de Gobierno a propuesta del Rector. Los acuerdos de creación deben fijar dependencia orgánica y medios personales y materiales.',
        'Los reglamentos deben establecer cauces de participación de los usuarios. El director de cada servicio, cuando exista, es nombrado por el Rector y debe reunir profesionalidad y experiencia.'
      ]),
      sec('Régimen económico-financiero: artículos 166 a 174', [
        'La UC3M goza de autonomía económica y financiera. Su patrimonio comprende bienes, derechos y acciones de su titularidad y los que adquiera o le sean atribuidos.',
        'El inventario general lo elabora el Gerente, se actualiza anualmente y se deposita en Secretaría General para consulta. El Secretario General inscribe los bienes y derechos en los registros públicos.',
        'El presupuesto es anual, único, público y equilibrado e incluye la totalidad de ingresos y gastos del año natural. El Gerente confecciona el anteproyecto; el Rector lo presenta al Consejo de Gobierno y, tras su aprobación, se somete al Consejo Social.',
        'La memoria económica anual rinde cuentas de la ejecución y contiene liquidación definitiva, situación patrimonial y gestión de recursos. La elabora el Gerente bajo la dirección del Rector, pasa por Consejo de Gobierno y Consejo Social y después se hace pública.',
        'El control interno se rige por legalidad, eficacia y eficiencia. Además, los Estatutos prevén una auditoría financiera externa anual.'
      ]),
      sec('Contratación estatutaria: artículos 175 a 177', [
        'El Rector es el órgano de contratación de la Universidad y puede suscribir los contratos en nombre y representación de la UC3M.',
        'La mesa de contratación es nombrada por el órgano de contratación y debe incluir al menos un representante de los departamentos, centros o servicios afectados.',
        'El acuerdo del Consejo Social es preceptivo para contratos relativos a inversiones de duración superior a un año que comprometan fondos públicos de ejercicios futuros. La aplicación actual debe completarse con las delegaciones vigentes publicadas por la Universidad.'
      ]),
      sec('Reforma de los Estatutos: artículos 178 a 180', [
        'La iniciativa corresponde al Consejo de Gobierno o al Claustro a propuesta de una quinta parte de sus miembros.',
        'La iniciativa se presenta ante la Mesa del Claustro. La toma en consideración, en sesión extraordinaria, requiere mayoría absoluta de los claustrales presentes.',
        'Después se elige una comisión con representación proporcional de todos los sectores. La reforma exige mayoría absoluta de los miembros del Claustro y se eleva a la Administración competente para aprobación y publicación.',
        'No pueden presentarse propuestas de reforma durante los tres meses anteriores a la finalización del mandato del Claustro.'
      ]),
      sec('Opo-Test: puntos calientes', [
        '• Defensor: elección por el Claustro con mitad más uno; mandato de tres años; una sola reelección.',
        '• Adjunto: mayoría simple del Claustro.',
        '• Servicios: Consejo de Gobierno a propuesta del Rector.',
        '• Presupuesto: anual, único, público y equilibrado.',
        '• Anteproyecto: Gerente; presentación: Rector; proyecto: Consejo de Gobierno; aprobación final: Consejo Social.',
        '• Rector: órgano de contratación estatutario.',
        '• Reforma: iniciativa del Consejo de Gobierno o de una quinta parte del Claustro.',
        '• Aprobación de la reforma: mayoría absoluta de los miembros del Claustro.'
      ]),
      sec('Retención activa', [
        '1. ¿Quién propone, quién elige y con qué mayoría al Defensor Universitario?',
        '2. ¿Qué secuencia de órganos sigue el presupuesto anual de la UC3M?',
        '3. ¿Quién inicia y quién aprueba una reforma de Estatutos?'
      ])
    ];
    theme15.reviewTable = [
      ['Bloque', 'Artículos', 'Dato esencial'],
      ['Defensor Universitario', '127–132', 'Claustro; mitad más uno; 3 años'],
      ['Servicios universitarios', '157–160', 'Consejo de Gobierno a propuesta del Rector'],
      ['Régimen económico-financiero', '166–174', 'Presupuesto anual, único, público y equilibrado'],
      ['Contratación', '175–177', 'Rector como órgano de contratación'],
      ['Reforma', '178–180', 'Mayoría absoluta del Claustro']
    ];
    theme15.auditStatus = 'capa estatutaria UC3M cerrada con texto refundido oficial publicado por la Universidad';
    theme15.motorCoverage = 'uc3m-interno-completo-v67';
    theme15.officialSourceUrl = urls.estatutos;
  }

  const theme5 = theme(5);
  if (theme5) {
    theme5.sections = (theme5.sections || []).filter(section => section.heading !== 'Aplicación institucional UC3M');
    theme5.sections.push(sec('Aplicación institucional UC3M', [
      'El portal oficial reúne la Política de Gestión de Documentos Electrónicos aprobada el 21 de noviembre de 2024, la Política de Seguridad aprobada el 6 de noviembre de 2025 y el Reglamento de Administración Electrónica aprobado en 2021 y modificado el 14 de julio de 2025.',
      'También publica la normativa de uso de recursos TIC de 2023 y el acuerdo de creación del Boletín Oficial Electrónico de 2016.',
      'Esta capa institucional complementa la Ley 40/2015: no sustituye los conceptos estatales de sede, identificación de la Administración, actuación automatizada, firma del personal e interoperabilidad.'
    ]));
    theme5.uc3mInstitutionalSourceUrl = urls.electronica;
    theme5.auditStatus = 'marco estatal completo y fuentes institucionales UC3M identificadas y enlazadas';
  }

  const theme20 = theme(20);
  if (theme20) {
    theme20.sections = (theme20.sections || []).filter(section => section.heading !== 'Capa UC3M pendiente' && section.heading !== 'Especial referencia UC3M');
    theme20.sections.push(sec('Especial referencia UC3M', [
      'Artículo 175 de los Estatutos: el Rector es el órgano de contratación y está facultado para suscribir contratos en nombre y representación de la Universidad.',
      'Artículo 176: la mesa es nombrada por el órgano de contratación y debe incluir al menos un representante de los departamentos, centros o servicios afectados. En determinados servicios con sucesión de empresa debe oír a los representantes de los trabajadores antes de proponer adjudicación.',
      'Artículo 177: es preceptivo el acuerdo del Consejo Social para inversiones de duración superior a un año que comprometan fondos públicos de ejercicios futuros.',
      'El portal de órganos publica una resolución de 31 de mayo de 2022 sobre delegación de facultades en contratación, retención de crédito y autorización y disposición del gasto. La distribución concreta de competencias debe consultarse en esa resolución antes de memorizar importes u órganos delegados.'
    ]));
    theme20.auditStatus = 'capa estatutaria UC3M incorporada; delegación interna localizada y pendiente de extracción literal completa';
    theme20.uc3mInstitutionalSourceUrl = urls.organos;
  }

  const Q = (text, correct, wrong, justification, source) => ({ text, correct, wrong, justification, source, difficulty: 'media' });
  const additions = {
    15: [
      Q('¿Qué naturaleza jurídica atribuyen los Estatutos a la UC3M?', 'Entidad de Derecho público con personalidad jurídica y patrimonio propio', ['Sociedad mercantil pública sin autonomía', 'Fundación privada', 'Órgano sin personalidad jurídica'], 'Artículo 1 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Quién propone al candidato a Defensor Universitario?', 'El Rector, oídos los representantes de los sectores de la comunidad universitaria', ['El Consejo Social sin consulta', 'El Gerente', 'La Comunidad de Madrid'], 'Artículo 127 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Qué mayoría elige al Defensor Universitario?', 'La mitad más uno de los miembros del Claustro', ['Mayoría simple de los presentes', 'Tres quintos del Consejo de Gobierno', 'Dos tercios del Consejo Social'], 'Artículo 127 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Cuánto dura el mandato del Defensor Universitario?', 'Tres años, con una sola reelección posible', ['Cuatro años sin reelección', 'Cinco años renovables indefinidamente', 'Dos años'], 'Artículo 128 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Cuándo presenta el Defensor Universitario su memoria anual?', 'Al principio de cada curso académico ante el Claustro', ['Al final de cada mes ante el Rector', 'Cada cuatro años ante el Consejo Social', 'Solo cuando lo solicita un estudiante'], 'Artículo 128.4 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Quién crea y suprime los servicios universitarios?', 'El Consejo de Gobierno, a propuesta del Rector', ['El Gerente por resolución propia', 'El Defensor Universitario', 'La mesa de contratación'], 'Artículo 158 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Cómo puede gestionarse un servicio universitario?', 'Directamente o por otras entidades mediante convenios o contratos aprobados por el Rector', ['Solo directamente', 'Solo mediante concesión estatal', 'Únicamente por el Consejo Social'], 'Artículo 157 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Cómo define el artículo 170 el presupuesto UC3M?', 'Anual, único, público y equilibrado', ['Secreto, plurianual y deficitario', 'Mensual y fragmentado', 'Bienal y reservado'], 'Artículo 170 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Quién confecciona el anteproyecto de presupuesto?', 'El Gerente', ['El Defensor Universitario', 'La mesa de contratación', 'El Claustro'], 'Artículo 170.2 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Qué órgano recibe el presupuesto después de aprobarlo el Consejo de Gobierno?', 'El Consejo Social', ['El Tribunal Constitucional', 'El Defensor del Pueblo', 'La Junta Electoral'], 'Artículo 170.2 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿A quién corresponde la iniciativa de reforma de los Estatutos?', 'Al Consejo de Gobierno o al Claustro a propuesta de una quinta parte de sus miembros', ['Solo al Rector', 'Solo a la Comunidad de Madrid', 'A cualquier servicio universitario'], 'Artículo 178 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Qué mayoría aprueba finalmente la reforma de los Estatutos?', 'Mayoría absoluta de los miembros del Claustro', ['Mayoría simple del Consejo de Gobierno', 'Dos tercios del Consejo Social', 'Unanimidad del Rectorado'], 'Artículo 179.3 de los Estatutos UC3M.', 'Estatutos UC3M')
    ],
    20: [
      Q('¿Quién es el órgano de contratación de la UC3M según sus Estatutos?', 'El Rector', ['El Gerente en todo caso', 'El Consejo Social', 'El Defensor Universitario'], 'Artículo 175 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Quién nombra a los componentes de la mesa de contratación UC3M?', 'El órgano de contratación', ['El adjudicatario', 'El Claustro', 'La Junta de Personal exclusivamente'], 'Artículo 176 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Qué presencia mínima garantizan los Estatutos en la mesa de contratación?', 'Un representante de los departamentos, centros o servicios afectados', ['Dos estudiantes necesariamente', 'Un juez', 'Un representante de cada licitador'], 'Artículo 176 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿A quién debe oír la mesa en determinados servicios con sucesión de empresa?', 'A los representantes de los trabajadores de la Universidad', ['A todos los licitadores después de adjudicar', 'Al Tribunal de Cuentas exclusivamente', 'Al Defensor Universitario'], 'Artículo 176 de los Estatutos UC3M.', 'Estatutos UC3M'),
      Q('¿Cuándo es preceptivo el acuerdo del Consejo Social en contratación según los Estatutos?', 'En inversiones de duración superior a un año que comprometan fondos públicos futuros', ['En todo contrato menor', 'En cualquier compra de material', 'Solo en contratos gratuitos'], 'Artículo 177 de los Estatutos UC3M.', 'Estatutos UC3M')
    ]
  };

  function buildQuestion(currentTheme, item, index) {
    const raw = [item.correct, ...item.wrong];
    const shift = (Number(currentTheme.number) + index + 1) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `${currentTheme.id}-v67-q${index + 1}`,
      text: item.text,
      options: ordered.map((text, position) => ({ letter: 'ABCD'[position], text })),
      answer: 'ABCD'[ordered.indexOf(item.correct)],
      justification: item.justification,
      source: item.source,
      difficulty: item.difficulty,
      auditReal: true,
      auditTheme: Number(currentTheme.number)
    };
  }

  let addedQuestions = 0;
  Object.entries(additions).forEach(([number, items]) => {
    const currentTheme = theme(number);
    if (!currentTheme) return;
    const existing = (ope.themeTests[currentTheme.id] || []).filter(question => question?.text && question?.options?.length === 4);
    const generated = items.map((item, index) => buildQuestion(currentTheme, item, index));
    const seen = new Set();
    const merged = [...generated, ...existing].filter(question => {
      const key = norm(question.text);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 40);
    addedQuestions += Math.max(0, merged.length - existing.length);
    ope.themeTests[currentTheme.id] = merged;
  });

  const linkAdditions = [
    { label: 'Normativa UC3M', url: urls.portal },
    { label: 'Estatutos UC3M', url: urls.estatutos },
    { label: 'Órganos y delegaciones UC3M', url: urls.organos },
    { label: 'Administración electrónica UC3M', url: urls.electronica },
    { label: 'Gestión económico-financiera UC3M', url: urls.financiera }
  ];
  ope.officialLinks ||= [];
  const existingUrls = new Set(ope.officialLinks.map(link => link.url));
  linkAdditions.forEach(link => { if (!existingUrls.has(link.url)) ope.officialLinks.push(link); });

  const themeAudit = ope.themes.map(item => {
    const count = (ope.themeTests[item.id] || []).length;
    return { number: Number(item.number), id: item.id, count, state: count >= 30 ? 'objetivo 30+' : 'pendiente' };
  });

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
    while (selected.length < 75 && round < 120) {
      ope.themes.forEach((currentTheme, themeIndex) => {
        if (selected.length >= 75) return;
        const bank = shuffled(ope.themeTests[currentTheme.id] || [], seed * 271 + themeIndex + round);
        const question = bank[(round + themeIndex) % bank.length];
        if (!question) return;
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(currentTheme.number) });
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2203);
    return {
      id: `uc3m-v67-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v67-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v67-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  ope.testAudit = {
    ...(ope.testAudit || {}),
    version: 'v0.67.0',
    date: '2026-07-11',
    totalQuestions,
    minimumQuestions: Math.min(...themeAudit.map(item => item.count)),
    targetPerTheme: 30,
    targetThemes: themeAudit.filter(item => item.count >= 30).length,
    themes: themeAudit
  };
  ope.uc3mInternalAudit = {
    version: 'v0.67.0',
    estimatedProgress: 84,
    completed: [
      'Estatutos: Defensor Universitario, servicios, régimen económico-financiero y reforma',
      'Capa estatutaria de contratación UC3M',
      'Inventario oficial de normativa de administración electrónica y seguridad',
      'Órganos universitarios y página oficial de delegaciones'
    ],
    partial: [
      'Delegación concreta de contratación de 31 de mayo de 2022: localizada, pendiente de extracción literal completa'
    ],
    pending: [
      'Presupuesto vigente y bases de ejecución',
      'Normativa propia de matrícula, permanencia y evaluación',
      'Reglas anuales de admisión UC3M',
      'Auditoría transversal final de literalidad y vigencia'
    ],
    sourceUrls: urls
  };

  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-11',
    changes: [
      'Integrado el portal oficial de normativa UC3M',
      'Cerrado el tema 15 con el texto refundido de los Estatutos',
      'Añadida la especial referencia UC3M al tema 20 de contratación',
      'Catalogadas las normas internas de administración electrónica de 2024 y 2025',
      'Regenerados los simulacros 70 + 5 con preguntas institucionales'
    ]
  });

  window.OPOWEB_UC3M_V67 = {
    version: `v${VERSION}`,
    addedQuestions,
    totalQuestions,
    estimatedProgress: 84,
    statutesClosed: true,
    contractingStatutoryLayerClosed: true,
    remainingInternalBlocks: ope.uc3mInternalAudit.pending.length
  };
})();