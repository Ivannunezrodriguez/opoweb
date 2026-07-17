# OpoWeb · Auxiliar Administrativo Toledo

Cuatro convocatorias activas: La Puebla C2, Carranque C2, Diputación de Toledo C1 y UC3M C2. El usuario está inscrito en las cuatro.

## Versión publicada

- **OpoWeb v0.89.3**
- Caché PWA `opoweb-v97`
- Revisión pedagógica abierta desde el 17 de julio de 2026
- Primer manual aprobado por el usuario: **La Puebla · tema 1**

La versión v0.89.3 integra el primer tema reconstruido con el nuevo estándar. El resto del material continúa disponible como resumen, orientación y práctica hasta superar el mismo procedimiento tema por tema.

## Regla permanente de reconstrucción

> Te prometí un manual y publiqué resúmenes inflados por métricas. La reconstrucción tendrá que empezar por el contenido real de cada epígrafe, artículo por artículo; no por añadir más palabras, tests o etiquetas de “completo”.

No se considerará cerrado un tema por su número de palabras, fuentes, tablas o preguntas. El cierre exige correspondencia con el epígrafe oficial, cobertura normativa sistemática, preguntas trazables y aprobación expresa del usuario.

## Estado de solicitudes

| Convocatoria | Estado personal |
|---|---|
| La Puebla | Inscrito |
| Carranque | Inscrito |
| Diputación de Toledo | Inscrito el 15/07/2026; solicitud registrada y tasa de 26 € abonada |
| UC3M | Inscrito el 15/07/2026; turno libre, cupo general y pago acreditado |

Los justificantes personales, números de registro y documentos identificativos se conservan fuera del repositorio público.

## Corrección del criterio editorial

La auditoría anterior verificaba volumen, estructura fija, fuentes, tablas y bancos de preguntas. Esos controles sirven para detectar archivos incompletos o rotos, pero no demuestran que un tema pueda estudiarse sin un manual externo.

Por tanto:

- `APTO`, `19/19`, `20/20` y porcentajes históricos solo describen integridad técnica o estructural;
- no equivalen a suficiencia pedagógica;
- ninguna convocatoria completa se declara actualmente fuente teórica única;
- cada tema se reconstruye y se somete individualmente a aprobación humana.

Estado global: `RECONSTRUCCION_MANUAL_TEMA_A_TEMA`.

## Estándar obligatorio de cierre

Cada tema debe contener:

1. Epígrafe oficial literal descompuesto inciso por inciso.
2. Mapa del tema oficial.
3. Matriz `inciso → norma → artículos → contenido exigible`.
4. Desarrollo sistemático de artículos, plazos, mayorías, órganos, excepciones y efectos.
5. Separación entre materia obligatoria, ampliación útil y contenido ajeno.
6. Cuadro para test y supuesto práctico.
7. Resumen orientado al aprobado, rigor normativo, puntos calientes y retención activa.
8. Preguntas trazables a normas y artículos concretos.
9. Revisión humana y aprobación expresa antes de fusionar.

## La Puebla · reconstrucción

### Tema 1 · aprobado e integrado

**Epígrafe:** La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.

- Aprobación expresa del usuario: **17 de julio de 2026**.
- Estado: `APROBADO_POR_USUARIO_E_INTEGRADO`.
- Cobertura principal: artículos 10–55 y 166–169 de la Constitución.
- Incluye estructura constitucional, cuatro reformas vigentes hasta mayo de 2026, derechos y deberes artículo por artículo, garantías, suspensión, excepción y sitio.
- Incluye 30 preguntas nuevas con referencia normativa y artículo concreto.
- Manual: `docs/rebuild/puebla/TEMA_01_MANUAL_BORRADOR.md`.
- Constancia de aprobación: `docs/rebuild/puebla/TEMA_01_APROBACION_USUARIO.md`.

El nombre histórico `BORRADOR` del archivo se conserva para mantener trazabilidad. La interfaz transforma su estado y muestra que fue aprobado e integrado tras la autorización del usuario.

### Temas pendientes

- La Puebla: **1 aprobado y 18 en revisión**.
- No se avanzará presentando otro tema como cerrado sin entregar previamente el feedback individual al usuario.

## Material disponible

### La Puebla

- 19 epígrafes cargados.
- Tema 1 reconstruido y aprobado.
- 18 temas pendientes de reconstrucción pedagógica.
- 570 preguntas en total; las 30 del tema 1 son ahora trazables al articulado.
- 20 supuestos y tres simulacros de 50 + 5.

### Carranque

- 20 epígrafes cargados.
- 600 preguntas, 18 supuestos y tres simulacros de 80 + 5.
- Estado pedagógico: reconstrucción pendiente tema por tema.

### UC3M

- 20 epígrafes cargados.
- Al menos 720 preguntas y tres simulacros de 70 + 5.
- Estado pedagógico: reconstrucción pendiente tema por tema.

### Diputación de Toledo

- 40 epígrafes cargados.
- Estado pedagógico: reconstrucción pendiente tema por tema.
- El tema 22 mantiene además la reserva documental de los Estatutos del OAPGT.

## OAPGT · reserva documental

La investigación mantiene localizadas publicaciones de 1996, 1999, 2002, 2004 y 2011, además de referencias oficiales recientes. Faltan copias oficiales, acreditación del cierre definitivo de reformas iniciales y una búsqueda documentada de modificaciones posteriores.

El BOP Toledo núm. 109, de 13 de mayo de 2005, corresponde al Consorcio de Servicios Públicos Medioambientales y no acredita una modificación del OAPGT.

Estado: `CADENA_HISTORICA_PARCIAL_LOCALIZADA_PENDIENTE_CIERRE_OFICIAL`.

## Validación técnica

GitHub Actions debe comprobar:

- carga y sintaxis;
- integridad del manifiesto y de la PWA;
- caché `opoweb-v97`;
- manual aprobado disponible también sin conexión;
- treinta preguntas trazables del tema 1;
- estado `APROBADO_POR_USUARIO_E_INTEGRADO`;
- escritorio, Pixel 7 e iPad Pro 11;
- conservación del progreso.

## Siguiente trabajo

1. Terminar la integración técnica y validación del tema 1 aprobado.
2. Entregar al usuario el feedback del tema 2 antes de cualquier fusión.
3. Repetir el procedimiento hasta reconstruir los 19 temas de La Puebla.
4. Aplicar después el mismo control a Carranque, UC3M y Diputación.
5. Cerrar documentalmente el OAPGT antes de consolidar el apartado estatutario del tema 22.