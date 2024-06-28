import { Clickable } from '@/objects'

/**
 * SegmentedControl Item Interface
 */
export interface SegmentControlItemProps extends Clickable {
  children: React.ReactChild
  active?: boolean
  disabled?: boolean
  inverted?: boolean
  className?: string
  id?: string
}
