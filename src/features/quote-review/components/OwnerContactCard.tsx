import React from 'react';
import { SUPPLIER_CONTACT } from '../../../core/constants/contact';
import { Mail, ExternalLink } from 'lucide-react';

export const OwnerContactCard: React.FC = () => (
  <div className="border border-neutral-800 bg-neutral-950 p-6 font-mono text-sm">
    <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-3 pb-2 border-b border-neutral-900 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-white rounded-full" />
      Dispatch To: Direct Parts Procurement Office
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div className="text-white font-bold text-base">{SUPPLIER_CONTACT.ownerName}</div>
        <div className="text-neutral-400 text-xs">{SUPPLIER_CONTACT.businessTitle}</div>
        <div className="text-neutral-500 text-xs mt-1">{SUPPLIER_CONTACT.companyName}</div>
      </div>
      <div className="flex flex-col sm:items-end gap-2">
        <a
          href={`mailto:${SUPPLIER_CONTACT.officialEmail}`}
          className="inline-flex items-center gap-1.5 text-white font-bold text-sm hover:text-neutral-300 transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          {SUPPLIER_CONTACT.officialEmail}
          <ExternalLink className="w-3 h-3 text-neutral-400" />
        </a>
        <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
          {SUPPLIER_CONTACT.inquiryHours}
        </span>
      </div>
    </div>
  </div>
);
