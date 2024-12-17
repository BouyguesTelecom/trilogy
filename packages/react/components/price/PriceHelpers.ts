/**
 * Ensures cents are displayed with 2 digits by padding with a trailing zero if needed.
 * @param text - The cents portion of a price (e.g., "5" or "50")
 * @returns The padded cents string (e.g., "50" or "50")
 * @throws {Error} If text contains non-digit characters
 */
export const checkCents = (text: string): string => {
  if (!/^\d+$/.test(text)) {
    throw new Error('Input must contain only digits')
  }
  return text.length === 1 ? `${text}0` : text
}
