import { MenuProps } from '../MenuProps'

/**
 * MenuScrolling  Interface
 */
export interface MenuScrollingProps extends MenuProps {
  className?: string
  pulled?: 'left' | 'right'
  hasBackgroundWhite?: boolean
}
