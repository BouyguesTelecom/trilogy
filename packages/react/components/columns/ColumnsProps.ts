import { GapSize } from '@/components/columns/ColumnsTypes'
import { AlignableProps } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { type View } from 'react-native'

/**
 * Columns Interface
 */
export interface ColumnsProps extends AlignableProps, CommonProps {
  children?: React.ReactNode
  multiline?: boolean
  scrollable?: boolean
  gap?: GapSize
  fullBleed?: boolean
  mobile?: boolean
  marginless?: boolean
}

export type ColumnsRef = HTMLDivElement
export type ColumnsNativeRef = View
