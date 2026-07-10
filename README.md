# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil las cuatro convocatorias activas del proyecto:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas a discapacidad. Solicitudes del 9 de julio al 5 de agosto de 2026.

No se incorporarán nuevas OPE hasta cerrar estas cuatro con el máximo nivel posible. Las Ventas con Peña Aguilera permanece eliminada del selector y de la planificación.

## Versión actual

- **OpoWeb v0.43.0**
- Caché PWA: `opoweb-v50`
- Última comprobación estructural: 10 de julio de 2026

## Criterio de perfección

Una OPE no se considerará cerrada únicamente por tener temas y preguntas. Para alcanzar el nivel objetivo debe cumplir simultáneamente:

- títulos idénticos al programa oficial;
- desarrollo autosuficiente por títulos, capítulos y artículos;
- norma y versión vigentes identificadas;
- resumen orientado al aprobado;
- rigor normativo;
- puntos calientes de test;
- tres preguntas de retención activa;
- cuadro para test y supuesto práctico;
- 30–40 preguntas reales por tema, sin preguntas de plantilla;
- distractores plausibles y justificación suficiente;
- supuestos prácticos con solución razonada cuando la convocatoria tenga práctico;
- simulacros con número de preguntas, reservas, tiempo y penalización oficiales;
- proceso selectivo actualizado desde fuentes oficiales;
- auditoría automática de validez, duplicados, cobertura y formato.

## Avance v0.43 · Diputación de Toledo C1

Se han desarrollado en profundidad los temas 5 a 9:

- tema 5: Ley 39/2015, interesados, actividad y plazos;
- tema 6: procedimiento administrativo común;
- tema 7: acto administrativo;
- tema 8: revisión y recursos;
- tema 9: administración electrónica.

La fase añade:

- 75 preguntas manuales nuevas;
- 15 preguntas por cada tema revisado;
- dificultad baja, media y alta;
- respuestas correctas rotadas;
- justificaciones con artículo o regla concreta;
- eliminación de preguntas de plantilla en esos cinco temas;
- fusión con bancos reales ya reutilizados, con límite de 40 preguntas por tema;
- simulacros de Diputación regenerados únicamente con preguntas clasificadas como reales.

El detalle está documentado en [`docs/DIPUTACION_ADMIN_C1.md`](docs/DIPUTACION_ADMIN_C1.md).

## Formatos oficiales de simulacro

| OPE | Preguntas | Reserva | Tiempo | Segundo ejercicio/casos |
|---|---:|---:|---:|---|
| La Puebla | 50 | 5 | 60 min | Uno o varios supuestos; formato fijado por el Tribunal |
| Carranque | 80 | 5 | 90 min | Supuestos sobre temas 3 a 20 |
| Diputación C1 | 50 | 5 | 60 min | Segundo ejercicio práctico eliminatorio |
| UC3M | 70 | 5 | 60 min | No existe práctico oficial |

Las cinco preguntas de reserva se muestran separadas y se corrigen para entrenar, pero no alteran la nota mientras no sustituyan una pregunta anulada.

## Reutilización normativa segura

La web sustituye bancos de plantilla cuando existe coincidencia clara de norma y alcance con un banco real ya auditado. Se reutilizan, cuando procede:

- Constitución;
- Ley 39/2015;
- Ley 40/2015;
- administración electrónica;
- protección de datos;
- igualdad;
- prevención de riesgos laborales;
- TREBEP;
- contratación pública.

No se reutiliza contenido universitario específico en convocatorias locales.

## Auditoría real frente a plantilla

Cada tema distingue:

- preguntas reales de contenido;
- preguntas de plantilla pendientes de sustitución;
- temas con base real;
- temas con banco sólido de 20+;
- temas que han alcanzado 30+.

La vista **Test por temas** muestra el estado del banco seleccionado. La vista **Progreso** muestra la comparación global de las cuatro OPE.

## Prioridades activas

### 1. Diputación de Toledo C1

Bloque siguiente: temas 12 a 16.

- régimen local;
- municipio;
- provincia y organización de la Diputación;
- otras entidades locales;
- contratación pública local.

Después:

- empleo público de Castilla-La Mancha;
- laboral y Seguridad Social;
- Acuerdo Regulador y OAPGT;
- tributación, recaudación y presupuesto;
- Windows 11, Edge, GroupWise 24 y LibreOffice 24.

### 2. Carranque

- completar los 20 temas;
- sustituir preguntas de método;
- mantener simulacros de 80 + 5 en 90 minutos;
- rehacer supuestos exclusivamente sobre temas 3 a 20.

### 3. La Puebla de Montalbán

- completar 19 temas artículo por artículo;
- alcanzar 30–40 preguntas reales por tema;
- ampliar y resolver al menos 20 supuestos;
- reforzar régimen local, tributación, recaudación, administración electrónica e informática.

### 4. UC3M

- cerrar Ley 10/2019, Estatutos, normativa académica, admisión, presupuesto y contratación interna;
- elevar los once temas que permanecen por debajo de 30 preguntas;
- mantener tres simulacros de 70 + 5.

## Estructura obligatoria de cada tema

1. **Resumen orientado al aprobado**.
2. **Rigor normativo**.
3. **Desarrollo por títulos, capítulos y artículos**.
4. **Opo-Test: puntos calientes**.
5. **Retención activa**: tres preguntas.
6. **Cuadro para test y supuesto práctico**.

No se usan como apartados visibles “Mapa de estudio”, “Esquema oficial”, “Tabla de repaso”, “argot técnico” ni “trampas habituales”.

## Navegación

El botón **«Volver al listado»** permanece visible durante el desplazamiento mediante `position: sticky`, tanto en escritorio como en móvil.

## Archivos recientes

```text
assets/js/
├── diputacion-v43.js
├── ui-v43.js
├── perfeccion-v42.js
├── ui-v42.js
├── correcciones-test-v40.js
└── auditoria-test-v37.js

docs/
├── DIPUTACION_ADMIN_C1.md
├── AUDITORIA_OPE.md
├── HOJA_RUTA_PERFECCION.md
└── UC3M_AUX_ADMIN.md
```

## Historial reciente

### v0.43.0 · 2026-07-10

- Desarrollados en profundidad los temas 5 a 9 de Diputación.
- Añadidas 75 preguntas manuales de contenido.
- Retiradas las preguntas de plantilla de esos cinco temas.
- Regenerados los simulacros de Diputación con preguntas reales disponibles.
- Actualizada la caché a `opoweb-v50`.

### v0.42.0 · 2026-07-10

- Normalizados los formatos oficiales de las cuatro OPE.
- Añadidas cinco preguntas de reserva separadas.
- Reutilizados bancos reales cuando coincide norma y alcance.
- Añadida auditoría global de preguntas reales frente a plantilla.

### v0.41.0 · 2026-07-10

- Auditadas las cuatro OPE.
- Corregida la retirada de Las Ventas.
- Actualizado el plazo de Diputación.
- Fijado el botón «Volver al listado».
