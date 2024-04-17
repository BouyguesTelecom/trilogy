import { TextLevels, TextLevelValues } from '../..'

/**
 * Typo bold
 */
export enum TypographyBold {
  TEXT_WEIGHT_NORMAL = 'has-text-weight-normal',
  TEXT_WEIGHT_MEDIUM = 'has-text-weight-medium',
  TEXT_WEIGHT_SEMIBOLD = 'has-text-weight-semibold',
  TEXT_WEIGHT_BOLD = 'has-text-weight-bold',
}

/**
 * Typo bold values
 */
export type TypographyBoldValues = `${TypographyBold}`

/**
 * @param typographyBoldType {TypographyBold|string} - Bold type
 * @returns {string} - Bold type
 */

export const getTypographyBoldClassName = (
  typographyBoldType?: string,
): 'has-text-weight-normal' | 'has-text-weight-medium' | 'has-text-weight-semibold' | null => {
  switch (typographyBoldType) {
    case 'TEXT_WEIGHT_NORMAL':
      return 'has-text-weight-normal'
    case 'TEXT_WEIGHT_MEDIUM':
      return 'has-text-weight-medium'
    case 'TEXT_WEIGHT_SEMIBOLD':
      return 'has-text-weight-semibold'
    default:
      return null
  }
}

/**
 * @param typographyBoldType {TypographyBold|string} - Bold type
 * @param level {}
 * @returns {string} - Bold type
 */
export const getTypographyBoldStyle = (typo?: string | Array<string>, level?: TextLevels | TextLevelValues): string => {
  return (
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_NORMAL && 'poppins-regular') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_NORMAL) && 'poppins-regular') ||
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_MEDIUM && 'poppins-medium') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_MEDIUM) && 'poppins-medium') ||
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_SEMIBOLD && 'poppins-semibold') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_SEMIBOLD) && 'poppins-semibold') ||
    (level && level == 'ONE' && 'poppins-regular') ||
    (level && level == 'TWO' && 'poppins-regular') ||
    (level && level == 'THREE' && 'poppins-regular') ||
    'poppins-regular'
  )
}
