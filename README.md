# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera se ha retirado del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.30.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v34`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

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

La versión v0.30.0 corrige un fallo estructural: los mapas se aplicaban por número de tema sin distinguir convocatoria. Eso podía mostrar, por ejemplo, protección de datos dentro del tema 9 de ofimática UC3M.

Ahora:

- Cada uno de los **20 temas UC3M** tiene un mapa propio vinculado a su enunciado.
- Los temas 2, 3, 4, 5, 6, 9, 10, 11, 12 y 20 se han reestructurado por normas y bloques correctos.
- El tema 9 incluye Word 2019, Excel 2019, Drive, Docs, Sheets, Calendar y correo electrónico.
- Los test UC3M ya preguntan contenido del tema, no solo metodología de estudio.
- Los simulacros UC3M mantienen 70 preguntas.
- Los temas 7, 8 y 13 a 20 muestran su estado de auditoría. Los documentos propios UC3M todavía deben completarse con literalidad oficial antes de considerarlos cerrados.

## Método de estudio

Cada tema mantiene esta estructura:

1. **Resumen orientado al aprobado**.
2. **Rigor normativo**.
3. **Documento madre reutilizable**.
4. **Desarrollo tipo academia**.
5. **Opo-Test: puntos calientes**.
6. **Retención activa**.
7. **Tabla comparativa**.
8. **Plan de estudio y repaso espaciado**.

La vista **Normas** permite estudiar directamente por documento común: Constitución, Ley 39/2015, Ley 40/2015, Régimen Local, Hacienda Local, Contratos, Empleo Público, materias transversales e informática.

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
│       ├── mapa-temas.js
│       ├── uc3m-temario-v30.js
│       └── ui-v29.js
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

### v0.30.0 · 2026-07-10

- Corregida la mezcla de mapas por número entre convocatorias.
- Añadido `assets/js/uc3m-temario-v30.js` como auditoría específica final.
- Asignado un mapa correcto a los 20 temas UC3M.
- Reestructurados los temas 2 a 12 y 20.
- Tema 9 corregido con el bloque real de ofimática y Google Workspace.
- Sustituidos los test metodológicos UC3M por preguntas de contenido.
- Identificados de forma visible los temas específicos pendientes de documento oficial.
- Actualizada la versión visible y la caché PWA a `opoweb-v34`.

### v0.29.0 · 2026-07-10

- Retirada **Las Ventas con Peña Aguilera** de OpoWeb.
- Actualizado el plazo de UC3M: **09/07/2026–05/08/2026**.
- Añadida la fecha previsible del examen UC3M: **21/11/2026 a las 10:00**.
- Adaptados los simulacros UC3M a **70 preguntas**.
- Añadido enlace directo al proceso oficial UC3M.

### v0.28.0

- Añadida biblioteca normativa modular y vista **Normas**.
- Incorporados motores de temario, auditoría y mapeo de temas comunes.

### v0.16.0

- Añadida la convocatoria UC3M C2 con sus 20 temas oficiales.

### v0.12.0

- Añadida Diputación Provincial de Toledo · Administrativo C1.
