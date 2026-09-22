import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="no-print border-t border-neutral-800 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-mono text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-neutral-900">
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
            <span className="w-2 h-2 bg-white" />
            Ahmed Elevator Systems
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed font-sans">
            Specialized engineering supplier of elevator spare parts, traction machinery, safety gears, and electronic control units. Owned and operated by <strong>Tarek Ahmed</strong>.
          </p>
          <div className="text-neutral-300">
            Proprietor: <span className="text-white font-bold">Tarek Ahmed</span>
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-2">
          <div className="text-white font-bold uppercase text-[11px] tracking-wider">
            Direct Procurement
          </div>
          <div>
            <div className="text-neutral-400 text-[10px] uppercase">Official Inquiry Email</div>
            <a
              href="mailto:cma.2011plus@gmail.com"
              className="text-white hover:underline underline-offset-4 font-bold block"
            >
              cma.2011plus@gmail.com
            </a>
          </div>
          <p className="text-[11px] text-neutral-400 font-sans">
            Inquiries processed daily with itemized engineering specifications and availability reports.
          </p>
        </div>

        {/* OEM Systems Supported */}
        <div className="space-y-2">
          <div className="text-white font-bold uppercase text-[11px] tracking-wider">
            Supported Manufacturers
          </div>
          <ul className="text-[11px] space-y-1 text-neutral-400">
            <li>• Otis Elevator Sourcing</li>
            <li>• Schindler Elevator Units</li>
            <li>• KONE MonoSpace / EcoDisc</li>
            <li>• Mitsubishi Electric Elevators</li>
            <li>• TK Elevator (Thyssenkrupp)</li>
            <li>• Generic & Custom Hydraulic Systems</li>
          </ul>
        </div>

        {/* Quality Standards */}
        <div className="space-y-2">
          <div className="text-white font-bold uppercase text-[11px] tracking-wider">
            Standards & Certifications
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['EN81-20', 'EN81-50', 'CE 2014/33/EU', 'ISO 9001', 'ISO 4344'].map((std) => (
              <span
                key={std}
                className="px-2 py-0.5 bg-black border border-neutral-800 text-neutral-300 text-[10px]"
              >
                {std}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-neutral-400 font-sans pt-1">
            All life-safety components undergo rigorous factory load and trigger calibration tests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
        <div>
          © {new Date().getFullYear()} Ahmed Elevator Systems. All rights reserved. Managed by Tarek Ahmed.
        </div>
        <div className="flex items-center gap-4">
          <span>High-Contrast Monochrome Industrial UI</span>
          <span>•</span>
          <span className="text-neutral-300">Direct Inquiries: cma.2011plus@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};
