import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { StickerSize } from "./sticker.types"

type StickerStyles = {
  base: { view: ViewStyle; text: TextStyle }
  sizeView: Record<StickerSize, ViewStyle>
  sizeText: Record<StickerSize, TextStyle>
  textColor: Record<"primary" | "inverse", TextStyle>
}

export const useStickerStyles: () => StickerStyles = makeStyle((theme) => ({
  base: {
    view: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      borderRadius: theme.radius.radiusFull,
      backgroundColor: theme.colors.backgroundSecondary,
    },
    text: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
    },
  },
  sizeView: {
    default: {
      height: theme.sizes.sizeSm,
      paddingHorizontal: theme.spacings.spacingMd,
      gap: theme.spacings.spacingXs,
    },
    small: {
      height: theme.spacings.spacingLg,
      paddingHorizontal: theme.spacings.spacingSm,
      gap: theme.spacings.spacingXxs,
    },
  },
  sizeText: {
    default: { fontSize: theme.fonts.fontSizeBase },
    small: { fontSize: theme.fonts.fontSizeXs },
  },
  textColor: {
    primary: { color: theme.colors.colorPrimary },
    inverse: { color: theme.colors.colorInverse },
  },
}))
