import { Accessibility, Dev } from '../../objects'
import {
  PopoverArrowPosition,
  PopoverArrowPositionValues,
  PopoverDirection,
  PopoverDirectionValues,
} from './PopoverEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { ReactNode } from 'react'

/**
 * Popover Interface
 */
export interface PopoverProps {
  children: React.ReactNode
  direction?: PopoverDirection | PopoverDirectionValues
  active?: boolean
  arrowPosition?: PopoverArrowPosition | PopoverArrowPositionValues
  trigger?: ReactNode
}

/**
 * Popover Web Interface
 */
export interface PopoverWebProps extends PopoverProps, Accessibility, Dev, CommonProps {}
