/**
 * Used to clean a string
 * @param str String to clean
 */

export function cleanString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Used to generate a stable id
 * @param prefix Prefix for the id
 * @param value Value for the id
 */
export function generateStableId(prefix: string, value: string): string {
  return `${prefix}-${cleanString(value)}`;
}
