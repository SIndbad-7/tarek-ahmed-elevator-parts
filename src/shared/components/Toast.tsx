import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useQuote } from '../../hooks/useQuote';

/**
 * Global accessible live-region toast notification.
 */
export const Toast: React.FC = () => {
  const { toastMessage } = useQuote();
  if (!toastMessage) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 right-6 z-[60] font-mono text-xs"
    >
      <div className="bg-white text-black px-4 py-3 border-2 border-neutral-900 shadow-2xl flex items-center gap-2.5 max-w-sm">
        <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
        <span className="font-semibold tracking-tight">{toastMessage}</span>
      </div>
    </div>
  );
};
