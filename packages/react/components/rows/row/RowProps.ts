import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Rows Interface
 */
export interface RowProps extends CommonProps, Dev {
  children?: React.ReactNode
  narrow?: boolean
}

export type RowRef = HTMLDivElement
export type RowNativeRef = View

