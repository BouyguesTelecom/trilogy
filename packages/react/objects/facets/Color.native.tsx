import { TrilogyThemeContext } from "../../context/providerTheme.native"
import { useContext } from "react"

/**
 * Trilogy color
 */
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
  GREY = "GREY",
  GREY_DARK = "GREY_DARK",
  GREY_LIGHT = "GREY_LIGHT",
  GREY_LIGHTER = "GREY_LIGHTER",
  WHITE = "WHITE",
}

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
  [TrilogyColor.GREY]: ["#707070", "#F4F4F4"],
  [TrilogyColor.GREY_DARK]: ["#646464", "#646464"],
  [TrilogyColor.GREY_LIGHT]: ["#E9E9E9", "#E9E9E9"],
  [TrilogyColor.GREY_LIGHTER]: ["#F4F4F4", "#F4F4F4"],
  [TrilogyColor.WHITE]: ["#fff", "#E9E9E9"],
}

export type TrilogyColorValues = `${TrilogyColor}`;

export const getColorStyle = (
  trilogyColor: TrilogyColor | TrilogyColorValues,
  index?: number
): string => {
  const { theme } = useContext(TrilogyThemeContext)
  const colors = theme?.colors || nativeColors

  const colorArray =
    colors[trilogyColor] || nativeColors[trilogyColor] || colors.default
  const colorIndex =
    index !== undefined && index >= 0 && index < colorArray.length ? index : 0

  if (!trilogyColor || !colors[trilogyColor]) {
    return colors.default
  }
  return colorArray[colorIndex]
}

export const getBackgroundOfVariant = (variant?: string): string => {
  const {
    theme: { colors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(TrilogyThemeContext)

  switch (variant) {
    case "SUCCESS":
      return colors.bgSuccess
    case "INFO":
      return colors.bgInfo
    case "WARNING":
      return colors.bgWarning
    case "ERROR":
      return colors.bgError
    default:
      return colors.bgDefault
  }
}

export const getButtonColorStyle = (buttonVariant?: string): string => {
  const {
    theme: { colors },
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
