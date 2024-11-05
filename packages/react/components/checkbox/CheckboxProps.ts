import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility, Dev } from '@/objects'

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
export interface CheckboxProps extends Accessibility, Dev {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string | React.ReactNode
  onClick?: CheckboxClickEventHandler
  onChange?: CheckboxChangeEventHandler
  className?: string
  name?: string
  value?: string
  tile?: boolean
  description?: string | React.ReactNode
  iconTile?: IconName | IconNameValues
  horizontalTile?: boolean
}
