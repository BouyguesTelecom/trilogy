import type { CommonProps } from "@/interfaces/commonProps"

/** Props for the accordion's toggle header. */
export interface AccordionHeaderProps extends CommonProps {
  /** Accessible name of the toggle when its children do not provide one. */
  accessibilityLabel?: string
}
