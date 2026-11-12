// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle, type ViewStyle } from "react-native"

export type ButtonVariantStyles = {
  view: ViewStyle
  pressed?: ViewStyle
  disabled?: ViewStyle
  text: TextStyle
  disabledText?: TextStyle
}

export type ButtonStyles = Record<
  "light" | "dark",
  Record<string, ButtonVariantStyles>
>

type Colors = Record<keyof (typeof theme.colors)["light"], string>

type ButtonBaseStyles = {
  base: ViewStyle
}

// Valeurs identiques quel que soit le variant et le mode
export const buttonBaseStyles: ButtonBaseStyles =
  StyleSheet.create<ButtonBaseStyles>({
    base: {
      borderRadius: theme.radius.radiusSm,
      borderWidth: theme.borderWidths.borderWidthSm,
      height: theme.sizes.sizeMd,
      padding: theme.spacings.spacingSm,
    },
  })

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): Record<string, ButtonVariantStyles> => ({
  primary: StyleSheet.create<ButtonVariantStyles>({
    view: {
      backgroundColor: colors.backgroundSecondary,
      borderColor: colors.borderMain,
    },
    pressed: {
      backgroundColor: colors.backgroundSecondaryPressed,
      borderColor: colors.borderMainPressed,
    },
    disabled: {
      backgroundColor: colors.backgroundField,
      borderColor: colors.borderDisabled,
    },
    text: {
      color: colors.colorInverse,
    },
    disabledText: {
      color: colors.colorDisabled,
    },
  }),
  secondary: StyleSheet.create<ButtonVariantStyles>({
    view: {
      backgroundColor: colors.backgroundPrimary,
      borderColor: colors.borderPrimary,
    },
    pressed: {
      backgroundColor: colors.backgroundPrimaryPressed,
      borderColor: colors.borderMainPressed,
    },
    disabled: {
      backgroundColor: colors.backgroundField,
      borderColor: colors.borderDisabled,
    },
    text: {
      color: colors.colorPrimary,
    },
    disabledText: {
      color: colors.colorDisabled,
    },
  }),
  ghost: StyleSheet.create<ButtonVariantStyles>({
    view: {
      backgroundColor: colors.backgroundTransparent,
      borderColor: colors.borderTransparent,
    },
    pressed: {
      backgroundColor: colors.backgroundPrimaryPressed,
    },
    disabled: {
      backgroundColor: colors.backgroundField,
      borderColor: colors.borderDisabled,
    },
    text: {
      color: colors.colorPrimary,
    },
    disabledText: {
      color: colors.colorDisabled,
    },
  }),
  conversion: StyleSheet.create<ButtonVariantStyles>({
    view: {
      backgroundColor: colors.backgroundAccent,
      borderColor: colors.borderAccent,
    },
    pressed: {
      backgroundColor: colors.backgroundAccentPressed,
      borderColor: colors.borderAccentPressed,
    },
    disabled: {
      backgroundColor: colors.backgroundField,
      borderColor: colors.borderDisabled,
    },
    text: {
      color: colors.colorInverse,
    },
    disabledText: {
      color: colors.colorDisabled,
    },
  }),
})

export const buttonStyles: ButtonStyles = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
