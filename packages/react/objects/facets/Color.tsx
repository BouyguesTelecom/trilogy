/**
 * Trilogy color
 */
export enum TrilogyColor {
  BACKGROUND = "BACKGROUND",
  MAIN = "MAIN",
  ALTERNATE = "ALTERNATE",
  FONT = "FONT",
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  DISABLED = "DISABLED",
  HOVERED = "HOVERED",
  NEUTRAL = "NEUTRAL",
  NEUTRAL_DARK = "NEUTRAL_DARK",
  GREY = "GREY",
  GREY_DARK = "GREY_DARK",
  GREY_LIGHT = "GREY_LIGHT",
  GREY_LIGHTER = "GREY_LIGHTER",
}

export type TrilogyColorValues = `${TrilogyColor}`;

/**
 * Trilogy color values
 */

export const colors: Record<TrilogyColor, string[]> = {
  [TrilogyColor.BACKGROUND]: ["white", "#fff", "main", "#E9E9E9"],
  [TrilogyColor.MAIN]: ["main", "#3d5d7e", "white", "#eff2f8"],
  [TrilogyColor.ALTERNATE]: ["accent", "#da641b", "white", "#bb5118"],
  [TrilogyColor.FONT]: ["main", "#3d5d7e", "white", "#BBC6CD"],
  [TrilogyColor.SUCCESS]: ["success", "#007B52", "white", "#cae8ca"],
  [TrilogyColor.INFO]: ["info", "#1A688A", "white", "#c8dbec"],
  [TrilogyColor.WARNING]: ["warning", "#FFBB33", "tertiary", "#ecdbc6"],
  [TrilogyColor.ERROR]: ["error", "#D42D02", "white", "#eecccc"],
  [TrilogyColor.DISABLED]: ["disabled", "#646464", "white", "#D1D1D1"],
  [TrilogyColor.NEUTRAL]: ["grey", "#707070", "white", "#F4F4F4"],
  [TrilogyColor.NEUTRAL_DARK]: ["grey-dark", "#646464", "white", "#E9E9E9"],
  [TrilogyColor.GREY]: ["grey", "#707070", "white", "#F4F4F4"],
  [TrilogyColor.GREY_DARK]: ["grey-dark", "#646464", "white", "#646464"],
  [TrilogyColor.GREY_LIGHT]: ["grey-light", "#E9E9E9", "white", "#E9E9E9"],
  [TrilogyColor.GREY_LIGHTER]: ["grey-lighter", "#F4F4F4", "white", "#F4F4F4"],
  [TrilogyColor.HOVERED]: ["hovered", "#F4F4F4", "white", "#F4F4F4"],
}

/**
 * Returns color's className depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color className value
 */
export const getColorClassName = (trilogyColor: TrilogyColor): string => {
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
      return "#da641b"
    case "PRIMARY":
      return "#3d5d7e"
    case "SECONDARY":
      return "#eff2f8"
    case "GHOST":
      return "#FFFFFF"
    default:
      return "#3d5d7e"
  }
}

/**
 * Returns color's style depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color style value
 */
export const getColorStyle = (trilogyColor: TrilogyColor): string => {
  const color = colors[trilogyColor]
  return color[1]
}

/**
 * Returns the background color of a variant
 * @param variant {string} - The variant name (success, error, warning or info)
 * @returns {string} - The background color value
 */
const variantBackgroundMap: Record<string, TrilogyColor> = {
  success: TrilogyColor.SUCCESS,
  info: TrilogyColor.INFO,
  warning: TrilogyColor.WARNING,
  error: TrilogyColor.ERROR,
}

export const getBackgroundOfVariant = (variant?: string): string => {
  if (!variant) return "#FFF"

  const trilogyColor = variantBackgroundMap[variant.toLowerCase()]
  const color = colors[trilogyColor]

  // La valeur de fond est la 4ème valeur dans la carte de couleurs Sass
  // Mais comme nous avons exclu l'état hover dans notre objet JavaScript, c'est maintenant la 3ème valeur
  return color[2]
}
