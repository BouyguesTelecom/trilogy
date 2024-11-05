import { Accessibility } from '@/objects'

type CheckboxChangeEventHandler = (event: {
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
  checkboxId: string
}) => void

/**
 * Checkbox Interface
 */
export interface CheckboxProps extends Accessibility {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string
  onChange?: CheckboxChangeEventHandler
  className?: string
  name?: string
  value?: string
}
