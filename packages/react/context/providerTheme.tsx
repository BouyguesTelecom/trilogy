import { Dispatch, ReactNode, SetStateAction, createContext } from 'react'
import { ITrilogyTheme } from '@/context/interfaces'

export const defaultTheme: ITrilogyTheme = {
  colors: {},
}

interface ITrilogyThemeContext {
  theme: ITrilogyTheme
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
}

const defaultContextValue = {
  theme: defaultTheme,
  setTheme: () => undefined,
}

export const TrilogyThemeContext = createContext<ITrilogyThemeContext>(defaultContextValue)

export const TrilogyThemeProvider = ({ children }: { children: ReactNode }) => {
  return children
}
