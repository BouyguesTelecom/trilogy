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
}

export type SelectChangeEventHandler<T = SelectChangeEvent> = (event: T) => void
export type SelectedValue = string | number | string[] | number[] | undefined

export interface SelectProps<T = SelectChangeEvent> extends Accessibility {
  onChange?: SelectChangeEventHandler<T>
  onFocus?: (event: React.FocusEvent | React.BaseSyntheticEvent) => void
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
