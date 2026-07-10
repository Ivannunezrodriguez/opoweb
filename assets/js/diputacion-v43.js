(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.43.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    5: {
      source: 'Ley 39/2015, Título Preliminar, Títulos I y II',
      blocks: [
        ['Ámbito y capacidad', [
          'Artículos 1 y 2. La Ley 39/2015 regula los requisitos de validez y eficacia de los actos, el procedimiento administrativo común y los principios aplicables a la iniciativa legislativa y la potestad reglamentaria. Se aplica al sector público en los términos de su artículo 2.',
          'Artículo 3. Tienen capacidad de obrar ante las Administraciones las personas que la ostenten conforme al Derecho civil, los menores para el ejercicio y defensa de derechos e intereses cuya actuación permita el ordenamiento sin asistencia, y los grupos, uniones y patrimonios independientes cuando una ley lo declare expresamente.'
        ]],
        ['Interesados y representación', [
          'Artículo 4. Son interesados quienes promueven el procedimiento como titulares de derechos o intereses legítimos, quienes puedan resultar afectados por la decisión y quienes tengan intereses legítimos afectados y comparezcan antes de la resolución definitiva.',
          'Artículo 5. La representación debe acreditarse para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir y renunciar. Para los actos de mero trámite se presume.',
          'Artículo 6. Cada Administración dispone de un registro electrónico general de apoderamientos. El apoderamiento apud acta puede otorgarse por comparecencia electrónica o personal.'
        ]],
        ['Identificación, firma y asistencia', [
          'Artículos 9 y 10. Identificación y firma son figuras distintas. Con carácter general basta la identificación; la firma se exige para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir y renunciar.',
          'Artículo 12. Las Administraciones deben garantizar asistencia en el uso de medios electrónicos a quienes no estén obligados a relacionarse electrónicamente y la soliciten.'
        ]],
        ['Relación electrónica, registros y documentos', [
          'Artículo 14. Las personas físicas pueden elegir canal salvo obligación. Están obligadas, entre otras, las personas jurídicas, entidades sin personalidad, determinados profesionales colegiados, representantes de obligados y empleados públicos en actuaciones por razón de su condición.',
          'Artículo 16. Cada Administración dispone de un registro electrónico general. Los documentos pueden presentarse también en registros electrónicos de otras Administraciones, oficinas de Correos, representaciones diplomáticas u oficinas consulares y oficinas de asistencia en materia de registros.',
          'Artículos 27 y 28. Las copias auténticas tienen la misma validez y eficacia que los originales. El interesado no debe aportar documentos que ya obren en poder de la Administración o hayan sido elaborados por otra Administración, con los límites legales.'
        ]],
        ['Obligación de resolver y silencio', [
          'Artículo 21. La Administración debe dictar resolución expresa y notificarla cualquiera que sea la forma de iniciación, salvo las excepciones legales.',
          'Cuando la norma reguladora no fija plazo máximo, este es de tres meses. El plazo fijado reglamentariamente no puede exceder de seis meses salvo que una ley o el Derecho de la Unión Europea establezcan otro mayor.',
          'Artículo 24. En procedimientos iniciados a solicitud, el silencio es estimatorio como regla general, con excepciones legales. Es desestimatorio, entre otros, en impugnación de actos y disposiciones y en revisión de oficio iniciada a solicitud.'
        ]],
        ['Términos y plazos', [
          'Artículo 30. Los plazos por horas se entienden hábiles salvo norma en contrario. Los señalados por días son hábiles salvo que una ley o el Derecho de la Unión Europea dispongan días naturales. Se excluyen sábados, domingos y festivos.',
          'Artículo 31. El registro electrónico permite presentar documentos todos los días del año durante las veinticuatro horas. A efectos del cumplimiento de plazos por los interesados, lo presentado en inhábil se entiende realizado en la primera hora del primer día hábil siguiente, salvo norma que permita recepción en inhábil.',
          'Artículo 32. La ampliación no puede exceder de la mitad del plazo y debe acordarse antes de su vencimiento. Artículo 33. La urgencia reduce a la mitad los plazos, salvo los relativos a solicitudes y recursos.'
        ]]
      ],
      hot: ['Interesado no equivale a cualquier persona afectada de forma remota.', 'Representación acreditada para actos relevantes; mera tramitación, presunción.', 'Identificación y firma no son sinónimos.', 'Tres meses si no existe plazo específico.', 'Silencio estimatorio como regla, con excepciones.', 'Sábados inhábiles en cómputo por días.', 'Ampliación: máximo la mitad y antes del vencimiento.', 'Urgencia: no reduce solicitudes ni recursos.'],
      recall: ['¿Qué actuaciones exigen acreditar representación?', '¿Quién está obligado a relacionarse electrónicamente?', '¿Qué diferencias hay entre ampliación y urgencia?']
    },
    6: {
      source: 'Ley 39/2015, Título IV',
      blocks: [
        ['Derechos del interesado y expediente', [
          'Artículo 53. El interesado puede conocer el estado de tramitación, el sentido del silencio, el órgano competente, acceder y obtener copia del expediente, formular alegaciones y aportar documentos.',
          'Artículo 70. El expediente administrativo es el conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución, junto con las diligencias encaminadas a ejecutarla.'
        ]],
        ['Iniciación y medidas provisionales', [
          'Artículo 54. El procedimiento puede iniciarse de oficio o a solicitud. De oficio se inicia por propia iniciativa, orden superior, petición razonada o denuncia.',
          'Artículo 56. El órgano competente puede adoptar medidas provisionales motivadas, proporcionadas y necesarias para asegurar la eficacia de la resolución. Las previas a la iniciación deben confirmarse, modificarse o levantarse en el acuerdo de inicio dentro de quince días.',
          'Artículo 62. La denuncia no convierte por sí sola al denunciante en interesado.'
        ]],
        ['Solicitud, subsanación y declaraciones', [
          'Artículo 66. La solicitud debe identificar al interesado y representante, hechos, razones y petición, lugar y fecha, firma o acreditación de voluntad, medio de notificación y órgano destinatario.',
          'Artículo 68. La subsanación se concede por diez días; puede ampliarse prudencialmente hasta cinco, salvo procedimientos selectivos o de concurrencia competitiva.',
          'Artículo 69. La declaración responsable permite iniciar una actividad o ejercer un derecho desde su presentación, sin perjuicio de comprobación. La inexactitud esencial puede impedir continuar y producir otras consecuencias legales.'
        ]],
        ['Ordenación e instrucción', [
          'Artículo 71. El procedimiento se impulsa de oficio y por medios electrónicos, respetando transparencia y publicidad.',
          'Artículo 73. Los trámites que deba cumplir el interesado se realizan, con carácter general, en diez días desde la notificación, salvo plazo distinto.',
          'Artículos 75 a 83. La instrucción comprende alegaciones, prueba, informes, audiencia e información pública. La prueba se practica durante un período entre diez y treinta días; la audiencia se concede entre diez y quince; la información pública no puede ser inferior a veinte días.'
        ]],
        ['Terminación', [
          'Artículo 84. El procedimiento termina por resolución, desistimiento, renuncia cuando no esté prohibida, caducidad, imposibilidad material sobrevenida o terminación convencional.',
          'Artículo 88. La resolución decide todas las cuestiones planteadas y las derivadas del procedimiento. Debe ser congruente y no puede agravar la situación inicial del solicitante.',
          'Artículo 95. En procedimientos iniciados a solicitud, la paralización imputable al interesado puede producir caducidad tras advertencia y transcurso de tres meses.'
        ]],
        ['Tramitación simplificada y ejecución', [
          'Artículo 96. Puede acordarse tramitación simplificada por interés público o falta de complejidad. Debe resolverse en treinta días desde la notificación del acuerdo, salvo que reste menos para la tramitación ordinaria.',
          'Artículos 97 a 105. La ejecución forzosa requiere título habilitante y puede realizarse por apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva o compulsión sobre las personas, respetando proporcionalidad.'
        ]]
      ],
      hot: ['Denuncia no implica condición de interesado.', 'Subsanación: diez días; ampliación de hasta cinco, no en selectivos o concurrencia.', 'Prueba: diez a treinta días.', 'Audiencia: diez a quince días.', 'Información pública: mínimo veinte días.', 'Simplificado: treinta días.', 'Caducidad por paralización del solicitante: advertencia y tres meses.', 'La resolución debe ser congruente.'],
      recall: ['¿Qué diferencia hay entre denuncia e iniciación de oficio?', '¿Cuáles son los plazos de prueba, audiencia e información pública?', '¿Qué medios de ejecución forzosa existen?']
    },
    7: {
      source: 'Ley 39/2015, Título III',
      blocks: [
        ['Producción, contenido y motivación', [
          'Artículo 34. Los actos se producen por el órgano competente, ajustándose al procedimiento y al ordenamiento. Su contenido debe ser determinado y adecuado a sus fines.',
          'Artículo 35. Deben motivarse, entre otros, los actos que limiten derechos o intereses, resuelvan revisión o recursos, se separen del criterio previo, suspendan actos, apliquen urgencia o ampliación, rechacen pruebas o terminen por imposibilidad material.',
          'Artículo 36. Los actos se producen por escrito a través de medios electrónicos, salvo que su naturaleza exija otra forma.'
        ]],
        ['Eficacia y ejecutividad', [
          'Artículo 37. Una resolución particular no puede vulnerar una disposición general, aunque proceda de órgano igual o superior al que aprobó esta.',
          'Artículo 38. Los actos son ejecutivos con arreglo a la Ley.',
          'Artículo 39. Se presumen válidos y producen efectos desde que se dictan, salvo que se disponga otra cosa. La eficacia puede demorarse por notificación, publicación, aprobación superior o retroactividad legalmente admitida.'
        ]],
        ['Notificación', [
          'Artículo 40. Toda notificación debe cursarse dentro de diez días desde que se dicta el acto y contener su texto íntegro, indicación de si pone fin a la vía administrativa, recursos, órgano y plazo.',
          'Artículo 41. Las notificaciones se practican preferentemente por medios electrónicos y obligatoriamente cuando el interesado esté obligado.',
          'Artículo 43. La notificación electrónica se entiende practicada al acceder al contenido. Si es obligatoria o fue elegida, se entiende rechazada al transcurrir diez días naturales desde su puesta a disposición sin acceso.',
          'Artículo 44. Si los interesados son desconocidos, se ignora el lugar de notificación o esta no puede practicarse, se realiza mediante anuncio en el BOE.'
        ]],
        ['Publicación', [
          'Artículo 45. La publicación sustituye a la notificación cuando el acto tiene una pluralidad indeterminada de destinatarios o en procedimientos selectivos y de concurrencia competitiva, entre otros supuestos.',
          'Artículo 46. Si la publicación puede lesionar derechos o intereses legítimos, se publica una somera indicación del contenido y del lugar donde comparecer para conocerlo íntegramente.'
        ]],
        ['Nulidad y anulabilidad', [
          'Artículo 47. Son nulos de pleno derecho los actos en los supuestos tasados, como lesión de derechos susceptibles de amparo, incompetencia manifiesta por materia o territorio, contenido imposible o prescindir total y absolutamente del procedimiento.',
          'Artículo 48. Son anulables los actos que incurran en cualquier infracción del ordenamiento, incluida desviación de poder, salvo que el defecto sea causa de nulidad.',
          'Artículo 49. La nulidad o anulabilidad de un acto no implica la de los sucesivos independientes ni la de las partes independientes.'
        ]],
        ['Conversión, conservación y convalidación', [
          'Artículo 50. Los actos nulos o anulables que contengan elementos constitutivos de otro acto distinto producen los efectos de este.',
          'Artículo 51. El órgano conserva los actos y trámites cuyo contenido habría sido igual sin la infracción.',
          'Artículo 52. La Administración puede convalidar actos anulables subsanando sus vicios. La convalidación produce efectos desde su fecha, sin perjuicio de la posible retroactividad del artículo 39.3.'
        ]]
      ],
      hot: ['Motivación obligatoria en supuestos tasados.', 'Notificación dentro de diez días.', 'Rechazo electrónico: diez días naturales.', 'BOE para desconocidos o notificación imposible.', 'Nulidad: causas tasadas; anulabilidad: regla general.', 'Convalidación solo de actos anulables.', 'Conservación evita repetir trámites no afectados.'],
      recall: ['¿Qué debe contener una notificación?', '¿Cuándo se entiende rechazada una notificación electrónica?', '¿Qué diferencia hay entre nulidad, anulabilidad y convalidación?']
    },
    8: {
      source: 'Ley 39/2015, Título V',
      blocks: [
        ['Revisión de oficio', [
          'Artículo 106. Las Administraciones pueden declarar de oficio la nulidad de actos firmes y disposiciones nulas, previo dictamen favorable del Consejo de Estado u órgano consultivo autonómico equivalente.',
          'Artículo 107. Los actos favorables anulables se impugnan mediante declaración de lesividad y posterior recurso contencioso-administrativo. La lesividad debe declararse dentro de cuatro años y el procedimiento caduca a los seis meses.',
          'Artículo 109. La Administración puede revocar actos desfavorables mientras no haya prescrito la acción y rectificar en cualquier momento errores materiales, de hecho o aritméticos.'
        ]],
        ['Objeto y reglas comunes de los recursos', [
          'Artículo 112. Son recurribles las resoluciones y determinados actos de trámite cualificados. Contra disposiciones administrativas de carácter general no cabe recurso en vía administrativa.',
          'Artículo 115. El error en la calificación del recurso no impide su tramitación si se deduce su verdadero carácter.',
          'Artículo 116. Son causas de inadmisión la incompetencia cuando el competente pertenece a otra Administración, falta de legitimación, acto no recurrible, extemporaneidad o carencia manifiesta de fundamento.'
        ]],
        ['Suspensión, audiencia y resolución', [
          'Artículo 117. La interposición no suspende la ejecución salvo que una norma disponga lo contrario o el órgano acuerde suspensión ponderando perjuicios e interés público. Si transcurre un mes sin resolución expresa sobre la solicitud de suspensión, esta se entiende suspendida.',
          'Artículo 118. Si se tienen en cuenta hechos o documentos nuevos, se da audiencia entre diez y quince días.',
          'Artículo 119. La resolución estima, desestima o inadmite y debe decidir todas las cuestiones de forma congruente, sin empeorar la situación inicial del recurrente.'
        ]],
        ['Recurso de alzada', [
          'Artículos 121 y 122. Procede contra actos que no ponen fin a la vía administrativa. Puede interponerse ante el órgano que dictó el acto o el superior jerárquico.',
          'El plazo es de un mes si el acto es expreso. Si no lo es, puede interponerse en cualquier momento desde el día siguiente a aquel en que se produzcan los efectos del silencio.',
          'El plazo máximo para resolver y notificar es de tres meses. El silencio es desestimatorio, salvo la excepción del segundo silencio prevista legalmente.'
        ]],
        ['Reposición', [
          'Artículos 123 y 124. Es potestativa y procede contra actos que ponen fin a la vía administrativa. Puede interponerse ante el mismo órgano que dictó el acto o acudir directamente al contencioso.',
          'El plazo es de un mes si el acto es expreso y, si no lo es, puede interponerse en cualquier momento. El plazo máximo de resolución es de un mes.'
        ]],
        ['Extraordinario de revisión', [
          'Artículos 125 y 126. Procede contra actos firmes por causas tasadas: error de hecho que resulte de los documentos del expediente, aparición de documentos esenciales, falsedad declarada judicialmente o resolución dictada por conducta punible declarada en sentencia firme.',
          'Por error de hecho, el plazo es de cuatro años desde la notificación. En los demás casos, tres meses desde el conocimiento de documentos o firmeza de la sentencia. El plazo de resolución es de tres meses; transcurrido sin resolución, se entiende desestimado.'
        ]]
      ],
      hot: ['Revisión de nulidad: dictamen favorable.', 'Lesividad: cuatro años para declararla y seis meses de caducidad.', 'No hay recurso administrativo contra disposiciones generales.', 'Recurso no suspende por regla general.', 'Alzada: un mes / tres meses.', 'Reposición: potestativa y resolución en un mes.', 'Extraordinario: causas tasadas y acto firme.'],
      recall: ['¿Cuándo procede lesividad y qué plazos tiene?', '¿Qué actos se recurren en alzada y cuáles en reposición?', '¿Cuáles son las cuatro causas del extraordinario de revisión?']
    },
    9: {
      source: 'Ley 39/2015 y Ley 40/2015, funcionamiento electrónico',
      blocks: [
        ['Derechos, identificación y firma', [
          'Ley 39/2015, artículos 9 a 12. La identificación permite acreditar identidad. La firma acredita autenticidad de la voluntad, integridad e inalterabilidad. Como regla general basta identificación y la firma se exige para actuaciones tasadas.',
          'Las Administraciones deben asistir en el uso de medios electrónicos a los no obligados que lo soliciten y pueden habilitar funcionarios para identificación o firma con consentimiento expreso del interesado.'
        ]],
        ['Registro y expediente electrónico', [
          'Ley 39/2015, artículos 16, 26 y 70. El registro electrónico general deja constancia de fecha, hora, número de entrada, naturaleza, interesado, órgano remitente y destinatario. Los documentos administrativos se emiten por escrito y electrónicamente salvo excepción.',
          'El expediente electrónico es el conjunto ordenado de documentos y actuaciones en formato electrónico, con índice numerado cuando se remite.'
        ]],
        ['Notificaciones electrónicas', [
          'Ley 39/2015, artículos 41 a 43. Se practican mediante comparecencia en sede, dirección electrónica habilitada única o ambos sistemas. Se envía aviso al dispositivo o correo comunicado, pero la falta de aviso no invalida la notificación.',
          'La notificación se entiende practicada al acceder. Cuando es obligatoria o elegida, se entiende rechazada tras diez días naturales sin acceso.'
        ]],
        ['Sede y portal', [
          'Ley 40/2015, artículo 38. La sede electrónica es la dirección electrónica cuya titularidad corresponde a una Administración u organismo y exige responsabilidad sobre integridad, veracidad y actualización de información y servicios.',
          'Artículo 39. El portal de internet es el punto de acceso a la información publicada y, en su caso, a la sede. Portal y sede no son equivalentes.'
        ]],
        ['Identificación y actuación automatizada', [
          'Ley 40/2015, artículo 40. Las Administraciones pueden identificarse mediante sello electrónico basado en certificado cualificado.',
          'Artículo 41. La actuación automatizada se realiza íntegramente por medios electrónicos sin intervención directa de empleado público. Deben determinarse órganos responsables de especificaciones, mantenimiento, supervisión, auditoría y resolución de impugnaciones.',
          'Artículo 42. La firma de la actuación automatizada puede realizarse mediante sello electrónico o código seguro de verificación vinculado a la Administración.'
        ]],
        ['Firma del personal, interoperabilidad y archivo', [
          'Artículo 43. La actuación electrónica de un órgano o empleado se realiza mediante firma electrónica del titular o empleado público, en los términos legales.',
          'Artículos 44 a 46. Los sistemas deben favorecer interoperabilidad y verificación. Los documentos utilizados en actuaciones administrativas se almacenan electrónicamente salvo imposibilidad, garantizando identidad, integridad, conservación y acceso.'
        ]]
      ],
      hot: ['Identificación y firma son distintas.', 'Falta de aviso no invalida la notificación.', 'Sede y portal no son lo mismo.', 'Actuación automatizada: sin intervención directa de empleado.', 'Debe existir órgano responsable de impugnación.', 'Sello y CSV son sistemas posibles.', 'Archivo electrónico con integridad, conservación y acceso.'],
      recall: ['¿Qué diferencia hay entre sede y portal?', '¿Qué efectos tiene no acceder a una notificación electrónica?', '¿Qué órganos deben identificarse en una actuación automatizada?']
    }
  };

  const rawQuestions = {
    5: [
      ['¿Para qué actuaciones debe acreditarse la representación?', 'Para solicitudes, declaraciones responsables o comunicaciones, recursos, desistimiento y renuncia.', ['Solo para actos de mero trámite.', 'Únicamente para recibir notificaciones.', 'Solo cuando el representante sea abogado.'], 'Artículo 5 de la Ley 39/2015.'],
      ['¿Qué ocurre con la representación en los actos de mero trámite?', 'Se presume.', ['Debe acreditarse siempre mediante escritura pública.', 'No se admite representación.', 'Solo puede acreditarse ante notario.'], 'Artículo 5.3 de la Ley 39/2015.'],
      ['¿Quién es interesado si puede resultar afectado por la resolución?', 'Quien tenga derechos que puedan resultar afectados por la decisión.', ['Cualquier ciudadano aunque no tenga conexión jurídica.', 'Solo quien inició el procedimiento.', 'Exclusivamente las Administraciones Públicas.'], 'Artículo 4 de la Ley 39/2015.'],
      ['¿Cuál de estos sujetos está obligado a relacionarse electrónicamente?', 'Una sociedad limitada.', ['Toda persona física sin excepción.', 'Un menor de edad en cualquier trámite.', 'Una persona física jubilada por el mero hecho de serlo.'], 'Artículo 14.2 de la Ley 39/2015.'],
      ['¿Qué regla general rige para una persona física no obligada?', 'Puede elegir y modificar el medio de comunicación.', ['Debe usar siempre medios electrónicos.', 'Debe acudir siempre presencialmente.', 'Solo puede cambiar de canal con autorización judicial.'], 'Artículo 14.1 de la Ley 39/2015.'],
      ['¿Qué plazo máximo se aplica si la norma no fija ninguno?', 'Tres meses.', ['Diez días.', 'Seis meses.', 'Un año.'], 'Artículo 21.3 de la Ley 39/2015.'],
      ['¿Cuál es la regla general del silencio en procedimientos iniciados a solicitud?', 'Estimatorio, salvo excepción legal.', ['Siempre desestimatorio.', 'Produce caducidad automática.', 'No produce efecto alguno.'], 'Artículo 24.1 de la Ley 39/2015.'],
      ['¿Qué sentido tiene el silencio en un recurso administrativo?', 'Desestimatorio, salvo la excepción legal del segundo silencio.', ['Estimatorio en todo caso.', 'Caducidad.', 'Suspensión indefinida.'], 'Artículo 24.1 de la Ley 39/2015.'],
      ['¿Qué días son inhábiles en un plazo señalado por días hábiles?', 'Sábados, domingos y festivos.', ['Solo domingos.', 'Sábados y domingos, pero nunca festivos.', 'Todos los días de agosto.'], 'Artículo 30.2 de la Ley 39/2015.'],
      ['¿Cómo se computa un plazo por meses?', 'De fecha a fecha.', ['Solo por días hábiles.', 'Desde el mismo día de la notificación.', 'Siempre hasta el último día natural del mes.'], 'Artículo 30.4 de la Ley 39/2015.'],
      ['¿Cuándo puede acordarse una ampliación de plazo?', 'Antes de que venza y sin exceder de la mitad.', ['Después del vencimiento si lo pide el interesado.', 'Por tiempo ilimitado.', 'Solo por decisión judicial.'], 'Artículo 32 de la Ley 39/2015.'],
      ['¿Qué plazos no se reducen por tramitación de urgencia?', 'Los de presentación de solicitudes y recursos.', ['Los de prueba y audiencia.', 'Los de emisión de informes.', 'Los de ejecución.'], 'Artículo 33 de la Ley 39/2015.'],
      ['¿Cuándo se entiende presentado en registro electrónico un documento remitido en inhábil?', 'En la primera hora del primer día hábil siguiente, para el cumplimiento del plazo del interesado.', ['A la última hora del día hábil anterior.', 'Se rechaza automáticamente.', 'Al tercer día hábil siguiente.'], 'Artículo 31.2.b de la Ley 39/2015.'],
      ['¿Qué validez tiene una copia auténtica?', 'La misma validez y eficacia que el documento original.', ['Solo valor informativo.', 'Valor inferior al original.', 'Ninguna si es electrónica.'], 'Artículo 27 de la Ley 39/2015.'],
      ['¿Debe aportarse un documento ya elaborado por otra Administración?', 'Como regla general no, sin perjuicio de las excepciones legales.', ['Sí, siempre en papel.', 'Solo si tiene menos de un año.', 'Únicamente si lo exige verbalmente el instructor.'], 'Artículo 28 de la Ley 39/2015.']
    ],
    6: [
      ['¿Qué formas de iniciación de oficio reconoce la Ley 39/2015?', 'Propia iniciativa, orden superior, petición razonada y denuncia.', ['Solicitud, recurso, renuncia y convenio.', 'Notificación, publicación, informe y audiencia.', 'Alzada, reposición, revisión y lesividad.'], 'Artículos 54 y 58 a 62.'],
      ['¿La denuncia atribuye por sí sola condición de interesado?', 'No.', ['Sí, siempre.', 'Solo si es anónima.', 'Sí, cuando se presenta electrónicamente.'], 'Artículo 62.5 de la Ley 39/2015.'],
      ['¿Cuánto dura el plazo ordinario de subsanación?', 'Diez días.', ['Cinco días.', 'Quince días.', 'Un mes.'], 'Artículo 68.1 de la Ley 39/2015.'],
      ['¿Puede ampliarse la subsanación en un procedimiento selectivo?', 'No por la ampliación prudencial de hasta cinco días prevista en el artículo 68.2.', ['Sí, siempre por diez días más.', 'Sí, sin límite.', 'Solo por acuerdo del interesado.'], 'Artículo 68.2 de la Ley 39/2015.'],
      ['¿Qué efecto general tiene una declaración responsable desde su presentación?', 'Permite iniciar la actividad o ejercer el derecho, sin perjuicio de comprobación.', ['Concede una licencia definitiva.', 'Sustituye cualquier autorización exigida por ley.', 'Impide todo control posterior.'], 'Artículo 69 de la Ley 39/2015.'],
      ['¿En qué plazo se cumplen, con carácter general, los trámites requeridos al interesado?', 'Diez días.', ['Tres días.', 'Veinte días.', 'Dos meses.'], 'Artículo 73 de la Ley 39/2015.'],
      ['¿Cuál es el período ordinario de prueba?', 'Entre diez y treinta días.', ['Siempre cinco días.', 'Entre uno y cinco días.', 'Entre treinta y sesenta días.'], 'Artículo 77.2 de la Ley 39/2015.'],
      ['¿Qué plazo tiene el trámite de audiencia?', 'Entre diez y quince días.', ['Tres días.', 'Veinte días exactos.', 'Un mes.'], 'Artículo 82.2 de la Ley 39/2015.'],
      ['¿Cuál es la duración mínima de la información pública?', 'Veinte días.', ['Cinco días.', 'Diez días.', 'Quince días.'], 'Artículo 83.2 de la Ley 39/2015.'],
      ['¿Qué debe hacer la resolución respecto de las cuestiones planteadas?', 'Decidirlas y ser congruente.', ['Resolver solo las favorables a la Administración.', 'Limitarse a copiar la propuesta.', 'Agravarlas siempre.'], 'Artículo 88 de la Ley 39/2015.'],
      ['¿Puede la resolución agravar la situación inicial del solicitante?', 'No, sin perjuicio de iniciar otro procedimiento si procede.', ['Sí, siempre.', 'Solo cuando no haya audiencia.', 'Sí, si lo propone el instructor.'], 'Artículo 88.2 de la Ley 39/2015.'],
      ['¿Qué plazo tiene la tramitación simplificada?', 'Treinta días desde la notificación del acuerdo, salvo excepción legal.', ['Diez días.', 'Tres meses.', 'Seis meses.'], 'Artículo 96.6 de la Ley 39/2015.'],
      ['¿Qué medio de ejecución procede para una obligación no personal que puede realizar otro sujeto?', 'Ejecución subsidiaria.', ['Compulsión sobre las personas.', 'Revisión de oficio.', 'Recurso de reposición.'], 'Artículo 102 de la Ley 39/2015.'],
      ['¿Qué medio de ejecución se aplica al cobro de una cantidad líquida?', 'Apremio sobre el patrimonio.', ['Ejecución subsidiaria.', 'Compulsión personal.', 'Información pública.'], 'Artículo 101 de la Ley 39/2015.'],
      ['¿Cuándo puede declararse caducidad por paralización imputable al solicitante?', 'Tras advertencia y transcurso de tres meses.', ['De forma inmediata.', 'A los diez días sin advertencia.', 'Solo por sentencia judicial.'], 'Artículo 95.1 de la Ley 39/2015.']
    ],
    7: [
      ['¿Qué requisito debe cumplir el contenido de un acto administrativo?', 'Ser determinado y adecuado a sus fines.', ['Ser siempre favorable.', 'Ser oral en todo caso.', 'Ser aprobado por el Pleno.'], 'Artículo 34.2 de la Ley 39/2015.'],
      ['¿Debe motivarse un acto que limita derechos?', 'Sí.', ['No, nunca.', 'Solo si es verbal.', 'Únicamente cuando lo pide un juez.'], 'Artículo 35.1.a de la Ley 39/2015.'],
      ['¿Debe motivarse el rechazo de una prueba propuesta?', 'Sí.', ['No.', 'Solo en procedimientos tributarios.', 'Solo si la prueba es documental.'], 'Artículo 35.1.f de la Ley 39/2015.'],
      ['¿Cuál es la forma ordinaria de producción de los actos?', 'Por escrito a través de medios electrónicos.', ['Siempre verbal.', 'Siempre en papel.', 'Mediante publicación en prensa.'], 'Artículo 36.1 de la Ley 39/2015.'],
      ['¿Puede una resolución particular vulnerar un reglamento por proceder de órgano superior?', 'No.', ['Sí, siempre.', 'Sí, si es posterior.', 'Solo si beneficia al interesado.'], 'Artículo 37.1 de la Ley 39/2015.'],
      ['¿Desde cuándo producen efectos los actos como regla general?', 'Desde la fecha en que se dictan.', ['Desde su archivo.', 'Desde la interposición de recurso.', 'Desde el transcurso de un mes.'], 'Artículo 39.1 de la Ley 39/2015.'],
      ['¿En qué plazo debe cursarse una notificación?', 'Dentro de diez días desde que se dicta el acto.', ['En veinticuatro horas.', 'En un mes.', 'No existe plazo.'], 'Artículo 40.2 de la Ley 39/2015.'],
      ['¿Qué debe indicar una notificación además del texto íntegro?', 'Si pone fin a la vía, recursos, órgano y plazo.', ['El salario del instructor.', 'La composición completa de la plantilla.', 'La opinión personal del órgano.'], 'Artículo 40.2 de la Ley 39/2015.'],
      ['¿Cuándo se entiende practicada una notificación electrónica?', 'Cuando se accede a su contenido.', ['Cuando se envía el aviso.', 'Cuando se firma el acto.', 'Cuando se publica en redes sociales.'], 'Artículo 43.2 de la Ley 39/2015.'],
      ['¿Cuándo se entiende rechazada una notificación electrónica obligatoria?', 'Tras diez días naturales desde su puesta a disposición sin acceso.', ['Tras diez días hábiles.', 'Al día siguiente.', 'Nunca.'], 'Artículo 43.2 de la Ley 39/2015.'],
      ['¿Dónde se anuncia una notificación imposible o a interesado desconocido?', 'En el Boletín Oficial del Estado.', ['Solo en el tablón municipal.', 'En cualquier periódico privado.', 'Exclusivamente en redes sociales.'], 'Artículo 44 de la Ley 39/2015.'],
      ['¿Cuál de estas es causa de nulidad de pleno derecho?', 'Incompetencia manifiesta por razón de la materia o del territorio.', ['Cualquier defecto formal menor.', 'Toda actuación fuera de plazo.', 'Cualquier error tipográfico.'], 'Artículo 47.1.b de la Ley 39/2015.'],
      ['¿Qué caracteriza a la anulabilidad?', 'Cualquier infracción del ordenamiento no calificada como nulidad.', ['Solo delitos.', 'Únicamente incompetencia territorial manifiesta.', 'Nunca puede subsanarse.'], 'Artículo 48 de la Ley 39/2015.'],
      ['¿Qué actos pueden convalidarse?', 'Los anulables, subsanando sus vicios.', ['Los nulos de pleno derecho en todo caso.', 'Las disposiciones generales nulas.', 'Solo actos inexistentes.'], 'Artículo 52 de la Ley 39/2015.'],
      ['¿Qué finalidad tiene la conservación de actos y trámites?', 'Mantener los que habrían tenido igual contenido sin la infracción.', ['Convertir todo acto nulo en válido.', 'Evitar cualquier recurso.', 'Sustituir la resolución final.'], 'Artículo 51 de la Ley 39/2015.']
    ],
    8: [
      ['¿Qué dictamen exige la revisión de oficio de un acto nulo?', 'Dictamen favorable del Consejo de Estado u órgano consultivo equivalente.', ['Informe facultativo del secretario.', 'Autorización judicial previa en todo caso.', 'Acuerdo del interesado.'], 'Artículo 106 de la Ley 39/2015.'],
      ['¿Cómo impugna la Administración un acto favorable anulable?', 'Mediante declaración de lesividad y recurso contencioso-administrativo.', ['Por revocación libre.', 'Mediante recurso de alzada.', 'Por silencio administrativo.'], 'Artículo 107 de la Ley 39/2015.'],
      ['¿Cuál es el plazo para declarar lesivo un acto anulable?', 'Cuatro años desde que se dictó.', ['Un mes.', 'Tres meses.', 'Sin límite.'], 'Artículo 107.2 de la Ley 39/2015.'],
      ['¿Cuándo caduca el procedimiento de lesividad?', 'A los seis meses desde su iniciación sin declaración.', ['A los diez días.', 'A los cuatro años.', 'Nunca.'], 'Artículo 107.3 de la Ley 39/2015.'],
      ['¿Cuándo pueden rectificarse errores materiales, de hecho o aritméticos?', 'En cualquier momento.', ['Solo durante diez días.', 'Solo antes de notificar.', 'Únicamente por sentencia.'], 'Artículo 109.2 de la Ley 39/2015.'],
      ['¿Cabe recurso administrativo contra una disposición general?', 'No.', ['Sí, alzada.', 'Sí, reposición obligatoria.', 'Sí, extraordinario de revisión.'], 'Artículo 112.3 de la Ley 39/2015.'],
      ['¿Qué efecto tiene equivocarse al nombrar un recurso?', 'No impide tramitarlo si se deduce su verdadero carácter.', ['Produce inadmisión automática.', 'Lo convierte en queja.', 'Suspende el acto definitivamente.'], 'Artículo 115.2 de la Ley 39/2015.'],
      ['¿Suspende un recurso la ejecución del acto por regla general?', 'No.', ['Sí, siempre.', 'Solo si es alzada.', 'Solo si lo presenta una persona física.'], 'Artículo 117.1 de la Ley 39/2015.'],
      ['¿Qué ocurre si no se resuelve en un mes la solicitud de suspensión?', 'La ejecución se entiende suspendida.', ['La solicitud se entiende desestimada.', 'El recurso se archiva.', 'El acto queda anulado.'], 'Artículo 117.3 de la Ley 39/2015.'],
      ['¿Contra qué actos procede alzada?', 'Contra los que no ponen fin a la vía administrativa.', ['Contra disposiciones generales.', 'Contra actos firmes por cualquier causa.', 'Solo contra actos favorables.'], 'Artículo 121 de la Ley 39/2015.'],
      ['¿Cuál es el plazo de alzada contra acto expreso?', 'Un mes.', ['Diez días.', 'Tres meses.', 'Cuatro años.'], 'Artículo 122.1 de la Ley 39/2015.'],
      ['¿Cuál es el plazo máximo para resolver alzada?', 'Tres meses.', ['Un mes.', 'Seis meses.', 'Un año.'], 'Artículo 122.2 de la Ley 39/2015.'],
      ['¿Qué recurso potestativo procede contra un acto que pone fin a la vía?', 'Reposición.', ['Alzada.', 'Queja.', 'Casación.'], 'Artículo 123 de la Ley 39/2015.'],
      ['¿Cuál es el plazo máximo para resolver reposición?', 'Un mes.', ['Tres meses.', 'Seis meses.', 'Cuatro años.'], 'Artículo 124.2 de la Ley 39/2015.'],
      ['¿Qué plazo tiene el extraordinario por error de hecho?', 'Cuatro años desde la notificación del acto.', ['Un mes.', 'Tres meses.', 'Seis meses.'], 'Artículo 125.2 de la Ley 39/2015.']
    ],
    9: [
      ['¿Son equivalentes identificación y firma electrónica?', 'No; la identificación acredita identidad y la firma añade voluntad e integridad.', ['Sí, siempre.', 'La firma solo identifica el navegador.', 'La identificación sustituye cualquier firma exigida.'], 'Artículos 9 a 11 de la Ley 39/2015.'],
      ['¿Cuándo se exige firma con carácter general?', 'En solicitudes, declaraciones responsables o comunicaciones, recursos, desistimiento y renuncia.', ['En cualquier consulta informativa.', 'Para leer una publicación.', 'Solo para pedir cita previa.'], 'Artículo 11.2 de la Ley 39/2015.'],
      ['¿A quién debe asistir la Administración en medios electrónicos?', 'A quien no esté obligado y solicite asistencia.', ['Solo a personas jurídicas.', 'Únicamente a empleados públicos.', 'A nadie.'], 'Artículo 12 de la Ley 39/2015.'],
      ['¿Qué efecto tiene la falta del aviso de una notificación electrónica?', 'No invalida la notificación.', ['La anula siempre.', 'La convierte en publicación.', 'Amplía automáticamente el plazo un mes.'], 'Artículo 41.6 de la Ley 39/2015.'],
      ['¿Cómo puede practicarse una notificación electrónica?', 'Por comparecencia en sede, dirección electrónica habilitada única o ambos sistemas.', ['Solo por SMS.', 'Solo mediante correo ordinario.', 'Únicamente por redes sociales.'], 'Artículo 43.1 de la Ley 39/2015.'],
      ['¿Qué es una sede electrónica?', 'Una dirección electrónica de titularidad pública para ejercer competencias y prestar servicios.', ['Cualquier página privada con información administrativa.', 'Un perfil de red social.', 'Un buzón de correo personal.'], 'Artículo 38 de la Ley 40/2015.'],
      ['¿Qué es un portal de internet?', 'Un punto de acceso a información publicada y, en su caso, a la sede.', ['La sede electrónica en todo caso.', 'Un registro de apoderamientos.', 'Un sistema de firma.'], 'Artículo 39 de la Ley 40/2015.'],
      ['¿Qué diferencia clave existe entre portal y sede?', 'La sede está vinculada al ejercicio de competencias y responsabilidad reforzada; el portal da acceso a información.', ['No existe diferencia.', 'El portal siempre permite firmar trámites.', 'La sede solo contiene noticias.'], 'Artículos 38 y 39 de la Ley 40/2015.'],
      ['¿Cómo puede identificarse una Administración?', 'Mediante sello electrónico basado en certificado reconocido o cualificado.', ['Con la contraseña personal de cualquier empleado.', 'Solo mediante firma manuscrita escaneada.', 'Con un correo sin certificado.'], 'Artículo 40 de la Ley 40/2015.'],
      ['¿Qué caracteriza una actuación administrativa automatizada?', 'Se realiza íntegramente por medios electrónicos sin intervención directa de empleado público.', ['Siempre la firma manual un funcionario.', 'Carece de órgano responsable.', 'Solo puede usarse fuera de procedimientos.'], 'Artículo 41.1 de la Ley 40/2015.'],
      ['¿Qué debe fijarse previamente en una actuación automatizada?', 'Órganos responsables del sistema y órgano responsable de la impugnación.', ['Solo el nombre del proveedor.', 'Únicamente la fecha de compra.', 'Nada, porque actúa una máquina.'], 'Artículo 41.2 de la Ley 40/2015.'],
      ['¿Qué sistemas pueden firmar una actuación automatizada?', 'Sello electrónico o código seguro de verificación.', ['Solo firma manuscrita.', 'Contraseña compartida.', 'Correo electrónico simple.'], 'Artículo 42 de la Ley 40/2015.'],
      ['¿Quién firma la actuación electrónica no automatizada de un órgano?', 'El titular del órgano o empleado público mediante firma electrónica.', ['El proveedor del programa.', 'Cualquier ciudadano.', 'El operador de telecomunicaciones.'], 'Artículo 43 de la Ley 40/2015.'],
      ['¿Cómo deben almacenarse los documentos administrativos?', 'Electrónicamente, salvo que no sea posible.', ['Siempre en papel.', 'Solo en dispositivos personales.', 'Sin control de integridad.'], 'Artículo 46.1 de la Ley 40/2015.'],
      ['¿Qué garantías debe ofrecer el archivo electrónico?', 'Identidad, integridad, conservación y acceso.', ['Solo compresión de archivos.', 'Únicamente rapidez de descarga.', 'Eliminación inmediata de metadatos.'], 'Artículo 46 de la Ley 40/2015.']
    ]
  };

  function makeQuestions(number, rows) {
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v43-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source: 'BOE · Ley 39/2015 / Ley 40/2015'
      };
    });
  }

  function isGeneric(question) {
    const text = norm(`${question?.text || ''} ${question?.justification || ''}`);
    return ['como debe estudiarse', 'enfoque correcto para preparar', 'respuesta esta mejor orientada', 'debe ser autocontenida', 'sin anadir paja'].some(fragment => text.includes(fragment));
  }

  function valid(question) {
    const options = question?.options || [];
    return Boolean(question?.text && question?.justification && options.length === 4 && new Set(options.map(option => norm(option.text))).size === 4 && options.some(option => option.letter === question.answer));
  }

  Object.entries(detail).forEach(([key, value]) => {
    const number = Number(key);
    const currentTheme = theme(number);
    if (!currentTheme) return;
    currentTheme.sections = [
      sec('Resumen orientado al aprobado', [`Tema nuclear del primer ejercicio. Debes distinguir sujetos, fases, plazos y efectos sin confundir reglas generales con excepciones. Fuente principal: ${value.source}.`]),
      sec('Rigor normativo', ['Contenido revisado sobre los textos consolidados del BOE. Memoriza los plazos y efectos con su artículo y evita trasladar reglas de una figura a otra.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Norma', value.source],
      ['Sujeto u órgano', 'Quién inicia, tramita, resuelve, notifica, firma o recurre.'],
      ['Plazo', 'Inicio, duración, días hábiles o naturales y consecuencia del incumplimiento.'],
      ['Regla y excepción', 'No contestes por palabras sueltas: identifica la regla general y la excepción aplicable.'],
      ['Efecto', 'Admisión, subsanación, silencio, eficacia, nulidad, suspensión, resolución o ejecución.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v43';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.43';

    const existing = (ope.themeTests[currentTheme.id] || []).filter(valid).filter(question => !isGeneric(question));
    const manual = makeQuestions(number, rawQuestions[number]);
    const seen = new Set();
    const merged = [...manual, ...existing].filter(question => {
      const keyText = norm(question.text);
      if (!keyText || seen.has(keyText)) return false;
      seen.add(keyText);
      return true;
    }).slice(0, 40);
    ope.themeTests[currentTheme.id] = merged;
    currentTheme.globalAuditV42 = {
      total: merged.length,
      content: merged.length,
      generic: 0,
      state: merged.length >= 30 ? 'objetivo 30+' : merged.length >= 20 ? 'banco sólido' : 'base real',
      target: 30
    };
  });

  const allThemes = ope.themes.map(item => {
    const questions = (ope.themeTests[item.id] || []).filter(valid);
    const generic = questions.filter(isGeneric).length;
    const content = questions.length - generic;
    item.globalAuditV42 = { total: questions.length, content, generic, state: content >= 30 ? 'objetivo 30+' : content >= 20 ? 'banco sólido' : content >= 10 ? 'base real' : content ? 'insuficiente' : 'solo plantilla', target: 30 };
    return { number: Number(item.number), title: item.title, total: questions.length, content, generic, state: item.globalAuditV42.state };
  });
  const totals = allThemes.reduce((acc, item) => ({ total: acc.total + item.total, content: acc.content + item.content, generic: acc.generic + item.generic }), { total: 0, content: 0, generic: 0 });
  ope.globalTestAudit = {
    version: 'v0.43.0',
    themes: allThemes,
    ...totals,
    readyThemes: allThemes.filter(item => item.content >= 20).length,
    targetThemes: allThemes.filter(item => item.content >= 30).length,
    genericThemes: allThemes.filter(item => item.generic > item.content).length,
    targetPerTheme: 30
  };

  function hash(text, seed) {
    let result = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      result ^= text.charCodeAt(index);
      result = Math.imul(result, 16777619);
    }
    return result >>> 0;
  }
  const shuffle = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4300 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 100) {
      for (const pool of realPools) {
        if (!pool.questions.length) continue;
        const question = pool.questions[(round + seed) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= 55) break;
      }
      round += 1;
    }
    const ordered = shuffle(selected, seed * 4301);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v43-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v43-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v43-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: {
        main: main.length,
        reserve: reserve.length,
        expectedMain: 50,
        expectedReserve: 5,
        minutes: 60,
        coveredThemes: new Set(ordered.map(question => question.auditTheme)).size,
        realOnly: true
      }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Desarrollados en profundidad los temas 5 a 9 de Diputación',
      'Añadidas 75 preguntas manuales de contenido',
      'Eliminadas preguntas de plantilla de estos cinco temas',
      'Regenerados los simulacros de Diputación solo con preguntas reales disponibles'
    ]
  });

  window.OPOWEB_DIPUTACION_V43 = {
    version: `v${VERSION}`,
    revisedThemes: [5, 6, 7, 8, 9],
    manualQuestions: 75,
    officialSources: ['Ley 39/2015', 'Ley 40/2015']
  };
})();