import { Accessibility, Dev } from '@/objects/index'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Pager } from './PaginationEnum'

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility, Dev, CommonProps {
  length: number
  defaultPage?: number
  onClick?: (pager: Pager) => void
  href?: (page: number) => string
}

export type PaginationRef = HTMLElement
export type PaginationNativeRef = View
