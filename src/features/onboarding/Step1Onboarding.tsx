import React from 'react';
import { useQuote } from '../../hooks/useQuote';
import { CompanyHero } from './components/CompanyHero';
import { ClientForm } from './components/ClientForm';
import { Card, CardHeader } from '../../shared/components/Card';
import { Button } from '../../shared/components/Button';
import { ArrowRight } from 'lucide-react';

export const Step1Onboarding: React.FC = () => {
  const { goToNextStep } = useQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToNextStep();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <CompanyHero />

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Stage 01 / 03</div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight font-display">
                Client Onboarding & Project Inquiry
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Fields marked <span className="text-white font-bold">*</span> are mandatory
            </div>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit} noValidate>
          <ClientForm />

          {/* Form footer / CTA */}
          <div className="px-6 md:px-8 pb-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-neutral-600 rounded-full" />
              Client data is cached locally — selections persist when navigating between steps.
            </p>
            <Button type="submit" variant="primary" size="lg">
              Proceed to Part Selection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
