'use client'

import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { ITrilogyTheme } from './interfaces'

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

export const TrilogyThemeProvider = ({ children }: { children: ReactNode }) => {
  return children
}
