(() => {
  const data = window.OPOSICIONES_DATA;
  const normas = window.OPOWEB_NORMAS || {};
  if (!data?.oposiciones?.length) return;

  const low = v => String(v || '').toLowerCase();
  const has = (text, words) => words.some(w => text.includes(w));
  const sec = (heading, paragraphs) => ({ heading, paragraphs });

  const tables = {
    legal: [
      ['Elemento', 'Qué debes contestar'],
      ['Norma/artículo', 'Cita la norma o artículo exacto y su regla principal.'],
      ['Hecho', 'Relaciona esa regla con el dato concreto del supuesto.'],
      ['Órgano o sujeto', 'Indica quién actúa: Ayuntamiento, Alcaldía, Pleno, interesado, contratista, empleado público, etc.'],
      ['Trámite o plazo', 'Explica el trámite y plazo si existe.'],
      ['Consecuencia', 'Cierra con el efecto jurídico: admitir, subsanar, notificar, publicar, recurrir, liquidar, sancionar, pagar o archivar.']
    ],
    info: [
      ['Elemento', 'Qué debes contestar'],
      ['Concepto', 'Define la herramienta o elemento informático.'],
      ['Operación', 'Explica pasos concretos en una oficina.'],
      ['Comprobación', 'Indica cómo verificar que está correcto.'],
      ['Error típico', 'Explica qué puede fallar.'],
      ['Seguridad', 'Añade protección de datos, permisos, copias o confidencialidad si procede.']
    ],
    contratos: [
      ['Elemento', 'Qué debes contestar'],
      ['Necesidad', 'Qué necesidad pública se cubre y por qué el contrato es idóneo.'],
      ['Objeto', 'Prestación determinada, lotes y ausencia de fraccionamiento indebido.'],
      ['Importe', 'Presupuesto base, valor estimado, precio y crédito adecuado.'],
      ['Expediente', 'Informe de necesidad, pliegos, fiscalización, aprobación del gasto y órgano competente.'],
      ['Procedimiento', 'Menor, abierto, simplificado, negociado u otro, justificando causa.'],
      ['Ejecución', 'Factura, conformidad, pago, penalidades, modificación, recepción o resolución.']
    ],
    empleo: [
      ['Elemento', 'Qué debes contestar'],
      ['Tipo de personal', 'Funcionario de carrera, interino, laboral, eventual o directivo.'],
      ['Norma', 'TREBEP, régimen local, Ley 4/2011 CLM o bases de convocatoria.'],
      ['Procedimiento', 'OEP, convocatoria, bases, tribunal, ejercicios, baremo, nombramiento y toma de posesión.'],
      ['Derecho/deber', 'Derecho, permiso, deber ético, conducta o situación administrativa.'],
      ['Consecuencia', 'Acceso, promoción, provisión, sanción, pérdida de condición o llamamiento de bolsa.']
    ],
    transversal: [
      ['Elemento', 'Qué debes contestar'],
      ['Norma', 'Identifica igualdad, protección de datos, transparencia o PRL.'],
      ['Concepto', 'Define dato personal, acceso, riesgo, discriminación, publicidad activa, etc.'],
      ['Obligación', 'Indica qué debe hacer el Ayuntamiento o empleado público.'],
      ['Límite', 'Añade confidencialidad, proporcionalidad, seguridad, protección de datos o salud.'],
      ['Actuación práctica', 'Explica la actuación concreta en registro, expediente, web, atención al público u oficina.']
    ]
  };

  function sections(norma, keys) {
    const pack = normas[norma];
    if (!pack || !keys) return [];
    return keys.map(k => pack.articulos?.[k]).filter(Boolean).map(a => sec(a.titulo, [a.texto, `Para examen/supuesto: ${a.estudio}`]));
  }

  function infoSections(keys) {
    const pack = normas.informatica;
    if (!pack || !keys) return [];
    return keys.flatMap(k => {
      const block = pack.bloques?.[k];
      return block ? [sec(block.titulo, block.apartados.map(a => `${a.h}. ${a.p}`))] : [];
    });
  }

  function set(theme, norma, keys, table = 'legal') {
    theme.sections = sections(norma, keys);
    theme.reviewTable = tables[table] || tables.legal;
    theme.tree = '';
    theme.modularSource = norma;
    return theme;
  }

  function setInfo(theme, keys) {
    theme.sections = infoSections(keys);
    theme.reviewTable = tables.info;
    theme.tree = '';
    theme.modularSource = 'informatica';
    return theme;
  }

  function qset(theme) {
    const rows = (theme.reviewTable || tables.legal).slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const row = rows[i % rows.length];
      const ok = `${row[0]}: ${row[1]}`;
      const opts = [ok, 'Responder de forma general sin concretar norma, paso ni consecuencia.', 'Copiar el título del tema sin aplicar nada al supuesto.', 'Ignorar plazos, órgano competente, seguridad o límites.'];
      const off = (Number(theme.number || 0) + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return {
        id: `${theme.id}-motor-q${i + 1}`,
        text: `Tema ${theme.number}. ¿Qué respuesta está mejor orientada a examen y supuesto práctico?`,
        options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[sh.indexOf(ok)],
        justification: 'La respuesta debe ser autocontenida: norma o concepto, aplicación al hecho, trámite/paso y consecuencia.'
      };
    });
  }

  function chooseConstitucion(t, theme) {
    const ce = normas.constitucion;
    if (!ce) return theme;
    if (has(t, ['título preliminar','titulo preliminar','estructura','principios generales'])) return set(theme, 'constitucion', ce.temas.tituloPreliminar);
    if (has(t, ['derechos','deberes','libertades'])) return set(theme, 'constitucion', [...ce.temas.derechos, ...ce.temas.principiosGarantias]);
    if (has(t, ['garantías','garantias','defensor del pueblo','suspensión','suspension'])) return set(theme, 'constitucion', ce.temas.principiosGarantias);
    if (has(t, ['corona','rey'])) return set(theme, 'constitucion', ce.temas.corona);
    if (has(t, ['cortes','congreso','senado','ley orgánica','ley organica','decreto-ley','leyes'])) return set(theme, 'constitucion', ce.temas.cortes);
    if (has(t, ['gobierno','administración pública','administracion publica'])) return set(theme, 'constitucion', ce.temas.gobiernoAdministracion);
    if (has(t, ['poder judicial','tribunal supremo','ministerio fiscal'])) return set(theme, 'constitucion', ce.temas.poderJudicial);
    if (has(t, ['organización territorial','organizacion territorial','comunidades autónomas','comunidades autonomas'])) return set(theme, 'constitucion', ce.temas.organizacionTerritorial);
    if (t.includes('tribunal constitucional')) return set(theme, 'constitucion', ce.temas.tribunalConstitucional);
    if (t.includes('reforma')) return set(theme, 'constitucion', ce.temas.reforma);
    return set(theme, 'constitucion', [...ce.temas.tituloPreliminar, ...ce.temas.derechos, ...ce.temas.principiosGarantias]);
  }

  function chooseLey39(t, theme) {
    const l = normas.ley39;
    if (!l) return theme;
    if (has(t, ['interesados','actividad','plazos','términos','terminos'])) return set(theme, 'ley39', l.temas.interesadosActividadPlazos);
    if (has(t, ['actos administrativos','notificación','notificacion','publicación','publicacion','nulidad','anulabilidad'])) return set(theme, 'ley39', l.temas.actosNotificacionValidez);
    if (has(t, ['procedimiento','iniciación','iniciacion','ordenación','ordenacion','instrucción','instruccion','finalización','finalizacion','ejecución','ejecucion','simplificada'])) return set(theme, 'ley39', l.temas.procedimientoCompleto);
    if (has(t, ['revisión','revision','recursos administrativos','recurso de alzada','reposición','reposicion'])) return set(theme, 'ley39', l.temas.revisionRecursos);
    if (has(t, ['identificación','identificacion','firma','registro electrónico','registro electronico'])) return set(theme, 'ley39', l.temas.identificacionFirma);
    return set(theme, 'ley39', [...l.temas.interesadosActividadPlazos, ...l.temas.procedimientoCompleto]);
  }

  function chooseLey40(t, theme) {
    const l = normas.ley40;
    if (!l) return theme;
    if (has(t, ['colegiado','colegiados','actas','secretario'])) return set(theme, 'ley40', l.temas.organosColegiados);
    if (has(t, ['abstención','abstencion','recusación','recusacion'])) return set(theme, 'ley40', l.temas.abstencionRecusacion);
    if (has(t, ['sancionador','sancionadora','sanciones'])) return set(theme, 'ley40', l.temas.sancionador);
    if (t.includes('responsabilidad patrimonial')) return set(theme, 'ley40', l.temas.responsabilidad);
    if (has(t, ['sede','electrónica','electronica','automatizada','csv','archivo electrónico','archivo electronico'])) return set(theme, 'ley40', l.temas.electronica);
    if (has(t, ['convenio','convenios'])) return set(theme, 'ley40', l.temas.convenios);
    if (has(t, ['relaciones interadministrativas','colaboración','colaboracion','cooperación','cooperacion','coordinación','coordinacion'])) return set(theme, 'ley40', l.temas.relaciones);
    return set(theme, 'ley40', l.temas.principiosOrganosCompetencia);
  }

  function chooseLocal(t, theme) {
    const l = normas.regimenLocal;
    if (!l) return theme;
    if (has(t, ['padrón','padron','población','poblacion'])) return set(theme, 'regimenLocal', l.temas.municipioPadron);
    if (has(t, ['alcalde','pleno','junta de gobierno','órganos municipales','organos municipales','organización municipal','organizacion municipal'])) return set(theme, 'regimenLocal', l.temas.organizacionMunicipal);
    if (has(t, ['competencias','servicios mínimos','servicios minimos'])) return set(theme, 'regimenLocal', l.temas.competenciasServicios);
    if (has(t, ['provincia','diputación','diputacion'])) return set(theme, 'regimenLocal', l.temas.provinciaDiputacion);
    if (has(t, ['órganos colegiados','organos colegiados','actas','certificados','sesiones','mayorías','mayorias','ordenanzas','reglamentos locales'])) return set(theme, 'regimenLocal', l.temas.funcionamiento);
    if (has(t, ['relaciones','control','impugnación','impugnacion'])) return set(theme, 'regimenLocal', l.temas.relacionesControl);
    if (has(t, ['participación','participacion','consulta','vecinal'])) return set(theme, 'regimenLocal', l.temas.participacion);
    if (has(t, ['bienes','licencias','policía','policia','fomento','servicio público','servicio publico','actividad administrativa'])) return set(theme, 'regimenLocal', l.temas.bienesActividad);
    if (has(t, ['personal','función pública local','funcion publica local','habilitación nacional','habilitacion nacional','plantilla','rpt'])) return set(theme, 'regimenLocal', l.temas.personalLocal);
    return set(theme, 'regimenLocal', l.temas.bases);
  }

  function chooseHacienda(t, theme) {
    const h = normas.haciendaLocal;
    if (!h) return theme;
    if (has(t, ['ordenanza','ordenanzas fiscales','recursos','ingresos'])) return set(theme, 'haciendaLocal', h.temas.recursosOrdenanzas);
    if (has(t, ['tasa','tasas','contribuciones especiales'])) return set(theme, 'haciendaLocal', h.temas.tasasContribuciones);
    if (t.includes('ibi')) return set(theme, 'haciendaLocal', h.temas.ibi);
    if (t.includes('iae')) return set(theme, 'haciendaLocal', h.temas.iae);
    if (t.includes('ivtm')) return set(theme, 'haciendaLocal', h.temas.ivtm);
    if (t.includes('icio')) return set(theme, 'haciendaLocal', h.temas.icio);
    if (has(t, ['iivtnu','plusvalía','plusvalia'])) return set(theme, 'haciendaLocal', h.temas.iivtnu);
    if (has(t, ['recaudación','recaudacion','apremio','embargo','aplazamiento','fraccionamiento'])) return set(theme, 'haciendaLocal', h.temas.recaudacion);
    if (has(t, ['modificaciones presupuestarias','créditos extraordinarios','creditos extraordinarios','suplementos','transferencias'])) return set(theme, 'haciendaLocal', h.temas.modificaciones);
    if (has(t, ['ejecución del gasto','ejecucion del gasto','factura','facturas'])) return set(theme, 'haciendaLocal', h.temas.ejecucionGasto);
    if (has(t, ['liquidación','liquidacion','remanente','resultado presupuestario','cuenta general','estabilidad','regla de gasto','morosidad'])) return set(theme, 'haciendaLocal', h.temas.liquidacionControl);
    if (has(t, ['presupuesto','presupuestaria'])) return set(theme, 'haciendaLocal', [...h.temas.presupuesto, ...h.temas.modificaciones, ...h.temas.ejecucionGasto, ...h.temas.liquidacionControl]);
    return set(theme, 'haciendaLocal', [...h.temas.recursosOrdenanzas, ...h.temas.tasasContribuciones, ...h.temas.impuestosGeneral]);
  }

  function chooseContratos(t, theme) {
    const c = normas.contratosPublicos;
    if (!c) return theme;
    if (t.includes('menor')) return set(theme, 'contratosPublicos', c.temas.contratoMenor, 'contratos');
    if (has(t, ['tipo','clases','obra','suministro','servicio','concesión','concesion'])) return set(theme, 'contratosPublicos', c.temas.tiposContratos, 'contratos');
    if (has(t, ['objeto','precio','valor estimado','presupuesto base','necesidad','idoneidad'])) return set(theme, 'contratosPublicos', c.temas.necesidadObjetoPrecio, 'contratos');
    if (has(t, ['aptitud','solvencia','prohibiciones','clasificación','clasificacion'])) return set(theme, 'contratosPublicos', c.temas.aptitudContratista, 'contratos');
    if (has(t, ['expediente','pliego','pliegos','prescripciones técnicas','prescripciones tecnicas'])) return set(theme, 'contratosPublicos', c.temas.expedientePliegos, 'contratos');
    if (has(t, ['procedimiento','abierto','simplificado','negociado','adjudicación','adjudicacion','licitación','licitacion'])) return set(theme, 'contratosPublicos', c.temas.procedimientos, 'contratos');
    if (has(t, ['recurso','perfil','corrupción','corrupcion','conflicto'])) return set(theme, 'contratosPublicos', c.temas.recursoEspecial, 'contratos');
    if (has(t, ['ejecución','ejecucion','factura','pago','penalidad','modificación','modificacion','resolución','resolucion'])) return set(theme, 'contratosPublicos', c.temas.ejecucion, 'contratos');
    return set(theme, 'contratosPublicos', [...c.temas.principiosAmbito, ...c.temas.tiposContratos, ...c.temas.expedientePliegos, ...c.temas.contratoMenor], 'contratos');
  }

  function chooseEmpleo(t, theme) {
    const e = normas.empleoPublico;
    if (!e) return theme;
    if (has(t, ['clases','concepto','funcionario','interino','laboral','eventual'])) return set(theme, 'empleoPublico', e.temas.clases, 'empleo');
    if (has(t, ['derechos','retribuciones','permisos','vacaciones','jornada','carrera'])) return set(theme, 'empleoPublico', e.temas.derechos, 'empleo');
    if (has(t, ['deberes','código','codigo','conducta','ético','etico'])) return set(theme, 'empleoPublico', e.temas.deberesCodigo, 'empleo');
    if (has(t, ['acceso','selección','seleccion','oposición','oposicion','concurso','tribunal','mérito','merito','capacidad'])) return set(theme, 'empleoPublico', e.temas.accesoSeleccion, 'empleo');
    if (has(t, ['pérdida','perdida','jubilación','jubilacion','renuncia','inhabilitación','inhabilitacion'])) return set(theme, 'empleoPublico', e.temas.perdida, 'empleo');
    if (has(t, ['planificación','planificacion','ordenación','ordenacion','rpt','plantilla','grupos','clasificación','clasificacion'])) return set(theme, 'empleoPublico', e.temas.planificacionOrdenacion, 'empleo');
    if (has(t, ['provisión','provision','libre designación','libre designacion','movilidad'])) return set(theme, 'empleoPublico', e.temas.provision, 'empleo');
    if (has(t, ['situaciones administrativas','servicio activo','servicios especiales','excedencia','suspensión','suspension','reingreso'])) return set(theme, 'empleoPublico', e.temas.situaciones, 'empleo');
    if (has(t, ['disciplinario','disciplina','faltas','sanciones','separación del servicio','separacion del servicio'])) return set(theme, 'empleoPublico', e.temas.disciplinario, 'empleo');
    if (has(t, ['ley 4/2011','castilla-la mancha','clm'])) return set(theme, 'empleoPublico', e.temas.clm, 'empleo');
    if (t.includes('bolsa')) return set(theme, 'empleoPublico', e.temas.bolsas, 'empleo');
    return set(theme, 'empleoPublico', [...e.temas.clases, ...e.temas.accesoSeleccion, ...e.temas.deberesCodigo], 'empleo');
  }

  function chooseTrans(t, theme) {
    const tr = normas.transversales;
    if (!tr) return theme;
    if (has(t, ['igualdad','discriminación','discriminacion','género','genero','mujeres y hombres','violencia de género','violencia de genero','acoso sexual'])) return set(theme, 'transversales', tr.temas.igualdad, 'transversal');
    if (has(t, ['protección de datos','proteccion de datos','rgpd','lopdgdd','datos personales','privacidad','delegado de protección','delegado de proteccion'])) return set(theme, 'transversales', tr.temas.proteccionDatos, 'transversal');
    if (has(t, ['transparencia','información pública','informacion publica','publicidad activa','buen gobierno','derecho de acceso','portal de transparencia'])) return set(theme, 'transversales', tr.temas.transparencia, 'transversal');
    if (has(t, ['prevención de riesgos','prevencion de riesgos','riesgos laborales','prl','seguridad y salud','pantallas de visualización','pantallas de visualizacion','ergonomía','ergonomia'])) return set(theme, 'transversales', tr.temas.prl, 'transversal');
    return theme;
  }

  function chooseInfo(t, theme) {
    if (has(t, ['windows i','creación, copiado','creacion, copiado','impresión y digitalización','impresion y digitalizacion'])) return setInfo(theme, ['windows']);
    if (has(t, ['windows ii','internet explorer','edge','navegación por internet','navegacion por internet'])) return setInfo(theme, ['internet']);
    if (has(t, ['word','writer','procesamiento de texto'])) return setInfo(theme, ['word']);
    if (has(t, ['excel','calc','hojas de cálculo','hojas de calculo'])) return setInfo(theme, ['excel']);
    if (has(t, ['ordenador personal','componentes','periféricos','perifericos'])) return setInfo(theme, ['hardware']);
    return theme;
  }

  function apply(theme) {
    const t = low(`${theme.title} ${theme.area}`);
    let updated = theme;

    if (has(t, ['contrat','lcsp','licit','adjudic','pliego','menor'])) updated = chooseContratos(t, updated);
    else if (has(t, ['empleo público','empleo publico','función pública','funcion publica','trebep','personal al servicio','funcionarios','interinos','provisión','provision','situaciones administrativas','disciplina','disciplinario','oep','bolsa','ley 4/2011'])) updated = chooseEmpleo(t, updated);
    else if (has(t, ['igualdad','discriminación','discriminacion','género','genero','protección de datos','proteccion de datos','rgpd','lopdgdd','transparencia','información pública','informacion publica','prevención de riesgos','prevencion de riesgos','riesgos laborales','prl'])) updated = chooseTrans(t, updated);
    else if (has(t, ['hacienda','tribut','tasa','ibi','iae','ivtm','icio','iivtnu','plusvalía','plusvalia','recaudación','recaudacion','apremio','presupuesto','presupuestaria','liquidación','liquidacion','remanente','estabilidad','regla de gasto','morosidad','facturas electrónicas','facturas electronicas'])) updated = chooseHacienda(t, updated);
    else if (has(t, ['constitución','constitucion','corona','cortes generales','gobierno y la administración','gobierno y administracion','poder judicial','tribunal constitucional','reforma constitucional','organización territorial','organizacion territorial','comunidades autónomas','comunidades autonomas','defensor del pueblo'])) updated = chooseConstitucion(t, updated);
    else if (has(t, ['municipio','padrón','padron','provincia','diputación','diputacion','régimen local','regimen local','entidades locales','administración local','administracion local','órganos municipales','organos municipales','ordenanzas','reglamentos locales','bienes','licencias','servicios públicos','servicios publicos','función pública local','funcion publica local'])) updated = chooseLocal(t, updated);
    else if (has(t, ['40/2015','régimen jurídico del sector público','regimen juridico del sector publico'])) updated = chooseLey40(t, updated);
    else if (t.includes('39/2015') || has(t, ['procedimiento administrativo común','procedimiento administrativo comun','actos administrativos','recursos administrativos'])) updated = chooseLey39(t, updated);
    else updated = chooseInfo(t, updated);

    if (updated.modularSource) updated.testHint = `Motor temario: ${updated.modularSource}`;
    return updated;
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(theme => {
      const updated = apply(theme);
      if (updated.modularSource) ope.themeTests[updated.id] = qset(updated);
      return updated;
    });
    ope.status = `${(ope.status || '').replace(/ Temario.*/, '')} Motor único activo: normas modulares aplicadas tema por tema.`;
  });

  window.OPOWEB_MOTOR_TEMARIO = { version: 'v26', normas: Object.keys(normas) };
  if (typeof renderAll === 'function') renderAll();
})();
