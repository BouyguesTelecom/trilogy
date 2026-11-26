import type { ImageStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardImageStyles: () => { base: { image: ImageStyle } } =
  makeStyle((theme) => ({
    base: {
      image: {
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        borderTopStartRadius: theme.radius.radiusLg,
        borderTopEndRadius: theme.radius.radiusLg,
      },
    },
  }))
