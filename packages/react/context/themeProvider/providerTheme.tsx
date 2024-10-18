import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { ITrilogyTheme } from '../interfaces'

export const defaultTheme: ITrilogyTheme = {
  icons: {},
  colors: {},
  fontFamily: {},
}

interface ITrilogyThemeContext {
  theme: ITrilogyTheme
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
}

const defaultContextValue = {
  theme: defaultTheme,
  setTheme: () => undefined,
}

export const TrilogyThemeContext = React.createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({ children }: PropsWithChildren) => {
  return children
}
