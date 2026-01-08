import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export enum PromptAiSubmitStatus {
  STREAMING_ON = 'streaming-on',
  STREAMING_OFF = 'streaming-off',
}

export interface PromptAiSubmitProps extends Accessibility, Dev, CommonProps {
  iconName?: IconName | IconNameValues
  status?: PromptAiSubmitStatus
}

export type PromptAiSubmitRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptAiSubmitNativeRef = View
