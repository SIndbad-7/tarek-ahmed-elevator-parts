import React from 'react';
import { useQuote } from '../../../hooks/useQuote';
import { Input, Textarea } from '../../../shared/components/Input';
import { Building2, User, Phone, Mail } from 'lucide-react';
import { BrandSelector } from './BrandSelector';

/**
 * Client contact inputs, maintenance description, and urgency selector for Step 1.
 */
export const ClientForm: React.FC = () => {
  const { clientInfo, updateClientInfo, formErrors } = useQuote();

  return (
    <div className="space-y-6 p-6 md:p-8">
      {/* Client contact grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="fullName"
          label="Full Name"
          required
          autoComplete="name"
          placeholder="e.g. Eng. Hazem Mansour"
          icon={<User className="w-4 h-4" />}
          value={clientInfo.fullName}
          onChange={e => updateClientInfo({ fullName: e.target.value })}
          error={formErrors.fullName}
        />

        <Input
          id="companyName"
          label="Company / Building / Facility Name"
          autoComplete="organization"
          placeholder="e.g. Al-Noor Tower / Apex Contracting"
          icon={<Building2 className="w-4 h-4" />}
          value={clientInfo.companyName}
          onChange={e => updateClientInfo({ companyName: e.target.value })}
        />

        <Input
          id="phone"
          label="Phone Number"
          required
          type="tel"
          autoComplete="tel"
          placeholder="+20 100 123 4567"
          icon={<Phone className="w-4 h-4" />}
          value={clientInfo.phone}
          onChange={e => updateClientInfo({ phone: e.target.value })}
          error={formErrors.phone}
        />

        <Input
          id="email"
          label="Email Address"
          required
          type="email"
          autoComplete="email"
          placeholder="procurement@building.com"
          icon={<Mail className="w-4 h-4" />}
          value={clientInfo.email}
          onChange={e => updateClientInfo({ email: e.target.value })}
          error={formErrors.email}
        />
      </div>

      {/* Brand selector */}
      <BrandSelector />

      {/* Maintenance description */}
      <Textarea
        id="maintenanceDescription"
        label="Detailed Description of Issue / Required Maintenance"
        hint="Technical diagnostic notes"
        rows={4}
        placeholder="Example: Traction sheave grooves exhibiting wear, slippage on landings 4-8. Need 5.5kW machine and 10mm wire ropes..."
        value={clientInfo.maintenanceDescription}
        onChange={e => updateClientInfo({ maintenanceDescription: e.target.value })}
      />

      {/* Urgency + Floors grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
            Service Urgency Level
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['standard', 'priority', 'emergency'] as const).map(lvl => (
              <button
                key={lvl}
                type="button"
                onClick={() => updateClientInfo({ urgency: lvl })}
                className={`py-2 text-center text-xs font-mono uppercase border transition-all ${
                  clientInfo.urgency === lvl
                    ? 'border-white bg-neutral-100 text-black font-bold'
                    : 'border-neutral-800 bg-black text-neutral-400 hover:border-neutral-700'
                }`}
              >
                {lvl === 'emergency' && '⚡ '}{lvl}
              </button>
            ))}
          </div>
        </div>

        <Input
          id="buildingFloors"
          label="Number of Stops / Landings (Optional)"
          placeholder="e.g. 12 Stops / G+11"
          value={clientInfo.buildingFloors ?? ''}
          onChange={e => updateClientInfo({ buildingFloors: e.target.value })}
        />
      </div>
    </div>
  );
};
