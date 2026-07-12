# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.73.0**
- Caché PWA: `opoweb-v80`
- Última revisión estructural: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 68 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 80 % |
| **OpoWeb global** | **85 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.73

La ejecución real de la aplicación contiene **2.912 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 500 | 15 de 20 temas con 30; mínimo 10 |

La auditoría automática comprueba:

- respuestas y estructuras de opciones válidas;
- identificadores únicos;
- justificación o fuente obligatoria;
- ausencia de preguntas genéricas;
- ausencia de duplicados dentro del mismo tema;
- equilibrio razonable de respuestas A, B, C y D.

## UC3M · mejora v0.73

El tema 7 de transparencia pasa de 6 a **30 preguntas verificadas** y deja de ser el mínimo del banco. Se han incorporado:

- ámbito de aplicación de la Ley 10/2019 a universidades públicas;
- principios de transparencia y obligaciones de publicidad activa;
- legitimación universal y presentación de solicitudes;
- plazos de 10 días para concretar, 20 + 20 para resolver y un mes para reclamar;
- silencio desestimatorio;
- aplicación práctica del Portal de Transparencia UC3M.

Resultado actual:

- 500 preguntas reales;
- 15 temas con 30 preguntas;
- mínimo de 10 preguntas en los temas universitarios incompletos;
- tres simulacros de 70 + 5 generados con preguntas reales;
- 0 plantillas genéricas.

Pendiente: elevar los temas universitarios 13–17 a 30 preguntas e incorporar presupuesto y bases de ejecución vigentes, matrícula, permanencia, evaluación, admisión y delegaciones internas completas.

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
- validación específica del tema 7 UC3M y de sus tres simulacros;
- auditoría transversal de las 2.912 preguntas;
- matriz independiente de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- comprobación de recursos de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Completar los temas universitarios 13–17 de UC3M.
2. Localizar los Estatutos vigentes del OAPGT.
3. Auditar literalidad y dificultad de La Puebla y Carranque.
4. Probar navegador, móvil, tablet y funcionamiento sin conexión.
5. Consolidar las capas históricas de JavaScript preservando el progreso guardado.
6. Mantener actualizado el seguimiento de listas, tribunales y fechas.

## Historial reciente

### v0.73.0 · 2026-07-12

- Completado el tema 7 de transparencia UC3M con 30 preguntas verificadas.
- Integrados plazos literales de la Ley 10/2019 y el Portal de Transparencia UC3M.
- Elevado el banco UC3M a 500 preguntas y 15 de 20 temas con 30.
- Regenerados los tres simulacros de 70 + 5.
- Ampliada la CI con pruebas específicas v0.73.
- Caché actualizada a `opoweb-v80`.

### v0.72.0 · 2026-07-11

- Creada auditoría transversal de calidad.
- Corregido el recuento efectivo a 2.888 preguntas.
- Eliminadas 218 plantillas genéricas y 198 repeticiones internas de UC3M.
- Reconstruido UC3M con 476 preguntas reales y simulacros 70 + 5.

### v0.71.0 · 2026-07-11

- Desarrolladas las soluciones de 20 supuestos de La Puebla y 18 de Carranque.

### v0.70.0 · 2026-07-11

- Carranque completa veinte temas, 600 preguntas y simulacros 80 + 5.
