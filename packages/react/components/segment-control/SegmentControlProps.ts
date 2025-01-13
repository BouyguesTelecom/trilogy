import { Alignable, AlignableValues } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Clickable, CommonProps {
  children: React.ReactNode
  activeIndex?: number
  align?: Alignable | AlignableValues
}
