import { CommonProps } from '@/objects/facets/CommonProps'
import { GapSize } from '@/components/columns/ColumnsTypes'

/**
 * Rows Interface
 */
export interface RowsProps extends CommonProps {
  children?: React.ReactNode
  gap?: GapSize
}
