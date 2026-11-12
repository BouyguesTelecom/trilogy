// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import { StyleSheet, type TextStyle, type ViewStyle } from "react-native"

export type AlertVariantStyles = {
  view: ViewStyle
  pressed?: ViewStyle
  disabled?: ViewStyle
  text: TextStyle
  disabledText?: TextStyle
}

export type AlertStyles = Record<
  "light" | "dark",
  Record<string, AlertVariantStyles>
>

type Colors = Record<keyof (typeof theme.colors)["light"], string>

type AlertBaseStyles = {
  base: ViewStyle
}

// Valeurs identiques quel que soit le variant et le mode
export const alertBaseStyles: AlertBaseStyles =
  StyleSheet.create<AlertBaseStyles>({
    base: {
      borderRadius: theme.radius.radiusMd,
      padding: theme.spacings.spacingMd,
      borderWidth: theme.borderWidths.borderWidthSm,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: theme.spacings.spacingSm,
    },
  })

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): Record<string, AlertVariantStyles> => ({
  information: StyleSheet.create<AlertVariantStyles>({
    view: {
      backgroundColor: colors.backgroundInformationSubtle,
      borderColor: colors.borderInformation,
    },
    text: {
      color: colors.colorPrimary,
    },
  }),
  success: StyleSheet.create<AlertVariantStyles>({
    view: {
      backgroundColor: colors.backgroundSuccessSubtle,
      borderColor: colors.borderSuccess,
    },
    text: {
      color: colors.colorPrimary,
    },
  }),
  error: StyleSheet.create<AlertVariantStyles>({
    view: {
      backgroundColor: colors.backgroundErrorSubtle,
      borderColor: colors.borderError,
    },
    text: {
      color: colors.colorPrimary,
    },
  }),
  warning: StyleSheet.create<AlertVariantStyles>({
    view: {
      backgroundColor: colors.backgroundWarningSubtle,
      borderColor: colors.borderWarning,
    },
    text: {
      color: colors.colorPrimary,
    },
  }),
})

export const alertStyles: AlertStyles = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
