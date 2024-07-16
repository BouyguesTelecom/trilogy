import { useContext } from 'react'
import { TextLevels, TextLevelValues } from '@/components/text'
import { TrilogyThemeContext } from "@/context/providerTheme"

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
export const getTypographyBoldStyle = (typo?: string | Array<string>, level?: TextLevels | TextLevelValues) => {
  const { theme } = useContext(TrilogyThemeContext)

  return (
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_NORMAL && ((theme === null || theme === void 0 ? void 0 : 'poppins-regular') || theme.fontFamily.regular)) ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_NORMAL) && ((theme === null || theme === void 0 ? void 0 : 'poppins-regular') || theme.fontFamily.regular)) ||
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_MEDIUM && ((theme === null || theme === void 0 ? void 0 : 'poppins-medium') || theme.fontFamily.medium)) ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_MEDIUM) && ((theme === null || theme === void 0 ? void 0 : 'poppins-medium') || theme.fontFamily.medium)) ||
    (typo && !Array.isArray(typo) && typo === TypographyBold.TEXT_WEIGHT_SEMIBOLD && ((theme === null || theme === void 0 ? void 0 : 'poppins-semibold') || theme.fontFamily.bold)) ||
    (typo && Array.isArray(typo) && typo.includes(TypographyBold.TEXT_WEIGHT_SEMIBOLD) && ((theme === null || theme === void 0 ? void 0 : 'poppins-semibold') || theme.fontFamily.bold)) ||
    (level && level == 'ONE' && ((theme === null || theme === void 0 ? void 0 : 'poppins-regular') || theme.fontFamily.regular)) ||
    (level && level == 'TWO' && ((theme === null || theme === void 0 ? void 0 : 'poppins-regular') || theme.fontFamily.regular))||
    (level && level == 'THREE' && ((theme === null || theme === void 0 ? void 0 : 'poppins-regular') || theme.fontFamily.regular)) ||
    (theme === null || theme === void 0 ? void 0 : 'poppins-regular') || theme.fontFamily.regular
  );
}
