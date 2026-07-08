# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo en Toledo desde ordenador, tablet o móvil.

## Convocatorias cargadas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Las Ventas con Peña Aguilera**: 1 plaza. Estado personal: pendiente de solicitud/seguimiento.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.

## Versión visible

La web muestra ahora la **Versión OpoWeb v0.14.0** en la tarjeta lateral de la oposición activa y también en la vista de progreso. Si en móvil/tablet no aparece esa versión, hay que recargar o borrar caché de la PWA.

## Qué permite ahora

- Seleccionar la oposición activa desde el menú lateral.
- Ver proceso, enlaces oficiales y calendario de cada convocatoria.
- Estudiar temario por convocatoria con desarrollo amplio por bloques legales y artículos cuando procede.
- Tener en una misma hoja la explicación de cada punto del tema, sin depender de mirar aparte rangos de artículos.
- Mantener el **Cuadro para test y supuesto práctico** como guía de respuesta.
- Ver cada tema con estructura **Opo-Test**: resumen orientado al aprobado, rigor normativo, síntesis de repaso, tabla comparativa, puntos calientes y preguntas de recuerdo activo.
- Ver módulos manuales **tipo academia** para bloques reutilizables: Constitución, Ley 39/2015, Ley 40/2015, Régimen Local, Contratación, Hacienda/Tributos/Presupuesto y Ofimática.
- Hacer test por temas con corrección, penalización y justificación.
- Practicar supuestos prácticos con soluciones orientativas jurídicas y operativas.
- Hacer simulacros transversales.
- Exportar/importar progreso del navegador.

## Método de resumen aplicado al temario

Cada tema queda reforzado con esta estructura:

1. **Documento reutilizable**: identifica el módulo común que puede servir para varias convocatorias.
2. **Resumen fino tipo academia**: desarrolla el bloque con lógica de examen.
3. **Rigor normativo**: leyes, artículos, órganos y plazos se mantienen sin convertir días hábiles/naturales ni meses en aproximaciones.
4. **Síntesis y Opo-Test**: puntos calientes con alta probabilidad de pregunta tipo test.
5. **Retención activa**: 3 preguntas de autoevaluación sin respuesta visible.
6. **Tabla comparativa**: conceptos que suelen confundirse.
7. **Plan de estudio**: vueltas de lectura, recuerdo activo, test y revisión de fallos.

## Baremos personales cargados de forma conservadora

- **La Puebla**: DAM probablemente no suma porque las bases solo citan Grado en Derecho o Arquitectura como mérito de titulación. Sin experiencia pública C2 confirmada: 0 puntos.
- **Carranque**: DAM como FP de Grado Superior puede sumar 0,75 puntos si fue aportado/acreditado en plazo. Sin experiencia administrativa pública confirmada: 0 puntos.
- **Las Ventas**: Técnico Superior/DAM puede sumar 2 puntos si se acredita con la solicitud. Formación y ejercicios aprobados solo deben sumarse si cumplen literalmente las bases.
- **Diputación Administrativo C1**: no hay baremo porque es oposición libre. DAM sirve como titulación superior al requisito de Bachillerato/equivalente, pero no da puntos.

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
│       ├── estudio-avanzado.js
│       ├── temario-profundo.js
│       ├── temario-editorial.js
│       ├── ofimatica-detalle.js
│       ├── metodo-opotest.js
│       └── temario-academia.js
├── data/
│   ├── oposiciones.js
│   ├── proceso.js
│   └── formacion_usuario.json
└── docs/
    ├── PROMPTS_CHATS.md
    ├── LA_PUEBLA.md
    ├── CARRANQUE.md
    ├── LAS_VENTAS.md
    └── DIPUTACION_ADMINISTRATIVO.md
```

## Cambios de versión

### v0.14.0 - 2026-07-07

- Añadido `assets/js/temario-academia.js`.
- Añadidos módulos manuales tipo academia para bloques reutilizables.
- Añadida etiqueta visible **Versión OpoWeb v0.14.0** en la web.
- Añadida marca visual `academia` en los temas que tienen desarrollo fino reutilizable.
- Actualizada caché PWA a `opoweb-v14`.

### v0.13.0 - 2026-07-07

- Añadido `assets/js/metodo-opotest.js`.
- Aplicada estructura de resumen orientada al aprobado a todos los temas de todas las oposiciones.
- Añadidos puntos calientes **Opo-Test** y 3 preguntas de recuerdo activo por tema.
- Añadidas tablas comparativas adaptadas a recursos, plazos, régimen local, hacienda/tributos e informática.
- Actualizada caché PWA a `opoweb-v13`.

### v0.12.0 - 2026-07-07

- Añadida **Diputación Provincial de Toledo · Administrativo C1** al selector de oposiciones.
- Cargado el temario oficial de 40 temas del Anexo VII.
- Añadidos tests por tema, supuestos prácticos, simulacros transversales, calendario y enlaces oficiales.
- Marcada como **pendiente de solicitud** y sin baremo al ser oposición libre.
- Actualizada caché PWA a `opoweb-v12`.

### v0.9.0 - 2026-07-04

- Añadido `assets/js/temario-profundo.js`.
- Ampliado el temario de todas las oposiciones por bloques completos: Constitución, Ley 39/2015, Ley 40/2015, régimen local, empleo público, hacienda local, contratos, bienes, igualdad, prevención, protección de datos, administración electrónica e informática.
- Quitados los bloques que no aportaban: argot técnico, trampas habituales y mapa de estudio.
- Mantenido el **Cuadro para test y supuesto práctico**.
- Actualizada caché PWA a `opoweb-v9`.

### v0.8.0 - 2026-07-04

- Reestructurado el temario para desarrollar artículos dentro de la misma hoja cuando procede.
- Eliminados bloques auxiliares poco útiles.

### v0.7.0 - 2026-07-04

- Sustituidos bloques genéricos por contenido más orientado a estudio.
- Mejoradas soluciones orientativas de supuestos.
- Actualizada caché PWA a `opoweb-v7`.

### v0.6.0 - 2026-07-04

- Añadidas **Carranque** y **Las Ventas con Peña Aguilera** al selector de oposiciones.
- Carranque queda marcada como **inscrito**.
- Añadidos temarios iniciales, tests, supuestos y simulacros para Carranque y Las Ventas.
- Añadidos calendarios y enlaces oficiales por convocatoria.
- Añadida estructura de chats y plantilla de formación.
- Actualizada caché PWA a `opoweb-v6`.

### v0.5.0 - 2026-07-04

- Añadida vista **Proceso y enlaces**.
- Añadidos enlaces oficiales y calendario del proceso.
- Ampliados los supuestos prácticos.

### v0.1.0 - 2026-07-04

- Primera versión web con temario, test, supuestos, simulacros y progreso local.
