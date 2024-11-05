import { Accessibility, Dev } from "@/objects"

/**
 * Accordion Interface
 */

export interface AccordionProps extends Accessibility, Dev {
  children?: React.ReactNode
  className?: string
}
