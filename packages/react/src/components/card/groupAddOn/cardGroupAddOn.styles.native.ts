import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { CardGroupAddOnAlign } from "./cardGroupAddOn.types"

export const useCardGroupAddOnStyles: () => {
  base: { view: ViewStyle }
  align: Record<CardGroupAddOnAlign, ViewStyle>
} = makeStyle((theme) => ({
  base: {
    // A zero-height box collapses its text on iOS, so the component offsets half its measured height instead.
    view: {
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
