import { ColumnsSize } from './ColumnsTypes'

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: React.ReactNode
  multiline?: boolean
  inlined?: boolean
  centered?: boolean
  gapless?: boolean
  marginSize?: ColumnsSize
  verticalCentered?: boolean
  className?: string
  mobile?: boolean
}
