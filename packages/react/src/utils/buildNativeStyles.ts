import { theme } from "@trilogy-react/theme"
import {
  StyleSheet,
  type ImageStyle,
  type TextStyle,
  type ViewStyle,
} from "react-native"

type ThemeMode = "light" | "dark"
type ThemeColors = (typeof theme.colors)[ThemeMode]
type NativeStyle = ViewStyle | TextStyle | ImageStyle
type NativeNamedStyles = Record<string, NativeStyle>
type NativeStyleDefinition =
  NativeNamedStyles | ((colors: ThemeColors) => NativeNamedStyles)

type ResolveStyleDefinition<T> = T extends (colors: ThemeColors) => infer Styles
  ? Styles
  : T

type NativeStyleThemes<
  Definitions extends Record<string, NativeStyleDefinition>,
> = Record<
  ThemeMode,
  {
    [Name in keyof Definitions]: ResolveStyleDefinition<Definitions[Name]>
  }
>

/** Construit les StyleSheet light et dark à partir de définitions par clé. */
export function buildNativeStyles<
  const Definitions extends Record<string, NativeStyleDefinition>,
>(definitions: Definitions): NativeStyleThemes<Definitions> {
  const buildForMode = (mode: ThemeMode) =>
    Object.fromEntries(
      Object.entries(definitions).map(([name, definition]) => {
        const styles =
          typeof definition === "function"
            ? definition(theme.colors[mode])
            : definition

        return [name, StyleSheet.create(styles)]
      })
    )

  return {
    light: buildForMode("light"),
    dark: buildForMode("dark"),
  } as NativeStyleThemes<Definitions>
}
