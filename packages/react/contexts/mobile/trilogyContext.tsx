import { THEME_COLORS_TRILOGY, THEME_FONTS_TRILOGY, THEME_RADIUS_TRILOGY, THEME_SPACINGS_TRILOGY } from '@/theme'
import type { ITrilogyThemeContext } from './interfaces'
import * as React from 'react'

const TrilogyThemeContext = React.createContext<ITrilogyThemeContext>({
  theme: {
    icons: {},
    colors: THEME_COLORS_TRILOGY,
    fonts: THEME_FONTS_TRILOGY,
    radius: THEME_RADIUS_TRILOGY,
    spacings: THEME_SPACINGS_TRILOGY,
  },
  setTheme: () => {},
  mode: 'auto',
  setMode: () => {},
})

const useTrilogyThemeContext = () => {
  const context = React.useContext(TrilogyThemeContext)
  if (context === undefined) throw new Error('useTrilogyThemeContext must be used within a TrilogyThemeProvider')
  return context
}

export { TrilogyThemeContext, useTrilogyThemeContext }
