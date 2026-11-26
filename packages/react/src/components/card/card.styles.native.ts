import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { CardBorderRadius } from "./card.types"
import { tokenStyles } from "./cardTokens.native"

type CardStyles = {
  base: { view: ViewStyle }
  orientation: Record<"vertical" | "horizontal", ViewStyle>
  appearance: Record<"shadow" | "outlined" | "accent-start", ViewStyle>
  borderRadius: Record<CardBorderRadius, ViewStyle>
}

export const useCardStyles: () => CardStyles = makeStyle((theme) => ({
  base: {
    view: {
      borderRadius: theme.radius.radiusLg,
      backgroundColor: theme.colors.backgroundPrimary,
      overflow: "hidden",
    },
  },
  orientation: {
    vertical: { flexDirection: "column" },
    horizontal: { flexDirection: "row" },
  },
  appearance: {
    shadow: { boxShadow: "0px 4px 12px rgba(0,0,0,0.14)" },
    outlined: {
      boxShadow: `0px 0px 0px ${theme.borderWidths.borderWidthSm}px ${theme.colors.borderMain}`,
    },
    "accent-start": {
      boxShadow: `${-theme.borderWidths.borderWidthLg}px 0px 0px ${theme.colors.borderMain}`,
    },
  },
  borderRadius: tokenStyles<CardBorderRadius>(
    theme.radius,
    "radius",
    (borderRadius) => ({ borderRadius })
  ),
}))
