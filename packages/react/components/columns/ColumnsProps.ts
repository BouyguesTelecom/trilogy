import {ColumnsSize, GapSize} from './ColumnsTypes'

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: React.ReactNode
  multiline?: boolean
  scrollable?: boolean
  centered?: boolean
  gap?: GapSize
  nbCols?: ColumnsSize
  fullBleed?: boolean
  verticalCentered?: boolean
  className?: string
  mobile?: boolean
}
