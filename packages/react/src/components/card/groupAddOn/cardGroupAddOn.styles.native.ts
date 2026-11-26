import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardGroupAddOnStyles: () => {
  base: { view: ViewStyle }
  align: Record<"start" | "center" | "end", ViewStyle>
} = makeStyle((theme) => ({
  base: {
    // Zero height keeps the add-on in the flow while its content straddles the card edge.
    view: {
      height: 0,
      zIndex: 1,
      flexDirection: "row",
      alignItems: "center",
      overflow: "visible",
      paddingHorizontal: theme.spacings.spacingMd,
    },
  },
  align: {
    start: { justifyContent: "flex-start" },
    center: { justifyContent: "center" },
    end: { justifyContent: "flex-end" },
  },
}))
