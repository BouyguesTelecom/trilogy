import type { TrilogyThemeMode } from "@/constants/theme";
import { useContext, useSyncExternalStore } from "react";
import { ThemeStoreCtx } from "@/contexts/trilogyContext.native";

/** Mode actif du scope courant. */
export function useMode(): TrilogyThemeMode {
  const store = useContext(ThemeStoreCtx);
  return useSyncExternalStore(store.subscribe, store.getMode, store.getMode);
}
