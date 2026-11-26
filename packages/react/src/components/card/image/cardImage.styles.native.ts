import type { ImageStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

export const useCardImageStyles: () => { base: { image: ImageStyle } } =
  makeStyle(() => ({ base: { image: { width: "100%" } } }))
