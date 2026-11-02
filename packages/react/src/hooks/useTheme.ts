import { useContext, useSyncExternalStore } from "react"

import type { ActiveTrilogyTheme } from "../constants/theme"
import { ThemeStoreCtx } from "../contexts/trilogyContext.native"

/** Thème actif, pour les props non-style (couleur d'icône, StatusBar…). */
export function useTheme(): ActiveTrilogyTheme {
  const store = useContext(ThemeStoreCtx)
  return useSyncExternalStore(store.subscribe, store.getActive, store.getActive)
}
