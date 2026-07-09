(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  const emp = normas.empleoPublico;
  if (!data?.oposiciones?.length || !emp) return;

  const low = v => String(v || '').toLowerCase();
  const section = (heading, paragraphs) => ({ heading, paragraphs });

  function articleSections(keys) {
    return (keys || []).map(key => {
      const art = emp.articulos[key];
      if (!art) return null;
      return section(art.titulo, [art.texto, `Para examen/supuesto: ${art.estudio}`]);
    }).filter(Boolean);
  }

  function tableEmpleo() {
    return [
      ['Elemento', 'Qué debes contestar'],
      ['Tipo de personal', 'Funcionario de carrera, interino, laboral, eventual o directivo, con su régimen.'],
      ['Norma', 'TREBEP, régimen local y, si procede, Ley 4/2011 CLM o bases.'],
      ['Requisito', 'Titulación, nacionalidad, capacidad, edad, habilitación o situación administrativa.'],
      ['Procedimiento', 'OEP, convocatoria, bases, tribunal, ejercicios, baremo, propuesta, nombramiento y toma de posesión.'],
      ['Derecho/deber', 'Derecho, permiso, deber ético, principio de conducta o incompatibilidad práctica.'],
      ['Consecuencia', 'Acceso, promoción, provisión, reingreso, sanción, pérdida de condición o llamamiento de bolsa.']
    ];
  }

  function setTheme(theme, keys) {
    theme.sections = articleSections(keys);
    theme.reviewTable = tableEmpleo();
    return theme;
  }

  function apply(theme) {
    const t = low(`${theme.title} ${theme.area}`);
    const isEmployment = t.includes('empleo público') || t.includes('empleo publico') || t.includes('función pública') || t.includes('funcion publica') || t.includes('trebep') || t.includes('personal al servicio') || t.includes('personal') || t.includes('funcionarios') || t.includes('interinos') || t.includes('provisión') || t.includes('provision') || t.includes('situaciones administrativas') || t.includes('disciplina') || t.includes('disciplinario') || t.includes('oep') || t.includes('oferta de empleo') || t.includes('bolsa') || t.includes('ley 4/2011') || t.includes('castilla-la mancha');
    if (!isEmployment) return theme;

    if (t.includes('clases') || t.includes('concepto') || t.includes('funcionario') || t.includes('interino') || t.includes('laboral') || t.includes('eventual')) return setTheme(theme, emp.temas.clases);
    if (t.includes('derechos') || t.includes('retribuciones') || t.includes('permisos') || t.includes('vacaciones') || t.includes('jornada') || t.includes('carrera')) return setTheme(theme, emp.temas.derechos);
    if (t.includes('deberes') || t.includes('código') || t.includes('codigo') || t.includes('conducta') || t.includes('ético') || t.includes('etico')) return setTheme(theme, emp.temas.deberesCodigo);
    if (t.includes('acceso') || t.includes('selección') || t.includes('seleccion') || t.includes('oposición') || t.includes('oposicion') || t.includes('concurso') || t.includes('tribunal') || t.includes('mérito') || t.includes('merito') || t.includes('capacidad')) return setTheme(theme, emp.temas.accesoSeleccion);
    if (t.includes('pérdida') || t.includes('perdida') || t.includes('jubilación') || t.includes('jubilacion') || t.includes('renuncia') || t.includes('inhabilitación') || t.includes('inhabilitacion')) return setTheme(theme, emp.temas.perdida);
    if (t.includes('planificación') || t.includes('planificacion') || t.includes('ordenación') || t.includes('ordenacion') || t.includes('rpt') || t.includes('plantilla') || t.includes('grupos') || t.includes('clasificación') || t.includes('clasificacion')) return setTheme(theme, emp.temas.planificacionOrdenacion);
    if (t.includes('provisión') || t.includes('provision') || t.includes('concurso de provisión') || t.includes('libre designación') || t.includes('libre designacion') || t.includes('movilidad')) return setTheme(theme, emp.temas.provision);
    if (t.includes('situaciones administrativas') || t.includes('servicio activo') || t.includes('servicios especiales') || t.includes('excedencia') || t.includes('suspensión') || t.includes('suspension') || t.includes('reingreso')) return setTheme(theme, emp.temas.situaciones);
    if (t.includes('disciplinario') || t.includes('disciplina') || t.includes('faltas') || t.includes('sanciones') || t.includes('separación del servicio') || t.includes('separacion del servicio')) return setTheme(theme, emp.temas.disciplinario);
    if (t.includes('local') || t.includes('ayuntamiento') || t.includes('habilitación nacional') || t.includes('habilitacion nacional') || t.includes('secretaría') || t.includes('secretaria') || t.includes('intervención') || t.includes('intervencion')) return setTheme(theme, emp.temas.funcionPublicaLocal);
    if (t.includes('ley 4/2011') || t.includes('castilla-la mancha') || t.includes('clm')) return setTheme(theme, emp.temas.clm);
    if (t.includes('bolsa')) return setTheme(theme, emp.temas.bolsas);
    return setTheme(theme, emp.temas.clases.concat(emp.temas.accesoSeleccion).concat(emp.temas.deberesCodigo));
  }

  function questions(theme) {
    const rows = tableEmpleo().slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const r = rows[i % rows.length];
      const ok = `${r[0]}: ${r[1]}`;
      const opts = [ok, 'Responder con una opinión sobre el puesto sin citar régimen jurídico.', 'Confundir OEP, convocatoria, bolsa y nombramiento.', 'Decir solo que se aplica el Ayuntamiento sin concretar TREBEP ni bases.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return {
        id: `${theme.id}-empleo-q${i + 1}`,
        text: `Tema ${theme.number}. En empleo público, ¿qué respuesta es más completa?`,
        options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[sh.indexOf(ok)],
        justification: 'En empleo público hay que identificar clase de personal, norma aplicable, requisito, procedimiento y consecuencia.'
      };
    });
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const updated = apply(theme);
      const t = low(`${updated.title} ${updated.area}`);
      if (t.includes('empleo público') || t.includes('empleo publico') || t.includes('función pública') || t.includes('funcion publica') || t.includes('trebep') || t.includes('personal al servicio') || t.includes('funcionarios') || t.includes('interinos') || t.includes('provisión') || t.includes('provision') || t.includes('situaciones administrativas') || t.includes('disciplina') || t.includes('disciplinario') || t.includes('oep') || t.includes('bolsa') || t.includes('ley 4/2011')) {
        ope.themeTests[updated.id] = questions(updated);
      }
      return updated;
    });
    ope.status = `${(ope.status || '').replace(/ Temario.*/, '')} Temario modular: empleo público añadido desde data/normas.`;
  });

  if (typeof renderAll === 'function') renderAll();
})();
