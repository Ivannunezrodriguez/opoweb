# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.58.0**
- Caché PWA: `opoweb-v65`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 82 % |
| Diputación C1 | 79 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 40 % |
| **OpoWeb global** | **56 %** |

Estos porcentajes son orientativos. Combinan desarrollo del temario, calidad del banco de preguntas, supuestos, simulacros, auditoría normativa y deuda técnica; no equivalen solo al número de temas existentes.

## Estado real de Diputación

El temario todavía **no se considera perfecto ni definitivamente cerrado**.

Situación actual:

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 292 preguntas añadidas durante la segunda vuelta;
- **877 preguntas manuales acumuladas**;
- temas 1–19 elevados al objetivo mínimo de 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos;
- 40 variantes prácticas;
- rúbrica sobre 10 puntos por caso;
- tres simulacros prácticos internos.

La segunda vuelta alcanza **19 de los 39 temas actualmente auditables: aproximadamente un 49 %**. Para cerrar Diputación faltan los temas 20–21 y 23–40, el tema 22, la auditoría transversal y la consolidación técnica.

## Segunda vuelta v0.58

Se ha reforzado el tema 19: **régimen disciplinario de la Ley 4/2011**.

### Resultado

- 18 preguntas nuevas y específicas;
- 292 preguntas nuevas acumuladas en la segunda vuelta;
- diecinueve primeros temas con al menos 30 preguntas reales;
- cuatro alternativas distintas;
- respuesta correcta rotada;
- dificultad baja, media y alta;
- justificación mediante artículos 127 a 145 de la Ley 4/2011;
- control de preguntas genéricas y duplicados;
- regeneración de los tres simulacros.

### Contenido reforzado

- legalidad, tipicidad e irretroactividad favorable;
- proporcionalidad, culpabilidad y presunción de inocencia;
- faltas muy graves, graves y leves;
- separación, suspensión, traslado, demérito, bolsas y apercibimiento;
- autoría, inducción, cooperación y encubrimiento;
- prescripción y cancelación;
- procedimiento, medidas cautelares y relación con la jurisdicción penal.

## Fase práctica

Cada uno de los 20 supuestos permite elegir caso base o variantes, redactar y guardar la respuesta, consultar solución y base normativa, completar una rúbrica sobre 10 y marcar el caso como revisado.

Los tres simulacros prácticos internos contienen dos casos obligatorios y una extensión opcional. Los 90 minutos son una referencia de entrenamiento, no un formato oficial confirmado.

## Formatos oficiales del primer ejercicio

| OPE | Preguntas | Reserva | Tiempo |
|---|---:|---:|---:|
| La Puebla | 50 | 5 | 60 min |
| Carranque | 80 | 5 | 90 min |
| Diputación C1 | 50 | 5 | 60 min |
| UC3M | 70 | 5 | 60 min |

## Próximas prioridades

### Diputación

1. Elevar el tema 20, contrato de trabajo, a 30–40 preguntas reales.
2. Completar el tema 21, modalidades contractuales y Seguridad Social.
3. Continuar con los temas 23–31 y 32–40.
4. Auditar referencias, duplicados, opciones y dificultad.
5. Cerrar el tema 22 solo con textos oficiales internos.
6. Consolidar las capas históricas cuando el contenido esté estabilizado.

### Carranque

Completar los 20 temas, sustituir preguntas de método y crear supuestos exclusivos de temas 3–20.

### La Puebla

Completar 19 temas, alcanzar 30–40 preguntas por tema y resolver al menos 20 supuestos.

### UC3M

Cerrar normativa interna pendiente y elevar a 30–40 preguntas los temas incompletos.

## Criterio de cierre de un tema

Un tema solo se considera terminado cuando tenga título oficial exacto, desarrollo autosuficiente y actualizado, 30–40 preguntas reales sin plantillas, respuestas justificadas, integración en simulacros y supuestos, y auditoría final de vigencia y duplicados.

## Pruebas automáticas

GitHub Actions ejecuta en cada `push` y `pull_request`:

```bash
node tests/smoke-v56.js
node tests/smoke-v57.js
node tests/smoke-v58.js
```

Las pruebas comprueban los temas 17–19, las cifras acumuladas, la composición 50 + 5, la ausencia de duplicados internos y la exclusión del tema 22.

## Historial reciente

### v0.58.0 · 2026-07-10

- Añadidas 18 preguntas al tema 19.
- Temas 1–19 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 877 preguntas manuales acumuladas.
- Desarrollado el régimen disciplinario.
- Regenerados los simulacros tipo test.
- Incorporada integración continua con GitHub Actions.
- Actualizada la caché a `opoweb-v65`.

### v0.57.0 · 2026-07-10

- Añadidas 19 preguntas al tema 18.
- Temas 1–18 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 859 preguntas manuales acumuladas.

### v0.56.0 · 2026-07-10

- Añadidas 15 preguntas al tema 17.
- Temas 1–17 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 840 preguntas manuales acumuladas.
