import { Pager } from '@/components/pagination/PaginationEnum'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

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
