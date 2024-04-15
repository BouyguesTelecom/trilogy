import { Accessibility } from '../../../objects/facets/Accessibility'

/**
 * Box Table Container Interface
 */
export interface BoxTableContainerProps extends Accessibility {
  children?: string | React.ReactNode
  className?: string
}
