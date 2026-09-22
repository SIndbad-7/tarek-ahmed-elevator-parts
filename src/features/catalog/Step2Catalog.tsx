import React, { useState, useMemo } from 'react';
import type { ElevatorPart, PartCategory } from '../../core/types';
import { ELEVATOR_PARTS } from '../../data/catalog.data';
import { useQuote } from '../../hooks/useQuote';
import { CatalogFilters } from './components/CatalogFilters';
import { PartCard } from './components/PartCard';
import { PartDetailModal } from './components/PartDetailModal';
import { ActiveQuoteSidebar } from './components/ActiveQuoteSidebar';
import { Button } from '../../shared/components/Button';
import { Layers, ChevronLeft } from 'lucide-react';

export const Step2Catalog: React.FC = () => {
  const { goToNextStep, goToPreviousStep } = useQuote();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PartCategory>('All');
  const [inspectedPart, setInspectedPart] = useState<ElevatorPart | null>(null);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return ELEVATOR_PARTS.filter(part => {
      const inCategory = selectedCategory === 'All' || part.category === selectedCategory;
      const inSearch = !q ||
        part.name.toLowerCase().includes(q) ||
        part.code.toLowerCase().includes(q) ||
        part.specs.toLowerCase().includes(q) ||
        part.technicalBullets.some(b => b.toLowerCase().includes(q));
      return inCategory && inSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Section header */}
      <div className="border border-neutral-800 bg-neutral-950 p-5 md:p-7 mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">Stage 02 / 03</div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight font-display flex items-center gap-2.5">
            <Layers className="w-6 h-6 text-neutral-400" /> Engineering Component Catalog
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-2 leading-relaxed">
            Select components, inspect CAD schematics, and review specifications.
            All prices are reference market values — direct supplier invoice issued by{' '}
            <span className="text-white font-semibold">Tarek Ahmed</span> upon confirmation.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono">
          <div className="text-neutral-400">Catalog Size: <span className="text-white font-bold">{ELEVATOR_PARTS.length} Components</span></div>
          <div className="text-neutral-400">Showing: <span className="text-white font-bold">{filtered.length} Parts</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main area */}
        <div className="lg:col-span-3 space-y-5">
          <CatalogFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {filtered.length === 0 ? (
            <div className="border border-dashed border-neutral-800 p-12 text-center font-mono text-neutral-500 text-sm">
              No components match your current search or filter criteria.
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="block mt-4 mx-auto text-xs text-neutral-300 underline underline-offset-4 hover:text-white">
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map(part => (
                <PartCard key={part.id} part={part} onInspect={setInspectedPart} />
              ))}
            </div>
          )}

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-900">
            <Button variant="secondary" size="md" onClick={goToPreviousStep}>
              <ChevronLeft className="w-3.5 h-3.5" /> Back to Client Inquiry
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <ActiveQuoteSidebar onProceed={goToNextStep} />
        </div>
      </div>

      <PartDetailModal part={inspectedPart} onClose={() => setInspectedPart(null)} />
    </div>
  );
};
