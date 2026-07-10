# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil las cuatro convocatorias activas del proyecto:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas a discapacidad. Solicitudes del 9 de julio al 5 de agosto de 2026.

No se incorporarán nuevas OPE hasta cerrar estas cuatro. Las Ventas con Peña Aguilera permanece eliminada.

## Versión actual

- **OpoWeb v0.46.0**
- Caché PWA: `opoweb-v53`
- Última comprobación estructural: 10 de julio de 2026

## Criterio de cierre

Una convocatoria solo se considerará lista cuando tenga:

- títulos idénticos al programa oficial;
- desarrollo autosuficiente por normas y artículos;
- resumen, rigor normativo, puntos calientes, retención activa y cuadro práctico;
- 30–40 preguntas reales por tema;
- supuestos resueltos cuando exista práctico;
- simulacros fieles al formato oficial;
- proceso selectivo actualizado;
- cero incidencias críticas y ninguna pregunta de plantilla pendiente.

## Diputación de Toledo · avance acumulado

Se han desarrollado en profundidad **20 de los 40 temas oficiales**.

### v0.43 · Procedimiento administrativo

- temas 5–9: Ley 39/2015, procedimiento, acto, recursos y administración electrónica.

### v0.44 · Régimen local y contratación

- temas 12–16: régimen local, municipio, provincia, Diputación, otras entidades y contratación.

### v0.45 · Empleo público, trabajo y Seguridad Social

- temas 17–21: acceso, derechos, situaciones, disciplina, contrato laboral y Seguridad Social.

### v0.46 · Prevención, igualdad, tributación y presupuesto

- tema 23: prevención de riesgos laborales;
- tema 24: igualdad estatal y de Castilla-La Mancha;
- tema 25: obligación tributaria, tributos locales, gestión y revisión;
- tema 26: recaudación voluntaria y ejecutiva;
- tema 27: presupuesto general local y prórroga.

El **tema 22** permanece pendiente hasta disponer del Acuerdo Regulador vigente y de los Estatutos oficiales vigentes del OAPGT.

### Resultado acumulado

- **300 preguntas manuales nuevas**;
- 15 preguntas por cada uno de los 20 temas revisados;
- dificultad baja, media y alta;
- respuestas correctas rotadas;
- justificación mediante artículo o regla jurídica;
- eliminación de preguntas de plantilla en esos temas;
- fusión con bancos reales anteriores, con límite de 40 preguntas por tema;
- simulacros de Diputación regenerados únicamente con preguntas reales.

El detalle figura en [`docs/DIPUTACION_ADMIN_C1.md`](docs/DIPUTACION_ADMIN_C1.md).

## Formatos oficiales de simulacro

| OPE | Preguntas | Reserva | Tiempo | Segundo ejercicio/casos |
|---|---:|---:|---:|---|
| La Puebla | 50 | 5 | 60 min | Uno o varios supuestos; formato fijado por el Tribunal |
| Carranque | 80 | 5 | 90 min | Supuestos sobre temas 3 a 20 |
| Diputación C1 | 50 | 5 | 60 min | Segundo ejercicio práctico eliminatorio |
| UC3M | 70 | 5 | 60 min | No existe práctico oficial |

Las reservas se corrigen para entrenamiento, pero no alteran la nota mientras no sustituyan una pregunta anulada.

## Reutilización normativa segura

Solo se reutilizan bancos cuando coinciden norma y alcance. Entre los núcleos comunes:

- Constitución;
- Ley 39/2015 y Ley 40/2015;
- administración electrónica;
- protección de datos e igualdad;
- prevención de riesgos;
- empleo público;
- contratación;
- legislación laboral y Seguridad Social;
- tributación y hacienda local.

No se reutiliza contenido universitario específico ni normativa interna sin fuente oficial.

## Prioridades activas

### 1. Diputación de Toledo C1

Siguiente bloque:

- tema 28: protección de datos, transparencia y buen gobierno;
- tema 29: IBI e IAE;
- tema 30: IVTM, IIVTNU y tasas;
- tema 31: firma electrónica y certificados;
- temas 32–40: Windows 11, Edge, GroupWise 24, LibreOffice 24 e informática básica.

También faltan los temas 1–4, 10 y 11 y el tema 22 condicionado a fuentes internas.

### 2. Carranque

- completar los 20 temas;
- sustituir preguntas de método;
- mantener simulacros de 80 + 5;
- crear supuestos solo sobre temas 3–20.

### 3. La Puebla de Montalbán

- completar 19 temas;
- alcanzar 30–40 preguntas por tema;
- resolver al menos 20 supuestos;
- reforzar régimen local, tributación, recaudación, administración electrónica e informática.

### 4. UC3M

- cerrar Ley 10/2019, Estatutos, normativa académica, admisión, presupuesto y contratación interna;
- elevar los once temas inferiores a 30 preguntas;
- mantener tres simulacros de 70 + 5.

## Estructura obligatoria de cada tema

1. **Resumen orientado al aprobado**.
2. **Rigor normativo**.
3. **Desarrollo por títulos, capítulos y artículos**.
4. **Opo-Test: puntos calientes**.
5. **Retención activa**.
6. **Cuadro para test y supuesto práctico**.

No se usan como apartados visibles “Mapa de estudio”, “Esquema oficial”, “Tabla de repaso”, “argot técnico” ni “trampas habituales”.

## Navegación

El botón **«Volver al listado»** permanece visible durante el desplazamiento mediante `position: sticky`.

## Archivos recientes

```text
assets/js/
├── diputacion-v46.js
├── ui-v46.js
├── diputacion-v45.js
├── ui-v45.js
├── diputacion-v44.js
├── ui-v44.js
├── diputacion-v43.js
└── ui-v43.js

docs/
├── DIPUTACION_ADMIN_C1.md
├── AUDITORIA_OPE.md
├── HOJA_RUTA_PERFECCION.md
└── UC3M_AUX_ADMIN.md
```

## Historial reciente

### v0.46.0 · 2026-07-10

- Desarrollados los temas 23–27 de Diputación.
- Añadidas 75 preguntas manuales de prevención, igualdad, tributación, recaudación y presupuesto.
- Alcanzados 20 temas profundos y 300 preguntas manuales acumuladas.
- Regenerados los simulacros solo con contenido real.
- Actualizada la caché a `opoweb-v53`.

### v0.45.0 · 2026-07-10

- Desarrollados los temas 17–21.
- Añadidas 75 preguntas manuales.
- Marcado el tema 22 como pendiente de fuentes internas.

### v0.44.0 · 2026-07-10

- Desarrollados los temas 12–16.
- Añadidas 75 preguntas manuales.

### v0.43.0 · 2026-07-10

- Desarrollados los temas 5–9.
- Añadidas 75 preguntas manuales.

### v0.42.0 · 2026-07-10

- Normalizados los formatos oficiales y la auditoría de preguntas reales.