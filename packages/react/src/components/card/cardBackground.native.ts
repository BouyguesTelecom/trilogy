import type { BackgroundColors } from "@/interfaces/backgroundColors"

import { useTrilogyContext } from "@/hooks/useTrilogyContext.native"

export function useCardBackground(
  background: BackgroundColors | `${BackgroundColors}` | undefined
): string | undefined {
  const { colors, mode } = useTrilogyContext()
  if (!background) return undefined
  const key =
    background === "background"
      ? "background"
      : `background${background
          .split("-")
          .map((part) => part[0].toUpperCase() + part.slice(1))
          .join("")}`
  return colors[mode][key as keyof typeof colors.light]
}
