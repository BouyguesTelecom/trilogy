import React, {Dispatch, ReactNode, SetStateAction} from "react"
import {ITrilogyTheme} from "./interfaces"
import { colors } from "../objects/facets/Color"

export interface ITrilogyThemeProvider {
  children?: ReactNode;
  theme?: ITrilogyTheme;
}

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme;
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>;
}

export const defaultIcons = {}

export const defaultTheme: ITrilogyTheme = {
  icons: defaultIcons,
  colors: colors,
  fontFamily: {}
}

export const defaultContextValue = {
  theme: defaultTheme,
  setTheme: () => undefined,
}
export const TrilogyThemeContext =
  React.createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({
  children,
  theme,
}: ITrilogyThemeProvider): JSX.Element => {
  const [trilogyTheme, setTrilogyTheme] = React.useState<ITrilogyTheme>(
    theme || defaultTheme
  )

  return (
    <TrilogyThemeContext.Provider
      value={{ theme: trilogyTheme, setTheme: setTrilogyTheme }}
    >
      {children}
    </TrilogyThemeContext.Provider>
  )
}
