# OpoWeb · Auxiliar Administrativo Toledo

Cuatro convocatorias activas: La Puebla C2, Carranque C2, Diputación de Toledo C1 y UC3M C2. El usuario está inscrito en las cuatro.

## Versión publicada

- **OpoWeb v0.89.2**
- Caché PWA `opoweb-v96`
- Revisión pedagógica abierta desde el 17 de julio de 2026

La versión v0.89.2 retira las etiquetas «fuente teórica principal», «temario completo» y los porcentajes de autosuficiencia. El contenido continúa disponible, pero queda correctamente clasificado como **resumen, orientación y práctica**, no como manual único.

## Estado de solicitudes

| Convocatoria | Estado personal |
|---|---|
| La Puebla | Inscrito |
| Carranque | Inscrito |
| Diputación de Toledo | Inscrito el 15/07/2026; solicitud registrada y tasa de 26 € abonada |
| UC3M | Inscrito el 15/07/2026; turno libre, cupo general y pago acreditado |

Los justificantes personales, números de registro y documentos identificativos se conservan fuera del repositorio público.

## Corrección del criterio editorial

La auditoría anterior verificaba número de palabras, estructura fija, fuentes, tablas y bancos de preguntas. Esos controles son útiles para detectar archivos incompletos o rotos, pero **no demuestran por sí solos que un tema pueda estudiarse sin manual externo**.

Se ha confirmado que varios temas, incluido La Puebla tema 1, condensan demasiada materia en pocos párrafos, no desarrollan sistemáticamente todos los artículos exigibles y pueden incluir ampliaciones ajenas al epígrafe mientras faltan bloques que sí forman parte de él.

Por tanto:

- los estados `APTO`, `19/19`, `20/20` y similares se interpretan únicamente como integridad técnica o estructural histórica;
- no equivalen a suficiencia pedagógica;
- se retiran los porcentajes globales de completitud;
- ninguna de las cuatro convocatorias se declara actualmente fuente teórica única.

Estado global actual: `RESUMEN_Y_PRACTICA_NO_FUENTE_UNICA`.

La justificación y el nuevo estándar están documentados en `docs/REVISION_PEDAGOGICA_V0892.md`.

## Nuevo estándar para cerrar un tema

Un tema solo podrá volver a declararse completo cuando incluya:

1. El epígrafe oficial descompuesto inciso por inciso.
2. Una matriz epígrafe–norma–artículos.
3. Desarrollo sistemático de todos los bloques exigidos.
4. Artículos, plazos, mayorías, órganos, excepciones y efectos explicados.
5. Separación entre materia obligatoria, ampliación útil y contenido ajeno al epígrafe.
6. Preguntas y supuestos trazables a la norma o artículo correspondiente.
7. Revisión humana de suficiencia para estudiar sin manual externo.

El número de palabras deja de ser un criterio suficiente. La cobertura normativa y la correspondencia con el programa oficial pasan a ser el criterio principal.

## Material disponible

### La Puebla

- 19 epígrafes cargados.
- 570 preguntas.
- 20 supuestos.
- Tres simulacros de 50 + 5.
- Corrección +0,20 / −0,05.
- Estado pedagógico: revisión completa pendiente.

### Carranque

- 20 epígrafes cargados.
- 600 preguntas.
- 18 supuestos.
- Tres simulacros de 80 + 5.
- Corrección +0,25 / −0,08.
- Estado pedagógico: revisión completa pendiente.

### UC3M

- 20 epígrafes cargados.
- Al menos 720 preguntas.
- Tres simulacros de 70 + 5.
- Los materiales específicos 13–20 conservan sus fuentes y contenido, pero deben superar la nueva auditoría pedagógica antes de considerarse autosuficientes.

### Diputación de Toledo

- 40 epígrafes cargados.
- Los materiales comunes, tributarios, informáticos y prácticos permanecen disponibles.
- Todo el programa debe superar la nueva auditoría pedagógica.
- El tema 22 mantiene además la reserva documental de los Estatutos del OAPGT.

## OAPGT · reserva documental

La investigación mantiene localizadas publicaciones de 1996, 1999, 2002, 2004 y 2011, además de referencias oficiales recientes a los artículos 4.a, 12.2.l.8 y 14. Varias piezas proceden todavía de transcripciones secundarias de boletines históricos, por lo que faltan copias oficiales, acreditación del cierre definitivo de las reformas iniciales y una búsqueda documentada de modificaciones posteriores.

El BOP Toledo núm. 109, de 13 de mayo de 2005, contiene una corrección del artículo 21 de los Estatutos del **Consorcio de Servicios Públicos Medioambientales**, no de los Estatutos del OAPGT. Esa publicación queda descartada.

Estado: `CADENA_HISTORICA_PARCIAL_LOCALIZADA_PENDIENTE_CIERRE_OFICIAL`.

Mientras no se cierre la cadena:

- no se habilita teoría literal consolidada de los Estatutos;
- no se generan preguntas estatutarias como verificadas;
- no se declara completo el tema 22;
- se mantiene la trazabilidad en `docs/OAPGT_ESTATUTOS_V89.md`.

## Banco global

Más de 3.100 preguntas permanecen disponibles. La existencia de preguntas, fuentes y esquemas no se utilizará de nuevo como prueba automática de que el desarrollo teórico es autosuficiente.

## Validación técnica

GitHub Actions mantiene la validación de carga, sintaxis, integridad web/PWA, conservación del progreso, funcionamiento sin conexión, escritorio, Pixel 7 e iPad Pro 11.

La nueva interfaz debe comprobar además que:

- no aparece «fuente teórica principal»;
- no se muestran porcentajes de completitud pedagógica;
- todas las convocatorias avisan de que el material es resumen y práctica;
- la caché vigente es `opoweb-v96`.

## Siguiente trabajo

1. Reconstruir La Puebla tema 1 con cobertura sistemática de los artículos realmente exigibles.
2. Auditar después los restantes temas municipales con la nueva matriz epígrafe–artículos.
3. Aplicar el mismo control a UC3M y Diputación.
4. Cerrar documentalmente el OAPGT antes de consolidar el tema 22.
5. Mantener actualizados los datos dinámicos y la normativa vigente.