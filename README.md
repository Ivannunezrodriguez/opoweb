# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.79.0**
- Caché PWA: `opoweb-v86`
- Última revisión estructural: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 98 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 91 % |
| **OpoWeb global** | **95 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.79

La ejecución real de la aplicación contiene **3.102 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 690 | 20 temas con 30 o más |

La auditoría automática comprueba respuestas válidas, cuatro opciones distintas, identificadores únicos, justificación o fuente obligatoria, ausencia de preguntas genéricas y ausencia de duplicados dentro del mismo tema.

## UC3M · mejora v0.79

El tema 20 incorpora **30 preguntas institucionales** de contratación interna UC3M extraídas de las Normas Básicas de Gestión del Presupuesto 2026.

La nueva capa cubre:

- Rector como órgano de contratación;
- Gerente con competencia delegada hasta un millón de euros;
- investigadores responsables y otros órganos para determinados contratos inferiores a 15.000 €;
- composición de la Mesa de contratación;
- secretario de la Mesa con voz y sin voto;
- contratos menores de obras inferiores a 40.000 €;
- suministros y servicios inferiores a 15.000 €;
- suministros y servicios específicos de proyectos de investigación inferiores a 50.000 €;
- duración máxima de un año y prohibición de prórroga;
- tres presupuestos como regla general;
- procedimiento electrónico obligatorio en la Sede Electrónica;
- excepción de tres ofertas para gastos de hasta 5.000 € sin IVA tramitados por sistema asimilado a caja fija;
- procedimiento negociado por exclusividad;
- propuesta e informes a DEF-Contratación;
- publicidad en el Perfil de contratante y, cuando proceda, en el DOUE;
- procedimiento abierto cuando no procede menor, negociado o Central de Contratación del Estado.

Resultado actual:

- 690 preguntas reales en UC3M;
- 20 de 20 temas con al menos 30 preguntas;
- temas 16 y 20 con 60 preguntas;
- temas 18 y 19 con 45 preguntas;
- tres simulacros de 70 + 5;
- 0 plantillas genéricas.

UC3M queda al 98 %, no al 100 %. Falta actualizar parámetros anuales de admisión, realizar la auditoría final de literalidad y dificultad y probar la aplicación en navegador y PWA reales.

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

- regresión histórica de las cuatro convocatorias;
- validación de las 30 preguntas de contratación interna UC3M;
- comprobación de límites, delegaciones, Mesa y procedimiento;
- auditoría transversal de las 3.102 preguntas;
- validación de los simulacros UC3M 70 + 5;
- matriz de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- integridad de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Actualizar ponderaciones, cupos y calendario anual de admisión UC3M.
2. Auditar literalidad y dificultad final de UC3M.
3. Localizar los Estatutos vigentes del OAPGT.
4. Auditar literalidad y dificultad de La Puebla y Carranque.
5. Probar navegador, móvil, tablet y funcionamiento sin conexión.
6. Consolidar las capas históricas de JavaScript preservando el progreso guardado.

## Historial reciente

### v0.79.0 · 2026-07-12

- Integradas 30 preguntas de contratación interna UC3M.
- Tema 20 ampliado a 60 preguntas.
- Banco UC3M elevado a 690 y banco global a 3.102 preguntas.
- Simulacros 70 + 5 regenerados.
- Caché actualizada a `opoweb-v86`.

### v0.78.0 · 2026-07-12

- Integradas 30 preguntas del Presupuesto UC3M 2026.
- Temas 18 y 19 ampliados a 45 preguntas cada uno.

### v0.77.0 · 2026-07-12

- Integradas 30 preguntas sobre normativa académica interna UC3M.
- Tema 16 ampliado a 60 preguntas.
