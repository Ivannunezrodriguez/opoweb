(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  if (!data?.oposiciones?.length) return;

  const low = v => String(v || '').toLowerCase();
  const section = (heading, paragraphs) => ({ heading, paragraphs });

  function articleSections(keys, norma = 'ley39') {
    const ley = normas[norma];
    if (!ley || !keys) return [];
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
      ['Consecuencia', 'Cierra con efecto jurídico: subsanar, admitir, inadmitir, resolver, notificar, caducar, estimar, desestimar, ejecutar o recurrir.']
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

  function setLegal(theme, keys, norma = 'ley39') {
    theme.sections = articleSections(keys, norma);
    theme.reviewTable = tableLegal();
    return theme;
  }

  function apply(theme) {
    const ley39 = normas.ley39;
    const ley40 = normas.ley40;
    const local = normas.regimenLocal;
    const t = low(`${theme.title} ${theme.area}`);

    if (t.includes('municipio') || t.includes('padrón') || t.includes('padron') || t.includes('provincia') || t.includes('diputación') || t.includes('diputacion') || t.includes('régimen local') || t.includes('regimen local') || t.includes('entidades locales') || t.includes('administración local') || t.includes('administracion local') || t.includes('órganos municipales') || t.includes('organos municipales') || t.includes('ordenanzas') || t.includes('reglamentos locales') || t.includes('bienes') || t.includes('licencias') || t.includes('servicios públicos') || t.includes('servicios publicos') || t.includes('función pública local') || t.includes('funcion publica local') || t.includes('haciendas locales')) {
      if (t.includes('padrón') || t.includes('padron') || t.includes('población') || t.includes('poblacion')) return setLegal(theme, local?.temas?.municipioPadron, 'regimenLocal');
      if (t.includes('alcalde') || t.includes('pleno') || t.includes('junta de gobierno') || t.includes('órganos municipales') || t.includes('organos municipales') || t.includes('organización municipal') || t.includes('organizacion municipal')) return setLegal(theme, local?.temas?.organizacionMunicipal, 'regimenLocal');
      if (t.includes('competencias') || t.includes('servicios mínimos') || t.includes('servicios minimos')) return setLegal(theme, local?.temas?.competenciasServicios, 'regimenLocal');
      if (t.includes('provincia') || t.includes('diputación') || t.includes('diputacion')) return setLegal(theme, local?.temas?.provinciaDiputacion, 'regimenLocal');
      if (t.includes('órganos colegiados') || t.includes('organos colegiados') || t.includes('actas') || t.includes('certificados') || t.includes('sesiones') || t.includes('mayorías') || t.includes('mayorias') || t.includes('ordenanzas') || t.includes('reglamentos locales')) return setLegal(theme, local?.temas?.funcionamiento, 'regimenLocal');
      if (t.includes('relaciones') || t.includes('control') || t.includes('impugnación') || t.includes('impugnacion')) return setLegal(theme, local?.temas?.relacionesControl, 'regimenLocal');
      if (t.includes('participación') || t.includes('participacion') || t.includes('consulta') || t.includes('vecinal')) return setLegal(theme, local?.temas?.participacion, 'regimenLocal');
      if (t.includes('bienes') || t.includes('licencias') || t.includes('policía') || t.includes('policia') || t.includes('fomento') || t.includes('servicio público') || t.includes('servicio publico') || t.includes('actividad administrativa')) return setLegal(theme, local?.temas?.bienesActividad, 'regimenLocal');
      if (t.includes('personal') || t.includes('función pública local') || t.includes('funcion publica local') || t.includes('fhn') || t.includes('habilitación nacional') || t.includes('habilitacion nacional') || t.includes('rpt') || t.includes('plantilla')) return setLegal(theme, local?.temas?.personalLocal, 'regimenLocal');
      if (t.includes('hacienda') || t.includes('tributaria') || t.includes('presupuesto')) return setLegal(theme, local?.temas?.haciendaLocalBase, 'regimenLocal');
      return setLegal(theme, local?.temas?.bases, 'regimenLocal');
    }

    if (t.includes('40/2015') || t.includes('régimen jurídico del sector público') || t.includes('regimen juridico del sector publico')) {
      if (t.includes('principios') || t.includes('órganos') || t.includes('organos') || t.includes('competencia') || t.includes('delegación') || t.includes('delegacion') || t.includes('avocación') || t.includes('avocacion') || t.includes('encomienda') || t.includes('suplencia')) return setLegal(theme, ley40?.temas?.principiosOrganosCompetencia, 'ley40');
      if (t.includes('colegiado') || t.includes('colegiados') || t.includes('actas') || t.includes('secretario')) return setLegal(theme, ley40?.temas?.organosColegiados, 'ley40');
      if (t.includes('abstención') || t.includes('abstencion') || t.includes('recusación') || t.includes('recusacion')) return setLegal(theme, ley40?.temas?.abstencionRecusacion, 'ley40');
      if (t.includes('sancionador') || t.includes('sancionadora') || t.includes('sanciones')) return setLegal(theme, ley40?.temas?.sancionador, 'ley40');
      if (t.includes('responsabilidad patrimonial')) return setLegal(theme, ley40?.temas?.responsabilidad, 'ley40');
      if (t.includes('sede') || t.includes('electrónica') || t.includes('electronica') || t.includes('automatizada') || t.includes('csv') || t.includes('archivo electrónico') || t.includes('archivo electronico')) return setLegal(theme, ley40?.temas?.electronica, 'ley40');
      if (t.includes('convenio') || t.includes('convenios')) return setLegal(theme, ley40?.temas?.convenios, 'ley40');
      if (t.includes('relaciones interadministrativas') || t.includes('colaboración') || t.includes('colaboracion') || t.includes('cooperación') || t.includes('cooperacion') || t.includes('coordinación') || t.includes('coordinacion')) return setLegal(theme, ley40?.temas?.relaciones, 'ley40');
      return setLegal(theme, ley40?.temas?.principiosOrganosCompetencia, 'ley40');
    }

    if (t.includes('39/2015') && (t.includes('interesados') || t.includes('actividad') || t.includes('plazos') || t.includes('términos'))) return setLegal(theme, ley39?.temas?.interesadosActividadPlazos, 'ley39');
    if (t.includes('39/2015') && (t.includes('actos administrativos') || t.includes('notificación') || t.includes('publicación') || t.includes('nulidad') || t.includes('anulabilidad'))) return setLegal(theme, ley39?.temas?.actosNotificacionValidez, 'ley39');
    if (t.includes('39/2015') && (t.includes('procedimiento') || t.includes('iniciación') || t.includes('ordenación') || t.includes('instrucción') || t.includes('finalización') || t.includes('ejecución') || t.includes('simplificada'))) return setLegal(theme, ley39?.temas?.procedimientoCompleto, 'ley39');
    if (t.includes('revisión') || t.includes('recursos administrativos') || t.includes('recurso de alzada') || t.includes('reposición')) return setLegal(theme, ley39?.temas?.revisionRecursos, 'ley39');
    if (t.includes('identificación') || t.includes('firma') || t.includes('sede electrónica') || t.includes('registro electrónico')) {
      theme.sections = articleSections(ley39?.temas?.identificacionFirma, 'ley39').concat(infoSections(['internet']));
      theme.reviewTable = tableLegal();
      return theme;
    }
    if (t.includes('windows i') || t.includes('creación, copiado') || t.includes('impresión y digitalización')) { theme.sections = infoSections(['windows']); theme.reviewTable = tableInfo(); return theme; }
    if (t.includes('windows ii') || t.includes('internet explorer') || t.includes('edge') || t.includes('navegación por internet')) { theme.sections = infoSections(['internet']); theme.reviewTable = tableInfo(); return theme; }
    if (t.includes('word') || t.includes('writer') || t.includes('procesamiento de texto')) { theme.sections = infoSections(['word']); theme.reviewTable = tableInfo(); return theme; }
    if (t.includes('excel') || t.includes('calc') || t.includes('hojas de cálculo')) { theme.sections = infoSections(['excel']); theme.reviewTable = tableInfo(); return theme; }
    if (t.includes('ordenador personal') || t.includes('componentes') || t.includes('periféricos')) { theme.sections = infoSections(['hardware']); theme.reviewTable = tableInfo(); return theme; }
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
      return { id: `${theme.id}-mod-q${i + 1}`, text: `Tema ${theme.number}. ¿Qué hace que la respuesta sea completa?`, options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })), answer: 'ABCD'[sh.indexOf(ok)], justification: 'La respuesta útil para oposición debe ser autocontenida: artículo o concepto, aplicación práctica, trámite/paso y consecuencia.' };
    });
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const updated = apply(theme);
      const t = low(`${updated.title} ${updated.area}`);
      if (t.includes('39/2015') || t.includes('40/2015') || t.includes('régimen jurídico') || t.includes('regimen juridico') || t.includes('régimen local') || t.includes('regimen local') || t.includes('municipio') || t.includes('provincia') || t.includes('padrón') || t.includes('padron') || t.includes('ordenanzas') || t.includes('bienes') || t.includes('licencias') || t.includes('revisión') || t.includes('recursos administrativos') || t.includes('windows') || t.includes('word') || t.includes('writer') || t.includes('excel') || t.includes('calc') || t.includes('ordenador') || t.includes('internet explorer') || t.includes('edge')) {
        ope.themeTests[updated.id] = questionSet(updated);
      }
      return updated;
    });
    ope.status = `${(ope.status || '').replace(/ Temario.*/, '')} Temario modular: Ley 39/2015, Ley 40/2015, Régimen Local e informática salen desde data/normas.`;
  });

  if (typeof renderAll === 'function') renderAll();
})();
