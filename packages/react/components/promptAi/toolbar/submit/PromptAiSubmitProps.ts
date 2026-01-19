import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export enum PromptAiSubmitStatus {
  STREAMING_ON = 'streaming-on',
  STREAMING_OFF = 'streaming-off',
}

export interface PromptAiSubmitProps extends Accessibility, Dev, CommonProps {
  status?: PromptAiSubmitStatus
  onSubmit?: ClickEvent
  onCancelSubmit?: ClickEvent
}

export type PromptAiSubmitRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptAiSubmitNativeRef = View
