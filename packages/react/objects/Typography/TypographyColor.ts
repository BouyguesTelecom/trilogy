import { getColorStyle, TrilogyColor } from '../facets/Color'

/**
 * Typo color
 */
export enum TypographyColor {
  TEXT_MAIN = 'has-text-main',
  TEXT_ACCENT = 'has-text-accent',
  TEXT_PRIMARY = 'has-text-primary',
  TEXT_SECONDARY = 'has-text-secondary',
  TEXT_TERTIARY = 'has-text-tertiary',
  TEXT_QUATERNARY = 'has-text-quaternary',
  TEXT_INFO = 'has-text-info',
  TEXT_SUCCESS = 'has-text-success',
  TEXT_WARNING = 'has-text-warning',
  TEXT_ERROR = 'has-text-error',
  TEXT_GREY_DARK = 'has-text-grey-dark',
  TEXT_GREY = 'has-text-grey',
  TEXT_GREY_LIGHT = 'has-text-grey-light',
  TEXT_GREY_LIGHTER = 'has-text-grey-lighter',
  TEXT_WHITE = 'has-text-white',
}

/**
 * Typo color values
 */
export type TypographyColorValues = `${TypographyColor}`

/**
 * Typography Color Method (TYPO)
 * @param typo {String} TypographyColor
 * @param inverted {Boolean} Inverted color if isset default : false
 */
export const setTypographyColor = (typo: Array<string> | string = '', inverted = false): string => {
  return (
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_MAIN)
      ? getColorStyle(TrilogyColor.MAIN)
      : typo === TypographyColor.TEXT_ACCENT && getColorStyle(TrilogyColor.ACCENT)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_SECONDARY)
      ? getColorStyle(TrilogyColor.MAIN)
      : typo === TypographyColor.TEXT_SECONDARY && getColorStyle(TrilogyColor.MAIN)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_INFO)
      ? getColorStyle(TrilogyColor.INFO)
      : typo === TypographyColor.TEXT_INFO && getColorStyle(TrilogyColor.INFO)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_TERTIARY)
      ? getColorStyle(TrilogyColor.MAIN)
      : typo === TypographyColor.TEXT_TERTIARY && getColorStyle(TrilogyColor.MAIN)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_QUATERNARY)
      ? getColorStyle(TrilogyColor.SUCCESS)
      : typo === TypographyColor.TEXT_QUATERNARY && getColorStyle(TrilogyColor.SUCCESS)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_SUCCESS)
      ? getColorStyle(TrilogyColor.SUCCESS)
      : typo === TypographyColor.TEXT_SUCCESS && getColorStyle(TrilogyColor.SUCCESS)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WARNING)
      ? getColorStyle(TrilogyColor.WARNING)
      : typo === TypographyColor.TEXT_WARNING && getColorStyle(TrilogyColor.WARNING)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_ERROR)
      ? getColorStyle(TrilogyColor.ERROR)
      : typo === TypographyColor.TEXT_ERROR && getColorStyle(TrilogyColor.ERROR)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_GREY_DARK)
      ? getColorStyle(TrilogyColor.GREY_DARK)
      : typo === TypographyColor.TEXT_GREY_DARK && getColorStyle(TrilogyColor.GREY_DARK)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_GREY)
      ? getColorStyle(TrilogyColor.GREY)
      : typo === TypographyColor.TEXT_GREY && getColorStyle(TrilogyColor.GREY)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_GREY_LIGHT)
      ? getColorStyle(TrilogyColor.GREY_LIGHT)
      : typo === TypographyColor.TEXT_GREY_LIGHT && getColorStyle(TrilogyColor.GREY_LIGHT)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_GREY_LIGHTER)
      ? getColorStyle(TrilogyColor.GREY_LIGHTER)
      : typo === TypographyColor.TEXT_GREY_LIGHTER && getColorStyle(TrilogyColor.GREY_LIGHTER)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WHITE)
      ? getColorStyle(TrilogyColor.WHITE)
      : typo === TypographyColor.TEXT_WHITE && getColorStyle(TrilogyColor.WHITE)) ||
    (inverted && !typo && getColorStyle(TrilogyColor.WHITE)) ||
    getColorStyle(TrilogyColor.MAIN)
  )
}
