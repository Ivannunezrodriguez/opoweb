(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const maps = {
    1: [
      { title: 'Estructura de la Constitución Española', rows: [
        ['Preámbulo', 'Sin artículos', 'Introduce el sentido político del texto; no tiene articulado.'],
        ['Título Preliminar', 'Arts. 1 a 9', 'Principios básicos del Estado, soberanía, Monarquía parlamentaria, unidad/autonomía, lengua, bandera, capital y principios del art. 9.3.'],
        ['Título I. Derechos y deberes fundamentales', 'Arts. 10 a 55', 'Bloque dogmático principal.'],
        ['Título II. La Corona', 'Arts. 56 a 65', 'Jefatura del Estado.'],
        ['Título III. Cortes Generales', 'Arts. 66 a 96', 'Congreso, Senado y elaboración de leyes.'],
        ['Título IV. Gobierno y Administración', 'Arts. 97 a 107', 'Gobierno, Administración y Consejo de Estado.'],
        ['Título V. Relaciones Gobierno-Cortes', 'Arts. 108 a 116', 'Control parlamentario y estados del art. 116.'],
        ['Título VI. Poder Judicial', 'Arts. 117 a 127', 'Jueces, tribunales, CGPJ y Ministerio Fiscal.'],
        ['Título VII. Economía y Hacienda', 'Arts. 128 a 136', 'Economía, tributos, presupuestos y Tribunal de Cuentas.'],
        ['Título VIII. Organización territorial', 'Arts. 137 a 158', 'Municipios, provincias y Comunidades Autónomas.'],
        ['Título IX. Tribunal Constitucional', 'Arts. 159 a 165', 'Composición y competencias del TC.'],
        ['Título X. Reforma constitucional', 'Arts. 166 a 169', 'Procedimientos de reforma.']
      ]},
      { title: 'Derechos y deberes fundamentales de los españoles', rows: [
        ['Base general de los derechos', 'Art. 10', 'Dignidad, derechos inviolables y libre desarrollo de la personalidad.'],
        ['Españoles y extranjeros', 'Arts. 11 a 13', 'Nacionalidad, mayoría de edad, derechos de extranjeros y extradición.'],
        ['Igualdad ante la ley', 'Art. 14', 'Igualdad y prohibición de discriminación.'],
        ['Derechos fundamentales y libertades públicas', 'Arts. 15 a 29', 'Vida, libertad, honor, expresión, reunión, asociación, tutela judicial, educación, sindicación, petición, etc.'],
        ['Derechos y deberes de los ciudadanos', 'Arts. 30 a 38', 'Defensa, objeción, matrimonio, propiedad, trabajo, negociación colectiva, libertad de empresa.'],
        ['Principios rectores', 'Arts. 39 a 52', 'Familia, salud, cultura, vivienda, juventud, discapacidad, mayores, consumidores, organizaciones profesionales.']
      ]},
      { title: 'Garantía de los derechos', rows: [
        ['Garantías de derechos y libertades', 'Art. 53', 'Distingue vinculación de poderes públicos, reserva de ley, recurso de amparo y protección de principios rectores.'],
        ['Defensor del Pueblo', 'Art. 54', 'Alto comisionado de las Cortes para defensa de derechos del Título I.']
      ]},
      { title: 'Suspensión de derechos', rows: [
        ['Suspensión general e individual', 'Art. 55', 'Derechos suspendibles en estados de excepción/sitio y suspensión individual en investigaciones sobre bandas armadas o elementos terroristas.']
      ]},
      { title: 'Reforma constitucional', rows: [
        ['Iniciativa de reforma', 'Art. 166', 'Remite a la iniciativa legislativa constitucionalmente prevista.'],
        ['Reforma ordinaria', 'Art. 167', 'Procedimiento general con mayorías reforzadas y posible referéndum facultativo.'],
        ['Reforma agravada', 'Art. 168', 'Revisión total o reforma del Título Preliminar, Sección 1.ª del Capítulo II del Título I o Título II; referéndum obligatorio.'],
        ['Límites temporales', 'Art. 169', 'No puede iniciarse reforma en guerra o durante alarma, excepción o sitio.']
      ]}
    ],
    2: [
      { title: 'Disposiciones generales de la Ley 39/2015', rows: [
        ['Objeto de la Ley', 'Art. 1', 'Procedimiento administrativo común, requisitos de validez/eficacia, principios sancionadores y responsabilidad patrimonial en su vertiente procedimental.'],
        ['Ámbito subjetivo', 'Art. 2', 'AGE, CCAA, Entidades Locales y sector público institucional en los términos de la ley.']
      ]},
      { title: 'Interesados en el procedimiento', rows: [
        ['Capacidad de obrar', 'Art. 3', 'Quién puede actuar ante las Administraciones.'],
        ['Concepto de interesado', 'Art. 4', 'Promotor, afectado o titular de interés legítimo que comparece.'],
        ['Representación', 'Art. 5', 'Cuándo debe acreditarse y cuándo se presume.'],
        ['Registros electrónicos de apoderamientos', 'Art. 6', 'Apoderamientos apud acta y registro electrónico.'],
        ['Pluralidad de interesados', 'Art. 7', 'Actuación cuando hay varios interesados.'],
        ['Nuevos interesados', 'Art. 8', 'Comunicación a quienes puedan resultar afectados.']
      ]},
      { title: 'Normas generales de actuación administrativa', rows: [
        ['Derechos de las personas', 'Art. 13', 'Derechos ante las Administraciones.'],
        ['Relación electrónica obligatoria o voluntaria', 'Art. 14', 'Quién debe relacionarse electrónicamente y quién puede elegir canal.'],
        ['Lengua del procedimiento', 'Art. 15', 'Uso del castellano y lenguas cooficiales.'],
        ['Registros', 'Art. 16', 'Presentación de documentos y registros electrónicos.'],
        ['Archivo de documentos', 'Art. 17', 'Archivo electrónico único y conservación documental.'],
        ['Colaboración y comparecencia', 'Arts. 18 y 19', 'Deberes de colaboración y comparecencia.'],
        ['Responsabilidad de tramitación', 'Arts. 20 y 21', 'Responsables de tramitar y obligación de resolver expresamente.'],
        ['Suspensión y ampliación del plazo máximo', 'Arts. 22 y 23', 'Cuándo puede suspenderse o ampliarse el plazo para resolver.']
      ]},
      { title: 'Términos y plazos', rows: [
        ['Obligatoriedad de términos y plazos', 'Art. 29', 'Los plazos obligan a autoridades, empleados e interesados.'],
        ['Cómputo de plazos', 'Art. 30', 'Horas, días, meses, años; hábiles/naturales y prórroga si inhábil.'],
        ['Cómputo en registros', 'Art. 31', 'Fecha/hora oficial y orden de presentación.'],
        ['Ampliación de plazos', 'Art. 32', 'Posible si circunstancias lo aconsejan y no perjudica a terceros.'],
        ['Tramitación de urgencia', 'Art. 33', 'Reducción de plazos a la mitad salvo solicitudes y recursos.']
      ]}
    ],
    3: [
      { title: 'Derechos del interesado', rows: [['Derechos en el procedimiento', 'Art. 53', 'Estado de tramitación, expediente, copias, alegaciones, documentos y recursos.']] },
      { title: 'Iniciación del procedimiento', rows: [
        ['Clases de iniciación', 'Art. 54', 'De oficio o a solicitud del interesado.'],
        ['Iniciación de oficio', 'Arts. 58 a 65', 'Propia iniciativa, orden superior, petición razonada o denuncia; especialidades sancionadoras y patrimoniales.'],
        ['Solicitud del interesado', 'Arts. 66 a 69', 'Contenido de solicitud, subsanación, declaraciones responsables y comunicaciones.']
      ]},
      { title: 'Ordenación', rows: [['Impulso y tramitación', 'Arts. 70 a 74', 'Expediente administrativo, impulso de oficio, concentración de trámites y cumplimiento de trámites.']] },
      { title: 'Instrucción', rows: [['Alegaciones, prueba, informes, audiencia e información pública', 'Arts. 75 a 83', 'Actos necesarios para determinar, conocer y comprobar los hechos.']] },
      { title: 'Finalización', rows: [['Resolución y otras formas de terminación', 'Arts. 84 a 95', 'Resolución, desistimiento, renuncia, caducidad, imposibilidad material y terminación convencional.']] },
      { title: 'Tramitación simplificada', rows: [['Procedimiento simplificado', 'Art. 96', 'Por interés público o falta de complejidad, conservando garantías esenciales.']] },
      { title: 'Ejecución', rows: [['Ejecutividad y ejecución forzosa', 'Arts. 97 a 105', 'Medios de ejecución: apremio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.']] }
    ],
    4: [
      { title: 'Revisión de oficio', rows: [
        ['Actos nulos', 'Art. 106', 'Declaración de nulidad con dictamen favorable del órgano consultivo.'],
        ['Declaración de lesividad', 'Art. 107', 'Para actos favorables anulables antes de acudir al contencioso.'],
        ['Suspensión en revisión', 'Art. 108', 'Posible suspensión de ejecución.'],
        ['Revocación y rectificación', 'Art. 109', 'Revocación de actos desfavorables y rectificación de errores materiales, de hecho o aritméticos.'],
        ['Límites de revisión', 'Art. 110', 'Prescripción, equidad, buena fe, derechos de particulares y leyes.']
      ]},
      { title: 'Recursos administrativos', rows: [
        ['Objeto y clases', 'Arts. 112 a 120', 'Alzada, reposición y extraordinario de revisión; reglas generales, audiencia y resolución.'],
        ['Recurso de alzada', 'Arts. 121 y 122', 'Contra actos que no ponen fin a la vía administrativa.'],
        ['Recurso potestativo de reposición', 'Arts. 123 y 124', 'Contra actos que ponen fin a la vía administrativa.'],
        ['Recurso extraordinario de revisión', 'Arts. 125 y 126', 'Contra actos firmes por causas tasadas.']
      ]}
    ],
    5: [
      { title: 'El municipio', rows: [['Elementos y población', 'Arts. 11 a 18 LRBRL', 'Municipio, término municipal, padrón, vecinos, derechos y deberes.']] },
      { title: 'Organización y funcionamiento municipal', rows: [['Órganos municipales', 'Arts. 19 a 24 bis LRBRL', 'Ayuntamiento, Alcalde, Pleno, Junta de Gobierno Local, Tenientes de Alcalde y órganos territoriales.'], ['Sesiones y acuerdos', 'Arts. 46 a 47 LRBRL', 'Convocatoria, sesiones, quórum y mayorías.']] },
      { title: 'Competencias municipales', rows: [['Competencias y servicios', 'Arts. 25 a 27 LRBRL', 'Competencias propias, servicios mínimos y delegación.']] },
      { title: 'Provincia y organización provincial', rows: [['Provincia y Diputación', 'Arts. 31 a 38 LRBRL', 'Provincia, Diputación, Pleno, Presidencia, Junta de Gobierno y competencias provinciales.']] },
      { title: 'Régimen electoral local', rows: [['Elección local', 'LOREG, régimen electoral municipal y provincial', 'Concejales por sufragio universal; Alcalde por concejales o vecinos según ley; Diputados provinciales de forma indirecta.']] }
    ],
    6: [
      { title: 'Personal al servicio de las Administraciones Públicas', rows: [['Clases de empleados públicos', 'Arts. 8 a 13 TREBEP', 'Funcionario de carrera, interino, laboral, eventual y directivo profesional.'], ['Personal local', 'Arts. 89 a 92 bis LRBRL', 'Personal de entidades locales y funciones reservadas.']] },
      { title: 'Provisión de puestos de trabajo', rows: [['Provisión y movilidad', 'Arts. 78 a 82 TREBEP', 'Concurso, libre designación y movilidad.']] },
      { title: 'Carrera administrativa y promoción interna', rows: [['Carrera profesional', 'Arts. 16 a 20 TREBEP', 'Carrera horizontal, vertical, promoción interna y evaluación del desempeño.']] },
      { title: 'Selección y oferta pública de empleo', rows: [['Acceso al empleo público', 'Arts. 55 a 61 TREBEP', 'Igualdad, mérito, capacidad, requisitos, discapacidad, órganos de selección y sistemas selectivos.'], ['Oferta de empleo público', 'Art. 70 TREBEP', 'Necesidades con dotación presupuestaria para personal de nuevo ingreso.']] },
      { title: 'Ley 4/2011 de Castilla-La Mancha', rows: [['Desarrollo autonómico', 'Ley 4/2011 CLM', 'Aplicar como desarrollo autonómico de empleo público en Castilla-La Mancha junto con TREBEP y régimen local.']] }
    ],
    7: [
      { title: 'Derechos y obligaciones preventivas', rows: [['Objeto y conceptos', 'Arts. 1 y 4 LPRL', 'Prevención, riesgo laboral y daño derivado del trabajo.'], ['Protección eficaz', 'Art. 14 LPRL', 'Derecho del trabajador y deber correlativo de protección.'], ['Principios preventivos', 'Art. 15 LPRL', 'Evitar, evaluar, combatir en origen, adaptar, planificar y priorizar protección colectiva.'], ['Obligaciones del trabajador', 'Art. 29 LPRL', 'Uso correcto de equipos, información de riesgos y cooperación.']] },
      { title: 'Servicios de prevención', rows: [['Evaluación y planificación', 'Arts. 16 y 23 LPRL', 'Evaluar riesgos, planificar medidas y documentar la actividad preventiva.'], ['Organización preventiva', 'Arts. 30 a 32 bis LPRL', 'Designación de trabajadores, servicio propio, ajeno, mancomunado y presencia de recursos preventivos.']] },
      { title: 'Consulta y participación', rows: [['Consulta', 'Art. 33 LPRL', 'Consulta sobre planificación, organización, formación y medidas preventivas.'], ['Delegados de prevención', 'Arts. 35 a 37 LPRL', 'Representantes especializados en prevención.'], ['Comité de Seguridad y Salud', 'Arts. 38 y 39 LPRL', 'Órgano paritario de participación cuando proceda.']] }
    ],
    8: [
      { title: 'Igualdad constitucional', rows: [['Igualdad formal', 'Art. 14 CE', 'Igualdad ante la ley y prohibición de discriminación.'], ['Igualdad real', 'Art. 9.2 CE', 'Mandato a poderes públicos de remover obstáculos.']] },
      { title: 'Ley Orgánica 3/2007', rows: [['Objeto', 'Art. 1 LO 3/2007', 'Igualdad efectiva de mujeres y hombres.'], ['Discriminación directa e indirecta', 'Art. 6 LO 3/2007', 'Trato peor por sexo o regla aparentemente neutra con impacto desigual.'], ['Acoso sexual y por razón de sexo', 'Art. 7 LO 3/2007', 'Conductas que atentan contra dignidad.'], ['Acciones positivas', 'Art. 11 LO 3/2007', 'Medidas razonables para corregir desigualdad de hecho.'], ['Transversalidad', 'Art. 15 LO 3/2007', 'Integración del principio de igualdad en actuación de poderes públicos.']] },
      { title: 'Ley 12/2010 de Castilla-La Mancha', rows: [['Igualdad en CLM', 'Ley 12/2010 CLM', 'Aplicación autonómica: transversalidad, empleo público, subvenciones, contratación, comunicación y servicios.']] }
    ],
    9: [
      { title: 'Protección de datos personales', rows: [['Dato personal y tratamiento', 'Art. 4 RGPD', 'Dato personal, tratamiento, responsable, encargado y otros conceptos básicos.'], ['Principios', 'Art. 5 RGPD', 'Licitud, lealtad, transparencia, finalidad, minimización, exactitud, conservación, seguridad y responsabilidad proactiva.'], ['Bases de licitud', 'Art. 6 RGPD', 'Consentimiento, obligación legal, interés público, poderes públicos, etc.'], ['Categorías especiales', 'Art. 9 RGPD', 'Salud, ideología, biometría, origen étnico, sindicatos, etc.']] },
      { title: 'Derechos de las personas', rows: [['Derechos RGPD', 'Arts. 15 a 22 RGPD', 'Acceso, rectificación, supresión, oposición, limitación, portabilidad y decisiones automatizadas.']] },
      { title: 'Responsable, encargado y DPD', rows: [['Responsable y encargado', 'Arts. 24 a 32 RGPD', 'Responsabilidad, encargo, seguridad y medidas técnicas/organizativas.'], ['Delegado de Protección de Datos', 'Arts. 37 a 39 RGPD', 'Designación, posición y funciones del DPD.']] },
      { title: 'Brechas y derechos digitales', rows: [['Brechas de seguridad', 'Arts. 33 y 34 RGPD', 'Notificación a autoridad e interesados cuando proceda.'], ['Derechos digitales', 'LO 3/2018, Título X', 'Intimidad digital, desconexión, menores, videovigilancia, geolocalización y derechos en internet.']] }
    ],
    10: [
      { title: 'Principios de tributación local', rows: [['Recursos de las Haciendas Locales', 'Arts. 2 a 6 TRLRHL', 'Recursos, potestad tributaria y principios generales.'], ['Ordenanzas fiscales', 'Arts. 15 a 19 TRLRHL', 'Imposición, ordenación, aprobación y publicación.']] },
      { title: 'Delegación y colaboración', rows: [['Delegación/colaboración en gestión tributaria', 'TRLRHL + LGT', 'Posible colaboración o delegación de gestión, liquidación, inspección y recaudación cuando proceda.']] },
      { title: 'Beneficios fiscales y compensación', rows: [['Beneficios fiscales', 'TRLRHL + LGT', 'Exenciones, bonificaciones y reducciones con cobertura normativa.'], ['Compensación', 'LGT/RGR', 'Forma de extinción de deudas cuando concurren créditos recíprocos.']] },
      { title: 'Obligaciones tributarias y obligados', rows: [['Obligaciones tributarias', 'LGT', 'Obligación principal, accesorias y formales.'], ['Obligados tributarios', 'LGT', 'Contribuyentes, sustitutos, responsables, sucesores y otros sujetos.']] },
      { title: 'Gestión tributaria y extinción de la deuda', rows: [['Gestión tributaria', 'LGT', 'Declaraciones, autoliquidaciones, liquidaciones, censos, padrones y comprobaciones.'], ['Extinción de la deuda', 'LGT/RGR', 'Pago, prescripción, compensación, condonación y otros medios legales.']] }
    ],
    11: [
      { title: 'Recaudación de tributos locales', rows: [['Función recaudatoria', 'TRLRHL + LGT + RGR', 'Cobro de tributos e ingresos de derecho público, directo o por delegación.']] },
      { title: 'Periodo voluntario', rows: [['Pago en voluntaria', 'LGT/RGR', 'Pago dentro de plazo sin recargos ejecutivos.']] },
      { title: 'Aplazamiento, fraccionamiento y compensación', rows: [['Aplazamiento y fraccionamiento', 'LGT/RGR', 'Solicitud, garantías e intereses cuando proceda.'], ['Compensación', 'LGT/RGR', 'Extinción por créditos recíprocos.']] },
      { title: 'Devolución de ingresos', rows: [['Ingresos indebidos o excesivos', 'LGT/RGR', 'Duplicidad, exceso, anulación o causa normativa.']] },
      { title: 'Recaudación ejecutiva y apremio', rows: [['Periodo ejecutivo', 'LGT/RGR', 'Se abre tras finalizar voluntaria sin pago salvo suspensión/aplazamiento/fraccionamiento.'], ['Procedimiento de apremio', 'LGT/RGR', 'Providencia de apremio, recargos, intereses y embargo.']] }
    ],
    12: [
      { title: 'Normas generales de tributos locales', rows: [['Impuestos municipales', 'Art. 58 TRLRHL', 'Distinguir impuestos obligatorios y potestativos.']] },
      { title: 'IBI', rows: [['Impuesto sobre Bienes Inmuebles', 'Arts. 60 a 77 TRLRHL', 'Naturaleza, hecho imponible, sujeto pasivo, base, cuota, bonificaciones y gestión.']] },
      { title: 'IAE', rows: [['Impuesto sobre Actividades Económicas', 'Arts. 78 a 91 TRLRHL', 'Actividad económica, sujeto pasivo, exenciones, cuotas y gestión.']] },
      { title: 'IVTM', rows: [['Impuesto sobre Vehículos de Tracción Mecánica', 'Arts. 92 a 99 TRLRHL', 'Titularidad de vehículos aptos para circular, sujeto pasivo y cuota.']] },
      { title: 'IIVTNU', rows: [['Incremento de Valor de los Terrenos de Naturaleza Urbana', 'Arts. 104 a 110 TRLRHL', 'Incremento de terrenos urbanos, transmisión o derechos reales, sujeto pasivo y gestión.']] }
    ],
    13: [
      { title: 'Usos del certificado electrónico', rows: [['Identificación y firma de interesados', 'Arts. 9 a 12 Ley 39/2015', 'Identificación, firma electrónica, asistencia y sistemas admitidos.'], ['Relación electrónica', 'Art. 14 Ley 39/2015', 'Sujetos obligados y derecho a elegir canal cuando no hay obligación.']] },
      { title: 'Tipos y soportes del certificado', rows: [['Identificación de la Administración', 'Arts. 38 a 43 Ley 40/2015', 'Sede, portal, sello electrónico, actuación automatizada, CSV y firma del personal.']] },
      { title: 'Autoridades certificadoras y servicios', rows: [['Servicios de confianza', 'Normativa de firma electrónica y servicios de confianza', 'Emisión, renovación, suspensión, revocación, validación, sellado de tiempo y conservación de evidencias.'], ['Registro y documentos electrónicos', 'Arts. 16, 26 y 27 Ley 39/2015', 'Registro, documentos administrativos electrónicos y copias.']] }
    ],
    14: [
      { title: 'Ley 40/2015: principios y órganos', rows: [['Objeto y ámbito', 'Arts. 1 y 2 Ley 40/2015', 'Régimen jurídico del sector público.'], ['Principios generales', 'Art. 3 Ley 40/2015', 'Eficacia, jerarquía, descentralización, coordinación, servicio, transparencia, eficiencia, cooperación, etc.'], ['Órganos administrativos', 'Arts. 5 a 7 Ley 40/2015', 'Órgano administrativo, instrucciones, órdenes y órganos consultivos.']] },
      { title: 'Competencia y técnicas de alteración', rows: [['Competencia', 'Art. 8 Ley 40/2015', 'Irrenunciable salvo delegación/avocación.'], ['Delegación, avocación, encomienda, firma y suplencia', 'Arts. 9 a 13 Ley 40/2015', 'Distinguir cada figura.'], ['Conflictos/decisiones de competencia', 'Art. 14 Ley 40/2015', 'Remisión al órgano competente o requerimiento.']] },
      { title: 'Órganos colegiados', rows: [['Régimen, secretario, convocatorias y actas', 'Arts. 15 a 18 Ley 40/2015', 'Constitución, sesiones, acuerdos y actas.']] },
      { title: 'Abstención y recusación', rows: [['Imparcialidad', 'Arts. 23 y 24 Ley 40/2015', 'Causas de abstención y recusación.']] },
      { title: 'Administración General del Estado', rows: [['Organización AGE', 'Ley 40/2015, organización AGE', 'Órganos centrales, territoriales y en el exterior; Ministerios, Secretarías de Estado, Delegaciones y Subdelegaciones.']] }
    ],
    15: [
      { title: 'Archivos y carpetas', rows: [['Conceptos', 'Bloque Windows', 'Archivo, carpeta, extensión, ruta y propiedades.']] },
      { title: 'Creación, copiado y borrado', rows: [['Operaciones básicas', 'Bloque Windows', 'Crear, copiar, cortar, pegar, mover, renombrar y borrar; diferencias entre unidad local, red y externo.']] },
      { title: 'Unidades locales y de red', rows: [['Almacenamiento y permisos', 'Bloque Windows', 'Discos locales, unidades compartidas, rutas de red y permisos.']] },
      { title: 'Impresión y digitalización', rows: [['Salida y entrada documental', 'Bloque Windows', 'Impresora, escáner, resolución, formato, legibilidad, páginas completas y nombre de archivo.']] }
    ],
    16: [
      { title: 'Navegación por Internet', rows: [['Navegador y URL', 'Bloque Internet', 'Pestañas, barra de direcciones, favoritos, historial, descargas, caché y cookies.']] },
      { title: 'Seguridad básica', rows: [['HTTPS y sede oficial', 'Bloque Internet', 'Comprobar dominio, certificado, sede electrónica y descargas.']] },
      { title: 'Internet Explorer', rows: [['Navegador histórico', 'Bloque Internet', 'Favoritos, historial, opciones de internet, seguridad y compatibilidad.']] },
      { title: 'Microsoft Edge', rows: [['Navegador actual', 'Bloque Internet', 'Perfiles, favoritos, historial, descargas, privacidad, InPrivate y lector PDF.']] }
    ],
    17: [
      { title: 'Procesamiento de texto', rows: [['Word y Writer', 'Bloque Word/Writer', 'Oficios, certificados, actas, informes y comunicaciones.']] },
      { title: 'Formato y estructura', rows: [['Formato de carácter y párrafo', 'Bloque Word/Writer', 'Fuente, tamaño, alineación, sangrías, interlineado, listas y tabulaciones.'], ['Estilos y página', 'Bloque Word/Writer', 'Títulos, encabezados, pies, numeración, márgenes y saltos.']] },
      { title: 'Elementos y revisión', rows: [['Tablas, revisión y plantillas', 'Bloque Word/Writer', 'Tablas, comentarios, control de cambios, combinación de correspondencia y plantillas.']] },
      { title: 'Salida del documento', rows: [['Exportación y PDF', 'Bloque Word/Writer', 'Guardar, compatibilidad DOCX/ODT y exportar a PDF.']] }
    ],
    18: [
      { title: 'Hojas de cálculo', rows: [['Libro, hoja, celda y rango', 'Bloque Excel/Calc', 'Estructura básica de Excel y Calc.']] },
      { title: 'Fórmulas y funciones', rows: [['Fórmulas', 'Bloque Excel/Calc', 'Empiezan por igual; operadores y referencias.'], ['Funciones básicas', 'Bloque Excel/Calc', 'SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA, SI y fechas.']] },
      { title: 'Referencias y datos', rows: [['Referencias relativas/absolutas', 'Bloque Excel/Calc', 'Relativas cambian al copiar; absolutas se fijan con dólar.'], ['Ordenar y filtrar', 'Bloque Excel/Calc', 'Ordenar reorganiza; filtrar muestra sin borrar.']] },
      { title: 'Control y salida', rows: [['Validación, formato e impresión', 'Bloque Excel/Calc', 'Validar, formato condicional, configurar impresión y exportar.']] }
    ],
    19: [
      { title: 'Conceptos generales del ordenador personal', rows: [['Hardware y software', 'Bloque Hardware', 'Componentes físicos frente a programas y sistema operativo.']] },
      { title: 'Componentes más comunes', rows: [['CPU, RAM y almacenamiento', 'Bloque Hardware', 'Procesador, memoria temporal, HDD/SSD y almacenamiento permanente.'], ['Placa, fuente y red', 'Bloque Hardware', 'Conexión de componentes, alimentación y comunicaciones.']] },
      { title: 'Periféricos', rows: [['Entrada, salida y mixtos', 'Bloque Hardware', 'Teclado, ratón, escáner, monitor, impresora, pantalla táctil y multifunción.']] },
      { title: 'Impresoras, escáneres y soportes externos', rows: [['Impresoras y escáneres', 'Bloque Hardware', 'Láser, inyección, multifunción y digitalización.'], ['Discos externos, CD/DVD y USB', 'Bloque Hardware', 'Almacenamiento, transporte de datos y cautelas de seguridad.']] }
    ]
  };

  function applyMaps() {
    data.oposiciones.forEach(ope => {
      ope.themes.forEach(theme => {
        if (maps[theme.number]) theme.officialMap = maps[theme.number];
      });
    });
  }

  function esc(text) {
    return String(text ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  }

  function renderMap(theme) {
    if (!theme.officialMap?.length) return '';
    return `<article class="card"><h2>Mapa del tema oficial</h2><p class="muted">Subdivisión del enunciado oficial para saber qué bloque estudias y qué artículos o referencias corresponden.</p>${theme.officialMap.map(block => `
      <section class="section"><h3>${esc(block.title)}</h3><div class="table-wrap"><table><thead><tr><th>Punto del tema</th><th>Artículos / referencia</th><th>Qué dominar</th></tr></thead><tbody>${block.rows.map(row => `<tr><td>${esc(row[0])}</td><td><strong>${esc(row[1])}</strong></td><td>${esc(row[2])}</td></tr>`).join('')}</tbody></table></div></section>`).join('')}</article>`;
  }

  function renderRows(rows) {
    if (!rows || !rows.length) return '<p class="muted">Sin tabla.</p>';
    const [head, ...body] = rows;
    return `<div class="table-wrap"><table><thead><tr>${head.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function fallbackSourcePanel(t) {
    const src = t.modularSource || 'Temario base';
    return `<div class="card compact"><h3>Fuente modular</h3><span class="badge common">${esc(src)}</span></div>`;
  }

  applyMaps();

  if (typeof themeDetail === 'function') {
    themeDetail = function(t) {
      const panel = typeof sourcePanel === 'function' ? sourcePanel(t) : fallbackSourcePanel(t);
      const badge = typeof themeSourceBadge === 'function' ? themeSourceBadge(t) : '';
      const table = typeof renderTable === 'function' ? renderTable(t.reviewTable) : renderRows(t.reviewTable);
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button>
        ${panel}
        ${renderMap(t)}
        <article class="card"><div class="pill-row"><span class="badge area">${esc(t.area)}</span>${t.commonPotential?'<span class="badge common">común/reutilizable</span>':''}${badge}${t.academiaVersion?'<span class="badge common">resumen academia</span>':''}</div><h2>Tema ${t.number}. ${esc(t.title)}</h2>
        <h3>Artículos y fichas del tema</h3>
        ${(t.sections || []).map(s => `<section class="section"><h3>${esc(s.heading)}</h3>${(s.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join('')}</section>`).join('')}
        <h3>Esquema oficial</h3><pre class="tree">${esc(t.tree || 'Ver mapa del tema oficial.')}</pre>
        <h3>Tabla de repaso</h3>${table}
        </article>`;
    };
  }

  window.OPOWEB_MAPA_TEMAS = { version: 'v32', temas: Object.keys(maps).length };
  if (typeof renderAll === 'function') renderAll();
})();
