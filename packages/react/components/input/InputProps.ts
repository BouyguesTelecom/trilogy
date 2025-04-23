/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconName, IconNameValues } from '@/components/icon'
import {
  InputAutoCapitalize,
  InputAutoCapitalizeValues,
  InputAutoCompleteType,
  InputAutoCompleteTypeValues,
  InputKeyboardAppearance,
  InputKeyboardAppearanceValues,
  InputKeyboardType,
  InputKeyboardTypeValues,
  InputStatus,
  InputStatusValues,
  InputTextContentType,
  InputTextContentTypeValues,
  InputType,
  InputTypeValues,
} from '@/components/input/InputEnum'
import { Accessibility, Dev } from '@/objects/facets'
import { CommonProps } from '@/objects/facets/CommonProps'
import { FocusEventHandler } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData } from 'react-native'

export interface InputChangeEventWeb {
  inputName: string
  inputValue: string
  inputSelectionStart: number | null
  target: EventTarget
  event: React.ChangeEvent<HTMLInputElement> | InputChangeEventWeb
}

export interface InputChangeEventNative {
  inputName: string
  inputValue: string
  inputSelectionStart: number | null
}

export type InputChangeEventHandlerWeb = (event: InputChangeEventWeb) => void
export type InputChangeEventHandlerNative = (event: InputChangeEventNative) => void

export interface InputKeyboardEvent {
  inputName: string
  inputValue: string
  inputKeyCode: number
  target?: React.ChangeEvent<HTMLInputElement> | NativeSyntheticEvent<any> | EventTarget
  preventDefault: () => void
}

export type InputKeyboardEventHandler = (event: InputKeyboardEvent) => void

export interface InputClickEvent {
  inputName: string
  inputValue: string
  target?: React.ChangeEvent<HTMLInputElement> | NativeSyntheticEvent<any> | EventTarget
}

export type InputClickEventHandler = (event: InputClickEvent) => void

export interface InputNativeEvents {
  onClick?: InputClickEventHandler
  onIconClick?: InputClickEventHandler
  onChange?: InputChangeEventHandlerNative
  onFocus?: (event: React.BaseSyntheticEvent) => void
  onBlur?: (event: unknown) => void
}

export interface InputWebEvents {
  onChange?: InputChangeEventHandlerWeb
  onKeyUp?: InputKeyboardEventHandler
  onKeyPress?: InputKeyboardEventHandler
  onIconClick?: InputClickEventHandler
  onClick?: InputClickEventHandler
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export type KeyType = 'done' | 'go' | 'next' | 'search' | 'send' | 'none' | 'default'

/**
 * Input Interface
 */
export interface InputProps extends Accessibility, Dev, CommonProps {
  type?: InputType | InputTypeValues
  label?: string
  sample?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  disabled?: boolean
  loading?: boolean
  iconNameLeft?: IconName | IconNameValues
  iconNameRight?: IconName | IconNameValues
  status?: InputStatus | InputStatusValues
  onStatusChange?: (status: InputStatus | InputStatusValues) => void
  customValidator?: (value: string) => InputStatus | InputStatusValues
  patternValidator?: RegExp
  help?: string
  name?: string
  focused?: boolean
  keyboardStyle?: InputKeyboardAppearance | InputKeyboardAppearanceValues
  autoCapitalize?: InputAutoCapitalize | InputAutoCapitalizeValues
  autoCorrect?: any
  autoCompleteType?: InputAutoCompleteType | InputAutoCompleteTypeValues
  textContentType?: InputTextContentType | InputTextContentTypeValues
  keyboardType?: InputKeyboardType | InputKeyboardTypeValues
  forceControl?: boolean
  onMouseEnter?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  keyType?: KeyType
  onSubmit?: (event: NativeSyntheticEvent<TextInputSubmitEditingEventData> | React.FormEvent<HTMLInputElement>) => void
  minLength?: number
  maxLength?: number
  securityGauge?: boolean
  validationRules?: IValidationRules
  required?: boolean
  readOnly?: boolean
  min?: string | number
  max?: string | number
  step?: string | number
}

export interface ILengthVerify {
  min?: number
  max?: number
}

export interface IValidationRules {
  length?: ILengthVerify
  number?: boolean
  uppercase?: boolean
  lowercase?: boolean
  specialChars?: boolean
}

export type InputRef = HTMLInputElement
export type InputNativeRef = TextInput
