# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.86.0**
- Caché PWA: `opoweb-v93`
- Formato de progreso: v2, compatible con versiones anteriores
- Última revisión estructural, jurídica y funcional: 14 de julio de 2026

## Dos métricas distintas

La integridad técnica y el volumen de ejercicios no equivalen a disponer de un manual teórico completo. Desde v0.85 se separan expresamente:

| Área | Estado estructural y práctico | Teoría autosuficiente |
|---|---:|---:|
| Funcionamiento e interfaz | 99 % | — |
| Carranque C2 | 99 % | **99 %** |
| La Puebla C2 | 99 % | **76 % aprox.** |
| Diputación C1 | 97 % | **80 % aprox.** |
| UC3M C2 | 99 % | **70–75 % aprox.** |
| Arquitectura y pruebas | 98 % | — |
| **Cobertura teórica global como fuente única** | — | **≈82 %** |

Los porcentajes son estimaciones de gestión, no una probabilidad de aprobar. Carranque está cerrado como fuente teórica autosuficiente; La Puebla ha iniciado su reconstrucción con los temas 1 a 5.

## La Puebla · reconstrucción teórica v0.86

Los temas 1 a 5 de La Puebla han sido reconstruidos con el mismo estándar de estudio que Carranque:

1. Constitución española de 1978: estructura, reforma, derechos, garantías, suspensión y modelo económico.
2. Ley 39/2015: disposiciones generales, interesados, actividad administrativa y términos y plazos.
3. Ley 39/2015: procedimiento común, fases, sancionador, responsabilidad patrimonial y simplificado.
4. Revisión de actos, recursos administrativos y revisión de oficio.
5. Municipio, provincia, competencias y régimen electoral local.

Cada uno incluye resumen orientado al aprobado, rigor normativo, desarrollo completo del epígrafe, síntesis, puntos calientes, retención activa, estrategia, esquema, tabla de repaso y fuentes oficiales.

La Puebla conserva:

- **19 títulos oficiales**;
- **570 preguntas**, treinta por tema;
- **20 supuestos prácticos**;
- tres simulacros de **50 preguntas + 5 reservas**;
- corrección: **+0,20 por acierto, −0,05 por error**.

Los temas 6 a 19 continúan pendientes de reconstrucción teórica completa y no deben utilizarse todavía como manual único.

## Carranque · teoría autosuficiente 20/20

Los veinte temas oficiales han sido reconstruidos y auditados para poder estudiar Carranque directamente dentro de OpoWeb.

Cada tema incorpora:

- título literal del programa;
- resumen orientado al aprobado;
- rigor normativo y cobertura por artículos;
- desarrollo completo de todos los apartados del epígrafe;
- síntesis de repaso rápido;
- bloque `Opo-Test: puntos calientes`;
- tres preguntas de retención activa;
- estrategia de examen;
- esquema jerárquico;
- tabla final de repaso;
- fuentes oficiales BOE identificadas;
- fecha de revisión jurídica;
- 30 preguntas vinculadas al tema.

La auditoría final exige para cada tema:

- al menos 1.000 palabras de contenido;
- estructura fija completa;
- dos o más fuentes oficiales;
- cobertura normativa identificada;
- título oficial coincidente;
- banco íntegro de 30 preguntas;
- ausencia de secciones genéricas o ajenas al programa.

Carranque mantiene además:

- **600 preguntas**;
- **18 supuestos prácticos**, con cobertura de los temas 3 a 20;
- tres simulacros de **80 preguntas + 5 reservas**, 90 minutos;
- corrección: **+0,25 por acierto, −0,08 por error**.

El 1 % restante corresponde a información futura o dinámica: listas, tribunal, fecha, instrucciones, modificaciones normativas, objetivos fiscales y bases de ejecución presupuestaria vigentes en la fecha del examen.

## Diputación y UC3M

Sus bancos de preguntas, supuestos y simulacros continúan operativos, pero sus desarrollos teóricos todavía no han superado el mismo estándar de autosuficiencia.

### Diputación

- 40 temas.
- 1.242 preguntas.
- Tres simulacros de 50 + 5.
- Estado actual de la teoría: primera mitad más desarrollada; temas 25 a 40 requieren ampliación prioritaria.
- Pendiente adicional: Estatutos oficiales vigentes del OAPGT.

### UC3M

- 20 temas.
- 690 preguntas.
- Tres simulacros de 70 + 5.
- Estado actual de la teoría: cobertura correcta, pero demasiado condensada para utilizarla como único manual.

Hasta completar su reconstrucción, estos temarios deben considerarse resumen y material de repaso, no fuente teórica exclusiva.

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
- auditoría teórica completa de Carranque;
- auditoría de los temas 1 a 5 de La Puebla;
- matriz independiente de los veinte bancos de Carranque;
- integridad del manifiesto, cargador y caché PWA;
- Playwright en escritorio, Pixel 7 e iPad Pro 11;
- funcionamiento sin conexión;
- persistencia, copia, recuperación, exportación e importación del progreso.

La caché `opoweb-v93` incorpora el primer bloque teórico de La Puebla y todo Carranque para poder estudiarlos sin conexión tras una primera carga correcta.

## Protección del progreso

OpoWeb conserva `opowebProgress`, crea una copia anterior en `opowebProgressBackup`, valida los datos y permite recuperar el último estado válido si el JSON principal está dañado.

La copia se guarda en el mismo navegador. Borrar los datos del sitio elimina progreso y copia local; conviene utilizar **Exportar** periódicamente.

## Orden de reconstrucción pendiente

1. La Puebla temas 6 a 19.
2. Diputación temas 25 a 40.
3. Resto de Diputación y Estatutos del OAPGT.
4. UC3M completa.
5. Auditoría cruzada final de los 99 temas.
6. Consolidación de módulos históricos sin pérdida de progreso.

## Historial reciente

### v0.86.0 · 2026-07-14

- Reconstruidos los temas 1 a 5 de La Puebla como teoría autosuficiente.
- Conservadas las 570 preguntas, 20 supuestos y tres simulacros.
- Añadida auditoría específica de La Puebla bloque 1.
- Caché actualizada a `opoweb-v93`.

### v0.85.0 · 2026-07-13

- Reconstruidos los veinte temas de Carranque como manual teórico autosuficiente.
- Incorporadas más de 60.000 palabras de teoría, fuentes oficiales, artículos, esquemas y tablas.
- Conservadas las 600 preguntas y los 18 supuestos.
- Añadida auditoría específica de autosuficiencia por tema.
- Diferenciada la cobertura estructural de la cobertura teórica real.
- Caché actualizada a `opoweb-v92`.

### v0.84.0 · 2026-07-13

- Contrastados los programas de La Puebla y Carranque con sus bases oficiales.
- Integrados sus títulos literales y parámetros de examen.
- Auditados bancos, supuestos y simulacros municipales.
