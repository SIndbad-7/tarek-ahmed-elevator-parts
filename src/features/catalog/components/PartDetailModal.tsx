import React from 'react';
import type { ElevatorPart } from '../../../core/types';
import { useQuote } from '../../../hooks/useQuote';
import { PartSchematic } from './PartSchematic';
import { Badge } from '../../../shared/components/Badge';
import { Button } from '../../../shared/components/Button';
import { formatCurrency } from '../../../core/utils/formatters';
import { X, ShieldCheck, Box, Wrench, ShoppingCart, Minus, Plus } from 'lucide-react';

interface PartDetailModalProps {
  part: ElevatorPart | null;
  onClose: () => void;
}

export const PartDetailModal: React.FC<PartDetailModalProps> = ({ part, onClose }) => {
  const { cart, addToQuote, updateQuantity } = useQuote();
  const [modalQty, setModalQty] = React.useState(1);

  React.useEffect(() => {
    if (!part) return;
    const inCart = cart.find(i => i.part.id === part.id);
    setModalQty(inCart ? inCart.quantity : 1);
  }, [part, cart]);

  if (!part) return null;

  const inCart = cart.find(i => i.part.id === part.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="border border-neutral-700 bg-neutral-950 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between bg-neutral-900/80 sticky top-0 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <Badge variant="solid">{part.code}</Badge>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">{part.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 hover:border-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Title & price */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-display">{part.name}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">Engineering Specification · EN81 Technical Sourcing</p>
            </div>
            <div className="text-left sm:text-right font-mono">
              <div className="text-[10px] uppercase text-neutral-500 tracking-wider">Reference Market Price</div>
              <div className="text-2xl font-extrabold text-white">{formatCurrency(part.referencePrice)}</div>
              <div className="text-[11px] text-neutral-400">Per {part.unit}</div>
            </div>
          </div>

          {/* Schematic */}
          <div>
            <p className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-2">Technical CAD Schematic & Assembly Blueprint</p>
            <PartSchematic type={part.schematicType} className="w-full h-56" />
          </div>

          {/* Specs + Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-black/60 p-4">
              <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-3 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-neutral-400" /> Technical Parameters
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300 font-sans">
                {part.technicalBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white font-mono mt-0.5">•</span> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="border border-neutral-800 bg-black/60 p-4">
                <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" /> Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {part.standards.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                </div>
              </div>

              <div className="border border-neutral-800 bg-black/60 p-4">
                <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-2.5 flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-neutral-400" /> OEM Compatibility
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {part.compatibility.map(b => <Badge key={b} variant="default">{b}</Badge>)}
                </div>
              </div>
            </div>
          </div>

          {/* Footer action */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-mono text-neutral-400 uppercase">Qty:</span>
              <div className="flex items-center border border-neutral-700 bg-black">
                <button type="button" onClick={() => setModalQty(Math.max(1, modalQty - 1))} className="px-3 py-1.5 text-neutral-400 hover:text-white hover:bg-neutral-900">
                  <Minus className="w-3 h-3" />
                </button>
                <input
                  type="number" min={1} value={modalQty}
                  onChange={e => setModalQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 text-center bg-transparent text-sm font-mono text-white focus:outline-none"
                />
                <button type="button" onClick={() => setModalQty(modalQty + 1)} className="px-3 py-1.5 text-neutral-400 hover:text-white hover:bg-neutral-900">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                = {formatCurrency(part.referencePrice * modalQty)}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (inCart) { updateQuantity(part.id, modalQty); }
                  else { addToQuote(part, modalQty); }
                  onClose();
                }}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                {inCart ? 'Update in Quote' : 'Add to Quote'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
