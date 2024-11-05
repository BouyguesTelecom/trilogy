import { Accessibility, Dev } from '@/objects'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends Accessibility, Dev {
  children?: React.ReactNode
  className?: string
  dataId?: string
  disabled?: boolean
}
