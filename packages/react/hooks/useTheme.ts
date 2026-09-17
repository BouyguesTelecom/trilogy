import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'

/**
 * Hook to get the current theme, including colors, radius, spacings, and fonts.
 * @returns The current theme object, with default values if the theme is not available.
 */
export const useTheme = () => {
  const trilogyTheme = useContext(TrilogyThemeContext)
  const mode = trilogyTheme?.mode ?? THEME_TRILOGY.defaultMode

  if (!trilogyTheme?.theme) {
    return {
      mode,
      theme: null,
    }
  }

  return {
    mode,
    theme: {
      ...trilogyTheme.theme,
      colors: trilogyTheme?.theme?.colors[mode],
    },
  }
}
