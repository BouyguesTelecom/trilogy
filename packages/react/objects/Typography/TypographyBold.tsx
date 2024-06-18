import { useContext } from 'react'
import { TextLevels, TextLevelValues } from '../../lib'
import { TrilogyThemeContext } from "../../context/providerTheme"

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
  const { theme } = useContext(TrilogyThemeContext)
  return (
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_NORMAL && theme?.fontFamily.regular || 'poppins-regular') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_NORMAL) && theme?.fontFamily.regular || 'poppins-regular') ||
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_MEDIUM && theme?.fontFamily.medium || 'poppins-medium') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_MEDIUM) && theme?.fontFamily.medium || 'poppins-medium') ||
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_SEMIBOLD && theme?.fontFamily.bold || 'poppins-semibold') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_SEMIBOLD) && theme?.fontFamily.bold || 'poppins-semibold') ||
    (level && level == 'ONE' && theme?.fontFamily.regular || 'poppins-regular') ||
    (level && level == 'TWO' && theme?.fontFamily.regular || 'poppins-regular') ||
    (level && level == 'THREE' && theme?.fontFamily.regular || 'poppins-regular') ||
    theme?.fontFamily.regular || 'poppins-regular'
  )
}
