# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.66.0**
- Caché PWA: `opoweb-v73`
- Última revisión estructural: 10 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 89 % |
| Diputación C1 | 98 % |
| UC3M C2 | 78 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 58 % |
| **OpoWeb global** | **74 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica. No representan probabilidad de aprobar.

## Diputación de Toledo

- Los 40 temas alcanzan al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros de 50 + 5.
- Cobertura cuantitativa: 100 %.
- Estimación global: 98 % por la brecha documental de los Estatutos del OAPGT y el cierre técnico pendiente.

## UC3M · v0.66

Los veinte temas alcanzan ahora al menos 30 preguntas válidas.

### Resultado

- 110 preguntas nuevas en once temas.
- 600 preguntas válidas acumuladas.
- 20 de 20 temas con 30 o más preguntas.
- Tres simulacros de 70 preguntas + 5 reservas.
- Cuatro alternativas distintas, respuesta correcta válida y justificación normativa.

### Temas reforzados

- Constitución española.
- Organización y funcionamiento de las Administraciones públicas.
- Administración electrónica e interoperabilidad.
- Protección de datos y derechos digitales.
- Personal, provisión, situaciones, incompatibilidades y disciplina.
- Prevención de riesgos laborales.
- Sistema universitario, comunidad universitaria y PTGAS.
- Ordenación de enseñanzas oficiales.
- Acceso y admisión universitaria.
- Contratación pública.

La cobertura cuantitativa de UC3M queda al 100 %, pero su estimación global se mantiene en 78 % porque falta verificar y cerrar normativa interna, presupuesto, matrícula, permanencia, evaluación, admisión propia y contratación institucional.

## Pendientes principales

### UC3M

1. Estatutos y organización interna vigentes.
2. Presupuesto y bases de ejecución.
3. Normas de matrícula, permanencia y evaluación.
4. Admisión propia y contratación interna.
5. Auditoría transversal de literalidad y vigencia.

### La Puebla

Completar 19 temas, sustituir plantillas y ampliar supuestos.

### Carranque

Desarrollar 20 temas, sustituir preguntas de método y rehacer los supuestos sobre temas 3–20.

### Arquitectura

Consolidar módulos históricos, ampliar pruebas de navegador y validar la interfaz móvil.

## Pruebas automáticas

GitHub Actions ejecuta las pruebas de Diputación `smoke-v56` a `smoke-v65` y `smoke-uc3m-v66`. Se comprueban recuentos, reservas, cobertura temática y ausencia de duplicados internos.

## Historial reciente

### v0.66.0 · 2026-07-10

- Añadidas 110 preguntas a once temas de UC3M.
- Los veinte temas alcanzan 30 o más preguntas.
- Simulacros regenerados a 70 + 5 reservas.
- Caché actualizada a `opoweb-v73`.

### v0.65.0 · 2026-07-10

- Añadidas 32 preguntas verificadas al tema 22 de Diputación.
- Los 40 temas alcanzan el objetivo cuantitativo mínimo de 30 preguntas.

### v0.64.0 · 2026-07-10

- Añadidas 135 preguntas a los temas 32–40 de Diputación.
