# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.78.0**
- Caché PWA: `opoweb-v85`
- Última revisión estructural: 12 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 95 % |
| Diputación C1 | 97 % |
| UC3M C2 | 96 % |
| La Puebla C2 | 84 % |
| Carranque C2 | 88 % |
| Arquitectura y pruebas | 90 % |
| **OpoWeb global** | **94 %** |

Los porcentajes son estimaciones de gestión basadas en contenido verificable, fuentes, preguntas, supuestos, simulacros y deuda técnica. No representan una probabilidad de aprobar.

## Auditoría transversal v0.78

La ejecución real de la aplicación contiene **3.072 preguntas**:

| Convocatoria | Preguntas reales | Estado del banco |
|---|---:|---|
| Diputación de Toledo | 1.242 | 40 temas con 30 o más |
| La Puebla | 570 | 19 temas con 30 |
| Carranque | 600 | 20 temas con 30 |
| UC3M | 660 | 20 temas con 30 o más |

La auditoría automática comprueba respuestas válidas, cuatro opciones distintas, identificadores únicos, justificación o fuente obligatoria, ausencia de preguntas genéricas y ausencia de duplicados dentro del mismo tema.

## UC3M · mejora v0.78

Los temas 18 y 19 incorporan **30 preguntas institucionales** del Presupuesto UC3M 2026 y sus Normas Básicas de Gestión.

### Tema 18 · estructura, financiación y magnitudes

- presupuesto total: **300.468.067,59 €**;
- techo de gasto: **325 millones de euros**;
- capítulo I: **161.190.785,21 €**, equivalente al **76,52 %** del gasto;
- transferencias corrientes de ingresos: **146.834.705,33 €**;
- estructura triple de gastos y doble de ingresos;
- fondo bibliográfico: mínimo del **8 %** del capítulo II de Gerencia y Servicios;
- años sabáticos: mínimo del **2 %** de la plantilla de funcionarios docentes;
- vinculación general a nivel de concepto y especial por capítulo para I, II y VI.

### Tema 19 · modificaciones y ejecución

- generaciones, rectificaciones, incorporaciones y redistribuciones;
- competencias del Rector, Consejo de Gobierno, Consejo Social y Comunidad de Madrid;
- incorporaciones de remanentes superiores a **300 €**;
- tramitación por la **DEF-Servicio de Presupuestos**;
- nulidad de pleno derecho por compromisos superiores al crédito autorizado;
- requisitos de necesidad, idoneidad y beneficio para la Universidad;
- justificación reforzada de gastos protocolarios;
- prórroga automática cuando no existe nuevo presupuesto el 1 de enero.

Resultado actual:

- 660 preguntas reales en UC3M;
- 20 de 20 temas con al menos 30 preguntas;
- temas 18 y 19 con 45 preguntas cada uno;
- tema 16 con 60 preguntas;
- tres simulacros de 70 + 5;
- 0 plantillas genéricas.

UC3M queda al 96 %, no al 100 %. Falta extraer delegaciones internas de contratación, actualizar parámetros anuales de admisión, realizar la auditoría final de literalidad y probar la aplicación en navegador y PWA reales.

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
- validación de las 30 preguntas del Presupuesto UC3M 2026;
- comprobación de cifras, órganos y reglas críticas;
- auditoría transversal de las 3.072 preguntas;
- validación de los simulacros UC3M 70 + 5;
- matriz de los 20 temas de Carranque;
- validación de los 38 supuestos prácticos;
- integridad de `index.html`, manifiesto y caché PWA.

## Pendiente real

1. Extraer delegaciones internas de contratación UC3M.
2. Actualizar ponderaciones, cupos y calendario anual de admisión UC3M.
3. Auditar literalidad y dificultad final de UC3M.
4. Localizar los Estatutos vigentes del OAPGT.
5. Auditar literalidad y dificultad de La Puebla y Carranque.
6. Probar navegador, móvil, tablet y funcionamiento sin conexión.
7. Consolidar las capas históricas de JavaScript preservando el progreso guardado.

## Historial reciente

### v0.78.0 · 2026-07-12

- Integradas 30 preguntas del Presupuesto UC3M 2026.
- Temas 18 y 19 ampliados a 45 preguntas cada uno.
- Banco UC3M elevado a 660 y banco global a 3.072 preguntas.
- Simulacros 70 + 5 regenerados.
- Caché actualizada a `opoweb-v85`.

### v0.77.0 · 2026-07-12

- Integradas 30 preguntas sobre normativa académica interna UC3M.
- Tema 16 ampliado a 60 preguntas.

### v0.76.0 · 2026-07-12

- Completados los temas 16 y 17 con 60 preguntas estatales verificadas.
- Banco UC3M elevado a 600 preguntas y 20 de 20 temas con 30.
