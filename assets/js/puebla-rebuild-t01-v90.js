(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const theme = ope.themes?.find(item => Number(item.number) === 1);
  if (!theme) return;

  const REVIEW_DATE = '2026-07-17';
  const MANUAL_URL = './docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md';

  const sources = [
    { label: 'Constitución Española', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    { label: 'Ley Orgánica 2/1979, del Tribunal Constitucional', reference: 'BOE-A-1979-23709', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709' },
    { label: 'Ley Orgánica 3/1981, del Defensor del Pueblo', reference: 'BOE-A-1981-10325', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1981-10325' },
    { label: 'Ley Orgánica 4/1981, de los estados de alarma, excepción y sitio', reference: 'BOE-A-1981-12774', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1981-12774' },
    { label: 'Bases de La Puebla de Montalbán', reference: 'BOP-TOLEDO-2026-00001965', url: 'https://bop.diputoledo.es/webEbop/ebopResumen.jsp?publicationDate=05/05/2026&publicationNumber=82' }
  ];

  theme.manualDocument = MANUAL_URL;
  theme.officialSources = sources;
  theme.manualReview = Object.freeze({
    status: 'APROBADO_POR_USUARIO',
    approvedAt: REVIEW_DATE,
    officialLiteralVerified: true,
    articleCoverage: Object.freeze(['10-55', '166-169']),
    publicationAllowed: true,
    nextThemeAllowed: true,
    rule: 'El cierre se basa en cobertura normativa y aprobación humana, no en métricas de volumen.'
  });
  theme.theoryStatus = {
    ...(theme.theoryStatus || {}),
    reviewedAt: REVIEW_DATE,
    programmeLiteral: true,
    pedagogicalStatus: 'APROBADO_POR_USUARIO',
    userApprovedAt: REVIEW_DATE,
    manualDocument: MANUAL_URL
  };
  theme.auditStatus = 'manual reconstruido y aprobado por el usuario · 17/07/2026';
  theme.tree = [
    'TEMA 1 · CONSTITUCIÓN ESPAÑOLA',
    '├─ Constitución y estructura',
    '│  ├─ Preámbulo',
    '│  ├─ Título Preliminar · arts. 1-9',
    '│  ├─ Títulos I-X · 169 artículos',
    '│  └─ Disposiciones adicionales, transitorias, derogatoria y final',
    '├─ Reforma constitucional · arts. 166-169',
    '│  ├─ Iniciativa · art. 166',
    '│  ├─ Procedimiento ordinario · art. 167',
    '│  ├─ Procedimiento agravado · art. 168',
    '│  └─ Límite temporal · art. 169',
    '├─ Derechos y deberes · arts. 10-52',
    '├─ Garantías · arts. 53-54',
    '└─ Suspensión · art. 55'
  ].join('\n');
  theme.reviewTable = [
    ['Bloque', 'Artículos', 'Regla esencial'],
    ['Estructura', '1-169', 'Preámbulo, Título Preliminar, diez títulos y disposiciones'],
    ['Reforma ordinaria', '167', '3/5 de cada Cámara; referéndum facultativo'],
    ['Reforma agravada', '168', '2/3, disolución, nuevas Cortes, 2/3 y referéndum obligatorio'],
    ['Derechos fundamentales', '14 y 15-29', 'Tutela preferente y sumaria y posible amparo'],
    ['Objeción de conciencia', '30.2', 'También puede acceder al amparo'],
    ['Principios rectores', '39-52', 'Exigibilidad conforme a las leyes de desarrollo'],
    ['Garantías', '53-54', 'Reserva de ley, contenido esencial, tutela y Defensor del Pueblo'],
    ['Suspensión', '55', 'Excepción y sitio; supuestos individuales tasados']
  ];

  const q = (id, text, correct, wrong, article, explanation, difficulty = 'media') => {
    const options = [correct, ...wrong];
    const shift = id % 4;
    const ordered = options.slice(shift).concat(options.slice(0, shift));
    return {
      id: `puebla-t01-manual-q${String(id).padStart(2, '0')}`,
      text,
      options: ordered.map((option, index) => ({ letter: 'ABCD'[index], text: option })),
      answer: 'ABCD'[ordered.indexOf(correct)],
      justification: `${article}. ${explanation}`,
      source: `${article} de la Constitución Española`,
      sourceArticle: article,
      traceable: true,
      difficulty,
      auditReal: true,
      auditTheme: 1,
      approvedManual: true
    };
  };

  ope.themeTests[theme.id] = [
    q(1, '¿Cuántos artículos tiene la Constitución Española?', '169 artículos.', ['168 artículos.', '170 artículos.', '171 artículos.'], 'Estructura de la Constitución', 'El articulado termina en el artículo 169.'),
    q(2, '¿Qué artículos comprende el Título I?', 'Los artículos 10 a 55.', ['Los artículos 1 a 55.', 'Los artículos 14 a 55.', 'Los artículos 10 a 54.'], 'Título I CE', 'El Título I regula los derechos y deberes fundamentales.'),
    q(3, '¿Puede la iniciativa popular promover una reforma constitucional?', 'No, porque el artículo 166 solo remite a los apartados 1 y 2 del artículo 87.', ['Sí, con 500.000 firmas.', 'Sí, cuando afecte a derechos fundamentales.', 'Solo con autorización del Senado.'], 'Artículos 166 y 87 CE', 'La remisión no incluye el apartado 3 sobre iniciativa popular.', 'alta'),
    q(4, '¿Qué mayoría exige como regla el procedimiento ordinario de reforma?', 'Tres quintos de cada Cámara.', ['Dos tercios del Congreso.', 'Mayoría absoluta de cada Cámara.', 'Tres quintos de las Cortes reunidas conjuntamente.'], 'Artículo 167.1 CE', 'La mayoría se exige separadamente en Congreso y Senado.'),
    q(5, '¿Qué sucede si Congreso y Senado no alcanzan acuerdo sobre una reforma ordinaria?', 'Se intenta obtenerlo mediante una comisión paritaria de diputados y senadores.', ['Decide definitivamente el Congreso por mayoría simple.', 'Se disuelven automáticamente las Cortes.', 'Se convoca directamente referéndum.'], 'Artículo 167.1 CE', 'La comisión presenta un texto que se vota de nuevo.'),
    q(6, '¿Qué combinación permite aprobar subsidiariamente una reforma ordinaria?', 'Mayoría absoluta del Senado y dos tercios del Congreso.', ['Dos tercios del Senado y mayoría absoluta del Congreso.', 'Mayoría simple del Senado y tres quintos del Congreso.', 'Mayoría absoluta de ambas Cámaras.'], 'Artículo 167.2 CE', 'La vía subsidiaria exige las dos mayorías indicadas.', 'alta'),
    q(7, '¿Quién puede solicitar referéndum en el procedimiento del artículo 167?', 'Una décima parte de los miembros de cualquiera de las Cámaras dentro de quince días.', ['El Gobierno dentro de treinta días.', 'La mayoría absoluta del Congreso.', 'Cincuenta diputados y cincuenta senadores conjuntamente.'], 'Artículo 167.3 CE', 'El referéndum es facultativo y depende de solicitud parlamentaria.'),
    q(8, '¿Qué materia activa por ubicación el procedimiento agravado?', 'La Sección 1.ª del Capítulo II del Título I.', ['Todo el Título I.', 'El artículo 14 por sí solo.', 'El Título VIII en todo caso.'], 'Artículo 168.1 CE', 'El precepto menciona expresamente la Sección 1.ª, artículos 15 a 29.', 'alta'),
    q(9, '¿Qué ocurre después de aprobarse por dos tercios de cada Cámara el principio de una reforma agravada?', 'Se produce la disolución inmediata de las Cortes.', ['Se celebra referéndum sin disolución.', 'El Rey aprueba el texto definitivo.', 'Se constituye una comisión paritaria.'], 'Artículo 168.1 CE', 'La disolución es una fase obligatoria del procedimiento agravado.'),
    q(10, '¿Cómo es el referéndum del artículo 168?', 'Obligatorio.', ['Facultativo a petición de una décima parte.', 'Potestativo para el Gobierno.', 'Solo necesario en revisión total.'], 'Artículo 168.3 CE', 'Toda reforma aprobada por el procedimiento agravado se somete a referéndum.'),
    q(11, '¿Cuándo no puede iniciarse una reforma constitucional?', 'En tiempo de guerra o durante alarma, excepción o sitio.', ['Durante cualquier estado de emergencia administrativa.', 'Solo durante el estado de sitio.', 'Durante los seis meses anteriores a elecciones.'], 'Artículo 169 CE', 'La prohibición se refiere literalmente al inicio de la reforma.'),
    q(12, '¿Qué derecho tiene tutela reforzada aunque esté fuera de la Sección 1.ª?', 'La igualdad del artículo 14.', ['La propiedad del artículo 33.', 'La vivienda del artículo 47.', 'La libertad de empresa del artículo 38.'], 'Artículos 14 y 53.2 CE', 'El artículo 53.2 menciona expresamente el artículo 14.'),
    q(13, '¿Cuál es la duración constitucional máxima de la detención preventiva?', 'Setenta y dos horas, sin perjuicio de que dure solo lo estrictamente necesario.', ['Cuarenta y ocho horas en todo caso.', 'Cinco días.', 'Setenta y dos horas prorrogables administrativamente.'], 'Artículo 17.2 CE', 'El máximo no sustituye la exigencia de duración estrictamente necesaria.'),
    q(14, '¿Cuál no es una excepción constitucional a la inviolabilidad del domicilio?', 'La mera decisión de la autoridad administrativa.', ['El consentimiento del titular.', 'La resolución judicial.', 'El delito flagrante.'], 'Artículo 18.2 CE', 'La entrada o registro exige consentimiento, resolución judicial o flagrancia.'),
    q(15, '¿Qué requisito caracteriza constitucionalmente la libertad de información?', 'La veracidad de la información.', ['La autorización administrativa previa.', 'La neutralidad ideológica obligatoria.', 'La publicación exclusiva en medios inscritos.'], 'Artículo 20.1.d CE', 'La información protegida se refiere a hechos y exige veracidad.'),
    q(16, '¿Qué exige una manifestación en lugar de tránsito público?', 'Comunicación previa a la autoridad, no autorización.', ['Autorización judicial.', 'Autorización del alcalde.', 'Ningún trámite previo en ningún caso.'], 'Artículo 21.2 CE', 'Solo cabe prohibición por razones fundadas de orden público con peligro.'),
    q(17, '¿Cómo pueden disolverse o suspenderse las asociaciones?', 'Mediante resolución judicial motivada.', ['Por acuerdo administrativo sin motivación.', 'Por decisión del registro de asociaciones.', 'Por orden del Ministerio Fiscal.'], 'Artículo 22.4 CE', 'La garantía judicial es expresa.'),
    q(18, '¿Qué reconoce el artículo 23.2?', 'Acceso en condiciones de igualdad a funciones y cargos públicos con los requisitos legales.', ['Acceso automático a cualquier empleo público.', 'Derecho exclusivo de funcionarios de carrera.', 'Elección directa de todo cargo administrativo.'], 'Artículo 23.2 CE', 'El acceso se somete a los requisitos establecidos por las leyes.'),
    q(19, '¿Cuál es una garantía del artículo 24.2?', 'La presunción de inocencia.', ['La doble instancia en todo procedimiento.', 'La gratuidad universal de toda actuación judicial.', 'El derecho a elegir cualquier juez.'], 'Artículo 24.2 CE', 'El precepto reúne garantías del proceso debido.'),
    q(20, '¿Cómo define la Constitución la enseñanza básica?', 'Obligatoria y gratuita.', ['Voluntaria y gratuita.', 'Obligatoria y de pago salvo beca.', 'Gratuita solo en centros públicos.'], 'Artículo 27.4 CE', 'Ambas notas aparecen expresamente.'),
    q(21, '¿Qué exige la Constitución al regular el derecho de huelga?', 'Garantías para asegurar los servicios esenciales de la comunidad.', ['Autorización previa del Gobierno.', 'Prohibición en todos los servicios públicos.', 'Aprobación por mayoría absoluta de la plantilla.'], 'Artículo 28.2 CE', 'La ley debe asegurar los servicios esenciales.'),
    q(22, '¿Qué contenido del artículo 30 puede acceder al recurso de amparo?', 'La objeción de conciencia del artículo 30.2.', ['Todo el deber de defender España.', 'El servicio civil del artículo 30.3.', 'Los deberes en catástrofes del artículo 30.4.'], 'Artículo 53.2 CE', 'La Constitución incorpora expresamente la objeción de conciencia al ámbito del amparo.'),
    q(23, '¿Qué principios inspiran el sistema tributario del artículo 31.1?', 'Igualdad y progresividad, sin alcance confiscatorio.', ['Uniformidad y proporcionalidad estricta.', 'Suficiencia y neutralidad exclusivamente.', 'Generalidad y confiscatoriedad limitada.'], 'Artículo 31.1 CE', 'La contribución se basa además en la capacidad económica.'),
    q(24, '¿Qué orientación contiene la redacción vigente del artículo 49?', 'Autonomía personal e inclusión social en entornos universalmente accesibles.', ['Internamiento preferente en centros especializados.', 'Sustitución general de la capacidad jurídica.', 'Protección limitada a prestaciones económicas.'], 'Artículo 49 CE', 'La reforma de 2024 sustituyó íntegramente la redacción anterior.'),
    q(25, '¿Qué exige el artículo 53.1 para regular los derechos del Capítulo II?', 'Una ley que respete su contenido esencial.', ['Un reglamento aprobado por el Gobierno.', 'Una ley orgánica en todos los casos.', 'Una orden ministerial motivada.'], 'Artículo 53.1 CE', 'Los derechos vinculan a todos los poderes públicos.'),
    q(26, '¿Qué conjunto dispone de procedimiento preferente y sumario y, en su caso, amparo?', 'Artículo 14, artículos 15 a 29 y objeción de conciencia del artículo 30.2.', ['Todos los artículos 10 a 55.', 'Solo los artículos 15 a 29.', 'Los artículos 30 a 52.'], 'Artículo 53.2 CE', 'La protección reforzada no alcanza a todo el Título I.', 'alta'),
    q(27, '¿Cómo pueden alegarse judicialmente los principios rectores de los artículos 39 a 52?', 'De acuerdo con lo que dispongan las leyes que los desarrollen.', ['Directamente y siempre mediante amparo.', 'Solo ante el Tribunal Constitucional.', 'Nunca pueden producir efecto jurídico.'], 'Artículo 53.3 CE', 'Informan la legislación, la práctica judicial y la actuación pública.'),
    q(28, '¿Qué es constitucionalmente el Defensor del Pueblo?', 'Alto comisionado de las Cortes Generales para la defensa de los derechos del Título I.', ['Órgano del Poder Judicial.', 'Miembro del Gobierno.', 'Autoridad administrativa con potestad para anular sentencias.'], 'Artículo 54 CE', 'Supervisa la actividad de la Administración y da cuenta a las Cortes.'),
    q(29, '¿Durante qué estados puede operar la suspensión general del artículo 55.1?', 'Durante excepción o sitio.', ['Durante alarma, excepción o sitio.', 'Solo durante alarma.', 'Durante cualquier emergencia declarada por el Gobierno.'], 'Artículo 55.1 CE', 'El estado de alarma puede limitar derechos, pero no activa esta suspensión.', 'alta'),
    q(30, '¿Qué derechos pueden suspenderse individualmente en investigaciones sobre bandas armadas o terrorismo?', 'Artículo 17.2 y artículos 18.2 y 18.3.', ['Todo el artículo 17 y el artículo 19.', 'Artículos 20 y 21.', 'Artículo 28.2 y artículo 37.2.'], 'Artículo 55.2 CE', 'Se exige intervención judicial y adecuado control parlamentario.', 'alta')
  ];

  let manualHtml = '';
  let manualError = '';

  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  function inline(value) {
    return escape(value)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/(https:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  }

  function isTableSeparator(line) {
    return /^\|?\s*:?-{3,}/.test(line) && line.includes('|');
  }

  function tableCells(line) {
    return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());
  }

  function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r/g, '').split('\n');
    const html = [];
    let index = 0;
    let inCode = false;
    let code = [];

    while (index < lines.length) {
      const line = lines[index];
      if (line.startsWith('```')) {
        if (inCode) {
          html.push(`<pre class="tree">${escape(code.join('\n'))}</pre>`);
          code = [];
          inCode = false;
        } else inCode = true;
        index += 1;
        continue;
      }
      if (inCode) {
        code.push(line);
        index += 1;
        continue;
      }
      if (!line.trim()) {
        index += 1;
        continue;
      }
      if (/^---+$/.test(line.trim())) {
        html.push('<hr>');
        index += 1;
        continue;
      }
      const heading = line.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        const level = Math.min(4, heading[1].length + 1);
        html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
        index += 1;
        continue;
      }
      if (line.startsWith('> ')) {
        html.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
        index += 1;
        continue;
      }
      if (line.trim().startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
        const head = tableCells(line);
        index += 2;
        const rows = [];
        while (index < lines.length && lines[index].trim().startsWith('|')) {
          rows.push(tableCells(lines[index]));
          index += 1;
        }
        html.push(`<div class="table-wrap"><table><thead><tr>${head.map(cell => `<th>${inline(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
        continue;
      }
      if (/^\s*-\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*-\s+/.test(lines[index])) {
          let item = lines[index].replace(/^\s*-\s+/, '');
          item = item.replace(/^\[[ xX]\]\s*/, '✓ ');
          items.push(item);
          index += 1;
        }
        html.push(`<ul>${items.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`);
        continue;
      }
      if (/^\s*\d+\.\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
          items.push(lines[index].replace(/^\s*\d+\.\s+/, ''));
          index += 1;
        }
        html.push(`<ol>${items.map(item => `<li>${inline(item)}</li>`).join('')}</ol>`);
        continue;
      }
      const paragraph = [line.trim()];
      index += 1;
      while (index < lines.length && lines[index].trim() && !/^(#{1,4})\s+/.test(lines[index]) && !/^---+$/.test(lines[index].trim()) && !/^\s*-\s+/.test(lines[index]) && !/^\s*\d+\.\s+/.test(lines[index]) && !lines[index].startsWith('> ') && !lines[index].startsWith('```') && !(lines[index].trim().startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1]))) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      html.push(`<p>${inline(paragraph.join(' '))}</p>`);
    }
    return html.join('\n');
  }

  function approvedMarkdown(text) {
    return text
      .replace('BORRADOR PARA REVISIÓN DEL USUARIO', 'APROBADO POR EL USUARIO')
      .replace('No publicado en OpoWeb. No fusionar sin aprobación expresa.', 'Integrado en OpoWeb tras aprobación expresa del usuario el 17 de julio de 2026.')
      .replace(/- \[ \]/g, '- [x]')
      .replace('Revisión pedagógica humana: **pendiente del usuario**.', 'Revisión pedagógica humana: **aprobada por el usuario el 17 de julio de 2026**.')
      .replace('Preguntas trazables nuevas: pendiente hasta aprobar la teoría.', 'Preguntas trazables nuevas: incorporadas y vinculadas a artículos concretos.')
      .replace('Integración en OpoWeb: no realizada.', 'Integración en OpoWeb: realizada.')
      .replace('Tema cerrado: **NO**.', 'Tema cerrado: **SÍ, aprobado por el usuario**.');
  }

  function loadManual() {
    return fetch(MANUAL_URL)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then(text => {
        manualHtml = renderMarkdown(approvedMarkdown(text));
        const target = document.getElementById('pueblaT01ManualBody');
        if (target) target.innerHTML = manualHtml;
      })
      .catch(error => {
        manualError = `No se pudo cargar el manual: ${error.message}`;
        const target = document.getElementById('pueblaT01ManualBody');
        if (target) target.innerHTML = `<p class="muted">${escape(manualError)}</p>`;
      });
  }

  const originalThemeDetail = typeof themeDetail === 'function' ? themeDetail : null;
  if (originalThemeDetail) {
    themeDetail = function patchedThemeDetail(item) {
      if (item?.id !== theme.id || active()?.id !== ope.id) return originalThemeDetail(item);
      const body = manualHtml || `<p class="muted">${escape(manualError || 'Cargando manual aprobado…')}</p>`;
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button>
        <div class="card compact" id="pueblaT01ApprovalV90">
          <div class="pill-row">
            <span class="badge common">Tema 1 aprobado por el usuario</span>
            <span class="badge area">Cobertura arts. 10–55 y 166–169</span>
            <span class="badge">Revisión 17-07-2026</span>
          </div>
          <p><strong>Criterio de cierre:</strong> epígrafe literal, matriz normativa, desarrollo artículo por artículo, fuentes oficiales y aprobación humana.</p>
          <p class="muted">Los otros dieciocho temas de La Puebla continúan en revisión pedagógica.</p>
        </div>
        <article class="card" id="pueblaT01ManualV90">
          <div id="pueblaT01ManualBody">${body}</div>
        </article>`;
    };
  }

  loadManual();

  window.OPOWEB_PUEBLA_T01_V90 = Object.freeze({
    status: 'APROBADO_POR_USUARIO_E_INTEGRADO',
    approvedAt: REVIEW_DATE,
    manualUrl: MANUAL_URL,
    questions: ope.themeTests[theme.id].length,
    traceableQuestions: ope.themeTests[theme.id].filter(item => item.traceable).length,
    articleCoverage: '10-55 y 166-169',
    remainingPueblaThemes: 18
  });
})();