import { Pager } from '@/components/pagination/PaginationEnum'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/dev'

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility, Dev {
  count: number
  defaultPage?: number
  pageSize?: number
  onClick?: (pager: Pager) => void
  className?: string
  href?: (page: number) => string
}
