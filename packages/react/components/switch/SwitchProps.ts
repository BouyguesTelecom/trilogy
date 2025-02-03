import { CommonProps } from '@/objects/facets/CommonProps'
import { StatusProps } from '@/objects/facets/Status'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

export type SwitchEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends StatusProps, CommonProps {
  checked?: boolean
  onChange?: SwitchEventHandler
  onClick?: SwitchEventHandler
  label?: string
  disabled?: boolean
  readonly?: boolean
  value?: string
  name?: string
  reversed?: boolean
  fullWidth?: boolean
}
