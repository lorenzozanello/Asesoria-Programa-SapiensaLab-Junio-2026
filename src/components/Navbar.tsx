import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

const navItems = [
  { href: '#vision', label: 'Visión' },
  { href: '#propositos', label: 'Propósitos' },
  { href: '#alcance', label: 'Alcance' },
  { href: '#componentes', label: 'Componentes' },
  { href: '#principios', label: 'Principios' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#documentos', label: 'Documentos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#inicio" className="font-display font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2" aria-label="Volver a inicio">
            <span>SapienciaLab</span>
          </a>
          <span className="text-[10px] sm:text-xs font-medium text-slate-500 hidden sm:block">
            Estudio Javeriano de Emprendimiento e Innovación
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-tbc-advisory transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-tbc-advisory after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 py-6 space-y-4 flex flex-col">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block text-lg font-medium text-slate-600 hover:text-tbc-advisory"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-slate-100">
             <a
              href="#contacto"
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-tbc-advisory"
              onClick={closeMenu}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
