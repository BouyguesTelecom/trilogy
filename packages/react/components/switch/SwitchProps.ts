import { StatusProps } from '@/objects/facets/Status'
import { Invertable } from '@/objects/facets/Invertable'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

type SwitchEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends StatusProps, Invertable, CommonProps {
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
