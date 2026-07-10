# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Solicitudes abiertas del 6 al 31 de julio de 2026; estado personal pendiente.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Solicitudes abiertas del 9 de julio al 5 de agosto de 2026.

**Las Ventas con Peña Aguilera está retirada del selector y de la planificación activa.** En v0.41 se corrigió el identificador que impedía retirarla completamente.

## Versión visible

La web muestra la **Versión OpoWeb v0.41.0**. La caché PWA actual es `opoweb-v48`.

## Auditoría global v0.41

| OPE | Estado de desarrollo | Temas | Situación principal |
|---|---|---:|---|
| La Puebla | Revisión necesaria | 19 | Programa y formato cargados; test y supuestos todavía genéricos |
| Carranque | Revisión prioritaria | 20 | Falta contenido normativo real y simulacros de 80 + 5 |
| Diputación C1 | Revisión prioritaria | 40 | Plazo abierto; falta desarrollar los 40 temas y los específicos provinciales |
| UC3M | Avance alto | 20 | Banco auditado; falta cerrar literalidad interna UC3M |

La auditoría de cada convocatoria aparece en **Proceso y enlaces**. El resumen comparado aparece en **Progreso**. El informe completo está en [`docs/AUDITORIA_OPE.md`](docs/AUDITORIA_OPE.md).

## Cambios necesarios por convocatoria

### La Puebla

1. Sustituir las 228 preguntas genéricas por preguntas jurídicas e informáticas reales.
2. Elevar el banco a 30–40 preguntas por tema.
3. Completar artículos, plazos, órganos, excepciones y aplicación municipal.
4. Ampliar de 10 a al menos 20 supuestos con solución completa.
5. Seguir listas de admitidos, tribunal y fecha de examen.

### Carranque

1. Desarrollar íntegramente los 20 temas oficiales.
2. Sustituir las 240 preguntas de método de estudio por preguntas reales.
3. Cambiar los simulacros de 50 a **80 preguntas + 5 reservas**.
4. Limitar y trazar los supuestos prácticos a los temas 3 a 20.
5. Redactar soluciones con norma, artículo, trámite, plazo y consecuencia.

### Diputación de Toledo C1

1. Prioridad inmediata: presentar la solicitud antes del **31 de julio de 2026** y conservar solicitud registrada y justificante de tasa.
2. Desarrollar los 40 temas artículo por artículo.
3. Crear módulos específicos de Diputación, OAPGT, Acuerdo Regulador y bases de ejecución.
4. Desarrollar Windows 11, Edge, GroupWise 24 y LibreOffice 24 Writer, Calc, Base e Impress.
5. Sustituir las 480 preguntas genéricas por bancos reales.
6. Completar las soluciones de los 20 supuestos.

### UC3M

1. Presentar la solicitud antes del **5 de agosto de 2026** y acreditar pago o exención dentro de plazo.
2. Cerrar Ley 10/2019, Estatutos, presupuesto y bases de ejecución.
3. Incorporar matrícula, permanencia, evaluación, admisión y contratación interna UC3M.
4. Elevar los once temas que continúan en 20 preguntas hasta 30–40.
5. Sustituir preguntas generales de temas internos por literalidad oficial vigente.

## Botón «Volver al listado»

El botón de detalle de tema usa ahora `position: sticky` y permanece visible al desplazarse, tanto en escritorio como en móvil. Se sitúa debajo de la cabecera fija y conserva foco visible para navegación por teclado.

## Método de estudio

Cada tema debe conservar:

1. **Resumen orientado al aprobado**.
2. **Rigor normativo**.
3. **Desarrollo por títulos, capítulos y artículos**.
4. **Opo-Test: puntos calientes**.
5. **Retención activa**.
6. **Cuadro para test y supuesto práctico**.

## UC3M · estado específico

- Los 20 temas tienen al menos 20 preguntas válidas.
- Nueve temas alcanzan 30 preguntas o más: 2, 3, 7, 8, 9, 10, 15, 18 y 19.
- Tres simulacros equilibrados de 70 preguntas representan los 20 temas.
- La auditoría valida cuatro opciones distintas, respuesta correcta existente, justificación, duplicados y dificultad.

Pendientes de literalidad:

- tema 7: Ley 10/2019 y plazos;
- tema 15: Estatutos consolidados;
- tema 16: normativa académica interna;
- tema 17: admisión anual;
- temas 18 y 19: presupuesto y bases de ejecución;
- tema 20: delegaciones y circuito interno de contratación.

## Baremo personal conservador

- **La Puebla**: DAM no parece sumar; experiencia pública C2 confirmada = 0.
- **Carranque**: DAM puede sumar 0,75 si se acreditó en plazo; experiencia pública confirmada = 0.
- **Diputación C1**: oposición libre; DAM permite acceso, pero no da puntos.
- **UC3M C2**: inglés 0 salvo certificado admitido; experiencia equivalente 0; formación potencial hasta 5, pendiente de validación.

## Archivos principales recientes

```text
opoweb/
├── data/
│   ├── oposiciones.js
│   ├── proceso.js
│   ├── uc3m.js
│   └── ope-audit-v41.js
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── auditoria-test-v37.js
│       ├── refuerzo-test-v38.js
│       ├── refuerzo-test-v39.js
│       ├── refuerzo-test-v40.js
│       ├── correcciones-test-v40.js
│       ├── ui-v40.js
│       └── ui-v41.js
└── docs/
    └── AUDITORIA_OPE.md
```

## Cambios de versión

### v0.41.0 · 2026-07-10

- Auditadas las cuatro OPE activas.
- Corregida la retirada de Las Ventas con Peña Aguilera.
- Actualizado el plazo de Diputación C1 a 06/07/2026–31/07/2026.
- Añadida auditoría visible por convocatoria y resumen global.
- Fijado el botón «Volver al listado» durante el desplazamiento.
- Añadido informe `docs/AUDITORIA_OPE.md`.
- Actualizada la caché PWA a `opoweb-v48`.

### v0.40.0 · 2026-07-10

- Añadidas 90 preguntas manuales y de supuesto breve.
- Nueve temas UC3M elevados a 30 preguntas o más.
- Reauditado el banco por validez, duplicados, respuesta y dificultad.

### v0.39.0 · 2026-07-10

- Añadidas 75 preguntas manuales.
- Los 20 temas UC3M alcanzaron al menos 20 preguntas válidas.

### v0.38.0 · 2026-07-10

- Añadidas 25 preguntas de segundo nivel a temas internos UC3M.

### v0.37.0 · 2026-07-10

- Auditado estructuralmente el banco UC3M y eliminados duplicados exactos.
