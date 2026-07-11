# Supuestos prácticos desarrollados · OpoWeb v0.71

Revisión: 11 de julio de 2026.

## Alcance

- La Puebla de Montalbán: 20 supuestos.
- Carranque: 18 supuestos, uno por cada tema práctico del 3 al 20.
- Total: 38 soluciones desarrolladas.

## Estructura obligatoria

Cada caso contiene:

1. base jurídica aplicable;
2. secuencia ordenada de resolución;
3. identificación de órgano, trámite, plazo y efecto;
4. tres o más errores frecuentes;
5. conclusión modelo;
6. rúbrica de cinco apartados, con un total de diez puntos.

## Materias cubiertas

### Procedimiento administrativo

- representación y subsanación;
- cómputo de plazos;
- actos y notificaciones;
- recursos y revisión de oficio;
- responsabilidad patrimonial;
- procedimiento sancionador.

### Régimen local

- padrón;
- competencias y asistencia provincial;
- licencias y declaraciones responsables;
- ordenanzas generales y fiscales;
- órganos, actas y certificaciones;
- bienes locales.

### Empleo, prevención e igualdad

- oferta de empleo y convocatoria;
- provisión y promoción interna;
- situaciones administrativas;
- riesgo grave e inminente;
- discriminación indirecta y planes de igualdad.

### Datos, tributos y presupuesto

- acceso a expedientes con datos personales;
- compensación y periodo ejecutivo;
- sujetos pasivos de tributos locales;
- modificaciones presupuestarias;
- clasificación económica;
- liquidación, remanente y estabilidad.

### Administración electrónica y ofimática

- certificados caducados;
- registro y notificación electrónica;
- factura electrónica y morosidad;
- organización de expedientes, digitalización, Writer/Word y Calc/Excel.

## Uso recomendado

1. Resolver el supuesto sin abrir la solución.
2. Citar norma, órgano, trámite, plazo y efecto.
3. Comparar la respuesta con la secuencia propuesta.
4. Revisar los errores frecuentes.
5. Aplicar la rúbrica sobre diez puntos.
6. Repetir el caso hasta obtener al menos ocho puntos sin consultar.

## Control automático

La prueba `tests/practicos-v71.js` carga la aplicación real y exige que los 38 casos tengan:

- al menos una referencia normativa;
- cuatro o más pasos;
- tres o más errores frecuentes;
- conclusión suficientemente desarrollada;
- rúbrica completa.

La prueba falla si falta una solución o cualquiera de sus apartados.
