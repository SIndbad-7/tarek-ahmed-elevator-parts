import { useContext } from 'react';
import type { QuoteContextType } from '../core/types';
import { QuoteContext_DO_NOT_USE_DIRECTLY } from '../context/QuoteContext';

/**
 * Custom hook to consume QuoteContext.
 * Must be used inside <QuoteProvider>.
 */
export const useQuote = (): QuoteContextType => {
  const ctx = useContext(QuoteContext_DO_NOT_USE_DIRECTLY);
  if (!ctx) throw new Error('useQuote must be used inside <QuoteProvider>');
  return ctx;
};
