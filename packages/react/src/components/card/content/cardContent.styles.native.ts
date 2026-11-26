import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { CardContentPadding } from "../card.types"
import { tokenStyles } from "../cardTokens.native"

export const useCardContentStyles: () => {
  base: { view: ViewStyle; text: TextStyle }
  horizontal: { view: ViewStyle }
  padding: Record<CardContentPadding, ViewStyle>
} = makeStyle((theme) => ({
  base: {
    view: {
      padding: theme.spacings.spacingLg,
      backgroundColor: theme.colors.backgroundPrimary,
    },
    text: { color: theme.colors.colorPrimary },
  },
  horizontal: { view: { flex: 1, minWidth: 0 } },
  padding: tokenStyles<CardContentPadding>(
    theme.spacings,
    "spacing",
    (padding) => ({ padding })
  ),
}))
