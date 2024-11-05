import { Accessibility } from '@/objects'

type RadioChangeEventHandler = (event: {
  radioValue: string
  radioName: string
  radioChecked: boolean
  radioId: string
}) => void

/**
 * radio Interface
 */
export interface RadioProps extends Accessibility {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string
  onChange?: RadioChangeEventHandler
  className?: string
  name?: string
  value?: string
}
