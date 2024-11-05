import { ColumnsSize, GapSize } from './ColumnsTypes'
import { AlignableProps } from '@/objects'

/**
 * Columns Interface
 */
export interface ColumnsProps extends AlignableProps {
  children?: React.ReactNode
  multiline?: boolean
  scrollable?: boolean
  gap?: GapSize
  fullBleed?: boolean
  marginSize?: ColumnsSize
  className?: string
  mobile?: boolean
}
