import { useContext, useSyncExternalStore } from "react"

import type { ActiveTrilogyTheme } from "../constants/theme"
import { ThemeStoreCtx } from "../contexts/trilogyContext.native"

export function useTheme(): ActiveTrilogyTheme {
  const store = useContext(ThemeStoreCtx)
  return useSyncExternalStore(store.subscribe, store.getActive, store.getActive)
}
