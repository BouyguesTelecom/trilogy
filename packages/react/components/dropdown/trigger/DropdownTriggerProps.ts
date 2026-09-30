import { TouchableOpacity } from 'react-native'
import { Clickable } from '@/interfaces/Clickable'
import { CommonProps } from '@/interfaces/CommonProps'
import { Dev } from '@/interfaces/Dev'
import { ReactNode } from 'react'

/**
 * DropdownTrigger Interface
 */
export interface DropdownTriggerProps extends Clickable, CommonProps, Dev {
  children?: ReactNode
}

export type DropdownTriggerRef = HTMLDivElement
export type DropdownTriggerNativeRef = TouchableOpacity
