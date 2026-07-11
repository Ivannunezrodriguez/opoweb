# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.71.0**
- Caché PWA: `opoweb-v78`
- Última revisión estructural: 11 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 94 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 72 % |
| **OpoWeb global** | **90 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas, supuestos, simulacros, fuentes, pruebas y deuda técnica. No representan una probabilidad de aprobar.

## Diputación de Toledo

- 40 temas con al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros de 50 + 5.
- Estimación: 98 % por la brecha documental de los Estatutos del OAPGT y el cierre técnico pendiente.

## UC3M

- 20 temas con al menos 30 preguntas.
- 615 preguntas válidas.
- Tres simulacros de 70 + 5.
- Tema 15 desarrollado con Estatutos oficiales.
- Estimación: 84 %.

Pendiente: presupuesto y bases de ejecución, matrícula, permanencia, evaluación, reglas anuales de admisión, delegaciones de contratación y auditoría institucional final.

## La Puebla

- 570 preguntas específicas.
- 19 temas con 30 preguntas.
- 20 supuestos prácticos con solución desarrollada.
- Tres simulacros de 50 + 5 y 60 minutos.
- Estimación: 84 %.

## Carranque

- 600 preguntas específicas.
- 20 temas con 30 preguntas.
- 18 supuestos prácticos con solución desarrollada.
- Tres simulacros de 80 + 5 y 90 minutos.
- Estimación: 88 %.

## Soluciones prácticas · v0.71

Los 38 supuestos de La Puebla y Carranque incluyen ahora:

- base jurídica;
- secuencia ordenada de resolución;
- comprobación de órgano, trámite, plazo y efecto;
- errores frecuentes;
- conclusión modelo;
- rúbrica sobre diez puntos.

La interfaz permite redactar primero la respuesta y después desplegar la solución estructurada. La prueba automática exige que los 38 casos contengan todos los apartados y un mínimo de desarrollo.

## Pendiente real

1. Revisar literalmente artículos, plazos y órganos de La Puebla y Carranque.
2. Auditar dificultad y calidad de distractores.
3. Localizar los Estatutos vigentes del OAPGT.
4. Completar la normativa interna pendiente de UC3M.
5. Añadir pruebas reales de navegador, móvil, tablet y PWA sin conexión.
6. Consolidar las capas históricas de JavaScript sin perder progreso guardado.
7. Mantener actualizado el seguimiento de listas, tribunales y fechas de examen.

## Pruebas automáticas

GitHub Actions ejecuta:

- pruebas de Diputación `smoke-v56` a `smoke-v65`;
- pruebas de UC3M v0.66 y v0.67;
- pruebas de La Puebla v0.68;
- pruebas de Carranque v0.69 y v0.70, incluida una matriz de veinte temas;
- prueba estructural de los 38 supuestos prácticos v0.71.

## Historial reciente

### v0.71.0 · 2026-07-11

- Desarrolladas las soluciones de 20 supuestos de La Puebla y 18 de Carranque.
- Añadidos base jurídica, pasos, errores frecuentes, conclusión y rúbrica.
- Actualizada la vista de supuestos.
- Añadida prueba automática de los 38 casos.
- Caché actualizada a `opoweb-v78`.

### v0.70.0 · 2026-07-11

- Carranque completa los veinte temas, 600 preguntas, 18 supuestos y simulacros 80 + 5.

### v0.68.0 · 2026-07-11

- La Puebla completa 570 preguntas, 20 supuestos y simulacros 50 + 5.
