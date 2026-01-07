import { TextareaChangeEventHandler } from '@/components/textarea/TextareaProps'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiTextareaProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: TextareaChangeEventHandler
}

export type PromptAiTextareaRef = HTMLTextAreaElement
export type PromptAiTextareaNativeRef = View
