import { Accessibility } from '../../objects/facets/Accessibility'

/**
 * Breadcrumb Interface
 */
export interface BreadcrumbProps extends Accessibility {
  children?: React.ReactNode
}

/**
 * Breadcrumb Web Interface
 */
export interface BreadcrumbWebProps extends BreadcrumbProps {
  className?: string
}
