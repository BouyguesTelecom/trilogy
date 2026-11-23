import type { TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AlertTitleStyles = {
  base: {
    text: TextStyle
  }
}

export const useAlertTitleStyles: () => AlertTitleStyles = makeStyle(
  (theme) => ({
    base: {
      text: {
        fontFamily: theme.fonts.fontFamilySecondary,
        fontSize: theme.fonts.fontSizeBase,
        fontWeight: String(
          theme.fonts.fontWeightBold
        ) as TextStyle["fontWeight"],
        color: theme.colors.colorPrimary,
      },
    },
  })
)
