# Auditoría global de OpoWeb · v0.73

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
| UC3M C2 | 68 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 80 % |
| **OpoWeb global** | **85 %** |

## Recuento efectivo

La auditoría carga la aplicación en el mismo orden que la web y cuenta exclusivamente las preguntas finales disponibles para estudiar.

| Convocatoria | Preguntas | Temas a 30 |
|---|---:|---:|
| Diputación | 1.242 | 40/40 |
| La Puebla | 570 | 19/19 |
| Carranque | 600 | 20/20 |
| UC3M | 500 | 15/20 |
| **Total** | **2.912** | — |

Desde v0.72 se usa como referencia el recuento automático de ejecución y no la suma documental histórica.

## Resultado estructural

La auditoría comprueba en las 2.912 preguntas:

- respuestas válidas;
- cuatro opciones distintas y no vacías;
- identificadores únicos;
- fuente o justificación obligatoria;
- ausencia de plantillas genéricas;
- ausencia de repeticiones dentro del mismo tema;
- distribución razonable de letras correctas.

Las reutilizaciones exactas entre temas y las justificaciones breves se registran por separado y no se convierten automáticamente en errores estructurales.

## UC3M v0.73

El tema 7 de transparencia se ha reconstruido con la Ley 10/2019 consolidada y el Portal de Transparencia UC3M.

Estado real:

- 500 preguntas válidas;
- 15 temas con 30 preguntas;
- tema 7 con 30 preguntas verificadas;
- temas 13–17 con un mínimo de 10 preguntas específicas;
- tres simulacros 70 + 5 sin plantillas;
- plazos de 10 días, 20 + 20 días y un mes integrados en el banco;
- pruebas específicas de contenido, fuentes y simulacros en CI.

La estimación UC3M sube del 64 % al 68 %. No sube más porque siguen abiertos cinco temas universitarios y varias fuentes internas anuales.

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

1. Elevar a 30 preguntas reales los cinco temas 13–17 de UC3M.
2. Incorporar presupuesto, bases de ejecución, normativa académica, admisión y delegaciones internas vigentes de UC3M.
3. Localizar los Estatutos oficiales del OAPGT.
4. Auditar literalidad y dificultad de La Puebla y Carranque.
5. Probar navegador, móvil, tablet y PWA sin conexión.
6. Consolidar módulos históricos y comprobar la conservación del progreso.
7. Seguir publicaciones oficiales de listas, tribunales y fechas.
