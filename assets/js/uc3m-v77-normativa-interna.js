(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 16);
  if (!ope || !theme) return;

  const VERSION = '0.77.0';
  const PERMANENCIA = 'https://hdl.handle.net/10016/27007';
  const NORMATIVA_GRADO = 'https://www.uc3m.es/ss/Satellite/UC3MInstitucional/es/ListadoNormativas/1371206706530/Estudios_de_Grado';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const rows = [
    ['¿Cuántos créditos del primer curso debe aprobar como mínimo un estudiante UC3M durante su primer año académico para poder continuar?','12 créditos','6 créditos','18 créditos','30 créditos','Artículo 1.1 de la Normativa UC3M de permanencia, dispensa y matrícula.','baja',PERMANENCIA],
    ['¿De cuántos años académicos consecutivos dispone con carácter general el estudiante UC3M para aprobar el primer curso completo?','Dos años','Un año','Tres años','Cuatro años','Artículo 1.2.a de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿De cuántos años consecutivos dispone el estudiante de una titulación de ingeniería UC3M para aprobar el primer curso completo?','Tres años','Dos años','Cuatro años','Cinco años','Artículo 1.2.a de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Qué mínimo deben superar los estudiantes de Grados abiertos UC3M antes de acceder a un Grado de la rama correspondiente?','90 ECTS','60 ECTS','120 ECTS','30 ECTS','Artículo 1.2.b de la Normativa UC3M de permanencia, dispensa y matrícula.','alta',PERMANENCIA],
    ['¿Qué resultado mínimo se exige durante el primer año a un estudiante UC3M matriculado a tiempo parcial?','Superar al menos una asignatura','Aprobar 12 ECTS','Aprobar el primer curso completo','Superar 30 ECTS','Artículo 1.3 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Cuántas convocatorias dispone con carácter general un estudiante UC3M para superar una asignatura?','Cuatro convocatorias','Dos convocatorias','Seis convocatorias','Ocho convocatorias','Artículo 2 de la Normativa UC3M de permanencia, dispensa y matrícula.','baja',PERMANENCIA],
    ['¿Cuántas convocatorias dispone un estudiante UC3M de una titulación de ingeniería para superar una asignatura?','Seis convocatorias','Cuatro convocatorias','Cinco convocatorias','Ocho convocatorias','Artículo 2 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Cuándo puede concederse una dispensa de convocatoria por motivo justificado?','Cuando concurran circunstancias excepcionales documentadas que impidan acudir al examen','Cuando el estudiante prefiera no examinarse','Siempre que se solicite después del examen','Solo por motivos laborales no documentados','Artículo 3 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Cuántas convocatorias puede dispensar libremente un estudiante por asignatura?','Un máximo de dos','Una sola','Un máximo de cuatro','Todas las disponibles','Artículo 4 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Pueden dispensarse libremente las asignaturas asignadas al primer curso de un Grado UC3M?','No, en ningún caso','Sí, hasta dos veces','Sí, una vez','Solo en ingeniería','Artículo 4 de la Normativa UC3M de permanencia, dispensa y matrícula.','alta',PERMANENCIA],
    ['¿Cuándo se considera a tiempo parcial una matrícula UC3M?','Cuando no supera 30 ECTS por curso académico','Cuando no supera 18 ECTS','Cuando comprende exactamente 60 ECTS','Cuando incluye menos de 12 ECTS','Artículo 7.1 de la Normativa UC3M de permanencia, dispensa y matrícula.','baja',PERMANENCIA],
    ['¿Qué debe comprender con carácter general la primera matrícula en una titulación UC3M?','Todas las asignaturas asignadas al primer curso','Solo las asignaturas básicas','Un mínimo de 18 ECTS','Las asignaturas elegidas libremente','Artículo 7.2 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Cuál es el mínimo de créditos en las matrículas UC3M posteriores a la primera?','18 ECTS por curso académico','12 ECTS','30 ECTS','60 ECTS','Artículo 7.3 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Qué debe matricular un estudiante que combine asignaturas de distintos cursos?','Todas las asignaturas pendientes de primero y segundo','Solo las asignaturas del curso superior','Únicamente las optativas pendientes','Al menos una asignatura de cada curso','Artículo 8 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Qué límite se aplica si el estudiante de Grado no ha superado 18 ECTS de primero en el cuatrimestre de matrícula?','Solo puede matricular asignaturas de primero y segundo hasta un máximo de 30 ECTS','Puede matricular cualquier curso hasta 60 ECTS','Debe abandonar la titulación','Solo puede matricular 12 ECTS de primero','Artículo 9 de la Normativa UC3M de permanencia, dispensa y matrícula.','alta',PERMANENCIA],
    ['¿Qué devolución puede proceder si se renuncia a toda la matrícula antes del inicio del curso y se había abonado completa?','El 50 %, salvo servicios de secretaría y seguro escolar','El 100 % de todos los conceptos','Ninguna devolución','El 25 % incluido el seguro escolar','Artículo 11.1 de la Normativa UC3M de permanencia, dispensa y matrícula.','alta',PERMANENCIA],
    ['¿Hasta cuándo puede solicitarse con carácter general la anulación parcial de asignaturas sin devolución?','Hasta dos meses después del inicio de cada cuatrimestre','Hasta el día anterior al examen','Durante todo el curso','Solo durante la primera semana','Artículo 11.2 de la Normativa UC3M de permanencia, dispensa y matrícula.','media',PERMANENCIA],
    ['¿Qué peso mínimo tiene la evaluación continua en la convocatoria ordinaria de un Grado UC3M?','El 40 % de la calificación final','El 20 %','El 50 %','El 60 %','Apartado 1 de la Normativa UC3M de evaluación continua.','baja',NORMATIVA_GRADO],
    ['¿Qué peso máximo puede tener el examen final en la convocatoria ordinaria de un Grado UC3M?','El 60 % de la calificación final','El 40 %','El 80 %','El 100 %','Apartado 1 de la Normativa UC3M de evaluación continua.','baja',NORMATIVA_GRADO],
    ['¿Qué derecho tiene en convocatoria extraordinaria quien no siguió la evaluación continua?','Realizar un examen con valor del 100 % de la asignatura','Conservar automáticamente un 40 % de evaluación continua','Ser calificado solo con trabajos','No puede presentarse','Apartado 2.b de la Normativa UC3M de evaluación continua.','media',NORMATIVA_GRADO],
    ['¿Qué opción tiene en convocatoria extraordinaria quien sí siguió la evaluación continua?','Ser calificado solo con el examen final cuando le resulte más favorable','Debe conservar siempre la nota continua aunque le perjudique','No puede realizar examen','Debe repetir todas las actividades','Apartado 2.c de la Normativa UC3M de evaluación continua.','alta',NORMATIVA_GRADO],
    ['¿Cuándo debe publicarse la nota final de una asignatura con examen final?','En un máximo de diez días desde la fecha señalada para el examen','En dos días','En un mes','Antes de celebrarse el examen','Apartado 6 de la Normativa UC3M de evaluación continua.','media',NORMATIVA_GRADO],
    ['¿Con cuánta antelación mínima al examen final debe publicarse la calificación de la evaluación continua?','Al menos cinco días','Un día','Diez días','Dos semanas','Apartado 6 de la Normativa UC3M de evaluación continua.','media',NORMATIVA_GRADO],
    ['¿En qué plazo debe celebrarse la revisión de una calificación con examen final?','Entre los dos y los siete días siguientes a la publicación','El mismo día de la publicación','Dentro del mes siguiente','Entre diez y veinte días después','Artículo 2.3 de la Normativa UC3M sobre revisión de calificaciones.','alta',NORMATIVA_GRADO],
    ['¿Cómo debe realizarse la revisión ordinaria de una calificación UC3M?','De forma personalizada y oral en el campus donde se impartió la asignatura','Exclusivamente por correo electrónico','Por escrito ante el Consejo Social','Mediante audiencia pública','Artículo 3.3 de la Normativa UC3M sobre revisión de calificaciones.','media',NORMATIVA_GRADO],
    ['¿En qué plazo puede recurrir un estudiante de Grado ante el Director del Departamento tras la revisión?','Dentro de los siete días siguientes','Dentro de dos días','Dentro de un mes','En cualquier momento del curso','Artículo 4.1 de la Normativa UC3M sobre revisión de calificaciones.','alta',NORMATIVA_GRADO],
    ['¿Cuántos profesores doctores puede tener como máximo la Comisión de reclamaciones?','Tres, con sus respectivos suplentes','Cinco','Dos','Siete','Artículo 5 de la Normativa UC3M sobre revisión de calificaciones.','media',NORMATIVA_GRADO],
    ['¿Pueden formar parte de la Comisión de reclamaciones profesores que intervinieron en la evaluación recurrida?','No','Sí, siempre','Solo el coordinador','Solo si lo autoriza el estudiante','Artículo 5 de la Normativa UC3M sobre revisión de calificaciones.','media',NORMATIVA_GRADO],
    ['¿Qué efecto tiene la resolución del Director del Departamento o del Director del Máster sobre la vía administrativa?','La agota','Abre automáticamente una segunda revisión docente','Suspende la calificación durante un año','Carece de efectos administrativos','Artículos 6.4 y 9.4 de la Normativa UC3M sobre revisión de calificaciones.','alta',NORMATIVA_GRADO],
    ['¿Qué naturaleza tienen los plazos de la normativa UC3M sobre revisión de calificaciones?','Son días naturales','Son días hábiles','Son meses académicos','Los fija cada profesor','Disposición general primera de la Normativa UC3M sobre revisión de calificaciones.','media',NORMATIVA_GRADO]
  ];

  const internalQuestions = rows.map((row, index) => {
    const [text, correct, w1, w2, w3, justification, difficulty, source] = row;
    const raw = [correct, w1, w2, w3];
    const shift = index % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `uc3m-v77-t16-interna-q${index + 1}`,
      text,
      options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
      answer: 'ABCD'[ordered.indexOf(correct)],
      justification,
      source,
      difficulty,
      auditReal: true,
      auditTheme: 16,
      institutional: true
    };
  });

  const current = ope.themeTests[theme.id] || [];
  const seen = new Set(current.map(question => norm(question.text)));
  ope.themeTests[theme.id] = [...current, ...internalQuestions.filter(question => !seen.has(norm(question.text)))];

  theme.sections = [
    { heading: 'Resumen orientado al aprobado', paragraphs: ['El tema 16 combina el Real Decreto 822/2021 con la normativa interna UC3M de permanencia, matrícula, evaluación continua y revisión de calificaciones.', 'Los datos más examinables son créditos mínimos, número de convocatorias, porcentajes de evaluación y plazos de publicación, revisión y reclamación.'] },
    { heading: 'Permanencia y matrícula UC3M', paragraphs: ['Durante el primer año deben aprobarse 12 créditos. El primer curso completo se supera en dos años consecutivos, tres en ingenierías. La regla general es cuatro convocatorias por asignatura, seis en ingenierías.', 'La matrícula parcial no supera 30 ECTS; las matrículas posteriores exigen al menos 18 ECTS. La dispensa libre alcanza un máximo de dos convocatorias y no se admite en asignaturas de primer curso.'] },
    { heading: 'Evaluación continua UC3M', paragraphs: ['La evaluación continua representa como mínimo el 40 % y el examen final no puede superar el 60 % en convocatoria ordinaria.', 'En extraordinaria, quien no siguió la evaluación continua tiene derecho a examen del 100 %; quien sí la siguió puede optar por la nota del examen cuando sea más favorable.'] },
    { heading: 'Revisión de calificaciones', paragraphs: ['La revisión se celebra entre dos y siete días después de publicar la nota, es personalizada y oral, y permite acceder a las pruebas.', 'El recurso de Grado se dirige al Director del Departamento dentro de los siete días siguientes. La resolución agota la vía administrativa y los plazos son naturales.'] },
    { heading: 'Opo-Test: cifras críticas', paragraphs: ['• Primer año: 12 créditos.','• Primer curso: 2 años; ingeniería 3.','• Convocatorias: 4; ingeniería 6.','• Matrícula parcial: máximo 30 ECTS; posteriores: mínimo 18.','• Evaluación continua: mínimo 40 %; examen: máximo 60 %.','• Revisión: 2–7 días; recurso: 7 días naturales.'] }
  ];
  theme.reviewTable = [['Bloque','Regla esencial','Fuente'],['Primer año','12 créditos','Permanencia art. 1'],['Primer curso','2 años; ingeniería 3','Permanencia art. 1'],['Convocatorias','4; ingeniería 6','Permanencia art. 2'],['Matrícula','Parcial ≤30; posteriores ≥18','Permanencia art. 7'],['Evaluación','Continua ≥40 %; examen ≤60 %','Evaluación continua ap. 1'],['Extraordinaria','Examen 100 % sin continua','Evaluación continua ap. 2'],['Revisión','2–7 días; recurso en 7','Revisión arts. 2–4']];
  theme.auditStatus = 'banco real 60+ v0.77 · marco estatal e interno UC3M';
  theme.motorCoverage = 'uc3m-academica-interna-completa-v77';
  theme.officialSourceUrl = NORMATIVA_GRADO;

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
      ope.themes.forEach((currentTheme, themeIndex) => {
        if (selected.length >= 75) return;
        const bank = shuffled(ope.themeTests?.[currentTheme.id] || [], seed * 347 + themeIndex + round);
        for (let offset = 0; offset < bank.length; offset += 1) {
          const question = bank[(round + themeIndex + offset) % bank.length];
          const key = norm(question?.text);
          if (!key || used.has(key)) continue;
          used.add(key);
          selected.push({ ...question, auditTheme: Number(currentTheme.number) });
          break;
        }
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2371);
    return {
      id: `uc3m-v77-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v77-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v77-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(currentTheme => ({ number: Number(currentTheme.number), count: (ope.themeTests?.[currentTheme.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));

  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.77.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}),
    version: 'v0.77.0',
    estimatedProgress: 93,
    completed: ['Tema 16 ampliado a 60 preguntas: 30 estatales y 30 internas UC3M','Permanencia, matrícula, evaluación continua y revisión de calificaciones integradas','Simulacros 70 + 5 regenerados'],
    pending: ['Actualizar parámetros anuales de ponderación, cupos y calendario UC3M','Cerrar presupuesto y bases de ejecución vigentes','Extraer delegaciones internas de contratación','Auditoría final de literalidad y dificultad']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Añadidas 30 preguntas de normativa académica interna UC3M','Tema 16 ampliado a 60 preguntas','Banco UC3M elevado a 630 preguntas','Simulacros 70 + 5 regenerados'] });

  window.OPOWEB_UC3M_V77 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, institutionalQuestions: 30, simulations: ope.simulacros.length, themes: themeAudit };
})();
