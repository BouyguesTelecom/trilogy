import { Invertable } from '@/objects/facets/Invertable'
import { StatusProps } from '@/objects/facets/Status'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

export type SwitchEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends StatusProps, Invertable {
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
