import { StickyPositionValues, StickyPosition } from '../../objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Sticky Interface
 */
export interface StickyProps extends CommonProps {
  children?: React.ReactNode
  sticky?: StickyPosition | StickyPositionValues
}
