import { Accessibility, Dev } from "@/objects"

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Accessibility, Dev {
  children?: React.ReactNode
  className?: string
  dataId?: string
}
