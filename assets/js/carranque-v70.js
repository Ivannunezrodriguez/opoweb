(() => {
  const data = window.OPOSICIONES_DATA;
  const carranque = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  const diputacion = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!carranque || !diputacion) return;

  const VERSION = '0.70.0';
  const TARGET = 30;
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];
  const mapping = {
    11: [17, 18, 19],
    13: [16],
    14: [5, 6, 9],
    15: [13, 14, 15],
    16: [25, 29, 30],
    17: [25, 26, 27]
  };
  const blocked = ['oapgt', 'acuerdo regulador', 'diputacion provincial de toledo', 'groupwise', 'libreoffice base', 'libreoffice impress', 'universidad carlos iii'];

  const curated = {
    12: {
      sections: [
        ['Clasificación de los bienes locales', ['El patrimonio de las entidades locales está formado por bienes, derechos y acciones. Los bienes se clasifican en dominio público y patrimoniales; los comunales tienen un régimen especial de aprovechamiento vecinal.', 'Los bienes de dominio público pueden ser de uso público o de servicio público. Son inalienables, inembargables e imprescriptibles mientras mantengan esa condición.']],
        ['Adquisición, alteración y protección', ['Las entidades locales pueden adquirir bienes por atribución legal, negocio jurídico, prescripción, ocupación y otros modos admitidos. La alteración de la calificación jurídica requiere expediente y acuerdo del órgano competente.', 'La Administración local debe proteger y defender su patrimonio mediante inventario, inscripción registral, investigación, deslinde, recuperación de oficio y desahucio administrativo cuando proceda.']],
        ['Utilización y aprovechamiento', ['El uso común general del dominio público se ejerce libremente conforme a su naturaleza; el uso común especial puede someterse a licencia; el uso privativo exige título habilitante y normalmente concesión.', 'Los bienes patrimoniales se administran con criterios de rentabilidad y pueden enajenarse o cederse conforme al procedimiento y límites legales.']]
      ],
      rows: [
        ['¿Qué integra el patrimonio de una entidad local?', 'Sus bienes, derechos y acciones.', ['Solo los inmuebles.', 'Únicamente los tributos.', 'Los bienes estatales situados en el municipio.'], 'Artículo 1 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Cómo se clasifican los bienes de las entidades locales?', 'En bienes de dominio público y bienes patrimoniales.', ['En muebles e inmuebles exclusivamente.', 'En tributarios y no tributarios.', 'En estatales y autonómicos.'], 'Artículo 2 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué categorías comprende el dominio público local?', 'Bienes de uso público y bienes de servicio público.', ['Bienes privados y comunales.', 'Bienes fiscales y financieros.', 'Bienes registrales y no registrales.'], 'Artículo 3 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Cuál es un ejemplo de bien de uso público local?', 'Una calle o plaza.', ['Una oficina arrendada a un particular.', 'Una acción mercantil.', 'Un crédito tributario.'], 'Artículo 3 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Cuál es un ejemplo de bien afecto a un servicio público?', 'Un edificio destinado a biblioteca municipal.', ['Una finca sin uso público.', 'Una cuenta bancaria.', 'Un solar en venta.'], 'Artículo 4 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué caracteriza a los bienes comunales?', 'Su aprovechamiento corresponde al común de los vecinos.', ['Pertenecen a una empresa privada.', 'Son siempre carreteras.', 'Carecen de titularidad pública.'], 'Artículo 2.3 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué bienes tienen carácter patrimonial?', 'Los que no están destinados a uso público ni afectados a servicio público.', ['Todas las vías públicas.', 'Los montes comunales siempre.', 'Los edificios administrativos en servicio.'], 'Artículo 6 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Son los bienes de dominio público inalienables?', 'Sí, mientras conserven esa calificación.', ['No, pueden venderse libremente.', 'Solo los muebles.', 'Solo durante diez años.'], 'Artículo 5 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Pueden embargarse los bienes de dominio público?', 'No.', ['Sí, sin límite.', 'Solo por deudas tributarias.', 'Sí, si lo acuerda el alcalde.'], 'Artículo 5 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Puede adquirirse por prescripción un bien de dominio público?', 'No, mientras mantenga esa condición.', ['Sí, a los cinco años.', 'Sí, a los veinte años.', 'Solo por otra Administración.'], 'Artículo 5 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué exige normalmente la alteración expresa de la calificación jurídica de un bien?', 'Expediente que acredite oportunidad y legalidad y acuerdo competente.', ['Una comunicación verbal.', 'Una simple anotación contable.', 'Una autorización del adjudicatario.'], 'Reglamento de Bienes de las Entidades Locales, alteración de calificación.'],
        ['¿Qué efecto tiene la desafectación de un bien demanial?', 'Pasa a tener carácter patrimonial cuando se completa legalmente.', ['Se convierte en bien estatal.', 'Pierde toda titularidad.', 'Queda automáticamente vendido.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Puede la entidad local adquirir bienes a título gratuito?', 'Sí, mediante donación, herencia, legado u otros modos admitidos.', ['No, nunca.', 'Solo bienes muebles.', 'Solo con autorización judicial.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué requisito puede exigirse para aceptar una herencia?', 'Que se acepte a beneficio de inventario cuando legalmente proceda.', ['Renunciar al inventario.', 'Pagar al donante.', 'Transformarla en concesión.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué documento sistematiza los bienes y derechos locales?', 'El inventario de bienes y derechos.', ['El padrón municipal.', 'El registro de facturas.', 'La relación de puestos de trabajo.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Con qué periodicidad debe rectificarse el inventario?', 'Anualmente.', ['Cada diez años.', 'Solo al cambiar el alcalde.', 'Nunca después de aprobado.'], 'Artículo 33 del Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué debe hacerse con los bienes inmuebles y derechos reales inscribibles?', 'Promover su inscripción en el Registro de la Propiedad.', ['Mantenerlos fuera de todo registro.', 'Inscribirlos en el Registro Mercantil.', 'Publicarlos solo en el tablón.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué potestad permite averiguar si determinados bienes pertenecen a la entidad?', 'La potestad de investigación.', ['La potestad sancionadora exclusivamente.', 'La potestad tributaria.', 'La potestad legislativa.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué finalidad tiene el deslinde administrativo?', 'Precisar los límites de los bienes públicos respecto de colindantes.', ['Transmitir la propiedad.', 'Imponer un tributo.', 'Aprobar una ordenanza fiscal.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué potestad permite recuperar la posesión indebidamente perdida?', 'La recuperación de oficio.', ['La expropiación legislativa.', 'La revisión de precios.', 'La compensación tributaria.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Existe límite temporal para recuperar de oficio un bien de dominio público?', 'No mientras conserve su carácter demanial.', ['Sí, un mes.', 'Sí, un año.', 'Sí, cuatro años.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué plazo general limita la recuperación de oficio de bienes patrimoniales?', 'Un año desde la usurpación; después debe acudirse a la jurisdicción.', ['No existe límite.', 'Diez días.', 'Cinco años.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué es el uso común general del dominio público?', 'El que corresponde por igual a todos sin circunstancias especiales.', ['La ocupación exclusiva por un particular.', 'La venta del bien.', 'El arrendamiento patrimonial.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué título suele requerir el uso común especial?', 'Licencia o autorización.', ['Sentencia penal.', 'Contrato laboral.', 'Ordenanza presupuestaria.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué título requiere normalmente el uso privativo intenso del dominio público?', 'Concesión administrativa.', ['Empadronamiento.', 'Subvención nominativa.', 'Recurso de reposición.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Puede una concesión demanial transmitirse libremente?', 'No, debe respetar el título y las autorizaciones exigibles.', ['Sí, siempre.', 'Solo con comunicación posterior.', 'Sí, si no paga tasa.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Cómo deben administrarse los bienes patrimoniales?', 'Con criterios de rentabilidad y buena gestión, respetando su normativa.', ['Sin inventario.', 'Como bienes sin dueño.', 'Exclusivamente mediante concesión demanial.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué procedimiento general rige la enajenación onerosa de inmuebles patrimoniales?', 'El procedimiento legal con valoración, competencia y publicidad o concurrencia cuando proceda.', ['La venta verbal.', 'La adjudicación secreta.', 'La ocupación directa por el comprador.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Puede cederse gratuitamente un bien patrimonial?', 'Sí, en los supuestos, beneficiarios y condiciones legalmente previstos.', ['No, nunca.', 'A cualquier particular sin finalidad.', 'Sin acuerdo ni expediente.'], 'Reglamento de Bienes de las Entidades Locales.'],
        ['¿Qué obligación general tiene la entidad local respecto de su patrimonio?', 'Conservarlo, protegerlo, defenderlo y utilizarlo conforme a su destino.', ['Abandonarlo si no produce ingresos.', 'Enajenarlo obligatoriamente.', 'Excluirlo del inventario.'], 'Ley 7/1985 y Reglamento de Bienes de las Entidades Locales.']
      ]
    },
    18: {
      sections: [
        ['Estructura del presupuesto de gastos', ['La estructura económica clasifica los créditos por naturaleza: operaciones corrientes, de capital, financieras y fondo de contingencia cuando proceda.', 'La clasificación por programas ordena el gasto según finalidad y objetivos; la clasificación orgánica identifica la unidad gestora cuando la entidad la utiliza.']],
        ['Estructura del presupuesto de ingresos', ['Los ingresos se ordenan por naturaleza económica en capítulos: impuestos directos, indirectos, tasas y otros ingresos, transferencias corrientes, ingresos patrimoniales, enajenación de inversiones, transferencias de capital, activos y pasivos financieros.', 'La aplicación presupuestaria resulta de la combinación de las clasificaciones establecidas por la entidad dentro del marco normativo.']],
        ['Vinculación y gestión', ['Los créditos tienen carácter limitativo y vinculante según el nivel definido en las bases de ejecución. La estructura debe permitir seguimiento, control, liquidación y rendición de cuentas.', 'La clasificación no sustituye la autorización del gasto ni la existencia de crédito adecuado y suficiente.']]
      ],
      rows: [
        ['¿Qué norma aprueba la estructura de los presupuestos de las entidades locales?', 'La Orden EHA/3565/2008.', ['El Código Civil.', 'La Ley de Enjuiciamiento Criminal.', 'El Reglamento de Bienes.'], 'Orden EHA/3565/2008.'],
        ['¿Qué clasificación ordena el gasto según finalidad y objetivos?', 'La clasificación por programas.', ['La clasificación alfabética.', 'La clasificación registral.', 'La clasificación padronal.'], 'Orden EHA/3565/2008.'],
        ['¿Qué clasificación ordena gastos e ingresos según su naturaleza?', 'La clasificación económica.', ['La clasificación territorial.', 'La clasificación electoral.', 'La clasificación laboral.'], 'Orden EHA/3565/2008.'],
        ['¿Qué clasificación identifica la unidad responsable de gestionar un crédito?', 'La clasificación orgánica cuando sea utilizada.', ['La clasificación por edades.', 'La clasificación catastral.', 'La clasificación judicial.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 1 del presupuesto de gastos?', 'Gastos de personal.', ['Gastos financieros.', 'Inversiones reales.', 'Transferencias de capital.'], 'Orden EHA/3565/2008, clasificación económica del gasto.'],
        ['¿Qué representa el capítulo 2 del presupuesto de gastos?', 'Gastos corrientes en bienes y servicios.', ['Activos financieros.', 'Pasivos financieros.', 'Transferencias de capital.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 3 del presupuesto de gastos?', 'Gastos financieros.', ['Personal.', 'Inversiones reales.', 'Enajenación de inversiones.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 4 del presupuesto de gastos?', 'Transferencias corrientes.', ['Impuestos directos.', 'Activos financieros.', 'Inversiones reales.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 5 del presupuesto de gastos?', 'Fondo de contingencia y otros imprevistos.', ['Tasas.', 'Transferencias corrientes.', 'Personal.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 6 del presupuesto de gastos?', 'Inversiones reales.', ['Gastos financieros.', 'Pasivos financieros.', 'Impuestos indirectos.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 7 del presupuesto de gastos?', 'Transferencias de capital.', ['Gastos corrientes.', 'Activos financieros.', 'Tasas.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 8 del presupuesto de gastos?', 'Activos financieros.', ['Pasivos financieros.', 'Impuestos directos.', 'Ingresos patrimoniales.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 9 del presupuesto de gastos?', 'Pasivos financieros.', ['Personal.', 'Transferencias corrientes.', 'Enajenación de inversiones.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 1 del presupuesto de ingresos?', 'Impuestos directos.', ['Tasas.', 'Transferencias corrientes.', 'Pasivos financieros.'], 'Orden EHA/3565/2008, clasificación económica del ingreso.'],
        ['¿Qué representa el capítulo 2 del presupuesto de ingresos?', 'Impuestos indirectos.', ['Ingresos patrimoniales.', 'Activos financieros.', 'Transferencias de capital.'], 'Orden EHA/3565/2008.'],
        ['¿Qué agrupa el capítulo 3 de ingresos?', 'Tasas, precios públicos y otros ingresos.', ['Solo impuestos directos.', 'Solo deuda pública.', 'Solo subvenciones de capital.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 4 de ingresos?', 'Transferencias corrientes.', ['Enajenación de inversiones.', 'Pasivos financieros.', 'Impuestos indirectos.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 5 de ingresos?', 'Ingresos patrimoniales.', ['Gastos de personal.', 'Tasas exclusivamente.', 'Transferencias de capital.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 6 de ingresos?', 'Enajenación de inversiones reales.', ['Transferencias corrientes.', 'Activos financieros.', 'Impuestos directos.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 7 de ingresos?', 'Transferencias de capital.', ['Ingresos patrimoniales.', 'Pasivos financieros.', 'Tasas.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 8 de ingresos?', 'Activos financieros.', ['Pasivos financieros.', 'Impuestos indirectos.', 'Transferencias corrientes.'], 'Orden EHA/3565/2008.'],
        ['¿Qué representa el capítulo 9 de ingresos?', 'Pasivos financieros.', ['Gastos financieros.', 'Impuestos directos.', 'Ingresos patrimoniales.'], 'Orden EHA/3565/2008.'],
        ['¿Qué combinación identifica normalmente una aplicación presupuestaria de gasto?', 'Programa y concepto económico, y orgánica cuando proceda.', ['Padrón y catastro.', 'Expediente y recurso.', 'Alcalde y secretario.'], 'Orden EHA/3565/2008.'],
        ['¿Qué indica el área de gasto en la clasificación por programas?', 'La gran finalidad a la que se destinan los créditos.', ['El proveedor adjudicatario.', 'La fecha de pago.', 'La cuenta bancaria.'], 'Orden EHA/3565/2008.'],
        ['¿Qué nivel desarrolla con mayor detalle un capítulo económico?', 'Artículo, concepto y subconcepto.', ['Pleno, comisión y alcaldía.', 'Programa, grupo y área únicamente.', 'Registro, asiento y factura.'], 'Orden EHA/3565/2008.'],
        ['¿Puede una entidad crear subconceptos para adaptar la información?', 'Sí, respetando la estructura y codificación obligatorias.', ['No, nunca.', 'Solo por ley orgánica.', 'Sin respetar ningún código.'], 'Orden EHA/3565/2008.'],
        ['¿Qué significa que un crédito sea limitativo?', 'Que no puede adquirirse gasto por encima del crédito disponible salvo modificación legal.', ['Que debe gastarse íntegramente.', 'Que no puede modificarse nunca.', 'Que solo financia personal.'], 'Texto refundido de Haciendas Locales y Real Decreto 500/1990.'],
        ['¿Dónde se fija normalmente el nivel de vinculación jurídica de los créditos?', 'En las bases de ejecución del presupuesto dentro de los límites legales.', ['En el padrón.', 'En la ordenanza de tráfico.', 'En el contrato de cada proveedor.'], 'Real Decreto 500/1990.'],
        ['¿Basta una correcta clasificación para autorizar un gasto?', 'No, además se requiere competencia, procedimiento y crédito adecuado y suficiente.', ['Sí, siempre.', 'Solo si es capítulo 2.', 'Sí, si existe factura.'], 'Normativa presupuestaria local.'],
        ['¿Qué finalidad tiene una estructura presupuestaria homogénea?', 'Facilitar gestión, comparación, control, liquidación y rendición de cuentas.', ['Sustituir el presupuesto.', 'Eliminar la contabilidad.', 'Evitar la fiscalización.'], 'Orden EHA/3565/2008.']
      ]
    },
    19: {
      sections: [
        ['Liquidación y resultado presupuestario', ['El presupuesto se liquida al cierre del ejercicio. La liquidación determina derechos pendientes de cobro, obligaciones pendientes de pago, resultado presupuestario y remanente de tesorería.', 'El resultado presupuestario compara derechos reconocidos netos y obligaciones reconocidas netas, con los ajustes previstos.']],
        ['Remanente de tesorería', ['El remanente refleja liquidez acumulada y se calcula a partir de fondos líquidos, derechos pendientes de cobro y obligaciones pendientes de pago, con ajustes por saldos de dudoso cobro y financiación afectada.', 'El remanente para gastos generales puede ser positivo o negativo y condiciona medidas presupuestarias posteriores.']],
        ['Estabilidad y regla de gasto', ['La estabilidad presupuestaria exige equilibrio o superávit estructural en los términos legales. La sostenibilidad financiera incluye capacidad para financiar compromisos presentes y futuros.', 'La regla de gasto limita la variación del gasto computable conforme a la tasa de referencia y a los ajustes establecidos por la Ley Orgánica 2/2012.']]
      ],
      rows: [
        ['¿Cuándo se cierra y liquida con carácter general el presupuesto local?', 'A 31 de diciembre del año natural.', ['El 30 de junio.', 'Cada trimestre.', 'Cuando lo decida el alcalde sin fecha.'], 'Real Decreto 500/1990.'],
        ['¿Quién debe confeccionar la liquidación del presupuesto?', 'La entidad local bajo la responsabilidad de su presidencia y con la intervención correspondiente.', ['El proveedor principal.', 'El juzgado.', 'La comunidad autónoma siempre.'], 'Real Decreto 500/1990.'],
        ['¿Qué órgano aprueba la liquidación del presupuesto de la entidad local?', 'El presidente de la entidad local, previo informe de Intervención.', ['El Pleno siempre antes del cierre.', 'El Tribunal de Cuentas.', 'La Junta Electoral.'], 'Texto refundido de Haciendas Locales y Real Decreto 500/1990.'],
        ['¿De qué debe darse cuenta al Pleno tras aprobar la liquidación?', 'De la liquidación aprobada en la primera sesión que celebre.', ['Solo del presupuesto inicial.', 'Únicamente de las facturas pendientes.', 'No debe darse cuenta.'], 'Real Decreto 500/1990.'],
        ['¿Qué magnitudes básicas obtiene la liquidación?', 'Derechos y obligaciones pendientes, resultado presupuestario y remanente de tesorería.', ['Solo el inventario.', 'Solo la plantilla de personal.', 'Únicamente el padrón.'], 'Real Decreto 500/1990.'],
        ['¿Qué compara el resultado presupuestario?', 'Derechos reconocidos netos y obligaciones reconocidas netas del ejercicio, con ajustes.', ['Cobros y pagos bancarios exclusivamente.', 'Activos y pasivos patrimoniales.', 'Ingresos previstos y plantilla.'], 'Real Decreto 500/1990.'],
        ['¿Qué puede exigir el cálculo del resultado presupuestario?', 'Ajustes por desviaciones de financiación y créditos financiados con remanente.', ['Eliminar derechos reconocidos.', 'Ignorar financiación afectada.', 'Sumar el inventario.'], 'Real Decreto 500/1990.'],
        ['¿Qué integra inicialmente el remanente de tesorería?', 'Fondos líquidos más derechos pendientes de cobro menos obligaciones pendientes de pago.', ['Solo caja.', 'Solo deuda financiera.', 'Solo impuestos pendientes.'], 'Real Decreto 500/1990.'],
        ['¿Qué debe minorar los derechos pendientes en el remanente?', 'Los saldos de dudoso cobro.', ['Los ingresos ya cobrados.', 'Las obligaciones pagadas.', 'El patrimonio municipal.'], 'Real Decreto 500/1990.'],
        ['¿Qué ajuste separa recursos con destino específico?', 'El exceso de financiación afectada.', ['La amortización contable.', 'El padrón fiscal.', 'La plantilla.'], 'Real Decreto 500/1990.'],
        ['¿Qué representa el remanente para gastos generales?', 'La parte de liquidez acumulada no afectada disponible o el déficit a corregir.', ['El total del patrimonio.', 'La deuda tributaria de vecinos.', 'El presupuesto del año siguiente.'], 'Real Decreto 500/1990.'],
        ['¿Qué ocurre si el remanente de tesorería para gastos generales es negativo?', 'Deben adoptarse las medidas legales de reducción, financiación o corrección.', ['Se ignora.', 'Se convierte automáticamente en superávit.', 'Se elimina la contabilidad.'], 'Texto refundido de Haciendas Locales.'],
        ['¿Puede financiar modificaciones un remanente positivo?', 'Sí, en los supuestos y con los límites legales.', ['No, nunca.', 'Solo para gastos privados.', 'Sin expediente.'], 'Real Decreto 500/1990.'],
        ['¿Qué principio exige equilibrio o superávit estructural?', 'El principio de estabilidad presupuestaria.', ['El principio de publicidad registral.', 'El principio de tipicidad.', 'El principio de gratuidad.'], 'Ley Orgánica 2/2012.'],
        ['¿Qué significa sostenibilidad financiera?', 'Capacidad para financiar compromisos presentes y futuros dentro de los límites de déficit, deuda y morosidad.', ['Ausencia total de gasto.', 'Equilibrio solo de caja diaria.', 'Libertad ilimitada de endeudamiento.'], 'Artículo 4 de la Ley Orgánica 2/2012.'],
        ['¿Qué principio exige atender los compromisos de gasto presentes y futuros?', 'Sostenibilidad financiera.', ['Competencia territorial.', 'Jerarquía administrativa.', 'Reserva de ley penal.'], 'Ley Orgánica 2/2012.'],
        ['¿Qué limita la regla de gasto?', 'La variación del gasto computable de las Administraciones públicas.', ['El número de empleados exclusivamente.', 'Los ingresos tributarios.', 'La publicación de ordenanzas.'], 'Artículo 12 de la Ley Orgánica 2/2012.'],
        ['¿A qué referencia se vincula la variación máxima del gasto computable?', 'A la tasa de referencia de crecimiento del PIB de medio plazo.', ['Al IPC mensual sin ajustes.', 'A la población exclusivamente.', 'Al tipo del IBI.'], 'Artículo 12 de la Ley Orgánica 2/2012.'],
        ['¿Se incluye en el gasto computable el financiado con fondos finalistas de otras Administraciones o de la UE?', 'Se excluye en los términos establecidos por la ley.', ['Se incluye siempre sin ajuste.', 'Solo si es corriente.', 'Nunca se registra.'], 'Artículo 12 de la Ley Orgánica 2/2012.'],
        ['¿Qué efecto tienen los cambios normativos que aumentan permanentemente ingresos?', 'Permiten aumentar el nivel de gasto computable en la cuantía equivalente.', ['Obligan a reducirlo siempre.', 'No producen ningún efecto.', 'Eliminan la regla de gasto.'], 'Artículo 12.4 de la Ley Orgánica 2/2012.'],
        ['¿Qué efecto tienen los cambios normativos que reducen permanentemente ingresos?', 'Obligan a reducir el nivel de gasto computable en la cuantía equivalente.', ['Permiten aumentarlo.', 'No afectan.', 'Suprimen el presupuesto.'], 'Artículo 12.4 de la Ley Orgánica 2/2012.'],
        ['¿Qué documento puede exigirse ante incumplimiento de estabilidad o regla de gasto?', 'Un plan económico-financiero.', ['Un padrón nuevo.', 'Una ordenanza de tráfico.', 'Un contrato de seguro.'], 'Ley Orgánica 2/2012.'],
        ['¿Qué horizonte general tiene el plan económico-financiero?', 'Permitir el cumplimiento en el año en curso y el siguiente, según la ley.', ['Diez años necesariamente.', 'Un mes.', 'Duración indefinida.'], 'Ley Orgánica 2/2012.'],
        ['¿Qué órgano local aprueba normalmente el plan económico-financiero?', 'El Pleno de la corporación.', ['El proveedor.', 'El secretario judicial.', 'La mesa de contratación.'], 'Ley Orgánica 2/2012.'],
        ['¿Qué información debe ser coherente con la liquidación?', 'La ejecución presupuestaria y las magnitudes de estabilidad y sostenibilidad.', ['Solo el padrón.', 'El inventario sin valoración.', 'Las actas electorales.'], 'Normativa presupuestaria y de estabilidad.'],
        ['¿Es el resultado presupuestario igual al saldo bancario?', 'No; es una magnitud de derechos y obligaciones reconocidos con ajustes.', ['Sí, siempre.', 'Solo si hay deuda.', 'Sí, en municipios pequeños.'], 'Real Decreto 500/1990.'],
        ['¿Es el remanente de tesorería equivalente al beneficio de una empresa?', 'No; es una magnitud financiera-presupuestaria propia del sector público.', ['Sí, exactamente.', 'Solo cuando es positivo.', 'Solo en sociedades mercantiles.'], 'Real Decreto 500/1990.'],
        ['¿Qué órgano fiscaliza la elaboración de las magnitudes de liquidación?', 'La Intervención local en el ejercicio de sus funciones de control.', ['La Junta Electoral.', 'El padrón municipal.', 'El contratista.'], 'Normativa de haciendas locales y control interno.'],
        ['¿Debe remitirse información de la liquidación a otras Administraciones?', 'Sí, en los términos previstos a la Administración del Estado y comunidad autónoma.', ['No, nunca.', 'Solo si hay déficit.', 'Únicamente al banco.'], 'Texto refundido de Haciendas Locales.'],
        ['¿Qué finalidad tiene la liquidación presupuestaria?', 'Conocer la ejecución real, cerrar el ejercicio y servir de base para control y decisiones.', ['Sustituir el presupuesto siguiente.', 'Eliminar obligaciones pendientes.', 'Evitar rendir cuentas.'], 'Real Decreto 500/1990.']
      ]
    },
    20: {
      sections: [
        ['Administración electrónica y registro', ['La tramitación electrónica integra identificación, firma, registro, notificación, expediente y archivo. Las personas obligadas deben relacionarse electrónicamente con la Administración en los supuestos legales.', 'Los documentos electrónicos deben conservar autenticidad, integridad, disponibilidad y trazabilidad.']],
        ['Factura electrónica', ['La Ley 25/2013 impulsa la factura electrónica, crea el registro contable y regula su tramitación. Determinados proveedores deben usar factura electrónica y presentarla por el punto general de entrada.', 'Cada Administración dispone de registro contable de facturas gestionado por la unidad con función contable e integrado con el sistema de información contable.']],
        ['Morosidad y seguimiento', ['La normativa de morosidad establece plazos de pago, intereses y compensación por costes de cobro en operaciones comerciales. En el sector público, la contratación y la normativa presupuestaria completan el régimen.', 'El seguimiento electrónico permite conocer estado, fecha de presentación, unidad destinataria, conformidad, obligación reconocida y pago.']]
      ],
      rows: [
        ['¿Qué ley impulsa la factura electrónica y crea el registro contable de facturas?', 'La Ley 25/2013.', ['La Ley 7/1985.', 'La Ley 31/1995.', 'La Ley Orgánica 3/2007.'], 'Ley 25/2013, de impulso de la factura electrónica.'],
        ['¿Cuál es uno de los objetos de la Ley 25/2013?', 'Regular la tramitación y seguimiento de facturas en las Administraciones públicas.', ['Regular el padrón.', 'Aprobar la estructura presupuestaria.', 'Regular bienes comunales.'], 'Artículo 1 de la Ley 25/2013.'],
        ['¿A qué relaciones se aplica la Ley 25/2013?', 'A facturas entre proveedores de bienes o servicios y Administraciones públicas.', ['A nóminas privadas exclusivamente.', 'A compraventas entre particulares.', 'A procesos electorales.'], 'Artículo 2 de la Ley 25/2013.'],
        ['¿En qué plazo debe presentar el proveedor la factura en registro?', 'Treinta días desde la entrega efectiva o prestación del servicio.', ['Diez días.', 'Tres meses.', 'Un año.'], 'Artículo 3 de la Ley 25/2013.'],
        ['¿Pueden todos los proveedores expedir factura electrónica?', 'Sí.', ['No, solo sociedades anónimas.', 'Solo personas físicas.', 'Solo entidades locales.'], 'Artículo 4 de la Ley 25/2013.'],
        ['¿Qué entidad está obligada con carácter general a usar factura electrónica?', 'Una sociedad anónima.', ['Una persona física en todo caso.', 'Una comunidad vecinal sin personalidad en todo caso.', 'Un empleado público.'], 'Artículo 4 de la Ley 25/2013.'],
        ['¿Pueden excluirse reglamentariamente facturas de hasta 5.000 euros?', 'Sí, en los términos permitidos por la Ley 25/2013.', ['No, nunca.', 'Solo por sentencia.', 'Sí, sin norma.'], 'Artículo 4 de la Ley 25/2013.'],
        ['¿Qué debe tener una factura electrónica remitida al sector público?', 'Formato estructurado y firma o sello electrónico admitido.', ['Formato de imagen sin datos.', 'Solo firma manuscrita escaneada.', 'Únicamente texto libre.'], 'Artículo 5 de la Ley 25/2013.'],
        ['¿Qué es el punto general de entrada de facturas electrónicas?', 'El sistema que recibe facturas y las remite a la oficina contable competente.', ['El padrón fiscal.', 'La mesa de contratación.', 'El inventario.'], 'Artículo 6 de la Ley 25/2013.'],
        ['¿Puede una entidad local adherirse al punto de entrada de otra Administración?', 'Sí, al de su Diputación, comunidad autónoma o Estado.', ['No.', 'Solo al de una empresa privada.', 'Solo mediante sentencia.'], 'Artículo 6 de la Ley 25/2013.'],
        ['¿Qué puede consultar el proveedor en el punto general de entrada?', 'El estado de tramitación de su factura.', ['La nómina de los empleados.', 'El padrón completo.', 'Todos los contratos privados.'], 'Artículo 6.3 de la Ley 25/2013.'],
        ['¿Qué genera la presentación correcta en el punto general de entrada?', 'Entrada automática y acuse con fecha y hora.', ['Pago inmediato.', 'Adjudicación contractual.', 'Silencio estimatorio.'], 'Artículo 6.4 de la Ley 25/2013.'],
        ['¿Quién responde del archivo y custodia de la factura electrónica?', 'El órgano administrativo destinatario, sin perjuicio del uso del punto de entrada.', ['El proveedor exclusivamente.', 'La entidad bancaria.', 'El ciudadano.'], 'Artículo 7 de la Ley 25/2013.'],
        ['¿Quién gestiona el registro contable de facturas?', 'La unidad que tenga atribuida la función de contabilidad.', ['El padrón.', 'La policía local.', 'La mesa electoral.'], 'Artículo 8 de la Ley 25/2013.'],
        ['¿Con qué sistema debe estar integrado el registro contable?', 'Con el sistema de información contable.', ['Con el padrón de habitantes.', 'Con el registro civil.', 'Con el inventario de vehículos.'], 'Artículo 8.2 de la Ley 25/2013.'],
        ['¿Qué hace el registro administrativo al recibir una factura?', 'La remite inmediatamente a la oficina contable competente.', ['La paga directamente.', 'La destruye tras escanearla.', 'La envía al Pleno.'], 'Artículo 9 de la Ley 25/2013.'],
        ['¿Qué asigna la anotación en el registro contable?', 'Un código de identificación de la factura.', ['Una licencia urbanística.', 'Un número de padrón.', 'Una plaza presupuestaria.'], 'Artículo 9.2 de la Ley 25/2013.'],
        ['¿Qué debe identificar la factura para su tramitación?', 'Los órganos administrativos destinatarios conforme a la normativa.', ['Solo el municipio del proveedor.', 'El grupo político.', 'El número de empleados.'], 'Artículo 9 de la Ley 25/2013.'],
        ['¿Qué finalidad tiene el registro contable de facturas?', 'Facilitar seguimiento, control y tramitación contable.', ['Sustituir la contratación.', 'Crear tributos.', 'Gestionar el padrón.'], 'Ley 25/2013.'],
        ['¿Qué regula la Ley 3/2004?', 'Medidas contra la morosidad en operaciones comerciales.', ['El régimen electoral.', 'La prevención de riesgos.', 'La propiedad intelectual.'], 'Ley 3/2004.'],
        ['¿Qué genera el retraso culpable en el pago de una operación comercial?', 'Interés de demora sin necesidad de aviso cuando concurren los requisitos.', ['La nulidad del contrato.', 'Una subvención.', 'La pérdida del crédito automáticamente.'], 'Ley 3/2004.'],
        ['¿Puede el acreedor reclamar compensación por costes de cobro?', 'Sí, en los términos establecidos por la Ley 3/2004.', ['No, nunca.', 'Solo si es Administración.', 'Solo por acuerdo verbal.'], 'Ley 3/2004.'],
        ['¿Qué pretende reducir la factura electrónica en el sector público?', 'Morosidad, tiempos de tramitación y falta de trazabilidad.', ['La publicidad de contratos.', 'La población municipal.', 'La clasificación de bienes.'], 'Preámbulo de la Ley 25/2013.'],
        ['¿Qué ventaja ofrece la tramitación electrónica de expedientes?', 'Trazabilidad de actuaciones, fechas, firmas y documentos.', ['Elimina toda responsabilidad.', 'Impide cualquier error.', 'Suprime la necesidad de competencia.'], 'Leyes 39/2015 y 40/2015.'],
        ['¿Qué personas están obligadas a relacionarse electrónicamente en los casos legales?', 'Entre otras, las personas jurídicas.', ['Solo menores de edad.', 'Ninguna persona jurídica.', 'Todos los ciudadanos sin excepción.'], 'Artículo 14 de la Ley 39/2015.'],
        ['¿Qué debe garantizar un expediente electrónico?', 'Integridad, orden, autenticidad y consulta de sus documentos.', ['El anonimato del órgano.', 'La eliminación de metadatos.', 'La falta de índice.'], 'Ley 39/2015.'],
        ['¿Qué utilidad tiene el índice electrónico del expediente?', 'Garantizar integridad y orden de los documentos que lo componen.', ['Determinar el tipo tributario.', 'Sustituir la resolución.', 'Crear una factura.'], 'Artículo 70 de la Ley 39/2015.'],
        ['¿Qué debe permitir el archivo electrónico?', 'Conservación, acceso y protección durante el tiempo exigible.', ['Modificar documentos sin huella.', 'Eliminar firmas.', 'Publicar todos los datos.'], 'Artículos 17 de la Ley 39/2015 y 46 de la Ley 40/2015.'],
        ['¿Qué control favorece la factura electrónica respecto del gasto?', 'Seguimiento desde la presentación hasta el reconocimiento y pago.', ['Elimina la fiscalización.', 'Permite pagar sin crédito.', 'Sustituye la conformidad.'], 'Ley 25/2013.'],
        ['¿Sustituye la factura electrónica la comprobación de la prestación?', 'No; debe verificarse conformidad, competencia y crédito.', ['Sí, siempre.', 'Solo si supera 5.000 euros.', 'Sí, si tiene firma.'], 'Ley 25/2013 y normativa contractual y presupuestaria.']
      ]
    }
  };

  const validQuestion = question => {
    const text = norm(question?.text);
    const options = question?.options || [];
    if (!text || options.length !== 4 || !options.some(option => option.letter === question.answer) || !(question.justification || question.source)) return false;
    if (text.includes('cual es el enfoque correcto para preparar') || text.includes('como debe estudiarse')) return false;
    const combined = `${text} ${norm(question.justification || question.source)} ${options.map(option => norm(option.text)).join(' ')}`;
    return !blocked.some(fragment => combined.includes(fragment)) && !combined.includes('forma parte del enunciado oficial del tema');
  };

  const buildQuestion = (themeNumber, row, index) => {
    const [text, correct, wrong, justification] = row;
    const raw = [correct, ...wrong];
    const shift = (themeNumber + index) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `carranque-v70-t${themeNumber}-q${index + 1}`,
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

  const clone = (question, themeNumber, index) => ({
    ...question,
    id: `carranque-v70-t${themeNumber}-q${index + 1}`,
    options: question.options.map(option => ({ letter: option.letter, text: String(option.text) })),
    justification: String(question.justification || question.source),
    source: String(question.source || question.justification),
    difficulty: question.difficulty || ['baja', 'media', 'alta'][index % 3],
    auditReal: true,
    auditTheme: themeNumber,
    reusedFrom: question.id || null
  });

  for (let number = 11; number <= 20; number += 1) {
    const theme = carranque.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    if (curated[number]) {
      theme.sections = curated[number].sections.map(([heading, paragraphs]) => ({ heading, paragraphs }));
      theme.tree = [`Tema ${number}`, ...curated[number].sections.map(([heading]) => `- ${heading}`)].join('\n');
      theme.reviewTable = [['Bloque', 'Qué dominar'], ...curated[number].sections.map(([heading]) => [heading, 'Concepto, clasificación, procedimiento, control y efecto'])];
      carranque.themeTests[theme.id] = curated[number].rows.map((row, index) => buildQuestion(number, row, index));
    } else {
      const selected = [];
      const seen = new Set();
      (mapping[number] || []).forEach(sourceNumber => {
        const sourceTheme = diputacion.themes.find(item => Number(item.number) === sourceNumber);
        if (!sourceTheme) return;
        (diputacion.themeTests[sourceTheme.id] || []).filter(validQuestion).forEach(question => {
          const key = norm(question.text);
          if (!key || seen.has(key) || selected.length >= TARGET) return;
          seen.add(key);
          selected.push(question);
        });
      });
      carranque.themeTests[theme.id] = selected.slice(0, TARGET).map((question, index) => clone(question, number, index));
    }
    theme.auditStatus = (carranque.themeTests[theme.id] || []).length >= TARGET ? 'segunda vuelta mínima completada v0.70' : 'refuerzo pendiente';
  }

  const previousCases = (carranque.practicalCases || []).filter(item => item.themes?.[0] >= 3 && item.themes?.[0] <= 10);
  const extraCases = [
    ['Situación administrativa de funcionario local', 'Una funcionaria solicita pasar a una situación administrativa por cuidado de familiar. Identifica requisitos, duración, reserva y efectos retributivos.', 'Tema 11: TREBEP y legislación de empleo público aplicable.'],
    ['Recuperación de un bien municipal', 'El Ayuntamiento detecta la ocupación reciente de un camino patrimonial. Determina investigación, deslinde, recuperación de oficio y vía judicial.', 'Tema 12: Reglamento de Bienes de las Entidades Locales.'],
    ['Contrato menor y fraccionamiento', 'Una unidad propone dividir una necesidad anual en varias facturas. Analiza unidad funcional, prohibición de fraccionamiento y expediente correcto.', 'Tema 13: Ley 9/2017.'],
    ['Registro y notificación electrónica', 'Una persona jurídica presenta un escrito presencial y después no accede a una notificación electrónica. Explica asistencia, subsanación y efectos.', 'Tema 14: Ley 39/2015.'],
    ['Competencia y certificación de acuerdo', 'Se solicita certificado de un acuerdo plenario todavía no aprobado en acta. Identifica órgano, contenido certificable y cautelas.', 'Tema 15: Ley 7/1985 y normativa de organización local.'],
    ['Aprobación de una ordenanza fiscal', 'El Ayuntamiento pretende modificar una tasa. Ordena aprobación provisional, exposición, reclamaciones, aprobación definitiva y publicación.', 'Tema 16: Texto refundido de Haciendas Locales.'],
    ['Modificación presupuestaria', 'Surge un gasto específico sin crédito y existe remanente disponible. Determina modalidad, financiación, competencia y publicidad.', 'Tema 17: Haciendas Locales y Real Decreto 500/1990.'],
    ['Clasificación de una operación', 'Clasifica nóminas, suministro eléctrico, inversión en edificio, subvención de capital y préstamo recibido por capítulos.', 'Tema 18: Orden EHA/3565/2008.'],
    ['Liquidación y estabilidad', 'La liquidación presenta remanente negativo e incumplimiento de regla de gasto. Calcula medidas y órganos competentes.', 'Tema 19: Real Decreto 500/1990 y Ley Orgánica 2/2012.'],
    ['Factura electrónica y morosidad', 'Una sociedad limitada presenta una factura en papel fuera de plazo. Explica canal, registro contable, trazabilidad y efectos del retraso.', 'Tema 20: Ley 25/2013 y Ley 3/2004.']
  ].map((item, index) => ({
    id: `carranque-v70-sp${index + 9}`,
    title: item[0],
    statement: item[1],
    guidance: item[2],
    themes: [index + 11],
    rubric: ['Norma: 2 puntos', 'Órgano: 2 puntos', 'Trámite: 2 puntos', 'Plazo y efecto: 2 puntos', 'Claridad: 2 puntos']
  }));
  carranque.practicalCases = previousCases.concat(extraCases);

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      value ^= text.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 85 && round < 200) {
      carranque.themes.forEach((theme, themeIndex) => {
        if (selected.length >= 85) return;
        const bank = shuffled((carranque.themeTests[theme.id] || []).filter(validQuestion), seed * 331 + themeIndex + round);
        const question = bank[(round + themeIndex) % bank.length];
        if (!question) return;
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(theme.number) });
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2311);
    return {
      id: `carranque-v70-sim${seed}`,
      title: `Simulacro Carranque ${seed} · 80 + 5 reserva`,
      questions: ordered.slice(0, 80).map((question, index) => ({ ...question, id: `carranque-v70-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(80, 85).map((question, index) => ({ ...question, id: `carranque-v70-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 80, reserve: 5, minutes: 90, themes: 20, unique: true }
    };
  }
  carranque.simulacros = [1, 2, 3].map(buildSimulation);

  const themes = carranque.themes.map(theme => ({ number: Number(theme.number), count: (carranque.themeTests[theme.id] || []).filter(validQuestion).length, target: TARGET }));
  carranque.testAudit = {
    version: 'v0.70.0',
    date: '2026-07-11',
    targetPerTheme: TARGET,
    targetThemes: themes.filter(item => item.count >= TARGET).length,
    totalReal: themes.reduce((sum, item) => sum + item.count, 0),
    minimumQuestions: Math.min(...themes.map(item => item.count)),
    themes,
    phase: 'temas 1 a 20'
  };
  carranque.version = VERSION;
  carranque.changelog ||= [];
  carranque.changelog.unshift({
    version: VERSION,
    date: '2026-07-11',
    changes: [
      'Temas 11 a 20 elevados al objetivo de 30 preguntas',
      'Los 20 temas alcanzan cobertura cuantitativa mínima',
      'Añadidos diez supuestos para completar los temas prácticos 3 a 20',
      'Generados tres simulacros de 80 preguntas y 5 reservas'
    ]
  });

  window.OPOWEB_CARRANQUE_V70 = {
    version: `v${VERSION}`,
    targetThemes: carranque.testAudit.targetThemes,
    totalReal: carranque.testAudit.totalReal,
    minimumQuestions: carranque.testAudit.minimumQuestions,
    practicalCases: carranque.practicalCases.length,
    simulations: carranque.simulacros.length
  };
})();
