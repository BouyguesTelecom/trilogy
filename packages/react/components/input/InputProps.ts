/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInputSubmitEditingEventData, NativeSyntheticEvent } from 'react-native'
import { Accessibility } from '@/objects/facets'

import { IconName, IconNameValues } from '../icon'
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
} from './InputEnum'
import { ReactNode } from "react"

export interface InputChangeEvent {
  inputName: string
  inputValue: string
  inputSelectionStart: number | null
  inputEvent: any
}

export type InputChangeEventHandler = (event: InputChangeEvent) => void

export interface InputKeyboardEvent {
  inputName: string
  inputValue: string
  inputKeyCode: number
  inputEvent: any
  preventDefault: () => void
}

export type InputKeyboardEventHandler = (event: InputKeyboardEvent) => void

export interface InputClickEvent {
  inputName: string
  inputValue: string
  inputEvent: any
}

export type InputClickEventHandler = (event: InputClickEvent) => void

export interface InputNativeEvents {
  onClick?: InputClickEventHandler
  onIconClick?: InputClickEventHandler
  onChange?: InputChangeEventHandler
}

export interface InputWebEvents {
  onChange?: InputChangeEventHandler
  onKeyUp?: InputKeyboardEventHandler
  onKeyPress?: InputKeyboardEventHandler
  onIconClick?: InputClickEventHandler
  onClick?: InputClickEventHandler
}

export type KeyType = 'done' | 'go' | 'next' | 'search' | 'send' | 'none' | 'default'

/**
 * Input Interface
 */
export interface InputProps extends Accessibility {
  type?: InputType | InputTypeValues
  label?: string
  sample?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  disabled?: boolean
  loading?: boolean
  hasIcon?: boolean
  customIcon?: IconName | IconNameValues
  customIconLeft?: IconName | IconNameValues
  customIconRight?: IconName | IconNameValues
  iconClassname?: string
  status?: InputStatus | InputStatusValues
  onStatusChange?: (status: InputStatus | InputStatusValues) => void
  customValidator?: (value: string) => InputStatus | InputStatusValues
  patternValidator?: RegExp
  help?: string | ReactNode
  name?: string
  className?: string
  focused?: boolean
  reference?: any | null
  keyboardStyle?: InputKeyboardAppearance | InputKeyboardAppearanceValues
  autoCapitalize?: InputAutoCapitalize | InputAutoCapitalizeValues
  autoCorrect?: any
  autoCompleteType?: InputAutoCompleteType | InputAutoCompleteTypeValues
  textContentType?: InputTextContentType | InputTextContentTypeValues
  keyboardType?: InputKeyboardType | InputKeyboardTypeValues
  forceControl?: boolean
  onFocus?: (event: React.FocusEvent | React.BaseSyntheticEvent) => void
  onBlur?: (event: unknown) => void
  onMouseEnter?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  keyType?: KeyType
  onSubmit?: (event: NativeSyntheticEvent<TextInputSubmitEditingEventData> | React.FormEvent<HTMLInputElement>) => void
  minLength?: number
  maxLength?: number
  securityGauge?: boolean
  validationRules?: IValidationRules,
  required?: boolean
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
