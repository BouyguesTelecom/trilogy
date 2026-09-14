import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_RADIUS_TRILOGY } from '@/theme'
import { Radius } from '@/interfaces/Radius'

/**
 * Hook to get the current theme radius values.
 * @returns The current theme radius object, with default values if the theme is not available.
 */
export const useThemeRadius = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.radius || THEME_RADIUS_TRILOGY
}

/**
 * Hook to get a specific theme radius value by size.
 * @param size - The key of the radius value to retrieve.
 * @returns The theme radius value for the specified size, with a default value if the theme is not available.
 */
export const useThemeRadiusBySize = (size: Radius) => {
  const { theme } = useContext(TrilogyThemeContext)
  switch (size) {
    case Radius.SMALLER:
      return theme?.radius?.radiusXs || THEME_RADIUS_TRILOGY.radiusXs
    case Radius.SMALL:
      return theme?.radius?.radiusSm || THEME_RADIUS_TRILOGY.radiusSm
    case Radius.MEDIUM:
      return theme?.radius?.radiusMd || THEME_RADIUS_TRILOGY.radiusMd
    case Radius.LARGE:
      return theme?.radius?.radiusLg || THEME_RADIUS_TRILOGY.radiusLg
    case Radius.FULL:
      return theme?.radius?.radiusFull || THEME_RADIUS_TRILOGY.radiusFull
    default:
      return theme?.radius?.radiusSm || THEME_RADIUS_TRILOGY.radiusSm
  }
}
