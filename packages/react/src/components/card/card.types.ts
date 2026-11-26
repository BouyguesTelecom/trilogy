import type { theme } from "@/constants/theme"
import type { CommonProps } from "@/interfaces/commonProps"
import type { ThemeTokenSuffix } from "@/interfaces/themeTokens"

export enum CardAppearance {
  shadow = "shadow",
  outlined = "outlined",
  accentStart = "accent-start",
}
export enum CardOrientation {
  vertical = "vertical",
  horizontal = "horizontal",
}
/** Radius token names from the theme, without the `radius` prefix (for example `md`). */
export type CardBorderRadius = ThemeTokenSuffix<
  keyof typeof theme.radius,
  "radius"
>
/** Spacing token names from the theme, without the `spacing` prefix (for example `md`). */
export type CardPadding = ThemeTokenSuffix<
  keyof typeof theme.spacings,
  "spacing"
>
export interface CardUiProps {
  /** Surface treatment; omitted adds none. */
  appearance?: CardAppearance | `${CardAppearance}`
  /** Stacks sections top to bottom (`vertical`) or side by side (`horizontal`); defaults to vertical. */
  orientation?: CardOrientation | `${CardOrientation}`
}
export interface CardHelperProps {
  /** Overrides the corner radius with a theme radius token; omitted keeps the `lg` radius. */
  borderRadius?: CardBorderRadius
  /** Adds padding around the sections with a theme spacing token; omitted adds none. */
  padding?: CardPadding
}
export interface CardProps extends CardUiProps, CardHelperProps, CommonProps {}
