import { IconName, IconNameValues } from './../icon/IconNameEnum'
import { Accessibility } from '../../objects'

export interface CheckboxChangeEvent {
  checkboxId: string
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
}

type CheckboxChangeEventHandler = (event: {
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
  checkboxId: string
}) => void

export interface CheckboxClickEvent {
  checkboxId: string
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
}

type CheckboxClickEventHandler = (event: {
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
  checkboxId: string
}) => void

/**
 * Checkbox Interface
 */
export interface CheckboxProps extends Accessibility {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string | React.ReactNode
  /**
   * @deprecated
   */
  labelClassName?: string
  onClick?: CheckboxClickEventHandler
  onChange?: CheckboxChangeEventHandler
  /**
   * @deprecated
   */
  removeControl?: boolean
  /**
   * @deprecated
   */
  removeField?: boolean
  className?: string
  name?: string
  value?: string
  /**
   * @deprecated
   */
  spaced?: boolean
  /**
   * @deprecated
   */
  reversed?: boolean

  /**
   * @deprecated
   */
  inverted?: boolean
  tile?: boolean
  description?: string | React.ReactNode
  iconTile?: IconName | IconNameValues
  horizontalTile?: boolean
}
