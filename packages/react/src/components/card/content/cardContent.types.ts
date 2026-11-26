import type { theme } from "@/constants/theme"
import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"
import type { ThemeTokenSuffix } from "@/interfaces/themeTokens"

/** Spacing token names from the theme, without the `spacing` prefix (for example `md`). */
export type CardContentPadding = ThemeTokenSuffix<
  keyof typeof theme.spacings,
  "spacing"
>

/** Props for the card content section; inherits `CommonProps`. */
export interface CardContentProps extends CommonProps {
  /** Semantic background color; omitted uses the component default. */
  background?: BackgroundColors | `${BackgroundColors}`
  /** Overrides the padding with a theme spacing token; omitted keeps the `md` padding. */
  padding?: CardContentPadding
}
