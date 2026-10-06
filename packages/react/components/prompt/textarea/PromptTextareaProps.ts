import { TextareaChangeEvent } from '@/components/textarea/TextareaProps'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { TextInput } from 'react-native'
import { ReactNode } from 'react'

export interface PromptTextareaProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  placeholder?: string
  value?: string
  onChange?: (e: TextareaChangeEvent) => void
  disabled?: boolean
  readOnly?: boolean
}

export type PromptTextareaRef = HTMLTextAreaElement
export type PromptTextareaNativeRef = TextInput
