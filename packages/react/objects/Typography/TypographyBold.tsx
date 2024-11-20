import { TrilogyThemeContext } from '@/context/providerTheme'
import { useContext } from 'react'

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
export const getTypographyBoldStyle = (typo?: string | Array<string>) => {
  const { theme } = useContext(TrilogyThemeContext)
  const currentTypo = Array.isArray(typo) ? typo : [typo]

  switch (true) {
    case typo && currentTypo.includes(TypographyBold.TEXT_WEIGHT_MEDIUM):
      return theme?.fontFamily?.medium || 'poppins-medium'

    case typo && currentTypo.includes(TypographyBold.TEXT_WEIGHT_SEMIBOLD):
      return theme?.fontFamily?.bold || 'poppins-semibold'

    case typo && currentTypo.includes(TypographyBold.TEXT_WEIGHT_BOLD):
      return theme?.fontFamily?.bold || 'poppins-semibold'

    default:
      return theme?.fontFamily?.regular || 'poppins-regular'
  }
}
