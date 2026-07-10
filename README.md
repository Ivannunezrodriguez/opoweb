# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.56.0**
- Caché PWA: `opoweb-v63`
- Última revisión estructural: 10 de julio de 2026

## Correcciones de estado en v0.56

- retirada efectiva de los dos identificadores históricos de Las Ventas;
- sincronización de la ficha de Diputación con el plazo de solicitudes del 6 al 31 de julio de 2026;
- incorporación de una prueba de regresión para impedir que reaparezcan esos errores;
- conservación del progreso almacenado en el navegador.

## Estado real de Diputación

El temario todavía **no se considera perfecto ni definitivamente cerrado**.

Situación actual:

- 39 de 40 temas con primera vuelta profunda;
- tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT;
- 585 preguntas manuales de primera vuelta;
- 255 preguntas añadidas durante la segunda vuelta;
- **840 preguntas manuales acumuladas**;
- temas 1–17 elevados al objetivo mínimo de 30 preguntas reales;
- tres simulacros tipo test de 50 + 5;
- 20 supuestos completos;
- 40 variantes prácticas;
- rúbrica sobre 10 puntos por caso;
- tres simulacros prácticos internos.

La primera vuelta significa que existe un desarrollo útil y autosuficiente. No significa que todo el contenido esté ya perfecto. Para cerrar Diputación faltan la segunda revisión de los temas 18–21 y 23–40, el tema 22, la auditoría transversal y la consolidación técnica.

## Segunda vuelta v0.56

Se ha reforzado el tema 17: **personal al servicio de las Administraciones Públicas de Castilla-La Mancha, acceso al empleo público y pérdida de la relación de servicio**.

### Resultado

- 15 preguntas nuevas y específicas;
- 255 preguntas nuevas acumuladas en la segunda vuelta;
- diecisiete primeros temas con al menos 30 preguntas reales;
- cuatro alternativas distintas;
- respuesta correcta rotada;
- dificultad baja, media y alta;
- justificación mediante artículo de la Ley 4/2011;
- control de preguntas genéricas y duplicados;
- regeneración de los tres simulacros.

### Contenido reforzado

- clases de personal empleado público;
- funciones reservadas al personal funcionario;
- principios y requisitos de acceso;
- oposición, concurso y concurso-oposición;
- adquisición de la condición de funcionario de carrera;
- causas de pérdida y renuncia.

## Fase práctica

Cada uno de los 20 supuestos permite:

- elegir caso base o dos variantes;
- redactar y guardar la respuesta;
- consultar solución y base normativa;
- completar una rúbrica sobre 10;
- marcar el caso como revisado.

Los tres simulacros prácticos internos contienen dos casos obligatorios y una extensión opcional. Los 90 minutos son una referencia de entrenamiento, no un formato oficial confirmado.

## Formatos oficiales del primer ejercicio

| OPE | Preguntas | Reserva | Tiempo |
|---|---:|---:|---:|
| La Puebla | 50 | 5 | 60 min |
| Carranque | 80 | 5 | 90 min |
| Diputación C1 | 50 | 5 | 60 min |
| UC3M | 70 | 5 | 60 min |

## Próximas prioridades

### Diputación

1. Elevar los temas 18–21 a 30–40 preguntas reales.
2. Continuar con los temas 23–31 y 32–40.
3. Auditar referencias, duplicados, opciones y dificultad.
4. Cerrar el tema 22 solo con textos oficiales internos.
5. Consolidar las capas históricas cuando el contenido esté estabilizado.

### Carranque

Completar los 20 temas, sustituir preguntas de método y crear supuestos exclusivos de temas 3–20.

### La Puebla

Completar 19 temas, alcanzar 30–40 preguntas por tema y resolver al menos 20 supuestos.

### UC3M

Cerrar normativa interna pendiente y elevar a 30–40 preguntas los temas incompletos.

## Criterio de cierre de un tema

Un tema solo se considera terminado cuando tenga:

1. título oficial exacto;
2. desarrollo autosuficiente y actualizado;
3. estructura orientada al aprobado;
4. 30–40 preguntas reales sin plantillas;
5. respuestas y justificaciones verificadas;
6. integración correcta en simulacros y supuestos;
7. auditoría final de vigencia y duplicados.

## Prueba de regresión

Desde la raíz del repositorio:

```bash
node tests/smoke-v56.js
```

La prueba comprueba el refuerzo del tema 17, la composición 50 + 5 de los simulacros, la exclusión del tema 22 y la retirada efectiva de Las Ventas.

## Historial reciente

### v0.56.0 · 2026-07-10

- Añadidas 15 preguntas al tema 17.
- Temas 1–17 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 840 preguntas manuales acumuladas.
- Corregida la retirada de Las Ventas del selector.
- Sincronizado el estado de solicitud de Diputación.
- Añadida prueba de regresión.
- Actualizada la caché a `opoweb-v63`.

### v0.55.0 · 2026-07-10

- Añadidas 105 preguntas a los temas 10–16.
- Temas 1–16 elevados al objetivo mínimo de 30 preguntas reales.
- Alcanzadas 825 preguntas manuales acumuladas.
- Regenerados los simulacros tipo test.

### v0.54.0 · 2026-07-10

- Añadidas 75 preguntas a los temas 5–9.
- Temas 1–9 elevados al objetivo mínimo de 30 preguntas reales.

### v0.53.0 · 2026-07-10

- Iniciada la segunda vuelta de perfeccionamiento.
- Añadidas 60 preguntas a los temas 1–4.
