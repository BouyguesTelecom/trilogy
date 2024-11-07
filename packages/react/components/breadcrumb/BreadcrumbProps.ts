import { Accessibility, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Breadcrumb Interface
 */
export interface BreadcrumbProps extends Accessibility, Dev {
  children?: React.ReactNode
}

/**
 * Breadcrumb Web Interface
 */
export interface BreadcrumbWebProps extends BreadcrumbProps, CommonProps {}
