/**
 * Check if type is an object with displayName key
 * @param type
 * @returns {boolean}
 */
export const hasDisplayName = <T extends object>(type: T | { displayName: string }): type is { displayName: string } =>
  'displayName' in type
