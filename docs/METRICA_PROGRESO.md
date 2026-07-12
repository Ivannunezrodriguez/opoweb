# Métrica de progreso de OpoWeb

Los porcentajes son aproximaciones de gestión, no una garantía de preparación para aprobar.

## Criterios

Cada convocatoria se valora según cinco bloques:

1. temario desarrollado y actualizado: 35 %;
2. banco de preguntas específicas y auditadas: 30 %;
3. supuestos y simulacros: 15 %;
4. fuentes, vigencia y control de duplicados: 10 %;
5. integración técnica y experiencia de estudio: 10 %.

El porcentaje global pondera arquitectura común, pruebas automáticas y deuda técnica. No es una media aritmética simple ni una probabilidad de aprobar.

## Estado v0.82

| Área | Estimación |
|---|---:|
| Funcionamiento e interfaz | 99 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 97 % |
| OpoWeb global | 97 % |

## Evolución desde v0.81

La v0.82 mantiene el banco global en 3.102 preguntas y UC3M en 690. No se aumenta el porcentaje global por añadir volumen, porque no se han creado preguntas nuevas.

La mejora está en la protección del trabajo acumulado: formato de progreso v2, compatibilidad con datos históricos, validación de respuestas y puntuaciones, copia automática, recuperación ante JSON corrupto, checksum, exportación e importación controladas y pruebas específicas en Node y Playwright.

La caché PWA pasa a `opoweb-v89`. Funcionamiento e interfaz sube del 98 % al 99 % y arquitectura y pruebas del 96 % al 97 %. El porcentaje global permanece en el 97 % porque sigue existiendo deuda técnica relevante en las capas históricas de JavaScript y faltan comprobaciones en hardware real y Safari/WebKit.

## Lectura correcta

- **Diputación:** 1.242 preguntas y 40 temas a 30; pendiente OAPGT y cierre técnico.
- **UC3M:** 690 preguntas, 20 temas completos, temas 16 y 20 con 60 y temas 18–19 con 45; validación automática funcional completada, pero pendiente comprobación física y actualización anual.
- **La Puebla:** 570 preguntas, 20 soluciones prácticas y simulacros 50 + 5; faltan literalidad, dificultad y validación manual.
- **Carranque:** 600 preguntas, 18 soluciones prácticas y simulacros 80 + 5; faltan literalidad, dificultad y validación manual.
- **Arquitectura:** auditoría, PWA, Playwright y recuperación de progreso automatizados; faltan dispositivos físicos, WebKit/Safari y consolidación real de módulos históricos.

## Regla de prudencia

No se asigna el 100 % por superar pruebas automatizadas. La copia de seguridad reduce el riesgo de pérdida de datos, pero no elimina la necesidad de exportar periódicamente el progreso ni sustituye la comprobación manual en hardware real.
