# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.69.0**
- Caché PWA: `opoweb-v76`
- Última revisión estructural: 11 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 91 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 52 % |
| Arquitectura y pruebas | 64 % |
| **OpoWeb global** | **84 %** |

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

## La Puebla

- 570 preguntas específicas.
- 19 de 19 temas con 30 preguntas.
- 20 supuestos prácticos.
- Tres simulacros de 50 + 5 y 60 minutos.
- Estimación global: 74 %.

Pendiente: revisión literal, soluciones desarrolladas de los supuestos, auditoría de dificultad y pruebas visuales.

## Carranque · v0.69

La primera mitad del programa se ha rehecho sobre la versión actual de `main`.

### Resultado

- **10 de 20 temas con 30 preguntas específicas**.
- Eliminación de preguntas genéricas en los temas 1–10.
- Reutilización controlada de Constitución, fuentes, Leyes 39/2015 y 40/2015, recursos, responsabilidad y régimen local.
- Desarrollo específico del tema 8: intervención, licencias, fomento y servicios públicos.
- Desarrollo específico del tema 10: ordenanzas, reglamentos, procedimiento, publicación y entrada en vigor.
- **8 supuestos prácticos**, uno por cada tema práctico del 3 al 10.
- Estimación global: **52 %**.

### Pendiente real

1. Temas 11–20: función pública local, bienes, contratación, registro, órganos municipales, hacienda, presupuesto, estabilidad y modernización.
2. Diez supuestos adicionales sobre los temas 11–20.
3. Tres simulacros oficiales de 80 preguntas + 5 reservas.
4. Auditoría de dificultad, literalidad y distractores.
5. Pruebas de navegador, móvil y tablet.

## Arquitectura

Pendiente consolidar módulos históricos, ampliar pruebas reales de navegador, comprobar la PWA sin conexión y asegurar que el progreso guardado no se pierde.

## Pruebas automáticas

GitHub Actions ejecuta:

- pruebas de Diputación `smoke-v56` a `smoke-v65`;
- `smoke-uc3m-v66` y `smoke-uc3m-v67`;
- pruebas unitaria e integrada de La Puebla v0.68;
- pruebas unitaria e integrada de Carranque v0.69.

Las pruebas de Carranque comprueban los diez primeros temas a 30 preguntas, ausencia de plantillas, cuatro opciones, respuesta válida, justificación, ocho supuestos y los desarrollos específicos de los temas 8 y 10.

## Historial reciente

### v0.69.0 · 2026-07-11

- Integrados los temas 1–10 de Carranque.
- Alcanzadas 30 preguntas específicas por tema en la primera mitad del programa.
- Desarrollados actividad administrativa local, licencias, servicios, ordenanzas y reglamentos.
- Creados ocho supuestos prácticos sobre los temas 3–10.
- Añadidas pruebas unitaria e integrada real.
- Caché actualizada a `opoweb-v76`.

### v0.68.0 · 2026-07-11

- Integrada La Puebla sobre la versión actual de `main`.
- Los 19 temas alcanzan 30 preguntas.
- Creados 20 supuestos prácticos y simulacros 50 + 5.

### v0.67.0 · 2026-07-11

- Cerrado el tema 15 de UC3M con el texto refundido de los Estatutos.
- Incorporada la capa estatutaria de contratación UC3M.
