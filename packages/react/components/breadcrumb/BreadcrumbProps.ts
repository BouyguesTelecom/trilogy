import { Accessibility, Dev } from '@/objects'

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
