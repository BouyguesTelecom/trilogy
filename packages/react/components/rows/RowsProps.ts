import { CommonProps } from '../../objects/facets/CommonProps'
import { GapSize } from '../../components/columns/ColumnsTypes'
import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Rows Interface
 */
export interface RowsProps extends CommonProps, Dev {
  children?: ReactNode
  gap?: GapSize
}

export type RowsRef = HTMLDivElement
export type RowsNativeRef = View

