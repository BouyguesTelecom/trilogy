import { createContext, JSX, useMemo, type Context } from "react"
import versionJSON from "@version"

export interface TrilogyContextValue {
  mangled: boolean
  hash: string
}

export const trilogyContext: Context<TrilogyContextValue> =
  createContext<TrilogyContextValue>({
    mangled: false,
    hash: versionJSON.HASH_CLASS,
  })

export function TrilogyContextProvider({
  children,
  mangled = false,
  hash = versionJSON.HASH_CLASS,
}: {
  children: React.ReactNode
  mangled?: boolean
  hash?: string
}): JSX.Element {
  const value = useMemo(() => ({ mangled, hash }), [mangled, hash])
  return (
    <trilogyContext.Provider value={value}>{children}</trilogyContext.Provider>
  )
}
