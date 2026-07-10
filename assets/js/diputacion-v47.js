(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.47.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    28: {
      source: 'Reglamento (UE) 2016/679; Ley Orgánica 3/2018; Ley 19/2013',
      blocks: [
        ['Protección de datos: marco y principios', [
          'La Ley Orgánica 3/2018 adapta y complementa en España el Reglamento General de Protección de Datos. El derecho protegido recae sobre las personas físicas y permite controlar la obtención, uso, comunicación y conservación de sus datos personales.',
          'Los principios esenciales son licitud, lealtad, transparencia, limitación de la finalidad, minimización, exactitud, limitación del plazo de conservación, integridad, confidencialidad y responsabilidad proactiva.',
          'El consentimiento debe manifestarse mediante declaración o acción afirmativa clara; no se admite consentimiento tácito. En España, un menor puede consentir por sí mismo desde los catorce años, salvo tratamientos para los que la ley exija asistencia de titulares de la patria potestad o tutela.'
        ]],
        ['Tratamientos, datos y derechos', [
          'La terminología actual se centra en tratamientos y registros de actividades de tratamiento. El antiguo sistema general de notificación de ficheros a la Agencia no constituye ya la regla del RGPD.',
          'El responsable determina fines y medios; el encargado trata datos por cuenta del responsable. Debe existir base jurídica, información transparente y medidas apropiadas al riesgo.',
          'Las personas pueden ejercer acceso, rectificación, supresión, oposición, limitación y portabilidad, además de no quedar sometidas a determinadas decisiones exclusivamente automatizadas. El ejercicio es gratuito como regla y debe facilitarse por medios accesibles.'
        ]],
        ['Agencia Española de Protección de Datos', [
          'La AEPD es una autoridad administrativa independiente de ámbito estatal, con personalidad jurídica y plena capacidad, que actúa con plena independencia de los poderes públicos.',
          'Supervisa la aplicación del RGPD y de la Ley Orgánica 3/2018, atiende reclamaciones, investiga tratamientos, ejerce potestades correctivas y sancionadoras, emite directrices y circulares y coopera con otras autoridades de control.',
          'La Presidencia dirige y representa a la Agencia y dicta resoluciones, circulares y directrices. La Agencia no es un órgano jerárquicamente subordinado a una entidad local.'
        ]],
        ['Transparencia y obligación de suministrar información', [
          'La Ley 19/2013 se aplica a las entidades que integran la Administración Local. La publicidad activa exige publicar periódicamente información institucional, organizativa, normativa, económica, presupuestaria, contractual y subvencional relevante.',
          'Las personas físicas o jurídicas que presten servicios públicos o ejerzan potestades administrativas deben suministrar, previo requerimiento, la información necesaria a la Administración a la que estén vinculadas. La obligación se extiende a adjudicatarios en los términos del contrato.',
          'La información activa debe ser periódica, actualizada, clara, estructurada, comprensible, accesible y gratuita, respetando los límites legales y la protección de datos personales.'
        ]],
        ['Acceso y buen gobierno', [
          'El derecho de acceso se ejerce respecto de información pública que obre en poder de los sujetos obligados y haya sido elaborada o adquirida en el ejercicio de sus funciones. Los límites deben aplicarse de forma justificada y proporcionada.',
          'La resolución de acceso se notifica, con carácter general, en un mes, ampliable por otro cuando el volumen o complejidad lo hagan necesario. El silencio es desestimatorio.',
          'Los principios de buen gobierno exigen respeto al ordenamiento y derechos fundamentales, transparencia, eficacia, economía, eficiencia, dedicación al servicio público, imparcialidad, igualdad, diligencia, conducta digna, corrección y responsabilidad por decisiones y actuaciones.'
        ]]
      ],
      hot: ['LOPDGDD complementa al RGPD.', 'Consentimiento: acción afirmativa clara.', 'Edad general de consentimiento digital en España: 14 años.', 'Tratamientos y registro de actividades, no antiguo registro general de ficheros.', 'AEPD: autoridad independiente.', 'Adjudicatarios pueden estar obligados a suministrar información.', 'Acceso: un mes, ampliable otro.', 'Silencio de acceso: desestimatorio.', 'Buen gobierno: imparcialidad, eficiencia y responsabilidad.'],
      recall: ['¿Qué diferencia existe entre responsable y encargado del tratamiento?', '¿Quién debe suministrar información a una Administración previo requerimiento?', '¿Qué principios de buen gobierno se aplican a quienes ejercen responsabilidades públicas?']
    },
    29: {
      source: 'TRLRHL, arts. 60 a 91; normativa catastral y tarifas del IAE',
      blocks: [
        ['IBI: naturaleza y hecho imponible', [
          'El Impuesto sobre Bienes Inmuebles es un tributo directo, real y obligatorio que grava el valor de bienes rústicos, urbanos y de características especiales.',
          'El hecho imponible es la titularidad, según el orden legal de prelación, de una concesión administrativa, un derecho de superficie, un usufructo o el derecho de propiedad. La realización de una modalidad desplaza las posteriores para el mismo inmueble.',
          'No deben confundirse los actos de gestión catastral, que determinan datos y valores, con la gestión tributaria municipal del impuesto.'
        ]],
        ['IBI: sujeto pasivo, exenciones y bonificaciones', [
          'Es sujeto pasivo quien ostenta el derecho que constituye el hecho imponible. Puede repercutir la carga conforme a las normas de Derecho común, pero sigue siendo obligado frente a la Administración.',
          'La ley recoge exenciones automáticas y rogadas para determinados bienes y entidades. Las ordenanzas pueden establecer exenciones por cuota reducida y otros beneficios dentro de habilitación legal.',
          'Las bonificaciones pueden ser obligatorias o potestativas. Entre las obligatorias figuran determinados inmuebles de empresas de urbanización y construcción, viviendas de protección oficial y bienes rústicos de cooperativas agrarias, en los términos legales.'
        ]],
        ['IBI: bases, cuota y período', [
          'La base imponible está constituida por el valor catastral. La base liquidable resulta de practicar, cuando proceda, la reducción legal sobre la base imponible.',
          'La cuota íntegra se obtiene aplicando el tipo a la base liquidable; la cuota líquida resulta de minorar la íntegra con bonificaciones.',
          'El impuesto se devenga el primer día del período impositivo, que coincide con el año natural. Las alteraciones físicas, económicas o jurídicas producen efectos en el período siguiente al que deban tener eficacia catastral.'
        ]],
        ['IAE: naturaleza, hecho imponible y sujeto pasivo', [
          'El Impuesto sobre Actividades Económicas es un tributo directo y real cuyo hecho imponible es el mero ejercicio en territorio nacional de actividades empresariales, profesionales o artísticas, se realicen o no en local y estén o no especificadas en las tarifas.',
          'No constituyen hecho imponible las actividades agrícolas, ganaderas dependientes, forestales y pesqueras; la ganadería independiente sí se considera empresarial.',
          'Son sujetos pasivos las personas físicas, jurídicas y entidades del artículo 35.4 LGT que realicen actividades gravadas.'
        ]],
        ['IAE: exenciones, cuota y devengo', [
          'Están exentas, entre otras, las personas físicas, determinados sujetos durante los dos primeros períodos de actividad y las entidades con importe neto de cifra de negocios inferior a un millón de euros, en los términos legales.',
          'La cuota resulta de aplicar las tarifas, instrucciones, coeficientes y bonificaciones previstos por la ley y, cuando proceda, por la ordenanza fiscal.',
          'El período impositivo coincide con el año natural, salvo inicio de actividad. El impuesto se devenga el primer día del período; cuando la actividad comienza durante el año, el período abarca desde el inicio hasta el 31 de diciembre.'
        ]]
      ],
      hot: ['IBI: directo, real y obligatorio.', 'Prelación IBI: concesión, superficie, usufructo y propiedad.', 'Base imponible IBI = valor catastral.', 'Cuota líquida = íntegra menos bonificaciones.', 'IBI se devenga el 1 de enero.', 'IAE grava el mero ejercicio.', 'Personas físicas exentas de IAE.', 'Exención por cifra de negocios inferior a un millón.', 'IAE: tarifas, coeficientes y bonificaciones.'],
      recall: ['¿Qué orden de derechos determina el hecho imponible del IBI?', '¿Cómo se pasa de valor catastral a cuota líquida?', '¿Qué actividades y sujetos quedan fuera o exentos del IAE?']
    },
    30: {
      source: 'TRLRHL, arts. 20 a 27, 92 a 99 y 104 a 110',
      blocks: [
        ['IVTM: naturaleza y hecho imponible', [
          'El Impuesto sobre Vehículos de Tracción Mecánica es un tributo directo y obligatorio que grava la titularidad de vehículos aptos para circular por vías públicas, cualquiera que sea su clase y categoría.',
          'Se considera apto el vehículo matriculado mientras no cause baja, incluidos permisos temporales y matrícula turística. No están sujetos ciertos vehículos dados de baja por antigüedad autorizados para exhibiciones y remolques o semirremolques con carga útil no superior a 750 kilogramos.',
          'Es sujeto pasivo quien figure como titular en el permiso de circulación.'
        ]],
        ['IVTM: cuota, devengo y gestión', [
          'La cuota se determina mediante tarifas según clase y parámetros como caballos fiscales, plazas, carga útil o cilindrada. El ayuntamiento puede aplicar coeficientes dentro del límite legal y bonificaciones autorizadas por ordenanza.',
          'El período impositivo coincide con el año natural, salvo primera adquisición o baja definitiva. El devengo se produce el primer día del período o en la fecha de adquisición inicial.',
          'La cuota se prorratea por trimestres naturales en primera adquisición, baja definitiva y determinados casos de baja temporal por sustracción. Gestiona el ayuntamiento del domicilio que conste en el permiso de circulación.'
        ]],
        ['IIVTNU: naturaleza, hecho imponible y no sujeción', [
          'El IIVTNU es un tributo directo y potestativo que grava el incremento de valor de terrenos urbanos puesto de manifiesto por transmisión de la propiedad o constitución o transmisión de derechos reales de goce.',
          'No grava terrenos rústicos. Tampoco existe sujeción cuando se acredita que no se produjo incremento de valor comparando los valores de adquisición y transmisión conforme a la ley.',
          'En transmisiones lucrativas es contribuyente quien adquiere; en transmisiones onerosas, quien transmite. Si el transmitente oneroso es persona física no residente, el adquirente actúa como sustituto.'
        ]],
        ['IIVTNU: base, cuota y devengo', [
          'La base se obtiene, como regla objetiva, aplicando al valor catastral del terreno en el devengo el coeficiente correspondiente al período de generación, con un máximo de veinte años y dentro de los coeficientes máximos vigentes.',
          'Si el incremento real acreditado es inferior a la base objetiva, se toma como base el incremento real. El tipo fijado por ordenanza no puede exceder del máximo legal y la cuota puede minorarse mediante bonificaciones autorizadas.',
          'Se devenga en la transmisión de la propiedad o en la constitución o transmisión del derecho. El plazo de declaración es de treinta días hábiles en actos inter vivos y seis meses prorrogables hasta un año en actos por causa de muerte.'
        ]],
        ['Tasas locales', [
          'Las entidades locales pueden establecer tasas por utilización privativa o aprovechamiento especial del dominio público y por servicios o actividades administrativas que afecten o beneficien especialmente al sujeto cuando concurra falta de voluntariedad o inexistencia de prestación privada en los términos legales.',
          'Son sujetos pasivos quienes disfruten, utilicen o aprovechen el dominio público o resulten beneficiados o afectados por el servicio o actividad. La ley contempla sustitutos en determinados casos.',
          'En dominio público, el importe atiende al valor de mercado de la utilidad; en servicios o actividades, la recaudación total no puede superar el coste real o previsible. El devengo puede producirse al comenzar el uso o servicio y puede exigirse depósito previo.'
        ]]
      ],
      hot: ['IVTM: titular en permiso de circulación.', 'Vehículo apto: matriculado y no dado de baja.', 'Cuota IVTM por tarifas, no por valor de compra.', 'Prorrateo trimestral en supuestos legales.', 'IIVTNU solo sobre terrenos urbanos y con incremento.', 'Lucrativa: paga adquirente; onerosa: transmitente.', 'IIVTNU: máximo 20 años.', 'Declaración: 30 días hábiles o 6 meses ampliables a 1 año.', 'Tasa por dominio público o servicio especial.'],
      recall: ['¿Quién es sujeto pasivo del IVTM y qué ayuntamiento lo gestiona?', '¿Cómo se calcula la base del IIVTNU y cuándo se usa el incremento real?', '¿Qué diferencia una tasa de un precio público?']
    },
    31: {
      source: 'Ley 6/2020; Reglamento (UE) 910/2014; Leyes 39/2015 y 40/2015',
      blocks: [
        ['Servicios electrónicos de confianza', [
          'La Ley 6/2020 regula aspectos nacionales de los servicios electrónicos de confianza como complemento del Reglamento eIDAS. Se aplica a prestadores públicos y privados establecidos en España y a ciertos establecimientos permanentes.',
          'Los documentos electrónicos públicos, administrativos y privados tienen el valor y eficacia que correspondan a su naturaleza. El soporte electrónico no reduce por sí mismo su valor jurídico.',
          'Los servicios de confianza comprenden, entre otros, firma, sello, sello de tiempo, entrega electrónica certificada, certificados de autenticación de sitio web y conservación, conforme al marco europeo.'
        ]],
        ['Firma electrónica', [
          'La firma electrónica permite identificar al firmante y expresar su voluntad. La firma avanzada está vinculada de forma única, permite identificar al firmante, se crea bajo su control y detecta modificaciones posteriores.',
          'La firma electrónica cualificada es una firma avanzada creada mediante dispositivo cualificado y basada en certificado cualificado. Tiene efecto jurídico equivalente a la firma manuscrita.',
          'En la Administración se utiliza para solicitudes, declaraciones responsables, recursos, desistimientos, renuncias y demás actuaciones para las que la Ley 39/2015 exige firma.'
        ]],
        ['Certificados: tipos, identidad y soportes', [
          'Un certificado vincula datos de validación con una persona o entidad. Pueden existir certificados de firma de persona física, de representante, de sello de persona jurídica y de autenticación de sitio web.',
          'Los certificados cualificados identifican al titular de forma unívoca. Los de representante incorporan la identidad de la persona o entidad representada y la referencia acreditativa de las facultades.',
          'El certificado puede almacenarse en software, tarjeta criptográfica, DNI electrónico, token u otro dispositivo seguro. El efecto jurídico depende del certificado y del sistema utilizado, no del mero formato físico.'
        ]],
        ['Vigencia, revocación y suspensión', [
          'Los certificados se extinguen por caducidad o revocación. La vigencia de los certificados cualificados no puede superar cinco años.',
          'La revocación procede por solicitud, fallecimiento, incapacidad, extinción de la entidad, fin de la representación, cese del prestador o falsedad e inexactitud, entre otras causas legales.',
          'La suspensión es temporal y debe constar en el servicio de consulta. Si no se levanta dentro de su duración, la vigencia se extingue.'
        ]],
        ['Prestadores y supervisión', [
          'Los prestadores deben publicar información veraz, proteger datos, mantener consulta pública sobre validez y revocación y no almacenar datos de creación de firma o sello salvo gestión por cuenta del titular.',
          'Los prestadores pueden ser cualificados o no cualificados. Los no cualificados no requieren verificación administrativa previa, pero deben comunicar el inicio de actividad al Ministerio dentro de tres meses.',
          'El Ministerio competente actúa como órgano de supervisión de prestadores cualificados y no cualificados. Una autoridad de certificación es el prestador que expide y gestiona certificados y servicios asociados; su inclusión y condición deben comprobarse en las listas de confianza oficiales.'
        ]]
      ],
      hot: ['Ley 6/2020 complementa eIDAS.', 'Documento electrónico conserva valor según su naturaleza.', 'Firma cualificada = equivalente a manuscrita.', 'Certificados de firma, representación, sello y sitio web.', 'Vigencia cualificada: máximo 5 años.', 'Caducidad, revocación y suspensión son distintas.', 'El soporte no determina por sí solo el nivel jurídico.', 'Prestador mantiene servicio de consulta.', 'No cualificado comunica actividad en 3 meses.', 'Supervisión ministerial.'],
      recall: ['¿Qué distingue firma avanzada de firma cualificada?', '¿Qué certificados se usan para persona física, representación, persona jurídica y sitio web?', '¿Qué obligaciones principales tiene un prestador de servicios de confianza?']
    }
  };

  const rawQuestions = {
    28: [
      ['¿Qué relación existe entre la Ley Orgánica 3/2018 y el RGPD?', 'La ley orgánica adapta y complementa el RGPD en España.', ['La ley deroga el RGPD.', 'Son normas incompatibles.', 'El RGPD solo se aplica a empresas privadas.'], 'Artículo 1 de la Ley Orgánica 3/2018.'],
      ['¿Se admite el consentimiento tácito para tratar datos?', 'No; se requiere declaración o acción afirmativa clara.', ['Sí, siempre.', 'Solo en Administraciones.', 'Solo para categorías especiales.'], 'RGPD y preámbulo de la Ley Orgánica 3/2018.'],
      ['¿Desde qué edad puede consentir generalmente un menor en España?', 'Desde los catorce años.', ['Desde los doce.', 'Desde los dieciséis siempre.', 'Desde los dieciocho sin excepción.'], 'Artículo 7 de la Ley Orgánica 3/2018.'],
      ['¿Qué exige el principio de exactitud?', 'Que los datos sean exactos y se rectifiquen o supriman sin dilación cuando proceda.', ['Conservar todo dato indefinidamente.', 'Publicar todos los datos.', 'Obtener siempre consentimiento.'], 'Artículo 5 del RGPD y artículo 4 de la Ley Orgánica 3/2018.'],
      ['¿Cuál es la terminología central del marco actual?', 'Tratamientos y registros de actividades de tratamiento.', ['Ficheros inscritos obligatoriamente en un registro general.', 'Archivos secretos.', 'Bases sin responsable.'], 'RGPD y Ley Orgánica 3/2018.'],
      ['¿Qué es la AEPD?', 'Una autoridad administrativa independiente de ámbito estatal.', ['Una dirección general de una diputación.', 'Un tribunal judicial.', 'Una empresa certificadora.'], 'Artículo 44 de la Ley Orgánica 3/2018.'],
      ['¿Qué función corresponde a la AEPD?', 'Supervisar la aplicación del RGPD y de la ley orgánica.', ['Aprobar presupuestos locales.', 'Expedir DNI.', 'Resolver recursos tributarios.'], 'Artículo 47 de la Ley Orgánica 3/2018.'],
      ['¿Están las entidades locales sujetas a la Ley 19/2013?', 'Sí.', ['No.', 'Solo si tienen más de 50.000 habitantes.', 'Solo las diputaciones.'], 'Artículo 2 de la Ley 19/2013.'],
      ['¿Quién debe suministrar información previo requerimiento?', 'Quien presta servicios públicos o ejerce potestades vinculado a la Administración.', ['Cualquier persona sin relación.', 'Solo funcionarios.', 'Solo partidos políticos.'], 'Artículo 4 de la Ley 19/2013.'],
      ['¿Puede afectar esa obligación a adjudicatarios?', 'Sí, en los términos del contrato.', ['No.', 'Solo en contratos privados.', 'Solo tras sentencia penal.'], 'Artículo 4 de la Ley 19/2013.'],
      ['¿Cómo debe publicarse la información activa?', 'Periódica, actualizada, clara, accesible y gratuita.', ['Solo a petición.', 'Sin actualizar.', 'Siempre de pago.'], 'Artículo 5 de la Ley 19/2013.'],
      ['¿Cuál es el plazo general para resolver una solicitud de acceso?', 'Un mes, ampliable por otro.', ['Diez días sin ampliación.', 'Tres meses.', 'Seis meses.'], 'Artículo 20 de la Ley 19/2013.'],
      ['¿Qué sentido tiene el silencio en acceso a información?', 'Desestimatorio.', ['Estimatorio.', 'Caducidad automática.', 'Suspensivo.'], 'Artículo 20.4 de la Ley 19/2013.'],
      ['¿Qué principio exige criterio independiente de intereses particulares?', 'Imparcialidad.', ['Publicidad comercial.', 'Jerarquía.', 'Territorialidad.'], 'Artículo 26 de la Ley 19/2013.'],
      ['¿Qué principio exige asumir decisiones y actuaciones propias?', 'Responsabilidad.', ['Secreto.', 'Desconcentración.', 'Delegación.'], 'Artículo 26 de la Ley 19/2013.']
    ],
    29: [
      ['¿Qué naturaleza tiene el IBI?', 'Tributo directo de carácter real.', ['Tributo indirecto y personal.', 'Tasa.', 'Precio público.'], 'Artículo 60 del TRLRHL.'],
      ['¿Qué grava el IBI?', 'El valor de bienes inmuebles en los términos legales.', ['La renta anual del propietario.', 'La transmisión del inmueble.', 'La actividad empresarial.'], 'Artículo 60 del TRLRHL.'],
      ['¿Qué derecho ocupa el primer lugar en la prelación del hecho imponible?', 'La concesión administrativa.', ['La propiedad.', 'El arrendamiento.', 'La hipoteca.'], 'Artículo 61 del TRLRHL.'],
      ['¿Qué derecho sigue a la concesión en la prelación?', 'El derecho de superficie.', ['La propiedad.', 'La nuda propiedad.', 'La servidumbre.'], 'Artículo 61 del TRLRHL.'],
      ['¿Quién es sujeto pasivo del IBI?', 'Quien ostenta el derecho constitutivo del hecho imponible.', ['Siempre el arrendatario.', 'El Catastro.', 'La Diputación en todo caso.'], 'Artículo 63 del TRLRHL.'],
      ['¿Cuál es la base imponible del IBI?', 'El valor catastral.', ['El precio de compraventa siempre.', 'La renta de alquiler.', 'La cuota del año anterior.'], 'Artículo 65 del TRLRHL.'],
      ['¿Cómo se obtiene la base liquidable?', 'Aplicando la reducción legal a la base imponible cuando proceda.', ['Sumando sanciones.', 'Restando la cuota.', 'Aplicando el tipo.'], 'Artículo 66 del TRLRHL.'],
      ['¿Cómo se obtiene la cuota líquida?', 'Minorando la cuota íntegra con bonificaciones.', ['Aplicando recargos a la base.', 'Restando el valor catastral.', 'Sumando sanciones.'], 'Artículo 71 del TRLRHL.'],
      ['¿Cuándo se devenga el IBI?', 'El primer día del período impositivo.', ['Al final del año.', 'Al vender el inmueble.', 'Al notificarse el recibo.'], 'Artículo 75 del TRLRHL.'],
      ['¿Cuál es el período impositivo del IBI?', 'El año natural.', ['El trimestre.', 'Cinco años.', 'El mandato municipal.'], 'Artículo 75 del TRLRHL.'],
      ['¿Qué grava el IAE?', 'El mero ejercicio de actividades empresariales, profesionales o artísticas.', ['Solo beneficios.', 'Solo actividades en local.', 'La propiedad inmobiliaria.'], 'Artículo 78 del TRLRHL.'],
      ['¿Están sujetas al IAE las actividades agrícolas?', 'No, con las precisiones legales.', ['Sí, siempre.', 'Solo si no tienen local.', 'Solo las personas físicas.'], 'Artículo 78.2 del TRLRHL.'],
      ['¿Están exentas del IAE las personas físicas?', 'Sí.', ['No.', 'Solo el primer año.', 'Solo si son profesionales.'], 'Artículo 82 del TRLRHL.'],
      ['¿Qué cifra de negocios opera en la exención general del IAE?', 'Inferior a un millón de euros.', ['Inferior a cien mil.', 'Superior a diez millones.', 'No existe umbral.'], 'Artículo 82.1.c del TRLRHL.'],
      ['¿Cómo se forma la cuota del IAE?', 'Mediante tarifas, coeficientes y bonificaciones aplicables.', ['Por valor catastral.', 'Por precio de venta.', 'Por número de empleados exclusivamente.'], 'Artículo 84 del TRLRHL.']
    ],
    30: [
      ['¿Qué grava el IVTM?', 'La titularidad de vehículos aptos para circular.', ['La compra de combustible.', 'La transmisión de inmuebles.', 'El uso de aparcamientos.'], 'Artículo 92 del TRLRHL.'],
      ['¿Quién es sujeto pasivo del IVTM?', 'Quien figura como titular en el permiso de circulación.', ['El conductor habitual siempre.', 'El fabricante.', 'La aseguradora.'], 'Artículo 94 del TRLRHL.'],
      ['¿Qué remolques no están sujetos?', 'Los de carga útil no superior a 750 kilogramos.', ['Todos.', 'Los de más de 750 kilogramos.', 'Ninguno.'], 'Artículo 92.3 del TRLRHL.'],
      ['¿Cómo se determina la cuota del IVTM?', 'Por tarifas según clase y parámetros del vehículo.', ['Por valor de compra.', 'Por renta del titular.', 'Por kilómetros recorridos.'], 'Artículo 95 del TRLRHL.'],
      ['¿Cuál es el coeficiente municipal máximo sobre las cuotas del IVTM?', 'Dos.', ['Uno coma uno.', 'Cinco.', 'No existe límite.'], 'Artículo 95.4 del TRLRHL.'],
      ['¿Cuándo se devenga ordinariamente el IVTM?', 'El primer día del período impositivo.', ['El 31 de diciembre.', 'Al pasar la ITV.', 'Al pagar el seguro.'], 'Artículo 96 del TRLRHL.'],
      ['¿Qué grava el IIVTNU?', 'El incremento de valor de terrenos urbanos manifestado por transmisión o derechos reales.', ['Cualquier venta de mueble.', 'La mera propiedad anual.', 'El valor de terrenos rústicos.'], 'Artículo 104 del TRLRHL.'],
      ['¿Existe sujeción si se acredita ausencia de incremento?', 'No.', ['Sí, siempre.', 'Solo en herencias.', 'Solo si hay hipoteca.'], 'Artículo 104.5 del TRLRHL.'],
      ['¿Quién paga en una transmisión lucrativa?', 'Quien adquiere el terreno o derecho.', ['Quien transmite.', 'El notario.', 'El Catastro.'], 'Artículo 106 del TRLRHL.'],
      ['¿Quién paga en una transmisión onerosa?', 'Quien transmite, salvo regla del no residente.', ['Siempre quien adquiere.', 'El banco.', 'El ayuntamiento.'], 'Artículo 106 del TRLRHL.'],
      ['¿Cuál es el período máximo de generación en el IIVTNU?', 'Veinte años.', ['Diez años.', 'Treinta años.', 'Sin máximo.'], 'Artículo 107 del TRLRHL.'],
      ['¿Qué plazo hay para declarar una transmisión inter vivos?', 'Treinta días hábiles.', ['Diez días naturales.', 'Seis meses.', 'Un año.'], 'Artículo 110 del TRLRHL.'],
      ['¿Qué plazo inicial hay en transmisiones mortis causa?', 'Seis meses, prorrogables hasta un año.', ['Un mes.', 'Treinta días hábiles.', 'Dos años.'], 'Artículo 110 del TRLRHL.'],
      ['¿Por qué hechos pueden establecerse tasas?', 'Dominio público local o servicios y actividades especiales.', ['Por cualquier actividad privada.', 'Por votar.', 'Por ejercer derechos fundamentales.'], 'Artículo 20 del TRLRHL.'],
      ['¿Puede la recaudación total de una tasa por servicio superar el coste?', 'No, con carácter general.', ['Sí, sin límite.', 'Solo en capitales.', 'Siempre debe duplicarlo.'], 'Artículo 24.2 del TRLRHL.']
    ],
    31: [
      ['¿Qué norma europea complementa la Ley 6/2020?', 'El Reglamento eIDAS.', ['El RGPD exclusivamente.', 'La Directiva de servicios.', 'El Código Civil.'], 'Artículo 1 de la Ley 6/2020.'],
      ['¿Pierde valor un documento por ser electrónico?', 'No; tiene el valor correspondiente a su naturaleza.', ['Sí, siempre.', 'Solo vale si se imprime.', 'Nunca es prueba.'], 'Artículo 3 de la Ley 6/2020.'],
      ['¿Qué firma equivale jurídicamente a la manuscrita?', 'La firma electrónica cualificada.', ['Cualquier nombre escrito.', 'La firma escaneada siempre.', 'Un correo sin autenticación.'], 'Reglamento (UE) 910/2014.'],
      ['¿Qué caracteriza la firma avanzada?', 'Vinculación única, identificación, control y detección de cambios.', ['Anonimato absoluto.', 'Ausencia de certificado siempre.', 'Solo soporte papel.'], 'Reglamento (UE) 910/2014.'],
      ['¿Cuál es la vigencia máxima de un certificado cualificado?', 'Cinco años.', ['Un año obligatorio.', 'Diez años.', 'Ilimitada.'], 'Artículo 4 de la Ley 6/2020.'],
      ['¿Cómo puede extinguirse un certificado?', 'Por caducidad o revocación.', ['Solo por sentencia.', 'Solo por fallecimiento.', 'Nunca antes de cinco años.'], 'Artículos 4 y 5 de la Ley 6/2020.'],
      ['¿Qué certificado se asocia a una persona jurídica para firmar como entidad?', 'Certificado de sello electrónico.', ['Certificado de firma manuscrita.', 'Certificado catastral.', 'Certificado médico.'], 'Artículo 6 de la Ley 6/2020 y Reglamento eIDAS.'],
      ['¿Qué incorpora un certificado de representante?', 'Identidad del representado y acreditación de facultades.', ['Solo el domicilio del prestador.', 'El salario del representante.', 'La contraseña del representado.'], 'Artículo 6.2 de la Ley 6/2020.'],
      ['¿Puede un certificado almacenarse en software o tarjeta?', 'Sí; el soporte puede variar.', ['No, solo en papel.', 'Solo en tarjeta.', 'Solo en un servidor público.'], 'El soporte no determina por sí solo el efecto jurídico.'],
      ['¿Qué debe ofrecer un prestador que expide certificados?', 'Consulta pública de validez o revocación.', ['Acceso a claves privadas ajenas.', 'Eliminación inmediata de todo registro.', 'Garantía de vigencia ilimitada.'], 'Artículo 9.2 de la Ley 6/2020.'],
      ['¿Puede el prestador copiar datos de creación de firma?', 'No, salvo gestión en nombre del titular.', ['Sí, libremente.', 'Solo para publicidad.', 'Siempre debe hacerlo.'], 'Artículo 9.1.b de la Ley 6/2020.'],
      ['¿Qué plazo tiene un prestador no cualificado para comunicar el inicio?', 'Tres meses.', ['Diez días.', 'Un año.', 'No debe comunicarlo.'], 'Artículo 12 de la Ley 6/2020.'],
      ['¿Quién supervisa a los prestadores en España según la Ley 6/2020?', 'El Ministerio competente en transformación digital.', ['La Diputación de Toledo.', 'El Tribunal Constitucional.', 'La AEPD en exclusiva.'], 'Artículo 14 de la Ley 6/2020.'],
      ['¿Qué debe hacer el prestador si usa pseudónimo?', 'Comprobar la identidad real y conservar su acreditación.', ['No identificar nunca al titular.', 'Publicar la identidad.', 'Eliminar toda documentación.'], 'Artículo 8 de la Ley 6/2020.'],
      ['¿Para qué actuación exige firma la Ley 39/2015?', 'Interponer un recurso administrativo.', ['Consultar información pública sin identificarse siempre.', 'Leer una notificación ya abierta.', 'Buscar una norma.'], 'Artículo 11.2 de la Ley 39/2015.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      28: 'BOE · RGPD / LO 3/2018 / Ley 19/2013',
      29: 'BOE · TRLRHL: IBI e IAE',
      30: 'BOE · TRLRHL: IVTM, IIVTNU y tasas',
      31: 'BOE · Ley 6/2020 / eIDAS / Ley 39/2015'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v47-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source: sources[number]
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
      sec('Resumen orientado al aprobado', [`Tema de alta rentabilidad para test y supuesto práctico. Fuente principal: ${value.source}. Distingue siempre sujeto, hecho, base, procedimiento, plazo y efecto.`]),
      sec('Rigor normativo', ['Contenido revisado sobre textos consolidados oficiales vigentes en julio de 2026. Se evitan datos variables de ordenanzas concretas y denominaciones tecnológicas no respaldadas por la norma.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Norma', value.source],
      ['Sujeto', 'Interesado, responsable, encargado, AEPD, contribuyente, sustituto, prestador o autoridad supervisora.'],
      ['Hecho o actuación', 'Tratamiento, acceso, titularidad, actividad, transmisión, uso de dominio, firma o expedición.'],
      ['Plazo', 'Respuesta, devengo, período, declaración, vigencia, revocación o comunicación.'],
      ['Efecto', 'Derecho, exención, cuota, no sujeción, validez, suspensión, transparencia o responsabilidad.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v47';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.47';

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
    version: 'v0.47.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4700 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 220) {
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
    const ordered = shuffle(selected, seed * 4721);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v47-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v47-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v47-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, expectedMain: 50, expectedReserve: 5, minutes: 60, coveredThemes: new Set(ordered.map(question => question.auditTheme)).size, realOnly: true }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Desarrollados en profundidad los temas 28 a 31 de Diputación',
      'Añadidas 60 preguntas manuales de protección de datos, transparencia, tributos y firma electrónica',
      'Alcanzados 24 temas profundos y 360 preguntas manuales acumuladas',
      'Regenerados simulacros exclusivamente con preguntas reales'
    ]
  });

  window.OPOWEB_DIPUTACION_V47 = {
    version: `v${VERSION}`,
    revisedThemes: [28, 29, 30, 31],
    manualQuestions: 60,
    cumulativeManualQuestions: 360,
    totalDeepThemes: 24,
    pendingInternalThemes: [22],
    officialSources: ['RGPD', 'Ley Orgánica 3/2018', 'Ley 19/2013', 'TRLRHL', 'Ley 6/2020', 'Reglamento eIDAS']
  };
})();