# Auditoría global de OpoWeb · v0.84

Fecha de revisión: 13 de julio de 2026.

## Alcance

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

## Avance aproximado

| Área | Avance |
|---|---:|
| Funcionamiento e interfaz | 99 % |
| Diputación C1 | 97 % |
| UC3M C2 | 99 % |
| La Puebla C2 | 99 % |
| Carranque C2 | 99 % |
| Arquitectura y pruebas | 98 % |
| **OpoWeb global** | **98 %** |

## Recuento efectivo

| Convocatoria | Preguntas | Temas a 30 |
|---|---:|---:|
| Diputación | 1.242 | 40/40 |
| La Puebla | 570 | 19/19 |
| Carranque | 600 | 20/20 |
| UC3M | 690 | 20/20 |
| **Total** | **3.102** | — |

## Cierre municipal v0.84

La auditoría específica de La Puebla y Carranque comprueba por tema:

- título final coincidente con la redacción oficial integrada;
- exactamente 30 preguntas;
- identificadores y enunciados únicos;
- cuatro alternativas distintas;
- respuesta incluida entre las opciones;
- fuente o justificación obligatoria;
- ausencia de plantillas genéricas;
- ausencia de dominios manifiestamente no fiables;
- respuesta dominante no superior al 40 % del tema;
- presencia de dificultad baja, media y alta.

También controla:

- formato oficial del primer ejercicio;
- preguntas de reserva y duración;
- puntuación por acierto y penalización;
- alcance del segundo ejercicio práctico;
- cobertura temática de los supuestos;
- número, unicidad y cobertura de los simulacros;
- baremo de méritos y estimación personal prudente.

El resultado exigido por CI es **APTO** sin fallos. El informe se exporta a `municipales-v84.json` y se conserva como artefacto de GitHub Actions.

## Resultado de La Puebla

- 19 títulos oficiales integrados.
- 570 preguntas válidas.
- 20 supuestos con cobertura de los temas 1 a 19.
- Tres simulacros de 50 + 5 y 60 minutos.
- Corrección: +0,20 / −0,05 / 0.
- Segundo ejercicio práctico eliminatorio.
- Concurso-oposición ponderado 80 % / 20 %.
- Méritos personales confirmados: 0 puntos.
- Avance estimado: 99 %.

El 1 % pendiente corresponde al seguimiento de anuncios posteriores, posibles correcciones, legislación vigente el día del examen y revisión manual final.

## Resultado de Carranque

- 20 títulos oficiales integrados.
- 600 preguntas válidas.
- 18 supuestos con cobertura de los temas 3 a 20.
- Tres simulacros de 80 + 5 y 90 minutos.
- Corrección: +0,25 / −0,08 / 0.
- Segundo ejercicio práctico sobre temas 3 a 20.
- Baremo de titulación, experiencia y formación integrado.
- Méritos personales: 0 puntos confirmados y 0,75 condicionados a que DAM se alegara y acreditara en plazo.
- Avance estimado: 99 %.

El 1 % pendiente corresponde a anuncios posteriores, posibles correcciones, legislación vigente el día del examen y revisión manual final.

## Auditoría UC3M

La auditoría final comprueba mínimo por tema, unicidad, opciones, respuesta, trazabilidad, ausencia de plantillas y fuentes débiles, equilibrio de letras, dificultad y tres simulacros de 70 + 5 con veinte temas.

- 690 preguntas.
- 20 temas con al menos 30.
- Temas 16 y 20 con 60.
- Temas 18 y 19 con 45.
- Marco estatal, autonómico e interno integrado.
- Presupuesto 2026 y contratación interna integrados.
- Avance estimado: 99 %.

## Arranque, PWA y almacenamiento

`index.html` carga únicamente el manifiesto y el cargador. El mismo manifiesto declara los módulos y alimenta el service worker. La caché v0.84 es `opoweb-v91`.

Playwright ejecuta OpoWeb en escritorio 1440 × 900, Pixel 7 e iPad Pro 11. Controla las siete vistas, carga ordenada, ausencia de scripts duplicados, diseño adaptable, tests, supuestos municipales, persistencia, recuperación del progreso, exportación, importación y recarga sin conexión.

La copia de progreso está en el mismo navegador; no sustituye una exportación externa periódica.

## Política de actualización

La legislación exigible se revisa con referencia a la fecha del examen. Los datos dinámicos —listas, tribunal, fechas, instrucciones, correcciones, admisión anual o notas de corte— no se presentan como permanentes y deben actualizarse únicamente desde publicaciones oficiales.

## Bloqueos para alcanzar el 100 % global

1. Estatutos oficiales vigentes del OAPGT y cierre de Diputación.
2. Revisión del artículo 23.2 del Real Decreto 534/2024 desde el 22 de julio de 2026.
3. Actualización anual de admisión UC3M con fuente oficial.
4. Comprobación manual en dispositivos físicos Android e iPad y en Safari/WebKit.
5. Seguimiento de listas, tribunal, fechas e instrucciones de La Puebla y Carranque.
6. Consolidación interna de módulos históricos sin pérdida de progreso.

No se asigna el 100 % a ninguna convocatoria viva mientras puedan existir anuncios o cambios normativos posteriores. El 99 % refleja cierre estructural y documental, no inmutabilidad ni garantía de aprobado.
