import { GapSize } from '@/components/columns/ColumnsTypes'
import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { AlignableProps } from "@/interfaces/Alignable";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Columns Interface
 */
export interface ColumnsProps extends AlignableProps, CommonProps, Dev {
  children?: React.ReactNode
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
