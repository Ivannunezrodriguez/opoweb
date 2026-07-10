# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil las cuatro convocatorias activas del proyecto:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas a discapacidad. Solicitudes del 9 de julio al 5 de agosto de 2026.

No se incorporarán nuevas OPE hasta cerrar estas cuatro con el máximo nivel posible. Las Ventas con Peña Aguilera permanece eliminada del selector y de la planificación.

## Versión actual

- **OpoWeb v0.45.0**
- Caché PWA: `opoweb-v52`
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

## Diputación de Toledo · avance acumulado

Se han desarrollado en profundidad **15 de los 40 temas oficiales**.

### v0.43 · Procedimiento administrativo

- tema 5: interesados, actividad y plazos;
- tema 6: procedimiento administrativo común;
- tema 7: acto administrativo;
- tema 8: revisión y recursos;
- tema 9: administración electrónica.

### v0.44 · Régimen local y contratación

- tema 12: Régimen Local Español;
- tema 13: municipio, competencias y presupuesto local;
- tema 14: provincia, Diputación Provincial de Toledo y régimen electoral;
- tema 15: comarcas, áreas metropolitanas, mancomunidades y entidades inferiores;
- tema 16: contratación pública local.

### v0.45 · Empleo público, trabajo y Seguridad Social

- tema 17: personal al servicio de las Administraciones de Castilla-La Mancha, acceso y pérdida de la relación;
- tema 18: derechos, deberes y situaciones administrativas;
- tema 19: régimen disciplinario;
- tema 20: contrato de trabajo, modificación, suspensión y extinción;
- tema 21: modalidades contractuales, Régimen General, afiliación, altas, bajas, cotización y recaudación.

El **tema 22** permanece expresamente pendiente hasta obtener el Acuerdo Regulador vigente y los Estatutos oficiales vigentes del OAPGT. No se completará con contenido supuesto o desactualizado.

### Resultado del trabajo

- 225 preguntas manuales acumuladas: 75 en cada una de las versiones v0.43, v0.44 y v0.45;
- 15 preguntas nuevas por cada tema revisado;
- dificultad baja, media y alta;
- respuestas correctas rotadas;
- justificación mediante artículo o regla jurídica;
- eliminación de preguntas de plantilla en los quince temas;
- fusión con bancos reales anteriores, con límite de 40 preguntas por tema;
- simulacros de Diputación regenerados únicamente con preguntas reales disponibles.

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
- TREBEP y Ley 4/2011;
- contratación pública;
- Estatuto de los Trabajadores;
- Ley General de la Seguridad Social.

No se reutiliza contenido universitario específico en convocatorias locales ni normativa interna sin fuente oficial.

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

Bloque siguiente:

- tema 22, únicamente cuando se obtengan las fuentes internas oficiales;
- temas 23 y 24: prevención de riesgos e igualdad;
- temas 25 y 26: obligación tributaria y recaudación;
- tema 27: presupuesto general local;
- temas 28 a 31: protección de datos, transparencia, tributos y firma electrónica;
- temas 32 a 40: Windows 11, Edge, GroupWise 24, LibreOffice 24 e informática básica.

También quedan por desarrollar en profundidad los temas 1–4, 10 y 11.

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
├── diputacion-v45.js
├── ui-v45.js
├── diputacion-v44.js
├── ui-v44.js
├── diputacion-v43.js
├── ui-v43.js
├── perfeccion-v42.js
└── ui-v42.js

docs/
├── DIPUTACION_ADMIN_C1.md
├── AUDITORIA_OPE.md
├── HOJA_RUTA_PERFECCION.md
└── UC3M_AUX_ADMIN.md
```

## Historial reciente

### v0.45.0 · 2026-07-10

- Desarrollados en profundidad los temas 17 a 21 de Diputación.
- Añadidas 75 preguntas manuales de empleo público, disciplina, contrato de trabajo y Seguridad Social.
- Alcanzados 15 temas profundos y 225 preguntas manuales acumuladas.
- Marcado el tema 22 como pendiente de fuentes internas oficiales.
- Regenerados los simulacros de Diputación exclusivamente con preguntas reales.
- Actualizada la caché a `opoweb-v52`.

### v0.44.0 · 2026-07-10

- Desarrollados en profundidad los temas 12 a 16 de Diputación.
- Añadidas 75 preguntas manuales de régimen local y contratación.
- Alcanzados 10 temas profundos y 150 preguntas manuales acumuladas.
- Actualizada la caché a `opoweb-v51`.

### v0.43.0 · 2026-07-10

- Desarrollados en profundidad los temas 5 a 9 de Diputación.
- Añadidas 75 preguntas manuales de procedimiento administrativo.
- Retiradas las preguntas de plantilla de esos cinco temas.

### v0.42.0 · 2026-07-10

- Normalizados los formatos oficiales de las cuatro OPE.
- Añadidas cinco preguntas de reserva separadas.
- Reutilizados bancos reales cuando coincide norma y alcance.
- Añadida auditoría global de preguntas reales frente a plantilla.