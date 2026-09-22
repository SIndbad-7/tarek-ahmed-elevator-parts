import React, { useState, useMemo } from 'react';
import { useQuote } from '../context/QuoteContext';
import { ELEVATOR_PARTS } from '../data/catalog';
import type { ElevatorPart, PartCategory } from '../types';
import { PartSchematic } from './PartSchematic';
import { PartDetailModal } from './PartDetailModal';
import { 
  Search, 
  Filter, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  ShoppingCart, 
  Maximize2,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

const CATEGORIES: PartCategory[] = [
  'All',
  'Motors & Traction',
  'Door Systems',
  'Ropes & Suspension',
  'Safety & Braking',
  'Electronics & Controls',
  'Shaft & Mechanical'
];

export const Step2Catalog: React.FC = () => {
  const {
    cart,
    addToQuote,
    updateQuantity,
    removeFromQuote,
    clearQuote,
    subtotal,
    totalItemsCount,
    goToNextStep,
    goToPreviousStep
  } = useQuote();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PartCategory>('All');
  const [selectedModalPart, setSelectedModalPart] = useState<ElevatorPart | null>(null);

  // Filter items
  const filteredParts = useMemo(() => {
    return ELEVATOR_PARTS.filter((part) => {
      const matchesCategory =
        selectedCategory === 'All' || part.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        part.name.toLowerCase().includes(q) ||
        part.code.toLowerCase().includes(q) ||
        part.specs.toLowerCase().includes(q) ||
        part.compatibility.some((b) => b.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fadeIn">
      {/* Top Banner & Context */}
      <div className="border border-neutral-800 bg-neutral-950 p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
            Stage 02 / 03 • Certified Hardware Sourcing
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
            Elevator Parts & Equipment Catalog
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
            Search verified heavy components, traction machines, safety governors, and controllers with market reference pricing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-4 py-2.5 border border-neutral-800 text-xs font-mono uppercase text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Client Info</span>
          </button>

          <button
            type="button"
            onClick={goToNextStep}
            disabled={cart.length === 0}
            className={`px-5 py-2.5 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
              cart.length > 0
                ? 'bg-white text-black hover:bg-neutral-200'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-600 cursor-not-allowed'
            }`}
          >
            <span>Review Quote ({totalItemsCount})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Grid: Catalog + Persistent Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Search, Filter, and Catalog Items (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Search & Category Filter Controls */}
          <div className="border border-neutral-800 bg-neutral-950 p-4 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by part name, part code (e.g. GTM-55, VVVF, EN81), or technical specifications..."
                className="w-full pl-10 pr-10 py-2.5 bg-black border border-neutral-800 text-sm font-sans text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono text-neutral-400 hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono no-scrollbar">
              <span className="text-neutral-500 uppercase tracking-wider text-[11px] whitespace-nowrap flex items-center gap-1 pl-1">
                <Filter className="w-3 h-3" />
                Filter:
              </span>
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 whitespace-nowrap border uppercase tracking-wider text-[11px] transition-all ${
                      isActive
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
            <div>
              Showing <span className="text-white font-bold">{filteredParts.length}</span> of {ELEVATOR_PARTS.length} components
            </div>
            {selectedCategory !== 'All' && (
              <span className="uppercase text-neutral-500">Category: {selectedCategory}</span>
            )}
          </div>

          {/* Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredParts.map((part) => {
              const inCart = cart.find((i) => i.part.id === part.id);
              const quantityInCart = inCart ? inCart.quantity : 0;

              return (
                <div
                  key={part.id}
                  className="group border border-neutral-800 bg-neutral-950 flex flex-col justify-between hover:border-neutral-600 transition-all relative overflow-hidden"
                >
                  {/* Top Schematic Image Preview */}
                  <div className="relative">
                    <PartSchematic type={part.schematicType} className="w-full h-44" />
                    
                    <button
                      type="button"
                      onClick={() => setSelectedModalPart(part)}
                      className="absolute top-2 left-2 p-1.5 bg-black/80 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-colors"
                      title="Inspect Engineering Blueprint"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {part.badge && (
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase px-2 py-0.5 bg-black border border-neutral-700 text-neutral-200">
                        {part.badge}
                      </span>
                    )}

                    <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase px-2 py-0.5 bg-black/90 border border-neutral-800 text-neutral-400">
                      {part.leadTime}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Code & Category */}
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-800 text-white font-bold">
                          {part.code}
                        </span>
                        <span className="text-[11px] text-neutral-400 uppercase">
                          {part.category}
                        </span>
                      </div>

                      {/* Part Name */}
                      <h3 className="text-base font-bold text-white tracking-tight uppercase font-display mb-2">
                        {part.name}
                      </h3>

                      {/* Specs */}
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-3 pb-3 border-b border-neutral-900">
                        {part.specs}
                      </p>

                      {/* Key bullets */}
                      <div className="space-y-1 mb-4">
                        {part.technicalBullets.slice(0, 2).map((b, i) => (
                          <div key={i} className="text-[11px] text-neutral-400 font-mono flex items-start gap-1.5">
                            <span className="text-neutral-600 mt-0.5">›</span>
                            <span className="truncate">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Cart Action Bar */}
                    <div className="pt-3 border-t border-neutral-800/80">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="text-[10px] font-mono uppercase text-neutral-400">
                            Reference Price
                          </div>
                          <div className="text-xl font-extrabold font-mono text-white tracking-tight">
                            ${part.referencePrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-neutral-400">
                          per {part.unit}
                        </div>
                      </div>

                      {/* Quantity Selector & Add Button */}
                      {quantityInCart > 0 ? (
                        <div className="flex items-center justify-between bg-neutral-900 border border-white p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(part.id, quantityInCart - 1)}
                            className="p-1.5 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1 font-mono text-xs font-bold text-white">
                            <span>{quantityInCart}</span>
                            <span className="text-[10px] text-neutral-400 font-normal">in Quote</span>
                          </div>

                          <button
                            type="button"
                            onClick={() => updateQuantity(part.id, quantityInCart + 1)}
                            className="p-1.5 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                            title="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addToQuote(part, 1)}
                          className="w-full py-2.5 px-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Quote</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredParts.length === 0 && (
            <div className="border border-neutral-800 bg-neutral-950 p-12 text-center font-mono">
              <p className="text-neutral-400 text-sm mb-4">
                No elevator components matched your search term "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 border border-neutral-700 text-xs uppercase text-white hover:border-white transition-colors"
              >
                Reset Catalog Filters
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Persistent Floating Active Quote Summary (4 cols on lg) */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="border border-neutral-800 bg-neutral-950">
            {/* Header */}
            <div className="border-b border-neutral-800 px-5 py-3.5 flex items-center justify-between bg-neutral-900/60">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-white" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Active Quote Summary
                </h3>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 bg-black border border-neutral-800 text-neutral-300">
                {totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'}
              </span>
            </div>

            {/* Content List */}
            <div className="p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-8 font-mono text-xs text-neutral-500 border border-dashed border-neutral-800 p-4">
                  <PackageCheck className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
                  Your quote list is currently empty.
                  <div className="mt-1 text-neutral-400">
                    Click "Add to Quote" on any component to calculate pricing.
                  </div>
                </div>
              ) : (
                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.part.id}
                      className="border border-neutral-800 bg-black p-3 text-xs font-mono space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-bold text-white uppercase leading-tight font-sans">
                            {item.part.name}
                          </div>
                          <div className="text-[10px] text-neutral-400 mt-0.5">
                            Code: {item.part.code} • ${item.part.referencePrice.toFixed(2)} / {item.part.unit}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromQuote(item.part.id)}
                          className="text-neutral-500 hover:text-white transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity & Subtotal Row */}
                      <div className="flex items-center justify-between pt-1 border-t border-neutral-900">
                        <div className="flex items-center border border-neutral-800 bg-neutral-950">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.part.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-neutral-400 hover:text-white hover:bg-neutral-800"
                          >
                            -
                          </button>
                          <span className="px-2.5 text-neutral-200 font-bold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.part.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-neutral-400 hover:text-white hover:bg-neutral-800"
                          >
                            +
                          </button>
                        </div>

                        <div className="font-bold text-white">
                          ${(item.part.referencePrice * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Subtotal Calculation */}
              <div className="pt-4 border-t border-neutral-800 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Selected Components:</span>
                  <span className="text-white">{cart.length} unique</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Total Part Units:</span>
                  <span className="text-white">{totalItemsCount}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold pt-2 border-t border-neutral-900 text-white">
                  <span className="uppercase font-mono">Estimated Subtotal:</span>
                  <span className="text-base text-white">
                    ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-[10px] text-neutral-400 leading-tight">
                  * Prices based on reference US Dollar market benchmarks. Official quotation provided upon review by Tarek Ahmed.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={cart.length === 0}
                  className={`w-full py-3 px-4 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    cart.length > 0
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-600 cursor-not-allowed'
                  }`}
                >
                  <span>Proceed to Final Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {cart.length > 0 && (
                  <button
                    type="button"
                    onClick={clearQuote}
                    className="w-full py-1.5 text-neutral-400 hover:text-white font-mono text-[11px] uppercase transition-colors"
                  >
                    Clear All Selected Items
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Support Assurance Widget */}
          <div className="border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs space-y-2 text-neutral-400">
            <div className="flex items-center gap-2 text-white font-semibold uppercase">
              <ShieldCheck className="w-4 h-4" />
              Direct Supplier Guarantee
            </div>
            <p className="text-[11px] leading-relaxed">
              Every item dispatched is inspected for EN81 compliance and accompanied by original test certificates.
            </p>
          </div>
        </div>
      </div>

      {/* Part Inspection Modal */}
      <PartDetailModal
        part={selectedModalPart}
        onClose={() => setSelectedModalPart(null)}
      />
    </div>
  );
};
