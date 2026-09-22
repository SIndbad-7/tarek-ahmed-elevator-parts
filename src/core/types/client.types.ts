export type UrgencyLevel = 'standard' | 'priority' | 'emergency';

export interface ClientInfo {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  elevatorBrand: string;
  customBrand?: string;
  maintenanceDescription: string;
  urgency: UrgencyLevel;
  buildingFloors?: string;
}

export type ClientFormErrors = Partial<Record<keyof ClientInfo, string>>;
