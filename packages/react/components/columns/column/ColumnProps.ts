import { ColumnsSize } from '@/components/columns/ColumnsTypes'
import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { AlignableProps } from "@/interfaces/Alignable";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Columns Item Interface
 */
export interface ColumnProps extends AlignableProps, CommonProps, Dev {
  children?: React.ReactNode
  size?: ColumnsSize
  mobileSize?: ColumnsSize
  tabletSize?: ColumnsSize
  touchSize?: ColumnsSize
  desktopSize?: ColumnsSize
  widescreenSize?: ColumnsSize
  fullhdSize?: ColumnsSize
  offset?: ColumnsSize
  mobileOffset?: ColumnsSize
  tabletOffset?: ColumnsSize
  touchOffset?: ColumnsSize
  desktopOffset?: ColumnsSize
  widescreenOffset?: ColumnsSize
  fullhdOffset?: ColumnsSize
  narrow?: boolean
}

export type ColumnRef = HTMLDivElement
export type ColumnNativeRef = View
