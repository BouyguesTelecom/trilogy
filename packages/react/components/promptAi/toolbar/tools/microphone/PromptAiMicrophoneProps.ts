import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiMicrophoneProps extends Accessibility, Dev, CommonProps {
  onSpeechStart?: () => void
  onSpeechResult?: (text: string) => void
  onSpeechEnd?: () => void
  onSpeechError?: (error: string) => void
  language?: string
  disabled?: boolean
}

export type PromptAiMicrophoneRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptAiMicrophoneNativeRef = View
