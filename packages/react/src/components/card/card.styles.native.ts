import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type CardStyles = {
  base: { view: ViewStyle }
  appearance: Record<"shadow" | "outlined" | "accent-start", ViewStyle>
}
export const useCardStyles: () => CardStyles = makeStyle((theme) => ({
  base: {
    view: {
      position: "relative",
      borderRadius: theme.radius.radiusLg,
      backgroundColor: theme.colors.backgroundPrimary,
    },
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
}))
