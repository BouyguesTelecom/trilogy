import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { colors } from '../../objects/facets/Color'
import { ITrilogyTheme } from '../interfaces'

export interface ITrilogyThemeProvider {
  theme?: ITrilogyTheme
}

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
}

export const defaultIcons = {}

export const defaultTheme: ITrilogyTheme = {
  icons: defaultIcons,
  colors: colors,
  fontFamily: { regular: 'poppins-regular', medium: 'poppins-medium', bold: 'poppins-semibold' },
}

export const defaultContextValue = {
  theme: defaultTheme,
  setTheme: () => undefined,
}
export const TrilogyThemeContext = React.createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({ children, theme }: PropsWithChildren<ITrilogyThemeProvider>): JSX.Element => {
  const [trilogyTheme, setTrilogyTheme] = React.useState<ITrilogyTheme>(theme || defaultTheme)

  return (
    <TrilogyThemeContext.Provider value={{ theme: trilogyTheme, setTheme: setTrilogyTheme }}>
      {children}
    </TrilogyThemeContext.Provider>
  )
}
