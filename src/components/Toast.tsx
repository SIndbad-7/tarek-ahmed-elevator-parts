import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useQuote();

  if (!toastMessage) return null;

  return (
    <div 
      role="status" 
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 animate-slideUp font-mono text-xs"
    >
      <div className="bg-white text-black px-4 py-3 border-2 border-neutral-900 shadow-2xl flex items-center gap-2.5 max-w-md">
        <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
        <span className="font-semibold tracking-tight">{toastMessage}</span>
      </div>
    </div>
  );
};
