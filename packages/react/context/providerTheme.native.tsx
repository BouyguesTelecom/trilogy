import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import { ITrilogyTheme } from "./interfaces"
import { DEFAULT_TRILOGY_COLORS } from "../objects/facets/defaultColors"

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
  colors: DEFAULT_TRILOGY_COLORS,
  fontFamily: { 'regular': 'poppins-regular', 'medium': 'poppins-medium', 'bold': 'poppins-semibold' }
}

export const defaultContextValue = {
  theme: defaultTheme,
  setTheme: () => undefined,
}
export const TrilogyThemeContext =
  createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({
  children,
  theme,
}: ITrilogyThemeProvider): JSX.Element => {
  const [trilogyTheme, setTrilogyTheme] = useState<ITrilogyTheme>(
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
