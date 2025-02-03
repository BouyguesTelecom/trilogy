import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * SegmentedControl Item Interface
 */
export interface SegmentControlItemProps extends Clickable, CommonProps {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
}
