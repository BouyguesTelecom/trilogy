import { BackgroundProps } from '@/objects/atoms/Background'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility, Dev {
  children?: React.ReactNode
  className?: string
}
