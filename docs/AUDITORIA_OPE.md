# Auditoría global de OpoWeb · v0.65

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
| Funcionamiento e interfaz | 88 % |
| Diputación C1 | 98 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 55 % |
| **OpoWeb global** | **68 %** |

## Diputación de Toledo C1

### Estado verificado

- 2 plazas C1 por oposición libre.
- Primer ejercicio de 50 + 5 preguntas en 60 minutos.
- Segundo ejercicio práctico.
- 40 temas.
- Solicitudes del 6 al 31 de julio de 2026.

### Contenido v0.65

- 40 de 40 temas con al menos 30 preguntas específicas.
- 684 preguntas añadidas en la segunda vuelta.
- 1.269 preguntas manuales acumuladas.
- 20 supuestos, 40 variantes y tres simulacros prácticos internos.
- Tres simulacros test de 50 + 5 con cobertura de los 40 temas.

El tema 22 incorpora el Acuerdo Regulador aprobado en 2023, sus modificaciones de 2026 y el funcionamiento electrónico oficial del OAPGT. La literalidad de los Estatutos vigentes del OAPGT sigue registrada como brecha documental.

### Cobertura del tema 22

- ámbito funcional, territorial y temporal del Acuerdo;
- derechos individuales y colectivos;
- Comisión de Seguimiento;
- clasificación y titulación C1;
- contratación y jornada;
- modificaciones económicas de enero y febrero de 2026;
- titularidad y sede del OAPGT;
- registro electrónico único, Secretaría, disponibilidad, rechazo y recibo.

### Lo que impide declarar Diputación al 100 %

1. Estatutos oficiales vigentes del OAPGT no localizados en una publicación oficial accesible.
2. Auditoría transversal completa de vigencia y literalidad.
3. Pruebas de navegador y validación visual.
4. Consolidación de las capas históricas de JavaScript.
5. Revisión final de supuestos y equilibrio de simulacros.

## La Puebla

Pendiente completar 19 temas, sustituir plantillas, alcanzar 30–40 preguntas por tema y resolver al menos 20 supuestos.

## Carranque

Pendiente desarrollar 20 temas, alcanzar 30–40 preguntas por tema y crear supuestos exclusivamente sobre temas 3–20.

## UC3M

20 temas con banco real, todos con al menos 20 preguntas y nueve con 30 o más. Pendiente normativa interna y elevar once temas a 30–40 preguntas.

## Arquitectura pendiente

1. Consolidar una única fuente de datos.
2. Separar proceso, temario, preguntas, supuestos y simulacros.
3. Eliminar capas históricas sin perder progreso.
4. Ampliar CI con pruebas de navegador.
5. Impedir reutilización fuera del programa oficial.
