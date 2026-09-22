import React from 'react';
import { useQuote } from '../../hooks/useQuote';
import { OwnerContactCard } from './components/OwnerContactCard';
import { ClientSummaryCard } from './components/ClientSummaryCard';
import { ItemizedTable } from './components/ItemizedTable';
import { DispatchActionBar } from './components/DispatchActionBar';
import { Button } from '../../shared/components/Button';
import { SUPPLY_TERMS } from '../../core/constants/compliance';
import { ChevronLeft, FileCheck, AlertTriangle } from 'lucide-react';

export const Step3QuoteReview: React.FC = () => {
  const {
    clientInfo, cart, subtotal, totalItemsCount,
    updateQuantity, removeFromQuote, goToPreviousStep, resetAll
  } = useQuote();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center font-mono space-y-4">
        <AlertTriangle className="w-10 h-10 text-neutral-500 mx-auto" />
        <h3 className="text-lg font-bold text-white uppercase">Empty Quotation</h3>
        <p className="text-xs text-neutral-400">No components have been added to your quotation list.</p>
        <Button variant="secondary" size="md" onClick={goToPreviousStep}>
          <ChevronLeft className="w-3.5 h-3.5" /> Return to Catalog
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 print:p-2">
      {/* Section header */}
      <div className="border border-neutral-800 bg-neutral-950 p-5 md:p-7 mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">Stage 03 / 03 – Final Review</div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight font-display flex items-center gap-2.5">
            <FileCheck className="w-6 h-6 text-neutral-400" /> Quotation Summary & Dispatch
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-1.5">
            Review your itemised parts and contact details, then dispatch directly to Tarek Ahmed for a confirmed supply invoice.
          </p>
        </div>
      </div>

      {/* Owner contact banner */}
      <div className="mb-6"><OwnerContactCard /></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-5">
          <ClientSummaryCard clientInfo={clientInfo} />
          <ItemizedTable
            cart={cart}
            subtotal={subtotal}
            totalItemsCount={totalItemsCount}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromQuote}
          />

          <div className="border border-neutral-900 bg-neutral-950/80 p-4 font-mono text-[10px] text-neutral-500 space-y-2">
            <div className="text-neutral-400 font-bold uppercase text-[11px] mb-2">Supply &amp; Pricing Terms</div>
            {SUPPLY_TERMS.map((term) => (
              <p key={term.title}><span className="text-neutral-300 font-bold">{term.title}:</span> {term.detail}</p>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-neutral-900">
            <Button variant="secondary" size="md" onClick={goToPreviousStep}>
              <ChevronLeft className="w-3.5 h-3.5" /> Modify Component Selection
            </Button>
          </div>
        </div>

        {/* Sidebar: Dispatch actions */}
        <div className="lg:col-span-1">
          <DispatchActionBar
            clientInfo={clientInfo}
            cart={cart}
            subtotal={subtotal}
            totalItemsCount={totalItemsCount}
            onReset={resetAll}
          />
        </div>
      </div>
    </div>
  );
};
