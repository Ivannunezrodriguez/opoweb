# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.76.0**
- Caché PWA: `opoweb-v83`
- Última revisión estructural: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 88 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 86 % |
| **OpoWeb global** | **91 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.76

La ejecución real de la aplicación contiene **3.012 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 600 | 20 temas con 30 |

La auditoría automática comprueba respuestas válidas, cuatro opciones distintas, identificadores únicos, justificación o fuente obligatoria, ausencia de preguntas genéricas y ausencia de duplicados dentro del mismo tema.

## UC3M · mejora v0.76

Los temas 16 y 17 quedan reconstruidos con **60 preguntas verificadas** basadas en el Real Decreto 822/2021 y el Real Decreto 534/2024.

### Tema 16 · ordenación académica

- estructura de Grado, Máster y Doctorado;
- planes de estudios, guías docentes y reconocimiento de créditos;
- Grado de 240 ECTS y formación básica;
- TFG, prácticas externas y modalidades presencial, híbrida y virtual;
- Másteres de 60, 90 o 120 ECTS;
- matrícula condicionada, complementos formativos y reserva por discapacidad;
- verificación, seguimiento, modificación y renovación de la acreditación.

### Tema 17 · acceso y admisión

- diferencia entre acceso y admisión;
- acceso con Bachillerato y con Técnico Superior;
- vías para mayores de 25, 40 y 45 años;
- estructura y calificación de la prueba de acceso;
- ponderación 60 % Bachillerato y 40 % prueba;
- materias adicionales y vigencia de las calificaciones de admisión;
- publicidad previa de los procedimientos y adjudicación de plazas.

La versión usa la normativa vigente el 12 de julio de 2026. No anticipa la modificación del artículo 23.2 del Real Decreto 534/2024 cuya entrada en vigor está prevista para el 22 de julio de 2026.

Resultado actual:

- 600 preguntas reales en UC3M;
- 20 de 20 temas con al menos 30 preguntas;
- mínimo de 30 preguntas por tema;
- tres simulacros de 70 + 5 con representación de los 20 temas;
- 0 plantillas genéricas.

La cobertura cuantitativa está completa, pero UC3M no se considera cerrada. Falta incorporar la normativa interna vigente de matrícula, permanencia y evaluación, los parámetros anuales de admisión, presupuesto, bases de ejecución y delegaciones internas, además de una auditoría final de literalidad y dificultad.

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
- validación específica de los temas 16 y 17 y de los tres simulacros UC3M;
- auditoría transversal de las 3.012 preguntas;
- matriz independiente de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- comprobación de recursos de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Incorporar normativa interna y parámetros anuales vigentes de UC3M.
2. Localizar los Estatutos vigentes del OAPGT.
3. Auditar literalidad y dificultad de La Puebla y Carranque.
4. Probar navegador, móvil, tablet y funcionamiento sin conexión.
5. Consolidar las capas históricas de JavaScript preservando el progreso guardado.
6. Mantener actualizado el seguimiento de listas, tribunales y fechas.

## Historial reciente

### v0.76.0 · 2026-07-12

- Completados los temas 16 y 17 de UC3M con 60 preguntas verificadas.
- Elevado el banco UC3M a 600 preguntas y 20 de 20 temas con 30.
- Elevado el banco global a 3.012 preguntas.
- Regenerados los simulacros 70 + 5.
- Añadidas pruebas específicas y auditoría transversal v0.76.
- Caché actualizada a `opoweb-v83`.

### v0.75.0 · 2026-07-12

- Completado el tema 15 de UC3M con 30 preguntas de Estatutos verificadas.
- Elevado el banco UC3M a 560 preguntas y 18 de 20 temas con 30.

### v0.74.0 · 2026-07-12

- Completados los temas 13 y 14 de UC3M con 60 preguntas LOSU verificadas.

### v0.73.0 · 2026-07-12

- Completado el tema 7 de transparencia UC3M con 30 preguntas verificadas.
