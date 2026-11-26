import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardContentStyles: () => {
  base: { view: ViewStyle; text: TextStyle }
} = makeStyle((theme) => ({
  base: {
    view: {
      padding: theme.spacings.spacingLg,
      backgroundColor: theme.colors.backgroundPrimary,
      borderBottomStartRadius: theme.radius.radiusLg,
      borderBottomEndRadius: theme.radius.radiusLg,
    },
    text: { color: theme.colors.colorPrimary },
  },
}))
