import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button';
    href?: undefined;
  };

type ButtonAsAnchor = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'a';
    href?: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * High-contrast monochrome button supporting button and anchor rendering.
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const base = 'inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-40 disabled:cursor-not-allowed';

  const variants: Record<ButtonVariant, string> = {
    primary:   'bg-white text-black border border-white hover:bg-neutral-200 active:bg-neutral-100',
    secondary: 'bg-transparent text-neutral-200 border border-neutral-700 hover:border-white hover:text-white',
    ghost:     'bg-transparent text-neutral-400 hover:text-white border border-transparent'
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-[11px]',
    md: 'px-5 py-2.5 text-xs',
    lg: 'px-8 py-3.5 text-xs'
  };

  const { variant = 'primary', size = 'md', className = '', as: Tag = 'button', loading, ...rest } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (Tag === 'a') {
    const { loading: _l, disabled, ...anchorRest } = rest as ButtonAsAnchor & { loading?: boolean; disabled?: boolean };
    return <a className={cls} {...anchorRest} />;
  }

  const { href: _h, ...btnRest } = rest as ButtonAsButton & { href?: string };
  return <button className={cls} disabled={loading ?? btnRest.disabled} {...btnRest} />;
};
