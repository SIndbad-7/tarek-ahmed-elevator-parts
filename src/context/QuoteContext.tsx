import React, { createContext, useState, useEffect } from 'react';
import type { ClientInfo, ElevatorPart, QuoteItem, QuoteContextType, StepNumber } from '../core/types';
import { validateClientForm, isFormValid } from '../core/utils/validators';
import { storage, STORAGE_KEYS } from '../core/utils/storage';

const DEFAULT_CLIENT: ClientInfo = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  elevatorBrand: 'Otis Elevator Company',
  customBrand: '',
  maintenanceDescription: '',
  urgency: 'priority',
  buildingFloors: ''
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStepState] = useState<StepNumber>(() => {
    const saved = storage.get<number>(STORAGE_KEYS.step);
    return (saved === 1 || saved === 2 || saved === 3) ? saved as StepNumber : 1;
  });

  const [clientInfo, setClientInfo] = useState<ClientInfo>(() =>
    storage.get<ClientInfo>(STORAGE_KEYS.client) ?? DEFAULT_CLIENT
  );

  const [cart, setCart] = useState<QuoteItem[]>(() =>
    storage.get<QuoteItem[]>(STORAGE_KEYS.cart) ?? []
  );

  const [formErrors, setFormErrors] = useState<ReturnType<typeof validateClientForm>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist state to storage on every change
  useEffect(() => { storage.set(STORAGE_KEYS.client, clientInfo); }, [clientInfo]);
  useEffect(() => { storage.set(STORAGE_KEYS.cart, cart); }, [cart]);
  useEffect(() => { storage.set(STORAGE_KEYS.step, step); }, [step]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const updateClientInfo = (updates: Partial<ClientInfo>) => {
    setClientInfo(prev => ({ ...prev, ...updates }));
    // Clear touched field errors
    setFormErrors(prev => {
      const next = { ...prev };
      Object.keys(updates).forEach(k => delete next[k as keyof typeof next]);
      return next;
    });
  };

  const validateStep1 = (): boolean => {
    const errors = validateClientForm(clientInfo);
    setFormErrors(errors);
    return isFormValid(errors);
  };

  const setStep = (newStep: StepNumber) => {
    if (newStep > step && step === 1 && !validateStep1()) {
      showToast('Please complete required client contact fields.');
      return;
    }
    setStepState(newStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextStep = (): boolean => {
    if (step === 1) {
      if (!validateStep1()) { showToast('Please fix required fields to continue.'); return false; }
      setStepState(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }
    if (step === 2) {
      if (cart.length === 0) { showToast('Please select at least one component for your quotation.'); return false; }
      setStepState(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }
    return true;
  };

  const goToPreviousStep = () => {
    if (step > 1) { setStepState((step - 1) as StepNumber); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  };

  const addToQuote = (part: ElevatorPart, qty = 1) => {
    if (qty <= 0) return;
    setCart(prev => {
      const existing = prev.find(i => i.part.id === part.id);
      return existing
        ? prev.map(i => i.part.id === part.id ? { ...i, quantity: i.quantity + qty } : i)
        : [...prev, { part, quantity: qty }];
    });
    showToast(`Added ${qty} × ${part.name} to quote`);
  };

  const updateQuantity = (partId: string, quantity: number) => {
    if (quantity <= 0) { removeFromQuote(partId); return; }
    setCart(prev => prev.map(i => i.part.id === partId ? { ...i, quantity } : i));
  };

  const removeFromQuote = (partId: string) => {
    const item = cart.find(i => i.part.id === partId);
    setCart(prev => prev.filter(i => i.part.id !== partId));
    if (item) showToast(`Removed ${item.part.name} from quote`);
  };

  const clearQuote = () => { setCart([]); showToast('Quote list cleared.'); };

  const resetAll = () => {
    setClientInfo(DEFAULT_CLIENT);
    setCart([]);
    setStepState(1);
    storage.clear(Object.values(STORAGE_KEYS));
    showToast('Quotation reset to defaults.');
  };

  const subtotal = cart.reduce((sum, i) => sum + i.part.referencePrice * i.quantity, 0);
  const totalItemsCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <QuoteContext.Provider value={{
      step, setStep, goToNextStep, goToPreviousStep,
      clientInfo, updateClientInfo, formErrors, validateStep1,
      cart, addToQuote, updateQuantity, removeFromQuote, clearQuote,
      subtotal, totalItemsCount, toastMessage, showToast, resetAll
    }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const QuoteContext_DO_NOT_USE_DIRECTLY = QuoteContext;
