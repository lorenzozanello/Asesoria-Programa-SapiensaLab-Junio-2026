import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Card from './components/Card';
import { propositos, alcances, componentesVisibles, principios, indicadores } from './data';
import { cn } from './utils';
import FormatosPage from './pages/FormatosPage';
import DocumentReader from './pages/DocumentReader';
import { ArrowRight, BookOpen } from 'lucide-react';

function ImpactDashboard() {
  const categories = ['Entrada', 'Proceso', 'Resultado', 'Impacto'] as const;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, idx) => {
        const items = indicadores.filter(ind => ind.category === category);
        const delay = idx * 100;
        return (
          <div key={category} className="bg-slate-50 rounded-3xl p-6 border border-slate-200/50" data-aos="fade-up" data-aos-delay={delay}>
            <h4 className="font-display font-semibold text-slate-900 mb-4 text-lg border-b border-slate-200 pb-2">{category}</h4>
            <ul className="space-y-3">
              {items.map(item => (
                <li key={item.id} className="flex items-start text-sm text-slate-600 gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tbc-advisory mt-1.5 shrink-0" />
                  <span className="leading-snug">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function LandingPage() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 100,
      disable: prefersReducedMotion,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-tbc-advisory/20 selection:text-tbc-advisory">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 lg:px-8 overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950 opacity-80" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
            <div data-aos="fade-down" className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-tbc-advisory animate-pulse" />
              Evolución 2026
            </div>
            
            <h1 data-aos="fade-up" className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              SapienciaLab
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-xl sm:text-2xl font-medium text-slate-300 mb-8 max-w-3xl font-display">
              Estudio Javeriano de Emprendimiento e Innovación Empresarial
            </p>
            
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-xl text-slate-400 max-w-4xl leading-relaxed mb-10">
              De programa de acompañamiento a plataforma de aceleración, conexión e impacto. Acompañamos emprendimientos en distintas etapas para validar mercado, fortalecer modelos de negocio, activar canales comerciales y medir resultados.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#vision" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tbc-advisory text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-tbc-advisory/20">
                Explorar rediseño
                <ChevronRight size={18} />
              </a>
              <a href="#componentes" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all hover:bg-white/20">
                Ver componentes
              </a>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section id="vision" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-right" className="mb-12">
              <span className="text-tbc-advisory font-semibold tracking-wider uppercase text-sm mb-4 block">Propósito General</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
                Rediseñar SapienciaLab para transformarlo de un programa de formación en una plataforma integral de aceleración.
              </h2>
            </div>
            
            <div data-aos="fade-up" className="prose prose-lg prose-slate max-w-none text-slate-600 mb-16">
              <p>
                Buscamos generar resultados medibles en validación, ventas, formalización, crecimiento, innovación e impacto social, ambiental y económico.
              </p>
              <blockquote className="border-l-4 border-tbc-advisory pl-6 py-2 my-8 text-xl font-medium text-slate-800 italic bg-slate-50/50 rounded-r-lg">
                Que SapienciaLab deje de ser percibido solo como “un curso con mentorías” y pase a operar como una experiencia de aceleración emprendedora con método, comunidad, datos, mercado y resultados.
              </blockquote>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tbc-advisory/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <h3 className="font-display text-2xl font-semibold mb-8">Teoría de Cambio</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
                <div>
                  <h4 className="text-tbc-advisory font-medium mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-tbc-advisory/20 flex items-center justify-center text-xs">1</span>
                    Si SapienciaLab combina...
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Diagnóstico de madurez</li>
                    <li>Rutas diferenciadas</li>
                    <li>Aprendizaje por sprints</li>
                    <li>Mentoría trazable</li>
                    <li>Uso estratégico de IA</li>
                    <li>Validación de mercado</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-tbc-learning font-medium mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-tbc-learning/20 flex items-center justify-center text-xs">2</span>
                    Entonces los emprendimientos...
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Podrán avanzar con mayor claridad, estructura, tracción y capacidad de crecimiento acelerado.
                  </p>
                </div>
                <div>
                  <h4 className="text-tbc-ventures font-medium mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-tbc-ventures/20 flex items-center justify-center text-xs">3</span>
                    Generando resultados...
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Medibles para los participantes y valor reputacional e institucional para la Universidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROPOSITOS SECTION */}
        <section id="propositos" className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="text-tbc-learning font-semibold tracking-wider uppercase text-sm mb-4 block">Fundamentos</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Propósitos Específicos</h2>
              <p className="text-slate-600 text-lg">Los objetivos estructurales que guían la transformación del modelo.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propositos.map((item) => (
                <div key={item.id}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALCANCE SECTION */}
        <section id="alcance" className="py-24 px-6 lg:px-8 bg-white border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl" data-aos="fade-right">
              <span className="text-tbc-ventures font-semibold tracking-wider uppercase text-sm mb-4 block">Dimensiones</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Alcance del Proceso</h2>
              <p className="text-slate-600 text-lg">Las seis áreas de intervención profunda que requiere el rediseño para garantizar un impacto sistémico.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alcances.map((item) => (
                <div key={item.id} className="h-full">
                  <Card item={item} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPONENTES SECTION */}
        <section id="componentes" className="py-24 px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 md:text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="text-tbc-systems font-semibold tracking-wider uppercase text-sm mb-4 block">Arquitectura</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Componentes del Rediseño</h2>
              <p className="text-slate-400 text-lg">Elementos clave que estructuran la nueva plataforma operativa y educativa.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentesVisibles.map((item) => (
                <div key={item.id}>
                  <Card item={item} className="bg-slate-900 border-white/10 hover:border-slate-700 hover:shadow-none" />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center" data-aos="fade-up">
               <p className="text-slate-400 text-sm">
                 Mostrando una selección estratégica. El rediseño comprende 17 componentes interconectados.
               </p>
            </div>
          </div>
        </section>

        {/* PRINCIPIOS SECTION */}
        <section id="principios" className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl" data-aos="fade-right">
              <span className="text-tbc-advisory font-semibold tracking-wider uppercase text-sm mb-4 block">Manifiesto</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Principios Orientadores</h2>
              <p className="text-slate-600 text-lg">Las reglas no negociables que gobiernan la nueva experiencia.</p>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {principios.map((item, idx) => (
                <div key={item.id} className="break-inside-avoid bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm" data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
                  <div className="text-4xl font-display font-light text-slate-200 mb-2 leading-none">{item.number}</div>
                  <h3 className="font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACTO SECTION */}
        <section id="impacto" className="py-24 px-6 lg:px-8 bg-white border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="text-tbc-learning font-semibold tracking-wider uppercase text-sm mb-4 block">Métricas</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Impacto y Resultados</h2>
              <p className="text-slate-600 text-lg mb-8">Sin indicadores, el programa depende del relato. Con indicadores, construye reputación.</p>
            </div>
            
            <ImpactDashboard />
          </div>
        </section>

        {/* CONTACTO / CIERRE SECTION */}
        <section id="contacto" className="py-24 px-6 lg:px-8 bg-tbc-base text-white text-center">
          <div className="max-w-4xl mx-auto" data-aos="zoom-in">
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">El nuevo SapienciaLab no termina en la clausura.</h2>
            <p className="text-lg md:text-xl text-slate-300 md:max-w-2xl mx-auto mb-10 leading-relaxed">
              El rediseño lo convierte en una plataforma viva de aceleración, comunidad, mercado, tecnología e impacto. Una experiencia capaz de conectar capacidades Javerianas con oportunidades reales.
            </p>
            <div className="flex justify-center">
              <a href="#/formatos" className="inline-flex items-center justify-center px-10 py-5 bg-tbc-advisory text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-tbc-advisory/20 text-lg md:text-xl">
                Propuesta de formatos
              </a>
            </div>
          </div>
        </section>
        {/* DOCUMENTOS SECTION */}
        <section id="documentos" className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="text-tbc-ventures font-semibold tracking-wider uppercase text-sm mb-4 block">Documentación</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Lectura Estratégica</h2>
              <p className="text-slate-600 text-lg mb-8">Navega en detalle por los componentes del rediseño estratégico, académico y ecosistémico.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'diagnostico', title: 'Diagnóstico', desc: 'Evaluación del currículo actual y sus participantes.' },
                { id: 'benchmarking', title: 'Benchmarking', desc: 'Análisis de referentes nacionales e internacionales.' },
                { id: 'redefinicion', title: 'Propuesta de Valor', desc: 'Nueva promesa hacia el público externo e interno.' },
                { id: 'modelo', title: 'Modelo de Programa', desc: 'Estructuración de las operaciones formativas.' },
                { id: 'segmentacion', title: 'Segmentación', desc: 'Criterios de división según etapa de madurez.' },
                { id: 'rutas', title: 'Diseño de Rutas', desc: 'Arquitectura de las vías operativas asignables.' },
                { id: 'curriculo', title: 'Currículo por Sprints', desc: 'Estructura temporal intensiva focalizada al avance.' },
                { id: 'capitulo', title: 'Capítulo de Libro', desc: 'Resumen teórico formalizado para divulgación externa.' }
              ].map((doc, idx) => (
                <a 
                  key={doc.id} 
                  href={`#/documentos/${doc.id}`}
                  className="group bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-tbc-advisory/30 transition-all duration-300"
                  data-aos="fade-up" 
                  data-aos-delay={(idx % 3) * 100}
                >
                  <BookOpen className="w-8 h-8 text-slate-400 group-hover:text-tbc-advisory transition-colors mb-6" />
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-3 group-hover:text-tbc-advisory transition-colors">{doc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{doc.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-tbc-advisory gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Leer documento <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 px-6 border-t border-white/10 text-center">
        <p className="text-slate-500 text-sm font-medium">Servicio de asesoria para el programa SapiensaLab de la Pontificia Universidad Javeriana</p>
      </footer>
    </div>
  );
}

export default function App() {
  const [hash, setHash] = React.useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // Also scroll on initial load
    window.scrollTo(0, 0);
  }, [hash]);

  if (hash.startsWith('#/documentos')) {
    return <DocumentReader />;
  }

  if (hash === '#/formatos') {
    return <FormatosPage />;
  }

  return <LandingPage />;
}

