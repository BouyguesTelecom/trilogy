import { Accessibility } from "../../../objects/facets/Accessibility"

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Accessibility{
  children?: React.ReactNode
  className?: string
  contentClassName?: string
  dataId?: string
}
