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

## Estado v0.83

| Área | Estimación |
|---|---:|
| Funcionamiento e interfaz | 99 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 98 % |
| OpoWeb global | 97 % |

## Evolución desde v0.82

La v0.83 mantiene el banco global en 3.102 preguntas y UC3M en 690. No se modifica la valoración de contenido porque no se han añadido ni revisado preguntas.

La mejora está en el arranque técnico: `index.html` deja de enumerar manualmente más de cien módulos y utiliza un manifiesto único. El cargador respeta el orden, identifica fallos concretos y expone un estado de arranque verificable. El service worker reutiliza exactamente la misma lista, eliminando el riesgo de divergencia entre página y caché.

La caché PWA pasa a `opoweb-v90`. Arquitectura y pruebas sube del 97 % al 98 %. El porcentaje global permanece en el 97 % porque los módulos históricos siguen existiendo internamente, aunque su carga ya esté centralizada y auditada.

## Lectura correcta

- **Diputación:** 1.242 preguntas y 40 temas a 30; pendiente OAPGT y cierre técnico.
- **UC3M:** 690 preguntas, 20 temas completos, temas 16 y 20 con 60 y temas 18–19 con 45; validación automática funcional completada, pero pendiente comprobación física y actualización anual.
- **La Puebla:** 570 preguntas, 20 soluciones prácticas y simulacros 50 + 5; faltan literalidad, dificultad y validación manual.
- **Carranque:** 600 preguntas, 18 soluciones prácticas y simulacros 80 + 5; faltan literalidad, dificultad y validación manual.
- **Arquitectura:** manifiesto, cargador, PWA, Playwright, auditoría y recuperación de progreso automatizados; falta fusionar la lógica interna histórica y comprobar dispositivos físicos y Safari/WebKit.

## Regla de prudencia

Centralizar la carga reduce errores de mantenimiento, pero no equivale a haber refactorizado toda la aplicación. Por ello no se eleva el porcentaje global ni se asigna el 100 %.
