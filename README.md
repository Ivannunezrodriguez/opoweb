# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo y Administrativo desde ordenador, tablet o móvil. El foco principal es Toledo, con la UC3M como convocatoria complementaria por su volumen de plazas.

## Convocatorias activas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Diputación Provincial de Toledo · Administrativo C1**: 2 plazas. Estado personal: pendiente de solicitud.
- **Universidad Carlos III de Madrid · Auxiliar Administrativo C2**: 34 plazas, 2 reservadas a discapacidad. Estado personal: pendiente de solicitud.

**Las Ventas con Peña Aguilera está retirada del selector y de la planificación activa.**

## Versión visible

La web muestra la **Versión OpoWeb v0.38.0** en la tarjeta lateral y en la vista de progreso.

La caché PWA actual es `opoweb-v42`. Si el móvil muestra una versión anterior, recarga la página o elimina la caché/datos de la web instalada.

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

## Auditoría del banco de test

La auditoría se ejecuta después de cargar todo el temario y valida:

- enunciado no vacío;
- cuatro opciones no vacías y diferentes;
- respuesta correcta existente;
- justificación obligatoria;
- eliminación de duplicados exactos;
- reparto visible de respuestas A, B, C y D;
- cobertura visible por tema.

Todos los temas mantienen un **mínimo operativo de 15 preguntas válidas**. El objetivo final continúa siendo **30–40 preguntas manuales por tema**.

## Refuerzo prioritario v0.38

Se han añadido **25 preguntas manuales nuevas**, cinco para cada uno de estos temas:

- Tema 7: transparencia, publicidad activa, límites, acceso parcial y audiencia.
- Tema 8: igualdad, discriminación indirecta, ejes del Plan y protocolo.
- Tema 15: Defensor, servicios, régimen económico y reforma estatutaria.
- Tema 18: principios, modificaciones y ejecución de ingresos.
- Tema 19: fases del gasto, documentos mixtos, pago y liquidación.

Estos cinco temas pasan del mínimo operativo a un **banco sólido de al menos 20 preguntas válidas**.

## Simulacros UC3M equilibrados

Los tres simulacros mantienen **70 preguntas** y se regeneran después del refuerzo:

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
├── ui-v34.js
├── ui-v35.js
├── ui-v36.js
├── ui-v37.js
└── ui-v38.js
```

## Cambios de versión

### v0.38.0 · 2026-07-10

- Añadidas **25 preguntas manuales de segundo nivel**.
- Temas 7, 8, 15, 18 y 19 elevados a 20 preguntas o más.
- Reauditado el banco completo después del refuerzo.
- Regenerados los simulacros equilibrados.
- Actualizada la caché PWA a `opoweb-v42`.

### v0.37.0 · 2026-07-10

- Auditado estructuralmente todo el banco UC3M.
- Eliminación automática de preguntas inválidas y duplicados exactos.
- Refuerzo manual hasta un mínimo operativo de 15 preguntas por tema.
- Añadida vista de cobertura y reparto de respuestas.
- Regenerados tres simulacros equilibrados de 70 preguntas.

### v0.36.0 · 2026-07-10

- Profundizados los temas 13, 14, 16, 17 y 20.
- Añadidas 60 preguntas manuales.

### v0.35.0 · 2026-07-10

- Profundizados los temas 9 a 12.
- Añadidas 60 preguntas manuales.

### v0.34.0 · 2026-07-10

- Profundizados los temas 1 a 6.
- Añadidas 85 preguntas jurídicas manuales.
