# Auditoría global de OpoWeb · v0.86

Fecha de revisión: 14 de julio de 2026.

## Alcance

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

## Resultado resumido

| Convocatoria | Temas | Preguntas | Cierre estructural | Teoría autosuficiente |
|---|---:|---:|---:|---:|
| La Puebla | 19 | 570 | 99 % | **99 % tras auditoría y publicación** |
| Carranque | 20 | 600 | 99 % | **99 %** |
| Diputación | 40 | 1.242 | 97 % | 80 % aprox. |
| UC3M | 20 | 690 | 99 % | 70–75 % aprox. |
| **Total** | **99** | **3.102** | — | **≈86 % global tras publicar v0.86** |

## Distinción obligatoria

Una convocatoria puede tener programa, preguntas, supuestos y simulacros y no disponer de un desarrollo suficiente para estudiar sin manual externo. La auditoría separa integridad estructural y práctica de autosuficiencia teórica.

La autosuficiencia exige título literal, desarrollo completo del epígrafe, fuentes primarias, reglas y excepciones, resumen, síntesis, puntos de examen, retención activa, estrategia, esquema, tabla y banco coherente.

## La Puebla · auditoría final 19/19

La fuente oficial del programa es el Anexo I del BOP Toledo núm. 82, de 5 de mayo de 2026.

Contenido preparado para la auditoría final:

- 19/19 títulos literales;
- 19/19 temas reconstruidos;
- 25.395 palabras;
- media de 1.337 palabras por tema;
- mínimo de 928 palabras;
- al menos dos fuentes oficiales o documentación oficial por tema;
- estructura fija completa;
- 570 preguntas, treinta por tema;
- 20 supuestos prácticos;
- tres simulacros de 50 + 5;
- cero temas pendientes en `theoryProgramme.v86`.

Los temas jurídicos utilizan BOE, DOUE y textos oficiales. Los temas 15 a 19 utilizan documentación oficial de Microsoft, LibreOffice, Intel y USB-IF. Se evita fijar como permanentes posiciones de menús que puedan cambiar por actualización y se describen las funciones exigidas por el programa.

La calificación definitiva **APTO y publicada** solo se asigna tras superar la auditoría exacta de la PR, navegador/PWA e integración y fusionarse en `main`.

El 1 % reservado corresponde a:

- modificaciones legislativas posteriores;
- actualizaciones de Windows, Edge, Microsoft 365 o LibreOffice;
- listas, tribunal, fecha, instrucciones y correcciones del proceso.

## Carranque · auditoría final 20/20

Resultado publicado:

- 20/20 títulos oficiales;
- 20/20 temas autosuficientes;
- 36.170 palabras;
- media de 1.809 palabras por tema;
- mínimo de 1.313 palabras;
- fuentes oficiales BOE;
- 600 preguntas;
- 18 supuestos de los temas 3 a 20;
- tres simulacros de 80 + 5;
- cero temas pendientes.

El 1 % reservado corresponde a cambios normativos, datos fiscales anuales y publicaciones posteriores del proceso.

## Diputación

- 40 temas y 1.242 preguntas.
- Primera mitad con mayor desarrollo.
- Los temas 25 a 40 requieren reconstrucción prioritaria.
- Pendiente localizar e integrar el texto oficial vigente de los Estatutos del OAPGT.
- No debe presentarse todavía como fuente teórica exclusiva.

## UC3M

- 20 temas y 690 preguntas.
- Tres simulacros de 70 + 5.
- Marco estatal, autonómico e interno integrado.
- Numerosos temas permanecen demasiado condensados para ser el único manual.
- Los datos anuales de admisión solo se incorporarán desde publicación oficial del curso correspondiente.

## Auditoría práctica

Los bancos de las cuatro convocatorias controlan:

- identificadores y enunciados únicos;
- cuatro alternativas distintas;
- respuesta válida;
- fuente o justificación;
- ausencia de plantillas genéricas y fuentes manifiestamente débiles;
- equilibrio razonable de letras;
- niveles de dificultad;
- simulacros sin repeticiones y con cobertura temática.

La Puebla mantiene 50 preguntas y cinco reservas, 60 minutos, +0,20 por acierto y −0,05 por error. Carranque mantiene 80 preguntas y cinco reservas, 90 minutos, +0,25 y −0,08.

## Arranque, PWA y almacenamiento

`index.html` carga únicamente el manifiesto y el cargador. El manifiesto declara todos los módulos y alimenta el service worker. La caché prevista para v0.86 es `opoweb-v94` e incorpora la teoría completa de Carranque y La Puebla.

Playwright ejecuta OpoWeb con perfiles Chromium de escritorio 1440 × 900, Pixel 7 e iPad Pro 11. Controla las siete vistas, carga ordenada, ausencia de scripts duplicados, diseño adaptable, tests, fuentes teóricas, persistencia y recarga sin conexión.

La emulación no equivale a una prueba en dispositivos físicos ni acredita Safari/WebKit.

## Política de actualización

La legislación exigible se revisa con referencia a la fecha del examen. Los datos dinámicos —listas, tribunal, fechas, instrucciones, correcciones, objetivos fiscales, admisión anual o notas de corte— no se presentan como permanentes y solo se actualizan desde publicaciones oficiales.

## Bloqueos para completar las cuatro fuentes teóricas

1. Diputación temas 25 a 40.
2. Resto de Diputación y Estatutos oficiales vigentes del OAPGT.
3. UC3M completa.
4. Revisión del artículo 23.2 del Real Decreto 534/2024 desde el 22 de julio de 2026.
5. Auditoría cruzada final de los 99 temas.
6. Comprobación manual en dispositivos físicos y Safari/WebKit.
7. Consolidación interna de módulos históricos sin pérdida de progreso.

No se asigna el 100 % a ninguna convocatoria viva. El 99 % significa cierre documental y funcional bajo las fuentes revisadas, no inmutabilidad ni garantía de aprobado.
