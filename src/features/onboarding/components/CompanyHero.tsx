import React from 'react';
import { SUPPLIER_CONTACT } from '../../../core/constants/contact';
import { CheckCircle2 } from 'lucide-react';

/**
 * Company introduction hero banner for Step 1 with owner info and value propositions.
 */
export const CompanyHero: React.FC = () => (
  <div className="border border-neutral-800 bg-neutral-950 p-6 md:p-8 mb-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-48 h-48 bg-grid-pattern opacity-30 pointer-events-none" />

    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Procurement & Engineering Division
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white font-display mb-3">
          Elevator Spare Parts & Equipment Supplier
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-4">
          Specialized heavy machinery, traction systems, safety governors, and certified electronic components
          for passenger, freight, and commercial elevators. Owned and supervised by{' '}
          <strong className="text-white font-semibold">{SUPPLIER_CONTACT.ownerName}</strong>.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
          {[
            'EN81-20 & EN81-50 Standard Compliance',
            'Rapid Technical Inquiry Assessment',
            'Original & OEM Equivalent Components'
          ].map(item => (
            <span key={item} className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" /> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Owner contact card */}
      <div className="border border-neutral-800 bg-black/90 p-4 font-mono text-xs text-neutral-400 min-w-[220px] shrink-0">
        <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2 pb-1 border-b border-neutral-900">
          Direct Sourcing Office
        </div>
        <div className="text-white font-bold mb-1">{SUPPLIER_CONTACT.ownerName}</div>
        <div className="text-neutral-400 text-[11px] mb-2">{SUPPLIER_CONTACT.businessTitle}</div>
        <a
          href={`mailto:${SUPPLIER_CONTACT.officialEmail}`}
          className="text-white underline underline-offset-4 hover:text-neutral-300 break-all block"
        >
          {SUPPLIER_CONTACT.officialEmail}
        </a>
      </div>
    </div>
  </div>
);
