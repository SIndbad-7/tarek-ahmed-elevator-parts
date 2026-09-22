import React from 'react';
import { QuoteProvider, useQuote } from './context/QuoteContext';
import { Header } from './components/Header';
import { Step1ClientInquiry } from './components/Step1ClientInquiry';
import { Step2Catalog } from './components/Step2Catalog';
import { Step3QuoteReview } from './components/Step3QuoteReview';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

const MainContent: React.FC = () => {
  const { step } = useQuote();

  return (
    <main className="min-h-[calc(100vh-140px)] relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {step === 1 && <Step1ClientInquiry />}
      {step === 2 && <Step2Catalog />}
      {step === 3 && <Step3QuoteReview />}
    </main>
  );
};

export function App() {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-black text-neutral-100 flex flex-col font-sans selection:bg-white selection:text-black">
        <Header />
        <MainContent />
        <Footer />
        <Toast />
      </div>
    </QuoteProvider>
  );
}

export default App;
