import { TextareaChangeEvent } from '@/components/textarea/TextareaProps'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { TextInput } from 'react-native'

export interface PromptTextareaProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: (e: TextareaChangeEvent) => void
}

export type PromptTextareaRef = HTMLTextAreaElement
export type PromptTextareaNativeRef = TextInput
