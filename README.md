# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera se ha retirado del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.32.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v36`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

## UC3M · datos actualizados

- Plazo de solicitud: **del 9 de julio al 5 de agosto de 2026**, ambos inclusive.
- Solicitud: exclusivamente telemática desde el proceso oficial de empleo PTGAS de la UC3M.
- Tasa general: **13,83 €**.
- Sistema: concurso-oposición.
- Oposición: ejercicio único tipo test de **70 preguntas + 5 de reserva**, 60 minutos.
- Corrección: +1 acierto, −1/3 error, blanco 0.
- Fecha previsible del ejercicio: **sábado 21 de noviembre de 2026 a las 10:00**.
- Concurso: inglés hasta 3 puntos, experiencia hasta 22 y formación hasta 5.
- Tras superar el test: 10 días hábiles para aportar los méritos.
- Se formará lista de espera para personal funcionario interino.

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

- Temas 1 a 6: base normativa común revisada.
- Tema 7: ampliado con publicidad activa, derecho de acceso y aplicación UC3M. Sigue pendiente cargar la Ley 10/2019 consolidada artículo por artículo y sus plazos literales.
- Tema 8: completado con LO 3/2007, III Plan de Igualdad UC3M 2025-2029 y protocolo contra el acoso y ciberacoso.
- Tema 9: Word 2019, Excel 2019, Drive, Docs, Sheets, Calendar y correo electrónico.
- Temas 10 a 12: TREBEP, RD 364/1995/incompatibilidades y PRL revisados.
- Temas 13 y 14: LOSU desarrollada por títulos y artículos relevantes.
- Tema 15: pendiente de cargar los artículos literales de los Estatutos UC3M.
- Tema 16: RD 822/2021 completado; faltan plazos internos UC3M de matrícula, permanencia y evaluación.
- Tema 17: RD 534/2024 completado; faltan cupos, ponderaciones y calendario anual UC3M.
- Temas 18 y 19: pendiente de cargar presupuesto y bases de ejecución UC3M vigentes.
- Tema 20: LCSP desarrollada; falta la capa de delegaciones y reglas internas de contratación UC3M.

## Tema 8 · datos incorporados

- III Plan de Igualdad UC3M: **2025-2029**.
- Entrada en vigor: **1 de febrero de 2025**.
- **6 ejes estratégicos**.
- **138 medidas**.
- Comisión de Seguimiento: **8 representantes de la Universidad + 8 de las personas trabajadoras**, con composición equilibrada.
- Indicadores de seguimiento, proceso, resultado e impacto.
- Reportes semestrales en octubre y febrero hasta febrero de 2029.
- Protocolo aplicable a alumnado, PDI, PTGAS y personas externas que trabajan en la UC3M.
- Doble vertiente: prevención y actuación.

## Baremo personal conservador

- **La Puebla**: DAM no parece sumar; sin experiencia pública C2 confirmada, 0 puntos de concurso.
- **Carranque**: DAM puede sumar 0,75 puntos si quedó acreditado; experiencia administrativa pública no confirmada, 0.
- **Diputación C1**: oposición libre, sin baremo; DAM permite el acceso pero no da puntos.
- **UC3M C2**: inglés 0 salvo certificado oficial B2/C1; experiencia pública equivalente no confirmada, 0; formación potencial hasta 5 puntos, pendiente de revisar certificados, entidad, horas, fecha y relación con las funciones.

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
│       ├── ui-v29.js
│       ├── ui-v31.js
│       └── ui-v32.js
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

### v0.32.0 · 2026-07-10

- Completado el tema 8 con el III Plan de Igualdad UC3M 2025-2029.
- Incorporados los seis ejes, las 138 medidas, la Comisión de Seguimiento, indicadores y reportes.
- Incorporado el protocolo UC3M frente al acoso y ciberacoso.
- Ampliado el tema 7 de transparencia sin inventar plazos no verificados.
- Añadidas 24 preguntas específicas de transparencia e igualdad.
- Añadidos enlaces oficiales del Plan de Igualdad y del protocolo.
- Actualizada la caché PWA a `opoweb-v36`.

### v0.31.0 · 2026-07-10

- Eliminado `mapa-temas.js` de la carga activa.
- Eliminados **Mapa de estudio**, **Esquema oficial** y **Tabla de repaso**.
- Añadido **Cuadro para test y supuesto práctico**.
- Completados LOSU, RD 822/2021, RD 534/2024 y contratación común.

### v0.30.0 · 2026-07-10

- Corregida la mezcla de mapas por número entre convocatorias.
- Reestructurados los temas 2 a 12 y 20.
- Tema 9 corregido con el bloque real de ofimática y Google Workspace.
- Sustituidos los test metodológicos UC3M por preguntas de contenido.
