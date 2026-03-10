import { View } from 'react-native'
import { Clickable, Dev } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TableTdProps extends Clickable, CommonProps, Dev {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
}

export type TableTdRef = HTMLTableCellElement
export type TableTdNativeRef = View
