# Auditoría global de OpoWeb · v0.72

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
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 64 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 78 % |
| **OpoWeb global** | **84 %** |

## Recuento efectivo

La auditoría carga la aplicación en el mismo orden que la web y cuenta exclusivamente las preguntas finales disponibles para estudiar.

| Convocatoria | Preguntas | Temas a 30 |
|---|---:|---:|
| Diputación | 1.242 | 40/40 |
| La Puebla | 570 | 19/19 |
| Carranque | 600 | 20/20 |
| UC3M | 476 | 14/20 |
| **Total** | **2.888** | — |

Las cifras documentales anteriores de Diputación y UC3M no coincidían con el estado final de ejecución. Desde v0.72 se usa como referencia el recuento automático.

## Resultado estructural

La auditoría de las 2.888 preguntas devuelve:

- 0 respuestas inválidas;
- 0 bloques con opciones inválidas;
- 0 identificadores duplicados;
- 0 preguntas sin fuente o justificación;
- 0 preguntas genéricas;
- 0 repeticiones dentro del mismo tema.

Se registran por separado las reutilizaciones exactas entre temas y las justificaciones breves, pero no se consideran automáticamente errores estructurales.

## Corrección UC3M

El banco anterior conservaba 218 plantillas genéricas y 198 repeticiones internas. Se han retirado antes de generar tests y simulacros.

Estado real:

- 476 preguntas válidas;
- 14 temas con 30 preguntas;
- tema 7 con 6 preguntas verificadas;
- temas 13–17 con un mínimo de 10 preguntas específicas;
- tres simulacros 70 + 5 sin plantillas;
- 0 duplicados dentro del mismo tema.

La estimación baja del 84 % al 64 % porque la métrica anterior contaba contenido genérico como cobertura real.

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

1. Elevar a 30 preguntas reales los seis temas incompletos de UC3M.
2. Incorporar el paquete interno vigente de UC3M.
3. Localizar los Estatutos oficiales del OAPGT.
4. Auditar literalidad y dificultad de La Puebla y Carranque.
5. Probar navegador, móvil, tablet y PWA sin conexión.
6. Consolidar módulos históricos y comprobar la conservación del progreso.
7. Seguir publicaciones oficiales de listas, tribunales y fechas.
