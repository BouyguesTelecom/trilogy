import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { ITrilogyTheme } from '@/context/interfaces'
import { DEFAULT_TRILOGY_COLORS } from '@/interfaces/defaultColors'
import { DEFAULT_TRILOGY_RADIUS } from '@/interfaces/defaultRadius'

export interface ITrilogyThemeProvider {
  children?: ReactNode
  theme?: ITrilogyTheme
}

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
}

export const defaultIcons = {}

export const defaultTheme: ITrilogyTheme = {
  icons: defaultIcons,
  colors: DEFAULT_TRILOGY_COLORS,
  fontFamily: { regular: 'poppins-regular', medium: 'poppins-medium', bold: 'poppins-semibold' },
  radius: DEFAULT_TRILOGY_RADIUS,
}

export const defaultContextValue = {
  theme: defaultTheme,
  setTheme: () => undefined,
}
export const TrilogyThemeContext = React.createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({ children, theme }: ITrilogyThemeProvider): JSX.Element => {
  const [trilogyTheme, setTrilogyTheme] = React.useState<ITrilogyTheme>(theme || defaultTheme)

  return (
    <TrilogyThemeContext.Provider value={{ theme: trilogyTheme, setTheme: setTrilogyTheme }}>
      {children}
    </TrilogyThemeContext.Provider>
  )
}
