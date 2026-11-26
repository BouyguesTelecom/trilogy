import type { theme } from "@/constants/theme"
import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"
import type { ThemeTokenSuffix } from "@/interfaces/themeTokens"

/** Spacing token names from the theme, without the `spacing` prefix (for example `md`). */
export type CardFooterPadding = ThemeTokenSuffix<
  keyof typeof theme.spacings,
  "spacing"
>

/** Props for the card footer section; inherits `CommonProps`. */
export interface CardFooterProps extends CommonProps {
  /** Semantic background color; the top border takes the same color. Omitted keeps the default background and border. */
  background?: BackgroundColors | `${BackgroundColors}`
  /** Overrides the padding with a theme spacing token; omitted keeps the `md` padding. */
  padding?: CardFooterPadding
}
