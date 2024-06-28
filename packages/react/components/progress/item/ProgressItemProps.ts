import { Accessibility, AlertProps } from '@/objects/facets'

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
