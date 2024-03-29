import { TrilogyThemeContext } from '../../context/providerTheme.native'
import { useContext } from 'react'
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

export const getColorStyle = (trilogyColor?: string): string => {
  const {
    theme: { colors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(TrilogyThemeContext)

  switch (trilogyColor) {
    case 'SUCCESS':
      return colors.success
    case 'INFO':
      return colors.info
    case 'WARNING':
      return colors.warning
    case 'ERROR':
      return colors.error
    case 'PRIMARY':
      return colors.primary
    case 'SECONDARY':
      return colors.secondary
    case 'TERTIARY':
      return colors.tertiary
    case 'WHITE':
      return colors.white
    case 'GREY':
      return colors.grey
    case 'GREY_DARK':
      return colors.greyDark
    case 'GREY_LIGHT':
      return colors.greyLight
    case 'GREY_LIGHTER':
      return colors.greyLighter
    case 'GREY_DISABLED':
      return colors.greyDisabled
    case 'BG-SUCCESS':
      return colors.bgSuccess
    case 'BG-INFO':
      return colors.bgInfo
    case 'BG-WARNING':
      return colors.bgWarning
    case 'BG-ERROR':
      return colors.bgError
    case 'BG-DEFAULT':
      return colors.bgDefault
    default:
      return colors.default
  }
}

export const getBackgroundOfVariant = (variant?: string): string => {
  const {
    theme: { colors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(TrilogyThemeContext)

  switch (variant) {
    case 'SUCCESS':
      return colors.bgSuccess
    case 'INFO':
      return colors.bgInfo
    case 'WARNING':
      return colors.bgWarning
    case 'ERROR':
      return colors.bgError
    default:
      return colors.bgDefault
  }
}
