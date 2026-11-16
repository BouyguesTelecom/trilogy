// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle } from "react-native"

export type TitleVariantStyles = {
  text: TextStyle
}

export type TitleStyles = Record<
  "light" | "dark",
  Record<string, TitleVariantStyles>
>

type Colors = Record<keyof (typeof theme.colors)["light"], string>

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): Record<string, TitleVariantStyles> => ({
  one: StyleSheet.create<TitleVariantStyles>({
    text: {
      color: colors.colorPrimary,
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxxl,
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
  }),
  two: StyleSheet.create<TitleVariantStyles>({
    text: {
      color: colors.colorPrimary,
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxl,
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
  }),
  three: StyleSheet.create<TitleVariantStyles>({
    text: {
      color: colors.colorPrimary,
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXxl,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
  four: StyleSheet.create<TitleVariantStyles>({
    text: {
      color: colors.colorPrimary,
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXl,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
  five: StyleSheet.create<TitleVariantStyles>({
    text: {
      color: colors.colorPrimary,
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeMd,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
  six: StyleSheet.create<TitleVariantStyles>({
    text: {
      color: colors.colorPrimary,
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeBase,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
})

export const titleStyles: TitleStyles = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
