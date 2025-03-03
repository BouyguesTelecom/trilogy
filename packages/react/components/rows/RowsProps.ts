import { CommonProps } from '../../objects/facets/CommonProps'
import { GapSize } from '../../components/columns/ColumnsTypes'
import { type View } from 'react-native'

/**
 * Rows Interface
 */
export interface RowsProps extends CommonProps {
  children?: React.ReactNode
  gap?: GapSize
}

export type RowsRef = HTMLDivElement
export type RowsNativeRef = View

