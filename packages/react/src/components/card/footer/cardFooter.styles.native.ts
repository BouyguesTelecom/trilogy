import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import { tokenStyles } from "../cardTokens.native"
import type { CardFooterPadding } from "./cardFooter.types"

export const useCardFooterStyles: () => {
  base: { view: ViewStyle; text: TextStyle }
  padding: Record<CardFooterPadding, ViewStyle>
} = makeStyle((theme) => ({
  base: {
    view: {
      padding: theme.spacings.spacingMd,
      backgroundColor: theme.colors.backgroundPrimary,
      borderTopWidth: theme.borderWidths.borderWidthSm,
      borderTopColor: theme.colors.borderPrimary,
    },
    text: { color: theme.colors.colorPrimary },
  },
  padding: tokenStyles<CardFooterPadding>(
    theme.spacings,
    "spacing",
    (padding) => ({ padding })
  ),
}))
