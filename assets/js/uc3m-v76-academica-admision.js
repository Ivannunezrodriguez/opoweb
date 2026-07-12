(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const VERSION = '0.76.0';
  const RD822 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781';
  const RD534 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const rows16 = [
    ['¿Qué regula principalmente el Real Decreto 822/2021?','La organización y estructura de las enseñanzas universitarias y sus procedimientos de aseguramiento de la calidad','Solo la financiación de las universidades públicas','Únicamente el acceso de mayores de 25 años','Exclusivamente la expedición de títulos propios','Artículo 1 del Real Decreto 822/2021.','baja'],
    ['¿A qué enseñanzas se aplica el Real Decreto 822/2021?','A Grado, Máster Universitario, Doctorado y otras enseñanzas universitarias como la formación permanente','Solo a los estudios de Grado','Exclusivamente a Doctorado','Únicamente a títulos propios no oficiales','Artículo 2 del Real Decreto 822/2021.','baja'],
    ['¿En qué ciclos se estructuran los estudios universitarios oficiales?','Grado, Máster Universitario y Doctorado','Grado, Posgrado y Especialización','Diplomatura, Licenciatura y Doctorado','Básico, Intermedio y Superior','Artículo 3.1 del Real Decreto 822/2021.','baja'],
    ['¿Dónde deben inscribirse los títulos universitarios oficiales?','En el Registro de Universidades, Centros y Títulos','En el Registro Civil','En el Registro Mercantil','En el padrón municipal','Artículo 3.2 del Real Decreto 822/2021.','baja'],
    ['¿Qué debe existir entre objetivos formativos, competencias y evaluación?','Coherencia','Independencia absoluta','Jerarquía económica','Separación administrativa','Artículo 4.1.c del Real Decreto 822/2021.','media'],
    ['¿Cómo se estructuran normalmente los cursos de Grado y Máster?','En cursos de 60 créditos ECTS, salvo la excepción prevista para Másteres de 90 créditos','En cursos de 30 créditos en todo caso','En cursos de 45 créditos obligatorios','Sin estructura crediticia común','Artículo 5.2 del Real Decreto 822/2021.','media'],
    ['¿Quién elabora los planes de estudios de las enseñanzas oficiales?','Las universidades, que los aprueban por sus órganos de gobierno','El Consejo de Ministros en cada caso','Las agencias de calidad sin intervención universitaria','Los colegios profesionales exclusivamente','Artículo 5.3 del Real Decreto 822/2021.','baja'],
    ['¿Qué participación debe asegurarse al estudiantado en la elaboración de las memorias de Grado y Máster?','Participación en las comisiones específicas o de estudio que elaboren la memoria','Solo audiencia después de aprobada','Ninguna participación','Participación únicamente en títulos privados','Artículo 5.7 del Real Decreto 822/2021.','media'],
    ['¿Cuándo deben estar accesibles las guías docentes?','Antes del período oficial de matrícula','Después de finalizar la asignatura','Solo durante los exámenes','Cuando lo solicite una agencia externa','Artículo 9.3 del Real Decreto 822/2021.','media'],
    ['¿Qué finalidad tienen el reconocimiento y la transferencia de créditos?','Facilitar la movilidad entre títulos españoles y extranjeros','Sustituir toda evaluación académica','Eliminar el expediente del estudiante','Convertir títulos propios en oficiales automáticamente','Artículo 10.1 del Real Decreto 822/2021.','baja'],
    ['¿Dónde deben reflejarse los créditos reconocidos o transferidos?','En el expediente del estudiante y en el Suplemento Europeo al Título','Solo en un certificado privado','Únicamente en el portal de transparencia','En el Registro Mercantil','Artículo 10.2 del Real Decreto 822/2021.','media'],
    ['¿Pueden reconocerse los créditos correspondientes al TFG o TFM?','No, salvo los desarrollados específicamente en un programa de movilidad','Sí, siempre por experiencia laboral','Sí, sin limitación','Solo si los autoriza el Consejo Social','Artículo 10.3 del Real Decreto 822/2021.','alta'],
    ['¿Cuándo puede reconocerse experiencia profesional como créditos?','Cuando esté estrechamente relacionada con los conocimientos, competencias y habilidades del título','Siempre, aunque no tenga relación','Solo en títulos propios','Nunca puede reconocerse','Artículo 10.4 del Real Decreto 822/2021.','media'],
    ['¿Cuál es el objetivo fundamental de las enseñanzas oficiales de Grado?','La formación básica y generalista que prepare para actividades profesionales y formación integral','La especialización investigadora exclusiva','La preparación de oposiciones','La formación laboral sin base académica','Artículo 13.1 del Real Decreto 822/2021.','baja'],
    ['¿Qué carga mínima debe tener una mención en un título de Grado?','El 20 por ciento de la carga total del título','El 5 por ciento','El 10 por ciento','El 50 por ciento','Artículo 13.3 del Real Decreto 822/2021.','alta'],
    ['¿Cuántos créditos tiene con carácter general un título de Grado?','240 ECTS, salvo los de 300 o 360 por normativa específica o europea','180 ECTS en todos los casos','300 ECTS obligatoriamente','120 ECTS','Artículo 14.1 del Real Decreto 822/2021.','baja'],
    ['¿Cuántos créditos mínimos de formación básica incluye un Grado de 240 ECTS?','60 créditos','30 créditos','90 créditos','120 créditos','Artículo 14.4 del Real Decreto 822/2021.','media'],
    ['¿Cuál es la extensión máxima ordinaria de las prácticas externas curriculares en un Grado?','El 25 por ciento del total de créditos del título','El 10 por ciento','El 50 por ciento','No existe límite','Artículo 14.5 del Real Decreto 822/2021.','alta'],
    ['¿Qué rango de créditos tiene el TFG en un Grado de 240 ECTS?','Entre 6 y 24 créditos','Entre 3 y 12 créditos','Entre 12 y 30 créditos','Exactamente 30 créditos','Artículo 14.6 del Real Decreto 822/2021.','alta'],
    ['¿Cómo debe defenderse el Trabajo de Fin de Grado?','En un acto público','Solo por escrito y sin defensa','Ante el Consejo Social','Mediante una prueba estatal común','Artículo 14.6 del Real Decreto 822/2021.','media'],
    ['¿Qué porcentaje de créditos no presenciales define la modalidad híbrida de un Grado?','Entre el 40 y el 60 por ciento','Entre el 10 y el 20 por ciento','Al menos el 80 por ciento','Exactamente el 25 por ciento','Artículo 14.7 del Real Decreto 822/2021.','alta'],
    ['¿Cuándo puede definirse un Grado como virtual?','Cuando al menos el 80 por ciento de sus créditos se imparte en modalidad virtual','Cuando el 40 por ciento es no presencial','Cuando existe una asignatura online','Solo si carece de campus físico','Artículo 14.7 del Real Decreto 822/2021.','alta'],
    ['¿Qué cargas pueden tener los planes de estudios de Máster Universitario?','60, 90 o 120 créditos ECTS','Solo 60 créditos','180 o 240 créditos','30, 45 o 60 créditos','Artículo 17.1 del Real Decreto 822/2021.','baja'],
    ['¿Qué límite tienen las prácticas externas de un Máster Universitario?','No pueden superar un tercio de la carga crediticia total','No pueden superar el 10 por ciento','Pueden ocupar todo el Máster','No existe límite legal','Artículo 17.3 del Real Decreto 822/2021.','alta'],
    ['¿Qué rango de créditos puede tener el TFM?','Entre 6 y 30 créditos ECTS','Entre 3 y 12 créditos','Entre 24 y 60 créditos','Exactamente 15 créditos','Artículo 17.4 del Real Decreto 822/2021.','media'],
    ['¿Qué puede permitir la matrícula condicionada en un Máster?','Acceder con el TFG pendiente y hasta 9 ECTS adicionales, sin poder obtener el Máster antes del Grado','Acceder sin ningún estudio universitario','Obtener el Máster antes del Grado','Matricularse con 30 ECTS pendientes','Artículo 18.4 del Real Decreto 822/2021.','alta'],
    ['¿Qué límite tienen los complementos formativos para la admisión a un Máster?','El 20 por ciento de la carga crediticia del título','El 5 por ciento','El 50 por ciento','No existe límite','Artículo 18.5 del Real Decreto 822/2021.','alta'],
    ['¿Qué reserva mínima existe en Máster para estudiantes con discapacidad o necesidades permanentes asociadas?','El 5 por ciento de las plazas','El 1 por ciento','El 10 por ciento','No existe reserva','Artículo 18.6 del Real Decreto 822/2021.','media'],
    ['¿Qué porcentaje de créditos se desarrolla en la entidad colaboradora en una Mención Dual de Grado?','Entre el 20 y el 40 por ciento','Entre el 5 y el 15 por ciento','Entre el 50 y el 70 por ciento','Exactamente el 10 por ciento','Artículo 22.2 del Real Decreto 822/2021.','alta'],
    ['¿Qué procedimientos integran el aseguramiento de la calidad de los títulos oficiales?','Verificación, seguimiento, modificación y renovación de la acreditación','Solo inspección económica','Únicamente evaluación docente','Registro, matrícula y expedición','Artículo 25.3 del Real Decreto 822/2021.','media']
  ];

  const rows17 = [
    ['¿Qué regula el Real Decreto 534/2024?','Los requisitos de acceso a Grado, la prueba de acceso y la normativa básica de admisión','Solo el acceso a Máster','Exclusivamente las becas universitarias','Únicamente la homologación de títulos extranjeros','Artículo 1 del Real Decreto 534/2024.','baja'],
    ['¿Qué diferencia existe entre acceso y admisión?','El acceso acredita requisitos previos y la admisión adjudica plazas entre quienes los cumplen','Son términos idénticos','La admisión precede siempre al acceso','El acceso solo afecta a universidades privadas','Artículo 2 del Real Decreto 534/2024.','media'],
    ['¿Qué principios rigen el acceso y la admisión a Grado?','Igualdad, mérito y capacidad','Antigüedad, residencia y renta','Libre designación y confianza','Sorteo y proximidad','Artículo 3.1 del Real Decreto 534/2024.','baja'],
    ['¿Qué estudiante puede reanudar estudios en el mismo centro sin nuevo procedimiento de admisión?','Quien haya superado al menos 6 ECTS y los hubiera abandonado temporalmente, sin perjuicio de permanencia','Quien no haya superado ningún crédito','Solo quien haya superado 60 ECTS','Cualquier persona sin matrícula previa','Artículo 3.5 del Real Decreto 534/2024.','alta'],
    ['¿Qué necesita con carácter general quien posee el título de Bachiller para acceder a Grado?','Superar la prueba de acceso a la universidad','Acreditar experiencia profesional','Superar una entrevista universitaria','Poseer un título de Máster','Artículo 4 del Real Decreto 534/2024.','baja'],
    ['¿Puede un Técnico Superior de Formación Profesional acceder a la universidad sin prueba de acceso?','Sí, conforme a los procedimientos de admisión que procedan','No, debe realizar siempre la PAU completa','Solo si tiene más de 25 años','Únicamente para títulos propios','Artículo 5 del Real Decreto 534/2024.','baja'],
    ['¿Cuántos créditos deben reconocerse como mínimo para continuar en España estudios universitarios extranjeros parciales?','30 ECTS','6 ECTS','12 ECTS','60 ECTS','Artículo 7.d del Real Decreto 534/2024.','alta'],
    ['¿Qué otras vías de acceso por edad contempla el Real Decreto 534/2024?','Mayores de 25, mayores de 40 con experiencia y mayores de 45','Solo mayores de 30','Mayores de 18 sin requisitos','Únicamente mayores de 50','Artículo 8 del Real Decreto 534/2024.','baja'],
    ['¿Qué finalidad tiene la prueba de acceso?','Valorar objetivamente madurez académica, conocimientos y capacidad para seguir estudios universitarios','Clasificar universidades','Evaluar únicamente memoria','Sustituir la nota de Bachillerato','Artículo 9 del Real Decreto 534/2024.','media'],
    ['¿Puede presentarse a la prueba cualquier Bachiller con independencia de modalidad o vía?','Sí','No, solo Bachillerato de Ciencias','Solo quienes cursaron Humanidades','Únicamente quien obtuvo matrícula de honor','Artículo 10.1 del Real Decreto 534/2024.','baja'],
    ['¿Sobre qué materias versa la prueba de acceso?','Materias comunes y materia específica obligatoria de modalidad de segundo de Bachillerato','Materias de primero de Bachillerato exclusivamente','Asignaturas universitarias','Solo lengua y matemáticas','Artículo 11.1 del Real Decreto 534/2024.','media'],
    ['¿Cuántos ejercicios tiene la prueba de acceso?','Cuatro, o cinco en comunidades con lengua cooficial','Dos en todo caso','Seis obligatoriamente','Uno por cada asignatura cursada','Artículo 12.1 del Real Decreto 534/2024.','baja'],
    ['¿Entre qué materias puede elegir el alumnado en el ejercicio histórico-filosófico?','Historia de España o Historia de la Filosofía','Geografía o Economía','Latín o Griego','Historia del Arte o Filosofía','Artículo 12.1.b del Real Decreto 534/2024.','media'],
    ['¿Qué lenguas extranjeras pueden elegirse en Lengua Extranjera II?','Alemán, francés, inglés, italiano o portugués','Solo inglés','Inglés o francés exclusivamente','Cualquier lengua sin limitación','Artículo 12.1.c del Real Decreto 534/2024.','media'],
    ['¿Qué diseño deben tener los ejercicios de la prueba?','Competencial','Puramente memorístico','Exclusivamente oral','Basado solo en preguntas tipo test','Artículo 13.1 del Real Decreto 534/2024.','baja'],
    ['¿Cuántos modelos de ejercicio se entrega en cada materia?','Un único modelo, aunque algunos apartados pueden ofrecer elección','Dos modelos completos obligatorios','Tres modelos al azar','Un modelo diferente para cada estudiante','Artículo 13.7 del Real Decreto 534/2024.','media'],
    ['¿Quién determina los materiales auxiliares permitidos o prohibidos?','Las comisiones organizadoras de la prueba','Cada estudiante','El Consejo Social','Las academias privadas','Artículo 13.9 del Real Decreto 534/2024.','media'],
    ['¿Qué peso mínimo tiene la corrección lingüística en tareas que exigen producir textos?','El 10 por ciento de la calificación de la pregunta o tarea','El 1 por ciento','El 25 por ciento','No tiene peso mínimo','Artículo 13.10 del Real Decreto 534/2024.','alta'],
    ['¿Cómo se califica cada ejercicio de la prueba?','De 0 a 10 puntos con dos cifras decimales','De 0 a 100 sin decimales','Apto o no apto','De 1 a 5','Artículo 14.1 del Real Decreto 534/2024.','baja'],
    ['¿Qué nota mínima debe tener la prueba para computar en la calificación de acceso?','4 puntos','5 puntos','3 puntos','6 puntos','Artículo 14.2 del Real Decreto 534/2024.','alta'],
    ['¿Cómo se calcula la calificación de acceso?','60 por ciento de Bachillerato y 40 por ciento de la prueba','50 por ciento y 50 por ciento','40 por ciento de Bachillerato y 60 por ciento de la prueba','Solo con la prueba','Artículo 15.1 del Real Decreto 534/2024.','alta'],
    ['¿Qué calificación mínima ponderada permite reunir los requisitos de acceso?','5 puntos','4 puntos','6 puntos','7 puntos','Artículo 15.2 del Real Decreto 534/2024.','media'],
    ['¿Qué validez tiene la calificación de acceso a la universidad?','Indefinida','Dos cursos académicos','Cinco años','Solo la convocatoria obtenida','Artículo 15.3 del Real Decreto 534/2024.','baja'],
    ['¿Cuántas convocatorias anuales de la prueba de acceso se celebran?','Dos: ordinaria y extraordinaria','Una única convocatoria','Tres convocatorias','Cuatro convocatorias trimestrales','Artículo 16.1 del Real Decreto 534/2024.','baja'],
    ['¿De cuántas materias adicionales puede examinarse el alumnado para mejorar su nota de admisión?','Hasta tres materias de segundo de Bachillerato y una segunda lengua extranjera distinta','Solo una materia','Hasta cinco materias sin límites','Ninguna materia adicional','Artículo 22.1 del Real Decreto 534/2024.','alta'],
    ['¿Cuántas materias deben tener en cuenta como mínimo las universidades en la admisión?','Dos materias','Una materia','Tres materias','Cuatro materias','Artículo 22.2 del Real Decreto 534/2024.','media'],
    ['¿Cómo se eligen las materias ponderadas para calcular la nota de admisión?','Se toman las que resulten más favorables para cada estudiante entre las determinadas por la universidad','Se eligen siempre las dos primeras alfabéticamente','Las decide el centro de Bachillerato','Se sortean','Artículo 22.3 del Real Decreto 534/2024.','media'],
    ['¿Durante cuánto tiempo valen las calificaciones de materias usadas para admisión?','El curso inmediato y los dos cursos académicos siguientes','Solo el curso inmediato','Cinco cursos','Indefinidamente','Artículo 22.5 del Real Decreto 534/2024.','alta'],
    ['¿Con cuánta antelación deben publicar las universidades públicas sus procedimientos de admisión?','Con al menos un curso académico de antelación','Con diez días','Después de abrir la matrícula','No existe obligación de publicidad previa','Artículo 25.2 del Real Decreto 534/2024.','alta'],
    ['¿Puede una universidad pública dejar vacantes plazas ofertadas si existen solicitudes válidas en plazo?','No','Sí, libremente','Solo si lo autoriza el Rector','Sí, cuando la demanda es inferior a diez personas','Artículo 25.6 del Real Decreto 534/2024.','media']
  ];

  function buildBank(number, rows, source) {
    const current = theme(number);
    if (!current) return;
    const questions = rows.map((row, index) => {
      const [text, correct, w1, w2, w3, justification, difficulty] = row;
      const raw = [correct, w1, w2, w3];
      const shift = index % 4;
      const ordered = raw.slice(shift).concat(raw.slice(0, shift));
      return {
        id: `uc3m-v76-t${number}-q${index + 1}`,
        text,
        options: ordered.map((value, position) => ({ letter: 'ABCD'[position], text: value })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        source,
        difficulty,
        auditReal: true,
        auditTheme: number
      };
    });
    ope.themeTests[current.id] = questions;
    current.auditStatus = `banco real 30+ v0.76 · norma estatal consolidada · tema ${number}`;
    current.motorCoverage = `uc3m-academica-t${number}-completo-v76`;
    current.officialSourceUrl = source;
  }

  buildBank(16, rows16, RD822);
  buildBank(17, rows17, RD534);

  const t16 = theme(16);
  if (t16) {
    t16.sections = [
      { heading: 'Resumen orientado al aprobado', paragraphs: ['El Real Decreto 822/2021 ordena Grado, Máster y Doctorado, regula planes de estudios, créditos, modalidades docentes, reconocimiento y aseguramiento de la calidad.', 'La normativa interna de la UC3M desarrolla matrícula, permanencia y evaluación; esta versión cierra el marco estatal consolidado y mantiene identificada la capa institucional pendiente de actualización anual.'] },
      { heading: 'Planes de estudios y evaluación', paragraphs: ['Las guías docentes deben ser accesibles antes de la matrícula y contener actividades y sistema de evaluación. Los planes se organizan normalmente en cursos de 60 ECTS.', 'El reconocimiento facilita movilidad, pero TFG y TFM no se reconocen salvo en programas de movilidad.'] },
      { heading: 'Grado', paragraphs: ['La regla general son 240 ECTS, con 60 de formación básica. El TFG es obligatorio, tiene entre 6 y 24 ECTS en grados de 240 y se defiende públicamente.', 'La modalidad híbrida implica entre 40 y 60 % no presencial; la virtual, al menos 80 %.'] },
      { heading: 'Máster y estructuras específicas', paragraphs: ['Los Másteres tienen 60, 90 o 120 ECTS. El TFM tiene entre 6 y 30 ECTS y las prácticas no superan un tercio.', 'La matrícula condicionada admite TFG y hasta 9 ECTS pendientes, sin poder obtener el Máster antes que el Grado.'] },
      { heading: 'Opo-Test: puntos calientes', paragraphs: ['• Grado: 240 ECTS; formación básica mínima 60.','• TFG: 6–24 ECTS y defensa pública.','• Híbrido: 40–60 %; virtual: mínimo 80 %.','• Máster: 60/90/120; complementos máximo 20 %.','• Reserva por discapacidad en Máster: mínimo 5 %.'] }
    ];
    t16.reviewTable = [['Bloque','Regla clave','Artículo'],['Guías docentes','Accesibles antes de matrícula','9'],['Reconocimiento','TFG/TFM no, salvo movilidad','10'],['Grado','240 ECTS; 60 básicos','14'],['Modalidades','Híbrida 40–60 %; virtual ≥80 %','14.7'],['Máster','60/90/120; TFM 6–30','17'],['Matrícula condicionada','TFG y hasta 9 ECTS pendientes','18.4'],['Calidad','Verificación, seguimiento, modificación y renovación','25']];
  }

  const t17 = theme(17);
  if (t17) {
    t17.sections = [
      { heading: 'Resumen orientado al aprobado', paragraphs: ['El Real Decreto 534/2024 diferencia acceso y admisión, regula la PAU y fija las bases para adjudicar plazas.', 'Esta versión utiliza la redacción vigente a 12 de julio de 2026 y evita anticipar la modificación del artículo 23 cuya entrada en vigor está prevista para el 22 de julio de 2026.'] },
      { heading: 'Vías de acceso', paragraphs: ['Bachiller requiere la prueba; los Técnicos Superiores pueden acceder sin ella y competir en admisión. También existen vías para mayores de 25, 40 y 45 años.', 'Quien continúe estudios extranjeros necesita al menos 30 ECTS reconocidos para seguir por esa vía.'] },
      { heading: 'Prueba de acceso', paragraphs: ['Consta de cuatro ejercicios, cinco en territorios con lengua cooficial. Tiene diseño competencial, un modelo por materia y criterios públicos de corrección.', 'La prueba debe alcanzar 4 para ponderar; el acceso se calcula 60 % Bachillerato y 40 % prueba, con mínimo final 5.'] },
      { heading: 'Admisión', paragraphs: ['Puede mejorarse la nota con hasta tres materias y una segunda lengua extranjera. Las universidades consideran al menos dos materias y seleccionan las más favorables.', 'Las calificaciones de admisión valen el curso inmediato y los dos siguientes. Los procedimientos deben publicarse con un curso de antelación.'] },
      { heading: 'Opo-Test: puntos calientes', paragraphs: ['• Técnico Superior: acceso sin PAU.','• Prueba: cuatro o cinco ejercicios.','• Nota de prueba mínima para ponderar: 4.','• Acceso: 60/40 y mínimo final 5.','• Admisión: al menos dos materias; vigencia 1 + 2 cursos.'] }
    ];
    t17.reviewTable = [['Bloque','Regla clave','Artículo'],['Acceso/admisión','Requisito previo frente a adjudicación','2'],['Técnico Superior','Acceso sin prueba','5'],['PAU','Cuatro o cinco ejercicios','12'],['Calificación','Prueba ≥4; acceso 60/40 y ≥5','14–15'],['Convocatorias','Ordinaria y extraordinaria','16'],['Mejora admisión','Hasta 3 materias + segunda lengua','22'],['Publicidad','Un curso de antelación','25.2']];
  }

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      value ^= text.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 75 && round < 240) {
      ope.themes.forEach((current, themeIndex) => {
        if (selected.length >= 75) return;
        const bank = shuffled(ope.themeTests?.[current.id] || [], seed * 347 + themeIndex + round);
        for (let offset = 0; offset < bank.length; offset += 1) {
          const question = bank[(round + themeIndex + offset) % bank.length];
          const key = norm(question?.text);
          if (!key || used.has(key)) continue;
          used.add(key);
          selected.push({ ...question, auditTheme: Number(current.number) });
          break;
        }
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2371);
    return {
      id: `uc3m-v76-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v76-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v76-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true, onlyReal: true }
    };
  }
  ope.simulacros = [1, 2, 3].map(buildSimulation);

  const themeAudit = ope.themes.map(current => ({ number: Number(current.number), count: (ope.themeTests?.[current.id] || []).length, target: 30 }));
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const targetThemes = themeAudit.filter(item => item.count >= 30).length;
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));

  ope.testAudit = { ...(ope.testAudit || {}), version: 'v0.76.0', date: '2026-07-12', totalQuestions, targetThemes, minimumQuestions, themes: themeAudit, genericQuestions: 0 };
  ope.uc3mInternalAudit = {
    ...(ope.uc3mInternalAudit || {}),
    version: 'v0.76.0',
    estimatedProgress: 88,
    completed: ['Temas 16 y 17 completados con 30 preguntas verificadas cada uno','Los 20 temas UC3M alcanzan 30 preguntas reales','RD 822/2021 consolidado y RD 534/2024 vigente integrados','Simulacros 70 + 5 regenerados'],
    pending: ['Incorporar la normativa interna UC3M vigente de matrícula, permanencia y evaluación','Actualizar parámetros anuales de ponderación, cupos y calendario UC3M','Cerrar presupuesto, bases de ejecución y delegaciones internas vigentes','Auditoría final de literalidad y dificultad']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-12', changes: ['Temas 16 y 17 completados con 60 preguntas verificadas','Banco UC3M elevado a 600 preguntas','20 de 20 temas alcanzan 30 preguntas','Simulacros 70 + 5 regenerados'] });

  window.OPOWEB_UC3M_V76 = { version: `v${VERSION}`, totalQuestions, targetThemes, minimumQuestions, genericQuestions: 0, simulations: ope.simulacros.length, completedThemes: [16, 17], themes: themeAudit };
})();
