import { Accessibility, Dev } from '@/objects'
import { Pager } from './PaginationEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { type View } from 'react-native'

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

export type PaginationRef = HTMLElement
export type PaginationNativeRef = View
