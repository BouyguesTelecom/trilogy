// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle } from "react-native"

type Colors = Record<keyof (typeof theme.colors)["light"], string>

type AlertDescriptionStyles = {
  text: TextStyle
}

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): AlertDescriptionStyles =>
  StyleSheet.create<AlertDescriptionStyles>({
    text: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeSm,
      fontWeight: String(theme.fonts.fontWeightRegular) as TextStyle["fontWeight"],
      color: colors.colorPrimary,
    },
  })

export const alertDescriptionStyles: Record<"light" | "dark", AlertDescriptionStyles> = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
