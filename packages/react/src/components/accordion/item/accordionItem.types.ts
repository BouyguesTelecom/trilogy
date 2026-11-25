import type { CommonProps } from "@/interfaces/commonProps"

/** Props for an independently expandable accordion item. */
export interface AccordionItemProps extends CommonProps {
  /** Controls whether this item is open. */
  open?: boolean
  /** Sets the initial open state when uncontrolled. Defaults to false. */
  defaultOpen?: boolean
  /** Called when the user requests a change to the open state. */
  onOpenChange?: (open: boolean) => void
  /** Prevents the item from being toggled. Defaults to false. */
  disabled?: boolean
}
