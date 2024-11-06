import { Accessibility, Dev } from '@/objects'
import {
  PopoverArrowPosition,
  PopoverArrowPositionValues,
  PopoverDirection,
  PopoverDirectionValues,
} from './PopoverEnum'

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
export interface PopoverWebProps extends PopoverProps, Accessibility, Dev {
  className?: string
}
