# Auditoría global de OpoWeb · v0.74

Fecha de revisión: 12 de julio de 2026.

## Alcance

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

Las Ventas con Peña Aguilera está retirada del selector. No se añadirán nuevas convocatorias hasta cerrar estas cuatro.

## Avance aproximado

| Área | Avance |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 76 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 82 % |
| **OpoWeb global** | **87 %** |

## Recuento efectivo

| Convocatoria | Preguntas | Temas a 30 |
|---|---:|---:|
| Diputación | 1.242 | 40/40 |
| La Puebla | 570 | 19/19 |
| Carranque | 600 | 20/20 |
| UC3M | 540 | 17/20 |
| **Total** | **2.952** | — |

La auditoría carga la aplicación en el mismo orden que la web y cuenta exclusivamente las preguntas finales disponibles para estudiar.

## Resultado estructural

La auditoría comprueba respuestas válidas, cuatro opciones distintas, identificadores únicos, fuente o justificación obligatoria, ausencia de plantillas genéricas, ausencia de repeticiones dentro del mismo tema y equilibrio razonable de letras correctas.

## UC3M v0.74

Los temas 13 y 14 se han reconstruido con la Ley Orgánica 2/2023 consolidada.

Estado real:

- 540 preguntas válidas;
- 17 temas con 30 preguntas;
- temas 13 y 14 con 30 preguntas cada uno;
- mínimo de 10 preguntas en los temas 15, 16 y 17;
- tres simulacros 70 + 5 sin plantillas;
- datos críticos 27.10, 1 %, 5 % y 8 % integrados y probados;
- pruebas específicas de contenido, fuentes, equilibrio y simulacros en CI.

La estimación UC3M sube del 68 % al 76 %. No sube más porque siguen abiertos los temas 15, 16 y 17 y varias fuentes internas anuales.

## La Puebla y Carranque

- La Puebla: 570 preguntas, 20 supuestos desarrollados y tres simulacros 50 + 5.
- Carranque: 600 preguntas, 18 supuestos desarrollados y tres simulacros 80 + 5.
- Ambas superan la auditoría estructural sin incidencias bloqueantes.

## Diputación

- 1.242 preguntas efectivamente cargadas.
- 40 temas con 30 o más preguntas.
- Tres simulacros 50 + 5.
- Pendiente principal: Estatutos oficiales vigentes del OAPGT y consolidación técnica.

## Bloqueos para alcanzar el 100 %

1. Elevar a 30 preguntas reales los temas 15, 16 y 17 de UC3M.
2. Incorporar presupuesto, bases de ejecución, normativa académica, admisión y delegaciones internas vigentes de UC3M.
3. Localizar los Estatutos oficiales del OAPGT.
4. Auditar literalidad y dificultad de La Puebla y Carranque.
5. Probar navegador, móvil, tablet y PWA sin conexión.
6. Consolidar módulos históricos y comprobar la conservación del progreso.
7. Seguir publicaciones oficiales de listas, tribunales y fechas.
