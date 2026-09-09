import { TouchableOpacity, View } from 'react-native'
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * DropdownTrigger Interface
 */
export interface DropdownTriggerProps extends Clickable, CommonProps, Dev {
  children?: React.ReactNode
}

export type DropdownTriggerRef = HTMLDivElement
export type DropdownTriggerNativeRef = TouchableOpacity
