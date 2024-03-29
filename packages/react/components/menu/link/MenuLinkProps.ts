import { Accessibility, Clickable } from '../../../objects'

export interface MenuLinkProps extends Clickable, Accessibility {
  children?: string
  className?: string
  arrow?: boolean
  to?: string
}
