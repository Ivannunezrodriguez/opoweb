(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  const tr = normas.transversales;
  if (!data?.oposiciones?.length || !tr) return;

  const low = v => String(v || '').toLowerCase();
  const section = (heading, paragraphs) => ({ heading, paragraphs });

  function articleSections(keys) {
    return (keys || []).map(key => {
      const art = tr.articulos[key];
      if (!art) return null;
      return section(art.titulo, [art.texto, `Para examen/supuesto: ${art.estudio}`]);
    }).filter(Boolean);
  }

  function tableTransversal() {
    return [
      ['Elemento', 'Qué debes contestar'],
      ['Norma', 'Identifica la ley aplicable: igualdad, protección de datos, transparencia o PRL.'],
      ['Concepto', 'Define el concepto exacto: dato personal, acceso, riesgo, discriminación, etc.'],
      ['Obligación', 'Indica qué debe hacer el Ayuntamiento o empleado público.'],
      ['Límite', 'Añade límites: datos personales, seguridad, proporcionalidad, confidencialidad o salud.'],
      ['Actuación práctica', 'Explica la actuación concreta en registro, expediente, web, atención al público u oficina.']
    ];
  }

  function setTheme(theme, keys) {
    theme.sections = articleSections(keys);
    theme.reviewTable = tableTransversal();
    return theme;
  }

  function apply(theme) {
    const t = low(`${theme.title} ${theme.area}`);
    if (t.includes('igualdad') || t.includes('discriminación') || t.includes('discriminacion') || t.includes('género') || t.includes('genero') || t.includes('mujeres y hombres') || t.includes('violencia de género') || t.includes('violencia de genero') || t.includes('acoso sexual')) return setTheme(theme, tr.temas.igualdad);
    if (t.includes('protección de datos') || t.includes('proteccion de datos') || t.includes('rgpd') || t.includes('lopdgdd') || t.includes('datos personales') || t.includes('privacidad') || t.includes('delegado de protección') || t.includes('delegado de proteccion')) return setTheme(theme, tr.temas.proteccionDatos);
    if (t.includes('transparencia') || t.includes('información pública') || t.includes('informacion publica') || t.includes('publicidad activa') || t.includes('buen gobierno') || t.includes('derecho de acceso') || t.includes('portal de transparencia')) return setTheme(theme, tr.temas.transparencia);
    if (t.includes('prevención de riesgos') || t.includes('prevencion de riesgos') || t.includes('riesgos laborales') || t.includes('prl') || t.includes('seguridad y salud') || t.includes('pantallas de visualización') || t.includes('pantallas de visualizacion') || t.includes('ergonomía') || t.includes('ergonomia')) return setTheme(theme, tr.temas.prl);
    return theme;
  }

  function questions(theme) {
    const rows = tableTransversal().slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const r = rows[i % rows.length];
      const ok = `${r[0]}: ${r[1]}`;
      const opts = [ok, 'Responder con una frase genérica sin norma ni aplicación práctica.', 'Aplicar siempre publicidad total sin ponderar datos o límites.', 'Ignorar confidencialidad, seguridad, igualdad o prevención.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return {
        id: `${theme.id}-trans-q${i + 1}`,
        text: `Tema ${theme.number}. En materias transversales, ¿qué respuesta es más completa?`,
        options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[sh.indexOf(ok)],
        justification: 'La respuesta debe identificar norma, concepto, obligación, límite y actuación práctica.'
      };
    });
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const updated = apply(theme);
      const t = low(`${updated.title} ${updated.area}`);
      if (t.includes('igualdad') || t.includes('discriminación') || t.includes('discriminacion') || t.includes('género') || t.includes('genero') || t.includes('protección de datos') || t.includes('proteccion de datos') || t.includes('rgpd') || t.includes('lopdgdd') || t.includes('transparencia') || t.includes('información pública') || t.includes('informacion publica') || t.includes('prevención de riesgos') || t.includes('prevencion de riesgos') || t.includes('riesgos laborales') || t.includes('prl')) {
        ope.themeTests[updated.id] = questions(updated);
      }
      return updated;
    });
    ope.status = `${(ope.status || '').replace(/ Temario.*/, '')} Temario modular: transversales añadidas desde data/normas.`;
  });

  if (typeof renderAll === 'function') renderAll();
})();
