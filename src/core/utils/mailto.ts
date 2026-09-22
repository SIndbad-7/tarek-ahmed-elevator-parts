import { SUPPLIER_CONTACT } from '../constants/contact';

/**
 * Compiles a pre-populated mailto: URL for direct dispatch to Tarek Ahmed.
 */
export const buildMailtoUrl = (
  clientName: string,
  bodyText: string
): string => {
  const subject = `${SUPPLIER_CONTACT.inquirySubjectPrefix} - ${clientName || 'Customer'}`;
  return `mailto:${SUPPLIER_CONTACT.officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
};
