import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

export type CardAppearance = "shadow" | "outlined" | "accent-start"
export type CardOverlayAlign = "start" | "center" | "end"
export interface CardUiProps {
  /** Surface treatment; defaults to shadow. */
  appearance?: CardAppearance
}
export interface CardProps extends CardUiProps, CommonProps {}
export interface CardSectionProps extends CommonProps {
  /** Semantic background color; omitted uses the component default. */
  background?: BackgroundColors | `${BackgroundColors}`
}
export interface CardImageProps extends CommonProps {
  /** Image URI. */
  src: string
  /** Accessible description, or an empty string for a decorative image. */
  alt: string
  /** Width-to-height ratio; defaults to 2. */
  aspectRatio?: number
}
export interface CardOverlayProps extends CommonProps {
  /** Horizontal alignment; defaults to center. */
  align?: CardOverlayAlign
}
