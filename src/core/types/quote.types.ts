import type { ElevatorPart } from './part.types';
import type { ClientInfo, ClientFormErrors } from './client.types';
import type { StepNumber } from './step.types';

export interface QuoteItem {
  part: ElevatorPart;
  quantity: number;
}

export interface QuoteSummary {
  subtotal: number;
  totalUnits: number;
  uniquePartsCount: number;
}

export interface QuoteContextType {
  step: StepNumber;
  setStep: (step: StepNumber) => void;
  goToNextStep: () => boolean;
  goToPreviousStep: () => void;
  clientInfo: ClientInfo;
  updateClientInfo: (updates: Partial<ClientInfo>) => void;
  formErrors: ClientFormErrors;
  validateStep1: () => boolean;
  cart: QuoteItem[];
  addToQuote: (part: ElevatorPart, qty?: number) => void;
  updateQuantity: (partId: string, quantity: number) => void;
  removeFromQuote: (partId: string) => void;
  clearQuote: () => void;
  subtotal: number;
  totalItemsCount: number;
  toastMessage: string | null;
  showToast: (message: string) => void;
  resetAll: () => void;
}
