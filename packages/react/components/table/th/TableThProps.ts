import { View } from 'react-native'
import { Clickable } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TableThProps extends Clickable, CommonProps {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
}

export type TableThRef = HTMLTableCellElement
export type TableThNativeRef = View
