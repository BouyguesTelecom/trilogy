import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Rows Interface
 */
export interface RowProps extends CommonProps {
  children?: React.ReactNode
  narrow?: boolean
}

export type RowRef = HTMLDivElement
export type RowNativeRef = View

