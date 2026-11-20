import {
  createContext,
  useMemo,
  type Context,
  type ReactElement,
  type ReactNode,
} from "react"
import {
  theme as defaultTheme,
  type TrilogyTheme,
  type TrilogyThemeMode,
} from "@/constants/theme"

export type TrilogyContextValue = TrilogyTheme & { mode: TrilogyThemeMode }

export const trilogyContext: Context<TrilogyContextValue> =
  createContext<TrilogyContextValue>({ ...defaultTheme, mode: "light" })

export function TrilogyContextProvider({
  children,
  theme = defaultTheme,
  mode = "light",
}: {
  children: ReactNode
  theme?: TrilogyTheme
  mode?: TrilogyThemeMode
}): ReactElement {
  const value = useMemo<TrilogyContextValue>(
    () => ({ ...theme, mode }),
    [theme, mode]
  )
  return (
    <trilogyContext.Provider value={value}>{children}</trilogyContext.Provider>
  )
}
