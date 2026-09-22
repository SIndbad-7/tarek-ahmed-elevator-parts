import React from 'react';
import { useQuote } from '../context/QuoteContext';
import type { StepNumber } from '../types';
import { ShieldCheck, Mail, ArrowRight, ShoppingCart, User, Layers, FileCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const { step, setStep, totalItemsCount, subtotal } = useQuote();

  const steps: { number: StepNumber; label: string; icon: React.ReactNode; subtitle: string }[] = [
    {
      number: 1,
      label: 'Client Inquiry',
      subtitle: 'Site & Contact Data',
      icon: <User className="w-3.5 h-3.5" />
    },
    {
      number: 2,
      label: 'Component Catalog',
      subtitle: 'Parts & Equipment',
      icon: <Layers className="w-3.5 h-3.5" />
    },
    {
      number: 3,
      label: 'Quotation Review',
      subtitle: 'Direct Owner Dispatch',
      icon: <FileCheck className="w-3.5 h-3.5" />
    }
  ];

  return (
    <header className="no-print border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md sticky top-0 z-40">
      {/* Top Industrial Ticker / Status Bar */}
      <div className="border-b border-neutral-900 bg-black text-[11px] font-mono py-1.5 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-neutral-200 font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Tarek Ahmed
          </span>
          <span className="text-neutral-600">/</span>
          <span className="hidden sm:inline">Certified Elevator Equipment & Spare Parts Supplier</span>
          <span className="text-neutral-600 hidden sm:inline">/</span>
          <span className="text-neutral-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-white" />
            EN81-20/50 Code Compliant
          </span>
        </div>

        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href="mailto:cma.2011plus@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1.5"
            title="Direct inquiries to Tarek Ahmed"
          >
            <Mail className="w-3 h-3" />
            <span className="hidden md:inline">Inquiries:</span> cma.2011plus@gmail.com
          </a>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-300 font-mono">USD ($) REF PRICING</span>
        </div>
      </div>

      {/* Main Header Brand & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Identity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 border-2 border-white bg-black flex flex-col items-center justify-center font-mono font-black text-white relative shadow-sm group">
                <span className="text-[14px] leading-none tracking-tighter">TA</span>
                <span className="text-[8px] leading-none text-neutral-400 tracking-wider">ELEV</span>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase font-display">
                    Ahmed Elevator Systems
                  </h1>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-neutral-700 text-neutral-300 bg-neutral-900 rounded-none">
                    Proprietor: Tarek Ahmed
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-mono tracking-tight">
                  Commercial & Residential Elevator Spare Parts & Machinery
                </p>
              </div>
            </div>

            {/* Quick Cart Pill on Mobile */}
            <button
              type="button"
              onClick={() => setStep(step === 2 ? 3 : 2)}
              className="md:hidden flex items-center gap-2 border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs font-mono text-neutral-200"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>{totalItemsCount}</span>
            </button>
          </div>

          {/* Stepper Progress Bar */}
          <nav aria-label="Quote Request Progress" className="flex items-center justify-between sm:justify-start gap-1 sm:gap-2">
            {steps.map((s, idx) => {
              const isActive = step === s.number;
              const isPast = step > s.number;

              return (
                <React.Fragment key={s.number}>
                  <button
                    type="button"
                    onClick={() => setStep(s.number)}
                    className={`group flex items-center gap-2.5 px-3 py-2 text-left border transition-all ${
                      isActive
                        ? 'border-white bg-neutral-900 text-white shadow-sm'
                        : isPast
                        ? 'border-neutral-800 bg-black text-neutral-300 hover:border-neutral-600'
                        : 'border-neutral-900 bg-black/50 text-neutral-500 hover:border-neutral-800'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-white text-black'
                          : isPast
                          ? 'border border-neutral-600 text-white'
                          : 'border border-neutral-800 text-neutral-600'
                      }`}
                    >
                      {s.number}
                    </div>

                    <div className="hidden sm:block">
                      <div className="text-xs font-semibold uppercase tracking-wider font-mono leading-none">
                        {s.label}
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono leading-none mt-1">
                        {s.subtitle}
                      </div>
                    </div>
                  </button>

                  {idx < steps.length - 1 && (
                    <div className="hidden sm:flex text-neutral-700 px-0.5">
                      <ArrowRight className="w-3 h-3 text-neutral-600" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Quote Overview Counter (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-neutral-800">
            <div className="text-right font-mono">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Estimated Total</div>
              <div className="text-sm font-bold text-white tracking-tight">
                ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(step === 2 ? 3 : 2)}
              className="relative p-2.5 border border-neutral-800 bg-neutral-900 hover:border-white transition-colors"
              title="View Selected Parts in Quote"
            >
              <ShoppingCart className="w-4 h-4 text-neutral-200" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
