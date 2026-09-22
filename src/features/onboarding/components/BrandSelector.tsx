import React from 'react';
import { POPULAR_BRANDS, ALL_ELEVATOR_BRANDS } from '../../../core/constants/brands';
import { useQuote } from '../../../hooks/useQuote';

/**
 * Elevator brand quick-select chips + full dropdown + custom brand input.
 */
export const BrandSelector: React.FC = () => {
  const { clientInfo, updateClientInfo, formErrors } = useQuote();

  return (
    <div className="space-y-3">
      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
        Elevator Brand / Manufacturer Currently Installed
      </label>

      {/* Quick-select chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {POPULAR_BRANDS.map(brand => {
          const isSelected = clientInfo.elevatorBrand.toLowerCase().includes(brand.toLowerCase());
          return (
            <button
              key={brand}
              type="button"
              onClick={() => updateClientInfo({ elevatorBrand: `${brand} Elevator System` })}
              className={`py-2 px-3 text-left border text-xs font-mono transition-all flex items-center justify-between ${
                isSelected
                  ? 'border-white bg-white text-black font-bold'
                  : 'border-neutral-800 bg-black text-neutral-300 hover:border-neutral-600'
              }`}
            >
              <span>{brand}</span>
              {isSelected && <span className="text-[10px] uppercase tracking-wider">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Full dropdown */}
      <select
        value={clientInfo.elevatorBrand}
        onChange={e => updateClientInfo({ elevatorBrand: e.target.value })}
        className="w-full px-3 py-2.5 bg-black border border-neutral-800 text-sm font-mono text-white focus:outline-none focus:border-white transition-colors"
      >
        {ALL_ELEVATOR_BRANDS.map(b => (
          <option key={b} value={b} className="bg-neutral-900 text-white font-sans">{b}</option>
        ))}
      </select>

      {/* Custom brand field */}
      {clientInfo.elevatorBrand === 'Other / Unspecified Brand' && (
        <div>
          <input
            type="text"
            placeholder="Specify Brand / Custom Controller Model..."
            value={clientInfo.customBrand ?? ''}
            onChange={e => updateClientInfo({ customBrand: e.target.value })}
            className="w-full px-3 py-2 bg-black border border-neutral-700 text-sm text-white focus:outline-none focus:border-white"
          />
          {formErrors.customBrand && (
            <p className="mt-1 text-xs text-neutral-300 font-mono">{formErrors.customBrand}</p>
          )}
        </div>
      )}
    </div>
  );
};
