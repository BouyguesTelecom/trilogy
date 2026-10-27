import { useTheme } from "@/hooks/useTheme";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { ActiveTrilogyTheme } from "@/constants/theme";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
/**
 * Styles mis en cache par thème actif, partagés entre toutes les instances.
 * Au plus un StyleSheet.create par (composant × thème × mode).
 */
export function makeStyles<T extends NamedStyles<T>>(
  factory: (theme: ActiveTrilogyTheme) => T,
) {
  const cache = new WeakMap<ActiveTrilogyTheme, T>();
  return function useStyles(): T {
    const theme = useTheme();
    let styles = cache.get(theme);
    if (styles === undefined) {
      styles = StyleSheet.create(factory(theme));
      cache.set(theme, styles);
    }
    return styles;
  };
}
