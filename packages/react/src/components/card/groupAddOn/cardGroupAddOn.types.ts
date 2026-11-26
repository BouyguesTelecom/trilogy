import type { CommonProps } from "@/interfaces/commonProps"

export type CardGroupAddOnAlign = "start" | "center" | "end"

/** Props for content attached to a card edge inside a card group. */
export interface CardGroupAddOnProps extends CommonProps {
  /** Logical horizontal alignment; defaults to center. */
  align?: CardGroupAddOnAlign
}
