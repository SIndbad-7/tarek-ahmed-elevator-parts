import React, { useState } from 'react';
import { useQuote } from '../context/QuoteContext';
import { 
  Mail, 
  Copy, 
  Printer, 
  ArrowLeft, 
  User, 
  Check, 
  FileText, 
  BadgeCheck 
} from 'lucide-react';

export const Step3QuoteReview: React.FC = () => {
  const { clientInfo, cart, subtotal, totalItemsCount, setStep, showToast } = useQuote();
  const [copied, setCopied] = useState(false);

  // Generate a deterministic reference quote ID
  const quoteReference = React.useMemo(() => {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const clientHash = (clientInfo.fullName || 'TA').slice(0, 3).toUpperCase();
    return `TA-ELEV-${dateStr}-${clientHash}`;
  }, [clientInfo.fullName]);

  // Construct structured text order details
  const generateFormattedOrderText = () => {
    const lines = [
      `=================================================================`,
      `AHMED ELEVATOR SYSTEMS & SPARE PARTS - QUOTATION REQUEST`,
      `Proprietor: Tarek Ahmed (cma.2011plus@gmail.com)`,
      `Quotation Reference: ${quoteReference}`,
      `Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      `=================================================================`,
      ``,
      `--- CLIENT & FACILITY SPECIFICATIONS ---`,
      `Full Name: ${clientInfo.fullName}`,
      `Company / Facility: ${clientInfo.companyName || 'N/A'}`,
      `Phone Number: ${clientInfo.phone}`,
      `Email Address: ${clientInfo.email}`,
      `Elevator Brand / Model: ${clientInfo.elevatorBrand}${clientInfo.customBrand ? ` (${clientInfo.customBrand})` : ''}`,
      `Service Urgency Level: ${clientInfo.urgency.toUpperCase()}`,
      `Number of Landings / Stops: ${clientInfo.buildingFloors || 'Standard'}`,
      ``,
      `Diagnostic Notes / Issue Description:`,
      `${clientInfo.maintenanceDescription || 'Standard component procurement as itemized below.'}`,
      ``,
      `--- ITEMIZED COMPONENT SELECTION ---`,
    ];

    cart.forEach((item, index) => {
      const lineTotal = item.part.referencePrice * item.quantity;
      lines.push(
        `${index + 1}. [${item.part.code}] ${item.part.name}`,
        `   Specs: ${item.part.specs}`,
        `   Quantity: ${item.quantity} ${item.part.unit} @ $${item.part.referencePrice.toFixed(2)} USD`,
        `   Line Subtotal: $${lineTotal.toFixed(2)} USD`,
        ``
      );
    });

    lines.push(
      `-----------------------------------------------------------------`,
      `Total Part Units: ${totalItemsCount}`,
      `TOTAL ESTIMATED QUOTATION VALUE: $${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD`,
      `-----------------------------------------------------------------`,
      `Compliance Standard: EN81-20 / EN81-50 Certified`,
      `Direct Supplier: Tarek Ahmed (cma.2011plus@gmail.com)`,
      `=================================================================`
    );

    return lines.join('\n');
  };

  // Pre-populated mailto URL generator
  const mailtoUrl = React.useMemo(() => {
    const recipient = 'cma.2011plus@gmail.com';
    const subject = `New Elevator Parts Inquiry - ${clientInfo.fullName || 'Customer'}`;
    const bodyText = generateFormattedOrderText();
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  }, [clientInfo, cart, subtotal, totalItemsCount, quoteReference]);

  const handleCopyOrderDetails = async () => {
    const text = generateFormattedOrderText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      showToast('Order details copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      showToast('Copied quotation text summary.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fadeIn">
      {/* Printable Invoice Header (Visible only on print or clean preview) */}
      <div className="hidden print:block mb-8 pb-6 border-b-2 border-black font-mono">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-tight text-black">
              AHMED ELEVATOR SYSTEMS & SPARE PARTS
            </h1>
            <p className="text-sm text-neutral-800">
              Heavy Elevator Machinery • Traction Systems • EN81-20/50 Safety Components
            </p>
            <p className="text-sm font-bold mt-1 text-black">
              Proprietor: Tarek Ahmed • Email: cma.2011plus@gmail.com
            </p>
          </div>
          <div className="text-right text-xs">
            <div className="font-bold text-sm">FORMAL QUOTATION REQUEST</div>
            <div>Ref: {quoteReference}</div>
            <div>Date: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      {/* Screen Top Navigation / Back */}
      <div className="no-print flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-4 py-2 border border-neutral-800 text-xs font-mono uppercase text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Parts Catalog</span>
        </button>

        <div className="text-xs font-mono text-neutral-400">
          Ref: <span className="text-white font-bold">{quoteReference}</span>
        </div>
      </div>

      {/* Direct Owner Contact Card */}
      <div className="border-2 border-white bg-neutral-950 p-6 md:p-8 mb-8 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white text-black font-mono text-xs uppercase font-extrabold">
              <BadgeCheck className="w-3.5 h-3.5 text-black" />
              Verified Direct Supplier
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-white font-display">
              Ready for Sourcing Dispatch • Tarek Ahmed
            </h2>
            
            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl leading-relaxed">
              Your technical specification inquiry and itemized components have been compiled. Confirm your quote directly with company owner <strong>Tarek Ahmed</strong> for stock reservation and dispatch logistics.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                cma.2011plus@gmail.com
              </span>
              <span className="text-neutral-700">|</span>
              <span className="text-neutral-300">Fast Technical Reply & Invoicing</span>
            </div>
          </div>

          {/* Quick Mail CTA Button in Banner */}
          <div className="no-print flex flex-col gap-3 min-w-[220px]">
            <a
              href={mailtoUrl}
              className="w-full py-3.5 px-6 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-center shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Send Request via Email</span>
            </a>
            <div className="text-[10px] text-neutral-400 font-mono text-center">
              Pre-populates email to cma.2011plus@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Client Summary + Action Center */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Client Profile Box */}
        <div className="md:col-span-2 border border-neutral-800 bg-neutral-950 p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <h3 className="text-xs font-mono uppercase font-bold text-white tracking-wider flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-neutral-400" />
              Client & Site Profile
            </h3>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="no-print text-[11px] font-mono text-neutral-400 hover:text-white underline underline-offset-4"
            >
              Edit Details
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">Client Representative</span>
              <span className="text-white font-bold text-sm font-sans">{clientInfo.fullName || 'Not specified'}</span>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">Building / Company</span>
              <span className="text-neutral-200 font-sans">{clientInfo.companyName || 'Not specified'}</span>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">Direct Phone</span>
              <span className="text-neutral-200">{clientInfo.phone || 'Not specified'}</span>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">Contact Email</span>
              <span className="text-neutral-200">{clientInfo.email || 'Not specified'}</span>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">Elevator System Brand</span>
              <span className="text-white font-bold">
                {clientInfo.elevatorBrand} {clientInfo.customBrand ? `(${clientInfo.customBrand})` : ''}
              </span>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">Service Urgency</span>
              <span className="inline-block px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-white uppercase text-[11px] font-bold">
                {clientInfo.urgency}
              </span>
            </div>
          </div>

          {clientInfo.maintenanceDescription && (
            <div className="pt-3 border-t border-neutral-900">
              <span className="text-neutral-500 uppercase block text-[10px] font-mono mb-1">
                Reported Maintenance Requirements / Diagnostic Symptoms:
              </span>
              <p className="text-xs text-neutral-300 font-sans bg-black p-3 border border-neutral-900 leading-relaxed whitespace-pre-wrap">
                {clientInfo.maintenanceDescription}
              </p>
            </div>
          )}
        </div>

        {/* Quick Action Center */}
        <div className="no-print border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-white tracking-wider mb-2 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              Quotation Actions
            </h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Export your quotation details or copy the formal text summary for your purchasing department.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <button
              type="button"
              onClick={handleCopyOrderDetails}
              className="w-full py-2.5 px-3 border border-neutral-700 bg-black text-white hover:border-white hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2 uppercase font-semibold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Order Details Copied!' : 'Copy Order Details'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="w-full py-2.5 px-3 border border-neutral-700 bg-black text-white hover:border-white hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2 uppercase font-semibold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download PDF / Print</span>
            </button>
          </div>

          <div className="pt-2 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
            Direct Supplier: <span className="text-white">Tarek Ahmed</span>
            <br />
            Email: <span className="text-white">cma.2011plus@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Itemized Parts Sourcing Table */}
      <div className="border border-neutral-800 bg-neutral-950 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Itemized Elevator Components & Equipment
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              Certified technical specifications and line item breakdown
            </p>
          </div>
          <span className="font-mono text-xs text-white px-2.5 py-1 bg-black border border-neutral-700">
            {totalItemsCount} Total Units
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-black border-b border-neutral-800 text-neutral-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Part Code</th>
                <th className="py-3 px-4">Description & Technical Specs</th>
                <th className="py-3 px-4 text-center">Qty</th>
                <th className="py-3 px-4 text-right">Unit Price</th>
                <th className="py-3 px-4 text-right">Line Total (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900">
              {cart.map((item, idx) => {
                const lineTotal = item.part.referencePrice * item.quantity;
                return (
                  <tr key={item.part.id} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-3.5 px-4 text-neutral-500 font-bold">{idx + 1}</td>
                    <td className="py-3.5 px-4 text-white font-bold whitespace-nowrap">
                      {item.part.code}
                    </td>
                    <td className="py-3.5 px-4 text-neutral-200">
                      <div className="font-bold text-white font-sans">{item.part.name}</div>
                      <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                        {item.part.specs}
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                        Standards: {item.part.standards.join(' • ')}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center text-white font-bold whitespace-nowrap">
                      {item.quantity} {item.part.unit}
                    </td>
                    <td className="py-3.5 px-4 text-right text-neutral-300 whitespace-nowrap">
                      ${item.part.referencePrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 text-right text-white font-bold whitespace-nowrap">
                      ${lineTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* Table Footer Totals */}
            <tfoot className="border-t-2 border-neutral-800 bg-black font-mono">
              <tr>
                <td colSpan={4} className="py-4 px-6 text-right uppercase text-neutral-400 text-xs tracking-wider">
                  Total Estimated Reference Value:
                </td>
                <td colSpan={2} className="py-4 px-6 text-right text-white text-xl font-extrabold">
                  ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xs text-neutral-400 font-normal">USD</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Terms & Technical Compliance Notes */}
      <div className="border border-neutral-800 bg-neutral-950 p-6 font-mono text-xs text-neutral-400 space-y-2 mb-8">
        <div className="text-white font-bold uppercase tracking-wider mb-1">
          Technical Supply Terms & Guarantee:
        </div>
        <p className="leading-relaxed text-[11px]">
          1. <strong>Verification:</strong> All parts are supplied with manufacturer traceability records and EN81-20/50 test certificates.
        </p>
        <p className="leading-relaxed text-[11px]">
          2. <strong>Warranty:</strong> 12-month commercial warranty against manufacturing defects on all electrical and traction machinery.
        </p>
        <p className="leading-relaxed text-[11px]">
          3. <strong>Fulfillment:</strong> Stock reservation is locked upon receipt of your email inquiry to Tarek Ahmed (<span className="text-white">cma.2011plus@gmail.com</span>).
        </p>
      </div>

      {/* Main Dispatch CTA Bar */}
      <div className="no-print border border-white bg-black p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-white font-bold uppercase text-sm font-mono">
            Ready to dispatch your inquiry to Tarek Ahmed?
          </div>
          <p className="text-xs text-neutral-400 font-sans mt-0.5">
            Clicking below will open your email client with the complete quotation formatted for immediate processing.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleCopyOrderDetails}
            className="w-1/2 sm:w-auto px-4 py-3 border border-neutral-700 text-neutral-200 text-xs font-mono uppercase hover:border-white hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Text</span>
          </button>

          <a
            href={mailtoUrl}
            className="w-1/2 sm:w-auto px-8 py-3 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
