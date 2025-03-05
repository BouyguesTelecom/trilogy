import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { TextInput } from 'react-native'

export interface ISelectOption {
  value: string | undefined
  name: string | undefined
  id: string | undefined
}

export interface SelectChangeEvent {
  selectValue?: string
  selectName?: string
  selectId?: string
  name?: string
  selectedOptions?: string[]
}

export type SelectChangeEventHandler<T = SelectChangeEvent> = (event: T) => void
export type SelectedValue = string | number | string[] | undefined
export type ParamEventSelectFocus = React.FocusEvent | React.BaseSyntheticEvent

export interface SelectProps<T = SelectChangeEvent> extends Accessibility, Dev, CommonProps {
  onChange?: SelectChangeEventHandler<T>
  onFocus?: (event: ParamEventSelectFocus) => void
  onBlur?: (event: unknown) => void
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  iconName?: IconName | IconNameValues
  selected?: SelectedValue
  name?: string
  multiple?: boolean
  placeholder?: string
  custom?: boolean
}

export type SelectRef = HTMLSelectElement | HTMLInputElement
export type SelectNativeRef = TextInput
