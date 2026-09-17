import type { ITrilogyThemeContext } from './interfaces'
import { createContext, useContext } from 'react'
const TrilogyThemeContext = createContext<ITrilogyThemeContext>({
  theme: null,
  setTheme: () => {},
  mode: undefined,
  setMode: () => {},
})

const useTrilogyThemeContext = () => {
  const context = useContext(TrilogyThemeContext)
  return context
}

export { TrilogyThemeContext, useTrilogyThemeContext }
