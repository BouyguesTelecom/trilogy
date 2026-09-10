import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_SPACINGS_TRILOGY } from '@/theme'

/**
 * Hook to get the current theme spacing values.
 * @returns The current theme spacing object, with default values if the theme is not available.
 */
export const useThemeSpacing = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.spacings || THEME_SPACINGS_TRILOGY
}

/**
 * Hook to get a specific theme spacing value by size.
 * @param size - The key of the spacing value to retrieve.
 * @returns The theme spacing value for the specified size, with a default value if the theme is not available.
 */
export const useThemeSpacingBySize = (size: keyof typeof THEME_SPACINGS_TRILOGY) => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.spacings?.[size] || THEME_SPACINGS_TRILOGY[size]
}
