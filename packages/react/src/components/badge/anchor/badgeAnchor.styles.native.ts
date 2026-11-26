import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type BadgeAnchorStyles = { base: { view: ViewStyle } }

export const useBadgeAnchorStyles: () => BadgeAnchorStyles = makeStyle(() => ({
  base: { view: { alignSelf: "flex-start" } },
}))
