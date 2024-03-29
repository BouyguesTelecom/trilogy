import { Accessibility } from '../../../objects'

/**
 * SubMenuItem Interface
 */
export interface SubMenuItem {
  children?: React.ReactNode
}

/**
 * SubMenuItem Web Interface
 */
export interface SubMenuItemWebProps extends SubMenuItem, Accessibility {
  className?: string
}
