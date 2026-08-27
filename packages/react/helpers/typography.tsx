import { useContext } from 'react'
import { TrilogyThemeContext } from '@/context/providerTheme'
import { getColorStyle } from '@/helpers/color'
import { TrilogyColor } from "@/interfaces/Color";
import { TypographyAlign } from "@/interfaces/TypographyAlign";
import { TypographyBold } from "@/interfaces/TypographyBold";
import { TypographyColor } from "@/interfaces/TypographyColor";

/**
 * Typography Alignment Method (TYPO)
 * @param typo {String} TypographyColor
 */
export const setTypographyAlign = (
  typo: Array<string> | string = 'left',
): 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined => {
  return (
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_CENTERED && 'center') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_CENTERED) && 'center') ||
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_LEFT && 'left') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_LEFT) && 'left') ||
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_RIGHT && 'right') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_RIGHT) && 'right') ||
    (typo && !Array.isArray(typo) && typo === TypographyAlign.TEXT_JUSTIFIED && 'justify') ||
    (typo && Array.isArray(typo) && typo.includes(TypographyAlign.TEXT_JUSTIFIED) && 'justify') ||
    'left'
  )
}

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
      return theme?.fontFamily?.speak || 'poppins-semibold'

    default:
      return theme?.fontFamily?.regular || 'poppins-regular'
  }
}

/**
 * Typography Color Method (TYPO)
 * @param typo {String} TypographyColor
 * @param inverted {Boolean} Inverted color if isset default : false
 */
export const setTypographyColor = (typo: Array<string> | string = '', inverted = false, loading = false): string => {
  return loading
    ? 'transparent'
    : (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_DISABLED)
        ? getColorStyle(TrilogyColor.DISABLED)
        : typo === TypographyColor.TEXT_DISABLED && getColorStyle(TrilogyColor.DISABLED)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_ACCENT)
          ? getColorStyle(TrilogyColor.ACCENT)
          : typo === TypographyColor.TEXT_ACCENT && getColorStyle(TrilogyColor.ACCENT)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_MAIN)
          ? getColorStyle(TrilogyColor.MAIN)
          : typo === TypographyColor.TEXT_MAIN && getColorStyle(TrilogyColor.MAIN)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_INFO)
          ? getColorStyle(TrilogyColor.INFO)
          : typo === TypographyColor.TEXT_INFO && getColorStyle(TrilogyColor.INFO)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_SUCCESS)
          ? getColorStyle(TrilogyColor.SUCCESS)
          : typo === TypographyColor.TEXT_SUCCESS && getColorStyle(TrilogyColor.SUCCESS)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WARNING)
          ? getColorStyle(TrilogyColor.WARNING)
          : typo === TypographyColor.TEXT_WARNING && getColorStyle(TrilogyColor.WARNING)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_ERROR)
          ? getColorStyle(TrilogyColor.ERROR)
          : typo === TypographyColor.TEXT_ERROR && getColorStyle(TrilogyColor.ERROR)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_NEUTRAL)
          ? getColorStyle(TrilogyColor.NEUTRAL)
          : typo === TypographyColor.TEXT_NEUTRAL && getColorStyle(TrilogyColor.NEUTRAL)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WHITE)
          ? getColorStyle(TrilogyColor.BACKGROUND)
          : typo === TypographyColor.TEXT_WHITE && getColorStyle(TrilogyColor.BACKGROUND)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_MAIN_FADE)
          ? getColorStyle(TrilogyColor.MAIN_FADE)
          : typo === TypographyColor.TEXT_MAIN_FADE && getColorStyle(TrilogyColor.MAIN_FADE)) ||
        (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_PLACEHOLDER)
          ? getColorStyle(TrilogyColor.FONT_PLACEHOLDER)
          : typo === TypographyColor.TEXT_PLACEHOLDER && getColorStyle(TrilogyColor.FONT_PLACEHOLDER)) ||
        (inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
        getColorStyle(TrilogyColor.MAIN)
}
