import React from 'react';
import type { ClientInfo } from '../../../core/types';
import { Badge } from '../../../shared/components/Badge';
import { User, Building2, Phone, Mail, Zap, Layers } from 'lucide-react';

interface ClientSummaryCardProps {
  clientInfo: ClientInfo;
}

const Row: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="flex items-start gap-3 py-3 border-b border-neutral-900 last:border-0">
    <div className="text-neutral-500 shrink-0 mt-0.5">{icon}</div>
    <div className="min-w-0">
      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{label}</div>
      <div className="text-sm text-white font-medium font-sans truncate">{value}</div>
    </div>
  </div>
);

export const ClientSummaryCard: React.FC<ClientSummaryCardProps> = ({ clientInfo }) => {
  const urgencyColor = {
    standard: 'border-neutral-700 text-neutral-300',
    priority: 'border-white text-white',
    emergency: 'border-white text-white bg-neutral-900 font-bold'
  }[clientInfo.urgency] ?? '';

  return (
    <div className="border border-neutral-800 bg-neutral-950">
      <div className="border-b border-neutral-800 px-5 py-3 bg-neutral-900/60">
        <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Client & Site Profile</h4>
      </div>
      <div className="px-5">
        <Row label="Full Name" value={clientInfo.fullName || '—'} icon={<User className="w-3.5 h-3.5" />} />
        {clientInfo.companyName && (
          <Row label="Company / Facility" value={clientInfo.companyName} icon={<Building2 className="w-3.5 h-3.5" />} />
        )}
        <Row label="Phone Number" value={clientInfo.phone || '—'} icon={<Phone className="w-3.5 h-3.5" />} />
        <Row label="Email Address" value={clientInfo.email || '—'} icon={<Mail className="w-3.5 h-3.5" />} />
        <Row
          label="Elevator Brand"
          value={`${clientInfo.elevatorBrand}${clientInfo.customBrand ? ` (${clientInfo.customBrand})` : ''}`}
          icon={<Layers className="w-3.5 h-3.5" />}
        />
        <Row label="Number of Stops" value={clientInfo.buildingFloors || 'N/A'} icon={<Building2 className="w-3.5 h-3.5" />} />
      </div>
      <div className="px-5 py-3 border-t border-neutral-900 flex items-center gap-2">
        <Zap className="w-3.5 h-3.5 text-neutral-400" />
        <span className="text-[10px] font-mono uppercase text-neutral-400">Urgency:</span>
        <Badge variant="outline" className={urgencyColor}>{clientInfo.urgency}</Badge>
      </div>
      {clientInfo.maintenanceDescription && (
        <div className="px-5 pb-4 pt-0">
          <div className="text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Diagnostic Notes</div>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed border border-neutral-900 bg-black/60 p-3">
            {clientInfo.maintenanceDescription}
          </p>
        </div>
      )}
    </div>
  );
};
