import { Accessibility } from '@/objects'
import { BackgroundProps } from '@/objects/atoms/Background'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility {
  children?: React.ReactNode
  className?: string
}
