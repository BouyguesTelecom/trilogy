import { Accessibility } from '../../objects'

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
