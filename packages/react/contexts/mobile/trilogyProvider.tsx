import React, { PropsWithChildren, useState } from 'react'
import type { ITrilogyProvider } from './interfaces'
import { THEME_COLORS_TRILOGY, THEME_FONTS_TRILOGY, THEME_RADIUS_TRILOGY, THEME_SPACINGS_TRILOGY } from '@/theme'
import { TrilogyThemeContext } from './trilogyContext'
import { useColorScheme } from 'react-native'

export const TrilogyThemeProvider = ({
  children,
  mode = 'auto',
  theme = {
    icons: {},
    colors: THEME_COLORS_TRILOGY,
    fonts: THEME_FONTS_TRILOGY,
    radius: THEME_RADIUS_TRILOGY,
    spacings: THEME_SPACINGS_TRILOGY,
  },
}: PropsWithChildren<ITrilogyProvider>): JSX.Element => {
  const colorScheme = useColorScheme() ?? 'light'
  const [trilogyTheme, setTrilogyTheme] = useState(theme)
  const [trilogyMode, setTrilogyMode] = useState<'dark' | 'light' | 'auto'>(mode === 'auto' ? colorScheme : mode)

  return (
    <TrilogyThemeContext.Provider
      value={{ theme: trilogyTheme, setTheme: setTrilogyTheme, mode: trilogyMode, setMode: setTrilogyMode }}
    >
      {children}
    </TrilogyThemeContext.Provider>
  )
}
