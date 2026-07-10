# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera está retirada del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.40.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v46`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

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

## Estado del temario UC3M

- Temas 1 a 6: revisados manualmente por artículos en v0.34.
- Tema 7: ampliado; pendiente la Ley 10/2019 consolidada con plazos literales.
- Tema 8: completado con LO 3/2007, III Plan de Igualdad 2025-2029 y protocolo UC3M.
- Temas 9 a 12: revisados en profundidad en v0.35.
- Temas 13 y 14: LOSU revisada en profundidad en v0.36.
- Tema 15: desarrollado por los cuatro bloques oficiales; pendientes artículos, mayorías y plazos literales del texto consolidado.
- Tema 16: RD 822/2021 revisado; pendientes matrícula, permanencia y evaluación internas UC3M.
- Tema 17: RD 534/2024 revisado; pendientes ponderaciones, cupos y calendario anual UC3M.
- Tema 18: estructura presupuestaria, modificaciones e ingresos desarrollados; faltan cifras y bases internas vigentes.
- Tema 19: fases de gasto, documentos contables, pagos y cierre desarrollados; faltan límites, delegaciones y fechas UC3M.
- Tema 20: LCSP revisada; falta la delegación y circuito interno UC3M.

## Banco de test · v0.40

La auditoría se ejecuta después de cargar todo el temario y valida:

- enunciado no vacío;
- cuatro opciones no vacías y diferentes;
- respuesta correcta existente;
- justificación obligatoria;
- eliminación de duplicados exactos;
- reparto de respuestas A, B, C y D;
- recuento por dificultad;
- cobertura por tema.

### Cobertura general

Los **20 temas oficiales mantienen al menos 20 preguntas válidas**.

### Temas prioritarios con 30 preguntas o más

La versión v0.40 añade **90 preguntas manuales y de supuesto breve** y eleva estos nueve bloques al objetivo 30+:

- Tema 2: Ley 39/2015 I.
- Tema 3: Ley 39/2015 II.
- Tema 7: transparencia.
- Tema 8: igualdad UC3M.
- Tema 9: Word, Excel y Google Workspace.
- Tema 10: TREBEP.
- Tema 15: Estatutos UC3M.
- Tema 18: presupuesto UC3M I.
- Tema 19: presupuesto UC3M II.

El refuerzo incluye supuestos sobre registro electrónico, copias, representación, silencio, prueba, audiencia, caducidad, acceso parcial, datos personales, discriminación, protocolos, fórmulas de Excel, permisos de Drive, situaciones administrativas, Defensor Universitario, modificaciones presupuestarias y fases RC-A-D-O-P.

Los once temas restantes mantienen un banco sólido de 20 preguntas o más. El objetivo final continúa siendo **30–40 preguntas manuales por tema**.

## Interfaz v0.40

La última capa elimina de la vista las tarjetas y distintivos heredados de auditorías anteriores. La pantalla de test muestra solo:

- el resumen actual de los nueve temas con 30+;
- el recuento vigente por tema;
- la dificultad baja, media y alta;
- el banco de preguntas seleccionado.

## Simulacros UC3M equilibrados

Los tres simulacros mantienen **70 preguntas** y se regeneran después de cada refuerzo:

- aparecen los 20 temas oficiales;
- 10 temas aportan 4 preguntas;
- 10 temas aportan 3 preguntas;
- no se repite una pregunta dentro del mismo simulacro;
- se conserva la penalización oficial de −1/3 por error.

## Baremo personal conservador

- **La Puebla**: DAM no parece sumar; sin experiencia pública C2 confirmada, 0 puntos de concurso.
- **Carranque**: DAM puede sumar 0,75 puntos si quedó acreditado; experiencia pública no confirmada, 0.
- **Diputación C1**: oposición libre; DAM permite acceso pero no da puntos.
- **UC3M C2**: inglés 0 salvo certificado oficial; experiencia equivalente 0; formación potencial hasta 5 puntos, pendiente de validación.

## Archivos principales de la versión

```text
assets/js/
├── uc3m-temario-v34.js
├── uc3m-temario-v35.js
├── uc3m-temario-v36.js
├── auditoria-test-v37.js
├── refuerzo-test-v38.js
├── refuerzo-test-v39.js
├── refuerzo-test-v40.js
├── correcciones-test-v40.js
├── ui-v37.js
├── ui-v38.js
├── ui-v39.js
└── ui-v40.js
```

## Cambios de versión

### v0.40.0 · 2026-07-10

- Añadidas **90 preguntas manuales y de supuesto breve**.
- Temas 2, 3, 7, 8, 9, 10, 15, 18 y 19 elevados a 30 preguntas o más.
- Corregida la literalidad del registro electrónico en día inhábil conforme al artículo 31.2.b de la Ley 39/2015.
- Reauditado el banco por validez, duplicados, respuesta correcta y dificultad.
- Regenerados tres simulacros equilibrados de 70 preguntas.
- Limpiadas las tarjetas y etiquetas antiguas de la interfaz.
- Actualizada la caché PWA a `opoweb-v46`.

### v0.39.0 · 2026-07-10

- Añadidas 75 preguntas manuales de aplicación.
- Los 20 temas alcanzan al menos 20 preguntas válidas.
- Añadido recuento por dificultad.

### v0.38.0 · 2026-07-10

- Añadidas 25 preguntas manuales de segundo nivel.
- Temas 7, 8, 15, 18 y 19 elevados a 20 preguntas o más.

### v0.37.0 · 2026-07-10

- Auditado estructuralmente todo el banco UC3M.
- Eliminadas preguntas inválidas y duplicados exactos.
- Refuerzo hasta un mínimo inicial de 15 preguntas por tema.

### v0.36.0 · 2026-07-10

- Profundizados los temas 13, 14, 16, 17 y 20.
- Añadidas 60 preguntas manuales.

### v0.35.0 · 2026-07-10

- Profundizados los temas 9 a 12.
- Añadidas 60 preguntas manuales.

### v0.34.0 · 2026-07-10

- Profundizados los temas 1 a 6.
- Añadidas 85 preguntas jurídicas manuales.
