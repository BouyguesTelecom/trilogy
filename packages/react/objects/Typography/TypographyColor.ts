import { getColorStyle, TrilogyColor } from "../facets/Color"

/**
 * Typo color
 */
export enum TypographyColor {
  TEXT_MAIN = "has-text-main",
  TEXT_ACCENT = "has-text-accent",
  TEXT_INFO = "has-text-info",
  TEXT_SUCCESS = "has-text-success",
  TEXT_WARNING = "has-text-warning",
  TEXT_ERROR = "has-text-error",
  TEXT_NEUTRAL = "has-text-grey",
  TEXT_NEUTRAL_DARK = "has-text-grey-dark",
  TEXT_WHITE = "has-text-white",
}

/**
 * Typo color values
 */
export type TypographyColorValues = `${TypographyColor}`;

/**
 * Typography Color Method (TYPO)
 * @param typo {String} TypographyColor
 * @param inverted {Boolean} Inverted color if isset default : false
 */
export const setTypographyColor = (
  typo: Array<string> | string = "",
  inverted = false
): string => {
  return (
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_ACCENT)
      ? getColorStyle(TrilogyColor.ACCENT, 0)
      : typo === TypographyColor.TEXT_ACCENT &&
        getColorStyle(TrilogyColor.ACCENT, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_MAIN)
      ? getColorStyle(TrilogyColor.MAIN, 0)
      : typo === TypographyColor.TEXT_MAIN &&
        getColorStyle(TrilogyColor.MAIN, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_INFO)
      ? getColorStyle(TrilogyColor.INFO, 0)
      : typo === TypographyColor.TEXT_INFO &&
        getColorStyle(TrilogyColor.INFO, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_SUCCESS)
      ? getColorStyle(TrilogyColor.SUCCESS, 0)
      : typo === TypographyColor.TEXT_SUCCESS &&
        getColorStyle(TrilogyColor.SUCCESS, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WARNING)
      ? getColorStyle(TrilogyColor.WARNING, 0)
      : typo === TypographyColor.TEXT_WARNING &&
        getColorStyle(TrilogyColor.WARNING, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_ERROR)
      ? getColorStyle(TrilogyColor.ERROR, 0)
      : typo === TypographyColor.TEXT_ERROR &&
        getColorStyle(TrilogyColor.ERROR, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_NEUTRAL_DARK)
      ? getColorStyle(TrilogyColor.NEUTRAL_DARK, 0)
      : typo === TypographyColor.TEXT_NEUTRAL_DARK &&
        getColorStyle(TrilogyColor.NEUTRAL_DARK, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_NEUTRAL)
      ? getColorStyle(TrilogyColor.NEUTRAL, 0)
      : typo === TypographyColor.TEXT_NEUTRAL &&
        getColorStyle(TrilogyColor.NEUTRAL, 0)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WHITE)
      ? getColorStyle(TrilogyColor.BACKGROUND, 0)
      : typo === TypographyColor.TEXT_WHITE &&
        getColorStyle(TrilogyColor.BACKGROUND, 0)) ||
    (inverted && !typo && getColorStyle(TrilogyColor.BACKGROUND, 0)) ||
    getColorStyle(TrilogyColor.MAIN, 0)
  )
}
