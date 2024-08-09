import { Clickable } from '@/objects/facets/Clickable'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Clickable {
  children: React.ReactNode
  disabled?: boolean
  activeIndex?: number
  marginless?: boolean
  inverted?: boolean
  className?: string
}
