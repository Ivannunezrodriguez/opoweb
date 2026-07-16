(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 39);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const theory = {
    sources: [
      { label: 'Microsoft · Windows 11 specifications and requirements', reference: 'MS-W11-HARDWARE', url: 'https://www.microsoft.com/en-us/windows/windows-11-specifications' },
      { label: 'UEFI Forum · Official specifications', reference: 'UEFI-SPECS', url: 'https://uefi.org/specifications' },
      { label: 'NVM Express · Official specifications', reference: 'NVME-SPECS', url: 'https://nvmexpress.org/specifications/' },
      { label: 'PCI-SIG · PCI Express specifications', reference: 'PCISIG-SPECS', url: 'https://pcisig.com/specifications' }
    ],
    sections: [
      {
        heading: 'Resumen orientado al aprobado',
        paragraphs: [
          'Un ordenador personal es un sistema electrónico programable formado por hardware, firmware y software. El hardware comprende los componentes físicos; el firmware contiene instrucciones de bajo nivel almacenadas en memoria no volátil; y el software incluye el sistema operativo, controladores y aplicaciones. Para resolver preguntas de examen conviene clasificar cada elemento según su función: procesamiento, memoria, almacenamiento, entrada, salida, comunicación, alimentación o refrigeración. También debe distinguirse el componente físico de la interfaz o protocolo que utiliza.',
          'El funcionamiento general sigue un ciclo: los datos y programas se almacenan, se cargan en memoria principal, el procesador interpreta y ejecuta instrucciones, los resultados se conservan o se presentan mediante periféricos y el sistema operativo coordina recursos. El rendimiento no depende de una única cifra. Procesador, memoria, almacenamiento, placa base, gráficos, refrigeración y software forman un conjunto; un componente rápido puede quedar limitado por otro más lento, por temperatura, por controladores o por una configuración incorrecta.'
        ]
      },
      {
        heading: 'Rigor técnico y terminológico',
        paragraphs: [
          'La unidad central de procesamiento o CPU ejecuta instrucciones y coordina operaciones. No debe confundirse la CPU con la caja completa del ordenador. Un procesador puede contener varios núcleos físicos y manejar varios hilos de ejecución. La frecuencia de reloj se expresa habitualmente en hercios, pero no permite comparar por sí sola arquitecturas distintas. También influyen la microarquitectura, memoria caché, número de núcleos, conjunto de instrucciones, límites de potencia y carga de trabajo.',
          'La memoria RAM es volátil: mantiene temporalmente código y datos mientras el equipo funciona y pierde su contenido al interrumpirse la alimentación. El almacenamiento es no volátil y conserva archivos y programas. La memoria caché del procesador es más pequeña y rápida que la RAM y reduce accesos a niveles más lentos. ROM es un término general para memoria de solo lectura o no volátil, aunque en equipos actuales el firmware suele residir en memoria flash actualizable.'
        ]
      },
      {
        heading: 'Desarrollo completo del epígrafe oficial',
        paragraphs: [
          'La placa base o motherboard es la tarjeta principal que conecta procesador, memoria, almacenamiento, tarjetas de expansión, puertos y alimentación. Integra el zócalo del procesador, ranuras de memoria, chipset o lógica de plataforma, conectores de almacenamiento, ranuras PCI Express, controladores, puertos externos y circuitería de alimentación. El factor de forma determina dimensiones y distribución, pero no garantiza compatibilidad entre todos los componentes. Antes de sustituir una pieza deben comprobarse zócalo, generación, firmware, potencia, espacio y conectores.',
          'La CPU realiza operaciones aritméticas, lógicas, de control y movimiento de datos. Sus núcleos permiten ejecutar tareas en paralelo cuando el software está preparado. Los hilos lógicos mejoran la utilización de recursos, pero no equivalen necesariamente a núcleos físicos adicionales. La caché suele organizarse en niveles; cuanto más próxima al núcleo, menor capacidad y menor latencia. El procesador se comunica con memoria, almacenamiento y dispositivos mediante controladores y buses de la plataforma.',
          'La arquitectura de 64 bits permite trabajar con registros y espacios de direcciones más amplios que una arquitectura de 32 bits, siempre que procesador, firmware, sistema operativo y aplicaciones sean compatibles. En Windows 11 se exige un procesador o sistema en chip compatible de 64 bits, al menos dos núcleos y una frecuencia mínima indicada por Microsoft. Estos requisitos son mínimos de instalación y no equivalen a una recomendación universal de rendimiento.',
          'La memoria RAM se instala normalmente en módulos conectados a ranuras de la placa base. Su capacidad se expresa en bytes y sus múltiplos; su velocidad y temporización dependen del tipo de memoria y de la plataforma. Los módulos deben ser compatibles con placa y procesador. El funcionamiento en varios canales puede aumentar ancho de banda cuando los módulos se colocan en las ranuras adecuadas. Mezclar capacidades o características puede limitar frecuencia o impedir el arranque.',
          'La memoria virtual utiliza espacio de almacenamiento para complementar la RAM cuando resulta necesario. No convierte el disco en RAM real, porque el almacenamiento tiene mayor latencia. El archivo de paginación ayuda a gestionar presión de memoria y volcados, pero un uso continuo elevado suele indicar que la carga supera la RAM disponible. Desactivarlo sin criterio puede producir errores o impedir diagnósticos.',
          'El almacenamiento interno puede utilizar discos magnéticos HDD o unidades de estado sólido SSD. Un HDD guarda datos en platos giratorios y cabezales; ofrece gran capacidad con coste reducido, pero contiene partes mecánicas y presenta mayor latencia. Un SSD utiliza memoria flash y no necesita movimiento mecánico para acceder a los datos. Suele ofrecer menor latencia, menos ruido y mayor resistencia a vibraciones, aunque el desgaste, rendimiento sostenido y retención dependen del modelo y del uso.',
          'SATA es una interfaz utilizada por HDD y SSD. NVMe es un protocolo diseñado para almacenamiento no volátil y normalmente opera sobre PCI Express. M.2 es un factor de forma y conector; una unidad M.2 puede utilizar SATA o PCI Express/NVMe según dispositivo y placa. Por ello no debe afirmarse que todo M.2 es NVMe ni que NVMe describe el tamaño físico. La compatibilidad exige comprobar llave, longitud, interfaz, carriles y soporte de firmware.',
          'PCI Express es una interconexión serie de alta velocidad organizada en enlaces y carriles. Las ranuras pueden tener tamaños físicos y capacidades eléctricas diferentes. Tarjetas gráficas, controladoras de red, almacenamiento y otras expansiones pueden utilizar PCIe. Una tarjeta puede funcionar con menos carriles si existe compatibilidad, pero con ancho de banda limitado. La versión nominal de la ranura y del dispositivo debe interpretarse junto con el número de carriles.',
          'La unidad gráfica GPU procesa gráficos y tareas paralelas. Puede estar integrada en el procesador o chipset y compartir memoria principal, o ser una tarjeta dedicada con memoria gráfica propia. La salida de vídeo depende de GPU, conectores, controladores, pantalla y cable. La memoria gráfica no sustituye a la RAM del sistema. Para tareas administrativas suele ser suficiente una solución integrada compatible con el sistema operativo y la resolución requerida.',
          'La fuente de alimentación convierte la corriente de entrada en tensiones utilizadas por el equipo. Debe proporcionar potencia suficiente y conectores adecuados, con margen razonable y protecciones. La potencia anunciada no es el único criterio: importan calidad, eficiencia, estabilidad y distribución. Una fuente insuficiente o defectuosa puede causar reinicios, inestabilidad o daños. Antes de abrir un equipo se desconecta la alimentación y se siguen procedimientos antiestáticos.',
          'La refrigeración evacua el calor generado por procesador, gráficos, almacenamiento y regulación de potencia. Puede usar disipadores, ventiladores y sistemas líquidos. La pasta térmica mejora el contacto entre chip y disipador, pero no reemplaza un montaje correcto. El polvo, obstrucciones, ventiladores averiados o flujo de aire inadecuado elevan temperatura. Ante sobrecalentamiento, el sistema puede reducir frecuencia, apagarse o sufrir fallos.',
          'La caja protege y sostiene componentes, determina espacio y circulación de aire y presenta puertos frontales. El formato de placa, longitud de tarjeta, altura del disipador y ubicación de unidades deben ser compatibles. Los conectores internos unen botones, indicadores, audio y USB frontales. Forzar un conector o invertirlo puede dañar pines; debe consultarse la documentación de placa y caja.',
          'UEFI es la interfaz de firmware que inicializa hardware y entrega el control al sistema operativo. Sustituye funcionalmente al BIOS tradicional en equipos modernos. Puede administrar orden de arranque, dispositivos, seguridad y actualización de firmware. Secure Boot verifica componentes de arranque autorizados y TPM proporciona funciones criptográficas y mediciones de integridad. Windows 11 exige firmware UEFI con capacidad de arranque seguro y TPM 2.0 dentro de sus requisitos mínimos publicados.',
          'La batería CMOS o de reloj mantiene parámetros y hora cuando el equipo está desconectado, aunque la configuración exacta depende de la placa. Una batería agotada puede causar pérdida de fecha o ajustes. No contiene el sistema operativo ni alimenta el equipo completo. La actualización de firmware debe realizarse con el archivo exacto y alimentación estable; una interrupción puede dejar el equipo inoperativo.',
          'Los buses y puertos permiten comunicación. USB puede transportar datos y alimentación, pero el conector físico no determina por sí solo la velocidad o funciones. Ethernet conecta redes cableadas; Wi-Fi emplea radio; Bluetooth enlaza periféricos de corto alcance; HDMI o DisplayPort transportan vídeo y audio según versión. Un puerto puede compartir ancho de banda o depender de un controlador concreto.',
          'Los controladores o drivers permiten que el sistema operativo utilice el hardware. Un dispositivo físicamente correcto puede no funcionar por falta de controlador, incompatibilidad o configuración. El Administrador de dispositivos muestra categorías, estado y recursos. Antes de sustituir hardware deben revisarse registros, cables, controladores, firmware y pruebas cruzadas, evitando concluir automáticamente que el componente está averiado.',
          'El arranque comienza al aplicar alimentación. El firmware realiza comprobaciones, detecta dispositivos, selecciona el cargador de arranque y entrega control al sistema operativo. Un fallo antes de mostrar imagen puede relacionarse con alimentación, memoria, CPU, gráficos, placa o firmware. Un fallo posterior puede proceder del almacenamiento, cargador, controlador o sistema. Separar fase de firmware y fase de sistema ayuda al diagnóstico.',
          'Las unidades de medida deben interpretarse con precisión. Bit es unidad binaria; byte agrupa normalmente ocho bits. La capacidad se expresa en KB, MB, GB o TB según convención decimal o binaria. La velocidad de red suele indicarse en bits por segundo, mientras que la transferencia de archivos puede mostrarse en bytes por segundo. Ocho megabits por segundo no equivalen a ocho megabytes por segundo.',
          'El mantenimiento preventivo incluye actualizaciones aprobadas, limpieza, control de temperatura, copias verificadas, comprobación de almacenamiento, protección frente a malware y registro de cambios. No se limpia el interior con el equipo conectado ni se utilizan líquidos inadecuados. La electricidad estática puede dañar circuitos sin señal visible, por lo que se emplean superficies y medidas antiestáticas.',
          'En un puesto público, la sustitución o retirada de componentes debe respetar inventario, autorización, garantía, cadena de custodia y protección de datos. Un disco retirado puede contener información recuperable aunque se borren archivos. La reutilización, reparación o eliminación exige borrado seguro o destrucción conforme a la política aplicable. No se conectan componentes o dispositivos desconocidos sin autorización.',
          'Para diagnosticar rendimiento se identifica primero el síntoma, se reproduce, se revisan recursos y registros, se formula una hipótesis y se cambia una sola variable cada vez. Aumentar RAM puede ayudar si existe presión de memoria; cambiar a SSD reduce latencia de almacenamiento; una CPU más potente mejora tareas limitadas por procesador; ninguna mejora resuelve todos los cuellos de botella. La intervención debe documentarse y poder revertirse.'
        ]
      },
      {
        heading: 'Síntesis de repaso rápido',
        paragraphs: [
          'CPU ejecuta instrucciones; RAM es memoria de trabajo volátil; HDD y SSD almacenan de forma no volátil; placa base interconecta; GPU procesa gráficos; fuente alimenta; refrigeración evacua calor; UEFI inicializa; TPM y Secure Boot apoyan seguridad; SATA, NVMe, PCIe y USB son interfaces o protocolos, mientras M.2 es factor de forma. El rendimiento es sistémico y la compatibilidad debe comprobarse por zócalo, interfaz, firmware, potencia, dimensiones y controladores.'
        ]
      },
      {
        heading: 'Opo-Test: puntos calientes',
        paragraphs: [
          'CPU frente a caja; núcleo frente a hilo; frecuencia frente a rendimiento; RAM, caché, ROM y almacenamiento; HDD frente a SSD; SATA, NVMe, PCIe y M.2; placa base, chipset y buses; GPU integrada y dedicada; fuente y refrigeración; UEFI frente a BIOS; TPM y Secure Boot; bit frente a byte; driver frente a firmware; arranque; compatibilidad; memoria virtual; protección antiestática y borrado seguro.'
        ]
      },
      {
        heading: 'Tres preguntas de retención activa',
        paragraphs: [
          '¿Por qué M.2 no significa necesariamente NVMe? ¿Qué diferencia funcional existe entre RAM, caché y almacenamiento? ¿Qué comprobaciones deben realizarse antes de ampliar memoria, sustituir una fuente o retirar un disco de un equipo corporativo?'
        ]
      },
      {
        heading: 'Estrategia de examen',
        paragraphs: [
          'Descarta respuestas que identifiquen CPU con toda la torre, que confundan memoria RAM con almacenamiento, que afirmen que todo SSD M.2 es NVMe o que la frecuencia determina por sí sola el rendimiento. Ante una avería, elige el diagnóstico ordenado: síntoma, fase de arranque, alimentación, conexiones, registros, controladores, prueba controlada y documentación. En seguridad, prioriza autorización, antiestática, copia verificada y borrado seguro.'
        ]
      }
    ],
    tree: 'Ordenador personal\n├─ Procesamiento\n│  ├─ CPU, núcleos e hilos\n│  ├─ Frecuencia, caché y arquitectura\n│  └─ GPU integrada o dedicada\n├─ Memoria y almacenamiento\n│  ├─ RAM, ROM, caché y memoria virtual\n│  ├─ HDD y SSD\n│  ├─ SATA y NVMe\n│  └─ M.2 como factor de forma\n├─ Plataforma\n│  ├─ Placa base, chipset y buses\n│  ├─ PCI Express y ranuras\n│  ├─ UEFI, Secure Boot y TPM\n│  └─ Controladores y firmware\n├─ Energía y protección\n│  ├─ Fuente de alimentación\n│  ├─ Refrigeración y flujo de aire\n│  ├─ Caja y compatibilidad física\n│  └─ Electricidad estática\n└─ Operación\n   ├─ Arranque y diagnóstico\n   ├─ Rendimiento y cuellos de botella\n   ├─ Mantenimiento preventivo\n   └─ Inventario, datos y retirada segura',
    reviewTable: [
      ['CPU', 'Ejecuta instrucciones', 'No es la caja completa'],
      ['Núcleo', 'Unidad física de ejecución', 'No equivale siempre a hilo lógico'],
      ['RAM', 'Memoria de trabajo volátil', 'No conserva datos sin alimentación'],
      ['Caché', 'Memoria rápida próxima a CPU', 'Capacidad menor que RAM'],
      ['HDD', 'Almacenamiento magnético mecánico', 'Mayor latencia'],
      ['SSD', 'Almacenamiento flash', 'Sin partes móviles de acceso'],
      ['SATA', 'Interfaz de almacenamiento', 'Puede usarse en HDD o SSD'],
      ['NVMe', 'Protocolo para memoria no volátil', 'Normalmente sobre PCIe'],
      ['M.2', 'Factor de forma y conector', 'Puede ser SATA o NVMe'],
      ['UEFI', 'Firmware de inicialización', 'Entrega el control al sistema'],
      ['TPM', 'Funciones criptográficas de hardware', 'No sustituye a todas las medidas de seguridad'],
      ['Driver', 'Permite al sistema usar el dispositivo', 'No es lo mismo que firmware']
    ]
  };

  const words = [...theory.sections.flatMap(s => [s.heading, ...s.paragraphs]), theory.tree, ...theory.reviewTable.flat()].join(' ').trim().split(/\s+/).filter(Boolean).length;
  theme.sections = theory.sections;
  theme.tree = theory.tree;
  theme.reviewTable = theory.reviewTable;
  theme.officialSources = theory.sources;
  theme.theoryStatus = { autonomous: true, programmeLiteral: true, reviewedAt: REVIEW_DATE, words, sourcePolicy: 'Fuentes oficiales de Microsoft, UEFI Forum, NVM Express y PCI-SIG' };
})();
