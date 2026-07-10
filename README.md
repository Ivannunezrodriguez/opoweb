# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.67.0**
- Caché PWA: `opoweb-v74`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 90 % |
| Diputación C1 | 98 % |
| UC3M C2 | 78 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 61 % |
| **OpoWeb global** | **80 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica. No representan probabilidad de aprobar.

## Diputación de Toledo

- Los 40 temas alcanzan al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros de 50 + 5.
- Cobertura cuantitativa: 100 %.
- Estimación global: 98 % por la brecha documental de los Estatutos del OAPGT y el cierre técnico pendiente.

## UC3M

- Los 20 temas alcanzan al menos 30 preguntas válidas.
- 600 preguntas acumuladas.
- Tres simulacros de 70 + 5.
- Estimación global: 78 % por normativa interna y auditoría institucional pendientes.

## La Puebla · v0.67

Se ha sustituido el banco genérico inicial por contenido común ya auditado y ajustado al programa oficial.

### Resultado

- **570 preguntas específicas**.
- **19 de 19 temas con 30 preguntas**.
- **20 supuestos prácticos** vinculados al programa.
- **Tres simulacros de 50 preguntas + 5 reservas**, con 60 minutos y cobertura de los diecinueve temas.
- Eliminación de preguntas de método del tipo «cómo preparar el tema».
- Reutilización controlada de Constitución, procedimiento, régimen local, empleo público, prevención, igualdad, protección de datos, tributación, administración electrónica e informática.

La cobertura cuantitativa mínima de La Puebla queda al 100 %. Su estimación global se mantiene en 74 % porque faltan revisión artículo por artículo, soluciones más extensas de supuestos, auditoría de dificultad y pruebas de navegador.

## Pendientes principales

### La Puebla

1. Revisión literal de los 19 temas.
2. Desarrollo completo de soluciones prácticas.
3. Auditoría de dificultad y equilibrio.
4. Validación visual y de navegador.

### Carranque

Desarrollar 20 temas, sustituir preguntas de método, generar simulacros oficiales de 80 + 5 y rehacer los supuestos sobre temas 3–20.

### Arquitectura

Consolidar módulos históricos, ampliar pruebas de navegador y validar la interfaz móvil.

## Pruebas automáticas

GitHub Actions ejecuta las pruebas de Diputación `smoke-v56` a `smoke-v65`, `smoke-uc3m-v66` y `smoke-puebla-v67`. Se comprueban recuentos, reservas, cobertura temática, supuestos y ausencia de duplicados internos.

## Historial reciente

### v0.67.0 · 2026-07-10

- Sustituidas las preguntas genéricas de La Puebla por 570 preguntas específicas.
- Los 19 temas alcanzan 30 preguntas.
- Creados 20 supuestos prácticos.
- Simulacros regenerados a 50 + 5 reservas.
- Caché actualizada a `opoweb-v74`.

### v0.66.0 · 2026-07-10

- Añadidas 110 preguntas a once temas de UC3M.
- Los veinte temas alcanzan 30 o más preguntas.

### v0.65.0 · 2026-07-10

- Añadidas 32 preguntas verificadas al tema 22 de Diputación.
- Los 40 temas alcanzan el objetivo cuantitativo mínimo de 30 preguntas.
