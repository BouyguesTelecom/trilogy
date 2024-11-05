import { Accessibility, Dev } from '@/objects'
import { BackgroundProps } from '@/objects/atoms/Background'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility, Dev {
  children?: React.ReactNode
  className?: string
}
