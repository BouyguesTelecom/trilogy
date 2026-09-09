import { View } from 'react-native'
import { Pager } from '@/components/pagination/PaginationEnum'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Pagination Interface
 */
export interface PaginationProps extends Accessibility, Dev, CommonProps {
  length: number
  defaultPage?: number
  onClick?: (event: Pager & React.MouseEvent<HTMLAnchorElement>) => void
  href?: (page: number) => string
}

export interface PaginationNativeProps extends Omit<PaginationProps, 'onClick'> {
  onClick?: (event: Pager) => void
}

export type PaginationRef = HTMLElement
export type PaginationNativeRef = View
