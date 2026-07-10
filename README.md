# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera se ha retirado del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.35.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v39`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

## UC3M · datos principales

- Plazo de solicitud: **del 9 de julio al 5 de agosto de 2026**, ambos inclusive.
- Solicitud: exclusivamente telemática.
- Tasa general: **13,83 €**.
- Oposición: ejercicio único de **70 preguntas + 5 de reserva**, 60 minutos.
- Corrección: +1 acierto, −1/3 error, blanco 0.
- Fecha previsible: **21 de noviembre de 2026 a las 10:00**.
- Concurso: inglés hasta 3 puntos, experiencia hasta 22 y formación hasta 5.

## Método de estudio

Cada tema conserva:

1. **Resumen orientado al aprobado**.
2. **Rigor normativo**.
3. **Desarrollo por títulos, capítulos y artículos**.
4. **Opo-Test: puntos calientes**.
5. **Retención activa**.
6. **Cuadro para test y supuesto práctico**.

Se han retirado de la vista **Mapa de estudio**, **Esquema oficial** y **Tabla de repaso**.

## Estado del temario UC3M

- Temas 1 a 6: revisados manualmente por artículos en v0.34.
- Tema 7: ampliado; pendiente la Ley 10/2019 consolidada con plazos literales.
- Tema 8: completado con LO 3/2007, III Plan de Igualdad 2025-2029 y protocolo UC3M.
- Temas 9 a 12: revisados en profundidad en v0.35.
- Temas 13 y 14: LOSU desarrollada por títulos y artículos relevantes.
- Tema 15: desarrollado por los cuatro bloques oficiales; pendientes artículos, mayorías y plazos literales del texto consolidado.
- Temas 16 y 17: marco estatal completado; faltan reglas internas y calendario anual UC3M.
- Tema 18: estructura presupuestaria, modificaciones e ingresos desarrollados; faltan cifras y bases internas vigentes.
- Tema 19: fases de gasto, documentos contables, pagos y cierre desarrollados; faltan límites, delegaciones y fechas UC3M.
- Tema 20: LCSP desarrollada; falta la capa de delegaciones y reglas internas UC3M.

## Revisión profunda v0.35

### Tema 9 · Ofimática

Incluye:

- Word 2019: formato, estilos, secciones, tablas, control de cambios, combinación de correspondencia, impresión y PDF.
- Excel 2019: libros, hojas, celdas, referencias relativas/absolutas/mixtas, fórmulas, funciones, filtros, tablas, validación, formato condicional y gráficos.
- Google Drive, Docs y Sheets: permisos, colaboración e historial de versiones.
- Google Calendar: eventos, invitados, recurrencia y disponibilidad.
- Gmail/correo: Para, CC, CCO, responder, reenviar, etiquetas, filtros y seguridad.

### Tema 10 · TREBEP

Se han desarrollado:

- artículos 8 a 13: clases de personal;
- artículos 14 y 15: derechos;
- artículos 52 a 54: código de conducta;
- artículos 62 a 68: adquisición, pérdida y rehabilitación;
- artículos 85 a 92: situaciones administrativas.

### Tema 11 · RD 364/1995 e incompatibilidades

Incluye:

- ingreso y convocatorias;
- concurso como sistema normal de provisión;
- libre designación con convocatoria pública;
- promoción interna;
- regla general de incompatibilidad;
- actividades privadas relacionadas con el puesto;
- diferencia entre actividad exceptuada y compatibilidad autorizada.

### Tema 12 · Prevención de riesgos laborales

Incluye:

- conceptos del artículo 4;
- protección eficaz del artículo 14;
- principios del artículo 15;
- evaluación y planificación;
- información, formación, emergencia y riesgo grave;
- vigilancia de la salud;
- obligaciones del trabajador;
- organización preventiva;
- Delegados de Prevención y Comité de Seguridad y Salud.

El Comité se constituye con **50 o más trabajadores**, es paritario y colegiado y se reúne ordinariamente **cada trimestre**.

## Test UC3M

- v0.34: 85 preguntas manuales para los temas 1 a 6.
- v0.35: **60 preguntas nuevas** para los temas 9 a 12.
- Tres simulacros regenerados de 70 preguntas con penalización real.

## Baremo personal conservador

- **La Puebla**: DAM no parece sumar; sin experiencia pública C2 confirmada, 0 puntos de concurso.
- **Carranque**: DAM puede sumar 0,75 puntos si quedó acreditado; experiencia pública no confirmada, 0.
- **Diputación C1**: oposición libre; DAM permite acceso pero no da puntos.
- **UC3M C2**: inglés 0 salvo certificado oficial; experiencia equivalente 0; formación potencial hasta 5 puntos, pendiente de validación.

## Estructura principal

```text
opoweb/
├── index.html
├── README.md
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── css/styles.css
│   ├── icons/icon.svg
│   └── js/
│       ├── app.js
│       ├── metodo-opotest.js
│       ├── motor-temario.js
│       ├── auditoria-temas.js
│       ├── uc3m-temario-v30.js
│       ├── uc3m-temario-v31.js
│       ├── uc3m-temario-v32.js
│       ├── uc3m-temario-v33.js
│       ├── uc3m-temario-v34.js
│       ├── uc3m-temario-v35.js
│       ├── ui-v29.js
│       ├── ui-v31.js
│       ├── ui-v32.js
│       ├── ui-v33.js
│       ├── ui-v34.js
│       └── ui-v35.js
├── data/
│   ├── oposiciones.js
│   ├── proceso.js
│   ├── uc3m.js
│   ├── formacion_usuario.json
│   └── normas/
└── docs/
    ├── PROMPTS_CHATS.md
    ├── LA_PUEBLA.md
    ├── CARRANQUE.md
    ├── DIPUTACION_ADMINISTRATIVO.md
    └── UC3M_AUX_ADMIN.md
```

## Cambios de versión

### v0.35.0 · 2026-07-10

- Profundizados los temas 9 a 12.
- Añadidas **60 preguntas manuales**.
- Ampliado Word 2019, Excel 2019 y Google Workspace.
- Completado TREBEP por artículos relevantes.
- Completados ingreso, provisión, promoción interna e incompatibilidades.
- Completada la Ley 31/1995 en los apartados del programa.
- Regenerados simulacros de 70 preguntas.
- Actualizada la caché PWA a `opoweb-v39`.

### v0.34.0 · 2026-07-10

- Profundizados manualmente los temas 1 a 6.
- Añadidas **85 preguntas jurídicas manuales**.
- Incorporados artículos, plazos, órganos, efectos y diferencias entre figuras.

### v0.33.0 · 2026-07-10

- Desarrollados los temas 15, 18 y 19.
- Añadidas 36 preguntas específicas de Estatutos y presupuesto.

### v0.32.0 · 2026-07-10

- Completado el tema 8 con el III Plan de Igualdad UC3M.
- Ampliado el tema 7 de transparencia.
