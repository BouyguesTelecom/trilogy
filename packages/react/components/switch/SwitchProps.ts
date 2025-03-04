import { StatusProps } from '../../objects/facets/Status'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Switch } from 'react-native'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

type SwitchEventHandler = (event: SwitchChangeEvent) => void

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

export type SwitchRef = HTMLDivElement
export type SwitchNativeRef = Switch
