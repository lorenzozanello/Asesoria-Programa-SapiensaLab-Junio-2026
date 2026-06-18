import React from 'react';
import {
  Lightbulb,
  Rocket,
  Store,
  LineChart,
  Bot,
  Megaphone,
  Users,
  Target,
  Compass,
  GraduationCap,
  Briefcase,
  Settings,
  Presentation,
  Globe2,
  Search,
  LayoutTemplate,
  CheckCircle2,
  ListTodo,
  TrendingUp,
  Map,
  ShieldAlert,
  Calendar,
  MessageSquare,
  Network
} from 'lucide-react';
import { CardItem, PrincipleItem, IndicatorItem } from './types';

export const propositos: CardItem[] = [
  {
    id: 'p1',
    title: 'Rediseñar el modelo educativo',
    description: 'Pasar de una lógica de módulos temáticos a una lógica de sprints, retos, entregables y evidencias de avance.',
    accent: 'blue',
    icon: LayoutTemplate,
    modalBody: <p>El foco deja de ser qué contenidos se dictan y pasa a ser qué cambia en el emprendimiento después de cada etapa.</p>
  },
  {
    id: 'p2',
    title: 'Diferenciar rutas según madurez emprendedora',
    description: 'No todos los participantes necesitan lo mismo. Reconocer ideas tempranas, negocios con ventas iniciales y empresas en crecimiento.',
    accent: 'green',
    icon: Compass,
    modalBody: <p>El programa debe reconocer ideas tempranas, negocios con ventas iniciales, empresas en crecimiento, proyectos universitarios, científicos, creativos, sociales, empresariales, internos y externos.</p>
  },
  {
    id: 'p3',
    title: 'Fortalecer la conexión con mercado',
    description: 'SapienciaLab no solo debe enseñar emprendimiento: debe ayudar a salir al mercado.',
    accent: 'orange',
    icon: Store,
    modalBody: <p>Validar clientes, hacer entrevistas, testear prototipos, lanzar pilotos, conseguir leads, vender, conectar con compradores y llegar al Demo Day con datos.</p>
  },
  {
    id: 'p4',
    title: 'Convertir la mentoría en un sistema trazable',
    description: 'La mentoría debe tener mentor líder, especialistas, bitácora, acuerdos por sesión, seguimiento de tareas e indicadores.',
    accent: 'slate',
    icon: CheckCircle2,
    modalBody: <p>Debe pasar de conversación inspiradora a sistema de transformación empresarial, integrando alertas y gates de progresión.</p>
  },
  {
    id: 'p5',
    title: 'Integrar tecnología e inteligencia artificial de forma transversal',
    description: 'La IA no debe ser solo un módulo. Debe apoyar investigación, análisis y operaciones diarias.',
    accent: 'purple',
    icon: Bot,
    modalBody: <p>Debe apoyar investigación de mercado, análisis de competencia, cliente ideal, prototipado, contenido, automatización comercial, CRM, finanzas, pitch, analítica y vigilancia tecnológica.</p>
  },
  {
    id: 'p6',
    title: 'Mejorar la estrategia comercial y de posicionamiento',
    description: 'Pasar de comunicar horas, módulos y beneficios a comunicar transformación estructural.',
    accent: 'blue',
    icon: Megaphone,
    modalBody: <p>Transformar el mensaje: "Te ayudamos a transformar tu emprendimiento en un negocio validado, estructurado, vendible y conectado con la red Javeriana."</p>
  },
  {
    id: 'p7',
    title: 'Fortalecer comunidad, red y continuidad',
    description: 'SapienciaLab debe convertirse en una comunidad viva: alumni, directorio, encuentros y ruedas de negocio.',
    accent: 'green',
    icon: Users,
    modalBody: <p>Integrar mentorías posprograma, showcase, compradores, aliados, comunidad digital y seguimiento a 3, 6 y 12 meses.</p>
  },
  {
    id: 'p8',
    title: 'Medir impacto y resultados',
    description: 'Pasar de medir asistencia o satisfacción a medir ventas, empleos y variables duras de crecimiento.',
    accent: 'orange',
    icon: LineChart,
    modalBody: <p>Medir clientes nuevos, prototipos, alianzas, formalización, canales, supervivencia, impacto, calidad de mentorías y retorno reputacional.</p>
  }
];

