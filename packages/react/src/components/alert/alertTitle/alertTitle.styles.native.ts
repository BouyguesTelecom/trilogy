// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle } from "react-native"

type Colors = Record<keyof (typeof theme.colors)["light"], string>

type AlertTitleStyles = {
  text: TextStyle
}

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): AlertTitleStyles =>
  StyleSheet.create<AlertTitleStyles>({
    text: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeBase,
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
      color: colors.colorPrimary,
    },
  })

export const alertTitleStyles: Record<"light" | "dark", AlertTitleStyles> = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
