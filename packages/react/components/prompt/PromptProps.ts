import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  disabled?: boolean
  readOnly?: boolean
}

export type PromptRef = HTMLFormElement
export type PromptNativeRef = View

export enum PromptStatus {
  STREAMING_ON = 'streaming-on',
  STREAMING_OFF = 'streaming-off',
}
