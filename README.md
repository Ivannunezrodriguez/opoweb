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
- Formato de progreso: v2, compatible con versiones anteriores
- Revisión estructural, jurídica y funcional: 14 de julio de 2026

La versión solo se considera publicada cuando la PR supera su CI exacta y se fusiona en `main`.

## Estado teórico

| Convocatoria | Estructura y práctica | Teoría autosuficiente |
|---|---:|---:|
| Carranque C2 | 99 % | **99 % publicado** |
| La Puebla C2 | 99 % | **99 % tras publicar v0.86** |
| Diputación C1 | 97 % | **80 % aprox.** |
| UC3M C2 | 99 % | **70–75 % aprox.** |
| **Cobertura teórica global** | — | **≈86 % tras publicar v0.86** |

Los porcentajes son estimaciones de gestión, no una probabilidad de aprobar.

## La Puebla · teoría preparada 19/19

Los diecinueve títulos del Anexo I del BOP Toledo núm. 82, de 5 de mayo de 2026, se conservan literalmente y han sido desarrollados como manual teórico dentro de OpoWeb.

Cada tema incorpora resumen, rigor normativo, desarrollo completo del epígrafe, síntesis, puntos calientes, tres preguntas de retención activa, estrategia, esquema, tabla, fuentes oficiales y treinta preguntas.

La auditoría final controla:

- 19/19 temas reconstruidos;
- 25.395 palabras de teoría;
- media de 1.337 palabras y mínimo de 928;
- dos o más fuentes oficiales o documentación oficial por tema;
- 570 preguntas;
- 20 supuestos prácticos;
- tres simulacros de 50 + 5;
- corrección oficial: +0,20 por acierto y −0,05 por error.

Los temas jurídicos se apoyan en BOE, DOUE y fuentes institucionales. Los temas informáticos utilizan documentación oficial de Microsoft, LibreOffice y estándares o fabricantes; no se fijan como permanentes posiciones de menús que puedan cambiar por actualización.

## Carranque · teoría autosuficiente 20/20

Carranque está publicado y auditado con:

- 20/20 temas autosuficientes;
- 36.170 palabras;
- media de 1.809 y mínimo de 1.313;
- fuentes oficiales BOE;
- 600 preguntas;
- 18 supuestos;
- tres simulacros de 80 + 5;
- corrección oficial: +0,25 por acierto y −0,08 por error.

## Diputación y UC3M

No deben utilizarse todavía como única fuente teórica.

### Diputación

- 40 temas y 1.242 preguntas.
- Los temas 25 a 40 requieren ampliación prioritaria.
- Pendiente localizar e integrar los Estatutos oficiales vigentes del OAPGT.

### UC3M

- 20 temas y 690 preguntas.
- El programa está cubierto, pero numerosos temas continúan demasiado condensados.
- La información anual solo se incorpora desde publicación oficial del curso correspondiente.

## Banco práctico global

La aplicación contiene 3.102 preguntas:

| Convocatoria | Preguntas | Cobertura mínima |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 690 | 20 temas con 30 o más |

## Validación técnica v0.86

GitHub Actions ejecuta regresiones históricas, auditoría de las 3.102 preguntas, Carranque 20/20, cuatro bloques y cierre final de La Puebla 19/19, matrices de bancos, integridad web/PWA y Playwright en escritorio, Pixel 7 e iPad Pro 11.

La caché `opoweb-v94` incluye todos los módulos teóricos de Carranque y La Puebla para uso sin conexión tras una primera carga correcta.

## Protección del progreso

OpoWeb conserva `opowebProgress`, crea una copia en `opowebProgressBackup`, valida los datos y permite recuperar el último estado válido. La copia está en el mismo navegador; conviene exportar periódicamente.

## Orden de reconstrucción pendiente

1. Diputación temas 25 a 40.
2. Resto de Diputación y Estatutos oficiales vigentes del OAPGT.
3. UC3M completa.
4. Auditoría cruzada final de los 99 temas.
5. Consolidación de módulos históricos sin pérdida de progreso.

## Historial reciente

### v0.86.0 · candidata preparada el 2026-07-14

- La Puebla 19/19 reconstruida.
- 25.395 palabras, fuentes oficiales, esquemas y tablas.
- 570 preguntas, 20 supuestos y tres simulacros conservados.
- Auditorías por bloques y final.
- Caché candidata `opoweb-v94`.

### v0.85.0 · 2026-07-13

- Carranque 20/20 publicado como manual teórico autosuficiente.
- 36.170 palabras, 600 preguntas y 18 supuestos.
- Caché `opoweb-v92`.
