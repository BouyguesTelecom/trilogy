import { IconName, IconNameValues } from '../../components/icon'
import { Accessibility, Clickable, Dev, Link } from '../../objects/facets'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable, Link, Dev, CommonProps {
  children?: React.ReactNode
  routerLink?: React.ElementType
  iconName?: IconName | IconNameValues
  inline?: boolean
  inverted?: boolean
  blank?: boolean
  title?: string
}
