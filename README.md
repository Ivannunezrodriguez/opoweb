# OpoWeb · Auxiliar Administrativo Toledo

Cuatro convocatorias activas: La Puebla de Montalbán C2, Carranque C2, Diputación de Toledo C1 y UC3M C2. Las Ventas con Peña Aguilera permanece fuera de la planificación activa.

## Versión candidata

- OpoWeb v0.86.0
- Caché PWA `opoweb-v94`
- Revisión 14 de julio de 2026

Solo se considera publicada tras CI exacta verde y fusión en `main`.

## Estado teórico

| Convocatoria | Teoría autosuficiente |
|---|---:|
| Carranque | 99 % publicado |
| La Puebla | 99 % tras publicar v0.86 |
| Diputación | 80 % aprox. |
| UC3M | 70–75 % aprox. |
| **Global** | **≈86 % tras v0.86** |

## La Puebla · candidata 19/19

Fuente del programa: Anexo I del BOP Toledo núm. 82, de 5 de mayo de 2026.

- 19 títulos literales y 19 temas reconstruidos.
- 25.395 palabras; media 1.337; mínimo 928.
- Resumen, rigor normativo, desarrollo completo, síntesis, puntos calientes, retención, estrategia, esquema y tabla.
- Dos o más fuentes oficiales o documentación oficial por tema.
- 570 preguntas, 20 supuestos y tres simulacros de 50 + 5.
- Corrección +0,20 / −0,05.

Los temas jurídicos utilizan BOE, DOUE y fuentes institucionales. Los informáticos utilizan documentación oficial de Microsoft, LibreOffice y estándares o fabricantes sin fijar como permanentes posiciones de menús sujetas a actualización.

## Carranque · publicado 20/20

- 20 temas autosuficientes.
- 36.170 palabras; media 1.809; mínimo 1.313.
- 600 preguntas, 18 supuestos y tres simulacros de 80 + 5.
- Corrección +0,25 / −0,08.

## Aún no son fuente única

Diputación requiere ampliar los temas 25 a 40 y localizar los Estatutos oficiales vigentes del OAPGT. UC3M mantiene numerosos temas demasiado condensados y sus datos anuales solo se incorporarán desde publicación oficial.

## Banco global

3.102 preguntas: Diputación 1.242, La Puebla 570, Carranque 600 y UC3M 690.

## Validación candidata v0.86

GitHub Actions ejecuta regresiones, auditoría de preguntas, Carranque 20/20, cuatro bloques y cierre de La Puebla 19/19, matrices de bancos, integridad web/PWA y Playwright en escritorio, Pixel 7 e iPad Pro 11.

La caché `opoweb-v94` incluye Carranque y La Puebla para uso sin conexión tras una primera carga correcta.

## Trabajo pendiente

1. Diputación temas 25 a 40.
2. Resto de Diputación y Estatutos OAPGT.
3. UC3M completa.
4. Auditoría cruzada final de los 99 temas.
5. Consolidación de módulos históricos.
