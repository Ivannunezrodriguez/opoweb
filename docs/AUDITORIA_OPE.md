# Auditoría global de OpoWeb · v0.67

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
| Funcionamiento e interfaz | 89 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 58 % |
| **OpoWeb global** | **75 %** |

## Diputación de Toledo C1

- 40 de 40 temas con al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros test de 50 + 5.
- 20 supuestos, 40 variantes y tres simulacros prácticos internos.
- Estimación 98 % por la brecha estatutaria del OAPGT y el cierre técnico pendiente.

## UC3M C2 · v0.67

### Resultado cuantitativo

- 20 de 20 temas con al menos 30 preguntas válidas.
- 615 preguntas acumuladas.
- Tres simulacros de 70 preguntas + 5 reservas.
- Cobertura de los veinte temas y ausencia de duplicados dentro de cada simulacro.

### Documentación institucional incorporada

La página oficial `Normativa` de la UC3M se ha utilizado como índice de fuentes. Se han integrado:

1. Decreto 1/2003 de Estatutos.
2. Decreto 95/2009 de modificación.
3. Texto refundido de los Estatutos.
4. Página oficial de órganos universitarios.
5. Delegaciones de competencia y delegaciones de firma publicadas.
6. Política de Gestión de Documentos Electrónicos de 2024.
7. Política de Seguridad de Sistemas de Información de 2025.
8. Reglamento de Administración Electrónica modificado en 2025.
9. Normativa TIC de 2023.
10. Acuerdo de creación del Boletín Oficial Electrónico.

### Tema 15

Estado: **capa estatutaria cerrada**.

Contenido verificado:

- Defensor Universitario, artículos 127 a 132;
- servicios universitarios, artículos 157 a 160;
- patrimonio y régimen presupuestario, artículos 166 a 174;
- contratación estatutaria, artículos 175 a 177;
- reforma de Estatutos, artículos 178 a 180.

Puntos incorporados:

- elección del Defensor por mitad más uno del Claustro;
- mandato de tres años y una sola reelección;
- creación y supresión de servicios por el Consejo de Gobierno a propuesta del Rector;
- presupuesto anual, único, público y equilibrado;
- anteproyecto del Gerente, presentación del Rector, aprobación del Consejo de Gobierno y remisión al Consejo Social;
- Rector como órgano de contratación;
- reforma por mayoría absoluta del Claustro.

### Tema 20

Estado: **capa estatutaria UC3M incorporada; delegación interna parcial**.

Se ha añadido:

- Rector como órgano de contratación;
- mesa nombrada por el órgano de contratación;
- presencia mínima de un representante de departamentos, centros o servicios afectados;
- audiencia a representantes de trabajadores en determinados servicios con sucesión de empresa;
- acuerdo preceptivo del Consejo Social para inversiones de duración superior a un año que comprometan fondos futuros;
- referencia a la resolución de 31 de mayo de 2022 sobre delegaciones en contratación y gasto.

No se han inventado importes, destinatarios o límites de la delegación: quedan pendientes de extracción literal del documento original.

### Administración electrónica

La capa general de la Ley 40/2015 estaba desarrollada. En v0.67 se añade el inventario oficial de normas UC3M para relacionar sede, documento electrónico, seguridad, gestión documental, TIC y Boletín Oficial Electrónico con su normativa institucional.

### Pendientes que impiden declarar UC3M al 100 %

1. Presupuesto vigente y bases de ejecución.
2. Normativa propia de matrícula, permanencia y evaluación.
3. Reglas anuales de admisión UC3M.
4. Extracción literal completa de las delegaciones de contratación y gasto.
5. Auditoría transversal final de literalidad y vigencia.
6. Pruebas de navegador, móvil y regresión.

La sección general de gestión económico-financiera localizada en el portal solo muestra el Plan Antifraude. No acredita por sí sola el presupuesto vigente ni sus bases.

## La Puebla

Pendiente completar 19 temas, sustituir plantillas, alcanzar 30–40 preguntas por tema y resolver al menos 20 supuestos.

## Carranque

Pendiente desarrollar 20 temas, alcanzar 30–40 preguntas por tema y crear supuestos exclusivamente sobre temas 3–20.

## Arquitectura pendiente

1. Consolidar una única fuente de datos.
2. Separar proceso, temario, preguntas, supuestos y simulacros.
3. Eliminar capas históricas sin perder progreso.
4. Ampliar CI con pruebas de navegador y una prueba específica de UC3M v0.67.
5. Impedir reutilización fuera del programa oficial.