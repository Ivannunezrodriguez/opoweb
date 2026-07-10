# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera se ha retirado del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.31.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v35`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

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

## Auditoría del temario UC3M

La versión v0.31.0 elimina la asignación de contenido por número de tema entre convocatorias y retira de la vista los bloques que el usuario no considera útiles: **Mapa de estudio**, **Esquema oficial** y **Tabla de repaso**.

Cada tema muestra ahora:

1. **Resumen orientado al aprobado**.
2. **Rigor normativo**.
3. **Desarrollo por títulos, capítulos y artículos**.
4. **Opo-Test: puntos calientes**.
5. **Retención activa**.
6. **Cuadro para test y supuesto práctico**.

### Estado UC3M

- Temas 1 a 6: base normativa común revisada.
- Tema 7: estructura correcta; falta incorporar la literalidad completa de la Ley 10/2019 y el procedimiento interno UC3M.
- Tema 8: estructura correcta; falta incorporar el III Plan de Igualdad y protocolos UC3M.
- Tema 9: corregido con Word 2019, Excel 2019, Drive, Docs, Sheets, Calendar y correo electrónico.
- Temas 10 a 12: TREBEP, RD 364/1995/incompatibilidades y PRL revisados.
- Temas 13 y 14: LOSU completada por títulos y artículos relevantes.
- Tema 15: pendiente de cargar los artículos literales de los Estatutos UC3M.
- Tema 16: RD 822/2021 completado; faltan plazos internos UC3M de matrícula, permanencia y evaluación.
- Tema 17: RD 534/2024 completado; faltan cupos, ponderaciones y calendario anual UC3M.
- Temas 18 y 19: pendiente de cargar presupuesto y bases de ejecución UC3M vigentes.
- Tema 20: LCSP desarrollada; falta la capa de delegaciones y reglas internas de contratación UC3M.

Los test de los temas 13, 14, 16, 17 y 20 se han regenerado con preguntas de contenido normativo. Los simulacros mantienen **70 preguntas**.

## Método de estudio

La vista **Normas** permite estudiar directamente por documento común: Constitución, Ley 39/2015, Ley 40/2015, Régimen Local, Hacienda Local, Contratos, Empleo Público, materias transversales e informática.

El desarrollo de cada tema conserva el título oficial y solo incluye los apartados exigidos por la convocatoria.

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
│       ├── ui-v29.js
│       └── ui-v31.js
├── data/
│   ├── oposiciones.js
│   ├── proceso.js
│   ├── uc3m.js
│   ├── formacion_usuario.json
│   └── normas/
│       ├── constitucion.js
│       ├── ley-39-2015.js
│       ├── ley-39-2015-procedimiento.js
│       ├── ley-40-2015.js
│       ├── regimen-local.js
│       ├── hacienda-local.js
│       ├── contratos-publicos.js
│       ├── empleo-publico.js
│       ├── transversales.js
│       └── informatica.js
└── docs/
    ├── PROMPTS_CHATS.md
    ├── LA_PUEBLA.md
    ├── CARRANQUE.md
    ├── DIPUTACION_ADMINISTRATIVO.md
    └── UC3M_AUX_ADMIN.md
```

## Cambios de versión

### v0.31.0 · 2026-07-10

- Eliminado `mapa-temas.js` de la carga activa para impedir mezclas entre convocatorias.
- Eliminados **Mapa de estudio**, **Esquema oficial** y **Tabla de repaso** de la vista del tema.
- Añadido **Cuadro para test y supuesto práctico**.
- Completados los temas 13 y 14 con LOSU por títulos y artículos.
- Completado el marco estatal del tema 16 con RD 822/2021.
- Completado el marco estatal del tema 17 con RD 534/2024.
- Ampliado el tema 20 de contratación pública.
- Regenerados los test de contenido de los temas revisados.
- Actualizada la caché PWA a `opoweb-v35`.

### v0.30.0 · 2026-07-10

- Corregida la mezcla de mapas por número entre convocatorias.
- Añadido `assets/js/uc3m-temario-v30.js` como auditoría específica.
- Reestructurados los temas 2 a 12 y 20.
- Tema 9 corregido con el bloque real de ofimática y Google Workspace.
- Sustituidos los test metodológicos UC3M por preguntas de contenido.

### v0.29.0 · 2026-07-10

- Retirada **Las Ventas con Peña Aguilera** de OpoWeb.
- Actualizado el plazo de UC3M: **09/07/2026–05/08/2026**.
- Añadida la fecha previsible del examen UC3M: **21/11/2026 a las 10:00**.
- Adaptados los simulacros UC3M a **70 preguntas**.
- Añadido enlace directo al proceso oficial UC3M.
