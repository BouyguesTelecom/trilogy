import { CommonProps } from '../../objects/facets/CommonProps'
import { GapSize } from '../../components/columns/ColumnsTypes'
import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'

/**
 * Rows Interface
 */
export interface RowsProps extends CommonProps, Dev {
  children?: React.ReactNode
  gap?: GapSize
}

export type RowsRef = HTMLDivElement
export type RowsNativeRef = View

