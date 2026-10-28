import { useContext, useSyncExternalStore } from "react";
import { ThemeStoreCtx } from "@/contexts/trilogyContext.native";
import type { ActiveTrilogyTheme } from "@/constants/theme";

/** Thème actif, pour les props non-style (couleur d'icône, StatusBar…). */
export function useTheme(): ActiveTrilogyTheme {
  const store = useContext(ThemeStoreCtx);
  return useSyncExternalStore(
    store.subscribe,
    store.getActive,
    store.getActive,
  );
}
