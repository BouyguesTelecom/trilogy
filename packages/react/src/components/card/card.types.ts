import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

export type CardAppearance = "shadow" | "outlined" | "accent-start"
export type CardGroupAddOnAlign = "start" | "center" | "end"
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
export interface CardGroupProps extends CommonProps {}
export interface CardGroupAddOnProps extends CommonProps {
  /** Logical horizontal alignment; defaults to center. */
  align?: CardGroupAddOnAlign
}
