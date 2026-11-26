import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

export enum StickerSize {
  default = "default",
  small = "small",
}
export interface StickerUiProps {
  /** Fixed size: `default` (32px high) or `small` (24px high); defaults to `default`. */
  size?: StickerSize | `${StickerSize}`
  /** Semantic background color; defaults to `secondary`. The text is the default color on a light background, white otherwise. */
  background?: BackgroundColors | `${BackgroundColors}`
}
export interface StickerProps extends StickerUiProps, CommonProps {}
