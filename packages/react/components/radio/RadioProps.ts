import { TouchableOpacity } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

interface EventHandler {
  radioValue: string
  radioName: string
  radioChecked: boolean
  radioId: string
}

export type RadioChangeEventHandler = (event: EventHandler & Partial<React.ChangeEvent<HTMLInputElement>>) => void
export type RadioChangeEventHandlerNative = (event: EventHandler) => void

/**
 * radio Interface
 */
export interface RadioProps extends Accessibility, CommonProps, Dev {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  label?: string
  onChange?: RadioChangeEventHandler
  name?: string
  value?: string
  required?: boolean
}

export interface RadioNativeProps extends Omit<RadioProps, 'onChange'> {
  onChange?: RadioChangeEventHandlerNative
}

export type RadioRef = HTMLDivElement
export type RadioNativeRef = TouchableOpacity
