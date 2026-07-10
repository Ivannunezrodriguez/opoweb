# Auditoría global de OpoWeb · v0.45

Fecha de revisión: 10 de julio de 2026.

## Alcance cerrado

Convocatorias activas:

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

Las Ventas con Peña Aguilera permanece eliminada. No se incorporarán nuevas convocatorias hasta cerrar estas cuatro.

## Mejoras estructurales ya aplicadas

- formato oficial de simulacro por convocatoria;
- preguntas de reserva separadas;
- nota calculada solo sobre preguntas puntuables;
- tiempo y penalización oficiales;
- auditoría de preguntas reales frente a preguntas de plantilla;
- reutilización únicamente cuando coinciden norma y alcance;
- fuente y fecha de verificación del formato;
- botón «Volver al listado» visible durante el desplazamiento.

## Formatos oficiales incorporados

| OPE | Test | Reserva | Tiempo | Segundo ejercicio/casos |
|---|---:|---:|---:|---|
| La Puebla | 50 | 5 | 60 min | Supuesto o supuestos; formato determinado por el Tribunal |
| Carranque | 80 | 5 | 90 min | Supuesto o supuestos sobre temas 3 a 20 |
| Diputación C1 | 50 | 5 | 60 min | Segundo ejercicio práctico eliminatorio |
| UC3M | 70 | 5 | 60 min | Sin práctico oficial |

## 1. La Puebla de Montalbán

### Verificado

- cuatro plazas y bolsa;
- concurso-oposición;
- test de 50 preguntas y 5 reservas en 60 minutos;
- corrección +0,20, −0,05 y 0 en blanco;
- segundo ejercicio práctico;
- 19 temas;
- inscripción registrada el 28 de mayo de 2026.

### Pendiente

- completar 19 temas autosuficientes;
- sustituir todas las preguntas de plantilla;
- alcanzar 30–40 preguntas reales por tema;
- ampliar a 20–25 supuestos con solución completa;
- reforzar tributación, recaudación, régimen local, administración electrónica e informática.

## 2. Carranque

### Verificado

- una plaza y bolsa;
- concurso-oposición;
- 80 preguntas y 5 reservas en 90 minutos;
- corrección +0,25, −0,08 y 0 en blanco;
- práctico sobre temas 3 a 20;
- 20 temas;
- usuario inscrito.

### Pendiente

- desarrollar íntegramente los 20 temas;
- alcanzar 30–40 preguntas reales por tema;
- crear 25 supuestos exclusivamente sobre temas 3 a 20;
- añadir soluciones con norma, órgano, trámite, plazo y consecuencia;
- verificar cualquier nueva resolución del proceso directamente en la sede.

## 3. Diputación Provincial de Toledo · Administrativo C1

### Verificado

- dos plazas C1;
- oposición libre sin fase de concurso;
- 50 preguntas y 5 reservas en 60 minutos;
- segundo ejercicio práctico eliminatorio;
- programa de 40 temas;
- solicitudes del 6 al 31 de julio de 2026;
- tasa general C1 de 26 euros;
- la falta de justificación del pago determina exclusión no subsanable.

### Desarrollo alcanzado en v0.45

Se han cerrado en profundidad **15 de 40 temas**:

- temas 5 a 9: Ley 39/2015, acto administrativo, recursos y administración electrónica;
- temas 12 a 16: régimen local, municipio, provincia, Diputación, otras entidades locales y contratación;
- temas 17 a 21: empleo público de Castilla-La Mancha, derechos y situaciones, disciplina, contrato de trabajo y Seguridad Social.

Resultado acumulado:

- 225 preguntas manuales nuevas;
- 15 preguntas por tema revisado;
- eliminación de preguntas de plantilla en esos quince temas;
- desarrollo por artículos y reglas;
- tres simulacros de 50 + 5 formados solo con preguntas clasificadas como reales;
- cobertura temática parcial mostrada expresamente.

### Control de fuente interna

El tema 22 no se considera cerrado. Queda pendiente de:

- Acuerdo Regulador vigente de Diputación y organismos autónomos;
- Estatutos oficiales vigentes del OAPGT.

No se incorporarán órganos, condiciones de trabajo o artículos internos sin esos textos.

### Pendiente prioritario

- presentar solicitud y conservar registro y justificante;
- tema 22, condicionado a fuente interna;
- temas 23 a 27: prevención, igualdad, tributación, recaudación y presupuesto;
- temas 28 a 31: protección de datos, transparencia, impuestos locales y firma electrónica;
- temas 32 a 40: Windows 11, Edge, GroupWise, LibreOffice e informática básica;
- completar los temas 1–4, 10 y 11;
- alcanzar 30–40 preguntas reales en los 40 temas;
- redactar soluciones completas para 20 supuestos.

## 4. UC3M

### Verificado

- 34 plazas, dos reservadas a discapacidad;
- solicitudes del 9 de julio al 5 de agosto de 2026;
- 70 preguntas y 5 reservas en 60 minutos;
- penalización de un tercio por error;
- fecha previsible 21 de noviembre de 2026 a las 10:00, pendiente de confirmación;
- concurso-oposición.

### Estado actual

- 20 temas con banco real;
- todos con al menos 20 preguntas;
- nueve con 30 o más;
- tres simulacros de 70 + 5;
- auditoría de validez, duplicados, respuesta y dificultad.

### Pendiente

- Ley 10/2019 consolidada;
- Estatutos UC3M;
- matrícula, permanencia y evaluación;
- admisión anual;
- presupuesto y bases de ejecución;
- delegaciones y contratación interna;
- elevar los once temas restantes a 30–40 preguntas.

## Arquitectura pendiente

El contenido continúa cargándose por capas históricas. Antes del cierre definitivo se realizará una consolidación para:

1. mantener una única fuente canónica;
2. separar proceso, temario, preguntas, supuestos y simulacros;
3. eliminar envoltorios antiguos;
4. conservar compatibilidad con el progreso guardado;
5. añadir pruebas de regresión;
6. impedir reutilización fuera del alcance oficial;
7. auditar títulos literales y fechas de vigencia.

La planificación completa figura en `docs/HOJA_RUTA_PERFECCION.md`.