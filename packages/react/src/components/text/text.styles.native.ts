import type { TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import { TextColor, TextFontWeight, TextSize } from "./text.types"

type TextStyles = {
  sizes: Record<TextSize, TextStyle>
  colors: Record<TextColor, TextStyle>
  weights: Record<TextFontWeight, TextStyle>
}

export const useTextStyles: () => TextStyles = makeStyle((theme) => ({
  sizes: {
    [TextSize.xs]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXs,
    },
    [TextSize.sm]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeSm,
    },
    [TextSize.base]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeBase,
    },
    [TextSize.md]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeMd,
    },
    [TextSize.lg]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeLg,
    },
    [TextSize.xl]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXl,
    },
    [TextSize.xxl]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXxl,
    },
    [TextSize.xxxl]: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxl,
    },
    [TextSize.xxxxl]: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxxl,
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