export const alcances: CardItem[] = [
  {
    id: 'a1',
    title: 'Alcance estratégico',
    eyebrow: 'Visión y Posicionamiento',
    description: '¿Qué lugar quiere ocupar SapienciaLab dentro del ecosistema de emprendimiento universitario en Colombia y América Latina?',
    accent: 'blue',
    icon: Target,
    modalBody: <p>Incluye propósito, propuesta de valor, públicos objetivo, diferenciadores, posicionamiento institucional, relación con egresados, relación con ecosistema, modelo de sostenibilidad e indicadores.</p>
  },
  {
    id: 'a2',
    title: 'Alcance académico y pedagógico',
    eyebrow: 'Método y Currículo',
    description: '¿Cómo se aprende emprendimiento haciendo empresa, no solo hablando de empresa?',
    accent: 'green',
    icon: GraduationCap,
    modalBody: <p>Incluye modelo educativo, malla curricular, metodología, rutas por madurez, sprints, entregables, rúbricas, gates, IA, metodologías activas y balance entre teoría, taller y mentoría.</p>
  },
  {
    id: 'a3',
    title: 'Alcance de acompañamiento y mentoría',
    eyebrow: 'Seguimiento',
    description: '¿Cómo garantizar que cada emprendedor reciba acompañamiento pertinente y no solo exposición general a expertos?',
    accent: 'purple',
    icon: Briefcase,
    modalBody: <p>Incluye roles de mentores, mentor líder, mentor especialista, mentor alumni, criterios de asignación, frecuencia, bitácoras, CRM de mentoría y tableros de avance.</p>
  },
  {
    id: 'a4',
    title: 'Alcance operativo',
    eyebrow: 'Experiencia',
    description: '¿Cómo convertir la experiencia del participante en un proceso fluido, profesional y memorable?',
    accent: 'slate',
    icon: Settings,
    modalBody: <p>Incluye calendario, cohortes, sesiones presenciales y virtuales, Torre Sapiencia, coworking, reservas, eventos, showroom, webinars, inmersiones, comunicaciones, herramientas digitales, soporte y coordinación.</p>
  },
  {
    id: 'a5',
    title: 'Alcance comercial, mercadeo y comunicación',
    eyebrow: 'Atracción',
    description: '¿Cómo hacer que SapienciaLab sea deseable, claro y urgente para los emprendedores correctos?',
    accent: 'orange',
    icon: Presentation,
    modalBody: <p>Incluye marca, narrativa, landing page, campañas, piezas publicitarias, embudo, segmentación, egresados, redes, email marketing, pauta, testimonios, masterclasses y referidos.</p>
  },
  {
    id: 'a6',
    title: 'Alcance de ecosistema e impacto',
    eyebrow: 'Conexión',
    description: '¿Cómo hacer que SapienciaLab no sea solo un programa, sino una plataforma de conexión, reputación y crecimiento?',
    accent: 'blue',
    icon: Globe2,
    modalBody: <p>Incluye aliados, compradores, empresas, fondos, cámaras de comercio, universidades, alumni, Demo Day, ruedas de negocio, medición de impacto, reportes, casos de éxito y vigilancia tecnológica.</p>
  }
];

