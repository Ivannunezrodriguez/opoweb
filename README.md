# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil las cuatro convocatorias activas del proyecto:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas a discapacidad. Solicitudes del 9 de julio al 5 de agosto de 2026.

No se incorporarán nuevas OPE hasta cerrar estas cuatro con el máximo nivel posible. Las Ventas con Peña Aguilera permanece eliminada del selector y de la planificación.

## Versión actual

- **OpoWeb v0.42.0**
- Caché PWA: `opoweb-v49`
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

## Mejoras de v0.42

### Formatos oficiales de simulacro

| OPE | Preguntas | Reserva | Tiempo | Segundo ejercicio/casos |
|---|---:|---:|---:|---|
| La Puebla | 50 | 5 | 60 min | Uno o varios supuestos; formato fijado por el Tribunal |
| Carranque | 80 | 5 | 90 min | Supuestos sobre temas 3 a 20 |
| Diputación C1 | 50 | 5 | 60 min | Segundo ejercicio práctico eliminatorio |
| UC3M | 70 | 5 | 60 min | No existe práctico oficial |

Los tres simulacros de cada OPE se regeneran ahora con su tamaño oficial. Las cinco preguntas de reserva se muestran separadas y se corrigen para entrenar, pero no alteran la nota mientras no sustituyan una pregunta anulada.

### Reutilización normativa segura

La web sustituye automáticamente bancos de plantilla cuando existe coincidencia clara de norma y alcance con un banco real ya auditado. Ejemplos:

- Constitución;
- Ley 39/2015;
- Ley 40/2015;
- administración electrónica;
- protección de datos;
- igualdad;
- prevención de riesgos laborales;
- TREBEP;
- contratación pública.

No se reutiliza contenido universitario específico en convocatorias locales. Las preguntas se clonan con identificadores propios y mantienen la justificación normativa.

### Auditoría real frente a plantilla

Cada tema distingue ahora:

- preguntas reales de contenido;
- preguntas de plantilla pendientes de sustitución;
- temas con base real;
- temas con banco sólido de 20+;
- temas que han alcanzado 30+.

La vista **Test por temas** muestra el estado del banco seleccionado. La vista **Progreso** muestra la comparación global de las cuatro OPE.

## Prioridades activas

### 1. Diputación de Toledo C1

- Presentar solicitud antes del 31 de julio de 2026 y conservar registro y justificante.
- Desarrollar los 40 temas completos.
- Priorizar organización de Diputación, Acuerdo Regulador, OAPGT, presupuesto, tributación y recaudación.
- Crear contenido específico de Windows 11, Edge, GroupWise 24 y LibreOffice 24.
- Reemplazar las preguntas de plantilla y completar las soluciones de los 20 supuestos.

### 2. Carranque

- Completar los 20 temas con contenido normativo real.
- Sustituir las preguntas de método por preguntas de examen.
- Mantener simulacros de 80 + 5 en 90 minutos.
- Rehacer los supuestos exclusivamente sobre temas 3 a 20.

### 3. La Puebla de Montalbán

- Completar los 19 temas artículo por artículo.
- Llevar cada tema a 30–40 preguntas reales.
- Ampliar y resolver al menos 20 supuestos.
- Reforzar régimen local, tributación, recaudación, administración electrónica e informática.

### 4. UC3M

- Cerrar Ley 10/2019, Estatutos, normativa académica, admisión, presupuesto y contratación interna.
- Elevar los once temas que permanecen por debajo de 30 preguntas.
- Mantener los tres simulacros oficiales de 70 + 5.

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
├── perfeccion-v42.js
├── ui-v42.js
├── ui-v41.js
├── refuerzo-test-v40.js
├── correcciones-test-v40.js
└── auditoria-test-v37.js

data/
├── ope-audit-v41.js
├── oposiciones.js
├── proceso.js
└── uc3m.js

docs/
├── AUDITORIA_OPE.md
└── HOJA_RUTA_PERFECCION.md
```

## Historial reciente

### v0.42.0 · 2026-07-10

- Normalizados los formatos oficiales de las cuatro OPE.
- Añadidas cinco preguntas de reserva separadas en todos los simulacros.
- La nota se calcula únicamente con las preguntas puntuables.
- Reutilizados bancos reales cuando coincide exactamente la norma y el alcance.
- Añadida auditoría global de preguntas reales frente a plantilla.
- Actualizada la caché a `opoweb-v49`.

### v0.41.0 · 2026-07-10

- Auditadas las cuatro OPE.
- Corregida la retirada de Las Ventas.
- Actualizado el plazo de Diputación.
- Fijado el botón «Volver al listado».

### v0.40.0 · 2026-07-10

- Añadidas 90 preguntas UC3M de aplicación y supuesto breve.
- Nueve temas UC3M elevados a 30 preguntas o más.
