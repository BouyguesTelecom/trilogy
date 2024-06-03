import { Accessibility } from '../../objects'
import { IconName, IconNameValues } from '../icon'

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
  selectedOptions?: (string | number)[]
}

export type SelectChangeEventHandler<T = SelectChangeEvent | number | string> = (event: T) => void
export type SelectedValue = string | number | string[] | number[] | undefined
export type ParamEventSelectFocus = React.FocusEvent | React.BaseSyntheticEvent

export interface SelectProps<T = SelectChangeEvent | number | string> extends Accessibility {
  onChange?: SelectChangeEventHandler<T>
  onFocus?: (event: ParamEventSelectFocus) => void
  onBlur?: (event: unknown) => void
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  iconName?: IconName | IconNameValues
  selected?: SelectedValue
  id?: string
  name?: string
  multiple?: boolean
  className?: string
  nullable?: boolean
  placeholder?: string
  native?: boolean
}
