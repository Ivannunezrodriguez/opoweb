# Auditoría global de OpoWeb · v0.68

Fecha de revisión: 11 de julio de 2026.

## Alcance

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

Las Ventas con Peña Aguilera está retirada del selector. No se añadirán nuevas convocatorias hasta cerrar estas cuatro.

## Avance aproximado

| Área | Avance |
|---|---:|
| Funcionamiento e interfaz | 90 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 61 % |
| **OpoWeb global** | **81 %** |

## Diputación de Toledo C1

- 40 de 40 temas con al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros test de 50 + 5.
- 20 supuestos, 40 variantes y tres simulacros prácticos internos.
- Estimación 98 % por la brecha estatutaria del OAPGT y el cierre técnico pendiente.

## UC3M C2

- 20 de 20 temas con al menos 30 preguntas válidas.
- 615 preguntas acumuladas.
- Tres simulacros de 70 + 5.
- Tema 15 cerrado con el texto refundido de los Estatutos.
- Capa estatutaria del tema 20 y normativa institucional electrónica incorporadas.
- Estimación 84 %.

Pendiente: presupuesto y bases de ejecución, matrícula, permanencia, evaluación, reglas anuales de admisión, extracción literal de delegaciones y auditoría final.

## La Puebla C2 · v0.68

### Resultado cuantitativo

- 19 de 19 temas con 30 preguntas específicas.
- 570 preguntas acumuladas.
- Eliminación de las preguntas genéricas de método.
- 20 supuestos prácticos vinculados al programa.
- Tres simulacros de 50 preguntas + 5 reservas y 60 minutos.
- Cobertura de los diecinueve temas y ausencia de duplicados internos.

### Reutilización controlada

El banco procede de materias comunes auditadas en Diputación. La correspondencia se define tema por tema y excluye contenido ajeno a La Puebla.

Materias reutilizadas:

- Constitución y fuentes;
- Leyes 39/2015 y 40/2015;
- régimen local;
- empleo público de Castilla-La Mancha;
- prevención, igualdad y protección de datos;
- obligaciones, gestión y recaudación tributaria;
- tributos locales;
- firma y certificados electrónicos;
- Windows, navegación, impresión, Writer, Calc, hardware y periféricos.

### Exclusiones

- OAPGT y Acuerdo Regulador de Diputación;
- referencias específicas a la Diputación Provincial de Toledo;
- GroupWise;
- LibreOffice Base;
- LibreOffice Impress.

### Controles automáticos

Las pruebas comprueban:

- 570 preguntas totales;
- 19 temas con exactamente 30 preguntas;
- cuatro opciones y respuesta válida;
- justificación o fuente;
- ausencia de plantillas de método;
- 20 supuestos con rúbrica;
- tres simulacros 50 + 5;
- 19 temas representados en cada simulacro;
- ausencia de preguntas duplicadas dentro de cada simulacro.

### Lo que impide declarar La Puebla al 100 %

1. Revisión literal artículo por artículo.
2. Desarrollo completo de las soluciones de los supuestos.
3. Auditoría final de dificultad y distractores.
4. Pruebas visuales de navegador, móvil y tablet.
5. Seguimiento de listas, tribunal y fecha de examen.

## Carranque

Permanece pendiente desarrollar e integrar los 20 temas, alcanzar 30 preguntas por tema, crear supuestos exclusivamente sobre temas 3–20 y generar simulacros 80 + 5.

## Arquitectura pendiente

1. Consolidar módulos históricos.
2. Separar definitivamente proceso, temario, preguntas, supuestos y simulacros.
3. Añadir pruebas de navegador y PWA sin conexión.
4. Verificar conservación del progreso guardado.
5. Automatizar las métricas de avance.
