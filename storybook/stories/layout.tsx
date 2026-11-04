import type { ReactNode } from 'react';

/** Peças de layout para as histórias "Todos os estados". Só para o Storybook. */

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mb-10">
    <h3 className="mb-4 text-label-sm uppercase tracking-wide text-content-muted">{title}</h3>
    <div className="flex flex-wrap items-start gap-6">{children}</div>
  </section>
);

interface CellProps {
  label: string;
  /** Força o estado hover (addon de pseudo-estados; o seletor vai em `parameters.pseudo`). */
  hover?: boolean;
  /** Força o estado de foco. */
  focus?: boolean;
  className?: string;
  children: ReactNode;
}

export const Cell = ({ label, hover, focus, className = '', children }: CellProps) => (
  <div className={`flex flex-col items-start gap-2 ${hover ? 'sb-hover' : ''} ${focus ? 'sb-focus' : ''} ${className}`}>
    {children}
    <small className="text-label-sm text-content-muted">{label}</small>
  </div>
);
