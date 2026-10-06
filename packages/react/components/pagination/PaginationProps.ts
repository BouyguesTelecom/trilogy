import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Pager } from '@/components/pagination/PaginationEnum'
import { MouseEvent as ReactMouseEvent } from 'react'

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility, Dev, CommonProps {
  length: number
  defaultPage?: number
  onClick?: (event: Pager & ReactMouseEvent<HTMLAnchorElement>) => void
  href?: (page: number) => string
}

export interface PaginationNativeProps extends Omit<PaginationProps, 'onClick'> {
  onClick?: (event: Pager) => void
}

export type PaginationRef = HTMLElement
export type PaginationNativeRef = View
