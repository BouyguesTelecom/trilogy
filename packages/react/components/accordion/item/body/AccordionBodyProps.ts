import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Dev, CommonProps {
  children?: React.ReactNode
}
