# OpoWeb · Auxiliar Administrativo Toledo

Web estática para preparar desde ordenador, tablet o móvil cuatro convocatorias activas:

1. **La Puebla de Montalbán · Auxiliar Administrativo C2** — 4 plazas + bolsa. Inscrito.
2. **Carranque · Auxiliar Administrativo C2** — 1 plaza + bolsa. Inscrito.
3. **Diputación Provincial de Toledo · Administrativo C1** — 2 plazas. Solicitudes del 6 al 31 de julio de 2026.
4. **Universidad Carlos III de Madrid · Auxiliar Administrativo C2** — 34 plazas, 2 reservadas. Solicitudes del 9 de julio al 5 de agosto de 2026.

Las Ventas con Peña Aguilera permanece fuera de la planificación activa. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Versión actual

- **OpoWeb v0.67.0**
- Caché PWA: `opoweb-v74`
- Última revisión estructural: 11 de julio de 2026

## Avance aproximado

| Área | Avance estimado |
|---|---:|
| Funcionamiento e interfaz | 89 % |
| Diputación C1 | 98 % |
| UC3M C2 | 84 % |
| La Puebla C2 | 30 % |
| Carranque C2 | 23 % |
| Arquitectura y pruebas | 58 % |
| **OpoWeb global** | **75 %** |

Los porcentajes son orientativos. Combinan temario, banco de preguntas reales, supuestos, simulacros, auditoría normativa, pruebas y deuda técnica. No representan probabilidad de aprobar.

## Diputación de Toledo

- Los 40 temas alcanzan al menos 30 preguntas específicas.
- 1.269 preguntas manuales acumuladas.
- Tres simulacros de 50 + 5.
- Cobertura cuantitativa: 100 %.
- Estimación global: 98 % por la brecha documental de los Estatutos del OAPGT y el cierre técnico pendiente.

## UC3M · v0.67

Los veinte temas mantienen al menos 30 preguntas válidas y se integra una parte relevante de la normativa institucional publicada en el portal oficial de la Universidad.

### Resultado cuantitativo

- **615 preguntas válidas acumuladas**.
- 20 de 20 temas con 30 o más preguntas.
- Tres simulacros de 70 preguntas + 5 reservas.
- Cuatro alternativas distintas, respuesta correcta válida y justificación normativa.

### Tema 15 cerrado con Estatutos oficiales

Se ha sustituido la capa genérica por un desarrollo específico del texto refundido oficial:

- naturaleza jurídica y autonomía de la UC3M;
- Defensor Universitario, elección, mandato, reelección, memoria y medios;
- servicios universitarios, creación, gestión y dirección;
- patrimonio, inventario y régimen presupuestario;
- memoria económica y control interno y externo;
- contratación estatutaria;
- iniciativa, tramitación y aprobación de la reforma de Estatutos.

### Tema 20: especial referencia UC3M

Se incorpora la regulación estatutaria propia:

- el Rector como órgano de contratación;
- nombramiento y composición mínima de la mesa;
- audiencia a representantes de los trabajadores en determinados servicios con sucesión de empresa;
- acuerdo preceptivo del Consejo Social para inversiones plurianuales con fondos futuros;
- localización de la resolución de 31 de mayo de 2022 sobre delegaciones en contratación, retención de crédito y gasto.

La distribución literal completa de las competencias delegadas sigue pendiente de extracción del documento original.

### Administración electrónica y organización

Se añaden enlaces y referencias a:

- Política de Gestión de Documentos Electrónicos, aprobada en 2024;
- Política de Seguridad de Sistemas de Información, aprobada en 2025;
- Reglamento de Administración Electrónica, aprobado en 2021 y modificado en 2025;
- normativa de uso de recursos TIC de 2023;
- creación del Boletín Oficial Electrónico;
- portal oficial de órganos, delegaciones de competencia y delegaciones de firma.

### Pendiente real de UC3M

1. Presupuesto vigente y bases de ejecución.
2. Normas propias de matrícula, permanencia y evaluación.
3. Reglas anuales de admisión UC3M.
4. Extracción literal completa de la delegación de contratación.
5. Auditoría transversal de literalidad, vigencia y dificultad.
6. Pruebas finales de navegador y móvil.

La sección económico-financiera de la página general de normativa solo publica actualmente el Plan Antifraude; por tanto, no se ha fingido disponer del presupuesto vigente ni de sus bases.

## Enlaces UC3M incorporados

- Portal general de normativa.
- Estatutos UC3M.
- Órganos y delegaciones.
- Administración electrónica y protección de datos.
- Gestión económico-financiera.

## La Puebla

Pendiente completar 19 temas, sustituir plantillas y ampliar supuestos.

## Carranque

Pendiente desarrollar 20 temas, sustituir preguntas de método y rehacer los supuestos sobre temas 3–20.

## Arquitectura

Pendiente consolidar módulos históricos, ampliar pruebas de navegador y validar la interfaz móvil.

## Pruebas automáticas

GitHub Actions ejecuta las pruebas de Diputación `smoke-v56` a `smoke-v65` y `smoke-uc3m-v66`. La siguiente ampliación técnica debe añadir la validación específica de la capa institucional v0.67.

## Historial reciente

### v0.67.0 · 2026-07-11

- Integrado el portal oficial de normativa UC3M.
- Cerrado el tema 15 con el texto refundido de los Estatutos.
- Añadidas preguntas institucionales a los temas 15 y 20.
- Incorporada la capa estatutaria de contratación UC3M.
- Catalogadas las normas de administración electrónica de 2024 y 2025.
- Simulacros regenerados a 70 + 5.
- Caché actualizada a `opoweb-v74`.

### v0.66.0 · 2026-07-10

- Añadidas 110 preguntas a once temas de UC3M.
- Los veinte temas alcanzaron 30 o más preguntas.
- Simulacros regenerados a 70 + 5 reservas.

### v0.65.0 · 2026-07-10

- Añadidas 32 preguntas verificadas al tema 22 de Diputación.
- Los 40 temas alcanzaron el objetivo cuantitativo mínimo de 30 preguntas.