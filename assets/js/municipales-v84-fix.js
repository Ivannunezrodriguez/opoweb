(() => {
  const data = window.OPOSICIONES_DATA;
  const release = window.OPOWEB_MUNICIPALES_V84;
  const puebla = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!puebla || !release?.puebla) return;

  const norm = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const fallbackDistractors = [
    'Un programa de presentaciones sin funciones propias de hoja de cálculo.',
    'Un procesador de textos sin estructura de celdas ni fórmulas.',
    'Una aplicación de dibujo orientada exclusivamente a imágenes.',
    'Un gestor de correo electrónico sin funciones de cálculo tabular.',
    'Una herramienta de reproducción multimedia.',
    'Un navegador web sin libro de hojas de cálculo.'
  ];

  function repairOptions(question) {
    const options = Array.isArray(question?.options) ? question.options : [];
    if (options.length !== 4) return 0;
    const correct = options.find(option => option.letter === question.answer);
    if (!correct || !norm(correct.text)) return 0;

    const used = new Set([norm(correct.text)]);
    let repaired = 0;
    options.forEach(option => {
      if (option.letter === question.answer) return;
      const key = norm(option.text);
      if (key && !used.has(key)) {
        used.add(key);
        return;
      }
      const replacement = fallbackDistractors.find(text => !used.has(norm(text)));
      if (!replacement) return;
      option.text = replacement;
      used.add(norm(replacement));
      repaired += 1;
    });

    if (repaired) {
      question.auditRepairV84 = true;
      question.auditRepairReason = 'Alternativa vacía o duplicada sustituida sin modificar la respuesta correcta.';
    }
    return repaired;
  }

  const theme18 = puebla.themes.find(theme => Number(theme.number) === 18);
  const theme18Bank = theme18 ? (puebla.themeTests?.[theme18.id] || []) : [];
  const repairedOptions = theme18Bank.reduce((sum, question) => sum + repairOptions(question), 0);

  function addTheme(caseIndex, themeNumber) {
    const practical = puebla.practicalCases?.[caseIndex];
    if (!practical) return;
    practical.themes = [...new Set([...(practical.themes || []).map(Number), themeNumber])].sort((a, b) => a - b);
  }

  addTheme(13, 1);
  addTheme(8, 14);

  const validOptions = question => {
    const options = question?.options || [];
    const texts = options.map(option => norm(option.text));
    return options.length === 4 && texts.every(Boolean) && new Set(texts).size === 4;
  };

  const theme18Audit = release.puebla.themes.find(theme => theme.number === 18);
  if (theme18Audit) theme18Audit.invalidOptions = theme18Bank.filter(question => !validOptions(question)).length;

  release.puebla.practicalThemeCoverage = [...new Set(
    (puebla.practicalCases || []).flatMap(item => item.themes || []).map(Number).filter(Boolean)
  )].sort((a, b) => a - b);

  const fullPracticalCoverage = Array.from({ length: 19 }, (_, index) => index + 1)
    .every(number => release.puebla.practicalThemeCoverage.includes(number));

  release.puebla.failures = (release.puebla.failures || []).filter(failure => {
    if (failure === 'Tema 18: opciones inválidas' && theme18Audit?.invalidOptions === 0) return false;
    if (failure === 'Cobertura práctica incompleta de los temas 1 a 19' && fullPracticalCoverage) return false;
    return true;
  });
  release.puebla.status = release.puebla.failures.length ? 'REVISAR' : 'APTO';
  release.puebla.estimatedProgress = release.puebla.status === 'APTO' ? 99 : 95;
  release.puebla.repairedOptions = repairedOptions;
  release.puebla.practicalCoverageRepair = fullPracticalCoverage;
  release.globalStatus = release.puebla.status === 'APTO' && release.carranque?.status === 'APTO' ? 'APTO' : 'REVISAR';

  window.OPOWEB_MUNICIPALES_V84_FIX = {
    repairedOptions,
    practicalCoverage: release.puebla.practicalThemeCoverage,
    pueblaStatus: release.puebla.status,
    globalStatus: release.globalStatus
  };
})();
