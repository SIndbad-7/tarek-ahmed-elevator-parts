import type { ClientInfo, ClientFormErrors } from '../types';

/**
 * Validates Step 1 client onboarding form fields.
 * Returns a record of field → error string; empty record means valid.
 */
export const validateClientForm = (info: ClientInfo): ClientFormErrors => {
  const errors: ClientFormErrors = {};

  if (!info.fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  } else if (info.fullName.trim().length < 2) {
    errors.fullName = 'Please enter a valid full name (minimum 2 characters).';
  }

  if (!info.phone.trim()) {
    errors.phone = 'Contact phone number is required.';
  } else if (!/^[+0-9\s\-()]{7,20}$/.test(info.phone.trim())) {
    errors.phone = 'Please provide a valid phone number (digits, country code allowed).';
  }

  if (!info.email.trim()) {
    errors.email = 'Work email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (
    info.elevatorBrand === 'Other / Unspecified Brand' &&
    !info.customBrand?.trim()
  ) {
    errors.customBrand = 'Please specify the elevator make or manufacturer model.';
  }

  return errors;
};

export const isFormValid = (errors: ClientFormErrors): boolean =>
  Object.keys(errors).length === 0;
