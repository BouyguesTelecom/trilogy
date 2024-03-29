import { AlertProps } from '../../objects/facets/Alert'
import { Invertable } from '../../objects/facets/Invertable'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

type SwitchEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends AlertProps, Invertable {
  checked?: boolean
  onChange?: SwitchEventHandler
  onClick?: SwitchEventHandler
  label?: string
  disabled?: boolean
  readonly?: boolean
  className?: string
  id?: string
  value?: string
  name?: string
  reversed?: boolean
}
