import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type ButtonVariantStyles = {
  view: ViewStyle
  pressed: ViewStyle
  disabled: ViewStyle
  text: TextStyle
  disabledText: TextStyle
}

type ButtonStyles = {
  base: {
    layout: ViewStyle
    button: ViewStyle
  }
  primary: ButtonVariantStyles
  secondary: ButtonVariantStyles
  ghost: ButtonVariantStyles
  conversion: ButtonVariantStyles
}

export const useButtonStyles: () => ButtonStyles = makeStyle((theme) => ({
  base: {
    layout: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacings.spacingSm,
    },
    button: {
      borderRadius: theme.radius.radiusSm,
      borderWidth: theme.borderWidths.borderWidthSm,
      height: theme.sizes.sizeMd,
      padding: theme.spacings.spacingSm,
    },
  },
  primary: {
    view: {
      backgroundColor: theme.colors.backgroundSecondary,
      borderColor: theme.colors.borderMain,
    },
    pressed: {
      backgroundColor: theme.colors.backgroundSecondaryPressed,
      borderColor: theme.colors.borderMainPressed,
    },
    disabled: {
      backgroundColor: theme.colors.backgroundField,
      borderColor: theme.colors.borderDisabled,
    },
    text: {
      color: theme.colors.colorInverse,
    },
    disabledText: {
      color: theme.colors.colorDisabled,
    },
  },
  secondary: {
    view: {
      backgroundColor: theme.colors.backgroundPrimary,
      borderColor: theme.colors.borderPrimary,
    },
    pressed: {
      backgroundColor: theme.colors.backgroundPrimaryPressed,
      borderColor: theme.colors.borderMainPressed,
    },
    disabled: {
      backgroundColor: theme.colors.backgroundField,
      borderColor: theme.colors.borderDisabled,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
    disabledText: {
      color: theme.colors.colorDisabled,
    },
  },
  ghost: {
    view: {
      backgroundColor: theme.colors.backgroundTransparent,
      borderColor: theme.colors.borderTransparent,
    },
    pressed: {
      backgroundColor: theme.colors.backgroundPrimaryPressed,
    },
    disabled: {
      backgroundColor: theme.colors.backgroundField,
      borderColor: theme.colors.borderDisabled,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
    disabledText: {
      color: theme.colors.colorDisabled,
    },
  },
  conversion: {
    view: {
      backgroundColor: theme.colors.backgroundAccent,
      borderColor: theme.colors.borderAccent,
    },
    pressed: {
      backgroundColor: theme.colors.backgroundAccentPressed,
      borderColor: theme.colors.borderAccentPressed,
    },
    disabled: {
      backgroundColor: theme.colors.backgroundField,
      borderColor: theme.colors.borderDisabled,
    },
    text: {
      color: theme.colors.colorInverse,
    },
    disabledText: {
      color: theme.colors.colorDisabled,
    },
  },
}))
