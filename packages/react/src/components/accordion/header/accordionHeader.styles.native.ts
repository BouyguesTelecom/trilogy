import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AccordionHeaderStyles = {
  header: { view: ViewStyle; text: TextStyle; disabledText: TextStyle }
  icon: { view: ViewStyle; open: ViewStyle }
}

export const useAccordionHeaderStyles: () => AccordionHeaderStyles = makeStyle(
  (theme) => ({
    header: {
      view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacings.spacingMd,
        padding: theme.spacings.spacingMd,
      },
      text: {
        fontFamily: theme.fonts.fontFamilyPrimary,
        fontSize: theme.fonts.fontSizeBase,
        fontWeight: String(
          theme.fonts.fontWeightBold
        ) as TextStyle["fontWeight"],
        color: theme.colors.colorPrimary,
        flexShrink: 1,
      },
      disabledText: { color: theme.colors.colorDisabled },
    },
    icon: {
      view: { marginLeft: "auto", flexShrink: 0 },
      open: { transform: [{ rotate: "180deg" }] },
    },
  })
)
