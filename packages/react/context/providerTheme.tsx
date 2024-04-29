import React from "react"
import { ITrilogyTheme } from "./interfaces"

export const defaultTheme: ITrilogyTheme = {
  icons: {},
  colors: {},
}

export const TrilogyThemeContext = React.createContext<ITrilogyTheme>(defaultTheme)

export const TrilogyThemeProvider = () => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>
}
