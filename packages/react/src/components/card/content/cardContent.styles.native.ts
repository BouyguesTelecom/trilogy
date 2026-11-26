import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardContentStyles: () => {
  base: { view: ViewStyle; text: TextStyle }
  horizontal: { view: ViewStyle }
} = makeStyle((theme) => ({
  base: {
    view: {
      padding: theme.spacings.spacingLg,
      backgroundColor: theme.colors.backgroundPrimary,
    },
    text: { color: theme.colors.colorPrimary },
  },
  horizontal: { view: { flex: 1, minWidth: 0 } },
}))
