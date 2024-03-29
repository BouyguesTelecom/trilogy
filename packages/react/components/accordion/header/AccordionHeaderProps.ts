import { Accessibility } from '../../../objects'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends Accessibility {
  children?: React.ReactNode
  className?: string
  dataId?: string
  disabled?: boolean
}
