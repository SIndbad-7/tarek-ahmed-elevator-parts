import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { ELEVATOR_BRANDS } from '../data/catalog';
import { 
  Building2, 
  User, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

export const Step1ClientInquiry: React.FC = () => {
  const { clientInfo, updateClientInfo, formErrors, goToNextStep } = useQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToNextStep();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fadeIn">
      {/* Hero / Company Introduction owned by Tarek Ahmed */}
      <div className="border border-neutral-800 bg-neutral-950 p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Procurement & Engineering Division
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white font-display mb-3">
              Elevator Spare Parts & Equipment Supplier
            </h2>
            
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-4">
              Specialized heavy machinery, traction systems, safety governors, and certified electronic components for passenger, freight, and commercial elevators. Owned and supervised by <strong className="text-white font-semibold">Tarek Ahmed</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                EN81-20 & EN81-50 Standard Compliance
              </span>
              <span className="text-neutral-700">•</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Rapid Technical Inquiry Assessment
              </span>
              <span className="text-neutral-700">•</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Original & OEM Equivalent Components
              </span>
            </div>
          </div>

          <div className="border border-neutral-800 bg-black/90 p-4 font-mono text-xs text-neutral-400 min-w-[220px]">
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2 pb-1 border-b border-neutral-900">
              Direct Sourcing Office
            </div>
            <div className="text-white font-bold mb-1">Tarek Ahmed</div>
            <div className="text-neutral-400 text-[11px] mb-2">Technical Procurement Lead</div>
            <a
              href="mailto:cma.2011plus@gmail.com"
              className="text-white underline underline-offset-4 hover:text-neutral-300 break-all block"
            >
              cma.2011plus@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="border border-neutral-800 bg-neutral-950">
        {/* Card Header */}
        <div className="border-b border-neutral-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-neutral-900/60">
          <div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Stage 01 / 03
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight font-display">
              Client Onboarding & Project Inquiry
            </h3>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            Fields marked with <span className="text-white font-bold">*</span> are mandatory
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6" noValidate>
          {/* Grid: Client Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
              >
                Full Name <span className="text-white font-bold">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="e.g. Eng. Hazem Mansour"
                  value={clientInfo.fullName}
                  onChange={(e) => updateClientInfo({ fullName: e.target.value })}
                  aria-invalid={!!formErrors.fullName}
                  aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
                  className={`w-full pl-9 pr-3 py-2.5 bg-black border text-sm font-sans text-white placeholder-neutral-600 transition-colors focus:outline-none ${
                    formErrors.fullName
                      ? 'border-white ring-1 ring-white'
                      : 'border-neutral-800 focus:border-white'
                  }`}
                />
              </div>
              {formErrors.fullName && (
                <p id="fullName-error" role="alert" className="mt-1.5 text-xs text-neutral-300 font-mono flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-white" />
                  {formErrors.fullName}
                </p>
              )}
            </div>

            {/* Company / Building Name */}
            <div>
              <label 
                htmlFor="companyName" 
                className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
              >
                Company / Building / Facility Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="companyName"
                  name="organization"
                  autoComplete="organization"
                  placeholder="e.g. Al-Noor Tower / Apex Contracting"
                  value={clientInfo.companyName}
                  onChange={(e) => updateClientInfo({ companyName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-black border border-neutral-800 text-sm font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
              >
                Phone Number <span className="text-white font-bold">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="tel"
                  autoComplete="tel"
                  required
                  placeholder="+20 100 123 4567 or +1 (555) 000-0000"
                  value={clientInfo.phone}
                  onChange={(e) => updateClientInfo({ phone: e.target.value })}
                  aria-invalid={!!formErrors.phone}
                  aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                  className={`w-full pl-9 pr-3 py-2.5 bg-black border text-sm font-sans text-white placeholder-neutral-600 transition-colors focus:outline-none ${
                    formErrors.phone
                      ? 'border-white ring-1 ring-white'
                      : 'border-neutral-800 focus:border-white'
                  }`}
                />
              </div>
              {formErrors.phone && (
                <p id="phone-error" role="alert" className="mt-1.5 text-xs text-neutral-300 font-mono flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-white" />
                  {formErrors.phone}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
              >
                Email Address <span className="text-white font-bold">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="procurement@building.com"
                  value={clientInfo.email}
                  onChange={(e) => updateClientInfo({ email: e.target.value })}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className={`w-full pl-9 pr-3 py-2.5 bg-black border text-sm font-sans text-white placeholder-neutral-600 transition-colors focus:outline-none ${
                    formErrors.email
                      ? 'border-white ring-1 ring-white'
                      : 'border-neutral-800 focus:border-white'
                  }`}
                />
              </div>
              {formErrors.email && (
                <p id="email-error" role="alert" className="mt-1.5 text-xs text-neutral-300 font-mono flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-white" />
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>

          {/* Elevator Brand & Model */}
          <div className="pt-2">
            <label 
              htmlFor="elevatorBrand" 
              className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
            >
              Elevator Brand / Manufacturer Currently Installed
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-3">
              {['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'].map((brand) => {
                const isSelected = clientInfo.elevatorBrand.toLowerCase().includes(brand.toLowerCase());
                return (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => updateClientInfo({ elevatorBrand: `${brand} Elevator System` })}
                    className={`py-2 px-3 text-left border text-xs font-mono transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-white bg-white text-black font-bold shadow-sm'
                        : 'border-neutral-800 bg-black text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    <span>{brand}</span>
                    {isSelected && <span className="text-[10px] uppercase tracking-wider">SELECTED</span>}
                  </button>
                );
              })}
            </div>

            <select
              id="elevatorBrand"
              value={clientInfo.elevatorBrand}
              onChange={(e) => updateClientInfo({ elevatorBrand: e.target.value })}
              className="w-full px-3 py-2.5 bg-black border border-neutral-800 text-sm font-mono text-white focus:outline-none focus:border-white transition-colors"
            >
              {ELEVATOR_BRANDS.map((b) => (
                <option key={b} value={b} className="bg-neutral-900 text-white font-sans">
                  {b}
                </option>
              ))}
            </select>

            {clientInfo.elevatorBrand === 'Other / Unspecified Brand' && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Specify Brand / Custom Controller Model..."
                  value={clientInfo.customBrand || ''}
                  onChange={(e) => updateClientInfo({ customBrand: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-neutral-700 text-sm text-white focus:outline-none focus:border-white"
                />
                {formErrors.customBrand && (
                  <p className="mt-1 text-xs text-neutral-300 font-mono">{formErrors.customBrand}</p>
                )}
              </div>
            )}
          </div>

          {/* Issue & Maintenance Description */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label 
                htmlFor="maintenanceDescription" 
                className="block text-xs font-mono uppercase tracking-wider text-neutral-300"
              >
                Detailed Description of Issue / Required Maintenance
              </label>
              <span className="text-[11px] text-neutral-500 font-mono">
                Technical diagnostic notes
              </span>
            </div>
            
            <div className="relative">
              <textarea
                id="maintenanceDescription"
                rows={4}
                placeholder="Example: Traction sheave grooves exhibiting wear causing slippage on landing 4-8. Need replacement 5.5kW machine and matching 10mm wire ropes. Also seeking quote for 800mm door operator header replacement due to intermittent clutch binding..."
                value={clientInfo.maintenanceDescription}
                onChange={(e) => updateClientInfo({ maintenanceDescription: e.target.value })}
                className="w-full p-3.5 bg-black border border-neutral-800 text-sm font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors leading-relaxed"
              />
            </div>
          </div>

          {/* Urgency & Installation Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Service Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['standard', 'priority', 'emergency'] as const).map((lvl) => {
                  const active = clientInfo.urgency === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => updateClientInfo({ urgency: lvl })}
                      className={`py-2 px-2 text-center text-xs font-mono uppercase border transition-all ${
                        active
                          ? 'border-white bg-neutral-100 text-black font-bold'
                          : 'border-neutral-800 bg-black text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {lvl === 'emergency' && '⚡ '}
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label htmlFor="buildingFloors" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Number of Stops / Landings (Optional)
              </label>
              <input
                type="text"
                id="buildingFloors"
                placeholder="e.g. 12 Stops / G+11"
                value={clientInfo.buildingFloors || ''}
                onChange={(e) => updateClientInfo({ buildingFloors: e.target.value })}
                className="w-full px-3 py-2.5 bg-black border border-neutral-800 text-sm font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Form Action CTA */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-neutral-600 rounded-full" />
              Client data is cached locally. Advancing to Step 2 maintains all selections.
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider border border-white hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group"
            >
              <span>Proceed to Part Selection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
