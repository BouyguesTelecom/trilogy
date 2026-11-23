import { AccessibilityProps } from "@/interfaces/accessibilityProps"
import { CommonProps } from "@/interfaces/commonProps"

export enum ButtonListAlignItems {
  center = "center",
  flexStart = "flex-start",
  flexEnd = "flex-end",
  stretch = "stretch",
}

export enum ButtonListJustifyContent {
  center = "center",
  flexStart = "flex-start",
  flexEnd = "flex-end",
  spaceBetween = "space-between",
  spaceAround = "space-around",
}

export enum ButtonListDirection {
  column = "column",
  row = "row",
}

export interface ButtonListUiProps {
  alignItems?: ButtonListAlignItems
  justifyContent?: ButtonListJustifyContent
  direction?: ButtonListDirection
}

export interface ButtonListProps
  extends ButtonListUiProps, AccessibilityProps, CommonProps {
  wrap?: "wrap" | "nowrap"
}
