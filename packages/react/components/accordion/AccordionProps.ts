import { Accessibility } from "../../objects/facets/Accessibility"

/**
 * Accordion Interface
 */
export interface AccordionProps extends Accessibility{
  children?: React.ReactNode
  className?: string
  inverted?: boolean
}
