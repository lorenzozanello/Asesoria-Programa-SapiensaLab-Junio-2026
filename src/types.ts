import React, { ComponentType } from 'react';

export type Accent = 'blue' | 'green' | 'purple' | 'orange' | 'slate';

export type CardItem = {
  id: string;
  title: string;
  eyebrow?: string;
  description: string;
  accent: Accent;
  icon: ComponentType<any>;
  modalTitle?: string;
  modalBody: React.ReactNode;
};

export type PrincipleItem = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type IndicatorCategory = 'Entrada' | 'Proceso' | 'Resultado' | 'Impacto';

export type IndicatorItem = {
  id: string;
  category: IndicatorCategory;
  label: string;
};
