import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput } from 'react-native'
import { IconStatus } from '@/components/icon/index'
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
} from '@/components/input/InputEnum'
import { Referenceable, ReferenceableNative } from "@/interfaces/Referenceable";
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

export interface TextareaChangeEvent {
  textareaName: string
  textareaValue: string
}

export type TextareaChangeEventHandler = (event: TextareaChangeEvent) => void

type TextareaPropsWeb = Accessibility &
  Dev & {
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
    autoCompleteType?: InputAutoCompleteType | InputAutoCompleteTypeValues
    textContentType?: InputTextContentType | InputTextContentTypeValues
    keyboardType?: InputKeyboardType | InputKeyboardTypeValues
    minLength?: number
    maxLength?: number
    rows?: number
    label?: string
    iconNameLeft?: IconName | IconNameValues
    iconNameRight?: IconName | IconNameValues
    customHeight?: number
    required?: boolean
    sample?: string
  }

export type TextareaNativeProps = TextareaPropsWeb & ReferenceableNative<TextInput>

/**
 * Textarea Interface
 */
export type TextareaProps = TextareaPropsWeb & Referenceable<HTMLTextAreaElement> & CommonProps

export type TextareaRef = HTMLTextAreaElement
export type TextareaNativeRef = TextInput
