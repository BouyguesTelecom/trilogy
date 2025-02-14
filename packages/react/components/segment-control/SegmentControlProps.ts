import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { AlignableProps,  } from '@/objects'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Omit<AlignableProps, 'verticalAlign'>, Clickable, CommonProps {
  children: React.ReactNode
  activeIndex?: number
}
