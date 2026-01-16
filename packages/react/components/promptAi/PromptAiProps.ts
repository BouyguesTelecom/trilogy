import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}

export type PromptAiRef = HTMLFormElement
export type PromptAiNativeRef = View

export enum PromptAiStatus {
  STREAMING_ON = 'streaming-on',
  STREAMING_OFF = 'streaming-off',
}
