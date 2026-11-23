import type { TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

type AlertDescriptionStyles = {
  base: {
    text: TextStyle
  }
}

export const useAlertDescriptionStyles: () => AlertDescriptionStyles =
  makeStyle((theme) => ({
    base: {
      text: {
        fontFamily: theme.fonts.fontFamilyPrimary,
        fontSize: theme.fonts.fontSizeSm,
        fontWeight: String(
          theme.fonts.fontWeightRegular
        ) as TextStyle["fontWeight"],
        color: theme.colors.colorPrimary,
      },
    },
  }))
