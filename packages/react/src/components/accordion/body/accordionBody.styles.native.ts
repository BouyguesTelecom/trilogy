import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AccordionBodyStyles = {
  body: { view: ViewStyle; hidden: ViewStyle; text: TextStyle }
}

export const useAccordionBodyStyles: () => AccordionBodyStyles = makeStyle(
  (theme) => ({
    body: {
      view: {
        flexDirection: "column",
        paddingHorizontal: theme.spacings.spacingMd,
        paddingBottom: theme.spacings.spacingMd,
      },
      hidden: { display: "none" },
      text: {
        fontFamily: theme.fonts.fontFamilyPrimary,
        fontSize: theme.fonts.fontSizeBase,
        fontWeight: String(
          theme.fonts.fontWeightRegular
        ) as TextStyle["fontWeight"],
        color: theme.colors.colorPrimary,
      },
    },
  })
)
