import type { ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AccordionItemStyles = {
  item: { view: ViewStyle; disabled: ViewStyle }
}

export const useAccordionItemStyles: () => AccordionItemStyles = makeStyle(
  (theme) => ({
    item: {
      view: {
        flexDirection: "column",
        borderWidth: theme.borderWidths.borderWidthSm,
        borderRadius: theme.radius.radiusMd,
        backgroundColor: theme.colors.backgroundPrimary,
        borderColor: theme.colors.borderPrimary,
      },
      disabled: {
        backgroundColor: theme.colors.backgroundPrimarySubtle,
        borderColor: theme.colors.borderDisabled,
      },
    },
  })
)
