import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptMicrophoneProps extends Accessibility, Dev, CommonProps, Clickable {
  disabled?: boolean
  readOnly?: boolean
  isListening?: boolean
}

export type PromptMicrophoneRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptMicrophoneNativeRef = View
