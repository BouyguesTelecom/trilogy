import { IconName, IconNameValues } from '../../components/icon/IconNameEnum'
import { Referenceable, ReferenceableNative } from '../../objects/facets/Referenceable'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconStatus } from '../../components/icon'
import {
  InputAutoCapitalize,
  InputAutoCapitalizeValues,
  InputKeyboardAppearance,
  InputKeyboardAppearanceValues,
  InputKeyboardType,
  InputKeyboardTypeValues,
  InputStatus,
  InputStatusValues,
  InputTextContentType,
  InputTextContentTypeValues,
} from '../../components/input/InputEnum'
import { Accessibility, Dev } from '../../objects'
import { TextInput, TextInputProps } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { HTMLInputAutoCompleteAttribute } from 'react'

export interface TextareaChangeEvent {
  textareaName: string
  textareaValue: string
}

type TextareaChangeEventHandler = (event: TextareaChangeEvent) => void

interface Textarea extends Accessibility, Dev {
  placeholder?: string
  defaultValue?: string
  value?: string
  disabled?: boolean
  onChange?: TextareaChangeEventHandler
  status?: InputStatus | InputStatusValues | IconStatus
  help?: string
  /** @deprecated */
  name?: string
  keyboardStyle?: InputKeyboardAppearance | InputKeyboardAppearanceValues
  autoCapitalize?: InputAutoCapitalize | InputAutoCapitalizeValues
  autoCorrect?: any
  textContentType?: InputTextContentType | InputTextContentTypeValues
  keyboardType?: InputKeyboardType | InputKeyboardTypeValues
  minLength?: number
  maxLength?: number
  dynamicPlaceholder?: boolean
  rows?: number
  label?: string
  iconNameLeft?: IconName | IconNameValues
  iconNameRight?: IconName | IconNameValues
  customHeight?: number
  required?: boolean
  sample?: string
}

export interface TextareaNativeProps extends Textarea, ReferenceableNative<TextInput> {
  autoCompleteType?: TextInputProps['autoComplete']
}

/**
 * Textarea Interface
 */
export interface TextareaProps extends Textarea, Referenceable<HTMLTextAreaElement>, CommonProps {
  autoCompleteType?: HTMLInputAutoCompleteAttribute
}

export type TextareaRef = HTMLTextAreaElement
export type TextareaNativeRef = TextInput
