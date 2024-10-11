import { ColumnsSize } from './ColumnsTypes'

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: React.ReactNode
  multiline?: boolean
  scrollable?: boolean
  centered?: boolean
  gapless?: boolean
  gap?: ColumnsSize
  nbCols?: ColumnsSize
  fullBleed?: boolean
  marginSize?: ColumnsSize
  verticalCentered?: boolean
  className?: string
  mobile?: boolean
}
