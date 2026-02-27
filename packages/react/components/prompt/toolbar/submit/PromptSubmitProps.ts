import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

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
