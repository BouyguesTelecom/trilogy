import { GapSize } from '@/components/columns/ColumnsTypes'
import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev"
import { AlignableProps } from "@/interfaces/Alignable"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

/**
 * Columns Interface
 */
export interface ColumnsProps extends AlignableProps, CommonProps, Dev {
  children?: ReactNode
  multiline?: boolean
  scrollable?: boolean
  gap?: GapSize
  fullBleed?: boolean
  mobile?: boolean
  marginless?: boolean
  fullheight?: boolean
}

export type ColumnsRef = HTMLDivElement
export type ColumnsNativeRef = View
