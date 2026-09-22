/**
 * Currency and number formatting utilities
 */
export const formatCurrency = (amount: number): string =>
  `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const formatDate = (date: Date = new Date()): string =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export const formatDateShort = (date: Date = new Date()): string =>
  date.toISOString().slice(0, 10).replace(/-/g, '');
