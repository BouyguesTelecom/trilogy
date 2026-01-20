import { Accessibility, Dev } from '@/objects'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Pager } from './PaginationEnum'

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility, Dev, CommonProps {
  length: number
  defaultPage?: number
  onClick?: (event: Pager & Partial<React.MouseEvent<HTMLAnchorElement>>) => void
  href?: (page: number) => string
}

export type PaginationRef = HTMLElement
export type PaginationNativeRef = View
