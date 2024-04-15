import { Accessibility } from '../../../objects/facets/Accessibility'
import { AlertProps } from '../../../objects/facets/Alert'

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends AlertProps, Accessibility {
  children?: React.ReactNode
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
}
