import React, { useState, useCallback } from 'react';
import type { ClientInfo, QuoteItem } from '../../../core/types';
import { formatOrderText, generateQuoteReference } from '../../../core/utils/order-formatter';
import { buildMailtoUrl } from '../../../core/utils/mailto';
import { Button } from '../../../shared/components/Button';
import { Mail, Copy, Printer, RefreshCcw, CheckCircle2 } from 'lucide-react';

interface DispatchActionBarProps {
  clientInfo: ClientInfo;
  cart: QuoteItem[];
  subtotal: number;
  totalItemsCount: number;
  onReset: () => void;
}

export const DispatchActionBar: React.FC<DispatchActionBarProps> = ({
  clientInfo, cart, subtotal, totalItemsCount, onReset
}) => {
  const [copied, setCopied] = useState(false);

  const quoteRef = generateQuoteReference(clientInfo.fullName);
  const orderText = formatOrderText(clientInfo, cart, subtotal, totalItemsCount, quoteRef);
  const mailtoUrl = buildMailtoUrl(clientInfo.fullName, orderText);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    } catch {
      /* fallback for older browsers */
    }
  }, [orderText]);

  return (
    <div className="border border-neutral-800 bg-neutral-950">
      <div className="border-b border-neutral-800 px-5 py-3 bg-neutral-900/60">
        <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Dispatch Options</h4>
        <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
          Ref: <span className="text-white font-semibold">{quoteRef}</span>
        </p>
      </div>

      <div className="p-5 space-y-3">
        <Button
          variant="primary"
          size="lg"
          as="a"
          href={mailtoUrl}
          className="w-full"
        >
          <Mail className="w-4 h-4" />
          Send Quote via Email
        </Button>

        <Button
          variant="secondary"
          size="md"
          className="w-full"
          onClick={handleCopy}
        >
          {copied
            ? <><CheckCircle2 className="w-3.5 h-3.5" /> Copied!</>
            : <><Copy className="w-3.5 h-3.5" /> Copy Quote to Clipboard</>
          }
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="ghost" size="sm" onClick={() => window.print()} className="border border-neutral-800">
            <Printer className="w-3.5 h-3.5" /> Print / Save PDF
          </Button>
          <Button variant="ghost" size="sm" onClick={onReset} className="border border-neutral-800 hover:text-red-400">
            <RefreshCcw className="w-3.5 h-3.5" /> Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};
