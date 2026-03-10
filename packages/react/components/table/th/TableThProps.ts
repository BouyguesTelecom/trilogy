import { View } from 'react-native'
import { Clickable, Dev } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TableThProps extends Clickable, CommonProps, Dev {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
}

export type TableThRef = HTMLTableCellElement
export type TableThNativeRef = View
