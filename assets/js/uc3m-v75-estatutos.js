(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 15);
  if (!ope || !theme) return;

  const VERSION = '0.75.0';
  const SOURCE = 'https://www.uc3m.es/conocenos/normativa/estatutos-uc3m';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const rows = [
    ['¿Quién propone al candidato a Defensor Universitario?','El Rector, oídos los representantes del estudiantado, PAS y profesorado','El Consejo Social sin audiencia','El Gerente','La Comunidad de Madrid','Artículo 127.1 de los Estatutos UC3M.','baja'],
    ['¿Qué órgano elige al Defensor Universitario?','El Claustro Universitario','El Consejo de Gobierno','El Consejo Social','La Junta Consultiva','Artículo 127.1 de los Estatutos UC3M.','baja'],
    ['¿Qué mayoría se exige para elegir al Defensor Universitario?','La mitad más uno de los miembros del Claustro','Mayoría simple de los presentes','Tres quintos del Consejo de Gobierno','Dos tercios del Consejo Social','Artículo 127.1 de los Estatutos UC3M.','alta'],
    ['¿Con qué mayoría puede acordar el Claustro el cese del Defensor por incumplimiento o lesión de derechos?','Con la misma mayoría exigida para su elección','Con mayoría simple','Por unanimidad','Con un tercio de sus miembros','Artículo 127.2 de los Estatutos UC3M.','alta'],
    ['¿Cuánto dura el mandato del Defensor Universitario?','Tres años','Cuatro años','Cinco años','Dos años','Artículo 128.1 de los Estatutos UC3M.','baja'],
    ['¿Cuántas veces puede ser reelegido el Defensor Universitario?','Una sola vez','Indefinidamente','Dos veces','No puede ser reelegido','Artículo 128.1 de los Estatutos UC3M.','media'],
    ['¿Quién puede iniciar la propuesta de reelección del Defensor?','El Rector o al menos una quinta parte de los miembros del Claustro','Solo el Consejo Social','El Gerente o el Secretario General','Cualquier servicio universitario','Artículo 128.1 de los Estatutos UC3M.','alta'],
    ['¿Cómo se designa al Defensor Universitario Adjunto?','Lo propone el candidato y el Claustro lo designa por mayoría simple en la misma sesión','Lo nombra directamente el Gerente','Lo elige el Consejo Social por mayoría absoluta','Lo designa la Comunidad de Madrid','Artículo 128.2 de los Estatutos UC3M.','alta'],
    ['¿Cuándo presenta el Defensor su memoria anual?','Al principio de cada curso académico ante el Claustro','Al final de cada mes ante el Rector','Cada cuatro años ante el Consejo Social','Solo cuando recibe una queja','Artículo 128.4 de los Estatutos UC3M.','media'],
    ['¿Quién proporciona apoyo administrativo y medios económicos al Defensor?','El Rector, de acuerdo con el Defensor','El Consejo Social exclusivamente','La Comunidad de Madrid','La mesa de contratación','Artículo 129 de los Estatutos UC3M.','media'],
    ['¿Entre qué colectivos se designa al Defensor Universitario?','Entre profesorado y personal de administración y servicios de la propia Universidad','Solo entre estudiantes','Solo entre magistrados','Entre cualquier ciudadano externo','Artículo 130 de los Estatutos UC3M.','media'],
    ['¿Quién aprueba el Reglamento de organización y funcionamiento del Defensor?','El Consejo de Gobierno a propuesta del Rector, oído el Defensor','El Claustro por unanimidad','El Gerente','El Consejo Social a propuesta del Adjunto','Artículo 132.1 de los Estatutos UC3M.','alta'],
    ['¿Para qué actividades organiza la UC3M sus servicios universitarios?','Para apoyar docencia, estudio, investigación y colaboración con la sociedad','Solo para actividades deportivas','Exclusivamente para contratación','Únicamente para gestión tributaria','Artículo 157.1 de los Estatutos UC3M.','baja'],
    ['¿Cómo pueden prestarse los servicios universitarios?','Directamente o por otras personas o entidades mediante convenios o contratos aprobados por el Rector','Solo directamente','Solo por empresas privadas','Únicamente mediante concesión estatal','Artículo 157.2 de los Estatutos UC3M.','media'],
    ['¿Quién crea y suprime los servicios universitarios?','El Consejo de Gobierno a propuesta del Rector','El Gerente','El Defensor Universitario','El Consejo Social sin propuesta','Artículo 158.1 de los Estatutos UC3M.','baja'],
    ['¿Qué deben especificar los acuerdos de creación de servicios?','Su dependencia orgánica y los medios personales y materiales asignados','Solo su denominación comercial','Únicamente la duración','La identidad de todos los usuarios','Artículo 158.2 de los Estatutos UC3M.','media'],
    ['¿Qué deben establecer los reglamentos de cada servicio?','Cauces para la participación de los usuarios','La exclusión de los usuarios en su gestión','Precios públicos sin aprobación','La supresión de controles de calidad','Artículo 158.3 de los Estatutos UC3M.','media'],
    ['¿Quién nombra al director de un servicio universitario?','El Rector','El Claustro','El Consejo Social','El Defensor Universitario','Artículo 159.1 de los Estatutos UC3M.','baja'],
    ['¿Qué autonomía reconoce el artículo 166 a la UC3M?','Autonomía económica y financiera de acuerdo con las leyes','Autonomía legislativa estatal','Inmunidad presupuestaria','Potestad tributaria plena','Artículo 166 de los Estatutos UC3M.','baja'],
    ['¿Qué integra el patrimonio de la Universidad?','Bienes, derechos y acciones de su titularidad y los que adquiera o le sean atribuidos','Solo bienes inmuebles','Exclusivamente donaciones','Únicamente material bibliográfico','Artículo 167.1 de los Estatutos UC3M.','media'],
    ['¿Quién elabora y actualiza anualmente el inventario general?','El Gerente','El Secretario General','El Rector','El Consejo Social','Artículo 169.1 de los Estatutos UC3M.','baja'],
    ['¿Dónde se deposita el inventario general para consulta?','En la Secretaría General de la Universidad','En el Consejo Social','En la oficina del Defensor','En la Comunidad de Madrid','Artículo 169.1 de los Estatutos UC3M.','media'],
    ['¿Quién inscribe los bienes y derechos de la Universidad en los registros públicos?','El Secretario General','El Gerente','El Rector','El Interventor','Artículo 169.2 de los Estatutos UC3M.','media'],
    ['¿Qué características tiene el presupuesto de la UC3M?','Anual, único, público y equilibrado, con todos los ingresos y gastos del año natural','Secreto, plurianual y deficitario','Mensual y fragmentado','Bienal y reservado','Artículo 170.1 de los Estatutos UC3M.','baja'],
    ['¿Qué secuencia sigue la elaboración y aprobación del presupuesto?','El Gerente confecciona el anteproyecto, el Rector lo presenta al Consejo de Gobierno y después se somete al Consejo Social','El Claustro lo redacta y el Gerente lo aprueba','El Consejo Social lo confecciona y el Rector lo archiva','La Comunidad de Madrid lo elabora íntegramente','Artículo 170.2 de los Estatutos UC3M.','alta'],
    ['¿Quién es el órgano de contratación de la UC3M?','El Rector','El Gerente en todo caso','El Consejo Social','El Defensor Universitario','Artículo 175 de los Estatutos UC3M.','baja'],
    ['¿Qué presencia mínima exige el artículo 176 en la mesa de contratación?','Un representante de los departamentos, centros o servicios afectados','Dos estudiantes necesariamente','Un representante de cada licitador','Un juez','Artículo 176 de los Estatutos UC3M.','media'],
    ['¿A quién corresponde la iniciativa de reforma de los Estatutos?','Al Consejo de Gobierno o al Claustro a propuesta de una quinta parte de sus miembros','Solo al Rector','Solo a la Comunidad de Madrid','A cualquier servicio universitario','Artículo 178.1 de los Estatutos UC3M.','alta'],
    ['¿Qué mayoría exige la aprobación final de la reforma estatutaria?','Mayoría absoluta de los miembros del Claustro','Mayoría simple de los presentes','Dos tercios del Consejo Social','Unanimidad del Consejo de Gobierno','Artículo 179.3 de los Estatutos UC3M.','alta'],
    ['¿Cuándo no pueden presentarse propuestas de reforma de los Estatutos?','Durante los tres meses anteriores a la finalización del mandato del Claustro','Durante todo el primer año del mandato','En los seis meses posteriores a una elección','Mientras exista presupuesto prorrogado','Artículo 180 de los Estatutos UC3M.','media']
  ];

  const questions = rows.map((row, index) => {
    const [text, correct, w1, w2, w3, justification, difficulty] = row;
    const raw = [correct, w1, w2, w3];
    const shift = index % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `uc3m-v75-t15-q${index + 1}`,
      text,
      options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
      answer: 'ABCD'[ordered.indexOf(correct)],
      justification,
      source: SOURCE,
      difficulty,
      auditReal: true,
      auditTheme: 15
    };
  });
  ope.themeTests[theme.id] = questions;

  theme.sections = [
    { heading: 'Resumen orientado al aprobado', paragraphs: ['El tema se divide en Defensor Universitario, servicios universitarios, patrimonio y presupuesto, contratación y reforma de Estatutos.', 'La literalidad de órganos, mayorías, mandatos y secuencias presupuestarias es el principal foco de examen.'] },
    { heading: 'Defensor Universitario', paragraphs: ['El Rector propone candidato tras oír a los sectores; el Claustro elige por mitad más uno. El mandato dura tres años y admite una sola reelección.', 'El Adjunto se designa por mayoría simple y la memoria anual se presenta al comienzo de cada curso.'] },
    { heading: 'Servicios universitarios', paragraphs: ['El Consejo de Gobierno crea y suprime servicios a propuesta del Rector. Los acuerdos fijan dependencia y medios, y los reglamentos deben prever participación de usuarios.', 'Los servicios pueden gestionarse directamente o mediante convenios o contratos aprobados por el Rector.'] },
    { heading: 'Régimen económico y contratación', paragraphs: ['El presupuesto es anual, único, público y equilibrado. El Gerente prepara el anteproyecto, el Rector lo presenta al Consejo de Gobierno y después pasa al Consejo Social.', 'El Rector es el órgano de contratación y la mesa debe incluir al menos un representante de las unidades afectadas.'] },
    { heading: 'Reforma de Estatutos', paragraphs: ['La iniciativa corresponde al Consejo de Gobierno o a una quinta parte del Claustro. La aprobación final exige mayoría absoluta de todos los miembros del Claustro.', 'No pueden presentarse propuestas en los tres meses anteriores al fin del mandato del Claustro.'] }
  ];
  theme.reviewTable = [['Bloque','Dato esencial','Artículos'],['Defensor','Claustro; mitad más uno; 3 años','127–132'],['Servicios','Consejo de Gobierno a propuesta del Rector','157–159'],['Patrimonio','Inventario del Gerente; registro del Secretario General','166–169'],['Presupuesto','Anual, único, público y equilibrado','170–174'],['Contratación','Rector como órgano de contratación','175–177'],['Reforma','Mayoría absoluta del Claustro','178–180']];
  theme.auditStatus = 'banco real 30+ v0.75 · Estatutos UC3M texto refundido';
  theme.motorCoverage = 'uc3m-estatutos-completo-v75';
  theme.officialSourceUrl = SOURCE;

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
      id: `uc3m-v75-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v75-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v75-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(current => ({ number: Number(current.number), count: (ope.themeTests?.[current.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));
  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.75.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}), version: 'v0.75.0', estimatedProgress: 81,
    completed: ['Tema 15 completado con 30 preguntas verificadas','Defensor, servicios, régimen económico, contratación y reforma estatutaria integrados','Simulacros 70 + 5 regenerados'],
    pending: ['Completar los temas 16 y 17 con 30 preguntas reales','Normativa propia de matrícula, permanencia y evaluación','Reglas anuales de admisión y delegaciones internas completas']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Tema 15 completado con 30 preguntas de Estatutos UC3M','Banco UC3M elevado a 560 preguntas','18 de 20 temas alcanzan 30 preguntas','Simulacros 70 + 5 regenerados'] });
  window.OPOWEB_UC3M_V75 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, simulations: ope.simulacros.length, completedTheme: 15, themes: themeAudit };
})();
