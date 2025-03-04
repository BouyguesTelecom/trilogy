import { Fullwidth } from '../../objects/facets/Fullwidth'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'

export enum TableBorderEnum {
  ALL = 'all',
  INNER = 'inner',
  LINES = 'lines',
}

export interface TableProps extends Fullwidth, CommonProps {
  children: React.ReactNode
  border?: TableBorderEnum
  striped?: boolean
  compact?: boolean
}

export type TableRef = HTMLTableElement
export type TableNativeRef = View
