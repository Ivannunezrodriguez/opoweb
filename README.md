# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.84.0**
- Caché PWA: `opoweb-v91`
- Cargador: manifiesto único y secuencial
- Formato de progreso: v2, compatible con archivos históricos
- Última revisión estructural, jurídica y funcional: 13 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 99 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 99 % |
| Carranque C2 | 99 % |
| Arquitectura y pruebas | 98 % |
| **OpoWeb global** | **98 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.84

La ejecución real de la aplicación contiene **3.102 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 690 | 20 temas con 30 o más |

La auditoría comprueba por tema:

- identificadores y enunciados únicos;
- cuatro opciones distintas y respuesta válida;
- fuente o justificación obligatoria;
- ausencia de plantillas genéricas;
- ausencia de fuentes manifiestamente no fiables;
- equilibrio razonable entre respuestas A, B, C y D;
- clasificación de dificultad baja, media y alta;
- correspondencia con el orden y título oficial del programa;
- simulacros sin repeticiones y con cobertura completa.

La integración exige que el resultado automático sea **APTO** y que no existan fallos estructurales.

## La Puebla · cierre al 99 %

La convocatoria queda contrastada con las bases publicadas en el BOP de Toledo número 82, de 5 de mayo de 2026, CSV `2026.00001965`.

- 19 títulos de tema integrados con la redacción literal del programa.
- 570 preguntas: 30 por cada tema.
- 20 supuestos prácticos con cobertura de los temas 1 a 19.
- Tres simulacros de 50 preguntas y 5 reservas, 60 minutos.
- Corrección oficial: +0,20 por acierto, −0,05 por error y 0 en blanco.
- Segundo ejercicio práctico reflejado como prueba eliminatoria.
- Ponderación registrada: oposición 80 % y concurso 20 %.
- Baremo personal conservador: 0 puntos confirmados; DAM no es Grado en Derecho ni Arquitectura y no consta experiencia pública C2.

No se asigna el 100 % porque todavía pueden publicarse correcciones, listas, instrucciones del tribunal o cambios normativos exigibles el día del examen.

## Carranque · cierre al 99 %

La convocatoria queda contrastada con las bases aprobadas por Resolución de Alcaldía 1059, de 26 de diciembre de 2025, CSV `2EAA AEP4 Z2V2 3X7P EZU7`.

- 20 títulos de tema integrados con la redacción literal del programa.
- 600 preguntas: 30 por cada tema.
- 18 supuestos prácticos con cobertura de los temas 3 a 20, que son los expresamente incluidos en el segundo ejercicio.
- Tres simulacros de 80 preguntas y 5 reservas, 90 minutos.
- Corrección oficial: +0,25 por acierto, −0,08 por error y 0 en blanco.
- Segundo ejercicio práctico reflejado como prueba eliminatoria de 0 a 20 puntos.
- Baremo integrado: titulación, experiencia pública y privada y formación.
- Baremo personal prudente: 0 puntos confirmados y 0,75 condicionados por DAM solo si se alegó y acreditó dentro del plazo.

No se asigna el 100 % porque faltan los anuncios posteriores del proceso, la comprobación manual final y cualquier posible actualización normativa antes del examen.

## Arranque centralizado

`index.html` carga únicamente `asset-manifest-v83.js` y `loader-v83.js`. El manifiesto establece el orden exacto de los módulos y alimenta también el service worker. La caché `opoweb-v91` incorpora el cierre municipal v0.84 sin duplicar listas de recursos.

La centralización del arranque no equivale todavía a haber fusionado toda la lógica interna de los módulos históricos. Esa consolidación seguirá realizándose con pruebas de regresión y protección del progreso.

## Validación funcional v0.84

Playwright ejecuta la aplicación en Chromium mediante tres configuraciones:

- escritorio de 1440 × 900;
- móvil Pixel 7;
- tablet iPad Pro 11.

Las pruebas controlan:

