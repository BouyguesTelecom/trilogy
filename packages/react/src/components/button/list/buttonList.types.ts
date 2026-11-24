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
  /** Aligns children on the cross axis. Values: `center`, `flex-start`, `flex-end`, `stretch`. Defaults: `center` on Web, `stretch` on Native. */
  alignItems?: ButtonListAlignItems
  /** Distributes children on the main axis. Values: `center`, `flex-start`, `flex-end`, `space-between`, `space-around`. Defaults: `center` on Web, `flex-start` on Native. */
  justifyContent?: ButtonListJustifyContent
  /** Sets the layout direction. Values: `column`, `row`. Default: `column` on both platforms. */
  direction?: ButtonListDirection
}

export interface ButtonListProps
  extends ButtonListUiProps, AccessibilityProps, CommonProps {
  /** Controls whether children wrap. Values: `wrap`, `nowrap`. Default: `nowrap` on both platforms. */
  wrap?: "wrap" | "nowrap"
}
