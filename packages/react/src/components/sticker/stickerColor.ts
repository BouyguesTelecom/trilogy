import type { theme } from "@/constants/theme"

import type { StickerProps } from "./sticker.types"

type ThemeColorKey = keyof typeof theme.colors.light

/** Theme color key of a semantic background token ("primary-subtle" -> "backgroundPrimarySubtle"). */
export function getStickerBackgroundKey(
  background: NonNullable<StickerProps["background"]>
): ThemeColorKey {
  if (background === "background") return "background"
  return `background${background
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("")}` as ThemeColorKey
}
