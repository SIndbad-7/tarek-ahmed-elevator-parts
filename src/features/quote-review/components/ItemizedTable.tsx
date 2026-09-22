import React from 'react';
import type { QuoteItem } from '../../../core/types';
import { formatCurrency } from '../../../core/utils/formatters';
import { Trash2 } from 'lucide-react';

interface ItemizedTableProps {
  cart: QuoteItem[];
  subtotal: number;
  totalItemsCount: number;
  onUpdateQuantity: (partId: string, qty: number) => void;
  onRemove: (partId: string) => void;
}

export const ItemizedTable: React.FC<ItemizedTableProps> = ({
  cart, subtotal, totalItemsCount, onUpdateQuantity, onRemove
}) => (
  <div className="border border-neutral-800 bg-neutral-950">
    <div className="border-b border-neutral-800 px-5 py-3 bg-neutral-900/60">
      <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
        Itemised Component Selection
      </h4>
    </div>

    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-xs font-mono">
        <thead>
          <tr className="border-b border-neutral-800 text-neutral-500 uppercase tracking-wider text-[10px]">
            <th className="px-5 py-3 text-left">Part Code / Name</th>
            <th className="px-5 py-3 text-center">Qty</th>
            <th className="px-5 py-3 text-right">Unit Price</th>
            <th className="px-5 py-3 text-right">Line Total</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.part.id} className="border-b border-neutral-900 hover:bg-neutral-900/40 transition-colors">
              <td className="px-5 py-4">
                <div className="font-bold text-white font-sans text-sm">{item.part.name}</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">{item.part.code} · {item.part.specs.slice(0, 60)}...</div>
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center justify-center border border-neutral-800 bg-black w-24 mx-auto">
                  <button onClick={() => onUpdateQuantity(item.part.id, item.quantity - 1)} className="px-2.5 py-1 text-neutral-400 hover:text-white hover:bg-neutral-800">-</button>
                  <span className="px-3 text-white font-bold">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.part.id, item.quantity + 1)} className="px-2.5 py-1 text-neutral-400 hover:text-white hover:bg-neutral-800">+</button>
                </div>
              </td>
              <td className="px-5 py-4 text-right text-neutral-300">{formatCurrency(item.part.referencePrice)}</td>
              <td className="px-5 py-4 text-right font-bold text-white">{formatCurrency(item.part.referencePrice * item.quantity)}</td>
              <td className="px-4 py-4">
                <button onClick={() => onRemove(item.part.id)} className="p-1.5 text-neutral-500 hover:text-white hover:border hover:border-neutral-700 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-neutral-700 bg-neutral-900/80">
            <td colSpan={3} className="px-5 py-3 font-bold text-white uppercase tracking-wider text-xs">
              Total Units: {totalItemsCount}
            </td>
            <td className="px-5 py-3 text-right font-extrabold text-white text-sm">{formatCurrency(subtotal)}</td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>

    {/* Mobile list */}
    <div className="md:hidden divide-y divide-neutral-900">
      {cart.map(item => (
        <div key={item.part.id} className="p-4 space-y-2">
          <div className="flex justify-between items-start gap-2">
            <div>
              <div className="font-bold text-white text-sm font-sans">{item.part.name}</div>
              <div className="text-[11px] text-neutral-400 font-mono mt-0.5">{item.part.code}</div>
            </div>
            <button onClick={() => onRemove(item.part.id)} className="text-neutral-500 hover:text-white">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center border border-neutral-800 bg-black font-mono text-xs">
              <button onClick={() => onUpdateQuantity(item.part.id, item.quantity - 1)} className="px-3 py-1.5 text-neutral-400 hover:text-white">-</button>
              <span className="px-3 text-white font-bold">{item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.part.id, item.quantity + 1)} className="px-3 py-1.5 text-neutral-400 hover:text-white">+</button>
            </div>
            <span className="font-bold text-white font-mono text-sm">{formatCurrency(item.part.referencePrice * item.quantity)}</span>
          </div>
        </div>
      ))}
      <div className="p-4 flex justify-between items-center font-mono font-bold text-sm text-white border-t border-neutral-700 bg-neutral-900/60">
        <span>TOTAL ({totalItemsCount} units)</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
    </div>
  </div>
);
