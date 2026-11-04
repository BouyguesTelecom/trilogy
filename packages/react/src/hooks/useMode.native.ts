import { useContext, useSyncExternalStore } from "react"

import type { TrilogyThemeMode } from "../constants/theme"
import { ThemeStoreCtx } from "../contexts/trilogyContext.native"

export function useMode(): TrilogyThemeMode {
  const store = useContext(ThemeStoreCtx)
  return useSyncExternalStore(store.subscribe, store.getMode, store.getMode)
}
