import { IconName, IconNameValues } from '../../components/icon'
import { Accessibility, Clickable, Dev } from '../../objects/facets'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable, Dev, CommonProps {
  children?: React.ReactNode
  to?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconName | IconNameValues
  inline?: boolean
  inverted?: boolean
  blank?: boolean
}
