# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera se ha retirado del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.34.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v38`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

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

- Temas 1 a 6: revisados manualmente y desarrollados por artículos en la versión v0.34.
- Tema 7: ampliado; queda pendiente la Ley 10/2019 consolidada con plazos literales.
- Tema 8: completado con LO 3/2007, III Plan de Igualdad 2025-2029 y protocolo UC3M.
- Tema 9: Word 2019, Excel 2019, Drive, Docs, Sheets, Calendar y correo.
- Temas 10 a 14: revisados y desarrollados.
- Tema 15: desarrollado por los cuatro bloques oficiales; quedan pendientes artículos, mayorías y plazos literales del texto consolidado.
- Temas 16 y 17: marco estatal completado; faltan reglas internas y calendario anual UC3M.
- Tema 18: desarrollado con características, estructura, créditos, modificaciones y ejecución de ingresos; faltan cifras y bases internas vigentes.
- Tema 19: desarrollado con fases de gasto, documentos contables, pagos, transferencias, inversiones, liquidación y cierre; faltan límites, delegaciones y fechas UC3M.
- Tema 20: LCSP desarrollada; falta la capa de delegaciones y reglas internas UC3M.

## Revisión profunda v0.34

### Tema 1 · Constitución

Incluye estructura completa, derechos y garantías, elaboración de las leyes, organización territorial y procedimientos de reforma de los artículos 166 a 169.

### Temas 2 y 3 · Ley 39/2015

Incluyen interesados, representación, relación electrónica, obligación de resolver, silencio, cómputo de plazos, actos, notificaciones, nulidad, procedimiento, ejecución, revisión de oficio y recursos.

Plazos incorporados expresamente:

- Subsanación: 10 días.
- Audiencia: entre 10 y 15 días.
- Información pública: mínimo 20 días.
- Tramitación simplificada: 30 días como regla.
- Alzada: 1 mes para interponer contra acto expreso y 3 meses para resolver.
- Reposición: 1 mes para interponer contra acto expreso y 1 mes para resolver.

### Temas 4 y 5 · Ley 40/2015

Diferencia competencia, delegación, avocación, encomienda, delegación de firma, suplencia, órganos colegiados, abstención, recusación, sede, portal, actuación automatizada, sello, CSV y archivo electrónico.

### Tema 6 · Protección de datos

Incluye principios, consentimiento de menores, derechos, bloqueo, responsable, encargado y Delegado de Protección de Datos.

## Test UC3M

La versión v0.34 añade **85 preguntas jurídicas manuales** para los temas 1 a 6 y regenera tres simulacros de 70 preguntas.

Las preguntas ya no se limitan a indicar cómo estudiar: preguntan artículos, plazos, órganos, efectos y diferencias entre figuras.

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
│       ├── ui-v29.js
│       ├── ui-v31.js
│       ├── ui-v32.js
│       ├── ui-v33.js
│       └── ui-v34.js
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

### v0.34.0 · 2026-07-10

- Profundizados manualmente los temas 1 a 6.
- Añadidas referencias por títulos, capítulos y artículos.
- Incorporados los plazos de mayor frecuencia de examen de la Ley 39/2015.
- Diferenciadas las técnicas de competencia y funcionamiento electrónico de la Ley 40/2015.
- Ampliado el tema de protección de datos con responsable, encargado y DPD.
- Añadidas **85 preguntas jurídicas manuales**.
- Regenerados tres simulacros de 70 preguntas.
- Actualizada la caché PWA a `opoweb-v38`.

### v0.33.0 · 2026-07-10

- Desarrollados los temas 15, 18 y 19.
- Añadidas 36 preguntas específicas de Estatutos y presupuesto.

### v0.32.0 · 2026-07-10

- Completado el tema 8 con el III Plan de Igualdad UC3M.
- Ampliado el tema 7 de transparencia.
- Añadidas 24 preguntas específicas.

### v0.31.0 · 2026-07-10

- Eliminado `mapa-temas.js` de la carga activa.
- Eliminados **Mapa de estudio**, **Esquema oficial** y **Tabla de repaso**.
- Añadido **Cuadro para test y supuesto práctico**.
- Completados LOSU, RD 822/2021, RD 534/2024 y contratación común.
