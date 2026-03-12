import { GapSize } from '@/components/columns/ColumnsTypes'
import { Dev } from '@/objects/facets/Dev'
import { AlignableProps } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

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
