import { Clickable } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * SegmentedControl Item Interface
 */
export interface SegmentControlItemProps extends Clickable, CommonProps {
  children: React.ReactChild
  active?: boolean
  disabled?: boolean
  inverted?: boolean
}
