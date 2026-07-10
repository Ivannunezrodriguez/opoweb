# Validación de OpoWeb v0.57

## Comprobaciones estructurales

- `diputacion-v57.js` se carga después de `diputacion-v56.js`.
- `ui-v57.js` se carga como última capa de interfaz.
- ambos módulos figuran en la caché PWA `opoweb-v64`.
- el tema 22 permanece excluido de simulacros.
- los simulacros mantienen 50 preguntas y 5 de reserva.
- el banco del tema 18 incorpora 19 preguntas nuevas con cuatro alternativas y justificación normativa.

## Prueba automatizada incluida

```bash
node tests/smoke-v57.js
```

La prueba verifica el banco de los temas 17 y 18, el número de temas que alcanzan el objetivo mínimo, las cifras acumuladas, la composición de los simulacros, la ausencia de preguntas repetidas dentro de cada simulacro y la exclusión del tema 22.

## Limitación

El repositorio no dispone actualmente de un flujo de integración continua configurado. La prueba queda incorporada para ejecución local y para una futura acción de GitHub.
