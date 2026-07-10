# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.64.0**
- Caché PWA: `opoweb-v71`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 87 % |
| Diputación C1 | 96 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 53 % |
| **OpoWeb global** | **67 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica. No representan probabilidad de aprobar.

## Estado real de Diputación

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 652 preguntas añadidas durante la segunda vuelta;
- **1.237 preguntas manuales acumuladas**;
- los 39 temas auditables alcanzan al menos 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos y 40 variantes;
- tres simulacros prácticos internos.

La segunda vuelta alcanza **39 de 39 temas actualmente auditables: 100 %**. Esto no equivale al cierre total de Diputación: faltan el tema 22, la auditoría transversal, las pruebas de navegador y la consolidación técnica.

## Segunda vuelta v0.64

Se han reforzado los temas 32–40:

- Windows 11: archivos, carpetas y unidades locales y de red;
- Edge y GroupWise 24;
- impresión y escaneado;
- LibreOffice Writer, Calc, Base e Impress;
- ordenador personal y componentes;
- periféricos y almacenamiento externo.

### Resultado

- 135 preguntas nuevas y específicas;
- 652 preguntas acumuladas en la segunda vuelta;
- 1.237 preguntas manuales acumuladas;
- 39 temas auditables con al menos 30 preguntas reales;
- cuatro alternativas distintas, respuesta correcta rotada y dificultad graduada;
- regeneración de los tres simulacros.

## Bloque pendiente de Diputación

1. Localizar y verificar el Acuerdo Regulador vigente y los Estatutos oficiales del OAPGT para completar el tema 22.
2. Auditar transversalmente vigencia, duplicados, cobertura y dificultad.
3. Incorporar pruebas de navegador y validación visual.
4. Consolidar las capas históricas sin perder progreso guardado.

## Resto de convocatorias

### UC3M

Pendiente cerrar normativa interna y elevar once temas a 30–40 preguntas.

### La Puebla

Pendiente completar 19 temas, sustituir plantillas y ampliar supuestos.

### Carranque

Pendiente desarrollar 20 temas, sustituir preguntas de método y rehacer los supuestos sobre temas 3–20.

## Pruebas automáticas

GitHub Actions ejecuta en cada `push` y `pull_request` las pruebas `smoke-v56` a `smoke-v64`. Se comprueban recuentos, simulacros 50 + 5, ausencia de duplicados internos y exclusión controlada del tema 22.

## Historial reciente

### v0.64.0 · 2026-07-10

- Añadidas 135 preguntas a los temas 32–40.
- Alcanzadas 1.237 preguntas manuales acumuladas.
- Completados los 39 temas auditables a 30+ preguntas.
- Regenerados los simulacros.
- Actualizada la caché a `opoweb-v71`.

### v0.63.0 · 2026-07-10

- Añadidas 75 preguntas a los temas 27–31.
- Alcanzadas 1.102 preguntas manuales acumuladas.

### v0.62.0 · 2026-07-10

- Añadidas 62 preguntas a los temas 24–26.
- Alcanzadas 1.027 preguntas manuales acumuladas.
