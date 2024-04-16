import React, {Dispatch, ReactNode, SetStateAction} from 'react'
import {ITrilogyTheme} from "./interfaces";

export interface ITrilogyThemeProvider {
  children?: ReactNode
  theme?: ITrilogyTheme
}

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
}

export const defaultIcons = {}

export const defaultColors = {
  primary: '#1A688A',
  secondary: '#D44A4A',
  tertiary: '#333',
  success: '#007B52',
  info: '#1A688A',
  warning: '#FFBB33',
  error: '#D42D02',
  white: '#fff',
  grey: '#707070',
  greyDark: '#646464',
  greyLight: '#E9E9E9',
  greyLighter: '#F4F4F4',
  greyDisabled: '#D1D1D1',
  bgInfo: 'hsl(200, 50%, 70%)',
  bgSuccess: 'hsl(120, 50%, 70%)',
  bgWarning: 'hsl(40, 50%, 70%)',
  bgError: 'hsl(0, 50%, 70%)',
  bgDefault: '#E4E6E8',
  default: '#333',
}

export const defaultTheme: ITrilogyTheme = {
  icons: defaultIcons,
  colors: defaultColors,
}

export const defaultContextValue = {theme: defaultTheme, setTheme: () => undefined}
export const TrilogyThemeContext = React.createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({children, theme}: ITrilogyThemeProvider): JSX.Element => {
  const [trilogyTheme, setTrilogyTheme] = React.useState<ITrilogyTheme>(theme || defaultTheme)

  return (
    <TrilogyThemeContext.Provider value={{theme: trilogyTheme, setTheme: setTrilogyTheme}}>
      {children}
    </TrilogyThemeContext.Provider>
  )
}
