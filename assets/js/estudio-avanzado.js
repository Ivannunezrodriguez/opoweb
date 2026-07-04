(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  function low(v){ return String(v || '').toLowerCase(); }
  function sec(heading, paragraphs){ return { heading, paragraphs }; }

  const ley39Interesados = [
    sec('Disposiciones generales', [
      'Artículo 1. Objeto. Regula la validez y eficacia de los actos administrativos, el procedimiento administrativo común de todas las Administraciones Públicas y los principios de la iniciativa legislativa y la potestad reglamentaria. Para examen: acto administrativo, procedimiento común y potestad normativa.',
      'Artículo 2. Ámbito subjetivo. Se aplica a la Administración General del Estado, Comunidades Autónomas, Entidades Locales y sector público institucional. Un Ayuntamiento entra plenamente dentro de este ámbito.'
    ]),
    sec('Los interesados en el procedimiento', [
      'Artículo 3. Capacidad de obrar. Pueden actuar ante la Administración las personas físicas o jurídicas con capacidad conforme al Derecho civil. También pueden actuar otros sujetos cuando una ley lo permita expresamente, como grupos de afectados, entidades sin personalidad o patrimonios autónomos. En un supuesto debes comprobar primero si quien actúa puede hacerlo válidamente.',
      'Artículo 4. Concepto de interesado. Son interesados quienes inician el procedimiento como titulares de derechos o intereses legítimos, quienes puedan ver afectados sus derechos aunque no lo hayan iniciado, y quienes tengan intereses legítimos afectados y comparezcan antes de resolución definitiva. Las asociaciones representativas pueden tener intereses legítimos colectivos cuando la ley lo reconozca. Si la posición jurídica se transmite, el sucesor ocupa la condición de interesado.',
      'Artículo 5. Representación. El interesado puede actuar mediante representante. La representación debe acreditarse para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimiento y renuncia de derechos; en actos de mero trámite se presume. Puede acreditarse por cualquier medio válido, por apoderamiento apud acta presencial o electrónico, o por registro electrónico de apoderamientos. Si falta acreditación, se concede subsanación de diez días y el acto puede conservarse si se acredita después.',
      'Artículo 6. Registro electrónico de apoderamientos. AGE, Comunidades Autónomas y Entidades Locales deben disponer de registro electrónico general de apoderamientos. Deben inscribirse poderes generales, con datos del poderdante, apoderado, fecha, duración y tipo de poder. Tipos: poder general ante cualquier Administración, poder ante una Administración concreta o poder para trámites determinados. El poder apud acta se otorga en sede electrónica o en oficina de asistencia. Validez máxima: cinco años, con posibilidad de revocación o prórroga.',
      'Artículo 7. Pluralidad de interesados. Si hay varios interesados en una misma solicitud, se actúa con el representante o interesado designado; si no se designa, con quien figure en primer lugar.',
      'Artículo 8. Nuevos interesados. Si durante la instrucción aparece una persona con derechos o intereses legítimos y directos que puede resultar afectada, y su identificación resulta del expediente, debe comunicársele la tramitación.'
    ]),
    sec('Actividad de las Administraciones Públicas', [
      'Artículo 13. Derechos de las personas. Derecho a comunicarse por Punto de Acceso General electrónico, asistencia en medios electrónicos, uso de lenguas oficiales, acceso a información pública, trato respetuoso, exigencia de responsabilidades e información sobre requisitos jurídicos o técnicos.',
      'Artículo 14. Relación electrónica. Las personas físicas pueden elegir canal salvo obligación legal. Están obligadas, entre otras, personas jurídicas, entidades sin personalidad, profesionales colegiados en su actividad, representantes de obligados electrónicos y empleados públicos por razón de su condición.',
      'Artículo 15. Lengua. En la AGE la lengua general es el castellano, sin perjuicio de lenguas cooficiales. En Comunidades Autónomas y Entidades Locales se aplica la normativa autonómica y el derecho de los interesados.',
      'Artículo 16. Registros. Cada Administración tiene Registro Electrónico General. El asiento debe recoger número, fecha y hora, identificación, órgano destinatario y contenido. Debe emitirse recibo. Se puede presentar en registro electrónico, Correos, oficinas consulares, oficinas de asistencia y lugares previstos legalmente.',
      'Artículo 17. Archivo electrónico. Cada Administración debe mantener archivo electrónico de procedimientos finalizados, garantizando autenticidad, integridad, conservación, protección de datos y recuperación.',
      'Artículo 18. Colaboración. Las personas deben colaborar con la Administración en los términos legales cuando sea necesario para el ejercicio de competencias.',
      'Artículo 19. Comparecencia. Solo es obligatoria cuando una norma con rango de ley lo prevea. La citación debe indicar lugar, fecha, hora, medio, objeto y efectos de no comparecer.',
      'Artículo 20. Responsabilidad de tramitación. Las unidades administrativas y su personal son responsables de tramitar los asuntos y remover obstáculos para evitar retrasos.',
      'Artículo 21. Obligación de resolver. La Administración debe dictar resolución expresa y notificarla en todos los procedimientos, salvo excepciones. Si la norma no fija plazo, el plazo máximo es de tres meses.',
      'Artículo 22. Suspensión del plazo. El plazo máximo para resolver puede suspenderse en supuestos tasados, como subsanación, informes preceptivos, pruebas técnicas o actuaciones indispensables.',
      'Artículo 23. Ampliación del plazo máximo. Puede acordarse motivadamente cuando se hayan agotado medios y exista acumulación relevante de asuntos; no puede superar el plazo establecido para tramitar.',
      'Artículo 24. Silencio en procedimientos iniciados a solicitud. Regla general: silencio positivo. Excepciones: silencio negativo cuando lo establezca ley o Derecho de la Unión y en materias como derecho de petición, dominio público, servicio público, medio ambiente o responsabilidad patrimonial.',
      'Artículo 25. Procedimientos iniciados de oficio. Si podían reconocer derechos favorables, el silencio es desestimatorio. Si son procedimientos desfavorables o de gravamen, el vencimiento del plazo produce caducidad.',
      'Artículo 26. Documentos administrativos. Deben emitirse normalmente por medios electrónicos, con identificación, referencia temporal, metadatos y firma cuando proceda.',
      'Artículo 27. Copias. Las copias auténticas tienen la misma validez que el original. La digitalización debe garantizar fidelidad, integridad y comprobación.',
      'Artículo 28. Documentos aportados. El interesado no debe aportar documentos ya presentados o elaborados por una Administración, salvo supuestos de oposición o imposibilidad de consulta.'
    ]),
    sec('Términos y plazos', [
      'Artículo 29. Obligatoriedad. Los términos y plazos obligan a autoridades, empleados públicos e interesados.',
      'Artículo 30. Cómputo. Horas hábiles salvo regla contraria. Días hábiles salvo que ley o Derecho de la Unión indique naturales. Sábados, domingos y festivos son inhábiles. Meses y años se computan de fecha a fecha; si el último día es inhábil, pasa al primer hábil.',
      'Artículo 31. Registros electrónicos. Funcionan todos los días y horas. La presentación en día inhábil se entiende hecha en la primera hora del primer día hábil siguiente, salvo norma especial.',
      'Artículo 32. Ampliación de plazos. Puede concederse si las circunstancias lo aconsejan, antes del vencimiento, sin perjudicar a terceros y sin superar la mitad del plazo inicial.',
      'Artículo 33. Tramitación de urgencia. Por interés público se reducen a la mitad los plazos ordinarios, salvo presentación de solicitudes y recursos.'
    ])
  ];

  const ley39Procedimiento = [
    sec('Derechos del interesado y comienzo del procedimiento', [
      'Artículo 53. Derechos del interesado. Derecho a conocer estado del expediente, sentido del silencio, órgano competente, instructor, acceso y copia de documentos, formular alegaciones, aportar documentos y no aportar los ya presentados o elaborados por la Administración.',
      'Artículo 54. Iniciación. El procedimiento se inicia de oficio o a solicitud del interesado.',
      'Artículo 55. Actuaciones previas. Permiten conocer circunstancias antes de decidir si procede iniciar procedimiento.',
      'Artículo 56. Medidas provisionales. Pueden adoptarse para asegurar la eficacia de la resolución, de forma motivada y proporcionada.',
      'Artículo 57. Acumulación. Pueden acumularse procedimientos con identidad sustancial o conexión íntima.',
      'Artículos 58 a 62. Iniciación de oficio. Puede producirse por propia iniciativa, orden superior, petición razonada o comunicación de hechos por una persona.',
      'Artículos 66 a 69. Solicitud, subsanación, declaración responsable y comunicación. La solicitud debe identificar interesado, hechos, petición, firma, órgano y medio de notificación. Si falta un requisito, se requiere subsanación de diez días.'
    ]),
    sec('Ordenación, instrucción, terminación y ejecución', [
      'Artículos 70 a 74. Expediente, impulso, concentración de trámites, cumplimiento de trámites y cuestiones incidentales. El expediente electrónico reúne documentos y actuaciones; el procedimiento se impulsa de oficio.',
      'Artículos 75 a 83. Instrucción. Incluye alegaciones, prueba, informes, audiencia e información pública. La audiencia se sitúa antes de la propuesta de resolución cuando proceda.',
      'Artículos 84 a 96. Terminación. El procedimiento termina por resolución, desistimiento, renuncia, caducidad, imposibilidad material o terminación convencional. La resolución debe decidir todas las cuestiones y expresar recursos.',
      'Artículos 97 a 105. Ejecución. Los actos administrativos son ejecutivos salvo suspensión o excepción legal. Medios de ejecución forzosa: apremio sobre patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.'
    ])
  ];

  const ley39Revision = [
    sec('Revisión de oficio', [
      'Artículo 106. Revisión de actos y disposiciones nulas. Permite declarar nulidad de pleno derecho con garantías y dictamen consultivo cuando proceda.',
      'Artículo 107. Lesividad. Para atacar actos favorables anulables, la Administración debe declararlos lesivos e impugnarlos ante la jurisdicción contencioso-administrativa.',
      'Artículo 108. Suspensión. Puede suspenderse la ejecución durante la revisión si hay perjuicios de difícil reparación.',
      'Artículo 109. Revocación y rectificación. Los actos desfavorables pueden revocarse con límites; los errores materiales, de hecho o aritméticos pueden rectificarse en cualquier momento.',
      'Artículos 110 y 111. Límites y competencia. La revisión se limita por equidad, buena fe, derechos de particulares y leyes; la competencia depende de la Administración autora del acto.'
    ]),
    sec('Recursos administrativos', [
      'Artículos 112 a 120. Reglas generales. Son recurribles resoluciones y actos de trámite cualificados. El recurso debe identificar recurrente, acto, motivo, lugar, fecha, firma y órgano. Puede inadmitirse por falta de competencia, legitimación, acto no recurrible, plazo vencido o carencia manifiesta de fundamento.',
      'Artículos 121 y 122. Alzada. Procede contra actos que no ponen fin a la vía administrativa. Plazo: un mes si el acto es expreso. Resolución: tres meses.',
      'Artículos 123 y 124. Reposición. Procede contra actos que ponen fin a la vía administrativa. Es potestativo. Plazo: un mes si el acto es expreso. Resolución: un mes.',
      'Artículos 125 y 126. Recurso extraordinario de revisión. Procede contra actos firmes por causas tasadas: error de hecho, aparición de documentos esenciales, falsedad declarada o conducta declarada por resolución judicial. Resolución: tres meses.'
    ])
  ];

  function genericSections(theme){
    const t = low(`${theme.title} ${theme.area}`);
    if (t.includes('constitución') || t.includes('corona') || t.includes('cortes')) return [sec('Desarrollo constitucional', ['Artículo 1 CE: Estado social y democrático de Derecho, valores superiores, soberanía nacional y monarquía parlamentaria.', 'Artículo 9 CE: sujeción a Constitución y ordenamiento, y principios de legalidad, jerarquía normativa, publicidad, seguridad jurídica, responsabilidad e interdicción de arbitrariedad.', 'Artículos 10 a 55 CE: derechos y deberes. Diferencia entre derechos fundamentales, derechos y deberes de ciudadanos y principios rectores.', 'Artículos 166 a 169 CE: reforma constitucional ordinaria y agravada. En supuesto identifica materia afectada, mayoría exigida y referéndum si procede.'])];
    if (t.includes('municipio') || t.includes('provincia') || t.includes('régimen local') || t.includes('órganos colegiados')) return [sec('Desarrollo de régimen local', ['Ley 7/1985, art. 1: el municipio es entidad básica y cauce de participación ciudadana.', 'Ley 7/1985, art. 11: elementos del municipio: territorio, población y organización.', 'Ley 7/1985, arts. 15 a 18: padrón, vecino, residencia habitual y certificaciones.', 'Ley 7/1985, arts. 20 a 23: Alcalde, Pleno, Tenientes de Alcalde y Junta de Gobierno Local cuando proceda.', 'Ley 7/1985, arts. 25 a 27: competencias propias y delegadas. En supuesto comprueba competencia y órgano.'])];
    if (t.includes('hacienda') || t.includes('presupuesto') || t.includes('tribut') || t.includes('recaudación')) return [sec('Desarrollo de hacienda local', ['TRLRHL art. 2: recursos de las Haciendas Locales.', 'Tasas: uso privativo o aprovechamiento especial del dominio público, o prestación de servicios/actividades administrativas.', 'Impuestos locales: IBI, IAE, IVTM, ICIO e IIVTNU. Estudia hecho imponible, sujeto pasivo, devengo y gestión.', 'Presupuesto: créditos, aplicaciones presupuestarias, modificaciones, ejecución del gasto, liquidación y cuenta general.', 'Recaudación: periodo voluntario, periodo ejecutivo, providencia de apremio, recargos y embargo.'])];
    if (t.includes('contrat')) return [sec('Desarrollo de contratación pública', ['Expediente de contratación: necesidad, objeto, órgano de contratación, crédito, pliegos, procedimiento, adjudicación, formalización, ejecución y extinción.', 'Contrato menor: necesidad, objeto, importe, crédito, no fraccionamiento, aprobación del gasto y factura.'])];
    if (t.includes('empleo público') || t.includes('función pública') || t.includes('trebep') || t.includes('personal al servicio')) return [sec('Desarrollo de empleo público', ['TREBEP art. 8: funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.', 'TREBEP arts. 52 a 54: código de conducta, principios éticos y principios de conducta.', 'TREBEP arts. 55 a 62: acceso conforme a igualdad, mérito, capacidad y publicidad.', 'TREBEP arts. 78 a 84: provisión de puestos; no confundir con selección de nuevo ingreso.', 'TREBEP arts. 85 a 98: situaciones administrativas y régimen disciplinario.'])];
    if (t.includes('prevención')) return [sec('Desarrollo de prevención de riesgos laborales', ['Ley 31/1995 art. 14: derecho a protección eficaz.', 'Arts. 15 y 16: principios preventivos y evaluación de riesgos.', 'Arts. 18 y 19: información y formación.', 'Art. 29: obligaciones del trabajador.', 'Arts. 33 a 40: consulta y participación.'])];
    if (t.includes('igualdad')) return [sec('Desarrollo de igualdad', ['LO 3/2007 art. 3: igualdad de trato.', 'Arts. 6 y 7: discriminación directa, indirecta y acoso por razón de sexo.', 'Art. 11: acciones positivas.', 'Art. 15: transversalidad de igualdad en la actuación pública.'])];
    if (t.includes('electrónica') || t.includes('firma') || t.includes('certificado') || t.includes('sede')) return [sec('Desarrollo de administración electrónica', ['Ley 39/2015 art. 9: identificación electrónica.', 'Art. 10: firma electrónica.', 'Art. 12: asistencia en medios electrónicos.', 'Arts. 14 y 16: obligados electrónicos y registro electrónico.', 'Ley 40/2015 arts. 38 a 46: sede electrónica, portal, actuación automatizada, firma y CSV.'])];
    if (t.includes('datos')) return [sec('Desarrollo de protección de datos', ['RGPD art. 4: dato personal y tratamiento.', 'RGPD art. 5: licitud, lealtad, transparencia, minimización, exactitud, limitación, integridad y confidencialidad.', 'RGPD art. 6: bases jurídicas.', 'RGPD arts. 12 a 22: derechos de información, acceso, rectificación, supresión, limitación y oposición.'])];
    if (t.includes('windows') || t.includes('word') || t.includes('excel') || t.includes('libreoffice') || t.includes('ordenador') || t.includes('internet')) return [sec('Desarrollo de informática y ofimática', ['Windows: archivo, carpeta, ruta, extensión, copiar, mover, borrar, papelera, unidad local y unidad de red.', 'Digitalización: orientación, legibilidad, páginas completas, resolución, PDF y nombre normalizado.', 'Word/Writer: estilos, párrafos, tablas, encabezados, pies, plantillas y exportación a PDF.', 'Excel/Calc: celda, rango, fórmula, función, referencias, ordenar, filtrar y proteger datos.', 'Navegador: URL, HTTPS, certificados, descargas, caché, cookies y sede electrónica oficial.'])];
    return [sec('Desarrollo del tema', ['Desarrolla el punto oficial con definición, norma aplicable, órgano competente, requisitos, procedimiento, plazo, documento y consecuencia administrativa.'])];
  }

  function sectionsFor(theme){
    const t = low(`${theme.title} ${theme.area}`);
    if (t.includes('39/2015') && (t.includes('interesados') || t.includes('actividad') || t.includes('plazos'))) return ley39Interesados;
    if (t.includes('39/2015') && (t.includes('iniciación') || t.includes('ordenación') || t.includes('instrucción') || t.includes('finalización') || t.includes('ejecución') || t.includes('simplificada'))) return ley39Procedimiento;
    if (t.includes('revisión') || t.includes('recursos administrativos')) return ley39Revision;
    return genericSections(theme);
  }

  function enhanceTheme(theme){
    theme.sections = sectionsFor(theme);
    theme.tree = '';
    theme.reviewTable = [['Para examen','Qué debes escribir'], ['Base legal','Cita ley y artículo concreto cuando proceda.'], ['Definición','Define la figura con precisión.'], ['Procedimiento','Indica órgano, trámite, plazo y documento resultante.'], ['Consecuencia','Explica subsanación, inadmisión, silencio, caducidad, recurso, archivo o efecto que corresponda.']];
    return theme;
  }

  function makeQuestions(theme){
    const rows = theme.reviewTable.slice(1);
    return Array.from({length:12}, (_,i)=>{
      const r = rows[i % rows.length];
      const correct = `${r[0]}: ${r[1]}`;
      const opts = [correct, 'Responder solo con una descripción general.', 'Copiar el título del tema sin explicar nada.', 'Contestar sin norma ni consecuencia administrativa.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0,off));
      return { id:`${theme.id}-q${i+1}`, text:`Tema ${theme.number}. ¿Qué enfoque es correcto?`, options: sh.map((text,j)=>({letter:'ABCD'[j], text})), answer:'ABCD'[sh.indexOf(correct)], justification:'La respuesta fuerte cita base legal, define, concreta procedimiento y termina con consecuencia administrativa.' };
    });
  }

  function makeCases(prefix){
    const base = [['Solicitud incompleta','Ley 39/2015 art. 68: requerimiento de subsanación de diez días y posible desistimiento.'], ['Registro electrónico','Ley 39/2015 arts. 16 y 31: asiento, recibo, fecha/hora y cómputo.'], ['Notificación','Ley 39/2015 arts. 40 a 46: contenido, medio, intentos y efectos.'], ['Recurso administrativo','Ley 39/2015 arts. 112 a 124: acto, vía, plazo, órgano y silencio.'], ['Silencio administrativo','Ley 39/2015 arts. 21 a 25: obligación de resolver, plazo y efecto del silencio.'], ['Contrato menor','LCSP: necesidad, objeto, crédito, no fraccionamiento, aprobación y factura.'], ['Tributo local','TRLRHL: hecho imponible, sujeto pasivo, devengo, liquidación y recurso.'], ['Padrón municipal','Ley 7/1985 arts. 15 a 18: residencia, vecino, inscripción y certificación.'], ['Certificado electrónico','Ley 39/2015 arts. 9 a 12: identificación, firma y asistencia.'], ['Archivo','Expediente electrónico: ordenación, integridad, conservación y acceso.']];
    return base.map((c,i)=>({id:`${prefix}-sp${i+1}`, title:c[0], statement:`Caso práctico sobre ${c[0].toLowerCase()}. Indica norma, artículo, órgano, trámite, plazo, documento y consecuencia.`, guidance:`Respuesta orientativa: ${c[1]} Aplica la regla al caso y termina con una conclusión.`}));
  }

  function makeSimulacros(prefix, map){
    const all = Object.values(map).flat();
    return [0,17,43].map((start,s)=>({id:`${prefix}-sim${s+1}`, title:`Simulacro transversal ${s+1}`, questions:Array.from({length:50},(_,i)=>({...all[(start+i*7)%all.length], id:`${prefix}-sim${s+1}-q${i+1}`}))}));
  }

  data.oposiciones.forEach(ope=>{
    ope.themes = ope.themes.map(enhanceTheme);
    ope.themeTests = Object.fromEntries(ope.themes.map(t=>[t.id, makeQuestions(t)]));
    ope.practicalCases = makeCases(ope.id);
    ope.simulacros = makeSimulacros(ope.id, ope.themeTests);
    if (!ope.status.includes('desarrollo artículo')) ope.status = `${ope.status} Temario ampliado con desarrollo artículo a artículo cuando procede.`;
  });

  if (typeof themeDetail === 'function') {
    themeDetail = function(t) {
      const sections = t.sections.map(s=>`<section class="section"><h3>${escapeHtml(s.heading)}</h3>${s.paragraphs.map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('');
      const table = t.reviewTable && t.reviewTable.length > 1 ? `<h3>Cuadro para test y supuesto práctico</h3>${renderTable(t.reviewTable)}` : '';
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button><article class="card"><div class="pill-row"><span class="badge area">${escapeHtml(t.area)}</span>${t.commonPotential?'<span class="badge common">común/reutilizable</span>':''}</div><h2>Tema ${t.number}. ${escapeHtml(t.title)}</h2>${sections}${table}</article>`;
    };
  }

  if (typeof renderAll === 'function') renderAll();
})();
