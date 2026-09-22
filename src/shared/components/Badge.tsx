import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'solid';
  className?: string;
}

/**
 * Industrial technical badge for part codes, status labels, and compliance marks.
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline', className = '' }) => {
  const base = 'inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider leading-none';
  const variants = {
    outline: 'border border-neutral-700 bg-transparent text-neutral-300',
    default: 'border border-neutral-800 bg-neutral-900 text-neutral-200',
    solid:   'bg-white text-black font-bold border border-white'
  };
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
};
