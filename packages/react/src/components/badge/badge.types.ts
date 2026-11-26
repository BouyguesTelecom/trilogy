import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

export enum BadgeSize {
  default = "default",
  small = "small",
}
export interface BadgeUiProps {
  /** Fixed size: `default` (24px high) or `small` (16px high); defaults to `default`. */
  size?: BadgeSize | `${BadgeSize}`
  /** Semantic background color; defaults to `secondary`. The text is the default color on a light background, white otherwise. */
  background?: BackgroundColors | `${BackgroundColors}`
}
export interface BadgeProps extends BadgeUiProps, CommonProps {}
