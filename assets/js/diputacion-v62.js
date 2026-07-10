(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.62.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];

  const specs = {
    24: {
      sections: [
        ['Igualdad de trato y categorías de discriminación', [
          'La igualdad de trato supone ausencia de discriminación directa o indirecta por razón de sexo. La Ley Orgánica 3/2007 define también el acoso sexual, el acoso por razón de sexo, la discriminación por embarazo o maternidad y la indemnidad frente a represalias.',
          'Los actos discriminatorios producen consecuencias jurídicas efectivas: nulidad, reparación o indemnización real y proporcionada y, cuando proceda, sanción.'
        ]],
        ['Políticas públicas y acciones positivas', [
          'La igualdad informa el ordenamiento jurídico y debe integrarse transversalmente en la adopción y ejecución de normas y políticas públicas. Las acciones positivas son admisibles para corregir desigualdades de hecho si son razonables y proporcionadas.',
          'La presencia equilibrada supone que las personas de cada sexo no superen el sesenta por ciento ni sean menos del cuarenta por ciento.'
        ]],
        ['Planes de igualdad y empleo público', [
          'Las empresas de cincuenta o más personas trabajadoras deben elaborar y aplicar un plan de igualdad. El diagnóstico y el plan deben negociarse conforme a la legislación laboral.',
          'Las Administraciones públicas deben remover obstáculos, facilitar conciliación sin menoscabo profesional, fomentar formación en igualdad y promover presencia equilibrada.'
        ]],
        ['Castilla-La Mancha', [
          'La Ley 12/2010 se aplica a la Junta, su sector público, las entidades locales, las universidades regionales y, en los términos legales, a personas físicas y jurídicas en Castilla-La Mancha.',
          'La normativa regional integra perspectiva y transversalidad de género, exige informes de impacto en anteproyectos, disposiciones generales y planes del Consejo de Gobierno, promueve estadísticas desagregadas, presupuestos con perspectiva de género y lenguaje administrativo no sexista.'
        ]]
      ],
      rows: [
        ['¿Qué implica el principio de igualdad de trato entre mujeres y hombres?', 'La ausencia de toda discriminación directa o indirecta por razón de sexo.', ['La igualdad exclusivamente salarial.', 'La prohibición de cualquier diferencia de trato razonable.', 'La identidad absoluta de todas las medidas públicas.'], 'Artículo 3 de la Ley Orgánica 3/2007.'],
        ['¿Qué función cumple la igualdad de trato y oportunidades en el ordenamiento jurídico?', 'Es un principio informador que debe integrarse al interpretar y aplicar las normas.', ['Solo opera en procesos electorales.', 'Se aplica únicamente a relaciones privadas.', 'Carece de efectos interpretativos.'], 'Artículo 4 de la Ley Orgánica 3/2007.'],
        ['¿A qué ámbitos laborales alcanza la igualdad de trato?', 'Acceso al empleo, formación, promoción profesional y condiciones de trabajo.', ['Solo a la contratación indefinida.', 'Únicamente al empleo público.', 'Solo a la extinción del contrato.'], 'Artículo 5 de la Ley Orgánica 3/2007.'],
        ['¿Cuándo existe discriminación directa por razón de sexo?', 'Cuando una persona es, ha sido o pudiera ser tratada menos favorablemente por su sexo que otra en situación comparable.', ['Cuando una medida neutra beneficia por igual.', 'Cuando existe una acción positiva proporcionada.', 'Cuando se aplica un requisito profesional esencial y legítimo.'], 'Artículo 6.1 de la Ley Orgánica 3/2007.'],
        ['¿Qué caracteriza a la discriminación indirecta?', 'Una disposición o práctica aparentemente neutra que coloca a un sexo en desventaja particular sin justificación objetiva y proporcional.', ['Un trato expresamente peor por razón de sexo.', 'Cualquier diferencia estadística sin más.', 'Toda medida temporal de acción positiva.'], 'Artículo 6.2 de la Ley Orgánica 3/2007.'],
        ['¿Qué es acoso sexual?', 'Cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad y cree un entorno intimidatorio, degradante u ofensivo.', ['Toda discrepancia profesional.', 'Solo una conducta física constitutiva de delito.', 'Una crítica laboral objetiva.'], 'Artículo 7.1 de la Ley Orgánica 3/2007.'],
        ['¿Qué es acoso por razón de sexo?', 'Un comportamiento realizado en función del sexo que atenta contra la dignidad y crea un entorno intimidatorio, degradante u ofensivo.', ['Cualquier conflicto entre personas del mismo sexo.', 'Solo una desigualdad salarial colectiva.', 'Una medida de conciliación.'], 'Artículo 7.2 de la Ley Orgánica 3/2007.'],
        ['¿Cómo califica la ley el acoso sexual y el acoso por razón de sexo?', 'Como conductas discriminatorias.', ['Como simples irregularidades formales.', 'Como acciones positivas.', 'Como materias ajenas a la igualdad.'], 'Artículo 7.3 de la Ley Orgánica 3/2007.'],
        ['¿Qué ocurre si se condiciona un derecho a aceptar una situación de acoso?', 'Se considera también un acto de discriminación por razón de sexo.', ['Es válido si consta por escrito.', 'Solo es inválido en el empleo público.', 'No tiene relevancia jurídica.'], 'Artículo 7.4 de la Ley Orgánica 3/2007.'],
        ['¿Cómo se considera el trato desfavorable relacionado con embarazo o maternidad?', 'Discriminación directa por razón de sexo.', ['Discriminación indirecta únicamente.', 'Diferencia permitida sin justificación.', 'Acción positiva.'], 'Artículo 8 de la Ley Orgánica 3/2007.'],
        ['¿Qué protege la garantía de indemnidad frente a represalias?', 'A quien presenta queja, reclamación, denuncia, demanda o recurso para exigir igualdad.', ['Solo a quien obtiene sentencia firme favorable.', 'Únicamente a representantes sindicales.', 'Exclusivamente a personal funcionario.'], 'Artículo 9 de la Ley Orgánica 3/2007.'],
        ['¿Qué consecuencia tienen los actos y cláusulas discriminatorios?', 'Son nulos y generan reparación o indemnización real, efectiva y proporcional, además de las sanciones procedentes.', ['Solo producen una advertencia.', 'Se mantienen si fueron pactados.', 'Quedan convalidados por el paso del tiempo.'], 'Artículo 10 de la Ley Orgánica 3/2007.'],
        ['¿Cuándo pueden adoptarse acciones positivas a favor de las mujeres?', 'Para corregir desigualdades de hecho, mientras subsistan y con medidas razonables y proporcionadas.', ['Siempre y sin límite temporal.', 'Solo por empresas privadas.', 'Nunca, porque toda diferencia está prohibida.'], 'Artículo 11 de la Ley Orgánica 3/2007.'],
        ['¿Quién puede recabar tutela judicial frente a discriminación?', 'Cualquier persona, incluso tras terminar la relación en la que se produjo la discriminación.', ['Solo la Administración.', 'Únicamente quien mantenga vigente la relación.', 'Solo el Ministerio Fiscal.'], 'Artículo 12 de la Ley Orgánica 3/2007.'],
        ['En procedimientos por discriminación, ¿qué debe aportar la parte demandada ante indicios fundados?', 'Una justificación objetiva, razonable y suficientemente probada de las medidas adoptadas.', ['Una mera negación verbal.', 'Prueba de que no existía relación laboral.', 'Una autorización administrativa posterior.'], 'Artículo 13 de la Ley Orgánica 3/2007.'],
        ['¿Qué exige el principio de transversalidad?', 'Integrar activamente la igualdad en todas las políticas y acciones de los poderes públicos.', ['Crear una política aislada sin afectar a las demás.', 'Aplicar igualdad solo al presupuesto.', 'Limitar la igualdad al empleo privado.'], 'Artículo 15 de la Ley Orgánica 3/2007.'],
        ['¿Qué se entiende por composición equilibrada?', 'Que cada sexo represente al menos el cuarenta por ciento y no más del sesenta por ciento.', ['Una distribución exacta del cincuenta por ciento.', 'Que un sexo alcance al menos el veinte por ciento.', 'Cualquier composición aprobada por mayoría.'], 'Disposición adicional primera de la Ley Orgánica 3/2007.'],
        ['¿Qué empresas deben elaborar y aplicar un plan de igualdad por razón de plantilla?', 'Las empresas de cincuenta o más personas trabajadoras.', ['Solo las de más de doscientas cincuenta.', 'Todas las empresas desde una persona.', 'Únicamente las Administraciones públicas.'], 'Artículo 45.2 de la Ley Orgánica 3/2007.'],
        ['¿Se aplica la Ley 12/2010 de Castilla-La Mancha a las entidades locales de la región?', 'Sí, en los términos establecidos por la propia ley.', ['No, solo a la Administración autonómica.', 'Solo a municipios de gran población.', 'Únicamente si lo acuerda cada pleno.'], 'Artículo 3 de la Ley 12/2010 de Castilla-La Mancha.'],
        ['¿Qué actuaciones regionales deben incorporar informe de impacto de género?', 'Anteproyectos de ley, disposiciones generales y planes sometidos al Consejo de Gobierno.', ['Solo los reglamentos sancionadores.', 'Únicamente los presupuestos municipales.', 'Exclusivamente los procesos selectivos.'], 'Artículo 6.3 de la Ley 12/2010 de Castilla-La Mancha.'],
        ['¿Qué exige la Ley 12/2010 respecto de estadísticas y registros públicos autonómicos?', 'Incluir sistemáticamente la variable sexo e indicadores de género.', ['Eliminar cualquier desglose por sexo.', 'Publicar solo datos globales.', 'Usar indicadores únicamente cada diez años.'], 'Artículo 7 de la Ley 12/2010 de Castilla-La Mancha.'],
        ['¿Cómo debe ser el lenguaje utilizado por la Administración de Castilla-La Mancha?', 'Inclusivo de mujeres y hombres y libre de sesgos sexistas, incluso indirectos.', ['Exclusivamente masculino genérico.', 'El que elija cada empleado sin criterio común.', 'Solo neutro, prohibiendo masculino y femenino.'], 'Artículo 10 de la Ley 12/2010 de Castilla-La Mancha.']
      ]
    },
    25: {
      sections: [
        ['Obligación tributaria y elementos', [
          'La obligación tributaria principal tiene por objeto pagar la cuota. El hecho imponible determina el nacimiento de la obligación y el devengo fija el momento en que se entiende realizado.',
          'Junto a la obligación principal existen pagos a cuenta, obligaciones accesorias y obligaciones formales. Los sujetos incluyen contribuyentes, sustitutos, retenedores, obligados a ingresar a cuenta, responsables y sucesores.'
        ]],
        ['Extinción, prescripción y procedimientos', [
          'Las deudas tributarias se extinguen por pago, prescripción, compensación, condonación y otros medios legales. El plazo general de prescripción es de cuatro años.',
          'La gestión tributaria comprende devolución, declaración, verificación de datos, comprobación de valores y comprobación limitada. La revisión incluye procedimientos especiales, reposición y reclamaciones económico-administrativas.'
        ]],
        ['Tributación local, delegación y colaboración', [
          'Las entidades locales ejercen sus competencias tributarias mediante ley, ordenanzas fiscales y actos de gestión. Pueden delegar gestión, liquidación, inspección y recaudación en comunidades autónomas o entidades locales superiores en los términos legales.',
          'Las Administraciones tributarias colaboran e intercambian información. Los beneficios fiscales locales requieren cobertura legal, sin perjuicio de los supuestos expresamente autorizados.'
        ]]
      ],
      rows: [
        ['¿Cuál es el objeto de la obligación tributaria principal?', 'El pago de la cuota tributaria.', ['El pago exclusivo de sanciones.', 'La presentación de cualquier documento.', 'La inscripción en un registro administrativo.'], 'Artículo 19 de la Ley General Tributaria.'],
        ['¿Qué es el hecho imponible?', 'El presupuesto fijado por la ley cuya realización origina el nacimiento de la obligación tributaria principal.', ['La fecha límite de pago.', 'La sanción por incumplimiento.', 'El acto material de recaudación.'], 'Artículo 20.1 de la Ley General Tributaria.'],
        ['¿Qué determina el devengo?', 'El momento en que se entiende realizado el hecho imponible y nace la obligación tributaria principal.', ['La fecha de prescripción en todo caso.', 'El inicio automático del apremio.', 'La cuantía de una sanción.'], 'Artículo 21.1 de la Ley General Tributaria.'],
        ['¿Qué efecto produce una exención tributaria?', 'Aunque se realiza el hecho imponible, la ley exime del cumplimiento de la obligación principal.', ['Impide que exista hecho imponible.', 'Elimina todas las obligaciones formales.', 'Convierte el tributo en una tasa.'], 'Artículo 22 de la Ley General Tributaria.'],
        ['¿Qué incluyen las obligaciones tributarias accesorias?', 'Interés de demora, recargos por declaración extemporánea y recargos del periodo ejecutivo.', ['Solo sanciones tributarias.', 'Únicamente costas judiciales.', 'Exclusivamente pagos a cuenta.'], 'Artículo 25 de la Ley General Tributaria.'],
        ['¿Tiene el interés de demora naturaleza sancionadora?', 'No.', ['Sí, siempre.', 'Solo cuando supera un año.', 'Solo en tributos locales.'], 'Artículo 26 de la Ley General Tributaria.'],
        ['¿Cuál es el recargo inicial por presentar una autoliquidación fuera de plazo sin requerimiento previo?', 'Uno por ciento más otro uno por ciento por cada mes completo de retraso hasta doce meses.', ['Cinco por ciento fijo desde el primer día.', 'Diez por ciento más sanción.', 'Veinte por ciento sin reducción.'], 'Artículo 27.2 de la Ley General Tributaria.'],
        ['¿Qué recargo se aplica si el retraso supera doce meses?', 'Quince por ciento, más intereses desde el día siguiente a los doce meses.', ['Veinte por ciento desde el primer día.', 'Uno por ciento sin intereses.', 'Diez por ciento y sanción automática.'], 'Artículo 27.2 de la Ley General Tributaria.'],
        ['¿Cuáles son los recargos del periodo ejecutivo?', 'Recargo ejecutivo del cinco por ciento, reducido del diez por ciento y ordinario del veinte por ciento.', ['Uno, cinco y diez por ciento.', 'Diez, quince y veinticinco por ciento.', 'Solo un recargo único del veinte por ciento.'], 'Artículo 28 de la Ley General Tributaria.'],
        ['¿Quiénes tienen la condición de obligados tributarios?', 'Las personas o entidades a quienes la normativa impone obligaciones tributarias.', ['Solo los contribuyentes personas físicas.', 'Únicamente quienes hayan sido sancionados.', 'Solo las Administraciones públicas.'], 'Artículo 35 de la Ley General Tributaria.'],
        ['¿Quién es contribuyente?', 'El sujeto pasivo que realiza el hecho imponible.', ['Quien sustituye siempre al retenedor.', 'Cualquier responsable solidario.', 'El órgano que liquida el tributo.'], 'Artículo 36.2 de la Ley General Tributaria.'],
        ['¿Quién es sustituto del contribuyente?', 'El sujeto pasivo que, por imposición legal y en lugar del contribuyente, cumple la obligación principal y las formales inherentes.', ['El representante voluntario.', 'El funcionario que recauda.', 'El responsable subsidiario declarado insolvente.'], 'Artículo 36.3 de la Ley General Tributaria.'],
        ['¿Por qué medios se extinguen las deudas tributarias?', 'Pago, prescripción, compensación, condonación y otros medios previstos en las leyes.', ['Solo pago en efectivo.', 'Pago o sanción.', 'Únicamente prescripción judicial.'], 'Artículo 59 de la Ley General Tributaria.'],
        ['¿Cuál es el plazo general de prescripción tributaria?', 'Cuatro años.', ['Un año.', 'Tres años.', 'Cinco años.'], 'Artículo 66 de la Ley General Tributaria.'],
        ['¿Cuál de estos es un procedimiento de gestión tributaria?', 'La comprobación limitada.', ['El procedimiento penal.', 'La contratación administrativa.', 'La expropiación forzosa.'], 'Artículo 123 de la Ley General Tributaria.'],
        ['¿Qué vías integran la revisión tributaria en vía administrativa?', 'Procedimientos especiales de revisión, recurso de reposición y reclamaciones económico-administrativas.', ['Solo recurso de alzada.', 'Únicamente revisión de oficio de la Ley 39/2015.', 'Recurso de casación y amparo.'], 'Artículo 213 de la Ley General Tributaria.'],
        ['¿Qué carácter tiene el recurso de reposición tributario?', 'Potestativo y previo, en su caso, a la reclamación económico-administrativa.', ['Obligatorio antes de cualquier reclamación.', 'Subsidiario al recurso de alzada.', 'Exclusivamente judicial.'], 'Artículo 222 de la Ley General Tributaria.'],
        ['¿Pueden las entidades locales delegar la gestión y recaudación de sus tributos?', 'Sí, en comunidades autónomas o en otras entidades locales en cuyo territorio estén integradas.', ['No, nunca.', 'Solo en empresas privadas.', 'Únicamente en la Administración del Estado.'], 'Artículo 7 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Qué principio rige la colaboración tributaria entre Administraciones?', 'La colaboración para aplicación de tributos e intercambio de información en los términos legales.', ['La incomunicación de datos tributarios.', 'La cesión libre a cualquier particular.', 'La sustitución automática de competencias.'], 'Artículo 8 del texto refundido de la Ley Reguladora de las Haciendas Locales.'],
        ['¿Pueden reconocerse beneficios fiscales en tributos locales sin cobertura normativa?', 'No, salvo los supuestos expresamente previstos por las leyes.', ['Sí, mediante cualquier acuerdo verbal.', 'Sí, por decisión individual del alcalde.', 'Solo si benefician a todas las empresas.'], 'Artículo 9.1 del texto refundido de la Ley Reguladora de las Haciendas Locales.']
      ]
    },
    26: {
      sections: [
        ['Recaudación y periodos de pago', [
          'La recaudación consiste en el ejercicio de funciones administrativas dirigidas al cobro y se desarrolla en periodo voluntario o ejecutivo.',
          'El periodo ejecutivo comienza al día siguiente de finalizar el plazo voluntario de una deuda liquidada o, en autoliquidaciones presentadas sin ingreso fuera de plazo, al día siguiente de su presentación.'
        ]],
        ['Aplazamiento, fraccionamiento, compensación y devolución', [
          'Las deudas pueden aplazarse o fraccionarse cuando una situación económico-financiera transitoria impida pagar, salvo deudas legalmente inaplazables. La solicitud en voluntaria impide iniciar el ejecutivo mientras se tramita.',
          'La compensación extingue deudas hasta el importe concurrente con créditos reconocidos. Los ingresos indebidos se devuelven mediante el procedimiento legal e incluyen, cuando proceda, interés de demora.'
        ]],
        ['Procedimiento de apremio y embargo', [
          'El apremio se inicia mediante providencia de apremio, que identifica deuda, importe y recargo y tiene fuerza ejecutiva suficiente. Solo caben motivos tasados de oposición.',
          'El embargo debe respetar proporcionalidad y suficiencia. La diligencia de embargo puede impugnarse por causas tasadas distintas de las propias de la providencia.'
        ]],
        ['Revisión de actuaciones tributarias', [
          'El recurso potestativo de reposición y la reclamación económico-administrativa se interponen, con carácter general, en un mes. No pueden simultanearse respecto del mismo acto.',
          'La revisión no suspende automáticamente la ejecución salvo garantía, previsión legal o acuerdo del órgano competente.'
        ]]
      ],
      rows: [
        ['¿Qué es la recaudación tributaria?', 'El ejercicio de funciones administrativas conducentes al cobro de las deudas tributarias.', ['La imposición de sanciones penales.', 'La aprobación de ordenanzas fiscales.', 'La elaboración del presupuesto.'], 'Artículo 160.1 de la Ley General Tributaria.'],
        ['¿En qué periodos puede realizarse la recaudación?', 'En periodo voluntario o en periodo ejecutivo.', ['Solo en periodo voluntario.', 'Únicamente mediante embargo.', 'En fase administrativa o penal.'], 'Artículo 160.2 de la Ley General Tributaria.'],
        ['Para una deuda liquidada por la Administración, ¿cuándo comienza el periodo ejecutivo?', 'Al día siguiente de vencer el plazo de ingreso voluntario.', ['El mismo día de la notificación.', 'Un mes después del vencimiento.', 'Cuando se dicta la diligencia de embargo.'], 'Artículo 161.1.a de la Ley General Tributaria.'],
        ['En una autoliquidación presentada fuera de plazo sin ingreso, ¿cuándo comienza el periodo ejecutivo?', 'Al día siguiente de la presentación.', ['Al finalizar el año natural.', 'Cuando se notifica una liquidación provisional.', 'Nunca, porque no hubo requerimiento.'], 'Artículo 161.1.b de la Ley General Tributaria.'],
        ['Si una liquidación se notifica entre los días 1 y 15, ¿hasta cuándo puede pagarse normalmente en voluntaria?', 'Hasta el día 20 del mes posterior o inmediato hábil siguiente.', ['Hasta el día 5 del mismo mes.', 'Hasta el último día del trimestre.', 'Durante diez días hábiles.'], 'Artículo 62.2.a de la Ley General Tributaria.'],
        ['Si una liquidación se notifica entre los días 16 y último del mes, ¿hasta cuándo puede pagarse normalmente en voluntaria?', 'Hasta el día 5 del segundo mes posterior o inmediato hábil siguiente.', ['Hasta el día 20 del mismo mes.', 'Hasta el día 15 del mes posterior.', 'Durante un mes exacto.'], 'Artículo 62.2.b de la Ley General Tributaria.'],
        ['¿Cuándo pueden aplazarse o fraccionarse deudas tributarias?', 'Cuando una situación económico-financiera transitoria impida efectuar el pago, salvo deudas inaplazables.', ['Siempre y sin solicitud.', 'Solo después del embargo.', 'Únicamente por acuerdo judicial.'], 'Artículo 65.1 de la Ley General Tributaria.'],
        ['¿Qué efecto tiene pedir aplazamiento en periodo voluntario?', 'Impide iniciar el periodo ejecutivo mientras se tramita la solicitud.', ['Extingue la deuda.', 'Elimina los intereses.', 'Inicia automáticamente el embargo.'], 'Artículo 65.5 de la Ley General Tributaria.'],
        ['¿Suspende por sí sola el apremio una solicitud de aplazamiento presentada ya en ejecutivo?', 'No, aunque pueden paralizarse actuaciones de enajenación mientras se resuelve.', ['Sí, extingue el recargo.', 'Sí, sin límite temporal.', 'Convierte la deuda en voluntaria.'], 'Artículo 65.5 de la Ley General Tributaria.'],
        ['¿Qué efecto produce la compensación?', 'Extingue deuda y crédito hasta el importe concurrente.', ['Anula íntegramente toda deuda futura.', 'Suspende la prescripción indefinidamente.', 'Sustituye el tributo por una sanción.'], 'Artículo 71 de la Ley General Tributaria.'],
        ['¿Qué procedimiento permite recuperar una cantidad pagada indebidamente?', 'El procedimiento de devolución de ingresos indebidos.', ['La revisión catastral.', 'El procedimiento sancionador.', 'La tasación pericial contradictoria.'], 'Artículo 221 de la Ley General Tributaria.'],
        ['¿Cómo se inicia el procedimiento de apremio?', 'Mediante providencia de apremio notificada al obligado tributario.', ['Mediante diligencia de embargo directamente.', 'Por sentencia judicial necesaria.', 'Por una simple llamada telefónica.'], 'Artículo 167.1 de la Ley General Tributaria.'],
        ['¿Qué fuerza ejecutiva tiene la providencia de apremio?', 'La misma que una sentencia judicial para proceder contra bienes y derechos.', ['Ninguna hasta autorización judicial.', 'Solo permite requerir información.', 'Equivale a una propuesta sin efectos.'], 'Artículo 167.2 de la Ley General Tributaria.'],
        ['¿Cuál es un motivo válido de oposición a la providencia de apremio?', 'La extinción total de la deuda o prescripción del derecho a exigir el pago.', ['La disconformidad genérica con el tributo.', 'La falta de recursos económicos sin solicitar aplazamiento.', 'Un error tipográfico irrelevante.'], 'Artículo 167.3 de la Ley General Tributaria.'],
        ['¿Puede oponerse a la providencia alegando falta de notificación de la liquidación?', 'Sí.', ['No, nunca.', 'Solo en vía penal.', 'Únicamente si la deuda es inferior a mil euros.'], 'Artículo 167.3.c de la Ley General Tributaria.'],
        ['¿Qué límite general debe respetar el embargo?', 'Proporcionalidad y bienes suficientes para cubrir deuda, intereses, recargos y costas.', ['Embargar siempre todos los bienes.', 'Priorizar bienes de mayor valor aunque excedan ampliamente.', 'Excluir el interés y las costas.'], 'Artículo 169.1 de la Ley General Tributaria.'],
        ['¿Qué bienes aparecen en primer lugar en el orden legal de embargo?', 'Dinero efectivo o en cuentas abiertas en entidades de crédito.', ['Bienes inmuebles.', 'Salarios y pensiones.', 'Establecimientos mercantiles.'], 'Artículo 169.2 de la Ley General Tributaria.'],
        ['¿Cuál es un motivo de oposición a una diligencia de embargo?', 'Incumplimiento de las normas reguladoras del embargo.', ['Cualquier cuestión ya firme sobre la liquidación.', 'La mera petición de una nueva valoración.', 'No estar de acuerdo con la política fiscal.'], 'Artículo 170.3 de la Ley General Tributaria.'],
        ['¿Cuál es el plazo general para interponer recurso de reposición tributario?', 'Un mes desde el día siguiente a la notificación o desde que se produzcan los efectos del silencio.', ['Diez días.', 'Tres meses.', 'Cuatro años.'], 'Artículo 223.1 de la Ley General Tributaria.'],
        ['¿Cuál es el plazo general para interponer reclamación económico-administrativa?', 'Un mes.', ['Quince días.', 'Tres meses.', 'Seis meses.'], 'Artículo 235.1 de la Ley General Tributaria.']
      ]
    }
  };

  const buildQuestion = (number, row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (number + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return { id: `dip-v62-t${number}-q${index + 1}`, text, options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })), answer: letters[rotated.indexOf(correct)], justification, source: justification, difficulty: ['baja', 'media', 'alta'][index % 3], auditReal: true, auditTheme: number };
  };

  const isReal = question => {
    const text = norm(question?.text);
    if (!text || text.includes('cual es el enfoque correcto para preparar') || text.includes('como debe estudiarse')) return false;
    const options = (question.options || []).map(option => norm(option.text)).join(' ');
    return !options.includes('forma parte del enunciado oficial del tema') && Boolean(question.justification || question.source);
  };

  let addedQuestions = 0;
  Object.entries(specs).forEach(([key, spec]) => {
    const number = Number(key);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    theme.sections = spec.sections.map(([heading, paragraphs]) => ({ heading, paragraphs }));
    theme.tree = [`Tema ${number}`, ...spec.sections.map(([heading]) => `- ${heading}`)].join('\n');
    theme.reviewTable = [['Bloque', 'Qué dominar'], ...spec.sections.map(([heading]) => [heading, 'Concepto, sujeto, plazo, efecto, excepción y vía de revisión'])];
    const existing = ope.themeTests[theme.id] || [];
    const seen = new Set(existing.map(question => norm(question.text)));
    const additions = spec.rows.map((row, index) => buildQuestion(number, row, index)).filter(question => !seen.has(norm(question.text)));
    ope.themeTests[theme.id] = existing.concat(additions);
    addedQuestions += additions.length;
  });

  const auditThemes = ope.themes.map(item => {
    const all = ope.themeTests[item.id] || [];
    return { number: Number(item.number), id: item.id, total: all.length, content: all.filter(isReal).length };
  });
  ope.globalTestAudit = {
    ...(ope.globalTestAudit || {}),
    themes: auditThemes,
    targetThemes: auditThemes.filter(item => item.content >= 30).length,
    totalReal: auditThemes.reduce((total, item) => total + item.content, 0),
    targetPerTheme: 30,
    pendingTemplateThemes: auditThemes.filter(item => item.content < 30).map(item => item.number)
  };

  const shuffle = (items, seed) => {
    const out = items.slice();
    let state = seed >>> 0;
    for (let index = out.length - 1; index > 0; index -= 1) {
      state = (state * 1664525 + 1013904223) >>> 0;
      const swap = state % (index + 1);
      [out[index], out[swap]] = [out[swap], out[index]];
    }
    return out;
  };

  const buildSimulation = seed => {
    const pools = ope.themes.filter(item => Number(item.number) !== 22).map(item => ({ theme: item, questions: (ope.themeTests[item.id] || []).filter(isReal) })).filter(pool => pool.questions.length);
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 500) {
      pools.forEach((pool, poolIndex) => {
        if (selected.length >= 55) return;
        const question = pool.questions[(round + seed * 29 + poolIndex * 19) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 6373);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v62-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v62-s${seed}-r${index + 1}`, reserve: true }));
    return { id: `dip-v62-sim${seed}`, title: `Simulacro Diputación ${seed} · 50 + 5 reserva`, questions, reserveQuestions, audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, excludedPendingThemes: [22] } };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-10', changes: [`Añadidas ${addedQuestions} preguntas reales a los temas 24, 25 y 26`, 'Veinticinco temas elevados al objetivo mínimo de 30 preguntas reales', 'Reforzados igualdad, obligación tributaria, gestión, recaudación, apremio y revisión', 'Regenerados los tres simulacros con exclusión del tema 22'] });

  window.OPOWEB_DIPUTACION_V62 = {
    version: `v${VERSION}`,
    reinforcedThemes: [24, 25, 26],
    addedQuestions,
    cumulativeSecondPassQuestions: 380 + addedQuestions,
    cumulativeManualQuestions: 965 + addedQuestions,
    themesAtTargetInSecondPass: [...Array.from({ length: 21 }, (_, index) => index + 1), 23, 24, 25, 26],
    targetPerTheme: 30
  };
})();
