# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.81.0**
- Caché PWA: `opoweb-v88`
- Última revisión estructural y funcional: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 98 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 96 % |
| **OpoWeb global** | **97 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.80

La ejecución real de la aplicación contiene **3.102 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 690 | 20 temas con 30 o más |

La auditoría comprueba por tema:

- al menos 30 preguntas;
- identificadores y enunciados únicos;
- cuatro opciones distintas y respuesta válida;
- fuente o justificación obligatoria;
- ausencia de plantillas genéricas;
- ausencia de fuentes manifiestamente no fiables;
- equilibrio razonable entre respuestas A, B, C y D;
- tres simulacros de 70 + 5, sin repeticiones y con los veinte temas.

La integración exige que el resultado automático sea **APTO** y que no existan fallos estructurales.

## Validación funcional v0.81

Playwright ejecuta la aplicación en un navegador Chromium real mediante tres configuraciones:

- escritorio de 1440 × 900;
- móvil Pixel 7;
- tablet iPad Pro 11.

Las pruebas comprueban:

- carga exacta de las cuatro OPE activas;
- recorrido por las siete vistas de la aplicación;
- funcionamiento del menú adaptable;
- ausencia de desbordamiento horizontal;
- respuesta y corrección de preguntas;
- persistencia del progreso tras recargar;
- registro del service worker;
- contenido de la caché `opoweb-v88`;
- lectura del manifiesto;
- recarga completa sin conexión;
- conservación de `localStorage` sin red.

El informe HTML de Playwright se guarda como artefacto de GitHub Actions durante 14 días.

## UC3M · cierre documental

El programa queda cubierto con 690 preguntas reales:

- 20 de 20 temas con al menos 30 preguntas;
- temas 16 y 20 con 60 preguntas;
- temas 18 y 19 con 45 preguntas;
- resto de temas con 30 preguntas;
- tres simulacros de 70 + 5;
- normativa estatal, autonómica e interna separada y trazable.

### Política sobre admisión anual

No se incorporan ponderaciones, cupos, notas de corte, plazas o calendarios anuales como si fueran reglas estables cuando no existe una publicación oficial específica del curso accesible y contrastada.

El tema 17 incluye una alerta para revisar la redacción vigente del artículo 23.2 del Real Decreto 534/2024 desde el **22 de julio de 2026**. Esto evita memorizar antes de su entrada en vigor una redacción futura o mezclar datos dinámicos con normativa consolidada.

### Qué queda realmente pendiente

UC3M se mantiene en el 99 %, no en el 100 %. La validación automática de navegador, vista móvil, vista tablet, modo sin conexión y persistencia ya está cubierta. El margen restante corresponde a:

- comprobación manual en dispositivos físicos Android e iPad;
- prueba específica con Safari/WebKit;
- instalación manual desde la interfaz del navegador;
- futuras actualizaciones anuales oficiales de admisión.

## Resto de convocatorias

### Diputación

- 1.242 preguntas efectivamente cargadas.
- 40 temas con al menos 30 preguntas.
- Tres simulacros de 50 + 5.
- Pendiente principal: Estatutos oficiales vigentes del OAPGT y cierre técnico.

### La Puebla

- 570 preguntas.
- 19 temas con 30 preguntas.
- 20 supuestos con solución desarrollada.
- Tres simulacros de 50 + 5 y 60 minutos.

### Carranque

- 600 preguntas.
- 20 temas con 30 preguntas.
- 18 supuestos con solución desarrollada.
- Tres simulacros de 80 + 5 y 90 minutos.

## Controles automáticos

GitHub Actions ejecuta:

- regresión histórica de las cuatro convocatorias;
- auditoría final específica de las 690 preguntas UC3M;
- auditoría transversal de las 3.102 preguntas;
- validación de los tres simulacros UC3M;
- matriz independiente de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- integridad de `index.html`, manifiesto y caché PWA;
- Playwright en escritorio, móvil y tablet;
- recarga sin conexión y conservación del progreso.

## Pendiente real

1. Comprobar manualmente la aplicación en dispositivos físicos Android e iPad y en Safari/WebKit.
2. Revisar la redacción vigente del artículo 23.2 del Real Decreto 534/2024 desde el 22 de julio de 2026.
3. Actualizar admisión UC3M solo con publicación oficial anual.
4. Localizar los Estatutos vigentes del OAPGT.
5. Auditar literalidad y dificultad de La Puebla y Carranque.
6. Consolidar las capas históricas de JavaScript preservando el progreso guardado.

## Historial reciente

### v0.81.0 · 2026-07-12

- Añadidas pruebas Playwright en escritorio, Pixel 7 e iPad Pro 11.
- Verificada la navegación completa y el diseño adaptable.
- Verificada la persistencia del progreso tras recargar.
- Verificados service worker, manifiesto, caché y recarga sin conexión.
- Caché actualizada a `opoweb-v88`.

### v0.80.0 · 2026-07-12

- Añadida auditoría final del banco UC3M.
- Controlados duplicados, opciones, trazabilidad, fuentes y equilibrio por tema.
- Separados los datos anuales de admisión de la normativa estable.
- Añadida alerta de transición normativa para el artículo 23.2 del Real Decreto 534/2024.

### v0.79.0 · 2026-07-12

- Integradas 30 preguntas de contratación interna UC3M.
- Tema 20 ampliado a 60 preguntas.
- Banco UC3M elevado a 690 y banco global a 3.102 preguntas.
