import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import {
  PopoverArrowPosition,
  PopoverArrowPositionValues,
  PopoverDirection,
  PopoverDirectionValues,
} from '@/components/popover/PopoverEnum'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'
import { View } from 'react-native'

/**
 * Popover Interface
 */
export interface PopoverProps {
  children: ReactNode
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
