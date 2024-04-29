import {useContext} from "react";
import {TrilogyThemeContext} from "../../context/providerTheme.native";

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

export const nativeColors: Record<TrilogyColor, string[]> = {
  [TrilogyColor.BACKGROUND]: ["#fff", "#E9E9E9"],
  [TrilogyColor.MAIN]: ["#3d5d7e", "#eff2f8"],
  [TrilogyColor.ACCENT]: ["#da641b", "#bb5118"],
  [TrilogyColor.FONT]: ["#3d5d7e", "#BBC6CD"],
  [TrilogyColor.SUCCESS]: ["#007B52", "#cae8ca"],
  [TrilogyColor.INFO]: ["#1A688A", "#c8dbec"],
  [TrilogyColor.WARNING]: ["#FFBB33", "#ecdbc6"],
  [TrilogyColor.ERROR]: ["#D42D02", "#eecccc"],
  [TrilogyColor.DISABLED]: ["#646464", "#D1D1D1"],
  [TrilogyColor.HOVERED]: ["#F4F4F4", "#F4F4F4"],
  [TrilogyColor.NEUTRAL]: ["#707070", "#F4F4F4"],
  [TrilogyColor.NEUTRAL_DARK]: ["#646464", "#E9E9E9"],
  [TrilogyColor.NEUTRAL_LIGHT]: ["#E9E9E9", "#E9E9E9"],
  [TrilogyColor.WHITE]: ["#fff", "#E9E9E9"],
}


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
  const {
    theme: {colors},
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(TrilogyThemeContext)

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
  console.log('navigator.userAgent : ', navigator.userAgent)
  if (navigator.userAgent === undefined) {
    const {theme} = useContext(TrilogyThemeContext)
    const colors = theme?.colors || nativeColors

    const colorArray =
      colors[trilogyColor] || nativeColors[trilogyColor] || colors.default
    const colorIndex =
      index !== undefined && index >= 0 && index < colorArray.length ? index : 0

    if (!trilogyColor || !colors[trilogyColor]) {
      return colors.default
    }
    return colorArray[colorIndex]
  } else {
    const colorArray = colors[trilogyColor]
    const colorIndex =
      index !== undefined && index >= 0 && index < colorArray.length ? index : 0

    return colorArray[colorIndex]
  }
}
