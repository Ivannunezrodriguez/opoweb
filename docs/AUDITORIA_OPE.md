# Auditoría global de OpoWeb · v0.42

Fecha de revisión: 10 de julio de 2026.

## Alcance

Convocatorias activas:

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

Las Ventas con Peña Aguilera queda eliminada. No se incorporarán nuevas OPE hasta cerrar estas cuatro.

## Cambios estructurales ya ejecutados

- Formato oficial de simulacro por convocatoria.
- Cinco preguntas de reserva diferenciadas.
- Nota calculada solo con preguntas puntuables.
- Tiempo oficial visible.
- Auditoría de preguntas reales frente a preguntas de plantilla.
- Reutilización de bancos únicamente cuando coinciden norma y alcance.
- Fecha y fuente de verificación del formato.
- Botón «Volver al listado» siempre visible al desplazarse.

## Formatos oficiales incorporados

| OPE | Test | Reserva | Tiempo | Segundo ejercicio/casos |
|---|---:|---:|---:|---|
| La Puebla | 50 | 5 | 60 min | Supuesto o supuestos; formato determinado por el Tribunal |
| Carranque | 80 | 5 | 90 min | Supuesto o supuestos sobre temas 3 a 20 |
| Diputación C1 | 50 | 5 | 60 min | Segundo ejercicio práctico eliminatorio |
| UC3M | 70 | 5 | 60 min | Sin práctico oficial |

## 1. La Puebla de Montalbán

### Verificado

- Cuatro plazas y constitución de bolsa.
- Concurso-oposición.
- Primer ejercicio: 50 preguntas y 5 de reserva, 60 minutos.
- Acierto +0,20; error −0,05; blanco 0.
- Segundo ejercicio práctico.
- Programa de 19 temas.
- Inscripción registrada el 28 de mayo de 2026.

### Mejoras realizadas en v0.42

- Tres simulacros de 50 + 5.
- Separación visual de reservas.
- Sustitución automática de bancos genéricos en temas comunes cuando existe coincidencia normativa segura.
- Auditoría visible por tema.

### Pendiente

- Completar 19 temas de forma autosuficiente.
- Sustituir todas las preguntas de plantilla restantes.
- Alcanzar 30–40 preguntas reales por tema.
- Ampliar a 20–25 supuestos con solución completa.
- Reforzar tributación, recaudación, régimen local, administración electrónica e informática.

## 2. Carranque

### Verificado

- Una plaza de Auxiliar Administrativo C2.
- Concurso-oposición.
- Primer ejercicio: 80 preguntas y 5 de reserva, 90 minutos.
- Acierto +0,25; error −0,08; blanco 0.
- Segundo ejercicio práctico sobre temas 3 a 20.
- Programa de 20 temas.
- Estado personal: inscrito.

### Mejoras realizadas en v0.42

- Sustituidos los simulacros incorrectos de 50 preguntas por simulacros de 80 + 5.
- Tiempo oficial de 90 minutos visible.
- Reutilización de bancos comunes de Constitución, Ley 39/2015, Ley 40/2015, administración electrónica y contratación cuando el alcance coincide.
- Auditoría de preguntas reales y de plantilla.

### Pendiente

- Desarrollar los 20 temas completos.
- Alcanzar 30–40 preguntas reales por tema.
- Rehacer 25 supuestos exclusivamente sobre temas 3 a 20.
- Añadir soluciones con norma, órgano, trámite, plazo y consecuencia.
- Verificar la resolución de baremación publicada en sede antes de atribuirla definitivamente a este proceso.

## 3. Diputación Provincial de Toledo · Administrativo C1

### Verificado

- Dos plazas C1, escala de Administración General.
- Oposición libre, sin concurso.
- Primer ejercicio: 50 preguntas y 5 de reserva, 60 minutos.
- Segundo ejercicio práctico eliminatorio.
- Programa de 40 temas.
- Solicitudes del 6 al 31 de julio de 2026.
- Tasa general C1: 26 euros.
- La falta de justificación del abono determina exclusión no subsanable.

### Mejoras realizadas en v0.42

- Tres simulacros de 50 + 5.
- Auditoría real por tema.
- Reutilización de preguntas comunes cuando la norma y el alcance coinciden.
- Estado del proceso y enlaces oficiales actualizados.

### Pendiente prioritario

- Presentar solicitud y conservar registro y justificante.
- Desarrollar 40 temas autosuficientes.
- Crear módulos específicos de:
  - Diputación Provincial de Toledo;
  - Acuerdo Regulador;
  - OAPGT y Estatutos;
  - presupuesto y bases de ejecución;
  - tributación y recaudación;
  - Windows 11 Pro;
  - Microsoft Edge;
  - Micro Focus GroupWise 24;
  - LibreOffice 24 Writer, Calc, Base e Impress.
- Alcanzar 30–40 preguntas reales por tema.
- Completar las soluciones de los 20 supuestos.

## 4. UC3M

### Verificado

- 34 plazas, dos reservadas a discapacidad.
- Solicitudes del 9 de julio al 5 de agosto de 2026.
- Test de 70 preguntas y 5 de reserva, 60 minutos.
- Penalización de un tercio por error.
- Fecha previsible: 21 de noviembre de 2026 a las 10:00, pendiente de confirmación definitiva.
- Concurso-oposición.

### Estado actual

- Veinte temas con banco real.
- Todos los temas con al menos 20 preguntas.
- Nueve temas con 30 o más.
- Tres simulacros de 70 + 5.
- Auditoría de validez, duplicados, respuesta y dificultad.

### Pendiente

- Ley 10/2019 consolidada.
- Estatutos UC3M consolidados.
- Matrícula, permanencia y evaluación.
- Admisión anual.
- Presupuesto y bases de ejecución.
- Delegaciones y circuito interno de contratación.
- Elevar los once temas restantes a 30–40 preguntas.

## Arquitectura pendiente

El contenido sigue cargándose mediante capas históricas v30–v42. Antes del cierre definitivo se realizará una consolidación para:

1. mantener una única fuente canónica;
2. separar proceso, temario, preguntas, supuestos y simulacros;
3. eliminar envoltorios antiguos;
4. conservar compatibilidad con el progreso guardado;
5. añadir pruebas de regresión;
6. impedir reutilización fuera de alcance;
7. auditar títulos literales y fechas de vigencia.

La secuencia completa está documentada en `docs/HOJA_RUTA_PERFECCION.md`.
