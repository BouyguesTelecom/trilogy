import { Accessibility, Clickable } from '../../../objects'

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
