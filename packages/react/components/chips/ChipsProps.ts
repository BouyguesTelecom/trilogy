import { TouchableOpacity } from 'react-native'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Chips Interface
 */
export interface ChipsProps extends Clickable, Accessibility, Dev, CommonProps {
  children: string | React.ReactNode
  onClick?: ClickEvent
  active?: boolean
  disabled?: boolean
}

export type ChipsRef = HTMLButtonElement
export type ChipsNativeRef = TouchableOpacity
