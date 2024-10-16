import { ColumnsSize, ColumnsGap } from './ColumnsTypes'

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: React.ReactNode
  multiline?: boolean
  scrollable?: boolean
  centered?: boolean
  gap?: ColumnsGap
  nbCols?: ColumnsSize
  fullBleed?: boolean
  marginSize?: ColumnsSize
  verticalCentered?: boolean
  className?: string
  mobile?: boolean
}
