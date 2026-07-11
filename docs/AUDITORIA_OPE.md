# Auditoría global de OpoWeb · v0.69

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
| Funcionamiento e interfaz | 91 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 52 % |
| Arquitectura y pruebas | 64 % |
| **OpoWeb global** | **84 %** |

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

## La Puebla C2

- 19 de 19 temas con 30 preguntas específicas.
- 570 preguntas acumuladas.
- 20 supuestos prácticos.
- Tres simulacros de 50 + 5.
- Estimación 74 %.

Pendiente: revisión literal, soluciones desarrolladas, auditoría de dificultad y pruebas visuales.

## Carranque C2 · v0.69

### Resultado cuantitativo

- Temas 1–10 con 30 preguntas específicas.
- Eliminación de plantillas genéricas en la primera mitad del programa.
- Ocho supuestos prácticos, uno por cada tema práctico del 3 al 10.
- Pruebas unitaria e integrada real.
- Estimación global: 52 %.

### Reutilización controlada

Se reutiliza contenido común ya auditado para:

- Constitución y fuentes;
- Ley 39/2015;
- Ley 40/2015;
- revisión y recursos;
- responsabilidad patrimonial;
- municipio, padrón y competencias.

El filtro excluye referencias específicas a Diputación, OAPGT, Acuerdo Regulador, GroupWise, Base e Impress.

### Desarrollo específico

**Tema 8:** intervención administrativa local, policía, declaraciones responsables, licencias, subvenciones, gestión de servicios y actividad económica local.

**Tema 10:** potestad normativa, aprobación inicial, información pública, reclamaciones, publicación íntegra, entrada en vigor, control jurisdiccional y ordenanzas fiscales.

### Controles automáticos

Las pruebas comprueban:

- 30 preguntas en cada tema del 1 al 10;
- cuatro opciones y respuesta válida;
- justificación o fuente;
- ausencia de plantillas genéricas;
- ausencia de duplicados dentro de cada tema;
- ocho supuestos limitados a los temas 3–10;
- desarrollo temático específico de los temas 8 y 10.

### Lo que impide declarar Carranque al 100 %

1. Desarrollar los temas 11–20.
2. Crear los supuestos de los temas 11–20.
3. Generar simulacros oficiales de 80 + 5.
4. Auditar literalidad, dificultad y distractores.
5. Probar navegador, móvil, tablet y PWA.

## Arquitectura pendiente

1. Consolidar módulos históricos.
2. Separar definitivamente proceso, temario, preguntas, supuestos y simulacros.
3. Añadir pruebas de navegador y PWA sin conexión.
4. Verificar conservación del progreso guardado.
5. Automatizar las métricas de avance.