export const componentesVisibles: CardItem[] = [
  {
    id: 'c1',
    title: 'Diagnóstico del programa actual',
    description: 'Comprender el punto de partida, fortalezas reales y brechas que limitan la evolución.',
    accent: 'slate',
    icon: Search,
    modalTitle: 'Diagnóstico',
    modalBody: (
      <div className="space-y-4">
        <p><strong>Por qué:</strong> Comprender el punto de partida, fortalezas reales y brechas que limitan la evolución.</p>
        <p><strong>Cómo:</strong> Revisión de propuesta de valor, currículo, metodología, operación, públicos, beneficios, comunicación, resultados históricos, experiencia de participantes, mentores y seguimiento.</p>
        <p><strong>Entregables:</strong> Informe diagnóstico, matriz de fortalezas y brechas, mapa de oportunidades y priorización de aspectos críticos.</p>
        <p><strong>Resultado:</strong> Base objetiva para orientar el rediseño.</p>
      </div>
    )
  },
  {
    id: 'c4',
    title: 'Diseño del modelo de programa',
    description: 'Pasar de módulos y beneficios dispersos a un sistema integrado de aceleración.',
    accent: 'blue',
    icon: LayoutTemplate,
    modalTitle: 'Modelo de Programa',
    modalBody: (
      <div className="space-y-4">
        <p><strong>Por qué:</strong> Pasar de módulos y beneficios dispersos a un sistema integrado de aceleración.</p>
        <p><strong>Cómo:</strong> Estructurar rutas, metodología, experiencia, mentoría, mercado, tecnología, comunidad, formatos e indicadores.</p>
        <p><strong>Entregables:</strong> Modelo conceptual, arquitectura de componentes, mapa de funcionamiento y esquema de operación.</p>
        <p><strong>Resultado:</strong> Estructura clara para ordenar lo académico, comercial, operativo y ecosistémico.</p>
      </div>
    )
  },
  {
    id: 'c6',
    title: 'Diseño de rutas por madurez',
    description: 'Evitar una experiencia homogénea que no responde a las diferencias reales entre emprendimientos.',
    accent: 'green',
    icon: Network,
    modalTitle: 'Rutas de Madurez',
    modalBody: (
      <div className="space-y-4">
        <p><strong>Por qué:</strong> Evitar una experiencia homogénea que no responde a las diferencias reales entre emprendimientos.</p>
        <p><strong>Cómo:</strong> Definir rutas para ideas tempranas, ventas iniciales, empresas en crecimiento, impacto, base universitaria e innovación empresarial.</p>
        <p><strong>Entregables:</strong> Criterios de clasificación, mapa de rutas, perfil de entrada y salida, progresión esperada.</p>
        <p><strong>Resultado:</strong> Experiencia personalizada, efectiva y coherente con cada emprendimiento.</p>
      </div>
    )
  },
  {
    id: 'c7',
    title: 'Rediseño curricular por sprints',
    description: 'Pasar de módulos temáticos a avances verificables del negocio.',
    accent: 'orange',
    icon: ListTodo,
    modalTitle: 'Currículo por Sprints',
    modalBody: (
      <div className="space-y-4">
        <p><strong>Por qué:</strong> Pasar de módulos temáticos a avances verificables del negocio.</p>
        <p><strong>Cómo:</strong> Organizar sprints sobre validación, cliente, prototipado, modelo de negocio, finanzas, formalización, marca, canales, ventas, tracción, liderazgo e impacto.</p>
        <p><strong>Entregables:</strong> Malla curricular, secuencia de sprints, objetivos por fase, contenidos integrados y productos esperados.</p>
        <p><strong>Resultado:</strong> Currículo aplicado, dinámico y conectado con la evolución real de los emprendimientos.</p>
      </div>
    )
  },
  {
    id: 'c9',
    title: 'Modelo de mentoría',
    description: 'Transformar el acompañamiento en un sistema trazable y pertinente.',
    accent: 'purple',
    icon: Briefcase,
    modalTitle: 'Sistema de Mentoría',
    modalBody: (
      <div className="space-y-4">
        <p><strong>Por qué:</strong> Transformar el acompañamiento en un sistema trazable y pertinente.</p>
        <p><strong>Cómo:</strong> Diseñar roles de mentor líder, especialistas, alumni, comités y conectores de mercado.</p>
        <p><strong>Entregables:</strong> Manual de mentoría, perfiles, bitácora, protocolo de seguimiento y matriz de asignación.</p>
        <p><strong>Resultado:</strong> Acompañamiento consistente, medible y útil.</p>
      </div>
    )
  },
  {
    id: 'c15',
    title: 'Sistema de indicadores',
    description: 'Medir efectividad y demostrar resultados ante participantes, aliados, directivos y ecosistema.',
    accent: 'slate',
    icon: LineChart,
    modalTitle: 'Indicadores',
    modalBody: (
      <div className="space-y-4">
        <p><strong>Por qué:</strong> Medir efectividad y demostrar resultados ante participantes, aliados, directivos y ecosistema.</p>
        <p><strong>Cómo:</strong> Definir métricas de entrada, proceso, resultado e impacto.</p>
        <p><strong>Entregables:</strong> Matriz de indicadores, línea base, metas por cohorte, tablero de control y esquema de reporte.</p>
        <p><strong>Resultado:</strong> Gestión del desempeño, comunicación de impacto y mejora continua.</p>
      </div>
    )
  }
];

