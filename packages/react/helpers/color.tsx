import { TrilogyThemeContext } from '@/context/providerTheme'
import { useContext } from 'react'
import { colors, TrilogyColor, TrilogyColorValues } from '@/interfaces/Color'
import { ButtonVariant, ButtonVariantValues } from '@/components/button/ButtonEnum'

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
export const getButtonVariantClassName = (trilogyColor?: ButtonVariant | ButtonVariantValues): string => {
  switch (trilogyColor) {
    case 'CONVERSION':
      return 'conversion'
    case 'PRIMARY':
      return 'primary'
    case 'SECONDARY':
      return 'secondary'
    case 'GHOST':
      return 'ghost'
    default:
      return 'primary'
  }
}

export const getButtonColorStyle = (buttonVariant?: string): TrilogyColor => {
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
      return colorsStyle.default[0]
    }
    return colorArray[0]
  } else {
    if (trilogyColor === 'transparent') return 'transparent'
    return colors[trilogyColor][0] || colors[TrilogyColor.MAIN][0]
  }
}
