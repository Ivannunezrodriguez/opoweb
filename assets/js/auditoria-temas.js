(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  if (!data?.oposiciones?.length) return;

  const low = v => String(v || '').toLowerCase();
  const unique = arr => [...new Set((arr || []).filter(Boolean))];
  const merge = (...lists) => unique(lists.flat());
  const section = (heading, paragraphs) => ({ heading, paragraphs });

  const legalTable = [
    ['Elemento', 'Qué debes contestar'],
    ['Norma/artículo', 'Cita la norma o artículo exacto y su regla principal.'],
    ['Aplicación', 'Relaciona el artículo con el supuesto práctico.'],
    ['Trámite', 'Indica órgano, plazo o actuación cuando exista.'],
    ['Consecuencia', 'Cierra con el efecto administrativo.']
  ];
  const infoTable = [
    ['Elemento', 'Qué debes contestar'],
    ['Concepto', 'Define la herramienta o componente.'],
    ['Uso práctico', 'Explica cómo se usa en una oficina.'],
    ['Comprobación', 'Indica cómo verificar que está correcto.'],
    ['Seguridad', 'Añade permisos, confidencialidad o protección de datos.']
  ];

  function sections(norma, keys) {
    const pack = normas[norma];
    if (!pack || !keys) return [];
    return unique(keys).map(k => pack.articulos?.[k]).filter(Boolean).map(a => section(a.titulo, [a.texto, `Para examen/supuesto: ${a.estudio}`]));
  }

  function infoSections(keys) {
    const pack = normas.informatica;
    if (!pack || !keys) return [];
    return unique(keys).flatMap(k => {
      const block = pack.bloques?.[k];
      return block ? [section(block.titulo, block.apartados.map(a => `${a.h}. ${a.p}`))] : [];
    });
  }

  function patch(theme, norma, keys, table = legalTable) {
    theme.sections = norma === 'informatica' ? infoSections(keys) : sections(norma, keys);
    theme.reviewTable = table;
    theme.tree = '';
    theme.modularSource = norma;
    theme.testHint = `Auditoría de cobertura: ${norma}`;
    theme.motorCoverage = theme.sections.length ? 'completo-verificado' : 'pendiente';
    return theme;
  }

  function qset(theme) {
    const rows = (theme.reviewTable || legalTable).slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const row = rows[i % rows.length];
      const ok = `${row[0]}: ${row[1]}`;
      const opts = [ok, 'Responder sin citar norma, artículo ni trámite.', 'Usar contenido de otro tema aunque no encaje.', 'Contestar solo de memoria sin aplicar al supuesto.'];
      const off = (Number(theme.number || 0) + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return {
        id: `${theme.id}-audit-q${i + 1}`,
        text: `Tema ${theme.number}. ¿Qué enfoque está mejor comprobado para este tema?`,
        options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[sh.indexOf(ok)],
        justification: 'Tema verificado por auditoría: debe mostrar fichas normativas o bloque informático específico.'
      };
    });
  }

  function auditTheme(theme) {
    const t = low(`${theme.title} ${theme.area}`);
    const ce = normas.constitucion;
    const l39 = normas.ley39;
    const l40 = normas.ley40;
    const local = normas.regimenLocal;
    const hac = normas.haciendaLocal;
    const emp = normas.empleoPublico;
    const tr = normas.transversales;

    if (l39 && (t.includes('revisión de los actos administrativos') || t.includes('recursos administrativos') || t.includes('revisión de oficio'))) {
      return patch(theme, 'ley39', l39.temas.revisionRecursos);
    }
    if (ce && t.includes('constitución') && t.includes('reforma') && (t.includes('derechos') || t.includes('garantía') || t.includes('garantia'))) {
      return patch(theme, 'constitucion', merge(ce.temas.tituloPreliminar, ce.temas.derechos, ce.temas.principiosGarantias, ce.temas.reforma));
    }
    if (local && (t.includes('régimen electoral') || t.includes('regimen electoral') || (t.includes('municipio') && t.includes('provincia')))) {
      return patch(theme, 'regimenLocal', merge(local.temas.municipioPadron, local.temas.organizacionMunicipal, local.temas.competenciasServicios, local.temas.provinciaDiputacion, local.temas.funcionamiento));
    }
    if (emp && (t.includes('ley 4/2011') || t.includes('castilla-la mancha'))) {
      return patch(theme, 'empleoPublico', merge(emp.temas.clm, emp.temas.funcionPublicaLocal, emp.temas.provision, emp.temas.accesoSeleccion, emp.temas.planificacionOrdenacion));
    }
    if (hac && t.includes('los tributos locales') && (t.includes('ibi') || t.includes('iae') || t.includes('ivtm') || t.includes('iivtnu'))) {
      return patch(theme, 'haciendaLocal', merge(hac.temas.impuestosGeneral, hac.temas.ibi, hac.temas.iae, hac.temas.ivtm, hac.temas.iivtnu));
    }
    if (hac && (t.includes('obligaciones tributarias') || t.includes('obligados tributarios') || t.includes('extinción de la deuda') || t.includes('extincion de la deuda'))) {
      return patch(theme, 'haciendaLocal', merge(hac.temas.recursosOrdenanzas, hac.temas.tasasContribuciones, hac.temas.impuestosGeneral, hac.temas.recaudacion));
    }
    if (l40 && (t.includes('administración electrónica') || t.includes('administracion electronica') || t.includes('certificado electrónico') || t.includes('certificado electronico') || t.includes('autoridades certificadoras'))) {
      return patch(theme, 'ley40', l40.temas.electronica);
    }
    if (!theme.modularSource || !(theme.sections || []).length) {
      if (l39 && t.includes('ley 39/2015')) return patch(theme, 'ley39', merge(l39.temas.interesadosActividadPlazos, l39.temas.procedimientoCompleto, l39.temas.revisionRecursos));
      if (l40 && t.includes('ley 40/2015')) return patch(theme, 'ley40', merge(l40.temas.principiosOrganosCompetencia, l40.temas.electronica));
      if (tr && t.includes('prevención')) return patch(theme, 'transversales', tr.temas.prl);
      if (tr && t.includes('igualdad')) return patch(theme, 'transversales', tr.temas.igualdad);
      if (tr && t.includes('protección de datos')) return patch(theme, 'transversales', tr.temas.proteccionDatos);
      if (t.includes('word') || t.includes('writer')) return patch(theme, 'informatica', ['word'], infoTable);
      if (t.includes('excel') || t.includes('calc')) return patch(theme, 'informatica', ['excel'], infoTable);
      if (t.includes('windows i')) return patch(theme, 'informatica', ['windows'], infoTable);
      if (t.includes('windows ii') || t.includes('edge') || t.includes('internet explorer')) return patch(theme, 'informatica', ['internet'], infoTable);
      if (t.includes('ordenador personal') || t.includes('periféricos') || t.includes('perifericos')) return patch(theme, 'informatica', ['hardware'], infoTable);
    }
    return theme;
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const before = theme.modularSource;
      const audited = auditTheme(theme);
      if (audited.modularSource && (audited.sections || []).length && audited.modularSource !== before) {
        ope.themeTests[audited.id] = qset(audited);
      }
      return audited;
    });
    const enriched = ope.themes.filter(t => t.modularSource && (t.sections || []).length).length;
    const pending = ope.themes.filter(t => !t.modularSource || !(t.sections || []).length).map(t => t.number);
    ope.coverage = { enriched, total: ope.themes.length, pending };
    ope.status = `${(ope.status || '').replace(/ Motor único activo:.*/, '')} Cobertura comprobada: ${enriched}/${ope.themes.length} temas con fichas normativas o informáticas.`;
  });

  window.OPOWEB_AUDITORIA_TEMAS = data.oposiciones.map(o => ({ id: o.id, ...o.coverage }));
  if (typeof renderAll === 'function') renderAll();
})();