- las cuatro OPE activas y las siete vistas;
- carga secuencial de todos los módulos, sin duplicados;
- programa literal de La Puebla y Carranque;
- parámetros oficiales de ambos exámenes;
- 30 preguntas visibles por tema;
- tarjetas de auditoría y porcentaje del 99 %;
- cobertura de supuestos y simulacros;
- persistencia, copia, exportación e importación del progreso;
- service worker, caché `opoweb-v91` y recarga sin conexión;
- ausencia de desbordamiento horizontal.

El informe HTML de Playwright se conserva como artefacto de GitHub Actions durante 14 días. Los informes JSON de auditoría municipal y transversal se conservan durante 30 días.

## Protección del progreso

OpoWeb mantiene la clave histórica `opowebProgress`. Antes de sobrescribir o importar, guarda el último estado válido en `opowebProgressBackup`. También valida respuestas y puntuaciones, genera checksum FNV-1a y puede recuperar automáticamente una copia si el JSON principal está dañado.

La copia está en el mismo navegador. Borrar los datos del sitio elimina tanto el progreso como la copia local; por eso continúa siendo recomendable exportar periódicamente.

## UC3M

- 690 preguntas.
- 20 temas con al menos 30.
- Temas 16 y 20 con 60; temas 18 y 19 con 45.
- Tres simulacros de 70 + 5.
- Marco estatal, autonómico e interno integrado.
- Avance estimado: 99 %.

Quedan la comprobación manual en dispositivos físicos y Safari/WebKit, futuras actualizaciones anuales de admisión y la revisión de la redacción vigente del artículo 23.2 del Real Decreto 534/2024 desde el 22 de julio de 2026.

## Diputación

- 1.242 preguntas.
- 40 temas con al menos 30.
- Tres simulacros de 50 + 5.
- Avance estimado: 97 %.
- Pendiente principal: Estatutos oficiales vigentes del OAPGT y cierre técnico.

## Controles automáticos

GitHub Actions ejecuta:

- regresión histórica de las cuatro convocatorias;
- auditoría final de La Puebla y Carranque;
- auditoría específica de las 690 preguntas UC3M;
- auditoría transversal de las 3.102 preguntas;
- comprobación literal de 19 + 20 títulos oficiales;
- matriz independiente de los 20 temas de Carranque;
- validación de 38 supuestos municipales;
- simulacros con formato, duración y cobertura oficial;
- integridad de manifiesto, cargador y PWA;
- Playwright en escritorio, móvil y tablet;
- funcionamiento sin conexión y protección del progreso.

## Pendiente real

1. Localizar e integrar los Estatutos oficiales vigentes del OAPGT.
2. Revisar la redacción vigente del artículo 23.2 del Real Decreto 534/2024 desde el 22 de julio de 2026.
3. Actualizar admisión UC3M solo con publicación oficial anual.
4. Comprobar manualmente la aplicación en dispositivos físicos Android e iPad y en Safari/WebKit.
5. Vigilar listas, tribunal, fecha de examen, instrucciones y posibles correcciones de La Puebla y Carranque.
6. Consolidar internamente las capas históricas de JavaScript sin perder progreso.

## Historial reciente

### v0.84.0 · 2026-07-13

- Contrastados los programas de La Puebla y Carranque con sus bases oficiales.
- Integrados literalmente los 19 y 20 títulos de tema.
- Corregidos formato, duración, puntuación, reservas y baremos de ambos procesos.
- Auditadas dificultad, trazabilidad, duplicados, opciones y reparto de respuestas.
- Verificada la cobertura práctica completa y los seis simulacros municipales.
- La Puebla y Carranque elevadas prudentemente al 99 %.
- Caché actualizada a `opoweb-v91`.

### v0.83.0 · 2026-07-12

- Sustituidas las etiquetas históricas de `index.html` por un manifiesto único.
- Añadido cargador secuencial con diagnóstico de errores.
- Reutilizado el mismo manifiesto en el service worker.
- Caché actualizada a `opoweb-v90`.

### v0.82.0 · 2026-07-12

- Añadido almacenamiento versionado, copia automática, recuperación y exportación validada.
- Caché actualizada a `opoweb-v89`.
