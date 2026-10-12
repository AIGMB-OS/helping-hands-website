/**
 * Future recipient for a secure assistance email.
 * Delivery stays off until Helping Hands approves it.
 * Do not send mail, write a database, or store form text.
 */
export const assistanceRecipient = "helpinghandsdenvernc@gmail.com";

export const assistanceDeliveryEnabled = false;

export const assistanceCategories = [
  "Food Assistance",
  "Clothing Assistance",
  "Furniture & Household Items",
  "Other Community Resources",
] as const;
