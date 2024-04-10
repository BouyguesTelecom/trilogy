import { Accessibility } from '../../../objects/facets/Accessibility'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends Accessibility {
  children?: React.ReactNode
  className?: string
  dataId?: string
  disabled?: boolean
}
