import type { theme } from "@/constants/theme"
import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

type ThemeTokenSuffix<
  Key,
  Prefix extends string,
> = Key extends `${Prefix}${infer Suffix}` ? Uncapitalize<Suffix> : never

export type CardAppearance = "shadow" | "outlined" | "accent-start"
export type CardOrientation = "vertical" | "horizontal"
/** Radius token names from the theme, without the `radius` prefix (for example `md`). */
export type CardBorderRadius = ThemeTokenSuffix<
  keyof typeof theme.radius,
  "radius"
>
/** Spacing token names from the theme, without the `spacing` prefix (for example `md`). */
export type CardContentPadding = ThemeTokenSuffix<
  keyof typeof theme.spacings,
  "spacing"
>
export type CardGroupAddOnAlign = "start" | "center" | "end"
export interface CardUiProps {
  /** Surface treatment; defaults to shadow. */
  appearance?: CardAppearance
  /** Stacks sections top to bottom (`vertical`) or side by side (`horizontal`); defaults to vertical. */
  orientation?: CardOrientation
}
export interface CardHelperProps {
  /** Overrides the corner radius with a theme radius token; omitted keeps the `lg` radius. */
  borderRadius?: CardBorderRadius
}
export interface CardProps extends CardUiProps, CardHelperProps, CommonProps {}
export interface CardSectionProps extends CommonProps {
  /** Semantic background color; omitted uses the component default. */
  background?: BackgroundColors | `${BackgroundColors}`
}
export interface CardContentProps extends CardSectionProps {
  /** Overrides the padding with a theme spacing token; omitted keeps the `lg` padding. */
  padding?: CardContentPadding
}
export interface CardImageProps extends CommonProps {
  /** Image URI. */
  src: string
  /** Accessible description, or an empty string for a decorative image. */
  alt: string
  /** Width-to-height ratio; defaults to 2 when vertical and to the image's natural ratio when horizontal. */
  aspectRatio?: number
  /** Detaches the image from the card edges with a margin and rounded corners; defaults to false (image touches the edges). */
  inset?: boolean
}
export interface CardGroupProps extends CommonProps {}
export interface CardGroupAddOnProps extends CommonProps {
  /** Logical horizontal alignment; defaults to center. */
  align?: CardGroupAddOnAlign
}
