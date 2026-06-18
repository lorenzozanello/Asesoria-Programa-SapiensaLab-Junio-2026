import React, { useRef, useState } from 'react';
import { CardItem } from '../types';
import Modal from './Modal';
import { cn } from '../utils';

interface CardProps {
  item: CardItem;
  className?: string;
}

const accentConfig = {
  blue: { bg: 'bg-blue-50', text: 'text-tbc-advisory', border: 'border-blue-100', hoverBorder: 'hover:border-tbc-advisory' },
  green: { bg: 'bg-green-50', text: 'text-tbc-learning', border: 'border-green-100', hoverBorder: 'hover:border-tbc-learning' },
  purple: { bg: 'bg-purple-50', text: 'text-tbc-ventures', border: 'border-purple-100', hoverBorder: 'hover:border-tbc-ventures' },
  orange: { bg: 'bg-orange-50', text: 'text-tbc-systems', border: 'border-orange-100', hoverBorder: 'hover:border-tbc-systems' },
  slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', hoverBorder: 'hover:border-slate-400' },
};

export default function Card({ item, className }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;
  const accent = accentConfig[item.accent] || accentConfig.slate;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        onClick={() => setIsModalOpen(true)}
        onKeyDown={handleKeyDown}
        className={cn(
          "group relative flex flex-col p-6 lg:p-8 bg-white rounded-3xl cursor-pointer outline-none",
          "border border-slate-200/70 shadow-sm transition-all duration-300 ease-out",
          "hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-tbc-advisory",
          accent.hoverBorder,
          className
        )}
        data-aos="fade-up"
      >
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-300", accent.bg, accent.text)}>
          <Icon size={24} />
        </div>
        
        {item.eyebrow && (
          <span className={cn("text-xs font-semibold uppercase tracking-wider mb-2", accent.text)}>
            {item.eyebrow}
          </span>
        )}
        
        <h3 className="font-display text-xl font-semibold text-slate-900 mb-3 group-hover:text-tbc-advisory transition-colors">
          {item.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
          {item.description}
        </p>

        <div className={cn("text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", accent.text)}>
          Leer más <span aria-hidden="true">&rarr;</span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={item.modalTitle || item.title}
        triggerRef={cardRef}
      >
        {item.modalBody}
      </Modal>
    </>
  );
}
