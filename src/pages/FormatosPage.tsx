import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight, BarChart3, TrendingUp, Lightbulb, Link, Award, PlayCircle, Layers } from 'lucide-react';
import { formatosInfo } from '../data/formatosData';
import CustomCursor from '../components/CustomCursor';

export default function FormatosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIconForCategory = (index: number) => {
    const icons = [Award, Lightbulb, CheckCircle2, TrendingUp, BarChart3, Link, ChevronRight, PlayCircle, Layers, Award, TrendingUp];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6 text-tbc-advisory" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-tbc-advisory/20 selection:text-tbc-advisory">
      <CustomCursor />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white pt-20 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950 opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />

        <div className="max-w-5xl mx-auto relative z-10">
          <a href="#/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 font-medium bg-white/5 pr-4 pl-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <ArrowLeft size={16} />
            <span className="text-sm">Volver a la landing</span>
          </a>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">Propuesta de formatos</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
            Arquitectura completa de formatos, ordenados de mayor a menor valor estratégico dentro de cada categoría.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-24">
          {formatosInfo.map((cat, idx) => (
            <div key={idx} className="relative">
              {/* Category Header */}
              <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  {getIconForCategory(idx)}
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">{cat.category}</h2>
                </div>
              </div>

              {cat.description && (
                <p className="text-slate-600 text-lg mb-10 max-w-3xl leading-relaxed">{cat.description}</p>
              )}

              {/* Formats Grid / List */}
              <div className="grid grid-cols-1 gap-5 mb-10">
                {cat.items.map((item) => (
                  <div key={item.rank} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:border-tbc-advisory/40 transition-colors">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-display font-bold text-xl group-hover:bg-blue-50 group-hover:text-tbc-advisory group-hover:border-blue-200 transition-colors">
                      {item.rank}
                    </div>
                    <div className="flex-grow pt-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-[15px]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic Reading */}
              <div className="bg-slate-50 border-l-4 border-tbc-advisory rounded-r-2xl p-6 md:p-8 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tbc-advisory/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-tbc-advisory mb-3">Lectura Estratégica</h4>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  "{cat.strategicReading}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-slate-950 py-12 px-6 border-t border-white/10 text-center">
        <p className="text-slate-500 text-sm font-medium">Servicio de asesoria para el programa SapiensaLab de la Pontificia Universidad Javeriana</p>
      </footer>
    </div>
  );
}
