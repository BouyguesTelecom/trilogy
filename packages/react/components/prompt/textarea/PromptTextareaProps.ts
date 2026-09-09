import { TextareaChangeEvent } from '@/components/textarea/TextareaProps'
import { TextInput } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface PromptTextareaProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: (e: TextareaChangeEvent) => void
  disabled?: boolean
  readOnly?: boolean
}

export type PromptTextareaRef = HTMLTextAreaElement
export type PromptTextareaNativeRef = TextInput
