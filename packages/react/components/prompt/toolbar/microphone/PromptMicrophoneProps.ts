import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptMicrophoneProps extends Accessibility, Dev, CommonProps {
  onSpeechStart?: (e: Event) => void
  onSpeechResult?: (text: string) => void
  onSpeechEnd?: (e: Event) => void
  onSpeechError?: (error: string) => void
  language?: string
  disabled?: boolean
}

export type PromptMicrophoneRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptMicrophoneNativeRef = View
