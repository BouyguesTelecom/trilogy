import type { CommonProps } from "@/interfaces/commonProps"

export enum CardGroupAddOnAlign {
  start = "start",
  center = "center",
  end = "end",
}

/** Props for content attached to a card edge inside a card group. */
export interface CardGroupAddOnProps extends CommonProps {
  /** Logical horizontal alignment; defaults to center. */
  align?: CardGroupAddOnAlign | `${CardGroupAddOnAlign}`
}
