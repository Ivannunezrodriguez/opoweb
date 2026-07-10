# Auditoría global de OpoWeb · v0.62

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
| Funcionamiento e interfaz | 85 % |
| Diputación C1 | 87 % |
| UC3M C2 | 52 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 49 % |
| **OpoWeb global** | **61 %** |

## Diputación de Toledo C1

### Estado verificado

- 2 plazas C1 por oposición libre.
- Primer ejercicio de 50 + 5 preguntas en 60 minutos.
- Segundo ejercicio práctico.
- 40 temas.
- Solicitudes del 6 al 31 de julio de 2026.
- Tasa general: 26 euros.

### Primera vuelta

- 39 de 40 temas desarrollados.
- Tema 22 pendiente de Acuerdo Regulador y Estatutos oficiales del OAPGT.
- 585 preguntas manuales.
- 20 supuestos, 40 variantes y tres simulacros prácticos internos.

### Segunda vuelta v0.62

Temas 1–21 y 23–26 reforzados hasta el objetivo mínimo de 30 preguntas reales.

Resultado acumulado:

- 62 preguntas nuevas en v0.62;
- 442 preguntas nuevas de segunda vuelta;
- 1.027 preguntas manuales acumuladas;
- 25 temas a 30+ preguntas reales;
- segunda vuelta: 25 de 39 temas auditables, aproximadamente 64 %;
- opciones distintas, respuesta rotada y dificultad graduada;
- control de duplicados y simulacros regenerados.

Ámbitos reforzados en v0.62:

- igualdad de trato, discriminación, acoso, acciones positivas y planes de igualdad;
- transversalidad, impacto de género, estadísticas y lenguaje no sexista en Castilla-La Mancha;
- obligación tributaria, hecho imponible, devengo, sujetos, recargos y prescripción;
- gestión y revisión tributaria;
- periodo voluntario y ejecutivo, aplazamiento, compensación y devolución;
- providencia de apremio, embargo y vías de impugnación.

### Criterio de cierre pendiente

1. completar temas 27–40 a 30–40 preguntas reales;
2. cerrar tema 22 con fuentes internas oficiales;
3. auditar transversalmente vigencia, duplicados y cobertura;
4. consolidar la arquitectura histórica;
5. ampliar pruebas de regresión y validación visual.

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
4. Ampliar CI y pruebas de navegador.
5. Impedir reutilización fuera del programa oficial.
