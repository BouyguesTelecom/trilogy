import { useContext } from "react"
import { TrilogyThemeContext } from "../../context/providerTheme"

/**
 * Trilogy color
 */
export enum TrilogyColor {
  BACKGROUND = "WHITE",
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
  [TrilogyColor.BACKGROUND]:
    navigator.userAgent !== undefined
      ? ["white", "#fff", "main", "#E9E9E9"]
      : ["#fff", "#E9E9E9"],
  [TrilogyColor.MAIN]:
    navigator.userAgent !== undefined
      ? ["main", "#3d5d7e", "white", "#eff2f8"]
      : ["#3d5d7e", "#eff2f8"],
  [TrilogyColor.WHITE]:
    navigator.userAgent !== undefined
      ? ["white", "#fff", "main", "#E9E9E9"]
      : ["#fff", "#E9E9E9"],
  [TrilogyColor.ACCENT]:
    navigator.userAgent !== undefined
      ? ["accent", "#da641b", "white", "#bb5118"]
      : ["#da641b", "#bb5118"],
  [TrilogyColor.FONT]:
    navigator.userAgent !== undefined
      ? ["main", "#3d5d7e", "white", "#BBC6CD"]
      : ["#3d5d7e", "#BBC6CD"],
  [TrilogyColor.SUCCESS]:
    navigator.userAgent !== undefined
      ? ["success", "#007B52", "white", "#cae8ca"]
      : ["#007B52", "#cae8ca"],
  [TrilogyColor.INFO]:
    navigator.userAgent !== undefined
      ? ["info", "#1A688A", "white", "#c8dbec"]
      : ["#1A688A", "#c8dbec"],
  [TrilogyColor.WARNING]:
    navigator.userAgent !== undefined
      ? ["warning", "#FFBB33", "white", "#ecdbc6"]
      : ["#FFBB33", "#ecdbc6"],
  [TrilogyColor.ERROR]:
    navigator.userAgent !== undefined
      ? ["error", "#D42D02", "white", "#eecccc"]
      : ["#D42D02", "#eecccc"],
  [TrilogyColor.DISABLED]:
    navigator.userAgent !== undefined
      ? ["disabled", "#646464", "white", "#D1D1D1"]
      : ["#646464", "#D1D1D1"],
  [TrilogyColor.NEUTRAL]:
    navigator.userAgent !== undefined
      ? ["grey", "#707070", "white", "#F4F4F4"]
      : ["#707070", "#F4F4F4"],
  [TrilogyColor.NEUTRAL_DARK]:
    navigator.userAgent !== undefined
      ? ["grey-dark", "#646464", "white", "#E9E9E9"]
      : ["#646464", "#E9E9E9"],
  [TrilogyColor.NEUTRAL_LIGHT]:
    navigator.userAgent !== undefined
      ? ["#E9E9E9", "#E9E9E9"]
      : ["#E9E9E9", "#E9E9E9"],
  [TrilogyColor.HOVERED]:
    navigator.userAgent !== undefined
      ? ["hovered", "#F4F4F4", "white", "#F4F4F4"]
      : ["#F4F4F4", "#F4F4F4"],
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
    case "CONVERSION":
      return "conversion"
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
 * @param index {number} - Index of color ( 1 for BG )
 * @returns {string} - Color style value
 */
export const getColorStyle = (
  trilogyColor: TrilogyColor | TrilogyColorValues,
  index?: number
): string => {
  if (navigator.userAgent === undefined) {
    const { theme } = useContext(TrilogyThemeContext)
    const colorsStyle = theme?.colors || colors

    const colorArray = colorsStyle[trilogyColor] || colorsStyle.default
    const colorIndex =
      index && index !== undefined && index >= 0 && index < colorArray.length
        ? index
        : 0

    if (!trilogyColor || !colors[trilogyColor]) {
      return colorsStyle.default
    }
    return colorArray[colorIndex]
  } else {
    const colorArray = colors[trilogyColor]
    const colorIndex =
      index !== undefined && index >= 0 && index < colorArray.length
        ? index
        : 0

    return colorArray[colorIndex]
  }
}
