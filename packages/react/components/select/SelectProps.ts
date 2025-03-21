import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { TextInput } from 'react-native'
import { SelectStatus, SelectStatusValues } from './SelectEnum'

export interface ISelectOption {
  value: string | undefined
  name: string | undefined
  id: string | undefined
}

export interface SelectChangeEventNative {
  selectValue?: string
  selectName?: string
  selectId?: string
  name?: string
  selectedOptions?: string[]
}

export interface SelectChangeEvent extends SelectChangeEventNative {
  target: EventTarget & HTMLSelectElement
}

export type SelectChangeEventHandler<T = SelectChangeEvent> = (event: T) => void
export type SelectNativeChangeEventHandler<T = SelectChangeEventNative> = (event: T) => void

export type SelectedValue = string | number | string[] | undefined
export type ParamEventSelectFocus = React.FocusEvent | React.BaseSyntheticEvent
export type SelectRef = HTMLSelectElement | HTMLInputElement
export type SelectNativeRef = TextInput

interface Props {
  onFocus?: (event: ParamEventSelectFocus) => void
  onBlur?: React.FocusEventHandler<HTMLSelectElement | HTMLInputElement> | ((event: unknown) => void)
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  iconName?: IconName | IconNameValues
  selected?: SelectedValue
  name?: string
  multiple?: boolean
  placeholder?: string
  custom?: boolean
  status?: SelectStatus | SelectStatusValues
}

export interface SelectProps<T = SelectChangeEvent> extends Accessibility, Dev, CommonProps, Props {
  onChange?: SelectChangeEventHandler<T>
}

export interface SelectNativeProps<T = SelectChangeEventNative> extends Accessibility, Dev, CommonProps, Props {
  onChange?: SelectNativeChangeEventHandler<T>
}
