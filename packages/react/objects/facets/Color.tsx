import { TrilogyThemeContext } from '@/context/providerTheme'
import { useContext } from 'react'

/**
 * Trilogy color
 */
export enum TrilogyColor {
  BACKGROUND = 'WHITE',
  MAIN = 'MAIN',
  MAIN_FADE = 'MAIN_FADE',
  ACCENT = 'ACCENT',
  FONT = 'FONT',
  SUCCESS = 'SUCCESS',
  SUCCESS_FADE = 'SUCCESS_FADE',
  INFO = 'INFO',
  INFO_FADE = 'INFO_FADE',
  WARNING = 'WARNING',
  WARNING_FADE = 'WARNING_FADE',
  ERROR = 'ERROR',
  ERROR_FADE = 'ERROR_FADE',
  DISABLED = 'DISABLED',
  DISABLED_FADE = 'DISABLED_FADE',
  NEUTRAL = 'NEUTRAL',
  NEUTRAL_FADE = 'NEUTRAL_FADE',
}

export type TrilogyColorValues = `${TrilogyColor}`

/**
 * Trilogy color values
 */
export const colors: Record<any, string[]> = {
  [TrilogyColor.BACKGROUND]: ['#fff', 'white', 'main'],
  [TrilogyColor.MAIN]: ['#3d5d7e', 'main', 'white'],
  [TrilogyColor.MAIN_FADE]: ['#BBC6CD', 'main-fade', 'white'],
  [TrilogyColor.ACCENT]: ['#da641b', 'accent', 'white'],

  [TrilogyColor.FONT]: ['#3d5d7e', 'main', 'white'],

  [TrilogyColor.SUCCESS]: ['#007B52', 'success', 'white'],
  [TrilogyColor.SUCCESS_FADE]: ['#cae8ca', 'success-fade', 'white'],

  [TrilogyColor.INFO]: ['#1A688A', 'info', 'white'],
  [TrilogyColor.INFO_FADE]: ['#c8dbec', 'info-fade', 'white'],

  [TrilogyColor.WARNING]: ['#FFBB33', 'warning', 'white'],
  [TrilogyColor.WARNING_FADE]: ['#ecdbc6', 'warning-fade', 'white'],

  [TrilogyColor.ERROR]: ['#D42D02', 'error', 'white'],
  [TrilogyColor.ERROR_FADE]: ['#eecccc', 'error-fade', 'white'],

  [TrilogyColor.DISABLED]: ['#646464', 'disabled', 'white'],
  [TrilogyColor.DISABLED_FADE]: ['#D1D1D1', 'disabled-fade', 'white'],

  [TrilogyColor.NEUTRAL]: ['#707070', 'grey', 'white'],
  [TrilogyColor.NEUTRAL_FADE]: ['#F4F4F4', 'grey-fade', 'white'],
}

/**
 * Returns color's className depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Color className value
 */
export const getColorClassName = (trilogyColor: TrilogyColor | TrilogyColorValues): string => {
  const color = colors[trilogyColor]
  return color[1]
}

/**
 * Returns color button's className depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @returns {string} - Variant Button value
 */
export const getButtonVariantClassName = (trilogyColor?: string): string => {
  switch (trilogyColor) {
    case 'CONVERSION':
      return 'conversion'
    case 'PRIMARY':
      return 'primary'
    case 'SECONDARY':
      return 'secondary'
    case 'GHOST':
      return 'ghost'
    case 'SUCCESS':
      return 'success'
    case 'INFO':
      return 'info'
    case 'WARNING':
      return 'warning'
    case 'ERROR':
      return 'error'
    case 'DISABLED':
      return 'disabled'
    default:
      return 'primary'
  }
}

export const getButtonColorStyle = (buttonVariant?: string): string => {
  switch (buttonVariant) {
    case 'ACCENT':
      return TrilogyColor.ACCENT
    case 'PRIMARY':
      return TrilogyColor.MAIN
    case 'SECONDARY':
      return TrilogyColor.MAIN_FADE
    case 'GHOST':
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
export const getColorStyle = (trilogyColor: TrilogyColor | TrilogyColorValues | 'transparent'): string => {
  if (typeof navigator !== 'undefined' && navigator.userAgent === undefined) {
    const { theme } = useContext(TrilogyThemeContext)
    const colorsStyle = theme?.colors || colors

    const colorArray = colorsStyle[trilogyColor] || colorsStyle.default
    if (trilogyColor === 'transparent') return 'transparent'

    if (!trilogyColor || !colors[trilogyColor]) {
      return colorsStyle.default
    }
    return colorArray[0]
  } else {
    if (trilogyColor === 'transparent') return 'transparent'
    return colors[trilogyColor][0] || colors['main'][0]
  }
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  if (hex.charAt(0) === '#') {
    hex = hex.slice(1)
  }

  if (hex.length !== 6) {
    throw new Error('Wrong format (hexadecimal)')
  }
  // Conversion
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = n.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export function grayscale(hex: string): string {
  const { r, g, b } = hexToRgb(hex)

  // Formule de luminosité relative
  const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b)

  // Retourner la couleur en niveaux de gris
  return rgbToHex(gray, gray, gray)
}
