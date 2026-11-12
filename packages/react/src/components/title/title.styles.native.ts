// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle, type ViewStyle } from "react-native"

export type TitleVariantStyles = {
  view: ViewStyle
  pressed?: ViewStyle
  disabled?: ViewStyle
  text: TextStyle
  disabledText?: TextStyle
}

export type TitleStyles = Record<
  "light" | "dark",
  Record<string, TitleVariantStyles>
>

type Colors = Record<keyof (typeof theme.colors)["light"], string>

type TitleBaseStyles = {}

// Valeurs identiques quel que soit le variant et le mode
export const titleBaseStyles: TitleBaseStyles =
  StyleSheet.create<TitleBaseStyles>({})

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): Record<string, TitleVariantStyles> => ({
  one: StyleSheet.create<TitleVariantStyles>({
    view: {},
    text: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxxl,
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
  }),
  two: StyleSheet.create<TitleVariantStyles>({
    view: {},
    text: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxl,
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
  }),
  three: StyleSheet.create<TitleVariantStyles>({
    view: {},
    text: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXxl,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
  four: StyleSheet.create<TitleVariantStyles>({
    view: {},
    text: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXl,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
  five: StyleSheet.create<TitleVariantStyles>({
    view: {},
    text: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeMd,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  }),
  six: StyleSheet.create<TitleVariantStyles>({
    view: {},
    text: {
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
