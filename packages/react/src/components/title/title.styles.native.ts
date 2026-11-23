import type { TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import { TitleColor, TitleFontWeight, TitleLevel } from "./title.types"

type TitleStyles = {
  levels: Record<TitleLevel, TextStyle>
  colors: Record<TitleColor, TextStyle>
  weights: Record<TitleFontWeight, TextStyle>
}

export const useTitleStyles: () => TitleStyles = makeStyle((theme) => ({
  levels: {
    [TitleLevel.one]: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxxl,
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
    [TitleLevel.two]: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeXxxl,
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
    [TitleLevel.three]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXxl,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
    [TitleLevel.four]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeXl,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
    [TitleLevel.five]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeMd,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
    [TitleLevel.six]: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeBase,
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
  },
  colors: {
    [TitleColor.primary]: { color: theme.colors.colorPrimary },
    [TitleColor.secondary]: { color: theme.colors.colorSecondary },
    [TitleColor.information]: { color: theme.colors.colorInformation },
    [TitleColor.accent]: { color: theme.colors.colorAccent },
    [TitleColor.success]: { color: theme.colors.colorSuccess },
    [TitleColor.warning]: { color: theme.colors.colorWarning },
    [TitleColor.error]: { color: theme.colors.colorError },
    [TitleColor.brand]: { color: theme.colors.colorBrand },
    [TitleColor.inverse]: { color: theme.colors.colorInverse },
  },
  weights: {
    [TitleFontWeight.regular]: {
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
    },
    [TitleFontWeight.medium]: {
      fontWeight: String(
        theme.fonts.fontWeightMedium
      ) as TextStyle["fontWeight"],
    },
    [TitleFontWeight.semibold]: {
      fontWeight: String(
        theme.fonts.fontWeightSemibold
      ) as TextStyle["fontWeight"],
    },
    [TitleFontWeight.bold]: {
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
    },
  },
}))
