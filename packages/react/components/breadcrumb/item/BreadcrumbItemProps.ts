import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'

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
