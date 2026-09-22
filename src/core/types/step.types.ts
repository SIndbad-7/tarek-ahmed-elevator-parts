import type React from 'react';

export type StepNumber = 1 | 2 | 3;

export interface StepDefinition {
  number: StepNumber;
  label: string;
  subtitle: string;
  icon?: React.ReactNode;
}
