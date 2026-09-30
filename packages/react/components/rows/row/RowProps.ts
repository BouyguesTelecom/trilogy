import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
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
