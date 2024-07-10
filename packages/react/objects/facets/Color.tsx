import { useContext } from "react"
import { TrilogyThemeContext } from "@/context/providerTheme"

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
  NEUTRAL_LIGHT = "NEUTRAL_LIGHT"
}

export type TrilogyColorValues = `${TrilogyColor}`;

/**
 * Trilogy color values
 */
export const colors: Record<TrilogyColor, string[]> = {
  [TrilogyColor.BACKGROUND]:
    ["#fff", "#E9E9E9", "white", "main"],
  [TrilogyColor.MAIN]:
    ["#3d5d7e", "#eff2f8", "main", "white"],
  [TrilogyColor.ACCENT]:
      ["#da641b", "#bb5118", "accent", "white" ],
  [TrilogyColor.FONT]:
      ["#3d5d7e", "#BBC6CD", "main", "white"],
  [TrilogyColor.SUCCESS]:
      ["#007B52", "#cae8ca", "success", "white"],
  [TrilogyColor.INFO]:
      ["#1A688A", "#c8dbec", "info", "white"],
  [TrilogyColor.WARNING]:
    ["#FFBB33", "#ecdbc6", "warning", "white"],
  [TrilogyColor.ERROR]:
      ["#D42D02", "#eecccc", "error", "white"],
  [TrilogyColor.DISABLED]:
      ["#646464", "#D1D1D1", "disabled", "white"],
  [TrilogyColor.NEUTRAL]:
      ["#707070", "#F4F4F4", "grey", "white"],
  [TrilogyColor.NEUTRAL_DARK]:
      ["#646464", "#E9E9E9", "grey-dark", "white"],
  [TrilogyColor.NEUTRAL_LIGHT]:
      ["#E9E9E9", "#E9E9E9", "grey-light", "grey"],
  [TrilogyColor.HOVERED]:
      ["#F4F4F4", "#F4F4F4", "hovered", "white"],
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
  return color[2]
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
      return TrilogyColor.BACKGROUND
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
  if (typeof navigator !== 'undefined' && navigator.userAgent === undefined) {
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
    console.log(trilogyColor)
    const colorArray = colors[trilogyColor]
    const colorIndex =
      index !== undefined && index >= 0 && index < colorArray.length
        ? index
        : 0

    return colorArray[colorIndex]
  }
}
