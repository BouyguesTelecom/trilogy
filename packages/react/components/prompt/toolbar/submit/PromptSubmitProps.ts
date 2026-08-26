import { View } from 'react-native'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export enum PromptSubmitStatus {
  STREAMING_ON = 'streaming-on',
  STREAMING_OFF = 'streaming-off',
}

export interface PromptSubmitProps extends Accessibility, Dev, CommonProps {
  status?: PromptSubmitStatus
  onSubmit?: ClickEvent
  onCancelSubmit?: ClickEvent
  disabled?: boolean
  readOnly?: boolean
}

export type PromptSubmitRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptSubmitNativeRef = View
