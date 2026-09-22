import React from 'react';
import { QuoteProvider } from './context/QuoteContext';
import { MainLayout } from './shared/layout/MainLayout';
import { Step1Onboarding } from './features/onboarding/Step1Onboarding';
import { Step2Catalog } from './features/catalog/Step2Catalog';
import { Step3QuoteReview } from './features/quote-review/Step3QuoteReview';
import { useQuote } from './hooks/useQuote';

const AppRouter: React.FC = () => {
  const { step } = useQuote();
  switch (step) {
    case 1: return <Step1Onboarding />;
    case 2: return <Step2Catalog />;
    case 3: return <Step3QuoteReview />;
    default: return <Step1Onboarding />;
  }
};

const App: React.FC = () => (
  <QuoteProvider>
    <MainLayout>
      <AppRouter />
    </MainLayout>
  </QuoteProvider>
);

export default App;
