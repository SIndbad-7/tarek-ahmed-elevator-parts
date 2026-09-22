import React from 'react';
import type { ElevatorPart } from '../../../core/types';
import { useQuote } from '../../../hooks/useQuote';
import { PartSchematic } from './PartSchematic';
import { Badge } from '../../../shared/components/Badge';
import { Button } from '../../../shared/components/Button';
import { formatCurrency } from '../../../core/utils/formatters';
import { Plus, Minus, Maximize2 } from 'lucide-react';

interface PartCardProps {
  part: ElevatorPart;
  onInspect: (part: ElevatorPart) => void;
}

export const PartCard: React.FC<PartCardProps> = ({ part, onInspect }) => {
  const { cart, addToQuote, updateQuantity } = useQuote();
  const inCart = cart.find(i => i.part.id === part.id);
  const qty = inCart?.quantity ?? 0;

  return (
    <div className="group border border-neutral-800 bg-neutral-950 flex flex-col hover:border-neutral-600 transition-all overflow-hidden">
      {/* Schematic preview */}
      <div className="relative">
        <PartSchematic type={part.schematicType} className="w-full h-44" />
        <button
          type="button"
          onClick={() => onInspect(part)}
          className="absolute top-2 left-2 p-1.5 bg-black/80 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-colors"
          title="Inspect Engineering Blueprint"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
        {part.badge && (
          <Badge variant="outline" className="absolute bottom-2 left-2 bg-black">{part.badge}</Badge>
        )}
        <Badge variant="default" className="absolute bottom-2 right-2 bg-black/90">{part.leadTime}</Badge>
      </div>

      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Part code + category */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="default">{part.code}</Badge>
            <span className="text-[11px] font-mono text-neutral-400 uppercase">{part.category}</span>
          </div>

          {/* Name */}
          <h3 className="text-base font-bold text-white tracking-tight uppercase font-display mb-2">{part.name}</h3>

          {/* Specs */}
          <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-3 pb-3 border-b border-neutral-900">
            {part.specs}
          </p>

          {/* Top 2 technical bullets */}
          <div className="space-y-1 mb-4">
            {part.technicalBullets.slice(0, 2).map((b, i) => (
              <div key={i} className="text-[11px] text-neutral-400 font-mono flex items-start gap-1.5">
                <span className="text-neutral-600 mt-0.5">›</span>
                <span className="truncate">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & action */}
        <div className="pt-3 border-t border-neutral-800/80">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-neutral-400">Reference Price</div>
              <div className="text-xl font-extrabold font-mono text-white">{formatCurrency(part.referencePrice)}</div>
            </div>
            <div className="text-[11px] font-mono text-neutral-400">per {part.unit}</div>
          </div>

          {qty > 0 ? (
            <div className="flex items-center justify-between bg-neutral-900 border border-white p-1">
              <button
                type="button"
                onClick={() => updateQuantity(part.id, qty - 1)}
                className="p-1.5 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-xs font-bold text-white">{qty} in Quote</span>
              <button
                type="button"
                onClick={() => updateQuantity(part.id, qty + 1)}
                className="p-1.5 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Button variant="primary" size="md" className="w-full" onClick={() => addToQuote(part, 1)}>
              <Plus className="w-3.5 h-3.5" /> Add to Quote
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
