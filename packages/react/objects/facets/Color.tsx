/**
 * Trilogy color
 */
export enum TrilogyColor {
  BACKGROUND = "BACKGROUND",
  MAIN = "MAIN",
  ACCENT = "ACCENT",
  FONT = "FONT",
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  DISABLED = "DISABLED",
  HOVERED = "HOVERED",
  NEUTRAL = "NEUTRAL",
  NEUTRAL_DARK = "NEUTRAL_DARK",
  NEUTRAL_LIGHT = "NEUTRAL_LIGHT",
  WHITE = "WHITE",
}

export type TrilogyColorValues = `${TrilogyColor}`;

/**
 * Trilogy color values
 */

export const colors: Record<TrilogyColor, string[]> = {
  [TrilogyColor.BACKGROUND]: ["white", "#fff", "main", "#E9E9E9"],
  [TrilogyColor.WHITE]: ["white", "#fff", "main", "#E9E9E9"],
  [TrilogyColor.MAIN]: ["main", "#3d5d7e", "white", "#eff2f8"],
  [TrilogyColor.ACCENT]: ["accent", "#da641b", "white", "#bb5118"],
  [TrilogyColor.FONT]: ["main", "#3d5d7e", "white", "#BBC6CD"],
  [TrilogyColor.SUCCESS]: ["success", "#007B52", "white", "#cae8ca"],
  [TrilogyColor.INFO]: ["info", "#1A688A", "white", "#c8dbec"],
  [TrilogyColor.WARNING]: ["warning", "#FFBB33", "white", "#ecdbc6"],
  [TrilogyColor.ERROR]: ["error", "#D42D02", "white", "#eecccc"],
  [TrilogyColor.DISABLED]: ["disabled", "#646464", "white", "#D1D1D1"],
  [TrilogyColor.NEUTRAL]: ["grey", "#707070", "white", "#F4F4F4"],
  [TrilogyColor.NEUTRAL_DARK]: ["grey-dark", "#646464", "white", "#E9E9E9"],
  [TrilogyColor.NEUTRAL_LIGHT]: ["#E9E9E9", "#E9E9E9"],
  [TrilogyColor.HOVERED]: ["hovered", "#F4F4F4", "white", "#F4F4F4"],
}

/**
 * Returns color's className depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color className value
 */
export const getColorClassName = (
  trilogyColor: TrilogyColor | TrilogyColorValues
): string => {
  const color = colors[trilogyColor]
  return color[0]
}

/**
 * Returns color button's className depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Variant Button value
 */
export const getButtonVariantClassName = (trilogyColor?: string): string => {
  switch (trilogyColor) {
    case "ACCENT":
      return "accent"
    case "PRIMARY":
      return "primary"
    case "SECONDARY":
      return "secondary"
    case "GHOST":
      return "ghost"
    case "SUCCESS":
      return "success"
    case "INFO":
      return "info"
    case "WARNING":
      return "warning"
    case "ERROR":
      return "error"
    case "DISABLED":
      return "disabled"
    default:
      return "primary"
  }
}

export const getButtonColorStyle = (buttonVariant?: string): string => {
  switch (buttonVariant) {
    case "ACCENT":
      return TrilogyColor.ACCENT
    case "PRIMARY":
      return TrilogyColor.MAIN
    case "SECONDARY":
      return TrilogyColor.HOVERED
    case "GHOST":
      return TrilogyColor.WHITE
    default:
      return TrilogyColor.MAIN
  }
}

/**
 * Returns color's style depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color style value
 */
export const getColorStyle = (
  trilogyColor: TrilogyColor | TrilogyColorValues,
  index?: number
): string => {
  const color = colors[trilogyColor]
  return color[1]
}
