import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardOverlayStyles: () => {
  base: { view: ViewStyle }
  align: Record<"center" | "start" | "end", ViewStyle>
} = makeStyle((theme) => ({
  base: {
    view: {
      position: "absolute",
      top: 0,
      start: 0,
      end: 0,
      transform: [{ translateY: "-50%" }],
      zIndex: 1,
      flexDirection: "row",
      paddingHorizontal: theme.spacings.spacingMd,
    },
  },
  align: {
    center: { justifyContent: "center" },
    start: { justifyContent: "flex-start" },
    end: { justifyContent: "flex-end" },
  },
}))