export const principios: PrincipleItem[] = [
  { id: 'pr1', number: '01', title: 'Emprendimiento basado en evidencia', description: 'Toda decisión debe empujar a validar con datos, clientes, ventas, prototipos o experimentos. Menos “yo creo” y más iteración comprobada en el mercado real.' },
  { id: 'pr2', number: '02', title: 'Aprender haciendo', description: 'El programa debe ser práctico, aplicado y orientado a resultados. Cada sesión debe responder: ¿qué produce hoy el emprendedor que no tenía antes?' },
  { id: 'pr3', number: '03', title: 'Rutas diferenciadas', description: 'No se debe tratar igual a todos. El programa debe reconocer etapas, sectores, avance, capacidades del equipo, mercado y ambición.' },
  { id: 'pr4', number: '04', title: 'Mentoría con trazabilidad', description: 'Toda mentoría debe dejar acuerdos, tareas, decisiones y seguimiento. La inspiración es bienvenida, pero la trazabilidad paga la nómina.' },
  { id: 'pr5', number: '05', title: 'Mercado como aula', description: 'El cliente real debe ser parte del proceso educativo. El aula no puede ser el único espacio de aprendizaje.' },
  { id: 'pr6', number: '06', title: 'Comunidad como activo', description: 'SapienciaLab debe crear vínculos fuertes y recurrentes entre participantes, mentores, egresados, aliados y compradores.' },
  { id: 'pr7', number: '07', title: 'Tecnología como acelerador', description: 'La tecnología y la IA deben acelerar investigación, prototipado, ventas, automatización, medición y decisiones de los emprendimientos.' },
  { id: 'pr8', number: '08', title: 'Simplicidad operativa', description: 'El rediseño debe ser ambicioso, pero ejecutable. Mejor un sistema simple que se cumpla que una arquitectura que muera en la fricción.' },
  { id: 'pr9', number: '09', title: 'Medición desde el inicio', description: 'Los indicadores deben diseñarse desde el comienzo para orientar decisiones, no aparecer al final para elaborar informes.' },
  { id: 'pr10', number: '10', title: 'Inclusión y diversidad emprendedora', description: 'SapienciaLab debe reconocer y potenciar emprendimientos tradicionales, digitales, sociales, científicos, ambientales, y creativos.' },
  { id: 'pr11', number: '11', title: 'Impacto con sustentabilidad', description: 'El programa debe sostener su vocación universitaria, pero mejorar su modelo económico diversificando formatos de interacción.' },
  { id: 'pr12', number: '12', title: 'Prestigio Javeriano como ventaja', description: 'SapienciaLab debe apoyarse en la calidad académica, reputación, infraestructura y conexión interdisciplinaria de la Universidad.' }
];

export const indicadores: IndicatorItem[] = [
  { id: 'in1', category: 'Entrada', label: 'Postulaciones válidas' },
  { id: 'in2', category: 'Entrada', label: 'Perfiles de participantes' },
  { id: 'in3', category: 'Entrada', label: 'Nivel de madurez de ingreso' },
  { id: 'in4', category: 'Entrada', label: 'Sectores atendidos' },
  
  { id: 'ip1', category: 'Proceso', label: 'Asistencia y participación' },
  { id: 'ip2', category: 'Proceso', label: 'Mentorías efectivamente realizadas' },
  { id: 'ip3', category: 'Proceso', label: 'Entregables completados' },
  { id: 'ip4', category: 'Proceso', label: 'Gates superados' },
  
  { id: 'ir1', category: 'Resultado', label: 'Ventas generadas en el periodo' },
  { id: 'ir2', category: 'Resultado', label: 'Clientes nuevos adquiridos' },
  { id: 'ir3', category: 'Resultado', label: 'Canales comerciales activados' },
  { id: 'ir4', category: 'Resultado', label: 'Empresas formalizadas' },
  
  { id: 'im1', category: 'Impacto', label: 'Empleos directos creados' },
  { id: 'im2', category: 'Impacto', label: 'Crecimiento interanual de ingresos' },
  { id: 'im3', category: 'Impacto', label: 'Supervivencia de emprendimientos a 12 meses' },
  { id: 'im4', category: 'Impacto', label: 'Retorno reputacional e impacto social' },
];
