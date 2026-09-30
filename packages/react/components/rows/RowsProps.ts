import { GapSize } from '@/components/columns/ColumnsTypes'
import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
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
