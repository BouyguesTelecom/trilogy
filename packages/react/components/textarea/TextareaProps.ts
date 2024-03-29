import { IconName, IconNameValues } from './../icon/IconNameEnum'
import { Referenceable, ReferenceableNative } from './../../objects/facets/Referenceable'
/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from '../input/InputEnum'
import { TextInput } from 'react-native'
import { IconStatus } from '../icon'
import { Accessibility, TypographyColor, TypographyColorValues } from '../../objects'

export interface TextareaChangeEvent {
  textareaName: string
  textareaValue: string
}

type TextareaChangeEventHandler = (event: TextareaChangeEvent) => void

type TextareaPropsWeb = Accessibility & {
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
  /** @deprecated */
  hovered?: boolean
  /** @deprecated */
  focused?: boolean
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
}

export type TextareaNativeProps = TextareaPropsWeb & ReferenceableNative<TextInput>

/**
 * Textarea Interface
 */
export type TextareaProps = TextareaPropsWeb & Referenceable<HTMLTextAreaElement>
