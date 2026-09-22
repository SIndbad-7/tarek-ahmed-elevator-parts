import React from 'react';
import { SUPPLIER_CONTACT } from '../../core/constants/contact';
import { COMPLIANCE_STANDARDS } from '../../core/constants/compliance';

export const Footer: React.FC = () => (
  <footer className="no-print border-t border-neutral-800 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-mono text-xs text-neutral-400">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-neutral-900">
      {/* Brand */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
          <span className="w-2 h-2 bg-white" />
          {SUPPLIER_CONTACT.companyName}
        </div>
        <p className="text-neutral-400 text-[11px] leading-relaxed font-sans">
          Specialized engineering supplier of elevator spare parts, traction machinery, safety gears, and electronic control units.
          Owned and operated by <strong>{SUPPLIER_CONTACT.ownerName}</strong>.
        </p>
        <div className="text-neutral-300">
          Proprietor: <span className="text-white font-bold">{SUPPLIER_CONTACT.ownerName}</span>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-2">
        <div className="text-white font-bold uppercase text-[11px] tracking-wider">Direct Procurement</div>
        <div>
          <div className="text-neutral-400 text-[10px] uppercase">Official Inquiry Email</div>
          <a
            href={`mailto:${SUPPLIER_CONTACT.officialEmail}`}
            className="text-white hover:underline underline-offset-4 font-bold block"
          >
            {SUPPLIER_CONTACT.officialEmail}
          </a>
        </div>
        <p className="text-[11px] text-neutral-400 font-sans">Inquiries processed daily with itemised engineering specifications and availability reports.</p>
      </div>

      {/* Supported Manufacturers */}
      <div className="space-y-2">
        <div className="text-white font-bold uppercase text-[11px] tracking-wider">Supported Manufacturers</div>
        <ul className="text-[11px] space-y-1 text-neutral-400">
          {['Otis Elevator', 'Schindler Elevator', 'KONE MonoSpace / EcoDisc', 'Mitsubishi Electric', 'TK Elevator (Thyssenkrupp)', 'Generic & Custom Hydraulic'].map(b => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>

      {/* Standards */}
      <div className="space-y-2">
        <div className="text-white font-bold uppercase text-[11px] tracking-wider">Standards & Certifications</div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {COMPLIANCE_STANDARDS.map(std => (
            <span key={std} className="px-2 py-0.5 bg-black border border-neutral-800 text-neutral-300 text-[10px]">
              {std}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-neutral-400 font-sans pt-1">All life-safety components undergo rigorous factory load and trigger calibration tests.</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
      <div>© {new Date().getFullYear()} {SUPPLIER_CONTACT.companyName}. All rights reserved. Managed by {SUPPLIER_CONTACT.ownerName}.</div>
      <div>Direct Inquiries: <span className="text-neutral-300">{SUPPLIER_CONTACT.officialEmail}</span></div>
    </div>
  </footer>
);
