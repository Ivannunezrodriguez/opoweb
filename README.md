# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.60.0**
- Caché PWA: `opoweb-v67`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 83 % |
| Diputación C1 | 83 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 45 % |
| **OpoWeb global** | **58 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica.

## Estado real de Diputación

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 358 preguntas añadidas durante la segunda vuelta;
- **943 preguntas manuales acumuladas**;
- temas 1–21 elevados al objetivo mínimo de 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos y 40 variantes;
- tres simulacros prácticos internos.

La segunda vuelta alcanza **21 de los 39 temas actualmente auditables: aproximadamente un 54 %**. Para cerrar Diputación faltan los temas 23–40, el tema 22, la auditoría transversal y la consolidación técnica.

## Segunda vuelta v0.60

Se ha reforzado el tema 21: **modalidades contractuales y Seguridad Social**.

### Resultado

- 36 preguntas nuevas y específicas;
- 358 preguntas acumuladas en la segunda vuelta;
- veintiún primeros temas con al menos 30 preguntas reales;
- cuatro alternativas distintas;
- respuesta correcta rotada;
- dificultad baja, media y alta;
- justificación mediante el Estatuto de los Trabajadores y la Ley General de la Seguridad Social;
- regeneración de los tres simulacros.

### Contenido reforzado

- formación en alternancia y práctica profesional;
- contratos por circunstancias de la producción y sustitución;
- encadenamiento contractual y adquisición de fijeza;
- contrato fijo-discontinuo y llamamiento;
- estructura y principios de la Seguridad Social;
- afiliación, altas, bajas y cotización;
- acción protectora;
- accidente de trabajo y accidente in itinere.

## Próximas prioridades

### Diputación

1. Continuar con los temas 23–31.
2. Completar el bloque informático y ofimático 32–40.
3. Auditar referencias, duplicados, opciones y dificultad.
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
```

Las pruebas comprueban los temas 17–21, cifras acumuladas, simulacros 50 + 5, ausencia de duplicados internos y exclusión del tema 22.

## Historial reciente

### v0.60.0 · 2026-07-10

- Añadidas 36 preguntas al tema 21.
- Temas 1–21 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 943 preguntas manuales acumuladas.
- Desarrolladas modalidades contractuales y Seguridad Social.
- Regenerados los simulacros.
- Actualizada la caché a `opoweb-v67`.

### v0.59.0 · 2026-07-10

- Añadidas 30 preguntas al tema 20.
- Temas 1–20 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 907 preguntas manuales acumuladas.

### v0.58.0 · 2026-07-10

- Añadidas 18 preguntas al tema 19.
- Temas 1–19 elevados al objetivo mínimo de 30 preguntas reales.
