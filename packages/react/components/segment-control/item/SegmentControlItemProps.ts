import { Clickable } from '../../../objects/facets/Clickable'

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
