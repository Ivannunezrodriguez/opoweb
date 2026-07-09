(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  if (!data?.oposiciones?.length) return;

  const low = v => String(v || '').toLowerCase();
  const section = (heading, paragraphs) => ({ heading, paragraphs });

  function articleSections(keys) {
    const ley = normas.ley39;
    if (!ley) return [];
    return keys.map(key => {
      const art = ley.articulos[key];
      if (!art) return null;
      return section(art.titulo, [art.texto, `Para examen/supuesto: ${art.estudio}`]);
    }).filter(Boolean);
  }

  function infoSections(blockNames) {
    const info = normas.informatica;
    if (!info) return [];
    return blockNames.flatMap(name => {
      const block = info.bloques[name];
      if (!block) return [];
      return [section(block.titulo, block.apartados.map(a => `${a.h}. ${a.p}`))];
    });
  }

  function tableLegal() {
    return [
      ['Elemento', 'Qué debes contestar'],
      ['Artículo', 'Cita artículo exacto y su regla.'],
      ['Hecho', 'Relaciona el artículo con el hecho del supuesto.'],
      ['Trámite', 'Indica qué debe hacer el Ayuntamiento.'],
      ['Plazo', 'Incluye plazo si existe.'],
      ['Consecuencia', 'Cierra con efecto jurídico: subsanar, admitir, inadmitir, resolver, notificar, caducar, estimar, desestimar o recurrir.']
    ];
  }

  function tableInfo() {
    return [
      ['Elemento', 'Qué debes contestar'],
      ['Concepto', 'Define la herramienta o elemento.'],
      ['Operación', 'Explica pasos concretos.'],
      ['Comprobación', 'Indica cómo verificar que está correcto.'],
      ['Error típico', 'Explica qué puede fallar.'],
      ['Seguridad', 'Añade protección de datos, permisos o uso adecuado si procede.']
    ];
  }

  function apply(theme) {
    const t = low(`${theme.title} ${theme.area}`);
    if (t.includes('39/2015') && (t.includes('interesados') || t.includes('actividad') || t.includes('plazos') || t.includes('términos'))) {
      theme.sections = articleSections(normas.ley39.temas.interesadosActividadPlazos);
      theme.reviewTable = tableLegal();
      return theme;
    }
    if (t.includes('identificación') || t.includes('firma') || t.includes('sede electrónica') || t.includes('registro electrónico')) {
      theme.sections = articleSections(normas.ley39.temas.identificacionFirma).concat(infoSections(['internet']));
      theme.reviewTable = tableLegal();
      return theme;
    }
    if (t.includes('windows i') || t.includes('creación, copiado') || t.includes('impresión y digitalización')) {
      theme.sections = infoSections(['windows']);
      theme.reviewTable = tableInfo();
      return theme;
    }
    if (t.includes('windows ii') || t.includes('internet explorer') || t.includes('edge') || t.includes('navegación por internet')) {
      theme.sections = infoSections(['internet']);
      theme.reviewTable = tableInfo();
      return theme;
    }
    if (t.includes('word') || t.includes('writer') || t.includes('procesamiento de texto')) {
      theme.sections = infoSections(['word']);
      theme.reviewTable = tableInfo();
      return theme;
    }
    if (t.includes('excel') || t.includes('calc') || t.includes('hojas de cálculo')) {
      theme.sections = infoSections(['excel']);
      theme.reviewTable = tableInfo();
      return theme;
    }
    if (t.includes('ordenador personal') || t.includes('componentes') || t.includes('periféricos')) {
      theme.sections = infoSections(['hardware']);
      theme.reviewTable = tableInfo();
      return theme;
    }
    return theme;
  }

  function questionSet(theme) {
    const rows = (theme.reviewTable || tableLegal()).slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const r = rows[i % rows.length];
      const ok = `${r[0]}: ${r[1]}`;
      const opts = [ok, 'Responder de forma general sin concretar.', 'Copiar el título del tema y no aplicar nada.', 'No indicar artículo, paso ni consecuencia.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return {
        id: `${theme.id}-mod-q${i + 1}`,
        text: `Tema ${theme.number}. ¿Qué hace que la respuesta sea completa?`,
        options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[sh.indexOf(ok)],
        justification: 'La respuesta útil para oposición debe ser autocontenida: artículo o concepto, aplicación práctica, trámite/paso y consecuencia.'
      };
    });
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const updated = apply(theme);
      const t = low(`${updated.title} ${updated.area}`);
      if (t.includes('39/2015') || t.includes('windows') || t.includes('word') || t.includes('writer') || t.includes('excel') || t.includes('calc') || t.includes('ordenador') || t.includes('internet explorer') || t.includes('edge')) {
        ope.themeTests[updated.id] = questionSet(updated);
      }
      return updated;
    });
    ope.status = `${(ope.status || '').replace(/ Temario.*/, '')} Temario modular iniciado: Ley 39/2015 e informática ya salen desde data/normas.`;
  });

  if (typeof renderAll === 'function') renderAll();
})();
