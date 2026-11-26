import type { TextStyle, ViewStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { BadgeAnchorPosition } from "./anchor/badgeAnchor.types"
import type { BadgeSize } from "./badge.types"

type BadgeStyles = {
  base: { view: ViewStyle; text: TextStyle }
  sizeView: Record<BadgeSize, ViewStyle>
  sizeText: Record<BadgeSize, TextStyle>
  anchored: Record<BadgeAnchorPosition, ViewStyle>
  textColor: Record<"primary" | "inverse", TextStyle>
}

export const useBadgeStyles: () => BadgeStyles = makeStyle((theme) => ({
  base: {
    view: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      paddingHorizontal: theme.spacings.spacingXxs,
      gap: theme.spacings.spacingXxs,
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
      height: theme.spacings.spacingLg,
      minWidth: theme.spacings.spacingLg,
    },
    small: { height: theme.sizes.sizeXs, minWidth: theme.sizes.sizeXs },
  },
  sizeText: {
    default: {
      fontSize: theme.fonts.fontSizeSm,
      lineHeight: theme.spacings.spacingLg,
    },
    small: {
      fontSize: theme.fonts.fontSizeXs,
      lineHeight: theme.sizes.sizeXs,
    },
  },
  // The badge center sits a quarter of its own size inside the corner of the anchored element.
  anchored: {
    "top-left": {
      position: "absolute",
      top: 0,
      left: 0,
      transform: [{ translateX: "-25%" }, { translateY: "-25%" }],
    },
    "top-right": {
      position: "absolute",
      top: 0,
      right: 0,
      transform: [{ translateX: "25%" }, { translateY: "-25%" }],
    },
    "bottom-left": {
      position: "absolute",
      bottom: 0,
      left: 0,
      transform: [{ translateX: "-25%" }, { translateY: "25%" }],
    },
    "bottom-right": {
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: [{ translateX: "25%" }, { translateY: "25%" }],
    },
  },
  textColor: {
    primary: { color: theme.colors.colorPrimary },
    inverse: { color: theme.colors.colorInverse },
  },
}))
