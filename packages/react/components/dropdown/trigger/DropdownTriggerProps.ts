import { TouchableOpacity, View } from 'react-native'
import { Clickable } from '../../../objects/facets/Clickable'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '../../../objects/facets/Dev'

/**
 * DropdownTrigger Interface
 */
export interface DropdownTriggerProps extends Clickable, CommonProps, Dev {
  children?: React.ReactNode
}

export type DropdownTriggerRef = HTMLDivElement
export type DropdownTriggerNativeRef = TouchableOpacity
