import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'

/**
 * Breadcrumb Interface
 */
export interface BreadcrumbProps extends Accessibility, Dev {
  children?: React.ReactNode
}

/**
 * Breadcrumb Web Interface
 */
export interface BreadcrumbWebProps extends BreadcrumbProps {
  className?: string
}
