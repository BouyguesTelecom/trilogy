import type { theme } from "@/constants/theme"
import type { BackgroundColors } from "@/interfaces/backgroundColors"

/** Theme color key of a semantic background token ("primary-subtle" -> "backgroundPrimarySubtle"). */
export function getBackgroundThemeKey(
  background: BackgroundColors | `${BackgroundColors}`
): keyof typeof theme.colors.light {
  if (background === "background") return "background"
  return `background${background
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("")}` as keyof typeof theme.colors.light
}
