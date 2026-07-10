# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.59.0**
- Caché PWA: `opoweb-v66`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 82 % |
| Diputación C1 | 81 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 43 % |
| **OpoWeb global** | **57 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica.

## Estado real de Diputación

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 322 preguntas añadidas durante la segunda vuelta;
- **907 preguntas manuales acumuladas**;
- temas 1–20 elevados al objetivo mínimo de 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos y 40 variantes;
- tres simulacros prácticos internos.

La segunda vuelta alcanza **20 de los 39 temas actualmente auditables: aproximadamente un 51 %**. Para cerrar Diputación faltan el tema 21, los temas 23–40, el tema 22, la auditoría transversal y la consolidación técnica.

## Segunda vuelta v0.59

Se ha reforzado el tema 20: **contrato de trabajo**.

### Resultado

- 30 preguntas nuevas y específicas;
- 322 preguntas acumuladas en la segunda vuelta;
- veinte primeros temas con al menos 30 preguntas reales;
- cuatro alternativas distintas;
- respuesta correcta rotada;
- dificultad baja, media y alta;
- justificación mediante artículos 1, 3 a 9 y 14 del Estatuto de los Trabajadores;
- regeneración de los tres simulacros.

### Contenido reforzado

- concepto y elementos de la relación laboral;
- empresario y exclusiones;
- fuentes de la relación laboral;
- derechos y deberes básicos;
- trabajo de menores y capacidad para contratar;
- forma escrita, comunicación y copia básica;
- nulidad parcial y total;
- periodo de prueba, límites y efectos.

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

1. Elevar el tema 21, modalidades contractuales y Seguridad Social, a 30–40 preguntas reales.
2. Continuar con los temas 23–31 y 32–40.
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
```

Las pruebas comprueban los temas 17–20, cifras acumuladas, simulacros 50 + 5, ausencia de duplicados internos y exclusión del tema 22.

## Historial reciente

### v0.59.0 · 2026-07-10

- Añadidas 30 preguntas al tema 20.
- Temas 1–20 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 907 preguntas manuales acumuladas.
- Desarrollado el contrato de trabajo.
- Regenerados los simulacros.
- Actualizada la caché a `opoweb-v66`.

### v0.58.0 · 2026-07-10

- Añadidas 18 preguntas al tema 19.
- Temas 1–19 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 877 preguntas manuales acumuladas.
- Incorporada integración continua con GitHub Actions.

### v0.57.0 · 2026-07-10

- Añadidas 19 preguntas al tema 18.
- Temas 1–18 elevados al objetivo mínimo de 30 preguntas reales.
