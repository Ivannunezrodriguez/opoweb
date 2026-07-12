# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.74.0**
- Caché PWA: `opoweb-v81`
- Última revisión estructural: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 76 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 82 % |
| **OpoWeb global** | **87 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.74

La ejecución real de la aplicación contiene **2.952 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 540 | 17 de 20 temas con 30; mínimo 10 |

La auditoría automática comprueba respuestas válidas, cuatro opciones distintas, identificadores únicos, justificación o fuente obligatoria, ausencia de preguntas genéricas y ausencia de duplicados dentro del mismo tema.

## UC3M · mejora v0.74

Los temas 13 y 14 de la Ley Orgánica 2/2023 del Sistema Universitario quedan reconstruidos con **60 preguntas verificadas**.

### Tema 13 · LOSU I

- objeto y funciones del sistema universitario;
- autonomía universitaria y rendición de cuentas;
- creación, reconocimiento y calidad de universidades;
- docencia, títulos oficiales, RUCT y estructura en tres ciclos;
- investigación, Ciencia Abierta y depósito en repositorios;
- internacionalización y prevención de segregación económica.

### Tema 14 · LOSU II

- acceso, becas y derechos del estudiantado;
- participación, deberes, equidad y accesibilidad;
- autonomía económica y suficiencia financiera;
- presupuesto público, único y equilibrado;
- objetivo del 1 % del PIB y mínimo del 5 % para investigación propia;
- PDI, límite general de temporalidad del 8 % y cuerpos docentes;
- PTGAS, régimen jurídico y principios de acceso.

Resultado actual:

- 540 preguntas reales en UC3M;
- 17 de 20 temas con 30 preguntas;
- mínimo de 10 preguntas en los tres temas incompletos;
- tres simulacros de 70 + 5 con representación de los 20 temas;
- 0 plantillas genéricas.

Pendiente: completar los temas 15, 16 y 17, incorporar normativa académica interna vigente y cerrar admisión y delegaciones internas.

## Resto de convocatorias

### Diputación

- 1.242 preguntas efectivamente cargadas.
- 40 temas con al menos 30 preguntas.
- Tres simulacros de 50 + 5.
- Pendiente principal: Estatutos oficiales vigentes del OAPGT y cierre técnico.

### La Puebla

- 570 preguntas.
- 19 temas con 30 preguntas.
- 20 supuestos con solución desarrollada.
- Tres simulacros de 50 + 5 y 60 minutos.

### Carranque

- 600 preguntas.
- 20 temas con 30 preguntas.
- 18 supuestos con solución desarrollada.
- Tres simulacros de 80 + 5 y 90 minutos.

## Controles automáticos

GitHub Actions ejecuta:

- regresión histórica de Diputación, UC3M, La Puebla y Carranque;
- validación específica de los temas 13 y 14 y de los tres simulacros UC3M;
- auditoría transversal de las 2.952 preguntas;
- matriz independiente de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- comprobación de recursos de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Completar los temas 15, 16 y 17 de UC3M.
2. Localizar los Estatutos vigentes del OAPGT.
3. Auditar literalidad y dificultad de La Puebla y Carranque.
4. Probar navegador, móvil, tablet y funcionamiento sin conexión.
5. Consolidar las capas históricas de JavaScript preservando el progreso guardado.
6. Mantener actualizado el seguimiento de listas, tribunales y fechas.

## Historial reciente

### v0.74.0 · 2026-07-12

- Completados los temas 13 y 14 de UC3M con 60 preguntas LOSU verificadas.
- Elevado el banco UC3M a 540 preguntas y 17 de 20 temas con 30.
- Regenerados los simulacros 70 + 5.
- Añadidas pruebas específicas y auditoría transversal de 2.952 preguntas.
- Caché actualizada a `opoweb-v81`.

### v0.73.0 · 2026-07-12

- Completado el tema 7 de transparencia UC3M con 30 preguntas verificadas.
- Elevado el banco UC3M a 500 preguntas y 15 de 20 temas con 30.

### v0.72.0 · 2026-07-11

- Creada auditoría transversal de calidad.
- Eliminadas 218 plantillas genéricas y 198 repeticiones internas de UC3M.

### v0.71.0 · 2026-07-11

- Desarrolladas las soluciones de 20 supuestos de La Puebla y 18 de Carranque.
