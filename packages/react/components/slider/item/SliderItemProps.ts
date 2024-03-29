import { Accessibility } from '../../../objects'
import { ColumnsSize } from '../../columns/ColumnsTypes'

/**
 * Slider Step Interface
 */
export interface SliderItemProps extends Accessibility {
  children?: React.ReactNode
  active?: boolean
  className?: string
  size?: ColumnsSize
}
