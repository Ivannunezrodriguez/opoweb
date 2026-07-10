(() => {
  const puebla = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!puebla) return;

  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const supplements = {
    4: [
      ['¿Cabe otro recurso administrativo ordinario contra la resolución de un recurso de alzada?', 'No, sin perjuicio del recurso extraordinario de revisión cuando proceda.', ['Sí, otro recurso de alzada.', 'Sí, reposición obligatoria.', 'Sí, recurso de súplica.'], 'Artículo 122.3 de la Ley 39/2015.'],
      ['¿Cuál es el plazo del recurso extraordinario de revisión basado en documentos esenciales aparecidos posteriormente?', 'Tres meses desde el conocimiento de los documentos.', ['Un mes desde el acto.', 'Cuatro años en todo caso.', 'Seis meses desde la notificación.'], 'Artículo 125.2 de la Ley 39/2015.']
    ],
    16: [
      ['¿Qué atajo selecciona la barra de direcciones en Microsoft Edge?', 'Ctrl + L.', ['Ctrl + D.', 'Ctrl + J.', 'Ctrl + H.'], 'Atajos oficiales de Microsoft Edge.'],
      ['¿Qué atajo guarda la página actual como favorito en Edge?', 'Ctrl + D.', ['Ctrl + L.', 'Ctrl + R.', 'Ctrl + W.'], 'Atajos oficiales de Microsoft Edge.'],
      ['¿Qué atajo abre el historial de navegación?', 'Ctrl + H.', ['Ctrl + J.', 'Ctrl + P.', 'Ctrl + B.'], 'Atajos oficiales de Microsoft Edge.'],
      ['¿Qué atajo abre la lista de descargas?', 'Ctrl + J.', ['Ctrl + H.', 'Ctrl + K.', 'Ctrl + U.'], 'Atajos oficiales de Microsoft Edge.'],
      ['¿Qué combinación abre una ventana InPrivate en Edge?', 'Ctrl + Mayús + N.', ['Ctrl + Mayús + P.', 'Alt + N.', 'Windows + N.'], 'Atajos oficiales de Microsoft Edge.'],
      ['¿Qué acción realiza normalmente F5 o Ctrl + R en el navegador?', 'Actualizar la página.', ['Cerrar la pestaña.', 'Abrir favoritos.', 'Borrar el historial.'], 'Atajos de navegación de Microsoft Edge.'],
      ['¿Qué son las cookies del navegador?', 'Datos que un sitio guarda para recordar sesión, preferencias u otra información.', ['Copias completas del sistema operativo.', 'Programas antivirus.', 'Certificados electrónicos personales.'], 'Documentación de privacidad de Microsoft Edge.'],
      ['¿Para qué sirve la caché del navegador?', 'Para guardar temporalmente recursos y acelerar cargas posteriores.', ['Para firmar electrónicamente.', 'Para sustituir el historial.', 'Para crear unidades de red.'], 'Documentación de Microsoft Edge sobre datos de navegación.'],
      ['¿Garantiza HTTPS que todo el contenido de una página sea verdadero o legítimo?', 'No; cifra la conexión, pero también debe comprobarse el dominio y la identidad del sitio.', ['Sí, siempre.', 'Solo cuando aparece un candado verde.', 'Sí, si la página admite descargas.'], 'Buenas prácticas de navegación segura y documentación de Microsoft Edge.']
    ],
    17: [
      ['¿Cuál es el formato de documento propio y habitual de Microsoft Word?', 'DOCX.', ['ODT.', 'ODS.', 'ODP.'], 'Documentación de formatos de Microsoft Word.']
    ]
  };

  const letters = ['A', 'B', 'C', 'D'];
  Object.entries(supplements).forEach(([numberText, rows]) => {
    const number = Number(numberText);
    const theme = puebla.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    const bank = puebla.themeTests[theme.id] || [];
    const seen = new Set(bank.map(question => norm(question.text)));
    rows.forEach((row, rowIndex) => {
      if (bank.length >= 30 || seen.has(norm(row[0]))) return;
      const [text, correct, wrong, justification] = row;
      const options = [correct, ...wrong];
      const shift = (number + bank.length + rowIndex) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      bank.push({
        id: `puebla-v67-extra-t${number}-q${bank.length + 1}`,
        text,
        options: ordered.map((option, index) => ({ letter: letters[index], text: option })),
        answer: letters[ordered.indexOf(correct)],
        justification,
        source: justification,
        difficulty: ['baja', 'media', 'alta'][rowIndex % 3],
        auditReal: true,
        auditTheme: number
      });
      seen.add(norm(text));
    });
    puebla.themeTests[theme.id] = bank;
  });

  const coverage = puebla.themes.map(theme => ({ number: Number(theme.number), count: (puebla.themeTests[theme.id] || []).length, target: 30 }));
  const totalQuestions = coverage.reduce((sum, item) => sum + item.count, 0);
  puebla.testAudit = {
    ...(puebla.testAudit || {}),
    totalQuestions,
    targetPerTheme: 30,
    targetThemes: coverage.filter(item => item.count >= 30).length,
    minimumQuestions: Math.min(...coverage.map(item => item.count)),
    themes: coverage
  };

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
    while (selected.length < 55 && round < 100) {
      puebla.themes.forEach((theme, themeIndex) => {
        if (selected.length >= 55) return;
        const bank = shuffled(puebla.themeTests[theme.id] || [], seed * 307 + themeIndex + round);
        const question = bank[(round + themeIndex) % bank.length];
        if (!question || used.has(norm(question.text))) return;
        used.add(norm(question.text));
        selected.push({ ...question, auditTheme: Number(theme.number) });
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2203);
    return {
      id: `puebla-v67-final-sim${seed}`,
      title: `Simulacro La Puebla ${seed} · 50 + 5 reserva`,
      questions: ordered.slice(0, 50).map((question, index) => ({ ...question, id: `puebla-v67-final-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(50, 55).map((question, index) => ({ ...question, id: `puebla-v67-final-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 50, reserve: 5, minutes: 60, themes: 19, unique: true }
    };
  }
  puebla.simulacros = [1, 2, 3].map(buildSimulation);

  window.OPOWEB_PUEBLA_V67 = {
    ...(window.OPOWEB_PUEBLA_V67 || {}),
    totalQuestions,
    targetThemes: puebla.testAudit.targetThemes,
    minimumQuestions: puebla.testAudit.minimumQuestions,
    practicalCases: puebla.practicalCases.length,
    simulations: puebla.simulacros.length,
    completedWithSupplements: true
  };
})();
