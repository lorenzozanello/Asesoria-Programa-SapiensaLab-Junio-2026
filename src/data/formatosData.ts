export type FormatoItem = {
  rank: number;
  title: string;
  description: string;
};

export type FormatoCategory = {
  category: string;
  description?: string;
  items: FormatoItem[];
  strategicReading: string;
};

export const formatosInfo: FormatoCategory[] = [
  {
    category: "Formatos formativos",
    items: [
      { rank: 1, title: "Programa Certificado Semipresencial SapienciaLab", description: "Experiencia formativa formal que combina contenidos académicos, sesiones presenciales, talleres aplicados, mentorías y entregables. Es la expresión formativa de mayor impacto." },
      { rank: 2, title: "Programa Certificado Virtual SapienciaLab", description: "Modalidad escalable del programa certificado. Permite ampliar cobertura, llegar a más públicos y crear una base común de formación emprendedora." },
      { rank: 3, title: "Ruta de aprendizaje SapienciaLab", description: "Arquitectura pedagógica que organiza los contenidos según etapa de madurez: ideación, validación, operación, crecimiento o escalamiento." },
      { rank: 4, title: "Microcursos SapienciaLab", description: "Cursos breves y prácticos sobre temas específicos: costos, ventas, pitch, validación, marca, IA, formalización o finanzas." },
      { rank: 5, title: "Módulos autogestionados", description: "Unidades de aprendizaje que el participante puede completar a su ritmo. Funcionan mejor como soporte del programa virtual o semipresencial." }
    ],
    strategicReading: "El eje debería ser el Programa Certificado SapienciaLab, ofrecido en modalidad virtual y semipresencial. Los microcursos y módulos deben funcionar como piezas de apoyo, no como productos dispersos."
  },
  {
    category: "Formatos de inspiración y sensibilización",
    items: [
      { rank: 1, title: "Masterclass SapienciaLab", description: "Sesión con un experto, empresario, inversionista, emprendedor destacado o aliado estratégico. Aporta reputación, actualización y visión externa." },
      { rank: 2, title: "Panel de expertos", description: "Conversación con varios actores sobre un tema estratégico: inversión, innovación, mercado, sostenibilidad, IA, crecimiento o ecosistema emprendedor." },
      { rank: 3, title: "Conversatorio", description: "Espacio de diálogo menos formal que un panel. Útil para comunidad, reflexión e intercambio de experiencias." },
      { rank: 4, title: "Conferencia especializada", description: "Presentación académica o técnica sobre tendencias, metodologías o temas de frontera." },
      { rank: 5, title: "Charla inspiracional", description: "Formato útil para motivar, pero de bajo impacto si no se conecta con una ruta posterior de trabajo. Mucha inspiración sin acción es gasolina sin motor." }
    ],
    strategicReading: "SapienciaLab debería priorizar casos vivos emprendedores y masterclasses de alto nivel. Las charlas motivacionales deben ser ocasionales, no columna vertebral."
  },
  {
    category: "Formatos prácticos y aplicados",
    items: [
      { rank: 1, title: "Workshop SapienciaLab", description: "Taller aplicado que debe terminar en un entregable: propuesta de valor, pitch, matriz de costos, mapa de cliente, estrategia comercial, etc." },
      { rank: 2, title: "Laboratorio de validación", description: "Espacio para validar problema, cliente, solución, canal, precio o disposición de pago. Es fundamental para evitar emprendimientos sin mercado." },
      { rank: 3, title: "Laboratorio de prototipado", description: "Espacio para convertir ideas en prototipos físicos, digitales, comerciales, narrativos o de servicio." },
      { rank: 4, title: "Laboratorio de ideación", description: "Espacio para generar ideas de negocio o soluciones a partir de problemas reales. Útil en etapas tempranas." },
      { rank: 5, title: "Orientación legal y de formalización", description: "Espacio para orientar sobre Cámara de Comercio, RUT, marca, contratos, permisos, facturación y obligaciones básicas." }
    ],
    strategicReading: "Esta categoría es central. SapienciaLab debería concentrarse en validación, ventas, clínicas empresariales y workshops con entregables."
  },
  {
    category: "Formatos intensivos de desarrollo emprendedor",
    items: [
      { rank: 1, title: "Aceleración SapienciaLab", description: "Programa estructurado para emprendimientos con tracción que buscan crecer, fortalecer su modelo, abrir canales y conectarse con aliados." },
      { rank: 2, title: "Bootcamp SapienciaLab", description: "Formato intensivo general que puede integrar formación, mentoría, validación, pitch y retos." },
      { rank: 3, title: "Incubación SapienciaLab", description: "Acompañamiento a ideas o emprendimientos nacientes para convertirlos en negocios viables. Tiene retorno más lento, pero construye cantera." },
      { rank: 4, title: "Bootcamp de pitch", description: "Entrenamiento intensivo para preparar presentaciones de negocio. Es útil, pero debe venir después de fortalecer el modelo." },
      { rank: 5, title: "Bootcamp de ideación", description: "Intensivo para pasar de problema u oportunidad a idea estructurada. Útil para estudiantes y etapas iniciales." }
    ],
    strategicReading: "El enfoque diferencial de las actividades permite mayor asertividad en la experiencia y percepcion de valor a los participantes."
  },
  {
    category: "Formatos de innovación abierta y retos",
    items: [
      { rank: 1, title: "Reto de innovación abierta", description: "Convocatoria para resolver desafíos reales con participación de estudiantes, emprendedores, empresas, profesores y aliados." },
      { rank: 2, title: "Challenge empresarial", description: "Reto planteado por una empresa aliada. Puede generar soluciones, relacionamiento, ingresos institucionales y conexión universidad-empresa." },
      { rank: 3, title: "Retos territoriales", description: "Espacio para resolver problemáticas de ciudad, región o comunidad mediante emprendimiento e innovación." },
      { rank: 4, title: "Hackathon SapienciaLab", description: "Jornada intensiva para desarrollar soluciones o prototipos en poco tiempo. Tiene alto valor de visibilidad, pero requiere seguimiento posterior." },
      { rank: 5, title: "Challenge social", description: "Reto orientado a problemas sociales, ambientales, comunitarios o de inclusión. Debe tener ruta de implementación para no quedarse en buena intención." }
    ],
    strategicReading: "La apuesta debería ser SapienciaLab Open Challenges, con retos empresariales, territoriales y sociales. El hackathon debe ser una herramienta, no el producto completo."
  },
  {
    category: "Formatos de mentoría y acompañamiento",
    items: [
      { rank: 1, title: "Mentoría especializada", description: "Acompañamiento con expertos en ventas, finanzas, legal, marca, tecnología, impacto, operaciones o inversión." },
      { rank: 2, title: "Mesa de mentores", description: "Espacio donde varios mentores revisan un emprendimiento y entregan recomendaciones desde distintas perspectivas." },
      { rank: 3, title: "Comité de avance", description: "Revisión periódica del progreso, cumplimiento de metas, indicadores y próximos pasos." },
      { rank: 4, title: "Acompañamiento por cohortes", description: "Modelo grupal donde varios emprendimientos avanzan por una ruta común. Es eficiente y genera comunidad." },
      { rank: 5, title: "Mentoría grupal", description: "Sesión con varios emprendimientos que comparten retos similares. Útil para temas comunes." }
    ],
    strategicReading: "El modelo ideal combina cohorte + mentoría especializada + comité de avance."
  },
  {
    category: "Formatos de conexión y comunidad",
    items: [
      { rank: 1, title: "Rueda comercial", description: "Encuentro entre emprendimientos y potenciales compradores, empresas, distribuidores, instituciones o aliados comerciales." },
      { rank: 2, title: "Rueda de conexiones", description: "Espacio curado para generar contactos útiles entre emprendedores, mentores, aliados, empresarios e instituciones." },
      { rank: 3, title: "Networking SapienciaLab", description: "Encuentro para conectar actores del ecosistema. Debe tener objetivos claros para no quedarse en café con escarapela." },
      { rank: 4, title: "Alumni SapienciaLab", description: "Red de egresados del programa. Puede convertirse en comunidad de casos, mentores, aliados y embajadores." },
      { rank: 5, title: "Club de emprendedores SapienciaLab", description: "Comunidad para compartir aprendizajes, avances y oportunidades" }
    ],
    strategicReading: "La comunidad debe construirse alrededor de oportunidades reales: ventas, conexiones, alianzas, mentores y visibilidad."
  },
  {
    category: "Formatos de visibilidad y demostración",
    items: [
      { rank: 1, title: "Demo Day SapienciaLab", description: "Evento insignia donde los emprendimientos presentan avances ante jurados, aliados, compradores, inversionistas o comunidad." },
      { rank: 2, title: "Pitch Day", description: "Jornada centrada en presentaciones de negocio. Útil para evaluación, entrenamiento y selección." },
      { rank: 3, title: "Feria de emprendimiento", description: "Evento abierto de exhibición, ventas, networking y posicionamiento. Debe tener curaduría para no parecer bazar universitario." },
      { rank: 4, title: "Expo SapienciaLab", description: "Evento institucional de mayor escala para mostrar resultados, aliados, casos y aprendizajes." },
      { rank: 5, title: "Galería de emprendimientos", description: "Vitrina física o digital de los emprendimientos. Funciona si se actualiza y se conecta con oportunidades." }
    ],
    strategicReading: "Lo más fuerte sería una SapienciaLab Demo Week, integrando demo day, feria y galeria."
  },
  {
    category: "Formatos de evaluación y selección",
    items: [
      { rank: 1, title: "Diagnóstico de madurez emprendedora", description: "Evalúa el estado del emprendimiento en modelo, mercado, ventas, finanzas, equipo, operación, legalidad e impacto." },
      { rank: 2, title: "Assessment emprendedor", description: "Evaluación integral del negocio y del perfil del emprendedor: motivación, capacidades, compromiso y brechas." },
      { rank: 3, title: "Rúbrica de evaluación", description: "Instrumento para calificar emprendimientos, pitches, prototipos, avances o resultados de manera comparable y transparente." },
      { rank: 4, title: "Comité de selección", description: "Espacio para decidir qué emprendimientos ingresan a una cohorte, programa, bootcamp o aceleración, cuando aplique." },
      { rank: 5, title: "Comité de cierre", description: "Revisión final del proceso, resultados, aprendizajes y recomendaciones de continuidad." }
    ],
    strategicReading: "El flujo recomendado es:\nConvocatoria → Assessment → Diagnóstico → Selección → Ruta → Cierre."
  },
  {
    category: "Formatos de contenido y comunicación",
    items: [
      { rank: 1, title: "Historias de emprendedores", description: "Narrativas sobre transformación, aprendizajes, logros y trayectorias de emprendedores acompañados. Fortalecen reputación e identidad." },
      { rank: 2, title: "Casos de estudio", description: "Documentación profunda de emprendimientos, decisiones, retos, estrategias y resultados. Útiles para docencia, investigación y comunicación." },
      { rank: 3, title: "Toolkit SapienciaLab", description: "Caja de herramientas con plantillas, guías, metodologías y recursos prácticos para emprendedores." },
      { rank: 4, title: "Serie de cápsulas formativas", description: "Videos cortos y prácticos sobre temas clave de emprendimiento e innovación." },
      { rank: 5, title: "Newsletter SapienciaLab", description: "Boletín periódico con oportunidades, eventos, convocatorias, historias, herramientas y resultados." },
      { rank: 6, title: "Repositorio de recursos", description: "Biblioteca digital con materiales, videos, formatos, lecturas y herramientas. Su valor depende de la curaduría." },
      { rank: 7, title: "Blog SapienciaLab", description: "Espacio para publicar análisis, aprendizajes, tendencias y casos. Requiere disciplina editorial." },
      { rank: 8, title: "Podcast SapienciaLab", description: "Conversaciones con emprendedores, expertos y aliados. Tiene valor de marca, pero exige producción constante y retorno más lento." }
    ],
    strategicReading: "Priorizar historias, casos, toolkit y guías prácticas. El podcast puede esperar hasta que exista una comunidad más consolidada."
  },
  {
    category: "Formatos híbridos o productos insignia",
    description: "Estos son formatos integradores que combinan varias experiencias anteriores. Pueden convertirse en la arquitectura de oferta más visible de SapienciaLab.",
    items: [
      { rank: 1, title: "SapienciaLab Market Ready", description: "Ruta para preparar emprendimientos para vender mejor, entrar a nuevos canales, fortalecer propuesta comercial y conectar con compradores." },
      { rank: 2, title: "SapienciaLab Validate", description: "Ruta para validar problema, cliente, solución, mercado, precio y modelo de ingresos antes de crecer." },
      { rank: 3, title: "SapienciaLab Grow", description: "Ruta para emprendimientos con ventas que necesitan ordenar operación, mejorar rentabilidad, fortalecer canales y crecer." },
      { rank: 4, title: "SapienciaLab Corporate Challenges", description: "Programa de retos empresariales con compañías aliadas, estudiantes, emprendedores y capacidades universitarias." },
      { rank: 5, title: "SapienciaLab Scale", description: "Ruta para emprendimientos con tracción que buscan escalar, abrir mercados, estructurar procesos o prepararse para inversión." },
      { rank: 6, title: "SapienciaLab Investment Ready", description: "Programa para preparar emprendimientos para convocatorias, financiación, inversión o negociación con aliados estratégicos." },
      { rank: 7, title: "SapienciaLab Impact", description: "Ruta para emprendimientos con impacto social, ambiental, cultural o territorial, con métricas y narrativa de transformación." },
      { rank: 8, title: "SapienciaLab Campus Challenge", description: "Retos de innovación dirigidos a estudiantes y comunidad universitaria. Fortalece cultura emprendedora." }
    ],
    strategicReading: "Estos productos deben ser la capa más visible de SapienciaLab. Las actividades internas —workshops, mentorías, bootcamps, clínicas— deben organizarse al servicio de estas rutas."
  }
];
