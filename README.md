# OpoWeb · Auxiliar Administrativo Toledo

Cuatro convocatorias activas: La Puebla C2, Carranque C2, Diputación de Toledo C1 y UC3M C2.

## Versión candidata

- OpoWeb v0.87.0
- Caché PWA `opoweb-v95`
- Revisión: 15 de julio de 2026
- Estado: PR en borrador; todavía no publicada en `main`

## Estado editorial estricto

Se considera autosuficiente únicamente el tema que ha superado la auditoría de título literal, desarrollo completo, fuentes oficiales o primarias, control de vigencia, esquema, tabla y preguntas coherentes.

| Convocatoria | Temas autosuficientes | Uso como fuente única completa |
|---|---:|---:|
| Carranque | 20/20 | Sí, con revisión de cambios posteriores |
| La Puebla | 19/19 | Sí, con revisión de cambios posteriores |
| Diputación | **16/40** | **No todavía** |
| UC3M | 0/20 con el estándar estricto actual | No todavía |
| **Total** | **55/99** | — |

Esta métrica estricta no mezcla teoría con volumen de preguntas o funcionamiento técnico.

## Diputación v0.87 · temas 25 a 40

Temas autosuficientes preparados en la PR:

25. Obligación tributaria, tributos locales, gestión y revisión.
26. Recaudación voluntaria y ejecutiva.
27. Presupuesto general local y bases de ejecución.
28. Protección de datos, AEPD, transparencia y buen gobierno.
29. IBI e IAE.
30. IVTM, IIVTNU y tasas.
31. Ley 6/2020, firma, certificados y servicios de confianza.
32. Windows 11 Pro I: archivos, carpetas y unidades locales y de red.
33. Windows 11 Pro II: Microsoft Edge y GroupWise 24 y posteriores.
34. Windows 11 Pro III: impresión y escaneado.
35. LibreOffice 24 Writer.
36. LibreOffice 24 Calc.
37. LibreOffice 24 Base.
38. LibreOffice 24 Impress.
39. Ordenador personal y componentes.
40. Periféricos, impresoras, escáneres y almacenamiento externo.

Datos auditados de los dieciséis temas:

- **25.967 palabras**.
- Mínimo individual de **1.395 palabras**.
- Títulos oficiales conservados literalmente.
- Estructura fija, esquemas, tablas y retención activa.
- Fuentes BOE, DOUE y BOP, junto con documentación primaria de Microsoft, OpenText, The Document Foundation, Intel y USB-IF en los temas técnicos.
- Banco de Diputación: **1.450 preguntas**.

Los temas 25 a 40 pueden utilizarse como fuente teórica principal. El conjunto de Diputación no debe utilizarse todavía como manual único porque quedan los temas 1 a 24 y la literalidad estatutaria del OAPGT.

## Recuento canónico de preguntas

La instantánea se toma después de `diputacion-v65`, antes de que capas históricas posteriores puedan reemplazar bancos ya verificados:

- banco canónico previo: **1.433 preguntas**;
- incremento respecto al antiguo recuento de 1.242: **191 preguntas comunes válidas**, reutilizadas por coincidencia de norma y alcance;
- refuerzo v0.87: **17 preguntas nuevas verificadas**;
- total de Diputación: **1.450**.

Distribución del refuerzo:

- temas 29 y 30: 11 preguntas;
- temas 33 y 34: 3 preguntas;
- temas 35 y 38: 2 preguntas;
- tema 39: 1 pregunta.

No se eliminan preguntas válidas para ajustar cifras ni se incorporan preguntas genéricas para alcanzar un número.

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

**3.310 preguntas**:

- Diputación: 1.450.
- La Puebla: 570.
- Carranque: 600.
- UC3M: 690.

## Validación v0.87

GitHub Actions comprueba:

- regresiones históricas;
- auditoría de las 3.310 preguntas;
- Carranque 20/20 y La Puebla 19/19;
- Diputación temas 25 a 40 mediante cinco bloques independientes;
- bloqueo documental del OAPGT;
- instantánea canónica y refuerzo no destructivo;
- integridad de manifiesto y caché PWA;
- Playwright en escritorio, Pixel 7 e iPad Pro 11;
- persistencia y funcionamiento sin conexión.

## Siguiente trabajo

1. Diputación temas 1 a 24.
2. Estatutos oficiales vigentes del OAPGT.
3. UC3M completa.
4. Auditoría cruzada final de los 99 temas.
