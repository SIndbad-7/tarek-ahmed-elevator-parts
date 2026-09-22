import React from 'react';
import { Search, Filter } from 'lucide-react';
import type { PartCategory } from '../../../core/types';

const CATEGORIES: PartCategory[] = [
  'All',
  'Motors & Traction',
  'Door Systems',
  'Ropes & Suspension',
  'Safety & Braking',
  'Electronics & Controls',
  'Shaft & Mechanical'
];

interface CatalogFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: PartCategory;
  onCategoryChange: (c: PartCategory) => void;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  searchQuery, onSearchChange, selectedCategory, onCategoryChange
}) => (
  <div className="border border-neutral-800 bg-neutral-950 p-4 space-y-4">
    {/* Search */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search by part name, code (GTM-55, VVVF, EN81), or spec..."
        className="w-full pl-10 pr-10 py-2.5 bg-black border border-neutral-800 text-sm font-sans text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono text-neutral-400 hover:text-white"
        >
          CLEAR
        </button>
      )}
    </div>

    {/* Category Pills */}
    <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
      <span className="text-neutral-500 uppercase text-[11px] whitespace-nowrap flex items-center gap-1 pl-1 shrink-0">
        <Filter className="w-3 h-3" /> Filter:
      </span>
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          type="button"
          onClick={() => onCategoryChange(cat)}
          className={`px-3 py-1.5 whitespace-nowrap border uppercase tracking-wider text-[11px] transition-all shrink-0 ${
            selectedCategory === cat
              ? 'bg-white text-black font-bold border-white'
              : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
);
