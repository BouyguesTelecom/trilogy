import { Clickable } from '@/objects/facets/Clickable'

/**
 * SegmentedControl Item Interface
 */
export interface SegmentControlItemProps extends Clickable {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  inverted?: boolean
  className?: string
  id?: string
}
