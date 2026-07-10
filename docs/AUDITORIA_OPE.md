# Auditoría global de OpoWeb · v0.46

Fecha de revisión: 10 de julio de 2026.

## Alcance cerrado

Convocatorias activas:

1. La Puebla de Montalbán · Auxiliar Administrativo C2.
2. Carranque · Auxiliar Administrativo C2.
3. Diputación Provincial de Toledo · Administrativo C1.
4. Universidad Carlos III de Madrid · Auxiliar Administrativo C2.

Las Ventas con Peña Aguilera permanece eliminada. No se añadirán nuevas convocatorias hasta cerrar estas cuatro.

## Mejoras estructurales ya aplicadas

- formato oficial de simulacro por convocatoria;
- preguntas de reserva separadas;
- nota calculada solo sobre preguntas puntuables;
- tiempo y penalización oficiales;
- auditoría de contenido real frente a plantilla;
- reutilización únicamente cuando coinciden norma y alcance;
- botón «Volver al listado» visible durante el desplazamiento.

## Formatos oficiales

| OPE | Test | Reserva | Tiempo | Segundo ejercicio/casos |
|---|---:|---:|---:|---|
| La Puebla | 50 | 5 | 60 min | Supuesto o supuestos |
| Carranque | 80 | 5 | 90 min | Supuestos sobre temas 3–20 |
| Diputación C1 | 50 | 5 | 60 min | Práctico eliminatorio |
| UC3M | 70 | 5 | 60 min | Sin práctico oficial |

## 1. La Puebla de Montalbán

### Verificado

- cuatro plazas y bolsa;
- concurso-oposición;
- 50 + 5 en 60 minutos;
- corrección +0,20, −0,05 y 0;
- práctico;
- 19 temas;
- inscripción registrada.

### Pendiente

- completar los 19 temas;
- sustituir preguntas de plantilla;
- alcanzar 30–40 preguntas por tema;
- resolver 20–25 supuestos;
- reforzar tributación, recaudación, régimen local, administración electrónica e informática.

## 2. Carranque

### Verificado

- una plaza y bolsa;
- concurso-oposición;
- 80 + 5 en 90 minutos;
- corrección +0,25, −0,08 y 0;
- práctico sobre temas 3–20;
- 20 temas;
- usuario inscrito.

### Pendiente

- desarrollar íntegramente los 20 temas;
- alcanzar 30–40 preguntas por tema;
- crear 25 supuestos sobre temas 3–20;
- añadir soluciones con norma, órgano, trámite, plazo y consecuencia.

## 3. Diputación Provincial de Toledo · Administrativo C1

### Verificado

- dos plazas C1;
- oposición libre sin concurso;
- 50 + 5 en 60 minutos;
- segundo ejercicio práctico eliminatorio;
- programa de 40 temas;
- solicitudes del 6 al 31 de julio de 2026;
- tasa general de 26 euros;
- falta de justificación del pago: exclusión no subsanable.

### Desarrollo alcanzado en v0.46

Se han cerrado en profundidad **20 de 40 temas**:

- temas 5–9: procedimiento administrativo;
- temas 12–16: régimen local y contratación;
- temas 17–21: empleo público, trabajo y Seguridad Social;
- temas 23–27: prevención, igualdad, tributación, recaudación y presupuesto.

Resultado acumulado:

- 300 preguntas manuales nuevas;
- 15 preguntas por tema revisado;
- eliminación de preguntas de plantilla en los veinte temas;
- desarrollo por normas, artículos y reglas;
- tres simulacros de 50 + 5 solo con preguntas reales;
- cobertura temática parcial mostrada expresamente.

### Tema 22

No se considera cerrado. Falta verificar:

- Acuerdo Regulador vigente de Diputación y organismos autónomos;
- Estatutos oficiales vigentes del OAPGT.

### Pendiente prioritario

- presentar solicitud y conservar justificantes;
- temas 28–31: protección de datos, transparencia, tributos locales y firma electrónica;
- temas 32–40: Windows 11, Edge, GroupWise, LibreOffice e informática básica;
- temas 1–4, 10 y 11;
- tema 22 cuando existan fuentes internas;
- elevar todos los temas a 30–40 preguntas;
- redactar soluciones completas para 20 supuestos.

## 4. UC3M

### Verificado

- 34 plazas, dos reservadas;
- solicitudes del 9 de julio al 5 de agosto de 2026;
- 70 + 5 en 60 minutos;
- penalización de un tercio;
- fecha previsible 21 de noviembre de 2026 a las 10:00, pendiente de confirmación;
- concurso-oposición.

### Estado actual

- 20 temas con banco real;
- todos con al menos 20 preguntas;
- nueve con 30 o más;
- tres simulacros de 70 + 5.

### Pendiente

- Ley 10/2019 consolidada;
- Estatutos UC3M;
- matrícula, permanencia y evaluación;
- admisión anual;
- presupuesto y bases de ejecución;
- contratación interna;
- elevar once temas a 30–40 preguntas.

## Arquitectura pendiente

Antes del cierre definitivo se realizará una consolidación para:

1. mantener una única fuente canónica;
2. separar proceso, temario, preguntas, supuestos y simulacros;
3. eliminar capas históricas;
4. conservar compatibilidad con el progreso;
5. añadir pruebas de regresión;
6. impedir reutilización fuera de alcance;
7. auditar títulos y fechas de vigencia.

La planificación completa figura en `docs/HOJA_RUTA_PERFECCION.md`.