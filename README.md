# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.65.0**
- Caché PWA: `opoweb-v72`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 88 % |
| Diputación C1 | 98 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 55 % |
| **OpoWeb global** | **68 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica. No representan probabilidad de aprobar.

## Estado real de Diputación

- los 40 temas alcanzan al menos 30 preguntas específicas;
- 684 preguntas añadidas durante la segunda vuelta;
- **1.269 preguntas manuales acumuladas**;
- tres simulacros tipo test de 50 + 5 con cobertura de los 40 temas;
- 20 supuestos completos y 40 variantes;
- tres simulacros prácticos internos.

La cobertura cuantitativa del programa alcanza **40 de 40 temas: 100 %**. La convocatoria completa queda en **98 %** porque la literalidad organizativa y competencial de los Estatutos vigentes del OAPGT sigue pendiente de una publicación oficial accesible y falta la auditoría técnica final.

## Tema 22 · v0.65

Se han incorporado **32 preguntas verificadas** sobre:

- ámbito, vigencia y prórroga del Acuerdo Regulador;
- derechos individuales y colectivos;
- Comisión de Seguimiento;
- clases de personal y titulación C1;
- copia básica contractual y jornada;
- modificaciones económicas publicadas en 2026;
- titularidad, sede y registro electrónico del OAPGT;
- gestión por la Secretaría, disponibilidad, rechazo de documentos y recibo electrónico.

La brecha documental sobre los Estatutos del OAPGT queda registrada expresamente en los datos y en las pruebas. No se atribuyen competencias internas no verificadas.

## Bloque pendiente de Diputación

1. Localizar la publicación oficial vigente de los Estatutos del OAPGT.
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

GitHub Actions ejecuta las pruebas `smoke-v56` a `smoke-v65`. Se comprueban los 40 temas, la brecha documental, recuentos, simulacros 50 + 5 y ausencia de duplicados internos.

## Historial reciente

### v0.65.0 · 2026-07-10

- Añadidas 32 preguntas verificadas al tema 22.
- Alcanzadas 1.269 preguntas manuales acumuladas.
- Los 40 temas alcanzan el objetivo cuantitativo mínimo de 30 preguntas.
- Tema 22 incorporado sin ocultar la brecha de los Estatutos del OAPGT.
- Simulacros regenerados con cobertura de los 40 temas.
- Caché actualizada a `opoweb-v72`.

### v0.64.0 · 2026-07-10

- Añadidas 135 preguntas a los temas 32–40.
- Alcanzadas 1.237 preguntas manuales acumuladas.

### v0.63.0 · 2026-07-10

- Añadidas 75 preguntas a los temas 27–31.
- Alcanzadas 1.102 preguntas manuales acumuladas.
