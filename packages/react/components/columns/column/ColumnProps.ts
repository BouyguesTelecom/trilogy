import { ColumnsSize } from '@/components/columns/ColumnsTypes'
import { AlignableProps } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Columns Item Interface
 */
export interface ColumnProps extends AlignableProps, CommonProps {
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
