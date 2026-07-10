# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.61.0**
- Caché PWA: `opoweb-v68`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 84 % |
| Diputación C1 | 84 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 47 % |
| **OpoWeb global** | **59 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica.

## Estado real de Diputación

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 380 preguntas añadidas durante la segunda vuelta;
- **965 preguntas manuales acumuladas**;
- temas 1–21 y 23 elevados al objetivo mínimo de 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos y 40 variantes;
- tres simulacros prácticos internos.

La segunda vuelta alcanza **22 de los 39 temas actualmente auditables: aproximadamente un 56 %**. Para cerrar Diputación faltan los temas 24–40, el tema 22, la auditoría transversal y la consolidación técnica.

## Segunda vuelta v0.61

Se ha reforzado el tema 23: **Ley 31/1995 de Prevención de Riesgos Laborales**.

### Resultado

- 22 preguntas nuevas y específicas;
- 380 preguntas acumuladas en la segunda vuelta;
- veintidós temas con al menos 30 preguntas reales;
- cuatro alternativas distintas;
- respuesta correcta rotada;
- dificultad baja, media y alta;
- justificación mediante artículos concretos de la Ley 31/1995;
- regeneración de los tres simulacros.

### Contenido reforzado

- derecho a protección eficaz y deber correlativo;
- principios de la acción preventiva;
- plan, evaluación y planificación;
- información, formación, emergencias y riesgo grave e inminente;
- vigilancia de la salud y confidencialidad;
- obligaciones de los trabajadores;
- modalidades de organización preventiva;
- Delegados de Prevención y Comité de Seguridad y Salud.

## Próximas prioridades

### Diputación

1. Reforzar el tema 24 de igualdad.
2. Continuar con los temas tributarios, presupuestarios, transparencia y protección de datos.
3. Completar el bloque informático y ofimático 32–40.
4. Cerrar el tema 22 solo con textos oficiales internos.
5. Consolidar las capas históricas cuando el contenido esté estabilizado.

### Carranque

Completar los 20 temas, sustituir preguntas de método y crear supuestos exclusivos de temas 3–20.

### La Puebla

Completar 19 temas, alcanzar 30–40 preguntas por tema y resolver al menos 20 supuestos.

### UC3M

Cerrar normativa interna pendiente y elevar a 30–40 preguntas los temas incompletos.

## Pruebas automáticas

GitHub Actions ejecuta en cada `push` y `pull_request`:

```bash
node tests/smoke-v56.js
node tests/smoke-v57.js
node tests/smoke-v58.js
node tests/smoke-v59.js
node tests/smoke-v60.js
node tests/smoke-v61.js
```

Las pruebas comprueban los temas 17–21 y 23, cifras acumuladas, simulacros 50 + 5, ausencia de duplicados internos y exclusión del tema 22.

## Historial reciente

### v0.61.0 · 2026-07-10

- Añadidas 22 preguntas al tema 23.
- Temas 1–21 y 23 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 965 preguntas manuales acumuladas.
- Desarrollada la prevención de riesgos laborales.
- Regenerados los simulacros.
- Actualizada la caché a `opoweb-v68`.

### v0.60.0 · 2026-07-10

- Añadidas 36 preguntas al tema 21.
- Alcanzadas 943 preguntas manuales acumuladas.

### v0.59.0 · 2026-07-10

- Añadidas 30 preguntas al tema 20.
- Alcanzadas 907 preguntas manuales acumuladas.
