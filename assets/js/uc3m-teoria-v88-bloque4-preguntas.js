(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const SOURCE = 'https://drive.google.com/file/d/1UyjFlTqC5F-nRQ1nQPi4wobB0GdyolPn/view';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const rows = {
    18: [
      ['¿Quién aprueba con carácter general las generaciones de crédito del Presupuesto UC3M 2026?', 'El Rector', 'El Consejo Social', 'La Gerencia sin delegación', 'El Claustro Universitario', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'baja'],
      ['¿Quién aprueba una transferencia entre capítulos de gastos corrientes cuando su importe es inferior al límite máximo del contrato menor de obras?', 'El Rector', 'El Consejo de Gobierno', 'El Consejo Social', 'La Comunidad de Madrid', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Quién aprueba esa transferencia entre capítulos de gastos corrientes cuando el importe supera el límite indicado?', 'El Consejo de Gobierno', 'El Rector', 'El Consejo Social', 'La Dirección Económico Financiera', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Qué órgano aprueba las transferencias de crédito de gastos corrientes a gastos de capital?', 'El Consejo Social', 'El Rector', 'El Consejo de Gobierno exclusivamente', 'El Claustro', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Qué requiere una transferencia de operaciones de capital a operaciones corrientes?', 'Aprobación del Consejo Social y autorización previa del Gobierno de la Comunidad de Madrid', 'Solo resolución del Rector', 'Aprobación del Claustro', 'Informe vinculante del Defensor Universitario', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Qué condición cuantitativa se establece para incorporar determinados remanentes al ejercicio siguiente?', 'Que sean superiores a 300 euros', 'Que alcancen al menos 3.000 euros', 'Que superen 100 euros', 'Que sean inferiores a 300 euros', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Quién autoriza las incorporaciones de crédito previstas en las Normas Básicas de Gestión?', 'El Rector', 'El Consejo Social', 'La Comunidad de Madrid en todos los casos', 'La DEF-Servicio de Presupuestos', 'Artículo 6 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'baja'],
      ['¿Quién aprueba las redistribuciones de créditos en el Presupuesto UC3M 2026?', 'El Rector', 'El Consejo de Gobierno', 'El Consejo Social', 'Cada centro de gestión sin autorización', 'Artículo 7 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'baja'],
      ['¿A través de qué unidad deben tramitarse todas las solicitudes de modificaciones presupuestarias?', 'La DEF-Servicio de Presupuestos', 'La Secretaría General', 'El Consejo Social', 'El Servicio de Contratación exclusivamente', 'Artículo 8 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Qué efecto tienen los actos que adquieren compromisos de gasto superiores al crédito autorizado según su vinculación?', 'Son nulos de pleno derecho', 'Se convalidan automáticamente al cierre', 'Se pagan siempre con el presupuesto siguiente', 'Se transforman en gastos extrapresupuestarios válidos', 'Artículo 10 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Qué ocurre si el presupuesto del ejercicio siguiente no está aprobado antes del 1 de enero?', 'Se prorroga automáticamente el anterior con los ajustes técnicos oportunos', 'Se paraliza toda actividad económica', 'El Consejo Social aprueba un presupuesto sin intervención del Consejo de Gobierno', 'Se aplica íntegramente el presupuesto de la Comunidad de Madrid', 'Artículo 11 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'baja'],
      ['¿Pueden los centros de la UC3M percibir directamente ingresos procedentes de contratos, cursos o convenios?', 'No; deben ingresarse en una cuenta oficial de la Universidad e identificarse correctamente', 'Sí, siempre que sean inferiores a 5.000 euros', 'Sí, si el director del centro lo autoriza', 'Solo cuando se trate de transferencias corrientes', 'Artículo 13 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Mediante qué sistema deben emitirse las facturas de la UC3M para garantizar un registro único?', 'Universitas XXI o el sistema institucional equivalente', 'Una hoja de cálculo de cada departamento', 'Correo electrónico personal', 'Cualquier aplicación sin registro central', 'Artículo 13 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Qué documento expide la DEF-Presupuestos por subvenciones, donaciones o ayudas que no generan factura?', 'Una certificación de recepción del ingreso', 'Una factura comercial ordinaria', 'Un pagaré', 'Una nómina', 'Artículo 13 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Conforme a qué principio se reconoce contablemente un ingreso cuando el incremento patrimonial puede medirse con fiabilidad?', 'Al principio de devengo, atendiendo a la corriente real y no al momento del cobro', 'Al principio de caja exclusivamente', 'Al principio de oportunidad política', 'Al principio de pago anticipado obligatorio', 'Artículo 14 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta']
    ],
    19: [
      ['¿Qué finalidad tiene el documento contable RC?', 'Retener crédito para reservar saldo a una finalidad', 'Autorizar definitivamente el gasto', 'Reconocer la obligación frente al acreedor', 'Ejecutar la transferencia bancaria', 'Normas Básicas de Gestión del Presupuesto UC3M 2026 y procedimiento contable interno.', 'baja'],
      ['¿Qué representa la fase A de la ejecución del gasto?', 'La autorización del gasto', 'La retención de crédito', 'El pago material', 'La liquidación presupuestaria', 'Normas Básicas de Gestión del Presupuesto UC3M 2026 y procedimiento contable interno.', 'baja'],
      ['¿Qué representa la fase D?', 'La disposición o compromiso del gasto con un tercero', 'La devolución de ingresos', 'La aprobación de la cuenta anual', 'La reserva inicial de crédito sin compromiso', 'Normas Básicas de Gestión del Presupuesto UC3M 2026 y procedimiento contable interno.', 'media'],
      ['¿Qué recoge la fase O?', 'El reconocimiento de la obligación y la propuesta de pago en la tramitación interna', 'La autorización inicial sin acreedor', 'La modificación del presupuesto', 'La aprobación de la prórroga', 'Normas Básicas de Gestión del Presupuesto UC3M 2026 y procedimiento contable interno.', 'media'],
      ['¿Qué efecto tiene utilizar un documento acumulado ADO?', 'Acumula fases, pero no elimina contratación, factura, conformidad ni competencia', 'Permite pagar sin crédito', 'Sustituye siempre al expediente de contratación', 'Convierte cualquier gasto en caja fija', 'Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Por qué plataforma deben presentar los proveedores las facturas electrónicas dirigidas a la UC3M?', 'Por FACe, identificando las unidades y datos del expediente', 'Por correo personal del responsable', 'Por el tablón del Claustro', 'Por una cuenta bancaria', 'Procedimiento oficial UC3M de facturación electrónica.', 'baja'],
      ['¿Qué acredita la conformidad de una factura?', 'Que el bien, suministro o servicio se recibió correctamente y coincide con la prestación', 'Que el contrato queda adjudicado por primera vez', 'Que existe crédito para ejercicios futuros', 'Que la factura ya ha sido pagada', 'Normas y procedimientos oficiales de gestión económica UC3M.', 'media'],
      ['¿Cuál es el límite del Sistema Asimilado a Caja Fija para necesidades de escasa cuantía?', '5.000 euros sin IVA', '5.000 euros con IVA', '12.000 euros sin IVA', '40.000 euros sin IVA', 'Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Cuál es el importe máximo general de un anticipo a justificar?', '12.000 euros', '5.000 euros', '1.000 euros', '50.000 euros', 'Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Cuál es el plazo máximo general para justificar un anticipo?', 'Un mes', 'Diez días naturales', 'Tres meses', 'Hasta el cierre del ejercicio sin límite', 'Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Con qué frecuencia se ejecutan por defecto las órdenes de pago de la UC3M?', 'Tres días a la semana', 'Una vez al mes', 'Todos los días sin excepción', 'Solo al final de cada trimestre', 'Artículo 24 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media'],
      ['¿Qué regla anual se aplica a los pagos durante agosto y al inicio de enero?', 'No se efectúan pagos en agosto durante la actividad reducida ni en los primeros veinticinco días de enero', 'Se duplican los días de pago', 'Solo se permiten pagos en efectivo', 'Se suspenden únicamente las nóminas', 'Artículo 24 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Qué condiciones tiene un pago mediante QR a una persona física?', 'Es excepcional, inferior a 1.000 euros y requiere autorización previa de la DEF', 'Puede alcanzar 5.000 euros sin autorización', 'Solo requiere conformidad del proveedor', 'Es el medio ordinario de pago de nóminas', 'Artículo 24 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Cómo se imputan las diferencias de cambio en pagos fuera de la zona euro?', 'Las inferiores a 50 euros se asumen por la orgánica general y las superiores se imputan a la aplicación del documento', 'Todas las asume el proveedor', 'Todas se cargan al capítulo I', 'Nunca se contabilizan', 'Artículo 24 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'alta'],
      ['¿Cuándo preparan la Gerencia y la Dirección Económico Financiera las normas de cierre de ingresos y gastos?', 'Durante el último trimestre del ejercicio', 'Después de aprobarse la cuenta anual', 'Solo si existe déficit', 'En el segundo trimestre del ejercicio siguiente', 'Artículo 16 de las Normas Básicas de Gestión del Presupuesto UC3M 2026.', 'media']
    ]
  };

  function build(number, entries) {
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    const current = ope.themeTests[theme.id] || [];
    const seen = new Set(current.map(question => norm(question.text)));
    const additions = entries.map((entry, index) => {
      const [text, correct, wrong1, wrong2, wrong3, justification, difficulty] = entry;
      const raw = [correct, wrong1, wrong2, wrong3];
      const shift = (index + number) % 4;
      const ordered = raw.slice(shift).concat(raw.slice(0, shift));
      return {
        id: `uc3m-v88-b4-t${number}-q${index + 1}`,
        text,
        options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        source: SOURCE,
        difficulty,
        auditReal: true,
        auditTheme: number,
        institutional: true,
        budgetYear: 2026
      };
    }).filter(question => !seen.has(norm(question.text)));
    ope.themeTests[theme.id] = [...current, ...additions];
  }

  build(18, rows[18]);
  build(19, rows[19]);
})();