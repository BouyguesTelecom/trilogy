import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AlertContentStyles = {
  base: {
    view: ViewStyle
  }
}

export const useAlertContentStyles: () => AlertContentStyles = makeStyle(
  (theme) => ({
    base: {
      view: {
        gap: theme.spacings.spacingXs,
        flexShrink: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
  })
)
