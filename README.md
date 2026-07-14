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

## Dos métricas distintas

La integridad técnica y el volumen de ejercicios no equivalen a disponer de un manual teórico completo. Desde v0.85 se separan expresamente:

| Área | Estado estructural y práctico | Teoría autosuficiente |
|---|---:|---:|
| Funcionamiento e interfaz | 99 % | — |
| Carranque C2 | 99 % | **99 %** |
| La Puebla C2 | 99 % | **99 % tras publicar v0.86** |
| Diputación C1 | 97 % | **80 % aprox.** |
| UC3M C2 | 99 % | **70–75 % aprox.** |
| Arquitectura y pruebas | 98 % | — |
| **Cobertura teórica global como fuente única** | — | **≈86 % tras publicar v0.86** |

Los porcentajes son estimaciones de gestión, no una probabilidad de aprobar. Carranque ya ha superado el estándar de fuente teórica autosuficiente. La Puebla queda condicionada a la auditoría final y publicación de esta versión. Diputación y UC3M todavía no.

## La Puebla · teoría preparada 19/19

Los diecinueve títulos oficiales del Anexo I del BOP Toledo núm. 82, de 5 de mayo de 2026, se conservan literalmente y han sido desarrollados como manual teórico dentro de OpoWeb.

Cada tema incorpora:

- resumen orientado al aprobado;
- rigor normativo;
- desarrollo completo del epígrafe oficial;
- síntesis de repaso rápido;
- bloque `Opo-Test: puntos calientes`;
- tres preguntas de retención activa;
- estrategia de examen;
- esquema jerárquico;
- tabla final de repaso;
- al menos dos fuentes oficiales o documentación oficial del fabricante;
- fecha de revisión;
- treinta preguntas vinculadas al tema.

La auditoría final controla:

- **19/19 temas reconstruidos**;
- **25.395 palabras** de teoría;
- un mínimo de 900 palabras por tema;
- títulos coincidentes con el programa oficial;
- estructura fija completa;
- fuentes oficiales identificadas;
- esquemas y tablas suficientes;
- **570 preguntas**, treinta por tema;
- **20 supuestos prácticos**;
- tres simulacros de **50 preguntas + 5 reservas**;
- corrección oficial: **+0,20 por acierto y −0,05 por error**.

Los temas informáticos se apoyan en documentación oficial de Microsoft, LibreOffice y estándares o fabricantes; no se fijan como permanentes posiciones de menús que puedan cambiar por actualización. El 1 % reservado corresponde a modificaciones normativas, cambios de interfaz y publicaciones futuras del proceso.

## Carranque · teoría autosuficiente 20/20

Los veinte temas oficiales han sido reconstruidos, auditados y publicados para estudiar Carranque directamente dentro de OpoWeb.

La auditoría acredita:

- **20/20 temas autosuficientes**;
- **36.170 palabras** de teoría;
- media de 1.809 palabras por tema;
- mínimo de 1.313 palabras;
- **600 preguntas**;
- **18 supuestos prácticos**, con cobertura de los temas 3 a 20;
- tres simulacros de **80 preguntas + 5 reservas**, 90 minutos;
- corrección oficial: **+0,25 por acierto y −0,08 por error**.

El 1 % reservado corresponde a listas, tribunal, fecha, instrucciones, modificaciones normativas, objetivos fiscales y bases de ejecución presupuestaria vigentes en la fecha del examen.

## Diputación y UC3M

Sus bancos de preguntas, supuestos y simulacros continúan operativos, pero sus desarrollos teóricos todavía no han superado el mismo estándar de autosuficiencia.

### Diputación

- 40 temas.
- 1.242 preguntas.
- Tres simulacros de 50 + 5.
- La primera mitad está más desarrollada; los temas 25 a 40 requieren ampliación prioritaria.
- Pendiente adicional: localizar e integrar los Estatutos oficiales vigentes del OAPGT.

### UC3M

- 20 temas.
- 690 preguntas.
- Tres simulacros de 70 + 5.
- El programa está cubierto, pero su teoría sigue demasiado condensada para ser el único manual.

Hasta completar su reconstrucción, Diputación y UC3M deben considerarse resumen y material de repaso, no fuente teórica exclusiva.

## Banco práctico global

La aplicación contiene **3.102 preguntas**:

| Convocatoria | Preguntas | Cobertura mínima |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 690 | 20 temas con 30 o más |

La auditoría controla identificadores, duplicados, cuatro opciones distintas, respuesta válida, trazabilidad, fuentes, dificultad, equilibrio de letras y simulacros sin repeticiones.

## Validación técnica v0.86

GitHub Actions ejecuta:

- regresión histórica de las cuatro convocatorias;
- auditoría de las 3.102 preguntas;
- auditoría teórica completa de Carranque 20/20;
- cuatro auditorías por bloques y una auditoría final de La Puebla 19/19;
- matrices independientes de los veinte bancos de Carranque y los diecinueve de La Puebla;
- integridad del manifiesto, cargador y caché PWA;
- Playwright en escritorio, Pixel 7 e iPad Pro 11;
- funcionamiento sin conexión;
- persistencia, copia, recuperación, exportación e importación del progreso.

La caché `opoweb-v94` incorpora todos los módulos teóricos de Carranque y La Puebla para estudiarlos sin conexión tras una primera carga correcta.

## Protección del progreso

OpoWeb conserva `opowebProgress`, crea una copia anterior en `opowebProgressBackup`, valida los datos y permite recuperar el último estado válido si el JSON principal está dañado.

La copia se guarda en el mismo navegador. Borrar los datos del sitio elimina progreso y copia local; conviene utilizar **Exportar** periódicamente.

## Orden de reconstrucción pendiente

1. Diputación temas 25 a 40.
2. Resto de Diputación y Estatutos oficiales vigentes del OAPGT.
3. UC3M completa.
4. Auditoría cruzada final de los 99 temas.
5. Consolidación de módulos históricos sin pérdida de progreso.

## Historial reciente

### v0.86.0 · candidata preparada el 2026-07-14

- Reconstruidos los diecinueve temas de La Puebla como teoría autosuficiente.
- Conservados los títulos literales del programa oficial.
- Integradas 25.395 palabras, fuentes oficiales, esquemas y tablas.
- Conservadas las 570 preguntas, 20 supuestos y tres simulacros.
- Añadidas auditorías por bloques y auditoría final 19/19.
- Caché preparada como `opoweb-v94`.

### v0.85.0 · 2026-07-13

- Reconstruidos y publicados los veinte temas de Carranque como manual teórico autosuficiente.
- Integradas 36.170 palabras de teoría, fuentes oficiales, artículos, esquemas y tablas.
- Conservadas las 600 preguntas y los 18 supuestos.
- Añadida auditoría específica de autosuficiencia por tema.
- Diferenciada la cobertura estructural de la cobertura teórica real.
- Caché actualizada a `opoweb-v92`.
