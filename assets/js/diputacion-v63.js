(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.63.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];

  const specs = {
    27: {
      sections: [
        ['Concepto, contenido y estructura', ['El presupuesto general expresa cifrada, conjunta y sistemáticamente las obligaciones máximas y los derechos que se prevean liquidar durante el ejercicio. Integra el presupuesto de la entidad, organismos autónomos y sociedades mercantiles íntegramente locales.', 'Debe contener estados de gastos e ingresos y bases de ejecución adaptadas a la organización local, sin modificar preceptos legales.']],
        ['Elaboración y aprobación', ['La presidencia forma el presupuesto con la documentación legal y lo remite al Pleno antes del 15 de octubre. Tras aprobación inicial se expone al público durante quince días.', 'Si no hay reclamaciones queda definitivamente aprobado. Entra en vigor tras publicación del resumen por capítulos.']],
        ['Prórroga y reclamaciones', ['Si al comenzar el ejercicio no está vigente el nuevo presupuesto, se prorroga automáticamente el anterior con las exclusiones legales.', 'Las reclamaciones contra el presupuesto solo pueden fundarse en causas tasadas: tramitación incorrecta, omisión de crédito necesario o manifiesta insuficiencia de ingresos respecto de gastos.']]
      ],
      rows: [
        ['¿Qué expresa el presupuesto general de una entidad local?', 'Las obligaciones máximas que puede reconocer y los derechos que prevé liquidar durante el ejercicio.', ['Solo los pagos ya realizados.', 'Únicamente la deuda financiera.', 'Las previsiones de varios ejercicios sin límite.'], 'Artículo 162 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué presupuestos integran el presupuesto general local?', 'El de la entidad, sus organismos autónomos y las sociedades mercantiles cuyo capital pertenezca íntegramente a la entidad.', ['Solo el presupuesto del ayuntamiento.', 'Los de todas las empresas privadas del municipio.', 'Únicamente los organismos sin personalidad jurídica.'], 'Artículo 164 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué contienen los estados de gastos?', 'Los créditos necesarios para atender las obligaciones.', ['Solo previsiones estadísticas.', 'Exclusivamente ingresos tributarios.', 'Las sanciones pendientes de cobro.'], 'Artículo 165.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué contienen los estados de ingresos?', 'Las estimaciones de los recursos económicos que se liquidarán durante el ejercicio.', ['Créditos limitativos de gasto.', 'Solo transferencias del Estado.', 'Únicamente ingresos ya cobrados.'], 'Artículo 165.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Puede aprobarse inicialmente cada presupuesto con déficit?', 'No; cada presupuesto debe aprobarse sin déficit inicial.', ['Sí, sin límite.', 'Solo si lo autoriza el alcalde.', 'Sí, cuando haya remanente negativo.'], 'Artículo 165.4 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué finalidad tienen las bases de ejecución?', 'Adaptar las disposiciones generales presupuestarias a la organización y circunstancias de la entidad.', ['Modificar libremente la ley.', 'Sustituir el presupuesto.', 'Aprobar ordenanzas fiscales.'], 'Artículo 165.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Quién forma el presupuesto general local?', 'El presidente de la entidad local.', ['El interventor de forma exclusiva.', 'La comunidad autónoma.', 'El Tribunal de Cuentas.'], 'Artículo 168 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Antes de qué fecha debe remitirse el proyecto al Pleno?', 'Antes del 15 de octubre.', ['Antes del 1 de enero.', 'Antes del 31 de marzo.', 'Antes del 30 de junio.'], 'Artículo 168.4 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué órgano aprueba inicialmente el presupuesto?', 'El Pleno de la corporación.', ['La Junta de Gobierno en todo caso.', 'El alcalde por decreto.', 'La Diputación Provincial para todos los municipios.'], 'Artículo 168.4 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuánto dura la exposición pública tras la aprobación inicial?', 'Quince días.', ['Cinco días.', 'Un mes.', 'Dos meses.'], 'Artículo 169.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué ocurre si no se presentan reclamaciones durante la exposición?', 'El presupuesto se considera definitivamente aprobado.', ['Debe votarse otra vez obligatoriamente.', 'Queda anulado.', 'Se prorroga el anterior.'], 'Artículo 169.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuándo entra en vigor el presupuesto?', 'Tras publicarse definitivamente su resumen por capítulos en el boletín oficial correspondiente.', ['Desde la aprobación inicial.', 'Al remitirse al Ministerio.', 'Al finalizar el ejercicio.'], 'Artículo 169.5 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué ocurre si el nuevo presupuesto no entra en vigor al comenzar el ejercicio?', 'Se considera automáticamente prorrogado el presupuesto anterior con las exclusiones legales.', ['Se paralizan todos los pagos.', 'Se aplica el presupuesto estatal.', 'Se aprueba por silencio.'], 'Artículo 169.6 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Quiénes pueden presentar reclamaciones al presupuesto?', 'Los interesados definidos legalmente, incluidos habitantes y personas directamente afectadas.', ['Solo concejales del gobierno.', 'Cualquier persona sin vinculación alguna.', 'Únicamente el Ministerio de Hacienda.'], 'Artículo 170.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuál es una causa legal de reclamación contra el presupuesto?', 'La omisión del crédito necesario para obligaciones exigibles.', ['La mera discrepancia política.', 'Preferir otra clasificación presupuestaria.', 'No compartir una prioridad no obligatoria.'], 'Artículo 170.2 del texto refundido de la Ley Reguladora de las Haciendas Locales.']
      ]
    },
    28: {
      sections: [
        ['Protección de datos personales', ['La normativa exige exactitud, confidencialidad, licitud y responsabilidad. El consentimiento debe ser una manifestación libre, específica, informada e inequívoca y los menores pueden consentir por sí mismos desde los catorce años.', 'Los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad se ejercen conforme al RGPD y la Ley Orgánica 3/2018.']],
        ['Transparencia y acceso', ['La publicidad activa comprende información institucional, normativa, económica, presupuestaria y estadística, actualizada y comprensible.', 'Todas las personas tienen derecho de acceso, sujeto a límites y protección de datos. El plazo ordinario para resolver es un mes, ampliable otro por volumen o complejidad.']],
        ['Buen gobierno y derechos digitales', ['Las autoridades deben actuar con transparencia, imparcialidad, diligencia y respeto al ordenamiento. La ley reconoce derechos digitales como seguridad, educación, intimidad en dispositivos laborales y desconexión digital.']]
      ],
      rows: [
        ['¿Qué deber alcanza a quienes intervienen en el tratamiento de datos?', 'El deber de confidencialidad.', ['La libre difusión de cualquier dato.', 'La publicación automática de expedientes.', 'La conservación ilimitada sin finalidad.'], 'Artículo 5 de la Ley Orgánica 3/2018.'],
        ['¿Cómo debe prestarse el consentimiento para tratar datos?', 'Mediante una manifestación de voluntad libre, específica, informada e inequívoca.', ['Por silencio en todo caso.', 'Mediante cláusulas genéricas no destacadas.', 'Solo verbalmente.'], 'Artículo 6 de la Ley Orgánica 3/2018 y artículo 4.11 del RGPD.'],
        ['¿Desde qué edad puede un menor consentir por sí mismo el tratamiento de sus datos en España?', 'Desde los catorce años.', ['Desde los doce años.', 'Desde los dieciséis años.', 'Solo al alcanzar dieciocho años.'], 'Artículo 7 de la Ley Orgánica 3/2018.'],
        ['¿Puede tratar una Administración datos para cumplir una obligación legal o misión de interés público?', 'Sí, cuando exista base normativa suficiente.', ['No, siempre necesita consentimiento.', 'Solo con autorización judicial.', 'Únicamente si los datos son anónimos.'], 'Artículo 8 de la Ley Orgánica 3/2018.'],
        ['¿Quién facilita el ejercicio de los derechos de protección de datos?', 'El responsable del tratamiento.', ['Exclusivamente la policía.', 'Solo la Agencia Tributaria.', 'La persona que recibe una copia del documento.'], 'Artículo 12 de la Ley Orgánica 3/2018.'],
        ['¿Qué derecho permite conocer si se tratan datos personales y acceder a ellos?', 'El derecho de acceso.', ['El derecho de portabilidad únicamente.', 'El derecho de oposición.', 'El derecho al olvido electoral.'], 'Artículos 13 y 15 de la Ley Orgánica 3/2018 y del RGPD.'],
        ['¿Qué exige la publicidad activa en transparencia?', 'Publicación periódica y actualizada de la información relevante.', ['Publicar solo cuando alguien lo solicite.', 'Difundir datos personales sin límites.', 'Actualizar una vez cada diez años.'], 'Artículo 5 de la Ley 19/2013.'],
        ['¿Qué información institucional debe publicarse?', 'Funciones, normativa aplicable y estructura organizativa.', ['Solo teléfonos internos.', 'Únicamente expedientes disciplinarios.', 'Datos médicos del personal.'], 'Artículo 6 de la Ley 19/2013.'],
        ['¿Qué información económica es objeto de publicidad activa?', 'Contratos, convenios, subvenciones, presupuestos y cuentas, entre otra.', ['Solo salarios privados.', 'Únicamente multas no firmes.', 'Toda información bancaria personal.'], 'Artículo 8 de la Ley 19/2013.'],
        ['¿Quién tiene derecho a acceder a la información pública?', 'Todas las personas.', ['Solo quienes acrediten interés legítimo.', 'Únicamente ciudadanos españoles.', 'Solo empleados públicos.'], 'Artículo 12 de la Ley 19/2013.'],
        ['¿Es absoluto el derecho de acceso?', 'No; está sujeto a límites y a la protección de datos personales.', ['Sí, sin excepción.', 'Solo puede limitarse por orden del alcalde.', 'No existe derecho de acceso.'], 'Artículos 14 y 15 de la Ley 19/2013.'],
        ['¿Debe motivarse siempre una solicitud de acceso?', 'No, aunque el solicitante puede exponer motivos.', ['Sí, bajo pena de inadmisión.', 'Solo si se presenta electrónicamente.', 'Sí, y debe probar interés directo.'], 'Artículo 17.3 de la Ley 19/2013.'],
        ['¿Cuál es el plazo ordinario para resolver una solicitud de acceso?', 'Un mes desde su recepción por el órgano competente.', ['Diez días.', 'Tres meses.', 'Seis meses.'], 'Artículo 20.1 de la Ley 19/2013.'],
        ['¿Puede ampliarse el plazo de acceso?', 'Sí, otro mes por volumen o complejidad, previa notificación.', ['No, nunca.', 'Sí, indefinidamente.', 'Solo mediante resolución judicial.'], 'Artículo 20.1 de la Ley 19/2013.'],
        ['¿Qué principio de buen gobierno exige actuar con imparcialidad?', 'La objetividad y ausencia de intereses particulares incompatibles.', ['La reserva absoluta de toda actividad.', 'La subordinación a intereses privados.', 'La discrecionalidad sin control.'], 'Artículo 26 de la Ley 19/2013.']
      ]
    },
    29: {
      sections: [
        ['Impuesto sobre Bienes Inmuebles', ['El IBI es un tributo directo de carácter real que grava el valor de los inmuebles. El hecho imponible se configura por la titularidad de concesión administrativa, superficie, usufructo o propiedad, en ese orden.', 'La base imponible es el valor catastral, la base liquidable resulta de aplicar las reducciones y el impuesto se devenga el primer día del periodo impositivo.']],
        ['Impuesto sobre Actividades Económicas', ['El IAE es un tributo directo de carácter real que grava el mero ejercicio de actividades empresariales, profesionales o artísticas, se ejerzan o no en local y produzcan o no beneficio.', 'Están exentas, entre otras, las personas físicas, quienes inician actividad durante los dos primeros periodos y los sujetos con cifra neta de negocios inferior a un millón de euros en los términos legales.']]
      ],
      rows: [
        ['¿Qué naturaleza tiene el IBI?', 'Es un tributo directo de carácter real.', ['Es una tasa.', 'Es un impuesto indirecto personal.', 'Es una contribución especial.'], 'Artículo 60 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué grava el IBI?', 'El valor de los bienes inmuebles en los términos legales.', ['La transmisión de vehículos.', 'El beneficio empresarial.', 'La prestación de servicios municipales.'], 'Artículo 60 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué derecho aparece primero en el orden del hecho imponible del IBI?', 'Una concesión administrativa sobre el inmueble o servicio público afecto.', ['La propiedad.', 'El usufructo.', 'El derecho de superficie.'], 'Artículo 61.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Quién es sujeto pasivo del IBI?', 'Quien ostenta el derecho que constituye el hecho imponible.', ['El arrendatario en todo caso.', 'El ayuntamiento.', 'Cualquier vecino del municipio.'], 'Artículo 63 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuál es la base imponible del IBI?', 'El valor catastral del inmueble.', ['El precio de compra necesariamente.', 'La renta anual.', 'El valor contable municipal.'], 'Artículo 65 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cómo se obtiene la base liquidable del IBI?', 'Aplicando a la base imponible las reducciones legales.', ['Sumando sanciones.', 'Restando todas las deudas personales.', 'Aplicando el tipo impositivo.'], 'Artículo 66 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuándo se devenga el IBI?', 'El primer día del periodo impositivo.', ['El último día del año.', 'Al pagar el recibo.', 'Al notificarse el padrón.'], 'Artículo 75 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Con qué coincide el periodo impositivo del IBI?', 'Con el año natural.', ['Con cada trimestre.', 'Con el mandato municipal.', 'Con cinco años.'], 'Artículo 75 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué naturaleza tiene el IAE?', 'Es un tributo directo de carácter real.', ['Es un impuesto indirecto.', 'Es una tasa por licencia.', 'Es una contribución especial.'], 'Artículo 78 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué grava el IAE?', 'El mero ejercicio de actividades empresariales, profesionales o artísticas.', ['Solo la obtención de beneficios.', 'La titularidad de inmuebles.', 'El consumo de servicios públicos.'], 'Artículo 78 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Exige el IAE que la actividad se ejerza en un local?', 'No.', ['Sí, siempre.', 'Solo para profesionales.', 'Solo para actividades artísticas.'], 'Artículo 78 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Exige el IAE que exista beneficio?', 'No.', ['Sí, beneficio neto positivo.', 'Solo en sociedades.', 'Solo a partir del segundo año.'], 'Artículo 78 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Están exentas del IAE las personas físicas?', 'Sí.', ['No.', 'Solo si están jubiladas.', 'Solo durante dos años.'], 'Artículo 82.1.c del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué exención se aplica al inicio de una actividad sujeta al IAE?', 'Los dos primeros periodos impositivos en que se desarrolle.', ['Los cinco primeros años.', 'Solo el primer mes.', 'Ninguna.'], 'Artículo 82.1.b del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Quién es sujeto pasivo del IAE?', 'La persona o entidad que realiza la actividad gravada.', ['El propietario del local en todo caso.', 'El ayuntamiento.', 'El consumidor final.'], 'Artículo 83 del texto refundido de la Ley Reguladora de las Haciendas Locales.']
      ]
    },
    30: {
      sections: [
        ['IVTM', ['El Impuesto sobre Vehículos de Tracción Mecánica grava la titularidad de vehículos aptos para circular. El sujeto pasivo es quien figure en el permiso de circulación.', 'El periodo coincide con el año natural salvo primera adquisición o baja definitiva y el devengo se produce el primer día del periodo.']],
        ['IIVTNU', ['El impuesto grava el incremento de valor de terrenos urbanos puesto de manifiesto por transmisión o constitución de derechos reales de goce. No hay sujeción si se acredita inexistencia de incremento.', 'En transmisiones gratuitas es sujeto pasivo quien adquiere; en las onerosas, quien transmite.']],
        ['Tasas', ['Las entidades locales pueden exigir tasas por utilización privativa o aprovechamiento especial del dominio público y por servicios o actividades en los supuestos legales.', 'Con carácter general, la cuantía por servicios no puede exceder de su coste real o previsible.']]
      ],
      rows: [
        ['¿Qué grava el IVTM?', 'La titularidad de vehículos aptos para circular por vías públicas.', ['La compra de combustible.', 'El uso de transporte público.', 'La transmisión de terrenos urbanos.'], 'Artículo 92 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuándo se considera apto para circular un vehículo?', 'Cuando está matriculado en el registro público y no ha causado baja.', ['Solo cuando circula diariamente.', 'Cuando tiene seguro, aunque no esté matriculado.', 'Solo si es nuevo.'], 'Artículo 92.2 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Quién es sujeto pasivo del IVTM?', 'La persona o entidad a cuyo nombre conste el vehículo en el permiso de circulación.', ['El conductor habitual siempre.', 'El vendedor del vehículo.', 'La compañía aseguradora.'], 'Artículo 94 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cómo se determina la cuota del IVTM?', 'Aplicando el cuadro de tarifas según clase y potencia o capacidad del vehículo.', ['Por el valor catastral.', 'Según los ingresos del titular.', 'Por el precio del combustible.'], 'Artículo 95 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuándo se devenga el IVTM?', 'El primer día del periodo impositivo o al adquirir por primera vez el vehículo.', ['Al pasar la ITV.', 'Al contratar el seguro.', 'El último día del año.'], 'Artículo 96 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué grava el IIVTNU?', 'El incremento de valor de terrenos urbanos manifestado por transmisión o constitución de derechos reales de goce.', ['El valor de cualquier inmueble rústico.', 'La renta empresarial.', 'La titularidad de vehículos.'], 'Artículo 104 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Está sujeta una transmisión si se acredita que no hubo incremento de valor?', 'No.', ['Sí, siempre.', 'Solo si es gratuita.', 'Solo si la transmisión es hereditaria.'], 'Artículo 104.5 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['En una transmisión gratuita, ¿quién es sujeto pasivo del IIVTNU?', 'Quien adquiere el terreno o derecho.', ['Quien transmite.', 'El notario.', 'El ayuntamiento.'], 'Artículo 106.1.a del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['En una transmisión onerosa, ¿quién es sujeto pasivo del IIVTNU?', 'Quien transmite el terreno o constituye o transmite el derecho.', ['Quien adquiere siempre.', 'El registrador.', 'La entidad bancaria.'], 'Artículo 106.1.b del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuál es el periodo máximo computable en la base del IIVTNU?', 'Veinte años.', ['Cinco años.', 'Treinta años.', 'Sin límite.'], 'Artículo 107 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Por qué aprovechamiento puede exigirse una tasa local?', 'Por utilización privativa o aprovechamiento especial del dominio público local.', ['Por cualquier actividad privada sin relación municipal.', 'Por pagar un impuesto.', 'Por ejercer un derecho fundamental.'], 'Artículo 20 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuándo puede exigirse tasa por un servicio local?', 'Cuando afecte o beneficie particularmente y concurra alguno de los supuestos legales.', ['Por cualquier servicio voluntario prestado también por el sector privado.', 'Solo por servicios estatales.', 'Nunca.'], 'Artículo 20 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Quién es sujeto pasivo de una tasa por servicio?', 'Quien solicite o resulte beneficiado o afectado por el servicio o actividad.', ['Todo vecino sin relación con el servicio.', 'Solo la Administración.', 'El empleado que tramita.'], 'Artículo 23 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuál es el límite general de una tasa por servicios?', 'No exceder, en conjunto, del coste real o previsible del servicio o actividad.', ['Duplicar siempre el coste.', 'El valor catastral del usuario.', 'No existe límite.'], 'Artículo 24.2 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Cuándo se devenga normalmente una tasa?', 'Cuando comienza el uso privativo o la prestación del servicio, según la ordenanza.', ['Al finalizar siempre el año.', 'Al aprobarse el presupuesto.', 'Solo tras sanción.'], 'Artículo 26 del texto refundido de la Ley Reguladora de las Haciendas Locales.']
      ]
    },
    31: {
      sections: [
        ['Servicios electrónicos de confianza', ['La Ley 6/2020 complementa el Reglamento eIDAS en identificación electrónica y servicios de confianza. Regula prestadores, certificados, supervisión, responsabilidad y extinción de servicios.', 'Los servicios incluyen firma electrónica, sello electrónico, sello de tiempo, entrega electrónica certificada y autenticación de sitios web.']],
        ['Firma y certificados', ['La firma electrónica cualificada se basa en un certificado cualificado y se crea mediante dispositivo cualificado; tiene efecto jurídico equivalente a la firma manuscrita.', 'Los certificados deben permitir identificar al titular, comprobar su vigencia y conocer su suspensión o revocación.']],
        ['Prestadores y supervisión', ['Los prestadores cualificados figuran en la lista de confianza y están sujetos a supervisión. Deben aplicar medidas de seguridad, conservar información y prever la continuidad o terminación ordenada del servicio.']]
      ],
      rows: [
        ['¿Qué norma europea complementa la Ley 6/2020?', 'El Reglamento eIDAS, Reglamento (UE) 910/2014.', ['El Reglamento General de Protección de Datos exclusivamente.', 'La Directiva de servicios.', 'El Código Aduanero.'], 'Artículo 1 de la Ley 6/2020.'],
        ['¿Qué regula la Ley 6/2020?', 'Determinados aspectos de los servicios electrónicos de confianza.', ['La contratación laboral.', 'Los tributos locales.', 'La organización judicial.'], 'Artículo 1 de la Ley 6/2020.'],
        ['¿Qué es una firma electrónica cualificada?', 'Una firma avanzada creada con dispositivo cualificado y basada en certificado cualificado.', ['Una imagen escaneada de una firma.', 'Cualquier contraseña.', 'Un correo sin autenticación.'], 'Artículo 3 del Reglamento eIDAS.'],
        ['¿Qué efecto tiene la firma electrónica cualificada?', 'Equivale jurídicamente a la firma manuscrita.', ['Carece de efectos.', 'Solo sirve en relaciones privadas.', 'Necesita siempre ratificación notarial.'], 'Artículo 25.2 del Reglamento eIDAS.'],
        ['¿Puede rechazarse una firma electrónica solo por ser electrónica?', 'No.', ['Sí, siempre.', 'Solo en Administraciones públicas.', 'Solo si procede de otro Estado miembro.'], 'Artículo 25.1 del Reglamento eIDAS.'],
        ['¿Qué función tiene un sello electrónico?', 'Garantizar origen e integridad de datos emitidos por una persona jurídica.', ['Identificar exclusivamente a una persona física.', 'Sustituir cualquier certificado caducado.', 'Cifrar necesariamente todo el documento.'], 'Reglamento eIDAS.'],
        ['¿Qué acredita un sello de tiempo electrónico?', 'Que determinados datos existían en un momento concreto.', ['La identidad fiscal del destinatario.', 'La validez del presupuesto.', 'El contenido de una llamada.'], 'Reglamento eIDAS.'],
        ['¿Qué aporta un servicio de entrega electrónica certificada?', 'Evidencias sobre envío, recepción, fecha, hora e integridad de los datos.', ['Solo almacenamiento local.', 'Una copia sin trazabilidad.', 'Un certificado de empadronamiento.'], 'Reglamento eIDAS.'],
        ['¿Qué permite un certificado de autenticación de sitio web?', 'Vincular el sitio con la persona u organización titular y autenticarlo.', ['Firmar nóminas manuscritas.', 'Sustituir el dominio.', 'Eliminar la necesidad de HTTPS.'], 'Reglamento eIDAS.'],
        ['¿Dónde aparecen los prestadores cualificados reconocidos?', 'En la lista de confianza.', ['En el padrón municipal.', 'En el registro mercantil únicamente.', 'En cualquier directorio privado.'], 'Ley 6/2020 y Reglamento eIDAS.'],
        ['¿Qué debe comprobarse antes de confiar en un certificado?', 'Su vigencia y si ha sido suspendido o revocado.', ['Solo el color del icono.', 'La antigüedad del ordenador.', 'El tamaño del archivo.'], 'Ley 6/2020.'],
        ['¿Puede suspenderse temporalmente un certificado?', 'Sí, cuando lo prevea el prestador y concurran las causas aplicables.', ['No, solo puede caducar.', 'Solo por orden del usuario sin identificación.', 'Nunca en certificados cualificados.'], 'Ley 6/2020.'],
        ['¿Qué obligación tienen los prestadores respecto de la seguridad?', 'Adoptar medidas técnicas y organizativas adecuadas para gestionar riesgos.', ['Publicar claves privadas.', 'Eliminar registros inmediatamente.', 'Delegar toda seguridad en el usuario.'], 'Ley 6/2020 y Reglamento eIDAS.'],
        ['¿Qué debe prever un prestador al cesar su actividad?', 'La terminación ordenada y la conservación o transferencia de la información necesaria.', ['La destrucción inmediata de toda evidencia.', 'La continuidad sin avisar a nadie.', 'La venta de certificados vigentes.'], 'Ley 6/2020.'],
        ['¿Quién supervisa a los prestadores de servicios de confianza en España?', 'El órgano estatal competente en materia de servicios electrónicos de confianza.', ['Cada ayuntamiento.', 'El Tribunal Constitucional.', 'Las compañías telefónicas.'], 'Ley 6/2020.']
      ]
    }
  };

  const buildQuestion = (number, row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (number + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return { id: `dip-v63-t${number}-q${index + 1}`, text, options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })), answer: letters[rotated.indexOf(correct)], justification, source: justification, difficulty: ['baja', 'media', 'alta'][index % 3], auditReal: true, auditTheme: number };
  };

  const isReal = question => {
    const text = norm(question?.text);
    if (!text || text.includes('cual es el enfoque correcto para preparar') || text.includes('como debe estudiarse')) return false;
    const options = (question.options || []).map(option => norm(option.text)).join(' ');
    return !options.includes('forma parte del enunciado oficial del tema') && Boolean(question.justification || question.source);
  };

  let addedQuestions = 0;
  Object.entries(specs).forEach(([key, spec]) => {
    const number = Number(key);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    theme.sections = spec.sections.map(([heading, paragraphs]) => ({ heading, paragraphs }));
    theme.tree = [`Tema ${number}`, ...spec.sections.map(([heading]) => `- ${heading}`)].join('\n');
    theme.reviewTable = [['Bloque', 'Qué dominar'], ...spec.sections.map(([heading]) => [heading, 'Concepto, sujeto, plazo, cuantía, efecto y excepción'])];
    const existing = ope.themeTests[theme.id] || [];
    const seen = new Set(existing.map(question => norm(question.text)));
    const additions = spec.rows.map((row, index) => buildQuestion(number, row, index)).filter(question => !seen.has(norm(question.text)));
    ope.themeTests[theme.id] = existing.concat(additions);
    addedQuestions += additions.length;
  });

  const auditThemes = ope.themes.map(item => {
    const all = ope.themeTests[item.id] || [];
    return { number: Number(item.number), id: item.id, total: all.length, content: all.filter(isReal).length };
  });
  ope.globalTestAudit = {
    ...(ope.globalTestAudit || {}),
    themes: auditThemes,
    targetThemes: auditThemes.filter(item => item.content >= 30).length,
    totalReal: auditThemes.reduce((total, item) => total + item.content, 0),
    targetPerTheme: 30,
    pendingTemplateThemes: auditThemes.filter(item => item.content < 30).map(item => item.number)
  };

  const shuffle = (items, seed) => {
    const out = items.slice();
    let state = seed >>> 0;
    for (let index = out.length - 1; index > 0; index -= 1) {
      state = (state * 1664525 + 1013904223) >>> 0;
      const swap = state % (index + 1);
      [out[index], out[swap]] = [out[swap], out[index]];
    }
    return out;
  };

  const buildSimulation = seed => {
    const pools = ope.themes.filter(item => Number(item.number) !== 22).map(item => ({ theme: item, questions: (ope.themeTests[item.id] || []).filter(isReal) })).filter(pool => pool.questions.length);
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 500) {
      pools.forEach((pool, poolIndex) => {
        if (selected.length >= 55) return;
        const question = pool.questions[(round + seed * 31 + poolIndex * 23) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 6521);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v63-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v63-s${seed}-r${index + 1}`, reserve: true }));
    return { id: `dip-v63-sim${seed}`, title: `Simulacro Diputación ${seed} · 50 + 5 reserva`, questions, reserveQuestions, audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, excludedPendingThemes: [22] } };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-10', changes: [`Añadidas ${addedQuestions} preguntas reales a los temas 27 a 31`, 'Treinta temas elevados al objetivo mínimo de 30 preguntas reales', 'Reforzados presupuesto, datos, transparencia, tributos locales y servicios electrónicos de confianza', 'Regenerados los tres simulacros con exclusión del tema 22'] });

  window.OPOWEB_DIPUTACION_V63 = {
    version: `v${VERSION}`,
    reinforcedThemes: [27, 28, 29, 30, 31],
    addedQuestions,
    cumulativeSecondPassQuestions: 442 + addedQuestions,
    cumulativeManualQuestions: 1027 + addedQuestions,
    themesAtTargetInSecondPass: [...Array.from({ length: 21 }, (_, index) => index + 1), ...Array.from({ length: 9 }, (_, index) => index + 23)],
    targetPerTheme: 30
  };
})();
