# Auditoría global de OpoWeb · v0.41

Fecha de revisión: 10 de julio de 2026.

## Resultado general

Convocatorias activas después de la depuración:

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

Las Ventas con Peña Aguilera se elimina del selector. Existía un error de identificador: la capa de retirada filtraba `ventas-aux-admin-2026`, pero la OPE cargada utilizaba `ventas-pena-aguilera-aux-admin-2026`.

## Resumen de madurez

| OPE | Estado OpoWeb | Temas | Banco actual | Cambio principal |
|---|---|---:|---:|---|
| La Puebla | Revisión necesaria | 19 | 228 preguntas | Sustituir test genérico y completar artículos |
| Carranque | Revisión prioritaria | 20 | 240 preguntas | Desarrollar contenido real y simulacros de 80 |
| Diputación C1 | Revisión prioritaria | 40 | 480 preguntas | Desarrollar 40 temas y específicos provinciales |
| UC3M | Avance alto | 20 | Banco auditado v0.40 | Cerrar literalidad interna y elevar 11 temas a 30+ |

## 1. La Puebla de Montalbán

### Correcto

- Cuatro plazas y bolsa.
- Concurso-oposición.
- Primer ejercicio: 50 preguntas más 5 de reserva, 60 minutos.
- Corrección: +0,20 acierto, −0,05 error y 0 en blanco.
- Segundo ejercicio práctico con formato que puede determinar el Tribunal.
- Programa de 19 temas cargado.

### Deficiencias

- Las 12 preguntas de cada tema preguntan cómo debe estudiarse el tema, no su contenido jurídico o informático.
- Los desarrollos son útiles como base, pero todavía demasiado breves para estudiar sin consultar la norma.
- Solo hay 10 supuestos y sus soluciones son pautas genéricas.
- No existe una auditoría real de cobertura artículo por artículo de los 19 temas.

### Cambios necesarios

1. Sustituir las 228 preguntas genéricas por 30–40 preguntas reales por tema.
2. Completar definiciones, artículos, plazos, órganos, excepciones y efectos.
3. Reforzar especialmente tributos locales, recaudación, administración electrónica y ofimática.
4. Crear al menos 20 supuestos con solución completa.
5. Mantener seguimiento de listas, tribunal y fecha de examen.

## 2. Carranque

### Correcto

- Una plaza y bolsa.
- Concurso-oposición.
- Programa oficial de 20 temas cargado.
- Primer ejercicio de 80 preguntas más 5 de reserva.
- Segundo ejercicio práctico sobre los temas 3 a 20.
- DAM puede aportar 0,75 puntos si fue acreditado dentro de plazo.

### Deficiencias

- Los 20 temas son fichas de plantilla y no desarrollos normativos completos.
- Las 240 preguntas son preguntas genéricas de método de estudio.
- Los simulacros actuales tienen 50 preguntas, pero el examen exige 80 más 5 de reserva.
- Los supuestos no están restringidos ni trazados expresamente a los temas 3 a 20.
- Las soluciones no desarrollan norma, artículo, trámite, plazo y consecuencia.

### Cambios necesarios

1. Reproducir literalmente los 20 títulos oficiales.
2. Desarrollar cada tema con estructura normativa completa.
3. Crear 30–40 preguntas reales por tema.
4. Regenerar simulacros de 80 preguntas y añadir un bloque de 5 reservas.
5. Rehacer los supuestos exclusivamente sobre los temas 3 a 20.
6. Verificar cualquier nueva baremación, lista o convocatoria directamente en sede.

## 3. Diputación Provincial de Toledo · Administrativo C1

### Corrección urgente realizada

El estado de la web estaba desactualizado. El plazo ya está abierto:

- Publicación indicada por la Diputación en BOE: 4 de julio de 2026.
- Solicitudes: del 6 al 31 de julio de 2026.
- Oposición libre, sin fase de concurso.
- La falta de justificante de tasa determina exclusión no subsanable.

