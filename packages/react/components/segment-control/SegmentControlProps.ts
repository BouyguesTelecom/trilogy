import { Clickable } from './../../objects/facets/Clickable'
import { Centerable } from '../../objects/facets/Centerable'
import { AlignableProps } from '../../objects/facets/Alignable'
import { JustifiableProps } from '../../objects/facets/Justifiable'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Centerable, AlignableProps, JustifiableProps, Clickable {
  children: React.ReactNode
  disabled?: boolean
  activeIndex?: number
  marginless?: boolean
  inverted?: boolean
  className?: string
}
