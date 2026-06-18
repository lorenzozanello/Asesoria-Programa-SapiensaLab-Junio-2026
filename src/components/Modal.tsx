import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export default function Modal({ isOpen, onClose, title, children, triggerRef }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      // Focus the modal itself or the close button
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      } else if (triggerRef && triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [isOpen, triggerRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="fixed inset-0 bg-tbc-base/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        ref={modalRef}
        tabIndex={-1}
        className={cn(
          "relative w-full max-w-lg max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col outline-none",
          "transform transition-all duration-300 scale-100 opacity-100"
        )}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/70 backdrop-blur-md rounded-t-3xl">
          <h2 id="modal-title" className="text-xl font-display font-semibold text-tbc-base dark:text-slate-900 pr-8">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors shrink-0 text-slate-500 hover:text-slate-900"
            aria-label="Cerrar ventana"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-slate-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
