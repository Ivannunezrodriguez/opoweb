# Auditoría global de OpoWeb · v0.70

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
| Funcionamiento e interfaz | 92 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 74 % |
| Carranque C2 | 79 % |
| Arquitectura y pruebas | 68 % |
| **OpoWeb global** | **87 %** |

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

## Carranque C2 · v0.70

### Resultado cuantitativo

- 20 de 20 temas con al menos 30 preguntas específicas.
- 600 preguntas válidas.
- Eliminación de las plantillas genéricas en todo el programa.
- 18 supuestos prácticos, uno por cada tema práctico del 3 al 20.
- Tres simulacros de 80 preguntas + 5 reservas y 90 minutos.
- Estimación global: 79 %.

### Reutilización controlada

Se reutiliza contenido común auditado para Constitución, procedimiento, empleo público, contratación, registro, órganos locales, hacienda y presupuesto. Los temas con contenido más específico se han desarrollado con bancos propios.

El filtro excluye referencias a Diputación, OAPGT, Acuerdo Regulador, GroupWise, Base, Impress y normativa universitaria.

### Desarrollo específico

- **Tema 8:** intervención administrativa, licencias, fomento y servicios públicos.
- **Tema 10:** ordenanzas y reglamentos locales.
- **Tema 12:** bienes demaniales, patrimoniales y comunales; inventario, protección y uso.
- **Tema 18:** estructura económica y por programas del presupuesto local.
- **Tema 19:** liquidación, resultado presupuestario, remanente, estabilidad y regla de gasto.
- **Tema 20:** administración electrónica, factura electrónica, registro contable y morosidad.

### Controles automáticos

Las pruebas comprueban:

- 600 preguntas totales;
- 20 temas con 30 preguntas;
- cuatro opciones y respuesta válida;
- justificación o fuente;
- ausencia de plantillas genéricas y duplicados internos;
- 18 supuestos numerados del tema 3 al 20;
- tres simulacros 80 + 5;
- presencia de los veinte temas en cada simulacro;
- matriz de integración independiente para cada tema.

### Lo que impide declarar Carranque al 100 %

1. Desarrollar las soluciones completas de los 18 supuestos.
2. Revisar literalmente artículos, plazos y órganos.
3. Auditar dificultad y calidad de distractores.
4. Probar navegador, móvil, tablet y PWA sin conexión.
5. Seguir listas, tribunal y fecha de examen.

## Arquitectura pendiente

1. Consolidar módulos históricos.
2. Separar definitivamente proceso, temario, preguntas, supuestos y simulacros.
3. Añadir pruebas de navegador y PWA sin conexión.
4. Verificar conservación del progreso guardado.
5. Automatizar las métricas de avance.
