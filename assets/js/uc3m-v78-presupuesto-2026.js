(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const VERSION = '0.78.0';
  const SOURCE = 'https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const rows18 = [
    ['¿Qué expresa el Presupuesto UC3M 2026?','Las obligaciones que como máximo puede reconocer la Universidad y los derechos que prevé realizar durante el ejercicio','Solo los ingresos efectivamente cobrados','Únicamente las inversiones plurianuales','Exclusivamente la plantilla de personal','Artículo 1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Cuál es el importe total del Presupuesto UC3M 2026?','300.468.067,59 euros','325.000.000 euros','258.585.450 euros','210.639.909,90 euros','Distribución por capítulos del Presupuesto UC3M 2026.','alta'],
    ['¿Cuál es el techo del presupuesto de gastos UC3M para 2026?','325 millones de euros','300 millones de euros exactos','275 millones de euros','210 millones de euros','Artículo 2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué capítulo concentra el mayor importe del presupuesto de gastos UC3M 2026?','El capítulo I, gastos de personal','El capítulo II, bienes corrientes y servicios','El capítulo VII, transferencias de capital','El capítulo IX, pasivos financieros','Distribución por capítulos del Presupuesto UC3M 2026.','baja'],
    ['¿Qué importe se presupuesta en 2026 para gastos de personal?','161.190.785,21 euros','40.697.181,71 euros','55.170.132,65 euros','146.834.705,33 euros','Distribución por capítulos del Presupuesto UC3M 2026.','alta'],
    ['¿Qué porcentaje del presupuesto de gastos representa el capítulo I?','76,52 %','70,10 %','29,34 %','19,32 %','Distribución por capítulos del Presupuesto UC3M 2026.','alta'],
    ['¿Qué capítulo constituye la principal fuente de ingresos corrientes UC3M 2026?','El capítulo IV, transferencias corrientes','El capítulo III, tasas y otros ingresos','El capítulo V, ingresos patrimoniales','El capítulo VIII, activos financieros','Distribución por capítulos del Presupuesto UC3M 2026.','media'],
    ['¿Qué importe total alcanzan las transferencias corrientes de ingresos en 2026?','146.834.705,33 euros','54.945.567,32 euros','52.616.000 euros','41.882.621,94 euros','Distribución por capítulos del Presupuesto UC3M 2026.','alta'],
    ['¿Qué porcentaje mínimo del capítulo II de Gerencia y Servicios debe destinarse al fondo bibliográfico y documental?','El 8 %','El 2 %','El 5 %','El 10 %','Artículo 2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026 y artículo 161.4 de los Estatutos.','media'],
    ['¿Qué porcentaje mínimo de la plantilla de funcionarios docentes se reserva para años sabáticos?','El 2 %','El 8 %','El 1 %','El 5 %','Artículo 2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026 y artículo 108.4 de los Estatutos.','media'],
    ['¿Cómo se clasifican los créditos de gastos UC3M?','Por estructura funcional o por programas, orgánica y económica','Solo por capítulos económicos','Únicamente por centros de gestión','Por clasificación territorial y temporal','Artículo 4 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Cómo se clasifican los créditos de ingresos UC3M?','Por estructura orgánica y económica','Por estructura funcional, orgánica y económica','Solo por programas','Por estructura económica y territorial','Artículo 4 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué órgano debe autorizar las operaciones de crédito destinadas a financiar inversiones?','La Comunidad Autónoma','El Claustro Universitario','La Conferencia de Rectores','La Comisión de Reclamaciones','Artículo 3 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿A qué nivel vinculan con carácter general los créditos presupuestarios?','A nivel de concepto dentro de cada centro y programa','A nivel de artículo en toda la Universidad','A nivel de subconcepto sin excepción','A nivel de capítulo para todos los gastos','Artículo 5 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿A qué nivel vinculan los capítulos I, II y VI como excepción general?','A nivel de capítulo','A nivel de subconcepto','A nivel de artículo','A nivel de programa completo','Artículo 5 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta']
  ];

  const rows19 = [
    ['¿Quién aprueba las generaciones de crédito en el Presupuesto UC3M 2026?','El Rector','El Consejo Social','El Consejo de Gobierno','La Gerencia','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Quién aprueba las rectificaciones presupuestarias?','El Rector','El Consejo Social','El Gerente','La Comunidad de Madrid','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Qué órgano aprueba una transferencia entre capítulos de gastos corrientes cuando supera el límite del contrato menor de obras?','El Consejo de Gobierno','El Rector','El Consejo Social','El Vicerrector de Investigación','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Quién aprueba las transferencias de gastos corrientes a gastos de capital?','El Consejo Social','El Rector','El Gerente','El Consejo de Gobierno exclusivamente','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué exige una transferencia de operaciones de capital a operaciones corrientes?','Aprobación del Consejo Social y autorización previa del Gobierno de la Comunidad de Madrid','Solo resolución del Rector','Aprobación del Claustro','Informe de la Biblioteca','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Qué importe mínimo debe superar un remanente para poder incorporarse al ejercicio siguiente en los casos previstos?','300 euros','100 euros','1.000 euros','3.000 euros','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Quién autoriza las incorporaciones de crédito?','El Rector','El Consejo Social','El Gerente','La Comunidad Autónoma','Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Quién aprueba las redistribuciones de créditos?','El Rector','El Consejo de Gobierno','El Consejo Social','La DEF-Servicio de Presupuestos','Artículo 7 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿En quién se delega la firma de redistribuciones del capítulo VI de investigación?','En el Vicerrector de Investigación y Transferencia','En el Gerente','En el Secretario General','En el Defensor Universitario','Artículo 7 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿A través de qué unidad se tramitan todas las solicitudes de modificaciones presupuestarias?','La DEF-Servicio de Presupuestos','La Secretaría General','El Consejo Social','El Servicio Jurídico','Artículo 8 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué ocurre con los compromisos de gasto superiores al crédito autorizado?','Los actos y disposiciones correspondientes son nulos de pleno derecho','Se convalidan automáticamente al cierre','Se pagan con cargo al ejercicio siguiente','Se transforman en anticipos de caja','Artículo 10 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Qué requisitos generales deben cumplir los gastos UC3M?','Ser necesarios, idóneos y efectuarse en beneficio de la Universidad','Ser únicamente urgentes','Tener siempre carácter plurianual','Ser aprobados por el Claustro','Artículo 10 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Qué información debe incluir la justificación de una comida protocolaria?','Motivo, lugar, asistentes e institución, empresa u organismo al que pertenecen','Solo el importe total','Únicamente el nombre del responsable del centro','La relación de asignaturas del curso','Artículo 10 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Quiénes tienen competencia para autorizar y disponer gastos?','El Rector y los órganos con facultades económico-financieras delegadas','Solo el Consejo Social','Exclusivamente el Gerente','El Claustro y el Defensor Universitario','Artículo 10 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué sucede si el presupuesto del año siguiente no está aprobado antes del 1 de enero?','Se prorroga automáticamente el presupuesto anterior con los ajustes técnicos oportunos','Se paraliza toda ejecución presupuestaria','Se aplica el presupuesto de la Comunidad de Madrid','El Rector aprueba uno provisional sin límites','Artículo 11 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja']
  ];

  function build(number, rows) {
    const currentTheme = theme(number);
    if (!currentTheme) return 0;
    const created = rows.map((row, index) => {
      const [text, correct, w1, w2, w3, justification, difficulty] = row;
      const raw = [correct, w1, w2, w3];
      const shift = index % 4;
      const ordered = raw.slice(shift).concat(raw.slice(0, shift));
      return {
        id: `uc3m-v78-t${number}-q${index + 1}`,
        text,
        options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        source: SOURCE,
        difficulty,
        auditReal: true,
        auditTheme: number,
        institutional: true,
        budgetYear: 2026
      };
    });
    const current = ope.themeTests[currentTheme.id] || [];
    const seen = new Set(current.map(question => norm(question.text)));
    const additions = created.filter(question => !seen.has(norm(question.text)));
    ope.themeTests[currentTheme.id] = [...current, ...additions];
    currentTheme.auditStatus = `banco real 45+ v0.78 · Presupuesto UC3M 2026 · tema ${number}`;
    currentTheme.motorCoverage = `uc3m-presupuesto-2026-t${number}-v78`;
    currentTheme.officialSourceUrl = SOURCE;
    return additions.length;
  }

  const added18 = build(18, rows18);
  const added19 = build(19, rows19);

  const t18 = theme(18);
  if (t18) {
    t18.sections = [
      { heading: 'Resumen orientado al aprobado', paragraphs: ['El Presupuesto UC3M 2026 asciende a 300.468.067,59 euros y fija un techo de gasto de 325 millones.', 'El tema combina estructura, fuentes de financiación, clasificación de créditos, vinculación y datos propios del ejercicio 2026.'] },
      { heading: 'Magnitudes y estructura', paragraphs: ['El capítulo I concentra 161.190.785,21 euros y el 76,52 % del gasto. En ingresos, las transferencias corrientes alcanzan 146.834.705,33 euros.', 'Los gastos se clasifican funcional, orgánica y económicamente; los ingresos, orgánica y económicamente.'] },
      { heading: 'Reglas estatutarias', paragraphs: ['La Biblioteca recibe al menos el 8 % del capítulo II de Gerencia y Servicios para fondo bibliográfico y documental.', 'La Universidad reserva un mínimo del 2 % de la plantilla de funcionarios docentes para años sabáticos.'] },
      { heading: 'Vinculación', paragraphs: ['La regla general es la vinculación a nivel de concepto dentro de cada centro y programa.', 'Los capítulos I, II y VI vinculan a nivel de capítulo, sin perjuicio de las excepciones expresas para atenciones protocolarias y subvenciones nominativas.'] },
      { heading: 'Opo-Test: cifras críticas', paragraphs: ['• Total: 300.468.067,59 euros.','• Techo de gasto: 325 millones.','• Capítulo I: 161.190.785,21 euros y 76,52 %.','• Biblioteca: mínimo 8 %.','• Sabáticos: mínimo 2 %.'] }
    ];
    t18.reviewTable = [['Bloque','Regla o cifra','Fuente'],['Total','300.468.067,59 €','Distribución por capítulos'],['Techo','325 millones €','Art. 2'],['Gastos','Triple clasificación','Art. 4'],['Ingresos','Doble clasificación','Art. 4'],['Biblioteca','Mínimo 8 %','Art. 2'],['Sabáticos','Mínimo 2 %','Art. 2'],['Vinculación','Concepto; I, II y VI a capítulo','Art. 5']];
  }

  const t19 = theme(19);
  if (t19) {
    t19.sections = [
      { heading: 'Resumen orientado al aprobado', paragraphs: ['El tema 19 se centra en modificaciones presupuestarias, ejecución del gasto, redistribuciones, prórroga y órganos competentes.', 'La clave de test es distinguir Rector, Consejo de Gobierno, Consejo Social, Comunidad de Madrid y DEF-Servicio de Presupuestos.'] },
      { heading: 'Modificaciones', paragraphs: ['El Rector aprueba generaciones, rectificaciones, incorporaciones y redistribuciones. El Consejo Social interviene en transferencias entre gasto corriente y capital.', 'Las incorporaciones previstas exigen remanentes superiores a 300 euros, superávit y respeto de la estabilidad presupuestaria.'] },
      { heading: 'Ejecución del gasto', paragraphs: ['No pueden asumirse compromisos por encima del crédito autorizado; los actos infractores son nulos de pleno derecho.', 'Los gastos deben ser necesarios, idóneos y beneficiosos para la Universidad. Los protocolarios requieren justificación reforzada.'] },
      { heading: 'Prórroga', paragraphs: ['Si el nuevo presupuesto no está aprobado antes del 1 de enero, se prorroga automáticamente el anterior con ajustes técnicos.', 'La autorización y disposición corresponde al Rector y a los órganos con delegaciones económico-financieras vigentes.'] },
      { heading: 'Opo-Test: órganos críticos', paragraphs: ['• Rector: generaciones, rectificaciones, incorporaciones y redistribuciones.','• Consejo de Gobierno: transferencias superiores al límite indicado entre capítulos homogéneos.','• Consejo Social: corriente a capital; capital a corriente con autorización autonómica.','• DEF: tramitación de solicitudes.'] }
    ];
    t19.reviewTable = [['Operación','Órgano o regla','Artículo'],['Generación','Rector','6'],['Transferencia corriente-capital','Consejo Social','6'],['Capital-corriente','Consejo Social + autorización CAM','6'],['Incorporación','Rector; remanente >300 €','6'],['Redistribución','Rector','7'],['Solicitud','DEF-Servicio de Presupuestos','8'],['Exceso de crédito','Nulidad de pleno derecho','10'],['Prórroga','Automática desde 1 de enero','11']];
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
      id: `uc3m-v78-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v78-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v78-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(currentTheme => ({ number: Number(currentTheme.number), count: (ope.themeTests?.[currentTheme.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));

  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.78.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}),
    version: 'v0.78.0',
    estimatedProgress: 96,
    completed: ['Presupuesto UC3M 2026 integrado en los temas 18 y 19','Añadidas 30 preguntas institucionales de estructura, modificaciones y ejecución','Simulacros 70 + 5 regenerados'],
    pending: ['Extraer delegaciones internas de contratación','Actualizar parámetros anuales de admisión','Auditoría final de literalidad y dificultad','Validación real en navegador y PWA']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Añadidas 30 preguntas del Presupuesto UC3M 2026','Temas 18 y 19 ampliados a 45 preguntas cada uno','Banco UC3M elevado a 660 preguntas','Simulacros 70 + 5 regenerados'] });

  window.OPOWEB_UC3M_V78 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, budgetQuestions: added18 + added19, simulations: ope.simulacros.length, themes: themeAudit };
})();
