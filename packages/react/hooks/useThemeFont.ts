import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_FONTS_TRILOGY } from '@/theme'

/**
 * Hook to get the current theme font family values.
 * @returns The current theme font family object, with default values if the theme is not available.
 */
export const useThemeFontFamily = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return {
    family1: theme?.fonts?.fontTitle1 || THEME_FONTS_TRILOGY.fontTitle1,
    family2: theme?.fonts?.fontTitle3 || THEME_FONTS_TRILOGY.fontTitle3,
  }
}

/**
 * Hook to get a specific theme font size value by size.
 * @param size - The key of the font size value to retrieve.
 * @returns The theme font size value for the specified size, with a default value if the theme is not available.
 */
export const useThemeFontBySize = (size: keyof typeof THEME_FONTS_TRILOGY) => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.fonts?.[size] || THEME_FONTS_TRILOGY[size]
}

export const useThemeFontSizes = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return {}
}
