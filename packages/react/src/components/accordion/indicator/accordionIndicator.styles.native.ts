import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AccordionIndicatorStyles = {
  indicator: { view: ViewStyle; open: ViewStyle }
}

export const useAccordionIndicatorStyles: () => AccordionIndicatorStyles =
  makeStyle(() => ({
    indicator: {
      view: { marginLeft: "auto", flexShrink: 0 },
      open: { transform: [{ rotate: "180deg" }] },
    },
  }))
