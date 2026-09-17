import { Switch } from 'react-native'
import { StatusProps } from "@/interfaces/Status";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface SwitchChangeEvent {
  switchState: boolean
  switchName: string
}

type SwitchEventHandler = (event: SwitchChangeEvent) => void

export interface SwitchProps extends StatusProps, CommonProps, Dev {
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
