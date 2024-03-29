import { Accessibility } from "../../objects"

/**
 * Accordion Interface
 */

export interface AccordionProps extends Accessibility{
  children?: React.ReactNode
  className?: string
  inverted?: boolean
}
