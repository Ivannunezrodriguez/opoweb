(() => {
  const carranque = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  if (!carranque) return;

  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];
  const additions = {
    5: [
      ['¿Qué dictamen exige la revisión de oficio de un acto nulo?', 'Dictamen favorable del Consejo de Estado u órgano consultivo autonómico equivalente.', ['Informe favorable del alcalde exclusivamente.', 'Autorización del interesado.', 'Sentencia penal previa.'], 'Artículo 106.1 de la Ley 39/2015.'],
      ['¿En qué plazo puede declararse lesivo un acto anulable favorable?', 'Dentro de los cuatro años siguientes a que se dictó.', ['En cualquier momento.', 'En un mes.', 'En diez años.'], 'Artículo 107.2 de la Ley 39/2015.'],
      ['¿Qué trámite debe darse antes de declarar la lesividad?', 'Audiencia a quienes aparezcan como interesados.', ['Referéndum municipal.', 'Autorización judicial previa.', 'Información pública obligatoria de seis meses.'], 'Artículo 107.2 de la Ley 39/2015.'],
      ['¿Qué ocurre si el procedimiento de lesividad no termina en seis meses?', 'Se produce su caducidad.', ['Se entiende estimado.', 'El acto queda anulado automáticamente.', 'Se transforma en recurso de alzada.'], 'Artículo 107.3 de la Ley 39/2015.'],
      ['¿Puede la Administración rectificar un error material, de hecho o aritmético?', 'Sí, en cualquier momento, de oficio o a instancia del interesado.', ['Solo dentro de un mes.', 'Únicamente por sentencia.', 'No, nunca.'], 'Artículo 109.2 de la Ley 39/2015.'],
      ['¿Puede revocarse un acto desfavorable mientras no haya prescrito la acción?', 'Sí, si la revocación no vulnera igualdad, interés público ni el ordenamiento.', ['Sí, sin límite alguno.', 'No, ningún acto desfavorable puede revocarse.', 'Solo mediante recurso judicial.'], 'Artículo 109.1 de la Ley 39/2015.'],
      ['¿Qué límites generales condicionan las facultades de revisión?', 'Equidad, buena fe, derechos de los particulares y leyes.', ['Solo la voluntad del órgano.', 'La ausencia de expediente.', 'El interés económico del recurrente.'], 'Artículo 110 de la Ley 39/2015.'],
      ['¿Qué actos de trámite pueden recurrirse separadamente?', 'Los que deciden el fondo, impiden continuar, causan indefensión o perjuicio irreparable.', ['Todos los actos de trámite.', 'Ningún acto de trámite.', 'Solo los favorables.'], 'Artículo 112.1 de la Ley 39/2015.'],
      ['¿Cabe recurso administrativo directo contra una disposición general?', 'No.', ['Sí, recurso de alzada.', 'Sí, reposición obligatoria.', 'Sí, extraordinario de revisión.'], 'Artículo 112.3 de la Ley 39/2015.'],
      ['¿Suspende por regla general la interposición de un recurso la ejecución del acto?', 'No, salvo que una norma disponga lo contrario o se acuerde la suspensión.', ['Sí, siempre.', 'Solo si es recurso de alzada.', 'Solo si el acto es favorable.'], 'Artículo 117.1 de la Ley 39/2015.'],
      ['¿Qué plazo tiene la Administración para resolver un recurso de alzada?', 'Tres meses.', ['Un mes.', 'Seis meses.', 'Un año.'], 'Artículo 122.2 de la Ley 39/2015.'],
      ['¿Cabe otro recurso administrativo ordinario contra la resolución de alzada?', 'No, salvo el extraordinario de revisión cuando proceda.', ['Sí, una nueva alzada.', 'Sí, reposición obligatoria.', 'Sí, recurso de súplica.'], 'Artículo 122.3 de la Ley 39/2015.'],
      ['¿Qué plazo tiene la Administración para resolver la reposición?', 'Un mes.', ['Tres meses.', 'Seis meses.', 'Diez días.'], 'Artículo 124.2 de la Ley 39/2015.'],
      ['¿Puede interponerse otra reposición contra la resolución de reposición?', 'No.', ['Sí, ilimitadamente.', 'Sí, dentro de tres meses.', 'Solo si la resolución es expresa.'], 'Artículo 124.3 de la Ley 39/2015.'],
      ['¿Cuál es el plazo del recurso extraordinario por error de hecho?', 'Cuatro años desde la notificación de la resolución impugnada.', ['Tres meses.', 'Un mes.', 'Cinco años desde el expediente.'], 'Artículo 125.2 de la Ley 39/2015.']
    ],
    9: [
      ['¿Qué consideración tiene el municipio en la organización territorial del Estado?', 'Es la entidad local básica y cauce inmediato de participación ciudadana.', ['Es un órgano de la provincia sin personalidad.', 'Es una división judicial exclusivamente.', 'Es una entidad privada.'], 'Artículo 1.1 de la Ley 7/1985.'],
      ['¿Tiene el municipio personalidad jurídica y plena capacidad?', 'Sí.', ['No.', 'Solo los de gran población.', 'Solo si pertenecen a una mancomunidad.'], 'Artículo 11.1 de la Ley 7/1985.'],
      ['¿Cuáles son los elementos del municipio?', 'Territorio, población y organización.', ['Alcalde, presupuesto y tributos.', 'Provincia, comarca y padrón.', 'Pleno, Junta de Gobierno y Diputación.'], 'Artículo 11.2 de la Ley 7/1985.'],
      ['¿Qué es el término municipal?', 'El territorio en el que el Ayuntamiento ejerce sus competencias.', ['La lista de vecinos.', 'La duración del mandato del alcalde.', 'La sede de la Diputación.'], 'Artículo 12.1 de la Ley 7/1985.'],
      ['¿Puede la alteración de términos municipales modificar los límites provinciales?', 'No.', ['Sí, por acuerdo del alcalde.', 'Sí, mediante ordenanza.', 'Solo en municipios pequeños.'], 'Artículo 13.1 de la Ley 7/1985.'],
      ['¿Dónde debe inscribirse quien vive habitualmente en España?', 'En el padrón del municipio donde reside habitualmente.', ['En el municipio de nacimiento.', 'En la capital de provincia.', 'En cualquier municipio elegido libremente.'], 'Artículo 15 de la Ley 7/1985.'],
      ['Si una persona vive en varios municipios, ¿dónde debe empadronarse?', 'En aquel en el que habite durante más tiempo al año.', ['En todos simultáneamente.', 'Solo en el de mayor población.', 'En el que cobre menos tributos.'], 'Artículo 15 de la Ley 7/1985.'],
      ['¿Qué naturaleza tiene el padrón municipal?', 'Es el registro administrativo donde constan los vecinos del municipio.', ['Es un censo tributario estatal.', 'Es un registro mercantil.', 'Es un archivo privado.'], 'Artículo 16.1 de la Ley 7/1985.'],
      ['¿Qué prueban los datos del padrón?', 'La residencia y el domicilio habitual.', ['La propiedad de la vivienda.', 'La nacionalidad española.', 'La situación laboral.'], 'Artículo 16.1 de la Ley 7/1985.'],
      ['¿Cuándo se adquiere la condición de vecino?', 'Desde la inscripción en el padrón.', ['Al nacer.', 'Al pagar un tributo local.', 'Tras cinco años de residencia.'], 'Artículo 15 de la Ley 7/1985.'],
      ['¿Acredita el empadronamiento de un extranjero su residencia legal en España?', 'No.', ['Sí, siempre.', 'Solo durante dos años.', 'Sí, si alquila una vivienda.'], 'Artículo 18.2 de la Ley 7/1985.'],
      ['¿Cuál es un derecho de los vecinos?', 'Utilizar los servicios públicos municipales conforme a su naturaleza.', ['Dictar ordenanzas individualmente.', 'Anular acuerdos plenarios sin recurso.', 'Elegir al presidente de la Diputación directamente.'], 'Artículo 18.1 de la Ley 7/1985.'],
      ['¿Cuál es un deber de los vecinos?', 'Contribuir mediante las prestaciones económicas y personales legalmente previstas.', ['Aprobar el presupuesto.', 'Ejercer de concejal obligatoriamente.', 'Pertenecer a una asociación.'], 'Artículo 18.1 de la Ley 7/1985.'],
      ['¿Qué servicios debe prestar todo municipio?', 'Alumbrado, cementerio, residuos, limpieza, agua, alcantarillado, acceso y pavimentación.', ['Transporte urbano y universidad.', 'Parque de bomberos y metro.', 'Aeropuerto y hospital universitario.'], 'Artículo 26.1.a de la Ley 7/1985.'],
      ['¿Qué entidades pueden constituir los municipios para ejecutar en común obras y servicios?', 'Mancomunidades de municipios.', ['Ministerios.', 'Tribunales superiores.', 'Comunidades de propietarios.'], 'Artículo 44 de la Ley 7/1985.']
    ]
  };

  const buildQuestion = (themeNumber, row, index) => {
    const [text, correct, wrong, justification] = row;
    const raw = [correct, ...wrong];
    const shift = (themeNumber + index) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `carranque-v69-fix-t${themeNumber}-q${index + 1}`,
      text,
      options: ordered.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })),
      answer: letters[ordered.indexOf(correct)],
      justification,
      source: justification,
      difficulty: ['baja', 'media', 'alta'][index % 3],
      auditReal: true,
      auditTheme: themeNumber
    };
  };

  Object.entries(additions).forEach(([numberText, rows]) => {
    const number = Number(numberText);
    const theme = carranque.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    const bank = carranque.themeTests[theme.id] || [];
    const seen = new Set(bank.map(question => norm(question.text)));
    rows.forEach((row, index) => {
      if (bank.length >= 30 || seen.has(norm(row[0]))) return;
      bank.push(buildQuestion(number, row, bank.length + index));
      seen.add(norm(row[0]));
    });
    carranque.themeTests[theme.id] = bank;
  });

  const valid = question => Boolean(question?.text && question?.options?.length === 4 && question.options.some(option => option.letter === question.answer) && (question.justification || question.source));
  const themes = carranque.themes.map(theme => ({ number: Number(theme.number), count: (carranque.themeTests[theme.id] || []).filter(valid).length, target: 30 }));
  carranque.testAudit = {
    ...(carranque.testAudit || {}),
    targetThemes: themes.filter(item => item.count >= 30).length,
    totalReal: themes.reduce((sum, item) => sum + item.count, 0),
    themes
  };
  window.OPOWEB_CARRANQUE_V69 = {
    ...(window.OPOWEB_CARRANQUE_V69 || {}),
    targetThemes: carranque.testAudit.targetThemes,
    totalReal: carranque.testAudit.totalReal,
    completedThemes: themes.filter(item => item.count >= 30).map(item => item.number),
    supplementedThemes: [5, 9]
  };
})();
