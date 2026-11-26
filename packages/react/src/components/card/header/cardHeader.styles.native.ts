import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardHeaderStyles: () => {
  base: { view: ViewStyle; text: TextStyle }
} = makeStyle((theme) => ({
  base: {
    view: {
      padding: theme.spacings.spacingMd,
      backgroundColor: theme.colors.backgroundSecondary,
      borderTopStartRadius: theme.radius.radiusLg,
      borderTopEndRadius: theme.radius.radiusLg,
    },
    text: { color: theme.colors.colorInverse },
  },
}))
