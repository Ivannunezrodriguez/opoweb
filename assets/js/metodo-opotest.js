(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const section = (heading, paragraphs) => ({ heading, paragraphs });
  const norm = (value) => String(value || '').toLowerCase();
  const uniq = (items) => [...new Set(items.filter(Boolean))];
  const splitSentences = (text) => String(text || '')
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 30);

  function themeText(t) {
    return [
      t.title,
      t.area,
      ...(t.sections || []).flatMap(s => [s.heading, ...(s.paragraphs || [])])
    ].join(' ');
  }

  function keyConcepts(t) {
    const text = norm(themeText(t));
    const items = [];

    if (text.includes('constitución') || text.includes('tribunal constitucional') || text.includes('corona') || text.includes('cortes generales')) {
      items.push('Estructura de la Constitución: Título Preliminar, parte dogmática, parte orgánica y reforma constitucional.');
      items.push('Diferencia entre derechos fundamentales, derechos y deberes, principios rectores y sus garantías.');
      items.push('Artículos de referencia muy preguntables: 1, 2, 9.3, 14, 53, 55, 167 y 168 CE cuando aparezcan en el tema.');
    }
    if (text.includes('ley 39/2015') || text.includes('procedimiento administrativo') || text.includes('acto administrativo') || text.includes('recursos administrativos')) {
      items.push('Ley 39/2015: interesados, representación, registros, obligación de resolver, silencio, actos, procedimiento, revisión y recursos.');
      items.push('No confundas plazo máximo para resolver, plazo de subsanación, plazo de recurso y cómputo por días hábiles/naturales.');
      items.push('En supuesto práctico: hechos, norma aplicable, órgano competente, trámite, plazo, efectos y recurso procedente.');
    }
    if (text.includes('ley 40/2015') || text.includes('régimen jurídico') || text.includes('órganos de las administraciones')) {
      items.push('Ley 40/2015: órgano administrativo, competencia, delegación, avocación, encomienda, delegación de firma, suplencia, abstención y recusación.');
      items.push('Distingue relación interorgánica, relación interadministrativa y funcionamiento electrónico del sector público.');
    }
    if (text.includes('municipio') || text.includes('provincia') || text.includes('diputación') || text.includes('régimen local') || text.includes('entidades locales')) {
      items.push('Régimen local: concepto, elementos, organización, competencias y funcionamiento de municipio, provincia y otras entidades locales.');
      items.push('Diferencia órganos necesarios, órganos complementarios, competencias propias, delegadas y servicios mínimos.');
    }
    if (text.includes('contrato') || text.includes('contratación') || text.includes('contratista')) {
      items.push('Contratación pública: preparación, adjudicación, garantías, ejecución, modificación, suspensión, invalidez y extinción.');
      items.push('En test suelen preguntar fases del expediente, clases de contrato, selección del contratista y efectos de la formalización.');
    }
    if (text.includes('empleo público') || text.includes('funcionario') || text.includes('régimen disciplinario') || text.includes('situaciones administrativas')) {
      items.push('Empleo público: clases de personal, acceso, pérdida de la relación de servicio, derechos, deberes, situaciones y régimen disciplinario.');
      items.push('No mezcles selección de personal, provisión de puestos, promoción interna, carrera profesional y oferta de empleo público.');
    }
    if (text.includes('presupuesto') || text.includes('hacienda') || text.includes('tribut') || text.includes('recaudación') || text.includes('ibi') || text.includes('iae') || text.includes('vehículos') || text.includes('tasas')) {
      items.push('Hacienda local y tributos: hecho imponible, sujeto pasivo, devengo, base imponible, cuota, exenciones, bonificaciones y gestión.');
      items.push('Presupuesto local: concepto, contenido, bases de ejecución, elaboración, aprobación, prórroga, modificaciones y liquidación.');
    }
    if (text.includes('protección de datos') || text.includes('transparencia')) {
      items.push('Protección de datos y transparencia: diferencia entre acceso a información pública, protección de datos personales y límites al acceso.');
      items.push('Identifica autoridad competente, principios, derechos afectados y obligación de suministrar información cuando proceda.');
    }
    if (text.includes('igualdad')) {
      items.push('Igualdad: identifica norma estatal y autonómica, principio de igualdad, tutela contra la discriminación e igualdad en empleo público.');
    }
    if (text.includes('prevención de riesgos')) {
      items.push('Prevención de Riesgos Laborales: objeto, ámbito, derechos, obligaciones, servicios de prevención, consulta y participación.');
    }
    if (text.includes('administración electrónica') || text.includes('certificado electrónico') || text.includes('firma electrónica') || text.includes('sede electrónica')) {
      items.push('Administración electrónica: derechos de relación electrónica, sede electrónica, identificación, firma, certificado electrónico y tramitación electrónica.');
      items.push('Distingue identificación electrónica, firma electrónica, certificado electrónico, registro electrónico y notificación electrónica.');
    }
    if (text.includes('windows') || text.includes('libreoffice') || text.includes('ordenador') || text.includes('periféricos') || text.includes('groupwise')) {
      items.push('Ofimática e informática: domina operaciones concretas, menús, usos administrativos, archivos, carpetas, impresión, escaneado y periféricos.');
      items.push('Respeta la versión del programa del enunciado oficial: Windows 11 Pro, LibreOffice 24 o la que indique la convocatoria.');
    }
    if (text.includes('contrato de trabajo') || text.includes('seguridad social') || text.includes('cotización')) {
      items.push('Laboral y Seguridad Social: contenido del contrato, modificación, suspensión, extinción, modalidades, afiliación, altas, bajas, cotización y recaudación.');
    }

    items.push('Memoriza literalmente leyes, artículos, órganos y plazos que aparezcan en el tema; no transformes días hábiles en naturales ni meses en aproximaciones.');
    return uniq(items).slice(0, 10);
  }

  function extractCore(t) {
    const sentences = splitSentences(themeText(t));
    const priority = ['artículo', 'ley ', 'plazo', 'días', 'meses', 'órgano', 'competencia', 'recurso', 'silencio', 'notificación', 'presupuesto', 'tributo', 'contrato'];
    const chosen = [];
    for (const s of sentences) {
      const ns = norm(s);
      if (priority.some(p => ns.includes(p))) chosen.push(s);
      if (chosen.length >= 6) break;
    }
    return (chosen.length ? chosen : sentences.slice(0, 6)).map(s => `• ${s}`);
  }

  function recallQuestions(t) {
    const title = t.title.replace(/\.$/, '');
    return [
      `1. Sin mirar el tema: ¿cuáles son los conceptos, órganos o trámites centrales de “${title}”?`,
      '2. ¿Qué plazo, efecto jurídico, excepción o diferencia podría convertir una respuesta aparentemente correcta en incorrecta?',
      '3. ¿Cómo resolverías un supuesto práctico de este tema en 5 pasos: norma, órgano, trámite, plazo y consecuencia?'
    ];
  }

  function tableFor(t) {
    const text = norm(themeText(t));
    if (text.includes('recurso') || text.includes('revisión de oficio')) {
      return [
        ['Concepto', 'Cuándo se usa', 'Dato de examen'],
        ['Alzada', 'Actos que no ponen fin a la vía administrativa', 'Controla órgano competente y plazo legal exacto'],
        ['Reposición', 'Actos que ponen fin a la vía administrativa', 'Es potestativo antes del contencioso-administrativo'],
        ['Revisión de oficio', 'Actos nulos de pleno derecho', 'No es un recurso ordinario; exige garantías específicas'],
        ['Lesividad', 'Actos favorables anulables', 'La Administración no los anula directamente']
      ];
    }
    if (text.includes('plazo') || text.includes('términos')) {
      return [
        ['Punto', 'Regla que debes comprobar', 'Riesgo en test'],
        ['Días', 'Hábiles salvo que ley o Derecho de la Unión indique naturales', 'Cambiar hábiles por naturales'],
        ['Sábados', 'Inhábiles en procedimiento administrativo común', 'Tratar sábado como hábil'],
        ['Meses/años', 'Cómputo de fecha a fecha', 'Contar por días sin base legal'],
        ['Urgencia', 'Reduce plazos a la mitad salvo solicitudes y recursos', 'Aplicarla a recursos']
      ];
    }
    if (text.includes('municipio') || text.includes('provincia') || text.includes('diputación')) {
      return [
        ['Entidad/órgano', 'Qué debes fijar', 'Pregunta típica'],
        ['Municipio', 'Territorio, población y organización', 'Elementos y competencias'],
        ['Provincia', 'Agrupación de municipios', 'Asistencia y cooperación municipal'],
        ['Diputación', 'Organización provincial', 'Competencias provinciales y funcionamiento'],
        ['Otras entidades', 'Mancomunidades, comarcas, áreas metropolitanas, EATIM', 'Naturaleza y régimen básico']
      ];
    }
    if (text.includes('tribut') || text.includes('ibi') || text.includes('iae') || text.includes('presupuesto')) {
      return [
        ['Materia', 'Qué memorizar', 'Error frecuente'],
        ['Tributo', 'Hecho imponible, sujeto pasivo, devengo, base y cuota', 'Confundir impuesto, tasa y precio público'],
        ['Gestión', 'Inicio, liquidación, recaudación y revisión', 'Mezclar gestión tributaria y recaudación'],
        ['Presupuesto', 'Contenido, aprobación, prórroga, ejecución y liquidación', 'Confundir modificación con liquidación'],
        ['Beneficios fiscales', 'Exenciones y bonificaciones', 'Aplicarlos sin norma habilitante']
      ];
    }
    if (text.includes('windows') || text.includes('libreoffice') || text.includes('ordenador')) {
      return [
        ['Bloque', 'Qué practicar', 'Cómo memorizarlo'],
        ['Windows', 'Archivos, carpetas, unidades, impresión y escaneado', 'Hazlo una vez en el ordenador y repite pasos'],
        ['Internet/correo', 'Navegación, correo y adjuntos', 'Asocia función con pantalla/menú'],
        ['LibreOffice', 'Writer, Calc, Base e Impress', 'Practica tarea administrativa concreta'],
        ['Hardware', 'Componentes y periféricos', 'Relaciona función, uso y ejemplo']
      ];
    }
    return [
      ['Elemento', 'Qué debes dominar', 'Cómo cae en examen'],
      ['Concepto', 'Definición literal y alcance', 'Pregunta directa de test'],
      ['Órgano/competencia', 'Quién actúa y con qué potestad', 'Trampa de órgano incorrecto'],
      ['Procedimiento/plazo', 'Trámite, plazo y efecto', 'Confusión hábiles/naturales o silencio'],
      ['Excepción', 'Límites, especialidades y casos tasados', 'Opción distractora parcialmente cierta']
    ];
  }

  function buildSummary(t) {
    const hot = keyConcepts(t).map(x => `• ${x}`);
    const core = extractCore(t);
    const existing = (t.sections || []).filter(s => !String(s.heading || '').startsWith('Opo-Test') && !String(s.heading || '').startsWith('Retención activa') && !String(s.heading || '').startsWith('Estrategia de examen'));

    t.sections = [
      section('Resumen orientado al aprobado', [
        `Enunciado oficial: ${t.title}`,
        `Área de estudio: ${t.area}. Prioriza definición literal, norma aplicable, órgano competente, trámite, plazo, efecto jurídico y excepción.`,
        'Rigor normativo: conserva la literalidad de leyes, artículos y plazos. Si el texto dice días hábiles, días naturales o meses, memorízalo exactamente así.'
      ]),
      ...existing,
      section('Síntesis de repaso rápido', core),
      section('Opo-Test: puntos calientes', hot),
      section('Retención activa: 3 preguntas clave sin mirar', recallQuestions(t)),
      section('Estrategia de examen y memoria a largo plazo', [
        'Primera vuelta: entiende el mapa del tema y subraya solo norma, órgano, plazo, efecto y excepción.',
        'Segunda vuelta: usa recuerdo activo; intenta responder las 3 preguntas sin mirar antes de releer.',
        'Repaso espaciado: vuelve al tema a las 24 horas, a los 7 días y antes del simulacro. En cada vuelta, corrige únicamente lagunas concretas.',
        'En test: lee hasta el final, marca palabras absolutas, comprueba si preguntan regla general o excepción, y no arriesgues cuando la penalización pueda hundir una nota ya suficiente.',
        'En práctico: contesta por bloques breves: norma aplicable, órgano competente, trámite, plazo, documentación y consecuencia jurídica.'
      ])
    ];

    t.tree = [
      `Tema ${t.number}`,
      '- Resumen orientado al aprobado',
      '- Desarrollo normativo del enunciado oficial',
      '- Síntesis de repaso rápido',
      '- Opo-Test: puntos calientes',
      '- Retención activa',
      '- Estrategia de examen'
    ].join('\n');
    t.reviewTable = tableFor(t);
    t.studyMethodVersion = 'opotest-v1';
  }

  data.oposiciones.forEach(ope => {
    (ope.themes || []).forEach(buildSummary);
    ope.version = '0.13.0';
    ope.changelog ||= [];
    if (!ope.changelog.some(c => c.version === '0.13.0')) {
      ope.changelog.unshift({
        version: '0.13.0',
        date: '2026-07-07',
        changes: ['Aplicada estructura Opo-Test a todos los temas: resumen visual, rigor normativo, tabla comparativa, puntos calientes, active recall y estrategia de examen']
      });
    }
  });

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();
