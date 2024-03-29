import { IconName, IconNameValues } from '../icon'
import { Accessibility } from '../../objects'

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

export type SelectChangeEventHandler<T = SelectChangeEvent | number | string> = (event: T) => void

interface ISelectCommunProps<T = SelectChangeEvent | number | string> {
  onChange?: SelectChangeEventHandler<T>
  onFocus?: (event: React.FocusEvent | React.BaseSyntheticEvent) => void
  onBlur?: (event: React.FocusEvent | React.BaseSyntheticEvent | MouseEvent) => void
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  iconName?: IconName | IconNameValues
  selected?: string | number
  styled?: boolean
  id?: string
  name?: string
}

export interface SelectProps extends Accessibility, ISelectCommunProps {
  className?: string
  classNameOptions?: string
  nullable?: boolean
  onMouseEnter?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  placeholder?: string
  native?: boolean
}

export interface IAccessibleSelect extends Accessibility, ISelectCommunProps {
  selecteClasses?: string
}

export interface ICustomSelect extends Accessibility, ISelectCommunProps {
  selecteClasses?: string
  nullable?: boolean
  classNameOptions?: string
}
