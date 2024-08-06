import { Accessibility } from "../../../objects"

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Accessibility{
  children?: React.ReactNode
  className?: string
  dataId?: string
}
