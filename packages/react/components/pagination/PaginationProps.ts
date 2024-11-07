import { Accessibility, Dev } from '@/objects'
import { Pager } from './PaginationEnum'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility, Dev, CommonProps {
  length: number
  defaultPage?: number
  pageSize?: number
  onClick?: (pager: Pager) => void
  href?: (page: number) => string
}
