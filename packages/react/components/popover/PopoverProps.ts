import {
  PopoverArrowPosition,
  PopoverArrowPositionValues,
  PopoverDirection,
  PopoverDirectionValues,
} from '@/components/popover/PopoverEnum'
import { ReactNode } from 'react'
import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

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
