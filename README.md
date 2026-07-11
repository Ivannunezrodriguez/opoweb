# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.72.0**
- Caché PWA: `opoweb-v79`
- Última revisión estructural: 11 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 64 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 78 % |
| **OpoWeb global** | **84 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.72

La ejecución real de la aplicación contiene **2.888 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 476 | 14 de 20 temas con 30; mínimo 6 |

La auditoría automática registra:

- **0 respuestas inválidas**;
- **0 estructuras de opciones inválidas**;
- **0 identificadores duplicados**;
- **0 preguntas sin justificación**;
- **0 preguntas genéricas**;
- **0 duplicados dentro del mismo tema**.

Las cifras anteriores de 1.269 preguntas en Diputación y 615 en UC3M eran recuentos documentales acumulados, no el contenido efectivo final cargado. La v0.72 adopta exclusivamente el recuento de ejecución.

## UC3M corregida

La auditoría detectó que el banco inicial conservaba 218 preguntas genéricas y 198 repeticiones internas. Se han eliminado y sustituido por contenido real reutilizable o específico.

Resultado actual:

- 476 preguntas reales;
- 14 temas con 30 preguntas;
- tema 7 de transparencia con 6 preguntas verificadas;
- temas universitarios 13–17 con al menos 10 preguntas específicas;
- tres simulacros de 70 + 5 generados solo con preguntas reales;
- 0 plantillas genéricas.

Pendiente: ampliar transparencia y los temas universitarios, incorporar presupuesto y bases de ejecución vigentes, matrícula, permanencia, evaluación, admisión y delegaciones internas completas.

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
- validación real del banco limpio de UC3M;
- auditoría transversal de las 2.888 preguntas;
- matriz independiente de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- comprobación de recursos de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Ampliar UC3M hasta 30 preguntas reales en los seis temas incompletos.
2. Localizar los Estatutos vigentes del OAPGT.
3. Auditar literalidad y dificultad de La Puebla y Carranque.
4. Probar navegador, móvil, tablet y funcionamiento sin conexión.
5. Consolidar las capas históricas de JavaScript preservando el progreso guardado.
6. Mantener actualizado el seguimiento de listas, tribunales y fechas.

## Historial reciente

### v0.72.0 · 2026-07-11

- Creada auditoría transversal de calidad.
- Corregido el recuento efectivo a 2.888 preguntas.
- Eliminadas 218 plantillas genéricas y 198 repeticiones internas de UC3M.
- Reconstruido UC3M con 476 preguntas reales y simulacros 70 + 5.
- Añadido control de integridad web y PWA.
- Caché actualizada a `opoweb-v79`.

### v0.71.0 · 2026-07-11

- Desarrolladas las soluciones de 20 supuestos de La Puebla y 18 de Carranque.

### v0.70.0 · 2026-07-11

- Carranque completa veinte temas, 600 preguntas y simulacros 80 + 5.
