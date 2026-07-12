# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.77.0**
- Caché PWA: `opoweb-v84`
- Última revisión estructural: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 93 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 88 % |
| **OpoWeb global** | **92 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.77

La ejecución real de la aplicación contiene **3.042 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 630 | 20 temas con 30 o más |

La auditoría automática comprueba respuestas válidas, cuatro opciones distintas, identificadores únicos, justificación o fuente obligatoria, ausencia de preguntas genéricas y ausencia de duplicados dentro del mismo tema.

## UC3M · mejora v0.77

El tema 16 se amplía de 30 a **60 preguntas**: 30 sobre el Real Decreto 822/2021 y 30 sobre normativa interna UC3M.

La nueva capa institucional incorpora:

- permanencia en primer curso: 12 créditos durante el primer año;
- dos años para superar primero, tres en ingenierías;
- cuatro convocatorias por asignatura, seis en ingenierías;
- dispensa justificada y máximo de dos dispensas libres;
- matrícula parcial de hasta 30 ECTS y mínimo posterior de 18 ECTS;
- evaluación continua con peso mínimo del 40 %;
- examen final con peso máximo del 60 % en ordinaria;
- examen del 100 % en extraordinaria para quien no siguió evaluación continua;
- publicación de la nota final en un máximo de diez días;
- revisión entre dos y siete días después de publicar la calificación;
- recurso en siete días naturales y resolución que agota la vía administrativa.

Resultado actual:

- 630 preguntas reales en UC3M;
- 20 de 20 temas con al menos 30 preguntas;
- tema 16 con 60 preguntas;
- tres simulacros de 70 + 5 con representación de los 20 temas;
- 0 plantillas genéricas.

UC3M queda al 93 %, no al 100 %. Falta cerrar presupuesto y bases de ejecución vigentes, delegaciones internas de contratación, parámetros anuales de admisión y auditoría final de literalidad y dificultad.

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

- regresión histórica de Diputación, UC3M, La Puebla y Carranque;
- validación de las 30 preguntas internas del tema 16;
- comprobación de las cifras 12, 18, 30, 40 %, 60 %, 2–7 y 10 días;
- auditoría transversal de las 3.042 preguntas;
- validación de los simulacros UC3M 70 + 5;
- matriz independiente de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- comprobación de recursos de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Incorporar presupuesto y bases de ejecución vigentes de UC3M.
2. Extraer delegaciones internas de contratación UC3M.
3. Actualizar parámetros anuales de admisión UC3M.
4. Localizar los Estatutos vigentes del OAPGT.
5. Auditar literalidad y dificultad de La Puebla y Carranque.
6. Probar navegador, móvil, tablet y funcionamiento sin conexión.
7. Consolidar las capas históricas de JavaScript preservando el progreso guardado.

## Historial reciente

### v0.77.0 · 2026-07-12

- Integradas 30 preguntas sobre normativa interna académica UC3M.
- Tema 16 ampliado a 60 preguntas.
- Banco UC3M elevado a 630 y banco global a 3.042 preguntas.
- Simulacros 70 + 5 regenerados.
- Caché actualizada a `opoweb-v84`.

### v0.76.0 · 2026-07-12

- Completados los temas 16 y 17 con 60 preguntas estatales verificadas.
- Banco UC3M elevado a 600 preguntas y 20 de 20 temas con 30.

### v0.75.0 · 2026-07-12

- Completado el tema 15 de Estatutos UC3M con 30 preguntas.

### v0.74.0 · 2026-07-12

- Completados los temas 13 y 14 con 60 preguntas LOSU.
