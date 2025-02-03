import { GapSize } from '@/components/columns/ColumnsTypes'
import { AlignableProps } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'

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
