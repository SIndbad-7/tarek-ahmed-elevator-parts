import React from 'react';
import type { ElevatorPart } from '../types';
import { PartSchematic } from './PartSchematic';
import { X, ShieldCheck, Box, Wrench, ShoppingCart } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface PartDetailModalProps {
  part: ElevatorPart | null;
  onClose: () => void;
}

export const PartDetailModal: React.FC<PartDetailModalProps> = ({ part, onClose }) => {
  const { cart, addToQuote, updateQuantity } = useQuote();

  if (!part) return null;

  const existingInCart = cart.find((i) => i.part.id === part.id);
  const currentQty = existingInCart ? existingInCart.quantity : 1;
  const [modalQty, setModalQty] = React.useState<number>(currentQty);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="border border-neutral-700 bg-neutral-950 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between bg-neutral-900/80 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 bg-black border border-neutral-700 text-white font-bold">
              {part.code}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {part.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 hover:border-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Header & Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-display">
                {part.name}
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Engineering Specification Standard EN81 / Technical Sourcing
              </p>
            </div>

            <div className="text-left sm:text-right font-mono">
              <div className="text-[10px] uppercase text-neutral-500 tracking-wider">Reference Market Price</div>
              <div className="text-2xl font-extrabold text-white">
                ${part.referencePrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-[11px] text-neutral-400">Per {part.unit}</div>
            </div>
          </div>

          {/* Schematic Diagram Preview */}
          <div>
            <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-2 flex items-center justify-between">
              <span>Technical CAD Schematic & Assembly Blueprint</span>
              <span className="text-neutral-500">Scale 1:1 Vector Blueprint</span>
            </div>
            <PartSchematic type={part.schematicType} className="w-full h-56" />
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-black/60 p-4">
              <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-3 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-neutral-400" />
                Technical Parameters
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300 font-sans">
                {part.technicalBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-white font-mono mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {/* Compliance & Standards */}
              <div className="border border-neutral-800 bg-black/60 p-4">
                <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  Standards & Regulatory Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {part.standards.map((std, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-neutral-900 border border-neutral-700 text-neutral-200 text-[11px] font-mono"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* OEM Compatibility */}
              <div className="border border-neutral-800 bg-black/60 p-4">
                <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-2.5 flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-neutral-400" />
                  OEM Manufacturer Compatibility
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {part.compatibility.map((brand, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 border border-neutral-800 text-neutral-400 text-[11px] font-mono"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-mono text-neutral-400 uppercase">Quantity:</span>
              <div className="flex items-center border border-neutral-700 bg-black">
                <button
                  type="button"
                  onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                  className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={modalQty}
                  onChange={(e) => setModalQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 text-center bg-transparent text-sm font-mono text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setModalQty(modalQty + 1)}
                  className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900"
                >
                  +
                </button>
              </div>

              <span className="text-xs font-mono text-neutral-400">
                Subtotal: ${(part.referencePrice * modalQty).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 border border-neutral-800 text-neutral-300 font-mono text-xs uppercase hover:border-neutral-600 transition-colors"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  if (existingInCart) {
                    updateQuantity(part.id, modalQty);
                  } else {
                    addToQuote(part, modalQty);
                  }
                  onClose();
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>{existingInCart ? 'Update In Quote' : 'Add to Quote'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
