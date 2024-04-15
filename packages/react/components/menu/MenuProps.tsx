import { Accessibility } from '../../objects/facets/Accessibility'

/**
 * Menu Interface
 */
export interface MenuProps extends Accessibility {
  children?: React.ReactNode
  className?: string
  notASide?: boolean
  shadowLess?: boolean
}
