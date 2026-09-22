import React from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
  id: string;
}

/**
 * Accessible monochrome form input with floating error messaging.
 */
export const Input: React.FC<InputProps> = ({ label, required, error, icon, id, className = '', ...props }) => {
  const borderCls = error ? 'border-white ring-1 ring-white' : 'border-neutral-800 focus:border-white';
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
        {label} {required && <span className="text-white font-bold">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
            {icon}
          </div>
        )}
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full ${icon ? 'pl-9' : 'pl-3'} pr-3 py-2.5 bg-black border text-sm font-sans text-white placeholder-neutral-600 focus:outline-none transition-colors ${borderCls} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
          <AlertCircle className="w-3 h-3 text-white shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  id: string;
  hint?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, id, hint, className = '', ...props }) => {
  const borderCls = error ? 'border-white ring-1 ring-white' : 'border-neutral-800 focus:border-white';
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
          {label}
        </label>
        {hint && <span className="text-[11px] text-neutral-500 font-mono">{hint}</span>}
      </div>
      <textarea
        id={id}
        className={`w-full p-3.5 bg-black border text-sm font-sans text-white placeholder-neutral-600 focus:outline-none transition-colors leading-relaxed ${borderCls} ${className}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
          <AlertCircle className="w-3 h-3 text-white shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
};
