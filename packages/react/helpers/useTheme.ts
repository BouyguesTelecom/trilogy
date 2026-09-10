import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_COLORS_TRILOGY, THEME_RADIUS_TRILOGY, THEME_SPACINGS_TRILOGY, THEME_FONTS_TRILOGY } from '@/theme'
import { useColorScheme } from 'react-native'

const getMode = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const { mode } = useContext(TrilogyThemeContext)
  const themeMode = mode === 'auto' ? colorScheme : mode
  return themeMode
}

export const useThemeRadius = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.radius || THEME_RADIUS_TRILOGY
}

export const useThemeSpacings = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.spacings || THEME_SPACINGS_TRILOGY
}

export const useThemeFonts = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return theme?.fonts || THEME_FONTS_TRILOGY
}

export const useTheme = () => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = getMode()
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
