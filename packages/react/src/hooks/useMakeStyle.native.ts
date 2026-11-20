import type { ActiveTrilogyTheme } from "@/constants/theme"
import type { TrilogyContextValue } from "@/contexts/trilogyContext.native"
import {
  StyleSheet,
  type ImageStyle,
  type TextStyle,
  type ViewStyle,
} from "react-native"

import { useTrilogyContext } from "./useTrilogyContext.native"

type NamedStyles = Record<
  string,
  Record<string, ViewStyle | TextStyle | ImageStyle>
>

/** Crée un StyleSheet par thème et le réutilise tant que le contexte est stable. */
export function makeStyle<T extends NamedStyles>(
  factory: (theme: ActiveTrilogyTheme) => T
) {
  const styleCache = new WeakMap<TrilogyContextValue, T>()

  return function useStyles(): T {
    const contextValue = useTrilogyContext()
    const cachedStyles = styleCache.get(contextValue)
    if (cachedStyles) return cachedStyles

    const { mode, colors, ...theme } = contextValue
    const styles = StyleSheet.create(
      factory({ ...theme, colors: colors[mode] })
    )
    styleCache.set(contextValue, styles)
    return styles
  }
}
