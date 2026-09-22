import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ClientInfo, ElevatorPart, QuoteItem, StepNumber } from '../types';

interface QuoteContextType {
  step: StepNumber;
  setStep: (step: StepNumber) => void;
  goToNextStep: () => boolean;
  goToPreviousStep: () => void;
  clientInfo: ClientInfo;
  updateClientInfo: (updates: Partial<ClientInfo>) => void;
  formErrors: Record<string, string>;
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

const STORAGE_KEY_CLIENT = 'tarek_ahmed_elevator_client';
const STORAGE_KEY_CART = 'tarek_ahmed_elevator_cart';
const STORAGE_KEY_STEP = 'tarek_ahmed_elevator_step';

const defaultClientInfo: ClientInfo = {
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
  // Initialize state with localStorage fallbacks
  const [step, setStepState] = useState<StepNumber>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STEP);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed === 1 || parsed === 2 || parsed === 3) return parsed as StepNumber;
      }
    } catch {
      // Ignore
    }
    return 1;
  });

  const [clientInfo, setClientInfo] = useState<ClientInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CLIENT);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return defaultClientInfo;
  });

  const [cart, setCart] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CART);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return [];
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CLIENT, JSON.stringify(clientInfo));
    } catch {
      // Ignore
    }
  }, [clientInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STEP, step.toString());
    } catch {
      // Ignore
    }
  }, [step]);

  const showToast = (message: string) => {
    setToastMessage(message);
    window.clearTimeout((showToast as any)._timeout);
    (showToast as any)._timeout = window.setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const updateClientInfo = (updates: Partial<ClientInfo>) => {
    setClientInfo((prev) => {
      const next = { ...prev, ...updates };
      return next;
    });

    // Clear related field errors upon user edits
    if (Object.keys(updates).length > 0) {
      setFormErrors((prev) => {
        const next = { ...prev };
        Object.keys(updates).forEach((key) => {
          delete next[key];
        });
        return next;
      });
    }
  };

  const validateStep1 = (): boolean => {
    const errors: Record<string, string> = {};

    if (!clientInfo.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    } else if (clientInfo.fullName.trim().length < 2) {
      errors.fullName = 'Please enter a valid full name (minimum 2 characters).';
    }

    if (!clientInfo.phone.trim()) {
      errors.phone = 'Contact phone number is required.';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(clientInfo.phone.trim())) {
      errors.phone = 'Please provide a valid phone number (digits, country code).';
    }

    if (!clientInfo.email.trim()) {
      errors.email = 'Work email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientInfo.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (clientInfo.elevatorBrand === 'Other / Unspecified Brand' && !clientInfo.customBrand?.trim()) {
      errors.customBrand = 'Please specify the elevator make or manufacturer model.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const setStep = (newStep: StepNumber) => {
    if (newStep > step) {
      // Must validate step 1 before proceeding
      if (step === 1 && !validateStep1()) {
        showToast('Please complete required client contact fields.');
        return;
      }
    }
    setStepState(newStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextStep = (): boolean => {
    if (step === 1) {
      if (!validateStep1()) {
        showToast('Please fix required fields to continue.');
        return false;
      }
      setStep(2);
      return true;
    }
    if (step === 2) {
      if (cart.length === 0) {
        showToast('Please select at least one component for your quotation.');
        return false;
      }
      setStep(3);
      return true;
    }
    return true;
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep((step - 1) as StepNumber);
    }
  };

  const addToQuote = (part: ElevatorPart, qty: number = 1) => {
    if (qty <= 0) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.part.id === part.id);
      if (existing) {
        return prev.map((item) =>
          item.part.id === part.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { part, quantity: qty }];
    });
    showToast(`Added ${qty} × ${part.name} to quote`);
  };

  const updateQuantity = (partId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(partId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.part.id === partId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromQuote = (partId: string) => {
    const item = cart.find((i) => i.part.id === partId);
    setCart((prev) => prev.filter((i) => i.part.id !== partId));
    if (item) {
      showToast(`Removed ${item.part.name} from quote`);
    }
  };

  const clearQuote = () => {
    setCart([]);
    showToast('Quote list cleared.');
  };

  const resetAll = () => {
    setClientInfo(defaultClientInfo);
    setCart([]);
    setStepState(1);
    try {
      localStorage.removeItem(STORAGE_KEY_CLIENT);
      localStorage.removeItem(STORAGE_KEY_CART);
      localStorage.removeItem(STORAGE_KEY_STEP);
    } catch {
      // Ignore
    }
    showToast('Quotation form reset to defaults.');
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.part.referencePrice * item.quantity,
    0
  );

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        step,
        setStep,
        goToNextStep,
        goToPreviousStep,
        clientInfo,
        updateClientInfo,
        formErrors,
        validateStep1,
        cart,
        addToQuote,
        updateQuantity,
        removeFromQuote,
        clearQuote,
        subtotal,
        totalItemsCount,
        toastMessage,
        showToast,
        resetAll
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
