import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Referenceable, ReferenceableNative } from '@/objects/facets/Referenceable'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconStatus } from '@/components/icon'
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
import { Accessibility, Dev, TypographyColor, TypographyColorValues } from '@/objects'
import { TextInput } from 'react-native'

export interface TextareaChangeEvent {
  textareaName: string
  textareaValue: string
}

type TextareaChangeEventHandler = (event: TextareaChangeEvent) => void

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
    className?: string
    keyboardStyle?: InputKeyboardAppearance | InputKeyboardAppearanceValues
    autoCapitalize?: InputAutoCapitalize | InputAutoCapitalizeValues
    autoCorrect?: any
    autoCompleteType?: InputAutoCompleteType | InputAutoCompleteTypeValues
    textContentType?: InputTextContentType | InputTextContentTypeValues
    keyboardType?: InputKeyboardType | InputKeyboardTypeValues
    minLength?: number
    maxLength?: number
    dynamicPlaceholder?: boolean
    rows?: number
    label?: string
    iconName?: IconName | IconNameValues
    statusIconName?: IconName | IconNameValues
    typo?: TypographyColor | TypographyColorValues
    customHeight?: number
    required?: boolean
    sample?: string
  }

export type TextareaNativeProps = TextareaPropsWeb & ReferenceableNative<TextInput>

/**
 * Textarea Interface
 */
export type TextareaProps = TextareaPropsWeb & Referenceable<HTMLTextAreaElement>
