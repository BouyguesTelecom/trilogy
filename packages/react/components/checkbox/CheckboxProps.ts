import { Accessibility } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

type CheckboxChangeEventHandler = (event: {
  checkboxValue: string
  checkboxName: string
  checkboxChecked: boolean
  checkboxId: string
}) => void

/**
 * Checkbox Interface
 */
export interface CheckboxProps extends Accessibility, CommonProps {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  label?: string
  onChange?: CheckboxChangeEventHandler
  name?: string
  value?: string
}
