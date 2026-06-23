import React, { useEffect, useState } from 'react';
import { ArrowLeft, Menu, X, BookOpen } from 'lucide-react';
import { documents, getDocument } from '../data/docs';
import CustomCursor from '../components/CustomCursor';
import { cn } from '../utils';

export default function DocumentReader() {
  const [hash, setHash] = useState(window.location.hash);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
      setIsSidebarOpen(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const docId = hash.replace('#/documentos/', '') || 'diagnostico';
  const currentDoc = getDocument(docId) || documents[0];

  const renderContent = (text: string) => {
    return text.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;
      
      const mainHeaders = [
        "1. Diagnóstico del programa actual",
        "2. Benchmarking nacional e internacional",
        "3. Redefinición de la propuesta de valor",
        "4. Diseño del modelo de programa",
        "5. Segmentación de públicos",
        "6. Diseño de rutas por madurez emprendedora",
        "7. Rediseño curricular por sprints",
        "Capítulo de libro para publicar",
        "Entregables de la fase de redefinición de la propuesta de valor"
      ];
      
      if (mainHeaders.includes(trimmed)) {
        return <h2 key={idx} className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">{trimmed}</h2>;
      }
      
      if (/^\d+\.\d+\./.test(trimmed) || (/^\d+\. /.test(trimmed) && docId === 'capitulo')) {
        return <h3 key={idx} className="text-2xl font-display font-semibold text-slate-800 mt-10 mb-5 border-b border-slate-100 pb-2">{trimmed}</h3>;
      }
      
      if (/^Sprint \d+:/i.test(trimmed) || (/^Ruta [A-Za-z\s]+/.test(trimmed) && (trimmed.includes(':') || trimmed.includes('(')))) {
         return <h4 key={idx} className="text-xl font-bold text-slate-800 mt-8 mb-4">{trimmed}</h4>;
      }
      
      if (trimmed.startsWith('* ')) {
        return (
          <div key={idx} className="flex items-start gap-3 mb-4 ml-6">
            <span className="w-1.5 h-1.5 rounded-full bg-tbc-advisory mt-2.5 shrink-0" />
            <p className="text-slate-600 leading-relaxed text-lg">{trimmed.substring(2)}</p>
          </div>
        );
      }
      
      return <p key={idx} className="mb-4 text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-tbc-advisory/20 selection:text-tbc-advisory">
      <CustomCursor />
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4">
        <a href="#/" className="font-display font-bold text-lg flex items-center gap-2 text-slate-900">
           <ArrowLeft size={18} /> SapiensaLab
        </a>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-80 bg-slate-50 border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen flex flex-col shadow-xl lg:shadow-none",
        isSidebarOpen ? "translate-x-0 pt-16 lg:pt-0" : "-translate-x-full"
      )}>
        <div className="p-6 hidden lg:block border-b border-slate-200 bg-white sticky top-0 z-10">
          <a href="#/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-4 text-sm font-medium">
            <ArrowLeft size={16} /> Volver al Inicio
          </a>
          <h2 className="font-display font-bold text-xl text-slate-900">Documentos del Rediseño</h2>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <nav className="space-y-1.5">
            {documents.map(doc => (
               <a
                key={doc.id}
                href={`#/documentos/${doc.id}`}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-colors border",
                  currentDoc.id === doc.id 
                    ? "bg-white border-tbc-advisory text-tbc-advisory shadow-sm" 
                    : "border-transparent text-slate-600 hover:bg-white hover:text-slate-900 hover:border-slate-200"
                )}
              >
                {doc.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-white h-screen overflow-y-auto pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
           <div className="mb-12">
             <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-tbc-advisory text-sm font-semibold mb-6">
               <BookOpen size={16} /> Documento Estratégico
             </span>
             <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
               {currentDoc.title}
             </h1>
           </div>
           
           <div className="prose-container pb-20">
             {renderContent(currentDoc.content)}
           </div>
           
           {/* Footer */}
           <div className="mt-20 pt-8 border-t border-slate-100 flex items-center justify-between">
             <p className="text-slate-400 text-sm font-medium">Pontificia Universidad Javeriana</p>
           </div>
        </div>
      </main>
    </div>
  );
}
