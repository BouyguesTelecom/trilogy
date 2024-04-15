import {
  PopoverArrowPosition,
  PopoverArrowPositionValues,
  PopoverDirection,
  PopoverDirectionValues,
} from './PopoverEnum'
import { Accessibility } from '../../objects/facets/Accessibility'

/**
 * Popover Interface
 */
export interface PopoverProps {
  children: React.ReactNode
  direction?: PopoverDirection | PopoverDirectionValues
  active?: boolean
  content?: React.ReactNode
  arrowPosition?: PopoverArrowPosition | PopoverArrowPositionValues
}

/**
 * Popover Web Interface
 */
export interface PopoverWebProps extends PopoverProps, Accessibility {
  className?: string
}
