(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const profiles = [
    {
      keys: ['constitución','constitucional','corona','cortes','tribunal constitucional','defensor','poder judicial','cgpj','modelo económico'],
      refs: ['Constitución Española: arts. 1-9, 10-55, 56-65, 66-96, 117-127, 159-165 y 166-169, según epígrafe concreto.'],
      concepts: ['norma suprema','parte dogmática','parte orgánica','derecho fundamental','garantía institucional','reserva de ley','contenido esencial','amparo','reforma ordinaria','reforma agravada'],
      practical: 'Identifica si el caso afecta a principio constitucional, derecho fundamental, órgano constitucional o reforma; cita el bloque de artículos y termina con garantía, competencia o efecto jurídico.'
    },
    {
      keys: ['39/2015','procedimiento','interesados','actos administrativos','plazos','silencio','iniciación','ordenación','instrucción','finalización','ejución','revisión','recursos','registro','notificaciones','expediente','archivo'],
      refs: ['Ley 39/2015: arts. 3-8, 13, 16, 21-33, 35-52, 53-105 y 106-126, según materia.'],
      concepts: ['interesado','representación','registro electrónico','subsanación','acto administrativo','motivación','eficacia','notificación','silencio administrativo','caducidad','alzada','reposición','revisión de oficio'],
      practical: 'Estructura la respuesta como hecho relevante → interesado/órgano → trámite procedente → plazo → forma de notificación o registro → efecto jurídico.'
    },
    {
      keys: ['40/2015','régimen jurídico','órganos','delegación','avocación','encomienda','abstención','recusación','convenios','relaciones interadministrativas','sancionador','responsabilidad patrimonial'],
      refs: ['Ley 40/2015: arts. 3-14, 15-18, 23-24, 25-31, 32-37, 40-46, 47-53 y 140-158, según epígrafe.'],
      concepts: ['competencia','órgano administrativo','delegación de competencias','delegación de firma','avocación','encomienda de gestión','suplencia','abstención','recusación','convenio','potestad sancionadora','responsabilidad patrimonial'],
      practical: 'Comprueba competencia, técnica de alteración del ejercicio de la competencia, imparcialidad, procedimiento y consecuencia de invalidez o responsabilidad.'
    },
    {
      keys: ['municipio','padrón','competencias','administración local','autonomía local','provincia','mancomunidades','comarcas','servicios mínimos','órganos colegiados','actas','certificados','ordenanzas','bandos','alcalde','pleno'],
      refs: ['Ley 7/1985: arts. 1-4, 11-18, 20-27, 31-37, 46-54, 55-62, 84 y 106; ROF cuando proceda.'],
      concepts: ['entidad local territorial','personalidad jurídica','padrón municipal','vecino','competencia propia','competencia delegada','Alcalde','Pleno','Junta de Gobierno Local','acta','certificación','ordenanza','bando'],
      practical: 'Determina entidad u órgano competente, convocatoria/quórum si procede, acuerdo, acta/certificado, publicación o notificación y efecto municipal.'
    },
    {
      keys: ['trebep','empleo público','función pública','funcionarios','fhn','oep','rpt','situaciones administrativas','incompatibilidades','disciplina','retribuciones','personal al servicio'],
      refs: ['TREBEP: arts. 8-14, 52-54, 55-62, 69-76, 78-84, 85-92 y 93-98; Ley 4/2011 CLM; RD 128/2018 para FHN.'],
      concepts: ['funcionario de carrera','funcionario interino','personal laboral','personal eventual','OEP','convocatoria','provisión','RPT','carrera administrativa','situación administrativa','incompatibilidad','régimen disciplinario'],
      practical: 'Separa acceso, provisión, derechos/deberes, situación administrativa, incompatibilidad y disciplina; no confundas bolsa con nombramiento efectivo.'
    },
    {
      keys: ['hacienda','tributos','tasas','contribuciones','precios públicos','impuestos','ibi','iae','ivtm','iivtnu','presupuesto','gasto','ingresos','modificaciones presupuestarias','cuenta general','estructura presupuestaria','liquidación','remanente','estabilidad','regla de gasto','recaudación','apremio'],
      refs: ['TRLRHL: recursos locales, arts. 2, 20-27, 59 y ss., 162-193; LGT arts. 17-49, 60-73 y 160-173; RD 500/1990; Orden EHA/3565/2008; LO 2/2012.'],
      concepts: ['hecho imponible','sujeto pasivo','devengo','liquidación','ordenanza fiscal','periodo voluntario','periodo ejecutivo','providencia de apremio','crédito presupuestario','aplicación presupuestaria','modificación de crédito','remanente de tesorería'],
      practical: 'Identifica ingreso o gasto, tributo o crédito, sujeto/órgano, expediente, plazo, fiscalización o recaudación y efecto contable o recaudatorio.'
    },
    {
      keys: ['contratos','contratista','pliego','garantías','contratación','lcsp'],
      refs: ['Ley 9/2017 de Contratos del Sector Público: expediente, necesidad, objeto, presupuesto base, pliegos, adjudicación, formalización, ejecución y extinción.'],
      concepts: ['expediente de contratación','necesidad','objeto','presupuesto base de licitación','valor estimado','pliego','adjudicación','formalización','garantía','contrato menor'],
      practical: 'Ordena la respuesta por necesidad, objeto, crédito, pliegos, procedimiento, adjudicación, formalización, ejecución y extinción.'
    },
    {
      keys: ['bienes','dominio público','patrimoniales'],
      refs: ['Ley 7/1985, TRRL y Reglamento de Bienes de las Entidades Locales: dominio público, comunales, patrimoniales, inventario, afectación y desafectación.'],
      concepts: ['bien de dominio público','bien comunal','bien patrimonial','afectación','desafectación','inventario','inalienabilidad','inembargabilidad','imprescriptibilidad'],
      practical: 'Clasifica el bien, comprueba titularidad e inventario, régimen jurídico, uso permitido y procedimiento de defensa, afectación o desafectación.'
    },
    {
      keys: ['igualdad'],
      refs: ['LO 3/2007: arts. 3-15 y 51 y ss.; Ley 12/2010 CLM cuando el tema la incluya.'],
      concepts: ['igualdad de trato','discriminación directa','discriminación indirecta','acoso sexual','acoso por razón de sexo','transversalidad','acción positiva','presencia equilibrada'],
      practical: 'Compara situaciones, detecta trato desigual, justificación objetiva/proporcional, posible discriminación y medida correctora compatible con igualdad.'
    },
    {
      keys: ['prevención','riesgos laborales'],
      refs: ['Ley 31/1995: arts. 14-16, 18-22, 29 y 33-40.'],
      concepts: ['protección eficaz','evaluación de riesgos','planificación preventiva','información','formación','vigilancia de la salud','delegado de prevención','comité de seguridad y salud'],
      practical: 'Aplica evaluación de riesgos, medidas preventivas, información/formación, participación y vigilancia de la salud al puesto administrativo concreto.'
    },
    {
      keys: ['protección de datos','datos personales','rgpd','lopdgdd'],
      refs: ['RGPD arts. 4, 5, 6, 12-22, 24-25, 30, 32 y 33; LO 3/2018.'],
      concepts: ['dato personal','tratamiento','responsable','encargado','base jurídica','minimización','limitación de finalidad','confidencialidad','derechos RGPD','brecha de seguridad'],
      practical: 'Pondera acceso y protección de datos: legitimación, finalidad, minimización, anonimización de terceros, seguridad y trazabilidad.'
    },
    {
      keys: ['electrónica','telemáticos','firma','certificado','sede','csv','facturas','morosidad','identificación'],
      refs: ['Ley 39/2015 arts. 9-12, 14-16 y 41-46; Ley 40/2015 arts. 38-46; Ley 25/2013 factura electrónica; normativa de morosidad.'],
      concepts: ['sede electrónica','identificación electrónica','firma electrónica','sello electrónico','CSV','registro electrónico','notificación electrónica','interoperabilidad','factura electrónica'],
      practical: 'Comprueba identidad/firma, sede, registro, CSV, expediente electrónico, notificación electrónica, conservación e integridad del documento.'
    },
    {
      keys: ['fomento','policía','licencias','servicio público','concesión','acción administrativa'],
      refs: ['Ley 7/1985 art. 84; Ley 39/2015; Ley 40/2015; normativa sectorial aplicable a licencias, autorizaciones y servicios públicos.'],
      concepts: ['actividad de fomento','actividad de policía','licencia','autorización','declaración responsable','comunicación previa','servicio público','concesión'],
      practical: 'Clasifica la forma de actividad administrativa y determina título habilitante, control municipal, informes, resolución, silencio y consecuencias.'
    },
    {
      keys: ['windows','word','writer','excel','calc','libreoffice','office','ordenador','periféricos','impresión','digitalización','internet explorer','edge'],
      refs: ['Temario de informática de usuario: Windows, navegador, Word/Writer, Excel/Calc, hardware, periféricos, impresión, escaneo y seguridad básica.'],
      concepts: ['archivo','carpeta','ruta','extensión','unidad de red','permisos','impresora predeterminada','digitalización','OCR','URL','HTTPS','estilo','plantilla','celda','rango','fórmula','referencia absoluta'],
      practical: 'Describe pasos operativos verificables: seleccionar, comprobar permisos, guardar, nombrar, escanear, ordenar/filtrar, revisar resultado y proteger datos personales.'
    }
  ];

  function normText(t) { return String(t || '').toLowerCase(); }
  function pickProfile(theme) {
    const text = normText(`${theme.title} ${theme.area}`);
    return profiles.find(p => p.keys.some(k => text.includes(k))) || {
      refs: ['Programa oficial de la convocatoria + norma sectorial vigente: identifica definición, competencia, procedimiento, plazo y efecto.'],
      concepts: ['concepto','naturaleza jurídica','órgano competente','requisito','trámite','plazo','efecto','excepción'],
      practical: 'Responde con norma aplicable, concepto técnico, requisito, trámite, plazo, órgano competente, consecuencia y conclusión aplicada al caso.'
    };
  }

  function enhanceTheme(theme) {
    const p = pickProfile(theme);
    const refs = p.refs;
    const concepts = [...new Set(p.concepts)].join(', ');
    theme.sections = [
      { heading: 'Qué entra realmente', paragraphs: [`No basta con una descripción general. En este tema debes dominar norma, artículo o bloque legal, concepto técnico, órgano competente, trámite, plazo y efecto jurídico.`, `En test te preguntarán diferencias finas; en supuesto te pedirán aplicar la regla al caso municipal.`] },
      { heading: 'Artículos y normas que debes citar', paragraphs: refs },
      { heading: 'Argot técnico y conceptos clave', paragraphs: [concepts] },
      { heading: 'Cómo llevarlo al supuesto práctico', paragraphs: [p.practical, 'Plantilla: hecho relevante → norma aplicable → competencia/órgano → trámite/requisito/plazo → consecuencia → conclusión.'] },
      { heading: 'Trampas habituales de examen', paragraphs: ['Confundir figuras parecidas del mismo bloque.', 'No citar el órgano competente o el plazo.', 'Responder con teoría general sin aplicar al hecho del caso.', 'Usar normas de otra convocatoria sin comprobar que están en el temario oficial.'] }
    ];
    theme.tree = [`Tema ${theme.number} · ${theme.area}`, `├─ Norma: ${refs.join(' | ')}`, `├─ Conceptos: ${concepts}`, '├─ Test: definición + requisito + excepción', `└─ Supuesto: ${p.practical}`].join('\n');
    theme.reviewTable = [
      ['Bloque útil', 'Norma/artículos', 'Qué dominar', 'Aplicación al supuesto'],
      ['Norma base', refs.join(' | '), 'Localizar artículo/bloque legal y no estudiar solo de memoria.', 'Citar base legal al comenzar.'],
      ['Conceptos técnicos', concepts, 'Definir con precisión y distinguir figuras parecidas.', 'Usar vocabulario técnico en la respuesta.'],
      ['Procedimiento / órgano / plazo', refs.join(' | '), 'Órgano competente, trámite, plazo, requisito y efecto.', p.practical],
      ['Trampas', 'Comparar con figuras próximas', 'No confundir plazos, recursos, órgano, competencia o efectos.', 'Explicar por qué no procede la alternativa incorrecta.']
    ];
    return theme;
  }

  function makeQuestions(theme) {
    const rows = theme.reviewTable.slice(1);
    const out = [];
    for (let i = 0; i < 12; i++) {
      const row = rows[i % rows.length];
      const correct = `Citar ${row[1]} y explicar ${row[2]} aplicado al caso.`;
      const options = [correct, 'Responder con una definición breve sin artículos, órgano, trámite ni consecuencia.', 'Usar una regla de otra oposición porque el título del tema se parece.', 'Limitarse a decir que lo resuelve el Ayuntamiento sin concretar competencia ni procedimiento.'];
      const offset = (theme.number + i) % 4;
      const shuffled = options.slice(offset).concat(options.slice(0, offset));
      out.push({
        id: `${theme.id}-q${i + 1}`,
        text: `Tema ${theme.number}. Para el bloque “${row[0]}”, ¿qué respuesta sería más sólida en test/supuesto?`,
        options: shuffled.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[shuffled.indexOf(correct)],
        justification: 'La opción correcta une base normativa, concepto técnico y aplicación al caso. Eso es lo que diferencia una respuesta útil de una descripción ligera.'
      });
    }
    return out;
  }

  function makeCases(prefix) {
    const base = [
      ['Solicitud incompleta', 'Ley 39/2015 art. 68: requerimiento de subsanación, plazo general, advertencia de desistimiento y resolución.'],
      ['Registro electrónico', 'Ley 39/2015 art. 16: asiento registral, fecha/hora oficial, recibo, documentos adjuntos y cómputo del plazo.'],
      ['Notificación', 'Ley 39/2015 arts. 40 a 46: contenido, medio, intento, rechazo, comparecencia electrónica y efectos.'],
      ['Recurso administrativo', 'Ley 39/2015 arts. 112 a 124: acto recurrible, fin de vía, alzada/reposición, plazo, órgano y silencio.'],
      ['Expediente con datos personales', 'Ley 39/2015 art. 53 + RGPD/LOPDGDD: acceso, legitimación, minimización y anonimización de terceros.'],
      ['Órgano colegiado', 'Ley 40/2015 arts. 15 a 18 y régimen local: convocatoria, orden del día, quórum, votación, acta y certificado.'],
      ['Padrón municipal', 'Ley 7/1985 arts. 15 a 18: residencia habitual, vecino, certificación y efectos administrativos.'],
      ['Licencia municipal', 'Ley 7/1985 art. 84 y normativa sectorial: actividad de policía, control previo, informe, resolución y silencio si procede.'],
      ['Contrato menor', 'LCSP: necesidad, objeto, importe, crédito, informe, no fraccionamiento, adjudicación y factura.'],
      ['Presupuesto y crédito', 'TRLRHL/RD 500/1990: crédito adecuado y suficiente, aplicación presupuestaria, gasto y modificación si no hay crédito.'],
      ['Tributo local', 'TRLRHL/LGT: hecho imponible, sujeto pasivo, devengo, liquidación, padrón, bonificación/exención y recurso.'],
      ['Apremio', 'LGT arts. 160 a 173: voluntaria, ejecutiva, providencia de apremio, recargos y embargo.'],
      ['Bien municipal', 'RBEL: dominio público/patrimonial, inventario, afectación, desafectación, uso y defensa.'],
      ['Igualdad', 'LO 3/2007: igualdad de trato, discriminación directa/indirecta, acción positiva y empleo público.'],
      ['Prevención', 'Ley 31/1995: evaluación de riesgos, información, formación, vigilancia de la salud y medidas preventivas.'],
      ['Certificado electrónico', 'Ley 39/2015 arts. 9 a 12 y Ley 40/2015: identificación, firma, sede, CSV y validación.'],
      ['Archivo', 'Expediente administrativo: ordenación, integridad, conservación, acceso, protección de datos y trazabilidad.'],
      ['Silencio administrativo', 'Ley 39/2015 arts. 21 a 25: obligación de resolver, plazo máximo, silencio positivo/negativo y certificado.'],
      ['Responsabilidad patrimonial', 'Ley 40/2015 arts. 32 a 37: daño efectivo, evaluable, individualizado, causalidad, antijuridicidad y ausencia de fuerza mayor.'],
      ['Bolsa de trabajo', 'Bases de convocatoria + TREBEP: lista, orden de prelación, llamamiento, renuncia, disponibilidad y expectativa de derecho.']
    ];
    return base.map((c, i) => ({
      id: `${prefix}-sp${i + 1}`,
      title: c[0],
      statement: `Caso práctico sobre ${c[0].toLowerCase()}. Redacta una respuesta con norma, artículo o bloque legal, trámite, plazo, órgano competente y consecuencia administrativa.`,
      guidance: `Respuesta orientativa: ${c[1]} Cierra con conclusión aplicada al caso y evita respuestas genéricas.`
    }));
  }

  function makeSimulacros(prefix, themeTests) {
    const all = Object.values(themeTests).flat();
    return [0, 17, 43].map((start, s) => ({
      id: `${prefix}-sim${s + 1}`,
      title: `Simulacro transversal ${s + 1}`,
      questions: Array.from({ length: 50 }, (_, i) => ({ ...all[(start + i * 7) % all.length], id: `${prefix}-sim${s + 1}-q${i + 1}` }))
    }));
  }

  function enhanceOposicion(ope) {
    ope.themes = ope.themes.map(enhanceTheme);
    ope.themeTests = Object.fromEntries(ope.themes.map(t => [t.id, makeQuestions(t)]));
    ope.practicalCases = makeCases(ope.id);
    ope.simulacros = makeSimulacros(ope.id, ope.themeTests);
    ope.status = `${ope.status} Temario ampliado con artículos, argot técnico y enfoque de supuesto práctico.`;
    return ope;
  }

  data.oposiciones.forEach(enhanceOposicion);

  if (typeof themeDetail === 'function') {
    themeDetail = function(t) {
      const sections = t.sections.map(s=>`<section class="section"><h3>${escapeHtml(s.heading)}</h3>${s.paragraphs.map(p=>s.heading.includes('Trampas')?`<p>☐ ${escapeHtml(p)}</p>`:`<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('');
      const mapBlock = t.tree ? `<h3>Mapa de estudio útil</h3><pre class="tree">${escapeHtml(t.tree)}</pre>` : '';
      const tableBlock = t.reviewTable && t.reviewTable.length > 1 ? `<h3>Cuadro para test y supuesto práctico</h3>${renderTable(t.reviewTable)}` : '';
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button>
      <article class="card"><div class="pill-row"><span class="badge area">${escapeHtml(t.area)}</span>${t.commonPotential?'<span class="badge common">común/reutilizable</span>':''}</div><h2>Tema ${t.number}. ${escapeHtml(t.title)}</h2>
      ${sections}${mapBlock}${tableBlock}</article>`;
    };
  }

  if (typeof renderAll === 'function') renderAll();
})();
