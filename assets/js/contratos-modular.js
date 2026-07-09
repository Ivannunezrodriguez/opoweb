(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  const lcsp = normas.contratosPublicos;
  if (!data?.oposiciones?.length || !lcsp) return;

  const low = v => String(v || '').toLowerCase();
  const section = (heading, paragraphs) => ({ heading, paragraphs });

  function articleSections(keys) {
    return (keys || []).map(key => {
      const art = lcsp.articulos[key];
      if (!art) return null;
      return section(art.titulo, [art.texto, `Para examen/supuesto: ${art.estudio}`]);
    }).filter(Boolean);
  }

  function tableContratos() {
    return [
      ['Elemento', 'Qué debes contestar'],
      ['Necesidad', 'Qué necesidad pública se cubre y por qué el contrato es idóneo.'],
      ['Objeto', 'Prestación determinada, lotes y ausencia de fraccionamiento indebido.'],
      ['Importe', 'Presupuesto base, valor estimado, precio y crédito adecuado.'],
      ['Expediente', 'Informe de necesidad, pliegos, fiscalización, aprobación del gasto y órgano competente.'],
      ['Procedimiento', 'Menor, abierto, simplificado, negociado u otro, justificando causa.'],
      ['Adjudicación', 'Criterios, publicidad, adjudicación motivada y formalización.'],
      ['Ejecución', 'Responsable, factura, conformidad, pago, penalidades, modificación o resolución.']
    ];
  }

  function setTheme(theme, keys) {
    theme.sections = articleSections(keys);
    theme.reviewTable = tableContratos();
    return theme;
  }

  function apply(theme) {
    const t = low(`${theme.title} ${theme.area}`);
    const isContract = t.includes('contrat') || t.includes('lcsp') || t.includes('licit') || t.includes('adjudic') || t.includes('pliego') || t.includes('menor');
    if (!isContract) return theme;

    if (t.includes('menor')) return setTheme(theme, lcsp.temas.contratoMenor);
    if (t.includes('tipo') || t.includes('clases') || t.includes('obra') || t.includes('suministro') || t.includes('servicio') || t.includes('concesión') || t.includes('concesion')) return setTheme(theme, lcsp.temas.tiposContratos);
    if (t.includes('objeto') || t.includes('precio') || t.includes('valor estimado') || t.includes('presupuesto base') || t.includes('necesidad') || t.includes('idoneidad')) return setTheme(theme, lcsp.temas.necesidadObjetoPrecio);
    if (t.includes('aptitud') || t.includes('solvencia') || t.includes('prohibiciones') || t.includes('clasificación') || t.includes('clasificacion')) return setTheme(theme, lcsp.temas.aptitudContratista);
    if (t.includes('expediente') || t.includes('pliego') || t.includes('pliegos') || t.includes('prescripciones técnicas') || t.includes('prescripciones tecnicas')) return setTheme(theme, lcsp.temas.expedientePliegos);
    if (t.includes('procedimiento') || t.includes('abierto') || t.includes('simplificado') || t.includes('negociado') || t.includes('adjudicación') || t.includes('adjudicacion') || t.includes('licitación') || t.includes('licitacion')) return setTheme(theme, lcsp.temas.procedimientos);
    if (t.includes('recurso') || t.includes('perfil') || t.includes('corrupción') || t.includes('corrupcion') || t.includes('conflicto')) return setTheme(theme, lcsp.temas.recursoEspecial);
    if (t.includes('ejecución') || t.includes('ejecucion') || t.includes('factura') || t.includes('pago') || t.includes('penalidad') || t.includes('modificación') || t.includes('modificacion') || t.includes('resolución') || t.includes('resolucion')) return setTheme(theme, lcsp.temas.ejecucion);
    if (t.includes('local') || t.includes('ayuntamiento') || t.includes('municipal')) return setTheme(theme, lcsp.temas.local);
    return setTheme(theme, lcsp.temas.principiosAmbito.concat(lcsp.temas.tiposContratos).concat(lcsp.temas.expedientePliegos).concat(lcsp.temas.contratoMenor));
  }

  function questions(theme) {
    const rows = tableContratos().slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const r = rows[i % rows.length];
      const ok = `${r[0]}: ${r[1]}`;
      const opts = [ok, 'Elegir proveedor directamente sin justificar necesidad ni procedimiento.', 'Tramitar factura sin comprobar expediente, crédito y conformidad.', 'No distinguir presupuesto base, valor estimado, precio y crédito.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return {
        id: `${theme.id}-lcsp-q${i + 1}`,
        text: `Tema ${theme.number}. En contratación pública, ¿qué respuesta es más completa?`,
        options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[sh.indexOf(ok)],
        justification: 'En contratación pública hay que justificar necesidad, objeto, importe, expediente, procedimiento, adjudicación y ejecución.'
      };
    });
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const updated = apply(theme);
      const t = low(`${updated.title} ${updated.area}`);
      if (t.includes('contrat') || t.includes('lcsp') || t.includes('licit') || t.includes('adjudic') || t.includes('pliego') || t.includes('menor')) {
        ope.themeTests[updated.id] = questions(updated);
      }
      return updated;
    });
    ope.status = `${(ope.status || '').replace(/ Temario.*/, '')} Temario modular: contratos públicos añadidos desde data/normas.`;
  });

  if (typeof renderAll === 'function') renderAll();
})();
