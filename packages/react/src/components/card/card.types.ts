import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

export type CardAppearance = "shadow" | "outlined" | "accent-start"
export type CardOrientation = "vertical" | "horizontal"
export type CardGroupAddOnAlign = "start" | "center" | "end"
export interface CardUiProps {
  /** Surface treatment; defaults to shadow. */
  appearance?: CardAppearance
  /** Stacks sections top to bottom (`vertical`) or side by side (`horizontal`); defaults to vertical. */
  orientation?: CardOrientation
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
  /** Width-to-height ratio; defaults to 2 when vertical and fills the card height when horizontal. */
  aspectRatio?: number
  /** Detaches the image from the card edges with a margin and rounded corners; defaults to false (image touches the edges). */
  inset?: boolean
}
export interface CardGroupProps extends CommonProps {}
export interface CardGroupAddOnProps extends CommonProps {
  /** Logical horizontal alignment; defaults to center. */
  align?: CardGroupAddOnAlign
}
