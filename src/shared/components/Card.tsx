import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * Structured dark border card container.
 */
export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false }) => {
  const base = 'border border-neutral-800 bg-neutral-950 transition-colors';
  const hover = hoverable ? 'hover:border-neutral-600' : '';
  return <div className={`${base} ${hover} ${className}`}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`border-b border-neutral-800 px-6 py-4 bg-neutral-900/60 ${className}`}>
    {children}
  </div>
);

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