### Correcto

- Dos plazas C1.
- Primer ejercicio: 50 preguntas más 5 reservas, 60 minutos.
- Segundo ejercicio práctico.
- Programa oficial de 40 temas cargado.
- DAM permite participar, pero no añade puntos.

### Deficiencias

- Los 40 temas utilizan una plantilla común con muy poco contenido específico.
- Las 480 preguntas son genéricas y no sirven como banco real de examen.
- Los 20 supuestos tienen enunciados útiles, pero las soluciones son fórmulas generales.
- Faltan desarrollos específicos imprescindibles:
  - organización y funcionamiento de la Diputación;
  - Acuerdo Regulador de empleados públicos;
  - OAPGT y sus Estatutos;
  - bases de ejecución presupuestaria;
  - tributación y recaudación local;
  - Windows 11 Pro;
  - Microsoft Edge;
  - Micro Focus GroupWise 24;
  - LibreOffice 24 Writer, Calc, Base e Impress.

### Cambios necesarios

1. Prioridad inmediata: presentar solicitud y conservar justificantes.
2. Desarrollar los 40 temas artículo por artículo.
3. Crear documentos madre reutilizables para los bloques comunes.
4. Crear módulos propios para Diputación, OAPGT, Acuerdo Regulador y ofimática específica.
5. Sustituir el banco genérico por 30–40 preguntas reales por tema.
6. Redactar soluciones completas para los 20 supuestos.

## 4. UC3M

### Correcto

- 34 plazas, 2 reservadas a discapacidad.
- Solicitudes del 9 de julio al 5 de agosto de 2026.
- Examen previsto el 21 de noviembre de 2026 a las 10:00, pendiente de confirmación definitiva.
- 70 preguntas más 5 reservas, 60 minutos.
- Penalización de un tercio por error.
- Los 20 temas están desarrollados como mínimo a nivel de marco estatal.
- Los 20 temas tienen al menos 20 preguntas.
- Nueve temas alcanzan 30 preguntas o más.
- Tres simulacros equilibrados de 70 preguntas.

### Deficiencias pendientes

- Tema 7: Ley 10/2019 consolidada y plazos exactos.
- Tema 15: Estatutos UC3M consolidados, artículos, mayorías y plazos.
- Tema 16: matrícula, permanencia y evaluación UC3M.
- Tema 17: ponderaciones, cupos y calendario anual.
- Temas 18 y 19: presupuesto y bases de ejecución vigentes.
- Tema 20: delegaciones y circuito interno de contratación.
- Once temas siguen en 20 preguntas y deben subir a 30–40.

### Cambios necesarios

1. Presentar la solicitud y acreditar pago o exención dentro del plazo.
2. Incorporar los documentos internos oficiales.
3. Sustituir contenido general por literalidad UC3M cuando exista documento vigente.
4. Elevar los once temas restantes a 30 preguntas o más.

## Cambios técnicos globales

### Realizados en v0.41

- Eliminación efectiva de Las Ventas con Peña Aguilera del selector.
- Actualización del proceso de Diputación a plazo abierto.
- Auditoría visible por OPE en `Proceso y enlaces`.
- Resumen global de madurez en `Progreso`.
- Botón `Volver al listado` fijado mediante posición sticky para permanecer visible al desplazarse.
- Nueva caché PWA `opoweb-v47`.

### Pendientes de arquitectura

1. Consolidar las capas `v30` a `v41` en menos archivos para evitar envoltorios acumulados.
2. Separar datos oficiales, contenido de estudio, preguntas y estado del proceso.
3. Añadir pruebas automáticas para:
   - número de temas;
   - títulos literales;
   - número y formato de ejercicios;
   - puntuación y penalización;
   - ausencia de OPE inactivas;
   - preguntas duplicadas o inválidas;
   - simulacros con tamaño oficial.
4. Añadir fecha de última verificación oficial en cada convocatoria.
