import type { CommonProps } from "@/interfaces/commonProps"

export enum BadgeAnchorPosition {
  topLeft = "top-left",
  topRight = "top-right",
  bottomLeft = "bottom-left",
  bottomRight = "bottom-right",
}
export interface BadgeAnchorUiProps {
  /** Corner of the wrapped element where the Badge sits; defaults to `top-right`. */
  position?: BadgeAnchorPosition | `${BadgeAnchorPosition}`
}
export interface BadgeAnchorProps extends BadgeAnchorUiProps, CommonProps {}
