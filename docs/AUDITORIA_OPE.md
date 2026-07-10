# Auditoría global de OpoWeb · v0.64

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
| Funcionamiento e interfaz | 87 % |
| Diputación C1 | 96 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 53 % |
| **OpoWeb global** | **67 %** |

## Diputación de Toledo C1

### Estado verificado

- 2 plazas C1 por oposición libre.
- Primer ejercicio de 50 + 5 preguntas en 60 minutos.
- Segundo ejercicio práctico.
- 40 temas.
- Solicitudes del 6 al 31 de julio de 2026.

### Contenido

- 39 de 40 temas desarrollados y auditables.
- Tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT.
- 585 preguntas manuales de primera vuelta.
- 652 preguntas añadidas en la segunda vuelta.
- 1.237 preguntas manuales acumuladas.
- 20 supuestos, 40 variantes y tres simulacros prácticos internos.
- Tres simulacros test de 50 + 5.

### Segunda vuelta v0.64

Los 39 temas actualmente auditables alcanzan al menos 30 preguntas reales. La segunda vuelta auditable queda en **39 de 39: 100 %**.

Ámbitos reforzados en v0.64:

- Explorador de archivos, unidades locales y de red, permisos y rutas UNC;
- Microsoft Edge, navegación InPrivate y seguridad web;
- correo, calendario y contactos en GroupWise;
- impresión, cola, PDF, escaneado, ADF y OCR;
- Writer: estilos, revisión, tablas, correspondencia y PDF;
- Calc: fórmulas, referencias, funciones, filtros y validación;
- Base: tablas, claves, relaciones, consultas, formularios e informes;
- Impress: diseños, maestros, transiciones, animaciones y presentación;
- hardware, software, CPU, RAM, almacenamiento, periféricos y seguridad de soportes.

### Lo que impide declarar Diputación al 100 %

1. Tema 22 sin documentación interna oficial verificada.
2. Auditoría transversal completa de vigencia y literalidad.
3. Pruebas de navegador y validación visual.
4. Consolidación de las capas históricas de JavaScript.
5. Revisión final de los supuestos prácticos y equilibrio de simulacros.

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
