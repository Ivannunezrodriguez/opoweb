# Auditoría global de OpoWeb · v0.83

Fecha de revisión: 12 de julio de 2026.

## Alcance

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

## Avance aproximado

| Área | Avance |
|---|---:|
| Funcionamiento e interfaz | 99 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 98 % |
| **OpoWeb global** | **97 %** |

## Recuento efectivo

| Convocatoria | Preguntas | Temas a 30 |
|---|---:|---:|
| Diputación | 1.242 | 40/40 |
| La Puebla | 570 | 19/19 |
| Carranque | 600 | 20/20 |
| UC3M | 690 | 20/20 |
| **Total** | **3.102** | — |

## Auditoría UC3M v0.80

La auditoría final comprueba por tema:

- mínimo de 30 preguntas;
- unicidad de identificadores y enunciados normalizados;
- cuatro alternativas distintas;
- correspondencia entre respuesta y opciones;
- fuente o justificación;
- ausencia de plantillas y textos genéricos;
- ausencia de dominios manifiestamente no fiables;
- equilibrio razonable entre A, B, C y D;
- clasificación de dificultad.

Los tres simulacros deben contener 70 preguntas principales, 5 reservas, 75 textos únicos y representación de los veinte temas.

La versión solo puede considerarse apta cuando el informe no contiene fallos. Este control no sustituye la revisión jurídica del contenido, pero reduce errores estructurales y de trazabilidad.

## Arranque y PWA v0.83

La página ya no mantiene una cadena extensa de etiquetas `<script>`. `index.html` carga únicamente el manifiesto y el cargador.

El manifiesto central declara:

- versión de aplicación;
- nombre de caché;
- recursos estáticos;
- todos los módulos en su orden exacto;
- lista total usada por el service worker.

El cargador ejecuta los módulos uno a uno, registra los recursos cargados y emite los eventos `opoweb:ready` u `opoweb:failed`. Cuando un recurso falta, se identifica el archivo concreto en vez de continuar con una aplicación parcialmente inicializada.

El service worker importa el mismo manifiesto y utiliza `opoweb-v90`. Así se elimina la doble lista manual que existía entre `index.html` y `sw.js`.

## Validación funcional v0.83

Playwright ejecuta OpoWeb en Chromium con tres perfiles:

- escritorio 1440 × 900;
- Pixel 7;
- iPad Pro 11.

La prueba funcional controla:

- carga de las cuatro convocatorias activas;
- coincidencia entre módulos declarados y cargados;
- ausencia de scripts duplicados;
- conservación del orden exacto del manifiesto;
- recorrido de las siete vistas;
- menú adaptable en móvil y tablet;
- ausencia de desbordamiento horizontal;
- respuesta y corrección de un test UC3M;
- persistencia de `opowebProgress` después de recargar;
- registro y control del service worker;
- presencia de la caché `opoweb-v90` y de sus recursos esenciales;
- manifiesto instalable;
- recarga completa sin conexión;
- conservación de datos locales durante la recarga sin red;
- migración transparente desde el formato histórico;
- recuperación desde `opowebProgressBackup` si el principal está corrupto;
- exportación v2 e importación con checksum.

El informe de ejecución se conserva como artefacto HTML de GitHub Actions durante 14 días.

## Protección de datos locales v0.82

La capa de almacenamiento mantiene la clave histórica y añade un formato de intercambio v2. Cada guardado se sanea y genera metadatos con fecha, número de bloques y checksum FNV-1a.

Antes de sobrescribir el progreso principal se conserva el último estado válido. Cuando el JSON principal no puede analizarse, OpoWeb intenta restaurar automáticamente la copia. Los archivos de exportación incluyen checksum y se rechazan si han sido modificados sin actualizarlo.

El control reduce el riesgo de pérdida durante futuras refactorizaciones, pero no sustituye una exportación periódica realizada por el usuario.

## Política de admisión anual

Los datos anuales de ponderaciones, cupos, notas de corte, plazas y calendario no se mezclan con la normativa estable. Se actualizarán únicamente cuando exista una publicación oficial específica del curso.

El tema 17 identifica la transición del artículo 23.2 del Real Decreto 534/2024 y exige revisar su redacción vigente desde el 22 de julio de 2026.

## Estado real de UC3M

- 690 preguntas.
- 20 temas con al menos 30.
- Temas 16 y 20 con 60.
- Temas 18 y 19 con 45.
- Tres simulacros 70 + 5.
- Marco estatal, autonómico e interno integrado.
- Presupuesto 2026 y contratación interna integrados.
- Validación automática de navegador, PWA, almacenamiento y cargador integrada.
- Avance estimado: 99 %.

No se asigna el 100 % porque la emulación automatizada no sustituye una comprobación manual en dispositivos físicos, Safari/WebKit ni el mantenimiento de datos anuales.

## Bloqueos para alcanzar el 100 % global

1. Comprobación manual en dispositivos físicos Android e iPad y en Safari/WebKit.
2. Revisión del artículo 23.2 del Real Decreto 534/2024 desde el 22 de julio de 2026.
3. Actualización anual de admisión UC3M con fuente oficial.
4. Estatutos oficiales vigentes del OAPGT.
5. Auditoría literal y de dificultad de La Puebla y Carranque.
6. Consolidación interna de módulos históricos; su orden y carga ya están centralizados, pero la lógica aún está distribuida.
