# OpoWeb · Auxiliar Administrativo Toledo

Cuatro convocatorias activas: La Puebla C2, Carranque C2, Diputación de Toledo C1 y UC3M C2.

## Versión publicada

- OpoWeb v0.87.0
- Caché PWA `opoweb-v95`
- Revisión: 15 de julio de 2026

## Estado editorial estricto

Se considera autosuficiente únicamente el tema que ha superado la auditoría de título literal, desarrollo completo, fuentes oficiales, control de vigencia, esquema, tabla y preguntas coherentes.

| Convocatoria | Temas autosuficientes | Uso como fuente única completa |
|---|---:|---:|
| Carranque | 20/20 | Sí, con revisión de cambios posteriores |
| La Puebla | 19/19 | Sí, con revisión de cambios posteriores |
| Diputación | **7/40** | **No todavía** |
| UC3M | 0/20 con el estándar estricto actual | No todavía |
| **Total** | **46/99** | — |

Esta métrica estricta no mezcla teoría con volumen de preguntas o funcionamiento técnico.

## Diputación v0.87 · primer bloque publicado

Temas autosuficientes publicados:

25. Obligación tributaria, tributos locales, gestión y revisión.
26. Recaudación voluntaria y ejecutiva.
27. Presupuesto general local y bases de ejecución.
28. Protección de datos, AEPD, transparencia y buen gobierno.
29. IBI e IAE.
30. IVTM, IIVTNU y tasas.
31. Ley 6/2020, firma, certificados y servicios de confianza.

Datos del bloque:

- **11.603 palabras** auditadas.
- Mínimo individual de **1.483 palabras**.
- Títulos oficiales conservados literalmente.
- Fuentes primarias BOE y DOUE.
- Estructura fija, esquemas, tablas y retención activa.
- Banco real de Diputación: **1.444 preguntas**.

Los temas 25 a 31 pueden utilizarse como fuente teórica principal. El conjunto de Diputación no debe utilizarse todavía como manual único porque quedan 33 temas pendientes.

## Recuento canónico de preguntas

La instantánea se toma después de `diputacion-v65`, antes de que capas históricas posteriores puedan reemplazar bancos ya verificados:

- banco canónico previo: **1.433 preguntas**;
- incremento respecto al antiguo recuento de 1.242: **191 preguntas comunes válidas**, reutilizadas por coincidencia de norma y alcance;
- refuerzo v0.87: **11 preguntas nuevas** —7 en el tema 29 y 4 en el tema 30—;
- el tema 31 ya contenía 47 preguntas y no se rellena artificialmente;
- total final de Diputación: **1.444**.

No se eliminan preguntas válidas para ajustar cifras ni se añaden preguntas cuando el tema ya supera el mínimo.

## Control OAPGT

No se ha localizado todavía un texto oficial consolidado y vigente de los Estatutos del OAPGT con su cadena completa de modificaciones. Hasta resolverlo, OpoWeb bloquea artículos, órganos, competencias, composición, quórums y preguntas estatutarias no documentadas.

## La Puebla 19/19

- Programa literal del BOP Toledo núm. 82, de 5 de mayo de 2026.
- 25.395 palabras.
- 570 preguntas, 20 supuestos y tres simulacros de 50 + 5.

## Carranque 20/20

- 36.170 palabras.
- 600 preguntas, 18 supuestos y tres simulacros de 80 + 5.

## Banco global

**3.304 preguntas**:

- Diputación: 1.444.
- La Puebla: 570.
- Carranque: 600.
- UC3M: 690.

## Validación v0.87

GitHub Actions comprueba:

- regresiones históricas;
- auditoría de las 3.304 preguntas;
- Carranque 20/20 y La Puebla 19/19;
- Diputación temas 25 a 31;
- bloqueo documental del OAPGT;
- instantánea canónica y refuerzo no destructivo;
- integridad de manifiesto y caché PWA;
- Playwright en escritorio, Pixel 7 e iPad Pro 11;
- persistencia y funcionamiento sin conexión.

## Siguiente trabajo

1. Diputación temas 32 a 40.
2. Diputación temas 1 a 24.
3. Estatutos oficiales vigentes del OAPGT.
4. UC3M completa.
5. Auditoría cruzada final de los 99 temas.
