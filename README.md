# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.68.0**
- Caché PWA: `opoweb-v75`
- Última revisión estructural: 11 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 90 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 61 % |
| **OpoWeb global** | **81 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas, supuestos, simulacros, fuentes, pruebas y deuda técnica. No representan una probabilidad de aprobar.

## Diputación de Toledo

- Los 40 temas alcanzan al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros de 50 + 5.
- Cobertura cuantitativa: 100 %.
- Estimación global: 98 % por la brecha documental de los Estatutos del OAPGT y el cierre técnico pendiente.

## UC3M

- 20 de 20 temas con al menos 30 preguntas.
- 615 preguntas válidas.
- Tres simulacros de 70 + 5.
- Tema 15 desarrollado con Estatutos oficiales.
- Capa estatutaria de contratación y administración electrónica incorporada.
- Estimación global: 84 %.

Pendiente: presupuesto y bases de ejecución, matrícula, permanencia, evaluación, reglas anuales de admisión, extracción literal de delegaciones de contratación y auditoría institucional final.

## La Puebla · v0.68

Se ha rehecho la integración sobre la versión actual de `main`, evitando el conflicto de la rama histórica v0.67.

### Resultado

- **570 preguntas específicas**.
- **19 de 19 temas con 30 preguntas**.
- Eliminación de preguntas genéricas del tipo «cómo preparar el tema».
- Reutilización controlada de contenido común auditado.
- **20 supuestos prácticos** relacionados con el programa.
- **Tres simulacros de 50 preguntas + 5 reservas**, con 60 minutos.
- Cobertura de los diecinueve temas y ausencia de duplicados dentro de cada simulacro.

### Materias reutilizadas

- Constitución;
- procedimiento administrativo;
- régimen local;
- empleo público de Castilla-La Mancha;
- prevención de riesgos;
- igualdad y protección de datos;
- tributación, recaudación y tributos locales;
- certificados y servicios de confianza;
- Windows, navegación, impresión, Writer, Calc, hardware y periféricos.

### Exclusiones aplicadas

Se filtran referencias ajenas al programa de La Puebla, especialmente OAPGT, Acuerdo Regulador de Diputación, GroupWise, LibreOffice Base e Impress.

### Pendiente real

1. Revisión literal artículo por artículo de los 19 temas.
2. Soluciones desarrolladas de los 20 supuestos.
3. Auditoría de dificultad y calidad de distractores.
4. Validación visual en navegador, móvil y tablet.
5. Seguimiento del tribunal, listas y fecha de examen.

## Carranque

Permanece al 23 % en `main`. La siguiente fase será rehacer e integrar los temas 1–10 sobre esta versión actual y después desarrollar los temas 11–20, supuestos y simulacros 80 + 5.

## Arquitectura

Pendiente consolidar módulos históricos, ampliar pruebas reales de navegador, comprobar la PWA sin conexión y asegurar que el progreso guardado no se pierde.

## Pruebas automáticas

GitHub Actions ejecuta:

- pruebas de Diputación `smoke-v56` a `smoke-v65`;
- `smoke-uc3m-v66` y `smoke-uc3m-v67`;
- prueba unitaria e integrada real de La Puebla v0.68.

Las pruebas de La Puebla verifican 570 preguntas, 19 temas a 30, 20 supuestos, simulacros 50 + 5, cobertura de los 19 temas, respuestas válidas y ausencia de duplicados internos.

## Historial reciente

### v0.68.0 · 2026-07-11

- Integrada de nuevo La Puebla sobre la versión actual de `main`.
- Sustituidas las preguntas genéricas por 570 preguntas específicas.
- Los 19 temas alcanzan 30 preguntas.
- Creados 20 supuestos prácticos.
- Simulacros regenerados a 50 + 5 reservas.
- Añadida prueba específica de UC3M v0.67.
- Caché actualizada a `opoweb-v75`.

### v0.67.0 · 2026-07-11

- Integrado el portal oficial de normativa UC3M.
- Cerrado el tema 15 con el texto refundido de los Estatutos.
- Añadidas preguntas institucionales a los temas 15 y 20.
- Incorporada la capa estatutaria de contratación UC3M.

### v0.65.0 · 2026-07-10

- Añadidas 32 preguntas verificadas al tema 22 de Diputación.
- Los 40 temas alcanzaron el objetivo cuantitativo mínimo de 30 preguntas.
