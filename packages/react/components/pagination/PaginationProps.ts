import { Accessibility } from '../../objects/facets/Accessibility'
import { Pager } from './PaginationEnum'

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility {
  count: number
  defaultPage?: number
  pageSize?: number
  onClick?: (pager: Pager) => void
  className?: string
  href?: (page: number) => string
}
