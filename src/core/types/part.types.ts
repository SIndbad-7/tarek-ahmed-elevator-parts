export type PartCategory =
  | 'All'
  | 'Motors & Traction'
  | 'Door Systems'
  | 'Ropes & Suspension'
  | 'Safety & Braking'
  | 'Electronics & Controls'
  | 'Shaft & Mechanical';

export type SchematicType =
  | 'traction-motor'
  | 'door-operator'
  | 'wire-rope'
  | 'overspeed-governor'
  | 'safety-gear'
  | 'hydraulic-buffer'
  | 'operating-panel'
  | 'control-cabinet'
  | 'guide-shoe'
  | 'light-curtain';

export interface ElevatorPart {
  id: string;
  code: string;
  name: string;
  category: Exclude<PartCategory, 'All'>;
  specs: string;
  technicalBullets: string[];
  referencePrice: number; // in USD
  unit: string;
  leadTime: string;
  compatibility: string[];
  standards: string[];
  badge?: string;
  schematicType: SchematicType;
}
