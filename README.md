# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión candidata

- **OpoWeb v0.86.0**
- Caché PWA: `opoweb-v94`
- Formato de progreso: v2
- Revisión: 14 de julio de 2026

La versión solo se considera publicada cuando la PR supera su CI exacta y se fusiona en `main`.

## Estado teórico

| Convocatoria | Estructura y práctica | Teoría autosuficiente |
|---|---:|---:|
| Carranque C2 | 99 % | **99 % publicado** |
| La Puebla C2 | 99 % | **99 % tras publicar v0.86** |
| Diputación C1 | 97 % | **80 % aprox.** |
| UC3M C2 | 99 % | **70–75 % aprox.** |
| **Cobertura teórica global** | — | **≈86 % tras publicar v0.86** |

## La Puebla · teoría candidata 19/19

Los diecinueve títulos del Anexo I del BOP Toledo núm. 82, de 5 de mayo de 2026, se conservan literalmente.

Cada tema contiene resumen, rigor normativo, desarrollo completo, síntesis, puntos calientes, tres preguntas de retención, estrategia, esquema, tabla, fuentes oficiales y treinta preguntas.

La auditoría final controla:

- 19/19 temas reconstruidos;
- 25.395 palabras;
- media de 1.337 y mínimo de 928;
- dos o más fuentes oficiales por tema;
- 570 preguntas;
- 20 supuestos;
- tres simulacros de 50 + 5;
- corrección +0,20 / −0,05.

Los temas jurídicos utilizan BOE, DOUE y fuentes institucionales. Los temas informáticos utilizan documentación oficial de Microsoft, LibreOffice y estándares o fabricantes, sin presentar como permanentes posiciones de menús sujetas a actualización.

## Carranque · publicado 20/20

- 20/20 temas autosuficientes.
- 36.170 palabras.
- Media de 1.809 y mínimo de 1.313.
- 600 preguntas.
- 18 supuestos.
- Tres simulacros de 80 + 5.
- Corrección +0,25 / −0,08.

## Diputación y UC3M

Todavía no deben utilizarse como única fuente teórica.

### Diputación

- 40 temas y 1.242 preguntas.
- Los temas 25 a 40 requieren ampliación.
- Pendientes los Estatutos oficiales vigentes del OAPGT.

### UC3M

- 20 temas y 690 preguntas.
- Numerosos temas continúan demasiado condensados.
- Los datos anuales solo se incorporarán desde publicación oficial.

## Banco global

OpoWeb contiene 3.102 preguntas: Diputación 1.242, La Puebla 570, Carranque 600 y UC3M 690.

## Validación v0.86

GitHub Actions ejecuta regresiones, auditoría de preguntas, Carranque 20/20, cuatro bloques y cierre final de La Puebla 19/19, matrices de bancos, integridad web/PWA y Playwright en escritorio, Pixel 7 e iPad Pro 11.

La caché `opoweb-v94` incluye todos los módulos teóricos de Carranque y La Puebla para uso sin conexión tras una primera carga correcta.

## Trabajo pendiente

1. Diputación temas 25 a 40.
2. Resto de Diputación y Estatutos OAPGT.
3. UC3M completa.
4. Auditoría cruzada final de los 99 temas.
5. Consolidación de módulos históricos.

## Historial

### v0.86.0 · candidata 2026-07-14

- La Puebla 19/19 reconstruida.
- 25.395 palabras, 570 preguntas, 20 supuestos y tres simulacros.
- Auditorías por bloques y final.
- Caché candidata `opoweb-v94`.

### v0.85.0 · 2026-07-13

- Carranque 20/20 publicado.
- 36.170 palabras, 600 preguntas y 18 supuestos.
- Caché `opoweb-v92`.
