import { TouchableOpacity } from 'react-native'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * DropdownTrigger Interface
 */
export interface DropdownTriggerProps extends Clickable, CommonProps, Dev {
  children?: ReactNode
}

export type DropdownTriggerRef = HTMLDivElement
export type DropdownTriggerNativeRef = TouchableOpacity
