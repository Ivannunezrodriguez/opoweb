# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.62.0**
- Caché PWA: `opoweb-v69`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 85 % |
| Diputación C1 | 87 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 49 % |
| **OpoWeb global** | **61 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica. No representan probabilidad de aprobar.

## Estado real de Diputación

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 442 preguntas añadidas durante la segunda vuelta;
- **1.027 preguntas manuales acumuladas**;
- temas 1–21 y 23–26 elevados al objetivo mínimo de 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos y 40 variantes;
- tres simulacros prácticos internos.

La segunda vuelta alcanza **25 de los 39 temas actualmente auditables: aproximadamente un 64 %**. Para cerrar Diputación faltan los temas 27–40, el tema 22, la auditoría transversal y la consolidación técnica.

## Segunda vuelta v0.62

Se han reforzado:

- **Tema 24:** igualdad entre mujeres y hombres, normativa estatal y de Castilla-La Mancha.
- **Tema 25:** obligación tributaria, sujetos, gestión, extinción y revisión.
- **Tema 26:** recaudación voluntaria y ejecutiva, aplazamiento, compensación, devolución y apremio.

### Resultado

- 62 preguntas nuevas y específicas;
- 442 preguntas acumuladas en la segunda vuelta;
- veinticinco temas con al menos 30 preguntas reales;
- cuatro alternativas distintas y respuesta correcta rotada;
- dificultad baja, media y alta;
- justificación con artículos de las normas aplicables;
- regeneración de los tres simulacros.

## Próximas prioridades

### Diputación

1. Reforzar los temas 27–31: presupuesto, protección de datos, transparencia, impuestos locales y servicios electrónicos de confianza.
2. Completar el bloque informático y ofimático 32–40.
3. Cerrar el tema 22 solo con textos oficiales internos.
4. Auditar referencias, duplicados, cobertura y dificultad.
5. Consolidar las capas históricas cuando el contenido esté estabilizado.

### Carranque

Completar los 20 temas, sustituir preguntas de método y crear supuestos exclusivos de temas 3–20.

### La Puebla

Completar 19 temas, alcanzar 30–40 preguntas por tema y resolver al menos 20 supuestos.

### UC3M

Cerrar normativa interna pendiente y elevar a 30–40 preguntas los temas incompletos.

## Pruebas automáticas

GitHub Actions ejecuta en cada `push` y `pull_request` las pruebas `smoke-v56` a `smoke-v62`. Se comprueban recuentos, simulacros 50 + 5, ausencia de duplicados internos y exclusión del tema 22.

## Historial reciente

### v0.62.0 · 2026-07-10

- Añadidas 62 preguntas a los temas 24–26.
- Alcanzadas 1.027 preguntas manuales acumuladas.
- Veinticinco temas elevados al objetivo mínimo de 30 preguntas reales.
- Regenerados los simulacros.
- Actualizada la caché a `opoweb-v69`.

### v0.61.0 · 2026-07-10

- Añadidas 22 preguntas al tema 23.
- Alcanzadas 965 preguntas manuales acumuladas.

### v0.60.0 · 2026-07-10

- Añadidas 36 preguntas al tema 21.
- Alcanzadas 943 preguntas manuales acumuladas.
