import type { ClientInfo, QuoteItem } from '../types';
import { SUPPLIER_CONTACT } from '../constants/contact';
import { formatCurrency, formatDate, formatDateShort } from './formatters';

/**
 * Generates a unique quotation reference ID per client + date.
 */
export const generateQuoteReference = (clientFullName: string): string => {
  const dateStr = formatDateShort();
  const clientTag = (clientFullName || 'TA').trim().slice(0, 3).toUpperCase();
  return `TA-ELEV-${dateStr}-${clientTag}`;
};

/**
 * Formats the complete order as a plain-text document for email body or clipboard copy.
 */
export const formatOrderText = (
  clientInfo: ClientInfo,
  cart: QuoteItem[],
  subtotal: number,
  totalItemsCount: number,
  quoteReference: string
): string => {
  const lines: string[] = [
    `=================================================================`,
    `AHMED ELEVATOR SYSTEMS & SPARE PARTS – QUOTATION REQUEST`,
    `Proprietor: ${SUPPLIER_CONTACT.ownerName} (${SUPPLIER_CONTACT.officialEmail})`,
    `Quotation Reference: ${quoteReference}`,
    `Date: ${formatDate()}`,
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
    `${clientInfo.maintenanceDescription || 'Standard component procurement as itemised below.'}`,
    ``,
    `--- ITEMISED COMPONENT SELECTION ---`,
  ];

  cart.forEach((item, index) => {
    const lineTotal = item.part.referencePrice * item.quantity;
    lines.push(
      `${index + 1}. [${item.part.code}] ${item.part.name}`,
      `   Specs: ${item.part.specs}`,
      `   Quantity: ${item.quantity} ${item.part.unit} @ ${formatCurrency(item.part.referencePrice)} USD`,
      `   Line Subtotal: ${formatCurrency(lineTotal)} USD`,
      ``
    );
  });

  lines.push(
    `-----------------------------------------------------------------`,
    `Total Part Units: ${totalItemsCount}`,
    `TOTAL ESTIMATED QUOTATION VALUE: ${formatCurrency(subtotal)} USD`,
    `-----------------------------------------------------------------`,
    `Compliance Standard: EN81-20 / EN81-50 Certified`,
    `Direct Supplier: ${SUPPLIER_CONTACT.ownerName} (${SUPPLIER_CONTACT.officialEmail})`,
    `=================================================================`
  );

  return lines.join('\n');
};
