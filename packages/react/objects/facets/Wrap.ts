/**
 * Component Wrap
 */

export enum Wrap {
  WRAP = 'WRAP',
  NOWRAP = 'NOWRAP',
  WRAP_REVERSE = 'WRAP_REVERSE'
}



/**
 * Returns Wrap classname depending on align type
 * @param wrapType {Wrap|string} - Wrap type
 * @returns {string} - Wrap value
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getWrapClassName = (wrapType?: string) => {
  switch (wrapType) {
    case 'WRAP':
      return 'wrap'
    case 'NOWRAP':
      return 'nowrap'
    case 'WRAP_REVERSE':
      return 'wrap-reversed'
    default:
      return 'nowrap'
  }
}
