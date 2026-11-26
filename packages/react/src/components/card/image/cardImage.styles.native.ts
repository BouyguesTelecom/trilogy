import type { ImageStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardImageStyles: () => {
  base: { image: ImageStyle }
  inset: { image: ImageStyle }
  horizontal: { image: ImageStyle }
} = makeStyle((theme) => ({
  base: { image: { alignSelf: "stretch" } },
  inset: {
    image: {
      margin: theme.spacings.spacingMd,
      borderRadius: theme.radius.radiusMd,
    },
  },
  horizontal: { image: { flex: 1, minWidth: 0 } },
}))
