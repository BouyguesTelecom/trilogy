import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'

/**
 * Box Table Container Interface
 */
export interface BoxTableContainerProps extends Accessibility, Dev {
  children?: string | React.ReactNode
  className?: string
}
