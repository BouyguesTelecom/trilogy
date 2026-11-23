import { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import { AlertStatus } from "./alert.types"

type AlertVariantStyles = {
  view: ViewStyle
  text: TextStyle
}

type AlertStyles = {
  base: {
    container: ViewStyle
  }
  information: AlertVariantStyles
  success: AlertVariantStyles
  error: AlertVariantStyles
  warning: AlertVariantStyles
}

export const useAlertStyles: () => AlertStyles = makeStyle((theme) => ({
  base: {
    container: {
      borderRadius: theme.radius.radiusMd,
      padding: theme.spacings.spacingMd,
      borderWidth: theme.borderWidths.borderWidthSm,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: theme.spacings.spacingSm,
    },
  },
  [AlertStatus.information]: {
    view: {
      backgroundColor: theme.colors.backgroundInformationSubtle,
      borderColor: theme.colors.borderInformation,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
  [AlertStatus.success]: {
    view: {
      backgroundColor: theme.colors.backgroundSuccessSubtle,
      borderColor: theme.colors.borderSuccess,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
  [AlertStatus.error]: {
    view: {
      backgroundColor: theme.colors.backgroundErrorSubtle,
      borderColor: theme.colors.borderError,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
  [AlertStatus.warning]: {
    view: {
      backgroundColor: theme.colors.backgroundWarningSubtle,
      borderColor: theme.colors.borderWarning,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
}))
