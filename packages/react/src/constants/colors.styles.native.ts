// Generated from figma tokens. Do not edit directly.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle } from "react-native"

type Colors = Record<keyof (typeof theme.colors)["light"], string>

export type TextColor =
  | "success"
  | "warning"
  | "error"
  | "information"
  | "primary"
  | "secondary"
  | "placeholder"
  | "selected"
  | "inverse"
  | "accent"
  | "disabled"
  | "brand"

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): Record<TextColor, TextStyle> =>
  StyleSheet.create<Record<TextColor, TextStyle>>({
    success: { color: colors.colorSuccess },
    warning: { color: colors.colorWarning },
    error: { color: colors.colorError },
    information: { color: colors.colorInformation },
    primary: { color: colors.colorPrimary },
    secondary: { color: colors.colorSecondary },
    placeholder: { color: colors.colorPlaceholder },
    selected: { color: colors.colorSelected },
    inverse: { color: colors.colorInverse },
    accent: { color: colors.colorAccent },
    disabled: { color: colors.colorDisabled },
    brand: { color: colors.colorBrand },
  })

export const textColorStyles: Record<
  "light" | "dark",
  Record<TextColor, TextStyle>
> = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
