import Color from 'color'
/**
 * Trilogy color
 */
export enum TrilogyColor {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  WHITE = 'WHITE',
  GREY = 'GREY',
  GREY_DARK = 'GREY_DARK',
  GREY_LIGHT = 'GREY_LIGHT',
  GREY_LIGHTER = 'GREY_LIGHTER',
  GREY_DISABLED = 'GREY_DISABLED',
  BG_SUCCESS = 'BG-SUCCESS',
  BG_INFO = 'BG-INFO',
  BG_WARNING = 'BG-WARNING',
  BG_ERROR = 'BG-ERROR',
  BG_DEFAULT = 'BG-DEFAULT',
  BG_DISABLED = 'BG-DISABLED',
}

export type TrilogyColorValues = `${TrilogyColor}`

export const mixColors = (baseColor: TrilogyColor, tint: number) => {
  const color = getColorStyle(baseColor)
  const newColor = Color(color)
  return newColor.lightness(-tint).hex()
}

/**
 * Returns color's className depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color value
 */
export const getColorClassName = (trilogyColor?: string): string => {
  switch (trilogyColor) {
    case 'SUCCESS':
      return 'success'
    case 'INFO':
      return 'info'
    case 'WARNING':
      return 'warning'
    case 'ERROR':
      return 'error'
    case 'PRIMARY':
      return 'primary'
    case 'SECONDARY':
      return 'secondary'
    case 'TERTIARY':
      return 'tertiary'
    case 'WHITE':
      return 'white'
    case 'GREY':
      return 'grey'
    case 'GREY_DARK':
      return 'grey-dark'
    case 'GREY_LIGHT':
      return 'grey-light'
    case 'GREY_LIGHTER':
      return 'grey-lighter'
    case 'GREY_DISABLED':
      return 'grey-disabled'
    case 'BG-SUCCESS':
      return 'bg-success'
    case 'BG-INFO':
      return 'bg-info'
    case 'BG-WARNING':
      return 'bg-warning'
    case 'BG-ERROR':
      return 'bg-error'
    case 'BG-DEFAULT':
      return 'bg-default'
    case 'BG-DISABLED':
      return 'bg-disabled'
    default:
      return 'tertiary'
  }
}

/**
 * Returns color's style depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color style value
 */
export const getColorStyle = (trilogyColor?: string): string => {
  switch (trilogyColor) {
    case 'SUCCESS':
      return '#007B52'
    case 'INFO':
      return '#1A688A'
    case 'WARNING':
      return '#FFBB33'
    case 'ERROR':
      return '#D42D02'
    case 'PRIMARY':
      return '#1A688A'
    case 'SECONDARY':
      return '#D44A4A'
    case 'TERTIARY':
      return '#333'
    case 'WHITE':
      return '#fff'
    case 'GREY':
      return '#707070'
    case 'GREY_DARK':
      return '#646464'
    case 'GREY_LIGHT':
      return '#E9E9E9'
    case 'GREY_LIGHTER':
      return '#F4F4F4'
    case 'GREY_DISABLED':
      return '#D1D1D1'
    case 'BG-SUCCESS':
      return getBackgroundOfVariant('SUCCESS')
    case 'BG-INFO':
      return getBackgroundOfVariant('INFO')
    case 'BG-WARNING':
      return getBackgroundOfVariant('WARNING')
    case 'BG-ERROR':
      return getBackgroundOfVariant('ERROR')
    default:
      return '#333'
  }
}

/**
 * Returns the background color of a variant
 * @param variant {string} - The variant name (success, error, warning or info)
 * @returns {string} - The background color value
 */
export const getBackgroundOfVariant = (variant?: string): string => {
  switch (variant) {
    case 'SUCCESS':
      return '#cae8ca' // light green
    case 'INFO':
      return '#c8dbec' // light blue
    case 'WARNING':
      return '#ecdbc6' // light orange
    case 'ERROR':
      return '#eecccc' // light red
    default:
      return '#FFF'
  }
}
