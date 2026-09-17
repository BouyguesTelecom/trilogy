import { PropsWithChildren, useState } from 'react'
import type { ITrilogyProvider } from './interfaces'
import { useMemo } from 'react'
import { TrilogyThemeContext } from './trilogyContext'

export const TrilogyThemeProvider = ({ children, mode, theme }: PropsWithChildren<ITrilogyProvider>): JSX.Element => {
  const [trilogyTheme, setTrilogyTheme] = useState(theme)
  const [trilogyMode, setTrilogyMode] = useState(mode)

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
