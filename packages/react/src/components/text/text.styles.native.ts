import type { TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import { TextColor, TextFontWeight, TextLevel } from "./text.types"

type TextStyles = {
  levels: Record<TextLevel, TextStyle>
  colors: Record<TextColor, TextStyle>
  weights: Record<TextFontWeight, TextStyle>
}

export const useTextStyles: () => TextStyles = makeStyle((theme) => ({
  levels: {
    [TextLevel.one]: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxxl,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TextLevel.two]: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxl,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TextLevel.three]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXxl,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TextLevel.four]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXl,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TextLevel.five]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeMd,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TextLevel.six]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeBase,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
  },
  colors: {
    [TextColor.primary]: { color: theme.colors.colorPrimary },
    [TextColor.secondary]: { color: theme.colors.colorSecondary },
    [TextColor.information]: { color: theme.colors.colorInformation },
    [TextColor.accent]: { color: theme.colors.colorAccent },
    [TextColor.success]: { color: theme.colors.colorSuccess },
    [TextColor.warning]: { color: theme.colors.colorWarning },
    [TextColor.error]: { color: theme.colors.colorError },
    [TextColor.brand]: { color: theme.colors.colorBrand },
    [TextColor.inverse]: { color: theme.colors.colorInverse },
  },
  weights: {
    [TextFontWeight.regular]: {
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TextFontWeight.medium]: {
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
    [TextFontWeight.semibold]: {
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
    [TextFontWeight.bold]: {
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
    },
  },
}))
