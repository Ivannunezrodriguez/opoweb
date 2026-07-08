(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const section = (heading, paragraphs) => ({ heading, paragraphs });
  const norm = (value) => String(value || '').toLowerCase();
  const hasHeading = (sections, text) => sections.some(s => norm(s.heading).includes(norm(text)));

  function hotPointsFor(t) {
    const text = norm(`${t.title} ${t.area}`);
    const points = [];
    if (text.includes('constitución') || text.includes('derechos y deberes')) {
      points.push('• Estructura constitucional: Preámbulo, Título Preliminar, Título I, parte orgánica, reforma y parte final.');
      points.push('• Artículos clave: 1, 2, 9.3, 14, 53, 55, 167 y 168 CE cuando entren en el epígrafe.');
    }
    if (text.includes('ley 39/2015') || text.includes('procedimiento') || text.includes('acto administrativo') || text.includes('recurso')) {
      points.push('• Ley 39/2015: interesados, representación, registros, obligación de resolver, silencio, plazos, actos, notificaciones, revisión y recursos.');
      points.push('• Plazos trampa: diez días de subsanación cuando proceda, tres meses si no hay plazo máximo, días hábiles como regla general y urgencia sin solicitudes ni recursos.');
    }
    if (text.includes('ley 40/2015') || text.includes('régimen jurídico') || text.includes('competencia administrativa')) {
      points.push('• Ley 40/2015: competencia irrenunciable, delegación, avocación, encomienda, delegación de firma, suplencia, abstención y recusación.');
    }
    if (text.includes('municipio') || text.includes('provincia') || text.includes('diputación') || text.includes('régimen local')) {
      points.push('• Régimen local: municipio, provincia, Diputación, órganos, competencias, padrón, funcionamiento y régimen electoral si entra en el tema.');
    }
    if (text.includes('contrat')) {
      points.push('• Contratación: expediente, órgano de contratación, pliegos, adjudicación, formalización, garantías, ejecución, modificación, suspensión y extinción.');
    }
    if (text.includes('hacienda') || text.includes('presupuesto') || text.includes('tribut') || text.includes('recaudación') || text.includes('ibi') || text.includes('iae') || text.includes('tasas')) {
      points.push('• Hacienda/tributos: hecho imponible, sujeto pasivo, devengo, base, cuota, beneficios fiscales, gestión, recaudación y revisión.');
      points.push('• Presupuesto: contenido, bases de ejecución, aprobación, prórroga, modificaciones, ejecución y liquidación.');
    }
    if (text.includes('windows') || text.includes('libreoffice') || text.includes('ordenador') || text.includes('periféricos') || text.includes('groupwise')) {
      points.push('• Ofimática: operaciones concretas en Windows, correo, Writer, Calc, Base, Impress, impresión, escaneado y periféricos.');
    }
    points.push('• En test, vigila literalmente órgano competente, plazo exacto, excepción y efecto jurídico.');
    return points.slice(0, 10);
  }

  function retentionFor(t) {
    return [
      `1. ¿Cuál es la estructura interna del documento o norma que sostiene este tema: “${t.title}”?`,
      '2. ¿Qué artículos, órganos, plazos o conceptos son más fáciles de confundir en una pregunta tipo test?',
      '3. ¿Cómo contestarías un supuesto práctico con este esquema: norma aplicable, órgano competente, trámite, plazo, documentación y consecuencia?'
    ];
  }

  function normalizeTheme(t) {
    const original = (t.sections || []).filter(s => {
      const h = norm(s.heading);
      return !h.includes('resumen orientado al aprobado') &&
             !h.includes('rigor normativo') &&
             !h.includes('opo-test') &&
             !h.includes('retención activa') &&
             !h.includes('retencion activa');
    });

    const base = [
      section('Resumen orientado al aprobado', [
        `Enunciado oficial: ${t.title}`,
        `Área: ${t.area}. Objetivo: entender la norma o documento completo, pero estudiar con prioridad el epígrafe exacto que exige esta convocatoria.`,
        'En cada vuelta debes poder explicar: concepto, norma aplicable, órgano competente, trámite, plazo, efecto jurídico y excepción.'
      ]),
      section('Rigor normativo', [
        'Mantén literalmente denominaciones legales, artículos, órganos y plazos. No conviertas días hábiles en naturales, ni meses en días aproximados.',
        'Cuando un documento sea común a varias oposiciones, estudia el documento madre por títulos, capítulos y artículos, y después filtra solo los apartados que pide cada convocatoria.',
        'En caso de duda entre resumen y texto legal, manda el texto legal vigente y el enunciado oficial de la convocatoria.'
      ])
    ];

    const hot = section('Opo-Test: puntos calientes', hotPointsFor(t));
    const recall = section('Retención activa: 3 preguntas clave', retentionFor(t));

    const plan = section('Plan de estudio recomendado', [
      'Primera vuelta: lectura comprensiva del documento madre y mapa de títulos/capítulos/artículos.',
      'Segunda vuelta: resumen fino del epígrafe concreto que entra en la OPE.',
      'Tercera vuelta: Opo-Test y preguntas de retención activa sin mirar.',
      'Cuarta vuelta: test cronometrado, revisión de fallos y repaso espaciado a 24 horas, 7 días y antes del simulacro.'
    ]);

    t.sections = [...base, ...original, hot, recall, plan];
    t.tree = [
      `Tema ${t.number}`,
      '- Resumen orientado al aprobado',
      '- Rigor normativo',
      '- Documento madre reutilizable',
      '- Desarrollo tipo academia',
      '- Opo-Test: puntos calientes',
      '- Retención activa',
      '- Plan de estudio'
    ].join('\n');
    t.studyMethodVersion = 'v15-esencia-opotest';
  }

  function ensureDiputacionPriority() {
    const index = data.oposiciones.findIndex(o => o.id === 'diputacion-toledo-admin-2026');
    if (index >= 0) {
      data.oposiciones[index].status = data.oposiciones[index].status || 'Pendiente de solicitud. Oposición libre C1 de Diputación de Toledo.';
      data.oposiciones[index].shortName = 'Diputación Toledo - Administrativo C1';
    }
  }

  ensureDiputacionPriority();
  data.oposiciones.forEach(ope => {
    (ope.themes || []).forEach(normalizeTheme);
    ope.version = '0.15.0';
    ope.changelog ||= [];
    if (!ope.changelog.some(c => c.version === '0.15.0')) {
      ope.changelog.unshift({
        version: '0.15.0',
        date: '2026-07-08',
        changes: ['Reforzada la estructura común de todos los temas: resumen orientado al aprobado, rigor normativo, Opo-Test, retención activa y plan de estudio; confirmada Diputación en el selector']
      });
    }
  });

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();
