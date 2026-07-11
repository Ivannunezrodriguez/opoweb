# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.70.0**
- Caché PWA: `opoweb-v77`
- Última revisión estructural: 11 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 92 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 79 % |
| Arquitectura y pruebas | 68 % |
| **OpoWeb global** | **87 %** |

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

## Carranque · v0.70

La cobertura cuantitativa mínima del programa queda completa.

### Resultado

- **20 de 20 temas con 30 preguntas específicas**.
- **600 preguntas válidas**.
- Eliminación de preguntas genéricas en todo el programa.
- **18 supuestos prácticos**, uno por cada tema práctico del 3 al 20.
- **Tres simulacros de 80 preguntas + 5 reservas**, con 90 minutos.
- Cobertura de los veinte temas y ausencia de duplicados internos.
- Estimación global: **79 %**.

### Segunda mitad incorporada

- Función pública local y situaciones administrativas.
- Bienes de las entidades locales.
- Contratación pública local.
- Registro, comunicaciones y notificaciones.
- Órganos municipales, competencias, actas y certificaciones.
- Hacienda local, tributos y ordenanzas fiscales.
- Presupuesto, ejecución y modificaciones.
- Estructura presupuestaria por programas y económica.
- Liquidación, resultado, remanente, estabilidad y regla de gasto.
- Administración electrónica, factura electrónica y morosidad.

### Pendiente real

1. Soluciones desarrolladas de los 18 supuestos.
2. Revisión literal artículo por artículo de los 20 temas.
3. Auditoría de dificultad y calidad de distractores.
4. Validación en navegador, móvil, tablet y PWA sin conexión.
5. Seguimiento de listas, tribunal y fecha de examen.

## Arquitectura

Pendiente consolidar módulos históricos, ampliar pruebas reales de navegador, comprobar la PWA sin conexión y asegurar que el progreso guardado no se pierde.

## Pruebas automáticas

GitHub Actions ejecuta:

- pruebas de Diputación `smoke-v56` a `smoke-v65`;
- `smoke-uc3m-v66` y `smoke-uc3m-v67`;
- pruebas unitaria e integrada de La Puebla v0.68;
- pruebas de Carranque v0.69;
- prueba unitaria, integrada y matriz independiente para los 20 temas de Carranque v0.70.

Las pruebas de Carranque comprueban 600 preguntas, veinte temas a 30, cuatro opciones, respuesta válida, justificación, ausencia de plantillas y duplicados, 18 supuestos y tres simulacros 80 + 5.

## Historial reciente

### v0.70.0 · 2026-07-11

- Integrados los temas 11–20 de Carranque.
- Los veinte temas alcanzan 30 preguntas específicas.
- Añadidos diez supuestos para completar los temas prácticos 3–20.
- Generados tres simulacros de 80 + 5.
- Desarrollados bienes, presupuesto, estabilidad, factura electrónica y morosidad.
- Caché actualizada a `opoweb-v77`.

### v0.69.0 · 2026-07-11

- Integrados los temas 1–10 de Carranque.
- Creados ocho supuestos prácticos sobre los temas 3–10.

### v0.68.0 · 2026-07-11

- Integrada La Puebla sobre la versión actual de `main`.
- Los 19 temas alcanzan 30 preguntas.
- Creados 20 supuestos prácticos y simulacros 50 + 5.
