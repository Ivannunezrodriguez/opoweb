(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope?.themes || !ope?.themeTests) return;

  const BANK = {
    39: [
      ['¿Qué componente ejecuta instrucciones y coordina operaciones del ordenador?', 'La CPU o procesador.', 'La fuente de alimentación.', 'El escáner.', 'La impresora.', 'La CPU interpreta y ejecuta instrucciones; no debe confundirse con la caja completa del equipo.'],
      ['¿Qué característica define a la memoria RAM?', 'Es memoria de trabajo volátil.', 'Conserva siempre los datos sin alimentación.', 'Es un protocolo de almacenamiento.', 'Es un periférico de salida.', 'La RAM mantiene temporalmente datos y código y pierde su contenido al interrumpirse la alimentación.'],
      ['¿Cuál es la relación correcta entre M.2 y NVMe?', 'M.2 es un factor de forma; una unidad M.2 puede usar SATA o NVMe.', 'Todo M.2 es necesariamente NVMe.', 'NVMe es un tamaño físico de disco.', 'M.2 solo se utiliza en discos mecánicos.', 'M.2 describe formato y conector, mientras NVMe es un protocolo normalmente transportado sobre PCI Express.'],
      ['¿Qué diferencia principal existe entre HDD y SSD?', 'El HDD usa partes mecánicas y el SSD memoria flash sin movimiento para acceder a los datos.', 'El SSD es siempre memoria RAM.', 'El HDD no conserva datos.', 'Ambos son exactamente la misma tecnología.', 'Los HDD emplean platos y cabezales; los SSD utilizan memoria no volátil de estado sólido.'],
      ['¿Qué función cumple UEFI al arrancar el ordenador?', 'Inicializa hardware y entrega el control al cargador o sistema operativo.', 'Sustituye a la memoria RAM.', 'Imprime documentos automáticamente.', 'Actúa como disco externo.', 'UEFI es firmware de plataforma y participa en la inicialización y el proceso de arranque.'],
      ['¿Qué afirmación sobre Secure Boot es correcta?', 'Ayuda a que el equipo arranque con componentes de software autorizados.', 'Cifra automáticamente todos los archivos personales.', 'Sustituye al antivirus y a las copias de seguridad.', 'Aumenta la capacidad de la RAM.', 'Secure Boot verifica componentes de arranque; no reemplaza el resto de controles de seguridad.'],
      ['¿Qué función principal tiene la fuente de alimentación?', 'Convertir y suministrar energía estable a los componentes.', 'Almacenar el sistema operativo.', 'Ejecutar instrucciones de usuario.', 'Gestionar la cola de impresión.', 'La fuente transforma la corriente de entrada en las tensiones requeridas por el equipo.'],
      ['¿Por qué no basta la frecuencia de reloj para comparar dos procesadores?', 'Porque también influyen arquitectura, núcleos, caché, potencia y carga de trabajo.', 'Porque la frecuencia solo se aplica a discos duros.', 'Porque todos los procesadores ejecutan exactamente igual.', 'Porque la frecuencia mide capacidad de almacenamiento.', 'El rendimiento depende de varios factores y una frecuencia mayor no garantiza por sí sola más rendimiento.'],
      ['¿Qué es un controlador o driver?', 'Software que permite al sistema operativo comunicarse con un dispositivo.', 'Una batería de la placa base.', 'Un soporte óptico.', 'Una ranura de memoria.', 'El driver traduce operaciones del sistema para el hardware correspondiente.'],
      ['¿Qué práctica es correcta antes de retirar un disco de un equipo corporativo?', 'Autorizar la retirada, proteger o borrar los datos y documentar la operación.', 'Borrar únicamente el acceso directo del escritorio.', 'Entregarlo sin comprobar su contenido.', 'Formatearlo siempre sin copia ni autorización.', 'Los soportes pueden contener información recuperable y requieren control de inventario y borrado seguro.'],
      ['¿Qué diferencia existe entre bit y byte?', 'Un byte agrupa normalmente ocho bits.', 'Un bit agrupa siempre ocho bytes.', 'Son unidades idénticas.', 'El byte solo se usa para velocidad de reloj.', 'Bit es unidad binaria; byte agrupa normalmente ocho bits.'],
      ['¿Qué método de diagnóstico es más fiable ante un fallo de hardware?', 'Identificar el síntoma, cambiar una variable cada vez y documentar las pruebas.', 'Sustituir todos los componentes a la vez.', 'Formatear el equipo como primera medida.', 'Ignorar registros y conexiones.', 'El diagnóstico sistemático permite aislar la causa y evita cambios innecesarios.']
    ],
    40: [
      ['¿Qué diferencia existe entre USB-C y USB 3.2?', 'USB-C describe un conector y USB 3.2 una generación o especificación de comunicación.', 'Son siempre exactamente lo mismo.', 'USB-C es un sistema de archivos.', 'USB 3.2 es un tipo de disco óptico.', 'El conector no determina por sí solo velocidad, funciones ni protocolo.'],
      ['¿Qué función cumple la cola de impresión?', 'Mantener y gestionar trabajos pendientes de enviar a la impresora.', 'Digitalizar documentos.', 'Cifrar memorias USB.', 'Actualizar el firmware UEFI.', 'La cola o spooler organiza los trabajos de impresión hasta su procesamiento.'],
      ['¿Qué indica normalmente dpi en una impresora o escáner?', 'Una medida de resolución expresada en puntos o muestras por pulgada.', 'Páginas por minuto.', 'Capacidad del disco duro.', 'Velocidad de la red en bytes.', 'Dpi se relaciona con resolución, no con velocidad de producción.'],
      ['¿Qué hace el OCR?', 'Intenta convertir una imagen de texto en caracteres buscables o editables.', 'Aumenta físicamente la resolución del original.', 'Cifra el PDF.', 'Elimina automáticamente todos los errores.', 'El reconocimiento óptico requiere revisión porque puede confundir caracteres y cifras.'],
      ['¿Qué ventaja ofrece un alimentador automático de documentos?', 'Permite digitalizar lotes de hojas sin colocarlas una a una en el cristal.', 'Convierte cualquier escáner en impresora.', 'Evita revisar el orden de páginas.', 'Garantiza OCR perfecto.', 'El ADF agiliza lotes, pero exige preparar originales y comprobar atascos, orden y orientación.'],
      ['¿Por qué conviene expulsar de forma segura una unidad externa?', 'Para completar operaciones pendientes y reducir riesgo de corrupción.', 'Para aumentar permanentemente su capacidad.', 'Para convertirla en memoria RAM.', 'Para borrar automáticamente malware.', 'La caché puede mantener escrituras pendientes aunque no se vea actividad.'],
      ['¿Qué limitación conocida presenta FAT32?', 'Limita el tamaño máximo de un archivo individual.', 'No permite almacenar ningún archivo.', 'Solo funciona en discos ópticos.', 'Cifra siempre el contenido.', 'FAT32 es compatible, pero su límite de archivo puede impedir copiar ficheros grandes.'],
      ['¿Qué afirmación sobre una memoria USB es correcta?', 'Es almacenamiento flash extraíble y no constituye por sí sola una copia de seguridad fiable.', 'Es memoria RAM del equipo.', 'No puede contener malware.', 'Su conector garantiza siempre la máxima velocidad.', 'Una memoria USB puede fallar, perderse o infectarse y necesita una estrategia de copia y seguridad.'],
      ['¿Qué soporte permite normalmente una sola grabación?', 'CD-R o DVD-R/DVD+R.', 'CD-ROM.', 'DVD-ROM.', 'Memoria RAM.', 'Los soportes R son grabables una vez; los RW admiten reescritura según tecnología.'],
      ['¿Qué es una imagen ISO?', 'Una representación del contenido y estructura de un soporte óptico.', 'Un controlador de impresora.', 'Un tipo de memoria volátil.', 'Una resolución de escaneado.', 'Una imagen ISO puede grabarse como imagen; copiarla como archivo no crea necesariamente un disco arrancable.'],
      ['¿Qué riesgo presenta una impresora compartida con documentos confidenciales?', 'Que las páginas queden expuestas o sean retiradas por otra persona.', 'Que el archivo se convierta siempre en CSV.', 'Que se borre la memoria RAM.', 'Que el escáner deje de funcionar.', 'Debe elegirse el dispositivo correcto y retirar inmediatamente la documentación.'],
      ['¿Cuál es el orden razonable para diagnosticar un periférico que no funciona?', 'Comprobar alimentación, conexión, detección, controlador, configuración y prueba controlada.', 'Reemplazar la placa base directamente.', 'Borrar todos los documentos del equipo.', 'Ignorar el puerto y el cable.', 'La comprobación progresiva permite localizar el punto de fallo con el menor impacto.']
    ]
  };

  const correctPositions = [0, 2, 1, 3];
  const added = {};
  for (const [numberText, rows] of Object.entries(BANK)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    const existing = Array.isArray(ope.themeTests[theme.id]) ? ope.themeTests[theme.id] : [];
    const ids = new Set(existing.map(question => question.id));
    let count = 0;
    rows.forEach((row, index) => {
      const [text, correct, wrong1, wrong2, wrong3, justification] = row;
      const id = `dip-v87-t${number}-b8-q${index + 1}`;
      if (ids.has(id)) return;
      const options = [wrong1, wrong2, wrong3];
      const correctIndex = correctPositions[index % correctPositions.length];
      options.splice(correctIndex, 0, correct);
      existing.push({
        id,
        text,
        options: options.map((option, optionIndex) => ({ letter: 'ABCD'[optionIndex], text: option })),
        answer: 'ABCD'[correctIndex],
        justification,
        source: number === 39 ? 'Fuentes oficiales Microsoft, UEFI, NVM Express y PCI-SIG' : 'Fuentes oficiales Microsoft, USB-IF y Ecma International'
      });
      ids.add(id);
      count += 1;
    });
    ope.themeTests[theme.id] = existing;
    added[number] = count;
  }

  window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B8 = {
    addedTheme39: added[39] || 0,
    addedTheme40: added[40] || 0,
    reviewedAt: '2026-07-16'
  };
})();
