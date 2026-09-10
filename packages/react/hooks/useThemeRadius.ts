import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_RADIUS_TRILOGY } from '@/theme'

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
export const useThemeRadiusBySize = (size: keyof typeof THEME_RADIUS_TRILOGY) => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.radius?.[size] || THEME_RADIUS_TRILOGY[size]
}
