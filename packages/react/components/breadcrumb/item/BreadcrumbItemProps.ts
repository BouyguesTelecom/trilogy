import { Accessibility } from '../../../objects/facets/Accessibility'
import { Clickable } from '../../../objects/facets/Clickable'

export interface BreadcrumbItemProps extends Accessibility, Clickable {
  children?: string
  active?: boolean
  to?: string
}

/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemPropsWeb extends Accessibility, Clickable, BreadcrumbItemProps {
  href?: string
  className?: string
  routerLink?: React.ElementType
}
