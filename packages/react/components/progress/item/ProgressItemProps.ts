import { Accessibility, StatusProps } from '@/objects/facets'

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends StatusProps, Accessibility {
  children?: React.ReactNode
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
}
