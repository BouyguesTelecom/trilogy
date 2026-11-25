import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AccordionStyles = {
  group: { view: ViewStyle }
}

export const useAccordionStyles: () => AccordionStyles = makeStyle((theme) => ({
  group: { view: { flexDirection: "column", gap: theme.spacings.spacingSm } },
}))
