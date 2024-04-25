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
  TEXT_NEUTRAL = "has-text-neutral",
  TEXT_NEUTRAL_DARK = "has-text-neutral-dark",
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
      ? getColorStyle(TrilogyColor.ACCENT)
      : typo === TypographyColor.TEXT_ACCENT &&
        getColorStyle(TrilogyColor.ACCENT)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_MAIN)
      ? getColorStyle(TrilogyColor.MAIN)
      : typo === TypographyColor.TEXT_MAIN &&
        getColorStyle(TrilogyColor.MAIN)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_INFO)
      ? getColorStyle(TrilogyColor.INFO)
      : typo === TypographyColor.TEXT_INFO &&
        getColorStyle(TrilogyColor.INFO)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_SUCCESS)
      ? getColorStyle(TrilogyColor.SUCCESS)
      : typo === TypographyColor.TEXT_SUCCESS &&
        getColorStyle(TrilogyColor.SUCCESS)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WARNING)
      ? getColorStyle(TrilogyColor.WARNING)
      : typo === TypographyColor.TEXT_WARNING &&
        getColorStyle(TrilogyColor.WARNING)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_ERROR)
      ? getColorStyle(TrilogyColor.ERROR)
      : typo === TypographyColor.TEXT_ERROR &&
        getColorStyle(TrilogyColor.ERROR)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_NEUTRAL_DARK)
      ? getColorStyle(TrilogyColor.NEUTRAL_DARK)
      : typo === TypographyColor.TEXT_NEUTRAL_DARK &&
        getColorStyle(TrilogyColor.NEUTRAL_DARK)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_NEUTRAL)
      ? getColorStyle(TrilogyColor.NEUTRAL)
      : typo === TypographyColor.TEXT_NEUTRAL &&
        getColorStyle(TrilogyColor.NEUTRAL)) ||
    (Array.isArray(typo) && typo.includes(TypographyColor.TEXT_WHITE)
      ? getColorStyle(TrilogyColor.WHITE)
      : typo === TypographyColor.TEXT_WHITE &&
        getColorStyle(TrilogyColor.WHITE)) ||
    (inverted && !typo && getColorStyle(TrilogyColor.WHITE)) ||
    getColorStyle(TrilogyColor.MAIN)
  )
}
