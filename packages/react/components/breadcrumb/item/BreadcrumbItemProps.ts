import { Accessibility, Clickable, Dev } from '@/objects'

export interface BreadcrumbItemProps extends Accessibility, Clickable, Dev {
  children?: string
  active?: boolean
  to?: string
}

/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemPropsWeb extends Accessibility, Clickable, BreadcrumbItemProps, Dev {
  href?: string
  className?: string
  routerLink?: React.ElementType
}
