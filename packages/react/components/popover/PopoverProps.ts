import { Accessibility, Dev } from '../../objects'
import {
  PopoverArrowPosition,
  PopoverArrowPositionValues,
  PopoverDirection,
  PopoverDirectionValues,
} from './PopoverEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { ReactNode } from 'react'
import { View } from 'react-native'

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

export type PopoverRef = HTMLDivElement
export type PopoverNativeRef = View
