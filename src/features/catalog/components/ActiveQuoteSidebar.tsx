import React from 'react';
import { useQuote } from '../../../hooks/useQuote';
import { formatCurrency } from '../../../core/utils/formatters';
import { Button } from '../../../shared/components/Button';
import { ShoppingCart, Trash2, PackageCheck, ArrowRight, ShieldCheck } from 'lucide-react';

interface ActiveQuoteSidebarProps {
  onProceed: () => void;
}

export const ActiveQuoteSidebar: React.FC<ActiveQuoteSidebarProps> = ({ onProceed }) => {
  const { cart, updateQuantity, removeFromQuote, clearQuote, subtotal, totalItemsCount } = useQuote();

  return (
    <aside className="sticky top-24 space-y-4">
      <div className="border border-neutral-800 bg-neutral-950">
        {/* Sidebar header */}
        <div className="border-b border-neutral-800 px-5 py-3.5 flex items-center justify-between bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-white" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Active Quote</h3>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 bg-black border border-neutral-800 text-neutral-300">
            {totalItemsCount} {totalItemsCount === 1 ? 'Unit' : 'Units'}
          </span>
        </div>

        <div className="p-5 space-y-4">
          {/* Empty state */}
          {cart.length === 0 ? (
            <div className="text-center py-8 font-mono text-xs text-neutral-500 border border-dashed border-neutral-800 p-4">
              <PackageCheck className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
              <div>Your quote list is empty.</div>
              <div className="mt-1 text-neutral-400">Click "Add to Quote" on any component to begin.</div>
            </div>
          ) : (
            <div className="space-y-3 max-h-80 overflow-y-auto pr-0.5">
              {cart.map(item => (
                <div key={item.part.id} className="border border-neutral-800 bg-black p-3 text-xs font-mono space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-white font-sans leading-tight">{item.part.name}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">
                        {item.part.code} • {formatCurrency(item.part.referencePrice)} / {item.part.unit}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromQuote(item.part.id)}
                      className="text-neutral-500 hover:text-white transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-neutral-900">
                    <div className="flex items-center border border-neutral-800 bg-neutral-950">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.part.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-neutral-400 hover:text-white hover:bg-neutral-800"
                      >-</button>
                      <span className="px-2.5 text-neutral-200 font-bold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.part.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-neutral-400 hover:text-white hover:bg-neutral-800"
                      >+</button>
                    </div>
                    <span className="font-bold text-white">
                      {formatCurrency(item.part.referencePrice * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Totals */}
          <div className="pt-4 border-t border-neutral-800 space-y-2 font-mono text-xs">
            <div className="flex justify-between text-neutral-400">
              <span>Unique Components:</span><span className="text-white">{cart.length}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Total Units:</span><span className="text-white">{totalItemsCount}</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-2 border-t border-neutral-900 text-white">
              <span className="uppercase font-mono">Estimated Total:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <p className="text-[10px] text-neutral-400 leading-tight">
              * Reference USD market pricing. Official invoice provided by Tarek Ahmed upon inquiry.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 space-y-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={onProceed}
              disabled={cart.length === 0}
            >
              Proceed to Final Step <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            {cart.length > 0 && (
              <button
                type="button"
                onClick={clearQuote}
                className="w-full py-1.5 text-neutral-400 hover:text-white font-mono text-[11px] uppercase transition-colors"
              >
                Clear All Items
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Supplier guarantee pill */}
      <div className="border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-400 space-y-2">
        <div className="flex items-center gap-2 text-white font-semibold uppercase">
          <ShieldCheck className="w-4 h-4" /> Direct Supplier Guarantee
        </div>
        <p className="text-[11px] leading-relaxed">
          Every item dispatched is inspected for EN81 compliance and accompanied by original test certificates.
        </p>
      </div>
    </aside>
  );
};
