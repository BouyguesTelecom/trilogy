import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiTextareaProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  placeholder?: string
}

export type PromptAiTextareaRef = HTMLTextAreaElement
export type PromptAiTextareaNativeRef = View
