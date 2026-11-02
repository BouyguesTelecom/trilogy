import type { ClickEvent } from "./clickEvent/clickEvent"

export interface OnClickProps {
  onClick?: (event: ClickEvent) => void
}
