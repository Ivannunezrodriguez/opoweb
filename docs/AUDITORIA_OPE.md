# Auditoría global de OpoWeb · v0.67

Fecha de revisión: 10 de julio de 2026.

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
| UC3M C2 | 78 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 61 % |
| **OpoWeb global** | **80 %** |

## Diputación de Toledo C1

- 40 de 40 temas con al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros test de 50 + 5.
- 20 supuestos, 40 variantes y tres simulacros prácticos internos.
- Estimación 98 % por la brecha estatutaria del OAPGT y el cierre técnico pendiente.

## UC3M C2

- 20 de 20 temas con al menos 30 preguntas válidas.
- 600 preguntas acumuladas.
- Tres simulacros de 70 + 5.
- Estimación 78 % por normativa interna, presupuesto, matrícula, permanencia, evaluación, admisión y contratación pendientes.

## La Puebla C2 · v0.67

### Resultado cuantitativo

- 19 de 19 temas con 30 preguntas específicas.
- 570 preguntas acumuladas.
- Sustitución total de las preguntas genéricas de método.
- 20 supuestos prácticos vinculados al programa oficial.
- Tres simulacros de 50 preguntas + 5 reservas y 60 minutos.
- Cobertura de los diecinueve temas y ausencia de duplicados dentro de cada simulacro.

### Reutilización controlada

El banco procede de materias comunes ya auditadas en Diputación y se filtra para excluir contenido específico de la Diputación de Toledo, OAPGT, GroupWise, Base e Impress cuando no forma parte del programa de La Puebla.

Materias reutilizadas:

- Constitución;
- Leyes 39/2015 y 40/2015;
- régimen local;
- empleo público de Castilla-La Mancha;
- prevención, igualdad y protección de datos;
- obligaciones, gestión y recaudación tributaria;
- tributos locales;
- firma y certificados electrónicos;
- Windows, impresión, navegación, Writer, Calc, hardware y periféricos.

### Lo que impide declarar La Puebla al 100 %

1. Revisión literal artículo por artículo de los diecinueve temas.
2. Desarrollo completo de las soluciones de los veinte supuestos.
3. Auditoría final de dificultad, distractores y equilibrio temático.
4. Pruebas de navegador y validación visual.
5. Seguimiento de listas, tribunal y fecha de examen.

## Carranque

Pendiente desarrollar 20 temas, alcanzar 30–40 preguntas por tema, generar simulacros 80 + 5 y crear supuestos exclusivamente sobre temas 3–20.

## Arquitectura pendiente

1. Consolidar una única fuente de datos.
2. Separar proceso, temario, preguntas, supuestos y simulacros.
3. Eliminar capas históricas sin perder progreso.
4. Ampliar CI con pruebas de navegador.
5. Impedir reutilización fuera del programa oficial.
