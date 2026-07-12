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

## Estado v0.81

| Área | Estimación |
|---|---:|
| Funcionamiento e interfaz | 98 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 96 % |
| OpoWeb global | 97 % |

## Evolución desde v0.80

La v0.81 mantiene el banco global en 3.102 preguntas y UC3M en 690. La mejora no procede de añadir volumen, sino de ejecutar la aplicación en un navegador Chromium real con configuraciones de escritorio, móvil y tablet.

La nueva batería verifica navegación completa, menú adaptable, ausencia de desbordamiento horizontal, corrección de preguntas, persistencia del progreso, registro del service worker, manifiesto, caché `opoweb-v88`, recarga sin conexión y conservación de datos locales.

La mejora eleva funcionamiento e interfaz del 95 % al 98 %, arquitectura y pruebas del 93 % al 96 % y OpoWeb global del 96 % al 97 %. UC3M permanece en el 99 % porque aún falta validación manual en dispositivos físicos, Safari/WebKit y mantenimiento anual de admisión.

## Lectura correcta

- **Diputación:** 1.242 preguntas y 40 temas a 30; pendiente OAPGT y cierre técnico.
- **UC3M:** 690 preguntas, 20 temas completos, temas 16 y 20 con 60 y temas 18–19 con 45; validación automática funcional completada, pero pendiente comprobación física y actualización anual.
- **La Puebla:** 570 preguntas, 20 soluciones prácticas y simulacros 50 + 5; faltan literalidad, dificultad y validación manual.
- **Carranque:** 600 preguntas, 18 soluciones prácticas y simulacros 80 + 5; faltan literalidad, dificultad y validación manual.
- **Arquitectura:** auditoría, integridad PWA y Playwright automatizados; faltan dispositivos físicos, WebKit/Safari y consolidación de capas históricas.

## Regla de prudencia

No se asigna el 100 % por superar pruebas automatizadas. La emulación de móvil y tablet reduce riesgo técnico, pero no reemplaza una comprobación manual en hardware real ni el mantenimiento de información anual.
