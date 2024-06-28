import { ColumnsSize } from './ColumnsTypes'
import { Marginless } from "@/objects"

/**
 * Columns Interface
 */
export interface ColumnsProps extends Marginless{
  children?: React.ReactNode
  multiline?: boolean
  inlined?: boolean
  centered?: boolean
  gapless?: boolean
  marginSize?: ColumnsSize
  verticalCentered?: boolean
  className?: string
  mobile?: boolean
  flex?: boolean | number // voir android
}
