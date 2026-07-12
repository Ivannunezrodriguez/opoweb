(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 20);
  if (!ope || !theme) return;

  const VERSION = '0.79.0';
  const SOURCE = 'https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const rows = [
    ['¿Qué norma constituye la referencia principal de la contratación administrativa en la UC3M?','La Ley 9/2017, de Contratos del Sector Público','La Ley 39/2015 exclusivamente','El TREBEP','La Ley General Tributaria','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Qué procedimientos de contratación se consideran más habituales en la UC3M?','Contrato menor, negociado, abierto y Central de Contratación del Estado','Solo contrato menor y concesión','Únicamente procedimiento abierto','Subasta y concurso privado','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Puede tramitarse un expediente de contratación sin crédito adecuado y suficiente?','No, en ningún caso','Sí, si lo autoriza el Gerente','Sí, hasta 15.000 euros','Solo en contratos de investigación','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Quién es el órgano de contratación de la UC3M?','El Rector','El Gerente','El Consejo Social','El Secretario General','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Hasta qué importe tiene competencia delegada el Gerente para contratos administrativos?','Hasta un millón de euros','Hasta 100.000 euros','Hasta 15.000 euros','Sin límite cuantitativo','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Qué límite tienen los investigadores responsables de proyectos para adquirir material necesario para dichos proyectos?','Importe inferior a 15.000 euros','Importe inferior a 40.000 euros','Hasta un millón de euros','Importe inferior a 50.000 euros','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué límite general se atribuye a otros órganos y miembros de la Universidad conforme a la Resolución Rectoral de 31 de mayo de 2022?','Importe inferior a 15.000 euros','Importe inferior a 5.000 euros','Importe inferior a 40.000 euros','Hasta 100.000 euros','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Quién nombra la Mesa de contratación UC3M?','El Rector','El Consejo de Gobierno','El Gerente','El Consejo Social','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Qué representación jurídica integra la Mesa de contratación?','Un vocal del Servicio Jurídico de la Universidad','Dos vocales externos','El Defensor Universitario','Un representante del Ministerio Fiscal','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué unidad económico-financiera aporta un vocal a la Mesa?','La Dirección Económica Financiera-Presupuestos','La Tesorería General del Estado','El Consejo Social','La Intervención General de la Comunidad de Madrid','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Cuántos vocales adicionales se nombran con carácter general entre personal de la Universidad?','Dos','Uno','Tres','Cuatro','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué característica tiene el Secretario de la Mesa de contratación?','Tiene voz pero no voto y pertenece a la Dirección Económica Financiera','Tiene voto de calidad','Carece de voz y voto','Debe pertenecer al Consejo Social','Artículo 21 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Cuál es la duración máxima de un contrato menor UC3M?','Un año','Dos años','Seis meses','Tres años','Artículo 21.1.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Puede prorrogarse un contrato menor?','No','Sí, una vez','Sí, hasta dos años','Solo los de investigación','Artículo 21.1.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','baja'],
    ['¿Cuál es el límite del contrato menor de obras, IVA excluido?','Inferior a 40.000 euros','Inferior a 15.000 euros','Hasta 50.000 euros','Inferior a 5.000 euros','Artículo 21.1.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Cuál es el límite del contrato menor de suministros y servicios, IVA excluido?','Inferior a 15.000 euros','Inferior a 40.000 euros','Hasta 50.000 euros','Inferior a 5.000 euros','Artículo 21.1.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Cuál es el límite específico para suministros y servicios de proyectos de investigación?','Inferior a 50.000 euros','Inferior a 15.000 euros','Inferior a 40.000 euros','Hasta un millón de euros','Artículo 21.1.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Qué regla general de concurrencia se exige en contratos menores UC3M?','Solicitar tres presupuestos','Publicar siempre en el DOUE','Convocar subasta','Solicitar una única oferta','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué documento adicional se exige en contratos menores de obras?','Presupuesto de la obra','Informe del Consejo Social','Memoria académica','Certificado de empadronamiento','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué documentación debe acompañar a suministros y obras imputados al capítulo VI?','La requerida para el inventario de los bienes u obras','Solo la factura','Una autorización del Claustro','El acta de la Mesa de contratación','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Qué informe debe justificar la necesidad del contrato menor?','Un informe del órgano de contratación','Un informe del Defensor Universitario','Una certificación del Consejo Social','Una memoria del proveedor','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué debe justificarse para evitar el fraccionamiento indebido?','Que no se altera el objeto del contrato para eludir las reglas generales','Que el proveedor es habitual','Que el contrato dura menos de un año','Que existe una única factura','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Cómo deben iniciarse todos los contratos menores UC3M?','Mediante el procedimiento electrónico de la Sede Electrónica, incorporando el número de expediente','Por correo electrónico al proveedor','Mediante escrito al Consejo Social','Con una llamada telefónica a la DEF','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Cuándo puede excluirse excepcionalmente la petición de tres ofertas?','En gastos que no excedan de 5.000 euros sin IVA y se tramiten por sistema asimilado a caja fija','En todo contrato inferior a 15.000 euros','En cualquier contrato de obras','Siempre que lo pida el proveedor','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Se aplica esa excepción de tres ofertas a proyectos financiados con reglas específicas de la Comunidad de Madrid o entidades nacionales?','No, cuando la convocatoria o normativa exija otros requisitos','Sí, siempre','Solo si el gasto es inferior a 15.000 euros','Sí, con autorización del investigador','Artículo 21.1.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta'],
    ['¿Cuál es el supuesto habitual del procedimiento negociado sin publicidad en la UC3M?','La exclusividad','La urgencia académica','La falta de presupuesto','La ausencia de Mesa de contratación','Artículo 21.2.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué debe remitirse a la DEF-Contratación para iniciar un negociado sin publicidad?','Propuesta, informes exigidos y borrador del pliego técnico','Solo una factura','Una solicitud al Consejo Social','El acta del Claustro','Artículo 21.2.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Qué documento adicional exige un negociado por exclusividad?','Certificado de exclusividad de la empresa','Tres presupuestos','Informe del Defensor Universitario','Certificado de empadronamiento','Artículo 21.2.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Dónde se publican la adjudicación y formalización de los negociados sin publicidad?','En el Perfil de contratante de la Universidad','Solo en el tablón físico','Exclusivamente en el BOE','En el Registro Mercantil','Artículo 21.2.2 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','media'],
    ['¿Cuándo es obligatorio acudir al procedimiento abierto?','Cuando no procede contrato menor, negociado ni Central de Contratación del Estado','Solo en contratos de obras','Únicamente si supera un millón de euros','Cuando lo solicita el proveedor','Artículo 21.3.1 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.','alta']
  ];

  const created = rows.map((row, index) => {
    const [text, correct, w1, w2, w3, justification, difficulty] = row;
    const raw = [correct, w1, w2, w3];
    const shift = index % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `uc3m-v79-t20-q${index + 1}`,
      text,
      options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
      answer: 'ABCD'[ordered.indexOf(correct)],
      justification,
      source: SOURCE,
      difficulty,
      auditReal: true,
      auditTheme: 20,
      institutional: true,
      budgetYear: 2026,
      contractingInternal: true
    };
  });

  const current = ope.themeTests[theme.id] || [];
  const seen = new Set(current.map(question => norm(question.text)));
  const additions = created.filter(question => !seen.has(norm(question.text)));
  ope.themeTests[theme.id] = [...current, ...additions];

  theme.sections = [
    { heading: 'Resumen orientado al aprobado', paragraphs: ['El tema 20 combina la Ley 9/2017 con el procedimiento interno de contratación descrito en las Normas Básicas de Gestión UC3M 2026.', 'La clave es distinguir órgano de contratación, competencias delegadas, Mesa, límites del contrato menor, documentación y procedimientos negociado y abierto.'] },
    { heading: 'Órgano y delegaciones', paragraphs: ['El Rector es el órgano de contratación. El Gerente actúa por delegación hasta un millón de euros; investigadores responsables y otros órganos pueden actuar por debajo de 15.000 euros en los casos previstos.', 'No se tramitan expedientes sin crédito adecuado y suficiente.'] },
    { heading: 'Mesa de contratación', paragraphs: ['La Mesa incluye Presidencia, vocal del Servicio Jurídico, vocal de la Dirección Económica Financiera-Presupuestos, dos vocales de personal universitario y Secretaría de la DEF con voz y sin voto.', 'La resolución puede designar suplentes y vocales adicionales.'] },
    { heading: 'Contratos menores', paragraphs: ['Duración máxima de un año, sin prórroga. Límites: obras menos de 40.000 euros; suministros y servicios menos de 15.000; ciertos proyectos de investigación menos de 50.000, siempre sin IVA.', 'Se exige aprobación del gasto, tres ofertas como regla, factura, informe de necesidad, control anti-fraccionamiento y tramitación electrónica con número de expediente.'] },
    { heading: 'Negociado y abierto', paragraphs: ['El negociado sin publicidad se usa habitualmente por exclusividad y requiere propuesta a DEF-Contratación, informes, borrador técnico y certificado de exclusividad.', 'El abierto es obligatorio cuando no procede menor, negociado o Central de Contratación del Estado. La publicidad se realiza en el Perfil de contratante y, en contratos armonizados, también en el DOUE.'] },
    { heading: 'Opo-Test: cifras críticas', paragraphs: ['• Gerente: hasta 1.000.000 €.','• Investigadores y otros órganos: menos de 15.000 €.','• Menor de obras: menos de 40.000 €.','• Menor de suministros/servicios: menos de 15.000 €.','• Proyectos de investigación: menos de 50.000 €.','• Excepción de tres ofertas: hasta 5.000 € sin IVA y caja fija.'] }
  ];
  theme.reviewTable = [['Bloque','Regla esencial','Fuente'],['Órgano','Rector','Art. 21'],['Gerente','Hasta 1 millón €','Art. 21'],['Investigación','Menos de 15.000 €','Art. 21'],['Mesa','Jurídico, DEF, dos vocales y secretario sin voto','Art. 21'],['Menor obras','<40.000 €','21.1.1'],['Menor suministros/servicios','<15.000 €','21.1.1'],['Investigación específica','<50.000 €','21.1.1'],['Tres ofertas','Regla general; excepción ≤5.000 € y caja fija','21.1.2'],['Negociado','Exclusividad','21.2'],['Abierto','Obligatorio cuando no proceden otras vías','21.3']];
  theme.auditStatus = 'banco real 60+ v0.79 · contratación interna UC3M 2026';
  theme.motorCoverage = 'uc3m-contratacion-interna-completa-v79';
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
      id: `uc3m-v79-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v79-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v79-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(currentTheme => ({ number: Number(currentTheme.number), count: (ope.themeTests?.[currentTheme.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));

  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.79.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}),
    version: 'v0.79.0',
    estimatedProgress: 98,
    completed: ['Tema 20 ampliado con 30 preguntas de contratación interna UC3M','Delegaciones, Mesa, contratos menores, negociado y abierto integrados','Simulacros 70 + 5 regenerados'],
    pending: ['Actualizar parámetros anuales de admisión','Auditoría final de literalidad y dificultad','Validación real en navegador, móvil y PWA']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Añadidas 30 preguntas de contratación interna UC3M','Tema 20 ampliado a 60 preguntas','Banco UC3M elevado a 690 preguntas','Simulacros 70 + 5 regenerados'] });

  window.OPOWEB_UC3M_V79 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, contractingQuestions: additions.length, simulations: ope.simulacros.length, themes: themeAudit };
})();
