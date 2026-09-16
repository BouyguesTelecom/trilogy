import { PropsWithChildren, useState } from 'react'
import type { ITrilogyProvider } from './interfaces'
import { useMemo } from 'react'
import { TrilogyThemeContext } from './trilogyContext'
import { useColorScheme } from 'react-native'

export const TrilogyThemeProvider = ({
  children,
  mode = 'auto',
  theme,
}: PropsWithChildren<ITrilogyProvider>): JSX.Element => {
  const colorScheme = useColorScheme() ?? 'light'
  const [trilogyTheme, setTrilogyTheme] = useState(theme)
  const [trilogyMode, setTrilogyMode] = useState<'dark' | 'light' | 'auto'>(mode === 'auto' ? colorScheme : mode)

  const contextValue = useMemo(
    () => ({
      theme: trilogyTheme,
      setTheme: setTrilogyTheme,
      mode: trilogyMode,
      setMode: setTrilogyMode,
    }),
    [trilogyTheme, trilogyMode],
  )

  return <TrilogyThemeContext.Provider value={contextValue}>{children}</TrilogyThemeContext.Provider>
}
