import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { useThemeMode } from './useThemeMode'
import { THEME_COLORS_TRILOGY, THEME_RADIUS_TRILOGY, THEME_SPACINGS_TRILOGY, THEME_FONTS_TRILOGY } from '@/theme'

/**
 * Hook to get the current theme, including colors, radius, spacings, and fonts.
 * @returns The current theme object, with default values if the theme is not available.
 */
export const useTheme = () => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = useThemeMode()
  const colors = theme?.colors[themeMode]
  return theme
    ? { ...theme, colors: colors || THEME_COLORS_TRILOGY }
    : {
        icons: {},
        colors: THEME_COLORS_TRILOGY.light,
        radius: THEME_RADIUS_TRILOGY,
        spacings: THEME_SPACINGS_TRILOGY,
        fonts: THEME_FONTS_TRILOGY,
      }
}
