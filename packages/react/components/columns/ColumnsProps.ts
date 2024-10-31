import { GapSize } from './ColumnsTypes'
import {Alignable, AlignableValues} from "@/objects"

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: React.ReactNode
  multiline?: boolean
  scrollable?: boolean
  centered?: boolean
  gap?: GapSize
  fullBleed?: boolean
  className?: string
  mobile?: boolean
  verticalAlign?: Alignable | AlignableValues
}
