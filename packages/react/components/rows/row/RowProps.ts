import { View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Rows Interface
 */
export interface RowProps extends CommonProps, Dev {
  children?: ReactNode
  narrow?: boolean
}

export type RowRef = HTMLDivElement
export type RowNativeRef = View

