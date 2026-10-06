import { Fullwidth } from '../../objects/facets/Fullwidth'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

export enum TableBorderEnum {
  ALL = 'all',
  INNER = 'inner',
  LINES = 'lines',
}

export interface TableProps extends Fullwidth, CommonProps, Dev {
  children: ReactNode
  border?: TableBorderEnum
  striped?: boolean
  compact?: boolean
}

export type TableRef = HTMLTableElement
export type TableNativeRef = View
