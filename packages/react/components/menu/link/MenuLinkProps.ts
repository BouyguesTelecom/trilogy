import { Accessibility } from '../../../objects/facets/Accessibility'
import { Clickable } from '../../../objects/facets/Clickable'

export interface MenuLinkProps extends Clickable, Accessibility {
  children?: string
  className?: string
  arrow?: boolean
  to?: string
}
