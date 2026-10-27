import { CommonProps } from '@/objects/facets/CommonProps'
import { Switch } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { StatusVariant, StatusVariantValues } from '@/interfaces/status'

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

type SwitchEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends CommonProps, Dev {
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
  status?: StatusVariant | StatusVariantValues
  id?: string
}

export type SwitchRef = HTMLDivElement
export type SwitchNativeRef = Switch
